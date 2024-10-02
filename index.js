import express from "express";
import { CronJob } from "cron";
import axios from "axios";

const app = express();

app.get("/", (req, res) => {
  res.json("Cron Job Server is running");
});

// Define the task function
const task = async () => {
  await axios.get("https://chathubserver-cgut.onrender.com");
};

// Create the cron job, running every 20 minutes
const job = new CronJob("0 */5 * * * *", task);

// Start the job
job.start();
app.listen(3000, () => {
  console.log(`Server is running on 3000 Port`);
});
