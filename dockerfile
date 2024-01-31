FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 8008
CMD ["npm", "run", "serverStart"]