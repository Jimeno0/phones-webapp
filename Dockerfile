# pull official base image
FROM node:13.12.0-alpine

# -----Development

# WORKDIR /app
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY yarn.lock ./
# RUN yarn install
# COPY . ./
# CMD ["yarn", "start"]


# -----Production
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn run build

RUN yarn global add serve
WORKDIR /app
CMD ["serve", "-p", "8000", "-s", "build"]


# to build
# sudo docker build -t react-webapp .
# to serve
# sudo docker run -it -p 8000:80 react-webapp
