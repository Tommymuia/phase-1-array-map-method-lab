const tutorials = [
  'what does the this keyword mean?',
  'what is the constructor oo pattern?',
  'implementing blockchain web api',
  'the test driven development workflow',
  'what is nan and how can we check for it',
  'what is the difference between stoppropagation and preventdefault?',
  'immutable state and pure functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is jsonp?'
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        const lower = word.toLowerCase();
        if (lower === "oo") return "OO";
        if (lower === "api") return "API";
        if (lower === "nan") return "NaN";
        if (lower === "jsonp?") return "JSONP?";

       
        if (lower === "stoppropagation") return "StopPropagation";
        if (lower === "preventdefault?") return "PreventDefault?"; 
        if (lower === "preventdefault") return "PreventDefault";

        
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
}

