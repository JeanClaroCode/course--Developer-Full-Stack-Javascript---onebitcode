import "core-js";
import "regenerator-runtime/runtime";

import SentryObjects from "./sentry";
import { getSentryNeo } from "./sentry_service"

async function loadSentry(){
    let sentryList = []
    let sentryJSON = await getSentryNeo();
    sentryJSON.forEach(sentry => {
        const newSentryNeo = new SentryObjects(sentry.fullname, sentry.sentryId, sentry.year_range_min, sentry.year_range_max)
        console.log(newSentryNeo)
        sentryList.push(newSentryNeo)
    });
    renderSentry(sentryList)
}


function renderSentry(newSentryNeo) {
    const ulElement = document.getElementById("sentry-list");

    newSentryNeo.forEach(sentryNeo => {
        const liElement = document.createElement("li");
        const liText = `(${sentryNeo.sentryid}) ${sentryNeo.name}: risco de colisão entre ${sentryNeo.minimumYears} e ${sentryNeo.maximumYears}`
        liElement.innerText = liText;
        ulElement.appendChild(liElement);
    });
}

loadSentry()