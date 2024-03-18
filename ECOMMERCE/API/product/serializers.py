from rest_framework import serializers
from .models import product


class productSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name',read_only=True)  
    class Meta:
        model = product
        fields ="__all__"  # all field of the category model will be included in the response</s
        
