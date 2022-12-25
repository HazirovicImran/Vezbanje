// fetch() asinhrona funkcija za prikupljanje podataka.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => console.log(post.title))
    })
    .catch((err) => console.log(err))
