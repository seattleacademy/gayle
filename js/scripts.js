var myCourses = [];
var reqs = [];
var courses = [];
var myCourses = [];

function makeReq(name, count) {
    var req = {};
    req.name = name;
    req.count = count;
    return req;
}

reqs.push(makeReq("CompThinking", 2));
reqs.push(makeReq("English", 12));
reqs.push(makeReq("History", 9));

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
        reqlist += '<li class="list-group-item">';
        reqlist += '<div class="progress">';
        reqlist += '<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width:'
        reqlist += ((reqCount(reqs[i].name) / reqs[i].count) * 100);
        reqlist += '%">'
        reqlist += reqs[i].name + ' ' + reqCount(reqs[i].name) + '/' + reqs[i].count;
        reqlist += '</div>' //close .progress-bar div
        reqlist += '</div>' //close .progress div
        reqlist += "</li>";
    }
    $('#theReqs').html(reqlist);
}


function makeCourse(name, req) {
    var course = {};
    course.name = name;
    course.req = req;
    return course;
}

courses.push(makeCourse("Software Development", "CompThinking"));
courses.push(makeCourse("Computational Thinking", "CompThinking"));
courses.push(makeCourse("History 9", "History"));

function makeCoursesMenu(courses) {
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
    var item = this.getAttribute('data-item');
    myCourses.push(courses[item]);
    updateCourseList(myCourses);
    updateReqsList(reqs);
}

function removeCourse(e) {
    var item = this.getAttribute('data-item');
    var removed = myCourses.splice(item, 1);
    updateCourseList(myCourses);
    updateReqsList(reqs);
}

function updateCourseList(myCourses) {
    var classlist = ""
    for (var i = 0; i < myCourses.length; i++) {
        classlist += '<li class="list-group-item">';
        classlist += myCourses[i].name;
        classlist += '<button type="button" class="close" data-item='
        classlist += i;
        classlist += '><span>&times;</span></button>'
        classlist += "</li>";
    }
    $('#myCourses').html(classlist);
    return myCourses;
}

$('.container').load('plan.html', loadnav);

function loadnav(){
   $.get("nav.html", function(data) {
            $('.container').prepend(data);
            loadterms()
        }); 
}

function loadterms() {
    $('#terms').load('terms.html', startupscripts);
}

function startupscripts() {
    $.get("banner.html", function(data) {
        $('.container').prepend(data);
        // $.get("nav.html", function(data) {
        //     $('.container').prepend(data);
        // });
    });

    updateReqsList(reqs);
    $(".dropdown-menu").html(makeCoursesMenu(courses));
    $(".coursesitem").click(addCourse);
    $('body').on('click', '.close', removeCourse);
}