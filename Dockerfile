FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY ./public ./dist/public
CMD ["npm", "run", "serve"]
