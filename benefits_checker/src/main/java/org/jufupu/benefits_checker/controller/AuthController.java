package org.jufupu.benefits_checker.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // For demo purposes, accept any email/password combination
        if ("user@example.com".equals(request.getEmail()) && "password".equals(request.getPassword())) {
            return ResponseEntity.ok(new AuthResponse("fake-jwt-token"));
        }
        return ResponseEntity.badRequest().body(new ErrorResponse("Invalid credentials"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody LoginRequest request) {
        // For demo purposes, accept any registration
        return ResponseEntity.ok(new AuthResponse("fake-jwt-token"));
    }
}

class LoginRequest {
    private String email;
    private String password;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

class AuthResponse {
    private final String token;

    public AuthResponse(String token) { this.token = token; }
    public String getToken() { return token; }
}

class ErrorResponse {
    private final String message;

    public ErrorResponse(String message) { this.message = message; }
    public String getMessage() { return message; }
} 