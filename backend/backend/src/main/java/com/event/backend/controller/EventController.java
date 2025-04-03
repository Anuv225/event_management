package com.event.backend.controller;


import com.event.backend.Dto.EventDto;
import com.event.backend.Dto.ResponseDto;
import com.event.backend.service.EventService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    EventService eventService;

    @PostMapping
    public ResponseEntity<ResponseDto> addTodo(@Valid @RequestBody EventDto eventDto){

        eventDto.setCreatedAt(LocalDateTime.now());
        eventDto.setUpdatedAt(LocalDateTime.now());

        ResponseDto response = eventService.addEvent(eventDto);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
