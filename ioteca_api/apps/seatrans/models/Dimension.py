from django.db import models
from .Test import Test

class Dimension(models.Model):

    nombre = models.CharField(max_length=40)
    desde = models.IntegerField()
    hasta = models.IntegerField()
    test = models.ForeignKey(Test, null=True, blank=True)

    class Meta:
        verbose_name = "Dimension"
        verbose_name_plural = "Dimensiones"

    def __str__(self):
        return self.nombre
