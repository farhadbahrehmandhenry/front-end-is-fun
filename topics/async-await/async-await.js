var apiCall = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('data received'), 3000);
  });
}

var getData = async() => {
  console.log('getting data ....');
  var data = await apiCall();
  console.log(data);
}

getData();