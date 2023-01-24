from django.shortcuts import render
from .models import Appointment, AutomobileVO, Technician
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "owner_name",
        "date",
        "time",
        "technician",
        "reason",
        "vin_num",
    ]

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
    ]




# Create your views here.
@require_http_methods(["GET", "POST"])
def api_list_appointments(request, pk=id):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse({"appointments": appointments}, encoder=AppointmentDetailEncoder)
    else:
        content = json.loads(request.body)
        appointments = Appointment.objects.create(**content)
        return JsonResponse(
            appointments,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


    # @require_http_methods(["DELETE", "GET", "POST"])
    # def api_list_sales_record(request, pk=id):
    #     if request.method == "GET":
    #         sales_record = SalesRecord.objects.all()
    #         return JsonResponse({"potential_customer": potential_customer},
    #         encoder=PotentialCustomerListEncoder)
    #     content = json.loads(request.body)
    #     salesrecord = SalesRecord.objects.create(**content)
    #     return JsonResponse(
    #         salesrecord,
    #         encoder=SalesRecordListEncoder,
    #         safe=False,
    #     )


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


    # if request.method == "GET":
    #     technicians = Technician.objects.all()
    #     return JsonResponse({"technicians": technicians}, encoder=TechnicianDetailEncoder)
    # else:
    #     content = json.loads(request.body)
    #     try:
    #         location_href = content["location"]
    #         location = LocationVO.objects.get(import_href=location_href)
    #         content["location"] = location
    #     except LocationVO.DoesNotExist:
    #         return JsonResponse(
    #             {"message": "Invalid Hat"},
    #             status=400,
    #         )
    #     hats = Hat.objects.create(**content)
    #     return JsonResponse(
    #         hats,
    #         encoder=HatListEncoder,
    #         safe=False,
    #     )
