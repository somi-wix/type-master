const words: Record<string, string[]> = {
	"easy": [
		"cat", "dog", "sun", "run", "jump", "blue", "tree", "book",
		"home", "star", "fish", "bird", "milk", "rain", "fire", "moon",
		"play", "song", "rock", "leaf", "code", "type", "fast", "slow",
		"good", "kind", "warm", "cold", "open", "shut"
	],
	"medium": [
		"window", "garden", "rocket", "planet", "silver", "purple",
		"forest", "guitar", "pencil", "monkey", "bottle", "summer",
		"winter", "morning", "evening", "thunder", "lantern", "journey",
		"keyboard", "compiler", "function", "variable", "language",
		"dolphin", "elephant", "library", "champion", "pyramid",
		"freedom", "horizon"
	],
	"hard": [
		"asynchronous", "algorithm", "encyclopedia", "quintessential",
		"juxtaposition", "perpendicular", "kaleidoscope", "onomatopoeia",
		"serendipity", "mellifluous", "benevolent", "cumbersome",
		"ephemeral", "labyrinthine", "metamorphosis", "paradoxical",
		"surreptitious", "ubiquitous", "vicissitude", "xylophone",
		"bureaucracy", "conscientious", "disestablishment", "extemporaneous",
		"incomprehensible", "magnanimous", "phenomenon", "pseudonym",
		"reconnaissance", "transcendental"
	]
}

function randomWord(difficulty: string) {
	let wordList = words[difficulty];
	return wordList[Math.floor(Math.random() * wordList.length)];
}

export {randomWord};