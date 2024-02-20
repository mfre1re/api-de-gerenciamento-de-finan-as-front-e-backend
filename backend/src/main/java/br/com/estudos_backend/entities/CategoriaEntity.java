package br.com.estudos_backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "categoria")
public class CategoriaEntity {

    @Id
    @Column(name = "idcategoria")
    private Integer id;

    @Column(name = "categoria")
    private String categoria;
}
