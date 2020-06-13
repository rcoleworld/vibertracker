const url = 'https://vibetracker.herokuapp.com/locations';

export async function getAllLocations() {
  let queryURL = url.concat(`/getlocations`);
  try {
    const response = await fetch(queryURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    // await new Promise(resolve => setTimeout(resolve, 3000)); // used to test loading icons
    const json = await response.json();

    return json;
  } catch (err) {
    return err;
  }
}

export async function getUserLocations(user) {
  let queryURL = url.concat(`/getuserlocations`);

  const requestBody = { username: user };
  try {
    const response = await fetch(queryURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    // await new Promise(resolve => setTimeout(resolve, 3000)); // used to test loading icons
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
}

export async function addLocation(
  creator,
  title,
  description,
  latitude,
  longitude
) {
  let queryURL = url.concat(`/addlocation`);
  let requestBody = {
    username: creator,
    title: title,
    description: description,
    latitude: latitude,
    longitude: longitude,
  };
  try {
    const response = await fetch(queryURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        console.log('Resp ' + JSON.stringify(response));
        return response;
      })
      .catch((error) => {
        console.log('Error: ', error);
        return error;
      });
    const json = await response.json();

    return json;
  } catch (err) {
    return err;
  }
}
