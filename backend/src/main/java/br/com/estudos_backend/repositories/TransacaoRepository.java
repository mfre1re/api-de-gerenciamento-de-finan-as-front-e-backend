package br.com.estudos_backend.repositories;

import br.com.estudos_backend.entities.TransacaoEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransacaoRepository extends JpaRepository<TransacaoEntity, Integer> {
    Page<TransacaoEntity> findAll(Pageable pageable);
    List<TransacaoEntity> findByCategoriaIdAndUsernameId(Integer categoriaId, Integer usuarioId);
}
