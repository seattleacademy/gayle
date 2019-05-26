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
      if (cohort == "2023" || cohort == "2022" || cohort == "2021") {
          reqs.push(makeReq("CT", 2));
          reqs.push(makeReq("EF", 2));
          reqs.push(makeReq("IN", 2));
          reqs.push(makeReq("HE", 2));
      }
      if (cohort == "2023" || cohort == "2022") {
          reqs.push(makeReq("RE", 1));
      }
      if (cohort == "2023" || cohort == "2022" || cohort == "2021") {
          reqs.push(makeReq("PE", 4));
      }
      if (cohort == "2020" || cohort == "2019") {
          reqs.push(makeReq("PE", 6));
      }
      if (cohort == "2023" || cohort == "2022" || cohort == "2021" || cohort == "2020" || cohort == "2019") {
          reqs.push(makeReq("AD", 1));
          reqs.push(makeReq("AM", 1));
          reqs.push(makeReq("AP", 1));
          reqs.push(makeReq("AV", 1));
          reqs.push(makeReq("EN", 12));
          reqs.push(makeReq("HI", 9, 12));
          reqs.push(makeReq("MA", 9, 12));
          reqs.push(makeReq("SC", 9, 12));
          reqs.push(makeReq("FL", 9, 12));
      }
      $("#cohort").val(cohort);
  }

  function accumList(cohort, myCourses = []) {
      accumreqs = [];

      if (cohort == "2023" || cohort == "2022" || cohort == "2021" || cohort == "2020" || cohort == "2019") {
          var totalMathScience = {};
          totalMathScience.name = "Math+Science";
          totalMathScience.count = 21;
          totalMathScience.earned = 0;
          totalMathScience.recommended = 24;
          for (var i = 0; i < myCourses.length; i++) {
              if (myCourses[i].req == "MA" || myCourses[i].req == "SC") {
                  totalMathScience.earned++;
              }
          }
          accumreqs.push(totalMathScience);
      }


      var totalArt = {};
      totalArt.name = "Total Art";
      if (cohort == "2020" || cohort == "2019") totalArt.count = 9;

      if (cohort == "2023" || cohort == "2022" || cohort == "2021") totalArt.count = 7;
      totalArt.recommended = totalArt.count;
      totalArt.earned = 0;
      for (var i = 0; i < myCourses.length; i++) {
          if (myCourses[i].req == "AD" || myCourses[i].req == "AM" || myCourses[i].req == "AV" || myCourses[i].req == "AP") {
              totalArt.earned++;
          }
      }
      accumreqs.push(totalArt);

      var totalCredits = {};
      totalCredits.name = "Total Credits";
      if (cohort == "2020" || cohort == "2019") {
          totalCredits.count = 76;
      }
      if (cohort == "2021") {
          totalCredits.count = 81;
      }
      if (cohort == "2023" || cohort == "2022") {
          totalCredits.count = 84;
      }

      totalCredits.recommended = totalCredits.count;
      totalCredits.earned = 0;
      for (var i = 0; i < myCourses.length; i++) {
          totalCredits.earned++;
      }
      if (totalCredits.count) accumreqs.push(totalCredits)
      return accumreqs;
  }