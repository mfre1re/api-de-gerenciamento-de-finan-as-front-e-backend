package br.com.estudos_backend.services;

import br.com.estudos_backend.entities.TransacaoEntity;
import br.com.estudos_backend.repositories.TransacaoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class TransacaoService {

    @Autowired
    private TransacaoRepository transacaoRepository;

    public Page<TransacaoEntity> listarTransacoesPaginadas(int pagina, int itensPorPagina) {
        Pageable pageable = PageRequest.of(pagina - 1, itensPorPagina);
        return transacaoRepository.findAll(pageable);
    }

    public Page<TransacaoEntity> listarTransacoesPaginadas(Pageable pageable) {
        return transacaoRepository.findAll(pageable);
    }
    public void inserirTransacao(TransacaoEntity transacao){
        transacaoRepository.save(transacao);
    }

    public boolean verificarTransacaoId(Integer id){
        return transacaoRepository.existsById(id);
    }

    public void atualizarTransacao(TransacaoEntity transacao){
        transacaoRepository.save(transacao);
    }

    public void apagarTransacao(Integer id){
        transacaoRepository.deleteById(id);
    }

    public void apagarTodasAsTransacoes() {
        transacaoRepository.deleteAll();
    }

    public List<TransacaoEntity> somarTransacoesPorCategoriaEUsuario(Integer categoriaId, Integer usuarioId) {
        // Verifica se ambos os parâmetros estão presentes
        if (categoriaId != null && usuarioId != null) {
            // Realiza a filtragem por categoria e usuário
            return transacaoRepository.findByCategoriaIdAndUsernameId(categoriaId, usuarioId);
        } else {
            // Retorna uma lista vazia se algum dos parâmetros estiver ausente
            return Collections.emptyList();
        }
    }
}
