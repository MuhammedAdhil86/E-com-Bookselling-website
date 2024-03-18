from django.db import models
from API.product.models import product
from API.user.models import CustomerUser

# Create your models here.
class order(models.Model):
    user = models.ForeignKey(CustomerUser, on_delete=models.CASCADE)
    product=models.ManyToManyField(product,null=True)
    totel=models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f'{self.user} bought {self.quantity} of {self.product}'
