import { getPoliticians } from "./politicians/politicianProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";
import { getCorps } from "./corps/corpsProvider.js";
import { CorpsList } from "./corps/CorpsList.js";

getPoliticians().then(PoliticiansList)
getCorps().then(CorpsList)