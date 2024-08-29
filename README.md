# Treehouse Challenges Unit 9: REST API Project

## Introduction

Welcome to the REST API Project for Unit 9 of the Treehouse Full Stack JavaScript Techdegree. In this project, you will use the popular Express web application framework and a SQL database to create a REST API that allows users to create, list, update, and delete items from a school database.

## Project Overview

In this project, you will build a REST API that provides endpoints for managing a collection of courses and users. The API will support the following operations:

- **Create**: Add new courses and users to the database.
- **Read**: Retrieve a list of courses and users, or a single course or user by ID.
- **Update**: Modify existing courses and users.
- **Delete**: Remove courses and users from the database.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **Sequelize**: Promise-based Node.js ORM for SQL databases.
- **SQLite**: SQL database engine.
- **Postman**: API development and testing tool.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager, comes with Node.js)
- [Postman](https://www.postman.com/) (for testing the API)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/treehouse-unit-9-rest-api.git
    cd treehouse-unit-9-rest-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the database**:
    ```bash
    npm run seed
    ```

### Running the Application

To start the application, run the following command:

```bash
npm start
The server will start on http://localhost:3000.
```

## API Endpoints

### Users

- **GET /api/users**: Retrieve the currently authenticated user.
- **POST /api/users**: Create a new user.

### Courses

- **GET /api/courses**: Retrieve a list of all courses.
- **GET /api/courses/:id**: Retrieve a specific course by ID.
- **POST /api/courses**: Create a new course.
- **PUT /api/courses/:id**: Update an existing course by ID.
- **DELETE /api/courses/:id**: Delete a course by ID.

## Authentication

The API uses Basic Authentication to protect certain endpoints. Users must provide a valid email address and password to access these endpoints.

### Example

To access a protected endpoint, include the `Authorization` header in your request:
```
    Authorization: Basic base64(email:password)
```

## Error Handling

The API provides appropriate HTTP status codes and error messages for various error conditions, such as:

- **400 Bad Request**: Invalid input data.
- **401 Unauthorized**: Authentication required or failed.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Server encountered an error.

## Testing the API

You can use Postman to test the API endpoints. Import the provided Postman collection to get started quickly.

## Project Structure
treehouse-unit-9-rest-api/
├── models/             # Sequelize models
├── routes/             # Express routes
├── seeders/            # Database seed files
├── .env                # Environment variables
├── app.js              # Express application setup
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation

## Conclusion

Working on this project has given me a solid understanding of how to build a REST API using Express and Sequelize and how to interact with a SQL database. By the end of this project, I’ve developed a strong foundation for building and managing RESTful APIs.

For more details, be sure to check out the [REST API project page](https://teamtreehouse.com/library/rest-api-project).

Happy coding!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or suggestions, feel free to contact the project maintainer:

Name: Jeph Mari Daligdig Email: daligdig.jephmari@gmail.com GitHub: greatxrider
