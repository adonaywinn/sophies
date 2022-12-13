function onFocusForm(obj, value) {
    obj.setAttribute("placeholder", value);
}
function offFocusForm(obj, value) {
    obj.removeAttribute("placeholder");
} 
window.onload = function() {  

    let hideBalance = document.querySelector(".hide-balance");
    var hideBalanceon = document.querySelector(".hidebalanceon");
    let balance = document.querySelector(".balance");
    let balanceOn = document.querySelector(".balance-on");
    let balanceUser = document.querySelector(".balance-user");
    let balanceOnUser = document.querySelector(".balance-on-user");
    hideBalanceon.onclick = function(){
        if(hideBalance.classList.contains("fa-eye")){
            hideBalance.classList.remove("fa-eye");
            hideBalance.classList.add("fa-eye-slash");
            balance.style.display="flex";
            balanceOn.style.display="none";

        }else{
            hideBalance.classList.remove("fa-eye-slash");
            hideBalance.classList.add("fa-eye");
            balance.style.display="none";
            balanceOn.style.display="flex";
        }
        if(hideBalanceon.classList.contains("fa-eye")){
            hideBalanceon.classList.remove("fa-eye");
            hideBalanceon.classList.add("fa-eye-slash");
            balanceUser.style.display="flex";
            balanceOnUser.style.display="none";

        }else{
            hideBalanceon.classList.remove("fa-eye-slash");
            hideBalanceon.classList.add("fa-eye");
            balanceUser.style.display="none";
            balanceOnUser.style.display="flex";
        }
    }
    hideBalance.onclick = function(){
        if(hideBalance.classList.contains("fa-eye")){
            hideBalance.classList.remove("fa-eye");
            hideBalance.classList.add("fa-eye-slash");
            balance.style.display="flex";
            balanceOn.style.display="none";

        }else{
            hideBalance.classList.remove("fa-eye-slash");
            hideBalance.classList.add("fa-eye");
            balance.style.display="none";
            balanceOn.style.display="flex";
        }
        if(hideBalanceon.classList.contains("fa-eye")){
            hideBalanceon.classList.remove("fa-eye");
            hideBalanceon.classList.add("fa-eye-slash");
            balanceUser.style.display="flex";
            balanceOnUser.style.display="none";

        }else{
            hideBalanceon.classList.remove("fa-eye-slash");
            hideBalanceon.classList.add("fa-eye");
            balanceUser.style.display="none";
            balanceOnUser.style.display="flex";
        }
        
    }

    var div = document.querySelector("div[class='dropdown-content']");
    var button = document.querySelector("button[class='buttonbalance']");
    button.onclick = function() {
        if(div.style.display == 'none'){
            div.style.display = "flex";
            button.style.transform = "rotate(-180deg)";
        }
        else { 
            div.style.display = "none";
            button.style.transform = "rotate(0deg)";
        }
    };
}
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".closeIcon");
    const menuIcon= document.querySelector(".menuIcon");
    closeIcon.style.display = "none";
    function toggleMenu() {
        if (menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        } else {
            menu.classList.add("showMenu");
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";    
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    const menuNotification = document.querySelector(".menu-notification");
    const notification = document.querySelector(".notification");
    const icon = document.querySelector("#symbol-coin");
    function toggleMenuNotification() {
        if (menuNotification.classList.contains("showMenuNotification")) {
            menuNotification.classList.remove("showMenuNotification");
            icon.style.color = "#fff";
        } else {
            menuNotification.classList.add("showMenuNotification");
            icon.style.color = "#333";

        }
    }
    notification.addEventListener("click", toggleMenuNotification);
      