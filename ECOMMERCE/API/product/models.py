from django.db import models
from API.category.models import Category
# Create your models here.
class product(models.Model):
    name = models.CharField(max_length=20,null=True)
    discription = models.CharField(max_length=200,null=True)
    image = models.ImageField(upload_to='images/', blank=True ,null=True)
    price = models.IntegerField()
    category=models.ForeignKey(Category,on_delete=models.CASCADE,null=True)
    def __str__(self):
        return self.name 

