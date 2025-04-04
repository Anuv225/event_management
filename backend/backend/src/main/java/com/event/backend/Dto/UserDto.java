package com.event.backend.Dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class UserDto {

    @NotEmpty
    Long userId;

    @NotEmpty
    String userName;

    Boolean rsvp;

    String role;

}
