package com.nmanojlovic.smartcinema.services;

import com.nmanojlovic.smartcinema.data.HallData;

import java.util.List;
import java.util.Optional;

public interface IHallService {

    Optional<List<HallData>> findAllHalls();
}
