import requests

url = "http://localhost:5000/api/create-team"
team_data = {
    "team_name": "Example Team",
    "ai_roles": ["AI Developer", "AI Designer"]
}

response = requests.post(url, json=team_data)

print(response.json())
