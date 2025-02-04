# Use an official OpenJDK runtime as the base image
FROM eclipse-temurin:17-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy Maven wrapper and build files
COPY . /app

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose the application's port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/*.jar"]
