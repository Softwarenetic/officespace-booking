FROM node:11.13 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@2.1.8 -g

COPY ./packages/ /usr/src/app/
COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN npm run build

FROM nginx:1.15.10-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]