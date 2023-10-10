import {config} from "../../../config";

export default async function getPeople() {
    const response = await fetch(config.domain + "/people");
    return response.json();
}