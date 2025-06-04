# Development Guide

This guide provides information for developers who want to contribute to or modify the CPU Management App.

## Project Structure

```
CPU-Management-app/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── cpumanagement/
│   │   │   │           ├── controller/
│   │   │   │           ├── model/
│   │   │   │           ├── repository/
│   │   │   │           └── service/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── styles/
│   ├── package.json
│   └── README.md
└── README.md
```

## Technology Stack

### Backend
- Spring Boot 3.x
- Java 17
- Spring Data JPA
- MySQL/MariaDB
- Maven

### Frontend
- React 18.x
- Axios for API calls
- CSS for styling
- Node.js and npm

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/CPU-Management-app.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Code Style Guidelines

### Java
- Follow standard Java naming conventions
- Use meaningful variable and method names
- Add JavaDoc comments for public methods
- Keep methods focused and small
- Use proper exception handling

### React/JavaScript
- Use functional components
- Follow ESLint configuration
- Use meaningful component names
- Keep components focused and reusable
- Add JSDoc comments for component props

## Testing

### Backend Tests
- Write unit tests for services
- Write integration tests for controllers
- Run tests:
  ```bash
  cd backend
  ./mvnw test
  ```

### Frontend Tests
- Write component tests using React Testing Library
- Run tests:
  ```bash
  cd frontend
  npm test
  ```

## Making Changes

1. Make your changes in your feature branch
2. Write/update tests as needed
3. Ensure all tests pass
4. Update documentation if needed
5. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Create a Pull Request

## Best Practices

### Backend
1. Use DTOs for API responses
2. Implement proper validation
3. Follow REST principles
4. Use appropriate HTTP status codes
5. Handle exceptions properly

### Frontend
1. Use TypeScript for type safety
2. Implement proper error handling
3. Use React hooks effectively
4. Keep components small and focused
5. Implement proper loading states

## Database

### Entity Relationships
```
CPU
├── id (PK)
├── brand
├── model
├── socket_id (FK)
├── clock_speed
├── cores
├── threads
├── tdp
└── price

Socket
├── id (PK)
└── name
```

### Database Migrations
- Use Flyway for database migrations
- Migrations are in `backend/src/main/resources/db/migration`
- Follow naming convention: `V{version}__{description}.sql`

## Deployment

### Backend Deployment
1. Build the JAR:
   ```bash
   cd backend
   ./mvnw clean package
   ```
2. Run the JAR:
   ```bash
   java -jar target/cpu-management-app.jar
   ```

### Frontend Deployment
1. Build the production bundle:
   ```bash
   cd frontend
   npm run build
   ```
2. Serve the build directory

## Contributing

1. Check existing issues or create a new one
2. Discuss changes in the issue
3. Follow the development process
4. Submit a Pull Request
5. Respond to review comments

## Getting Help

- Check existing documentation
- Review closed issues
- Create a new issue
- Contact the maintainers 