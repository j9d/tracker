from django.db import models

from tracker.activity.constants import TimePeriods

class Activity(models.Model):
    title = models.CharField(null=False, blank=False)
    description = models.TextField(null=False, blank=True)
    target = models.OneToOneField("ActivityTarget", null=True, on_delete=models.SET_NULL)


class ActivityRecord(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE, related_name="records")
    recorded = models.DateTimeField(null=False, blank=False)


class ActivityTarget(models.Model):
    occurrences = models.PositiveIntegerField(null=False, blank=False)
    time_period = models.CharField(choices=TimePeriods.choices)
