const {
    createSpacecraft,
    moveForward,
    moveBackward,
    turnLeft,
    turnRight,
    turnUp,
    turnDown,
    executeCommands,
} = require('../src/SpaceCraft');


describe('Spacecraft', () =>
{
    test('moveForward should update the y-coordinate correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = moveForward(spacecraft);
        expect(newSpacecraft.y).toBe(1);
    });


    test('moveBackward should update the y-coordinate correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = moveBackward(spacecraft);
        expect(newSpacecraft.y).toBe(-1);
    });


    test('turnLeft should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnLeft(spacecraft);
        expect(newSpacecraft.direction).toBe('W');
    });


    test('turnRight should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnRight(spacecraft);
        expect(newSpacecraft.direction).toBe('E');
    });


    test('turnUp should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnUp(spacecraft);
        expect(newSpacecraft.direction).toBe('Up');
    });


    test('turnDown should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnDown(spacecraft);
        expect(newSpacecraft.direction).toBe('Down');
    });


    // Add more tests for other functions and scenarios as needed
});

describe('executeCommands', () =>
{
    test('Should execute commands and return final state', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');

        const commands = ['f', 'r', 'u', 'b', 'l'];
        const finalState = executeCommands( spacecraft ,commands);

        expect(finalState).toEqual({
            x: 0,
            y: 1,
            z: -1,
            direction: 'Up',
        });
    });
});

