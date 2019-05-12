FROM node:11.1.0

RUN mkdir /authentication-app

WORKDIR /authentication-app

ENV PATH /authentication-app/node_modules/.bin:$PATH

COPY package.json /authentication-app/package.json

RUN yarn install

CMD ["yarn", "dev"]
