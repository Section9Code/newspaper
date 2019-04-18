
import chalk from 'chalk';
import { NewsPaperApp } from './newspaper.app';

console.log(chalk.blue('Starting NewsPaper server'));

(async () => {
    await NewsPaperApp.start();
})();