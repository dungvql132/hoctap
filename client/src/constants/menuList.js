export const mainMenu = [
    getItem("Learn English", "1", null, '/webeng'),
    getItem("Learn English 1", "2", null, '/webeng'),
    getItem("Learn English 2", "3", null, '/webeng'),
]

export const webEng = [
    getItem("Lesson", "1",null,'/webeng/lession'),
    getItem("Lesson Part", "2",null,'/webeng/lessionpart'),
    getItem("Lesson Daily", "3",null,'/webeng/lessiondaily'),
    getItem("Words", "4",null,'/webeng/words'),
    getItem("Reading", "5",null,'/webeng/reading'),
    getItem("Grammar", "6",null,'/webeng/grammar'),
    getItem("Listen", "7",null,'/webeng/webeng'),
]

export function getItem(label, key, children, tolink, type, icon) {
    return {
        key,
        icon,
        children,
        label,
        type,
        tolink
    };
}

export default {
    mainMenu,
    getItem,
    webEng
}