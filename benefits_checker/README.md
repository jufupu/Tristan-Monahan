# Benefits Eligibility Checker

## Overview

The Benefits Eligibility Checker is a web application designed to assess an individual's eligibility for government benefits based on their income, family size, and location. This project demonstrates a Java Spring Boot backend integrated with a React frontend.

## Technologies Used

### Backend:

- **Java 17** – Core language used for backend development.
- **Spring Boot 3.2.2** – Framework for building the REST API.
- **Spring Web** – Handles HTTP requests and RESTful services.
- **Spring Boot Starter Test** – Used for writing unit and integration tests.
- **Jackson Databind** – For JSON processing.
- **Maven** – Dependency management and build automation.
- **CORS Configuration** – Allows secure communication between frontend and backend.

### Frontend:

- **React** – Modern JavaScript framework for building dynamic UI.
- **Axios** – Library for making HTTP requests to the backend API.
- **CSS** – Styling and layout design.
- **JavaScript (ES6+)** – Enables interactive user experience.

### Tools & Deployment:

- **Postman** – API testing and debugging.
- ** VS Code** – IDEs used for development.
- **Maven** – Manages dependencies and builds the backend application.
- **npm** – Package manager for frontend dependencies.
- **GitHub** – Version control and project repository.

## Project Features

### Backend (Spring Boot API):

- Built with Spring Boot and follows RESTful principles.
- **API Endpoint**: `/api/check` (POST) to process user input and return eligibility results.
- Handles input validation and processes JSON requests.
- Implements CORS policy to enable communication with the React frontend.
- Designed with scalability and maintainability in mind.

### Frontend (React Application):

- User-friendly form for collecting name, income, family size, and location.
- Axios-based API call to send data to the backend.
- Real-time response display showing eligibility results.
- Clean and minimalistic UI with a focus on usability.

## How It Works

1. **User Interaction**
   - The user visits the frontend interface (http://localhost:3000).
   - They enter their name, income, family size, and location into the form.
   - Upon submission, the data is sent to the backend for processing.

2. **Backend Processing**
   - The Spring Boot API receives the data via the `/api/check` endpoint.
   - It processes the input and applies business logic to determine eligibility.
   - A JSON response is returned with the eligibility status.

3. **Frontend Display**
   - The React application receives the backend response.
   - The eligibility result is dynamically displayed on the UI.

## API Documentation

**Endpoint**: POST `/api/check`

**Request Body**:

json
{
"name": "John Doe",
"income": 30000,
"familySize": 3,
"location": "Glasgow"
}

**Response**:

json
{
"eligibility": "Eligible for Low income support, Child Support Grant, Disability Living Allowance"
}

## Running the Project

### Backend (Spring Boot)

- Navigate to the backend directory.
- Run the command:
  ```bash
  mvn spring-boot:run
  ```
- The API will be available at http://localhost:8080/api/check.

### Frontend (React)

- Navigate to the frontend directory.
  ```bash
  open benefits_checker_frontend
  cd benefit_checker_frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm start
  ```
- Open http://localhost:3000 in a browser to use the application.

## Future Enhancements

- **Database Integration (PostgreSQL/MySQL)** – Store user submissions.
- **Authentication & Security** – Secure API with JWT authentication.
- **Cloud Deployment** – Deploy using AWS, Azure, or Heroku.
- **Enhanced UI/UX** – Improve design and add animations.
- **Unit & Integration Testing** – Increase test coverage for robustness.

## Conclusion
