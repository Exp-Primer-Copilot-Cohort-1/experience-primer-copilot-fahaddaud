function skillmembers() {
    var skill = document.getElementById("skill").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/Project1/api/skill/" + skill, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var members = JSON.parse(xhr.responseText);
            var table = document.getElementById("skillmembers");
            table.innerHTML = "";
            for (var i = 0; i < members.length; i++) {
                var row = document.createElement("tr");
                var cell = document.createElement("td");
                cell.innerHTML = members[i].firstName + " " + members[i].lastName;
                row.appendChild(cell);
                table.appendChild(row);
            }
        }
    }
    xhr.send();
}