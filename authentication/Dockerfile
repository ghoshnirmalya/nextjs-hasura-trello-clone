FROM mhart/alpine-node:11.1.0

RUN mkdir /authentication-app

WORKDIR /authentication-app

ENV PATH /authentication-app/node_modules/.bin:$PATH
ENV NODE_ENV=development

COPY package.json /authentication-app/package.json

RUN npm install -g @feathersjs/cli && yarn global add nodemon && yarn install

CMD ["yarn", "dev"]
