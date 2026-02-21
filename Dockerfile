FROM jenkins/jenkins:lts

USER root


RUN apt update && apt install -y docker.io nodejs npm && \
    apt clean


USER jenkins