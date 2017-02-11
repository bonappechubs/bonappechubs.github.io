var getMotivation = ['"Bravery is the solution to regret." - Robin Sharma', 
				'"Without new experiences, something inside of us sleeps. The sleeper must awaken." - Frank Herbert',
				'"Your world is a living expression of how you are using, and have used your mind." - Earl Nightingale',
				'"If you are always trying to be normal you will never know how amazing you can be." - Maya Angelou',
				'"Failure is success if you learn from it." - Unknown',
				'"Experience is simply the name we give our mistakes." - Oscar Wilde',
				'"It is not the load that breaks you down. It is the way you carry it." - Lou Holtz',
				'"Dream big dreams. Small dreams have no magic." - Dottie Boreyko',
				'"Too many of us are not living our dreams because we are living our fears." - Les Brown',
				'"Everything around you that you call life was made up by people, and you can change it." - Steve Jobs',
				'"Magic is believing in yourself, if you can do that, you can make anything happen." - Wolfgang Von Goethe',
				'"No matter how hard the past, you can always begin again." Buddha',
				'"Forget all the reasons why it will not work and believe the one reason why it will." - Unknown',
				'"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." - Earl Nightingale',
				'"The secret to happiness is freedom. And the secret to freedom is courage." - Thucydides',
				'"Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength." — Arnold Schwarzenegger,',
				'"Strength and growth come only through continuous effort and struggle." — Napoleon Hill'];

var getHappy = ['"Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed." - Unknown',
				'"It is not what you have, or who you are, or where you are, or what you are doing that makes you happy or unhappy. It is what you think about." - Dale Carnegie',
				'"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy." - Thich Nhat Hanh',
				'"Happy people plan actions, they do not plan results." - Dennis Waitley',
				'"The only joy in the world is to begin." - Cesare Pavese',
				'"Happiness is acceptance." - Unknown',
				'If you cannot get someone out of your head, maybe they are supposed to be there.',
				'In French, you do not really say "I miss you", you say "Tu me manques" which means "You are missing from me"'];
  
var getAngry = ['"No matter how hard the past, you can always begin again." Buddha',
				'"Experience is simply the name we give our mistakes." - Oscar Wilde',
				'"Failure is success if you learn from it." - Unknown',
				'"I can accept failure. Everyone fails at something. But I cannot accept not trying." - Michael Jordan',
				'"Doubt kills more dreams than failure ever will." - Suzy Kassem',
				'"Tough times never last, but tough people do." — Robert H. Schuller',
				'"Nothing is more beautiful than the smile that has struggled through the tears." — Demi Lovato',
				'"That which does not kill us makes us stronger." — Friedrich Nietzsche'];

var getPics =['IMG_0030-min.jpg', 'IMG_0244-min.jpg', 'IMG_0383-min.jpg', 'IMG_0438-min.jpg', 
				'IMG_0486-min.jpg', 'IMG_0808-min.jpg', 'IMG_1048-min.jpg', 'IMG_1106-min.jpg',
				'IMG_1257-min.jpg', 'IMG_1360-min.jpg', 'IMG_1401-min.jpg', 'IMG_1422-min.jpg', 
				'IMG_1422-min.jpg', 'IMG_1621-min.jpg', 'IMG_1742-min.jpg', 'IMG_1835-min.jpg',
				'IMG_1895-min.jpg', 'IMG_2092-min.jpg', 'IMG_9013-min.jpg', 'KTAZ5912-min.jpg'];

function pickQuote(){
	if(document.location.pathname.indexOf("unmotivated") > -1){
		var getQuote = getMotivation[Math.floor(Math.random() * 4)];
	}
	if(document.location.pathname.indexOf("stressed") > -1){
		var getQuote = getAngry[Math.floor(Math.random() * 4)];
	}
	if(document.location.pathname.indexOf("missing") > -1){
		var getQuote = getHappy[Math.floor(Math.random() * 4)];
	}
	var getPic = getPics[Math.floor(Math.random() * 4)];
	var div1 = document.getElementById('get-quote');
	div1.innerHTML = getQuote;
	var div2 = "img/nick-pics/" + getPic;
	$('#get-pic').prepend('<img id="" src="'+div2+'" />');
	
};
pickQuote();