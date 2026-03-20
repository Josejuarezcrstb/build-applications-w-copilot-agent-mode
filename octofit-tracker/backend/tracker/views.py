from rest_framework import viewsets
from .models import Team, UserProfile, Activity, Workout, LeaderboardEntry
from .serializers import TeamSerializer, UserProfileSerializer, ActivitySerializer, WorkoutSerializer, LeaderboardEntrySerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class LeaderboardEntryViewSet(viewsets.ModelViewSet):
    queryset = LeaderboardEntry.objects.all()
    serializer_class = LeaderboardEntrySerializer

