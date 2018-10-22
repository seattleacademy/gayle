var courses = [];

function makeCourse(name, req) {
    var course = {};
    course.name = name;
    course.req = req;
    return course;
}

//Courses from http://math.seattleacademy.org/milanfillipi/testforday17.html
        courses.push(makeCourse("English 9", "English"));
        courses.push(makeCourse("English 10", "English"));
        courses.push(makeCourse("English 11", "English"));
        courses.push(makeCourse("English 12", "English"));
        courses.push(makeCourse("Honors English 11", "English"));
        courses.push(makeCourse("Honors English 12", "English"));

        courses.push(makeCourse("History 9", "History"));
        courses.push(makeCourse("History 10", "History"));
        courses.push(makeCourse("History 11", "History"));
        courses.push(makeCourse("History 12", "History"));
        courses.push(makeCourse("Honors History 11", "History"));
        courses.push(makeCourse("Honors History 12", "History"));

        courses.push(makeCourse("Scientific Investigations", "Science"));
        courses.push(makeCourse("Chemistry", "Science"));
        courses.push(makeCourse("Genetics", "Science"));
        courses.push(makeCourse("Advanced Chemistry", "Science"));
        courses.push(makeCourse("Biology", "Science"));
        courses.push(makeCourse("Honors Biology", "Science"));
        courses.push(makeCourse("Physics", "Science"));

        courses.push(makeCourse("Integrated Algebra", "Math"));
        courses.push(makeCourse("Geometry", "Math"));
        courses.push(makeCourse("Advanced Algebra", "Math"));
        courses.push(makeCourse("Precalculus", "Math"));
        courses.push(makeCourse("Calculus I", "Math"));
        courses.push(makeCourse("Calculus II", "Math"));
        courses.push(makeCourse("Statistics", "Math"));
        courses.push(makeCourse("Statistics w. Math Modeling", "Math"));

        courses.push(makeCourse("Chinese 1", "Foreign Languague"));
        courses.push(makeCourse("Chinese 2", "Foreign Languague"));
        courses.push(makeCourse("Chinese 3", "Foreign Languague"));
        courses.push(makeCourse("Chinese 4", "Foreign Languague"));
        courses.push(makeCourse("Chinese 5", "Foreign Languague"));
        courses.push(makeCourse("Chinese 6", "Foreign Languague"));
        courses.push(makeCourse("Honors Chinese 4", "Foreign Languague"));
        courses.push(makeCourse("Honors Chinese 5", "Foreign Languague"));
        courses.push(makeCourse("Honors Chinese 6", "Foreign Languague"));

        courses.push(makeCourse("Spanish 1", "Foreign Languague"));
        courses.push(makeCourse("Spanish 2", "Foreign Languague"));
        courses.push(makeCourse("Spanish 3", "Foreign Languague"));
        courses.push(makeCourse("Spanish 4", "Foreign Languague"));
        courses.push(makeCourse("Spanish 5", "Foreign Languague"));
        courses.push(makeCourse("Spanish 6", "Foreign Languague"));
        courses.push(makeCourse("Honors Spanish 4", "Foreign Languague"));
        courses.push(makeCourse("Honors Spanish 5", "Foreign Languague"));
        courses.push(makeCourse("Honors Spanish 6", "Foreign Languague"));

        courses.push(makeCourse("French 1", "Foreign Languague"));
        courses.push(makeCourse("French 2", "Foreign Languague"));
        courses.push(makeCourse("French 3", "Foreign Languague"));
        courses.push(makeCourse("French 4", "Foreign Languague"));
        courses.push(makeCourse("French 5", "Foreign Languague"));
        courses.push(makeCourse("French 6", "Foreign Languague"));
        courses.push(makeCourse("Honors French 4", "Foreign Languague"));
        courses.push(makeCourse("Honors French 5", "Foreign Languague"));
        courses.push(makeCourse("Honors French 6", "Foreign Languague"));

        courses.push(makeCourse("Beginning Dance", "Dance", "P.E."));
        courses.push(makeCourse("Intermediate Dance", "Dance", "P.E."));
        courses.push(makeCourse("Intermediate/Advanced Dance", "Dance", "P.E."));
        courses.push(makeCourse("Advanced Dance", "Dance", "P.E."));
        courses.push(makeCourse("Ballet", "Dance", "P.E."));
        courses.push(makeCourse("Dance for Musical Theater", "Dance", "P.E."));
        courses.push(makeCourse("Intro to Jazz and Modern Dance", "Dance", "P.E."));
        courses.push(makeCourse("P.E.", "P.E."));
        courses.push(makeCourse("Yoga", "P.E."));

        courses.push(makeCourse("Jazz Ensemble I", "Music"));
        courses.push(makeCourse("Jazz Ensemble II", "Music"));
        courses.push(makeCourse("Jazz Choir I", "Music"));
        courses.push(makeCourse("Jazz Choir II", "Music"));
        courses.push(makeCourse("Jazz Choir III", "Music"))
        courses.push(makeCourse("Vocal Ensemble", "Music"));
        courses.push(makeCourse("Vocal Revue", "Music"));
        courses.push(makeCourse("Beginning Vocal", "Music"));
        courses.push(makeCourse("Digital Music Production", "Music"));

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

        courses.push(makeCourse("CT: Machine Learning, AI", "CT/AI"));
        courses.push(makeCourse("CT: Dealing with Data", "CT/AI"));
        courses.push(makeCourse("Software Development", "CT/AI"));

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

        courses.push(makeCourse("Entrepreneurship/Financial Literacy", "Entrepreneurship/Financial Literacy"));

        courses.push(makeCourse("Speech", "Rhetoric", "Assorted Arts", "Additional Credits"));
        courses.push(makeCourse("Debate", "Rhetoric", "Assorted Arts", "Additional Credits"));

        function sortCompare(a,b){
        	return a.name.localeCompare(b.name);
        }
        courses = courses.sort(sortCompare);
