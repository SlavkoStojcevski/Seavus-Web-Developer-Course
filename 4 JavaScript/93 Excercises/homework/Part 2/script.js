let activity = "<input placeholder='activity'>";
let button = "<button>Add</button>";
let list = "<ul></ul>";
let activities = [];
$("body").prepend(activity);
$("body").append(button);
$("body").append(list);
$("button").on("click", function () {
  $("ul").append("<li>" + $("input").val() + "</li>");
  activities.push($("input").val());
});
