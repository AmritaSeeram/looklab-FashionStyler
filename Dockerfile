FROM nginx:stable-alpine

# Copy built static files into nginx
COPY dist /usr/share/nginx/html

# Replace default nginx config if provided
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
