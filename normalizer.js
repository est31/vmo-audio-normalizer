console.log("Normalizer loaded for page ", window.location.href);

window.addEventListener("load", function () {
	//console.log("checking for audio items");
	const list = document.getElementsByTagName("audio");
	for (item of list) {
		console.log("muting content item", item);
		item.muted = true;
		item.addEventListener("play", function () {
			console.log("Playing");
		});
		item.addEventListener("pause", function () {
			console.log("Paused");
		});
		/*item.addEventListener("ended", function () {
			console.log("Ended");
		});*/
	}
});
