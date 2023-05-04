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

# 需要做什么

1. 存储聊天记录，可以在每一个team里面储存。
   1. 记录所有的文字，并加入到一个History中。
   2. 可以点击History。然后查看history的信息。
2. 建立team，包括可以选择机器人。在左边显示，只选一个。
   1. 下面显示已经有的队伍
   2. chat左边显示team info。
      1. 是否要点击team，然后进入？





## Overall

#### Project实现了什么



#### 功能

- 我们提前设定好机器人的简介，名字，头像和第一个prompt（三个）
- 可以登陆界面，登陆界面是一个浮框。包含用户名和密码，密码可以是假的。
  - 必须先登陆再去点击create team。

- user可以增加，减少和修改team。team里面会包含team的简介，team的名字和拥有的robot。
  - team是完全空的，需要user自己去完成。

- 点击 Team 以后，可以进行聊天。存储进入一个user id里面。

- Chat部分：仅仅是简单的聊天，然后使用第一个prompt. 直接设定为随机一个机器人。

#### 难点overall

1. 全新的框架，例如如何使用SQLite做为Database。前后端分离的情况下如何传递数据。例如我们每一个user都会有独立的username，id，password，email等。其中password将会是登陆真的需要反馈的。
2. 如何使用API ChatGPT，需要阅读官方文件并且做大量的实验。（我们认为也是读写的一部分）其次，Prompt，我们机器人在回答问题会经过我们prompt得训练。如何做出好的prompt
3. 其余：点击选择机器人，输入，每个user多个team，每个team进行独立的chat等。
4. 部署：如何把后端部署起来，并且使用API进行连接，我们花费了大量的时间。

### Links may help

https://towardsdatascience.com/build-deploy-a-react-flask-app-47a89a5d17d9

## What we have done - Features

这次的框架是由我们与milestone完全不一样写的框架，使用Flask基于Python做为后端，前端使用REACT。我们希望做出一个真的有意义的project，所以我们这次的开发加入了ChatGPT AI。并以这个为核心功能开始开发我们项目，并且ChatGPT实际上以及被我们提前使用Prompt进行pre- train。

功能一：ChatGPT Communicate

- 使用API
  - 通过ChatGPT的官方document学习了如何使用它的API，并把它加入到了project中。在核心的聊天功能中，实际上就是和ChatGPT进行聊天。
- 提前训练Prompt
  - 通过大量测试，我们提前为ChatGPT写好了文字，也就是里面的实际上进行回答的问题，是我们已经完成预处理的。
  - 我们做了多个prompt，所以user可以遇到不一样的robot，并且会有不一样的回答。

功能二：团队建造与数据可交互

- 团队
  - 建立团队：可以加入名字和描述。每个user可以建立多个团队。团队
  - 删除团队：从Database中删除选取的团队。
- 独立数据库
  - 我们为团队独立建了一个数据库，但是通过技术把两个数据库。team中加入user.id来确保只有一个owner，而user中有一个notes，可以获得所有相关的notes。

功能三：登陆（因为是一个全新的模版，我们依旧花费了大量时间在完成登陆界面）

- 登陆
  - 创造账号：可以输入 名字，邮箱以及两次确认密码。账号会被记录在flask后端的database中。
  - 登陆界面：通过搜索database确认身份（有密码），然后进行登陆。
  - 登出

## Details: 步骤以及截图

*注意：有些截图可能会和实际有细微区别（因为我们可能会小改），但是大模型应该是一样的*

