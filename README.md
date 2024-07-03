# Secure SSO and OTP Application

This project aims to develop a secure Single Sign-On (SSO) and One-Time Password (OTP) application using Java Spring Boot for the backend and React with Material-UI for the frontend. PostgreSQL from Google Cloud is used as the database.

## Features

- **Single Sign-On (SSO)**:
  - OAuth2-based authentication with Google.
  - Integration of SSO for seamless user login.

- **One-Time Password (OTP)**:
  - Generation and verification of OTPs.
  - OTP delivery via email for secure authentication.

## Tech Stack

### Backend

- **Java**: Programming language for backend development.
- **Spring Boot**: Framework for building Java-based applications.
  - **Spring Web**: For creating RESTful APIs.
  - **Spring Security**: For authentication and authorization.
  - **Spring Data JPA**: For interacting with PostgreSQL.
  - **Spring Boot Starter Mail**: For sending OTPs via email.
  - **Spring Boot Starter OAuth2 Client**: For integrating OAuth2-based SSO.
- **PostgreSQL**: Relational database hosted on Google Cloud Platform.
- **Maven**: Dependency management and build tool.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React component library following Google’s Material Design guidelines.
- **Axios**: HTTP client for making requests to the backend API.

### Development Tools

- **Git**: Version control system.
- **IntelliJ IDEA / Eclipse**: Integrated Development Environment (IDE) for Java.
- **Node.js and npm**: JavaScript runtime and package manager for React development.

### Deployment

- **AWS / Google Cloud / Heroku**: Cloud providers for deploying the Spring Boot backend.
- **Netlify / Vercel**: Frontend hosting services for deploying the React application.
- **GitHub Actions / Jenkins / Travis CI**: Continuous Integration and Continuous Deployment (CI/CD) tools for automating build and deployment processes.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Java JDK (version 17)
- Node.js and npm 
- PostgreSQL (version 15)
- IDE (IntelliJ IDEA / Eclipse)
