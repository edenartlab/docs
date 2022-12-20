FROM awesometic/docusaurus as builder

WORKDIR /docusaurus
COPY . .

RUN yarn
RUN yarn build

ENV NODE_ENV production

COPY --from=builder /docusaurus/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

