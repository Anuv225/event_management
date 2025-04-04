package com.event.backend.Dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest {

    private String name;

    //this is email
    @NotEmpty(message = "Email is required")
    private String username;
    @NotEmpty(message = "Password is required")
    private String password;

}
