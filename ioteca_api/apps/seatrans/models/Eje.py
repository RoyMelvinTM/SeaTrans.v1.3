from django.db import models

class Eje(models.Model):

    nombre = models.CharField(max_length=40)
    descripcion = models.TextField(max_length=200, null=True, blank=True)
   

    class Meta:
        verbose_name = "Eje"
        verbose_name_plural = "Ejes"

    def __str__(self):
        return self.nombre
