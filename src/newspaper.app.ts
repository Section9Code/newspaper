import express = require("express");
import { ApiServer } from "./server/server";

export class NewsPaperApp {
    
    // Main entry point, the promise is never resolved so the application will run forever
    public static start(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            // Start up the api
            ApiServer.start();
        });
    }


}