module.exports = function check(str, bracketsConfig) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j].includes(str[i])) {
                if (str[i] === bracketsConfig[j][0] && str[i] !== bracketsConfig[j][1]) {
                    newStr += str[i];
                } else if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
                    if (newStr.endsWith(bracketsConfig[j][0])) {
                        newStr = newStr.substring(0, newStr.length - 1);
                    } else {
                        newStr += str[i];
                    }
                } else {
                    if (newStr.endsWith(bracketsConfig[j][0])) {
                        newStr = newStr.substring(0, newStr.length - 1);
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    return (newStr === '') ? true : false;
}
