FROM node:10-alpine

# Create app directory
ARG PROJECT_DIR
WORKDIR ${PROJECT_DIR}

# production
# COPY package*.json .
# RUN npm install --production