from rest_framework import serializers, viewsets
from ..models.Grupo import Grupo


class GrupoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Grupo

class GrupoViewSet(viewsets.ModelViewSet):
	queryset = Grupo.objects.all()
	serializer_class = GrupoSerializer			