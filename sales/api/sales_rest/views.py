from django.shortcuts import render
from .models import Salesperson, PotentialCustomer, SalesRecord, AutomobileVO
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from common.json import ModelEncoder


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "name",
        "employee_number",
    ]

class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "name",
        "address",
        "phone_number",
    ]

class AutomobileDetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin"
    ]

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "name",
        "employee_number",
        "id"
    ]

class PotentialCustomerListEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "name",
        "address",
        "phone_number",
        "id"
    ]

class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "sale_price",
        "id",
    ]
    encoders = {
        "automobile": AutomobileDetailEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": PotentialCustomerEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_salesperson(request, pk=id):
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse({"salesperson": salesperson},
        encoder=SalespersonListEncoder)
    else:
        content = json.loads(request.body)
        sales = Salesperson.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SalespersonListEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_list_sales_record(request, pk=id):
    if request.method == "GET":
        sales_record = SalesRecord.objects.all()
        return JsonResponse({"sales_record": sales_record},
        encoder=SalesRecordListEncoder)
    else:
        content = json.loads(request.body)
        vin = content["automobile"]
        vin = AutomobileVO.objects.get(vin=vin)
        content["automobile"] = vin
        name = content["salesperson"]
        name = Salesperson.objects.get(name=name)
        content["salesperson"] = name
        customer = content["customer"]
        customer = PotentialCustomer.objects.get(name=customer)
        content["customer"] = customer
        sales_record = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder=SalesRecordListEncoder,
            safe=False,
    )

@require_http_methods(["DELETE", "GET", "PUT", "POST"])
def api_list_potential_customer(request, pk=id):
    if request.method == "GET":
        potential_customer = PotentialCustomer.objects.all()
        return JsonResponse({"potential_customer": potential_customer},
        encoder=PotentialCustomerListEncoder)
    else:
        content = json.loads(request.body)
        potential_customer = PotentialCustomer.objects.create(**content)
        return JsonResponse(
            potential_customer,
            encoder=PotentialCustomerListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT", "POST"])
def api_list_history(request, pk=id):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse({"salesperson": salesperson}, encoder=SalespersonListEncoder)
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Invalid Salesperson"})
            response.status_code = 404
            return response
