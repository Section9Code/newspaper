import express = require("express");
import chalk from "chalk";

export class ApiServer {
    private static app: express.Express | undefined;

    public static start() {
        // Start the API server
        this.app = express();

        // Server setup
        const port = process.env.PORT || 6000;
        this.app.listen(port, () => {
            console.log(chalk.yellow(`- API server is running on http://localhost:${port}`));
        });

        // Routes
        this.app.get('/', (req, res) => { res.send('Hello world!'); });


    }

}