function index(stopword, classword, sentence) {
  //removes tags
  let tagRemover = /<.*?>/gi;
  //adds OR for regex
  stopword = stopword.replace(/;/gi, "|");

  //word count accumulator
  let tempCount = 0;

  let sentenceCopy;

  //creates a regex for stop words
  let stopRemover = new RegExp(stopword, "gi");

  let countingArr = [
    sentence.match(/<body>.*<\/body>/gi)[0],
    sentence.match(/<abstract>.*<\/abstract>/gi)[0],
    sentence.match(/<title>.*<\/title>/gi)[0]
  ];

  let sentenceCounter = /[^(\s)]{4,}/gi;
  let puncRemover = /(\!|\?|\,){1}/gi;
  let fullStopRemover = /(\.){1}/gi;
  let specPuncRemover = /(\.|\!|\?|\,){2,}/gi;

  for (let i = 0; i < countingArr.length; i++) {
    let a = countingArr[i];
    sentenceCopy = a
      .toLowerCase()
      .replace(specPuncRemover, " ")
      .replace(fullStopRemover, "")
      .replace(puncRemover, "")
      .replace(stopRemover, "")
      .replace(tagRemover, " ");
    countingArr[i] = sentenceCopy;
    let b = sentenceCopy.match(sentenceCounter).length;
    tempCount += b;
  }

  //return tempCount;

  let bodyCopy = sentence.match(/<body>.*<\/body>/gi);
  let abstractCopy = sentence.match(/<abstract>.*<\/abstract>/gi);
  let titleCopy = sentence.match(/<title>.*<\/title>/gi);

  //console.log(bodyCopy)

  /* calculation of keyword density */
  let classwordArr = classword.replace(/;/gi, " ").split(" ");
  //temporary array to store values, so it can be sorted later
  let count = [];
  //create an object to store values (maybe an array to cross check properties)
  let calculatedObj = {};
  for (let i = 0; i < classwordArr.length; i++) {
    let tempAdder = 0;

    //within body
    let tempReg = new RegExp("\\b" + classwordArr[i] + "\\b", "gim");
    let tempCheck = countingArr[0];
    if (tempCheck.match(tempReg) !== null) {
      tempAdder += 1 * tempCheck.match(tempReg).length;
    }

    //within abstract
    tempCheck = countingArr[1];
    if (tempCheck.match(tempReg) !== null) {
      tempAdder += 3 * tempCheck.match(tempReg).length;
    }
    //within title
    tempCheck = countingArr[2];
    if (tempCheck.match(tempReg) !== null) {
      tempAdder += 5 * tempCheck.match(tempReg).length;
    }
    //check if object has a property and if not, combine the word into the array
    if (!calculatedObj.hasOwnProperty(tempAdder)) {
      calculatedObj[tempAdder] = [classwordArr[i]];
      count.push(tempAdder);
      //console.log(tempAdder)
    } else if (calculatedObj.hasOwnProperty(tempAdder)) {
      calculatedObj[tempAdder].push(classwordArr[i]);
    }
  }
  count.sort((a, b) => {
    return b - a;
  });
  //lexicographically sort the arrays in each key-value pair
  for (let prop in calculatedObj) {
    calculatedObj[prop].sort();
  }
  //iterate through count array and take out letters
  let finalArr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < calculatedObj[count[i]].length; j++) {
      let b =
        calculatedObj[count[i]][j] +
        ": " +
        ((count[i] / tempCount) * 100).toFixed(9);
      finalArr.push(b);
    }
  }
  return finalArr;
}

console.log(
  index(
    "being;does;have;haven't;more;should;shouldn't;than;that;these;what",
    "classification;cryptography;diseases;probability;stability",
    "<response><article><title>A Novel Approach to Image Classification, in a Cloud Computing Environment stability.</title><publicationtitle>IEEE Transactions on Cloud Computing</publicationtitle><abstract>Classification of items within PDF documents has always been challenging.  This stability document will discuss a simple classification algorithm for indexing images within a PDF.</abstract></article><body><sec><label>I.</label><p>Should Haven't That is a bunch of text pattern these classification and cyrptography.  These paragraphs are nothing but nonsense.  What is the statbility of your program to find neural nets. Throw in some numbers to see if you get the word count correct this is a classification this in my nd and rd words.  What the heck throw in cryptography.</p><p>I bet diseases you can't find probability twice.  Here it is a again probability.  Just to fool you I added it three times probability.  Does this make any pattern classification? pattern classification! pattern classification.</p><p><fig><label>FIGURE.</label><caption>This is a figure representing convolutional neural nets.</caption></fig></p></sec></body></response>"
  )
);

console.log(
  index(
    "what;when;where;like;that",
    "welcome;ieee;xtreme;ieeextreme;programming",
    "<title>Welcome to IEEEXtreme!</title><keyword>welcome, ieeextreme</keyword><abstract>Welcome!Participants!!!IEEE Xtreme is a global challenge in which teams of IEEE Student members, advised and proctored by an IEEE member, and often supported by an IEEE Student Branch. Compete in a twentyfour hour timespan against each other to solve a set of ...XtremE... programming problems in IEEEXtreme. </abstract> <body>WELCOME. wel.come... Are you ready? Good luck and have fun in xtreme!</body> <other> Mark your calender and don't miss the action. </other>"
  )
);

    