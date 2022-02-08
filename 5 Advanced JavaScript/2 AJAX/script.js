$.ajax({
    url: "https://swapi.dev/api/people/1",
    success: function (data) {
        let table=document.createElement("table");
        data.forEach(function(){
            table.appendChild()
        });
        $("body").appendChild(table);
    }
  });