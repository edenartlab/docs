FROM awesometic/docusaurus as builder

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

ENV NODE_ENV production

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]

