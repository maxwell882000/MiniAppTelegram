import {config} from "../../../config";

export default async function submitComment(data) {
    await fetch(config.domain + "/add_comment", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}