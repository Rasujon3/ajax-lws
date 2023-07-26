function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest(); // create an instance

  // what to do when response arrives
  xhr.onload = function () {
    console.log("Response Fineshed");
    // callback function () -> response pauyar por call hobe
    const container = document.getElementById("demo");
    container.innerHTML = this.responseText;
  };

  //   prepare request (kon url e request korbo or kon file e request korbo)
  //   methods: (get,post ,put,patch, delete,options)
  xhr.open("GET", "./data/data.txt", true);

  // add a request header
  xhr.setRequestHeader("MY_NAME", "sujon");

  //   send request
  xhr.send();

  console.log("Sujon");
  // abort -> request cancel
  // xhr.abort();
}
