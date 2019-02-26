package com.nmanojlovic.smartcinema;

import com.nmanojlovic.smartcinema.constants.RoleConstants;
import com.nmanojlovic.smartcinema.constants.SexConstants;
import com.nmanojlovic.smartcinema.daos.IGroupDao;
import com.nmanojlovic.smartcinema.daos.IRoleDao;
import com.nmanojlovic.smartcinema.daos.IUserDao;
import com.nmanojlovic.smartcinema.models.*;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
public class SmartCinemaDBSeeder {

    @Resource(name = "roleDao")
    private IRoleDao roleDao;

    @Resource(name = "userDao")
    private IUserDao userDao;

    @Resource(name = "groupDao")
    private IGroupDao groupDao;

    /** CREATE SAMPLE DATA **/
    @EventListener
    @Transactional
    public void seed(ApplicationReadyEvent event) {
        DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        /* SAMPLE ROLES */
        List<RoleConstants> roles = Arrays.asList(RoleConstants.values());
        roles.forEach(role -> roleDao.create(new Role(role.name())));

        BuffGroup buffGroup = new BuffGroup(0, "Strudent", null);
        FilmBuff filmBuff = new FilmBuff(
                "test@test.com",
                "test123",
                "Test",
                "TestLastName",
                SexConstants.M.name().charAt(0),
                true,
                false,
                Collections.singletonList(roleDao.findAll().stream().filter(role ->
                        role.getName().equals(RoleConstants.ROLE_USER.name())).findFirst().orElseGet(null)),
                Date.valueOf(LocalDate.parse("1995-07-03 00:00:00", dateFormat)),
                "Student at FON",
                "Beograd",
                "SRB",
                "",
                Collections.singletonList(buffGroup), null);
        buffGroup.setBuffs(Collections.singletonList(filmBuff));

        Staff staff = new Staff(
                "admin@test.com",
                "test123",
                "AdminTest",
                "TestLastName",
                SexConstants.M.name().charAt(0),
                true,
                false,
                Collections.singletonList(roleDao.findAll().stream().filter(role ->
                        role.getName().equals(RoleConstants.ROLE_ADMIN.name())).findFirst().orElseGet(null)),
                "Promotion manager");


        groupDao.create(buffGroup);
        List<AbstractUser> users = Arrays.asList(filmBuff, staff);
        users.forEach(user -> userDao.create(user));
    }
}
