FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

USER node

EXPOSE 3000