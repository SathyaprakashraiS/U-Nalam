from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import *
from .forms import *

from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from difflib import SequenceMatcher

#import easyocr
# import wikipedia
# from translate import Translator


def home(request):
    qwe = "book"
    # translator=Translator(to_lang="ta")
    # res=translator.translate(qwe,dest="ta")
    res = "testing0"
    return render(request, "home.html", {"res": res, "qwe": qwe})


def analysenews(request):
    qwe = "book"
    # translator=Translator(to_lang="ta")
    # res=translator.translate(qwe,dest="ta")
    res = "testing0"
    changelabel="general"
    alllabels=[]
    labeldata=labels.objects.all()
    for i in labeldata:
        alllabel.append(i.labelnames)
    for i in news:
        flag=0
        changelabel="general"
        temp=i.content
        tokentemp=temp.split(" ")
        for j in tokentemp:
            for k in alllabel:
                if(SequenceMatcher(None,j,k).ratio() >= 0.55):
                    changelabel+=k
                    flag+=1
                    news.objects.create(title=i.title,tag=i.tag,art_link=i.art_link,img_link=i.img_link,desc=i.desc,content=i.content,newslabel=changelabel)
        if(flag!=0):
            news.objects.all().filter(pk=i.id).delete()
    return render(request,"home.html",{"res":res,"qwe":qwe})

def medanalyse(request):
    qwe="asd"
    res="wer"
    return render(request,"home.html",{"res":res,"qwe":qwe})


'''
translator= Translator(to_lang="ta")
    
    wikipedia.set_lang("en")
    result1 = query
    result2 = wikipedia.summary(cause_query,sentences=2)
    result3 = wikipedia.summary(symp_query,sentences=2)
    result4 = wikipedia.search(rel_dis,results=5)
    translation4=[]
    translation1 = translator.translate(result1)
    translation2 = translator.translate(result2)
    translation3 = translator.translate(result3)
'''

# API


@api_view(['GET'])
def Adiseases(request):
    diseases = Disease.objects.all()
    serializer = DiseaseSerializer(diseases, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def Lookseases(request, name):
    data = request.data
    adiseases = Disease.objects.all()
    #SequenceMatcher(None, a, b).ratio()
    #diseases = Disease.objects.get(name=name)
    diseases = []
    for i in adiseases:
        print("the name:", name, "compname", i.name)
        print(SequenceMatcher(None, name, i.name).ratio())
        if (SequenceMatcher(None, name, i.name).ratio() >= 0.6 or SequenceMatcher(None, name, i.tname).ratio() >= 0.55):
            diseases = Disease.objects.get(pk=i.id)
            print("disease in list", diseases)
            print("the name:", name, "compname", i.name)
    seri = DiseaseSerializer(diseases, many=False)
    return Response(seri.data)
# def Lookseases(request, name):
#     data = request.data
#     diseases = Disease.objects.get(name=name)
#     seri = DiseaseSerializer(diseases, many=False)
#     return Response(seri.data)


@api_view(['GET'])
def organView(request):
    orgs = organwise.objects.all()
    seri = OrganSerializer(orgs, many=True)
    return Response(seri.data)


@api_view(['GET'])
def newsView(request):
    new = news.objects.all()
    seri = NewsSerializer(new, many=True)
    return Response(seri.data)


@api_view(['GET'])
def desbysymp(request, symp):
    adiseases = Disease.objects.all()
    print("symp sent:", symp)
    for i in adiseases:
        flag = 0
        t0 = i.symptoms.lower()
        t1 = i.symptoms1.lower()
        t2 = i.symptoms2.lower()
        t3 = i.symptoms3.lower()
        t4 = i.symptoms4.lower()
        try:
            symp = symp.lower()
        except:
            symp = str(symp)
        print(symp, " ", t0)
        print(symp, " ", t1)
        print(symp, " ", t2)
        print(symp, " ", t3)
        print(symp, " ", t4)
        if (SequenceMatcher(None,symp,t0).ratio() >= 0.6):
            flag += 1
        if (SequenceMatcher(None,symp,t1).ratio() >= 0.6):
            flag += 1
        if (SequenceMatcher(None,symp,t2).ratio() >= 0.6):
            flag += 1
        if (SequenceMatcher(None,symp,t3).ratio() >= 0.6):
            flag += 1
        if (SequenceMatcher(None,symp,t4).ratio() >= 0.6):
            flag += 1
        if (flag < 1):
            adiseases = adiseases.exclude(pk=i.id)
        print("dtname:", i.tname)
    serializer = DiseaseSerializer(adiseases, many=True)
    return Response(serializer.data)
