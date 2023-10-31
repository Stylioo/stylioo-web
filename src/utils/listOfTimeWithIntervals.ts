
const generateTimeIntervals = () => {
    const intervals = [];
    let currentTime = new Date('2000-01-01T08:00:00');

    const endTime = new Date('2000-01-01T17:45:00');

    while (currentTime <= endTime) {
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        intervals.push({
            time: formattedTime,
            isDisabled: false
        });
        currentTime.setMinutes(currentTime.getMinutes() + 15);
    }

    return intervals;
};


export default generateTimeIntervals;