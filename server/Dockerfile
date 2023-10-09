FROM node:20.4-buster

RUN echo "Starting the Server..."

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm ci

RUN npm install -g @nestjs/cli

# RUN npx prisma migrate dev

# RUN npx prisma generate

CMD ["npm", "run", "start:dev"]