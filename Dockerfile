FROM node:latest

WORKDIR ./

COPY ./server/package*.json ./
COPY waitforit.sh ./
RUN chmod +x waitforit.sh
#RUN npm install1
# If you are building your code for production
# RUN npm ci
# RUN npm install

COPY . .

# EXPOSE 7000
RUN cd server
RUN npm install
RUN cd ..
# CMD [ "node", "server.js" ]
# RUN ./waitforit.sh
CMD ./waitforit.sh
