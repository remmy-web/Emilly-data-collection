from rest_framework import serializers
from Edc.models import OnionRetailSurvey


class OnionRetailSurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = OnionRetailSurvey
        fields = "__all__"