from rest_framework import serializers, viewsets
from ..models.Categoria import Categoria
from ..models.Test import Test


class CategoriaSerializer(serializers.ModelSerializer):
    test=serializers.SlugRelatedField(slug_field='nombre_test',queryset=Test.objects.all())
    class Meta:
        model = Categoria

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer  