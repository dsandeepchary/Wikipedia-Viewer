$(function(){
  $("input").hide();
  $("i").click(function(){
    $("input").show().focus();
    //$("p").hide();
    $(document).keypress(function(e){
   if(e.which == 13) { 
$('html, body').animate({scrollTop: "+=200"}, 1500);
 $("input").blur();
     var query=$("input").val();
     //console.log(query);
     
     if(query != ""){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"+&format=json&callback=?",function(api){
     $("#list").html("");
      $("b").html("Search results for "+query+" :");
      for(var i = 0; i <= api[1].length;  i++)
			{ 
         var html="";
				if(typeof 
           api[1][i] !== "undefined")
				{
     html+='<a target="_blank" href=' +api[3][i]+ '><h4 class="result-head" align="center">' + api[1][i] +'</h4></a><p class="result-desc" align="center">' + api[2][i] + '</p>';
 				}
         $("#list").append(html);
			}
    });
      }
     else{
 alert("Search query shouldn't be empty! Feeling lazy? Checkout random article.");
     }
   }
});

  });
  });
