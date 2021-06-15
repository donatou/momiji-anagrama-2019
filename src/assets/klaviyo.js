(function () {
  var companyId = 'XJJwE2';

  if (window.klaviyoModulesObject) {
    console.warn('Cannot load klaviyo.js multiple times for the same site. Skipping account "' + companyId + '". Active account is "' + window.klaviyoModulesObject.companyId + '"');
    return;
  };

  window._learnq = window._learnq || [];
  window.__klKey = window.__klKey || companyId;
  window._learnq.push(['account', companyId]);

  Object.defineProperty(window, 'klaviyoModulesObject', {
    value: { companyId: companyId, loadTime: new Date() },
    enumerable: false,
  });

  var loadedAssets = {};
  function addScript(asset) {
    if (loadedAssets[asset]) return;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = asset;
    document.head.appendChild(s);
    loadedAssets[asset] = true;
  }
  function addCSS(asset) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = asset;
    document.head.appendChild(link);
  }

  var manifest = { 'static': { 'js': ['https://static.klaviyo.com/onsite/js/fender_analytics.8b77e020946079de7f03.js', 'https://static.klaviyo.com/onsite/js/sharedUtils.ff79bf923e79d7911102.js', 'https://static.klaviyo.com/onsite/js/static.6e296886f1ac20d7e96b.js'] }, 'signup_forms': { 'js': ['https://static.klaviyo.com/onsite/js/sharedUtils.ff79bf923e79d7911102.js', 'https://static.klaviyo.com/onsite/js/styles.e4cca842c10ad5df6926.js', 'https://static.klaviyo.com/onsite/js/sentry.e9c13b4f41b96aec7b8a.js', 'https://static.klaviyo.com/onsite/js/vendors~signup_forms.aab12e2eb052364d5a0f.js', 'https://static.klaviyo.com/onsite/js/signup_forms.36815d68823292a0e7a5.js'], 'css': 'https://static.klaviyo.com/onsite/js/1.f492a3d1ada3f6002e9a.css' } };
  for (var key in manifest) {
    if (manifest.hasOwnProperty(key)) {
      var onsiteModule = manifest[key];
      for (var i = 0; i < onsiteModule.js.length; i += 1) {
        addScript(onsiteModule.js[i]);
      }
      if (onsiteModule.css) {
        addCSS(onsiteModule.css);
      }
    }
  }
})();