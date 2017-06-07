from rest_framework import serializers, viewsets
from ..models.Eap import Eap


class EapSerializer(serializers.ModelSerializer):
	class Meta:
		model = Eap

class EapViewSet(viewsets.ModelViewSet):
	queryset = Eap.objects.all()
	serializer_class = EapSerializer