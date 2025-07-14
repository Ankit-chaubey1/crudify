# crudify

NoteKeeper API

A simple RESTful API for managing notes. Built with Node.js, Express, and MongoDB, and tested using Postman.

Project Structure:
------------------
crudify/
├── controllers/
│   └── NoteController.js
├── models/
│   └── Note.js
├── routes/
│   └── NoteRoute.js
├── index.js
├── .env
├── package.json

Getting Started:
----------------

1. Clone the Repository
   git clone https://github.com/your-username/notekeeper-api.git
   cd notekeeper-api

2. Install Dependencies
   npm install

3. Set up Environment Variables
   Create a .env file in the root folder:
     PORT=5000
     MONGODB_URI=your_mongodb_connection_uri

4. Run the Server
   npm run dev

API Endpoints:
--------------

Base URL: http://localhost:5000/api/notes

Method   Endpoint           Description
------   --------           -----------
POST     /create            Create a new note
GET      /                  Get all notes
GET      /:id               Get a note by ID
PUT      /update/:id        Update a note
DELETE   /delete/:id        Delete a note

Sample JSON for POST & PUT:
----------------------------

{
  "title": "Meeting Notes",
  "content": "Discuss project roadmap and deadlines."
}

Testing:
--------

Use Postman or any REST client to test the endpoints.
Ensure that MongoDB is connected and the server is running.

Author:
-------
Made by Ankit Chaubey
