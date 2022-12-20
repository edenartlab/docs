FROM awesometic/docusaurus as builder

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
