var subMenu = document.getElementById("sub-menu");
//var iconMenu = document.getElementById("menu-icon");
var icon = document.getElementById("icon");

function dropDownMenu() {
    //subMenu.classList.toggle("open-menu");
    //icon.classList.toggle("active-icon");
    var check = subMenu.classList.contains("open-menu");
    if(check) {
        subMenu.classList.remove("open-menu");
        icon.style.color = '';
        icon.style.transform = '';

    } else {
        icon.style.color = '#088178';
        icon.style.transform = 'scale(1.2)';
        subMenu.classList.add("open-menu");
    }
}