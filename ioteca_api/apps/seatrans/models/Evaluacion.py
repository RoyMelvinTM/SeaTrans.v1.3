from django.db import models
from .Dimension import Dimension
from .Alumno import Alumno
from .Periodo import Periodo

class Evaluacion(models.Model):


    alumno = models.ForeignKey(Alumno, null=True, blank=True)
    dimension = models.ForeignKey(Dimension, null=True, blank=True)
    res_pre = models.IntegerField()
    res_post = models.IntegerField()
    periodo = models.ForeignKey(Periodo, null=True, blank=True) 
    recomendaciones = models.TextField(max_length=200)

    class Meta:
        verbose_name = "Evaluacion"
        verbose_name_plural = "Evaluaciones"

    def __str__(self):
        return self.recomendaciones
