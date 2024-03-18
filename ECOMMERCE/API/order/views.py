
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import order
from .serializers import orderSerializer


class orderViewSet(viewsets.ModelViewSet):
    queryset = order.objects.all()
    serializer_class = orderSerializer