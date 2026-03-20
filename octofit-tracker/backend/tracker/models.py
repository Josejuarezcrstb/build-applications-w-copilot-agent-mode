from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')

    def __str__(self):
        return self.name

class Activity(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='activities')
    title = models.CharField(max_length=120)
    duration_minutes = models.IntegerField()
    calories = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.user.name})"

class Workout(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='workouts')
    workout_type = models.CharField(max_length=100)
    intensity = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.workout_type} ({self.user.name})"

class LeaderboardEntry(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='leaderboard_entries')
    points = models.IntegerField(default=0)

    class Meta:
        unique_together = ('user',)

    def __str__(self):
        return f"{self.user.name}: {self.points}"

