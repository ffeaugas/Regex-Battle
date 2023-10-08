FROM node:20.4-buster

RUN echo "Starting the Client..."

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm ci

CMD ["npm", "run", "dev"]