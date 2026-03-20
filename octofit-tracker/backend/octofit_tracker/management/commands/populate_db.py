from django.core.management.base import BaseCommand
from tracker.models import Team, UserProfile, Activity, Workout, LeaderboardEntry

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        self.stdout.write('Deleting existing data...')
        LeaderboardEntry.objects.all().delete()
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        UserProfile.objects.all().delete()
        Team.objects.all().delete()

        self.stdout.write('Creating teams Marvel and DC...')
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        self.stdout.write('Creating superhero users...')
        users = [
            {'name': 'Spider-Man', 'email': 'spiderman@marvel.com', 'team': marvel},
            {'name': 'Iron Man', 'email': 'ironman@marvel.com', 'team': marvel},
            {'name': 'Batman', 'email': 'batman@dc.com', 'team': dc},
            {'name': 'Wonder Woman', 'email': 'wonderwoman@dc.com', 'team': dc},
        ]
        for u in users:
            UserProfile.objects.create(**u)

        self.stdout.write('Creating activities and workouts...')
        for user in UserProfile.objects.all():
            Activity.objects.create(user=user, title='Training session', duration_minutes=45, calories=400)
            Workout.objects.create(user=user, workout_type='Strength', intensity='High')
            LeaderboardEntry.objects.create(user=user, points=100)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with sample data.'))
