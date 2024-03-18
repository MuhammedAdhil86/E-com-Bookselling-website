from django.db import migrations
from API.user.models import CustomerUser


class Migration(migrations.Migration):

    def seed_data(apps,schema_editor):
        user=CustomerUser(name="Adhil",
                          email="adhil@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="9786543210",
                          gender="Male")
        user.set_password("12345")
        user.save()

    

    dependencies = [
        
    ]

    operations = [
        migrations.RunPython(seed_data),
        ]