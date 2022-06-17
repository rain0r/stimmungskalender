FROM nginx:1.21.6-alpine

# Expose Nginx HTTP service
EXPOSE 80 443

RUN mkdir /logs
COPY docker/web/nginx.conf /etc/nginx/
COPY docker/web/sk.conf /etc/nginx/sites-enabled/
