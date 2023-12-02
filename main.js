const getTodayCourses = require("./scripts/getTodayCourses");
const getDayCourses = require("./scripts/getDayCourses");
const getDateCourses = require("./scripts/getDateCourses");
const getCoursesData = require("./scripts/getCoursesData");

function getCourseByDayOrDate(query) {
  var courses = getCoursesData();
  if (!query || query.trim() === "") {
    return getTodayCourses(new Date(), courses);
  }

  var daysOfWeek = [
    "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"
  ];

  var today = new Date();
  var dayOfWeek;

  switch (query) {
    case "今天":
      return getTodayCourses(today, courses);
    case "明天":
      dayOfWeek = daysOfWeek[(today.getDay() + 1) % 7];
      return getDayCourses(dayOfWeek, courses, 16);
    case "后天":
      dayOfWeek = daysOfWeek[(today.getDay() + 2) % 7];
      return getDayCourses(dayOfWeek, courses, 16);
    default:
      var dayIndex = daysOfWeek.indexOf(query);
      if (dayIndex !== -1) {
        // 处理星期几的查询
        return getDayCourses(daysOfWeek[dayIndex], courses, 16);
      } else {
        // 处理日期格式的查询
        return getDateCourses(query, courses);
      }
  }
}

let result = "";

const params = $context.query;

if (params && "日期" in params) {
  result = getCourseByDayOrDate(params.日期);
} else {
  result = "未传入日期";
}

$intents.finish(result);