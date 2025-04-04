package com.event.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;

@Configuration
public class OpenAPIConfiguration {
    @Bean
    public OpenAPI defineOpenApi() {
        Server server = new Server();
        server.setUrl("http://localhost:8080/docs");
        server.setDescription("Development");

        Contact contact = new Contact();
        contact.setName("Anuvind Paul");
        contact.setEmail("anuvindpl05@gmail.com");

        Info information = new Info()
                .title("Event Management")
                .version("1.0")
                .description("Api to perform crud operation on events, register users and authenticate users")
                .contact(contact);

        return new OpenAPI().info(information).servers(List.of(server));
    }
}

