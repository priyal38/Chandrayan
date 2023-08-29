function createSpacecraft(x, y, z, direction)
{
    return {
        x,
        y,
        z,
        direction,
    };
}

function moveForward(spacecraft)
{
    // Implement forward movement based on the current direction
    switch (spacecraft.direction)
    {
        case 'N':
            return { ...spacecraft, y: spacecraft.y + 1 };
        case 'S':
            return { ...spacecraft, y: spacecraft.y - 1 };
        case 'E':
            return { ...spacecraft, x: spacecraft.x + 1 };
        case 'W':
            return { ...spacecraft, x: spacecraft.x - 1 };
        case 'Up':
            return { ...spacecraft, z: spacecraft.z + 1 };
        case 'Down':
            return { ...spacecraft, z: spacecraft.z - 1 };
        default:
            return spacecraft;
    }
}

function moveBackward(spacecraft)
{
    // Implement backward movement based on the current direction
    switch (spacecraft.direction)
    {
        case 'N':
            return { ...spacecraft, y: spacecraft.y - 1 };
        case 'S':
            return { ...spacecraft, y: spacecraft.y + 1 };
        case 'E':
            return { ...spacecraft, x: spacecraft.x - 1 };
        case 'W':
            return { ...spacecraft, x: spacecraft.x + 1 };
        case 'Up':
            return { ...spacecraft, z: spacecraft.z - 1 };
        case 'Down':
            return { ...spacecraft, z: spacecraft.z + 1 };
        default:
            return spacecraft;
    }
}
function turnLeft(spacecraft)
{
    // Implement left rotation
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
        default:
            return spacecraft;
    }
}

