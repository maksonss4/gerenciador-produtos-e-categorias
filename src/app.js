import express from "express";
import "dotenv/config";
import { routeCategories, routeProducts } from "./routes/routes";
import { startDatabase } from "./database";

const app = express();
app.use(express.json());
app.use("", routeCategories);
app.use("", routeProducts);

const PORT = process.env.PORT || 3000;

export default app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
  startDatabase();
});
