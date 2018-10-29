function autoFill() {
    myCourses.push({ name: "English 9", req: "English", term: 1 });
    myCourses.push({ name: "English 9", req: "English", term: 2 });
    myCourses.push({ name: "English 9", req: "English", term: 3 });
    myCourses.push({ name: "English 10", req: "English", term: 4 });
    myCourses.push({ name: "English 10", req: "English", term: 5 });
    myCourses.push({ name: "English 10", req: "English", term: 6 });
    myCourses.push({ name: "English 11", req: "English", term: 7 });
    myCourses.push({ name: "English 11", req: "English", term: 8 });
    myCourses.push({ name: "English 11", req: "English", term: 9 });

    myCourses.push({ name: "History 9", req: "History", term: 1 });
    myCourses.push({ name: "History 9", req: "History", term: 2 });
    myCourses.push({ name: "History 9", req: "History", term: 3 });
    myCourses.push({ name: "History 10", req: "History", term: 4 });
    myCourses.push({ name: "History 10", req: "History", term: 5 });
    myCourses.push({ name: "History 10", req: "History", term: 6 });
    myCourses.push({ name: "History 11", req: "History", term: 7 });
    myCourses.push({ name: "History 11", req: "History", term: 8 });
    myCourses.push({ name: "History 11", req: "History", term: 9 });

    myCourses.push({ name: "Sci Investigation", req: "Science", term: 1 });
    myCourses.push({ name: "Sci Investigation", req: "Science", term: 2 });
    myCourses.push({ name: "Sci Investigation", req: "Science", term: 3 });
    myCourses.push({ name: "Chemistry", req: "Science", term: 4 });
    myCourses.push({ name: "Chemistry", req: "Science", term: 5 });
    myCourses.push({ name: "Chemistry", req: "Science", term: 6 });
    myCourses.push({ name: "Biology", req: "Science", term: 7 });
    myCourses.push({ name: "Biology", req: "Science", term: 8 });
    myCourses.push({ name: "Biology", req: "Science", term: 9 });

    var firstmath = $("#firstmath option:selected").text();

    if (firstmath == "Geometry") {
        myCourses.push({ name: "Geometry", req: "Math", term: 1 });
        myCourses.push({ name: "Geometry", req: "Math", term: 2 });
        myCourses.push({ name: "Geometry", req: "Math", term: 3 });
        myCourses.push({ name: "Adv Algebra", req: "Math", term: 4 });
        myCourses.push({ name: "Adv Algebra", req: "Math", term: 5 });
        myCourses.push({ name: "Adv Algebra", req: "Math", term: 6 });
        myCourses.push({ name: "PreCalc", req: "Math", term: 7 });
        myCourses.push({ name: "PreCalc", req: "Math", term: 8 });
        myCourses.push({ name: "PreCalc", req: "Math", term: 9 });
        myCourses.push({ name: "Calc 1", req: "Math", term: 10 });
        myCourses.push({ name: "Calc 1", req: "Math", term: 11 });
        myCourses.push({ name: "Calc 1", req: "Math", term: 12 });

    }

        myCourses.push({ name: "Spanish 2", req: "World Languages", term: 1 });
        myCourses.push({ name: "Spanish 2", req: "World Languages", term: 2 });
        myCourses.push({ name: "Spanish 2", req: "World Languages", term: 3 });
        myCourses.push({ name: "Spanish 3", req: "World Languages", term: 4 });
        myCourses.push({ name: "Spanish 3", req: "World Languages", term: 5 });
        myCourses.push({ name: "Spanish 3", req: "World Languages", term: 6 });
        myCourses.push({ name: "Spanish 4", req: "World Languages", term: 7 });
        myCourses.push({ name: "Spanish 4", req: "World Languages", term: 8 });
        myCourses.push({ name: "Spanish 4", req: "World Languages", term: 9 });
        myCourses.push({ name: "Spanish 5", req: "World Languages", term: 10 });
        myCourses.push({ name: "Spanish 5", req: "World Languages", term: 11 });
        myCourses.push({ name: "Spanish 5", req: "World Languages", term: 12 });
    $(".alert").alert('close')
    updateCourseList();
    updateReqsList(reqs);
}


$('body').on('click', '#autoFill', autoFill);