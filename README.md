
REST API Summary:

 developed a RESTful API using Node.js and Express, with MongoDB as the database, implementing JSON Web Token (JWT) based authentication. The project focuses on protecting routes based on user roles, such as student or admin, ensuring secure access to specific endpoints.

Key Technologies Learned and Applied:

Node.js and Express: Leveraged for building the backend server and handling HTTP requests.
MongoDB: Utilized as the database for storing user information and other application data.
JWT (JSON Web Tokens): Implemented for authentication purposes, generating tokens upon successful login and verifying them for protected routes.
dotenv: Used for environment variable management, ensuring sensitive data like JWT secret keys remain secure.
Postman: Employed for testing the REST API endpoints, allowing easy sending of HTTP requests and observing responses.
Middleware: Utilized Express middleware for authentication and authorization, intercepting requests before reaching protected routes.
Error Handling: Implemented error handling middleware to gracefully handle exceptions and provide appropriate responses.
RESTful API Design: Designed endpoints following RESTful principles, enabling predictable and intuitive API usage.
Overview of Implementation:

Created authentication middleware (auth) to extract JWT tokens from request headers, body, or cookies, and verify their validity using the JWT secret.
Implemented role-based authorization middleware (isStudent and isAdmin) to restrict access to routes based on user roles.
Utilized Express routes to define RESTful endpoints for user authentication (login, register) and other application features.
Integrated MongoDB for storing user data securely.
Tested API endpoints using Postman to ensure functionality and security.
Employed proper error handling techniques to provide informative responses in case of failures.
Overall, the project demonstrates the implementation of secure authentication and authorization mechanisms using Node.js, Express, MongoDB, and JWT, adhering to best practices in web development and API design.
