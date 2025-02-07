package com.example.contactapp;

// import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Apply to all endpoints
            .allowedOrigins("https://contactapp-springboot-frontend.onrender.com")  // Allow frontend URL
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Allow methods you need
            .allowedHeaders("*")  // Allow all headers
            .allowCredentials(true);  // Allow credentials (cookies, authorization headers, etc.)
    }
}
