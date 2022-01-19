function create_table(){
  let table="<table>";
  let rows=document.getElementById("rows").value;
  let colums=document.getElementById("columns").value;
  for(let i=1;i<=rows;i++){
    table+="<tr>";
    for(let j=1;j<=colums;j++){
      table+="<td>Row: "+i+"; Column: "+j+"; </td>";
    }
    table+="</tr>";
  }
  table+="</table>";
  let body=document.querySelector("body");
  body.innerHTML+=table;
  document.querySelector("table").style.border = "1px solid black";
  let td = document.querySelectorAll("td");
  for (data of td) {
    data.style.border = "1px solid black";
  }
}
let create=document.getElementById("create");
create.addEventListener("click", create_table);