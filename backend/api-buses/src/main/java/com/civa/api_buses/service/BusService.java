package com.civa.api_buses.service;

import com.civa.api_buses.model.Bus;
import com.civa.api_buses.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BusService {
    @Autowired
    BusRepository busRepository;


    public Page<Bus> listarTodosBuses(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return busRepository.findAll(pageable);
    }

    public Optional<Bus> obtenerBusXId(Long id) {
        return  busRepository.findById(id);
    }
}
