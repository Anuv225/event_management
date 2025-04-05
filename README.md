# Event Management Software

This project is a full-stack event management application designed to help users create, manage, and participate in events. It comprises a Spring Boot backend and a React frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Java Development Kit (JDK) 17 or higher](https://adoptium.net/)
- [Node.js](https://nodejs.org/) (which includes npm)
- [Gradle](https://gradle.org/install/)

## Project Structure

The repository is organized as follows:
event_management/ ├── backend/ # Spring Boot backend │ ├── src/ # Java source files │ ├── build.gradle # Gradle build script │ └── application.properties # Backend configuration │ └── event-management-frontend/ # React frontend ├── src/ # React source files ├── package.json # npm package configuration └── vite.config.js # Vite configuration 


# Event Management System

## Overview

The Event Management System is a comprehensive solution designed to streamline the process of organizing, managing, and tracking events. This platform allows users to create and schedule events efficiently.

## Features

- **Event Creation**: Easily create and customize events with detailed information
- **User Management**: Register, authenticate, and manage user profiles



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)


## Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)


### Steps

1. Clone the repository:

```bash
git clone https://github.com/Anuv225/event_management.git
cd event_management_frontend
```

2. Install dependencies:

```bash
npm install
```


3. Start the development server:

```bash
npm run dev
```

## Backend Setup

1. **Navigate to the Backend Directory**:
    cd backend

2. **Build and Run the Backend**:

    ./gradlew bootRun



### Creating an Event

1. Navigate to the dashboard
2. Click on "Create Event" button
3. Fill in the event details (name, date, description)

### Managing Events

1. View all created events
2. Click on an event to edit or delete it

## API Reference

### Authentication

```
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
```


### Events

```
GET /api/events
POST /api/events
GET /api/events/:id
PUT /api/events/:id
DELETE /api/events/:id
```






