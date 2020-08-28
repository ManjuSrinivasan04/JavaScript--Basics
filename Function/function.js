function message()
{
    console.log('Hi, Welcome to Nextazy');
}
message();
function day(wish)
{
    console.log('Hi '+ wish);
}
day('GoodMorning');

function greetings(wish,name)
{
    console.log('Hi '+ wish + ' ' + name);
}

greetings('GoodMorning');
greetings('GoodEvening','Manju');

function square(sides)
{
    return sides*sides;
}
let output=square(4);
console.log(output);

function rectangle(lengths,breadth)
{
    return lengths*breadth;
}
console.log(rectangle(2,3));