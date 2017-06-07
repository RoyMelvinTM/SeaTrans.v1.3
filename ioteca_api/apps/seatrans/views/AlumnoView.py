from rest_framework import serializers, viewsets
from ..models.Alumno import Alumno


class AlumnoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Alumno

class AlumnoViewSet(viewsets.ModelViewSet):
	queryset = Alumno.objects.all()
	serializer_class = AlumnoSerializer			