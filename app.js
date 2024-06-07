fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log('resolved', res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log('error', e);
    })