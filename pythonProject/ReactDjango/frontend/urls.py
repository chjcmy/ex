from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('find', index),
    path('find/<str:id>', index),
    path('read/<str:id>', index),
    path('make', index)
]
