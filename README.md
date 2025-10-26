# Node.js Demo App with CI/CD Pipeline

This is a simple Node.js demo application with a complete **CI/CD pipeline** using **GitHub Actions** and **Docker**.  
It demonstrates how to automate testing, Docker image build, and deployment to Docker Hub.

---

## Features

- Simple Node.js server running on port 3000
- Automated tests with `npm run test`
- CI/CD pipeline using GitHub Actions
- Dockerized application
- Automatic build & push to Docker Hub on every push to `main`

---

## Project Structure

nodejs-demo-app/
├── index.js # Main Node.js server
├── test.js # Automated test script
├── package.json # Node.js project metadata
├── Dockerfile # Docker build instructions
├── .dockerignore # Files ignored during Docker build
└── .github/workflows/main.yml # CI/CD workflow

yaml
Copy code

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or above
- [Docker](https://www.docker.com/)
- GitHub repository with secrets:
  - `DOCKERHUB_USERNAME` → Docker Hub username
  - `DOCKERHUB_TOKEN` → Docker Hub Personal Access Token

---

## How to Run Locally

1. Clone the repo:

'bash
git clone https://github.com/yourusername/nodejs-demo-app.git
cd nodejs-demo-app
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Open your browser and go to:

arduino
Copy code
http://localhost:3000
Run tests:

bash
Copy code
npm run test
Docker
Build and Run Docker Image Locally
bash
Copy code
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
Open browser:

arduino
Copy code
http://localhost:3000
CI/CD Pipeline
Trigger: Push to main branch

Jobs:

Test Node.js app (npm run test)

Build Docker image

Push image to Docker Hub

GitHub Actions workflow file: .github/workflows/main.yml

Docker Hub
Image repository: https://hub.docker.com/r/your-dockerhub-username/nodejs-demo-app

Tags:

latest → Latest version

<commit-sha> → Image built from specific commit

Author
SK NAGUL

GitHub: https://github.com/Sk-Nagul-09
