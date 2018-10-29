  var reqs = [];

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
      if (cohort == "2022") {
          reqs = [];
          reqs.push(makeReq("English", 12));
          reqs.push(makeReq("History", 9,12));
          reqs.push(makeReq("Math", 9,12));
          reqs.push(makeReq("Science", 9,12));
          reqs.push(makeReq("World Languages", 9,12));
          reqs.push(makeReq("CompThinking/AI", 2));
          reqs.push(makeReq("Innovations", 2));
          reqs.push(makeReq("Entrepreneurship/FL", 2));
          reqs.push(makeReq("Health", 2));
          reqs.push(makeReq("P.E.", 4));
          reqs.push(makeReq("Dance", 1));
          reqs.push(makeReq("Music", 1));
          reqs.push(makeReq("Visual", 1));
          reqs.push(makeReq("Theater", 1));
          reqs.push(makeReq("Math+Science", 12,16));
          reqs.push(makeReq("Total Arts", 7));
          reqs.push(makeReq("Total Credits", 84));
      }

  }

  setRequirements(2022);