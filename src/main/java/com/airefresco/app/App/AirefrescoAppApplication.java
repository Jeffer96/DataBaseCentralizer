package com.airefresco.app.App;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;

@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class, ErrorMvcAutoConfiguration.class})
public class AirefrescoAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AirefrescoAppApplication.class, args);
	}

}
