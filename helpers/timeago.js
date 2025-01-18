export default function timeAgo(dateString) {
    const now = new Date();
    const pastDate = new Date(dateString);
    const diff = now - pastDate; // Difference in milliseconds

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day; // Approximate
    const year = 365 * day; // Approximate

    if (diff < minute) {
        return "چند لحظه پیش";
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} دقیقه قبل`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} ساعت قبل`;
    } else if (diff < week) {
        const days = Math.floor(diff / day);
        return days === 1 ? "دیروز" : `${days} روز قبل`;
    } else if (diff < month) {
        const weeks = Math.floor(diff / week);
        return weeks === 1 ? "هفته گذشته" : `${weeks} هفته پیش`;
    } else if (diff < year) {
        const months = Math.floor(diff / month);
        return months === 1 ? "ماه گذشته" : `${months} ماه پیش`;
    } else {
        const years = Math.floor(diff / year);
        return years === 1 ? "پارسال" : pastDate.toLocaleDateString('fa-IR');
    }
}