# Generated by Django 4.0.3 on 2023-01-24 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory_rest', '0003_alter_automobile_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobile',
            name='vin',
            field=models.CharField(max_length=17, unique=True),
        ),
    ]
