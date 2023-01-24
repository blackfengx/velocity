from django.urls import path

#import a view
from .views import api_list_appointments, api_list_technician

urlpatterns = [
    path("service/", api_list_appointments, name="api_list_appointments"),
    path("technicians/", api_list_technician, name="api_list_technician"),
]
