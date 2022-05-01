FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD npx --yes dotenv-vault@latest pull --dotenvMe $DOTENV_ME; node app.js
