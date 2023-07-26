function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest(); // create an instance

  // what to do when response arrives
  xhr.onload = function () {
    // callback function () -> response pauyar por call hobe
    const container = document.getElementById("demo");
    container.innerHTML = this.responseText;
    // console.log(this.getAllResponseHeaders());
    console.log(this.getResponseHeader("etag"));
  };

  //   prepare request (kon url e request korbo or kon file e request korbo)
  //   methods: (get,post ,put,patch, delete,options)
  xhr.open("GET", "./data/data.txt", true);

  // add a request header
  xhr.setRequestHeader("MY_NAME", "sujon");

  //   send request
  xhr.send();

  // abort -> request cancel
  // xhr.abort();
}
