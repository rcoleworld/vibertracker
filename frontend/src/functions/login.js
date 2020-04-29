const jwt = require("jsonwebtoken")
let url = 'https://vibetracker.herokuapp.com/users/login';

export async function userLogin(submittedUsername, submittedPassword) {
  let credientials = { username: submittedUsername, password: submittedPassword }
  const response = await fetch(url, {
    method: 'POST',
    origin: '*',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credientials),
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('Error: ', error);
      return error;
    });
  const json = await response.json()
  if (json.token) {
    localStorage.setItem("jwtToken", json.token);
    localStorage.setItem("username", submittedUsername);
  }
  return json
}

export function decode() {
  if (localStorage.getItem("jwtToken")) {
    const decoded = jwt.decode(localStorage.jwtToken, { complete: true });
    let jwtPayload = JSON.stringify(decoded.payload);
    return jwtPayload;
  }
}