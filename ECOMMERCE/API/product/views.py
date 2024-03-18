from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets
from .models import product
from .serializers import productSerializer
# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = product.objects.all()
    serializer_class = productSerializer