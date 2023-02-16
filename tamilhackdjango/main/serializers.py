from rest_framework import serializers
from .models import *


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = "__all__"


class OrganSerializer(serializers.ModelSerializer):
    class Meta:
        model = organwise
        fields = "__all__"


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = news
        fields = "__all__"
