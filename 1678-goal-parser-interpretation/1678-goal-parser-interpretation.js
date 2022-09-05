/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let newCommand = command
    for (let i = 0; i < command.length; i++) {
        if (newCommand[i] === "(" && newCommand[i + 1] === ")") {
            newCommand = [newCommand.slice(0, i), 'o', newCommand.slice(i + 2)].join('');
        } else if (newCommand[i] === "(" && newCommand[i + 1] === "a") {
            newCommand = [newCommand.slice(0, i), 'al', newCommand.slice(i + 4)].join('');
        }
    }
    return newCommand
};