FROM node:19 as builder

RUN apt-get update && apt-get upgrade -y libwebpdemux2

WORKDIR /docusaurus
COPY . .

RUN yarn
RUN yarn build

ENV NODE_ENV production

FROM nginx:1.14-alpine

COPY --from=builder /docusaurus/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

