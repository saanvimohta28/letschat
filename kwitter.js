function username(){
    var username = document.getElementById("btinput").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}
