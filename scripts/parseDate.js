function parseDate(dateString) {
    // 处理标准格式
    var standardFormat = dateString.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
    if (standardFormat) {
        return parseStandardDate(standardFormat);
    }

    // 处理“月日”格式
    var monthDayFormat = dateString.match(/(\d{1,2})月(\d{1,2})[日号]/);
    if (monthDayFormat) {
        return parseMonthDayFormat(monthDayFormat);
    }

    return null;
}

function parseStandardDate(parts) {
    var year = parseInt(parts[1]);
    var month = parseInt(parts[2]) - 1; // 月份是从0开始的
    var dayOfMonth = parseInt(parts[3]);
    return getDayOfWeek(year, month, dayOfMonth);
}

function parseMonthDayFormat(parts) {
    var year = new Date().getFullYear(); // 假设是当前年份
    var month = parseInt(parts[1]) - 1; // 月份是从0开始的
    var dayOfMonth = parseInt(parts[2]);
    return getDayOfWeek(year, month, dayOfMonth);
}

function getDayOfWeek(year, month, day) {
    var date = new Date(year, month, day);
    var daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return daysOfWeek[date.getDay()];
}

module.exports = parseDate;