package br.com.faculdade.pi;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class PiApplication {

	public static void main(String[] args) {

		SpringApplication.run(PiApplication.class, args);
	}

}
