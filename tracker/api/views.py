from django.http import JsonResponse
from rest_framework.viewsets import ModelViewSet

from tracker.activity.models import Activity
from tracker.activity.serializers import ActivitySerializer


def hello(request):
    message = "hello!"
    return JsonResponse({"message": message})

class ActivityViewSet(ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
