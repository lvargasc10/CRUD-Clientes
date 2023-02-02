package pruebaTecnica.common.tipoDocumento.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tipo_documentos")
public class TipoDocumento implements Serializable{

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	private String descripcion;
	private String siglas;


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getSiglas() {
		return siglas;
	}
	public void setSiglas(String siglas) {
		this.siglas = siglas;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public boolean equals(Object obj) {
		if(this == obj) {
			return true;
		}

		if(!(obj instanceof TipoDocumento)) {
			return false;
		}

		TipoDocumento tipoDocumento = (TipoDocumento) obj;
		return this.id!=null&& this.id.equals(tipoDocumento.getId());

	}

	private static final long serialVersionUID = 1L;









}
