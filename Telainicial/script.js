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
        } else {
            progress += 1;
            load.style.width = (progress/1.5) + "%";
        }
    }, 30);
}
