# D&D Damage Multiplier Calculator

## Project Overview

The D&D Damage Multiplier Calculator is an application that helps me calculating my moves in Dungeons & Dragons. The project consists of a Java Spring Boot backend and a React frontend.

## Tech Stack

### Backend
- Java
- Spring Boot
- Maven

### Frontend
- React
- TailwindCSS
- Axios

### API Communication
- RESTful API

### Development Tools
- Postman (API testing)
- VS Code

## Features

- Select a D&D move from a predefined list
- Apply multipliers like critical hit and sneak attack
- Calculate final damage based on dice rolls
- Frontend communicates with backend via REST API

## Backend Setup (Spring Boot)

### Prerequisites
- Java 17+
- Maven
- Spring Boot

### Installation & Running

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dnd-damage-calculator.git
```

2. Navigate to the backend directory:

```bash
mvn spring-boot:run

3. Test API using Postman:
- URL: `http://localhost:8080/api/damage/calculate?isCritical=true&isSneakAttack=false`
- Method: `POST`
- Body (JSON):

```json
{
  "moveName": "shortsword"
}
```

## Frontend Setup (React)

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm start
```

4. Start the backend:

```bash
mvn spring-boot:run
```

5. Test the application:

```bash
http://localhost:3000/
``` 






