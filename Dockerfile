# build frontend user environment
FROM node:18-alpine3.16 as builder_user

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apk add --no-cache git

COPY ./packages/frontend_user/package.json /usr/src/app/package.json
RUN npm install

COPY ./packages/frontend_user/public /usr/src/app/public
COPY ./packages/frontend_user/src /usr/src/app/src
COPY ./packages/frontend_user/tsconfig.json /usr/src/app/
COPY ./packages/frontend_user/.env /usr/src/app/

RUN chown -R node node_modules
RUN npm run build

# production environment
FROM nginx:1.23.3
COPY --from=builder_user /usr/src/app/build/ /var/www/user/
RUN chmod -R 755 /var/www/user/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
