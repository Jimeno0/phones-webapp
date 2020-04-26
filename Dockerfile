FROM node:14.0.0-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn run build

RUN yarn global add serve
CMD ["serve", "-p", "8000", "-s", "build", "-n"]
