let url = $request.url;
let headers = $request.headers;

const mapping = {'%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'Aphrodite': ['all'],
  'apollo': ['all'],
  'widget_art': ['all'],
  'OneBox': ['all'],
  'Spark': ['premium'],
  'Pillow': ['premium'],
  '1Blocker': ['premium'],
  'VSCO': ['membership'],
  'UTC': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
  'OffScreen': ['Entitlement.Pro'],
  'ScannerPro': ['plus'],
  'WhiteCloud': ['allaccess'],
  'HTTPBot': ['pro'],
  'audiomack': ['Premium1'],
  'server_bee': ['Pro'],
  'simple-': ['patron'],
  'streaks': ['patron'],
  'andyworks-calculator': ['patron'],
  'vibes': ['patron'],
  'CountDuck': ['premium', 'Lifetime'],
  'IPTVUltra': ['premium'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'ChatGPTApp': ['Advanced'],
  'APTV': ['pro'],
  'TouchRetouchBasic': ['premium'],
  'My%20Jump%20Lab': ['lifetime'],
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
  'Paku': ['pro'],
  'Awesome%20Habits': ['premium'],
  'Gear': ['pro', 'com.gear.app.yearly'],
  'MoneyThings': ['Premium'],
  'Anybox': ['pro'],
  'Fileball': ['filebox_pro'],
  'Noto': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'WidgetSmith': ['Premium'],
  'Percento': ['premium'],
  'Planny': ['premium'],
  'CPUMonitor': ['Pro'],
  'Locket': ['Gold'],
  'My%20Tim': ['Pro'],
  'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'Fin': ['premium', 'com.circles.fin.premium.yearly'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'One4Wall': ['lifetime', 'lifetime_key'],
  'OneWidget': ['allaccess'],
  'CardPhoto': ['premium'],
  'PDF%20Viewer': ['sub.pro'],
  'PhotoRoom': ['business'],
  'Decision': ['com.nixwang.decision.entitlements.pro'],
  'Tangerine': ['Premium'],
  'PastePal': ['premium'],
  'Airmail': ['Airmail Premium'],
  'Stress': ['StressWatch Pro'],
  'PinPaper': ['allaccess'],
  'Echo': ['PLUS'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  'Overdue': ['Pro'],
  'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
  'Spektr': ['premium'],
  'MusicMate': ['premium','mm_lifetime_68_premium'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  'Tasks': ['Pro'],
  'Currency': ['plus'],
  'money_manager': ['premium'],
  'fastdiet': ['premium'],
  'Blurer': ['paid_access'],
  'Everlog': ['premium'],
  'reader': ['vip2','com.valo.reader.vip2.year'],
  'G%20E%20I%20S%20T': ['memorado_premium'],
  'Email%20Me': ['premium'],
  'Alpenglow': ['newPro'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters']
};

let ua = headers["User-Agent"] || headers["user-agent"];
let cuttlefish = {Attention:"恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！",request_date_ms:1662599120248,request_date:"2022-09-08T01:05:20Z",subscriber:{non_subscriptions:{},first_seen:"2022-09-08T01:04:03Z",original_application_version:"8",other_purchases:{},management_url:"https://apps.apple.com/account/subscriptions",subscriptions:{},entitlements:{},original_purchase_date:"2022-09-07T13:05:43Z",original_app_user_id:"$RCAnonymousID:ddgksf2013",last_seen:"2022-09-08T01:04:03Z"}
};
let ddgksf2013 = {is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2022-09-08T01:04:18Z",purchase_date:"2022-09-08T01:04:17Z",store:"app_store"
};
let ddgksf2021 = {grace_period_expires_date:null,purchase_date:"2022-09-08T01:04:17Z",product_identifier:"ddgksf2013_1y_128",expires_date:"2099-12-18T01:04:17Z"
};

let obj = JSON.parse(JSON.stringify(cuttlefish));
ddgksf2021.product_identifier = "com.ddgksf2013.premium.yearly";
obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013;

const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  if (s) {
    ddgksf2021.product_identifier = s;
    obj.subscriber.subscriptions[s] = ddgksf2013;
  }
  obj.subscriber.entitlements[e] = ddgksf2021;
} else {
  obj.subscriber.entitlements.pro = ddgksf2021;
}

$done({body: JSON.stringify(obj)});