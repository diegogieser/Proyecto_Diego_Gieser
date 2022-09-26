
package com.porfoliodrg.drg.Security.Service;

import com.porfoliodrg.drg.Security.Ennums.RolNombre;
import com.porfoliodrg.drg.Security.Entity.Rol;
import com.porfoliodrg.drg.Security.Repository.iRolRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
//Declaro Persistencia de la base de datos
@Transactional
public class RolService {
    @Autowired
    iRolRepository irolRepository;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
       return irolRepository.findByRolNombre(rolNombre);
    }
    
    public void save(Rol rol){
        irolRepository.save(rol);
    }
}
