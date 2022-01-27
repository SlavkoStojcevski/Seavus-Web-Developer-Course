let firstName = "<input id='firstName' placeholder='First name' >";
let lastName = "<input id='lastName' placeholder='Last name' >";
let phoneNumber =
  "<input type='number' id='phoneNumber' placeholder='Phone number' >";
let button = "<button>Save</button>";
let table =
  "<table><tr><th>First name</th><th>Last name</th><th>Phone number</th></tr></table>";
$("body").prepend(firstName);
$("body").append(lastName);
$("body").append(phoneNumber);
$("body").append(button);
$("body").append(table);
$("button").on("click", function () {
  $("table").append(
    "<tr><td>" +
      $("#firstName").val() +
      "</td><td>" +
      $("#lastName").val() +
      "</td><td>" +
      $("#phoneNumber").val() +
      "</td></tr>"
  );
});
