# QuickNotes REST API Design


## Overview

The QuickNotes API provides endpoints for managing users, notes and tags.
The API follows REST principles and uses JSON for communication.


# REST Endpoints

| Method | Path | Description | Success Status |
|--------|------|-------------|----------------|
| GET | /api/notes | Get all notes for current user | 200 OK |
| GET | /api/notes/{id} | Get a single note by ID | 200 OK |
| POST | /api/notes | Create a new note | 201 Created |
| PUT | /api/notes/{id} | Update an existing note | 200 OK |
| DELETE | /api/notes/{id} | Delete a note | 204 No Content |
| GET | /api/users/{id}/notes | Get all notes belonging to a user | 200 OK |
| POST | /api/notes/{id}/tags | Add a tag to a note | 201 Created |


# Creating a Note

## Request

POST /api/notes

```json
{
  "title": "Learning REST APIs",
  "body": "Understanding HTTP methods and endpoints",
  "tagIds": [1,2]
}