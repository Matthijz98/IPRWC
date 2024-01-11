FROM nginx:alpine

# Copy static files to /usr/share/nginx/html
COPY /dist/iprwc/browser/ /usr/share/nginx/html

# Copy nginx config file to /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80















