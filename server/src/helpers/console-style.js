import chalk from "chalk";

export const errorMessage = message => {
    console.log(chalk.red.bold(message));
}

export const logMessage = message => {
    console.log(chalk.cyan.underline(message));
}

export const customLog = (message, styles) => {
    let customMessage = chalk;
    styles.forEach(element => {
        customMessage = customMessage[element]
    });
    console.log(customMessage(message));
}