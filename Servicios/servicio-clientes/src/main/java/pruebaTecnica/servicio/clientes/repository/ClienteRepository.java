package pruebaTecnica.servicio.clientes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pruebaTecnica.common.clientes.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	
	
	@Query(value="SELECT * FROM clientes WHERE cliente.numero_documento = :numeroDocumento" , nativeQuery=true)
	List<Cliente> buscarClienteDocumento(@Param("numeroDocumento") String numeroDocumento);

}
