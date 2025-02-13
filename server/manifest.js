const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BQUJCmgM.js",app:"_app/immutable/entry/app.DqpYtbet.js",imports:["_app/immutable/entry/start.BQUJCmgM.js","_app/immutable/chunks/DbYbgSu2.js","_app/immutable/chunks/CX3XtTU6.js","_app/immutable/chunks/CqKA64fN.js","_app/immutable/entry/app.DqpYtbet.js","_app/immutable/chunks/CX3XtTU6.js","_app/immutable/chunks/B_gIoMCn.js","_app/immutable/chunks/DdsUV1K4.js","_app/immutable/chunks/Cmp5xY1S.js","_app/immutable/chunks/CqKA64fN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-w8XJ_JJB.js')),
			__memo(() => import('./chunks/1-tFbR1Vi_.js')),
			__memo(() => import('./chunks/2-BJBq7hvk.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
