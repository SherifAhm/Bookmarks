var siteNameInput=document.getElementById('siteName')
var siteUrlInput=document.getElementById('siteUrl')

var siteContainer = []

if(localStorage.getItem('sites')!=null){
  siteContainer = JSON.parse(localStorage.getItem('sites')) //step2
  displaySites()
}



function addSite(){

  var productObj={
    name:siteNameInput.value,
    url:siteUrlInput.value
  }

    siteContainer.push(productObj)

    localStorage.setItem('sites', JSON.stringify(siteContainer)) //step1
    
    displaySites()
    clearInputs()
}


function displaySites() {
  var cartona =``
    for(var i=0; i<siteContainer.length; i++){
    cartona+=`
    <div class="container my-4 d-flex p-4" id="BG2">
            <div class="txt w-25">
                <h2>${siteContainer[i].name}</h2>
            </div>
            <div class="btns">
                <a class="btn btn-primary px-3 me-2" href="${siteContainer[i].url}" target="_blank">Visit</a>
                <button class="btn btn-danger btndelete" onclick="deleteSite(${i})">Delete</button>
            </div>      
        </div>
    `
    }
document.getElementById('ListItems').innerHTML=cartona
}

// displaySites() //step3 


function clearInputs(){
  siteNameInput.value = "";
  siteUrlInput.value= "";

}


// siteContainer.splice(2,1)

function deleteSite(Index) {
  siteContainer.splice(Index, 1)
  localStorage.setItem('sites', JSON.stringify(siteContainer))
  displaySites()
}