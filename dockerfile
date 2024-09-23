FROM node:20.9.0 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20.9.0 as production
WORKDIR /app
COPY --from=build /app/dist/ /app/dist/
EXPOSE 8080
COPY package.json .
COPY vite.config.js .
RUN npm install typescript
EXPOSE 8080
CMD ["npm", "run", "preview"]
