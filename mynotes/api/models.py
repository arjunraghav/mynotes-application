from django.db import models

# Create your models here.

class Note(models.Model):
  body = models.TextField(null=True, blank=True)
  # auto now run every time save is executed
  updated = models.DateTimeField(auto_now=True)
  # auto now add run once when added to database
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.body[0:50]