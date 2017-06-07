from django.db import models



class Facultad(models.Model):

    nombre = models.CharField(max_length=80)
    descripcion = models.TextField(max_length=200, null=True, blank=True)
    sede = models.CharField(max_length=50)


    class Meta:
        verbose_name = "Facultad"
        verbose_name_plural = "Facultades"

    def __str__(self):
        return self.nombre
    

