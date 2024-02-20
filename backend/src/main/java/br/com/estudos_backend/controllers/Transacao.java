package br.com.estudos_backend.controllers;

import br.com.estudos_backend.entities.TransacaoEntity;
import br.com.estudos_backend.repositories.UsuarioRepository;
import br.com.estudos_backend.services.TransacaoService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("transacao")
public class Transacao {
    @Autowired
    private TransacaoService transacaoService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public Page<TransacaoEntity> listarTransacoes(
            @RequestParam(defaultValue = "1") int pagina,
            @RequestParam(defaultValue = "10") int itensPorPagina) {

        Pageable pageable = PageRequest.of(pagina - 1, itensPorPagina);
        return transacaoService.listarTransacoesPaginadas(pageable);
    }

    @GetMapping("somartransacoes")
    public Object somarTransacoesPorCategoria(@PathParam("id") Integer id, @PathParam("username") Integer userid){
        if(id == null && userid == null){
            return ResponseEntity.status(500).build();
        } else{
            List<TransacaoEntity> transacoes = transacaoService.somarTransacoesPorCategoriaEUsuario(id, userid);
            double somaContas = 0;

            for (TransacaoEntity transacao : transacoes) {
                somaContas += transacao.getValor();
            }
            return somaContas;
        }
    }

    @PostMapping
    public ResponseEntity<Object> inserirTransacao(@RequestBody List<TransacaoEntity> transacoes) {
        System.out.println(transacoes);
        for (TransacaoEntity transacao : transacoes) {
            Integer usuarioId = transacao.getUsername().getId();

            // Verifica se o usuário com o usuarioid existe
            if (!usuarioRepository.existsById(usuarioId)) {
                return ResponseEntity.status(404).body("Usuário não encontrado para o id: " + usuarioId);
            }

            // Se o usuário existir, adiciona a transação
            transacaoService.inserirTransacao(transacao);
        }

        return ResponseEntity.status(200).build();
    }

    @PostMapping("atualiza")
    public ResponseEntity<Object> atualizarTransacao(@RequestBody TransacaoEntity transacao) {
        if (transacao.getId() == null || !transacaoService.verificarTransacaoId(transacao.getId())) {
            return ResponseEntity.status(404).build();
        } else {
            transacaoService.inserirTransacao(transacao);
        }
        return ResponseEntity.status(200).build();
    }

    @DeleteMapping
    public Object apagarTransacao(@PathParam("id") Integer id){
        if(!transacaoService.verificarTransacaoId(id)){
            return ResponseEntity.status(404).build();
        } else{
            transacaoService.apagarTransacao(id);
        }
        return ResponseEntity.status(200).build();
    }

    @DeleteMapping("apagartudo")
    public ResponseEntity apagarTodasAsTransacoes(TransacaoEntity transacao){
        transacaoService.apagarTodasAsTransacoes();
        return ResponseEntity.status(200).build();
    }
}
