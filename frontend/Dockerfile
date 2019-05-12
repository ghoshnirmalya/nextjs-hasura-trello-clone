FROM node:11.1.0

RUN mkdir /frontend-app

WORKDIR /frontend-app

ENV PATH /frontend-app/node_modules/.bin:$PATH

COPY package.json /frontend-app/package.json

RUN yarn install

CMD ["yarn", "dev"]
