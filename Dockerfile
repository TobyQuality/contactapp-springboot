# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk AS build

# Set the working directory inside the container
WORKDIR /app

# Copy everything from the backend directory into the container
COPY backend/. .

# Give execution permission to Maven wrapper
RUN chmod +x mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

# Use a lightweight JDK runtime for running the final app
FROM eclipse-temurin:17-jre AS runtime

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY --from=build /app/target/contactapp-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/*.jar"]
