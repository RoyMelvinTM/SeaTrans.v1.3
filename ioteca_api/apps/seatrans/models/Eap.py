from django.db import models
from .Facultad import Facultad


class Eap(models.Model):

    nombre = models.CharField(max_length=80)
    descripcion = models.TextField(max_length=200, null=True, blank=True)
    falcultad = models.ForeignKey(Facultad, null=True, blank=True)    

    class Meta:
        verbose_name = "Eap"
        verbose_name_plural = "Eaps"

    def __str__(self):
        return self.nombre
