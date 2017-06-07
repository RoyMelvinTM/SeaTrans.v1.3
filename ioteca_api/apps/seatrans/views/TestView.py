from rest_framework import serializers, viewsets
from ..models.Test import Test
from ..models.Eje import Eje


class TestSerializer(serializers.ModelSerializer):
    eje=serializers.SlugRelatedField(slug_field='nombre',queryset=Eje.objects.all())
    class Meta:
        model = Test

class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer