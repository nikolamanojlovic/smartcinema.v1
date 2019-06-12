package com.nmanojlovic.smartcinema.controllers;

import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.services.IProjectionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/projection")
public class ProjectionController extends SuperController {

    @Resource(name = "projectionService")
    private IProjectionService projectionService;

    @PostMapping(value = "/save")
    public ResponseEntity<String> save(@RequestBody String payload) {
        HashMap data = getGson().fromJson(payload, HashMap.class);

        ProjectionData projectionData = projectionService.prepareProjectionDataFromMap(data);
        return sendResponse(Optional.of(projectionService.saveProjection(projectionData)), Boolean.class, HttpStatus.NOT_ACCEPTABLE);
    }
}