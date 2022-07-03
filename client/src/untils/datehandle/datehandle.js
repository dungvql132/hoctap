export function dateStringToString(dateString){
    try {
        const date = new Date(dateString);
        const rs = `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
        return rs;
    } catch (error) {
        return ''
    }
}

export default {dateStringToString}