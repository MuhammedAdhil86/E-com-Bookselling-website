from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomerUser(AbstractUser):
    name=models.CharField(max_length=100,default='anonymous',null=True)
    username=None
    email=models.EmailField(max_length=200,unique=True,null=True)
    password=models.CharField(max_length=250,null=True)
    phone=models.CharField(max_length=20,null=True)
    address=models.TextField(null=True)
   

    USERNAME_FIELD ='email'
    REQUIRED_FIELDS=[]

    gender=models.CharField(max_length=50,blank=True,null=True)
    session_token=models.CharField(max_length=50,default=0,null=True)
    created_date=models.DateTimeField(auto_now_add=True,null=True)
    updated_date=models.DateTimeField(auto_now=True,null=True)
    
    def __str__(self):
        return self.name 