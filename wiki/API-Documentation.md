# API Documentation

This document describes the REST API endpoints available in the CPU Management App.

## Base URL
All API URLs are relative to: `http://localhost:8080/api`

## Authentication
Currently, the API does not require authentication.

## Endpoints

### CPU Endpoints

#### Get All CPUs
```http
GET /cpus
```
Returns a list of all CPUs.

**Response Example:**
```json
[
  {
    "id": 1,
    "brand": "AMD",
    "model": "Ryzen 5 5600X",
    "socket": {
      "id": 1,
      "name": "AM4"
    },
    "clockSpeed": 3.7,
    "cores": 6,
    "threads": 12,
    "tdp": 65,
    "price": 299.99
  }
]
```

#### Get CPU by ID
```http
GET /cpus/{id}
```
Returns a specific CPU by ID.

**Response Example:**
```json
{
  "id": 1,
  "brand": "AMD",
  "model": "Ryzen 5 5600X",
  "socket": {
    "id": 1,
    "name": "AM4"
  },
  "clockSpeed": 3.7,
  "cores": 6,
  "threads": 12,
  "tdp": 65,
  "price": 299.99
}
```

#### Update CPU
```http
PUT /cpus/{id}
```
Updates an existing CPU.

**Request Body Example:**
```json
{
  "brand": "AMD",
  "model": "Ryzen 5 5600X",
  "socket": {
    "id": 1,
    "name": "AM4"
  },
  "clockSpeed": 3.7,
  "cores": 6,
  "threads": 12,
  "tdp": 65,
  "price": 299.99
}
```

#### Delete CPU
```http
DELETE /cpus/{id}
```
Deletes a CPU by ID.

### Socket Endpoints

#### Get All Sockets
```http
GET /sockets
```
Returns a list of all available CPU sockets.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "AM4"
  },
  {
    "id": 2,
    "name": "LGA1700"
  }
]
```

## Error Responses

The API uses standard HTTP response codes:
- 200: Success
- 400: Bad Request
- 404: Not Found
- 500: Server Error

Error Response Example:
```json
{
  "timestamp": "2024-01-20T12:00:00Z",
  "status": 404,
  "error": "Not Found",
  "message": "CPU with ID 1 not found",
  "path": "/api/cpus/1"
}
```

## Data Validation

### CPU Object Validation Rules
- brand: Required, non-empty string
- model: Required, non-empty string
- socket: Required, valid socket object
- clockSpeed: Required, positive number
- cores: Required, minimum 1
- threads: Required, minimum 1
- tdp: Required, positive number
- price: Required, positive number

## Rate Limiting
Currently, there are no rate limits implemented. 