# Use the official Node.js 10 image as the base
FROM node:10

# Set the working directory
WORKDIR /home/tony/Documents/Playground/backend

# Copy the package.json file to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code to the working directory
COPY . .

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the app when the container is started
CMD [ "npm", "start" ]