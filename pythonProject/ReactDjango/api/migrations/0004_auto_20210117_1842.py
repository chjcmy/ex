# Generated by Django 3.0.5 on 2021-01-17 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210117_1842'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contenttitle',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
    ]