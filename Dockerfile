# Use ARG to make version configurable
ARG NODE_VERSION=22-alpine

# Build stage
FROM node:${NODE_VERSION} as build

WORKDIR /app

# Copy package files first
COPY package*.json ./

# ✅ FIX: Install ALL dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build React app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration (if you have one)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
