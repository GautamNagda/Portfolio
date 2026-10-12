# Gautam Nagda — Portfolio Workspace

Modern full-stack portfolio website repository organized into dedicated **frontend** and **backend** applications.

## Project Structure

```
PORTFOLIO WEBSITE MAIN/
├── frontend/                     # Vite + React Client Application
│   ├── src/
│   │   ├── components/           # UI & Section Components
│   │   ├── data/                 # Portfolio Data & Content
│   │   ├── App.jsx
│   │   ├── index.css             # Tailwind Styles & Visual System
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/                      # Express.js REST API Server
│   ├── server.js                 # API Endpoints (Health, Info, Contact)
│   ├── .env.example
│   └── package.json
│
├── package.json                  # Root Workspace Orchestration
└── README.md
```

## Running the Application

### 1. Frontend Development Server (Portfolio Website)
From the root directory:
```bash
npm run dev
# or
npm run dev:frontend
```
Or directly inside `frontend/`:
```bash
cd frontend
npm run dev
```
Accessible at: **http://localhost:5173/**

### 2. Backend Development Server (API Server)
From the root directory:
```bash
npm run dev:backend
```
Or directly inside `backend/`:
```bash
cd backend
npm install
npm run dev
```
Accessible at: **http://localhost:5000/**

### 3. Production Build
```bash
npm run build
```
Generates production bundle in `frontend/dist/`.
