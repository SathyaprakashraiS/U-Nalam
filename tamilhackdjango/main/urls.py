from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("disease-list/", views.Adiseases, name="alldiseasedata"),
    path("organ-list/", views.organView, name="orgs"),
    path("news-list/", views.newsView, name="orgs"),
    path("disease-list/<name>/", views.Lookseases, name="noo"),
    path("diseasebysymp-list/<str:symp>/",views.desbysymp, name="diseaseby symptoms list"),
    path("analysenews",views.analysenews,name="analysethenews"),
]
