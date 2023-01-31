package pruebaTecnica.servicio.clientes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@EntityScan({"pruebaTecnica.common.clientes.model"})
public class ServicioClientesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicioClientesApplication.class, args);
	}

}
