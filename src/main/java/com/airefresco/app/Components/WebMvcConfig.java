package com.airefresco.app.Components;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

    private final long MAX_AGE_SECS = 3600;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE")
                .maxAge(MAX_AGE_SECS);
    }
    
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
    	registry.addResourceHandler("/static/**")
        .addResourceLocations("/front-end/build/static");
      registry.addResourceHandler("/*.js")
        .addResourceLocations("/front-end/build/");
      registry.addResourceHandler("/*.json")
        .addResourceLocations("/front-end/build/");
      registry.addResourceHandler("/*.ico")
        .addResourceLocations("/front-end/build/");
      registry.addResourceHandler("/index.html")
        .addResourceLocations("/front-end/build/index.html");
    }
}
