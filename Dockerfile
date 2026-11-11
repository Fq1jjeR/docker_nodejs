FROM node:22-alpine
WORKDIR /app
COPY server.js .
EXPOSE 10000
CMD ["node", "server.js"]