package com.example.model;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class BeerExpertTest {
    @Test
    void testGetBrandsWithAmberColor() {
        BeerExpert be = new BeerExpert();
        assertEquals(Arrays.asList("Jack Amber", "Red Moose"), be.getBrands("amber"));
    }

    @Test
    void testGetBrandsWithOtherColors() {
        BeerExpert be = new BeerExpert();
        assertEquals(Arrays.asList("Jail Pale Ale", "Gout Stout"), be.getBrands("dark"));
    }
}