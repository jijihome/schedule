function formatCourses(courseArray, timeOfDay) {
  return `${timeOfDay}：` + courseArray.join("，") + "。";
}
module.exports = formatCourses;