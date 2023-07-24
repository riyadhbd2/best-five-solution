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

// calculate button

document.getElementById('calculate').addEventListener('click',function(){
    const perPlayerCostField = document.getElementById('per-player');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayerCost = parseInt(perPlayerCostString);

    const playerNumber = getPlayerNumber();

    const expensesField = document.getElementById('expenses');
    expensesField.innerText = perPlayerCost * playerNumber;
    
})
