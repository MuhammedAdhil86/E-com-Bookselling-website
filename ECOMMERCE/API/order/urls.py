from django.urls import path,include
from .views import orderViewSet
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
router.register(r'', orderViewSet)

urlpatterns=[
    path('',include(router.urls))
]