from django.urls import path
from . import views

urlpatterns = [
    path('add_post/', views.add_post),
    path('update_post/<str:id>', views.update_post),
    path('delete_post/<str:id>', views.delete_post),
    path('read_post/<str:id>', views.read_post),
    path('read_post_all', views.read_post_all),
]
