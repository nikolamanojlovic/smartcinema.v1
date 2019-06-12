package com.nmanojlovic.smartcinema.controllers;

import com.google.gson.Gson;
import com.nmanojlovic.smartcinema.data.ProjectionData;
import com.nmanojlovic.smartcinema.services.IProjectionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/projection")
public class ProjectionController extends SuperController {

    @Resource(name = "projectionService")
    private IProjectionService projectionService;

    @Resource
    private Gson gson;

    @GetMapping(value = "/save")
    public ResponseEntity<String> save(@RequestBody String payload) {
        ProjectionData data = gson.fromJson(payload, ProjectionData.class);
        return sendResponse(Optional.of(projectionService.saveProjection(data)), ArrayList.class, HttpStatus.NO_CONTENT);
    }
}