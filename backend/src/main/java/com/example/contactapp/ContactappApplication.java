package com.example.contactapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class ContactappApplication {
    public static void main(String[] args) {
        // Load environment variables from Render first
        String dbUrl = System.getenv("DB_URL");
        String dbUsername = System.getenv("DB_USERNAME");
        String dbPassword = System.getenv("DB_PASSWORD");

        // Fallback to .env file only if running locally
        if (dbUrl == null || dbUsername == null || dbPassword == null) {
            Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
            dbUrl = dbUrl != null ? dbUrl : dotenv.get("DB_URL");
            dbUsername = dbUsername != null ? dbUsername : dotenv.get("DB_USERNAME");
            dbPassword = dbPassword != null ? dbPassword : dotenv.get("DB_PASSWORD");
        }

        // Set properties for Spring Boot
        System.setProperty("DB_URL", dbUrl);
        System.setProperty("DB_USERNAME", dbUsername);
        System.setProperty("DB_PASSWORD", dbPassword);

        SpringApplication.run(ContactappApplication.class, args);
    }
}
