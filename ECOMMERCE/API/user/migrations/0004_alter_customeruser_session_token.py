# Generated by Django 5.0.1 on 2024-03-05 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_customeruser_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeruser',
            name='session_token',
            field=models.CharField(default=0, max_length=250, null=True),
        ),
    ]