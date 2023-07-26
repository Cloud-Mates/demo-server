
FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN sudo npm install

RUN sudo npm install pm2 -g

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "pm2-runtime", "server.js" ]