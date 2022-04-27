// basic async-awit

var callApi = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('data from db')
    }, 3000);
  });
}

var fetchData = async() => {
  console.log('getting data ...');
  var data = await callApi();
  console.log(data)
}

fetchData();