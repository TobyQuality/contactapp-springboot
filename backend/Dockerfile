# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper and pom.xml
COPY mvnw mvnw.cmd pom.xml ./

# Copy the .mvn directory
COPY .mvn .mvn

# Copy the entire source code
COPY src src

# Give execution permission to Maven wrapper
RUN chmod +x mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

# Copy the JAR file into the container
COPY ./target/contactapp-0.0.1-SNAPSHOT.jar ./app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/*.jar"]
