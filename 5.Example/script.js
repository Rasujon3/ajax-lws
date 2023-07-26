function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      // console.log(JSON.parse(this.responseText).userId);
      // console.log(this.response);

      // handle application error
      if (this.status >= 400) {
        reject(
          `There was an application error status: ${this.status} & ${this.statusText}`
        );
      } else {
        resolve(this.response);
      }
    };
    xhr.onerror = function () {
      reject("There was an error!");
    };
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send(data);
  });
  return promise;
}

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
    (responseData) => {
      console.log(responseData);
    }
  );
}

function sendData() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  )
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
