FROM node:lts 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm build
EXPOSE 8080
CMD ["npm","start"]