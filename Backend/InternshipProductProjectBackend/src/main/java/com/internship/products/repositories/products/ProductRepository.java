package com.internship.products.repositories.products;

import org.springframework.data.repository.CrudRepository;

import com.internship.products.models.ProductEntity;

public interface ProductRepository extends CrudRepository< ProductEntity , Long >
{

}
