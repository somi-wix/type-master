const words: Record<string, { duration: number, list: string[] }> = {
	"easy": {
		duration: 10,
		list: [
			"cat", "dog", "sun", "run", "jump", "blue", "tree", "book",
			"home", "star", "fish", "bird", "milk", "rain", "fire", "moon",
			"play", "song", "rock", "leaf", "code", "type", "fast", "slow",
			"good", "kind", "warm", "cold", "open", "shut"
		]
	},
	"medium": {
		duration: 15,
		list: [
			"window", "garden", "rocket", "planet", "silver", "purple",
			"forest", "guitar", "pencil", "monkey", "bottle", "summer",
			"winter", "morning", "evening", "thunder", "lantern", "journey",
			"keyboard", "compiler", "function", "variable", "language",
			"dolphin", "elephant", "library", "champion", "pyramid",
			"freedom", "horizon"
		]
	},
	"hard": {
		duration: 20,
		list: [
			"asynchronous", "algorithm", "encyclopedia", "quintessential",
			"juxtaposition", "perpendicular", "kaleidoscope", "onomatopoeia",
			"serendipity", "mellifluous", "benevolent", "cumbersome",
			"ephemeral", "labyrinthine", "metamorphosis", "paradoxical",
			"surreptitious", "ubiquitous", "vicissitude", "xylophone",
			"bureaucracy", "conscientious", "disestablishment", "extemporaneous",
			"incomprehensible", "magnanimous", "phenomenon", "pseudonym",
			"reconnaissance", "transcendental"
		]
	},
	"very_hard": {
		duration: 25,
		list: [
			"idiosyncratic", "perspicacious", "obstreperous", "cantankerous",
			"persnickety", "preposterous", "rambunctious", "sycophantic",
			"recalcitrant", "obsequious", "pernicious", "pertinacious",
			"vociferous", "sanctimonious", "perfunctory", "loquacious",
			"obfuscation", "circumlocution", "antediluvian", "soliloquy",
			"penultimate", "quizzical", "rhetorical", "salubrious",
			"taciturn", "ubiquity", "vehement", "winsome",
			"xenophobia", "zealotry"
		]
	},
	"insane": {
		duration: 30,
		list: [
			"antidisestablishmentarianism", "floccinaucinihilipilification",
			"pneumonoultramicroscopicsilicovolcanoconiosis", "supercalifragilisticexpialidocious",
			"hippopotomonstrosesquippedaliophobia", "pseudopseudohypoparathyroidism",
			"thyroparathyroidectomized", "dichlorodifluoromethane",
			"incomprehensibilities", "honorificabilitudinitatibus",
			"electroencephalographically", "psychophysicotherapeutics",
			"radioimmunoelectrophoresis", "spectrophotofluorometrically",
			"pneumoencephalography", "subdermatoglyphic",
			"uncopyrightable", "dermatoglyphics",
			"otorhinolaryngological", "hepaticocholangiogastrostomy",
			"counterrevolutionaries", "deinstitutionalization",
			"interdenominationalism", "tetraiodophenolphthalein",
			"pharmacopsychometrically", "ethylenediaminetetraacetate",
			"phosphatidylethanolamine", "transubstantiationalist",
			"microspectrophotometrically", "immunoelectrophoretically"
		]
	}
}

function randomWord(difficulty: string) {
	const wordList = words[difficulty].list;
	return wordList[Math.floor(Math.random() * wordList.length)];
}

function durationFor(difficulty: string) {
	return words[difficulty].duration;
}

export {randomWord, durationFor};
