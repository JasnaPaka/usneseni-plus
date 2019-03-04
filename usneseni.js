var vypis = document.getElementById("vypis");
if (vypis != null) {
    var radky = vypis.getElementsByTagName("tr");

    var items = [];
    for (var i = 0; i < radky.length; i++) {
        if (i == 0) {
            continue;
        }
        items.push(radky[i]);
    }

    items.forEach(function (row) {
        var bunky = row.getElementsByTagName("td");
        var nadpis = "";
        
        if (bunky.length > 1) {
            var bunkaSPopisem = bunky[1];
            var odkaz = bunkaSPopisem.getElementsByTagName("a")[0];
            nadpisy = odkaz.getAttribute("title");
            var nadpisyArray = nadpisy.split("\n");
            if (nadpisyArray.length == 3) {
                nadpis = nadpisyArray[2];
            } else {
                nadpis = "(popis neuveden)";
            }
        }

        var newRow = document.createElement("tr");
        row.setAttribute("class", "alt");

        newRow.innerHTML = '<td colspan="6" style="background-color: white; color:black; font-size: 15px; padding-bottom: 15px; padding-top: 3px;">' + nadpis + '</td>';
        row.parentNode.insertBefore(newRow, row.nextSibling);
    });

}