from django.urls import include, path
from rest_framework.routers import SimpleRouter

from tracker.api import views

router = SimpleRouter()
router.register("activities", views.ActivityViewSet)

app_name = "api"
urlpatterns = [
    path("", include(router.urls)),
    path("hello/", views.hello, name="hello"),
]
