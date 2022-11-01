
var list = document.querySelector('ul');
var input = document.querySelector('input');
var button = document.querySelector('button');
var listItems = document.getElementsByClassName('list');
    listItems = 0;

button.addEventListener('click',  () => {


    var myItem = input.value;
    input.value = '';

    if (myItem === '') {
        alert('Please provide input.')
    }
    else if(listItems > 24){
        alert('You have reached max number of chapters.')
    } 
    else {
        var listItem = document.createElement('li');
        var listText = document.createElement('span');
        var listBtn = document.createElement('button');

        listItems ++;
        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);
    
        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
            listItems --;
        });

    input.focus();
   } });