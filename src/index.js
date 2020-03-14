var firstOperand;
var secondOperand;
var operation;
var operationSet;

$( document ).ready( function() {
    $( ".key_value" ).click( getValue );
    $( ".operator" ).click( getOperation );
    $( "#equals" ).click( performOperation );
    $( "#clear" ).click( clearDisplay );
    firstOperand = 0;
    secondOperand = 0;
    operation = "";
})

function getOperation() {
    operation = $( this ).text();
    operationSet = true;
    $( "#display" ).text( $( this ).text() );
}

function getValue() {
    if ( operationSet ) {
        secondOperand += $( this ).text(); 
        $( "#display" ).text( secondOperand );
    } else {
        firstOperand += $( this ).text();
        $( "#display" ).text( firstOperand );
    }
}

function clearDisplay() {
    $( "#display" ).text( 0 );
    firstOperand = 0;
    secondOperand = 0;
    operationSet = false;
}

function performOperation() {
    var result;
    firstOperand = parseFloat( firstOperand );
    secondOperand = parseFloat( secondOperand );

    switch ( operation ) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "x":
            result = firstOperand * secondOperand;
            break;
        case "÷":
            result = firstOperand / secondOperand;
            break;
        default:
            break;
    }

    // limit result to display 3 decimals
    $( "#display" ).text( result.toFixed( 3 ) );
    firstOperand = 0;
    secondOperand = 0;
    operationSet = false;
}