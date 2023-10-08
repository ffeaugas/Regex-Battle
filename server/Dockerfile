FROM node:20.4-buster

RUN echo "Starting the Server..."

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm ci

RUN npm install -g @nestjs/cli

CMD ["npm", "run", "start:dev"]