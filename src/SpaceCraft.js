


// Define the boundaries for x, y, and z coordinates
const X_BOUNDARY = 100;
const Y_BOUNDARY = 100;
const Z_BOUNDARY = 100;

//function for creating spacecraft with direction and position
function createSpacecraft(x, y, z, direction)
{
    return {
        x,
        y,
        z,
        direction,
    };
}
//forward movement function


function moveForward(spacecraft) {
    switch (spacecraft.direction) {
        case 'N':
            if (spacecraft.y < Y_BOUNDARY) spacecraft.y++;
            break;
        case 'S':
            if (spacecraft.y > -Y_BOUNDARY) spacecraft.y--;
            break;
        case 'E':
            if (spacecraft.x < X_BOUNDARY) spacecraft.x++;
            break;
        case 'W':
            if (spacecraft.x > -X_BOUNDARY) spacecraft.x--;
            break;
        case 'Up':
            if (spacecraft.z < Z_BOUNDARY) spacecraft.z++;
            break;
        case 'Down':
            if (spacecraft.z > -Z_BOUNDARY) spacecraft.z--;
            break;
    }
    return spacecraft;
}


//backward movement function
function moveBackward(spacecraft) {
    switch (spacecraft.direction) {
        case 'N':
            if (spacecraft.y < Y_BOUNDARY) spacecraft.y--;
            break;
        case 'S':
            if (spacecraft.y > -Y_BOUNDARY) spacecraft.y++;
            break;
        case 'E':
            if (spacecraft.x < X_BOUNDARY) spacecraft.x--;
            break;
        case 'W':
            if (spacecraft.x > -X_BOUNDARY) spacecraft.x++;
            break;
        case 'Up':
            if (spacecraft.z < Z_BOUNDARY) spacecraft.z--;
            break;
        case 'Down':
            if (spacecraft.z > -Z_BOUNDARY) spacecraft.z++;
            break;
    }
    return spacecraft;
}


// turn left function
function turnLeft(spacecraft)
{
    
    switch (spacecraft.direction)
    {
        case 'N':
            return { ...spacecraft, direction: 'W' };
        case 'S':
            return { ...spacecraft, direction: 'E' };
        case 'E':
            return { ...spacecraft, direction: 'N' };
        case 'W':
            return { ...spacecraft, direction: 'S' };
        case 'Up':
            return { ...spacecraft, direction: 'N' };
        case 'Down':
            return { ...spacecraft, direction: 'S' };
            
        default:
            return spacecraft;
    }
}

//turn right function
function turnRight(spacecraft)
{
    // Implement right rotation
    switch (spacecraft.direction)
    {
        case 'N':
            return { ...spacecraft, direction: 'E' };
        case 'S':
            return { ...spacecraft, direction: 'W' };
        case 'E':
            return { ...spacecraft, direction: 'S' };
        case 'W':
            return { ...spacecraft, direction: 'N' };
        case 'Up':
            return { ...spacecraft, direction: 'S' };
        case 'Down':
            return { ...spacecraft, direction: 'N' };
        default:
            return spacecraft;
    }
}

//turn Up function
function turnUp(spacecraft)
{
    // Implement upward rotation
    if (spacecraft.direction == 'N' || spacecraft.direction == 'S' ||spacecraft.direction == 'E' || spacecraft.direction == 'W' )
    {
        return { ...spacecraft, direction: 'Up' };
    }
    return spacecraft;
}

//turn Down function
function turnDown(spacecraft)
{
    // Implement downward rotation
    if (spacecraft.direction == 'N' || spacecraft.direction == 'S' || spacecraft.direction == 'E' || spacecraft.direction == 'W')
    {
        return { ...spacecraft, direction: 'Down' };
    }
    return spacecraft;
}

//function for executing final given command
function executeCommands(spacecraft, commands) {
    for (const command of commands) {
        switch (command) {
            case 'f':
                spacecraft = moveForward(spacecraft);
                break;
            case 'b':
                spacecraft = moveBackward(spacecraft);
                break;
            case 'l':
                spacecraft = turnLeft(spacecraft);
                break;
            case 'r':
                spacecraft = turnRight(spacecraft);
                break;
            case 'u':
                spacecraft = turnUp(spacecraft);
                break;
            case 'd':
                spacecraft = turnDown(spacecraft);
                break;
        }
    }

    return spacecraft;
}

 //export all module for testing
module.exports = {
    createSpacecraft,
    moveForward,
    moveBackward,
    turnLeft,
    turnRight,
    turnUp,
    turnDown,
executeCommands,
};


// function moveBackward(spacecraft)
// {
    
//     switch (spacecraft.direction)
//     {
//         case 'N':
//             return { ...spacecraft, y: spacecraft.y - 1 };
//         case 'S':
//             return { ...spacecraft, y: spacecraft.y + 1 };
//         case 'E':
//             return { ...spacecraft, x: spacecraft.x - 1 };
//         case 'W':
//             return { ...spacecraft, x: spacecraft.x + 1 };
//         case 'Up':
//             return { ...spacecraft, z: spacecraft.z - 1 };
//         case 'Down':
//             return { ...spacecraft, z: spacecraft.z + 1 };
//         default:
//             return spacecraft;
//     }
// }



// function moveForward(spacecraft)
// {
   
//     switch (spacecraft.direction)
//     {
//         case 'N':
//             return { ...spacecraft, y: spacecraft.y + 1 };
//         case 'S':
//             return { ...spacecraft, y: spacecraft.y - 1 };
//         case 'E':
//             return { ...spacecraft, x: spacecraft.x + 1 };
//         case 'W':
//             return { ...spacecraft, x: spacecraft.x - 1 };
//         case 'Up':
//             return { ...spacecraft, z: spacecraft.z + 1 };
//         case 'Down':
//             return { ...spacecraft, z: spacecraft.z - 1 };
//         default:
//             return spacecraft;
//     }
// }
