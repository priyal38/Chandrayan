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
    //test moveforward function
    test('moveForward should update the y-coordinate correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = moveForward(spacecraft);
        expect(newSpacecraft.y).toBe(1);
    });

//test move backward function
    test('moveBackward should update the y-coordinate correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = moveBackward(spacecraft);
        expect(newSpacecraft.y).toBe(-1);
    });

//test turn left 
    test('turnLeft should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnLeft(spacecraft);
        expect(newSpacecraft.direction).toBe('W');
    });

//test turn right
    test('turnRight should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnRight(spacecraft);
        expect(newSpacecraft.direction).toBe('E');
    });

//test turn up
    test('turnUp should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnUp(spacecraft);
        expect(newSpacecraft.direction).toBe('Up');
    });

//test turn down
    test('turnDown should change the direction correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = turnDown(spacecraft);
        expect(newSpacecraft.direction).toBe('Down');
    });


    
});

//test final output
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
            direction: 'N',
        });
    });
});

//test boundry condition
describe('executeCommands', () =>
{
    test('Should execute commands and return final state', () =>
    {
        const spacecraft = createSpacecraft(0,100 , 0, 'N');

        const commands = ['f'];
        const finalState = executeCommands( spacecraft ,commands);

        expect(finalState).toEqual({
            x: 0,
            y: 100,
            z: 0,
            direction: 'N',
        });
    });
});

//test multiple rotation 
describe('executeCommands', () =>
{
    test('Should execute commands and return final state', () =>
    {
        const spacecraft = createSpacecraft(0,0 , 0, 'N');

        const commands =  ['l', 'l', 'l', 'r', 'r','r'];
        const finalState = executeCommands( spacecraft ,commands);

        expect(finalState).toEqual({
            x: 0,
            y: 0,
            z: 0,
            direction: 'N',
        });
    });
});

