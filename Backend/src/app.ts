import express from "express";
import cors from "cors";
import campaignRoutes from "./6-routes/campaign-routes";
import routeNotFound from "./3-middleware/router-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", campaignRoutes);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));