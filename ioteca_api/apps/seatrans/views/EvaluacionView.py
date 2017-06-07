from rest_framework import serializers, viewsets
from ..models.Evaluacion import Evaluacion
from ..models.Alumno import Alumno
from ..models.Dimension import Dimension
from ..models.Periodo import Periodo

class EvaluacionSerializer(serializers.ModelSerializer):
    alumno=serializers.SlugRelatedField(slug_field='nombres',queryset=Alumno.objects.all())
    dimension=serializers.SlugRelatedField(slug_field='nombre',queryset=Dimension.objects.all())
    periodo=serializers.SlugRelatedField(slug_field='nombre',queryset=Periodo.objects.all())
    class Meta:
        model = Evaluacion

class EvaluacionViewSet(viewsets.ModelViewSet):
    queryset = Evaluacion.objects.all()
    serializer_class = EvaluacionSerializer