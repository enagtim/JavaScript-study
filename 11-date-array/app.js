
const inputDates = ["10.02.22", "11.12.23", "0.13.22", "41.12", "02/29/2024", "S9-11-20d6"];

function isValidDate(day, month, year) {
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && day === 29) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return true; 
        }
        return false; 
    }
    return day <= daysInMonth[month - 1];
}

function parseDate(dateStr) {
    let day, month, year;
    if (dateStr.includes('.')) {
        [day, month, year] = dateStr.split('.').map(Number);
    } else if (dateStr.includes('/')) {
        [month, day, year] = dateStr.split('/').map(Number);
    } else {
        return null;
    }
    if (year < 1000) {
        year = (year >= 0 && year <= 99) ? (year + 2000) : year; 
    }

    if (isValidDate(day, month, year)) {
        return formatDate(day, month, year);
    }
    return null;
}

function formatDate(day, month, year) {
    const dayStr = String(day).padStart(2, '0');
    const monthStr = String(month).padStart(2, '0');
    const yearStr = String(year).slice(-2);
    return `${dayStr}.${monthStr}.${yearStr}`;
}

function filterAndFormatDates(dates) {
    return dates.map(parseDate).filter(date => date !== null);
}

const validDates = filterAndFormatDates(inputDates);
console.log(validDates); 