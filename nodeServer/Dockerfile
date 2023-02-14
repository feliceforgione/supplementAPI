FROM node:lts-alpine
RUN apk add --no-cache bash
# FROM node:16


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE $PORT

# RUN npm run build

# CMD ["npm", "start"]