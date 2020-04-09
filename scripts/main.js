import { getPoliticians } from "./politicians/politicianProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";

getPoliticians().then(PoliticiansList)