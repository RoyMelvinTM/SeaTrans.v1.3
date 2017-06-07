from rest_framework import serializers, viewsets
from ..models.Dimension import Dimension
from ..models.Test import Test

class DimensionSerializer(serializers.ModelSerializer):
    test=serializers.SlugRelatedField(slug_field='nombre_test',queryset=Test.objects.all())
    class Meta:
        model = Dimension

class DimensionViewSet(viewsets.ModelViewSet):
    queryset = Dimension.objects.all()
    serializer_class = DimensionSerializer