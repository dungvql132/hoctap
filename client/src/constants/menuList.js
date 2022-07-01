export const mainMenu = [
    getItem("Learn English", "webeng", null, '/webeng'),
    getItem("Learn English 1", "2", null, '/webeng'),
    getItem("Learn English 2", "3", null, '/webeng'),
]

export const webEng = [
    getItem("Lesson", "lession",null,'/webeng/lession'),
    getItem("Lesson Part", "lessionpart",null,'/webeng/lessionpart'),
    getItem("Lesson Daily", "lessiondaily",null,'/webeng/lessiondaily'),
    getItem("Words", "words",null,'/webeng/words'),
    getItem("Reading", "reading",null,'/webeng/reading'),
    getItem("Grammar", "grammar",null,'/webeng/grammar'),
    getItem("Listen", "webeng",null,'/webeng/webeng'),
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