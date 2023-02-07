FROM node:18
ENV NODE_ENV=production

WORKDIR /app
COPY . .
ARG PORT=8080
ENV PORT=${PORT}
RUN npm install --production

EXPOSE ${PORT}

CMD [ "node", "." ]


