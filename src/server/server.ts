import express = require("express");

export class ApiServer {
    private static app: express.Express | undefined;

    public static start() {
        // Start the API server
        this.app = express();

        // Server setup
        const port = process.env.PORT || 6000;
        this.app.listen(port, () => {
            console.log('Server is running on http://localhost:6000');
        });

        // Routes
        this.app.get('/', (req, res) => { res.send('Hello world!'); });


    }

}