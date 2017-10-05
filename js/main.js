// array of objects to store zodiac data
var zodiac = [
    {
        sign: "aquarius",
        fortune: "The mad scientist and humanitarian of the horoscope wheel, futuristic Aquarius energy helps us innovate and unite for social justice.",
        image: "img/aquarius.png",
    },
    {
        sign: "aries",
        fortune: "The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, fight for our beliefs and fearlessly put ourselves out there.",
        image: "img/aries.png"
    },
    {
        sign: "cancer",
        fortune: "The natural nurturer of the horoscope wheel, Cancer energy helps us connect with our feelings, plant deep roots and feather our family nests.",
        image: "img/cancer.png"
    },
    {
        sign: "capricorn",
        fortune: "The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals.",
        image: "img/capricorn.png"
    },
    {
        sign: "gemini",
        fortune: "The most versatile and vibrant horoscope sign, Gemini energy helps us communicate, collaborate and fly our freak flags at full mast.",
        image: "img/gemini.png"
    },
    {
        sign: "leo",
        fortune: "The drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, express ourselves boldly and wear our hearts on our sleeves.",
        image: "img/leo.png"
    },
    {
        sign: "libra",
        fortune: "The balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, harmony and cooperation—and to do it with style and grace.",
        image: "img/libra.png"
    },
    {
        sign: "pisces",
        fortune: "The dreamer and healer of the horoscope family, Pisces energy awakens compassion, imagination and artistry, uniting us as one.",
        image: "img/pisces.png"
    },
    {
        sign: "sagittarius",
        fortune: "The worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big, chase the impossible and take fearless risks.",
        image: "img/sagittarius.png"
    },
    {
        sign: "scorpio",
        fortune: "The most intense and focused of the horoscope signs, Scorpio energy helps us dive deep, merge our superpowers and form bonds that are built to last.",
        image: "img/scorpio.png"
    },
    {
        sign: "taurus",
        fortune: "The persistent provider of the horoscope family, Taurus energy helps us seek security, enjoy earthly pleasures and get the job done.",
        image: "img/taurus.png"
    },
    {
        sign: "virgo",
        fortune: "The masterful helper of the horoscope wheel, Virgo energy teaches us to serve, do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet.",
        image: "img/virgo.png"
    }
];


function findSign() {
	var userInput = document.getElementById("userInput").value;
    //loop through zodiac array one item at a time
	for (i=0; i<zodiac.length; i++){
        //if the value the user typed in is equal to one of our signs, then we do something
		if (userInput.toLowerCase() === zodiac[i].sign) {
			document.getElementById("zodiacName").textContent = zodiac[i].sign
			document.getElementById("zodiacImage").src = zodiac[i].image
			document.getElementById("zodiacAttributes").textContent = zodiac[i].fortune
		    return
		}
	}
document.getElementById("zodiacName").textContent = "Oops, that's not a sign! Try again."
document.getElementById("yourHoroscope").textContent = "";
document.getElementById("icon").

}










