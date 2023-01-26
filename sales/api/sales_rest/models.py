from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=50)
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
        on_delete=models.CASCADE,
        )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="salesperson",
        on_delete=models.CASCADE,
        )
    customer = models.ForeignKey(
        PotentialCustomer,
        related_name="customer",
        on_delete=models.CASCADE,
        )
    sale_price = models.CharField(max_length=100)

    def get_api_url(self):
        return reverse("api_list_sales_record", kwargs={"pk": self.pk})
