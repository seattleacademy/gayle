function autoFill() {
    var firstmath = $("#firstmath option:selected").text();
    var firstlang = $("#firstlang option:selected").text();

    myCourses.push({ name: "English 9", req: "EN", term: 1 });
    myCourses.push({ name: "English 9", req: "EN", term: 2 });
    myCourses.push({ name: "English 9", req: "EN", term: 3 });
    myCourses.push({ name: "English 10", req: "EN", term: 4 });
    myCourses.push({ name: "English 10", req: "EN", term: 5 });
    myCourses.push({ name: "English 10", req: "EN", term: 6 });
    myCourses.push({ name: "English 11", req: "EN", term: 7 });
    myCourses.push({ name: "English 11", req: "EN", term: 8 });
    myCourses.push({ name: "English 11", req: "EN", term: 9 });
    myCourses.push({ name: "English 12", req: "EN", term: 10 });
    myCourses.push({ name: "English 12", req: "EN", term: 11 });
    myCourses.push({ name: "English 12", req: "EN", term: 12 });

    myCourses.push({ name: "History 9", req: "HI", term: 1 });
    myCourses.push({ name: "History 9", req: "HI", term: 2 });
    myCourses.push({ name: "History 9", req: "HI", term: 3 });
    myCourses.push({ name: "History 10", req: "HI", term: 4 });
    myCourses.push({ name: "History 10", req: "HI", term: 5 });
    myCourses.push({ name: "History 10", req: "HI", term: 6 });
    myCourses.push({ name: "History 11", req: "HI", term: 7 });
    myCourses.push({ name: "History 11", req: "HI", term: 8 });
    myCourses.push({ name: "History 11", req: "HI", term: 9 });
    myCourses.push({ name: "History 12", req: "HI", term: 10 });
    myCourses.push({ name: "History 12", req: "HI", term: 11 });
    myCourses.push({ name: "History 12", req: "HI", term: 12 });

    myCourses.push({ name: "Sci Investigation", req: "SC", term: 1 });
    myCourses.push({ name: "Sci Investigation", req: "SC", term: 2 });
    myCourses.push({ name: "Sci Investigation", req: "SC", term: 3 });
    myCourses.push({ name: "Chemistry", req: "SC", term: 4 });
    myCourses.push({ name: "Chemistry", req: "SC", term: 5 });
    myCourses.push({ name: "Chemistry", req: "SC", term: 6 });
    myCourses.push({ name: "Biology", req: "SC", term: 7 });
    myCourses.push({ name: "Biology", req: "SC", term: 8 });
    myCourses.push({ name: "Biology", req: "SC", term: 9 });

    if (firstmath == "Integrated Algebra 9") {
        myCourses.push({ name: "Integrated Algebra 9", req: "MA", term: 1 });
        myCourses.push({ name: "Integrated Algebra 9", req: "MA", term: 2 });
        myCourses.push({ name: "Integrated Algebra 9", req: "MA", term: 3 });
        myCourses.push({ name: "Integrated Algebra 10", req: "MA", term: 4 });
        myCourses.push({ name: "Integrated Algebra 10", req: "MA", term: 5 });
        myCourses.push({ name: "Integrated Algebra 10", req: "MA", term: 6 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 7 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 8 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 9 });
        myCourses.push({ name: "FST", req: "MA", term: 10 });
        myCourses.push({ name: "FST", req: "MA", term: 11 });
        myCourses.push({ name: "FST", req: "MA", term: 12 });
    }

    if (firstmath == "Geometry") {
        myCourses.push({ name: "Geometry", req: "MA", term: 1 });
        myCourses.push({ name: "Geometry", req: "MA", term: 2 });
        myCourses.push({ name: "Geometry", req: "MA", term: 3 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 4 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 5 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 6 });
        myCourses.push({ name: "PreCalc", req: "MA", term: 7 });
        myCourses.push({ name: "PreCalc", req: "MA", term: 8 });
        myCourses.push({ name: "PreCalc", req: "MA", term: 9 });
        myCourses.push({ name: "Calc 1", req: "MA", term: 10 });
        myCourses.push({ name: "Calc 1", req: "MA", term: 11 });
        myCourses.push({ name: "Calc 1", req: "MA", term: 12 });
    }

    if (firstmath == "Advanced Algebra") {
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 1 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 2 });
        myCourses.push({ name: "Adv Algebra", req: "MA", term: 3 });
        myCourses.push({ name: "PreCalc", req: "MA", term: 4 });
        myCourses.push({ name: "PreCalc", req: "MA", term: 5 });
        myCourses.push({ name: "PreCalc", req: "MA", term: 6 });
        myCourses.push({ name: "Calc 1", req: "MA", term: 7 });
        myCourses.push({ name: "Calc 1", req: "MA", term: 8 });
        myCourses.push({ name: "Calc 1", req: "MA", term: 9 });
        myCourses.push({ name: "Calc 2", req: "MA", term: 10 });
        myCourses.push({ name: "Calc 2", req: "MA", term: 11 });
        myCourses.push({ name: "Calc 2", req: "MA", term: 12 });
    }

    if (firstlang == "Spanish 1") {
        myCourses.push({ name: "Spanish 1", req: "FL", term: 1 });
        myCourses.push({ name: "Spanish 1", req: "FL", term: 2 });
        myCourses.push({ name: "Spanish 1", req: "FL", term: 3 });
        myCourses.push({ name: "Spanish 2", req: "FL", term: 4 });
        myCourses.push({ name: "Spanish 2", req: "FL", term: 5 });
        myCourses.push({ name: "Spanish 2", req: "FL", term: 6 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 7 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 8 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 9 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 10 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 11 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 12 });
    }
    if (firstlang == "Spanish 2") {
        myCourses.push({ name: "Spanish 2", req: "FL", term: 1 });
        myCourses.push({ name: "Spanish 2", req: "FL", term: 2 });
        myCourses.push({ name: "Spanish 2", req: "FL", term: 3 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 4 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 5 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 6 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 7 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 8 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 9 });
        myCourses.push({ name: "Spanish 5", req: "FL", term: 10 });
        myCourses.push({ name: "Spanish 5", req: "FL", term: 11 });
        myCourses.push({ name: "Spanish 5", req: "FL", term: 12 });
    }

    if (firstlang == "Spanish 3") {
        myCourses.push({ name: "Spanish 3", req: "FL", term: 1 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 2 });
        myCourses.push({ name: "Spanish 3", req: "FL", term: 3 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 4 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 5 });
        myCourses.push({ name: "Spanish 4", req: "FL", term: 6 });
        myCourses.push({ name: "Spanish 5", req: "FL", term: 7 });
        myCourses.push({ name: "Spanish 5", req: "FL", term: 8 });
        myCourses.push({ name: "Spanish 5", req: "FL", term: 9 });
        myCourses.push({ name: "Spanish 6", req: "FL", term: 10 });
        myCourses.push({ name: "Spanish 6", req: "FL", term: 11 });
        myCourses.push({ name: "Spanish 6", req: "FL", term: 12 });
    }

    if (firstlang == "French 1") {
        myCourses.push({ name: "French 1", req: "FL", term: 1 });
        myCourses.push({ name: "French 1", req: "FL", term: 2 });
        myCourses.push({ name: "French 1", req: "FL", term: 3 });
        myCourses.push({ name: "French 2", req: "FL", term: 4 });
        myCourses.push({ name: "French 2", req: "FL", term: 5 });
        myCourses.push({ name: "French 2", req: "FL", term: 6 });
        myCourses.push({ name: "French 3", req: "FL", term: 7 });
        myCourses.push({ name: "French 3", req: "FL", term: 8 });
        myCourses.push({ name: "French 3", req: "FL", term: 9 });
        myCourses.push({ name: "French 4", req: "FL", term: 10 });
        myCourses.push({ name: "French 4", req: "FL", term: 11 });
        myCourses.push({ name: "French 4", req: "FL", term: 12 });
    }
    if (firstlang == "French 2") {
        myCourses.push({ name: "French 2", req: "FL", term: 1 });
        myCourses.push({ name: "French 2", req: "FL", term: 2 });
        myCourses.push({ name: "French 2", req: "FL", term: 3 });
        myCourses.push({ name: "French 3", req: "FL", term: 4 });
        myCourses.push({ name: "French 3", req: "FL", term: 5 });
        myCourses.push({ name: "French 3", req: "FL", term: 6 });
        myCourses.push({ name: "French 4", req: "FL", term: 7 });
        myCourses.push({ name: "French 4", req: "FL", term: 8 });
        myCourses.push({ name: "French 4", req: "FL", term: 9 });
        myCourses.push({ name: "French 5", req: "FL", term: 10 });
        myCourses.push({ name: "French 5", req: "FL", term: 11 });
        myCourses.push({ name: "French 5", req: "FL", term: 12 });
    }

    if (firstlang == "French 3") {
        myCourses.push({ name: "French 3", req: "FL", term: 1 });
        myCourses.push({ name: "French 3", req: "FL", term: 2 });
        myCourses.push({ name: "French 3", req: "FL", term: 3 });
        myCourses.push({ name: "French 4", req: "FL", term: 4 });
        myCourses.push({ name: "French 4", req: "FL", term: 5 });
        myCourses.push({ name: "French 4", req: "FL", term: 6 });
        myCourses.push({ name: "French 5", req: "FL", term: 7 });
        myCourses.push({ name: "French 5", req: "FL", term: 8 });
        myCourses.push({ name: "French 5", req: "FL", term: 9 });
        myCourses.push({ name: "French 6", req: "FL", term: 10 });
        myCourses.push({ name: "French 6", req: "FL", term: 11 });
        myCourses.push({ name: "French 6", req: "FL", term: 12 });
    }
    if (firstlang == "Chinese 1") {
        myCourses.push({ name: "Chinese 1", req: "FL", term: 1 });
        myCourses.push({ name: "Chinese 1", req: "FL", term: 2 });
        myCourses.push({ name: "Chinese 1", req: "FL", term: 3 });
        myCourses.push({ name: "Chinese 2", req: "FL", term: 4 });
        myCourses.push({ name: "Chinese 2", req: "FL", term: 5 });
        myCourses.push({ name: "Chinese 2", req: "FL", term: 6 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 7 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 8 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 9 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 10 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 11 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 12 });
    }
    if (firstlang == "Chinese 2") {
        myCourses.push({ name: "Chinese 2", req: "FL", term: 1 });
        myCourses.push({ name: "Chinese 2", req: "FL", term: 2 });
        myCourses.push({ name: "Chinese 2", req: "FL", term: 3 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 4 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 5 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 6 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 7 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 8 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 9 });
        myCourses.push({ name: "Chinese 5", req: "FL", term: 10 });
        myCourses.push({ name: "Chinese 5", req: "FL", term: 11 });
        myCourses.push({ name: "Chinese 5", req: "FL", term: 12 });
    }

    if (firstlang == "Chinese 3") {
        myCourses.push({ name: "Chinese 3", req: "FL", term: 1 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 2 });
        myCourses.push({ name: "Chinese 3", req: "FL", term: 3 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 4 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 5 });
        myCourses.push({ name: "Chinese 4", req: "FL", term: 6 });
        myCourses.push({ name: "Chinese 5", req: "FL", term: 7 });
        myCourses.push({ name: "Chinese 5", req: "FL", term: 8 });
        myCourses.push({ name: "Chinese 5", req: "FL", term: 9 });
        myCourses.push({ name: "Chinese 6", req: "FL", term: 10 });
        myCourses.push({ name: "Chinese 6", req: "FL", term: 11 });
        myCourses.push({ name: "Chinese 6", req: "FL", term: 12 });
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let slot = [1, 2, 3];
    slot = shuffle(slot);
    myCourses.push({ name: "Beg Studio Arts", req: "AV", term: slot[0] });
    myCourses.push({ name: "Health", req: "HE", term: slot[1] });
    myCourses.push({ name: "Rhetoric", req: "RE", term: slot[2] });

    slot = [4, 5, 6];

    slot = shuffle(slot);
    myCourses.push({ name: "Financial Literacy", req: "EF", term: slot[0] });
    myCourses.push({ name: "Innovations", req: "IN", term: slot[1] });
    myCourses.push({ name: "Computational Thinking", req: "CT", term: slot[2] });

    updateCourseList();
    updateReqsList(reqs);
    $("#adviceAlert").hide();
}
$('#adviceAlert').load('html/autofill.html', function() {
    $('body').on('click', '#autoFill', autoFill);
});