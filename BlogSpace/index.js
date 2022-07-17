const blogList = document.getElementById('blog-list')
const titlePost = document.getElementById('title')
const bodyPost = document.getElementById('body')
const newPost = document.getElementById('new-post')
let postArray = []

function renderPost(){
    let html = ""
        for (let post of postArray){
            html += `<h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <hr/>`
        }
           blogList.innerHTML = html
}


fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
       postArray = data.slice(0, 5)
       renderPost()   
    })
    
newPost.addEventListener('submit', (event) => {
    event.preventDefault()
     const data = {
         title: titlePost.value,
         body: bodyPost.value
     }
     fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
         method: 'POST',
         body: JSON.stringify(data),
           headers: {
        'Content-Type': 'application/json' 
     }
     })
        .then(response => response.json())
        .then(post => {
             postArray.unshift(post)
            renderPost()
            newPost.reset()
            
        })
       
        
})    
    