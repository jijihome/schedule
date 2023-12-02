const formatCourses = require("./formatCourses");

function getDayCourses(day, courses, currentHour) {
    if (courses[day]) {
        // 如果当前时间超过16点，则返回全天的课程
        if (currentHour >= 17) {
            return day + "的全天课程是：\n" + 
                   formatCourses(courses[day]["上午"], "上午") + "\n" +
                   formatCourses(courses[day]["下午"], "下午");
        } else if (currentHour < 11) {
            // 仅返回上午的课程
            return day + "的上午课程是：\n" + formatCourses(courses[day]["上午"], "上午");
        } else {
            // 仅返回下午的课程
            return day + "的下午课程是：\n" + formatCourses(courses[day]["下午"], "下午");
        }
    } else {
        return day + "没有课程安排。";
    }
}

module.exports = getDayCourses;