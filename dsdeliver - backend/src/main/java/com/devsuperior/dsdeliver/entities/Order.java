package com.devsuperior.dsdeliver.entities;

import com.devsuperior.dsdeliver.entities.Enum.OrderStatus;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "tb_order")
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;
    //Explicação em Products...

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;
    private Double latitude;
    private Double longitude;
    private Instant moment;
    private OrderStatus status;

    @ManyToMany
    @JoinTable(
        name = "tb_order_product",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> products = new HashSet<>();

    //Ele usa o Set porque ele não quer admitir repetições do mesmo produto dentro do mesmo pedido. O Set garante que não vai repetir. Ele também na hora de criar o banco, ele já faz a relação muitos pra muitos.

}
