FROM node:11.1.0

RUN mkdir /authentication-app

WORKDIR /authentication-app

ENV PATH /authentication-app/node_modules/.bin:$PATH

RUN npm install -g @feathersjs/cli

EXPOSE 3030
