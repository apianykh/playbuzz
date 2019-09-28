FROM node:10.16.3-alpine

LABEL maintainer="artem.pianykh@futuredialog.fi"

ENV BABEL_DISABLE_CACHE=1

RUN apk add --no-cache nginx
RUN mkdir -p /run/nginx

COPY ./docker_files/docker-bootstrap /usr/local/bin
COPY ./docker_files/vhost.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /home/node/app
COPY package.json yarn.lock /home/node/app/
RUN cd /home/node/app && yarn
COPY . /home/node/app/

EXPOSE 80
WORKDIR /home/node/app
CMD ["docker-bootstrap"]