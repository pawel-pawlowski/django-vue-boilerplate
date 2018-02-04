FROM node:latest

COPY ./package.json /srv/app/package.json

WORKDIR /srv/app/

RUN yarn install

COPY ./ /srv/app/

EXPOSE 8080

CMD ["npm", "run", "dev"]
