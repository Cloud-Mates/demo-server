
FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN deluser --remove-home node \
  && addgroup -S node -g 999 \
  && adduser -S -G node -u 999 node
  
USER node

RUN npm install

RUN npm install pm2 -g

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "pm2-runtime", "server.js" ]