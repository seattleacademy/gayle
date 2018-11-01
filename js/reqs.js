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
      if (cohort == "2022" || cohort == "2021" || cohort == "2020" || cohort == "2019") {
          reqs.push(makeReq("English", 12));
          reqs.push(makeReq("Math", 9, 12));
          reqs.push(makeReq("Science", 9, 12));
          reqs.push(makeReq("World Languages", 9, 12));
          reqs.push(makeReq("Dance", 1));
          reqs.push(makeReq("Music", 1));
          reqs.push(makeReq("Visual", 1));
          reqs.push(makeReq("Theater", 1));
      }
      if (cohort == "2022" || cohort == "2021") {
          reqs.push(makeReq("History", 9, 12));
          reqs.push(makeReq("P.E.", 4));
          reqs.push(makeReq("CompThinking/AI", 2));
          reqs.push(makeReq("Innovations", 2));
          reqs.push(makeReq("Entrepreneurship/FL", 2));
          reqs.push(makeReq("Health", 2));
      }
      if (cohort == "2022") {
          reqs.push(makeReq("Rhetoric", 1));
      }
      if (cohort == "2020" || cohort == "2019") {
          reqs.push(makeReq("P.E.", 6));
      }

      if (cohort == "Seattle Public") {
          reqs.push(makeReq("English", 12));
          reqs.push(makeReq("History", 9, 12));
          reqs.push(makeReq("Math", 9, 12));
          reqs.push(makeReq("Science", 9, 12));
          reqs.push(makeReq("World Languages", 6, 12));
          reqs.push(makeReq("Career and Tech Ed", 3));
          // Health and PE reqs.push(makeReq("P.E.", 6));
          // Total Arts 6 reqs.push(makeReq("Arts", 6));
          // 72 total
      }
      if (cohort == "Lakeside School") {
          reqs.push(makeReq("English", 12));
          reqs.push(makeReq("History", 9));
          reqs.push(makeReq("Math", 9));
          reqs.push(makeReq("Science", 9));
          //reqs.push(makeReq("P.E.", 6));
          //reqs.push(makeReq("Arts", 6));
          reqs.push(makeReq("Outdoor Education", 1));
          reqs.push(makeReq("World Languages", 9));
      }
      if (cohort == "Northwest School") {
          reqs.push(makeReq("English", 12));
          reqs.push(makeReq("History", 12));
          reqs.push(makeReq("Math", 9));
          reqs.push(makeReq("Science", 9));
          //reqs.push(makeReq("P.E.", 6));
          //reqs.push(makeReq("Arts", 12));
          reqs.push(makeReq("World Languages", 9));
      }
  }

  setRequirements("2022");

  function accumList(cohort, myCourses = []) {
      accumreqs = [];

      if (cohort == "2022" || cohort == "2021" || cohort == "2020" || cohort == "2019") {
          var totalMathScience = {};
          totalMathScience.name = "Math+Science";
          totalMathScience.count = 21;
          totalMathScience.earned = 0;
          totalMathScience.recommended = 24;
          for (var i = 0; i < myCourses.length; i++) {
              if (myCourses[i].req == "Math" || myCourses[i].req == "Science") {
                  totalMathScience.earned++;
              }
          }
          accumreqs.push(totalMathScience);
      }


      var totalArt = {};
      totalArt.name = "Total Art";
      if (cohort == "2020" || cohort == "2019") totalArt.count = 9;
        
      if (cohort == "2021" || cohort == "2022") totalArt.count = 7;
      if (cohort == "Seattle Public") totalArt.count = 6;
      if (cohort == "Northwest School") totalArt.count = 12;
      if (cohort == "Lakeside School") totalArt.count = 6;
      totalArt.recommended = totalArt.count;
      totalArt.earned = 0;
      for (var i = 0; i < myCourses.length; i++) {
          if (myCourses[i].req == "Dance" || myCourses[i].req == "Music" || myCourses[i].req == "Visual" || myCourses[i].req == "Theater") {
              totalArt.earned++;
          }
      }
      accumreqs.push(totalArt);

      if (cohort == "Seattle Public" || cohort == "Lakeside") {
          var totalPE = {};
          totalPE.name = "PE+Health";
          totalPE.count = 6;
          totalPE.recommended = totalPE.count;
          totalPE.earned = 0;
          for (var i = 0; i < myCourses.length; i++) {
              if (myCourses[i].req == "P.E." || myCourses[i].req == "Health") {
                  totalPE.earned++;
              }
          }
          accumreqs.push(totalPE);
      }

      var totalCredits = {};
      totalCredits.name = "Total Credits";
      if (cohort == "2020" || cohort == "2019") {
          totalCredits.count = 76;
      }
      if (cohort == "2021") {
          totalCredits.count = 81;
      }
      if (cohort == "2022") {
          totalCredits.count = 84;
      }
      if (cohort == "Seattle Public") {
          totalCredits.count = 72;
      }
      totalCredits.recommended = totalCredits.count;
      totalCredits.earned = 0;
      for (var i = 0; i < myCourses.length; i++) {
          totalCredits.earned++;
      }
      if (totalCredits.count) accumreqs.push(totalCredits)
      return accumreqs;
  }