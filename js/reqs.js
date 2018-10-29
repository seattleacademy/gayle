  var reqs = [];
  // list of accumulated credits, like total Arts
  var accumreqs = [];

  function makeReq(name, count, recommended) {
      var req = {};
      req.name = name;
      req.count = count;
      if (recommended) {
          req.recommended = recommended;
      } else {
          req.recommended = count;
      }
      return req;
  }

  function setRequirements(cohort) {
      reqs = [];
      if (cohort == "2022") {
          reqs.push(makeReq("English", 12));
          reqs.push(makeReq("History", 9, 12));
          reqs.push(makeReq("Math", 9, 12));
          reqs.push(makeReq("Science", 9, 12));
          reqs.push(makeReq("World Languages", 9, 12));
          reqs.push(makeReq("CompThinking/AI", 2));
          reqs.push(makeReq("Innovations", 2));
          reqs.push(makeReq("Entrepreneurship/FL", 2));
          reqs.push(makeReq("Health", 2));
          reqs.push(makeReq("P.E.", 4));
          reqs.push(makeReq("Dance", 1));
          reqs.push(makeReq("Music", 1));
          reqs.push(makeReq("Visual", 1));
          reqs.push(makeReq("Theater", 1));
      }

  }

  setRequirements("2022");

  function accumList(cohort,myCourses=[]) {
      accumreqs = [];
      if (cohort == "2022") {
          var totalMathScience = {};
          var count = 5;
          totalMathScience.name = "Math+Science";
          totalMathScience.count = 21;
          totalMathScience.earned = 0;
          totalMathScience.recommended = 24;
          for(var i=0; i< myCourses.length; i++){
            if(myCourses[i].req == "Math" || myCourses[i].req == "Science"){
              totalMathScience.earned++;
            }
          }
      }
      accumreqs.push(totalMathScience)
      return accumreqs;
  }