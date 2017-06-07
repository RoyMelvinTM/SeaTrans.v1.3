from django.contrib import admin
from .models.Alumno import Alumno
from .models.Evaluacion import Evaluacion
from .models.Categoria import Categoria
from .models.Dimension import Dimension
from .models.Eap import Eap
from .models.Eje import Eje
from .models.Test import Test
from .models.Facultad import Facultad
from .models.Grupo import Grupo
from .models.Periodo import Periodo


admin.site.register(Categoria)
class AlumnoAdmin(admin.ModelAdmin):
    list_display = (  "nombres","codigo","apellidos", "sexo", "fecnac" , "grupo")

admin.site.register(Alumno, AlumnoAdmin)
admin.site.register(Evaluacion)
admin.site.register(Dimension)
admin.site.register(Eap)
admin.site.register(Eje)
admin.site.register(Test)
admin.site.register(Facultad)
admin.site.register(Grupo)
admin.site.register(Periodo)


# Register your models here.
