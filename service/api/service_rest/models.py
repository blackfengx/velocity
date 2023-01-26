from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100, unique=True)


class Appointment(models.Model):
    owner_name = models.CharField(max_length=100)
    date = models.DateField(auto_now=False, auto_now_add=False)
    time = models.TimeField(auto_now=False, auto_now_add=False)
    technician = models.ForeignKey(
        Technician,
        related_name="technician_name",
        on_delete=models.CASCADE
        )
    reason = models.CharField(max_length=200)
    vin_num = models.ForeignKey(
        AutomobileVO,
        default="",
        related_name="vin_num",
        on_delete=models.CASCADE
        )
