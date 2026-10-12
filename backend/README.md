# Gautam Nagda — Portfolio Backend API

Modular Express.js backend for Gautam Nagda's portfolio website.

## Features
- **Health Check (`GET /api/health`)**: Server status, uptime, and health monitor.
- **Developer Info (`GET /api/info`)**: Public bio, credentials, and social links.
- **Contact Inquiries (`POST /api/contact`)**: Form validation, logging, and dispatching of messages.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Setup environment variables:
   ```bash
   cp .env.example .env
   ```

3. Start server:
   ```bash
   npm run dev    # with node --watch
   # or
   npm start
   ```

Server defaults to `http://localhost:5000`.
