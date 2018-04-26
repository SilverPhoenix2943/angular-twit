# Angular Client app
FROM circleci/node:8-browsers as ci-build-image
ARG env=prod
ARG ANGULAR_CLI_VERSION="1.7.4"
LABEL authors="Roger Boardman"
WORKDIR /app
USER root
RUN apt-get install python-dev python-pip
RUN pip install awscli
RUN yarn global add @angular/cli@1.7.4
USER circleci
