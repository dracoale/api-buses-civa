package com.civa.api_buses.repository;

import com.civa.api_buses.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusRepository extends JpaRepository<Bus,Long> {
}
