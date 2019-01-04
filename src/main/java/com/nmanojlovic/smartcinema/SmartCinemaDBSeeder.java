package com.nmanojlovic.smartcinema;

import com.nmanojlovic.smartcinema.constants.RoleConstants;
import com.nmanojlovic.smartcinema.daos.IRoleDao;
import com.nmanojlovic.smartcinema.models.Role;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;

@Component
public class SmartCinemaDBSeeder {

    @Resource(name = "roleDao")
    private IRoleDao roleDao;

    /** CREATE SAMPLE DATA **/
    @EventListener
    @Transactional
    public void seed(ApplicationReadyEvent event) {
        /* SAMPLE ROLES */
        List<RoleConstants> roles = Arrays.asList(RoleConstants.values());
        roles.forEach(role -> roleDao.create(new Role(role.name())));
    }
}
