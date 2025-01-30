# Water Jug Challenge

This is a simple water jug challenge game written in TypeScript and React.

## Features

- TypeScript
- React
- Bun
- Docker
- Docker Compose
- Responsive Design

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 22.0.0 or higher)
- [Bun](https://bun.sh/install) (version 0.6.0 or higher)

### Installation

To install the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/luisfontes19/water-jug-challenge.git
```

2. Navigate to the project directory:

```bash
cd water-jug-challenge
```

3. Install the dependencies:

```bash
bun install
```

4. Start the development server:

```bash
bun run dev
```

5. Open your browser and navigate to `http://localhost:5173`.

### Docker

To run the project using Docker, follow these steps:

1. Build the Docker image:

```bash
docker build -t water-jug-challenge .
```

2. Run the Docker container:

```bash
docker run -p 5173:80 water-jug-challenge
```

3. Open your browser and navigate to `http://localhost:5173`.

### Docker Compose

To run the project using Docker Compose, follow these steps:

1. Build the Docker image:

```bash
docker-compose build
```

2. Run the Docker Compose:

```bash
docker-compose up
```

3. Open your browser and navigate to `http://localhost:8080`.

## Deployment

Site is deployed to [Vercel](https://vercel.com/).
You're free to use the deployed version at [water-jug-challenge-two.vercel.app](https://water-jug-challenge-two.vercel.app/).

## Running Tests

To run the tests, follow these steps:

1. Navigate to the project directory:

```bash
cd water-jug-challenge
```

2. Run the tests:

```bash
bun test
```

## Usage

The project is a simple water jug challenge game that allows you to solve puzzles related to water jugs. The game consists of a form where you can input the dimensions of the water jug, the amount of water to be transferred, and the number of gallons to be filled. The game then generates a solution to the problem based on the input values.
