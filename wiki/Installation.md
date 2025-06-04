# Installation Guide

This guide will help you set up the CPU Management App on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- Java 17 or higher
- Node.js and npm
- MySQL or MariaDB
- Git

## Database Setup

1. Install MySQL or MariaDB
2. The database will be created automatically when you run the application
3. Default credentials (can be modified in `application.properties`):
   ```
   Database: cpudb
   Username: root
   Password: root
   ```

## Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SSVD23/CPU-Management-app.git
   cd CPU-Management-app
   ```

2. Navigate to backend directory:
   ```bash
   cd backend
   ```

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

4. The backend will start at http://localhost:8080

## Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

4. The frontend will be available at http://localhost:3000

## Verification

To verify the installation:
1. Open http://localhost:3000 in your browser
2. You should see the CPU list page
3. Try searching and sorting CPUs
4. Try editing a CPU's details

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify MySQL/MariaDB is running
   - Check database credentials in `application.properties`
   - Ensure port 3306 is available

2. **Backend Won't Start**
   - Verify Java version (17 or higher required)
   - Check if port 8080 is available
   - Review application logs for errors

3. **Frontend Won't Start**
   - Verify Node.js and npm are installed
   - Check if port 3000 is available
   - Try clearing npm cache: `npm cache clean --force`

### Getting Help

If you encounter any issues:
1. Check the [Issues](https://github.com/SSVD23/CPU-Management-app/issues) page
2. Create a new issue with detailed error information
3. Review error logs in `backend/logs` directory 