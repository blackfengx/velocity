from django.contrib import admin
from django.urls import path
from .views import (
    api_list_salesperson,
    api_list_sales_record,
    api_list_potential_customer
)

urlpatterns = [
    path(
        "salesperson/",
        api_list_salesperson,
        name="api_list_salesperson",
    ),
    path(
        "sales_record/",
        api_list_sales_record,
        name="api_list_sales_record",
    ),
    path(
        "potential_customer/",
        api_list_potential_customer,
        name="api_list_potential_customer",
    ),
]
