package br.com.estudos_backend.controllers;

import br.com.estudos_backend.entities.CategoriaEntity;
import br.com.estudos_backend.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("categoria")
public class Categoria {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public List<CategoriaEntity> buscarTodasAsCategorias(){
        return categoriaService.buscarTodasAsCategorias();
    }
}
