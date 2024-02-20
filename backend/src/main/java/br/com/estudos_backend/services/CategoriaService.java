package br.com.estudos_backend.services;

import br.com.estudos_backend.entities.CategoriaEntity;
import br.com.estudos_backend.repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<CategoriaEntity> buscarTodasAsCategorias(){
        return categoriaRepository.findAll();
    }
}
