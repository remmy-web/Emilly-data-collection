from django.urls import path
from .views import OnionRetailSurveyCreateView

urlpatterns = [
    path('add/',OnionRetailSurveyCreateView.as_view(),name="add_survey_data")
]
