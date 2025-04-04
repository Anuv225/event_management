package com.event.backend.controller;

import com.event.backend.Dto.AuthRequest;
import com.event.backend.Dto.CustomUserDetails;
import com.event.backend.Dto.UserDto;
import com.event.backend.entity.User;
import com.event.backend.exception.UserNotFoundException;
import com.event.backend.service.CustomUserService;
import com.event.backend.service.JwtService;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
public class UserController {


    private CustomUserService service;

    private JwtService jwtService;

    private AuthenticationManager authenticationManager;

    @Autowired
    public UserController(CustomUserService service, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.service = service;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }


    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@Valid @RequestBody User userEntity){

        UserDto userDto  = new UserDto();
        BeanUtils.copyProperties(userEntity,userDto);

        service.addUser(userEntity);

        return new ResponseEntity<>(userDto,HttpStatus.CREATED);

    }



    @PostMapping("/login")
    public String authenticateAndGetToken(@Valid @RequestBody AuthRequest authRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(),authRequest.getPassword())
        );
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(authRequest.getUsername());
        }else{
            throw new UserNotFoundException("Invalid user request!");
        }
    }

}



