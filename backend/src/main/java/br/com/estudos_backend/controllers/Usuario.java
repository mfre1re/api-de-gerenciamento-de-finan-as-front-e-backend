package br.com.estudos_backend.controllers;

import br.com.estudos_backend.entities.UsuarioEntity;
import br.com.estudos_backend.services.UsuarioService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("usuario")
public class Usuario {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<UsuarioEntity> buscarTodosOsUsuarios(){
        return usuarioService.buscarTodosOsUsuarios();
    }

    @PostMapping
    public void inserirUsuario(@RequestBody UsuarioEntity usuario){
        System.out.println(usuario);
        usuarioService.inserirUsuario(usuario);
    }

    @PostMapping("atualiza")
    public Object atualizarUsuario(@RequestBody UsuarioEntity usuario){
        if(usuario.getId() == null || !usuarioService.existeIdUsuario(usuario.getId())){
            return ResponseEntity.status(500).build();
        } else{
            usuarioService.inserirUsuario(usuario);
        }
        return usuario;
    }

    @DeleteMapping
    public void deletarUsuario(@PathParam("id") Integer id){
        usuarioService.deletarUsuario(id);
    }
}
