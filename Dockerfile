FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm update

RUN npm install

COPY . .

ENV PORT 5000

EXPOSE 5000

CMD ["npm", "run", "start"]