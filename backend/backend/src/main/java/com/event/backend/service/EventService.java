package com.event.backend.service;

import com.event.backend.Dto.EventDto;
import com.event.backend.Dto.ResponseDto;
import com.event.backend.entity.Event;
import com.event.backend.exception.EventNotFound;
import com.event.backend.repository.EventRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;


    public EventDto convertToDto(Event event) {
        EventDto eventDto = new EventDto();
        BeanUtils.copyProperties(event, eventDto);
        return eventDto;
    }

    public Event convertToEntity(EventDto eventDto) {
        Event event = new Event();
        BeanUtils.copyProperties(eventDto, event);
        return event;
    }


    public List<EventDto> getAllEvents(Pageable pageable) {
        Page<Event> eventPage = eventRepository.findAll(pageable);

        // Convert the content of the Page<Event> to a List<EventDto>
        List<EventDto> eventDtoList = new ArrayList<>();
        for (Event event : eventPage.getContent()) {
            eventDtoList.add(convertToDto(event));
        }

        return eventDtoList;
    }


    //Add a new Event
    public ResponseDto addEvent(EventDto eventDto) {
        Event event = convertToEntity(eventDto);
        eventRepository.save(event);
        return new ResponseDto("Event added Successfully");
    }

    //update event
    public ResponseDto updateEvent(long id, EventDto eventDto) {

        eventDto.setUpdatedAt(LocalDateTime.now());
        Optional<Event> event = eventRepository.findById(id);

        if (event.isPresent()) {

            Event eventEntity = event.get();
            BeanUtils.copyProperties(eventDto, eventEntity);
            eventEntity.setEventId(id);
            eventRepository.save(eventEntity);
            return new ResponseDto("Event updated Successfully");
        } else {
            throw new EventNotFound("Event not found with id:" + id);
        }

    }

    //get a single event by id
    public EventDto getEventById(long id) {
        Optional<Event> event = eventRepository.findById(id);
        if (event.isPresent()) {
            Event eventEntity = event.get();
            return convertToDto(eventEntity);
        } else {
            throw new EventNotFound("Event not found with id: " + id);
        }

    }

    //get a single event by id
    public ResponseDto deleteEventById(long id) {
        Optional<Event> event = eventRepository.findById(id);
        if (event.isPresent()) {
            Event eventEntity = event.get();
            eventRepository.delete(eventEntity);
            return new ResponseDto("Event deleted successfully with id: " + id);
        } else {
            throw new EventNotFound("Event not found with id: " + id);
        }

    }


}
