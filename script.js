function doaction(){
    var username = document.getElementById("username").value;
    var userage = document.getElementById("userage").value;
    var usergender = document.getElementById("usergender").value;
    var usercourse = document.getElementById("usercourse").value;
    var useremail = document.getElementById("useremail").value;

    if (username === "" || userage === "" || useremail === "") {
        alert("Please fill all fields.");
        return;
    }

    let table = document.getElementById("studenttable");
    let row = table.insertRow();
    row.insertCell(0).innerText = username;
    row.insertCell(1).innerText = userage;
    row.insertCell(2).innerText = usergender;
    row.insertCell(3).innerText = usercourse;
    row.insertCell(4).innerText = useremail;

    let action = row.insertCell(5);
    let delbut = document.createElement("button");
    delbut.innerText = "Delete";
    delbut.onclick = function () { 
        table.deleteRow(row.rowIndex);
    };
    action.appendChild(delbut);

    document.getElementById("username").value = "";
    document.getElementById("userage").value = "";
    document.getElementById("useremail").value = "";
}
