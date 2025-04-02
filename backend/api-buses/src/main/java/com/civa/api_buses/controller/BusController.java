package com.civa.api_buses.controller;

import com.civa.api_buses.model.Bus;
import com.civa.api_buses.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("api-buses")
@CrossOrigin(origins = "http://localhost:3000")

public class BusController {
    @Autowired
    private BusService busService;


    @GetMapping("/listar")
    public Page<Bus> getAllBusesPaginated(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        return busService.listarTodosBuses(page, size);
    }

    // Endpoint para obtener un bus por su ID
    @GetMapping("/buscar/{id}")
    public Optional<Bus> obtenerBusXId(@PathVariable Long id) {
        return busService.obtenerBusXId(id);
    }
}
