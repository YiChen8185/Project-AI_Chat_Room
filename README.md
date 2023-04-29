# milestone-3-programmingape
milestone-3-programmingape created by GitHub Classroom

## 第一步：完成Milestone3的任务

#### 最后提前大约1-2天完成部署，这样子可以获得Submission！！

### 功能 & 可以做什么
#### 功能

- 我们提前设定好机器人的简介，名字，头像和第一个prompt（三个）
- 可以登陆界面，登陆界面是一个浮框。包含用户名和密码，密码可以是假的。
  - 必须先登陆再去点击create team。

- user可以增加，减少和修改team。team里面会包含team的简介，team的名字和拥有的robot。
  - team是完全空的，需要user自己去完成。

- 点击 Team 以后，可以进行聊天。存储进入一个user id里面。

- Chat部分：仅仅是简单的聊天，然后使用第一个prompt. 直接设定为随机一个机器人。

#### 难点

- ChatGPT：如何使用API
- 前端和后端的互动
- 如何使用SQL，重点是读取

### 开发

- 登陆和team build
  - 用户可以输入 名字，邮箱以及两次确认密码
  - 在没有登陆的情况下不可以去Home
  - 每个user有一个独立的信息库
- 建立团队：包括团队名字，简介，选择机器人的信息

### 开发log


## Milestone 3 的要求

5 pts: **Prototype It** Submit a wireframe and a description of your app

10 pts: **Build It** Add login, implement Create/Read/Update/Delete functionality for your data

5 pts: **Run It** Deploy your site, and submit metrics from your running site

### Part 1 - Prototype It

For Part 1 - you'll make a rough prototype of your idea - enough to answer the question - **"What is your app, and what does it do?"**

If you're working on a project as part of another course, you can see if it meets the criteria above. The only additional requirement I have is that I need to be able to see your work (commits + code).

If you've got your own idea for a project you want to build, fantastic!

If you don't have your own idea, you can use one of these 2:

- Social Media Image/Message Sharing app
- Chatroom App

You can't do these:

- To-Do app
- Notes app
- Class questions

Once you've chosen what you want to build, it's time to put together your product overview.

#### Submission

- Create a rough wireframe using Figma to describe your app visually and include a link to a publicly viewable Figma wireframe.
- Submit a 1-pager product overview document describing the features of your app idea as shown in your Figma wireframe, some of the use cases that it addresses, and how some of the features are used on each page.

### Part 2 - Build It

If you're working on a team - each member of the team is responsible for at least 1 feature AND you need to show this via Git commits. You'll **only receive credit** if I can see each person's Git commits.

You can use the setup for Milestone 2 as a base for your project. If you'd like to use a different stack altogether, thats perfectly fine! You can choose your own adventure.

Its also ok for your built app to look different than your wireframes. Your wireframes should serve as a guide.

- There should be a way of logging in - we'll be using Firebase Auth during the class.
- There should be a form or some inputs that are shown to the user, and you send the data to your backend - we'll be using Firebase Firestore during the class.
- You should be able to save the user's data and display it back to them - we'll be using React for this.

Once you've built your feature, setup hosting for your site and deploy your changes to your live environment. Grading will be based on your live environment.

#### Submission

- Submit a link to your Github Pull Request containing the work, as well as screenshots and a brief description of how your feature works so that I can review it.
- If you're working on a team, each person should have their own commits in this Pull Request
- Submit a screenshot showing some of the data in your Firestore Collection. If you're using a different database, submit a screenshot wherever your data may be.
- Submit a link to your public URL

#### 得分要求

Pages are styled and look high-quality, stored data contains multiple collections or data with multiple relationships to other data, uses other 3rd party APIs besides Authentication/Database provider.

### Part 3 - Run It

#### Submission

Once you've deployed your site, its time to be able to review your running application. Navigate around your app to generate some traffic and data, and submit screenshots and a short answer for each question below.

If you wind up deploying to a different hosting platform, you should still be able to find all this information, it'll just be different than what you find on Firebase.

**Review traffic to your app**

- How many requests did you receive?
- How do you know if it was human or a bot?

**Measuring frontend performance**

- What is the max CPU usage of your page?
- What is the max memory that it uses?
- How fast did your page load?
- How much data was transferred?

**Measuring backend performance** 
*If you decided to go without a backend for this project, you can skip this step.

- How many API calls did you receive and how long does it take to respond? Note - this will be different than the answer to "Review traffic to your app > How many requests did you receive?"
- How long did your function take to run?
- Did you see any errors? If you don't see errors, that's fine, but your screenshot should show it)

### 第二步：之后再说

### 第三步：debug，完善和部署

