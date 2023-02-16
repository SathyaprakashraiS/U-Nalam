# Generated by Django 4.1.3 on 2022-12-14 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0006_remove_disease_partsattacked_disease_part_affected1_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="organwise",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("organ", models.CharField(default="organ_name", max_length=100)),
                ("img", models.ImageField(upload_to="images/")),
                ("about", models.TextField(max_length=1000)),
                ("diseases", models.TextField(max_length=1000)),
            ],
        ),
    ]