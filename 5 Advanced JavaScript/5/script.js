function populatetable(data){
  let titles="<tr><td>Id</td><td>Name</td><td>Air date</td><td>Url</td><td>Episode</td></tr>";
  let information="";
  for (episode of data) {
    information +=
      "<tr><td>" +
      episode.id +
        "</td><td>" +
        episode.name +
        "</td><td>" +
        episode.air_date +
        "</td><td>" +
        episode.url +
        "</td><td>" +
        episode.episode +
        "</td></tr>";
  }
  $("#data").html(
    titles+information
  );
}
let page=1;
$("#loaddata").click(function () {
  $.ajax({
    url: "https://rickandmortyapi.com/api/episode",
    success: function (data) {
      populatetable(data.results);
    },
  });
});
$("#previous").click(function () {
  if(page!=1){page--;}
  $.ajax({
    url: "https://rickandmortyapi.com/api/episode/?page="+page,
    success: function (data) {
      populatetable(data.results);
    },
  });
});
$("#next").click(function () {
  page++;
  $.ajax({
    url: "https://rickandmortyapi.com/api/episode/?page="+page,
    success: function (data) {
      populatetable(data.results);
    },
  });
});