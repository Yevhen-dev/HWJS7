// Tasks for Math.min and Math.max:

// Create a function that takes two numbers as arguments and returns the lesser of them.

function showMin( ...arg ) {
    console.log( Math.min(...arg) );
};
showMin( 11, 4, 0, 22, 2, 15 );


// Create a function that takes two numbers as arguments and returns more of them.
function showMax( ...arg ) {
    console.log( Math.max(...arg) )
};
showMax( 45, 5, 56, 2, 14, 89 )


// Tasks for Math.pow
// Create a function that raises a number to a power. Show the result to the console.
function showPow( base, exponent ) {
    console.log( Math.pow( base, exponent ) );
};
showPow( 3, 3 );


// Tasks for Math.floor and Math.ceil
// Create a function that takes a random fractional number and uses Math.floor to round down.
function showRoundDown( num ) {
    console.log( Math.floor( num ) );
};
showRoundDown( 3.14 );

// Create a function that takes a random fractional number and uses Math.ceil to round up.
function showRoundUp( num ) {
    console.log( Math.ceil( num ) );
};
showRoundUp( 5.26 );


// Assignment for Date.toLocaleString
// Create a Date object for the current date and time. Use the toLocaleString() method to get the current date and time in a human-readable 
// format. Output the result to the console.
let nowDate = new Date;
console.log( nowDate.toLocaleString() );


// Tasks for String.split and toUpperCase
// Create a string that contains words separated by spaces.Use the split method to split a string into an array of words.Output the 
// resulting array to the console in uppercase.

let rndString = "Create a string that contains words separated by spaces";
console.log(  rndString.toUpperCase().split( " " )  );


// Rest
// Create a function that takes the first argument as a string and stores the rest of the arguments in an array 
// using the Rest operator. The function should output a string and an array.

function splitArg( str, ...arg ) {
    console.log( String( str ), arg);
};
splitArg( "create", 2, 8, "function", 45 )


// Write a function that takes any number of numeric arguments and calculates their average using the Rest operator.
function showAverage( ...arg ) {
    let sum = 0;
    for( let num of arg ) sum += num;
    console.log( Math.floor( sum / arg.length ) );
};
showAverage( 2, 6, 8, 15, 4, 20, 17);


// TypeOf
// Create a function that takes an argument of any type and outputs a message about its type using the typeof operator.
function showTypeOf( arg ) {
    console.log( typeof arg );
};
showTypeOf( "test" );


// Write a function that checks the type of a variable and outputs the message "This is a number," "This is a string," or
// "This is another type" using the typeof operator.
function showTypeOfVariable( arg ) {
    if( typeof arg === "string" ) {
        console.log( "This is a string" );
    } else if ( typeof arg === "number" ) {
        console.log( "This is a number" );
    } else {
        console.log("This is another type");
    }
};
showTypeOfVariable( "message" );

// Additional task:
// Create a function that accepts a date of birth in YYYY-MM-DD format and returns the person's age as of today.
function showAge( date ) {
    let now = new Date;
    console.log( now.getFullYear() - +date.split( "-" )[ 0 ] )
}
showAge( " 2012-12-05 " );


// Create a function that accepts two numbers: min and max, and returns an array of ten random integers between 
// these values ​​(inclusive). These numbers must be unique.
function showRangeNumnber( minNum, maxNum ) {
    let arr = [];
    for( let i = minNum; i <= maxNum; i++ ) {
        if ( Math.floor( Math.random() * 10 ) > 5 && arr.length < 10 ) {
            arr.push( i );
        }
    }
    console.log( arr )
};
showRangeNumnber( 2, 53 );


// Create a function that accepts an array of objects, each of which contains two fields: date (date in YYYY-MM-DD format) 
// and value (numerical value). The function should return a new array containing objects with the largest value for each unique 
// month. Objects should be sorted by month in ascending order.
let dateArr = [
    { date: '2024-12-25', value: 100 },
    { date: '2024-03-21', value: 32 },
    { date: '2024-09-27', value: 69 },
    { date: '2024-01-02', value: 2 },
    { date: '2024-07-30', value: 15 },
    { date: '2024-08-20', value: 44 },
    { date: '2024-06-14', value: 96 },
    { date: '2024-02-25', value: 23 },
    { date: '2024-11-14', value: 47 },
    { date: '2024-12-26', value: 6 },
    { date: '2024-05-06', value: 58 },
    { date: '2024-04-03', value: 77 },
    { date: '2024-01-12', value: 82 },
    { date: '2024-09-13', value: 23 },
    { date: '2024-10-15', value: 12 },
    { date: '2024-05-09', value: 8 },
    { date: '2024-06-13', value: 26 },    
    { date: '2024-07-08', value: 39 },
    { date: '2024-06-02', value: 41 },
    { date: '2024-08-19', value: 84 },
    { date: '2024-10-17', value: 20 },
    { date: '2024-11-26', value: 91 }
];

function sortArrByDate( arr ) {
    let result = [];
    let copyArr = [ ...arr ];
    copyArr.sort( ( a, b ) => {
        return a.date.split( "-" )[1] - b.date.split( "-" )[1];
    } );
    
    
    for( let i = 1; i <= 12; i++ ) {
        let res = [];
        copyArr.forEach( item => {
            if( +item.date.split( "-" )[1] === i ) {
                res.push( item );
            }
        });
        res.sort( (a, b) => {
            return b.value - a.value;
        } );
        result.push( res[0] )
    };

    console.log(result);
};

sortArrByDate( dateArr );


