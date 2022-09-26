
package com.porfoliodrg.drg.Security.Repository;

import com.porfoliodrg.drg.Security.Ennums.RolNombre;
import com.porfoliodrg.drg.Security.Entity.Rol;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
