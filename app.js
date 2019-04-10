/* 
    TODO:   
    1. Finish logic, validate results
    2. Fix cell changing 
    3. Add bootsrap
*/


var Game = {
    current: 'X',
    counter: 0
}

Innitialize();

function Innitialize () {
    currentTurn();
}

// Clear the board and score
function ClearBoard() {
    document.getElementById('1').innerHTML = '';
    document.getElementById('2').innerHTML = '';
    document.getElementById('3').innerHTML = '';
    document.getElementById('4').innerHTML = '';
    document.getElementById('5').innerHTML = '';
    document.getElementById('6').innerHTML = '';
    document.getElementById('7').innerHTML = '';
    document.getElementById('8').innerHTML = '';
    document.getElementById('9').innerHTML = '';
    this.Game.counter = 0;
}

// Add all optional winning scenarios 
function checkWin () {
    let box1 =  document.getElementById('1').innerHTML || 'none';
    let box2 =  document.getElementById('2').innerHTML || 'none';
    let box3 =  document.getElementById('3').innerHTML || 'none';
    let box4 =  document.getElementById('4').innerHTML || 'none';
    let box5 =  document.getElementById('5').innerHTML || 'none';
    let box6 =  document.getElementById('6').innerHTML || 'none';
    let box7 =  document.getElementById('7').innerHTML || 'none';
    let box8 =  document.getElementById('8').innerHTML || 'none';
    let box9 =  document.getElementById('9').innerHTML || 'none';
    // Checking rows
    if (box1 != 'none' && box1 == box2 && box2 == box3 || 
        box4 != 'none' && box4 == box5 && box5 == box6 || 
        box7 !='none' && box7  == box8 && box8 == box9) {
        return true;
    }
    // Checking columns
    else if (box1 !='none' && box1 == box4 && box4 == box7 || 
            box2 !='none' && box2 == box5 && box5 == box7 || 
            box3 !='none' && box3 == box6 && box6 == box9) {
        return true;
    }
    // Checking diagnoals
    else if (box1 !='none' && box1 == box5 && box5 == box9 || 
            box3 !='none' && box3 == box5 && box5 == box7) {
        return true;
    }
    else return false;
}

// Mark X / O 
function markSpot(clickedId) {
    var currentTD = document.getElementById(clickedId);
    if (currentTD.innerHTML != "") { // Cell already taken!
        window.alert("Cell already taken!");
    }
    else { 
        let current = Game.current;
        if (current == 'X') {
            // Mark X then Switch to O
            currentTD.innerHTML = current;
            SwitchPlay();
        }
        else { 
            // Mark O then Switch to X
            currentTD.innerHTML = current;
            SwitchPlay();
        }
        // Sending to check if there is a winner
        let gameOver = checkWin();
        let counter = this.Game.counter;
        
        if (gameOver) {
            SwitchPlay(); // Switch back to the last one who played
            let winner = this.Game.current;
            window.alert("Winner is " + winner + "!");
            ClearBoard();
        }
        else if (counter==9) {
            window.alert("Its a tie!");
            ClearBoard();
        }
    }
}

function currentTurn () {
    document.getElementById("current").innerHTML = this.Game.current;
}

function SwitchPlay (){
    // +1 counter here
    let current = this.Game.current, newTurn = '';
    // let counter = this.Game.counter;
    current == 'X' ? newTurn = 'O' : newTurn = 'X';
    this.Game.current = newTurn;
    this.Game.counter++;
    currentTurn();
}

