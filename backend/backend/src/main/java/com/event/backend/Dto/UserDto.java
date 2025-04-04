package com.event.backend.Dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
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
