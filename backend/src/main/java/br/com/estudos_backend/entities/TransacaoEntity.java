package br.com.estudos_backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity(name = "transacao")
public class TransacaoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idtransacao")
    private Integer id;

    @Column(name = "valor")
    private Integer valor;

    @Column(name = "data")
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "categoriaid")
    private CategoriaEntity categoria;

    @ManyToOne
    @JoinColumn(name = "usuarioid")
    private UsuarioEntity username;
}
