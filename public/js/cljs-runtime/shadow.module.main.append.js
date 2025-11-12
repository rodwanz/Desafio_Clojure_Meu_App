
shadow.cljs.devtools.client.env.module_loaded('main');

try { front_app.core.init(); } catch (e) { console.error("An error occurred when calling (front-app.core/init)"); console.error(e); }