

var siteNameInput = document.getElementById("bookmarkName");
var siteUrlInput = document.getElementById("bookmarkURL");

var submitbtn = document.getElementById("submitBtn");

var bookMarksList=[];


if(localStorage.getItem("addendBookMarks")==null){
  bookMarksList=[];
}
else {
  bookMarksList = JSON.parse(localStorage.getItem("addendBookMarks"))  ;
   display();
}






function addBookMark() {
    var bookMark = {
      siteName : siteNameInput.value , 
      siteUrl : siteUrlInput.value ,

    }

  var userSiteName = bookMark.siteName;
    var userURL = bookMark.siteUrl;
  var httpsRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?$/;
;
  var nameRegex = /^\w{4,}(\s+\w+)*$/;
  if(httpsRegex.test(userURL)==true && nameRegex.test(userSiteName)==true){


//window.alert("it is repeated bookmark , enter a new book mark")
    

 
     bookMarksList.push(bookMark);}
  
  

  else{
    window.alert(`Site Name or Url is not valid, Please follow the rules below :

Site name must contain at least 3 characters
Site URL must be a valid one and start by https://`)

  }
   
localStorage.setItem("addendBookMarks" ,JSON.stringify( bookMarksList));
    clear();
    display();
}





function clear(){
  siteNameInput.value = null;
  siteUrlInput.value = null;
}


function display(){

 var tableContent = "";

 for(var i=0 ; i<bookMarksList.length ; i++)
  {  
 tableContent+=`<tr>
                    <td> ${i+1}</td>
                     <td>${bookMarksList[i].siteName}</td>              
                    <td>     <button  class="btn bg-secondary-subtle" onclick="visit(${i})">
                      <i class="fa-solid fa-eye pe-2"></i>Visit
                    </button></td>

                    <td>
                      <button  class="btn pe-2" onclick="deleteR(${i})">
                        <i class="fa-solid fa-trash-can"></i>
                        Delete
                      </button>
                    </td>
                    </tr>`

}
document.getElementById("tableContent").innerHTML= tableContent;

}



function deleteR(i){
 bookMarksList.splice(i , 1);
 localStorage.setItem("addendBookMarks" , JSON.stringify( bookMarksList))
 display();
}

function visit(i) {
  var bookMark = {
    siteName : siteNameInput.value , 
    siteUrl : siteUrlInput.value ,

  }
  var userURL = bookMark.siteUrl;
  var httpsRegex = /^https:\/\/*$/;
if(httpsRegex.test(userURL)==true){
window.open(bookMarksList[i].siteUrl);}
else{
  open(`https://`+`${bookMarksList[i].siteUrl}`);
}

}







  
  






