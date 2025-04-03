package com.event.backend.controller;


import com.event.backend.Dto.EventDto;
import com.event.backend.Dto.ResponseDto;
import com.event.backend.service.EventService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

import java.util.List;

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

    @GetMapping("/{id}")
    public ResponseEntity<EventDto> getToById(@PathVariable Long id){
        EventDto eventDto = eventService.getEventById(id);
        return new ResponseEntity<>(eventDto,HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateEvent(@PathVariable Long id, @Valid @RequestBody EventDto eventDto){

        ResponseDto response = eventService.updateEvent(id,eventDto);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteEvent(@PathVariable Long id){
        ResponseDto response = eventService.deleteEventById(id);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<EventDto>> getEventsPage(Pageable pageable){
        List<EventDto> eventDtoList = eventService.getAllEvents(pageable);

        return new ResponseEntity<>(eventDtoList,HttpStatus.OK);

    }


}
