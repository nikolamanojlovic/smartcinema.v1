package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.data.TicketData;
import com.nmanojlovic.smartcinema.services.ITicketService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/ticket")
public class TicketController extends SuperController {

    @Resource(name = "ticketService")
    private ITicketService ticketService;

    @PostMapping(value = "/save")
    public ResponseEntity<String> reservation(@RequestBody String ticket) {
        TicketData ticketData = getGson().fromJson(ticket, TicketData.class);
        return sendResponse(Optional.of(ticketService.createTicketForUser(ticketData)), Boolean.class, HttpStatus.OK);
    }
}
