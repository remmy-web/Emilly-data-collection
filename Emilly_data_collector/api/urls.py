from django.urls import path
from . import views

urlpatterns = [
    path('add/',views.OnionRetailSurveyCreateView.as_view(),name="add_survey_data"),
    path('get/',views.view_survey_data,name="get_survey_data"),
    path('download_data/', views.download_survey_data,name="download_survey_data")
]
