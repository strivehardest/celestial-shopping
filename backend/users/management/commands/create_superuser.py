from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Creates a superuser'

    def handle(self, *args, **options):
        User = get_user_model()
        if not User.objects.filter(email='admin@celestial.com').exists():
            User.objects.create_superuser(
                email='admin@celestial.com',
                password='ChangeThisPassword123!',
                first_name='Admin',
                last_name='User'
            )
            self.stdout.write(self.style.SUCCESS('Superuser created successfully'))
        else:
            self.stdout.write(self.style.WARNING('Superuser already exists'))
```

Make sure the directory structure exists:
```
backend/users/management/commands/create_superuser.py
