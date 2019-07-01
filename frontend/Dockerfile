FROM mhart/alpine-node:11.1.0

RUN mkdir /frontend-app

WORKDIR /frontend-app

RUN apk update && apk upgrade && apk add --no-cache bash git

ENV PATH /frontend-app/node_modules/.bin:$PATH

COPY . /frontend-app/

RUN yarn global add nodemon ts-node typescript

RUN yarn install

CMD ["yarn", "dev"]
