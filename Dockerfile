FROM node:16.3-alpine

ENV HOME=/home
ENV NODE_ENV=development
ENV TZ=Asia/Kuala_Lumpur

RUN apk --no-cache update \
  && apk --no-cache upgrade \
  && apk add tzdata \
  && npm install -g @nestjs/cli copyfiles 

EXPOSE 3000

COPY package*.json $HOME/api/

WORKDIR $HOME/api

RUN npm install \
  && npm cache clean --force
