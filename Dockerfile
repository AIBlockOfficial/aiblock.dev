FROM cgr.dev/chainguard/node:latest-dev as build

WORKDIR /a-block

# Copy and build dependancies first
COPY package.json yarn.lock ./
RUN yarn install --dev  

# Copy and build for release
COPY ./ ./.
RUN yarn build

# Use distroless
FROM cgr.dev/chainguard/nginx:latest

# Copy built statc files to nginx www root
COPY --from=build /a-block/build/ /usr/share/nginx/html/.
