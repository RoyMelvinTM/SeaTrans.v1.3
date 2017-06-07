from rest_framework import serializers, viewsets
from ..models.Periodo import Periodo


class PeriodoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Periodo

class PeriodoViewSet(viewsets.ModelViewSet):
	queryset = Periodo.objects.all()
	serializer_class = PeriodoSerializer	