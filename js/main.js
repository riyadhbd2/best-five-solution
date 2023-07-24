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
})
document.getElementById('btn-neymar').addEventListener('click',function(){
    addList('neymar-name');
})
document.getElementById('btn-ronaldo').addEventListener('click',function(){
    addList('ronaldo-name');
})
document.getElementById('btn-ramos').addEventListener('click',function(){
    addList('ramos-name');
})
document.getElementById('btn-xavi').addEventListener('click',function(){
    addList('xavi-name');
})
document.getElementById('btn-iniesta').addEventListener('click',function(){
    addList('iniesta-name');
})
