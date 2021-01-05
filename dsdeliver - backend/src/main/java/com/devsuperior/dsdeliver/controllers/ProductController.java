package com.devsuperior.dsdeliver.controllers;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll(){
        List<ProductDTO> list = productService.findAll();
        return ResponseEntity.ok().body(list);
    }

    //O ResponseEntity ele vai encapsular uma resposta de uma requisição HTTP;
    //Em seguida, ele faz uma variável para receber a lista (que está vindo do service);
    //Em seguida, ele vai retorna um status HTTP e o corpo (body);


}
