var pathname = window.location.pathname;
var useragent = navigator.userAgent
AV.init({
    appId: "kIqkgCSnYTpo2l6kGxz9VhHS-gzGzoHsz",
    appKey: "mFbfv7fkRvBconKYzFReExfz",
    serverURL: "https://kiqkgcsn.lc-cn-n1-shared.com"
  });

const IP = AV.Object.extend('IP');
const ip = new IP();

ip.set('ip', returnCitySN["cip"]);
ip.set('cid', returnCitySN["cid"]);
ip.set('city', returnCitySN["cname"]);
ip.set('browser',useragent);
ip.set('path',pathname);

ip.save()