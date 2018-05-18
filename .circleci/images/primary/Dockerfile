# Angular Client app
FROM circleci/node:8-browsers as ci-build-image
ARG env=prod
ARG ANGULAR_CLI_VERSION="6.0.3"
LABEL authors="Roger Boardman"
WORKDIR /app
USER root
RUN export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)" && \
    echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && \
    curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - && \
    apt-get update -y && apt-get install google-cloud-sdk -y
RUN apt-get install python-dev python-pip kubectl
RUN pip install awscli
RUN yarn global add @angular/cli@6.0.3
USER circleci
