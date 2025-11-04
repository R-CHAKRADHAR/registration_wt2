# Use official PHP Apache image
FROM php:8.2-apache

# Copy all files into the web directory
COPY . /var/www/html/

# Expose port 80
EXPOSE 80

# Optional: set working directory
WORKDIR /var/www/html

# Give permissions (for uploads/logs if needed)
RUN chown -R www-data:www-data /var/www/html
