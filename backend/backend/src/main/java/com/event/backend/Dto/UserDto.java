package com.event.backend.Dto;

import jakarta.validation.constraints.NotEmpty;

public class UserDto {

    @NotEmpty
    Long userId;

    @NotEmpty
    String userName;

    @NotEmpty
    String email;

    Boolean rsvp;

    String role;

}
