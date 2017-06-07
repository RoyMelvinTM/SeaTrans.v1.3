from rest_framework import serializers, viewsets
from ..models.Eje import Eje


class EjeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eje

class EjeViewSet(viewsets.ModelViewSet):
    queryset = Eje.objects.all()
    serializer_class = EjeSerializer