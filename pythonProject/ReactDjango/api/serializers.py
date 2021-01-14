from rest_framework import serializers
from .models import Type


class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('id',
                  'type',
                  'name',
                  'url')
