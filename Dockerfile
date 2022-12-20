FROM awesometic/docusaurus as builder

WORKDIR /docusaurus
COPY . .

RUN yarn
RUN yarn build

ENV NODE_ENV production

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]

