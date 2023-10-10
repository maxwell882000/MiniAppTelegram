import {config} from "../../../config";

export default async function getPerson(userId) {
    const response = await fetch(config.domain + "/people/" + userId);
    return response.json();
}
