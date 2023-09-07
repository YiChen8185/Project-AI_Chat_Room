# milestone-3-programmingape
#### Run the Code

In case you want to use virtual environment

``` shell
python3 -m venv venv
source venv/bin/activate
```

**Start Backend**

``` shell
pip3 install -r requirements.txt
```

```shell
python3 backend/app.py
```

**Start Frontend**

``` shell
cd frontend
npm install
npm install react-router-dom
npm start
```

Video： https://youtu.be/AbXNH9ydvqg

Original Link: https://github.com/2023-ctech-cs5356/milestone-3-programmingape
This is a project down by me and Guangwei Jiang.

## Overall
#### Features

- We set in advance the bot's profile, name, avatar and first prompt (three)
- Can login to the interface, which is a floating box. The login screen is a floating box containing a username and password, which can be false.
  - You must be logged in before clicking create team.

- The user can add, subtract and modify teams, the team will contain a brief description of the team, the name of the team and the robots it owns.
  - The team is completely empty and needs to be completed by the user.

- Clicking on Team will allow you to chat. It is stored in a user id.

- Chat section: just a simple chat, then use the first prompt. Set it to a random bot.

#### Difficultiesoverall

1. new framework, such as how to use SQLite as Database. how to pass data in the case of front-end and back-end separation. For example, each user will have a separate username, id, password, email, etc. The password will be the feedback that is really needed for login. For example, each user will have a separate username, id, password, email, etc. Among them, the password will be the one that you really need to give feedback for login.
2. How to use the API ChatGPT, need to read the official documents and do a lot of experiments. (We think it is also part of reading and writing.) Secondly, Prompt, our robots will go through our prompt training when answering questions. How to make a good prompt
3. the rest: click to select bots, input, multiple teams per user, separate chat for each team, etc. 4. deployment: how to put the backend in place.
4. Deployment: We spent a lot of time on how to deploy the backend and connect to it using APIs.

### Links may help

https://towardsdatascience.com/build-deploy-a-react-flask-app-47a89a5d17d9

## What we have done - Features

This time, the framework is written by us completely different from Milestone, using Flask based on Python as the backend, and REACT as the front-end. we want to make a really meaningful project, so we added ChatGPT AI to the development this time, and started to develop our project with this as the core functionality, and ChatGPT In fact, ChatGPT has been pre-trained by us using Prompt.

Function 1: ChatGPT Communicate

- Using the API
  - Learned how to use ChatGPT's API through its official documentation and added it to the project. In the core chat function, it is actually chatting with ChatGPT.
- Training Prompt in advance
  - Through extensive testing, we wrote the text for ChatGPT ahead of time, meaning that the questions inside that actually do the answering are ones that we've done the preprocessing on.
  - We made multiple prompts so the USER can encounter different ROBOTS and will have different answers.

Feature 2: Team Building and Data Interactability

- Teams
  - Build team: you can add name and description. Each user can build multiple teams. Teams
  - Delete Team: Deletes the selected team from the Database.
- Separate Databases
  - We created a separate database for teams, but technically we put two databases together. team has a user.id to make sure there is only one owner, and user has a notes to get all the relevant notes.

Function 3: Login (we still spent a lot of time on completing the login screen because it's a brand new template)

- Login
  - Create an account: you can enter a name, an e-mail address and a password that you can confirm twice. The account is recorded in a database in the flask backend.
  - Login screen: Confirm your identity (with password) by searching the database and then login.
  - Logout

