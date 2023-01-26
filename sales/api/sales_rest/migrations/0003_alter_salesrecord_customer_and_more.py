# Generated by Django 4.0.3 on 2023-01-26 00:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_automobilevo_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer', to='sales_rest.potentialcustomer'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='salesperson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salesperson', to='sales_rest.salesperson'),
        ),
    ]
