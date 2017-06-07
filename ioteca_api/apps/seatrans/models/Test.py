from django.db import models
from .Eje import Eje

class Test(models.Model):

    nombre_test = models.CharField(max_length=40)
    descripcion = models.TextField(max_length=200, null=True, blank=True)
    eje = models.ForeignKey(Eje, null=True, blank=True)
  

    class Meta:
        verbose_name = "Test"
        verbose_name_plural = "Tests"

    def __str__(self):
        return self.nombre_test

