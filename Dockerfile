FROM node:20-alpine


WORKDIR /app

COPY package.json ./

RUN npm install --production


COPY . .

CMD ["node", "src/main.js"]

