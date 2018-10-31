 var courses = [];

 function makeCourse(name, req, req2, req3) {
     var course = {};
     course.name = name;
     course.req = req;
     course.req2 = req2;
     course.req3 = req3;
     return course;
 }



 courses.push(makeCourse("English 9", "English"));
 courses.push(makeCourse("English 10", "English"));
 courses.push(makeCourse("English 11", "English"));
 courses.push(makeCourse("English 12", "English"));
 courses.push(makeCourse("Honors English 11", "English"));
 courses.push(makeCourse("Honors English 12", "English"));
 courses.push(makeCourse("Creative Writing", "English"));

 courses.push(makeCourse("History 9", "History"));
 courses.push(makeCourse("History 10", "History"));
 courses.push(makeCourse("History 11", "History"));
 courses.push(makeCourse("History 12", "History"));
 courses.push(makeCourse("Honors History 11", "History"));
 courses.push(makeCourse("Honors History 12", "History"));

 courses.push(makeCourse("Scientific Investigations", "Science", "Math/Science"));
 courses.push(makeCourse("Chemistry", "Science", "Math/Science"));
 courses.push(makeCourse("Genetics", "Science", "Math/Science"));
 courses.push(makeCourse("Advanced Chemistry", "Science", "Math/Science"));
 courses.push(makeCourse("Biology", "Science", "Math/Science"));
 courses.push(makeCourse("Honors Biology", "Science", "Math/Science"));
 courses.push(makeCourse("Physics", "Science", "Math/Science"));
 courses.push(makeCourse("Biotechnology", "Science", "Math/Science"));
 courses.push(makeCourse("Climate Science", "Science", "Math/Science"));
 courses.push(makeCourse("Food Chemistry", "Science", "Math/Science"));
 courses.push(makeCourse("Evolution", "Science", "Math/Science"));
 courses.push(makeCourse("GIS: Urban Ecology", "Science", "Math/Science"));
 courses.push(makeCourse("Endocrine and Nervous System", "Science", "Math/Science"));
 courses.push(makeCourse("Infectious Diseases", "Science", "Math/Science"));
 courses.push(makeCourse("Intro to Anatomy and Physiology", "Science", "Math/Science"));
 courses.push(makeCourse("Intro to Neuroscience", "Science", "Math/Science"));
 courses.push(makeCourse("Marine Science", "Science", "Math/Science"));
 courses.push(makeCourse("Meteorology", "Science", "Math/Science"));
 courses.push(makeCourse("Sustainability", "Science", "Assorted Arts", "Math/Science"));
 



 courses.push(makeCourse("Integrated Algebra 9", "Math", "Math/Science"));
 courses.push(makeCourse("Integrated Algebra 10", "Math", "Math/Science"));
 courses.push(makeCourse("Geometry", "Math", "Math/Science"));
 courses.push(makeCourse("Advanced Algebra", "Math", "Math/Science"));
 courses.push(makeCourse("Precalculus", "Math", "Math/Science"));
 courses.push(makeCourse("Calculus I", "Math", "Math/Science"));
 courses.push(makeCourse("Calculus II", "Math", "Math/Science"));
 courses.push(makeCourse("Statistics", "Math", "Math/Science"));
 courses.push(makeCourse("Statistics w. Math Concepts", "Math", "Math/Science"));


 courses.push(makeCourse("Chinese 1", "World Languagues"));
 courses.push(makeCourse("Chinese 2", "World Languagues"));
 courses.push(makeCourse("Chinese 3", "World Languagues"));
 courses.push(makeCourse("Chinese 4", "World Languagues"));
 courses.push(makeCourse("Chinese 5", "World Languagues"));
 courses.push(makeCourse("Chinese 6", "World Languagues"));
 courses.push(makeCourse("Honors Chinese 4", "World Languagues"));
 courses.push(makeCourse("Honors Chinese 5", "World Languagues"));
 courses.push(makeCourse("Honors Chinese 6", "World Languagues"));

 courses.push(makeCourse("Spanish 1", "World Languagues"));
 courses.push(makeCourse("Spanish 2", "World Languagues"));
 courses.push(makeCourse("Spanish 3", "World Languagues"));
 courses.push(makeCourse("Spanish 4", "World Languagues"));
 courses.push(makeCourse("Spanish 5", "World Languagues"));
 courses.push(makeCourse("Spanish 6", "World Languagues"));
 courses.push(makeCourse("Honors Spanish 4", "World Languagues"));
 courses.push(makeCourse("Honors Spanish 5", "World Languagues"));
 courses.push(makeCourse("Honors Spanish 6", "World Languagues"));

 courses.push(makeCourse("French 1", "World Languagues"));
 courses.push(makeCourse("French 2", "World Languagues"));
 courses.push(makeCourse("French 3", "World Languagues"));
 courses.push(makeCourse("French 4", "World Languagues"));
 courses.push(makeCourse("French 5", "World Languagues"));
 courses.push(makeCourse("French 6", "World Languagues"));
 courses.push(makeCourse("Honors French 4", "World Languagues"));
 courses.push(makeCourse("Honors French 5", "World Languagues"));
 courses.push(makeCourse("Honors French 6", "World Languagues"));

 courses.push(makeCourse("Beginning Dance", "Dance", "Assorted Arts", "P.E."));
 courses.push(makeCourse("Intermediate Dance", "Dance", "Assorted Arts", "P.E."));
 courses.push(makeCourse("Intermediate/Advanced Dance", "Dance", "Assorted Arts", "P.E."));
 courses.push(makeCourse("Advanced Dance", "Dance", "Assorted Arts", "P.E."));
 courses.push(makeCourse("Ballet", "Dance", "Assorted Arts", "P.E."));
 courses.push(makeCourse("Dance for Musical Theater", "Dance", "Assorted Arts", "P.E."));
 courses.push(makeCourse("Intro to Jazz and Modern Dance", "Dance", "Assorted Arts", "P.E."));
 courses.push(makeCourse("P.E.", "P.E."));
 courses.push(makeCourse("Yoga", "P.E."));

 courses.push(makeCourse("Jazz Ensemble I", "Music", "Assorted Arts"));
 courses.push(makeCourse("Jazz Ensemble II", "Music", "Assorted Arts"));
 courses.push(makeCourse("Jazz Choir I", "Music", "Assorted Arts"));
 courses.push(makeCourse("Jazz Choir II", "Music", "Assorted Arts"));
 courses.push(makeCourse("Jazz Choir III", "Music", "Assorted Arts"))
 courses.push(makeCourse("Vocal Ensemble", "Music", "Assorted Arts"));
 courses.push(makeCourse("Vocal Revue", "Music", "Assorted Arts"));
 courses.push(makeCourse("Beginning Vocal", "Music", "Assorted Arts"));
 courses.push(makeCourse("Digital Music Production", "Music", "Assorted Arts"));

 courses.push(makeCourse("Beginning Studio Arts", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Studio Arts", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Intermediate Studio Arts", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Advanced Studio Arts", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Portfolio Development", "Visual", "Assorted Arts"));
 courses.push(makeCourse("3D Studio Arts", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Ceramaics", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Design and Technology", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Fiber Arts", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Sculpture", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Film", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Advanced Film", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Film Animation", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Film Appreciation", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Film Documentary", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Graphic Design and Typography", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Digital Photography", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Black and White Photography", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Experimental Photography", "Visual", "Assorted Arts"));
 courses.push(makeCourse("Advanced Photography", "Visual", "Assorted Arts"));

 courses.push(makeCourse("CompThinking: Machine Learning, AI", "CompThinking/AI"));
 courses.push(makeCourse("CompThinking: Dealing with Data", "CompThinking/AI"));
 courses.push(makeCourse("Software Dev", "CompThinking/AI", "Math"));

 courses.push(makeCourse("Costume Design", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Mask Making", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Musical Theater", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Playing Shakespeare", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Sketch Comedy", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Stage Combat", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Beginning Acting", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Intermediate Acting", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Advanced Acting", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Improv", "Theater", "Assorted Arts"));
 courses.push(makeCourse("Tech Theater", "Theater", "Assorted Arts"));

 courses.push(makeCourse("Innovations", "Innovations"));
 courses.push(makeCourse("Curiosity", "Innovations"));

 courses.push(makeCourse("Entrepreneurship/FL", "Entrepreneurship/FL"));

 courses.push(makeCourse("9th Grade Rhetoric", "Rhetoric", "Assorted Arts", "Additional Credits"));
 courses.push(makeCourse("Speech", "Rhetoric", "Assorted Arts", "Additional Credits"));
 courses.push(makeCourse("Debate", "Rhetoric", "Assorted Arts", "Additional Credits"));
 courses.push(makeCourse("Mock Trial", "Rhetoric", "Assorted Arts", "Additional Credits"));

 courses.push(makeCourse("Health", "Health"));

 function sortCompare(a, b) {
     return a.name.localeCompare(b.name);
 }
 courses = courses.sort(sortCompare);