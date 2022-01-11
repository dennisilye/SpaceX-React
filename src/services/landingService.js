import { storageService } from './storageService.js'
import axios from "axios";

export const landingService = {
    query,
    getLandingById,

}

const STORAGE_KEY = 'landings'


var gLandings = _loadLandings()

async function query(filterBy) {
    let landingsToReturn = await gLandings;
    if (filterBy) {
        landingsToReturn = landingsToReturn.filter(landing => landing.success === true)
    }
    console.log(landingsToReturn);
    return Promise.resolve(landingsToReturn);
}

async function getLandingById(id) {
    console.log(gLandings);
    const landings = await gLandings
    const landing = await landings.find(landing => landing.id === id)
    return Promise.resolve({ ...landing })
}


async function fecthData() {
    return await axios.get("https://api.spacexdata.com/v4/launches")
};

async function _loadLandings() {
    let landings = storageService.load(STORAGE_KEY)
    if (!landings || !landings.length) landings = await fecthData().then((dataApi) => dataApi.data.slice(0, 20));
    storageService.store(STORAGE_KEY, landings)
    return landings
}

