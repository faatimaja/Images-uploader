//Function for uploading image
/*var image = document.getElementById('output');
var loadFile = function(event) {

    image.src = URL.createObjectURL(event.target.files[0]);

}*/
var output = document.getElementById("result");
var filesInput = document.getElementById("files");

window.onload = function(){
         
    filesInput.addEventListener("change", function(event){
        
        var files = event.target.files; 

        for(var i = 0; i< files.length; i++)
        {
            var file = files[i];
            
            var imageReader = new FileReader();
            
            imageReader.addEventListener("load",function(event){
                
                var imageFile = event.target; 
                var div = document.createElement("div");
                div.innerHTML = "<img class='thumbnail' src='" + imageFile.result + "'/>";
                
                output.insertBefore(div,null);                       
            });          
                //Read the image
            imageReader.readAsDataURL(file);
        }                                          
    });
}


//Function for removing images
function deletephoto() { 
    var up = document.getElementById('up');
    output.parentNode.removeChild(output); 
    up.innerHTML = "Images are removed.";  
}  




