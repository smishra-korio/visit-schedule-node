FROM node:alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . /app

EXPOSE 8010

CMD ["npm", "run", "start-dev"]