const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click",logoutUserInfo);

function logoutUserInfo() {
    localStorage.clear();
    location.reload();
}