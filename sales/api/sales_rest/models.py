from django.db import models

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=100)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

class Salesperson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=200, unique=True)

class PotentialCustomer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=100, unique=True)

class SalesRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE
        )
    salesperson = models.CharField(max_length=100)
    customer = models.CharField(max_length=100)
    sale_price = models.CharField(max_length=100)
