export const firstLetterUpperCase = (text) => {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const allInitialsUpperCase = (text) => {
    let splitStr = text.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        if(splitStr[i] != 'da' && 
           splitStr[i] != 'de' &&
           splitStr[i] != 'do' &&
           splitStr[i] != 'com' &&
           splitStr[i] != 'ao' &&
           splitStr[i] != 'a' &&
           splitStr[i] != 'o' &&
           splitStr[i] != 'e' &&
           splitStr[i] != 'para' &&
           splitStr[i] != 'pra' &&
           splitStr[i] != 'pro')
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }

    return splitStr.join(' '); 
}