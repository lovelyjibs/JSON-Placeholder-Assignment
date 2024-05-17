



const div = document.getElementById("container")

const fetchPosts = async() =>{
    
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts")

    const posts = await reponse.json()

    console.log(posts);

posts.forEach((each)=>(

    div.innerHTML +=`
    
    
    <div class="card">
    <hi> ${each.body}</h1>
    <h3> ${each.title}<h3>
    <h4> ${each.userId}<h4>
    <button class="btn">View More</button>

    </div>
    `

))

}


fetchPosts()

const nav = document.getElementById("container")


const fetchAlbums = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    const albums = await response.json()
    console.log(albums);

  albums. forEach((each)=>(

    nav.innerHTML += `

    <nav class="card">
    <hi> ${each.title}</h1>
    <button class="btn"> View More </button>
    
    </nav>
    `
  ))
        

}

fetchAlbums()

const main = document.getElementById("container")

const fetchComments = async() =>{

    const reponse = await fetch("https://jsonplaceholder.typicode.com/comments")

   const comments = await reponse.json()

    console.log(comments);


    comments. forEach((each)=>(

        main. innerHTML +=`

        <main class ="card">
        <h1> ${each.body}</h1>
        <h3> ${each.email}</h3>
        <h4> ${each.name}</h4>
        <button class="btn"> View More</button>

        </main>
        `
    ))
        
}

fetchComments()


  

