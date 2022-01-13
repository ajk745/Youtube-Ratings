const SELECTOR_LIKE = "#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1) > a > #text";
const SELECTOR_DISLIKE = "#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2) > a > #text";
const LOOP_INTERVAL = 2000

let videoID;
let likeCount, dislikeCount;

var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
var match = document.URL.match(regExp);
if (match && match[2].length == 11) videoID = match[2];

console.log("GOT ID " + videoID)

let parseInterval = setInterval(() => {
	let likeElement = document.querySelector(SELECTOR_LIKE);
	let dislikeElement = document.querySelector(SELECTOR_DISLIKE);

	if(likeElement && dislikeElement){
		console.log(likeElement, dislikeElement);

		let likeLabel = likeElement.getAttribute('aria-label');
		let likeRes = likeLabel.match(/[\d,]+/);
  	likeCount = likeRes ? parseInt(likeRes[0].replace(/,/g, ''), 10) : null;
		
		if(likeCount) likeElement.innerHTML = likeCount;
		dislikeElement.innerHTML = "DISLIKE_MATCH"
	}
}, LOOP_INTERVAL);



