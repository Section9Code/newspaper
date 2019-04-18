import chalk from "chalk";
import cron from "node-cron";

export class CronServer {

    public static start() {
        console.log(chalk.magenta(`- Cron server started`));

        // Jobs
        cron.schedule('* * * * *', () => {
            console.log(chalk.magenta(`- Cron test job`));
        });

    }

}