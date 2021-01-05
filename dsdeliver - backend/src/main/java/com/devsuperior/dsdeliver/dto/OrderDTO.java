package com.devsuperior.dsdeliver.dto;

import com.devsuperior.dsdeliver.entities.Enum.OrderStatus;
import com.devsuperior.dsdeliver.entities.Order;

import java.io.Serializable;
import java.time.Instant;

public class OrderDTO implements Serializable {
    public static final long serialVersionUID = 1L;

    private Long id;
    private String address;
    private Double latitude;
    private Double longitude;
    private Instant moment;
    private OrderStatus status;

    public OrderDTO(Order entity){
        id = entity.getId();
        address = entity.getAddress();;
        latitude = entity.getLatitude();
        longitude = entity.getLongitude();
        moment = entity.getMoment();
        status = entity.getStatus();
    }
}
