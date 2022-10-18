# Stage 0, "build-stage", based on Node.js to build the frontend
FROM node:16.17-alpine as build

# The path to application within the container. Making web directory as the work directory
WORKDIR /app

# Copies package.json to the Docker environment.
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install

COPY . /app/
RUN yarn run build

# Stage 1, based on NGINX to provide a configuration to be used with react-router
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]