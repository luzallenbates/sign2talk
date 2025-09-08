let logo = document.getElementById("logo");
let load = document.getElementById("load");
logo.onclick = function() {
    load.style.backgroundColor = "yellow";
    load.style.width = "0%";
    load.style.display = "block";
    let progress = 0;
    let interval = setInterval(function() {
        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "file:///C:/Users/DESKTOP%2025%20LAB%20INFO.DESKTOP-RTHFNLT/Desktop/luzallenbates/sign2talk/LoginPage/login.html";
        } else {
            progress += 1;
            load.style.width = (progress/2) + "%";
        }
    }, 30);
}
