var form = $("#mySearch")

form.submit(function(e){
    e.preventDefault()
    
    var s = $("#search").val()
    var url = "https://api.pexels.com/v1/search?query="+ s +"&per_page=20"
    console.log(url)
    var fotos
    var foto

    fetch(url,{
    headers: {
    Authorization: "y35KhSr7XMEekKAYyBXuMVYLAFKp2T3I45Opbradn3O2MXKHiARHOLFD"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     fotos = data.photos
     console.log(data.photos)
     for(var i=0; i<fotos.length; i++){
        foto = `<img src="${fotos[i].src.medium}" />` 
        

        $("#Fotos").append(foto)
       }
   })
   
}) 

/* var form = $("#mySearch")

form.submit(function(e){
    e.preventDefault()
    var s = $("#search").val()

    var url = "https://api.pexels.com/v1/search?query="+s+"&per_page=50&page2" 
    
    var fotos
    var foto
    $("#Foto").empty()
   
    fetch(url,{
        headers: {
          Authorization: "y35KhSr7XMEekKAYyBXuMVYLAFKp2T3I45Opbradn3O2MXKHiARHOLFD"
        }
      })
         .then(resp => {
           return resp.json()
         })
         .then(data => {
           console.log(data.photos)
           fotos = data.photos

           for (var i=0; i<fotos.length; i++){
            
             foto = `<img src="${fotos[i].src.medium}"/>`
            $("#Fotos").append(foto) 

            foto = document.createElement('img')
            foto.src = fotos[i].src.medium
            
            document.querySelector('#Fotos').appendChild(foto)
            
           }
         })
    
    }) */