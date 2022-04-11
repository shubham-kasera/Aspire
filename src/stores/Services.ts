const domain = 'https://6251922bdfa31c1fbd6fd031.mockapi.io';

export const getUserData = (id: string, cb: Function) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(`${domain}/user_data/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      cb(JSON.parse(result));
    })
    .catch(error => console.log('error', error));
};

export const updateUserData = (id: string, data: Object, cb: Function) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(`${domain}/user_data/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      cb(JSON.parse(result));
    })
    .catch(error => console.log('error', error));
};
