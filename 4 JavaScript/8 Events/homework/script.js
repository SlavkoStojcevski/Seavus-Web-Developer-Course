function create_table(){
  let colums=prompt("Number of colums: ");
  let rows=prompt("Number of rows: ");
  let table="<table>";
  for(let i=1;i<=rows;i++){
    table+="<tr>";
    for(let j=1;j<=colums;j++){
      table+="<td>Row: "+i+"; Column: "+j+"; </td>";
    }
    table+="</tr>";
  }
  table+="</table>";
  let body=document.querySelector("body");
  body.innerHTML=table;
}
create_table();
document.querySelector("table").style.border = "1px solid black";
let td = document.querySelectorAll("td");
for (data of td) {
  data.style.border = "1px solid black";
}