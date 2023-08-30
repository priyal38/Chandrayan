# Chandrayaan 3 Spacecraft Navigation TDD Assesment




-  This repository contains code for the online assesment of Incubyte.

- This interactive simulation is designed to showcase the navigation capabilities of the Chandrayaan 3 lunar spacecraft through the   vast expanse of the galaxy using JavaScript. 
- The program accurately interprets and executes a series of commands to navigate the spacecraft.
- This Program built using a Test-Driven Development (TDD) approach with the Jest testing framework.

## Features

 - Move the spacecraft forward/backward (f, b): Propel the spacecraft one step forward or backward based on its current direction.

- Turn the spacecraft left/right (l, r): Rotate the spacecraft 90 degrees to the left or right, changing its facing direction.
- Turn the spacecraft up/down (u, d): Adjust the spacecraft's angle, rotating it upwards or downwards.

## Example

Given the starting point (0, 0, 0) following (x, y, z) and initial direction N, the following commands should result in the indicated final position and direction:

Commands: [“f”, “r”, “u”, “b”, “l”]

Starting Position: (0, 0, 0)

Initial Direction: N

“f” - (0, 1, 0) - N
“r” - (0, 1, 0) - E
“u” - (0, 1, 0) - U
“b” - (0, 1, -1) - U
“l” - (0, 1, -1) - N
Final Position: (0, 1, -1)

Final Direction: N


## Testing with Jest

 - This project has been developed using Test-Driven Development (TDD) principles, ensuring robustness and accuracy. The Jest testing framework has been utilized for writing and executing tests. Test cases reside in the test/spacecraft.test.js file. To run tests, use the command npm test.

