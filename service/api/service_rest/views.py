from django.shortcuts import render
from .models import Appointment, AutomobileVO, Technician
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json


class VinDetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin"
    ]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "owner_name",
        "date",
        "time",
        "technician",
        "reason",
        "vin_num",
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
        "vin_num": VinDetailEncoder(),
    }




# Create your views here.
@require_http_methods(["GET", "POST"])
def api_list_appointments(request, pk=id):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse({"appointments": appointments}, encoder=AppointmentDetailEncoder)
    else:
        content = json.loads(request.body)
        technician_name = content["technician"]
        technician = Technician.objects.get(name=technician_name)
        content["technician"] = technician
        vin = content["vin_num"]
        vin = AutomobileVO.objects.get(vin=vin)
        content["vin_num"] = vin
        appointments = Appointment.objects.create(**content)
        return JsonResponse(
            appointments,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_get_appointment(request, pk=id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                {"appointment": appointment},
                encoder=AppointmentDetailEncoder,
                safe=False
                )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})



@require_http_methods(["POST", "GET"])
def api_list_technician(request, pk=id):

    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse({"technicians": technicians}, encoder=TechnicianDetailEncoder)
    else:
        content = json.loads(request.body)
        sales = Technician.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET"])
def api_get_technician(request, pk=id):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                {"technician": technician},
                encoder=TechnicianDetailEncoder,
                safe=False
                )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=AppointmentDetailEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
