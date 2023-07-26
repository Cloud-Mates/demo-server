
FROM node:16

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install

RUN npm install pm2 -g

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "pm2-runtime", "server.js" ]