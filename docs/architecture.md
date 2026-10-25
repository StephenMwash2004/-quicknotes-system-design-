
---

# 3. `docs/architecture.md`

```markdown
# QuickNotes System Architecture


# Functional Requirements

- Users can register and login.
- Users can create notes.
- Users can view their notes.
- Users can update and delete notes.
- Users can search notes.


# Non-Functional Requirements

- High availability.
- Fast response times.
- Ability to scale to millions of users.
- Secure authentication.
- Data reliability.


# Load Estimate (1 Million Users)


Assumptions:

- 20% daily active users = 200,000 users
- Each active user views 50 notes/day
- Each active user creates 2 notes/day
- Average note size = 5KB


## Reads

200,000 × 50

= 10,000,000 reads/day


10,000,000 ÷ 86400

≈ 116 reads/sec


## Writes

200,000 × 2

= 400,000 writes/day


400,000 ÷ 86400

≈ 5 writes/sec


## Storage

400,000 notes/day × 365 × 5KB

≈ 730GB/year


# Architecture Diagram

