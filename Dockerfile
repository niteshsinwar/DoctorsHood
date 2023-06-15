FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Copy application files
COPY . /var/www/html

# Set working directory
WORKDIR /var/www/html

# Install Composer dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-interaction --no-scripts --no-dev --prefer-dist

# Set up Laravel
RUN cp .env.example .env
RUN php artisan key:generate

# Expose port 80
EXPOSE 80

# Start the PHP-FPM server
CMD ["php-fpm"]
