# build frontend user environment
FROM node:11.13 as builder_user

RUN mkdir /usr/src/app /usr/src/app/frontend_user 
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@2.1.8 -g

COPY ./package-lock.json /usr/src/app/
COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src


RUN npm run build

# build frontend user environment
FROM node:11.13 as builder_admin

RUN mkdir /usr/src/app /usr/src/app/frontend_user 
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@2.1.8 -g

COPY ./package-lock.json /usr/src/app/
COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src


RUN npm run build

# production environment
FROM nginx:1.15.10-alpine
COPY --from=builder /usr/src/app/build /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]