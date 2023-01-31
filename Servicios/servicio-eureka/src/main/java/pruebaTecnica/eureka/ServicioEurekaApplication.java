package pruebaTecnica.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ServicioEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicioEurekaApplication.class, args);
	}

}
