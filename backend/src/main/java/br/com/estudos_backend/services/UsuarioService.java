package br.com.estudos_backend.services;

import br.com.estudos_backend.entities.UsuarioEntity;
import br.com.estudos_backend.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository usuarioRepository;


    public List<UsuarioEntity> buscarTodosOsUsuarios(){
        return usuarioRepository.findAll();
    }

    public void inserirUsuario(UsuarioEntity usuario){
        usuarioRepository.save(usuario);
    }

    public void atualizarUsuario(UsuarioEntity usuario){
        usuarioRepository.save(usuario);
    }

    public boolean existeIdUsuario(Integer id){
        return usuarioRepository.existsById(id);
    }

    public void deletarUsuario(Integer id){
        usuarioRepository.deleteById(id);
    }

}
