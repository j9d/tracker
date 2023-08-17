from rest_framework.serializers import ModelSerializer

from tracker.activity.models import Activity, ActivityRecord, ActivityTarget


class ActivityRecordSerializer(ModelSerializer):
    class Meta:
        model = ActivityRecord
        fields = "__all__"


class ActivityTargetSerializer(ModelSerializer):
    class Meta:
        model = ActivityTarget
        fields = "__all__"


class ActivitySerializer(ModelSerializer):
    target = ActivityTargetSerializer()
    records = ActivityRecordSerializer(many=True)

    class Meta:
        model = Activity
        fields = [
            "pk",
            "title",
            "description",
            "target",
            "records",
        ]
