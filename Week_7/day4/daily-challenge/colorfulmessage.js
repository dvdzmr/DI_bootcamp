import chalk from 'chalk';


function colorfulmessage(message)
{
    return chalk.red(message, chalk.underline.bgBlue('bluueee') + '!');
}


module.exports = colorfulmessage;