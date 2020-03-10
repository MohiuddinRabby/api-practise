/**
 * const person = {
    name: "Rabby",
    age: 25,
    favFood: ['pizza', 'biriyani'],
    color: {
        fav: 'sky blue',
        nonFav: 'green',
    }
};
const personStrigifyJson = JSON.stringify(person);
console.log(personStrigifyJson);
// {"name":"Rabby","age":25,"favFood":["pizza","biriyani"]}
const jsonParse = JSON.parse(personStrigifyJson);
console.log(jsonParse);
// {name: "Rabby", age: 25, favFood: Array(2)}
 */

/*
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => jsonApi(json))

function jsonApi(users) {
    //console.log(users)
    const userNames = users.map(user => user.username);
    const ul = document.getElementById('user-container');
    for (let i = 0; i < userNames.length; i++) {
        const user = userNames[i];
        const li = document.createElement('li');
        li.innerText = user;
        ul.appendChild(li);
    }
}
*/
document.getElementById('subpost').addEventListener('click', function () {

    const title = document.getElementById('ptitle').value;
    const bodyc = document.getElementById('pbody').value;
    const post = {
        title: title,
        body: bodyc
    };
    postNow(post);
});

function postNow(postss) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(postss),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
}