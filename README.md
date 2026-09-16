# 📝 Notes App

A modern and responsive notes management application built with React, Redux Toolkit, and React Router.  
The application allows users to create, edit, view, delete, search, copy, and share notes through a clean and responsive interface.

## Live Demo

🔗 [View Live Application](https://react-notes-app-three-virid.vercel.app/)

## Features

- 📝 Create and manage notes
- ✏️ Edit existing notes
- 👁️ View individual notes
- 🗑️ Delete notes
- 🔍 Search notes by title or content
- 📋 Copy note content to clipboard
- 🔗 Share notes
- 💬 Share through WhatsApp
- ✈️ Share through Telegram
- 𝕏 Share through X (Twitter)
- 💼 Share through LinkedIn
- 📱 Fully responsive design
- 🎨 Modern dark UI with glassmorphism-inspired styling
- ⚡ Fast and smooth React-based interface
- 🔔 Toast notifications for user actions

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- CSS3

### Libraries
- React Hot Toast
- React Router
- Redux Toolkit

### Deployment
- Vercel

## 📂 Project Structure

```text
Notes-App/
│
├── public/
│   └── images.png
│
├── src/
│   ├── components/
│   │   ├── Clip.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── ViewClip.jsx
│   │
│   ├── redux/
│   │   └── clipSlice.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── store.js
│
├── index.html
├── package.json
└── vite.config.js

```
---
Getting Started

Follow these steps to run the project locally.

1. Clone the repository
```
git clone https://github.com/ambikejaiswal/react-notes-app.git
```
2. Navigate to the project
```
cd react-notes-app
```
3. Install dependencies
```
npm install
```
4. Start the development server
```
npm run dev
```
The application will be available at:
```
http://localhost:5173
```
---
# Work

### Create a Note

Enter a title and content and click Develop Clip to create a new note.

### Search Notes

Use the search bar to quickly find notes by matching their title or content.

### Edit & View

Each note provides dedicated actions to edit or view the complete note.

### Copy & Share

Notes can be copied to the clipboard or shared through multiple platforms including WhatsApp, Telegram, X, and LinkedIn.

### Delete

Notes can be removed directly from the notes listing.

# Responsive Design

The application is optimized for:

- Desktop
- Laptop
- Mobile
- Tablet

The interface automatically adapts to different screen sizes while maintaining usability and readability.

# Project Highlights

This project demonstrates practical implementation of:

- Component-based React architecture
- Global state management with Redux Toolkit
- Client-side routing with React Router
- Reusable UI components
- Search and filtering functionality
- Clipboard API integration
- Social sharing integrations
- Responsive CSS design
- Modern frontend development workflow
- Production deployment with Vercel

