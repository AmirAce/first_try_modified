# Generated by Django 3.2.18 on 2023-03-28 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectApp', '0005_alter_contact_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='subject',
            field=models.CharField(blank=True, default=None, max_length=255),
        ),
    ]
