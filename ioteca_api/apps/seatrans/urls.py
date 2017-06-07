from django.conf.urls import url, include
from rest_framework import routers
from .views.FacultadView import FacultadViewSet
from .views.EapView import EapViewSet
from .views.AlumnoView import AlumnoViewSet
from .views.GrupoView import GrupoViewSet
from .views.CategoriaView import CategoriaViewSet
from .views.DimensionView import DimensionViewSet
from .views.EvaluacionView import EvaluacionViewSet
from .views.EjeView import EjeViewSet
from .views.TestView import TestViewSet
from .views.PeriodoView import PeriodoViewSet



router = routers.DefaultRouter()
router.register(r'facultades', FacultadViewSet)
router.register(r'eaps', EapViewSet)
router.register(r'alumnos', AlumnoViewSet)
router.register(r'grupos', GrupoViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'dimensiones', DimensionViewSet)
router.register(r'evaluaciones', EvaluacionViewSet)
router.register(r'ejes', EjeViewSet)
router.register(r'tests', TestViewSet)
router.register(r'periodos', PeriodoViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
