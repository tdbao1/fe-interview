FROM node:16 as build

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g npm@9.6.1
RUN npm install
RUN npm install -g typescript

COPY . .


CMD [ "npm", "start" ]
# FROM nginx:1.23-alpine

# COPY --from=build /usr/src/app/build /usr/share/nginx/html

# COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
