from rest_framework import serializers
from .models import order


class orderSerializer(serializers.ModelSerializer):
    class Meta:
        model = order
        fields ="__all__"  # all field of the category model will be included in the response</s
        
