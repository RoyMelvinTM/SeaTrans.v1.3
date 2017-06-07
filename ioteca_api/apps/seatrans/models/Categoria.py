from django.db import models
from .Test import Test

class Categoria(models.Model):

    nombre_nivel= models.CharField(max_length=40)
    descripcion = models.TextField(max_length=100, null=True, blank=True)
    desde = models.IntegerField()
    hasta = models.IntegerField()
    test = models.ForeignKey(Test, null=True, blank=True)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nombre_nivel
    
