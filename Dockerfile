FROM node:8.6.0-alpine

RUN npm install && npm run build

EXPOSE 3030

CMD ["node", "./dist/server.js"]
