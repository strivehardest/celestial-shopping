from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from decouple import config

User = get_user_model()

class Command(BaseCommand):
    help = 'Creates a superuser from environment variables'

    def handle(self, *args, **options):
        email = config('DJANGO_SUPERUSER_EMAIL', default='admin@example.com')
        password = config('DJANGO_SUPERUSER_PASSWORD', default='admin123')
        
        if not User.objects.filter(email=email).exists():
            User.objects.create_superuser(
                email=email,
                password=password,
                first_name='Admin',
                last_name='User'
            )
            self.stdout.write(self.style.SUCCESS(f'Superuser created: {email}'))
        else:
            self.stdout.write(self.style.WARNING(f'Superuser already exists: {email}'))
