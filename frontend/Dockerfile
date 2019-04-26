FROM mhart/alpine-node AS builder

RUN mkdir /frontend-app

WORKDIR /frontend-app

ENV PATH /frontend-app/node_modules/.bin:$PATH

COPY package.json /frontend-app/package.json

RUN yarn install

CMD ["yarn", "dev"]
