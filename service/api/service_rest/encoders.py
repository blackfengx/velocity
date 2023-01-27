from common.json import ModelEncoder

from .models import AutomobileVO, Technician, Appointment


class VinDetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]


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
