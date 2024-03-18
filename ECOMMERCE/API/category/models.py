from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=20)
    discription = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/', blank=True ,null=True)

    def __str__(self):
        return self.name 
