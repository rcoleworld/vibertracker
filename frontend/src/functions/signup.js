const url = 'http://localhost:5000/users/createuser';

export async function userSignup(submittedUsername, submittedPassword) {
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
  return json
}