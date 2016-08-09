// import { data} from './List';

// var url = 'http://api.itboost.org/app_dev.php/api/community.getAll';

// function getJSON(url, cb){
// 	var xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = function() {
// 	  if (xhr.readyState != 4) return;

// 	  if (xhr.status != 200) {
// 	    alert(xhr.status + ': ' + xhr.statusText);
// 	  } 
// 	  else {
// 			var data = JSON.parse(xhr.responseText);
// 		}
// 		cb(data);  
// 	  }
// 	xhr.open('GET', url, true);
// 	xhr.send();

//  }
// export default data;
// getJSON(url, function(data){
// console.log(data);

// var i;
// for (i=0;i<data.response.length; i++){
// document.getElementById('eventsList').innerHTML += "<ul><li><a href='/#/event'>"+ data.response[i].name +"</a></li></ul>";


// }

// // document.getElementById('eventDescription').innerHTML = data.response[0].description;
// // document.getElementById('eventDate').innerHTML = data.response[0].event_date;

// });

var url = 'http://api.itboost.org/app_dev.php/api/community.getAll';
function callback(data){
JSON.parse(data);

}
console.log(qwert);
var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.open('GET', url, true);
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        callback(xhr.responseText);
    }
}


