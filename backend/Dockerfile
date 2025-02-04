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
# Use an official OpenJDK runtime as the base image
FROM eclipse-temurin:17-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy pom.xml and source code separately to leverage Docker caching
COPY pom.xml mvnw mvnw.cmd ./
COPY .mvn .mvn
COPY src src

# Install dependencies and build the application
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Expose the application's port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/contactapp-0.0.1-SNAPSHOT.jar"]
