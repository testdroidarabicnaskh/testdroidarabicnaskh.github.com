//remote version
javascript:(function()%20%7Bif(typeof%20jQuery=='undefined')%7Bvar%20jqit=document.createElement('script');jqit.type='text/javascript';jqit.src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';document.getElementsByTagName('head')%5B0%5D.appendChild(jqit);%7D%20_my_script=document.createElement('script');_my_script.type='text/javascript';_my_script.src='https://raw.github.com/testroboto/testroboto.github.com/master/font-friend.js';document.getElementsByTagName('head')%5B0%5D.appendChild(_my_script);%7D)();

//local test version
javascript:(function()%20{if(typeof%20jQuery=='undefined'){var%20jqit=document.createElement('script');jqit.type='text/javascript';jqit.src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';document.getElementsByTagName('head')[0].appendChild(jqit);}%20_my_script=document.createElement('script');_my_script.type='text/javascript';_my_script.src='http://localhost/font-friend/font-friend-full.js';document.getElementsByTagName('head')[0].appendChild(_my_script);})();