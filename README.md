# Social-Network-API

API for a social network web application, using MongoDB and Mongoose

## Description

The social network api contains all the backend services you may need to operate a full-stack social media app. This backend allows you to store users, "thoughts"(user posts), and "reactions"(user comments). The application is powered by Mongoose and MongoDB and allows you to interact with the Mongo database through the various routes. 

To manipulate the User model, there are GET and POST routes for getting all users, a single user, or creating a new user. There, are also PUT and DELETE routes for updating user info and deleting a user. Furthermore, there are also POST and DELETE routes for adding users as "friends" to other users. To manipulate the Thought model, there are GET, POST, PUT, and DELETE routes that operate very similar to their User counterparts. In addition, there are POST and DELETE routes that add and delete reactions to thoughts. It is also worth noting that deleting users will remove all associated thoughts from the Thought collection. In addition, deleting a thought will remove the corresponding ID from the associated user's "thoughts" array field.

Here is a link to the [walkthrough video](https://drive.google.com/file/d/1zoUev6_eDeyRir-Fpi5iwNJKx7_7AJwc/view)

## Table of Contents 
1. [Installation](#install)
2. [Usage](#usage)
3. [Questions](#questions)

## <a id='install'>Installation</a>

This application requires node.js and therefore, you must install it before you can use the application. If you haven't installed node.js, use the following link [https://nodejs.org/en/download] and install the proper version according to your OS. Once installed, run the node setup executable. Once node.js is setup on your system, go to the directory where you plan to download the repository and run the command `npm init -y` in your terminal. Then download the repository into your desired directory and run `npm i` in the terminal to download all necessary dependencies.

## <a id='usage'>Usage</a>

To use the application, navigate to your directory with the app and just run `npm run start` in your terminal. From there you can use a program like Insomnia or Postman to make api calls to the live server. Check out the walkthrough video at the bottom of the Description section for more help.

## <a id='questions'>Questions</a>

If you have any additional questions, contact me using the following links:
- Email: [jordane.burton@gmail.com]
- GitHub: [jordaneburton](https://github.com/jordaneburton)

## Acknowledgements