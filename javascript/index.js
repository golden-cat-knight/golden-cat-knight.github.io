// Ketik kode ini di dalam file index.js kamu (tanpa tag <script>)

function init() {
    let sidebar = document.getElementById("sidebar");
    let ul = document.getElementById("ul");
    let li = document.getElementById("li");
    let profile = document.getElementById("profile");
    let nav = document.getElementById("nav");
    setTimeout(() => {
        if (sidebar && ul) {
            sidebar.addEventListener("click", () => {
                sidebar.classList.toggle("sidebar-cancel");
                ul.classList.toggle("ul-show");
                li.classList.toggle("li-show");
                profile.classList.toggle("profile-ext");
                nav.classList.toggle("nav-liquid");
            });
        }
    }, 50);
}

fetch("/elemen/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        init()
    });
    