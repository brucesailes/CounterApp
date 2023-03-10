// THE QUERYSELECTOR() IS A METHOD USED FOR SEARCHING AND RETURNING THE VERY FIRST ELEMENT WITHIN THE DOCUMENT THAY MATCHES THE GIVEN SELECTOR. THE QUERYSELECTOR IN JAVASCRIPT ONLY RETURNS THE ELEMENT THAT MATCHES WITH ONE OF THE SPECIFIED CSS SELECTORS, OR A GROUP OF SELCTORS. // 

// ALSO, CONST, LET, AND VAR ARE KEYWORDS THAT ALLOWS US TO DECLARE VARIABLES. WHAT IS THE DIFFERENCE BETWEEN VAR, LET AND CONST? VAR AND LET ALLOWS US TO REASSIGN NEW VALUES, WHILE CONST DOESN'T ALLOW REASSIGNMENT OF NEW VALUES. //   
const count = document.getElementById("count"); // DOCUMENT IS ACCESSING THE HTML DOM AND QUERYSELCTOR IS ACCESSING CSS FROM JAVASCRIPT. AFTER, PLAYING AROUND THE CODE A BIT I SAW THAT GETELEMENTBYID AND QUERYSELECTOR ARE BASICALLY THE SAME, THIS IS SOMETHING TO KEEP IN MIND. // 

const buttons = document.querySelector(".buttons"); 

// ARROW FUNCTIONS ALLOW A SHORT SYNTAX FOR WRITING FUNCTION EXPRESSIONS. YOU DONT NEED THE FUNTION KEYWORD, THE RETURN KEYWORD, AND THE CURLY BRACKETS. // 

// IN THIS LESSON I LEARNED ABOUT "EVENT DELEGATION", EVENT DELEGATION REFERS TO THE PROCESS OF USING EVENT PROPAGATION (BUBBLING) TO HANDLE EVENTS AT A HIGHER LEVEL IN THE DOM THAN THE ELEMENT ON WHICH THE EVENT ORGINATED. IT ALLOWS US TO ATTACH A SINGLE EVENT LISTENER FOR ELEMENTS THAT EXIST NOW OR IN THE FUTURE. // 

// A BREAK DOWN OF (e.target.classList.contains), EVERY HTML ELEMENT HAS AN OBJECT CALLED CLASSLIST THAT CONTAINS A LIST OF THE CLASSES APPLIED TO THE ELEMENT AND METHODS FOR CHANGING THOSE CLASSES. // 

buttons.addEventListener("click", (e) => {
    if(e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor()  
    }
    if(e.target.classList.contains("subtract")) {
        count.innerHTML--;
        setColor() 
    }
    if(e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor()  
    }
});

function setColor() {
    if(count.innerHTML > 0) {
        count.style.color = "green"
    } else if(count.innerHTML < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "black"
    } 
}
 