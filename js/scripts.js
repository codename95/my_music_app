console.log(window.navigator);
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/service-worker.js', {scope: "/"})
  .then(function(registration){
    console.log('Register Success:', registration);
  })
  .catch(function(error){
    console.log('Register Failed', error);
  });
}
else{
  console.log('Service workers are not supported');
}



const form = document.getElementById('app_form');
const title = document.getElementById('txt_title');
const artist = document.getElementById('txt_artist');
const errorElement = document.getElementById('error');
var tracks = document.getElementById('tracks');


  // LOAD SAMPLE DATA FROM ARRAY
var defaultData = [];

defaultData.push(
  {
    title: 'Falling into you.', artist: 'Celine Dion'
  },
  {
    title: 'Crazy', artist: 'Aerosmith'
  }
);


for(let i = 0; i <defaultData.length; i++){
  
  var newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'list_track');
  
      var track_title = document.createElement('p');
      track_title.setAttribute('class', 'track_title');
  
      var artist_name = document.createElement('span');
      artist_name.setAttribute('class', 'artist_name');
  
      track_title.appendChild(document.createTextNode(defaultData[i].title));
      artist_name.appendChild(document.createTextNode(defaultData[i].artist))
  
      newDiv.appendChild(track_title);
      newDiv.appendChild(artist_name);
  
      tracks.appendChild(newDiv); 

}

//SAVE DATA WHEN FORM IS CLICKED AND VALIDATION
function saveData(){

    let messages = [];
    if(title.value === '' || title.value == null){
      messages.push('Title is required to proceed.')
    }

    if(artist.value === '' || artist.value == null){
      messages.push('Artist name is required.')
    }

    if(messages.length > 0){
      errorElement.style.visibility = 'visible';
      errorElement.innerText = messages.join(', ');
    }
    else
    {
      errorElement.style.visibility = 'hidden';

      var newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'list_track');
  
      var track_title = document.createElement('p');
      track_title.setAttribute('class', 'track_title');
  
      var artist_name = document.createElement('span');
      artist_name.setAttribute('class', 'artist_name');
  
      track_title.appendChild(document.createTextNode(title.value));
      artist_name.appendChild(document.createTextNode(artist.value))
  
      newDiv.appendChild(track_title);
      newDiv.appendChild(artist_name);
  
      tracks.appendChild(newDiv); 
    } 
  };