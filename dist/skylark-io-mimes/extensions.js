/**
 * skylark-io-mimes - The skylark mime type utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./mimes","./types"],function(e,t){return e.extenstions={getMimeType:function(e,n){for(var i in t)if(t[i]===e&&(!n||i.startsWith(n)))return i}}});
//# sourceMappingURL=sourcemaps/extensions.js.map
