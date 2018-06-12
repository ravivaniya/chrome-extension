var photos=new Array()
var i=0
 
photos[0]='Desert.jpg'
photos[1]='Lighthouse.jpg'
photos[2]='Tulips.jpg'
photos[3]='Koala.jpg'


window.addEventListener('load', slide);

function slide(){
	document.getElementById("image1").src=  photos[i];
	i++;
	if(i== photos.length){
		i=0;
	}
	setTimeout( 'slide()',2000);
}