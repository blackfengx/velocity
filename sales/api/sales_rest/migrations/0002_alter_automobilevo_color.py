# Generated by Django 4.0.3 on 2023-01-25 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='color',
            field=models.CharField(max_length=50),
        ),
    ]
