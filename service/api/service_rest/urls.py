from django.urls import path

from .views import (
    api_list_appointments,
    api_list_technician,
    api_get_appointment,
    api_get_technician,
)

urlpatterns = [
    path("service/", api_list_appointments, name="api_list_appointments"),
    path("technicians/", api_list_technician, name="api_list_technician"),
    path("technicians/<int:pk>/", api_get_technician, name="api_list_technician"),
    path("service/<int:pk>/", api_get_appointment, name="api_get_appointment"),
]
