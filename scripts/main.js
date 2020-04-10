import { getPoliticians } from "./politicians/politicianProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";
import { getCorps } from "./corps/corpsProvider.js";
import { CorpsList } from "./corps/CorpsList.js";
import { getPACs } from "./pacs/PACProvider.js";
import { getCorpDonations } from "./corps/corpDonationProvider.js";
import { PACList } from "./pacs/PACList.js";
import { getpacDonations } from "./pacs/pacDonoProvider.js";

getPoliticians()
    .then(getpacDonations)
    .then(getCorps)
    .then(getPACs)
    .then(getCorpDonations)
    .then(CorpsList)
    .then(PACList)
    .then(PoliticiansList)