# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm bundle

# Stage 2: Production
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Install runtime dependencies only
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

# Copy build output from builder stage
COPY --from=builder /app/dist ./dist

CMD ["node", "--enable-source-maps", "./dist/index.js"]

