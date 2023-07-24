function addList(id){
    const nameField = document.getElementById(id);
    const name = nameField.innerText;

    const olField = document.getElementById('list');
    const liCreateField = document.createElement('li');
    const textNode = document.createTextNode(name);

    liCreateField.appendChild(textNode);
    olField.appendChild(liCreateField);

}

document.getElementById('btn-messi').addEventListener('click',function(){
    addList('messi-name');
    document.querySelector('#btn-messi').disabled = true;

})
document.getElementById('btn-neymar').addEventListener('click',function(){
    addList('neymar-name');
    document.querySelector('#btn-neymar').disabled = true;

})
document.getElementById('btn-ronaldo').addEventListener('click',function(){
    addList('ronaldo-name');
    document.querySelector('#btn-ronaldo').disabled = true;

})
document.getElementById('btn-ramos').addEventListener('click',function(){
    addList('ramos-name');
    document.querySelector('#btn-ramos').disabled = true;

})
document.getElementById('btn-xavi').addEventListener('click',function(){
    addList('xavi-name');
    document.querySelector('#btn-xavi').disabled = true;

})
document.getElementById('btn-iniesta').addEventListener('click',function(){
    addList('iniesta-name');
    document.querySelector('#btn-iniesta').disabled = true;

})
