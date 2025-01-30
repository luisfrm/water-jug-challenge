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

The Water Jug Challenge is a classic problem that can be solved using a breadth-first search (BFS) algorithm.

The problem involves two jugs with capacities X and Y. The goal is to measure exactly Z gallons of water using these two jugs.
The allowed actions are:

Fill a jug to its full capacity.

Empty a jug completely.

Transfer water from one jug to the other until one is empty or the other is full.

The problem can be modeled as a state-space search, where:

Each state is represented as a pair (x, y), where:
x is the current amount of water in the first jug.
y is the current amount of water in the second jug.

The initial state is (0, 0) (both jugs are empty).

The goal state is any state where:

x == Z (the first jug has exactly Z gallons).
y == Z (the second jug has exactly Z gallons).
x + y == Z (the combined water in both jugs is exactly Z gallons).

### Algorithm: Breadth-First Search (BFS)
BFS is used to explore all possible states systematically. Here's how it works:

#### 1. Start with the initial state (0, 0).
#### 2. Use a queue to store states to explore.
#### 3. Use a visited set to avoid revisiting states.

For each state (x, y):

Check if it is a goal state (i.e., x == Z, y == Z, or x + y == Z).
If it is, return the sequence of steps taken to reach this state.
If not, generate all possible next states by applying the allowed actions:
Fill X: (X, y).
Fill Y: (x, Y).
Empty X: (0, y).
Empty Y: (x, 0).
Transfer X to Y: (x - transfer, y + transfer), where transfer = min(x, Y - y).
Transfer Y to X: (x + transfer, y - transfer), where transfer = min(y, X - x).

Before adding a new state to the queue, check if it has already been visited.
If it hasn't, mark it as visited and add it to the queue.
If the queue is exhausted without finding a goal state, return "No solution."

### Why BFS?
BFS guarantees the shortest path (minimum number of steps) to the solution because it explores all states level by level.
It is well-suited for problems where the goal is to find the most efficient sequence of actions.

### Mathematical Validation
Before running the algorithm, we can validate if a solution exists using the Greatest Common Divisor (GCD):
A  solution exists if and only if:
Z is a multiple of the GCD of X and Y.
Z is less than or equal to the sum of X and Y.