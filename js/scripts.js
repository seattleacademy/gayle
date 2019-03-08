var myCourses = [];

function reqCount(theReq) {
    var count = 0;
    for (var i = 0; i < myCourses.length; i++) {
        if (myCourses[i].req == theReq) {
            count++
        }
    }
    return count;
}

function updateReqsList() {
    var reqlist = "";
    for (var i = 0; i < reqs.length; i++) {
        reqlist += '<li class="list-group-item py-1">';
        reqlist += '<div class="progress">';
        reqlist += '<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width:'
        reqlist += ((reqCount(reqs[i].name) / reqs[i].recommended) * 100);
        reqlist += '%">'
        reqlist += reqs[i].name + ' ' + reqCount(reqs[i].name) + '/' + reqs[i].count;
        reqlist += '</div>' //close .progress-bar div
        reqlist += '</div>' //close .progress div
        reqlist += "</li>";
    }
    cohort = $("#cohort option:selected").text();
    accum = accumList(cohort, myCourses);
    for (var i = 0; i < accum.length; i++) {
        if (accum[i] == undefined) continue;
        reqlist += '<li class="list-group-item py-1">';
        reqlist += '<div class="progress">';
        reqlist += '<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width:'
        reqlist += ((accum[i].earned / accum[i].recommended) * 100);
        reqlist += '%">'
        reqlist += accum[i].name + ' ' + accum[i].earned + '/' + accum[i].count;
        reqlist += '</div>' //close .progress-bar div
        reqlist += '</div>' //close .progress div
        reqlist += "</li>";
    }
    $('#theReqs').html(reqlist);
}

function makeCoursesMenu() {
    var menu = "";
    for (var i = 0; i < courses.length; i++) {
        var item = '<button class="dropdown-item coursesitem" data-item=';
        item += i;
        item += '>' + courses[i].name + '</button>';
        menu += item;
    }
    return menu;
}


function addCourse() {
    var term = this.parentElement.getAttribute('data-term');
    var item = this.getAttribute('data-item');

    //FIXME:  copy element from array by value rather than extracting values
    let theCourse = {};
    theCourse.name = courses[item].name;
    theCourse.req = courses[item].req;
    theCourse.term = term;
    theCourse.time = Date.now();
    myCourses.push(theCourse);

    updateCourseList();
    updateReqsList(reqs);
}

function removeCourse() {
    var item = this.getAttribute('data-item');
    var removed = myCourses.splice(item, 1);
    updateCourseList(myCourses);
    updateReqsList(reqs);
}

function updateCourseList() {
    for (var theTerm = 1; theTerm <= 12; theTerm++) {
        var classlist = "";
        for (var i = 0; i < myCourses.length; i++) {
            if (myCourses[i].term == theTerm) {
                classlist += '<li class="list-group-item py-0 coursename">';
                classlist += myCourses[i].name;
                classlist += '<button type="button" class="close"';
                classlist += 'data-item=' + i + '>';
                classlist += '<span>&times;</span></button>'
                classlist += "</li>";
            }
        }
        $('.myCourses[data-term=' + theTerm + ']').html(classlist);
    }
    updateInOut();
}

function updateInOut() {
    var coursetext = "";
    for (var i = 0; i < myCourses.length; i++) {
        coursetext += myCourses[i].name;
        coursetext += ','
        coursetext += myCourses[i].req;
        coursetext += ','
        coursetext += myCourses[i].term;
        coursetext += '\n'
    }
    $("#inout").text(coursetext);

}

function importClassList() {
    var coursetext = $("#inout").text();
    var lines = coursetext.split('\n');
    myCourses = [];
    var course = {};
    for (var i = 0; i < lines.length; i++) {
        line = lines[i].split(',');
        if(line.length != 3) continue;
        course = {};
        course.name = line[0];
        course.req = line[1];
        course.term = line[2];
        course.time = Date.now();
        myCourses.push(course);
    }
    updateCourseList();
    updateReqsList(reqs);
}

function updateCohort() {
    cohort = $("#cohort option:selected").text();
    setRequirements(cohort);
    updateReqsList(reqs);

    console.log("test cohort update");

        $(".year1").removeClass("offyear onyear");
        $(".year2").removeClass("offyear onyear");
        $(".year3").removeClass("offyear onyear");
        $(".year4").removeClass("offyear onyear");
    
    if (document.getElementById("cohort").value == "2021"){
        $(".year1").addClass("offyear");
        $(".year2").addClass("offyear");
        $(".year3").addClass("onyear");
        $(".year4").addClass("offyear");
        console.log("test 2021 cohort");

    } else if (document.getElementById("cohort").value == "2022"){
        $(".year1").addClass("offyear");
        $(".year2").addClass("onyear");
        $(".year3").addClass("offyear");
        $(".year4").addClass("offyear");

    } else if (document.getElementById("cohort").value == "2020"){
        $(".year1").addClass("offyear");
        $(".year2").addClass("offyear");
        $(".year3").addClass("offyear");
        $(".year4").addClass("onyear");

    } else if (document.getElementById("cohort").value == "2019"){
        $(".year1").addClass("offyear");
        $(".year2").addClass("offyear");
        $(".year3").addClass("offyear");
        $(".year4").addClass("onyear");

    }
    
}
$('nav').load('html/nav.html', loadmaincontainer);

function loadmaincontainer() {
    $('#maincontainer').load('html/plan.html', loadterms);
}

function loadterms() {
    $('#terms').load('html/terms.html', startupscripts);
}

function showall(e){
    //console.log("shwoall", e);
        $(".year1").removeClass("offyear");
        $(".year2").removeClass("offyear");
        $(".year3").removeClass("offyear");
        $(".year4").removeClass("offyear");
                
        $(".year1").addClass("onyear");
        $(".year2").addClass("onyear");
        $(".year3").addClass("onyear");
        $(".year4").addClass("onyear");

        console.log("test!!");
}

function hideall(e){
    //console.log("shwoall", e);
        $(".year1").removeClass("onyear");
        $(".year2").removeClass("onyear");
        $(".year3").removeClass("onyear");
        $(".year4").removeClass("onyear");
                
        $(".year1").addClass("offyear");
        $(".year2").addClass("offyear");
        $(".year3").addClass("offyear");
        $(".year4").addClass("offyear");

        console.log("test!!");
}

function startupscripts() {
    $(".course-menu").html(makeCoursesMenu(courses));
    updateReqsList(reqs);
    $('body').on('click', '.coursesitem', addCourse);
    $('body').on('click', '.close', removeCourse);
    $('body').on('change', '#cohort', updateCohort);
    $('body').on('click', '#importclasslist', importClassList);
    $('body').on('click', '#showall', showall);
    $('body').on('click', '#hideall', hideall);
}

function importClasses(){


    function showLines(allText){
        var result = (allText.split("\\n"));
        console.log(result);
    }

    $.get('js/coursedatatest.txt', showLines);

}

importClasses();