from django.contrib import admin
from django.urls import path
from .views import getRoutes, getNotes, getNote, updateNote, deleteNote, createNote

urlpatterns = [
    path('notes/', getNotes, name='getnotes'),
    path('note/create/', createNote, name='createnote'),
    path('note/<str:pk>/update/', updateNote, name='updatenote'),
    path('note/<str:pk>/delete/', deleteNote, name='deletenote'),
    path('note/<str:pk>/', getNote, name='getnote')
]
