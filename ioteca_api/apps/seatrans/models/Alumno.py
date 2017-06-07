from django.db import models
from .Grupo import Grupo

class Alumno(models.Model):

    
    nombres = models.CharField(max_length=60)
    apellidos = models.CharField(max_length=60)
    codigo = models.IntegerField()
    sexo = models.CharField(max_length=10)
    fecnac=models.DateField()
    grupo = models.ForeignKey(Grupo, null=True, blank=True)  


    class Meta:
        verbose_name = "Alumno"
        verbose_name_plural = "Alumnos"

    def __str__(self):
        return self.nombres
