FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

EXPOSE 3000

CMD [ "./wait-for-it.sh", "-t", "5", "tcp://mysql:3306", "--", "npm", "start" ]