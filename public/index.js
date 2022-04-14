const BaseUrl = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
// calbacke
getData()
// fetche api
async function getData(){
    try{
        const response = await fetch(BaseUrl)
        const data = await response.json()
        renderMember(data)
        // console.log(data.data[2].name)
    }catch(err){
        console.log("Error:" , err.message)
        // alert('oops Erorr,iets loopt fout')
    }
}

// render de information in html

function renderMember(data){
    const content = document.querySelector('.content')
    content.innerHTML +=`
            <h3>Form informatie</h3>
            <ul>
                <li><span></span>Naam ${data.data[0].name}</li>
                <li> <span></span>Stad ${data.data[0].town} </li>
                <li> <span></span> locatie ${data.data[0].location}</li>
                <li><span></span>Tijd ${data.data[0].time}</li>

            </ul>`
}

