package pruebaTecnica.servicio.clientes.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import pruebaTecnica.common.clientes.model.Cliente;
import pruebaTecnica.common.service.CommonController;
import pruebaTecnica.servicio.clientes.service.ClienteService;


@RestController
@CrossOrigin({"http://localhost:4200"})
public class ClienteController extends CommonController<Cliente,ClienteService> {
	
	@PutMapping("/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody Cliente clien, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<Cliente> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		Cliente cliente = optional.get();	
		cliente.setTipoDocumento(clien.getTipoDocumento());
		cliente.setNumeroDocumento(clien.getNumeroDocumento());
		cliente.setRazonSocial(clien.getRazonSocial());		
		cliente.setApellidos(clien.getApellidos());
		cliente.setNombres(clien.getNombres());
		cliente.setFechaNacimiento(clien.getFechaNacimiento());		
		cliente.setGenero(clien.getGenero());
		
		
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(cliente));
	}
	
	@GetMapping("/clientes/{numeroDocumento}")
	public ResponseEntity<?> clienteDocumento(@PathVariable String numeroDocumento) {
		return ResponseEntity.ok(service.buscarClienteDocumento(numeroDocumento));
	}
	
	
}
