<p align="center">
  <img src="https://user-images.githubusercontent.com/6391763/83290593-7a153300-a204-11ea-8285-e2af1b7bc9ed.png" alt="Logo"/>
</p>

<p align="center">
  <a href="https://twitter.com/nirmalyaghosh23">
    <img alt="Twitter: Nirmalya Ghosh" src="https://img.shields.io/twitter/follow/nirmalyaghosh23.svg?style=social" target="_blank" />
  </a>
</p>

This is a clone of Trello application built using Hasura and Next.js. This application has been bootstrapped using [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate) This mono-repo consists of the following packages:

1. [**frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/frontend): Next.js application
2. [**backend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend): Dockerized Hasura application

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Overview](#overview)
- [Requirements](#requirements)
- [Packages](#packages)
  - [1. **Frontend**: Next.js application](#1-frontend-nextjs-application)
  - [2. **Backend**: Dockerized Hasura application](#2-backend-dockerized-hasura-application)
- [Installation](#installation)
  - [1. **Clone the application**](#1-clone-the-application)
  - [2. **Install Lerna globally**](#2-install-lerna-globally)
  - [3. **Bootstrap the packages**](#3-bootstrap-the-packages)
  - [4. **Start the packages**](#4-start-the-packages)
  - [5. **Start the backend package**](#5-start-the-backend-package)
- [Deployment](#deployment)
- [Other interesting repositories](#other-interesting-repositories)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

This boilerplate is built using [Lerna](https://lerna.js.org/) for managing all the packages in a simple manner. Because of Lerna, it becomes very easy to install, develop and maintain a mono-repo structure.

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [Lerna](https://lerna.js.org/)
4. [Docker](https://www.docker.com/)

## Packages

### 1. [**Frontend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/frontend): Next.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on http://localhost:3000/.

If we’re already signed into the application, we should be able to view [that page](http://localhost:3000/). Otherwise, we be redirected to the [Sign Up page](http://localhost:3000/sign-up). If we want to redirect our users to a different route (eg: [the Sign In page](http://localhost:3000/sign-in)), we can modify [this line](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/blob/master/packages/frontend/lib/with-authentication.tsx#L53):

```js
...
if (typeof window !== "undefined") {
    // Router.push("/sign-up");
    Router.push("/sign-in");
} else {
...
```

Once we’re signed in to the application, we should be able to view the following screen on http://localhost:3000/:

![Home page](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586688232078_screely-1586688152150.png)

To create a new user, we’ll have to Sign Up [here](http://localhost:3000/sign-up):

![Sign Up page](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586688511505_screely-1586688498119.png)

If the user was successfully created, we’ll be redirected to the [home page](http://localhost:3000/). If there’re any errors while creating the new user, an alert box will be shown above the form:

![Sign Up page with an error message](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586688697018_screely-1586688615902.png)

To create an admin, we’ll need to visit the http://localhost:3000/admin/sign-up route. The creation of the new admin is similar to the creation of a user. The only difference is that for the admin, the role is **admin** and for users, its **user**.

![Response for fetching user role of a user](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586689146386_carbon+1.png)

![Response for fetching user role of a admin](https://paper-attachments.dropbox.com/s_CF4CC31F06B2FF9025475AC4D29182F2980CED36D7900B42B134426EAC3576E8_1586689215270_carbon+2.png)

An admin can visit the [users page](http://localhost:3000/users) which is useful for fetching all the users who signed up in our application. This page and its components could be useful for managing the users. The user link [will be hidden in the Navbar if the current user isn’t an](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/blob/master/packages/frontend/components/navbar/authenticated.tsx#L76-L82) [**admin**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/blob/master/packages/frontend/components/navbar/authenticated.tsx#L76-L82).

### 2. [**Backend**](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend): Dockerized Hasura application

[Hasura](https://hasura.io/) is an open source engine that connects to our databases & micro-services and auto-generates a production-ready GraphQL backend. It’s very easy to get Hasura up and running on our local system. All the migrations are set up in the [migrations](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend/migrations) directory.

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone
```

### 2. **Install Lerna globally**

```sh
npm install --global lerna
```

### 3. **Bootstrap the packages**

From the project root, we can run the following command to bootstrap the packages and install all their dependencies and linking any cross-dependencies:

```sh
lerna bootstrap
```

### 4. **Start the packages**

From the project root, we can run the following command to start our Node.js packages:

```sh
yarn start
```

The above command will do the following:

    a. Start the frontend package on [http://localhost:3000/](http://localhost:3000).

The backend package doesn’t do anything after we execute the above command.

### 5. **Start the backend package**

```sh
cd packages/backend && docker-compose up
```

We need to start Docker and then run the above command which will change the current directory to the backend package’s directory and then start the backend package. If everything goes well, it’ll be up and running on http://localhost:8080/v1/graphql.

## Deployment

We’re still working on this feature. The documentation will be updated soon.

## Other interesting repositories

1. [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone)
2. [React Search Box](https://github.com/ghoshnirmalya/react-search-box)
3. [LinkedIn Clone using Create React App](https://github.com/ghoshnirmalya/linkedin-clone-react-frontend)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
