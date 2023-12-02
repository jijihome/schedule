const getDayCourses = require("./getDayCourses");

function getTodayCourses(today, courses) {
    var dayOfWeek = today.getDay();
    var currentHour = today.getHours();
    var daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = daysOfWeek[dayOfWeek];

    return getDayCourses(day, courses, currentHour);
}

module.exports = getTodayCourses;