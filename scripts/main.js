import { getPoliticians } from "./politicians/politicianProvider.js";
import { PoliticiansList } from "./politicians/PoliticiansList.js";
import { getCorps } from "./corps/corpsProvider.js";
import { CorpsList } from "./corps/CorpsList.js";
import { getPACs } from "./pacs/PACProvider.js";
import { getCorpDonations } from "./corps/corpDonationProvider.js";
import { PACList } from "./pacs/PACList.js";
import { getpacDonations } from "./pacs/pacDonoProvider.js";
import { getBills } from "./bills/billsProvider.js";
import { getCorpInterests } from "./corps/corpInterestsProvider.js";
import { getPoliticianBills } from "./politicians/politicianBillProvider.js";
import { getInterests } from "./interests/interestsProvider.js";

const promise = Promise.all([
    getPoliticians(),
    getpacDonations(),
    getCorps(),
    getPACs(),
    getCorpDonations(),
    getBills(),
    getCorpInterests(),
    getPoliticianBills(),
    getInterests(),
])
promise.then(() => {
    CorpsList()
    PACList()
    PoliticiansList()
})