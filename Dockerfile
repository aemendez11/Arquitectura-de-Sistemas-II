# Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY page-static/package*.json ./
RUN npm ci

COPY page-static/ ./
RUN npm run build

# Run stage (serve static build)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]