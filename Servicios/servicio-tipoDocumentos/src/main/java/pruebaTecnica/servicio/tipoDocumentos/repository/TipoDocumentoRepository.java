package pruebaTecnica.servicio.tipoDocumentos.repository;


import org.springframework.data.jpa.repository.JpaRepository;


import pruebaTecnica.common.tipoDocumento.model.TipoDocumento;

public interface TipoDocumentoRepository extends JpaRepository<TipoDocumento, Long> {


}
