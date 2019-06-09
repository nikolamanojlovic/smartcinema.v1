package com.nmanojlovic.smartcinema.services.implementation;

import com.nmanojlovic.smartcinema.daos.IHallDao;
import com.nmanojlovic.smartcinema.data.HallData;
import com.nmanojlovic.smartcinema.data.UserData;
import com.nmanojlovic.smartcinema.models.Hall;
import com.nmanojlovic.smartcinema.models.User;
import com.nmanojlovic.smartcinema.populators.ISuperPopulator;
import com.nmanojlovic.smartcinema.services.IHallService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("hallService")
public class HallService implements IHallService {

    @Resource(name = "hallDao")
    private IHallDao hallDao;

    @Resource(name = "hallPopulator")
    private ISuperPopulator<Hall, HallData> hallPopulator;

    @Override
    public Optional<List<HallData>> findAllHalls() {
        return Optional.ofNullable(hallPopulator.populateList(hallDao.findAll()));
    }
}
