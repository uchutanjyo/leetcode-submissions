/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(ip) {
    let newIp = ip;
    for (let i = 0; i < newIp.length; i++) {
        if (newIp[i] === "." && newIp[i - 1] !== "[") {
            newIp = [newIp.slice(0, i), "[", newIp[i], "]", newIp.slice(i + 1)].join('');
        }
    }
    return newIp
};