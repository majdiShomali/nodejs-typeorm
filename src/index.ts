import app from './app';
import { myDataSource } from "./app-data-source";

// Load environment variables from .env file
import { config } from 'dotenv';
config();

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// start express server
const PORT = process.env.PORT || 3000; // Default port to 3000 if not specified in .env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
