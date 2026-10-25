
---

# 2. `docs/data-model.md`

```markdown
# QuickNotes Database Design


## Database Choice

QuickNotes uses SQL because the application has structured relationships between users, notes and tags. A relational database provides strong consistency, supports relationships through foreign keys and allows efficient JOIN queries.


# Entities


## Users Table

| Column | Type | Key |
|-|-|-|
| id | INTEGER | Primary Key |
| name | VARCHAR(100) | |
| email | VARCHAR(150) | UNIQUE |
| password | VARCHAR(255) | |
| created_at | TIMESTAMP | |


## Notes Table

| Column | Type | Key |
|-|-|-|
| id | INTEGER | Primary Key |
| user_id | INTEGER | Foreign Key |
| title | VARCHAR(100) | |
| body | TEXT | |
| created_at | TIMESTAMP | |


## Tags Table

| Column | Type | Key |
|-|-|-|
| id | INTEGER | Primary Key |
| name | VARCHAR(50) | UNIQUE |


## note_tags Table

| Column | Type | Key |
|-|-|-|
| note_id | INTEGER | Foreign Key |
| tag_id | INTEGER | Foreign Key |


Primary Key:

(note_id, tag_id)



# Relationships

## One-to-Many

One user can create many notes.
