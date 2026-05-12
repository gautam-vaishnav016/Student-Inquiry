## Student Inquiry Automation Workflow
# Overview

This project is a simple API and workflow integration system built for an EdTech use case.

The system allows students to submit inquiries through a frontend form. The backend stores the inquiry data in MongoDB and automatically sends a confirmation email to the student. This project automates the inquiry process and improves operational efficiency.

## Features
Student Inquiry Form
REST API Integration
MongoDB Database Storage
Automatic Confirmation Email
Frontend + Backend Workflow
Clean and Simple UI
Tech Stack
Frontend
React.js
Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Nodemailer

## Workflow
Student fills inquiry form
        ↓
Frontend sends API request
        ↓
Backend receives inquiry
        ↓
MongoDB stores inquiry
        ↓
Automatic email is sent
Folder Structure
project/
│
├── client/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── models/Inquiry.js
│   ├── server.js
│   ├── .env
│   └── package.json


## Installation
Clone Repository
git clone <your-github-link>

# Frontend Setup
cd client
npm install
npm run dev

# Backend Setup
cd server
npm install
npm run dev
Environment Variables

Create a .env file inside the server folder.

MONGO_URI=your_mongodb_connection_string
EMAIL=your_email@gmail.com
PASS=your_gmail_app_password
PORT=8000
API Endpoint
Submit Inquiry
POST /api/inquiry
Request Body
{
  "name": "Gautam",
  "email": "xyz@gmail.com",
  "course": "MERN Stack"
}
Success Response
{
  "message": "Inquiry submitted successfully"
}

## Thought Process

I chose to build a Student Inquiry Automation Workflow because EdTech companies receive many student inquiries daily.
Managing inquiries manually can be time-consuming and inefficient.

This project automates the process by:

Collecting inquiries through a frontend form
Storing data in MongoDB
Sending automatic confirmation emails
This improves response time and reduces manual work.

## Tools Used
React.js
Tailwind CSS
Node.js
Express.js
MongoDB
Nodemailer
Future Improvements
Admin Dashboard
Inquiry Status Tracking
Authentication System
WhatsApp Integration
Analytics Dashboard
Email Templates

## Author
**Gautam**