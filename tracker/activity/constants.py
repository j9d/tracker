from django.db import models

class TimePeriods(models.TextChoices):
    DAILY = "daily", "Daily"
    WEEKLY = "weekly", "Weekly"
    MONTHLY = "monthly", "Monthly" 
    YEARLY = "yearly", "Yearly"
    