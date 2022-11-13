//Array for passing number, questions options and answers

//variables
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
            "1789",
            "1823",
            "1756",
            "1799"
        ]
    },
    {
        question_number: 3,
        the_question: "Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
        correct_answer: "Battle of Midway",
        question_options: [
            "Battle of Midway",
            "Attack on Truk Island",
            "Attack on Pearl Harbor",
            "Battle of the Coral Sea"
        ]
    },
    {
        question_number: 4,
        the_question: "Pianist Chopin was a composer of which musical era?",
        correct_answer: "Romantic",
        question_options: [
            "Romantic",
            "Classic",
            "Baroque",
            "Renaissance"
        ]
    },
    {
        question_number: 5,
        the_question: "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
        correct_answer: "John and Mary",
        question_options: [
            "John and Mary",
            "Joseph and Catherine",
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
            "Culper Ring",
            "New York Spy Ring",
            "Washington's Spies",
            "Unnamed"
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
        correct_answer: "1808",
        question_options: [
            "July 1st, 1763",
            "July 1st, 1867",
            "July 1st, 1832",
            "July 1st, 1902"
        ]
    },
    {
        question_number: 13,
        the_question: "When was the SS or Schutzstaffel established?",
        correct_answer: "1808",
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
        question_number: 22,
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
        question_number: 23,
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
        question_number: 24,
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
        question_number: 25,
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
        question_number: 26,
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
        question_number: 27,
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
        question_number: 28,
        the_question: "The Battle of Hastings was fought in which year?",
        correct_answer: "Napoleone di Buonaparte",
        question_options: [
            "911",
            "1204",
            "1066",
            "1420"
        ]
    },
    {
        question_number: 29,
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
        question_number: 30,
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
        question_number: 31,
        the_question: "What was the code name for the Allied invasion of Southern France on August 15th, 1944?",
        correct_answer: "Operation Dragoon",
        question_options: [
            "Operation Dragoon",
            "Operation Overlord",
            "Operation Torch",
            "Operation Market Garden"
        ]
    },
    {
        question_number: 32,
        the_question: "How long did the Warsaw Uprising during World War II last?",
        correct_answer: "63 Days",
        question_options: [
            "20 Days",
            "55 Days",
            "63 Days",
            "224 Days"
        ]
    },
    {
        question_number: 33,
        the_question: "What was the name of the German offensive operation in October 1941 to take Moscow before winter?",
        correct_answer: "Operation Typhoon",
        question_options: [
            "Operation Sunflower",
            "Case Blue",
            "Operation Barbarossa",
            "Operation Typhoon"
        ]
    },
    {
        question_number: 34,
        the_question: "The main objective of the German operation Case Blue during World War II was originally to capture what?",
        correct_answer: "Caucasus",
        question_options: [
            "Stalingrad",
            "Voronezh",
            "Caucasus",
            "Crimea"
        ]
    },
    {
        question_number: 35,
        the_question: "Which of the following was not one of Joseph Stalin's ten blows during World War II?",
        correct_answer: "Vistula-Oder Offensive",
        question_options: [
            "Leningrad-Novgorod Offensive",
            "Case Blue",
            "Operation Barbarossa",
            "Crimean Offensive"
        ]
    },
    {
        question_number: 36,
        the_question: "What did the abbreviation RMS stand for in the RMS Titanic in 1912?",
        correct_answer: "Royal Mail Ship",
        question_options: [
            "Royal Majesty Service",
            "Regular Maritime Schedule",
            "Regulated Maelstrom Sensor",
            "Royal Mail Ship"
        ]
    },
    {
        question_number: 37,
        the_question: "Toussaint Louverture led a successful slave revolt in which country?",
        correct_answer: "Haiti",
        question_options: [
            "France",
            "Cuba",
            "Haiti",
            "United States"
        ]
    },
    {
        question_number: 38,
        the_question: "Which English king was married to Eleanor of Aquitaine?",
        correct_answer: "Henry II",
        question_options: [
            "Henry II",
            "Richard I",
            "Henry I",
            "Henry V"
        ]
    },
    {
        question_number: 39,
        the_question: "Who was the first man to travel into outer space twice?",
        correct_answer: "Operation Typhoon",
        question_options: [
            "Vladimir Komarov",
            "Charles Conrad",
            "Yuri Gagarin",
            "Gus Grissom"
        ]
    },
    {
        question_number: 40,
        the_question: "Who assassinated President James A. Garfield?",
        correct_answer: "Charles Guiteau",
        question_options: [
            "Sirhan Sirhan",
            "Charles Guiteau",
            "Leon Czolgosz",
            "John Wilkes Booth"
        ]
    },
    {
        question_number: 41,
        the_question: "During World War I, which nation's monarchs were blood related?",
        correct_answer: "England, Germany, Russia",
        question_options: [
            "France, Russia, Germany",
            "Serbia, Russia, Croatia",
            "England, Germany, Russia",
            "Germany, Spain, Austria"
        ]
    },
    {
        question_number: 42,
        the_question: "Which U.S. president was said to have been too honest to lie to his father about chopping down a cherry tree?",
        correct_answer: "George Washington",
        question_options: [
            "Abraham Lincoln",
            "George Washington",
            "Thomas Jefferson",
            "James Monroe"
        ]
    },
    {
        question_number: 43,
        the_question: "The Bohemian Revolt (1618-1620) started after Protestants in Prague did what to their Catholic Lords Regents?",
        correct_answer: "Threw them out of a window",
        question_options: [
            "Insulted their mothers",
            "Locked them in stockades",
            "Hung them",
            "Threw them out of a window"
        ]
    },
    {
        question_number: 44,
        the_question: "After the 1516 Battle of Marj Dabiq, the Ottoman Empire took control of Jerusalem from which sultanate?",
        correct_answer: "Mamluk",
        question_options: [
            "Mamluk",
            "Ummayyad",
            "Ayyubid",
            "Seljuq"
        ]
    },
    {
        question_number: 45,
        the_question: "The coat of arms of the King of Spain contains the arms from the monarchs of Castille, Leon, Aragon and which other former Iberian kingdom?",
        correct_answer: "Navarre",
        question_options: [
            "Galicia",
            "Catalonia",
            "Granada",
            "Navarre"
        ]
    },
    {
        question_number: 46,
        the_question: "Which of the following physicists did NOT work on the Manhattan project?",
        correct_answer: "Murray Gell-Mann",
        question_options: [
            "Richard Feynman",
            "J. Robert Oppenheimer",
            "Murray Gell-Mann",
            "John Von-Neumann"
        ]
    },
    {
        question_number: 47,
        the_question: "Which is the hull NO. of the Fletcher class destroyer Fletcher?",
        correct_answer: "DD-445",
        question_options: [
            "DD-992",
            "DD-445",
            "DD-446",
            "DD-444"
        ]
    },
    {
        question_number: 48,
        the_question: "Which of these theoretical phycisists first predicted the existence of antimatter?",
        correct_answer: "Paul Dirac",
        question_options: [
            "Niels Bohr",
            "Werner Heisenberg",
            "Albert Einstein",
            "Paul Dirac"
        ]
    },
    {
        question_number: 49,
        the_question: "Which of these positions did the astronomer and physicist Isaac Newton not hold?",
        correct_answer: "Surveyor to the City of London",
        question_options: [
            "Surveyor to the City of London",
            "Warden of the Royal Mint",
            "Member of Parliament",
            "Professor of Mathematics"
        ]
    },
    {
        question_number: 50,
        the_question: "What is the name of the Boeing B-29 that dropped the Little Boy atomic bomb on Hiroshima?",
        correct_answer: "Enola Gay",
        question_options: [
            "The Great Artiste",
            "Full House",
            "Enola Gay",
            "Necessary Evil"
        ]
    },
];