x = new Array("images/thumb-image18.jpg","images/thumb-image17.jpg","images/thumb-image16.jpg");
	i=0;
		function next(){
			i++
			if(i == x.length){
				i = 0;
			}
			document.getElementById("slide-gallery").src = x[i];
		}
		function back(){
			if(i ==0){
				i = x.length;
			}
			i--;
			document.geElementById("slide-gallery").src = x[i];
		}

		/*$(".div2-left-inner").click(function(){
			$(".animate1").show("slow");
		});*/

/*	function myMap() {
  var mapOptions1 = {
    center: new google.maps.LatLng(51.508742,-0.120850),
    zoom:9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    var map1 = new google.maps.Map(document.getElementById("googleMap1"),mapOptions1);
    */