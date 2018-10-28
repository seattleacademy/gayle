  var reqs = [];

  function makeReq(name, count) {
      var req = {};
      req.name = name;
      req.count = count;
      return req;
  }

  reqs.push(makeReq("English", 12));
  reqs.push(makeReq("History", 9));
  reqs.push(makeReq("Science", 9));
  reqs.push(makeReq("Math", 9));
  reqs.push(makeReq("Foreign Languague", 9));
  reqs.push(makeReq("Math/Science", 3));
  reqs.push(makeReq("CompThinking/AI", 2));
  reqs.push(makeReq("Innovations", 2));
  reqs.push(makeReq("Entrepreneurship/FL", 2));
  reqs.push(makeReq("Health", 2));
  reqs.push(makeReq("P.E.", 4));
  reqs.push(makeReq("Dance", 1));
  reqs.push(makeReq("Music", 1));
  reqs.push(makeReq("Visual", 1));
  reqs.push(makeReq("Theater", 1));
  reqs.push(makeReq("Assorted Arts", 3));
  reqs.push(makeReq("Additional Credits", 13));
  reqs.push(makeReq("Total Credits", 84));