const words =[
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting plant and flower"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "taste",
        hint: "The ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "group",
        hint: "A number of objects or person"
    },
]
const wordText =document.querySelector(".word"),
hintText = document.querySelector(".hint"),
timeText = document.querySelector(".time b"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".Check-word"),
inputField = document.querySelector("input");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
           return timeText.innerText = maxTime
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30)
    let randomObj = words [Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
    }
    wordText.innerText = wordArray.join("")
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length)
    // console.log(wordArray, randomObj.word);  
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert ("please enter a word check")
    if(userWord !== correctWord) return alert (`oops! ${userWord} is not a correct word`);
    alert (`Congrats! ${userWord.toUpperCase()} is a correct word`)
    initGame();
}

refreshBtn.addEventListener("click",initGame)
checkBtn.addEventListener("click",checkWord)