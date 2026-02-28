function pastMidnight(hours, minutes, seconds) {
    if ((hours >=0 && hours < 23) || (minutes >=0 && minutes <= 59) || (seconds >=0 && seconds <= 59)) {
        let hoursInSeconds = hours * 60 * 60;
        let minutesInSeconds = minutes * 60;
        let totalSeconds = hoursInSeconds + minutesInSeconds + seconds;
        return totalSeconds * 1000;
    }
}