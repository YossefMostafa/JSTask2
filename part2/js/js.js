var data = document.getElementById('description') ,
    btnName = document.getElementById('btn-name') ,
    btnInfo = document.getElementById('btn-info') ,
    btnExp = document.getElementById('btn-exp') ,
    btnContact = document.getElementById('btn-contact');
    
function onClickName() {
    data.innerHTML = 'ITEM1 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';
}
btnName.addEventListener('click', onClickName);

function onClickInfo() {
    data.innerHTML = 'ITEM2 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';
}
btnInfo.addEventListener('click', onClickInfo);

function onClickExp() {
    data.innerHTML = 'ITEM3 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';
}
btnExp.addEventListener('click', onClickExp);

function onClickContact() {
    data.innerHTML = 'ITEM4 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';
}
btnContact.addEventListener('click', onClickContact);