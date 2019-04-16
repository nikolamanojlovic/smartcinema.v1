package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.data.TicketData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/ticket")
public class TicketController extends SuperController {

    @PostMapping(value = "/save")
    public ResponseEntity<String> reservation(@RequestBody String ticket) {
        TicketData ticketData = getGson().fromJson(ticket, TicketData.class);
        return null;
    }
}
