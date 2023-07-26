function loadData(callbackFunction) {
  // create a new request
  const xhr = new XMLHttpRequest(); // create an instance

  // what to do when response arrives
  xhr.onload = function () {
    callbackFunction(this);
  };

  //   prepare request (kon url e request korbo or kon file e request korbo)
  //   methods: (get,post ,put,patch, delete,options)
  xhr.open("GET", "./data/data.txt");

  // add a request header
  xhr.setRequestHeader("MY_NAME", "sujon");

  //   send request
  xhr.send();

  // abort -> request cancel
  // xhr.abort();
}

function myCallback1(xhr) {
  const container = document.getElementById("demo");
  container.innerHTML = xhr.responseText;
}

function myCallback2(xhr) {
  const container = document.getElementById("demo2");
  container.innerHTML = xhr.responseText;
}
