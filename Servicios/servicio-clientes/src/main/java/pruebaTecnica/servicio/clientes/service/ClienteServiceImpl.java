package pruebaTecnica.servicio.clientes.service;

import org.springframework.stereotype.Service;

import pruebaTecnica.common.clientes.model.Cliente;
import pruebaTecnica.common.service.controller.CommonServiceImp;
import pruebaTecnica.servicio.clientes.repository.ClienteRepository;

@Service
public class ClienteServiceImpl extends CommonServiceImp<Cliente,ClienteRepository> implements ClienteService {


}
