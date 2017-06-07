from django.db import models
from .Eap import Eap

class Grupo(models.Model):

    nombre = models.CharField(max_length=80)
    eap = models.ForeignKey(Eap, null=True, blank=True)  

    class Meta:
        verbose_name = "Grupo"
        verbose_name_plural = "Grupos"

    def __str__(self):
        return self.nombre
