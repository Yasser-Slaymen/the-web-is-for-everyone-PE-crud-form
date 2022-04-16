// loading state
let sprinnerWrapper = document.querySelector('.spinner-wrapper')
setTimeout(() =>{
    hidePreloader();
}, 500)

function hidePreloader() {
    sprinnerWrapper.style.display = "none"
}
// End loading state

// Methode:post
const Url = 'https://codingthecurbs.api.fdnd.nl/v1'
const formPost = document.querySelector('.form_contener')

formPost.addEventListener('submit', (post) => {
    post.preventDefault()
   
    
    let data = {
        smartzoneId: document.querySelector('#smartzoneId').value,
        name: document.querySelector('#name').value,
        town: document.querySelector('#town').value,
        location: document.querySelector('#location').value,
        function: document.querySelector('#function').value,
        time: document.querySelector('#time').value,
        size: document.querySelector('#size').value,
        utilization: document.querySelector('#utilization').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,

    }


    fetch(Url + `/smartzone`,{
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => renderMember(data))
    .catch( (error) =>console.log('Error')) 
    
    
         
})
