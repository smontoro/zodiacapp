// array of objects to store zodiac data
var zodiac = [
    {
        sign: "aquarius",
        fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
        image: "img/aquarius.png",
    },
    {
        sign: "aries",
        fortune: "Active, Demanding, Determined, Effective, Ambitious",
        image: "img/aries.png"
    },
    {
        sign: "cancer",
        fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
        image: "img/cancer.png"
    },
    {
        sign: "capricorn",
        fortune: "Determination, Dominance, Perservering, Practical, Willful",
        image: "img/capricorn.png"
    },
    {
        sign: "gemini",
        fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
        image: "img/gemini.png"
    },
    {
        sign: "leo",
        fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
        image: "img/leo.png"
    },
    {
        sign: "libra",
        fortune: "Balance, Justice, Truth, Beauty, Perfection",
        image: "img/libra.png"
    },
    {
        sign: "pisces",
        fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
        image: "img/pisces.png"
    },
    {
        sign: "sagittarius",
        fortune: "Philosophical, Motion, Experimentation, Optimism",
        image: "img/sagittarius.png"
    },
    {
        sign: "scorpio",
        fortune: "Transient, Self-Willed, Purposeful, Unyielding",
        image: "img/scorpio.png"
    },
    {
        sign: "taurus",
        fortune: " Security, Subtle strength, Appreciation, Instruction, Patience",
        image: "img/taurus.png"
    },
    {
        sign: "virgo",
        fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
        image: "img/virgo.png"
    }
];


function findSign() {
	var userInput = document.getElementById("userInput").value;
	for (i=0; i<zodiac.length; i++){
		if (userInput === zodiac[i].sign) {
			document.getElementById("zodiacName").textContent = zodiac[i].sign
			document.getElementById("zodiacImage").src = zodiac[i].image
			document.getElementById("zodiacAttributes").textContent = zodiac[i].fortune
			return
		}
	}
document.getElementById("zodiacName").textContent = "not a sign, try again"

}










