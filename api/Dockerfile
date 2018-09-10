FROM node:8.11.4-jessie

# Create app directory
WORKDIR /usr/src/app

ENV HTTP_PROXY "http://rafael-danieli:1r39j3f3E@proxy.procergs.reders:3128"
ENV HTTPS_PROXY "http://rafael-danieli:1r39j3f3E@proxy.procergs.reders:3128"

#nodemon usado para livereload no node
RUN npm install -g nodemon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm prune
RUN npm install