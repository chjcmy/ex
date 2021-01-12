from django.urls import path
from .views import RoomView, CreateRoomview

urlpatterns = [
    path('home', RoomView.as_view()),
    path('create-room', CreateRoomview.as_view()),
]
