from django.db import models


class Periodo(models.Model):

    nombre = models.CharField(max_length=60)

    class Meta:
        verbose_name = "Periodo"
        verbose_name_plural = "Periodos"

    def __str__(self):
        return self.nombre
