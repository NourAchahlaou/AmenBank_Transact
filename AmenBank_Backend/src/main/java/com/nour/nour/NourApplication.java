package com.nour.nour;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class NourApplication {

	public static void main(String[] args) {
		SpringApplication.run(NourApplication.class, args);
	}

}
