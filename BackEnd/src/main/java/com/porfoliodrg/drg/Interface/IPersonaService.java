package com.porfoliodrg.drg.Interface;

import com.porfoliodrg.drg.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Consultar una lista personas
    public List<Persona> getPersona();
    
    //Guardar obj tipo person
    public void savePersona(Persona persona);
    
    //Eliminar Usuario por ID
    public void deletePersona(Long id);
    
    //Buscar una persona en especial
    public Persona findPersona(Long id);        
}
