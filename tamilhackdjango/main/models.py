from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
#from googletrans import Translator


# Create your models here.
class Disease(models.Model):
    name = models.CharField(max_length=200, default='disease name')
    tname = models.CharField(max_length=200, default='நோய் பெயர்')
    about = models.TextField(max_length=1000, default="about")
    symptoms1 = models.TextField(max_length=1000, default='symp')
    symptoms2 = models.TextField(max_length=1000, default='symp')
    symptoms3 = models.TextField(max_length=1000, default='symp')
    symptoms4 = models.TextField(max_length=1000, default='symp')
    symptoms = models.TextField(max_length=1000, default='symp')
    casuedby = models.TextField(max_length=1000, default="causes")
    severity = models.IntegerField(default=1, validators=[MaxValueValidator(3), MinValueValidator(1)])
    doctorneed = models.BooleanField(default=False)
    inheritance = models.BooleanField(default=False)
    cure = models.CharField(max_length=1000, default="cures")
    suggestmedication = models.BooleanField(default=False)
    medication = models.CharField(max_length=1000, default="medication")
    part_affected1 = models.CharField(max_length=50, default="whole body")
    part_affected2 = models.CharField(max_length=50, default="whole body")
    part_affected3 = models.CharField(max_length=50, default="whole body")
    part_affected4 = models.CharField(max_length=50, default="whole body")
    bedrestrequirement = models.BooleanField(default=True)
    bedrestrequirementdays = models.IntegerField(default=1)
    causes = models.CharField(max_length=1000, default="tiredness")

    def __str__(self):
        return str(self.name)


class organwise(models.Model):
    organ = models.CharField(max_length=100, default="organ_name")
    img_link = models.URLField()
    about = models.TextField(max_length=1000)
    diseases = models.TextField(max_length=1000)

    def __str__(self):
        return str(self.organ)


class news(models.Model):
    title = models.CharField(max_length=200, default="title")
    tag = models.CharField(max_length=20, default="keyword")
    art_link = models.URLField()
    img_link = models.URLField()
    desc = models.TextField(max_length=500)
    content=models.CharField(max_length=10000,default="general")
    newslabel=models.CharField(max_length=100,default="general")


class labels(models.Model):
    labelnames=models.CharField(max_length=1000,default="general")

class medicine(models.Model):
    medname=models.CharField(max_length=1000,default="medicine name")
    nednamet=models.CharField(max_length=1000,default="மருந்து பெயர்")

