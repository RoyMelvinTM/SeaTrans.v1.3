from rest_framework import serializers, viewsets
from ..models.Facultad import Facultad


class FacultadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facultad

class FacultadViewSet(viewsets.ModelViewSet):
    queryset = Facultad.objects.all()
    serializer_class = FacultadSerializer