# Base image
FROM node:16-alpine 

# Work directory to give docker a base directory

WORKDIR /app

# Copy it to from current dir to above dir
COPY . .

# To to basic setup
RUN npm install 

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD ["npm","run","dev"]

