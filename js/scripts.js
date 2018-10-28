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
        reqlist += ((reqCount(reqs[i].name) / reqs[i].count) * 100);
        reqlist += '%">'
        reqlist += reqs[i].name + ' ' + reqCount(reqs[i].name) + '/' + reqs[i].count;
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
                classlist += '<li class="list-group-item py-0">';
                classlist += myCourses[i].name;
                classlist += '<button type="button" class="close"';
                classlist += 'data-item=' + i + '>';
                classlist += '<span>&times;</span></button>'
                classlist += "</li>";
            }
        }
        $('.myCourses[data-term=' + theTerm + ']').html(classlist);
    }
}

$('#maincontainer').load('plan.html', loadterms);

function loadterms() {
    $('#terms').load('terms.html', startupscripts);
}

function startupscripts() {
    $(".course-menu").html(makeCoursesMenu(courses));
    updateReqsList(reqs);
    $('body').on('click', '.coursesitem', addCourse);
    $('body').on('click', '.close', removeCourse);
}