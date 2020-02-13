let biography = [
  {
    year: 1915,
    info:
      "Saul Bellow is born Solomon Bellow in Lachine in Quebec Canada. Two years after his parents Lescha and Abraham Bellows emigrated from St Petersburg, Russia"
  },
  {
    year: 1924,
    info:
      "Saul moves together with his family to the Humboldt Park neighborhood in West Side Chicago. The main city in Bellows universe."
  },
  {
    year: 1932,
    info:
      "Bellow's mother dies. Her deeply religious mother wanted him to become a rabbi or a concert pianist. His writing was a rebellious act against his orthodox upbringing."
  },
  {
    year: 1937,
    info:
      "Bellow obtained a bachelor's degree in anthropology. After finished his studies Bellow held various positions as a writer."
  },
  {
    year: 1941,
    info:
      "Bellow gets his first story published. I came out in Partisan Review. Within the following 6 years period, he published his two first novels: 'The Dangling man'(1942) and 'The Victim'(1947). The novels received mixed critic. Bellow had yet to find his unique voice."
  },
  {
    year: 1953,
    info:
      "He publishes 'The Adventures Of Augie March', and with this novel, he receives his first National Book Award."
  },
  {
    year: 1964,
    info:
      "His sixth novel 'Herzog' is published. This novel about a struggling college professor. His masterpiece!"
  },
  {
    year: 1976,
    info:
      "Bellow receives the Nobel prize in literature with the following motivation 'for the human understanding and subtle analysis of contemporary culture that are combined in his work"
  },
  {
    year: 1982,
    info:
      "Bellow's later work does not receive the same appraisal. His energetic tone is now combined with a certain unattractive bitterness. This can be found in 'The Dean's December'(1982) and 'More Die of Heartbreak'(1987)"
  },
  {
    year: 2000,
    info:
      "Bellow's last novel 'Ravelstein' is published. It is a return to the vitality and life force of his best work. The greatest American author is back!"
  },
  { year: 2005, info: "Bellow passes away 89 years old" }
];

const createTimeLineElement = (year, info) => {
  let element = document.createElement("li");

  let yearSpan = document.createElement("span");
  yearSpan.classList.add("yearBio");
  yearSpan.innerText = year;

  let spaceSpan = document.createElement("span");
  spaceSpan.innerText = " - ";

  let infoSpan = document.createElement("span");
  infoSpan.classList.add("infoBio");
  infoSpan.innerText = info;

  element.appendChild(yearSpan);
  element.appendChild(spaceSpan);
  element.appendChild(infoSpan);

  return element;
};

const createTimeline = biography => {
  const root = document.getElementById("timeLineStart");

  let ul = document.createElement("ul");
  biography.forEach(element => {
    let listElement = createTimeLineElement(
      element.year.toString(),
      element.info
    );
    ul.appendChild(listElement);
    element = null;
  });

  root.appendChild(ul);
};

createTimeline(biography);
