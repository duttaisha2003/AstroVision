//based on month size 12
const ZodiacSigns = [
  "Capricorn","Aquarius", "Pisces","Aries", "Taurus", "Gemini","Cancer","Leo",
  "Virgo","Libra", "Scorpio","Sagittarius"
];
//based on date     size 31
const compliments = [
  "You have a brilliant mind!",
  "Your smile lights up the room.",
  "You're a fantastic problem solver.",
  "Your creativity is inspiring.",
  "You bring out the best in others.",
  "You're incredibly thoughtful.",
  "You have a great sense of humor.",
  "You're strong and courageous.",
  "Your positive energy is contagious.",
  "You're a true leader.",
  "You're wonderfully unique.",
  "You have a kind heart.",
  "You radiate confidence.",
  "You're an excellent listener.",
  "You're a natural at what you do.",
  "You make people feel valued.",
  "You're always full of good ideas.",
  "You're truly dependable.",
  "You're amazing just the way you are.",
  "You're a quick learner.",
  "You handle challenges like a pro.",
  "You're very observant and insightful.",
  "You make hard work look easy.",
  "You're genuinely uplifting to be around.",
  "You're graceful under pressure.",
  "You're impressively resourceful.",
  "You have a magnetic personality.",
  "You're always so supportive.",
  "You're admired more than you know.",
  "You're a joy to work with.",
  "You're making a difference every day."
];
//size 20
const victimCardCompliments = [
  "You always give your best, even when no one notices.",
  "You're the one who stays kind, even when others aren't.",
  "You forgive so easily, even when people don’t deserve it.",
  "You care too much, and they take it for granted.",
  "You help everyone, but who's helping you?",
  "You're always there for others, even when you're breaking inside.",
  "You're too loyal in a world that doesn’t value loyalty.",
  "You never complain, even when you’re hurting.",
  "You support others' dreams, while they ignore yours.",
  "You stay strong for everyone, and no one sees your struggle.",
  "You always understand people, but no one understands you.",
  "You give without expecting anything back, but still get disappointed.",
  "You're constantly overlooked, despite doing so much.",
  "You shine in silence while others take the spotlight.",
  "You love deeply, even when you're not loved the same.",
  "You sacrifice your comfort so others can smile.",
  "You're genuine in a world full of fake people.",
  "You’re patient beyond limits, and still misjudged.",
  "You show up when no one else does, but it's rarely appreciated.",
  "You keep being good, even when goodness goes unnoticed."
];
//size 30
const lifeRecommendations = [
  "Feed a street dog today.",
  "Call your parents just to say you love them.",
  "Start your day with gratitude.",
  "Compliment a stranger sincerely.",
  "Plant a tree in your neighborhood.",
  "Teach a skill to someone for free.",
  "Help someone cross the road.",
  "Donate unused clothes to those in need.",
  "Pick up litter even if it's not yours.",
  "Support a small local business.",
  "Smile at people without a reason.",
  "Volunteer at an animal shelter.",
  "Leave a kind note for someone.",
  "Share your food with someone hungry.",
  "Check on an old friend.",
  "Say 'thank you' more often.",
  "Spend 10 minutes meditating every day.",
  "Practice forgiveness — even in silence.",
  "Gift books instead of stuff.",
  "Switch off lights you’re not using.",
  "Walk barefoot on grass in the morning.",
  "Donate blood if you're eligible.",
  "Spend a day without complaining.",
  "Sponsor a child’s education, even partly.",
  "Be kind to service workers.",
  "Give up your seat on public transport.",
  "Send a motivational text to someone.",
  "Recycle something today.",
  "Pray for someone who hurt you.",
  "Give time instead of gifts."
];

//size 20
const futurePredictions = [
  "Your patience will pay off in unexpected ways.",
  "A financial opportunity will knock when you least expect it.",
  "An old skill will bring you new success.",
  "A small risk you take soon will lead to big rewards.",
  "Trust your instincts — they’ll guide your future steps.",
  "A digital investment may surprise you with growth.",
  "Someone from the past will reappear with good news.",
  "You’re about to enter a season of abundance.",
  "Clarity will come once you let go of control.",
  "The thing you feared will turn into your strength.",
  "You’ll soon attract people who align with your true path.",
  "Prosperity flows to those who stay consistent — that’s you.",
  "Your silence today will echo as wisdom tomorrow.",
  "The universe is aligning to shift your reality.",
  "A lucky break is around the corner — stay ready.",
  "You’re closer to the breakthrough than you realize.",
  "Watch for signs in unexpected places — they matter.",
  "A passive income stream may start to grow soon.",
  "You’ll decode a pattern others fail to see.",
  "Your future self will thank you for today’s choices."
];

const form=document.getElementById('astroForm');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const fname=document.getElementById('name').value;
    const sname=document.getElementById('surname').value;
    const dob=document.getElementById('dob').value;
    
    const [yearStr, monthStr, dayStr] = dob.split('-');
    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);

    const result = document.getElementById('result');

    const firstMsg=`Hello ${fname} ${sname}`;

    const secondMsg=`Your Zodiac Sign is ${ZodiacSigns[month-1]}`;
    
    const thirdMsg=compliments[day-1];

    let index=Math.floor(Math.random()*20);
    const fourthMsg=victimCardCompliments[index];

    index= (fname.length*sname.length*year)%30;
    const fifthMsg=lifeRecommendations[index];

    index=(day*month*year)%20;
    const sixthMsg=futurePredictions[index];

    result.innerHTML=`${firstMsg},  ${secondMsg} .  ${thirdMsg} ${fourthMsg} Our Recomandation for you "  ${fifthMsg} " ${sixthMsg} `;


console.log(typeof year);  // "2003"
console.log(month); // "02"
console.log(day);   // "02"
    console.log(result);
})

