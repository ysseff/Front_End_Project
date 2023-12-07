const deleteBtn1 = document.getElementById('remove-btn1');
const deleteBtn2 = document.getElementById('remove-btn2');
const deleteBtn3 = document.getElementById('remove-btn3');

function deleteRow() {
    const row = this.closest('tr');
    row.remove();
    console.log(this);
}


deleteBtn1.addEventListener('click', deleteRow);
deleteBtn2.addEventListener('click', deleteRow);
deleteBtn3.addEventListener('click', deleteRow);