FROM node:alpine AS base

WORKDIR /app
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV CI true

# ENV variables
ARG NEXT_PUBLIC_BACK_HOST

RUN corepack enable yarn && yarn install
RUN yarn build

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["yarn", "start"]

