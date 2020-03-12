var firstOperand;
var secondOperand;
var operation;
var firstOperandSet;

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
    $( "#display" ).text( $( this ).text() );
}

function getValue() {
    if ( firstOperandSet ) {
        secondOperand = $( this ).text(); 
    } else {
        firstOperand = $( this ).text();
        firstOperandSet = true;
    }
    $( "#display" ).text( $( this ).text() );
}

function clearDisplay() {
    $( "#display" ).text( 0 );
    firstOperand = 0;
    secondOperand = 0;
    firstOperandSet = false;
}

function performOperation() {
    var result;
    firstOperand = parseInt( firstOperand );
    secondOperand = parseInt( secondOperand );

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
            result = 0;
            break;
    }

    $( "#display" ).text( result );
    firstOperand = 0;
    secondOperand = 0;
    firstOperandSet = false;
}