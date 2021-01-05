package com.devsuperior.dsdeliver.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "tb_product")
public class Product implements Serializable {
    // O Serializable é uma boa prática, para que nosso objeto Products possam ser transformados em sequências de Bytes, para evitar problemas na rede na hora de acessar arquivos e etc.
    private static  final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private  Double price;
    private String description;
    private String imageUri;
}
