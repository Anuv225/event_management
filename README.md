# Event Management Software

This project is a full-stack event management application designed to help users create, manage, and participate in events. It comprises a Spring Boot backend and a React frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

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

The Event Management System is a comprehensive solution designed to streamline the process of organizing, managing, and tracking events. This platform allows users to create, schedule, and monitor events efficiently, providing a centralized hub for all event-related activities.

## Features

- **Event Creation**: Easily create and customize events with detailed information
- **User Management**: Register, authenticate, and manage user profiles



## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)


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



### Creating an Event

1. Navigate to the dashboard
2. Click on "Create Event" button
3. Fill in the event details (name, date, location, description)
4. Upload any relevant images or documents
5. Click "Save" to create the event

### Managing Events

1. Access the "My Events" section
2. View all created events
3. Click on an event to edit or delete it
4. Use the filter options to sort events by date, category, or status

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






## Backend Setup

1. **Navigate to the Backend Directory**:
    cd backend

2. **Build and Run the Backend**:

    ./gradlew bootRun
