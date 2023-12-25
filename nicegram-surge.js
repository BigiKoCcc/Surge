let url = $request.url;
let body = JSON.parse($response.body);

const subscriptionTest = /https:\/\/nicegram\.cloud\/api\/v\d\/user\/info/;
const premiumTest = /https:\/\/restore-access\.indream\.app\/restoreAccess/;

if (subscriptionTest.test(url)) {
    body.data.user = {
        ...body.data.user,
        subscription: true,
        store_subscription: true,
        lifetime_subscription: true
    };
}

if (premiumTest.test(url)) {
    body["data"] = { "premiumAccess": true };
}

$done({ body: JSON.stringify(body) });
