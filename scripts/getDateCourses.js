const parseDate = require("./parseDate");
const formatCourses = require("./formatCourses");

function getDateCourses(query, courses) {
    var parsedQuery = parseDate(query);
    if (parsedQuery && courses[parsedQuery]) {
        let courseString = parsedQuery + "的全天课程是：\n";
        courseString += formatCourses(courses[parsedQuery]["上午"], "上午");
        courseString += "\n" + formatCourses(courses[parsedQuery]["下午"], "下午");
        return courseString;
    } else {
        return "抱歉，无法识别您的请求。";
    }
}
module.exports = getDateCourses;