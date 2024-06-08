// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log('resolved', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((res) => {
//         console.log('2nd request resolved');
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log('error', e);
//     })



    // fetch("https://catfact.ninja/facts")
    // .then((reso) => {
    //     console.log('resolvedcat', reso);
    //     return reso.json();
    // })
    // .then((datas) => {
    //     console.log(datas);
    // })
    // .catch((e) => {
    //     console.log('errorcat', e);
    // })


    // using async functions to do the same thing

    const loadStarWars =async () => {
        try{
            const res = await fetch("https://swapi.dev/api/people/1/");
            const data = await res.json();
            console.log(data);
            const res2 = await fetch("https://swapi.dev/api/people/2/");
            const data2 = await res2.json();
            console.log('2ndrequest')
            console.log(data2);
        } catch (e) {
            console.log('Error')
        }
    }
    loadStarWars();

    const catFacts = async () => {
        try{        
            const res = await fetch("https://catfact.ninja/facts");
            const data  = await res.json();
            console.log(data);
            } catch (e) {
                console.log('Error')
            }
   
        }
    catFacts();


