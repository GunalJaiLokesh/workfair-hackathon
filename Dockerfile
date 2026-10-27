# Use official ultra-lightweight Nginx alpine image (No Node.js needed!)
FROM nginx:alpine

# Copy custom Nginx server block configured for port 8080 (Google Cloud Run requirement)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy WorkFair frontend files directly
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Cloud Run injects $PORT (default 8080)
EXPOSE 8080

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
