// STEP 0
// Use the office hours queue
// Polls and how it's going

// STEP 1
// Show diagram of frontend/backend / answer why this architecture
// Explain why important to separate frontend and backend
//  - Modularize code
//  - General client-server model
//  - Availability / resilience to failure
//  - Performance (user waits while server computes)
//  - - Server on super powerful hardware
//  - Update frontend modules just on frontend and update backend modules just on backend

// STEP 2
// show tinyurl in action
// We want to make our own version: URL shortener idea
// Example: tiny hands

// STEP 3
// Design an API for shortening
// Collection: shorts map short URL names to long ones
// How do we interact with the shorts? Ask for suggestions from students.

// GETs
//    GET /api/shorts

// POSTs
//    POST /api/shorts

// DELETEs
//    DELETE /api/shorts/:name

// PUTs
//    PUT /api/shorts/:name

// STEP 4
// Show HTTP status codes:
//   https://www.restapitutorial.com/httpstatuscodes.html
// MAKE SURE TO NPM INSTALL
// Show how to launch the site:
//    node bin/www
//    npm start
//    npm run awesome

// STEP 5
// Create routes from STEP 3
// Use postman for debugging

// STEP 6
// Show frontend and calling routes from frontend

// STEP 7*
// Showcase+implement authentication via sessions and modify delete 
// to only delete shorts made by the signed in user if they are the creator


