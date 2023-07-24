// Function

let playerCount = 0;
function addList(id){
    if (playerCount >= 5){
        alert("You can not select more than 5 players");
        return;
    }
        const nameField = document.getElementById(id);
        const name = nameField.innerText;

        const olField = document.getElementById('list');
        const liCreateField = document.createElement('li');
        const textNode = document.createTextNode(name);

        liCreateField.appendChild(textNode);
        olField.appendChild(liCreateField);
        playerCount++;
    }

    // get player number depend on selection function

    function getPlayerNumber(){
        const liField = document.getElementsByTagName('li');
        const liNumber = liField.length;
        return liNumber;  
    }

// get inputElement and make integer

function getInputElement(id){
    const elementField = document.getElementById(id);
    const elementString = elementField.value;
    const element = parseInt(elementString);
    return element;
}

// Players selection buttons

document.getElementById('btn-messi').addEventListener('click',function(){
    addList('messi-name');
    getPlayerNumber();
    document.querySelector('#btn-messi').disabled = true;

})
document.getElementById('btn-neymar').addEventListener('click',function(){
    addList('neymar-name');
    getPlayerNumber();
    document.querySelector('#btn-neymar').disabled = true;

})
document.getElementById('btn-ronaldo').addEventListener('click',function(){
    addList('ronaldo-name');
    getPlayerNumber();
    document.querySelector('#btn-ronaldo').disabled = true;

})
document.getElementById('btn-ramos').addEventListener('click',function(){
    addList('ramos-name');
    getPlayerNumber();
    document.querySelector('#btn-ramos').disabled = true;

})
document.getElementById('btn-xavi').addEventListener('click',function(){
    addList('xavi-name');
    getPlayerNumber();
    document.querySelector('#btn-xavi').disabled = true;

})
document.getElementById('btn-iniesta').addEventListener('click',function(){
    addList('iniesta-name');
    getPlayerNumber();
    document.querySelector('#btn-iniesta').disabled = true;

})

//button calculate expenses

document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerCost = getInputElement('per-player');

    const playerNumber = getPlayerNumber();

    const expensesField = document.getElementById('expenses');
    const playersCost = perPlayerCost * playerNumber
    expensesField.innerText = playersCost;
    
})



// button calculate total
document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const coachMoney = getInputElement('coach');
    const managerMoney = getInputElement('manager');
    const playerExpensesField = document.getElementById('expenses');
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseInt(playerExpensesString);

    const totalcalculate = document.getElementById('total-calculate');
    totalcalculate.innerText = coachMoney + managerMoney + playerExpenses;
})