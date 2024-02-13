FROM cgr.dev/chainguard/node@sha256:4a8f2fb37f0d2b34460f1a86f106c504954917561a50af1fa310f615709079d1 as build

WORKDIR /a-block

# Copy and build dependancies first
COPY package.json yarn.lock ./
RUN yarn install --dev  

# Copy and build for release
COPY ./ ./.
RUN yarn build

# Use distroless
FROM cgr.dev/chainguard/nginx:latest@sha256:3dd8fa303f77d7eb6ce541cb05009a5e8723bd7e3778b95131ab4a2d12fadb8f

# Copy built statc files to nginx www root
COPY --from=build /a-block/build/ /usr/share/nginx/html/.