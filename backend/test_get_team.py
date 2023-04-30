import requests

url = "http://localhost:5001/api/list-teams"

response = requests.get(url)

print(response.json())
