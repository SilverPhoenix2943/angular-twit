# Angular Client app
FROM boardman/angular-cli as client-app
ARG env=prod
LABEL authors="Roger Boardman"
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "yarn.lock*", "./"]
RUN npm install yarn
RUN yarn install --no-progress
COPY . .
RUN ng build --prod --build-optimizer --aot --environment $env

# Final image
FROM nginx:1.13
WORKDIR /usr/share/nginx/html
COPY --from=client-app /usr/src/app/dist ./
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
