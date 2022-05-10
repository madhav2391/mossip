FROM node:latest

WORKDIR ./

COPY ./package*.json ./

#RUN npm install1
# If you are building your code for production
RUN npm ci

COPY . .

EXPOSE 7000

CMD [ "node", "server.js" ]
