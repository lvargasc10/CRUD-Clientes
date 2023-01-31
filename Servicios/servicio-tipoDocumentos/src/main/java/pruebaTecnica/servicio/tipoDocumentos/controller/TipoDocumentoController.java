package pruebaTecnica.servicio.tipoDocumentos.controller;


import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import pruebaTecnica.common.service.CommonController;
import pruebaTecnica.common.tipoDocumento.model.TipoDocumento;
import pruebaTecnica.servicio.tipoDocumentos.service.TipoDocumentoService;

@RestController
@CrossOrigin({"http://localhost:4200"})
public class TipoDocumentoController extends CommonController<TipoDocumento,TipoDocumentoService> {
	
	@PutMapping("/{id}")
	public ResponseEntity<?> modificar(@Valid @RequestBody TipoDocumento tDocu, BindingResult result, @PathVariable Long id){
		if(result.hasErrors()) {
			return this.validar(result);
		}
		Optional<TipoDocumento> optional = service.findById(id);
		if(!optional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		TipoDocumento tDocumento = optional.get();		
		tDocumento.setDescripcion(tDocu.getDescripcion());
		tDocumento.setSiglas(tDocu.getSiglas());		
	
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(tDocumento));
	}
	

}
