package com.devsuperior.dsdeliver.services;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll(){
        List<Product> productList = productRepository.findAllByOrderByNameAsc();
        return productList.stream().map(
                x -> new ProductDTO(x)
        ).collect(Collectors.toList());

        // O recurso stream está disponível apartir do java 8, aceita operações de alta ordem, ou seja, programação funcional.
        // O Map ele vai acrescentar uma função para cada elemento da lista e fazer uma nova lista, obs: isso serve para injetar cada elementos no DTO.
        //O collect ele vai reconverter o productList para uma lista novamente, pois está do tipo stream.
    }
}
