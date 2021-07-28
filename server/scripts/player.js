
//funciones de la clase
function cambiarTrack(track) {

    var path =  track.getAttribute("path")
    oldAudio = document.getElementById("reproductor")
     
    main_audio = oldAudio.parentNode
    main_audio.removeChild(oldAudio)
     
    new_audio = document.createElement("audio")
    new_audio.setAttribute("id","reproductor")
    new_audio.setAttribute("controls", "controls")
    new_audio.setAttribute("autoplay", "autoplay")
     
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/mpeg")
    source.setAttribute("id", "reproductorSource")
     
    new_audio.appendChild(source)
    main_audio.appendChild(new_audio)
}
     
function cargarReproductor() {
    var select = document.getElementById("selectTrack")
    var path = select.options[0].getAttribute("path")
     
    new_audio = document.createElement("audio")
    new_audio.setAttribute("id","reproductor")
    new_audio.setAttribute("controls", "controls")      
           
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/mpeg")
    source.setAttribute("id", "reproductorSource")
    
    new_audio.appendChild(source)
    padre = document.getElementById("reproductorBox")
    padre.appendChild(new_audio)
}