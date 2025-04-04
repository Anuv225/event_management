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
- [PostgreSQL](https://www.postgresql.org/) or another compatible database

## Project Structure

The repository is organized as follows:
<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Event Management System

## Overview

The Event Management System is a comprehensive solution designed to streamline the process of organizing, managing, and tracking events. This platform allows users to create, schedule, and monitor events efficiently, providing a centralized hub for all event-related activities.

## Features

- **Event Creation**: Easily create and customize events with detailed information
- **User Management**: Register, authenticate, and manage user profiles
- **Calendar Integration**: View events in an intuitive calendar interface
- **Notification System**: Receive timely reminders and updates about upcoming events
- **Analytics Dashboard**: Track attendance and engagement metrics
- **Responsive Design**: Access the platform from any device


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
- MongoDB (v4.0.0 or higher)


### Steps

1. Clone the repository:

```bash
git clone https://github.com/Anuv225/event_management.git
cd event_management
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/event_management
JWT_SECRET=your_jwt_secret
```

4. Start the development server:

```bash
npm run dev
```


## Configuration

### Database Setup

The application uses MongoDB as its database. Make sure MongoDB is running on your system before starting the application.

### Environment Variables

- `PORT`: The port on which the server will run
- `MONGODB_URI`: Connection string for MongoDB
- `JWT_SECRET`: Secret key for JWT authentication


## Usage

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


## Contributing

We welcome contributions to improve the Event Management System. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Last Updated

This README was last updated on April 4, 2025.

<div>⁂</div>

[^1]: https://github.com/Anuv225/event_management.git

[^2]: https://www.daytona.io/dotfiles/how-to-write-4000-stars-github-readme-for-your-project

[^3]: https://everhour.com/blog/github-readme-template/

[^4]: https://www.hatica.io/blog/best-practices-for-github-readme/

[^5]: https://docs.github.com/articles/about-readmes

[^6]: https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/

[^7]: https://github.com/jehna/readme-best-practices

[^8]: https://tilburgsciencehub.com/topics/collaborate-share/share-your-work/content-creation/readme-best-practices/

[^9]: https://www.makeareadme.com

[^10]: https://github.com/anuraghazra/github-readme-stats

[^11]: https://github.com/jehna/readme-best-practices/blob/master/README-default.md

[^12]: https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

[^13]: https://github.com/matiassingers/awesome-readme

[^14]: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide/

[^15]: https://github.com/banesullivan/README

[^16]: https://www.archbee.com/blog/readme-document-elements

[^17]: https://www.youtube.com/watch?v=E6NO0rgFub4

[^18]: https://www.youtube.com/watch?v=rCt9DatF63I

[^19]: https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/uide-to-writting-a-good-readme-file--1-.png?sa=X\&ved=2ahUKEwjG0saV3L6MAxVm3TgGHee7FYcQ_B16BAgBEAI

[^20]: https://www.reddit.com/r/learnprogramming/comments/vxfku6/how_to_write_a_readme/

[^21]: https://bulldogjob.com/readme/how-to-write-a-good-readme-for-your-github-project


event_management/ ├── backend/ # Spring Boot backend │ ├── src/ # Java source files │ ├── build.gradle # Gradle build script │ └── application.properties # Backend configuration │ └── event-management-frontend/ # React frontend ├── src/ # React source files ├── package.json # npm package configuration └── vite.config.js # Vite configuration 


## Backend Setup

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend

2. **Build and Run the Backend**:

./gradlew bootRun
