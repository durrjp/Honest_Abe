import { getPoliticians } from "./politicians/politicianProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";
import { getCorps } from "./corps/corpsProvider.js";
import { CorpsList } from "./corps/CorpsList.js";
import { getPACs } from "./pacs/PACProvider.js";
import { getCorpDonations } from "./corps/corpDonationProvider.js";
import { PACList } from "./pacs/PACList.js";

getPoliticians().then(PoliticiansList)
getCorps().then(CorpsList)
getPACs().then(getCorpDonations).then(PACList)