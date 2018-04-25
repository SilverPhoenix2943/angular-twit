# Angular Client app
FROM johnpapa/angular-cli as client-app
ARG env=prod
LABEL authors="Roger Boardman"
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
RUN ng build --prod --build-optimizer --environment $env

# Final image
FROM nginx:1.13
WORKDIR /usr/share/nginx/html
COPY --from=client-app /usr/src/app/dist ./
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
