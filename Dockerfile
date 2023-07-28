FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install pm2 -g
RUN npm install 

COPY . .

# EXPOSE 3000-3001 3005

CMD ["pm2-runtime","server.js"]