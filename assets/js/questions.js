//Array for passing number, questions options and answers to script.js
let questions = [
    {
        question_number: 1,
        the_question: "With which Greek philosopher would you associate the phrase, I know that I know nothing?",
        correct_answer: "Socrates",
        question_options: [
            "Socrates",
            "Aristotle",
            "Plato",
            "Pythagoras"
        ]
    },
    {
        question_number: 2,
        the_question: "When did the French Revolution begin?",
        correct_answer: "1789",
        question_options: [
            "1756",
            "1823",
            "1789",
            "1799"
        ]
    },
    {
        question_number: 3,
        the_question: "Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
        correct_answer: "Battle of Midway",
        question_options: [
            "Attack on Pearl Harbor",
            "Attack on Truk Island",
            "Battle of Midway",
            "Battle of the Coral Sea"
        ]
    },
    {
        question_number: 4,
        the_question: "Pianist Chopin was a composer of which musical era?",
        correct_answer: "Romantic",
        question_options: [
            "Renaissance",
            "Classic",
            "Baroque",
            "Romantic"
        ]
    },
    {
        question_number: 5,
        the_question: "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
        correct_answer: "John and Mary",
        question_options: [
            "Joseph and Catherine",
            "John and Mary",
            "William and Elizabeth",
            "George and Anne"
        ]
    },
    {
        question_number: 6,
        the_question: "Spain was formed in 1469 with the marriage of Isabella I of Castile and Ferdinand II of what other Iberian kingdom?",
        correct_answer: "Aragon",
        question_options: [
            "Aragon",
            "Galicia",
            "Leon",
            "Navarre"
        ]
    },
    {
        question_number: 7,
        the_question: "What was the name of the spy ring that helped the United States win the Revolutionary War?",
        correct_answer: "Culper Ring",
        question_options: [
            "Unnamed",
            "New York Spy Ring",
            "Washington's Spies",
            "Culper Ring"
        ]
    },
    {
        question_number: 8,
        the_question: "When did Spanish Peninsular War start?",
        correct_answer: "1808",
        question_options: [
            "1806",
            "1810",
            "1809",
            "1808"
        ]
    },
    {
        question_number: 9,
        the_question: "What year was Canada founded in?",
        correct_answer: "1867",
        question_options: [
            "1798",
            "1859",
            "1867",
            "1668"
        ]
    },
    {
        question_number: 10,
        the_question: "List the following Iranic empires in chronological order:",
        correct_answer: "Median, Achaemenid, Parthian, Sassanid",
        question_options: [
            "Median, Achaemenid, Sassanid, Parthian",
            "Achaemenid, Median, Parthian, Sassanid",
            "Achaemenid, Median, Sassanid, Parthian",
            "Median, Achaemenid, Parthian, Sassanid"
        ]
    },
    {
        question_number: 11,
        the_question: "On which day did ARPANET suffer a 4 hour long network crash?",
        correct_answer: "October 27, 1980",
        question_options: [
            "November 21, 1969",
            "October 27, 1980",
            "October 29, 1969",
            "December 9, 1991"
        ]
    },
    {
        question_number: 12,
        the_question: "When did Canada leave the confederation to become their own nation?",
        correct_answer: "March 29th, 1982",
        question_options: [
            "July 1st, 1763",
            "March 29th, 1982",
            "August 31st, 1832",
            "November 2nd, 1902"
        ]
    },
    {
        question_number: 13,
        the_question: "When was the SS or Schutzstaffel established?",
        correct_answer: "April 4th, 1925",
        question_options: [
            "February 21st, 1926",
            "September 1st, 1941",
            "March 8th, 1935",
            "April 4th, 1925"
        ]
    },
    {
        question_number: 14,
        the_question: "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed the Kingmaker?",
        correct_answer: "Richard Neville",
        question_options: [
            "Richard Neville",
            "Richard III",
            "Henry V",
            "Thomas Warwick"
        ]
    },
    {
        question_number: 15,
        the_question: "When was Adolf Hitler appointed as Chancellor of Germany?",
        correct_answer: "January 30, 1933",
        question_options: [
            "January 30, 1933",
            "September 1, 1939",
            "February 27, 1933",
            "October 6, 1939"
        ]
    },
    {
        question_number: 16,
        the_question: "How many sonatas did Ludwig van Beethoven write?",
        correct_answer: "32",
        question_options: [
            "50",
            "31",
            "32",
            "21"
        ]
    },
    {
        question_number: 17,
        the_question: "During the Roman Triumvirate of 42 BCE, what region of the Roman Republic was given to Lepidus?",
        correct_answer: "Hispania",
        question_options: [
            "Italia",
            "Hispania",
            "Gallia",
            "Asia"
        ]
    },
    {
        question_number: 18,
        the_question: "The Second Boer War in 1899 was fought where?",
        correct_answer: "South Africa",
        question_options: [
            "Argentina",
            "Nepal",
            "Bulgaria",
            "South Africa"
        ]
    },
    {
        question_number: 19,
        the_question: "In which year did the Tokyo Subway Sarin Attack occur?",
        correct_answer: "1995",
        question_options: [
            "2001",
            "2011",
            "1995",
            "1991"
        ]
    },
    {
        question_number: 20,
        the_question: "What was the real name of the Albanian national leader Skanderbeg?",
        correct_answer: "Gjergj Kastrioti",
        question_options: [
            "Gjergj Kastrioti",
            "Diturak Zhulati",
            "Iskander Bejko",
            "Mirash Krasniki"
        ]
    },
    {
        question_number: 21,
        the_question: "What year was the United States Declaration of Independence signed?",
        correct_answer: "1776",
        question_options: [
            "1775",
            "1774",
            "1776",
            "1777"
        ]
    },
    {
        question_number: 22,
        the_question: "When did Lithuania declare independence from the Soviet Union?",
        correct_answer: "March 11th, 1990",
        question_options: [
            "December 5th, 1991",
            "April 20th, 1989",
            "March 11th, 1990",
            "December 25th, 1991"
        ]
    },
    {
        question_number: 23,
        the_question: "The Hagia Sophia was commissioned by which emperor of the Byzantine Empire",
        correct_answer: "Justinian I",
        question_options: [
            "Justinian I",
            "Arcadius",
            "Constantine IV",
            "Theodosius the Great"
        ]
    },
    {
        question_number: 24,
        the_question: "What was Napoleon Bonaparte's name before he changed it?",
        correct_answer: "Napoleone di Buonaparte",
        question_options: [
            "Napoleatildeo do Boaparte",
            "Naapolion van Bonijpaart",
            "Napoleona de Buenoparte",
            "Napoleone di Buonaparte"
        ]
    },
    {
        question_number: 25,
        the_question: "During the Spanish Civil War (1936), Francisco Franco fought for which political faction?",
        correct_answer: "Nationalist Spain",
        question_options: [
            "Republican Spain",
            "Popular Front",
            "Nationalist Spain",
            "State"
        ]
    },
    {
        question_number: 26,
        the_question: "What was found in 1946 by two young shepards near a cave?",
        correct_answer: "Dead Sea Scrolls",
        question_options: [
            "The Blackbeard Chest",
            "Sheep",
            "Dead Sea Scrolls",
            "The First Oaxaca Cave Sleeper"
        ]
    },
    {
        question_number: 27,
        the_question: "The Battle of Hastings was fought in which year?",
        correct_answer: "1066",
        question_options: [
            "911",
            "1204",
            "1066",
            "1420"
        ]
    },
    {
        question_number: 28,
        the_question: "When was the city of Rome, Italy founded?",
        correct_answer: "753 BCE",
        question_options: [
            "902 BCE",
            "697 BCE",
            "524 BCE",
            "753 BCE"
        ]
    },
    {
        question_number: 29,
        the_question: "How many women joined the United States Armed Services during World War II?",
        correct_answer: "350,000",
        question_options: [
            "225,000",
            "100,000",
            "350,000",
            "500,000"
        ]
    },
    {
        question_number: 30,
        the_question: "What was the code name for the Allied invasion of Southern France on August 15th, 1944?",
        correct_answer: "Operation Dragoon",
        question_options: [
            "Operation Dragoon",
            "Operation Overlord",
            "Operation Torch",
            "Operation Market Garden"
        ]
    },
];