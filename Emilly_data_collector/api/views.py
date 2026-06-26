from Edc.models import OnionRetailSurvey
from rest_framework.generics import CreateAPIView, ListCreateAPIView
from .serializers import OnionRetailSurveySerializer


class OnionRetailSurveyCreateView(ListCreateAPIView):
    queryset = OnionRetailSurvey.objects.all()
    serializer_class = OnionRetailSurveySerializer