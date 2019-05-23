package com.internship.products.rest.controllers;


import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.internship.products.models.ProductEntity;
import com.internship.products.repositories.products.ProductRepository;


/**
 * @author Tsvetelin
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping ( path = "/products" , produces = "application/json" )
public class ProductsController
{
    private static final Logger log = LoggerFactory
            .getLogger( ProductsController.class );

    
    @Autowired
    private ProductRepository prodRepo;

    @GetMapping ( path = "/all" )
    @ResponseBody
    public Iterable< ProductEntity > getAll ()
    {
        log.info( "Finding all" );
        return prodRepo.findAll();
    }

    @PostMapping ( path = "/{id}" )
    @ResponseBody
    public Optional< ProductEntity > getById ( @PathVariable long id )
    {
        log.info( "Finding by id = " + id );
        return prodRepo.findById( id );
    }
    
    @PostMapping ( path = "/add" )
    @ResponseBody
    public ProductEntity add (
            @RequestParam String name ,
            @RequestParam String description ,
            @RequestParam double price
    )
    {
        ProductEntity entity = new ProductEntity(name , description , price);
        log.info( "Saving entity: " + entity );
        return prodRepo.save( entity );
    }

    @DeleteMapping ( path = "/delete" )
    @ResponseBody
    public void delete ( @RequestParam ProductEntity product )
    {
        log.info( "Deleting: " + product );
        prodRepo.delete( product );
    }

    @DeleteMapping ( path = "/delete/{id}" )
    @ResponseBody
    public void delete ( @PathVariable long id )
    {
        log.info( "Deleting id= " + id );
        prodRepo.deleteById( id );
    }
    
    @PostMapping( path = "/update" )
    @ResponseBody
    public void update( @RequestParam ProductEntity prod )
    {
        log.info( "Saving new: " + prod );
        prodRepo.save( prod );
    }
    

}
