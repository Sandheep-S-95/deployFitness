FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /frontend

# Copy package.json and package-lock.json to install dependencies
COPY package*.json . 

# Install all dependencies including Tailwind CSS
RUN npm install

# Copy the rest of the application files
COPY . .

# Run the build process to generate production-ready files (optional, if you need a build)
RUN npm run build  # Ensure your build step is completed

# Expose port 3000 (or your React app's port)
EXPOSE 3000

# Start the development server (or use the build command for production)
CMD ["npm", "run", "dev"]
