var roscopterlib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14),
	__webpack_require__(1),
	__webpack_require__(101),
	__webpack_require__(32),
	__webpack_require__(59),
	__webpack_require__(61),
	__webpack_require__(29),
	__webpack_require__(26),
	__webpack_require__(102),
	__webpack_require__(28),
	__webpack_require__(60),
	__webpack_require__(100),
	__webpack_require__(8),
	__webpack_require__(36)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr, document, getProto, slice, concat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, DOMEval ) {

"use strict";

var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return window.document;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(97) ], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(38),

	__webpack_require__(57)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rsingleTag ) {

"use strict";

// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );

return init;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(47)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
	"use strict";

	return new Data();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};

return nodeName;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://html.spec.whatwg.org/multipage/infrastructure.html#space-character
	return ( /[^\x20\t\r\n\f]+/g );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};

return access;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// All support tests are defined in their respective modules.
	return {};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(6),
	__webpack_require__(70),
	__webpack_require__(33),
	__webpack_require__(34),

	__webpack_require__(3),
	__webpack_require__(68),
	__webpack_require__(24),
	__webpack_require__(10),
	__webpack_require__(56) // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rnothtmlwhite, location, nonce, rquery ) {

"use strict";

var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(32),
	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, slice ) {

"use strict";

function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(27),
	__webpack_require__(6),
	__webpack_require__(32),
	__webpack_require__(4),
	__webpack_require__(5),

	__webpack_require__(3),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, documentElement, rnothtmlwhite, slice, dataPriv, nodeName ) {

"use strict";

var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(29),
	__webpack_require__(98),
	__webpack_require__(99),
	__webpack_require__(58),
	__webpack_require__(5),

	__webpack_require__(3),
	__webpack_require__(57),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, dir, siblings, rneedsContext, nodeName ) {

"use strict";

var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(30),
	__webpack_require__(7),
	__webpack_require__(45),
	__webpack_require__(1),
	__webpack_require__(31),
	__webpack_require__(21),
	__webpack_require__(42),
	__webpack_require__(43),
	__webpack_require__(46),
	__webpack_require__(41),
	__webpack_require__(40),
	__webpack_require__(39),
	__webpack_require__(20),

	__webpack_require__(3),
	__webpack_require__(37),
	__webpack_require__(2) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, pnum, access, rmargin, document, rcssNum, rnumnonpx, cssExpand,
	getStyles, swap, curCSS, adjustCSS, addGetHookIf, support ) {

"use strict";

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return [];
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(59),
	__webpack_require__(61),
	__webpack_require__(7),
	__webpack_require__(52),
	__webpack_require__(54),
	__webpack_require__(53),
	__webpack_require__(55),
	__webpack_require__(50),
	__webpack_require__(51),
	__webpack_require__(49),
	__webpack_require__(94),

	__webpack_require__(4),
	__webpack_require__(48),
	__webpack_require__(22),
	__webpack_require__(36),
	__webpack_require__(5),

	__webpack_require__(3),
	__webpack_require__(12),
	__webpack_require__(2),
	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, concat, push, access,
	rcheckableType, rtagName, rscriptType,
	wrapMap, getAll, setGlobalEval, buildFragment, support,
	dataPriv, dataUser, acceptData, DOMEval, nodeName ) {

"use strict";

var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(12),
	__webpack_require__(18),
	__webpack_require__(10),
	__webpack_require__(82),
	__webpack_require__(37),
	__webpack_require__(81),
	__webpack_require__(25),
	__webpack_require__(96),
	__webpack_require__(72),
	__webpack_require__(11),
	__webpack_require__(88),
	__webpack_require__(89),
	__webpack_require__(15),
	__webpack_require__(93),
	__webpack_require__(103),
	__webpack_require__(13),
	__webpack_require__(79),
	__webpack_require__(56),
	__webpack_require__(9),
	__webpack_require__(71),
	__webpack_require__(69),
	__webpack_require__(66),
	__webpack_require__(67),
	__webpack_require__(87),
	__webpack_require__(23),
	__webpack_require__(86),
	__webpack_require__(95),
	__webpack_require__(84),
	__webpack_require__(83),
	__webpack_require__(91),
	__webpack_require__(92)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

return jQuery;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnothtmlwhite ) {

"use strict";

// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(27),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, documentElement, support ) {

"use strict";

( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(30)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(31),
	__webpack_require__(6),
	__webpack_require__(42),
	__webpack_require__(44),
	__webpack_require__(46),
	__webpack_require__(40),
	__webpack_require__(4),
	__webpack_require__(80),

	__webpack_require__(3),
	__webpack_require__(25),
	__webpack_require__(10),
	__webpack_require__(12),
	__webpack_require__(15),
	__webpack_require__(13),
	__webpack_require__(85)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rcssNum, rnothtmlwhite, cssExpand, isHiddenWithinTree, swap,
	adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(4),
	__webpack_require__(22),
	__webpack_require__(28),

	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, dataPriv, acceptData, hasOwn ) {

"use strict";

var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(4),
	__webpack_require__(10),
	__webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// [[Class]] -> type pairs
	return {};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document ) {
	"use strict";

	return document.documentElement;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
	"use strict";

	return class2type.hasOwnProperty;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.indexOf;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(30)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.slice;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	return jQuery.now();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /\?/ );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(17),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, support ) {

"use strict";

var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document ) {
	"use strict";

	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(77),
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document ) {

"use strict";

// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}

return addGetHookIf;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(31)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rcssNum ) {

"use strict";

function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}

return adjustCSS;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(21),
	__webpack_require__(45),
	__webpack_require__(43),
	__webpack_require__(20),
	__webpack_require__(2) // Get jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnumnonpx, rmargin, getStyles, support ) {

"use strict";

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return [ "Top", "Right", "Bottom", "Left" ];
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2)

	// css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
	// through the CSS cascade), which is useful in deciding whether or not to make it visible.
	// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
	// * A hidden ancestor does not force an element to be classified as hidden.
	// * Being disconnected from the document does not force an element to be classified as hidden.
	// These differences improve the behavior of .toggle() et al. when applied to elements that are
	// detached or contained within hidden ancestors (gh-2404, gh-2863).
	return function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^margin/ );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

// A method for quickly swapping in/out CSS properties to get correct calculations.
return function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(6),
	__webpack_require__(22)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnothtmlwhite, acceptData ) {

"use strict";

function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};

return Data;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(47)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
	"use strict";

	return new Data();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(54),
	__webpack_require__(53),
	__webpack_require__(55),
	__webpack_require__(50),
	__webpack_require__(51)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

"use strict";

var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, nodeName ) {

"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}

return getAll;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(4)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( dataPriv ) {

"use strict";

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /^$|\/(?:java|ecma)script/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

return wrapMap;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(52),
	__webpack_require__(3),
	__webpack_require__(12), // filter
	__webpack_require__(35)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rcheckableType ) {

"use strict";

var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(29),
	__webpack_require__(58),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, rneedsContext ) {

"use strict";

var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	"use strict";

	return jQuery.expr.match.needsContext;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.concat;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(28)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( hasOwn ) {
	"use strict";

	return hasOwn.toString;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
	"use strict";

	return arr.push;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function(n){function p(n,p){if(n.length>1){for(var z={},y=0;y<p.length;y++)z[p[y]]=n[y];return z}return 1==n.length?n[0]:{}}var z={count:16,width:24,height:24,stage_classifier:[{count:4,threshold:-4.57753,feature:[{size:4,px:[3,5,8,11],py:[2,2,6,3],pz:[2,1,1,0],nx:[8,4,0,0],ny:[4,4,0,0],nz:[1,1,-1,-1]},{size:3,px:[3,6,7],py:[7,13,0],pz:[1,0,-1],nx:[2,3,4],ny:[5,4,4],nz:[2,1,1]},{size:5,px:[5,3,10,13,11],py:[1,0,3,2,2],pz:[1,2,0,0,0],nx:[0,11,0,11,11],ny:[0,2,3,1,1],nz:[1,1,0,1,-1]},{size:5,px:[6,12,12,9,12],py:[4,13,12,7,11],pz:[1,0,0,1,0],nx:[8,0,8,2,11],ny:[4,0,8,5,1],nz:[1,-1,-1,-1,-1]}],alpha:[-2.879683,2.879683,-1.569341,1.569341,-1.286131,1.286131,-1.157626,1.157626]},{count:4,threshold:-4.339908,feature:[{size:5,px:[13,12,3,11,17],py:[3,3,1,4,13],pz:[0,0,2,0,0],nx:[4,3,8,15,15],ny:[4,5,4,8,8],nz:[1,2,1,0,-1]},{size:5,px:[6,7,6,3,3],py:[13,13,4,2,7],pz:[0,0,1,2,1],nx:[4,8,3,0,15],ny:[4,4,4,3,8],nz:[1,1,-1,-1,-1]},{size:3,px:[2,2,11],py:[3,2,5],pz:[2,2,0],nx:[3,8,3],ny:[4,4,4],nz:[1,-1,-1]},{size:5,px:[15,13,9,11,7],py:[2,1,2,1,0],pz:[0,0,0,0,1],nx:[23,11,23,22,23],ny:[1,0,2,0,0],nz:[0,1,0,0,0]}],alpha:[-2.466029,2.466029,-1.83951,1.83951,-1.060559,1.060559,-1.094927,1.094927]},{count:7,threshold:-5.052474,feature:[{size:5,px:[17,13,3,11,10],py:[13,2,1,4,3],pz:[0,0,2,0,0],nx:[4,8,8,3,7],ny:[2,8,4,5,4],nz:[2,0,1,2,1]},{size:5,px:[6,7,3,6,6],py:[4,12,2,13,14],pz:[1,0,2,0,0],nx:[8,3,4,4,3],ny:[4,4,2,0,2],nz:[1,1,-1,-1,-1]},{size:5,px:[7,4,5,3,3],py:[2,1,3,1,1],pz:[0,1,0,1,-1],nx:[1,0,1,1,0],ny:[1,3,2,0,4],nz:[0,0,0,0,0]},{size:5,px:[11,11,11,3,2],py:[11,13,10,7,2],pz:[0,0,0,1,2],nx:[4,1,8,2,0],ny:[4,1,12,0,4],nz:[1,-1,-1,-1,-1]},{size:3,px:[9,13,1],py:[7,19,4],pz:[1,-1,-1],nx:[4,7,4],ny:[5,8,2],nz:[2,1,2]},{size:5,px:[12,8,16,4,4],py:[12,1,2,0,0],pz:[0,1,0,2,-1],nx:[11,22,11,23,23],ny:[2,0,1,1,5],nz:[1,0,1,0,0]},{size:3,px:[11,17,17],py:[6,11,12],pz:[0,0,0],nx:[15,1,11],ny:[9,1,1],nz:[0,-1,-1]}],alpha:[-2.15689,2.15689,-1.718246,1.718246,-.9651329,.9651329,-.994809,.994809,-.8802466,.8802466,-.8486741,.8486741,-.8141777,.8141777]},{count:13,threshold:-5.7744,feature:[{size:5,px:[6,10,3,12,14],py:[5,3,1,2,2],pz:[1,0,2,0,0],nx:[3,4,14,8,4],ny:[5,4,8,4,2],nz:[2,1,0,1,2]},{size:5,px:[10,6,11,5,12],py:[4,13,4,2,4],pz:[0,0,0,1,0],nx:[1,4,8,1,1],ny:[2,4,4,4,3],nz:[0,1,1,0,0]},{size:3,px:[18,6,12],py:[12,4,8],pz:[0,1,0],nx:[7,4,8],ny:[4,2,4],nz:[1,-1,-1]},{size:5,px:[7,5,6,3,17],py:[13,12,3,8,13],pz:[0,0,1,1,0],nx:[3,3,0,1,8],ny:[4,5,5,10,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[16,7,16,7,7],py:[1,1,2,0,0],pz:[0,1,0,1,-1],nx:[23,23,23,11,5],ny:[2,14,1,2,1],nz:[0,0,0,1,2]},{size:3,px:[9,18,16],py:[7,14,2],pz:[1,0,-1],nx:[8,4,9],ny:[10,2,4],nz:[1,2,1]},{size:4,px:[3,16,1,22],py:[7,4,5,11],pz:[1,-1,-1,-1],nx:[3,9,4,2],ny:[4,9,7,5],nz:[1,0,1,2]},{size:5,px:[4,7,8,8,9],py:[0,2,2,1,1],pz:[1,0,0,0,0],nx:[0,0,1,0,0],ny:[15,16,19,0,14],nz:[0,0,0,1,0]},{size:5,px:[4,4,7,8,12],py:[2,5,6,7,10],pz:[2,2,1,1,0],nx:[8,5,10,0,0],ny:[4,2,5,3,14],nz:[1,-1,-1,-1,-1]},{size:2,px:[11,0],py:[13,4],pz:[0,-1],nx:[3,14],ny:[4,16],nz:[1,0]},{size:5,px:[17,8,18,4,4],py:[3,1,3,0,0],pz:[0,1,0,2,-1],nx:[21,22,5,11,22],ny:[0,1,0,1,2],nz:[0,0,2,1,0]},{size:4,px:[7,8,2,11],py:[13,12,2,7],pz:[0,0,2,0],nx:[4,0,23,3],ny:[4,1,1,11],nz:[1,-1,-1,-1]},{size:5,px:[4,18,8,9,15],py:[4,16,7,7,23],pz:[2,0,1,1,0],nx:[0,1,1,1,1],ny:[10,21,23,22,22],nz:[1,0,0,0,-1]}],alpha:[-1.956565,1.956565,-1.262438,1.262438,-1.056941,1.056941,-.9712509,.9712509,-.8261028,.8261028,-.8456506,.8456506,-.6652113,.6652113,-.6026287,.6026287,-.6915425,.6915425,-.5539286,.5539286,-.5515072,.5515072,-.6685884,.6685884,-.465607,.465607]},{count:20,threshold:-5.606853,feature:[{size:5,px:[17,11,6,14,9],py:[13,4,4,3,3],pz:[0,0,1,0,0],nx:[14,4,8,7,8],ny:[8,4,4,4,8],nz:[0,1,1,1,0]},{size:5,px:[3,9,10,11,11],py:[7,2,2,3,3],pz:[1,0,0,0,-1],nx:[3,8,4,2,5],ny:[4,4,10,2,8],nz:[1,1,1,2,1]},{size:5,px:[12,12,12,5,12],py:[12,9,10,12,11],pz:[0,0,0,0,0],nx:[0,0,0,0,0],ny:[2,1,3,0,0],nz:[0,0,0,0,-1]},{size:5,px:[9,18,9,9,12],py:[7,14,19,5,11],pz:[1,-1,-1,-1,-1],nx:[23,4,23,23,8],ny:[13,5,14,16,4],nz:[0,2,0,0,1]},{size:5,px:[12,12,12,6,1],py:[13,11,12,6,5],pz:[0,0,0,-1,-1],nx:[4,6,8,4,9],ny:[2,8,4,4,4],nz:[2,1,1,1,1]},{size:4,px:[12,11,11,6],py:[5,5,6,13],pz:[0,0,0,0],nx:[8,3,2,8],ny:[4,4,17,2],nz:[1,1,-1,-1]},{size:5,px:[3,14,12,15,13],py:[0,2,2,2,2],pz:[2,0,0,0,0],nx:[22,23,22,23,7],ny:[0,3,1,2,4],nz:[0,0,0,0,1]},{size:5,px:[16,15,18,19,9],py:[12,11,12,12,9],pz:[0,0,0,0,1],nx:[8,2,22,23,21],ny:[4,1,1,2,20],nz:[1,-1,-1,-1,-1]},{size:3,px:[4,7,7],py:[0,2,2],pz:[1,0,-1],nx:[1,2,2],ny:[2,0,2],nz:[1,0,0]},{size:3,px:[4,11,11],py:[6,9,8],pz:[1,0,0],nx:[9,2,8],ny:[9,4,5],nz:[0,-1,-1]},{size:4,px:[2,7,6,6],py:[4,23,21,22],pz:[2,0,0,0],nx:[9,3,8,17],ny:[21,2,5,1],nz:[0,-1,-1,-1]},{size:2,px:[2,8],py:[4,12],pz:[2,0],nx:[3,0],ny:[4,4],nz:[1,-1]},{size:5,px:[4,5,1,8,4],py:[15,12,3,23,12],pz:[0,0,2,0,0],nx:[0,0,0,0,0],ny:[23,10,22,21,11],nz:[0,1,0,0,-1]},{size:2,px:[21,5],py:[13,4],pz:[0,2],nx:[23,4],ny:[23,5],nz:[0,-1]},{size:2,px:[15,17],py:[2,3],pz:[0,0],nx:[19,20],ny:[2,1],nz:[0,0]},{size:5,px:[12,1,8,17,4],py:[14,2,13,6,12],pz:[0,-1,-1,-1,-1],nx:[8,13,15,15,7],ny:[10,9,15,14,8],nz:[1,0,0,0,1]},{size:2,px:[8,5],py:[7,4],pz:[1,-1],nx:[4,13],ny:[2,21],nz:[2,0]},{size:2,px:[3,4],py:[7,0],pz:[1,-1],nx:[4,2],ny:[7,5],nz:[1,2]},{size:4,px:[4,14,3,11],py:[3,23,2,5],pz:[2,0,2,0],nx:[7,8,2,16],ny:[8,0,1,15],nz:[0,-1,-1,-1]},{size:2,px:[9,8],py:[0,0],pz:[0,0],nx:[2,2],ny:[3,5],nz:[2,2]}],alpha:[-1.95797,1.95797,-1.225984,1.225984,-.8310246,.8310246,-.8315741,.8315741,-.7973616,.7973616,-.7661959,.7661959,-.6042118,.6042118,-.6506833,.6506833,-.4808219,.4808219,-.6079504,.6079504,-.5163994,.5163994,-.5268142,.5268142,-.4935685,.4935685,-.4427544,.4427544,-.4053949,.4053949,-.4701274,.4701274,-.4387648,.4387648,-.4305499,.4305499,-.4042607,.4042607,-.4372088,.4372088]},{count:22,threshold:-5.679317,feature:[{size:5,px:[11,3,17,14,13],py:[4,0,13,2,3],pz:[0,2,0,0,0],nx:[7,4,14,23,11],ny:[8,4,8,4,0],nz:[1,1,0,0,1]},{size:5,px:[7,12,6,12,12],py:[12,8,3,10,9],pz:[0,0,1,0,0],nx:[4,9,8,15,15],ny:[4,8,4,8,8],nz:[1,0,1,0,-1]},{size:3,px:[4,2,10],py:[1,4,1],pz:[1,2,0],nx:[2,3,8],ny:[5,4,4],nz:[2,1,-1]},{size:5,px:[3,17,6,6,16],py:[2,12,4,14,12],pz:[2,0,1,0,0],nx:[8,3,7,5,15],ny:[4,4,4,4,8],nz:[1,1,-1,-1,-1]},{size:5,px:[5,6,7,4,8],py:[3,3,3,1,3],pz:[0,0,0,1,0],nx:[0,0,0,0,1],ny:[5,4,3,2,0],nz:[0,0,0,0,0]},{size:3,px:[18,9,0],py:[14,7,0],pz:[0,1,-1],nx:[8,14,8],ny:[10,9,4],nz:[1,0,1]},{size:2,px:[9,5],py:[18,13],pz:[0,0],nx:[10,3],ny:[16,4],nz:[0,-1]},{size:5,px:[11,11,11,11,6],py:[10,12,11,13,6],pz:[0,0,0,0,-1],nx:[5,21,22,22,22],ny:[4,22,17,19,18],nz:[2,0,0,0,0]},{size:4,px:[8,9,15,4],py:[7,7,23,4],pz:[1,1,0,2],nx:[8,5,0,3],ny:[4,18,4,9],nz:[1,-1,-1,-1]},{size:5,px:[11,10,12,11,11],py:[4,4,4,5,5],pz:[0,0,0,0,-1],nx:[4,6,8,2,8],ny:[4,9,9,2,4],nz:[1,1,0,2,1]},{size:5,px:[2,2,3,3,4],py:[10,9,14,13,15],pz:[1,1,0,0,0],nx:[0,0,0,0,0],ny:[5,9,10,19,18],nz:[2,1,1,0,-1]},{size:2,px:[11,11],py:[13,12],pz:[0,0],nx:[9,2],ny:[15,2],nz:[0,-1]},{size:5,px:[2,4,3,3,4],py:[5,11,6,9,12],pz:[1,0,1,0,0],nx:[6,2,11,11,0],ny:[9,1,5,20,18],nz:[0,-1,-1,-1,-1]},{size:5,px:[18,9,17,19,16],py:[2,0,2,2,1],pz:[0,1,0,0,0],nx:[22,23,11,23,23],ny:[0,2,0,1,1],nz:[0,0,1,0,-1]},{size:5,px:[5,5,6,7,6],py:[17,16,15,23,22],pz:[0,0,0,0,0],nx:[7,6,2,5,23],ny:[8,1,2,3,1],nz:[0,-1,-1,-1,-1]},{size:5,px:[12,12,11,10,6],py:[14,13,18,4,22],pz:[0,-1,-1,-1,-1],nx:[3,2,4,1,2],ny:[19,4,23,13,16],nz:[0,0,0,0,0]},{size:4,px:[11,16,11,17],py:[7,11,8,12],pz:[0,0,0,0],nx:[7,14,10,4],ny:[4,7,10,4],nz:[1,0,-1,-1]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[4,2],ny:[10,2],nz:[1,-1]},{size:2,px:[3,9],py:[0,1],pz:[1,0],nx:[4,5],ny:[1,0],nz:[0,0]},{size:2,px:[14,16],py:[3,3],pz:[0,0],nx:[9,14],ny:[4,21],nz:[1,0]},{size:2,px:[9,1],py:[7,1],pz:[1,-1],nx:[8,9],ny:[7,4],nz:[1,1]},{size:2,px:[1,0],py:[8,3],pz:[0,2],nx:[20,0],ny:[3,3],nz:[0,-1]}],alpha:[-1.581077,1.581077,-1.389689,1.389689,-.8733094,.8733094,-.8525177,.8525177,-.7416304,.7416304,-.6609002,.6609002,-.7119043,.7119043,-.6204438,.6204438,-.6638519,.6638519,-.5518876,.5518876,-.4898991,.4898991,-.5508243,.5508243,-.4635525,.4635525,-.5163159,.5163159,-.4495338,.4495338,-.4515036,.4515036,-.5130473,.5130473,-.4694233,.4694233,-.4022514,.4022514,-.405569,.405569,-.4151817,.4151817,-.3352302,.3352302]},{count:32,threshold:-5.363782,feature:[{size:5,px:[12,9,6,8,14],py:[4,2,13,3,3],pz:[0,0,0,0,0],nx:[0,15,0,9,5],ny:[2,7,3,8,8],nz:[0,0,0,0,1]},{size:5,px:[13,16,3,6,11],py:[3,13,1,4,3],pz:[0,0,2,1,0],nx:[7,4,8,14,14],ny:[4,4,4,8,8],nz:[1,1,1,0,-1]},{size:5,px:[10,19,18,19,19],py:[6,13,13,12,12],pz:[1,0,0,0,-1],nx:[23,5,23,23,11],ny:[12,2,13,14,8],nz:[0,2,0,0,1]},{size:5,px:[12,12,12,12,6],py:[11,13,12,10,6],pz:[0,0,0,0,1],nx:[6,8,3,9,9],ny:[8,4,4,4,4],nz:[1,1,1,1,-1]},{size:5,px:[5,3,5,8,11],py:[12,8,3,11,8],pz:[0,1,1,0,0],nx:[4,0,1,1,9],ny:[4,3,4,3,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[13,3,12,14,12],py:[1,0,1,2,3],pz:[0,2,0,0,0],nx:[7,9,8,4,4],ny:[5,4,10,2,2],nz:[1,1,1,2,-1]},{size:5,px:[18,16,12,15,8],py:[12,23,7,11,8],pz:[0,0,0,0,1],nx:[8,6,10,12,4],ny:[4,4,10,6,3],nz:[1,-1,-1,-1,-1]},{size:5,px:[4,4,5,2,2],py:[13,14,14,7,7],pz:[0,0,0,1,-1],nx:[0,0,0,0,1],ny:[15,4,14,13,17],nz:[0,2,0,0,0]},{size:2,px:[9,9],py:[7,7],pz:[1,-1],nx:[4,7],ny:[5,8],nz:[2,1]},{size:5,px:[3,4,6,5,4],py:[2,2,14,6,9],pz:[1,1,0,1,1],nx:[23,23,23,23,11],ny:[0,3,2,1,0],nz:[0,0,0,0,-1]},{size:3,px:[10,2,3],py:[23,4,7],pz:[0,2,1],nx:[10,21,23],ny:[21,9,2],nz:[0,-1,-1]},{size:5,px:[20,21,21,10,12],py:[13,12,8,8,12],pz:[0,0,0,1,0],nx:[8,16,3,3,11],ny:[4,8,4,3,0],nz:[1,-1,-1,-1,-1]},{size:2,px:[2,21],py:[4,12],pz:[2,-1],nx:[2,3],ny:[5,4],nz:[2,1]},{size:5,px:[8,5,6,8,7],py:[0,2,1,1,1],pz:[0,0,0,0,0],nx:[3,2,2,2,2],ny:[0,0,1,2,2],nz:[0,0,0,0,-1]},{size:5,px:[11,2,2,11,10],py:[10,12,8,11,12],pz:[0,0,0,0,0],nx:[3,5,2,4,2],ny:[4,1,4,2,2],nz:[1,-1,-1,-1,-1]},{size:4,px:[15,16,8,17],py:[2,1,0,2],pz:[0,0,1,0],nx:[19,20,0,8],ny:[1,2,11,10],nz:[0,0,-1,-1]},{size:2,px:[17,16],py:[12,12],pz:[0,0],nx:[8,9],ny:[5,1],nz:[1,-1]},{size:4,px:[11,11,0,0],py:[12,13,0,0],pz:[0,0,-1,-1],nx:[10,10,9,10],ny:[10,12,13,11],nz:[0,0,0,0]},{size:3,px:[11,10,8],py:[5,2,6],pz:[0,-1,-1],nx:[8,12,4],ny:[4,17,4],nz:[1,0,1]},{size:5,px:[10,21,10,20,20],py:[11,13,7,13,14],pz:[1,0,1,0,0],nx:[23,23,11,23,17],ny:[23,22,11,21,21],nz:[0,0,1,-1,-1]},{size:2,px:[4,7],py:[3,9],pz:[2,1],nx:[9,23],ny:[4,22],nz:[1,-1]},{size:4,px:[3,2,2,5],py:[11,5,4,20],pz:[1,2,2,0],nx:[4,23,11,23],ny:[10,22,11,21],nz:[1,-1,-1,-1]},{size:2,px:[7,5],py:[13,4],pz:[0,-1],nx:[4,4],ny:[8,6],nz:[1,1]},{size:2,px:[2,5],py:[4,9],pz:[2,1],nx:[10,10],ny:[16,16],nz:[0,-1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,0],ny:[4,0],nz:[1,-1]},{size:5,px:[7,3,12,13,6],py:[11,5,23,23,7],pz:[1,2,0,0,1],nx:[1,0,0,0,0],ny:[23,20,19,21,21],nz:[0,0,0,0,-1]},{size:5,px:[0,0,0,0,0],py:[10,9,6,13,13],pz:[0,0,1,0,-1],nx:[8,8,4,4,9],ny:[4,11,5,4,5],nz:[1,1,2,2,1]},{size:2,px:[9,18],py:[8,15],pz:[1,0],nx:[15,4],ny:[15,2],nz:[0,-1]},{size:2,px:[5,13],py:[6,17],pz:[1,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:5,px:[19,10,20,18,18],py:[2,0,2,2,2],pz:[0,1,0,0,-1],nx:[22,23,22,11,23],ny:[1,3,0,1,2],nz:[0,0,0,1,0]},{size:5,px:[4,2,2,2,6],py:[7,2,5,4,14],pz:[1,2,2,2,0],nx:[16,7,9,15,23],ny:[8,0,3,11,2],nz:[0,-1,-1,-1,-1]},{size:5,px:[10,10,9,9,5],py:[2,0,0,1,0],pz:[0,0,0,0,1],nx:[3,2,3,2,2],ny:[11,3,9,5,5],nz:[1,2,1,2,-1]}],alpha:[-1.490426,1.490426,-1.21428,1.21428,-.8124863,.8124863,-.7307594,.7307594,-.7377259,.7377259,-.5982859,.5982859,-.6451736,.6451736,-.6117417,.6117417,-.5438949,.5438949,-.4563701,.4563701,-.4975362,.4975362,-.4707373,.4707373,-.5013868,.5013868,-.5139018,.5139018,-.4728007,.4728007,-.4839748,.4839748,-.4852528,.4852528,-.5768956,.5768956,-.3635091,.3635091,-.419009,.419009,-.3854715,.3854715,-.3409591,.3409591,-.3440222,.3440222,-.3375895,.3375895,-.3367032,.3367032,-.3708106,.3708106,-.3260956,.3260956,-.3657681,.3657681,-.35188,.35188,-.3845758,.3845758,-.2832236,.2832236,-.2865156,.2865156]},{count:45,threshold:-5.479836,feature:[{size:5,px:[15,6,17,6,9],py:[2,13,13,4,3],pz:[0,0,0,1,0],nx:[3,9,4,8,14],ny:[5,8,4,4,8],nz:[2,0,1,1,0]},{size:5,px:[9,8,11,6,7],py:[1,2,3,14,2],pz:[0,0,0,0,0],nx:[0,0,4,0,0],ny:[4,2,4,1,0],nz:[0,0,1,0,0]},{size:5,px:[2,2,11,11,11],py:[2,4,10,8,6],pz:[2,2,0,0,0],nx:[8,4,3,23,23],ny:[4,4,4,16,18],nz:[1,1,-1,-1,-1]},{size:5,px:[18,16,17,15,9],py:[2,2,2,2,1],pz:[0,0,0,0,1],nx:[22,22,21,23,23],ny:[1,2,0,5,4],nz:[0,0,0,0,0]},{size:5,px:[15,3,17,18,6],py:[11,2,11,11,4],pz:[0,2,0,0,1],nx:[3,8,1,4,23],ny:[4,4,3,9,4],nz:[1,1,-1,-1,-1]},{size:2,px:[4,5],py:[4,0],pz:[2,-1],nx:[7,4],ny:[8,5],nz:[1,2]},{size:2,px:[11,5],py:[12,5],pz:[0,-1],nx:[4,9],ny:[10,15],nz:[1,0]},{size:4,px:[2,2,7,1],py:[7,7,3,4],pz:[1,-1,-1,-1],nx:[0,2,1,2],ny:[6,20,14,16],nz:[1,0,0,0]},{size:5,px:[14,12,12,13,9],py:[23,5,6,5,7],pz:[0,0,0,0,1],nx:[8,18,2,8,14],ny:[4,9,0,12,7],nz:[1,-1,-1,-1,-1]},{size:5,px:[3,10,13,11,9],py:[0,3,2,3,2],pz:[2,0,0,0,0],nx:[3,11,22,22,22],ny:[2,6,15,2,0],nz:[2,1,0,0,0]},{size:5,px:[8,7,5,8,5],py:[23,12,12,12,13],pz:[0,0,0,0,0],nx:[3,18,3,1,22],ny:[4,4,4,2,0],nz:[1,-1,-1,-1,-1]},{size:5,px:[22,22,22,21,22],py:[9,11,10,14,12],pz:[0,0,0,0,0],nx:[23,23,11,1,22],ny:[23,23,11,2,0],nz:[0,-1,-1,-1,-1]},{size:2,px:[9,3],py:[18,7],pz:[0,1],nx:[10,8],ny:[16,19],nz:[0,-1]},{size:5,px:[10,12,11,6,6],py:[4,4,4,2,2],pz:[0,0,0,1,-1],nx:[3,8,7,8,4],ny:[5,4,4,10,4],nz:[2,1,1,0,1]},{size:4,px:[12,12,4,15],py:[13,12,0,11],pz:[0,0,-1,-1],nx:[13,14,13,14],ny:[9,12,10,13],nz:[0,0,0,0]},{size:2,px:[4,4],py:[3,3],pz:[2,-1],nx:[9,4],ny:[4,2],nz:[1,2]},{size:3,px:[9,7,0],py:[7,5,5],pz:[1,-1,-1],nx:[4,15,9],ny:[5,14,9],nz:[2,0,1]},{size:5,px:[15,20,7,10,16],py:[17,12,6,4,23],pz:[0,0,1,1,0],nx:[1,2,2,1,1],ny:[3,0,1,2,2],nz:[0,0,0,0,-1]},{size:5,px:[2,1,1,11,2],py:[16,4,5,12,14],pz:[0,1,1,0,0],nx:[4,6,3,19,1],ny:[4,2,5,19,2],nz:[1,-1,-1,-1,-1]},{size:3,px:[15,14,14],py:[1,1,0],pz:[0,0,0],nx:[4,8,4],ny:[3,4,2],nz:[2,1,2]},{size:5,px:[2,3,1,2,7],py:[8,12,4,9,13],pz:[1,0,2,1,0],nx:[1,1,0,0,0],ny:[21,20,18,17,9],nz:[0,0,0,0,1]},{size:5,px:[17,15,17,16,16],py:[12,12,22,23,12],pz:[0,0,0,0,0],nx:[7,3,16,1,0],ny:[8,6,8,3,9],nz:[0,-1,-1,-1,-1]},{size:5,px:[9,17,18,18,18],py:[6,12,12,13,13],pz:[1,0,0,0,-1],nx:[23,23,20,11,11],ny:[12,13,23,7,8],nz:[0,0,0,1,1]},{size:2,px:[2,4],py:[4,7],pz:[2,1],nx:[4,4],ny:[10,5],nz:[1,-1]},{size:4,px:[4,22,19,12],py:[5,8,14,9],pz:[2,0,0,0],nx:[8,4,4,2],ny:[4,4,1,2],nz:[1,-1,-1,-1]},{size:2,px:[3,21],py:[7,14],pz:[1,-1],nx:[4,2],ny:[7,2],nz:[1,2]},{size:3,px:[7,4,17],py:[3,1,6],pz:[0,1,-1],nx:[3,4,5],ny:[0,2,1],nz:[1,0,0]},{size:4,px:[15,7,14,0],py:[3,1,3,7],pz:[0,1,0,-1],nx:[8,18,17,18],ny:[0,1,1,2],nz:[1,0,0,0]},{size:5,px:[12,12,12,12,6],py:[10,11,12,13,6],pz:[0,0,0,0,-1],nx:[8,15,15,4,8],ny:[10,10,9,2,4],nz:[0,0,0,2,1]},{size:2,px:[17,12],py:[13,11],pz:[0,-1],nx:[9,8],ny:[4,10],nz:[1,1]},{size:5,px:[0,0,0,0,0],py:[10,9,12,11,4],pz:[0,0,0,0,1],nx:[8,9,8,9,9],ny:[10,4,4,5,5],nz:[1,1,1,1,-1]},{size:3,px:[7,0,1],py:[1,9,8],pz:[0,-1,-1],nx:[4,3,3],ny:[7,15,16],nz:[0,0,0]},{size:2,px:[4,7],py:[15,23],pz:[0,0],nx:[9,18],ny:[21,3],nz:[0,-1]},{size:5,px:[17,4,19,18,8],py:[12,3,12,17,6],pz:[0,2,0,0,1],nx:[23,23,11,22,16],ny:[0,1,0,21,-1],nz:[0,0,-1,-1,-1]},{size:2,px:[7,4],py:[13,5],pz:[0,-1],nx:[4,2],ny:[4,2],nz:[1,2]},{size:5,px:[21,20,10,10,21],py:[13,14,10,7,11],pz:[0,0,1,1,0],nx:[4,4,4,5,5],ny:[18,17,19,20,20],nz:[0,0,0,0,-1]},{size:2,px:[2,3],py:[11,13],pz:[1,0],nx:[12,4],ny:[17,17],nz:[0,-1]},{size:2,px:[11,5],py:[13,1],pz:[0,-1],nx:[1,2],ny:[1,4],nz:[2,1]},{size:2,px:[15,7],py:[17,7],pz:[0,1],nx:[14,4],ny:[15,3],nz:[0,-1]},{size:2,px:[3,11],py:[3,8],pz:[2,0],nx:[13,13],ny:[9,8],nz:[0,0]},{size:2,px:[8,3],py:[11,2],pz:[0,-1],nx:[8,4],ny:[9,5],nz:[0,1]},{size:3,px:[12,6,9],py:[9,10,11],pz:[0,-1,-1],nx:[2,1,5],ny:[2,1,6],nz:[2,2,1]},{size:4,px:[4,5,5,1],py:[11,11,11,3],pz:[1,0,1,2],nx:[0,0,5,4],ny:[23,22,0,0],nz:[0,0,-1,-1]},{size:5,px:[15,7,17,15,16],py:[1,0,2,2,0],pz:[0,1,0,0,0],nx:[7,4,7,4,8],ny:[5,2,4,3,4],nz:[1,2,1,2,-1]},{size:2,px:[6,12],py:[11,23],pz:[1,0],nx:[12,4],ny:[21,2],nz:[0,-1]}],alpha:[-1.5358,1.5358,-.8580514,.8580514,-.862521,.862521,-.71775,.71775,-.6832222,.6832222,-.5736298,.5736298,-.5028217,.5028217,-.5091788,.5091788,-.579194,.579194,-.4924942,.4924942,-.5489055,.5489055,-.452819,.452819,-.4748324,.4748324,-.4150403,.4150403,-.4820464,.4820464,-.4840212,.4840212,-.3941872,.3941872,-.3663507,.3663507,-.3814835,.3814835,-.3936426,.3936426,-.304997,.304997,-.3604256,.3604256,-.3974041,.3974041,-.4203486,.4203486,-.3174435,.3174435,-.3426336,.3426336,-.449215,.449215,-.3538784,.3538784,-.3679703,.3679703,-.3985452,.3985452,-.2884028,.2884028,-.2797264,.2797264,-.2664214,.2664214,-.2484857,.2484857,-.2581492,.2581492,-.2943778,.2943778,-.2315507,.2315507,-.2979337,.2979337,-.2976173,.2976173,-.2847965,.2847965,-.2814763,.2814763,-.2489068,.2489068,-.2632427,.2632427,-.3308292,.3308292,-.279017,.279017]},{count:61,threshold:-5.239104,feature:[{size:5,px:[8,8,11,15,6],py:[3,6,5,3,4],pz:[0,1,0,0,1],nx:[3,9,14,8,4],ny:[4,8,8,7,2],nz:[1,0,0,0,2]},{size:5,px:[11,12,10,6,9],py:[3,3,2,13,2],pz:[0,0,0,0,0],nx:[0,0,5,2,2],ny:[13,1,8,5,2],nz:[0,1,1,2,2]},{size:5,px:[11,5,11,11,4],py:[9,13,10,11,6],pz:[0,0,0,0,1],nx:[4,15,9,3,3],ny:[5,8,9,4,4],nz:[1,0,0,1,-1]},{size:5,px:[15,16,8,17,17],py:[1,2,0,2,2],pz:[0,0,1,0,-1],nx:[23,23,23,23,23],ny:[4,0,2,3,1],nz:[0,0,0,0,0]},{size:4,px:[9,18,17,18],py:[7,13,13,14],pz:[1,0,0,0],nx:[9,7,4,8],ny:[4,10,2,4],nz:[1,1,2,1]},{size:5,px:[12,11,12,12,6],py:[6,5,14,5,3],pz:[0,0,0,0,1],nx:[13,8,14,7,7],ny:[16,4,7,4,4],nz:[0,1,0,1,-1]},{size:5,px:[12,6,3,7,12],py:[7,12,7,11,8],pz:[0,0,1,0,0],nx:[16,4,4,4,7],ny:[8,4,4,4,4],nz:[0,1,-1,-1,-1]},{size:5,px:[6,4,5,3,3],py:[2,3,2,0,0],pz:[0,0,0,1,-1],nx:[1,0,1,0,0],ny:[0,3,1,1,2],nz:[0,0,0,1,0]},{size:2,px:[15,9],py:[11,6],pz:[0,1],nx:[14,5],ny:[9,11],nz:[0,-1]},{size:5,px:[10,19,19,10,20],py:[7,20,14,6,12],pz:[1,0,0,1,0],nx:[23,22,11,23,23],ny:[21,23,9,20,20],nz:[0,0,1,0,-1]},{size:5,px:[1,1,5,1,1],py:[8,6,6,9,4],pz:[0,1,1,0,2],nx:[3,3,3,2,5],ny:[4,4,2,5,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[13,12,3,11,11],py:[2,2,0,1,2],pz:[0,0,2,0,0],nx:[3,6,8,4,3],ny:[2,9,4,4,5],nz:[2,1,1,1,-1]},{size:3,px:[12,12,6],py:[11,12,9],pz:[0,0,-1],nx:[2,1,9],ny:[6,1,14],nz:[0,2,0]},{size:5,px:[6,3,17,16,16],py:[4,2,14,23,13],pz:[1,2,0,0,0],nx:[8,10,21,5,1],ny:[4,10,11,0,0],nz:[1,-1,-1,-1,-1]},{size:5,px:[5,6,1,3,3],py:[15,14,4,7,7],pz:[0,0,2,1,-1],nx:[1,0,0,1,1],ny:[5,8,7,18,17],nz:[2,1,1,0,0]},{size:4,px:[6,12,5,3],py:[6,12,2,7],pz:[1,-1,-1,-1],nx:[14,13,13,7],ny:[12,10,9,8],nz:[0,0,0,1]},{size:2,px:[3,6],py:[7,15],pz:[1,0],nx:[3,3],ny:[4,2],nz:[1,-1]},{size:4,px:[11,10,12,2],py:[18,18,18,3],pz:[0,0,0,2],nx:[11,17,4,16],ny:[16,4,4,21],nz:[0,-1,-1,-1]},{size:5,px:[9,8,8,5,2],py:[4,4,4,2,3],pz:[0,0,-1,-1,-1],nx:[2,2,4,4,2],ny:[1,2,10,5,4],nz:[2,2,1,1,2]},{size:4,px:[8,18,14,18],py:[7,16,23,15],pz:[1,0,0,0],nx:[14,3,1,0],ny:[21,1,9,3],nz:[0,-1,-1,-1]},{size:2,px:[12,3],py:[9,5],pz:[0,2],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[9,9],py:[1,1],pz:[1,-1],nx:[19,20],ny:[1,2],nz:[0,0]},{size:3,px:[10,10,10],py:[6,6,8],pz:[1,-1,-1],nx:[22,21,22],ny:[13,18,12],nz:[0,0,0]},{size:2,px:[2,2],py:[4,1],pz:[2,-1],nx:[2,4],ny:[5,4],nz:[2,1]},{size:5,px:[21,21,21,21,21],py:[19,17,18,15,16],pz:[0,0,0,0,0],nx:[11,21,6,1,21],ny:[17,1,10,0,2],nz:[0,-1,-1,-1,-1]},{size:5,px:[7,3,4,4,4],py:[23,13,14,16,13],pz:[0,0,0,0,0],nx:[21,22,22,22,22],ny:[23,21,20,19,19],nz:[0,0,0,0,-1]},{size:2,px:[11,8],py:[6,6],pz:[0,1],nx:[8,4],ny:[4,2],nz:[1,-1]},{size:5,px:[23,23,11,23,23],py:[8,12,6,11,10],pz:[0,0,1,0,0],nx:[4,4,3,8,8],ny:[3,8,4,4,4],nz:[1,1,1,1,-1]},{size:5,px:[8,9,4,7,10],py:[2,1,0,2,1],pz:[0,0,1,0,0],nx:[5,5,6,4,4],ny:[1,0,0,2,1],nz:[0,0,0,0,-1]},{size:2,px:[12,2],py:[13,6],pz:[0,-1],nx:[15,9],ny:[15,4],nz:[0,1]},{size:2,px:[2,4],py:[4,9],pz:[2,1],nx:[3,13],ny:[4,1],nz:[1,-1]},{size:3,px:[3,6,2],py:[10,22,4],pz:[1,0,2],nx:[4,2,1],ny:[10,4,3],nz:[1,-1,-1]},{size:2,px:[1,0],py:[9,7],pz:[0,1],nx:[0,0],ny:[23,22],nz:[0,0]},{size:2,px:[8,7],py:[0,1],pz:[0,0],nx:[4,4],ny:[8,8],nz:[1,-1]},{size:5,px:[7,4,4,6,3],py:[8,4,5,5,3],pz:[1,2,2,1,2],nx:[1,0,2,0,0],ny:[1,0,0,2,4],nz:[0,2,0,1,-1]},{size:3,px:[10,4,4],py:[6,1,5],pz:[1,-1,-1],nx:[5,23,22],ny:[4,13,7],nz:[2,0,0]},{size:2,px:[2,2],py:[6,5],pz:[1,1],nx:[6,0],ny:[9,2],nz:[0,-1]},{size:5,px:[0,1,1,0,0],py:[5,18,19,16,6],pz:[2,0,0,0,1],nx:[5,9,4,8,8],ny:[8,7,3,7,7],nz:[1,0,1,0,-1]},{size:2,px:[13,12],py:[23,23],pz:[0,0],nx:[7,6],ny:[8,10],nz:[0,-1]},{size:2,px:[14,19],py:[12,8],pz:[0,0],nx:[18,5],ny:[8,11],nz:[0,-1]},{size:5,px:[2,8,6,4,4],py:[3,23,14,6,9],pz:[2,0,0,1,1],nx:[0,0,0,0,1],ny:[21,20,5,19,23],nz:[0,0,2,0,0]},{size:2,px:[11,22],py:[4,14],pz:[0,-1],nx:[3,8],ny:[1,4],nz:[2,1]},{size:5,px:[1,1,0,1,1],py:[6,8,3,12,7],pz:[1,1,2,0,1],nx:[21,21,19,10,10],ny:[14,16,23,9,9],nz:[0,0,0,1,-1]},{size:2,px:[10,3],py:[23,2],pz:[0,2],nx:[10,3],ny:[21,5],nz:[0,-1]},{size:2,px:[9,9],py:[7,0],pz:[1,-1],nx:[9,9],ny:[11,10],nz:[1,1]},{size:5,px:[23,11,23,23,23],py:[18,10,19,20,16],pz:[0,1,0,0,0],nx:[3,3,2,3,2],ny:[15,16,10,17,9],nz:[0,0,1,0,-1]},{size:2,px:[9,14],py:[7,18],pz:[1,0],nx:[7,10],ny:[8,8],nz:[1,-1]},{size:2,px:[12,5],py:[6,4],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[4,5],py:[13,4],pz:[0,-1],nx:[4,4],ny:[17,19],nz:[0,0]},{size:3,px:[2,3,3],py:[11,17,19],pz:[1,0,0],nx:[7,7,4],ny:[8,8,5],nz:[1,-1,-1]},{size:2,px:[6,6],py:[6,5],pz:[1,-1],nx:[2,9],ny:[4,12],nz:[1,0]},{size:5,px:[8,8,9,2,2],py:[18,13,12,3,3],pz:[0,0,0,2,-1],nx:[23,11,23,11,11],ny:[13,6,14,7,8],nz:[0,1,0,1,1]},{size:2,px:[9,11],py:[6,13],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[8,10],py:[0,6],pz:[1,1],nx:[9,4],ny:[6,7],nz:[1,-1]},{size:3,px:[3,10,9],py:[8,6,0],pz:[1,-1,-1],nx:[2,2,2],ny:[15,16,9],nz:[0,0,1]},{size:3,px:[14,15,0],py:[2,2,5],pz:[0,0,-1],nx:[17,17,18],ny:[0,1,2],nz:[0,0,0]},{size:2,px:[11,5],py:[14,1],pz:[0,-1],nx:[10,9],ny:[12,14],nz:[0,0]},{size:2,px:[8,8],py:[7,8],pz:[1,1],nx:[8,4],ny:[4,4],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[19,18,10,5,20],pz:[0,0,1,2,0],nx:[4,8,2,4,4],ny:[4,15,5,10,10],nz:[1,0,2,1,-1]},{size:2,px:[7,0],py:[13,18],pz:[0,-1],nx:[4,3],ny:[4,4],nz:[1,1]},{size:5,px:[23,22,22,11,22],py:[16,13,7,6,14],pz:[0,0,0,1,0],nx:[13,7,15,14,14],ny:[6,3,7,6,6],nz:[0,1,0,0,-1]}],alpha:[-1.428861,1.428861,-.8591837,.8591837,-.7734305,.7734305,-.653446,.653446,-.6262547,.6262547,-.5231782,.5231782,-.4984303,.4984303,-.4913187,.4913187,-.4852198,.4852198,-.4906681,.4906681,-.4126248,.4126248,-.4590814,.4590814,-.4653825,.4653825,-.41796,.41796,-.4357392,.4357392,-.4087982,.4087982,-.4594812,.4594812,-.4858794,.4858794,-.371358,.371358,-.3894534,.3894534,-.3127168,.3127168,-.4012654,.4012654,-.3370552,.3370552,-.3534712,.3534712,-.384345,.384345,-.2688805,.2688805,-.3500203,.3500203,-.282712,.282712,-.3742119,.3742119,-.3219074,.3219074,-.2544953,.2544953,-.3355513,.3355513,-.267267,.267267,-.2932047,.2932047,-.2404618,.2404618,-.2354372,.2354372,-.2657955,.2657955,-.2293701,.2293701,-.2708918,.2708918,-.2340181,.2340181,-.2464815,.2464815,-.2944239,.2944239,-.240796,.240796,-.3029642,.3029642,-.2684602,.2684602,-.2495078,.2495078,-.2539708,.2539708,-.2989293,.2989293,-.2391309,.2391309,-.2531372,.2531372,-.250039,.250039,-.2295077,.2295077,-.2526125,.2526125,-.2337182,.2337182,-.1984756,.1984756,-.3089996,.3089996,-.2589053,.2589053,-.296249,.296249,-.245866,.245866,-.2515206,.2515206,-.2637299,.2637299]},{count:80,threshold:-5.185898,feature:[{size:5,px:[12,17,13,10,15],py:[9,13,3,3,2],pz:[0,0,0,0,0],nx:[8,14,6,9,4],ny:[10,9,8,8,2],nz:[1,0,1,0,2]},{size:5,px:[3,11,8,10,9],py:[7,4,3,3,3],pz:[1,0,0,0,0],nx:[2,1,5,0,0],ny:[2,15,8,4,13],nz:[2,0,1,0,0]},{size:5,px:[11,11,11,4,17],py:[7,9,8,6,11],pz:[0,0,0,1,0],nx:[8,8,8,3,0],ny:[4,8,8,8,13],nz:[1,0,-1,-1,-1]},{size:5,px:[14,15,7,16,16],py:[3,3,1,3,3],pz:[0,0,1,0,-1],nx:[23,22,23,22,22],ny:[6,2,14,3,4],nz:[0,0,0,0,0]},{size:4,px:[6,4,7,15],py:[4,2,6,17],pz:[1,2,1,0],nx:[3,8,3,14],ny:[4,4,10,22],nz:[1,1,-1,-1]},{size:3,px:[3,5,22],py:[7,7,5],pz:[1,-1,-1],nx:[2,2,4],ny:[5,2,7],nz:[2,2,1]},{size:5,px:[7,6,5,6,3],py:[0,1,2,2,0],pz:[0,0,0,0,1],nx:[0,1,1,0,1],ny:[0,2,1,2,0],nz:[2,0,0,1,0]},{size:5,px:[11,11,11,11,5],py:[11,10,13,12,6],pz:[0,0,0,0,-1],nx:[15,14,5,2,8],ny:[9,8,10,2,10],nz:[0,0,1,2,0]},{size:5,px:[8,5,6,8,7],py:[12,12,12,23,12],pz:[0,0,0,0,0],nx:[3,17,5,2,8],ny:[4,0,10,2,10],nz:[1,-1,-1,-1,-1]},{size:5,px:[10,10,10,19,20],py:[8,10,9,15,13],pz:[1,1,1,0,0],nx:[23,11,5,23,23],ny:[20,10,5,19,19],nz:[0,1,2,0,-1]},{size:5,px:[9,13,3,10,12],py:[2,0,0,1,1],pz:[0,0,2,0,0],nx:[3,3,6,7,7],ny:[5,2,11,4,4],nz:[2,2,1,1,-1]},{size:2,px:[15,7],py:[17,6],pz:[0,1],nx:[14,0],ny:[16,10],nz:[0,-1]},{size:5,px:[17,15,18,12,19],py:[22,12,13,7,15],pz:[0,0,0,0,0],nx:[8,15,6,1,7],ny:[4,8,22,5,4],nz:[1,-1,-1,-1,-1]},{size:5,px:[10,9,18,19,8],py:[2,1,3,3,1],pz:[1,1,0,0,1],nx:[23,23,23,11,11],ny:[0,1,2,0,1],nz:[0,0,0,1,-1]},{size:5,px:[12,23,0,1,8],py:[14,5,0,17,1],pz:[0,-1,-1,-1,-1],nx:[8,14,15,18,14],ny:[10,11,14,19,10],nz:[1,0,0,0,0]},{size:2,px:[4,6],py:[6,13],pz:[1,0],nx:[4,12],ny:[10,14],nz:[1,-1]},{size:5,px:[5,23,11,23,13],py:[3,10,4,11,12],pz:[2,0,1,0,0],nx:[7,4,9,8,8],ny:[4,2,4,4,4],nz:[1,2,1,1,-1]},{size:3,px:[9,5,11],py:[4,2,4],pz:[0,1,-1],nx:[5,2,4],ny:[0,1,2],nz:[0,2,0]},{size:5,px:[5,2,2,5,8],py:[12,4,4,6,13],pz:[0,2,1,1,0],nx:[3,9,4,4,8],ny:[4,0,2,2,4],nz:[1,-1,-1,-1,-1]},{size:3,px:[9,5,22],py:[7,4,20],pz:[1,-1,-1],nx:[8,19,4],ny:[4,18,5],nz:[1,0,2]},{size:5,px:[2,3,3,3,3],py:[10,16,15,14,13],pz:[1,0,0,0,0],nx:[0,0,0,1,0],ny:[10,20,5,23,21],nz:[1,0,2,0,0]},{size:2,px:[12,11],py:[4,18],pz:[0,0],nx:[11,23],ny:[17,13],nz:[0,-1]},{size:2,px:[17,8],py:[16,7],pz:[0,1],nx:[8,3],ny:[4,6],nz:[1,-1]},{size:5,px:[13,5,14,12,3],py:[4,7,4,5,3],pz:[0,1,0,0,1],nx:[21,20,21,21,21],ny:[2,0,4,3,3],nz:[0,0,0,0,-1]},{size:4,px:[20,20,20,10],py:[21,19,20,8],pz:[0,0,0,1],nx:[8,11,0,2],ny:[10,8,1,3],nz:[1,-1,-1,-1]},{size:4,px:[6,7,12,8],py:[12,12,8,11],pz:[0,0,0,0],nx:[9,5,5,18],ny:[9,2,0,20],nz:[0,-1,-1,-1]},{size:3,px:[11,5,9],py:[0,0,0],pz:[0,1,0],nx:[2,6,3],ny:[3,7,4],nz:[2,0,1]},{size:5,px:[18,18,9,17,17],py:[15,14,7,14,14],pz:[0,0,1,0,-1],nx:[21,21,21,22,20],ny:[15,21,17,14,23],nz:[0,0,0,0,0]},{size:5,px:[9,12,12,7,4],py:[4,11,12,6,5],pz:[1,0,0,1,2],nx:[16,11,9,6,20],ny:[8,4,11,10,23],nz:[0,-1,-1,-1,-1]},{size:5,px:[12,11,10,11,11],py:[23,4,4,5,23],pz:[0,0,0,0,0],nx:[11,11,7,3,20],ny:[21,21,11,1,23],nz:[0,-1,-1,-1,-1]},{size:2,px:[12,1],py:[12,3],pz:[0,-1],nx:[10,10],ny:[3,2],nz:[1,1]},{size:5,px:[9,4,15,9,9],py:[8,4,23,7,7],pz:[1,2,0,1,-1],nx:[5,3,3,3,2],ny:[23,19,17,18,15],nz:[0,0,0,0,0]},{size:2,px:[2,0],py:[16,3],pz:[0,2],nx:[9,4],ny:[15,2],nz:[0,-1]},{size:2,px:[2,3],py:[3,7],pz:[2,1],nx:[3,8],ny:[4,10],nz:[1,-1]},{size:3,px:[9,4,3],py:[18,0,14],pz:[0,-1,-1],nx:[3,5,2],ny:[5,8,5],nz:[2,1,2]},{size:3,px:[1,1,10],py:[2,1,7],pz:[1,-1,-1],nx:[0,0,0],ny:[3,5,1],nz:[0,0,1]},{size:4,px:[11,11,5,2],py:[12,13,7,3],pz:[0,0,-1,-1],nx:[5,10,10,9],ny:[6,9,10,13],nz:[1,0,0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[9,1],ny:[4,3],nz:[1,-1]},{size:5,px:[0,0,1,1,0],py:[4,10,12,13,5],pz:[1,0,0,0,1],nx:[4,4,8,7,7],ny:[3,2,10,4,4],nz:[2,2,1,1,-1]},{size:3,px:[3,4,3],py:[1,1,2],pz:[1,-1,-1],nx:[4,5,3],ny:[1,0,2],nz:[0,0,0]},{size:2,px:[9,2],py:[6,4],pz:[1,-1],nx:[8,4],ny:[6,2],nz:[1,2]},{size:5,px:[12,13,15,16,7],py:[1,1,2,2,1],pz:[0,0,0,0,1],nx:[4,4,4,3,7],ny:[2,2,4,2,4],nz:[2,-1,-1,-1,-1]},{size:5,px:[9,3,2,11,5],py:[23,7,4,10,6],pz:[0,1,2,0,1],nx:[21,20,11,21,21],ny:[21,23,8,20,20],nz:[0,0,1,0,-1]},{size:4,px:[12,6,13,12],py:[7,3,5,6],pz:[0,1,0,0],nx:[3,0,5,10],ny:[4,6,5,1],nz:[1,-1,-1,-1]},{size:2,px:[10,4],py:[4,0],pz:[0,-1],nx:[12,11],ny:[2,1],nz:[0,0]},{size:4,px:[2,3,22,5],py:[6,1,18,5],pz:[1,-1,-1,-1],nx:[0,0,0,3],ny:[14,3,12,18],nz:[0,2,0,0]},{size:3,px:[10,20,21],py:[10,18,15],pz:[1,0,0],nx:[15,1,2],ny:[7,0,8],nz:[0,-1,-1]},{size:5,px:[0,0,0,0,0],py:[4,7,13,4,6],pz:[1,1,0,2,1],nx:[5,9,8,4,4],ny:[3,7,7,3,3],nz:[1,0,0,1,-1]},{size:3,px:[13,12,14],py:[2,2,2],pz:[0,0,0],nx:[4,4,4],ny:[2,2,5],nz:[2,-1,-1]},{size:5,px:[5,4,6,2,12],py:[7,9,7,4,10],pz:[0,1,0,2,0],nx:[6,1,2,5,2],ny:[9,2,4,13,4],nz:[0,-1,-1,-1,-1]},{size:2,px:[11,1],py:[12,5],pz:[0,-1],nx:[1,0],ny:[7,2],nz:[0,2]},{size:5,px:[8,8,1,16,6],py:[6,6,4,8,11],pz:[1,-1,-1,-1,-1],nx:[13,5,4,4,13],ny:[12,1,2,5,11],nz:[0,2,2,2,0]},{size:2,px:[5,6],py:[4,14],pz:[1,0],nx:[9,5],ny:[7,1],nz:[0,-1]},{size:2,px:[2,6],py:[4,14],pz:[2,0],nx:[9,2],ny:[15,1],nz:[0,-1]},{size:5,px:[10,19,20,10,9],py:[1,2,3,0,0],pz:[1,0,0,1,-1],nx:[11,23,23,11,23],ny:[0,3,1,1,2],nz:[1,0,0,1,0]},{size:2,px:[2,9],py:[3,12],pz:[2,0],nx:[2,6],ny:[4,6],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[4,10,11,9,9],pz:[1,0,0,0,-1],nx:[16,2,17,8,4],ny:[10,2,9,4,4],nz:[0,2,0,1,1]},{size:2,px:[12,0],py:[5,4],pz:[0,-1],nx:[7,8],ny:[4,8],nz:[1,1]},{size:2,px:[21,21],py:[9,10],pz:[0,0],nx:[11,8],ny:[18,8],nz:[0,-1]},{size:2,px:[14,7],py:[23,9],pz:[0,1],nx:[7,13],ny:[10,4],nz:[1,-1]},{size:5,px:[12,12,12,6,2],py:[11,13,12,6,4],pz:[0,0,0,-1,-1],nx:[0,0,0,0,0],ny:[14,13,6,12,11],nz:[0,0,1,0,0]},{size:2,px:[8,9],py:[6,11],pz:[1,-1],nx:[15,15],ny:[11,10],nz:[0,0]},{size:4,px:[4,6,7,2],py:[8,4,23,7],pz:[1,-1,-1,-1],nx:[4,20,19,17],ny:[0,3,1,1],nz:[2,0,0,0]},{size:2,px:[7,0],py:[6,0],pz:[1,-1],nx:[7,4],ny:[8,2],nz:[1,2]},{size:2,px:[10,0],py:[7,0],pz:[1,-1],nx:[15,15],ny:[15,14],nz:[0,0]},{size:5,px:[6,2,5,2,4],py:[23,7,21,8,16],pz:[0,1,0,1,0],nx:[18,2,10,0,11],ny:[9,3,23,5,3],nz:[0,-1,-1,-1,-1]},{size:5,px:[9,9,8,10,4],py:[0,2,2,1,1],pz:[0,0,0,0,1],nx:[4,3,2,2,5],ny:[7,3,4,2,17],nz:[0,1,2,2,0]},{size:2,px:[10,7],py:[5,6],pz:[1,-1],nx:[11,11],ny:[6,5],nz:[1,1]},{size:5,px:[11,11,5,6,11],py:[8,10,5,5,9],pz:[0,0,1,1,0],nx:[13,16,11,14,4],ny:[9,13,11,20,23],nz:[0,-1,-1,-1,-1]},{size:2,px:[7,14],py:[14,22],pz:[0,-1],nx:[3,4],ny:[4,4],nz:[1,1]},{size:2,px:[4,11],py:[4,5],pz:[2,-1],nx:[2,4],ny:[5,7],nz:[2,1]},{size:2,px:[1,0],py:[0,0],pz:[0,1],nx:[0,4],ny:[0,2],nz:[0,-1]},{size:5,px:[11,11,11,4,9],py:[5,5,2,9,23],pz:[0,-1,-1,-1,-1],nx:[11,12,10,9,5],ny:[2,2,2,2,1],nz:[0,0,0,0,1]},{size:3,px:[16,14,15],py:[1,1,0],pz:[0,0,0],nx:[4,7,4],ny:[2,4,4],nz:[2,1,-1]},{size:2,px:[5,0],py:[14,5],pz:[0,-1],nx:[2,4],ny:[5,17],nz:[2,0]},{size:5,px:[18,7,16,19,4],py:[13,6,23,13,3],pz:[0,1,0,0,2],nx:[5,2,3,4,4],ny:[1,1,4,1,3],nz:[0,1,0,0,0]},{size:2,px:[8,8],py:[7,6],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[2,1],py:[10,4],pz:[1,2],nx:[4,4],ny:[3,3],nz:[2,-1]},{size:2,px:[10,5],py:[19,1],pz:[0,-1],nx:[4,12],ny:[10,17],nz:[1,0]},{size:5,px:[12,6,2,4,11],py:[14,4,2,1,5],pz:[0,-1,-1,-1,-1],nx:[3,4,3,4,3],ny:[13,17,14,16,15],nz:[0,0,0,0,0]}],alpha:[-1.368326,1.368326,-.7706897,.7706897,-.8378147,.8378147,-.6120624,.6120624,-.5139189,.5139189,-.475913,.475913,-.5161374,.5161374,-.5407743,.5407743,-.4216105,.4216105,-.4418693,.4418693,-.4435335,.4435335,-.4052076,.4052076,-.429305,.429305,-.3431154,.3431154,-.4231203,.4231203,-.39171,.39171,-.362345,.362345,-.320267,.320267,-.3331602,.3331602,-.3552034,.3552034,-.3784556,.3784556,-.3295428,.3295428,-.3587038,.3587038,-.2861332,.2861332,-.3403258,.3403258,-.3989002,.3989002,-.2631159,.2631159,-.3272156,.3272156,-.2816567,.2816567,-.3125926,.3125926,-.3146982,.3146982,-.2521825,.2521825,-.2434554,.2434554,-.3435378,.3435378,-.3161172,.3161172,-.2805027,.2805027,-.3303579,.3303579,-.2725089,.2725089,-.2575051,.2575051,-.3210646,.3210646,-.2986997,.2986997,-.2408925,.2408925,-.2456291,.2456291,-.283655,.283655,-.246986,.246986,-.29159,.29159,-.2513559,.2513559,-.2433728,.2433728,-.2377905,.2377905,-.2089327,.2089327,-.1978434,.1978434,-.3017699,.3017699,-.2339661,.2339661,-.193256,.193256,-.2278285,.2278285,-.24382,.24382,-.2216769,.2216769,-.1941995,.1941995,-.2129081,.2129081,-.2270319,.2270319,-.2393942,.2393942,-.2132518,.2132518,-.1867741,.1867741,-.2394237,.2394237,-.2005917,.2005917,-.2445217,.2445217,-.2229078,.2229078,-.2342967,.2342967,-.2481784,.2481784,-.2735603,.2735603,-.2187604,.2187604,-.1677239,.1677239,-.2248867,.2248867,-.2505358,.2505358,-.1867706,.1867706,-.1904305,.1904305,-.1939881,.1939881,-.2249474,.2249474,-.1762483,.1762483,-.2299974,.2299974]
},{count:115,threshold:-5.15192,feature:[{size:5,px:[7,14,7,10,6],py:[3,3,12,4,4],pz:[0,0,0,0,1],nx:[14,3,14,9,3],ny:[7,4,8,8,5],nz:[0,1,0,0,2]},{size:5,px:[13,18,16,17,15],py:[1,13,1,2,0],pz:[0,0,0,0,0],nx:[23,23,8,11,22],ny:[3,4,4,8,0],nz:[0,0,1,1,0]},{size:5,px:[16,6,6,7,12],py:[12,13,4,12,5],pz:[0,0,1,0,0],nx:[0,0,8,4,0],ny:[0,2,4,4,2],nz:[0,0,1,1,-1]},{size:3,px:[12,13,7],py:[13,18,6],pz:[0,0,1],nx:[13,5,6],ny:[16,3,8],nz:[0,-1,-1]},{size:5,px:[10,12,9,13,11],py:[3,3,3,3,3],pz:[0,0,0,0,0],nx:[3,4,15,4,4],ny:[2,5,10,4,4],nz:[2,1,0,1,-1]},{size:5,px:[12,12,12,3,12],py:[7,9,8,3,10],pz:[0,0,0,2,0],nx:[4,8,15,9,9],ny:[4,4,8,8,8],nz:[1,1,0,0,-1]},{size:5,px:[6,3,4,4,2],py:[22,12,13,14,7],pz:[0,0,0,0,1],nx:[2,0,1,1,1],ny:[23,5,22,21,21],nz:[0,2,0,0,-1]},{size:2,px:[3,3],py:[8,8],pz:[1,-1],nx:[3,4],ny:[4,10],nz:[1,1]},{size:5,px:[11,11,11,11,0],py:[10,12,11,13,2],pz:[0,0,0,-1,-1],nx:[8,13,13,13,13],ny:[10,8,9,11,10],nz:[1,0,0,0,0]},{size:5,px:[16,16,15,17,18],py:[12,23,11,12,12],pz:[0,0,0,0,0],nx:[8,8,9,3,13],ny:[4,4,12,3,10],nz:[1,-1,-1,-1,-1]},{size:4,px:[17,16,6,5],py:[14,13,4,5],pz:[0,0,-1,-1],nx:[8,15,4,7],ny:[10,14,4,8],nz:[1,0,2,1]},{size:5,px:[20,10,20,21,19],py:[14,7,13,12,22],pz:[0,1,0,0,0],nx:[22,23,11,23,23],ny:[23,22,11,21,20],nz:[0,0,1,0,-1]},{size:4,px:[12,13,1,18],py:[14,23,3,5],pz:[0,-1,-1,-1],nx:[2,10,5,9],ny:[2,9,8,14],nz:[2,0,1,0]},{size:5,px:[10,4,7,9,8],py:[1,0,2,0,1],pz:[0,1,0,0,0],nx:[2,3,5,3,3],ny:[2,4,8,3,3],nz:[2,1,1,1,-1]},{size:4,px:[11,2,2,11],py:[6,4,5,7],pz:[0,2,2,0],nx:[3,0,5,3],ny:[4,9,8,3],nz:[1,-1,-1,-1]},{size:5,px:[12,10,9,12,12],py:[11,2,1,10,10],pz:[0,1,1,0,-1],nx:[22,11,5,22,23],ny:[1,1,0,0,3],nz:[0,1,2,0,0]},{size:4,px:[5,10,7,11],py:[14,3,0,4],pz:[0,-1,-1,-1],nx:[4,4,4,4],ny:[17,18,15,16],nz:[0,0,0,0]},{size:5,px:[2,2,3,2,2],py:[16,12,20,15,17],pz:[0,0,0,0,0],nx:[12,8,4,15,15],ny:[17,4,4,8,8],nz:[0,1,1,0,-1]},{size:5,px:[12,12,1,6,12],py:[11,10,3,6,10],pz:[0,0,-1,-1,-1],nx:[0,0,1,0,2],ny:[4,0,2,1,0],nz:[0,2,0,1,0]},{size:5,px:[21,20,21,21,14],py:[9,16,11,8,12],pz:[0,0,0,0,0],nx:[17,6,15,0,2],ny:[8,23,13,2,0],nz:[0,-1,-1,-1,-1]},{size:4,px:[6,9,9,5],py:[14,18,23,14],pz:[0,0,0,0],nx:[9,5,5,12],ny:[21,5,3,1],nz:[0,-1,-1,-1]},{size:2,px:[12,13],py:[4,4],pz:[0,0],nx:[4,3],ny:[4,1],nz:[1,2]},{size:5,px:[7,8,11,4,10],py:[3,3,2,1,2],pz:[0,0,0,1,0],nx:[19,20,19,20,20],ny:[0,3,1,2,2],nz:[0,0,0,0,-1]},{size:2,px:[9,1],py:[7,4],pz:[1,-1],nx:[4,7],ny:[5,9],nz:[2,1]},{size:5,px:[11,10,1,5,1],py:[10,12,6,6,5],pz:[0,0,1,1,1],nx:[16,3,2,4,4],ny:[10,4,2,4,4],nz:[0,1,2,1,-1]},{size:2,px:[15,0],py:[17,0],pz:[0,-1],nx:[7,4],ny:[8,5],nz:[1,2]},{size:5,px:[8,10,9,9,9],py:[2,2,2,1,1],pz:[0,0,0,0,-1],nx:[4,2,3,3,2],ny:[0,3,2,1,4],nz:[0,0,0,0,0]},{size:4,px:[11,15,17,16],py:[8,10,11,11],pz:[0,0,0,0],nx:[14,1,1,2],ny:[9,5,7,0],nz:[0,-1,-1,-1]},{size:3,px:[3,5,9],py:[8,6,12],pz:[0,1,0],nx:[3,4,18],ny:[4,2,22],nz:[1,-1,-1]},{size:5,px:[6,1,7,3,3],py:[13,4,13,7,7],pz:[0,2,0,1,-1],nx:[0,0,0,0,0],ny:[16,15,8,13,14],nz:[0,0,1,0,0]},{size:2,px:[5,16],py:[13,10],pz:[0,-1],nx:[3,4],ny:[4,5],nz:[1,1]},{size:5,px:[5,23,11,23,23],py:[5,12,4,16,15],pz:[2,0,1,0,0],nx:[3,2,4,5,5],ny:[4,2,4,11,11],nz:[1,2,1,1,-1]},{size:4,px:[10,10,3,23],py:[7,7,3,16],pz:[1,-1,-1,-1],nx:[5,23,11,22],ny:[4,13,7,16],nz:[2,0,1,0]},{size:5,px:[15,14,13,15,16],py:[1,0,0,0,1],pz:[0,0,0,0,0],nx:[4,9,8,8,8],ny:[2,4,9,4,4],nz:[2,1,1,1,-1]},{size:2,px:[10,4],py:[5,5],pz:[0,-1],nx:[3,15],ny:[1,8],nz:[2,0]},{size:2,px:[6,12],py:[6,9],pz:[1,0],nx:[10,10],ny:[10,10],nz:[0,-1]},{size:5,px:[1,0,0,0,0],py:[5,4,11,9,12],pz:[0,1,0,0,0],nx:[9,8,2,4,7],ny:[7,7,2,4,7],nz:[0,0,2,1,0]},{size:2,px:[4,8],py:[4,7],pz:[2,1],nx:[9,8],ny:[4,7],nz:[1,-1]},{size:2,px:[5,6],py:[4,1],pz:[2,-1],nx:[8,6],ny:[7,3],nz:[1,1]},{size:5,px:[8,5,7,6,11],py:[12,5,13,13,22],pz:[0,1,0,0,0],nx:[23,23,23,22,22],ny:[20,19,21,23,23],nz:[0,0,0,0,-1]},{size:2,px:[3,17],py:[6,9],pz:[1,-1],nx:[3,3],ny:[10,9],nz:[1,1]},{size:2,px:[14,11],py:[23,5],pz:[0,0],nx:[7,3],ny:[10,20],nz:[1,-1]},{size:2,px:[3,4],py:[8,8],pz:[1,1],nx:[9,4],ny:[15,4],nz:[0,-1]},{size:2,px:[2,4],py:[4,7],pz:[2,1],nx:[2,4],ny:[4,4],nz:[1,-1]},{size:2,px:[23,11],py:[21,10],pz:[0,1],nx:[2,3],ny:[11,14],nz:[1,0]},{size:4,px:[11,11,11,3],py:[13,12,11,4],pz:[0,0,0,-1],nx:[14,13,13,6],ny:[13,11,10,5],nz:[0,0,0,1]},{size:2,px:[4,7],py:[3,6],pz:[2,1],nx:[9,19],ny:[4,14],nz:[1,-1]},{size:3,px:[10,5,7],py:[5,0,6],pz:[1,-1,-1],nx:[10,21,5],ny:[0,5,3],nz:[1,0,2]},{size:2,px:[16,13],py:[3,15],pz:[0,-1],nx:[17,7],ny:[23,8],nz:[0,1]},{size:3,px:[4,2,2],py:[15,7,19],pz:[0,1,-1],nx:[2,8,4],ny:[5,14,9],nz:[2,0,1]},{size:3,px:[8,3,6],py:[10,2,4],pz:[0,2,1],nx:[3,8,4],ny:[4,14,9],nz:[1,-1,-1]},{size:2,px:[14,3],py:[18,3],pz:[0,-1],nx:[12,14],ny:[17,9],nz:[0,0]},{size:3,px:[7,1,10],py:[14,10,10],pz:[0,-1,-1],nx:[9,6,2],ny:[13,18,2],nz:[0,0,2]},{size:2,px:[11,8],py:[13,11],pz:[0,-1],nx:[2,4],ny:[7,18],nz:[1,0]},{size:2,px:[5,4],py:[21,17],pz:[0,0],nx:[9,3],ny:[5,1],nz:[1,-1]},{size:2,px:[6,6],py:[4,0],pz:[0,-1],nx:[4,3],ny:[2,0],nz:[0,1]},{size:2,px:[2,1],py:[1,5],pz:[0,-1],nx:[0,1],ny:[1,0],nz:[1,0]},{size:2,px:[18,1],py:[13,5],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[0,0,0,0,1],py:[4,3,2,12,15],pz:[1,1,2,0,0],nx:[5,9,4,8,8],ny:[3,6,3,6,6],nz:[1,0,1,0,-1]},{size:2,px:[2,5],py:[0,2],pz:[1,-1],nx:[2,1],ny:[0,1],nz:[0,1]},{size:4,px:[7,15,4,20],py:[8,23,4,8],pz:[1,0,2,0],nx:[6,0,3,4],ny:[9,2,13,6],nz:[0,-1,-1,-1]},{size:4,px:[11,11,10,20],py:[10,9,11,8],pz:[0,0,0,-1],nx:[21,20,21,21],ny:[18,23,19,17],nz:[0,0,0,0]},{size:2,px:[3,8],py:[7,5],pz:[1,-1],nx:[3,4],ny:[4,4],nz:[1,1]},{size:2,px:[5,11],py:[3,4],pz:[2,1],nx:[8,7],ny:[5,12],nz:[1,0]},{size:2,px:[4,1],py:[1,3],pz:[1,-1],nx:[3,6],ny:[0,0],nz:[1,0]},{size:2,px:[19,9],py:[16,8],pz:[0,1],nx:[14,6],ny:[15,1],nz:[0,-1]},{size:2,px:[12,6],py:[13,5],pz:[0,-1],nx:[5,5],ny:[1,2],nz:[2,2]},{size:5,px:[16,14,4,15,12],py:[1,1,1,2,1],pz:[0,0,2,0,0],nx:[6,4,3,2,10],ny:[22,8,2,1,7],nz:[0,1,1,2,0]},{size:5,px:[6,8,6,5,5],py:[1,0,0,1,0],pz:[0,0,0,0,0],nx:[4,4,4,4,8],ny:[4,3,2,5,10],nz:[2,2,2,2,1]},{size:2,px:[9,8],py:[17,0],pz:[0,-1],nx:[2,5],ny:[5,8],nz:[2,1]},{size:2,px:[8,0],py:[7,3],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[10,21],py:[11,20],pz:[1,0],nx:[11,4],ny:[17,1],nz:[0,-1]},{size:5,px:[5,10,4,17,10],py:[3,6,3,11,5],pz:[1,0,1,0,0],nx:[21,20,9,19,10],ny:[4,3,0,2,1],nz:[0,0,1,0,-1]},{size:2,px:[23,23],py:[10,10],pz:[0,-1],nx:[23,23],ny:[21,22],nz:[0,0]},{size:5,px:[9,20,19,20,20],py:[0,3,1,2,2],pz:[1,0,0,0,-1],nx:[11,23,11,23,5],ny:[1,2,0,1,0],nz:[1,0,1,0,2]},{size:3,px:[6,8,7],py:[4,10,11],pz:[1,0,0],nx:[8,3,4],ny:[9,4,4],nz:[0,-1,-1]},{size:4,px:[13,13,10,4],py:[14,23,1,5],pz:[0,-1,-1,-1],nx:[15,14,8,8],ny:[13,12,8,9],nz:[0,0,1,1]},{size:2,px:[11,9],py:[5,8],pz:[0,-1],nx:[7,8],ny:[7,4],nz:[0,1]},{size:5,px:[4,8,4,7,7],py:[2,3,3,11,11],pz:[2,1,2,1,-1],nx:[0,0,1,0,0],ny:[4,6,15,3,2],nz:[1,1,0,2,2]},{size:2,px:[6,1],py:[12,1],pz:[0,-1],nx:[1,10],ny:[2,11],nz:[2,0]},{size:5,px:[0,0,2,3,7],py:[0,1,4,3,11],pz:[0,-1,-1,-1,-1],nx:[9,11,9,6,12],ny:[2,1,1,0,2],nz:[0,0,0,1,0]},{size:2,px:[10,11],py:[4,4],pz:[0,0],nx:[8,4],ny:[4,2],nz:[1,-1]},{size:5,px:[1,1,1,1,1],py:[15,10,19,16,18],pz:[0,1,0,0,0],nx:[4,5,3,5,6],ny:[4,19,9,18,19],nz:[1,0,1,0,-1]},{size:5,px:[12,12,12,12,20],py:[11,12,13,13,18],pz:[0,0,0,-1,-1],nx:[0,0,0,0,0],ny:[4,2,7,6,12],nz:[1,2,1,1,0]},{size:2,px:[0,0],py:[9,11],pz:[0,0],nx:[10,4],ny:[5,3],nz:[1,-1]},{size:2,px:[11,8],py:[9,6],pz:[0,1],nx:[13,13],ny:[10,10],nz:[0,-1]},{size:2,px:[6,3],py:[5,3],pz:[1,2],nx:[3,3],ny:[5,5],nz:[2,-1]},{size:2,px:[19,9],py:[10,6],pz:[0,1],nx:[4,1],ny:[2,2],nz:[2,-1]},{size:2,px:[14,4],py:[19,12],pz:[0,-1],nx:[14,8],ny:[17,10],nz:[0,1]},{size:4,px:[4,2,13,2],py:[12,6,9,3],pz:[0,1,-1,-1],nx:[1,0,1,0],ny:[16,14,11,15],nz:[0,0,1,0]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[4,4],ny:[4,8],nz:[1,-1]},{size:5,px:[9,11,12,6,10],py:[2,1,2,1,2],pz:[0,0,0,1,0],nx:[4,6,4,6,2],ny:[4,0,9,1,8],nz:[0,0,1,0,1]},{size:5,px:[4,4,7,2,2],py:[19,20,23,8,9],pz:[0,0,0,1,1],nx:[7,0,5,6,2],ny:[10,5,4,1,8],nz:[1,-1,-1,-1,-1]},{size:5,px:[18,18,17,18,18],py:[15,16,14,20,17],pz:[0,0,0,0,0],nx:[15,2,2,5,2],ny:[8,0,2,9,4],nz:[0,-1,-1,-1,-1]},{size:4,px:[13,13,13,18],py:[11,12,12,20],pz:[0,0,-1,-1],nx:[1,3,10,10],ny:[1,6,12,11],nz:[2,0,0,0]},{size:2,px:[8,9],py:[0,1],pz:[1,1],nx:[19,4],ny:[2,2],nz:[0,-1]},{size:2,px:[6,3],py:[4,2],pz:[1,2],nx:[8,4],ny:[4,0],nz:[1,-1]},{size:5,px:[23,11,22,13,13],py:[8,3,3,12,12],pz:[0,1,0,0,-1],nx:[15,7,14,13,8],ny:[7,3,6,6,3],nz:[0,1,0,0,1]},{size:3,px:[9,11,19],py:[7,3,0],pz:[1,-1,-1],nx:[23,23,11],ny:[16,12,7],nz:[0,0,1]},{size:2,px:[15,8],py:[23,7],pz:[0,-1],nx:[4,3],ny:[5,4],nz:[2,2]},{size:2,px:[4,10],py:[6,13],pz:[1,-1],nx:[2,3],ny:[4,10],nz:[2,1]},{size:2,px:[4,1],py:[11,2],pz:[1,2],nx:[9,2],ny:[5,2],nz:[1,-1]},{size:2,px:[22,22],py:[22,21],pz:[0,0],nx:[3,0],ny:[5,3],nz:[1,-1]},{size:2,px:[20,10],py:[12,6],pz:[0,1],nx:[20,10],ny:[23,11],nz:[0,-1]},{size:4,px:[10,3,3,4],py:[5,3,4,9],pz:[0,-1,-1,-1],nx:[14,4,3,11],ny:[2,1,1,3],nz:[0,2,2,0]},{size:3,px:[15,15,3],py:[1,1,4],pz:[0,-1,-1],nx:[7,4,4],ny:[8,2,3],nz:[1,2,2]},{size:3,px:[0,0,0],py:[3,4,6],pz:[2,2,1],nx:[0,21,4],ny:[23,14,3],nz:[0,-1,-1]},{size:5,px:[4,4,5,3,4],py:[9,11,8,4,8],pz:[1,1,1,2,1],nx:[21,21,10,19,19],ny:[3,4,1,0,0],nz:[0,0,1,0,-1]},{size:4,px:[21,20,20,21],py:[18,21,20,17],pz:[0,0,0,0],nx:[8,1,4,2],ny:[10,0,2,4],nz:[1,-1,-1,-1]},{size:2,px:[3,6],py:[7,14],pz:[1,0],nx:[3,5],ny:[4,5],nz:[1,-1]},{size:3,px:[12,0,23],py:[20,2,13],pz:[0,-1,-1],nx:[12,2,9],ny:[19,2,7],nz:[0,2,0]},{size:2,px:[0,6],py:[22,11],pz:[0,-1],nx:[20,18],ny:[12,23],nz:[0,0]},{size:5,px:[9,15,15,16,8],py:[2,1,2,2,1],pz:[1,0,0,0,1],nx:[1,1,1,1,1],ny:[16,10,17,18,18],nz:[0,1,0,0,-1]},{size:5,px:[10,5,3,5,8],py:[14,2,1,4,1],pz:[0,-1,-1,-1,-1],nx:[23,23,23,23,23],ny:[18,15,16,14,17],nz:[0,0,0,0,0]},{size:5,px:[2,2,2,3,2],py:[16,17,15,20,11],pz:[0,0,0,0,1],nx:[8,22,2,1,23],ny:[20,11,5,0,17],nz:[0,-1,-1,-1,-1]}],alpha:[-1.299972,1.299972,-.7630804,.7630804,-.5530378,.5530378,-.5444703,.5444703,-.5207701,.5207701,-.5035143,.5035143,-.4514416,.4514416,-.4897723,.4897723,-.5006264,.5006264,-.4626049,.4626049,-.4375402,.4375402,-.3742565,.3742565,-.3873996,.3873996,-.3715484,.3715484,-.356248,.356248,-.3216189,.3216189,-.3983409,.3983409,-.3191891,.3191891,-.3242173,.3242173,-.352804,.352804,-.3562318,.3562318,-.3592398,.3592398,-.2557584,.2557584,-.2747951,.2747951,-.2747554,.2747554,-.2980481,.2980481,-.288767,.288767,-.3895318,.3895318,-.2786896,.2786896,-.2763841,.2763841,-.2704816,.2704816,-.2075489,.2075489,-.3104773,.3104773,-.2580337,.2580337,-.2448334,.2448334,-.3054279,.3054279,-.2335804,.2335804,-.2972322,.2972322,-.2270521,.2270521,-.2134621,.2134621,-.2261655,.2261655,-.2091024,.2091024,-.2478928,.2478928,-.2468972,.2468972,-.1919746,.1919746,-.2756623,.2756623,-.2629717,.2629717,-.2198653,.2198653,-.2174434,.2174434,-.2193626,.2193626,-.1956262,.1956262,-.1720459,.1720459,-.1781067,.1781067,-.1773484,.1773484,-.1793871,.1793871,-.1973396,.1973396,-.2397262,.2397262,-.2164685,.2164685,-.2214348,.2214348,-.2265941,.2265941,-.2075436,.2075436,-.224407,.224407,-.2291992,.2291992,-.2223506,.2223506,-.1639398,.1639398,-.1732374,.1732374,-.1808631,.1808631,-.1860962,.1860962,-.1781604,.1781604,-.2108322,.2108322,-.238639,.238639,-.1942083,.1942083,-.1949161,.1949161,-.1953729,.1953729,-.2317591,.2317591,-.2335136,.2335136,-.2282835,.2282835,-.2148716,.2148716,-.1588127,.1588127,-.1566765,.1566765,-.1644839,.1644839,-.2386947,.2386947,-.1704126,.1704126,-.2213945,.2213945,-.1740398,.1740398,-.2451678,.2451678,-.2120524,.2120524,-.1886646,.1886646,-.2824447,.2824447,-.1900364,.1900364,-.2179183,.2179183,-.2257696,.2257696,-.2023404,.2023404,-.1886901,.1886901,-.1850663,.1850663,-.2035414,.2035414,-.1930174,.1930174,-.1898282,.1898282,-.166664,.166664,-.1646143,.1646143,-.1543475,.1543475,-.1366289,.1366289,-.1636837,.1636837,-.2547716,.2547716,-.1281869,.1281869,-.1509159,.1509159,-.1447827,.1447827,-.1626126,.1626126,-.2387014,.2387014,-.257116,.257116,-.1719175,.1719175,-.1646742,.1646742,-.1717041,.1717041,-.2039217,.2039217,-.1796907,.1796907]},{count:153,threshold:-4.971032,feature:[{size:5,px:[14,13,18,10,16],py:[2,2,13,3,12],pz:[0,0,0,0,0],nx:[21,7,14,23,23],ny:[16,7,8,3,13],nz:[0,1,0,0,0]},{size:5,px:[12,12,12,15,14],py:[9,10,11,3,3],pz:[0,0,0,0,0],nx:[9,9,8,14,3],ny:[9,8,5,9,5],nz:[0,0,1,0,2]},{size:5,px:[5,11,7,6,8],py:[12,8,12,12,11],pz:[0,0,0,0,0],nx:[8,4,3,9,9],ny:[4,4,4,9,9],nz:[1,1,1,0,-1]},{size:5,px:[9,8,4,10,6],py:[2,2,1,3,13],pz:[0,0,1,0,0],nx:[1,1,5,1,1],ny:[2,3,8,4,16],nz:[0,0,1,0,0]},{size:5,px:[3,16,6,17,15],py:[2,17,4,12,12],pz:[2,0,1,0,0],nx:[4,8,15,1,1],ny:[4,4,8,16,16],nz:[1,1,-1,-1,-1]},{size:4,px:[18,15,8,17],py:[12,23,6,12],pz:[0,0,1,0],nx:[15,4,10,5],ny:[21,8,14,3],nz:[0,-1,-1,-1]},{size:5,px:[18,17,9,19,19],py:[3,1,0,3,3],pz:[0,0,1,0,-1],nx:[22,11,23,23,23],ny:[0,1,2,3,4],nz:[0,1,0,0,0]},{size:4,px:[9,5,5,10],py:[18,15,14,18],pz:[0,0,0,0],nx:[10,11,2,0],ny:[16,7,12,7],nz:[0,-1,-1,-1]},{size:2,px:[2,12],py:[4,6],pz:[2,0],nx:[3,12],ny:[4,19],nz:[1,-1]},{size:5,px:[3,4,5,2,2],py:[3,3,3,1,1],pz:[0,0,0,1,-1],nx:[0,0,1,0,0],ny:[3,4,0,1,2],nz:[0,0,0,1,0]},{size:5,px:[12,12,12,8,10],py:[13,12,12,1,18],pz:[0,0,-1,-1,-1],nx:[13,8,7,14,9],ny:[10,10,7,13,4],nz:[0,1,1,0,1]},{size:5,px:[15,4,12,14,12],py:[12,3,9,10,8],pz:[0,2,0,0,0],nx:[14,7,11,2,9],ny:[8,4,7,5,4],nz:[0,1,-1,-1,-1]},{size:3,px:[3,9,7],py:[7,23,15],pz:[1,-1,-1],nx:[4,4,2],ny:[9,7,5],nz:[1,1,2]},{size:3,px:[5,17,5],py:[3,23,4],pz:[2,0,2],nx:[23,2,4],ny:[23,16,4],nz:[0,-1,-1]},{size:5,px:[4,9,9,10,8],py:[1,0,1,0,2],pz:[1,0,0,0,0],nx:[2,5,4,2,2],ny:[2,19,11,4,1],nz:[2,0,1,2,2]},{size:5,px:[8,3,8,4,7],py:[23,9,13,8,16],pz:[0,1,0,1,0],nx:[8,2,5,3,2],ny:[8,15,1,1,1],nz:[0,-1,-1,-1,-1]},{size:2,px:[11,5],py:[14,5],pz:[0,-1],nx:[1,9],ny:[3,13],nz:[2,0]},{size:5,px:[5,8,1,8,6],py:[12,12,3,23,12],pz:[0,0,2,0,0],nx:[1,1,2,1,1],ny:[22,21,23,20,20],nz:[0,0,0,0,-1]},{size:5,px:[14,21,19,21,20],py:[13,8,20,10,7],pz:[0,0,0,0,0],nx:[16,0,14,23,1],ny:[8,1,23,10,20],nz:[0,-1,-1,-1,-1]},{size:5,px:[15,16,13,14,14],py:[3,3,3,3,3],pz:[0,0,0,0,-1],nx:[18,19,18,9,17],ny:[2,2,1,1,0],nz:[0,0,0,1,0]},{size:2,px:[17,9],py:[14,4],pz:[0,-1],nx:[9,18],ny:[4,18],nz:[1,0]},{size:2,px:[21,20],py:[17,21],pz:[0,0],nx:[12,3],ny:[17,10],nz:[0,-1]},{size:2,px:[2,1],py:[10,4],pz:[1,2],nx:[4,1],ny:[10,5],nz:[1,-1]},{size:5,px:[7,8,4,9,9],py:[2,2,0,2,2],pz:[0,0,1,0,-1],nx:[5,5,4,6,3],ny:[0,1,2,0,0],nz:[0,0,0,0,1]},{size:2,px:[2,5],py:[3,5],pz:[2,-1],nx:[3,2],ny:[4,2],nz:[1,2]},{size:5,px:[0,0,0,0,0],py:[0,1,3,4,4],pz:[2,2,1,1,-1],nx:[20,20,19,20,19],ny:[21,20,23,19,22],nz:[0,0,0,0,0]},{size:2,px:[9,18],py:[8,16],pz:[1,0],nx:[14,6],ny:[15,16],nz:[0,-1]},{size:3,px:[3,4,7],py:[3,3,9],pz:[2,2,1],nx:[8,9,7],ny:[4,11,4],nz:[1,-1,-1]},{size:5,px:[6,14,4,7,7],py:[4,23,3,6,6],pz:[1,0,2,1,-1],nx:[2,0,2,1,3],ny:[20,4,21,10,23],nz:[0,2,0,1,0]},{size:5,px:[2,4,8,9,10],py:[3,8,13,23,23],pz:[2,1,0,0,0],nx:[10,4,0,3,3],ny:[21,3,0,3,23],nz:[0,-1,-1,-1,-1]},{size:3,px:[11,10,11],py:[6,5,5],pz:[0,0,0],nx:[14,6,1],ny:[7,9,5],nz:[0,1,-1]},{size:5,px:[11,11,11,11,6],py:[11,12,10,13,6],pz:[0,0,0,0,1],nx:[9,13,13,13,4],ny:[4,9,10,11,2],nz:[1,0,0,0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,11],ny:[4,7],nz:[1,-1]},{size:2,px:[1,2],py:[4,11],pz:[2,0],nx:[8,8],ny:[15,15],nz:[0,-1]},{size:5,px:[12,12,13,12,12],py:[10,11,13,12,12],pz:[0,0,0,0,-1],nx:[0,0,0,1,0],ny:[13,2,12,5,14],nz:[0,2,0,0,0]},{size:5,px:[0,0,0,1,1],py:[4,3,11,15,13],pz:[1,2,0,0,0],nx:[2,3,3,1,0],ny:[2,4,4,5,14],nz:[2,1,-1,-1,-1]},{size:2,px:[4,11],py:[12,10],pz:[0,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:5,px:[18,8,9,9,9],py:[15,7,8,10,7],pz:[0,1,1,1,1],nx:[22,23,21,22,11],ny:[20,16,23,19,9],nz:[0,0,0,0,1]},{size:5,px:[14,12,13,14,15],py:[1,0,0,0,1],pz:[0,0,0,0,0],nx:[4,9,4,7,7],ny:[2,3,1,8,8],nz:[2,1,2,1,-1]},{size:2,px:[13,9],py:[14,19],pz:[0,-1],nx:[6,10],ny:[0,2],nz:[1,0]},{size:2,px:[13,12],py:[4,4],pz:[0,0],nx:[3,3],ny:[1,1],nz:[2,-1]},{size:3,px:[14,5,5],py:[18,3,4],pz:[0,-1,-1],nx:[8,7,8],ny:[4,8,10],nz:[1,1,1]},{size:2,px:[8,18],py:[6,11],pz:[1,0],nx:[9,1],ny:[4,0],nz:[1,-1]},{size:2,px:[16,11],py:[9,7],pz:[0,0],nx:[7,7],ny:[4,4],nz:[1,-1]},{size:5,px:[23,11,23,11,23],py:[13,4,12,7,10],pz:[0,1,0,1,0],nx:[7,4,8,15,15],ny:[9,2,4,8,8],nz:[0,2,1,0,-1]},{size:2,px:[6,3],py:[1,0],pz:[0,1],nx:[4,1],ny:[1,2],nz:[0,-1]},{size:2,px:[5,5],py:[7,6],pz:[0,1],nx:[6,4],ny:[9,11],nz:[0,-1]},{size:4,px:[5,6,5,5],py:[8,6,11,6],pz:[1,1,1,0],nx:[23,0,4,5],ny:[0,2,2,1],nz:[0,-1,-1,-1]},{size:2,px:[18,4],py:[13,3],pz:[0,-1],nx:[15,4],ny:[11,2],nz:[0,2]},{size:2,px:[4,0],py:[8,0],pz:[1,-1],nx:[9,2],ny:[15,5],nz:[0,2]},{size:5,px:[15,15,16,14,14],py:[0,1,1,0,0],pz:[0,0,0,0,-1],nx:[4,4,8,8,15],ny:[4,5,4,11,23],nz:[2,2,1,1,0]},{size:4,px:[12,11,3,14],py:[14,22,1,0],pz:[0,-1,-1,-1],nx:[8,15,7,16],ny:[2,3,1,3],nz:[1,0,1,0]},{size:2,px:[5,12],py:[6,17],pz:[1,-1],nx:[2,1],ny:[4,2],nz:[1,2]},{size:5,px:[13,12,12,7,7],py:[5,6,5,14,14],pz:[0,0,0,0,-1],nx:[10,3,10,1,10],ny:[13,8,11,3,10],nz:[0,0,0,1,0]},{size:2,px:[4,4],py:[15,0],pz:[0,-1],nx:[4,4],ny:[16,17],nz:[0,0]},{size:5,px:[1,4,2,1,2],py:[4,0,1,1,0],pz:[1,1,1,2,1],nx:[4,9,1,5,1],ny:[3,4,4,5,5],nz:[1,-1,-1,-1,-1]},{size:2,px:[10,3],py:[3,1],pz:[0,2],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[16,0],py:[21,0],pz:[0,-1],nx:[6,8],ny:[8,4],nz:[1,1]},{size:2,px:[7,11],py:[4,18],pz:[0,-1],nx:[5,7],ny:[0,2],nz:[2,0]},{size:2,px:[9,7],py:[0,3],pz:[1,-1],nx:[20,10],ny:[0,1],nz:[0,1]},{size:4,px:[10,4,1,5],py:[0,6,8,4],pz:[1,-1,-1,-1],nx:[6,15,4,14],ny:[3,5,1,5],nz:[1,0,2,0]},{size:2,px:[4,4],py:[3,4],pz:[2,2],nx:[9,2],ny:[4,0],nz:[1,-1]},{size:2,px:[8,4],py:[3,4],pz:[0,-1],nx:[8,6],ny:[2,1],nz:[0,0]},{size:2,px:[2,0],py:[6,3],pz:[1,2],nx:[0,7],ny:[7,8],nz:[1,-1]},{size:2,px:[10,0],py:[7,3],pz:[1,-1],nx:[15,4],ny:[14,4],nz:[0,2]},{size:4,px:[3,1,2,2],py:[20,7,18,17],pz:[0,1,0,0],nx:[9,5,5,4],ny:[5,4,18,4],nz:[1,-1,-1,-1]},{size:2,px:[5,4],py:[3,1],pz:[2,-1],nx:[23,23],ny:[14,13],nz:[0,0]},{size:2,px:[12,4],py:[6,1],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:5,px:[22,22,11,11,11],py:[12,13,4,6,6],pz:[0,0,1,1,-1],nx:[4,4,4,4,3],ny:[16,15,18,14,11],nz:[0,0,0,0,1]},{size:2,px:[4,10],py:[0,1],pz:[1,0],nx:[2,2],ny:[2,2],nz:[2,-1]},{size:2,px:[15,6],py:[4,4],pz:[0,-1],nx:[15,4],ny:[2,1],nz:[0,2]},{size:2,px:[11,2],py:[10,20],pz:[0,-1],nx:[4,9],ny:[1,2],nz:[2,1]},{size:2,px:[4,19],py:[3,8],pz:[2,0],nx:[8,21],ny:[4,20],nz:[1,-1]},{size:5,px:[4,6,7,6,2],py:[6,15,13,14,3],pz:[1,0,0,0,-1],nx:[21,22,19,21,10],ny:[6,12,0,3,2],nz:[0,0,0,0,1]},{size:5,px:[8,12,15,14,13],py:[0,0,0,0,0],pz:[1,0,0,0,0],nx:[4,3,1,3,4],ny:[19,16,3,15,4],nz:[0,0,2,0,1]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[8,4],ny:[4,1],nz:[1,-1]},{size:4,px:[0,0,0,5],py:[10,9,11,21],pz:[1,1,-1,-1],nx:[12,4,3,11],ny:[3,1,1,3],nz:[0,2,2,0]},{size:2,px:[3,1],py:[0,0],pz:[1,2],nx:[1,4],ny:[2,1],nz:[1,-1]},{size:5,px:[2,5,1,0,1],py:[14,23,7,5,9],pz:[0,0,1,1,1],nx:[0,0,7,9,11],ny:[23,22,4,9,3],nz:[0,-1,-1,-1,-1]},{size:2,px:[8,9],py:[7,1],pz:[1,-1],nx:[8,8],ny:[8,9],nz:[1,1]},{size:2,px:[11,9],py:[11,3],pz:[1,-1],nx:[3,2],ny:[14,10],nz:[0,1]},{size:4,px:[2,4,5,4],py:[8,20,22,16],pz:[1,0,0,0],nx:[8,2,11,3],ny:[7,4,15,4],nz:[0,-1,-1,-1]},{size:3,px:[1,2,3],py:[2,1,0],pz:[0,0,0],nx:[0,0,15],ny:[1,0,11],nz:[0,0,-1]},{size:2,px:[12,22],py:[6,7],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:3,px:[13,0,5],py:[19,10,2],pz:[0,-1,-1],nx:[3,4,6],ny:[5,5,9],nz:[2,2,1]},{size:2,px:[8,15],py:[8,22],pz:[1,0],nx:[7,4],ny:[10,7],nz:[1,-1]},{size:2,px:[10,10],py:[7,6],pz:[1,1],nx:[10,1],ny:[9,0],nz:[1,-1]},{size:2,px:[9,11],py:[4,3],pz:[0,-1],nx:[5,9],ny:[0,1],nz:[1,0]},{size:5,px:[14,13,14,12,15],py:[1,2,2,2,2],pz:[0,0,0,0,0],nx:[4,8,4,7,4],ny:[2,4,3,4,4],nz:[2,1,2,1,-1]},{size:3,px:[13,8,2],py:[14,5,8],pz:[0,-1,-1],nx:[6,8,9],ny:[3,2,2],nz:[0,0,0]},{size:3,px:[3,6,8],py:[7,4,12],pz:[1,1,0],nx:[3,8,9],ny:[5,2,2],nz:[1,-1,-1]},{size:2,px:[13,4],py:[16,3],pz:[0,2],nx:[13,7],ny:[15,5],nz:[0,-1]},{size:2,px:[3,0],py:[7,9],pz:[1,-1],nx:[2,8],ny:[2,4],nz:[2,1]},{size:5,px:[3,6,8,7,7],py:[0,1,0,0,0],pz:[1,0,0,0,-1],nx:[7,9,4,3,4],ny:[9,7,4,2,2],nz:[1,1,1,2,2]},{size:3,px:[3,4,16],py:[4,4,6],pz:[1,2,0],nx:[2,2,2],ny:[0,0,1],nz:[0,-1,-1]},{size:2,px:[0,0],py:[1,0],pz:[2,2],nx:[5,5],ny:[2,2],nz:[1,-1]},{size:2,px:[9,3],py:[7,20],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[8,21],py:[10,18],pz:[0,-1],nx:[9,4],ny:[10,4],nz:[0,1]},{size:2,px:[6,13],py:[6,23],pz:[1,-1],nx:[10,10],ny:[11,12],nz:[0,0]},{size:5,px:[10,9,5,10,10],py:[9,13,6,10,10],pz:[0,0,1,0,-1],nx:[21,21,21,10,21],ny:[18,20,19,11,17],nz:[0,0,0,1,0]},{size:2,px:[8,8],py:[7,6],pz:[1,1],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[11,4],py:[14,7],pz:[0,-1],nx:[13,13],ny:[13,11],nz:[0,0]},{size:2,px:[4,4],py:[4,5],pz:[2,2],nx:[12,5],ny:[16,2],nz:[0,-1]},{size:3,px:[1,3,20],py:[3,9,2],pz:[2,-1,-1],nx:[0,0,0],ny:[7,4,13],nz:[1,2,0]},{size:2,px:[0,0],py:[4,2],pz:[1,2],nx:[1,0],ny:[4,4],nz:[1,-1]},{size:3,px:[8,9,11],py:[2,1,2],pz:[0,0,0],nx:[2,2,0],ny:[2,2,13],nz:[2,-1,-1]},{size:2,px:[1,10],py:[23,5],pz:[0,-1],nx:[3,6],ny:[1,1],nz:[2,1]},{size:4,px:[13,6,3,4],py:[8,6,4,2],pz:[0,-1,-1,-1],nx:[1,1,1,4],ny:[9,7,8,20],nz:[1,1,1,0]},{size:5,px:[11,4,4,10,3],py:[9,16,13,12,7],pz:[0,0,0,0,0],nx:[7,11,3,17,4],ny:[8,11,9,0,4],nz:[0,-1,-1,-1,-1]},{size:2,px:[6,6],py:[6,8],pz:[1,-1],nx:[0,0],ny:[1,2],nz:[2,2]},{size:2,px:[10,5],py:[7,2],pz:[0,-1],nx:[4,13],ny:[5,9],nz:[2,0]},{size:2,px:[10,5],py:[8,2],pz:[1,-1],nx:[16,4],ny:[14,5],nz:[0,2]},{size:2,px:[1,1],py:[16,15],pz:[0,0],nx:[1,20],ny:[23,1],nz:[0,-1]},{size:2,px:[2,3],py:[4,7],pz:[2,1],nx:[2,3],ny:[5,4],nz:[2,-1]},{size:2,px:[19,8],py:[5,4],pz:[0,-1],nx:[10,10],ny:[1,3],nz:[1,1]},{size:2,px:[21,21],py:[18,16],pz:[0,0],nx:[10,3],ny:[17,5],nz:[0,-1]},{size:2,px:[9,2],py:[23,4],pz:[0,2],nx:[5,11],ny:[3,7],nz:[2,1]},{size:2,px:[7,0],py:[3,2],pz:[0,-1],nx:[3,6],ny:[1,1],nz:[1,0]},{size:4,px:[5,9,8,9],py:[8,12,13,18],pz:[0,0,0,0],nx:[6,5,2,5],ny:[8,4,7,11],nz:[0,-1,-1,-1]},{size:2,px:[7,2],py:[0,0],pz:[0,2],nx:[5,5],ny:[3,4],nz:[1,-1]},{size:2,px:[11,11],py:[12,13],pz:[0,0],nx:[9,1],ny:[14,3],nz:[0,-1]},{size:5,px:[8,16,9,4,15],py:[11,13,8,4,12],pz:[1,0,1,2,0],nx:[3,3,3,3,4],ny:[4,2,1,3,0],nz:[0,0,0,0,0]},{size:2,px:[9,5],py:[7,6],pz:[1,-1],nx:[19,8],ny:[17,11],nz:[0,1]},{size:5,px:[14,15,12,13,13],py:[2,2,2,2,2],pz:[0,0,0,0,-1],nx:[20,9,19,20,4],ny:[14,2,5,15,1],nz:[0,1,0,0,2]},{size:2,px:[18,8],py:[20,7],pz:[0,1],nx:[4,9],ny:[2,2],nz:[2,-1]},{size:2,px:[6,3],py:[11,5],pz:[1,2],nx:[13,19],ny:[20,20],nz:[0,-1]},{size:3,px:[12,11,3],py:[20,20,5],pz:[0,0,-1],nx:[11,12,6],ny:[21,21,10],nz:[0,0,1]},{size:2,px:[3,6],py:[7,14],pz:[1,0],nx:[3,13],ny:[4,8],nz:[1,-1]},{size:2,px:[0,0],py:[5,9],pz:[2,1],nx:[2,11],ny:[8,6],nz:[1,-1]},{size:2,px:[2,2],py:[5,5],pz:[1,-1],nx:[0,0],ny:[6,3],nz:[1,2]},{size:2,px:[11,23],py:[5,9],pz:[1,0],nx:[8,2],ny:[11,0],nz:[0,-1]},{size:2,px:[11,23],py:[12,9],pz:[0,-1],nx:[11,22],ny:[10,21],nz:[1,0]},{size:2,px:[12,12],py:[7,7],pz:[0,-1],nx:[5,4],ny:[7,10],nz:[1,1]},{size:2,px:[9,8],py:[18,1],pz:[0,-1],nx:[5,4],ny:[8,10],nz:[1,1]},{size:2,px:[16,17],py:[11,11],pz:[0,0],nx:[15,2],ny:[9,4],nz:[0,-1]},{size:2,px:[0,1],py:[3,0],pz:[2,-1],nx:[9,10],ny:[6,5],nz:[1,1]},{size:2,px:[13,13],py:[20,21],pz:[0,-1],nx:[2,2],ny:[6,5],nz:[1,1]},{size:5,px:[20,20,4,18,19],py:[17,16,5,22,20],pz:[0,0,2,0,0],nx:[8,11,5,6,2],ny:[10,15,11,10,1],nz:[1,-1,-1,-1,-1]},{size:2,px:[11,11],py:[4,4],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:3,px:[6,5,6],py:[8,10,10],pz:[1,1,1],nx:[11,8,22],ny:[19,2,15],nz:[0,-1,-1]},{size:3,px:[5,2,13],py:[7,10,10],pz:[1,-1,-1],nx:[11,11,23],ny:[8,9,14],nz:[1,1,0]},{size:5,px:[3,6,1,5,10],py:[7,14,1,9,2],pz:[1,-1,-1,-1,-1],nx:[11,0,1,5,1],ny:[14,12,18,5,19],nz:[0,0,0,1,0]},{size:3,px:[21,21,10],py:[16,17,10],pz:[0,0,1],nx:[5,5,1],ny:[9,9,18],nz:[1,-1,-1]},{size:2,px:[6,21],py:[6,17],pz:[1,-1],nx:[20,10],ny:[7,4],nz:[0,1]},{size:2,px:[10,11],py:[0,0],pz:[1,-1],nx:[6,13],ny:[2,4],nz:[1,0]},{size:4,px:[4,4,7,9],py:[3,4,10,3],pz:[2,2,1,1],nx:[21,2,15,5],ny:[0,0,0,2],nz:[0,-1,-1,-1]},{size:3,px:[11,11,11],py:[7,6,9],pz:[1,1,1],nx:[23,4,9],ny:[23,5,6],nz:[0,-1,-1]},{size:2,px:[14,15],py:[1,1],pz:[0,0],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[11,23,11,23,23],py:[11,22,10,21,20],pz:[1,0,1,0,0],nx:[10,9,19,10,10],ny:[10,11,20,9,9],nz:[1,1,0,1,-1]},{size:2,px:[7,23],py:[13,22],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[12,1],py:[19,0],pz:[0,-1],nx:[11,12],ny:[22,17],nz:[0,0]},{size:2,px:[10,8],py:[4,3],pz:[1,-1],nx:[5,23],ny:[2,7],nz:[2,0]},{size:2,px:[9,10],py:[6,20],pz:[1,-1],nx:[8,8],ny:[4,6],nz:[1,1]}],alpha:[-1.135386,1.135386,-.90908,.90908,-.591378,.591378,-.5556534,.5556534,-.508415,.508415,-.4464489,.4464489,-.4463241,.4463241,-.4985226,.4985226,-.4424638,.4424638,-.4300093,.4300093,-.4231341,.4231341,-.4087428,.4087428,-.337448,.337448,-.3230151,.3230151,-.3084427,.3084427,-.3235494,.3235494,-.2589281,.2589281,-.2970292,.2970292,-.2957065,.2957065,-.3997619,.3997619,-.3535901,.3535901,-.2725396,.2725396,-.2649725,.2649725,-.3103888,.3103888,-.3117775,.3117775,-.258962,.258962,-.2689202,.2689202,-.2127024,.2127024,-.2436322,.2436322,-.3120574,.3120574,-.278601,.278601,-.2649072,.2649072,-.2766509,.2766509,-.2367237,.2367237,-.2658049,.2658049,-.2103463,.2103463,-.1911522,.1911522,-.2535425,.2535425,-.2434696,.2434696,-.2180788,.2180788,-.2496873,.2496873,-.2700969,.2700969,-.2565479,.2565479,-.2737741,.2737741,-.1675507,.1675507,-.2551417,.2551417,-.2067648,.2067648,-.1636834,.1636834,-.2129306,.2129306,-.1656758,.1656758,-.1919369,.1919369,-.2031763,.2031763,-.2062327,.2062327,-.257795,.257795,-.2951823,.2951823,-.202316,.202316,-.2022234,.2022234,-.2132906,.2132906,-.1653278,.1653278,-.1648474,.1648474,-.1593352,.1593352,-.173565,.173565,-.1688778,.1688778,-.1519705,.1519705,-.1812202,.1812202,-.1967481,.1967481,-.1852954,.1852954,-.231778,.231778,-.2036251,.2036251,-.1609324,.1609324,-.2160205,.2160205,-.202619,.202619,-.1854761,.1854761,-.1832038,.1832038,-.2001141,.2001141,-.1418333,.1418333,-.1704773,.1704773,-.1586261,.1586261,-.1587582,.1587582,-.1899489,.1899489,-.147716,.147716,-.2260467,.2260467,-.2393598,.2393598,-.1582373,.1582373,-.1702498,.1702498,-.1737398,.1737398,-.1462529,.1462529,-.1396517,.1396517,-.1629625,.1629625,-.1446933,.1446933,-.1811657,.1811657,-.1336427,.1336427,-.1924813,.1924813,-.145752,.145752,-.1600259,.1600259,-.1297,.1297,-.2076199,.2076199,-.151006,.151006,-.1914568,.1914568,-.2138162,.2138162,-.1856916,.1856916,-.1843047,.1843047,-.1526846,.1526846,-.132832,.132832,-.1751311,.1751311,-.1643908,.1643908,-.1482706,.1482706,-.1622298,.1622298,-.1884979,.1884979,-.1633604,.1633604,-.1554166,.1554166,-.1405332,.1405332,-.1772398,.1772398,-.1410008,.1410008,-.1362301,.1362301,-.1709087,.1709087,-.1584613,.1584613,-.1188814,.1188814,-.1423888,.1423888,-.1345565,.1345565,-.1835986,.1835986,-.1445329,.1445329,-.1385826,.1385826,-.1558917,.1558917,-.1476053,.1476053,-.1370722,.1370722,-.2362666,.2362666,-.2907774,.2907774,-.165636,.165636,-.1644407,.1644407,-.1443394,.1443394,-.1438823,.1438823,-.1476964,.1476964,-.1956593,.1956593,-.2417519,.2417519,-.1659315,.1659315,-.1466254,.1466254,-.2034909,.2034909,-.2128771,.2128771,-.1665429,.1665429,-.1387131,.1387131,-.1298823,.1298823,-.1329495,.1329495,-.1769587,.1769587,-.136653,.136653,-.1254359,.1254359,-.1673022,.1673022,-.1602519,.1602519,-.1897245,.1897245,-.1893579,.1893579,-.157935,.157935,-.1472589,.1472589,-.1614193,.1614193]},{count:203,threshold:-4.769677,feature:[{size:5,px:[12,5,14,9,7],py:[9,13,3,1,3],pz:[0,0,0,0,0],nx:[1,0,5,14,9],ny:[5,3,8,8,9],nz:[2,0,1,0,0]},{size:5,px:[14,13,11,17,12],py:[2,2,4,13,3],pz:[0,0,0,0,0],nx:[7,22,8,23,22],ny:[8,15,11,12,3],nz:[1,0,1,0,0]},{size:5,px:[9,11,11,11,16],py:[4,8,7,9,12],pz:[0,0,0,0,0],nx:[4,8,14,9,9],ny:[4,4,8,8,8],nz:[1,1,0,0,-1]},{size:5,px:[6,12,12,8,3],py:[11,7,8,10,2],pz:[0,0,0,0,2],nx:[8,4,4,4,0],ny:[4,4,4,11,0],nz:[1,1,-1,-1,-1]},{size:5,px:[19,17,18,9,9],py:[3,2,3,1,1],pz:[0,0,0,1,-1],nx:[21,21,10,22,22],ny:[1,2,0,4,3],nz:[0,0,1,0,0]},{size:2,px:[4,7],py:[4,6],pz:[2,1],nx:[8,7],ny:[4,10],nz:[1,1]},{size:5,px:[14,17,17,13,12],py:[18,15,16,18,18],pz:[0,0,0,0,0],nx:[13,19,5,20,6],ny:[16,4,1,19,0],nz:[0,-1,-1,-1,-1]},{size:5,px:[6,7,4,5,5],py:[15,23,6,12,16],pz:[0,0,1,0,0],nx:[3,14,14,6,6],ny:[4,11,11,9,0],nz:[1,-1,-1,-1,-1]},{size:5,px:[16,9,6,3,11],py:[2,2,5,3,2],pz:[0,0,1,2,0],nx:[3,4,2,5,5],ny:[4,11,2,8,8],nz:[1,1,2,1,-1]},{size:5,px:[6,1,5,3,3],py:[14,4,15,7,7],pz:[0,2,0,1,-1],nx:[0,0,1,1,1],ny:[7,8,18,17,5],nz:[1,1,0,0,2]},{size:5,px:[12,12,9,5,3],py:[14,14,0,3,7],pz:[0,-1,-1,-1,-1],nx:[7,7,14,8,13],ny:[7,8,13,10,10],nz:[1,1,0,1,0]},{size:2,px:[3,4],py:[7,9],pz:[1,-1],nx:[2,4],ny:[5,4],nz:[2,1]},{size:3,px:[10,21,17],py:[7,11,23],pz:[1,0,0],nx:[21,9,3],ny:[23,5,5],nz:[0,-1,-1]},{size:5,px:[8,11,9,10,11],py:[2,0,1,1,2],pz:[0,0,0,0,0],nx:[4,5,6,4,3],ny:[8,4,18,7,4],nz:[1,1,0,1,-1]},{size:5,px:[20,22,3,19,10],py:[20,9,4,22,3],pz:[0,0,2,0,1],nx:[8,20,8,3,2],ny:[4,3,6,4,3],nz:[1,-1,-1,-1,-1]},{size:2,px:[4,4],py:[8,7],pz:[1,1],nx:[9,2],ny:[15,5],nz:[0,-1]},{size:2,px:[11,13],py:[13,4],pz:[0,-1],nx:[20,21],ny:[1,4],nz:[0,0]},{size:5,px:[1,2,7,6,8],py:[0,2,3,3,3],pz:[2,1,0,0,0],nx:[1,2,1,1,1],ny:[0,0,4,3,3],nz:[1,0,0,0,-1]},{size:2,px:[3,10],py:[9,11],pz:[0,0],nx:[6,3],ny:[9,2],nz:[0,-1]},{size:5,px:[12,12,12,12,6],py:[10,11,13,12,6],pz:[0,0,0,0,-1],nx:[10,2,1,10,10],ny:[10,4,2,11,9],nz:[0,1,2,0,0]},{size:5,px:[16,18,11,17,15],py:[11,12,8,12,11],pz:[0,0,0,0,0],nx:[14,0,19,0,10],ny:[9,3,14,8,9],nz:[0,-1,-1,-1,-1]},{size:4,px:[5,9,5,8],py:[21,18,20,23],pz:[0,0,0,0],nx:[8,4,3,1],ny:[20,3,4,3],nz:[0,-1,-1,-1]},{size:2,px:[2,3],py:[3,2],pz:[2,2],nx:[3,12],ny:[4,23],nz:[1,-1]},{size:5,px:[0,1,1,1,1],py:[2,16,14,13,12],pz:[2,0,0,0,0],nx:[8,4,9,4,7],ny:[9,3,4,2,9],nz:[1,2,1,2,1]},{size:2,px:[4,9],py:[3,7],pz:[2,-1],nx:[4,9],ny:[2,4],nz:[2,1]},{size:5,px:[15,16,17,15,8],py:[3,3,3,18,1],pz:[0,0,0,0,1],nx:[1,2,2,1,3],ny:[5,3,2,6,0],nz:[0,0,0,0,0]},{size:2,px:[4,17],py:[4,14],pz:[2,0],nx:[15,7],ny:[15,10],nz:[0,-1]},{size:3,px:[14,12,3],py:[3,13,3],pz:[0,-1,-1],nx:[4,17,4],ny:[3,19,4],nz:[2,0,2]},{size:4,px:[4,5,12,2],py:[9,6,19,4],pz:[1,1,0,2],nx:[12,17,4,4],ny:[18,19,4,4],nz:[0,-1,-1,-1]},{size:5,px:[10,19,20,20,19],py:[7,14,13,14,13],pz:[1,0,0,0,-1],nx:[11,23,23,23,23],ny:[9,15,13,16,14],nz:[1,0,0,0,0]},{size:4,px:[0,0,0,2],py:[5,6,5,14],pz:[1,1,2,0],nx:[0,3,3,17],ny:[23,5,5,9],nz:[0,-1,-1,-1]},{size:2,px:[15,4],py:[23,5],pz:[0,2],nx:[9,3],ny:[4,4],nz:[1,-1]},{size:4,px:[6,5,10,12],py:[3,3,23,23],pz:[1,1,0,0],nx:[11,1,1,4],ny:[21,3,5,5],nz:[0,-1,-1,-1]},{size:2,px:[5,2],py:[9,4],pz:[1,2],nx:[4,9],ny:[4,2],nz:[1,-1]},{size:5,px:[23,23,23,23,23],py:[14,9,13,11,12],pz:[0,0,0,0,0],nx:[6,13,7,8,8],ny:[9,6,3,3,3],nz:[1,0,1,1,-1]},{size:2,px:[10,3],py:[4,5],pz:[0,-1],nx:[3,8],ny:[1,3],nz:[2,1]},{size:2,px:[3,12],py:[4,18],pz:[2,0],nx:[12,0],ny:[16,3],nz:[0,-1]},{size:2,px:[16,2],py:[4,4],pz:[0,-1],nx:[16,4],ny:[1,0],nz:[0,2]},{size:2,px:[3,4],py:[7,1],pz:[1,-1],nx:[5,3],ny:[19,9],nz:[0,1]},{size:4,px:[20,19,20,21],py:[2,0,1,3],pz:[0,0,0,0],nx:[11,5,23,11],ny:[0,0,1,1],nz:[1,2,0,1]},{size:2,px:[12,13],py:[7,5],pz:[0,0],nx:[8,5],ny:[3,5],nz:[1,-1]},{size:5,px:[22,21,22,22,22],py:[20,22,18,19,16],pz:[0,0,0,0,0],nx:[2,3,3,15,15],ny:[4,5,4,7,7],nz:[1,2,1,0,-1]},{size:3,px:[15,14,14],py:[1,1,1],pz:[0,0,-1],nx:[17,18,16],ny:[1,2,1],nz:[0,0,0]},{size:4,px:[17,16,16,15],py:[2,1,0,0],pz:[0,0,0,0],nx:[7,4,2,11],ny:[11,2,1,4],nz:[1,2,-1,-1]},{size:4,px:[18,0,0,0],py:[14,6,5,4],pz:[0,-1,-1,-1],nx:[19,19,19,19],ny:[16,19,17,18],nz:[0,0,0,0]},{size:4,px:[11,5,5,0],py:[14,1,4,4],pz:[0,-1,-1,-1],nx:[11,8,2,15],ny:[17,14,1,9],nz:[0,0,2,0]},{size:2,px:[4,5],py:[19,21],pz:[0,0],nx:[10,2],ny:[15,4],nz:[0,-1]},{size:2,px:[6,4],py:[4,6],pz:[1,1],nx:[3,3],ny:[4,5],nz:[1,-1]},{size:2,px:[2,7],py:[1,13],pz:[2,0],nx:[7,2],ny:[1,4],nz:[1,-1]},{size:4,px:[15,10,4,7],py:[23,3,1,7],pz:[0,1,2,1],nx:[0,4,1,1],ny:[0,2,0,-1900147915],nz:[0,-1,-1,-1]},{size:2,px:[7,2],py:[12,11],pz:[0,-1],nx:[2,4],ny:[2,5],nz:[2,1]},{size:5,px:[0,0,0,1,0],
py:[9,4,3,2,6],pz:[0,1,2,1,1],nx:[9,4,2,16,16],ny:[7,4,2,8,8],nz:[0,1,2,0,-1]},{size:5,px:[18,4,9,4,4],py:[12,5,6,3,4],pz:[0,2,1,2,-1],nx:[4,3,3,2,3],ny:[23,19,21,16,18],nz:[0,0,0,0,0]},{size:2,px:[6,6],py:[14,13],pz:[0,0],nx:[3,10],ny:[4,7],nz:[1,-1]},{size:5,px:[3,4,4,2,2],py:[8,11,7,4,4],pz:[1,1,1,2,-1],nx:[20,18,19,20,19],ny:[4,0,2,3,1],nz:[0,0,0,0,0]},{size:5,px:[17,12,14,8,16],py:[2,0,0,0,0],pz:[0,0,0,1,0],nx:[3,15,3,2,2],ny:[2,9,7,2,2],nz:[2,0,1,2,-1]},{size:5,px:[11,10,11,11,11],py:[10,12,11,12,12],pz:[0,0,0,0,-1],nx:[13,13,20,10,13],ny:[9,11,8,4,10],nz:[0,0,0,1,0]},{size:2,px:[8,16],py:[7,13],pz:[1,0],nx:[8,13],ny:[4,11],nz:[1,-1]},{size:2,px:[6,7],py:[20,3],pz:[0,-1],nx:[3,4],ny:[10,10],nz:[1,1]},{size:3,px:[13,10,17],py:[9,3,5],pz:[0,-1,-1],nx:[1,3,1],ny:[5,16,6],nz:[2,0,1]},{size:2,px:[0,0],py:[5,5],pz:[2,-1],nx:[8,3],ny:[14,10],nz:[0,1]},{size:4,px:[11,9,12,10],py:[2,2,2,2],pz:[0,0,0,0],nx:[4,4,4,10],ny:[5,5,0,16],nz:[1,-1,-1,-1]},{size:3,px:[7,9,12],py:[2,2,2],pz:[1,-1,-1],nx:[4,7,2],ny:[3,1,0],nz:[0,0,2]},{size:2,px:[2,4],py:[3,12],pz:[2,0],nx:[7,4],ny:[6,5],nz:[1,2]},{size:4,px:[12,12,6,3],py:[12,11,21,7],pz:[0,0,-1,-1],nx:[1,0,0,0],ny:[13,3,6,5],nz:[0,2,1,1]},{size:3,px:[3,1,3],py:[21,8,18],pz:[0,1,0],nx:[11,20,0],ny:[17,17,6],nz:[0,-1,-1]},{size:2,px:[2,8],py:[3,12],pz:[2,0],nx:[2,20],ny:[4,17],nz:[1,-1]},{size:5,px:[2,3,4,3,2],py:[10,14,14,15,13],pz:[1,0,0,0,0],nx:[0,0,1,0,0],ny:[21,20,23,19,19],nz:[0,0,0,0,-1]},{size:2,px:[2,15],py:[7,4],pz:[1,-1],nx:[3,8],ny:[4,14],nz:[1,0]},{size:5,px:[19,14,12,15,4],py:[8,12,10,16,2],pz:[0,0,0,0,2],nx:[8,0,12,4,0],ny:[4,1,12,2,19],nz:[1,-1,-1,-1,-1]},{size:2,px:[18,9],py:[15,3],pz:[0,-1],nx:[8,15],ny:[9,14],nz:[1,0]},{size:5,px:[4,2,3,4,9],py:[9,4,3,8,23],pz:[1,2,1,1,0],nx:[11,23,23,11,11],ny:[0,2,3,1,1],nz:[1,0,0,1,-1]},{size:2,px:[6,7],py:[1,1],pz:[0,0],nx:[3,4],ny:[10,5],nz:[1,-1]},{size:4,px:[11,9,8,5],py:[12,15,13,3],pz:[0,-1,-1,-1],nx:[3,12,14,13],ny:[0,3,3,3],nz:[2,0,0,0]},{size:2,px:[11,11],py:[6,5],pz:[0,0],nx:[8,11],ny:[4,20],nz:[1,-1]},{size:5,px:[21,20,21,21,21],py:[18,21,17,19,19],pz:[0,0,0,0,-1],nx:[2,5,4,4,5],ny:[5,12,11,10,10],nz:[1,0,0,0,0]},{size:5,px:[1,1,1,1,1],py:[10,11,7,9,8],pz:[0,0,0,0,0],nx:[11,23,23,23,23],ny:[10,20,21,19,19],nz:[1,0,0,0,-1]},{size:5,px:[7,8,7,3,1],py:[14,13,13,2,2],pz:[0,0,-1,-1,-1],nx:[1,10,2,2,10],ny:[2,13,4,16,12],nz:[2,0,1,0,0]},{size:2,px:[17,18],py:[12,12],pz:[0,0],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[17,0],py:[5,20],pz:[0,-1],nx:[4,9],ny:[0,2],nz:[2,1]},{size:5,px:[22,22,22,11,23],py:[16,15,14,6,13],pz:[0,0,0,1,0],nx:[16,15,7,9,9],ny:[15,8,4,10,10],nz:[0,0,1,1,-1]},{size:2,px:[13,3],py:[3,1],pz:[0,2],nx:[8,3],ny:[4,2],nz:[1,-1]},{size:2,px:[5,6],py:[4,1],pz:[1,-1],nx:[6,3],ny:[4,2],nz:[1,2]},{size:3,px:[4,2,6],py:[6,3,4],pz:[1,2,1],nx:[10,0,4],ny:[9,4,3],nz:[0,-1,-1]},{size:4,px:[2,8,4,10],py:[4,23,7,23],pz:[2,0,1,0],nx:[9,4,11,9],ny:[21,5,16,0],nz:[0,-1,-1,-1]},{size:2,px:[6,3],py:[13,0],pz:[0,-1],nx:[8,2],ny:[11,2],nz:[0,2]},{size:2,px:[3,3],py:[1,4],pz:[1,-1],nx:[3,5],ny:[0,1],nz:[1,0]},{size:2,px:[7,2],py:[0,0],pz:[0,2],nx:[2,10],ny:[1,6],nz:[2,0]},{size:2,px:[10,2],py:[7,0],pz:[1,-1],nx:[21,5],ny:[15,4],nz:[0,2]},{size:2,px:[1,1],py:[10,9],pz:[0,0],nx:[0,3],ny:[13,11],nz:[0,-1]},{size:2,px:[11,9],py:[13,0],pz:[0,-1],nx:[3,3],ny:[4,3],nz:[1,1]},{size:5,px:[14,13,13,14,14],py:[12,10,11,13,13],pz:[0,0,0,0,-1],nx:[9,8,4,5,7],ny:[4,4,2,2,4],nz:[0,0,1,1,0]},{size:3,px:[2,4,1],py:[2,0,0],pz:[0,0,1],nx:[0,7,4],ny:[0,3,2],nz:[1,-1,-1]},{size:2,px:[11,4],py:[5,0],pz:[0,-1],nx:[8,6],ny:[4,9],nz:[1,1]},{size:3,px:[0,0,0],py:[20,2,4],pz:[0,-1,-1],nx:[12,3,10],ny:[3,1,3],nz:[0,2,0]},{size:5,px:[5,11,10,13,13],py:[0,0,0,2,2],pz:[1,0,0,0,-1],nx:[4,5,5,4,5],ny:[14,0,2,6,1],nz:[0,0,0,0,0]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,11],ny:[4,1],nz:[1,-1]},{size:2,px:[14,-1715597992],py:[19,9],pz:[0,-1],nx:[7,14],ny:[10,17],nz:[1,0]},{size:2,px:[11,1],py:[9,0],pz:[0,-1],nx:[1,12],ny:[2,10],nz:[2,0]},{size:2,px:[17,9],py:[13,17],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[0,7],py:[1,9],pz:[1,-1],nx:[18,4],ny:[14,2],nz:[0,2]},{size:2,px:[14,7],py:[23,9],pz:[0,-1],nx:[4,8],ny:[5,10],nz:[2,1]},{size:2,px:[8,7],py:[17,9],pz:[0,-1],nx:[3,2],ny:[0,3],nz:[0,0]},{size:2,px:[13,4],py:[20,1],pz:[0,-1],nx:[5,3],ny:[21,17],nz:[0,0]},{size:3,px:[0,0,1],py:[3,6,15],pz:[2,1,0],nx:[10,8,3],ny:[6,4,2],nz:[0,-1,-1]},{size:2,px:[8,8],py:[18,8],pz:[0,-1],nx:[5,4],ny:[8,10],nz:[1,1]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[8,9],ny:[4,3],nz:[1,-1]},{size:2,px:[6,3],py:[11,5],pz:[1,2],nx:[13,3],ny:[19,2],nz:[0,-1]},{size:2,px:[4,6],py:[1,11],pz:[2,-1],nx:[3,2],ny:[1,0],nz:[1,2]},{size:2,px:[9,4],py:[10,5],pz:[1,2],nx:[8,4],ny:[10,4],nz:[1,-1]},{size:2,px:[12,12],py:[11,20],pz:[0,-1],nx:[0,0],ny:[6,10],nz:[1,0]},{size:2,px:[7,12],py:[2,20],pz:[0,-1],nx:[2,2],ny:[2,3],nz:[2,2]},{size:2,px:[0,15],py:[5,21],pz:[1,-1],nx:[10,9],ny:[3,3],nz:[0,1]},{size:2,px:[15,9],py:[1,0],pz:[0,1],nx:[19,3],ny:[0,3],nz:[0,-1]},{size:2,px:[21,5],py:[13,5],pz:[0,2],nx:[23,6],ny:[23,5],nz:[0,-1]},{size:2,px:[5,8],py:[3,1],pz:[2,-1],nx:[9,9],ny:[6,5],nz:[1,1]},{size:2,px:[2,2],py:[7,7],pz:[1,-1],nx:[5,3],ny:[23,17],nz:[0,0]},{size:2,px:[11,3],py:[6,4],pz:[0,-1],nx:[2,4],ny:[2,4],nz:[2,1]},{size:3,px:[14,0,17],py:[20,3,21],pz:[0,-1,-1],nx:[11,11,11],ny:[7,9,10],nz:[1,1,1]},{size:5,px:[11,11,23,23,12],py:[10,11,21,20,12],pz:[1,1,0,0,0],nx:[8,3,6,7,7],ny:[4,5,11,11,11],nz:[1,2,1,1,-1]},{size:2,px:[11,11],py:[11,10],pz:[0,0],nx:[9,3],ny:[2,5],nz:[1,-1]},{size:2,px:[12,14],py:[19,19],pz:[0,0],nx:[12,13],ny:[18,17],nz:[0,-1]},{size:5,px:[13,14,12,15,14],py:[0,0,1,1,1],pz:[0,0,0,0,0],nx:[4,8,4,7,7],ny:[3,4,2,5,5],nz:[2,1,2,1,-1]},{size:2,px:[17,5],py:[10,2],pz:[0,-1],nx:[4,9],ny:[2,3],nz:[2,1]},{size:2,px:[18,10],py:[6,10],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[8,18,8,4,16],py:[6,12,9,4,13],pz:[1,0,1,2,0],nx:[3,4,3,5,5],ny:[0,2,3,1,1],nz:[1,0,0,0,-1]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[8,0],ny:[4,0],nz:[1,-1]},{size:2,px:[0,0],py:[4,5],pz:[2,-1],nx:[4,2],ny:[14,7],nz:[0,1]},{size:4,px:[3,4,4,3],py:[11,12,12,2],pz:[0,0,-1,-1],nx:[1,2,1,2],ny:[11,14,12,16],nz:[0,0,0,0]},{size:2,px:[6,0],py:[11,0],pz:[0,-1],nx:[3,4],ny:[4,5],nz:[1,1]},{size:2,px:[3,2],py:[21,11],pz:[0,1],nx:[3,2],ny:[10,0],nz:[1,-1]},{size:3,px:[10,3,13],py:[2,0,2],pz:[0,2,0],nx:[7,16,1],ny:[10,4,1],nz:[0,-1,-1]},{size:2,px:[6,12],py:[2,5],pz:[1,0],nx:[6,18],ny:[1,19],nz:[1,-1]},{size:2,px:[3,16],py:[0,16],pz:[1,-1],nx:[11,2],ny:[5,1],nz:[0,2]},{size:2,px:[11,10],py:[13,1],pz:[0,-1],nx:[1,1],ny:[22,21],nz:[0,0]},{size:2,px:[11,10],py:[18,18],pz:[0,0],nx:[5,8],ny:[9,0],nz:[1,-1]},{size:2,px:[3,2],py:[20,18],pz:[0,0],nx:[8,3],ny:[5,1],nz:[1,-1]},{size:2,px:[14,2],py:[17,1],pz:[0,-1],nx:[14,13],ny:[15,15],nz:[0,0]},{size:2,px:[3,4],py:[2,3],pz:[2,2],nx:[8,3],ny:[4,0],nz:[1,-1]},{size:5,px:[8,18,18,8,7],py:[6,11,11,7,9],pz:[1,0,-1,-1,-1],nx:[5,13,5,11,5],ny:[3,11,0,8,2],nz:[2,0,2,1,2]},{size:5,px:[12,0,5,4,7],py:[15,0,4,0,9],pz:[0,-1,-1,-1,-1],nx:[8,7,4,16,6],ny:[17,12,9,10,12],nz:[0,0,1,0,0]},{size:2,px:[6,7],py:[14,1],pz:[0,-1],nx:[5,4],ny:[9,4],nz:[1,1]},{size:4,px:[8,0,22,4],py:[4,4,23,0],pz:[0,-1,-1,-1],nx:[2,4,2,5],ny:[0,1,2,9],nz:[2,1,2,1]},{size:5,px:[9,9,10,10,8],py:[0,1,1,2,0],pz:[1,1,1,1,1],nx:[4,16,16,16,6],ny:[2,11,11,11,12],nz:[2,0,-1,-1,-1]},{size:2,px:[6,6],py:[6,5],pz:[1,1],nx:[0,4],ny:[3,2],nz:[1,-1]},{size:3,px:[10,3,4],py:[5,9,8],pz:[1,-1,-1],nx:[11,23,23],ny:[7,12,11],nz:[1,0,0]},{size:3,px:[13,12,7],py:[19,19,10],pz:[0,0,1],nx:[13,5,19],ny:[20,15,22],nz:[0,-1,-1]},{size:2,px:[12,12],py:[12,13],pz:[0,0],nx:[9,10],ny:[4,4],nz:[1,-1]},{size:2,px:[0,12],py:[1,13],pz:[2,-1],nx:[2,7],ny:[2,13],nz:[2,0]},{size:2,px:[10,10],py:[8,9],pz:[1,1],nx:[19,7],ny:[23,13],nz:[0,-1]},{size:4,px:[8,7,23,15],py:[11,12,4,21],pz:[0,0,-1,-1],nx:[2,5,1,10],ny:[6,6,2,13],nz:[0,1,1,0]},{size:2,px:[10,9],py:[3,3],pz:[0,0],nx:[2,3],ny:[2,4],nz:[2,-1]},{size:2,px:[5,2],py:[3,4],pz:[2,-1],nx:[3,6],ny:[1,2],nz:[2,1]},{size:2,px:[7,11],py:[20,16],pz:[0,-1],nx:[2,4],ny:[5,20],nz:[2,0]},{size:2,px:[9,7],py:[7,5],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[4,2],py:[11,3],pz:[1,2],nx:[5,5],ny:[3,5],nz:[2,-1]},{size:2,px:[11,3],py:[11,5],pz:[1,-1],nx:[4,1],ny:[12,3],nz:[0,2]},{size:2,px:[9,11],py:[6,4],pz:[1,-1],nx:[10,20],ny:[9,18],nz:[1,0]},{size:5,px:[2,2,2,2,1],py:[15,13,16,14,7],pz:[0,0,0,0,1],nx:[15,8,9,8,4],ny:[11,6,5,5,4],nz:[0,1,1,1,-1]},{size:2,px:[12,2],py:[5,5],pz:[0,-1],nx:[3,2],ny:[7,2],nz:[1,2]},{size:2,px:[5,11],py:[1,3],pz:[2,1],nx:[10,10],ny:[3,3],nz:[1,-1]},{size:2,px:[17,11],py:[13,18],pz:[0,-1],nx:[6,9],ny:[9,4],nz:[1,1]},{size:5,px:[5,1,2,5,6],py:[14,4,9,15,23],pz:[0,2,1,0,0],nx:[4,9,18,16,17],ny:[0,1,1,0,0],nz:[2,1,0,0,0]},{size:2,px:[16,17],py:[0,0],pz:[0,0],nx:[23,23],ny:[5,4],nz:[0,-1]},{size:2,px:[13,8],py:[20,6],pz:[0,-1],nx:[5,6],ny:[12,10],nz:[0,1]},{size:2,px:[6,15],py:[15,0],pz:[0,-1],nx:[6,3],ny:[16,4],nz:[0,1]},{size:2,px:[18,20],py:[7,8],pz:[0,0],nx:[18,11],ny:[9,14],nz:[0,-1]},{size:2,px:[9,4],py:[12,6],pz:[0,1],nx:[3,15],ny:[4,4],nz:[1,-1]},{size:2,px:[0,0],py:[5,2],pz:[1,2],nx:[5,5],ny:[2,2],nz:[1,-1]},{size:2,px:[5,20],py:[1,20],pz:[1,-1],nx:[15,17],ny:[1,2],nz:[0,0]},{size:2,px:[7,2],py:[16,4],pz:[0,2],nx:[4,0],ny:[10,6],nz:[1,-1]},{size:2,px:[3,8],py:[5,0],pz:[1,-1],nx:[1,1],ny:[10,18],nz:[1,0]},{size:2,px:[22,0],py:[3,0],pz:[0,-1],nx:[23,11],ny:[4,1],nz:[0,1]},{size:3,px:[19,10,20],py:[21,8,18],pz:[0,1,0],nx:[3,6,20],ny:[5,11,14],nz:[2,-1,-1]},{size:4,px:[2,1,6,5],py:[7,4,23,22],pz:[1,2,0,0],nx:[9,19,20,4],ny:[8,11,9,2],nz:[0,-1,-1,-1]},{size:2,px:[3,6],py:[2,11],pz:[2,1],nx:[12,10],ny:[21,9],nz:[0,-1]},{size:4,px:[6,0,2,2],py:[6,1,4,1],pz:[1,-1,-1,-1],nx:[0,0,0,0],ny:[5,8,9,4],nz:[1,0,0,1]},{size:5,px:[3,13,6,11,9],py:[0,3,1,1,2],pz:[2,0,1,0,0],nx:[7,20,16,4,7],ny:[7,2,19,2,6],nz:[1,0,0,2,1]},{size:4,px:[7,5,2,6],py:[7,7,4,11],pz:[0,0,2,1],nx:[7,1,21,0],ny:[8,4,11,3],nz:[0,-1,-1,-1]},{size:2,px:[2,2],py:[3,2],pz:[2,2],nx:[8,9],ny:[3,11],nz:[1,-1]},{size:2,px:[7,13],py:[3,5],pz:[1,0],nx:[4,3],ny:[2,2],nz:[1,-1]},{size:4,px:[3,12,13,11],py:[0,1,1,1],pz:[2,0,0,0],nx:[8,9,13,0],ny:[4,1,16,3],nz:[1,-1,-1,-1]},{size:2,px:[10,1],py:[4,14],pz:[0,-1],nx:[5,10],ny:[1,2],nz:[1,0]},{size:2,px:[11,12],py:[21,21],pz:[0,0],nx:[10,11],ny:[19,19],nz:[0,0]},{size:2,px:[8,12],py:[6,21],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[11,7],py:[19,0],pz:[0,-1],nx:[6,5],ny:[9,11],nz:[1,1]},{size:5,px:[11,11,11,10,10],py:[10,12,11,13,13],pz:[0,0,0,0,-1],nx:[7,13,6,12,7],ny:[10,6,3,6,11],nz:[0,0,1,0,0]},{size:2,px:[12,11],py:[6,12],pz:[0,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:5,px:[16,15,16,15,17],py:[1,0,0,1,1],pz:[0,0,0,0,0],nx:[13,7,6,12,12],ny:[5,4,3,6,6],nz:[0,1,1,0,-1]},{size:2,px:[2,3],py:[1,3],pz:[2,1],nx:[1,5],ny:[1,3],nz:[2,-1]},{size:2,px:[6,3],py:[13,6],pz:[0,1],nx:[4,9],ny:[4,4],nz:[1,-1]},{size:2,px:[0,3],py:[4,3],pz:[1,-1],nx:[4,8],ny:[3,6],nz:[2,1]},{size:2,px:[6,3],py:[2,1],pz:[0,1],nx:[5,5],ny:[7,21],nz:[1,-1]},{size:2,px:[8,4],py:[0,0],pz:[1,-1],nx:[19,17],ny:[1,0],nz:[0,0]},{size:4,px:[8,11,5,0],py:[6,1,1,22],pz:[1,-1,-1,-1],nx:[0,10,10,1],ny:[6,12,13,4],nz:[1,0,0,1]},{size:2,px:[8,17],py:[6,13],pz:[1,0],nx:[14,17],ny:[9,3],nz:[0,-1]},{size:2,px:[5,8],py:[0,4],pz:[2,-1],nx:[9,8],ny:[1,1],nz:[0,0]},{size:2,px:[11,14],py:[13,9],pz:[0,-1],nx:[23,23],ny:[21,19],nz:[0,0]},{size:2,px:[10,9],py:[9,3],pz:[0,-1],nx:[6,3],ny:[2,1],nz:[1,2]},{size:2,px:[11,1],py:[4,4],pz:[0,-1],nx:[2,4],ny:[2,4],nz:[2,1]},{size:2,px:[5,9],py:[3,3],pz:[2,-1],nx:[17,9],ny:[12,5],nz:[0,1]},{size:2,px:[9,7],py:[18,16],pz:[0,-1],nx:[5,2],ny:[9,5],nz:[1,2]},{size:2,px:[3,6],py:[0,1],pz:[1,-1],nx:[4,5],ny:[1,0],nz:[0,0]}],alpha:[-1.149973,1.149973,-.6844773,.6844773,-.6635048,.6635048,-.4888349,.4888349,-.4267976,.4267976,-.42581,.42581,-.4815853,.4815853,-.4091859,.4091859,-.3137414,.3137414,-.333986,.333986,-.3891196,.3891196,-.4167691,.4167691,-.3186609,.3186609,-.2957171,.2957171,-.3210062,.3210062,-.2725684,.2725684,-.2452176,.2452176,-.2812662,.2812662,-.3029622,.3029622,-.3293745,.3293745,-.3441536,.3441536,-.2946918,.2946918,-.2890545,.2890545,-.1949205,.1949205,-.2176102,.2176102,-.259519,.259519,-.2690931,.2690931,-.2130294,.2130294,-.2316308,.2316308,-.2798562,.2798562,-.2146988,.2146988,-.2332089,.2332089,-.2470614,.2470614,-.22043,.22043,-.2272045,.2272045,-.2583686,.2583686,-.2072299,.2072299,-.1834971,.1834971,-.2332656,.2332656,-.3271297,.3271297,-.2401937,.2401937,-.2006316,.2006316,-.2401947,.2401947,-.2475346,.2475346,-.2579532,.2579532,-.2466235,.2466235,-.1787582,.1787582,-.2036892,.2036892,-.1665028,.1665028,-.157651,.157651,-.2036997,.2036997,-.2040734,.2040734,-.1792532,.1792532,-.2174767,.2174767,-.1876948,.1876948,-.1883137,.1883137,-.1923872,.1923872,-.2620218,.2620218,-.1659873,.1659873,-.1475948,.1475948,-.1731607,.1731607,-.2059256,.2059256,-.1586309,.1586309,-.1607668,.1607668,-.1975101,.1975101,-.2130745,.2130745,-.1898872,.1898872,-.2052598,.2052598,-.1599397,.1599397,-.1770134,.1770134,-.1888249,.1888249,-.1515406,.1515406,-.1907771,.1907771,-.1698406,.1698406,-.2079535,.2079535,-.1966967,.1966967,-.1631391,.1631391,-.2158666,.2158666,-.2891774,.2891774,-.1581556,.1581556,-.1475359,.1475359,-.1806169,.1806169,-.1782238,.1782238,-.166044,.166044,-.1576919,.1576919,-.1741775,.1741775,-.1427265,.1427265,-.169588,.169588,-.1486712,.1486712,-.1533565,.1533565,-.1601464,.1601464,-.1978414,.1978414,-.1746566,.1746566,-.1794736,.1794736,-.1896567,.1896567,-.1666197,.1666197,-.1969351,.1969351,-.2321735,.2321735,-.1592485,.1592485,-.1671464,.1671464,-.1688885,.1688885,-.1868042,.1868042,-.1301138,.1301138,-.1330094,.1330094,-.1268423,.1268423,-.1820868,.1820868,-.188102,.188102,-.1580814,.1580814,-.1302653,.1302653,-.1787262,.1787262,-.1658453,.1658453,-.1240772,.1240772,-.1315621,.1315621,-.1756341,.1756341,-.1429438,.1429438,-.1351775,.1351775,-.2035692,.2035692,-.126767,.126767,-.128847,.128847,-.1393648,.1393648,-.1755962,.1755962,-.1308445,.1308445,-.1703894,.1703894,-.1461334,.1461334,-.1368683,.1368683,-.1244085,.1244085,-.1718163,.1718163,-.1415624,.1415624,-.1752024,.1752024,-.1666463,.1666463,-.1407325,.1407325,-.1258317,.1258317,-.1416511,.1416511,-.1420816,.1420816,-.1562547,.1562547,-.1542952,.1542952,-.1158829,.1158829,-.1392875,.1392875,-.1610095,.1610095,-.154644,.154644,-.1416235,.1416235,-.2028817,.2028817,-.1106779,.1106779,-.0923166,.0923166,-.116446,.116446,-.1701578,.1701578,-.1277995,.1277995,-.1946177,.1946177,-.1394509,.1394509,-.1370145,.1370145,-.1446031,.1446031,-.1665215,.1665215,-.1435822,.1435822,-.1559354,.1559354,-.159186,.159186,-.1193338,.1193338,-.1236954,.1236954,-.1209139,.1209139,-.1267385,.1267385,-.1232397,.1232397,-.1299632,.1299632,-.130202,.130202,-.1202975,.1202975,-.1525378,.1525378,-.1123073,.1123073,-.1605678,.1605678,-.1406867,.1406867,-.1354273,.1354273,-.1393192,.1393192,-.1278263,.1278263,-.1172073,.1172073,-.1153493,.1153493,-.1356318,.1356318,-.1316614,.1316614,-.1374489,.1374489,-.1018254,.1018254,-.1473336,.1473336,-.1289687,.1289687,-.1299183,.1299183,-.1178391,.1178391,-.1619059,.1619059,-.1842569,.1842569,-.1829095,.1829095,-.1939918,.1939918,-.1395362,.1395362,-.1774673,.1774673,-.1688216,.1688216,-.1671747,.1671747,-.1850178,.1850178,-.1106695,.1106695,-.1258323,.1258323,-.1246819,.1246819,-.09892193,.09892193,-.1399638,.1399638,-.1228375,.1228375,-.1756236,.1756236,-.1360307,.1360307,-.1266574,.1266574,-.1372135,.1372135,-.1175947,.1175947,-.1330075,.1330075,-.1396152,.1396152,-.2088443,.2088443]},{count:301,threshold:-4.887516,feature:[{size:5,px:[8,11,8,14,10],py:[6,9,3,3,4],pz:[1,0,0,0,0],nx:[8,7,19,7,13],ny:[11,8,8,5,8],nz:[1,1,0,1,0]},{size:5,px:[14,3,13,12,12],py:[4,6,4,4,8],pz:[0,1,0,0,0],nx:[2,5,2,10,10],ny:[2,8,5,8,8],nz:[2,1,2,0,-1]},{size:5,px:[6,5,3,7,7],py:[2,3,1,2,2],pz:[0,0,1,0,-1],nx:[2,2,1,2,1],ny:[3,1,2,2,2],nz:[0,0,2,0,1]},{size:5,px:[3,3,6,12,8],py:[4,2,4,10,17],pz:[2,2,1,0,0],nx:[4,8,8,2,1],ny:[4,4,4,2,2],nz:[1,1,-1,-1,-1]},{size:5,px:[18,19,17,9,16],py:[1,2,2,0,2],pz:[0,0,0,1,0],nx:[23,23,22,22,22],ny:[4,3,1,0,2],nz:[0,0,0,0,0]},{size:3,px:[15,4,14],py:[23,4,18],pz:[0,2,0],nx:[7,0,5],ny:[10,4,9],nz:[1,-1,-1]},{size:5,px:[11,11,16,11,17],py:[8,6,11,7,11],pz:[0,0,0,0,0],nx:[8,4,14,14,1],ny:[4,4,8,8,5],nz:[1,1,0,-1,-1]},{size:5,px:[12,12,12,12,12],py:[13,10,11,12,12],pz:[0,0,0,0,-1],nx:[4,4,1,2,9],ny:[8,10,2,4,15],nz:[0,1,2,1,0]},{size:2,px:[19,0],py:[14,17],pz:[0,-1],nx:[20,19],ny:[15,22],nz:[0,0]},{size:5,px:[3,3,1,3,5],py:[13,15,6,14,22],pz:[0,0,1,0,0],nx:[0,0,1,0,0],ny:[11,21,23,5,5],nz:[1,0,0,2,-1]},{size:5,px:[4,2,10,4,3],py:[19,4,13,16,13],pz:[0,1,0,0,0],nx:[3,20,7,4,0],ny:[4,19,5,1,5],nz:[1,-1,-1,-1,-1]},{size:2,px:[11,5],py:[4,4],pz:[0,-1],nx:[15,3],ny:[15,1],nz:[0,2]},{size:4,px:[17,17,12,11],py:[14,15,18,18],pz:[0,0,0,0],nx:[11,4,1,0],ny:[17,20,8,5],nz:[0,-1,-1,-1]},{size:5,px:[6,2,1,2,11],py:[14,4,1,1,18],pz:[0,-1,-1,-1,-1],nx:[5,5,3,5,2],ny:[18,17,7,9,2],nz:[0,0,1,1,2]},{size:5,px:[20,19,20,15,20],py:[17,20,12,12,8],pz:[0,0,0,0,0],nx:[17,0,5,2,2],ny:[8,4,9,2,2],nz:[0,-1,-1,-1,-1]},{size:2,px:[6,8],py:[7,11],pz:[1,-1],nx:[7,8],ny:[7,10],nz:[1,1]},{size:5,px:[15,16,14,8,8],py:[2,2,2,0,0],pz:[0,0,0,1,-1],nx:[20,11,21,18,19],ny:[3,6,5,1,2],nz:[0,1,0,0,0]},{size:4,px:[17,18,9,8],py:[23,21,7,8],pz:[0,0,1,1],nx:[8,17,10,18],ny:[4,12,2,1],nz:[1,-1,-1,-1]},{size:5,px:[2,2,9,4,8],py:[7,3,12,12,23],pz:[1,1,0,0,0],nx:[0,0,0,0,0],ny:[3,1,2,4,4],nz:[0,0,0,0,-1]},{size:3,px:[7,8,5],py:[22,23,9],pz:[0,0,1],nx:[9,4,2],ny:[21,4,0],nz:[0,-1,-1]},{size:2,px:[3,3],py:[7,7],pz:[1,-1],nx:[3,2],ny:[4,2],nz:[1,2]},{size:5,px:[15,11,10,3,17],py:[0,1,2,3,1],pz:[0,0,0,2,0],nx:[5,8,4,3,3],ny:[9,4,7,10,10],nz:[1,1,1,1,-1]},{size:3,px:[22,11,22],py:[12,5,14],pz:[0,1,0],nx:[23,23,3],ny:[22,23,8],nz:[0,0,-1]},{size:2,px:[3,11],py:[7,5],pz:[1,-1],nx:[8,2],ny:[14,5],nz:[0,2]},{size:4,px:[17,16,2,4],py:[14,13,5,0],pz:[0,0,-1,-1],nx:[8,9,15,8],ny:[8,9,14,7],nz:[1,1,0,1]},{size:2,px:[5,16],py:[6,13],pz:[1,-1],nx:[2,1],ny:[4,2],nz:[1,2]},{size:5,px:[1,0,1,2,1],py:[15,2,16,19,12],pz:[0,2,0,0,0],nx:[8,7,4,9,9],ny:[5,11,4,5,5],nz:[1,1,1,1,-1]},{size:2,px:[8,7],py:[11,12],pz:[0,0],nx:[9,1],ny:[10,16],nz:[0,-1]},{size:2,px:[15,13],py:[17,10],pz:[0,-1],nx:[7,4],ny:[8,4],nz:[1,2]},{size:5,px:[11,10,7,8,9],py:[0,0,1,1,1],pz:[0,0,0,0,0],nx:[4,5,4,5,6],ny:[1,0,2,1,0],nz:[0,0,0,0,-1]},{size:2,px:[2,2],py:[4,3],pz:[2,2],nx:[3,21],ny:[4,20],nz:[1,-1]},{size:5,px:[10,11,5,2,11],py:[12,10,6,11,11],pz:[0,0,1,0,0],nx:[4,15,16,7,7],ny:[5,10,11,10,10],nz:[1,0,0,0,-1]},{size:5,px:[13,14,1,11,11],py:[2,2,3,2,2],pz:[0,0,2,0,-1],nx:[3,0,0,1,0],ny:[23,15,14,9,8],nz:[0,0,0,1,1]},{size:2,px:[17,2],py:[13,5],pz:[0,-1],nx:[4,9],ny:[2,4],nz:[2,1]},{size:2,px:[10,5],py:[4,1],pz:[0,-1],nx:[11,3],ny:[3,0],nz:[0,2]},{size:2,px:[5,3],py:[3,3],pz:[2,-1],nx:[11,23],ny:[8,14],nz:[1,0]},{size:3,px:[22,22,22],py:[16,18,9],pz:[0,0,0],nx:[13,2,0],ny:[17,3,5],nz:[0,-1,-1]},{size:5,px:[13,10,13,14,11],py:[2,2,1,2,1],pz:[0,0,0,0,0],nx:[3,3,8,6,6],ny:[2,5,4,11,11],nz:[2,2,1,1,-1]},{size:3,px:[12,1,1],py:[14,0,1],pz:[0,-1,-1],nx:[8,15,7],ny:[1,2,0],nz:[1,0,1]},{size:2,px:[4,5],py:[20,23],pz:[0,0],nx:[3,3],ny:[10,2],nz:[1,-1]},{size:2,px:[2,4],py:[7,2],pz:[1,-1],nx:[4,3],ny:[23,16],nz:[0,0]},{size:3,px:[3,3,6],py:[5,2,4],pz:[2,2,1],nx:[3,1,2],ny:[5,17,0],nz:[1,-1,-1]},{size:2,px:[14,8],py:[17,6],pz:[0,1],nx:[13,10],ny:[16,9],nz:[0,-1]},{size:5,px:[15,7,14,13,14],py:[1,0,0,0,1],pz:[0,1,0,0,0],nx:[4,4,4,8,8],ny:[5,3,2,10,10],nz:[2,2,2,1,-1]},{size:5,px:[8,9,4,5,4],py:[13,12,9,5,7],pz:[0,0,1,1,1],nx:[22,21,22,22,22],ny:[4,0,3,2,2],nz:[0,0,0,0,-1]},{size:2,px:[17,17],py:[16,13],pz:[0,0],nx:[14,21],ny:[8,0],nz:[0,-1]},{size:2,px:[16,10],py:[4,9],pz:[0,-1],nx:[16,10],ny:[3,3],nz:[0,1]},{size:5,px:[1,1,0,1,0],py:[17,16,7,15,8],pz:[0,0,1,0,0],nx:[4,3,8,9,7],ny:[3,3,6,6,6],nz:[1,1,0,0,-1]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[8,3],ny:[4,3],nz:[1,-1]},{size:2,px:[10,2],py:[17,4],pz:[0,2],nx:[10,12],ny:[15,14],nz:[0,-1]},{size:2,px:[11,11],py:[14,12],pz:[0,0],nx:[9,10],ny:[13,11],nz:[0,0]},{size:2,px:[12,13],py:[5,5],pz:[0,0],nx:[3,4],ny:[4,1],nz:[1,-1]},{size:5,px:[7,10,8,11,11],py:[13,2,12,2,2],pz:[0,0,0,0,-1],nx:[10,1,1,10,1],ny:[12,5,3,13,1],nz:[0,1,1,0,2]},{size:2,px:[6,10],py:[4,2],pz:[1,-1],nx:[4,6],ny:[4,9],nz:[1,1]},{size:2,px:[20,20],py:[21,22],pz:[0,0],nx:[15,8],ny:[5,5],nz:[0,-1]},{size:2,px:[4,3],py:[3,3],pz:[2,2],nx:[9,17],ny:[4,15],nz:[1,-1]},{size:3,px:[2,2,4],py:[3,3,7],pz:[2,-1,-1],nx:[7,4,4],ny:[6,5,4],nz:[1,2,2]},{size:5,px:[8,9,16,17,17],py:[1,2,1,1,1],pz:[1,1,0,0,-1],nx:[2,2,4,2,4],ny:[16,14,22,15,21],nz:[0,0,0,0,0]},{size:2,px:[9,9],py:[18,0],pz:[0,-1],nx:[2,5],ny:[5,8],nz:[2,1]},{size:2,px:[7,8],py:[11,11],pz:[0,0],nx:[15,5],ny:[8,8],nz:[0,-1]},{size:2,px:[0,3],py:[4,3],pz:[2,-1],nx:[1,6],ny:[4,14],nz:[2,0]},{size:2,px:[6,12],py:[7,11],pz:[1,-1],nx:[0,0],ny:[7,12],nz:[1,0]},{size:2,px:[3,7],py:[10,22],pz:[1,0],nx:[4,3],ny:[10,0],nz:[1,-1]},{size:2,px:[5,19],py:[4,21],pz:[2,-1],nx:[11,11],ny:[8,9],nz:[1,1]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[4,20],ny:[4,5],nz:[1,-1]},{size:5,px:[11,23,23,23,23],py:[7,13,19,20,21],pz:[1,0,0,0,0],nx:[4,3,2,8,8],ny:[11,5,5,23,23],nz:[1,1,2,0,-1]},{size:2,px:[4,1],py:[0,2],pz:[0,0],nx:[0,6],ny:[0,11],nz:[0,-1]},{size:2,px:[11,8],py:[12,1],pz:[0,-1],nx:[23,23],ny:[13,12],nz:[0,0]},{size:5,px:[23,11,23,11,11],py:[13,7,12,5,6],pz:[0,1,0,1,1],nx:[6,3,8,7,7],ny:[12,4,4,11,11],nz:[0,1,1,0,-1]},{size:2,px:[20,5],py:[15,5],pz:[0,-1],nx:[10,10],ny:[11,10],nz:[1,1]},{size:2,px:[11,4],py:[19,8],pz:[0,1],nx:[11,19],ny:[18,2],nz:[0,-1]},{size:2,px:[14,6],py:[3,4],pz:[0,-1],nx:[8,15],ny:[1,0],nz:[1,0]},{size:4,px:[14,5,13,12],py:[23,3,23,23],pz:[0,1,0,0],nx:[12,0,1,4],ny:[21,3,2,4],nz:[0,-1,-1,-1]},{size:2,px:[19,5],py:[12,2],pz:[0,-1],nx:[4,7],ny:[3,5],nz:[2,1]},{size:2,px:[0,8],py:[5,3],pz:[2,-1],nx:[5,22],ny:[3,11],nz:[2,0]},{size:2,px:[2,6],py:[3,12],pz:[2,0],nx:[3,5],ny:[4,2],nz:[1,-1]},{size:2,px:[5,5],py:[0,6],pz:[2,-1],nx:[14,6],ny:[4,2],nz:[0,1]},{size:2,px:[16,11],py:[1,0],pz:[0,-1],nx:[4,8],ny:[4,10],nz:[2,1]},{size:2,px:[9,4],py:[4,3],pz:[1,1],nx:[5,8],ny:[0,10],nz:[2,-1]},{size:2,px:[16,1],py:[22,1],pz:[0,-1],nx:[2,2],ny:[4,2],nz:[2,2]},{size:2,px:[12,2],py:[11,2],pz:[0,-1],nx:[5,5],ny:[1,0],nz:[2,2]},{size:2,px:[11,11],py:[4,3],pz:[1,1],nx:[7,5],ny:[4,0],nz:[1,-1]},{size:2,px:[9,2],py:[22,3],pz:[0,2],nx:[4,9],ny:[10,11],nz:[1,-1]},{size:2,px:[2,4],py:[8,10],pz:[1,-1],nx:[5,3],ny:[23,18],nz:[0,0]},{size:2,px:[12,6],py:[21,9],pz:[0,-1],nx:[11,23],ny:[6,10],nz:[1,0]},{size:2,px:[9,9],py:[8,7],pz:[1,1],nx:[18,8],ny:[18,6],nz:[0,-1]},{size:2,px:[13,3],py:[19,0],pz:[0,-1],nx:[6,5],ny:[9,11],nz:[1,1]},{size:5,px:[2,10,9,7,8],py:[0,1,0,1,0],pz:[2,0,0,0,0],nx:[3,4,6,8,8],ny:[2,4,9,4,4],nz:[2,1,1,1,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[9,4],ny:[4,2],nz:[1,-1]},{size:2,px:[0,4],py:[23,3],pz:[0,-1],nx:[12,9],ny:[2,2],nz:[0,0]},{size:2,px:[4,2],py:[10,3],pz:[1,2],nx:[0,2],ny:[23,5],nz:[0,-1]},{size:2,px:[12,14],py:[18,0],pz:[0,-1],nx:[12,8],ny:[16,10],nz:[0,1]},{size:4,px:[10,18,7,5],py:[14,8,0,3],pz:[0,-1,-1,-1],nx:[8,6,8,5],ny:[11,12,5,5],nz:[0,0,1,1]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[8,8],ny:[4,2],nz:[1,-1]},{size:2,px:[12,10],py:[20,20],pz:[0,0],nx:[11,10],ny:[19,19],nz:[0,0]},{size:2,px:[17,10],py:[16,20],pz:[0,-1],nx:[8,7],ny:[4,8],nz:[1,1]},{size:3,px:[2,1,3],py:[20,4,21],pz:[0,2,0],nx:[3,4,0],ny:[10,1,0],nz:[1,-1,-1]},{size:5,px:[6,7,3,6,6],py:[15,14,7,16,19],pz:[0,0,1,0,0],nx:[0,0,0,0,0],ny:[18,19,16,17,17],nz:[0,0,0,0,-1]},{size:2,px:[8,16],py:[6,12],pz:[1,0],nx:[8,15],ny:[4,10],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[1,3,2,0,4],pz:[2,2,2,2,1],nx:[13,8,14,4,7],ny:[23,6,23,3,9],nz:[0,1,0,2,-1]},{size:2,px:[3,6],py:[3,5],pz:[2,1],nx:[10,8],ny:[11,6],nz:[0,-1]},{size:2,px:[11,10],py:[4,4],pz:[0,0],nx:[8,5],ny:[4,9],nz:[1,-1]},{size:5,px:[15,18,9,16,4],py:[12,13,6,23,3],pz:[0,0,1,0,2],nx:[6,3,6,2,7],ny:[2,3,0,1,0],nz:[0,0,0,1,0]},{size:2,px:[4,18],py:[12,13],pz:[0,-1],nx:[2,8],ny:[3,4],nz:[2,1]},{size:2,px:[4,2],py:[10,4],pz:[1,2],nx:[3,3],ny:[5,0],nz:[2,-1]},{size:2,px:[9,19],py:[7,8],pz:[1,0],nx:[8,3],ny:[4,0],nz:[1,-1]},{size:2,px:[6,0],py:[6,0],pz:[0,-1],nx:[0,0],ny:[7,2],nz:[1,2]},{size:2,px:[8,8],py:[0,0],pz:[1,-1],nx:[17,18],ny:[0,2],nz:[0,0]},{size:4,px:[13,4,4,1],py:[14,7,3,5],pz:[0,-1,-1,-1],nx:[3,16,3,7],ny:[1,15,5,13],nz:[2,0,2,0]},{size:2,px:[4,9],py:[6,11],pz:[1,0],nx:[3,23],ny:[4,8],nz:[1,-1]},{size:5,px:[9,17,4,16,16],py:[2,3,1,3,3],pz:[1,0,2,0,-1],nx:[2,3,3,2,3],ny:[1,7,2,3,3],nz:[2,1,1,1,1]},{size:2,px:[10,5],py:[22,9],pz:[0,1],nx:[10,3],ny:[21,2],nz:[0,-1]},{size:2,px:[11,11],py:[6,3],pz:[0,-1],nx:[8,5],ny:[4,3],nz:[1,1]},{size:2,px:[10,5],py:[8,3],pz:[0,-1],nx:[14,5],ny:[14,2],nz:[0,2]},{size:2,px:[7,8],py:[3,2],pz:[0,-1],nx:[8,2],ny:[18,2],nz:[0,2]},{size:2,px:[1,1],py:[19,11],pz:[0,1],nx:[9,4],ny:[5,1],nz:[0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,3],ny:[4,4],nz:[1,-1]},{size:5,px:[7,15,13,14,4],py:[6,12,9,11,4],pz:[1,0,0,0,2],nx:[7,3,8,4,5],ny:[0,3,0,2,1],nz:[0,0,0,0,0]},{size:5,px:[10,13,7,8,9],py:[0,1,1,0,1],pz:[0,0,0,0,0],nx:[7,4,4,4,8],ny:[8,3,4,2,4],nz:[1,2,2,2,1]},{size:2,px:[6,1],py:[6,0],pz:[1,-1],nx:[11,7],ny:[3,2],nz:[0,1]},{size:2,px:[13,0],py:[13,2],pz:[0,-1],nx:[0,1],ny:[13,16],nz:[0,0]},{size:2,px:[8,17],py:[6,13],pz:[1,0],nx:[8,1],ny:[4,16],nz:[1,-1]},{size:5,px:[12,11,3,6,17],py:[4,4,1,2,14],pz:[0,0,2,1,0],nx:[6,23,23,6,23],ny:[5,7,6,6,14],nz:[1,0,0,1,0]},{size:2,px:[5,22],py:[4,17],pz:[2,-1],nx:[4,8],ny:[5,7],nz:[2,1]},{size:2,px:[15,14],py:[1,1],pz:[0,0],nx:[4,7],ny:[2,4],nz:[2,-1]},{size:2,px:[15,17],py:[12,7],pz:[0,-1],nx:[14,10],ny:[11,4],nz:[0,1]},{size:4,px:[10,2,9,15],py:[5,11,1,13],pz:[0,-1,-1,-1],nx:[11,3,3,13],ny:[1,1,0,1],nz:[0,2,2,0]},{size:2,px:[7,21],py:[15,22],pz:[0,-1],nx:[4,9],ny:[8,14],nz:[1,0]},{size:2,px:[6,5],py:[21,2],pz:[0,-1],nx:[3,5],ny:[11,21],nz:[1,0]},{size:2,px:[17,7],py:[2,0],pz:[0,-1],nx:[4,8],ny:[5,11],nz:[2,1]},{size:2,px:[11,8],py:[10,4],pz:[0,-1],nx:[13,12],ny:[3,3],nz:[0,0]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[7,1],ny:[8,2],nz:[0,-1]},{size:5,px:[0,0,1,0,0],py:[12,4,14,0,2],pz:[0,1,0,2,2],nx:[9,5,8,4,4],ny:[6,3,6,3,3],nz:[0,1,0,1,-1]},{size:5,px:[8,0,0,3,2],py:[6,5,0,8,2],pz:[1,-1,-1,-1,-1],nx:[23,7,22,11,4],ny:[12,6,14,4,3],nz:[0,1,0,1,2]},{size:4,px:[12,12,4,8],py:[12,11,3,10],pz:[0,0,-1,-1],nx:[0,0,0,0],ny:[2,1,0,3],nz:[1,2,2,1]},{size:2,px:[10,6],py:[7,6],pz:[1,-1],nx:[16,4],ny:[12,2],nz:[0,2]},{size:5,px:[2,1,3,3,3],py:[14,8,20,21,21],pz:[0,1,0,0,-1],nx:[20,10,21,21,21],ny:[23,11,21,23,20],nz:[0,1,0,0,0]},{size:2,px:[6,13],py:[2,4],pz:[1,0],nx:[7,21],ny:[8,0],nz:[0,-1]},{size:2,px:[12,3],py:[17,4],pz:[0,2],nx:[11,10],ny:[15,7],nz:[0,-1]},{size:4,px:[11,0,19,2],py:[15,2,23,10],pz:[0,-1,-1,-1],nx:[6,8,16,2],ny:[13,11,10,2],nz:[0,0,0,2]},{size:2,px:[6,3],py:[14,7],pz:[0,1],nx:[3,1],ny:[4,1],nz:[1,-1]},{size:4,px:[12,17,5,10],py:[19,15,14,3],pz:[0,-1,-1,-1],nx:[4,12,6,12],ny:[4,18,9,22],nz:[1,0,1,0]},{size:2,px:[8,3],py:[13,5],pz:[0,-1],nx:[3,4],ny:[4,9],nz:[1,1]},{size:5,px:[6,5,4,5,3],py:[2,1,2,2,0],pz:[0,0,0,0,1],nx:[7,4,9,18,18],ny:[4,4,7,14,14],nz:[1,1,1,0,-1]},{size:4,px:[8,3,20,1],py:[6,3,18,0],pz:[1,-1,-1,-1],nx:[13,11,5,22],ny:[12,6,2,17],nz:[0,1,2,0]},{size:2,px:[6,3],py:[6,3],pz:[1,2],nx:[8,5],ny:[4,2],nz:[1,-1]},{size:2,px:[21,7],py:[14,7],pz:[0,1],nx:[16,11],ny:[14,6],nz:[0,-1]},{size:2,px:[10,4],py:[3,1],pz:[0,-1],nx:[9,5],ny:[0,0],nz:[0,1]},{size:2,px:[4,10],py:[5,8],pz:[2,1],nx:[5,14],ny:[9,7],nz:[1,-1]},{size:2,px:[9,2],py:[23,4],pz:[0,2],nx:[2,2],ny:[5,5],nz:[2,-1]},{size:5,px:[10,9,11,10,10],py:[2,2,1,1,1],pz:[0,0,0,0,-1],nx:[2,3,2,4,5],ny:[4,10,2,4,3],nz:[2,1,1,0,0]},{size:2,px:[11,4],py:[13,4],pz:[0,-1],nx:[8,4],ny:[4,1],nz:[1,2]},{size:2,px:[17,5],py:[15,1],pz:[0,-1],nx:[20,19],ny:[14,14],nz:[0,0]},{size:2,px:[2,2],py:[20,18],pz:[0,0],nx:[2,1],ny:[23,5],nz:[0,-1]},{size:2,px:[10,1],py:[18,3],pz:[0,2],nx:[11,3],ny:[16,5],nz:[0,-1]},{size:2,px:[3,8],py:[6,10],pz:[1,0],nx:[9,0],ny:[9,3],nz:[0,-1]},{size:2,px:[20,10],py:[21,7],pz:[0,1],nx:[7,2],ny:[3,5],nz:[1,-1]},{size:2,px:[10,6],py:[4,7],pz:[1,-1],nx:[23,5],ny:[9,2],nz:[0,2]},{size:5,px:[2,4,5,3,4],py:[0,1,1,2,2],pz:[1,0,0,0,0],nx:[1,0,1,1,1],ny:[2,1,0,1,1],nz:[0,1,0,0,-1]},{size:2,px:[8,16],py:[7,13],pz:[1,0],nx:[8,3],ny:[4,16],nz:[1,-1]},{size:2,px:[17,15],py:[7,19],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[4,3],py:[11,5],pz:[1,2],nx:[7,8],ny:[9,4],nz:[1,-1]},{size:2,px:[23,11],py:[9,6],pz:[0,1],nx:[22,22],ny:[23,23],nz:[0,-1]},{size:2,px:[23,23],py:[21,20],pz:[0,0],nx:[2,2],ny:[5,4],nz:[1,-1]},{size:2,px:[17,4],py:[12,2],pz:[0,-1],nx:[9,8],ny:[4,5],nz:[1,1]},{size:2,px:[6,14],py:[2,4],pz:[1,0],nx:[7,18],ny:[1,1],nz:[1,-1]},{size:2,px:[20,22],py:[1,2],pz:[0,0],nx:[23,23],ny:[1,1],nz:[0,-1]},{size:2,px:[0,1],py:[9,10],pz:[1,1],nx:[8,0],ny:[15,0],nz:[0,-1]},{size:3,px:[11,11,6],py:[10,11,11],pz:[0,0,-1],nx:[23,23,23],ny:[19,21,20],nz:[0,0,0]},{size:5,px:[23,23,23,6,6],py:[21,22,22,3,6],pz:[0,0,-1,-1,-1],nx:[8,8,8,17,4],ny:[7,10,8,16,5],nz:[1,1,1,0,2]},{size:2,px:[10,23],py:[1,22],pz:[0,-1],nx:[7,2],ny:[11,2],nz:[0,2]},{size:2,px:[7,14],py:[3,10],pz:[1,-1],nx:[5,3],ny:[2,1],nz:[0,1]},{size:2,px:[5,3],py:[13,7],pz:[0,1],nx:[4,10],ny:[4,0],nz:[1,-1]},{size:2,px:[10,0],py:[15,6],pz:[0,-1],nx:[3,6],ny:[1,2],nz:[2,1]},{size:2,px:[13,4],py:[18,17],pz:[0,-1],nx:[7,6],ny:[10,7],nz:[1,1]},{size:2,px:[12,11],py:[3,8],pz:[0,-1],nx:[7,8],ny:[4,4],nz:[1,1]},{size:2,px:[17,4],py:[5,7],pz:[0,1],nx:[17,10],ny:[4,0],nz:[0,-1]},{size:5,px:[16,8,16,15,15],py:[0,0,1,0,1],pz:[0,1,0,0,0],nx:[7,4,7,4,4],ny:[7,5,8,1,1],nz:[1,2,1,2,-1]},{size:2,px:[13,11],py:[5,6],pz:[0,-1],nx:[4,5],ny:[2,2],nz:[1,1]},{size:2,px:[3,6],py:[3,6],pz:[2,1],nx:[8,4],ny:[4,3],nz:[1,-1]},{size:2,px:[10,16],py:[8,10],pz:[0,0],nx:[7,2],ny:[3,3],nz:[1,-1]},{size:2,px:[6,8],py:[4,11],pz:[1,0],nx:[10,1],ny:[9,20],nz:[0,-1]},{size:2,px:[5,1],py:[4,2],pz:[2,-1],nx:[23,23],ny:[15,16],nz:[0,0]},{size:5,px:[9,8,2,4,9],py:[1,1,0,1,2],pz:[0,0,2,1,0],nx:[8,3,8,4,4],ny:[6,2,4,2,2],nz:[1,2,1,2,-1]},{size:2,px:[13,6],py:[10,5],pz:[0,-1],nx:[13,7],ny:[6,3],nz:[0,1]},{size:2,px:[11,5],py:[10,5],pz:[1,2],nx:[10,8],ny:[10,9],nz:[1,-1]},{size:2,px:[7,4],py:[6,3],pz:[1,2],nx:[9,14],ny:[4,9],nz:[1,-1]},{size:3,px:[5,2,15],py:[3,1,22],pz:[1,-1,-1],nx:[15,9,4],ny:[0,1,0],nz:[0,1,2]},{size:2,px:[10,19],py:[9,21],pz:[1,0],nx:[2,17],ny:[5,14],nz:[2,-1]},{size:3,px:[16,2,1],py:[2,10,4],pz:[0,-1,-1],nx:[4,4,9],ny:[3,2,6],nz:[2,2,1]},{size:2,px:[10,2],py:[6,10],pz:[1,-1],nx:[21,22],ny:[16,12],nz:[0,0]},{size:2,px:[7,16],py:[4,23],pz:[0,-1],nx:[7,3],ny:[3,3],nz:[0,1]},{size:2,px:[1,1],py:[13,14],pz:[0,0],nx:[1,2],ny:[18,3],nz:[0,-1]},{size:2,px:[18,5],py:[13,4],pz:[0,-1],nx:[4,13],ny:[2,11],nz:[2,0]},{size:2,px:[18,17],py:[3,3],pz:[0,0],nx:[19,19],ny:[1,1],nz:[0,-1]},{size:2,px:[9,5],py:[0,5],pz:[1,-1],nx:[12,3],ny:[5,1],nz:[0,2]},{size:2,px:[5,3],py:[2,1],pz:[1,2],nx:[18,4],ny:[4,1],nz:[0,-1]},{size:5,px:[13,13,2,10,15],py:[11,12,13,17,23],pz:[0,-1,-1,-1,-1],nx:[12,13,4,3,8],ny:[4,4,1,0,3],nz:[0,0,2,2,1]},{size:2,px:[9,3],py:[2,2],pz:[0,-1],nx:[4,2],ny:[7,2],nz:[1,2]},{size:2,px:[13,4],py:[5,1],pz:[0,-1],nx:[18,4],ny:[12,2],nz:[0,2]},{size:2,px:[19,4],py:[11,1],pz:[0,-1],nx:[4,7],ny:[2,2],nz:[2,1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,2],ny:[4,5],nz:[1,-1]},{size:2,px:[4,0],py:[7,7],pz:[0,-1],nx:[4,9],ny:[0,2],nz:[2,1]},{size:2,px:[4,9],py:[0,2],pz:[2,1],nx:[6,4],ny:[3,4],nz:[0,-1]},{size:2,px:[4,2],py:[9,4],pz:[1,2],nx:[13,5],ny:[18,2],nz:[0,-1]},{size:3,px:[5,23,23],py:[2,8,7],pz:[2,0,0],nx:[10,12,1],ny:[4,1,0],nz:[1,-1,-1]},{size:2,px:[13,0],py:[3,3],pz:[0,-1],nx:[4,4],ny:[2,3],nz:[2,2]},{size:2,px:[6,5],py:[10,5],pz:[0,-1],nx:[0,0],ny:[4,11],nz:[1,0]},{size:2,px:[11,2],py:[14,11],pz:[0,-1],nx:[10,11],ny:[4,13],nz:[1,0]},{size:2,px:[5,6],py:[21,23],pz:[0,0],nx:[7,0],ny:[21,3],nz:[0,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[8,5],ny:[4,2],nz:[1,-1]},{size:2,px:[7,6],py:[8,8],pz:[0,0],nx:[6,14],ny:[9,15],nz:[0,-1]},{size:2,px:[16,6],py:[4,8],pz:[0,-1],nx:[16,8],ny:[0,1],nz:[0,1]},{size:4,px:[3,6,0,9],
py:[0,8,5,23],pz:[1,-1,-1,-1],nx:[12,2,6,10],ny:[5,0,3,5],nz:[0,2,1,0]},{size:2,px:[3,6],py:[7,13],pz:[1,0],nx:[3,9],ny:[4,9],nz:[1,-1]},{size:2,px:[2,5],py:[8,23],pz:[1,0],nx:[8,9],ny:[15,0],nz:[0,-1]},{size:2,px:[13,18],py:[8,0],pz:[0,-1],nx:[1,1],ny:[9,8],nz:[1,1]},{size:2,px:[2,7],py:[4,21],pz:[2,0],nx:[13,11],ny:[8,9],nz:[0,-1]},{size:2,px:[5,4],py:[8,8],pz:[0,0],nx:[6,1],ny:[8,5],nz:[0,-1]},{size:2,px:[7,3],py:[20,7],pz:[0,-1],nx:[4,3],ny:[10,4],nz:[1,1]},{size:2,px:[9,9],py:[8,7],pz:[1,-1],nx:[1,2],ny:[4,9],nz:[2,1]},{size:2,px:[5,10],py:[5,13],pz:[1,-1],nx:[3,6],ny:[1,2],nz:[2,1]},{size:2,px:[12,5],py:[6,3],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[10,10],py:[4,4],pz:[1,-1],nx:[5,11],ny:[2,5],nz:[2,1]},{size:5,px:[11,23,11,23,11],py:[4,9,5,10,6],pz:[1,0,1,0,1],nx:[7,14,13,7,3],ny:[9,5,6,4,4],nz:[0,0,0,1,-1]},{size:2,px:[8,5],py:[0,0],pz:[1,-1],nx:[9,20],ny:[1,4],nz:[1,0]},{size:2,px:[19,20],py:[0,3],pz:[0,0],nx:[4,6],ny:[11,3],nz:[1,-1]},{size:4,px:[13,5,20,5],py:[14,3,23,4],pz:[0,-1,-1,-1],nx:[8,15,7,16],ny:[8,14,6,15],nz:[1,0,1,0]},{size:2,px:[10,20],py:[5,17],pz:[0,-1],nx:[7,3],ny:[10,1],nz:[0,2]},{size:3,px:[1,12,7],py:[3,7,10],pz:[2,0,0],nx:[2,2,3],ny:[3,2,2],nz:[1,-1,-1]},{size:3,px:[10,5,7],py:[7,10,10],pz:[1,-1,-1],nx:[10,10,18],ny:[10,9,23],nz:[1,1,0]},{size:3,px:[14,14,4],py:[3,3,4],pz:[0,-1,-1],nx:[4,4,8],ny:[3,2,6],nz:[2,2,1]},{size:2,px:[4,12],py:[4,17],pz:[2,0],nx:[13,1],ny:[15,4],nz:[0,-1]},{size:2,px:[10,20],py:[9,22],pz:[0,-1],nx:[9,4],ny:[2,0],nz:[1,2]},{size:2,px:[11,2],py:[3,6],pz:[0,-1],nx:[2,4],ny:[2,4],nz:[2,1]},{size:3,px:[15,10,1],py:[12,2,3],pz:[0,-1,-1],nx:[7,5,10],ny:[2,1,1],nz:[0,1,0]},{size:5,px:[9,11,10,12,12],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[8,4,16,5,10],ny:[4,4,10,3,6],nz:[1,1,0,1,0]},{size:2,px:[0,10],py:[3,5],pz:[2,-1],nx:[3,6],ny:[0,1],nz:[2,1]},{size:5,px:[7,8,7,2,12],py:[14,13,13,16,0],pz:[0,0,-1,-1,-1],nx:[10,1,10,1,1],ny:[13,2,12,4,9],nz:[0,2,0,1,0]},{size:3,px:[6,14,13],py:[1,2,1],pz:[1,0,0],nx:[8,21,10],ny:[4,23,12],nz:[1,-1,-1]},{size:2,px:[19,19],py:[22,21],pz:[0,0],nx:[20,1],ny:[22,5],nz:[0,-1]},{size:2,px:[13,12],py:[19,22],pz:[0,-1],nx:[2,3],ny:[0,1],nz:[2,1]},{size:4,px:[11,9,21,4],py:[13,3,19,5],pz:[0,-1,-1,-1],nx:[9,9,9,5],ny:[13,14,12,6],nz:[0,0,0,1]},{size:4,px:[11,12,13,14],py:[22,22,22,22],pz:[0,0,0,0],nx:[13,2,4,5],ny:[20,0,0,6],nz:[0,-1,-1,-1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,1],ny:[4,3],nz:[1,-1]},{size:2,px:[0,0],py:[0,1],pz:[2,2],nx:[9,4],ny:[6,5],nz:[1,-1]},{size:2,px:[17,0],py:[10,1],pz:[0,-1],nx:[9,4],ny:[3,2],nz:[1,2]},{size:2,px:[10,4],py:[3,1],pz:[1,2],nx:[12,18],ny:[17,4],nz:[0,-1]},{size:3,px:[2,3,4],py:[4,3,9],pz:[2,2,1],nx:[0,3,17],ny:[0,1,18],nz:[0,-1,-1]},{size:2,px:[7,3],py:[12,6],pz:[0,1],nx:[5,1],ny:[11,1],nz:[1,-1]},{size:2,px:[10,17],py:[20,6],pz:[0,-1],nx:[5,2],ny:[9,5],nz:[1,2]},{size:2,px:[8,11],py:[18,2],pz:[0,-1],nx:[5,4],ny:[9,9],nz:[1,1]},{size:2,px:[16,15],py:[2,2],pz:[0,0],nx:[17,12],ny:[2,2],nz:[0,-1]},{size:2,px:[18,4],py:[5,5],pz:[0,-1],nx:[7,5],ny:[23,19],nz:[0,0]},{size:2,px:[12,13],py:[23,23],pz:[0,0],nx:[7,11],ny:[10,20],nz:[1,-1]},{size:2,px:[5,10],py:[3,18],pz:[2,-1],nx:[9,9],ny:[5,6],nz:[1,1]},{size:2,px:[5,10],py:[2,4],pz:[1,0],nx:[4,23],ny:[4,20],nz:[1,-1]},{size:2,px:[2,3],py:[8,1],pz:[1,-1],nx:[15,12],ny:[2,1],nz:[0,0]},{size:2,px:[4,7],py:[3,10],pz:[2,1],nx:[10,1],ny:[20,4],nz:[0,-1]},{size:2,px:[11,11],py:[10,11],pz:[0,0],nx:[22,3],ny:[5,4],nz:[0,-1]},{size:5,px:[8,17,17,9,18],py:[0,1,0,1,0],pz:[1,0,0,1,0],nx:[11,8,9,4,4],ny:[23,4,6,2,2],nz:[0,1,0,2,-1]},{size:2,px:[5,5],py:[4,4],pz:[1,-1],nx:[13,4],ny:[9,2],nz:[0,2]},{size:5,px:[9,4,8,7,7],py:[3,1,3,3,3],pz:[0,1,0,0,-1],nx:[4,2,5,3,2],ny:[1,15,1,4,13],nz:[0,0,0,0,0]},{size:2,px:[17,7],py:[13,7],pz:[0,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[1,2],py:[1,12],pz:[2,0],nx:[9,21],ny:[5,4],nz:[0,-1]},{size:2,px:[12,0],py:[14,1],pz:[0,-1],nx:[1,1],ny:[19,10],nz:[0,1]},{size:2,px:[16,1],py:[5,9],pz:[0,-1],nx:[16,15],ny:[3,3],nz:[0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[8,4],ny:[4,0],nz:[1,-1]},{size:2,px:[11,6],py:[17,15],pz:[0,0],nx:[11,0],ny:[16,4],nz:[0,-1]},{size:4,px:[12,11,0,3],py:[16,8,7,1],pz:[0,-1,-1,-1],nx:[10,5,10,5],ny:[11,9,10,8],nz:[0,1,0,1]},{size:2,px:[3,6],py:[7,13],pz:[1,0],nx:[4,14],ny:[4,16],nz:[1,-1]},{size:2,px:[7,17],py:[6,13],pz:[0,-1],nx:[4,8],ny:[4,9],nz:[2,1]},{size:2,px:[15,11],py:[3,2],pz:[0,-1],nx:[4,15],ny:[1,2],nz:[2,0]},{size:2,px:[10,11],py:[18,4],pz:[0,-1],nx:[5,5],ny:[8,9],nz:[1,1]},{size:2,px:[8,4],py:[7,4],pz:[1,2],nx:[4,3],ny:[5,7],nz:[2,-1]},{size:2,px:[12,4],py:[15,4],pz:[0,-1],nx:[11,8],ny:[14,19],nz:[0,0]},{size:2,px:[18,13],py:[13,20],pz:[0,0],nx:[13,4],ny:[18,2],nz:[0,-1]},{size:2,px:[12,4],py:[6,3],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[21,5,11,5,10],py:[1,1,3,0,0],pz:[0,2,1,2,1],nx:[7,14,15,4,8],ny:[3,6,11,3,4],nz:[1,-1,-1,-1,-1]},{size:2,px:[10,6],py:[15,10],pz:[0,-1],nx:[21,22],ny:[14,12],nz:[0,0]},{size:2,px:[18,0],py:[20,0],pz:[0,-1],nx:[2,3],ny:[2,4],nz:[2,1]},{size:5,px:[12,6,13,11,7],py:[1,1,1,2,1],pz:[0,1,0,0,1],nx:[7,6,8,5,5],ny:[4,15,4,16,16],nz:[1,0,1,0,-1]},{size:3,px:[22,21,21],py:[14,15,17],pz:[0,0,0],nx:[5,9,4],ny:[0,5,0],nz:[2,-1,-1]},{size:2,px:[10,2],py:[14,1],pz:[0,-1],nx:[23,11],ny:[16,8],nz:[0,1]},{size:4,px:[21,21,0,18],py:[14,15,5,4],pz:[0,0,-1,-1],nx:[8,8,9,4],ny:[7,8,10,5],nz:[1,1,1,2]},{size:2,px:[15,5],py:[18,1],pz:[0,-1],nx:[23,23],ny:[16,18],nz:[0,0]},{size:2,px:[15,14],py:[1,1],pz:[0,0],nx:[4,4],ny:[2,3],nz:[2,-1]},{size:2,px:[2,6],py:[6,5],pz:[1,-1],nx:[14,11],ny:[1,1],nz:[0,0]},{size:2,px:[3,17],py:[2,8],pz:[2,0],nx:[8,3],ny:[4,9],nz:[1,-1]},{size:2,px:[17,8],py:[13,10],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[0,0],py:[8,3],pz:[0,1],nx:[1,11],ny:[4,7],nz:[1,-1]},{size:2,px:[6,8],py:[5,0],pz:[1,-1],nx:[0,0],ny:[3,1],nz:[1,2]},{size:2,px:[0,0],py:[5,3],pz:[1,2],nx:[1,18],ny:[5,7],nz:[1,-1]},{size:2,px:[7,3],py:[6,6],pz:[0,1],nx:[7,12],ny:[5,20],nz:[0,-1]},{size:2,px:[8,1],py:[0,5],pz:[0,-1],nx:[4,2],ny:[9,3],nz:[1,2]},{size:2,px:[0,0],py:[10,11],pz:[0,0],nx:[0,5],ny:[5,9],nz:[0,-1]},{size:2,px:[8,1],py:[23,4],pz:[0,2],nx:[0,0],ny:[13,2],nz:[0,-1]},{size:2,px:[4,1],py:[6,4],pz:[0,-1],nx:[4,4],ny:[4,5],nz:[2,2]},{size:2,px:[7,6],py:[6,5],pz:[1,1],nx:[3,9],ny:[4,16],nz:[1,-1]},{size:2,px:[5,3],py:[9,13],pz:[0,-1],nx:[4,10],ny:[3,7],nz:[1,0]},{size:5,px:[13,9,6,10,10],py:[2,2,1,2,2],pz:[0,0,1,0,-1],nx:[7,5,6,5,6],ny:[0,2,2,1,1],nz:[0,0,0,0,0]}],alpha:[-1.119615,1.119615,-.8169953,.8169953,-.5291213,.5291213,-.4904488,.4904488,-.4930982,.4930982,-.4106179,.4106179,-.4246842,.4246842,-.3802383,.3802383,-.3364358,.3364358,-.3214186,.3214186,-.3210798,.3210798,-.2993167,.2993167,-.3426336,.3426336,-.3199184,.3199184,-.3061071,.3061071,-.2758972,.2758972,-.307559,.307559,-.3009565,.3009565,-.2015739,.2015739,-.2603266,.2603266,-.2772993,.2772993,-.2184913,.2184913,-.2306681,.2306681,-.1983223,.1983223,-.219476,.219476,-.2528421,.2528421,-.2436416,.2436416,-.3032886,.3032886,-.2556071,.2556071,-.256217,.256217,-.1930298,.1930298,-.2735898,.2735898,-.1814703,.1814703,-.2054824,.2054824,-.1986146,.1986146,-.1769226,.1769226,-.1775257,.1775257,-.2167927,.2167927,-.1823633,.1823633,-.158428,.158428,-.1778321,.1778321,-.1826777,.1826777,-.1979903,.1979903,-.1898326,.1898326,-.1835506,.1835506,-.196786,.196786,-.1871528,.1871528,-.1772414,.1772414,-.1985514,.1985514,-.2144078,.2144078,-.2742303,.2742303,-.224055,.224055,-.2132534,.2132534,-.1552127,.1552127,-.1568276,.1568276,-.1630086,.1630086,-.1458232,.1458232,-.1559541,.1559541,-.1720131,.1720131,-.1708434,.1708434,-.1624431,.1624431,-.1814161,.1814161,-.1552639,.1552639,-.1242354,.1242354,-.1552139,.1552139,-.1694359,.1694359,-.1801481,.1801481,-.1387182,.1387182,-.1409679,.1409679,-.1486724,.1486724,-.1779553,.1779553,-.1524595,.1524595,-.1788086,.1788086,-.1671479,.1671479,-.1376197,.1376197,-.1511808,.1511808,-.1524632,.1524632,-.1198986,.1198986,-.1382641,.1382641,-.1148901,.1148901,-.1131803,.1131803,-.1273508,.1273508,-.1405125,.1405125,-.1322132,.1322132,-.1386966,.1386966,-.1275621,.1275621,-.1180573,.1180573,-.1238803,.1238803,-.1428389,.1428389,-.1694437,.1694437,-.1290855,.1290855,-.152026,.152026,-.1398282,.1398282,-.1890736,.1890736,-.2280428,.2280428,-.1325099,.1325099,-.1342873,.1342873,-.1463841,.1463841,-.1983567,.1983567,-.1585711,.1585711,-.1260154,.1260154,-.1426774,.1426774,-.1554278,.1554278,-.1361201,.1361201,-.1181856,.1181856,-.1255941,.1255941,-.1113275,.1113275,-.1506576,.1506576,-.1202859,.1202859,-.2159751,.2159751,-.144315,.144315,-.1379194,.1379194,-.1805758,.1805758,-.1465612,.1465612,-.1328856,.1328856,-.1532173,.1532173,-.1590635,.1590635,-.1462229,.1462229,-.1350012,.1350012,-.1195634,.1195634,-.1173221,.1173221,-.1192867,.1192867,-.1595013,.1595013,-.1209751,.1209751,-.157129,.157129,-.1527274,.1527274,-.1373708,.1373708,-.1318313,.1318313,-.1273391,.1273391,-.1271365,.1271365,-.1528693,.1528693,-.1590476,.1590476,-.1581911,.1581911,-.1183023,.1183023,-.1559822,.1559822,-.1214999,.1214999,-.1283378,.1283378,-.1542583,.1542583,-.1336377,.1336377,-.1800416,.1800416,-.1710931,.1710931,-.1621737,.1621737,-.1239002,.1239002,-.1432928,.1432928,-.1392447,.1392447,-.1383938,.1383938,-.1357633,.1357633,-.1175842,.1175842,-.1085318,.1085318,-.1148885,.1148885,-.1320396,.1320396,-.1351204,.1351204,-.1581518,.1581518,-.1459574,.1459574,-.1180068,.1180068,-.1464196,.1464196,-.1179543,.1179543,-.1004204,.1004204,-.129466,.129466,-.1534244,.1534244,-.137897,.137897,-.1226545,.1226545,-.1281182,.1281182,-.1201471,.1201471,-.1448701,.1448701,-.129098,.129098,-.1388764,.1388764,-.09605773,.09605773,-.1411021,.1411021,-.1295693,.1295693,-.1371739,.1371739,-.1167579,.1167579,-.1400486,.1400486,-.1214224,.1214224,-.1287835,.1287835,-.1197646,.1197646,-.1192358,.1192358,-.1218651,.1218651,-.1564816,.1564816,-.1172391,.1172391,-.1342268,.1342268,-.1492471,.1492471,-.1157299,.1157299,-.1046703,.1046703,-.1255571,.1255571,-.1100135,.1100135,-.1501592,.1501592,-.1155712,.1155712,-.1145563,.1145563,-.1013425,.1013425,-.1145783,.1145783,-.1328031,.1328031,-.1077413,.1077413,-.1064996,.1064996,-.119117,.119117,-.1213217,.1213217,-.1260969,.1260969,-.1156494,.1156494,-.1268126,.1268126,-.1070999,.1070999,-.1112365,.1112365,-.1243916,.1243916,-.1283152,.1283152,-.1166925,.1166925,-.08997633,.08997633,-.158384,.158384,-.1211178,.1211178,-.109083,.109083,-.1030818,.1030818,-.14406,.14406,-.1458713,.1458713,-.1559082,.1559082,-.1058868,.1058868,-.101013,.101013,-.1642301,.1642301,-.123685,.123685,-.1467589,.1467589,-.1109359,.1109359,-.1673655,.1673655,-.1239984,.1239984,-.1039509,.1039509,-.1089378,.1089378,-.1545085,.1545085,-.1200862,.1200862,-.1105608,.1105608,-.1235262,.1235262,-.08496153,.08496153,-.1181372,.1181372,-.1139467,.1139467,-.1189317,.1189317,-.1266519,.1266519,-.09470736,.09470736,-.1336735,.1336735,-.08726601,.08726601,-.1304782,.1304782,-.1186529,.1186529,-.1355944,.1355944,-.09568801,.09568801,-.1282618,.1282618,-.1625632,.1625632,-.1167652,.1167652,-.1001301,.1001301,-.1292419,.1292419,-.1904213,.1904213,-.1511542,.1511542,-.09814394,.09814394,-.1171564,.1171564,-.09806486,.09806486,-.09217615,.09217615,-.08505645,.08505645,-.1573637,.1573637,-.1419174,.1419174,-.1298601,.1298601,-.1120613,.1120613,-.1158363,.1158363,-.1090957,.1090957,-.1204516,.1204516,-.1139852,.1139852,-.09642479,.09642479,-.1410872,.1410872,-.1142779,.1142779,-.1043991,.1043991,-.09736463,.09736463,-.1451046,.1451046,-.1205668,.1205668,-.09881445,.09881445,-.1612822,.1612822,-.1175681,.1175681,-.1522528,.1522528,-.161752,.161752,-.1582938,.1582938,-.1208202,.1208202,-.1016003,.1016003,-.1232059,.1232059,-.09583025,.09583025,-.101399,.101399,-.1178752,.1178752,-.1215972,.1215972,-.1294932,.1294932,-.115827,.115827,-.1008645,.1008645,-.0969919,.0969919,-.1022144,.1022144,-.09878768,.09878768,-.1339052,.1339052,-.09279961,.09279961,-.1047606,.1047606,-.1141163,.1141163,-.12676,.12676,-.1252763,.1252763,-.09775003,.09775003,-.09169116,.09169116,-.1006496,.1006496,-.09493293,.09493293,-.1213694,.1213694,-.1109243,.1109243,-.1115973,.1115973,-.07979327,.07979327,-.09220953,.09220953,-.1028913,.1028913,-.125351,.125351]},{count:391,threshold:-4.665692,feature:[{size:5,px:[14,9,11,17,12],py:[2,3,9,13,3],pz:[0,0,0,0,0],nx:[21,8,7,20,13],ny:[16,10,7,7,9],nz:[0,1,1,0,0]},{size:5,px:[12,10,6,11,13],py:[9,3,13,3,4],pz:[0,0,0,0,0],nx:[10,4,5,10,2],ny:[9,10,8,8,2],nz:[0,1,1,0,2]},{size:5,px:[6,9,7,8,8],py:[3,3,3,3,3],pz:[0,0,0,0,-1],nx:[0,0,0,4,9],ny:[4,2,3,10,8],nz:[0,0,0,1,0]},{size:5,px:[6,2,16,6,8],py:[16,2,11,4,11],pz:[0,2,0,1,0],nx:[3,8,4,1,1],ny:[4,4,4,5,13],nz:[1,1,-1,-1,-1]},{size:3,px:[16,13,9],py:[23,18,10],pz:[0,0,1],nx:[14,15,8],ny:[21,22,3],nz:[0,-1,-1]},{size:5,px:[9,16,19,17,17],py:[1,2,3,2,2],pz:[1,0,0,0,-1],nx:[23,23,23,23,23],ny:[6,2,1,3,5],nz:[0,0,0,0,0]},{size:5,px:[12,12,12,12,12],py:[10,11,12,13,13],pz:[0,0,0,0,-1],nx:[4,8,14,4,6],ny:[2,4,7,4,8],nz:[2,1,0,1,1]},{size:5,px:[1,2,3,6,4],py:[6,10,12,23,13],pz:[1,1,0,0,0],nx:[2,0,0,1,1],ny:[23,5,10,21,21],nz:[0,2,1,0,-1]},{size:5,px:[12,16,12,4,12],py:[6,17,7,2,8],pz:[0,0,0,2,0],nx:[8,8,12,0,6],ny:[4,4,16,0,8],nz:[1,-1,-1,-1,-1]},{size:2,px:[9,2],py:[18,4],pz:[0,-1],nx:[4,9],ny:[10,16],nz:[1,0]},{size:5,px:[9,9,2,0,12],py:[6,6,21,4,8],pz:[1,-1,-1,-1,-1],nx:[8,4,9,7,7],ny:[10,2,4,5,8],nz:[1,2,1,1,1]},{size:5,px:[10,10,10,18,19],py:[10,8,7,14,14],pz:[1,1,1,0,0],nx:[21,23,22,22,11],ny:[23,19,21,22,10],nz:[0,0,0,0,-1]},{size:5,px:[12,3,15,4,19],py:[14,0,5,5,14],pz:[0,-1,-1,-1,-1],nx:[12,17,15,3,8],ny:[18,18,14,2,10],nz:[0,0,0,2,0]},{size:5,px:[8,11,3,11,4],py:[23,7,9,8,8],pz:[0,0,1,0,1],nx:[8,0,10,0,8],ny:[8,2,8,4,10],nz:[0,-1,-1,-1,-1]},{size:5,px:[10,11,12,8,4],py:[3,0,0,1,1],pz:[0,0,0,0,1],nx:[2,3,4,3,3],ny:[14,5,0,1,2],nz:[0,0,0,0,0]},{size:2,px:[3,11],py:[7,0],pz:[1,-1],nx:[5,2],ny:[9,5],nz:[1,2]},{size:5,px:[7,1,0,10,1],py:[0,0,2,12,6],pz:[0,2,2,0,1],nx:[4,6,2,8,8],ny:[4,11,2,4,4],nz:[1,1,2,1,-1]},{size:2,px:[4,15],py:[4,12],pz:[2,0],nx:[4,6],ny:[5,11],nz:[2,-1]},{size:5,px:[9,4,16,14,14],py:[8,4,23,18,18],pz:[1,2,0,0,-1],nx:[0,2,1,1,0],ny:[2,0,3,2,3],nz:[1,0,0,0,1]},{size:5,px:[17,7,7,18,19],py:[7,11,8,7,7],pz:[0,1,1,0,0],nx:[17,5,8,2,0],ny:[8,0,7,5,3],nz:[0,-1,-1,-1,-1]},{size:2,px:[5,14],py:[12,3],pz:[0,-1],nx:[4,3],ny:[5,4],nz:[1,1]},{size:5,px:[10,8,16,11,11],py:[5,6,12,4,4],pz:[0,1,0,0,-1],nx:[14,13,5,9,5],ny:[13,10,1,4,2],nz:[0,0,2,1,2]},{size:5,px:[15,14,16,8,8],py:[2,2,2,0,0],pz:[0,0,0,1,-1],nx:[9,18,19,18,17],ny:[0,0,2,1,0],nz:[1,0,0,0,0]},{size:2,px:[17,15],py:[12,11],pz:[0,0],nx:[14,4],ny:[9,15],nz:[0,-1]},{size:3,px:[5,11,11],py:[3,4,5],pz:[2,1,1],nx:[14,3,18],ny:[6,5,0],nz:[0,1,-1]},{size:5,px:[16,14,17,15,9],py:[2,2,2,2,1],pz:[0,0,0,0,1],nx:[21,20,11,21,21],ny:[2,0,7,3,3],nz:[0,0,1,0,-1]},{size:5,px:[2,1,1,1,5],py:[12,9,7,3,6],pz:[0,0,1,1,1],nx:[4,8,3,4,17],ny:[4,4,0,8,0],nz:[1,-1,-1,-1,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[9,2],ny:[4,17],nz:[1,-1]},{size:2,px:[8,5],py:[16,9],pz:[0,1],nx:[10,17],ny:[16,8],nz:[0,-1]},{size:4,px:[11,5,9,15],py:[14,9,11,5],pz:[0,-1,-1,-1],nx:[10,1,9,4],ny:[9,2,13,7],nz:[0,2,0,1]},{size:5,px:[2,5,10,7,10],py:[7,12,2,13,3],pz:[1,-1,-1,-1,-1],nx:[5,2,3,3,2],ny:[23,15,17,16,14],nz:[0,0,0,0,0]},{size:2,px:[11,7],py:[8,10],pz:[0,-1],nx:[7,14],ny:[5,8],nz:[1,0]},{size:2,px:[9,16],py:[7,23],pz:[1,0],nx:[4,4],ny:[2,1],nz:[2,-1]},{size:5,px:[16,14,18,4,17],py:[0,0,4,0,1],pz:[0,0,0,2,0],nx:[8,8,16,9,9],ny:[5,4,11,7,7],nz:[1,1,0,0,-1]},{size:5,px:[12,13,7,8,4],py:[9,12,6,11,5],pz:[0,0,1,1,2],nx:[23,23,16,9,9],ny:[0,1,11,7,7],nz:[0,-1,-1,-1,-1]},{size:3,px:[6,7,2],py:[21,23,4],pz:[0,0,2],nx:[4,1,16],ny:[10,5,11],nz:[1,-1,-1]},{size:2,px:[2,2],py:[3,4],pz:[2,2],nx:[3,1],ny:[4,5],nz:[1,-1]},{size:5,px:[1,2,1,0,1],py:[7,13,12,4,13],pz:[0,0,0,2,0],nx:[18,9,9,19,19],ny:[23,5,11,19,19],nz:[0,1,1,0,-1]},{size:3,px:[4,10,12],py:[6,2,5],pz:[1,-1,-1],nx:[10,0,0],ny:[12,1,3],nz:[0,2,2]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,0],ny:[4,3],nz:[1,-1]},{size:5,px:[19,17,10,14,18],py:[2,1,7,0,1],pz:[0,0,1,0,0],nx:[3,3,3,7,5],ny:[9,10,7,23,18],nz:[1,1,1,0,0]},{size:2,px:[10,10],py:[8,7],pz:[1,1],nx:[14,4],ny:[15,6],nz:[0,-1]},{size:2,px:[7,15],py:[1,3],pz:[1,0],nx:[16,19],ny:[1,3],nz:[0,-1]},{size:5,px:[11,11,1,2,11],py:[11,12,1,13,12],pz:[0,0,-1,-1,-1],nx:[12,17,8,16,8],ny:[7,12,11,16,6],nz:[0,0,0,0,1]},{size:5,px:[13,11,10,12,5],py:[0,0,0,0,0],pz:[0,0,0,0,1],nx:[8,4,3,4,4],ny:[4,5,2,4,4],nz:[1,1,2,1,-1]},{size:5,px:[6,1,3,2,3],py:[13,3,3,4,10],pz:[0,2,1,1,1],nx:[0,1,0,0,0],ny:[2,0,5,4,4],nz:[0,0,0,0,-1]},{size:2,px:[15,1],py:[4,3],pz:[0,-1],nx:[16,15],ny:[2,2],nz:[0,0]},{size:2,px:[3,7],py:[7,13],pz:[1,0],nx:[3,0],ny:[4,2],nz:[1,-1]},{size:2,px:[14,15],py:[18,14],pz:[0,-1],nx:[4,14],ny:[4,16],nz:[1,0]},{size:2,px:[4,6],py:[3,4],pz:[2,1],nx:[9,5],ny:[14,2],nz:[0,-1]},{size:2,px:[16,6],py:[1,5],pz:[0,-1],nx:[4,9],ny:[0,4],nz:[2,1]},{size:2,px:[9,0],py:[4,2],pz:[0,-1],nx:[5,3],ny:[1,0],nz:[1,2]},{size:5,px:[1,1,1,0,0],py:[16,15,17,6,9],pz:[0,0,0,1,0],nx:[9,5,4,9,8],ny:[7,3,3,6,7],nz:[0,1,1,0,-1]},{size:2,px:[9,1],py:[8,15],pz:[1,-1],nx:[9,8],ny:[9,4],nz:[1,1]},{size:2,px:[20,19],py:[19,22],pz:[0,0],nx:[7,0],ny:[3,0],nz:[1,-1]},{size:5,px:[8,4,2,5,5],py:[12,6,3,5,5],pz:[0,1,2,1,-1],nx:[22,21,20,21,22],ny:[17,20,22,19,16],nz:[0,0,0,0,0]},{size:2,px:[6,12],py:[2,6],pz:[1,0],nx:[8,3],ny:[3,2],nz:[1,-1]},{size:2,px:[11,11],py:[9,4],pz:[1,1],nx:[12,4],ny:[17,5],nz:[0,-1]},{size:3,px:[0,1,0],py:[5,13,3],pz:[2,0,2],nx:[0,4,11],ny:[23,5,1],nz:[0,-1,-1]},{size:2,px:[10,5],py:[6,3],pz:[0,1],nx:[4,4],ny:[3,0],nz:[1,-1]},{size:2,px:[6,5],py:[7,3],pz:[0,-1],nx:[0,1],ny:[4,10],nz:[2,1]},{size:5,px:[12,13,12,12,12],py:[12,13,11,10,10],pz:[0,0,0,0,-1],nx:[10,8,8,16,15],ny:[7,4,10,11,10],nz:[0,1,0,0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[4,2],ny:[5,5],nz:[2,-1]},{size:2,px:[9,17],py:[17,7],pz:[0,-1],nx:[5,2],ny:[9,4],nz:[1,2]},{size:2,px:[4,4],py:[3,5],pz:[2,2],nx:[12,8],ny:[16,2],nz:[0,-1]},{size:2,px:[1,1],py:[2,0],pz:[1,1],nx:[0,4],ny:[0,1],nz:[2,-1]},{size:2,px:[11,1],py:[5,0],pz:[0,-1],nx:[2,3],ny:[2,4],nz:[2,1]},{size:4,px:[0,6,4,22],py:[23,2,4,12],pz:[0,-1,-1,-1],nx:[7,6,8,5],ny:[1,1,2,1],nz:[1,1,1,1]},{size:2,px:[4,10],py:[0,9],pz:[1,-1],nx:[2,4],ny:[3,10],nz:[2,1]},{size:2,px:[11,8],py:[15,13],pz:[0,-1],nx:[23,11],ny:[13,5],nz:[0,1]},{size:2,px:[18,4],py:[5,4],pz:[0,-1],nx:[18,20],ny:[4,7],nz:[0,0]},{size:5,px:[21,20,20,10,20],py:[17,22,19,10,21],pz:[0,0,0,1,0],nx:[5,5,3,14,7],ny:[9,9,0,8,4],nz:[0,-1,-1,-1,-1]},{size:5,px:[3,7,13,7,3],py:[6,12,3,0,3],pz:[1,-1,-1,-1,-1],nx:[1,5,0,0,2],ny:[16,6,13,5,4],nz:[0,1,0,1,0]},{size:2,px:[7,4],py:[6,3],pz:[1,2],nx:[9,5],ny:[4,6],nz:[1,-1]},{size:3,px:[14,9,13],py:[19,22,8],pz:[0,-1,-1],nx:[13,4,4],ny:[17,2,5],nz:[0,2,2]},{size:2,px:[16,4],py:[9,3],pz:[0,2],nx:[7,4],ny:[4,5],nz:[1,-1]},{size:4,px:[10,2,4,2],py:[23,4,8,3],pz:[0,2,1,2],nx:[14,0,4,11],ny:[19,3,5,3],nz:[0,-1,-1,-1]},{size:5,px:[9,10,8,7,11],py:[2,2,2,2,2],pz:[0,0,0,0,0],nx:[6,5,3,4,4],ny:[0,1,0,2,2],nz:[0,0,1,0,-1]},{size:2,px:[6,4],py:[13,6],pz:[0,-1],nx:[15,4],ny:[8,4],nz:[0,1]},{size:2,px:[0,8],py:[1,2],pz:[2,-1],nx:[5,4],ny:[2,2],nz:[1,1]},{size:5,px:[16,13,14,15,15],py:[1,0,0,0,0],pz:[0,0,0,0,-1],nx:[4,9,4,18,8],ny:[5,9,4,18,11],nz:[2,1,2,0,1]},{size:2,px:[5,6],py:[2,6],pz:[2,1],nx:[22,9],ny:[23,9],nz:[0,-1]},{size:2,px:[19,19],py:[5,5],pz:[0,-1],nx:[21,22],ny:[2,4],nz:[0,0]},{size:2,px:[2,5],py:[8,6],pz:[0,1],nx:[3,4],ny:[4,9],nz:[1,-1]},{size:2,px:[18,14],py:[13,17],pz:[0,0],nx:[14,4],ny:[16,3],nz:[0,-1]},{size:2,px:[6,6],py:[6,3],pz:[1,-1],nx:[1,0],ny:[2,2],nz:[1,2]},{size:2,px:[23,21],py:[21,14],pz:[0,-1],nx:[7,5],ny:[0,0],nz:[0,1]},{size:2,px:[15,10],py:[23,7],pz:[0,-1],nx:[9,4],ny:[4,5],nz:[1,2]},{size:2,px:[4,18],py:[3,8],pz:[2,0],nx:[8,4],ny:[4,5],nz:[1,-1]},{size:2,px:[13,7],py:[2,11],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:5,px:[2,3,5,6,1],py:[7,14,2,2,4],pz:[1,0,0,0,2],nx:[8,4,4,7,7],ny:[7,5,4,9,9],nz:[1,2,2,1,-1]},{size:2,px:[5,3],py:[6,3],pz:[1,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:5,px:[7,20,4,10,10],py:[9,16,4,10,8],pz:[1,0,2,1,1],nx:[4,2,3,5,3],ny:[11,5,6,12,5],nz:[0,1,1,0,-1]},{size:2,px:[6,11],py:[4,18],pz:[1,-1],nx:[8,6],ny:[4,9],nz:[1,1]},{size:2,px:[2,8],py:[5,23],pz:[2,0],nx:[9,4],ny:[0,2],nz:[1,-1]},{size:5,px:[3,1,2,2,2],py:[12,6,12,11,11],pz:[0,1,0,0,-1],nx:[0,0,0,0,0],ny:[13,12,11,14,7],nz:[0,0,0,0,1]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,4],ny:[4,14],nz:[1,-1]},{size:5,px:[11,23,23,22,22],py:[8,12,6,13,14],pz:[1,0,0,0,0],nx:[13,8,7,6,6],ny:[6,3,3,9,9],nz:[0,1,1,0,-1]},{size:4,px:[9,23,23,22],py:[7,12,6,13],pz:[1,-1,-1,-1],nx:[11,23,23,23],ny:[6,13,17,10],nz:[1,0,0,0]},{size:5,px:[0,0,0,0,0],py:[19,5,9,16,10],pz:[0,2,1,0,1],nx:[5,2,1,2,2],ny:[18,10,5,9,9],nz:[0,1,2,1,-1]},{size:2,px:[11,5],py:[10,4],pz:[1,2],nx:[23,14],ny:[23,3],nz:[0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,1],ny:[4,4],nz:[1,-1]},{size:2,px:[8,10],py:[4,8],pz:[0,-1],nx:[8,8],ny:[2,3],nz:[0,0]},{size:3,px:[7,10,11],py:[1,6,13],pz:[0,-1,-1],nx:[4,4,2],ny:[3,8,2],nz:[1,1,2]},{size:2,px:[8,4],py:[8,2],pz:[1,2],nx:[10,5],ny:[10,0],nz:[0,-1]},{size:2,px:[7,16],py:[20,21],pz:[0,-1],nx:[2,4],ny:[5,10],nz:[2,1]},{size:2,px:[3,10],py:[7,8],pz:[1,-1],nx:[7,4],ny:[20,7],nz:[0,1]},{size:5,px:[11,11,11,11,11],py:[10,12,13,11,11],pz:[0,0,0,0,-1],nx:[11,12,16,3,8],ny:[6,6,10,1,8],nz:[0,0,0,2,0]},{size:2,px:[12,6],py:[4,2],pz:[0,1],nx:[7,7],ny:[8,1],nz:[0,-1]},{size:5,px:[23,23,23,23,23],py:[22,20,21,19,19],pz:[0,0,0,0,-1],nx:[4,6,3,4,3],ny:[19,23,15,20,16],nz:[0,0,0,0,0]},{size:3,px:[8,4,14],py:[12,3,8],pz:[0,-1,-1],nx:[4,2,10],ny:[10,3,13],nz:[1,2,0]},{size:2,px:[11,18],py:[13,23],pz:[0,-1],nx:[5,5],ny:[1,2],nz:[2,2]},{size:3,px:[11,2,10],py:[17,4,17],pz:[0,2,0],nx:[11,0,22],ny:[15,2,4],nz:[0,-1,-1]},{size:3,px:[11,3,0],py:[15,4,8],pz:[0,-1,-1],nx:[14,11,4],ny:[9,17,7],nz:[0,0,1]},{size:2,px:[17,16],py:[2,1],pz:[0,0],nx:[9,11],ny:[4,6],nz:[1,-1]},{size:2,px:[3,4],py:[21,23],pz:[0,0],nx:[4,0],ny:[3,3],nz:[1,-1]},{size:2,px:[18,2],py:[20,0],pz:[0,-1],nx:[4,9],ny:[5,10],nz:[2,1]},{size:2,px:[9,1],py:[19,3],pz:[0,-1],nx:[0,0],ny:[9,21],nz:[1,0]},{size:2,px:[19,19],py:[21,22],pz:[0,0],nx:[19,0],ny:[23,0],nz:[0,-1]},{size:4,px:[11,2,3,2],py:[6,6,9,4],pz:[0,-1,-1,-1],nx:[4,9,19,19],ny:[5,10,17,18],nz:[2,1,0,0]},{size:2,px:[2,4],py:[4,8],pz:[2,1],nx:[4,9],ny:[10,10],nz:[1,-1]},{size:2,px:[23,22],py:[8,12],pz:[0,-1],nx:[7,4],ny:[11,2],nz:[0,2]},{size:2,px:[12,1],py:[5,2],pz:[0,-1],nx:[9,11],ny:[2,1],nz:[0,0]},{size:2,px:[4,4],py:[2,2],pz:[0,-1],nx:[3,2],ny:[1,2],nz:[0,0]},{size:2,px:[17,9],py:[13,7],pz:[0,1],nx:[9,5],ny:[4,0],nz:[1,-1]},{size:4,px:[0,0,9,13],py:[3,3,7,3],pz:[2,-1,-1,-1],nx:[2,4,4,11],ny:[1,2,8,5],nz:[2,1,1,0]},{size:5,px:[3,6,5,6,6],py:[0,0,2,1,1],pz:[1,0,0,0,-1],nx:[2,2,2,1,1],ny:[21,19,20,16,17],nz:[0,0,0,0,0]},{size:2,px:[13,3],py:[22,10],pz:[0,-1],nx:[7,4],ny:[10,5],nz:[1,2]},{size:2,px:[3,2],py:[7,3],pz:[1,2],nx:[8,4],ny:[4,5],nz:[1,-1]},{size:5,px:[17,8,15,7,15],py:[13,6,16,5,12],pz:[0,1,0,1,0],nx:[5,4,6,3,4],ny:[1,2,1,0,3],nz:[0,0,0,1,-1]},{size:5,px:[12,9,11,12,10],py:[0,1,2,2,0],pz:[0,0,0,0,0],nx:[8,16,7,4,4],ny:[9,23,9,3,2],nz:[1,0,1,2,-1]},{size:2,px:[4,11],py:[1,4],pz:[2,-1],nx:[8,7],ny:[4,4],nz:[0,0]},{size:4,px:[7,4,5,8],py:[13,2,1,3],pz:[0,-1,-1,-1],nx:[9,4,9,9],ny:[9,5,10,11],nz:[0,1,0,0]},{size:2,px:[10,11],py:[10,11],pz:[0,-1],nx:[2,6],ny:[2,2],nz:[2,1]},{size:2,px:[21,3],py:[11,2],pz:[0,-1],nx:[22,22],ny:[20,18],nz:[0,0]},{size:2,px:[7,6],py:[1,2],pz:[0,0],nx:[5,10],ny:[1,0],nz:[0,-1]},{size:2,px:[21,3],py:[18,1],pz:[0,-1],nx:[16,15],ny:[4,4],nz:[0,0]},{size:2,px:[12,7],py:[4,1],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[13,11],py:[23,17],pz:[0,0],nx:[11,21],ny:[16,0],nz:[0,-1]},{size:2,px:[1,2],py:[0,6],pz:[1,-1],nx:[16,16],ny:[9,11],nz:[0,0]},{size:2,px:[12,13],py:[20,20],pz:[0,0],nx:[11,3],ny:[21,7],nz:[0,-1]},{size:3,px:[19,20,9],py:[21,18,11],pz:[0,0,1],nx:[17,4,11],ny:[19,2,0],nz:[0,-1,-1]},{size:2,px:[12,5],py:[5,2],pz:[0,1],nx:[7,9],ny:[7,8],nz:[0,-1]},{size:5,px:[8,4,4,8,4],py:[4,4,5,10,3],pz:[1,1,2,0,2],nx:[11,22,11,23,23],ny:[0,0,1,3,3],nz:[1,0,1,0,-1]},{size:2,px:[8,14],py:[10,23],pz:[1,0],nx:[7,2],ny:[10,9],nz:[1,-1]},{size:2,px:[5,14],py:[6,23],pz:[1,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:2,px:[11,2],py:[19,3],pz:[0,-1],nx:[10,12],ny:[18,18],nz:[0,0]},{size:2,px:[12,3],py:[4,1],pz:[0,2],nx:[6,6],ny:[11,11],nz:[1,-1]},{size:5,px:[0,0,0,0,0],py:[18,10,20,19,19],pz:[0,1,0,0,-1],nx:[11,10,14,12,13],ny:[2,2,2,2,2],nz:[0,0,0,0,0]},{size:3,px:[12,2,9],py:[14,5,10],pz:[0,-1,-1],nx:[11,10,5],ny:[10,13,5],nz:[0,0,1]},{size:2,px:[2,3],py:[3,7],pz:[2,1],nx:[3,10],ny:[4,13],nz:[1,-1]},{size:2,px:[9,3],py:[21,7],pz:[0,-1],nx:[10,21],ny:[7,15],nz:[1,0]},{size:2,px:[21,10],py:[16,8],pz:[0,1],nx:[8,2],ny:[10,8],nz:[1,-1]},{size:2,px:[8,8],py:[6,7],pz:[1,-1],nx:[12,11],ny:[11,7],nz:[0,1]},{size:2,px:[3,11],py:[4,20],pz:[2,0],nx:[11,10],ny:[19,1],nz:[0,-1]},{size:2,px:[17,5],py:[13,3],pz:[0,-1],nx:[7,8],ny:[4,4],nz:[1,1]},{size:2,px:[7,1],py:[23,3],pz:[0,2],nx:[14,6],ny:[12,9],nz:[0,-1]},{size:2,px:[12,5],py:[11,2],pz:[0,-1],nx:[11,7],ny:[3,1],nz:[0,1]},{size:2,px:[9,6],py:[2,17],pz:[0,-1],nx:[4,6],ny:[4,12],nz:[1,0]},{size:2,px:[14,19],py:[5,6],pz:[0,-1],nx:[9,3],ny:[9,1],nz:[0,2]},{size:5,px:[12,13,13,13,12],py:[9,11,12,13,10],pz:[0,0,0,0,0],nx:[2,4,4,4,4],ny:[7,18,17,14,14],nz:[1,0,0,0,-1]},{size:2,px:[10,10],py:[6,6],pz:[1,-1],nx:[20,18],ny:[18,23],nz:[0,0]},{size:2,px:[5,6],py:[4,14],pz:[1,-1],nx:[9,4],ny:[2,1],nz:[1,2]},{size:2,px:[11,9],py:[4,18],pz:[0,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[15,0],py:[18,4],pz:[0,-1],nx:[3,4],ny:[5,4],nz:[2,2]},{size:4,px:[7,3,6,6],py:[8,4,6,5],pz:[1,2,1,1],nx:[10,4,13,0],ny:[10,4,9,22],nz:[0,-1,-1,-1]},{size:2,px:[10,8],py:[18,11],pz:[0,-1],nx:[5,4],ny:[8,10],nz:[1,1]},{size:4,px:[17,2,10,2],py:[14,1,10,3],pz:[0,-1,-1,-1],nx:[8,8,17,8],ny:[4,5,12,6],nz:[1,1,0,1]},{size:5,px:[9,11,9,4,10],py:[1,1,0,0,1],pz:[0,0,0,1,0],nx:[8,4,7,15,15],ny:[7,2,4,17,17],nz:[1,2,1,0,-1]},{size:2,px:[4,3],py:[11,8],pz:[0,-1],nx:[2,2],ny:[1,2],nz:[2,2]},{size:2,px:[11,3],py:[13,8],pz:[0,-1],nx:[1,1],ny:[5,2],nz:[1,2]},{size:2,px:[6,2],py:[8,3],pz:[0,2],nx:[3,1],ny:[5,2],nz:[1,-1]},{size:5,px:[10,5,7,8,6],py:[9,7,7,7,7],pz:[0,0,0,0,0],nx:[7,3,0,2,15],ny:[8,0,1,18,17],nz:[0,-1,-1,-1,-1]},{size:2,px:[17,8],py:[12,6],pz:[0,1],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:5,px:[3,11,8,10,12],py:[0,2,10,2,3],pz:[2,0,0,0,0],nx:[3,2,10,2,2],ny:[6,4,11,3,3],nz:[0,1,0,1,-1]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[8,19],ny:[4,16],nz:[1,-1]},{size:2,px:[2,2],py:[1,1],pz:[2,-1],nx:[7,17],ny:[1,2],nz:[1,0]},{size:5,px:[16,15,14,13,7],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[6,4,8,3,11],ny:[3,4,4,1,6],nz:[1,1,1,2,0]},{size:2,px:[11,1],py:[8,5],pz:[0,-1],nx:[13,4],ny:[10,2],nz:[0,2]},{size:2,px:[4,9],py:[0,2],pz:[2,1],nx:[4,11],ny:[0,2],nz:[0,-1]},{size:2,px:[15,15],py:[2,2],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[8,17],py:[9,22],pz:[1,0],nx:[8,20],ny:[10,2],nz:[1,-1]},{size:2,px:[10,10],py:[14,22],pz:[0,-1],nx:[3,11],ny:[3,3],nz:[1,0]},{size:2,px:[4,2],py:[1,0],pz:[1,2],nx:[5,8],ny:[3,9],nz:[0,-1]},{size:2,px:[2,3],py:[4,8],pz:[2,1],nx:[9,5],ny:[15,19],nz:[0,-1]},{size:2,px:[5,2],py:[1,1],pz:[0,1],nx:[10,10],ny:[6,6],nz:[0,-1]},{size:2,px:[17,6],py:[10,2],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:3,px:[13,7,3],py:[5,2,6],pz:[0,1,-1],nx:[17,16,17],ny:[1,1,2],nz:[0,0,0]},{size:2,px:[11,10],py:[3,3],pz:[0,0],nx:[8,4],ny:[4,4],nz:[1,-1]},{size:2,px:[4,8],py:[0,8],pz:[2,-1],nx:[3,4],ny:[0,0],nz:[1,1]},{size:5,px:[9,2,4,1,2],py:[13,3,9,2,5],pz:[0,2,1,2,2],nx:[9,5,10,4,10],ny:[5,1,3,0,0],nz:[1,-1,-1,-1,-1]},{size:2,px:[6,12],py:[5,9],pz:[1,0],nx:[0,2],ny:[23,9],nz:[0,-1]},{size:2,px:[22,11],py:[21,8],pz:[0,1],nx:[10,0],ny:[17,2],nz:[0,-1]},{size:2,px:[3,1],py:[22,9],pz:[0,1],nx:[22,5],ny:[11,2],nz:[0,2]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[5,6],ny:[10,9],nz:[1,-1]},{size:4,px:[7,3,17,7],py:[8,2,10,11],pz:[0,2,0,1],nx:[6,10,5,23],ny:[9,21,1,23],nz:[0,-1,-1,-1]},{size:2,px:[8,3],py:[7,2],pz:[1,2],nx:[8,9],ny:[4,9],nz:[1,-1]},{size:2,px:[9,5],py:[14,6],pz:[0,1],nx:[8,8],ny:[13,13],nz:[0,-1]},{size:3,px:[11,6,8],py:[20,3,20],pz:[0,-1,-1],nx:[5,3,12],ny:[9,5,18],nz:[1,2,0]},{size:2,px:[3,9],py:[1,3],pz:[1,0],nx:[2,8],ny:[5,8],nz:[0,-1]},{size:2,px:[15,9],py:[21,3],pz:[0,-1],nx:[3,4],ny:[5,5],nz:[2,2]},{size:2,px:[2,9],py:[7,11],pz:[1,-1],nx:[2,2],ny:[8,9],nz:[1,1]},{size:4,px:[3,4,3,1],py:[14,21,19,6],pz:[0,0,0,1],nx:[10,16,4,5],ny:[8,1,7,6],nz:[0,-1,-1,-1]},{size:4,px:[10,4,3,1],py:[5,21,19,6],pz:[1,-1,-1,-1],nx:[21,10,5,11],ny:[4,2,3,4],nz:[0,1,2,1]},{size:2,px:[4,17],py:[3,8],pz:[2,0],nx:[17,2],ny:[9,22],nz:[0,-1]},{size:2,px:[17,12],py:[14,20],pz:[0,-1],nx:[7,8],ny:[4,4],nz:[1,1]},{size:2,px:[10,12],py:[9,20],pz:[0,-1],nx:[11,23],ny:[8,18],nz:[1,0]},{size:2,px:[5,11],py:[4,7],pz:[2,1],nx:[8,15],ny:[7,5],nz:[1,-1]},{size:2,px:[11,15],py:[13,8],pz:[0,-1],nx:[11,11],ny:[6,7],nz:[1,1]},{size:2,px:[6,15],py:[14,8],pz:[0,-1],nx:[4,4],ny:[12,13],nz:[0,0]},{size:2,px:[5,5],py:[0,1],pz:[2,2],nx:[15,4],ny:[5,5],nz:[0,-1]},{size:2,px:[16,17],py:[2,2],pz:[0,0],nx:[20,8],ny:[3,7],nz:[0,-1]},{size:3,px:[6,3,2],py:[10,6,1],pz:[0,-1,-1],nx:[4,3,2],ny:[3,4,2],nz:[1,1,2]},{size:2,px:[10,6],py:[4,6],pz:[0,-1],nx:[6,13],ny:[0,1],nz:[1,0]},{size:2,px:[10,10],py:[8,7],pz:[1,1],nx:[8,2],ny:[7,2],nz:[1,-1]},{size:2,px:[7,1],py:[12,4],pz:[0,-1],nx:[3,4],ny:[5,5],nz:[1,1]},{size:2,px:[11,15],py:[15,14],pz:[0,-1],nx:[3,11],ny:[4,13],nz:[1,0]},{size:5,px:[13,9,11,14,12],py:[0,2,0,0,2],pz:[0,0,0,0,0],nx:[5,4,4,3,4],ny:[4,4,18,7,17],nz:[1,1,0,1,0]},{size:3,px:[13,12,11],py:[22,22,22],pz:[0,0,0],nx:[11,12,13],ny:[20,20,20],nz:[0,0,0]},{size:2,px:[6,13],py:[2,4],pz:[1,0],nx:[7,6],ny:[8,9],nz:[0,-1]},{size:2,px:[0,0],py:[23,4],pz:[0,-1],nx:[5,9],ny:[1,1],nz:[1,0]},{size:2,px:[14,14],py:[19,19],pz:[0,-1],nx:[11,11],ny:[10,9],nz:[1,1]},{size:2,px:[23,23],py:[11,9],pz:[0,0],nx:[23,23],ny:[0,11],nz:[0,-1]},{size:2,px:[23,3],py:[23,5],pz:[0,-1],nx:[4,1],ny:[23,10],nz:[0,1]},{size:2,px:[9,1],py:[7,4],pz:[1,-1],nx:[19,10],ny:[20,9],nz:[0,1]},{size:2,px:[16,1],py:[9,4],pz:[0,-1],nx:[7,8],ny:[3,3],nz:[1,1]},{size:2,px:[7,6],py:[13,13],pz:[0,0],nx:[4,5],ny:[4,11],nz:[1,-1]},{size:5,px:[19,20,20,10,10],py:[0,0,2,0,1],pz:[0,0,0,1,1],nx:[7,7,15,4,4],ny:[4,13,7,4,4],nz:[1,0,0,1,-1]},{size:2,px:[12,23],py:[6,5],pz:[0,-1],nx:[18,18],ny:[17,16],nz:[0,0]},{size:2,px:[6,3],py:[9,2],pz:[1,2],nx:[14,18],ny:[9,1],nz:[0,-1]},{size:2,px:[9,13],py:[16,5],pz:[0,-1],nx:[5,4],ny:[7,9],nz:[1,1]},{size:2,px:[10,10],py:[8,10],pz:[1,1],nx:[4,1],ny:[5,3],nz:[2,-1]},{size:2,px:[12,11],py:[13,4],pz:[0,-1],nx:[0,0],ny:[14,15],nz:[0,0]},{size:2,px:[2,1],py:[20,17],pz:[0,0],nx:[12,12],ny:[22,2],nz:[0,-1]},{size:2,px:[2,3],py:[6,7],pz:[1,-1],nx:[21,21],ny:[13,12],nz:[0,0]},{size:2,px:[3,10],py:[4,23],pz:[2,0],nx:[10,2],ny:[21,5],nz:[0,-1]},{size:2,px:[6,12],py:[3,6],pz:[1,0],nx:[11,0],ny:[17,1],nz:[0,-1]},{size:2,px:[11,4],py:[21,9],pz:[0,-1],nx:[2,3],ny:[18,22],nz:[0,0]},{size:2,px:[13,5],py:[18,9],pz:[0,-1],nx:[6,7],ny:[8,9],nz:[1,1]},{size:2,px:[21,4],py:[16,3],pz:[0,-1],nx:[23,23],ny:[16,15],nz:[0,0]},{size:2,px:[2,0],py:[7,4],pz:[1,-1],nx:[3,8],ny:[7,4],nz:[1,1]},{size:2,px:[15,16],py:[11,12],pz:[0,0],nx:[8,5],ny:[4,5],nz:[1,-1]},{size:2,px:[0,0],py:[7,5],pz:[0,0],nx:[17,17],ny:[11,10],nz:[0,-1]},{size:5,px:[8,13,12,3,3],py:[6,23,23,3,3],pz:[1,0,0,2,-1],nx:[0,1,0,0,0],ny:[2,13,4,5,6],nz:[2,0,1,1,1]},{size:2,px:[0,1],py:[7,8],pz:[1,-1],nx:[0,0],ny:[1,0],nz:[2,2]},{size:2,px:[2,12],py:[1,7],pz:[1,-1],nx:[0,0],ny:[12,14],nz:[0,0]},{size:2,px:[5,1],py:[7,4],pz:[1,2],nx:[8,0],ny:[15,14],nz:[0,-1]},{size:2,px:[7,4],py:[14,8],pz:[0,-1],nx:[2,4],ny:[1,4],nz:[2,1]},{size:2,px:[5,3],py:[3,1],pz:[2,-1],nx:[9,9],ny:[5,6],nz:[1,1]},{size:2,px:[4,5],py:[2,3],pz:[1,-1],nx:[11,12],ny:[23,23],nz:[0,0]},{size:2,px:[10,5],py:[7,0],pz:[1,-1],nx:[22,22],ny:[19,18],nz:[0,0]},{size:3,px:[10,2,9],py:[20,9,4],pz:[0,-1,-1],nx:[1,10,11],ny:[2,11,9],nz:[2,0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[9,3],ny:[4,2],nz:[1,-1]},{size:2,px:[17,6],py:[7,16],pz:[0,-1],nx:[17,17],ny:[9,6],
nz:[0,0]},{size:3,px:[8,1,9],py:[6,3,4],pz:[1,-1,-1],nx:[2,9,2],ny:[5,13,3],nz:[2,0,2]},{size:4,px:[10,10,9,2],py:[12,11,2,10],pz:[0,0,-1,-1],nx:[6,11,3,13],ny:[2,4,1,4],nz:[1,0,2,0]},{size:2,px:[3,3],py:[7,1],pz:[1,-1],nx:[4,3],ny:[4,4],nz:[1,1]},{size:2,px:[0,0],py:[4,8],pz:[2,1],nx:[4,4],ny:[15,5],nz:[0,-1]},{size:2,px:[5,0],py:[4,8],pz:[1,-1],nx:[13,13],ny:[9,10],nz:[0,0]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[8,17],ny:[4,12],nz:[1,-1]},{size:2,px:[15,16],py:[11,6],pz:[0,0],nx:[16,17],ny:[5,12],nz:[0,-1]},{size:2,px:[13,11],py:[9,7],pz:[0,-1],nx:[0,1],ny:[9,20],nz:[1,0]},{size:3,px:[16,11,20],py:[4,7,23],pz:[0,-1,-1],nx:[8,9,4],ny:[4,6,4],nz:[1,1,2]},{size:2,px:[1,1],py:[18,17],pz:[0,0],nx:[9,6],ny:[7,11],nz:[0,-1]},{size:3,px:[4,4,19],py:[3,2,9],pz:[2,2,0],nx:[2,14,11],ny:[5,3,9],nz:[1,-1,-1]},{size:2,px:[11,19],py:[13,9],pz:[0,-1],nx:[11,11],ny:[4,5],nz:[1,1]},{size:2,px:[13,7],py:[19,2],pz:[0,-1],nx:[3,5],ny:[6,12],nz:[1,0]},{size:4,px:[9,4,4,2],py:[13,9,8,4],pz:[0,1,1,2],nx:[13,0,0,14],ny:[18,11,6,1],nz:[0,-1,-1,-1]},{size:2,px:[11,15],py:[8,10],pz:[0,0],nx:[14,11],ny:[9,2],nz:[0,-1]},{size:2,px:[3,2],py:[8,5],pz:[1,2],nx:[4,4],ny:[10,10],nz:[1,-1]},{size:4,px:[4,6,16,14],py:[1,1,1,7],pz:[2,1,0,0],nx:[10,1,1,2],ny:[8,5,10,3],nz:[0,-1,-1,-1]},{size:4,px:[2,3,1,2],py:[3,1,0,2],pz:[0,0,1,0],nx:[0,0,0,0],ny:[1,1,2,0],nz:[0,1,0,1]},{size:2,px:[8,8],py:[6,7],pz:[1,1],nx:[8,0],ny:[4,1],nz:[1,-1]},{size:2,px:[0,0],py:[3,0],pz:[0,1],nx:[2,2],ny:[1,16],nz:[1,-1]},{size:2,px:[6,6],py:[19,18],pz:[0,0],nx:[2,10],ny:[5,8],nz:[2,-1]},{size:2,px:[8,5],py:[21,11],pz:[0,-1],nx:[3,2],ny:[11,5],nz:[1,2]},{size:2,px:[4,9],py:[4,7],pz:[2,1],nx:[8,7],ny:[10,4],nz:[1,-1]},{size:5,px:[4,18,19,16,19],py:[3,12,12,23,13],pz:[2,0,0,0,0],nx:[2,8,3,2,2],ny:[4,23,10,5,5],nz:[2,0,1,2,-1]},{size:2,px:[4,8],py:[6,11],pz:[1,0],nx:[8,3],ny:[4,7],nz:[1,-1]},{size:2,px:[3,12],py:[4,13],pz:[2,0],nx:[10,5],ny:[15,21],nz:[0,-1]},{size:2,px:[2,9],py:[4,23],pz:[2,0],nx:[19,4],ny:[9,3],nz:[0,2]},{size:2,px:[3,6],py:[8,15],pz:[1,0],nx:[6,1],ny:[18,5],nz:[0,-1]},{size:2,px:[9,0],py:[20,3],pz:[0,-1],nx:[2,10],ny:[5,17],nz:[2,0]},{size:3,px:[10,6,3],py:[2,7,3],pz:[0,-1,-1],nx:[5,4,2],ny:[9,7,2],nz:[1,1,2]},{size:2,px:[14,6],py:[12,7],pz:[0,-1],nx:[2,10],ny:[0,1],nz:[2,0]},{size:3,px:[10,5,1],py:[15,5,4],pz:[0,-1,-1],nx:[9,4,18],ny:[2,0,4],nz:[1,2,0]},{size:2,px:[17,2],py:[12,6],pz:[0,-1],nx:[8,16],ny:[4,11],nz:[1,0]},{size:3,px:[7,13,4],py:[0,0,1],pz:[1,0,-1],nx:[18,4,4],ny:[13,2,3],nz:[0,2,2]},{size:2,px:[1,11],py:[10,6],pz:[0,-1],nx:[0,1],ny:[15,17],nz:[0,0]},{size:3,px:[9,12,8],py:[8,17,11],pz:[1,0,1],nx:[12,0,20],ny:[16,9,13],nz:[0,-1,-1]},{size:2,px:[11,4],py:[5,8],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[16,3],py:[9,8],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[6,3],py:[11,5],pz:[1,2],nx:[11,5],ny:[21,5],nz:[0,-1]},{size:2,px:[11,13],py:[1,1],pz:[0,0],nx:[4,4],ny:[5,5],nz:[1,-1]},{size:2,px:[14,4],py:[4,3],pz:[0,-1],nx:[12,10],ny:[2,2],nz:[0,0]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[9,7],ny:[9,7],nz:[0,-1]},{size:3,px:[5,6,6],py:[4,4,4],pz:[1,-1,-1],nx:[13,8,7],ny:[8,3,4],nz:[0,1,1]},{size:2,px:[5,5],py:[2,11],pz:[1,1],nx:[10,11],ny:[22,22],nz:[0,0]},{size:2,px:[16,9],py:[13,7],pz:[0,1],nx:[8,14],ny:[4,12],nz:[1,-1]},{size:2,px:[13,5],py:[13,3],pz:[0,2],nx:[16,22],ny:[13,6],nz:[0,-1]},{size:4,px:[4,4,3,4],py:[4,3,4,5],pz:[2,2,2,2],nx:[21,5,17,7],ny:[0,2,5,23],nz:[0,-1,-1,-1]},{size:2,px:[4,16],py:[0,1],pz:[2,0],nx:[15,1],ny:[23,10],nz:[0,-1]},{size:2,px:[4,6],py:[11,2],pz:[0,-1],nx:[15,6],ny:[2,1],nz:[0,1]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:3,px:[13,14,5],py:[9,15,2],pz:[0,-1,-1],nx:[11,1,11],ny:[10,3,11],nz:[0,1,0]},{size:2,px:[5,1],py:[6,2],pz:[1,-1],nx:[1,1],ny:[2,5],nz:[2,1]},{size:2,px:[11,5],py:[1,0],pz:[1,2],nx:[10,4],ny:[2,3],nz:[1,-1]},{size:2,px:[11,11],py:[8,9],pz:[1,1],nx:[23,4],ny:[23,2],nz:[0,-1]},{size:2,px:[5,2],py:[10,2],pz:[0,-1],nx:[18,10],ny:[0,1],nz:[0,1]},{size:2,px:[20,4],py:[7,3],pz:[0,2],nx:[8,4],ny:[4,0],nz:[1,-1]},{size:2,px:[10,4],py:[5,4],pz:[1,-1],nx:[11,11],ny:[5,6],nz:[1,1]},{size:3,px:[14,15,16],py:[0,0,1],pz:[0,0,0],nx:[8,5,15],ny:[7,2,10],nz:[1,-1,-1]},{size:2,px:[2,2],py:[1,1],pz:[2,-1],nx:[17,18],ny:[2,2],nz:[0,0]},{size:2,px:[13,8],py:[15,7],pz:[0,-1],nx:[9,4],ny:[5,2],nz:[0,1]},{size:2,px:[4,0],py:[6,17],pz:[1,-1],nx:[3,2],ny:[4,2],nz:[1,2]},{size:2,px:[14,8],py:[17,9],pz:[0,-1],nx:[7,6],ny:[8,8],nz:[1,1]},{size:2,px:[10,4],py:[7,1],pz:[1,-1],nx:[15,6],ny:[14,4],nz:[0,1]},{size:2,px:[3,12],py:[8,19],pz:[1,0],nx:[13,10],ny:[17,9],nz:[0,-1]},{size:2,px:[7,12],py:[2,4],pz:[1,0],nx:[6,11],ny:[3,2],nz:[0,-1]},{size:4,px:[2,1,6,1],py:[10,3,23,8],pz:[1,2,0,1],nx:[17,10,23,0],ny:[9,2,20,3],nz:[0,-1,-1,-1]},{size:2,px:[9,9],py:[2,8],pz:[0,-1],nx:[2,2],ny:[4,2],nz:[2,2]},{size:2,px:[3,16],py:[1,6],pz:[2,0],nx:[8,4],ny:[2,5],nz:[1,-1]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[5,6],py:[3,0],pz:[2,-1],nx:[9,5],ny:[2,1],nz:[0,1]},{size:2,px:[3,16],py:[5,23],pz:[1,-1],nx:[0,0],ny:[6,3],nz:[1,2]},{size:4,px:[0,0,0,0],py:[3,2,12,5],pz:[2,2,0,1],nx:[2,3,2,13],ny:[5,5,2,19],nz:[1,-1,-1,-1]},{size:2,px:[11,11],py:[10,11],pz:[0,0],nx:[5,5],ny:[1,1],nz:[2,-1]},{size:2,px:[5,2],py:[0,4],pz:[2,-1],nx:[2,2],ny:[10,8],nz:[1,1]},{size:4,px:[16,2,8,4],py:[14,0,11,5],pz:[0,-1,-1,-1],nx:[18,14,7,7],ny:[13,14,8,6],nz:[0,0,1,1]},{size:2,px:[8,9],py:[2,2],pz:[0,0],nx:[5,14],ny:[4,14],nz:[1,-1]},{size:2,px:[3,5],py:[11,20],pz:[1,0],nx:[11,4],ny:[0,2],nz:[0,-1]},{size:2,px:[2,2],py:[3,4],pz:[2,2],nx:[3,4],ny:[4,2],nz:[1,-1]},{size:3,px:[10,4,3],py:[5,5,3],pz:[0,-1,-1],nx:[11,3,10],ny:[2,0,2],nz:[0,2,0]},{size:2,px:[15,15],py:[1,1],pz:[0,-1],nx:[7,4],ny:[5,2],nz:[1,2]},{size:4,px:[9,5,2,6],py:[22,8,4,19],pz:[0,1,2,0],nx:[9,5,0,3],ny:[20,5,22,4],nz:[0,-1,-1,-1]},{size:3,px:[1,4,10],py:[3,9,12],pz:[2,1,0],nx:[0,10,0],ny:[0,5,0],nz:[0,-1,-1]},{size:2,px:[1,6],py:[0,7],pz:[0,-1],nx:[20,19],ny:[14,14],nz:[0,0]},{size:2,px:[13,4],py:[14,15],pz:[0,-1],nx:[2,1],ny:[5,7],nz:[0,0]},{size:2,px:[17,7],py:[9,11],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[17,9],py:[12,6],pz:[0,1],nx:[15,10],ny:[9,8],nz:[0,-1]},{size:2,px:[0,0],py:[0,1],pz:[2,2],nx:[9,7],ny:[6,17],nz:[1,-1]},{size:3,px:[3,3,15],py:[3,4,6],pz:[2,1,0],nx:[0,2,22],ny:[5,8,9],nz:[0,-1,-1]},{size:4,px:[15,15,15,1],py:[12,6,6,1],pz:[0,-1,-1,-1],nx:[4,7,13,4],ny:[4,7,12,2],nz:[2,1,0,2]},{size:2,px:[3,15],py:[12,6],pz:[0,-1],nx:[9,1],ny:[14,2],nz:[0,2]},{size:2,px:[12,12],py:[11,12],pz:[0,0],nx:[9,5],ny:[4,4],nz:[1,-1]},{size:3,px:[23,6,7],py:[23,3,4],pz:[0,-1,-1],nx:[19,16,17],ny:[17,14,15],nz:[0,0,0]},{size:2,px:[9,5],py:[2,7],pz:[1,-1],nx:[11,23],ny:[10,18],nz:[1,0]},{size:3,px:[0,0,0],py:[4,9,2],pz:[1,0,2],nx:[2,0,0],ny:[9,2,1],nz:[0,-1,-1]},{size:2,px:[12,0],py:[11,9],pz:[0,-1],nx:[1,0],ny:[18,5],nz:[0,2]},{size:2,px:[5,4],py:[10,6],pz:[0,1],nx:[10,6],ny:[10,18],nz:[0,-1]},{size:2,px:[13,12],py:[13,13],pz:[0,-1],nx:[5,11],ny:[1,3],nz:[2,1]},{size:2,px:[10,19],py:[5,22],pz:[1,-1],nx:[4,12],ny:[1,5],nz:[2,0]},{size:2,px:[8,6],py:[0,0],pz:[0,0],nx:[3,12],ny:[0,3],nz:[0,-1]},{size:2,px:[9,6],py:[7,0],pz:[1,-1],nx:[12,12],ny:[10,11],nz:[0,0]},{size:4,px:[3,1,3,2],py:[20,9,21,19],pz:[0,1,0,0],nx:[20,20,5,12],ny:[10,15,2,10],nz:[0,-1,-1,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,1],ny:[4,6],nz:[1,-1]},{size:3,px:[5,11,11],py:[1,3,4],pz:[2,1,1],nx:[3,3,7],ny:[5,5,0],nz:[1,-1,-1]},{size:3,px:[8,6,7],py:[10,5,6],pz:[1,1,1],nx:[23,3,7],ny:[0,5,0],nz:[0,-1,-1]},{size:2,px:[2,7],py:[2,14],pz:[1,-1],nx:[7,3],ny:[12,4],nz:[0,1]},{size:2,px:[5,3],py:[6,3],pz:[1,2],nx:[13,3],ny:[12,4],nz:[0,-1]},{size:2,px:[11,18],py:[11,4],pz:[0,-1],nx:[23,11],ny:[19,10],nz:[0,1]},{size:2,px:[7,2],py:[12,3],pz:[0,-1],nx:[8,4],ny:[11,5],nz:[0,1]},{size:2,px:[11,11],py:[0,11],pz:[1,-1],nx:[3,3],ny:[19,18],nz:[0,0]},{size:2,px:[11,1],py:[11,11],pz:[1,-1],nx:[13,15],ny:[6,5],nz:[0,0]},{size:2,px:[8,8],py:[9,9],pz:[0,-1],nx:[5,11],ny:[1,3],nz:[2,1]},{size:4,px:[6,4,8,3],py:[6,2,4,3],pz:[0,2,1,2],nx:[7,0,15,8],ny:[8,8,16,7],nz:[0,-1,-1,-1]},{size:2,px:[4,3],py:[22,20],pz:[0,0],nx:[2,8],ny:[5,4],nz:[2,-1]},{size:2,px:[12,6],py:[11,0],pz:[0,-1],nx:[0,0],ny:[3,1],nz:[1,2]},{size:2,px:[0,0],py:[12,7],pz:[0,1],nx:[3,1],ny:[23,9],nz:[0,-1]},{size:2,px:[7,0],py:[11,5],pz:[1,-1],nx:[0,0],ny:[2,3],nz:[2,2]},{size:2,px:[8,8],py:[10,10],pz:[0,-1],nx:[4,3],ny:[5,4],nz:[2,2]},{size:2,px:[13,3],py:[2,4],pz:[0,-1],nx:[4,3],ny:[3,5],nz:[2,2]},{size:2,px:[1,1],py:[23,22],pz:[0,0],nx:[9,0],ny:[7,3],nz:[0,-1]},{size:2,px:[1,0],py:[16,15],pz:[0,0],nx:[0,14],ny:[23,12],nz:[0,-1]},{size:2,px:[13,8],py:[22,0],pz:[0,-1],nx:[5,3],ny:[0,1],nz:[1,1]},{size:2,px:[13,13],py:[7,7],pz:[0,-1],nx:[3,2],ny:[17,10],nz:[0,1]},{size:2,px:[20,20],py:[15,16],pz:[0,0],nx:[7,3],ny:[9,17],nz:[1,-1]},{size:5,px:[10,12,11,13,11],py:[2,2,1,2,2],pz:[0,0,0,0,0],nx:[10,18,21,21,19],ny:[3,1,13,11,2],nz:[1,0,0,0,0]},{size:2,px:[16,3],py:[6,1],pz:[0,2],nx:[15,18],ny:[8,1],nz:[0,-1]},{size:2,px:[19,3],py:[8,1],pz:[0,-1],nx:[9,8],ny:[4,4],nz:[1,1]},{size:2,px:[10,3],py:[15,18],pz:[0,-1],nx:[3,3],ny:[0,1],nz:[2,2]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[7,3],ny:[11,1],nz:[1,-1]},{size:2,px:[11,10],py:[17,9],pz:[0,-1],nx:[11,10],ny:[15,15],nz:[0,0]},{size:2,px:[5,10],py:[2,4],pz:[1,0],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[9,10],py:[3,4],pz:[0,-1],nx:[9,10],ny:[2,1],nz:[0,0]},{size:2,px:[23,11],py:[13,10],pz:[0,1],nx:[14,7],ny:[5,14],nz:[0,-1]},{size:2,px:[4,4],py:[5,4],pz:[2,2],nx:[9,8],ny:[3,3],nz:[1,-1]},{size:3,px:[12,4,15],py:[5,4,7],pz:[0,-1,-1],nx:[3,4,2],ny:[7,11,5],nz:[1,1,2]},{size:2,px:[11,4],py:[15,4],pz:[0,-1],nx:[5,9],ny:[7,15],nz:[1,0]},{size:2,px:[9,7],py:[0,1],pz:[1,-1],nx:[11,11],ny:[8,7],nz:[1,1]},{size:5,px:[1,1,1,1,1],py:[11,12,10,9,9],pz:[0,0,0,0,-1],nx:[4,5,8,16,11],ny:[4,3,8,8,6],nz:[1,1,0,0,0]}],alpha:[-1.059083,1.059083,-.7846122,.7846122,-.445116,.445116,-.4483277,.4483277,-.3905999,.3905999,-.378925,.378925,-.387461,.387461,-.3110541,.3110541,-.3565056,.3565056,-.3812617,.3812617,-.3325142,.3325142,-.2787282,.2787282,-.3238869,.3238869,-.2993499,.2993499,-.2807737,.2807737,-.2855285,.2855285,-.227755,.227755,-.2031261,.2031261,-.2071574,.2071574,-.2534142,.2534142,-.2266871,.2266871,-.2229078,.2229078,-.2716325,.2716325,-.3046938,.3046938,-.2271601,.2271601,-.1987651,.1987651,-.1953664,.1953664,-.2178737,.2178737,-.2285148,.2285148,-.1891073,.1891073,-.2926469,.2926469,-.2094783,.2094783,-.1478037,.1478037,-.1707579,.1707579,-.146439,.146439,-.2462321,.2462321,-.2319978,.2319978,-.1781651,.1781651,-.1471349,.1471349,-.1953006,.1953006,-.2145108,.2145108,-.1567881,.1567881,-.2024617,.2024617,-.1883198,.1883198,-.1996976,.1996976,-.129233,.129233,-.2142242,.2142242,-.2473748,.2473748,-.1880902,.1880902,-.1874572,.1874572,-.1495984,.1495984,-.1608525,.1608525,-.1698402,.1698402,-.1898871,.1898871,-.1350238,.1350238,-.1727032,.1727032,-.1593352,.1593352,-.1476968,.1476968,-.1428431,.1428431,-.1766261,.1766261,-.1453226,.1453226,-.1929885,.1929885,-.1337582,.1337582,-.1629078,.1629078,-.09973085,.09973085,-.117276,.117276,-.1399242,.1399242,-.1613189,.1613189,-.1145695,.1145695,-.1191093,.1191093,-.12259,.12259,-.1641114,.1641114,-.1419878,.1419878,-.2183465,.2183465,-.1566968,.1566968,-.1288216,.1288216,-.1422831,.1422831,-.2000107,.2000107,-.1817265,.1817265,-.1793796,.1793796,-.1428926,.1428926,-.1182032,.1182032,-.1150421,.1150421,-.1336584,.1336584,-.1656178,.1656178,-.1386549,.1386549,-.1387461,.1387461,-.1313023,.1313023,-.1360391,.1360391,-.1305505,.1305505,-.1323399,.1323399,-.1502891,.1502891,-.1488859,.1488859,-.1126628,.1126628,-.1233623,.1233623,-.1702106,.1702106,-.1629639,.1629639,-.1337706,.1337706,-.1290384,.1290384,-.1165519,.1165519,-.1412778,.1412778,-.1470204,.1470204,-.221378,.221378,-.1472619,.1472619,-.1357071,.1357071,-.1416513,.1416513,-.1050208,.1050208,-.1480033,.1480033,-.1899871,.1899871,-.1466249,.1466249,-.1076952,.1076952,-.1035096,.1035096,-.156697,.156697,-.1364115,.1364115,-.1512889,.1512889,-.1252851,.1252851,-.12063,.12063,-.1059134,.1059134,-.1140398,.1140398,-.1359912,.1359912,-.1231201,.1231201,-.1231867,.1231867,-.09789923,.09789923,-.1590213,.1590213,-.1002206,.1002206,-.1518339,.1518339,-.1055203,.1055203,-.1012579,.1012579,-.1094956,.1094956,-.1429592,.1429592,-.1108838,.1108838,-.1116475,.1116475,-.1735371,.1735371,-.1067758,.1067758,-.1290406,.1290406,-.1156822,.1156822,-.09668217,.09668217,-.1170053,.1170053,-.1252092,.1252092,-.1135158,.1135158,-.1105896,.1105896,-.1038175,.1038175,-.1210459,.1210459,-.1078878,.1078878,-.1050808,.1050808,-.1428227,.1428227,-.16646,.16646,-.1013508,.1013508,-.120693,.120693,-.1088972,.1088972,-.1381026,.1381026,-.1109115,.1109115,-.07921549,.07921549,-.1057832,.1057832,-.09385827,.09385827,-.1486035,.1486035,-.1247401,.1247401,-.09451327,.09451327,-.1272805,.1272805,-.09616206,.09616206,-.09051084,.09051084,-.1138458,.1138458,-.1047581,.1047581,-.1382394,.1382394,-.1122203,.1122203,-.1052936,.1052936,-.1239318,.1239318,-.1241439,.1241439,-.1259012,.1259012,-.1211701,.1211701,-.1344131,.1344131,-.1127778,.1127778,-.1609745,.1609745,-.1901382,.1901382,-.1618962,.1618962,-.1230398,.1230398,-.1319311,.1319311,-.143141,.143141,-.1143306,.1143306,-.09390938,.09390938,-.1154161,.1154161,-.1141205,.1141205,-.1098048,.1098048,-.08870072,.08870072,-.1122444,.1122444,-.1114147,.1114147,-.118571,.118571,-.1107775,.1107775,-.1259167,.1259167,-.1105176,.1105176,-.1020691,.1020691,-.09607863,.09607863,-.095737,.095737,-.1054349,.1054349,-.1137856,.1137856,-.1192043,.1192043,-.1113264,.1113264,-.1093137,.1093137,-.1010919,.1010919,-.09625901,.09625901,-.09338459,.09338459,-.1142944,.1142944,-.1038877,.1038877,-.09772862,.09772862,-.1375298,.1375298,-.1394776,.1394776,-.09454765,.09454765,-.1203246,.1203246,-.08684943,.08684943,-.1135622,.1135622,-.1058181,.1058181,-.1082152,.1082152,-.1411355,.1411355,-.09978846,.09978846,-.1057874,.1057874,-.1415366,.1415366,-.09981014,.09981014,-.09261151,.09261151,-.1737173,.1737173,-.1580335,.1580335,-.09594668,.09594668,-.09336013,.09336013,-.1102373,.1102373,-.08546557,.08546557,-.09945057,.09945057,-.1146358,.1146358,-.1324734,.1324734,-.1422296,.1422296,-.0993799,.0993799,-.08381049,.08381049,-.1270714,.1270714,-.1091738,.1091738,-.1314881,.1314881,-.1085159,.1085159,-.09247554,.09247554,-.08121645,.08121645,-.1059589,.1059589,-.08307793,.08307793,-.1033103,.1033103,-.1056706,.1056706,-.1032803,.1032803,-.126684,.126684,-.09341601,.09341601,-.0768357,.0768357,-.103053,.103053,-.1051872,.1051872,-.09114946,.09114946,-.1329341,.1329341,-.0927083,.0927083,-.114175,.114175,-.09889318,.09889318,-.08856485,.08856485,-.105421,.105421,-.1092704,.1092704,-.08729085,.08729085,-.1141057,.1141057,-.1530774,.1530774,-.0812972,.0812972,-.1143335,.1143335,-.1175777,.1175777,-.1371729,.1371729,-.1394356,.1394356,-.1016308,.1016308,-.1125547,.1125547,-.096726,.096726,-.1036631,.1036631,-.08702514,.08702514,-.1264807,.1264807,-.1465688,.1465688,-.08781464,.08781464,-.08552605,.08552605,-.1145072,.1145072,-.1378489,.1378489,-.1013312,.1013312,-.1020083,.1020083,-.1015816,.1015816,-.08407101,.08407101,-.08296485,.08296485,-.08033655,.08033655,-.09003615,.09003615,-.07504954,.07504954,-.1224941,.1224941,-.09347814,.09347814,-.09555575,.09555575,-.09810025,.09810025,-.1237068,.1237068,-.1283586,.1283586,-.1082763,.1082763,-.1018145,.1018145,-.1175161,.1175161,-.1252279,.1252279,-.1370559,.1370559,-.09941339,.09941339,-.08506938,.08506938,-.1260902,.1260902,-.1014152,.1014152,-.09728694,.09728694,-.0937491,.0937491,-.09587429,.09587429,-.09516036,.09516036,-.07375173,.07375173,-.09332487,.09332487,-.09020733,.09020733,-.1133381,.1133381,-.154218,.154218,-.09692168,.09692168,-.07960904,.07960904,-.08947089,.08947089,-.07830286,.07830286,-.0990005,.0990005,-.1041293,.1041293,-.09572501,.09572501,-.08230575,.08230575,-.09194901,.09194901,-.1076971,.1076971,-.1027782,.1027782,-.1028538,.1028538,-.1013992,.1013992,-.09087585,.09087585,-.1100706,.1100706,-.1094934,.1094934,-.1107879,.1107879,-.1026915,.1026915,-.1017572,.1017572,-.07984776,.07984776,-.09015413,.09015413,-.129987,.129987,-.09164982,.09164982,-.1062788,.1062788,-.1160203,.1160203,-.08858603,.08858603,-.09762964,.09762964,-.1070694,.1070694,-.09549046,.09549046,-.1533034,.1533034,-.08663316,.08663316,-.09303018,.09303018,-.09853582,.09853582,-.09733371,.09733371,-.1048555,.1048555,-.09056041,.09056041,-.07552283,.07552283,-.08780631,.08780631,-.1123953,.1123953,-.1452948,.1452948,-.1156423,.1156423,-.08701142,.08701142,-.09713334,.09713334,-.09970888,.09970888,-.08614129,.08614129,-.07459861,.07459861,-.09253517,.09253517,-.09570092,.09570092,-.09485535,.09485535,-.1148365,.1148365,-.1063193,.1063193,-.09986686,.09986686,-.07523412,.07523412,-.1005881,.1005881,-.08249716,.08249716,-.1055866,.1055866,-.134305,.134305,-.1371056,.1371056,-.09604689,.09604689,-.1224268,.1224268,-.09211478,.09211478,-.1108371,.1108371,-.1100547,.1100547,-.0893897,.0893897,-.08655951,.08655951,-.07085816,.07085816,-.08101028,.08101028,-.08338046,.08338046,-.08309588,.08309588,-.09090584,.09090584,-.08124564,.08124564,-.09367843,.09367843,-.1011747,.1011747,-.09885045,.09885045,-.08944266,.08944266,-.08453859,.08453859,-.08308847,.08308847,-.136728,.136728,-.1295144,.1295144,-.1063965,.1063965,-.07752328,.07752328,-.09681524,.09681524,-.07862345,.07862345,-.08767746,.08767746,-.09198041,.09198041,-.09686489,.09686489]},{count:564,threshold:-4.517456,feature:[{size:5,px:[15,9,8,12,11],py:[3,6,3,0,8],pz:[0,1,0,0,0],nx:[6,14,9,22,23],ny:[8,7,8,17,3],nz:[1,0,0,0,0]},{size:5,px:[12,13,11,14,12],py:[9,4,4,4,5],pz:[0,0,0,0,0],nx:[4,6,10,4,15],ny:[3,8,7,10,9],nz:[1,1,0,1,0]},{size:5,px:[7,5,6,8,8],py:[2,13,2,1,1],pz:[0,0,0,0,-1],nx:[3,0,4,1,0],ny:[4,3,10,3,13],nz:[1,1,1,0,0]},{size:5,px:[11,2,2,11,16],py:[9,4,2,7,11],pz:[0,2,2,0,0],nx:[8,4,1,14,0],ny:[4,4,16,5,13],nz:[1,1,-1,-1,-1]},{size:2,px:[14,14],py:[18,18],pz:[0,-1],nx:[8,13],ny:[10,16],nz:[1,0]},{size:5,px:[15,17,16,8,18],py:[1,2,1,0,2],pz:[0,0,0,1,0],nx:[21,22,22,22,22],ny:[1,5,3,4,2],nz:[0,0,0,0,-1]},{size:2,px:[15,4],py:[23,3],pz:[0,2],nx:[7,3],ny:[10,6],nz:[1,-1]},{size:5,px:[3,6,4,3,11],py:[10,11,8,3,8],pz:[1,0,1,1,0],nx:[3,5,6,3,0],ny:[4,9,9,9,0],nz:[1,-1,-1,-1,-1]},{size:3,px:[11,11,2],py:[11,13,16],pz:[0,0,-1],nx:[10,10,9],ny:[10,11,14],nz:[0,0,0]},{size:2,px:[8,4],py:[12,6],pz:[0,1],nx:[4,5],ny:[11,11],nz:[1,-1]},{size:5,px:[10,11,13,3,12],py:[3,4,3,0,1],pz:[0,0,0,2,0],nx:[14,18,20,19,15],ny:[13,1,15,2,18],nz:[0,0,0,0,0]},{size:5,px:[20,14,10,12,12],py:[12,12,4,10,11],pz:[0,0,1,0,0],nx:[9,2,9,9,9],ny:[4,12,5,9,14],nz:[1,-1,-1,-1,-1]},{size:5,px:[3,3,3,4,2],py:[15,16,14,21,12],pz:[0,0,0,0,0],nx:[0,0,0,0,0],ny:[20,10,5,21,21],nz:[0,1,2,0,-1]},{size:2,px:[18,8],py:[16,7],pz:[0,1],nx:[14,0],ny:[8,10],nz:[0,-1]},{size:4,px:[12,4,16,1],py:[14,3,8,3],pz:[0,-1,-1,-1],nx:[14,10,20,13],ny:[13,5,16,9],nz:[0,1,0,0]},{size:5,px:[3,8,2,3,3],py:[7,2,1,2,4],pz:[1,-1,-1,-1,-1],nx:[1,9,2,1,1],ny:[3,14,9,7,2],nz:[1,0,1,1,1]},{size:5,px:[4,1,3,2,3],py:[2,1,2,4,3],pz:[0,1,0,0,0],nx:[0,0,0,0,0],ny:[3,1,2,0,0],nz:[0,1,0,2,-1]},{size:4,px:[4,8,7,9],py:[6,11,11,10],pz:[1,0,0,0],nx:[3,10,2,20],ny:[4,4,4,8],nz:[1,-1,-1,-1]},{size:2,px:[1,8],py:[3,11],pz:[2,-1],nx:[8,2],ny:[15,5],nz:[0,2]},{size:2,px:[17,0],py:[13,10],pz:[0,-1],nx:[14,14],ny:[11,10],nz:[0,0]},{size:5,px:[22,22,22,5,22],py:[16,18,17,2,15],pz:[0,0,0,2,0],nx:[8,4,15,6,6],ny:[4,2,7,11,11],nz:[1,2,0,1,-1]},{size:5,px:[16,9,8,17,15],py:[12,6,6,22,12],pz:[0,1,1,0,0],nx:[11,23,23,23,22],ny:[11,23,22,21,23],nz:[1,0,0,0,-1]},{size:5,px:[5,2,4,4,9],py:[22,3,15,20,18],pz:[0,2,0,0,0],nx:[9,4,23,7,22],ny:[8,4,22,19,23],nz:[0,-1,-1,-1,-1]},{size:5,px:[8,6,9,7,3],py:[3,3,3,3,1],pz:[0,0,0,0,1],nx:[5,5,4,4,4],ny:[0,1,1,2,0],nz:[0,0,0,0,-1]},{size:2,px:[2,3],py:[3,3],pz:[2,2],nx:[3,6],ny:[4,6],nz:[1,-1]},{size:5,px:[1,1,0,1,0],py:[17,15,6,16,10],pz:[0,0,1,0,0],nx:[4,4,7,4,8],ny:[2,5,9,4,4],nz:[2,2,1,2,-1]},{size:5,px:[12,12,12,13,13],py:[10,9,11,13,13],pz:[0,0,0,0,-1],nx:[4,3,3,5,3],ny:[21,18,17,23,16],nz:[0,0,0,0,0]},{size:4,px:[5,6,5,9],py:[13,7,9,23],pz:[0,0,1,0],nx:[6,15,7,5],ny:[9,20,7,23],nz:[0,-1,-1,-1]},{size:2,px:[6,3],py:[4,2],pz:[1,2],nx:[8,23],ny:[4,2],nz:[1,-1]},{size:2,px:[9,7],py:[18,0],pz:[0,0],nx:[5,7],ny:[8,10],nz:[1,1]},{size:2,px:[4,6],py:[11,16],pz:[1,0],nx:[10,9],ny:[16,7],nz:[0,-1]},{size:4,px:[11,11,11,11],py:[11,10,12,13],pz:[0,0,0,0],nx:[13,13,13,9],ny:[11,9,10,4],nz:[0,0,0,1]},{size:4,px:[12,6,7,6],py:[7,11,8,4],pz:[0,1,1,1],nx:[10,0,19,7],ny:[21,3,12,11],nz:[0,-1,-1,-1]},{size:2,px:[4,4],py:[3,4],pz:[2,2],nx:[9,1],ny:[4,7],nz:[1,-1]},{size:2,px:[19,19],py:[21,20],pz:[0,0],nx:[7,7],ny:[3,13],nz:[1,-1]},{size:5,px:[12,9,13,11,5],py:[0,2,2,0,0],pz:[0,0,0,0,1],nx:[6,4,5,5,5],ny:[1,3,5,2,6],nz:[0,0,1,0,1]},{size:5,px:[4,3,2,5,7],py:[11,3,3,7,17],pz:[1,2,2,0,0],nx:[23,5,11,5,5],ny:[0,4,10,2,6],nz:[0,-1,-1,-1,-1]},{size:2,px:[20,17],py:[12,3],pz:[0,-1],nx:[20,19],ny:[21,23],nz:[0,0]},{size:2,px:[2,1],py:[12,8],pz:[0,0],nx:[2,8],ny:[2,16],nz:[2,-1]},{size:2,px:[16,5],py:[4,5],pz:[0,-1],nx:[7,8],ny:[9,1],nz:[1,1]},{size:2,px:[2,2],py:[0,1],pz:[1,1],nx:[1,8],ny:[5,1],nz:[0,-1]},{size:2,px:[1,1],py:[12,10],pz:[0,1],nx:[2,20],ny:[23,9],nz:[0,-1]},{size:4,px:[11,0,0,2],py:[14,3,9,22],pz:[0,-1,-1,-1],nx:[13,14,7,3],ny:[6,7,11,1],nz:[0,0,0,2]},{size:2,px:[14,0],py:[2,3],pz:[0,-1],nx:[4,4],ny:[4,3],nz:[2,2]},{size:2,px:[23,11],py:[18,11],pz:[0,1],nx:[3,2],ny:[1,21],nz:[1,-1]},{size:2,px:[9,9],py:[17,14],pz:[0,-1],nx:[4,5],ny:[10,8],nz:[1,1]},{size:2,px:[9,18],py:[7,14],pz:[1,0],nx:[18,9],ny:[17,8],nz:[0,-1]},{size:2,px:[2,8],py:[4,22],pz:[2,0],nx:[4,3],ny:[10,1],nz:[1,-1]},{size:2,px:[5,22],py:[4,9],pz:[2,-1],nx:[11,23],ny:[8,14],nz:[1,0]},{size:3,px:[23,5,5],py:[8,2,1],pz:[0,2,2],nx:[10,10,2],ny:[4,4,2],nz:[1,-1,-1]},{size:2,px:[11,11],py:[14,23],pz:[0,-1],nx:[3,11],ny:[4,13],nz:[1,0]},{size:2,px:[3,2],py:[7,0],pz:[1,-1],nx:[4,3],ny:[4,4],nz:[1,1]},{size:2,px:[12,1],py:[19,13],pz:[0,-1],nx:[9,12],ny:[10,18],nz:[1,0]},{size:2,px:[10,10],py:[11,10],pz:[1,1],nx:[4,1],ny:[5,11],nz:[2,-1]},{size:5,px:[9,12,4,8,8],py:[3,5,2,9,8],pz:[1,0,2,1,1],nx:[23,23,23,23,23],ny:[3,4,6,5,5],nz:[0,0,0,0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,9],ny:[4,6],nz:[1,-1]},{size:5,px:[13,13,13,7,7],py:[11,10,9,6,6],pz:[0,0,0,1,-1],nx:[5,5,15,5,2],ny:[5,15,9,9,1],nz:[0,0,0,1,2]},{size:2,px:[19,7],py:[21,7],pz:[0,1],nx:[14,10],ny:[15,4],nz:[0,-1]},{size:2,px:[5,5],py:[3,4],pz:[2,2],nx:[21,0],ny:[23,5],nz:[0,-1]},{size:2,px:[2,0],py:[0,0],pz:[1,-1],nx:[3,2],ny:[1,2],nz:[0,0]},{size:2,px:[9,0],py:[4,0],pz:[0,-1],nx:[5,12],ny:[0,1],nz:[1,0]},{size:5,px:[14,16,12,15,13],py:[0,1,0,0,0],pz:[0,0,0,0,0],nx:[4,8,8,4,9],ny:[2,3,4,1,3],nz:[2,1,1,2,-1]},{size:3,px:[4,17,2],py:[11,14,1],pz:[1,-1,-1],nx:[9,8,17],ny:[1,4,0],nz:[1,1,0]},{size:2,px:[18,9],py:[17,7],pz:[0,1],nx:[8,4],ny:[4,7],nz:[1,-1]},{size:2,px:[0,0],py:[3,0],pz:[1,2],nx:[10,11],ny:[6,5],nz:[1,-1]},{size:5,px:[21,21,21,21,20],py:[17,16,19,18,21],pz:[0,0,0,0,0],nx:[0,0,0,0,0],ny:[4,9,11,6,6],nz:[1,0,0,1,-1]},{size:2,px:[12,0],py:[7,1],pz:[0,-1],nx:[8,11],ny:[4,17],nz:[1,0]},{size:4,px:[13,0,0,0],py:[15,0,0,0],pz:[0,-1,-1,-1],nx:[3,7,4,6],ny:[2,7,5,9],nz:[2,1,2,1]},{size:2,px:[2,9],py:[3,12],pz:[2,0],nx:[2,0],ny:[4,0],nz:[1,-1]},{size:2,px:[10,3],py:[6,1],pz:[1,-1],nx:[20,21],ny:[19,14],nz:[0,0]},{size:5,px:[5,22,22,11,22],py:[1,4,3,3,2],pz:[2,0,0,1,-1],nx:[7,13,14,8,15],ny:[3,6,6,3,7],nz:[1,0,0,1,0]},{size:2,px:[12,19],py:[5,15],pz:[0,-1],nx:[16,4],ny:[8,2],nz:[0,2]},{size:2,px:[1,0],py:[11,9],pz:[1,1],nx:[5,0],ny:[3,3],nz:[1,-1]},{size:4,px:[8,3,4,2],py:[6,7,5,3],pz:[1,-1,-1,-1],nx:[13,14,11,11],ny:[11,13,3,5],nz:[0,0,1,1]},{size:2,px:[11,11],py:[5,6],pz:[0,0],nx:[8,4],ny:[4,2],nz:[1,-1]},{size:2,px:[5,9],py:[6,17],pz:[1,0],nx:[9,4],ny:[15,11],nz:[0,-1]},{size:3,px:[6,3,6],py:[6,3,5],pz:[1,2,1],nx:[11,10,4],ny:[8,11,5],nz:[0,0,-1]},{size:2,px:[8,16],py:[0,1],pz:[1,-1],nx:[19,17],ny:[1,0],nz:[0,0]},{size:2,px:[21,20],py:[4,1],pz:[0,0],nx:[11,5],ny:[0,0],nz:[1,2]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[8,9],ny:[4,10],nz:[1,-1]},{size:2,px:[10,1],py:[0,0],pz:[1,-1],nx:[13,12],ny:[6,5],nz:[0,0]},{size:2,px:[5,4],py:[3,11],pz:[1,-1],nx:[3,17],ny:[1,3],nz:[2,0]},{size:2,px:[12,13],py:[4,4],pz:[0,0],nx:[3,3],ny:[1,1],nz:[2,-1]},{size:2,px:[3,18],py:[2,7],pz:[2,0],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[16,6],py:[8,2],pz:[0,1],nx:[8,9],ny:[4,19],nz:[1,-1]},{size:3,px:[12,3,14],py:[13,3,15],pz:[0,-1,-1],nx:[0,1,0],ny:[16,18,15],nz:[0,0,0]},{size:2,px:[3,1],py:[3,4],pz:[2,-1],nx:[7,14],ny:[10,14],nz:[1,0]},{size:2,px:[9,16],py:[6,10],pz:[1,0],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[7,11],py:[4,4],pz:[0,0],nx:[7,23],ny:[3,11],nz:[0,-1]},{size:5,px:[2,4,3,4,4],py:[1,2,0,1,1],pz:[1,0,1,0,-1],nx:[11,9,4,9,5],ny:[6,5,3,6,3],nz:[0,0,1,0,1]},{size:2,px:[6,0],py:[14,1],pz:[0,-1],nx:[2,5],ny:[2,9],nz:[2,1]},{size:2,px:[6,7],py:[7,12],pz:[0,0],nx:[3,22],ny:[3,16],nz:[1,-1]},{size:2,px:[10,4],py:[1,1],pz:[0,1],nx:[2,6],ny:[2,21],nz:[2,-1]},{size:2,px:[13,1],py:[11,6],pz:[0,-1],nx:[12,6],ny:[5,2],nz:[0,1]},{size:5,px:[10,5,11,10,10],py:[4,3,4,6,5],pz:[0,1,0,0,0],nx:[4,7,13,8,4],ny:[2,8,9,4,4],nz:[2,1,0,1,-1]},{size:4,px:[7,8,7,8],py:[11,3,4,7],pz:[1,1,1,1],nx:[0,7,3,8],ny:[0,12,2,4],nz:[0,-1,-1,-1]},{size:2,px:[0,0],py:[4,7],pz:[2,1],nx:[10,1],ny:[7,0],nz:[0,-1]},{size:2,px:[11,5],py:[19,5],pz:[0,-1],nx:[11,5],ny:[17,10],nz:[0,1]},{size:2,px:[11,12],py:[4,4],pz:[0,0],nx:[7,5],ny:[8,3],nz:[0,-1]},{size:3,px:[4,8,4],py:[2,9,4],pz:[2,1,2],nx:[3,19,3],ny:[1,16,5],nz:[1,-1,-1]},{size:2,px:[3,7],py:[0,1],pz:[1,0],nx:[2,3],ny:[15,2],nz:[0,-1]},{size:2,px:[0,4],py:[2,0],pz:[2,-1],nx:[9,16],ny:[5,11],nz:[1,0]},{size:2,px:[14,15],py:[23,16],pz:[0,0],nx:[13,3],ny:[15,1],nz:[0,-1]},{size:2,px:[4,3],py:[0,1],pz:[1,-1],nx:[3,7],ny:[0,0],nz:[1,0]},{size:2,px:[7,6],py:[12,12],pz:[0,0],nx:[4,8],ny:[5,4],nz:[1,-1]},{size:5,px:[4,1,2,4,5],py:[1,0,0,0,6],pz:[0,2,1,0,1],nx:[4,8,7,8,6],ny:[4,10,11,4,4],nz:[1,0,0,1,1]},{size:2,px:[12,12],py:[15,8],pz:[0,-1],nx:[7,15],ny:[16,14],nz:[0,0]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[4,6],ny:[2,8],nz:[2,-1]},{size:2,px:[14,4],py:[19,23],pz:[0,-1],nx:[7,14],ny:[11,18],nz:[1,0]},{size:2,px:[4,2],py:[7,4],pz:[1,2],nx:[2,22],ny:[5,19],nz:[2,-1]},{size:2,px:[8,15],py:[7,17],pz:[1,0],nx:[14,4],ny:[15,5],nz:[0,2]},{size:2,px:[10,11],py:[9,8],pz:[1,-1],nx:[23,5],ny:[19,4],nz:[0,2]},{size:2,px:[11,1],py:[7,9],pz:[0,-1],nx:[4,4],ny:[4,5],nz:[1,1]},{size:2,px:[14,7],py:[6,9],pz:[0,0],nx:[4,11],ny:[4,0],nz:[1,-1]},{size:2,px:[5,4],py:[0,5],pz:[0,-1],nx:[2,2],ny:[0,4],nz:[1,0]},{size:2,px:[10,22],py:[5,20],pz:[0,-1],nx:[3,4],ny:[1,2],nz:[2,2]},{size:3,px:[23,11,11],py:[17,9,8],pz:[0,1,1],nx:[13,8,8],ny:[5,3,3],nz:[0,1,-1]},{size:2,px:[18,9],py:[0,21],pz:[0,-1],nx:[10,10],ny:[2,1],nz:[1,1]},{size:5,px:[11,10,11,11,11],py:[11,13,10,12,12],pz:[0,0,0,0,-1],nx:[11,13,12,3,8],ny:[5,5,5,1,10],nz:[0,0,0,2,0]},{size:2,px:[7,8],py:[11,11],pz:[0,0],nx:[9,16],ny:[9,19],nz:[0,-1]},{size:2,px:[9,18],py:[23,7],pz:[0,-1],nx:[21,21],ny:[7,13],nz:[0,0]},{size:2,px:[8,8],py:[7,8],pz:[1,1],nx:[5,21],ny:[9,13],nz:[1,-1]},{size:2,px:[17,8],py:[22,8],pz:[0,-1],nx:[4,8],ny:[5,10],nz:[2,1]},{size:5,px:[2,5,8,8,4],py:[3,9,13,23,7],pz:[2,1,0,0,1],nx:[9,17,18,19,20],ny:[0,0,0,2,3],nz:[1,0,0,0,0]},{size:3,px:[16,15,2],py:[3,3,13],pz:[0,0,-1],nx:[4,8,4],ny:[3,6,2],nz:[2,1,2]},{size:2,px:[4,7],py:[3,7],pz:[2,1],nx:[15,1],ny:[15,0],nz:[0,-1]},{size:2,px:[3,6],py:[2,3],pz:[2,1],nx:[3,18],ny:[4,2],nz:[1,-1]},{size:2,px:[2,4],py:[2,4],pz:[2,1],nx:[3,0],ny:[5,0],nz:[1,-1]},{size:2,px:[10,0],py:[10,0],pz:[0,-1],nx:[9,4],ny:[2,0],nz:[1,2]},{size:2,px:[2,0],py:[8,3],pz:[1,-1],nx:[4,8],ny:[4,14],nz:[1,0]},{size:2,px:[13,18],py:[14,14],pz:[0,-1],nx:[1,1],ny:[15,13],nz:[0,0]},{size:3,px:[3,2,2],py:[17,10,15],pz:[0,1,0],nx:[13,2,7],ny:[19,11,0],nz:[0,-1,-1]},{size:2,px:[4,17],py:[0,2],pz:[2,0],nx:[8,5],ny:[11,3],nz:[1,-1]},{size:2,px:[15,21],py:[5,4],pz:[0,-1],nx:[15,10],ny:[3,0],nz:[0,1]},{size:2,px:[7,3],py:[13,8],pz:[0,-1],nx:[8,4],ny:[4,4],nz:[1,1]},{size:2,px:[7,22],py:[3,4],pz:[1,-1],nx:[4,2],ny:[2,3],nz:[1,1]},{size:4,px:[6,2,6,5],py:[21,10,22,20],pz:[0,1,0,0],nx:[2,3,4,4],ny:[11,21,23,23],nz:[1,0,0,-1]},{size:2,px:[7,2],py:[6,8],pz:[1,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:4,px:[11,11,5,11],py:[6,5,2,4],pz:[1,1,2,1],nx:[13,7,8,3],ny:[7,3,5,2],nz:[0,1,-1,-1]},{size:2,px:[3,3],py:[7,8],pz:[1,0],nx:[3,11],ny:[4,2],nz:[1,-1]},{size:3,px:[16,1,5],py:[3,3,11],pz:[0,-1,-1],nx:[16,4,8],ny:[2,0,1],nz:[0,2,1]},{size:2,px:[10,0],py:[8,1],pz:[0,-1],nx:[19,18],ny:[20,23],nz:[0,0]},{size:2,px:[17,4],py:[10,4],pz:[0,-1],nx:[4,14],ny:[2,9],nz:[2,0]},{size:5,px:[11,12,9,10,11],py:[2,3,2,2,3],pz:[0,0,0,0,0],nx:[6,4,2,2,2],ny:[18,9,3,2,2],nz:[0,1,2,2,-1]},{size:2,px:[0,1],py:[6,16],pz:[1,0],nx:[8,16],ny:[5,16],nz:[0,-1]},{size:2,px:[3,3],py:[2,3],pz:[2,2],nx:[8,17],ny:[4,9],nz:[1,-1]},{size:3,px:[2,5,2],py:[5,6,4],pz:[1,-1,-1],nx:[0,0,0],ny:[3,5,6],nz:[2,1,1]},{size:5,px:[0,0,0,0,0],py:[6,15,16,13,14],pz:[1,0,0,0,0],nx:[4,5,8,6,8],ny:[4,16,8,15,4],nz:[1,0,0,0,-1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,5],ny:[4,16],nz:[1,-1]},{size:5,px:[21,19,21,21,21],py:[17,23,18,19,20],pz:[0,0,0,0,0],nx:[5,2,3,6,6],ny:[12,5,5,12,12],nz:[0,1,1,0,-1]},{size:2,px:[5,2],py:[11,1],pz:[1,-1],nx:[5,11],ny:[3,5],nz:[2,1]},{size:2,px:[10,5],py:[5,3],pz:[0,1],nx:[6,15],ny:[11,5],nz:[1,-1]},{size:2,px:[6,2],py:[4,2],pz:[1,-1],nx:[4,3],ny:[4,2],nz:[1,2]},{size:2,px:[10,6],py:[20,6],pz:[0,-1],nx:[5,10],ny:[11,17],nz:[1,0]},{size:4,px:[8,4,7,11],py:[7,4,5,8],pz:[1,2,1,0],nx:[13,10,5,21],ny:[9,3,5,4],nz:[0,-1,-1,-1]},{size:2,px:[7,13],py:[10,7],pz:[0,0],nx:[10,8],ny:[9,18],nz:[0,-1]},{size:2,px:[3,3],py:[1,0],pz:[2,2],nx:[8,5],ny:[4,2],nz:[1,-1]},{size:5,px:[5,2,5,8,4],py:[8,4,14,23,7],pz:[1,2,0,0,1],nx:[18,4,16,17,17],ny:[1,0,0,1,1],nz:[0,2,0,0,-1]},{size:2,px:[6,2],py:[2,4],pz:[1,-1],nx:[8,8],ny:[4,3],nz:[1,1]},{size:2,px:[6,1],py:[8,15],pz:[0,-1],nx:[8,3],ny:[4,4],nz:[1,1]},{size:2,px:[10,1],py:[7,2],pz:[1,-1],nx:[6,6],ny:[9,4],nz:[1,1]},{size:2,px:[4,1],py:[6,2],pz:[1,-1],nx:[1,10],ny:[16,12],nz:[0,0]},{size:2,px:[8,4],py:[7,2],pz:[1,-1],nx:[8,9],ny:[8,10],nz:[1,1]},{size:5,px:[4,8,7,6,6],py:[0,0,0,1,1],pz:[1,0,0,0,-1],nx:[11,5,8,4,10],ny:[5,3,4,4,5],nz:[0,1,1,1,0]},{size:2,px:[5,6],py:[8,5],pz:[0,0],nx:[6,6],ny:[8,3],nz:[0,-1]},{size:2,px:[18,5],py:[19,5],pz:[0,-1],nx:[4,21],ny:[5,19],nz:[2,0]},{size:2,px:[9,5],py:[13,6],pz:[0,1],nx:[2,2],ny:[4,2],nz:[1,-1]},{size:2,px:[10,4],py:[17,6],pz:[0,1],nx:[10,2],ny:[15,4],nz:[0,-1]},{size:3,px:[13,13,19],py:[11,12,8],pz:[0,0,-1],nx:[12,3,8],ny:[4,1,4],nz:[0,2,1]},{size:3,px:[11,7,4],py:[5,2,1],pz:[0,-1,-1],nx:[9,2,4],ny:[11,3,6],nz:[0,2,1]},{size:2,px:[10,7],py:[15,2],pz:[0,-1],nx:[4,4],ny:[0,1],nz:[2,2]},{size:5,px:[8,9,16,18,18],py:[0,1,1,1,1],pz:[1,1,0,0,-1],nx:[5,5,6,4,4],ny:[21,20,23,17,18],nz:[0,0,0,0,0]},{size:2,px:[6,7],py:[1,1],pz:[1,1],nx:[20,19],ny:[2,1],nz:[0,0]},{size:2,px:[2,2],py:[10,11],pz:[1,1],nx:[3,3],ny:[10,10],nz:[1,-1]},{size:2,px:[9,5],py:[23,1],pz:[0,-1],nx:[4,3],ny:[10,4],nz:[1,1]},{size:2,px:[1,10],py:[4,7],pz:[2,-1],nx:[4,3],ny:[23,21],nz:[0,0]},{size:2,px:[10,21],py:[11,18],pz:[1,0],nx:[10,4],ny:[18,1],nz:[0,-1]},{size:2,px:[11,23],py:[11,15],pz:[0,-1],nx:[11,11],ny:[7,9],nz:[1,1]},{size:2,px:[10,1],py:[7,7],pz:[1,-1],nx:[15,4],ny:[14,4],nz:[0,2]},{size:2,px:[1,2],py:[9,20],pz:[1,0],nx:[21,3],ny:[12,20],nz:[0,-1]},{size:2,px:[7,4],py:[0,0],pz:[1,2],nx:[4,2],ny:[0,19],nz:[0,-1]},{size:2,px:[2,4],py:[3,6],pz:[2,1],nx:[3,0],ny:[4,0],nz:[1,-1]},{size:2,px:[5,1],py:[5,0],pz:[1,-1],nx:[12,10],ny:[11,4],nz:[0,1]},{size:2,px:[11,12],py:[11,14],pz:[1,-1],nx:[18,16],ny:[21,15],nz:[0,0]},{size:2,px:[3,18],py:[1,5],pz:[2,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[9,10],py:[18,7],pz:[0,-1],nx:[3,6],ny:[0,0],nz:[2,1]},{size:2,px:[19,2],py:[1,4],pz:[0,-1],nx:[22,22],ny:[13,15],nz:[0,0]},{size:3,px:[13,15,20],py:[14,21,10],pz:[0,-1,-1],nx:[15,7,7],ny:[13,6,8],nz:[0,1,1]},{size:2,px:[9,9],py:[6,7],pz:[1,1],nx:[8,7],ny:[4,8],nz:[1,-1]
},{size:2,px:[0,0],py:[5,3],pz:[1,2],nx:[5,10],ny:[2,9],nz:[1,-1]},{size:2,px:[14,11],py:[7,16],pz:[0,-1],nx:[1,0],ny:[17,4],nz:[0,2]},{size:2,px:[14,18],py:[17,18],pz:[0,-1],nx:[8,14],ny:[10,16],nz:[1,0]},{size:2,px:[6,11],py:[13,11],pz:[0,-1],nx:[8,9],ny:[12,9],nz:[0,0]},{size:2,px:[8,9],py:[2,2],pz:[0,0],nx:[3,3],ny:[2,2],nz:[2,-1]},{size:3,px:[21,21,21],py:[14,16,15],pz:[0,0,0],nx:[14,12,0],ny:[5,12,6],nz:[0,-1,-1]},{size:2,px:[4,21],py:[6,15],pz:[1,-1],nx:[5,1],ny:[6,5],nz:[1,1]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[8,0],ny:[4,20],nz:[1,-1]},{size:2,px:[13,2],py:[9,1],pz:[0,-1],nx:[3,5],ny:[1,2],nz:[2,1]},{size:2,px:[16,1],py:[5,4],pz:[0,-1],nx:[17,8],ny:[3,2],nz:[0,1]},{size:2,px:[9,2],py:[7,1],pz:[1,-1],nx:[20,20],ny:[17,16],nz:[0,0]},{size:2,px:[5,7],py:[3,6],pz:[2,-1],nx:[9,9],ny:[6,5],nz:[1,1]},{size:2,px:[11,17],py:[4,1],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[15,2],py:[11,0],pz:[0,-1],nx:[5,14],ny:[1,12],nz:[2,0]},{size:2,px:[22,19],py:[3,0],pz:[0,-1],nx:[9,4],ny:[6,4],nz:[1,1]},{size:2,px:[1,22],py:[3,21],pz:[0,-1],nx:[0,0],ny:[1,0],nz:[2,2]},{size:2,px:[11,11],py:[11,12],pz:[0,0],nx:[1,2],ny:[1,4],nz:[2,-1]},{size:2,px:[18,3],py:[8,1],pz:[0,2],nx:[13,1],ny:[8,5],nz:[0,-1]},{size:2,px:[13,6],py:[21,3],pz:[0,-1],nx:[11,11],ny:[6,5],nz:[1,1]},{size:2,px:[15,14],py:[4,4],pz:[0,0],nx:[17,1],ny:[12,5],nz:[0,-1]},{size:2,px:[11,3],py:[12,1],pz:[0,-1],nx:[1,2],ny:[2,4],nz:[2,1]},{size:2,px:[3,2],py:[7,3],pz:[0,1],nx:[16,2],ny:[3,5],nz:[0,-1]},{size:2,px:[10,5],py:[7,20],pz:[1,-1],nx:[9,8],ny:[4,6],nz:[1,1]},{size:2,px:[19,2],py:[10,2],pz:[0,-1],nx:[9,4],ny:[3,1],nz:[1,2]},{size:2,px:[14,9],py:[0,23],pz:[0,-1],nx:[4,4],ny:[3,2],nz:[2,2]},{size:2,px:[6,9],py:[4,10],pz:[1,0],nx:[10,9],ny:[9,0],nz:[0,-1]},{size:4,px:[6,9,10,8],py:[20,23,18,23],pz:[0,0,0,0],nx:[9,22,1,2],ny:[21,14,2,5],nz:[0,-1,-1,-1]},{size:2,px:[17,18],py:[13,6],pz:[0,-1],nx:[6,7],ny:[9,11],nz:[1,1]},{size:5,px:[18,19,20,19,20],py:[15,19,16,20,17],pz:[0,0,0,0,0],nx:[11,22,23,23,23],ny:[10,22,20,19,19],nz:[1,0,0,0,-1]},{size:2,px:[10,10],py:[1,0],pz:[1,1],nx:[21,11],ny:[0,4],nz:[0,-1]},{size:2,px:[11,0],py:[9,3],pz:[0,-1],nx:[9,4],ny:[2,1],nz:[1,2]},{size:2,px:[14,23],py:[2,18],pz:[0,-1],nx:[15,18],ny:[1,2],nz:[0,0]},{size:2,px:[9,3],py:[0,0],pz:[1,-1],nx:[3,12],ny:[1,5],nz:[2,0]},{size:2,px:[8,8],py:[7,8],pz:[1,1],nx:[8,8],ny:[4,4],nz:[1,-1]},{size:2,px:[1,0],py:[1,3],pz:[2,-1],nx:[7,19],ny:[9,15],nz:[1,0]},{size:3,px:[16,6,4],py:[21,5,4],pz:[0,-1,-1],nx:[4,19,8],ny:[5,21,11],nz:[2,0,1]},{size:2,px:[5,5],py:[6,6],pz:[1,-1],nx:[10,10],ny:[10,12],nz:[0,0]},{size:2,px:[6,11],py:[2,5],pz:[1,0],nx:[3,4],ny:[4,7],nz:[1,-1]},{size:3,px:[8,6,2],py:[4,10,2],pz:[1,1,2],nx:[2,18,5],ny:[0,11,5],nz:[0,-1,-1]},{size:2,px:[11,7],py:[9,7],pz:[0,-1],nx:[12,3],ny:[9,5],nz:[0,1]},{size:2,px:[14,13],py:[20,20],pz:[0,0],nx:[13,3],ny:[21,5],nz:[0,-1]},{size:2,px:[13,7],py:[5,3],pz:[0,-1],nx:[3,4],ny:[1,4],nz:[2,1]},{size:2,px:[6,2],py:[21,5],pz:[0,-1],nx:[2,3],ny:[5,10],nz:[2,1]},{size:2,px:[23,5],py:[6,0],pz:[0,2],nx:[21,4],ny:[6,1],nz:[0,-1]},{size:2,px:[9,9],py:[7,6],pz:[1,1],nx:[8,2],ny:[4,2],nz:[1,-1]},{size:2,px:[22,11],py:[20,9],pz:[0,1],nx:[8,8],ny:[10,10],nz:[1,-1]},{size:2,px:[8,16],py:[21,12],pz:[0,-1],nx:[2,7],ny:[5,23],nz:[2,0]},{size:5,px:[0,1,1,1,1],py:[3,1,9,4,7],pz:[2,2,1,1,1],nx:[11,22,22,23,23],ny:[10,21,22,19,20],nz:[1,0,0,0,-1]},{size:2,px:[17,5],py:[12,4],pz:[0,-1],nx:[8,8],ny:[4,5],nz:[1,1]},{size:2,px:[16,4],py:[7,10],pz:[0,-1],nx:[9,15],ny:[4,6],nz:[1,0]},{size:2,px:[3,6],py:[3,5],pz:[2,1],nx:[11,12],ny:[11,23],nz:[0,-1]},{size:2,px:[5,2],py:[14,7],pz:[0,1],nx:[4,17],ny:[18,16],nz:[0,-1]},{size:3,px:[10,1,1],py:[12,5,4],pz:[0,-1,-1],nx:[7,11,5],ny:[1,2,1],nz:[1,0,1]},{size:2,px:[7,6],py:[3,9],pz:[0,-1],nx:[2,2],ny:[2,3],nz:[2,2]},{size:2,px:[13,6],py:[22,9],pz:[0,-1],nx:[8,4],ny:[4,3],nz:[1,2]},{size:5,px:[12,9,10,11,11],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[16,5,10,4,8],ny:[10,3,6,4,4],nz:[0,1,0,1,1]},{size:2,px:[18,19],py:[23,20],pz:[0,0],nx:[8,5],ny:[11,3],nz:[1,-1]},{size:2,px:[8,3],py:[7,2],pz:[1,2],nx:[8,4],ny:[4,3],nz:[1,-1]},{size:5,px:[8,14,8,7,4],py:[6,12,8,6,3],pz:[1,0,1,1,2],nx:[2,6,6,7,7],ny:[0,1,2,0,0],nz:[2,0,0,0,-1]},{size:3,px:[1,2,3],py:[15,18,21],pz:[0,0,0],nx:[19,5,18],ny:[23,5,8],nz:[0,-1,-1]},{size:2,px:[6,2],py:[6,1],pz:[1,-1],nx:[0,0],ny:[12,4],nz:[0,1]},{size:2,px:[3,5],py:[5,11],pz:[2,1],nx:[14,5],ny:[19,5],nz:[0,-1]},{size:2,px:[10,4],py:[4,4],pz:[1,-1],nx:[11,5],ny:[4,2],nz:[1,2]},{size:2,px:[18,4],py:[6,4],pz:[0,-1],nx:[4,8],ny:[5,4],nz:[1,1]},{size:2,px:[6,12],py:[2,4],pz:[1,0],nx:[8,8],ny:[3,4],nz:[1,-1]},{size:2,px:[1,0],py:[1,1],pz:[1,2],nx:[7,2],ny:[4,7],nz:[0,-1]},{size:2,px:[8,0],py:[20,0],pz:[0,-1],nx:[4,5],ny:[10,11],nz:[1,1]},{size:2,px:[6,14],py:[5,2],pz:[1,-1],nx:[0,0],ny:[0,2],nz:[1,0]},{size:2,px:[5,15],py:[4,7],pz:[1,-1],nx:[4,7],ny:[1,2],nz:[2,1]},{size:2,px:[7,5],py:[2,1],pz:[0,1],nx:[3,1],ny:[4,1],nz:[1,-1]},{size:2,px:[8,9],py:[4,2],pz:[0,-1],nx:[11,9],ny:[1,3],nz:[0,0]},{size:2,px:[6,3],py:[2,4],pz:[1,-1],nx:[4,8],ny:[4,4],nz:[1,1]},{size:2,px:[3,7],py:[3,7],pz:[2,1],nx:[6,8],ny:[14,4],nz:[0,-1]},{size:2,px:[3,0],py:[21,3],pz:[0,2],nx:[20,8],ny:[10,4],nz:[0,-1]},{size:2,px:[6,3],py:[5,8],pz:[0,-1],nx:[4,3],ny:[4,2],nz:[0,1]},{size:2,px:[3,6],py:[7,13],pz:[1,0],nx:[3,2],ny:[4,3],nz:[1,-1]},{size:2,px:[16,10],py:[9,7],pz:[0,1],nx:[7,9],ny:[3,10],nz:[1,-1]},{size:2,px:[13,10],py:[6,7],pz:[0,-1],nx:[8,17],ny:[4,12],nz:[1,0]},{size:2,px:[5,10],py:[4,10],pz:[2,1],nx:[5,4],ny:[9,2],nz:[1,-1]},{size:4,px:[15,3,5,0],py:[12,4,2,3],pz:[0,-1,-1,-1],nx:[13,7,5,7],ny:[12,6,0,7],nz:[0,1,2,1]},{size:4,px:[2,3,16,17],py:[3,4,6,6],pz:[2,1,0,0],nx:[16,16,8,16],ny:[8,3,10,13],nz:[0,-1,-1,-1]},{size:2,px:[16,8],py:[1,4],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[9,14],py:[6,2],pz:[1,-1],nx:[8,8],ny:[6,4],nz:[1,1]},{size:2,px:[8,4],py:[10,4],pz:[1,2],nx:[10,0],ny:[5,7],nz:[1,-1]},{size:2,px:[9,10],py:[4,4],pz:[0,0],nx:[9,7],ny:[3,5],nz:[0,-1]},{size:5,px:[11,10,13,6,12],py:[2,2,2,1,2],pz:[0,0,0,1,0],nx:[4,18,18,13,13],ny:[2,18,19,7,7],nz:[2,0,0,0,-1]},{size:4,px:[13,13,13,2],py:[13,12,11,3],pz:[0,0,0,-1],nx:[4,6,8,11],ny:[2,2,4,4],nz:[2,1,1,0]},{size:2,px:[4,7],py:[6,13],pz:[1,0],nx:[8,10],ny:[4,22],nz:[1,-1]},{size:2,px:[0,7],py:[4,17],pz:[1,-1],nx:[0,1],ny:[5,21],nz:[2,0]},{size:2,px:[12,13],py:[22,22],pz:[0,0],nx:[2,2],ny:[13,13],nz:[0,-1]},{size:3,px:[4,4,3],py:[22,23,19],pz:[0,0,0],nx:[8,12,3],ny:[22,15,2],nz:[0,-1,-1]},{size:2,px:[10,12],py:[3,13],pz:[0,-1],nx:[15,2],ny:[10,2],nz:[0,2]},{size:2,px:[1,1],py:[3,3],pz:[2,-1],nx:[8,4],ny:[0,0],nz:[1,2]},{size:2,px:[6,12],py:[6,18],pz:[1,0],nx:[12,19],ny:[17,16],nz:[0,-1]},{size:2,px:[10,5],py:[2,1],pz:[0,1],nx:[5,4],ny:[4,17],nz:[0,-1]},{size:3,px:[3,12,11],py:[5,23,23],pz:[2,0,0],nx:[12,4,4],ny:[21,17,1],nz:[0,-1,-1]},{size:2,px:[12,0],py:[21,5],pz:[0,-1],nx:[0,0],ny:[7,9],nz:[1,1]},{size:2,px:[17,17],py:[12,11],pz:[0,0],nx:[8,11],ny:[4,11],nz:[1,-1]},{size:2,px:[11,0],py:[22,1],pz:[0,-1],nx:[4,6],ny:[1,0],nz:[1,1]},{size:2,px:[11,11],py:[9,5],pz:[1,1],nx:[23,11],ny:[23,20],nz:[0,-1]},{size:5,px:[4,12,11,9,8],py:[0,1,1,0,1],pz:[1,0,0,0,0],nx:[4,17,8,7,7],ny:[2,13,4,4,4],nz:[2,0,1,1,-1]},{size:2,px:[11,13],py:[12,12],pz:[0,-1],nx:[1,1],ny:[4,2],nz:[1,2]},{size:2,px:[23,4],py:[23,2],pz:[0,-1],nx:[5,2],ny:[23,6],nz:[0,1]},{size:3,px:[8,16,0],py:[5,15,6],pz:[1,-1,-1],nx:[23,23,11],ny:[18,17,8],nz:[0,0,1]},{size:2,px:[1,16],py:[4,15],pz:[2,-1],nx:[2,2],ny:[3,2],nz:[2,2]},{size:2,px:[3,8],py:[7,9],pz:[1,-1],nx:[4,2],ny:[10,5],nz:[1,2]},{size:3,px:[22,1,9],py:[23,2,3],pz:[0,-1,-1],nx:[2,2,5],ny:[5,4,19],nz:[2,2,0]},{size:2,px:[2,20],py:[5,15],pz:[1,-1],nx:[2,1],ny:[1,2],nz:[2,2]},{size:2,px:[4,8],py:[1,19],pz:[1,-1],nx:[2,2],ny:[5,4],nz:[2,2]},{size:2,px:[9,10],py:[21,0],pz:[0,-1],nx:[6,5],ny:[1,1],nz:[1,1]},{size:2,px:[4,8],py:[3,6],pz:[2,1],nx:[9,2],ny:[4,1],nz:[1,-1]},{size:3,px:[17,3,10],py:[8,0,2],pz:[0,2,0],nx:[13,2,6],ny:[15,5,1],nz:[0,-1,-1]},{size:2,px:[9,6],py:[20,21],pz:[0,-1],nx:[4,2],ny:[10,5],nz:[1,2]},{size:2,px:[3,7],py:[0,1],pz:[2,1],nx:[7,20],ny:[1,19],nz:[0,-1]},{size:2,px:[4,5],py:[0,1],pz:[1,0],nx:[3,2],ny:[4,2],nz:[0,-1]},{size:2,px:[2,7],py:[4,19],pz:[2,0],nx:[5,2],ny:[10,2],nz:[1,-1]},{size:5,px:[3,3,4,7,7],py:[1,0,0,0,1],pz:[1,1,1,0,0],nx:[5,4,10,8,8],ny:[3,3,5,4,4],nz:[1,1,0,1,-1]},{size:2,px:[1,5],py:[0,3],pz:[1,-1],nx:[1,0],ny:[0,1],nz:[0,1]},{size:2,px:[10,0],py:[5,5],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[0,9],py:[0,4],pz:[2,-1],nx:[13,10],ny:[0,0],nz:[0,0]},{size:2,px:[13,4],py:[14,5],pz:[0,-1],nx:[4,2],ny:[0,0],nz:[0,1]},{size:2,px:[17,4],py:[13,3],pz:[0,-1],nx:[4,2],ny:[4,2],nz:[1,2]},{size:2,px:[1,0],py:[6,2],pz:[1,-1],nx:[1,6],ny:[2,12],nz:[2,0]},{size:2,px:[12,4],py:[6,0],pz:[0,-1],nx:[3,3],ny:[8,9],nz:[1,1]},{size:2,px:[1,5],py:[1,5],pz:[1,-1],nx:[17,17],ny:[13,7],nz:[0,0]},{size:2,px:[7,3],py:[12,6],pz:[0,1],nx:[3,4],ny:[4,11],nz:[1,-1]},{size:2,px:[6,17],py:[2,8],pz:[1,0],nx:[3,3],ny:[1,2],nz:[1,-1]},{size:3,px:[13,6,6],py:[22,11,10],pz:[0,1,1],nx:[13,12,11],ny:[20,20,20],nz:[0,0,0]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,12],ny:[4,20],nz:[1,-1]},{size:2,px:[5,2],py:[1,1],pz:[1,-1],nx:[13,6],ny:[0,0],nz:[0,1]},{size:2,px:[2,8],py:[3,9],pz:[2,0],nx:[8,16],ny:[5,17],nz:[0,-1]},{size:2,px:[16,15],py:[1,1],pz:[0,0],nx:[7,11],ny:[8,0],nz:[1,-1]},{size:2,px:[11,18],py:[21,23],pz:[0,-1],nx:[1,1],ny:[4,3],nz:[1,2]},{size:2,px:[1,5],py:[0,2],pz:[1,-1],nx:[15,11],ny:[8,7],nz:[0,0]},{size:2,px:[5,4],py:[7,8],pz:[1,-1],nx:[9,10],ny:[13,11],nz:[0,0]},{size:2,px:[7,4],py:[10,4],pz:[1,2],nx:[22,4],ny:[0,2],nz:[0,-1]},{size:2,px:[11,3],py:[3,1],pz:[0,2],nx:[8,0],ny:[4,0],nz:[1,-1]},{size:2,px:[5,21],py:[11,22],pz:[0,-1],nx:[10,11],ny:[11,9],nz:[0,0]},{size:2,px:[5,5],py:[0,1],pz:[2,2],nx:[2,21],ny:[6,14],nz:[0,-1]},{size:3,px:[10,10,1],py:[11,0,5],pz:[0,-1,-1],nx:[6,12,5],ny:[2,5,2],nz:[1,0,1]},{size:2,px:[9,10],py:[5,6],pz:[0,0],nx:[12,19],ny:[23,5],nz:[0,-1]},{size:2,px:[11,5],py:[9,6],pz:[0,1],nx:[21,0],ny:[23,0],nz:[0,-1]},{size:2,px:[13,12],py:[19,15],pz:[0,0],nx:[13,0],ny:[17,0],nz:[0,-1]},{size:2,px:[14,0],py:[17,3],pz:[0,-1],nx:[7,16],ny:[8,19],nz:[1,0]},{size:2,px:[3,6],py:[2,4],pz:[2,1],nx:[8,1],ny:[4,4],nz:[1,-1]},{size:2,px:[13,10],py:[23,20],pz:[0,-1],nx:[4,7],ny:[5,10],nz:[2,1]},{size:2,px:[16,9],py:[22,5],pz:[0,-1],nx:[4,2],ny:[10,3],nz:[1,2]},{size:4,px:[3,1,1,5],py:[4,2,1,2],pz:[0,2,2,1],nx:[13,5,8,0],ny:[22,2,9,2],nz:[0,-1,-1,-1]},{size:2,px:[9,9],py:[0,0],pz:[1,-1],nx:[19,20],ny:[1,2],nz:[0,0]},{size:2,px:[7,22],py:[6,8],pz:[1,0],nx:[4,4],ny:[2,4],nz:[2,-1]},{size:2,px:[3,6],py:[4,4],pz:[2,1],nx:[10,20],ny:[10,6],nz:[0,-1]},{size:2,px:[6,12],py:[6,15],pz:[1,-1],nx:[0,0],ny:[2,5],nz:[2,1]},{size:2,px:[2,7],py:[4,10],pz:[2,-1],nx:[3,6],ny:[4,8],nz:[2,1]},{size:3,px:[11,11,4],py:[0,5,7],pz:[1,-1,-1],nx:[6,12,12],ny:[1,1,2],nz:[1,0,0]},{size:2,px:[11,17],py:[4,18],pz:[0,-1],nx:[8,2],ny:[10,2],nz:[0,2]},{size:2,px:[17,17],py:[10,18],pz:[0,-1],nx:[8,8],ny:[2,3],nz:[1,1]},{size:2,px:[9,9],py:[7,7],pz:[1,-1],nx:[7,4],ny:[6,3],nz:[1,2]},{size:2,px:[18,21],py:[0,0],pz:[0,-1],nx:[11,6],ny:[5,3],nz:[0,1]},{size:2,px:[5,2],py:[8,4],pz:[0,2],nx:[5,8],ny:[9,16],nz:[0,-1]},{size:2,px:[12,2],py:[5,4],pz:[0,-1],nx:[4,15],ny:[4,8],nz:[1,0]},{size:2,px:[1,1],py:[4,6],pz:[1,1],nx:[11,3],ny:[7,9],nz:[0,-1]},{size:2,px:[2,1],py:[3,3],pz:[2,2],nx:[2,2],ny:[15,16],nz:[0,0]},{size:2,px:[17,18],py:[5,5],pz:[0,0],nx:[9,21],ny:[2,10],nz:[1,-1]},{size:2,px:[6,3],py:[14,7],pz:[0,1],nx:[3,4],ny:[4,5],nz:[1,-1]},{size:2,px:[0,3],py:[3,1],pz:[1,-1],nx:[19,10],ny:[12,4],nz:[0,1]},{size:2,px:[6,16],py:[3,8],pz:[1,0],nx:[8,10],ny:[20,4],nz:[0,-1]},{size:3,px:[5,5,2],py:[21,8,4],pz:[0,1,2],nx:[10,6,3],ny:[15,2,1],nz:[0,-1,-1]},{size:2,px:[11,10],py:[10,12],pz:[0,0],nx:[11,11],ny:[2,1],nz:[1,-1]},{size:2,px:[10,10],py:[3,2],pz:[1,1],nx:[8,11],ny:[3,5],nz:[1,-1]},{size:2,px:[13,3],py:[5,8],pz:[0,-1],nx:[12,3],ny:[3,1],nz:[0,2]},{size:2,px:[13,7],py:[2,1],pz:[0,1],nx:[5,5],ny:[1,1],nz:[0,-1]},{size:2,px:[11,10],py:[10,8],pz:[0,-1],nx:[14,16],ny:[10,15],nz:[0,0]},{size:2,px:[2,10],py:[7,8],pz:[1,-1],nx:[2,6],ny:[5,6],nz:[2,1]},{size:2,px:[10,10],py:[1,8],pz:[0,-1],nx:[2,2],ny:[3,2],nz:[2,2]},{size:2,px:[4,0],py:[5,2],pz:[1,-1],nx:[1,2],ny:[2,3],nz:[2,1]},{size:2,px:[1,12],py:[1,9],pz:[2,-1],nx:[16,17],ny:[3,3],nz:[0,0]},{size:2,px:[12,6],py:[5,8],pz:[0,-1],nx:[3,4],ny:[7,4],nz:[1,1]},{size:2,px:[14,3],py:[11,5],pz:[0,-1],nx:[11,4],ny:[0,0],nz:[0,1]},{size:2,px:[6,10],py:[6,6],pz:[1,-1],nx:[0,0],ny:[1,0],nz:[2,2]},{size:2,px:[3,7],py:[0,7],pz:[1,-1],nx:[15,13],ny:[8,4],nz:[0,0]},{size:2,px:[18,1],py:[15,0],pz:[0,-1],nx:[18,18],ny:[18,17],nz:[0,0]},{size:2,px:[5,2],py:[4,4],pz:[0,-1],nx:[4,18],ny:[4,15],nz:[1,0]},{size:3,px:[3,14,13],py:[2,7,8],pz:[2,0,0],nx:[10,0,2],ny:[8,3,2],nz:[0,-1,-1]},{size:2,px:[16,0],py:[14,3],pz:[0,-1],nx:[18,3],ny:[12,5],nz:[0,2]},{size:2,px:[5,3],py:[8,3],pz:[1,2],nx:[13,4],ny:[10,4],nz:[0,-1]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,1],ny:[4,20],nz:[1,-1]},{size:2,px:[10,10],py:[8,3],pz:[1,-1],nx:[12,7],ny:[2,1],nz:[0,1]},{size:2,px:[17,3],py:[9,2],pz:[0,2],nx:[7,6],ny:[4,0],nz:[1,-1]},{size:2,px:[12,1],py:[2,1],pz:[0,-1],nx:[4,4],ny:[2,3],nz:[2,2]},{size:2,px:[22,5],py:[15,3],pz:[0,2],nx:[16,17],ny:[14,2],nz:[0,-1]},{size:2,px:[8,11],py:[19,13],pz:[0,-1],nx:[0,0],ny:[2,4],nz:[2,1]},{size:2,px:[8,11],py:[8,1],pz:[1,-1],nx:[3,3],ny:[2,5],nz:[1,2]},{size:3,px:[3,8,0],py:[7,7,5],pz:[1,-1,-1],nx:[11,5,1],ny:[11,7,5],nz:[0,1,1]},{size:2,px:[12,6],py:[12,6],pz:[0,1],nx:[9,0],ny:[4,2],nz:[1,-1]},{size:2,px:[16,12],py:[7,1],pz:[0,-1],nx:[16,7],ny:[6,4],nz:[0,1]},{size:2,px:[13,5],py:[14,0],pz:[0,-1],nx:[13,10],ny:[0,0],nz:[0,0]},{size:5,px:[11,12,13,12,7],py:[0,1,0,0,0],pz:[0,0,0,0,1],nx:[13,16,14,4,4],ny:[18,23,18,5,5],nz:[0,0,0,2,-1]},{size:2,px:[14,5],py:[12,4],pz:[0,-1],nx:[7,7],ny:[8,2],nz:[1,1]},{size:2,px:[19,3],py:[2,5],pz:[0,-1],nx:[11,23],ny:[7,13],nz:[1,0]},{size:2,px:[0,0],py:[19,20],pz:[0,0],nx:[9,4],ny:[5,2],nz:[0,-1]},{size:2,px:[15,4],py:[12,3],pz:[0,2],nx:[9,5],ny:[4,5],nz:[1,-1]},{size:4,px:[8,0,1,21],py:[6,0,7,16],pz:[1,-1,-1,-1],nx:[11,6,11,5],ny:[8,6,4,3],nz:[1,1,1,2]},{size:2,px:[11,11],py:[7,5],pz:[0,-1],nx:[9,10],ny:[6,7],nz:[0,0]},{size:2,px:[2,4],py:[1,2],pz:[2,1],nx:[16,6],ny:[0,1],nz:[0,-1]},{size:2,px:[0,0],py:[5,3],pz:[1,2],nx:[1,21],ny:[23,8],nz:[0,-1]},{size:2,px:[10,0],py:[7,0],pz:[0,-1],nx:[4,13],ny:[4,10],nz:[1,0]},{size:2,px:[11,4],py:[0,4],pz:[1,-1],nx:[4,2],ny:[16,8],nz:[0,1]},{size:2,px:[5,3],py:[12,6],pz:[0,1],nx:[3,3],ny:[4,2],nz:[1,-1]},{size:2,px:[10,0],py:[19,11],pz:[0,-1],nx:[9,5],ny:[21,9],nz:[0,1]},{size:2,px:[0,0],py:[17,9],pz:[0,1],nx:[0,5],ny:[0,9],nz:[2,-1]},{size:2,px:[4,5],py:[2,4],pz:[0,-1],nx:[4,4],ny:[5,6],nz:[1,1]},{size:2,px:[8,4],py:[1,0],pz:[1,2],nx:[4,3],ny:[3,6],nz:[0,-1]},{size:2,px:[11,0],py:[7,2],pz:[1,-1],nx:[5,5],ny:[1,0],nz:[2,2]},{size:2,px:[13,0],py:[17,2],pz:[0,-1],nx:[3,6],ny:[5,8],nz:[2,1]},{size:2,px:[2,1],py:[0,5],pz:[2,-1],nx:[4,9],ny:[2,7],nz:[2,1]},{size:2,px:[12,5],py:[13,8],pz:[0,-1],nx:[23,11],ny:[13,7],nz:[0,1]},{size:2,px:[0,0],py:[0,2],pz:[1,0],nx:[3,6],ny:[11,18],nz:[0,-1]},{size:2,px:[4,3],py:[6,5],pz:[0,-1],nx:[1,1],ny:[1,3],nz:[2,1]},{size:4,px:[3,6,3,6],py:[3,6,2,5],pz:[2,1,2,1],nx:[0,4,1,1],ny:[0,22,17,0],nz:[0,-1,-1,-1]},{size:2,px:[8,4],py:[6,3],pz:[1,2],nx:[9,15],ny:[4,8],nz:[1,-1]},{size:2,px:[8,18],py:[7,8],pz:[1,0],nx:[8,5],ny:[4,0],nz:[1,-1]},{size:2,px:[0,0],py:[4,5],pz:[1,-1],nx:[5,6],ny:[0,0],nz:[1,1]},{size:2,px:[13,18],py:[23,19],pz:[0,0],nx:[7,13],ny:[10,20],nz:[1,-1]},{size:2,px:[10,6],py:[2,0],pz:[0,1],nx:[4,1],ny:[5,1],nz:[1,-1]},{size:2,px:[1,1],py:[5,4],pz:[2,2],nx:[0,20],ny:[4,4],nz:[2,-1]},{size:2,px:[5,5],py:[1,0],pz:[2,2],nx:[12,6],ny:[18,11],nz:[0,-1]},{size:5,px:[2,1,3,1,5],py:[3,3,7,4,9],pz:[2,2,1,2,1],nx:[9,3,8,16,10],ny:[5,3,10,6,7],nz:[1,-1,-1,-1,-1]},{size:2,px:[4,1],py:[12,3],pz:[0,-1],nx:[10,1],ny:[11,2],nz:[0,2]},{size:2,px:[19,0],py:[10,7],pz:[0,-1],nx:[14,7],ny:[6,3],nz:[0,1]},{size:2,px:[7,4],py:[2,1],pz:[1,2],nx:[6,0],ny:[2,18],nz:[0,-1]},{size:2,px:[14,8],py:[3,0],pz:[0,1],nx:[17,1],ny:[1,4],nz:[0,-1]},{size:2,px:[18,19],py:[1,17],pz:[0,-1],nx:[5,11],ny:[2,5],nz:[2,1]},{size:5,px:[12,12,12,6,12],py:[10,11,12,6,9],pz:[0,0,0,1,0],nx:[13,3,12,6,6],ny:[4,1,4,2,2],nz:[0,2,0,1,-1]},{size:2,px:[11,10],py:[3,3],pz:[0,0],nx:[4,9],ny:[4,17],nz:[1,-1]},{size:2,px:[11,0],py:[13,5],pz:[0,2],nx:[8,18],ny:[15,15],nz:[0,-1]},{size:2,px:[3,4],py:[6,5],pz:[1,1],nx:[0,0],ny:[9,4],nz:[1,-1]},{size:2,px:[0,0],py:[1,0],pz:[2,2],nx:[2,15],ny:[2,1],nz:[2,-1]},{size:3,px:[2,4,2],py:[4,9,5],pz:[2,1,2],nx:[2,5,14],ny:[0,1,4],nz:[0,-1,-1]},{size:2,px:[11,12],py:[20,20],pz:[0,0],nx:[6,10],ny:[9,19],nz:[1,-1]},{size:2,px:[7,0],py:[16,8],pz:[0,-1],nx:[2,3],ny:[2,4],nz:[2,1]},{size:5,px:[16,17,15,16,15],py:[1,1,1,0,0],pz:[0,0,0,0,0],nx:[8,8,4,12,12],ny:[8,7,2,23,23],nz:[1,1,2,0,-1]},{size:2,px:[2,4],py:[6,12],pz:[1,-1],nx:[8,13],ny:[1,1],nz:[1,0]},{size:2,px:[9,2],py:[3,2],pz:[0,-1],nx:[3,4],ny:[6,5],nz:[1,1]},{size:2,px:[10,8],py:[6,1],pz:[1,-1],nx:[11,8],ny:[2,2],nz:[0,0]},{size:2,px:[9,3],py:[7,0],pz:[1,-1],nx:[19,19],ny:[18,16],nz:[0,0]},{size:2,px:[3,2],py:[1,1],pz:[2,2],nx:[22,11],ny:[4,0],nz:[0,-1]},{size:2,px:[10,10],py:[9,8],pz:[1,1],nx:[4,4],ny:[10,2],nz:[1,-1]},{size:2,px:[0,1],py:[0,5],pz:[0,-1],nx:[10,8],ny:[2,2],nz:[0,0]},{size:2,px:[3,3],py:[8,7],pz:[1,1],nx:[8,2],ny:[8,3],nz:[0,-1]},{size:2,px:[13,5],py:[21,3],pz:[0,-1],nx:[13,3],ny:[20,5],nz:[0,2]},{size:2,px:[12,5],py:[11,2],pz:[0,-1],nx:[1,0],ny:[19,9],nz:[0,1]},{size:2,px:[7,10],py:[9,10],pz:[1,1],nx:[8,4],ny:[10,2],nz:[1,-1]},{size:2,px:[0,0],py:[5,9],pz:[2,1],nx:[2,11],ny:[9,19],nz:[1,-1]},{size:2,px:[3,5],py:[1,2],pz:[2,1],nx:[8,23],ny:[4,9],nz:[1,-1]},{size:2,px:[3,4],py:[2,4],pz:[2,1],nx:[5,9],ny:[2,5],nz:[2,-1]},{size:2,px:[11,11],py:[2,3],pz:[1,1],nx:[19,9],ny:[6,5],nz:[0,-1]},{size:2,px:[9,4],py:[5,10],pz:[1,-1],nx:[10,22],ny:[0,16],nz:[1,0]},{size:3,px:[19,9,19],py:[3,1,2],pz:[0,1,0],nx:[6,3,6],ny:[10,3,0],nz:[1,-1,-1]},{size:2,px:[8,3],py:[10,3],pz:[1,2],nx:[23,14],ny:[3,18],nz:[0,-1]},{size:2,px:[11,11],py:[19,0],pz:[0,-1],nx:[4,16],ny:[4,11],nz:[1,0]},{size:2,px:[22,23],py:[3,22],pz:[0,-1],nx:[9,3],ny:[4,2],nz:[1,2]},{size:2,px:[7,2],py:[12,4],pz:[0,-1],nx:[8,4],ny:[10,5],nz:[0,1]},{size:2,px:[12,13],py:[5,13],pz:[0,-1],nx:[11,3],ny:[2,0],nz:[0,2]},{size:2,px:[3,17],py:[0,16],pz:[1,-1],nx:[12,12],ny:[5,6],nz:[0,0]},{size:2,px:[4,3],py:[1,0],pz:[2,2],nx:[4,3],ny:[0,3],nz:[0,-1]},{size:2,px:[10,3],py:[12,0],pz:[0,-1],nx:[12,12],ny:[13,12],nz:[0,0]},{size:2,px:[13,4],py:[11,14],pz:[0,-1],nx:[0,0],ny:[4,6],nz:[1,0]},{size:2,px:[8,7],py:[7,8],pz:[1,1],nx:[3,0],ny:[5,21],nz:[2,-1]},{size:2,px:[1,3],py:[4,14],pz:[2,0],nx:[8,8],ny:[7,7],nz:[1,-1]},{size:2,px:[13,11],py:[20,7],pz:[0,-1],nx:[21,21],ny:[20,18],nz:[0,0]},{size:2,px:[2,1],py:[11,0],pz:[0,-1],nx:[2,2],ny:[15,14],nz:[0,0]},{size:2,px:[10,1],py:[8,0],pz:[1,-1],nx:[8,4],ny:[7,4],nz:[1,2]},{size:2,px:[17,6],py:[13,1],pz:[0,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[7,15],py:[1,3],pz:[1,0],nx:[15,5],ny:[1,8],nz:[0,-1]},{size:2,px:[16,1],py:[20,10],pz:[0,-1],nx:[6,8],ny:[11,10],nz:[1,1]},{size:2,px:[7,14],py:[0,0],pz:[1,0],nx:[7,8],ny:[7,3],nz:[1,-1]},{size:2,px:[12,5],py:[17,4],pz:[0,-1],nx:[12,5],ny:[16,10],nz:[0,1]},{size:2,px:[13,3],py:[15,0],pz:[0,-1],nx:[12,7],ny:[17,8],nz:[0,1]},{size:2,px:[7,1],py:[14,1],pz:[0,-1],nx:[4,6],ny:[6,12],nz:[1,0]},{size:2,px:[8,7],py:[0,0],pz:[0,0],nx:[6,20],ny:[5,5],nz:[0,-1]},{size:2,px:[10,2],py:[22,5],pz:[0,-1],nx:[4,8],ny:[4,9],nz:[2,1]},{size:4,px:[8,2,2,9],py:[6,5,3,11],pz:[1,-1,-1,-1],nx:[2,7,4,3],ny:[2,1,0,2],nz:[2,0,1,2]},{size:2,px:[12,6],py:[12,6],pz:[0,1],nx:[8,2],ny:[4,1],nz:[1,-1]},{size:2,px:[13,11],py:[19,8],pz:[0,-1],nx:[13,13],ny:[20,17],nz:[0,0]},{size:2,px:[11,19],py:[5,14],pz:[0,-1],nx:[3,4],ny:[8,4],nz:[1,1]},{size:2,px:[10,0],py:[8,6],pz:[1,-1],nx:[21,21],ny:[16,15],nz:[0,0]},{size:2,px:[1,12],py:[7,6],pz:[1,-1],nx:[2,7],ny:[5,14],nz:[2,0]},{size:2,px:[2,9],py:[7,5],pz:[1,-1],nx:[2,5],ny:[5,9],nz:[2,1]},{size:2,px:[12,5],py:[15,6],pz:[0,-1],nx:[3,12],ny:[0,2],nz:[2,0]},{size:2,px:[23,22],py:[23,1],pz:[0,-1],nx:[0,0],ny:[2,3],nz:[2,2]},{size:2,px:[3,6],py:[1,2],pz:[2,1],nx:[8,0],ny:[4,3],nz:[1,-1]},{size:2,px:[5,1],py:[9,1],pz:[0,-1],nx:[4,2],ny:[4,2],nz:[1,2]},{size:2,px:[0,1],py:[0,0],pz:[2,0],nx:[2,3],ny:[9,10],nz:[0,-1]},{size:2,px:[6,0],py:[16,14],pz:[0,-1],nx:[6,3],ny:[23,14],nz:[0,0]},{size:2,px:[3,3],py:[2,3],pz:[2,1],nx:[13,3],ny:[19,14],nz:[0,-1]},{size:2,px:[11,5],py:[8,18],pz:[0,-1],nx:[4,7],ny:[1,2],nz:[2,1]},{size:2,px:[4,4],py:[5,6],pz:[1,1],nx:[2,2],ny:[5,3],nz:[2,-1]},{size:2,px:[7,3],py:[13,7],pz:[0,1],nx:[4,3],ny:[4,1],nz:[1,-1]},{size:2,px:[0,0],py:[5,6],pz:[1,0],nx:[2,1],ny:[5,1],nz:[1,-1]},{size:2,px:[7,14],py:[3,5],pz:[1,0],nx:[5,0],ny:[16,7],nz:[0,-1]},{size:2,px:[11,2],py:[18,5],pz:[0,2],nx:[11,4],ny:[16,4],nz:[0,-1]},{size:2,px:[6,16],py:[19,20],pz:[0,-1],nx:[3,2],ny:[10,5],nz:[1,2]},{size:2,px:[5,3],py:[3,1],pz:[0,1],nx:[1,3],ny:[4,8],nz:[0,-1]},{size:2,px:[12,6],py:[13,6],pz:[0,1],nx:[10,1],ny:[12,2],nz:[0,-1]},{size:2,px:[8,3],py:[6,2],pz:[1,-1],nx:[4,8],ny:[2,4],nz:[2,1]},{size:2,px:[9,3],py:[21,2],pz:[0,-1],nx:[8,4],ny:[1,0],nz:[1,2]},{size:2,px:[8,4],py:[1,0],pz:[1,-1],nx:[8,6],ny:[4,2],nz:[1,1]},{size:2,px:[2,7],py:[1,6],pz:[2,-1],nx:[7,9],ny:[6,4],nz:[1,1]},{size:2,px:[6,3],py:[8,3],pz:[1,2],nx:[10,5],ny:[19,11],nz:[0,-1]},{size:2,px:[2,2],py:[3,4],pz:[2,2],nx:[3,6],ny:[4,6],nz:[1,-1]},{size:2,px:[3,11],py:[5,20],pz:[2,0],nx:[11,5],ny:[21,8],nz:[0,-1]},{size:3,px:[5,9,5],py:[4,7,5],pz:[2,0,2],nx:[23,10,4],ny:[23,3,22],nz:[0,-1,-1]},{size:4,px:[11,9,7,1],py:[13,8,11,10],pz:[0,-1,-1,-1],nx:[8,2,11,12],ny:[4,2,4,4],nz:[1,2,0,0]},{size:2,px:[0,0],py:[7,6],pz:[1,1],nx:[0,4],ny:[1,0],nz:[2,-1]},{size:2,px:[19,20],py:[0,1],pz:[0,0],nx:[21,1],ny:[0,2],nz:[0,-1]},{size:2,px:[8,5],py:[11,0],pz:[0,-1],nx:[11,0],ny:[12,1],nz:[0,2]},{size:2,px:[11,11],py:[1,1],pz:[0,-1],nx:[4,7],ny:[5,4],nz:[1,1]},{size:2,px:[5,12],py:[4,23],pz:[2,-1],nx:[13,15],ny:[5,4],nz:[0,0]},{size:2,px:[12,20],py:[4,16],pz:[0,-1],nx:[9,4],ny:[2,1],nz:[0,1]},{size:2,px:[12,13],py:[2,2],pz:[0,0],nx:[4,16],ny:[2,11],nz:[2,0]},{size:2,px:[19,14],py:[10,17],pz:[0,-1],nx:[3,8],ny:[0,2],nz:[2,0]},{size:2,px:[8,12],py:[1,2],pz:[1,0],nx:[19,10],ny:[3,1],nz:[0,-1]},{size:4,px:[17,2,3,10],py:[8,6,2,12],pz:[0,1,2,0],nx:[17,9,12,2],ny:[9,22,13,5],nz:[0,-1,-1,-1]},{size:2,px:[20,10],py:[15,7],pz:[0,1],nx:[13,9],ny:[7,3],nz:[0,-1]},{size:2,px:[0,0],py:[1,0],pz:[2,2],nx:[10,3],ny:[9,2],nz:[1,-1]},{size:2,px:[4,3],py:[1,0],pz:[2,2],nx:[0,22],ny:[14,6],nz:[0,-1]},{size:2,px:[16,3],py:[4,0],pz:[0,2],nx:[16,3],ny:[2,0],nz:[0,-1]},{size:2,px:[8,16],py:[6,12],pz:[1,0],nx:[8,12],ny:[4,7],nz:[1,-1]},{size:2,px:[5,11],py:[0,5],pz:[2,1],nx:[10,1],ny:[5,5],nz:[1,-1]},{size:2,px:[7,4],py:[5,5],pz:[0,-1],nx:[3,6],ny:[2,3],nz:[1,0]},{size:2,px:[11,11],py:[11,12],pz:[0,0],nx:[23,7],ny:[20,2],nz:[0,-1]},{size:2,px:[16,8],py:[12,5],pz:[0,1],nx:[8,2],ny:[2,1],nz:[1,-1]},{size:3,px:[6,11,11],py:[11,23,20],pz:[1,0,0],nx:[11,3,22],ny:[21,3,16],nz:[0,-1,-1]},{size:2,px:[17,15],py:[3,2],pz:[0,-1],nx:[4,4],ny:[3,2],nz:[2,2]},{size:2,px:[21,21],py:[11,10],pz:[0,0],nx:[11,3],ny:[6,2],nz:[1,-1]},{size:2,px:[23,21],py:[22,10],pz:[0,-1],nx:[20,10],ny:[18,10],nz:[0,1]},{size:2,px:[4,2],py:[6,3],pz:[1,2],nx:[3,2],ny:[4,3],nz:[1,-1]},{size:2,px:[16,0],py:[18,11],pz:[0,-1],nx:[8,7],ny:[4,4],nz:[0,0]},{size:2,px:[6,21],py:[3,16],pz:[0,-1],nx:[1,8],ny:[2,14],nz:[2,0]},{size:2,px:[8,1],py:[3,0],pz:[0,-1],nx:[11,11],ny:[2,1],nz:[0,0]},{size:3,px:[11,11,11],py:[9,10,8],pz:[1,1,1],nx:[23,1,0],ny:[23,9,11],nz:[0,-1,-1]},{size:2,px:[6,3],py:[2,1],pz:[1,2],nx:[7,1],ny:[8,2],nz:[0,-1]},{size:2,px:[10,17],py:[17,19],pz:[0,-1],nx:[10,4],ny:[16,9],nz:[0,1]},{size:2,px:[3,6],py:[7,1],pz:[1,-1],nx:[11,0],ny:[11,8],nz:[0,1]},{size:2,px:[10,5],py:[11,4],pz:[1,2],nx:[5,5],ny:[0,0],nz:[2,-1]},{size:2,px:[3,6],py:[3,6],pz:[2,1],nx:[8,0],ny:[4,16],nz:[1,-1]},{size:2,px:[14,1],py:[20,2],pz:[0,-1],nx:[7,7],ny:[11,9],nz:[1,1]},{size:3,px:[11,13,4],py:[16,21,3],pz:[0,0,2],nx:[14,16,5],ny:[20,14,9],nz:[0,-1,-1]},{size:2,px:[7,0],py:[1,1],pz:[1,-1],nx:[4,7],ny:[2,4],nz:[2,1]},{size:2,px:[23,11],py:[9,4],pz:[0,1],nx:[11,3],ny:[1,3],nz:[0,-1]},{size:2,px:[11,13],py:[23,23],pz:[0,0],nx:[13,13],ny:[20,20],nz:[0,-1]},{size:2,px:[10,8],py:[5,11],pz:[0,-1],nx:[20,19],ny:[18,20],nz:[0,0]},{size:2,px:[19,5],py:[22,4],pz:[0,-1],nx:[2,9],ny:[3,17],nz:[1,0]},{size:2,px:[15,2],py:[13,7],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:2,px:[14,13],py:[17,2],pz:[0,-1],nx:[15,13],ny:[19,15],nz:[0,0]},{size:2,px:[12,23],py:[8,22],pz:[0,-1],nx:[7,10],ny:[5,9],nz:[1,0]},{size:2,px:[2,6],py:[21,10],pz:[0,-1],nx:[3,4],ny:[3,3],nz:[1,1]},{size:2,px:[15,11],py:[5,0],pz:[0,-1],nx:[3,4],ny:[17,16],nz:[0,0]},{size:2,px:[3,1],py:[18,8],pz:[0,1],nx:[14,4],ny:[17,7],nz:[0,-1]},{size:2,px:[15,3],py:[18,3],pz:[0,2],nx:[1,22],ny:[0,1],nz:[0,-1]},{size:2,px:[13,3],py:[9,3],pz:[0,-1],nx:[0,1],ny:[9,20],nz:[1,0]},{size:2,px:[1,1],py:[1,0],pz:[2,2],nx:[9,23],ny:[10,12],nz:[1,-1]},{size:4,px:[9,0,9,1],py:[8,0,0,10],pz:[1,-1,-1,-1],nx:[23,7,5,23],ny:[20,7,5,19],nz:[0,1,2,0]},{size:2,px:[18,18],py:[12,12],pz:[0,-1],nx:[8,4],ny:[4,2],nz:[1,2]},{size:3,px:[0,4,1],py:[3,5,3],pz:[1,-1,-1],nx:[16,11,8],ny:[8,5,6],nz:[0,0,0]},{size:5,px:[9,10,14,11,11],py:[0,0,0,0,0],pz:[0,0,0,0,-1],nx:[8,3,4,6,2],ny:[22,9,5,4,0],nz:[0,1,0,0,2]},{size:2,px:[6,5],py:[2,2],pz:[1,1],nx:[7,3],ny:[8,7],nz:[0,-1]},{size:2,px:[11,5],py:[15,2],pz:[0,-1],nx:[3,10],ny:[0,1],nz:[2,0]},{size:2,px:[0,11],py:[11,12],pz:[1,-1],nx:[22,22],ny:[14,13],nz:[0,0]},{size:2,px:[2,2],py:[15,14],pz:[0,0],nx:[1,2],ny:[11,8],nz:[1,-1]},{size:2,px:[11,6],py:[0,7],pz:[1,-1],nx:[19,5],ny:[3,0],nz:[0,2]},{size:2,px:[2,3],py:[3,7],pz:[2,1],nx:[1,5],ny:[5,0],nz:[1,-1]},{size:2,px:[10,14],py:[4,5],pz:[0,-1],nx:[4,18],ny:[2,12],nz:[2,0]},{size:2,px:[19,10],py:[12,2],pz:[0,-1],nx:[13,4],ny:[10,2],nz:[0,2]},{size:2,px:[6,1],py:[21,6],pz:[0,-1],nx:[6,5],ny:[0,0],nz:[1,1]}],alpha:[-1.044179,1.044179,-.6003138,.6003138,-.4091282,.4091282,-.4590148,.4590148,-.4294004,.4294004,-.3360846,.3360846,-.3054186,.3054186,-.2901743,.2901743,-.3522417,.3522417,-.3195838,.3195838,-.2957309,.2957309,-.2876727,.2876727,-.263746,.263746,-.26079,.26079,-.2455714,.2455714,-.2749847,.2749847,-.2314217,.2314217,-.2540871,.2540871,-.2143416,.2143416,-.2565697,.2565697,-.1901272,.1901272,-.2259981,.2259981,-.2012333,.2012333,-.244846,.244846,-.2192845,.2192845,-.2005951,.2005951,-.2259,.2259,-.1955758,.1955758,-.2235332,.2235332,-.170449,.170449,-.1584628,.1584628,-.216771,.216771,-.1592909,.1592909,-.1967292,.1967292,-.1432268,.1432268,-.2039949,.2039949,-.1404068,.1404068,-.1788201,.1788201,-.1498714,.1498714,-.1282541,.1282541,-.1630182,.1630182,-.1398111,.1398111,-.1464143,.1464143,-.1281712,.1281712,-.1417014,.1417014,-.1779164,.1779164,-.2067174,.2067174,-.1344947,.1344947,-.1357351,.1357351,-.1683191,.1683191,-.1821768,.1821768,-.2158307,.2158307,-.1812857,.1812857,-.1635445,.1635445,-.1474934,.1474934,-.1771993,.1771993,-.151762,.151762,-.1283184,.1283184,-.1862675,.1862675,-.1420491,.1420491,-.1232165,.1232165,-.1472696,.1472696,-.1192156,.1192156,-.1602034,.1602034,-.1321473,.1321473,-.1358101,.1358101,-.1295821,.1295821,-.1289102,.1289102,-.123252,.123252,-.1332227,.1332227,-.1358887,.1358887,-.1179559,.1179559,-.1263694,.1263694,-.1444876,.1444876,-.1933141,.1933141,-.1917886,.1917886,-.119976,.119976,-.1359937,.1359937,-.1690073,.1690073,-.1894222,.1894222,-.1699422,.1699422,-.1340361,.1340361,-.1840622,.1840622,-.1277397,.1277397,-.138161,.138161,-.1282241,.1282241,-.1211334,.1211334,-.1264628,.1264628,-.137301,.137301,-.1363356,.1363356,-.1562568,.1562568,-.1268735,.1268735,-.1037859,.1037859,-.1394322,.1394322,-.1449225,.1449225,-.1109657,.1109657,-.1086931,.1086931,-.1379135,.1379135,-.1881974,.1881974,-.1304956,.1304956,-.09921777,.09921777,-.1398624,.1398624,-.1216469,.1216469,-.1272741,.1272741,-.1878236,.1878236,-.1336894,.1336894,-.1256289,.1256289,-.1247231,.1247231,-.18534,.18534,-.1087805,.1087805,-.1205676,.1205676,-.1023182,.1023182,-.1268422,.1268422,-.14229,.14229,-.1098174,.1098174,-.1317018,.1317018,-.1378142,.1378142,-.127455,.127455,-.1142944,.1142944,-.1713488,.1713488,-.1103035,.1103035,-.1045221,.1045221,-.1293015,.1293015,-.09763183,.09763183,-.1387213,.1387213,-.09031167,.09031167,-.1283052,.1283052,-.1133462,.1133462,-.09370681,.09370681,-.1079269,.1079269,-.1331913,.1331913,-.08969902,.08969902,-.104456,.104456,-.09387466,.09387466,-.1208988,.1208988,-.1252011,.1252011,-.1401277,.1401277,-.1461381,.1461381,-.1323763,.1323763,-.09923889,.09923889,-.1142899,.1142899,-.09110853,.09110853,-.1106607,.1106607,-.125314,.125314,-.09657895,.09657895,-.103001,.103001,-.1348857,.1348857,-.1237793,.1237793,-.1296943,.1296943,-.1323385,.1323385,-.08331554,.08331554,-.08417589,.08417589,-.1104431,.1104431,-.117071,.117071,-.1391725,.1391725,-.1485189,.1485189,-.1840393,.1840393,-.123825,.123825,-.1095287,.1095287,-.1177869,.1177869,-.1036409,.1036409,-.09802581,.09802581,-.09364054,.09364054,-.09936022,.09936022,-.1117201,.1117201,-.10813,.10813,-.1331861,.1331861,-.1192122,.1192122,-.09889761,.09889761,-.1173456,.1173456,-.1032917,.1032917,-.09268551,.09268551,-.1178563,.1178563,-.1215065,.1215065,-.1060437,.1060437,-.1010044,.1010044,-.1021683,.1021683,-.09974968,.09974968,-.1161528,.1161528,-.08686721,.08686721,-.08145259,.08145259,-.0993706,.0993706,-.1170885,.1170885,-.07693779,.07693779,-.09047233,.09047233,-.09168442,.09168442,-.1054105,.1054105,-.09036177,.09036177,-.1251949,.1251949,-.09523847,.09523847,-.103893,.103893,-.143366,.143366,-.148983,.148983,-.08393174,.08393174,-.08888026,.08888026,-.09347861,.09347861,-.1044838,.1044838,-.1102144,.1102144,-.1383415,.1383415,-.1466476,.1466476,-.1129741,.1129741,-.1310915,.1310915,-.1070648,.1070648,-.07559007,.07559007,-.08812082,.08812082,-.1234272,.1234272,-.1088022,.1088022,-.08388703,.08388703,-.07179593,.07179593,-.1008961,.1008961,-.0903007,.0903007,-.08581345,.08581345,-.09023431,.09023431,-.09807321,.09807321,-.09621402,.09621402,-.1730195,.1730195,-.08984631,.08984631,-.09556661,.09556661,-.1047576,.1047576,-.07854313,.07854313,-.08682118,.08682118,-.1159761,.1159761,-.133954,.133954,-.1003048,.1003048,-.09747544,.09747544,-.09501058,.09501058,-.1321566,.1321566,-.09194706,.09194706,-.09359276,.09359276,-.1015916,.1015916,-.1174192,.1174192,-.1039931,.1039931,-.09746733,.09746733,-.128612,.128612,-.1044899,.1044899,-.1066385,.1066385,-.08368626,.08368626,-.1271919,.1271919,-.1055946,.1055946,-.08272876,.08272876,-.1370564,.1370564,-.08539379,.08539379,-.1100343,.1100343,-.0810217,.0810217,-.1028728,.1028728,-.1305065,.1305065,-.1059506,.1059506,-.1264646,.1264646,-.08383843,.08383843,-.09357698,.09357698,-.074744,.074744,-.07814045,.07814045,-.0860097,.0860097,-.120609,.120609,-.09986512,.09986512,-.08516476,.08516476,-.07198783,.07198783,-.07838409,.07838409,-.1005142,.1005142,-.09951857,.09951857,-.07253998,.07253998,-.09913739,.09913739,-.0750036,.0750036,-.0925809,.0925809,-.1400287,.1400287,-.1044404,.1044404,-.07404339,.07404339,-.07256833,.07256833,-.1006995,.1006995,-.1426043,.1426043,-.1036529,.1036529,-.1208443,.1208443,-.1074245,.1074245,-.1141448,.1141448,-.1015809,.1015809,-.1028822,.1028822,-.1055682,.1055682,-.09468699,.09468699,-.1010098,.1010098,-.1205054,.1205054,-.08392956,.08392956,-.08052297,.08052297,-.09576507,.09576507,-.09515692,.09515692,-.1564745,.1564745,-.07357238,.07357238,-.1129262,.1129262,-.1013265,.1013265,-.08760761,.08760761,-.08714771,.08714771,-.09605039,.09605039,-.09064677,.09064677,-.08243857,.08243857,-.08495858,.08495858,-.08350249,.08350249,-.07423234,.07423234,-.07930799,.07930799,-.06620023,.06620023,-.07311919,.07311919,-.1237938,.1237938,-.1086814,.1086814,-.06379798,.06379798,-.07526021,.07526021,-.08297097,.08297097,-.08186337,.08186337,-.07627362,.07627362,-.1061638,.1061638,-.08328494,.08328494,-.1040895,.1040895,-.07649056,.07649056,-.07299058,.07299058,-.09195198,.09195198,-.0799088,.0799088,-.07429346,.07429346,-.09991702,.09991702,-.09755385,.09755385,-.1344138,.1344138,-.1707917,.1707917,-.0832545,.0832545,-.08137793,.08137793,-.08308659,.08308659,-.07440414,.07440414,-.07012744,.07012744,-.08122943,.08122943,-.08845462,.08845462,-.0880345,.0880345,-.09653392,.09653392,-.08795691,.08795691,-.1119045,.1119045,-.1068308,.1068308,-.08406359,.08406359,-.1220414,.1220414,-.1024235,.1024235,-.1252897,.1252897,-.1121234,.1121234,-.0905415,.0905415,-.08974435,.08974435,-.1351578,.1351578,-.1106442,.1106442,-.08093913,.08093913,-.09800762,.09800762,-.07012823,.07012823,-.07434949,.07434949,-.08684816,.08684816,-.08916388,.08916388,-.08773159,.08773159,-.07709608,.07709608,-.07230518,.07230518,-.09662156,.09662156,-.07957632,.07957632,-.07628441,.07628441,-.08050202,.08050202,-.1290593,.1290593,-.09246182,.09246182,-.09703662,.09703662,-.07866445,.07866445,-.1064783,.1064783,-.1012339,.1012339,-.06828389,.06828389,-.1005039,.1005039,-.07559687,.07559687,-.06359878,.06359878,-.08387002,.08387002,-.07851323,.07851323,-.08878569,.08878569,-.07767654,.07767654,-.08033338,.08033338,-.09142797,.09142797,-.08590585,.08590585,-.1052318,.1052318,-.08760062,.08760062,-.09222192,.09222192,-.07548828,.07548828,-.08003344,.08003344,-.1177076,.1177076,-.1064964,.1064964,-.08655553,.08655553,-.09418112,.09418112,-.07248163,.07248163,-.07120974,.07120974,-.06393114,.06393114,-.07997487,.07997487,-.1220941,.1220941,-.09892518,.09892518,-.08270271,.08270271,-.10694,.10694,-.05860771,.05860771,-.091266,.091266,-.06212559,.06212559,-.09397538,.09397538,-.08070447,.08070447,-.08415587,.08415587,-.08564455,.08564455,-.07791811,.07791811,-.06642259,.06642259,-.08266167,.08266167,-.1134986,.1134986,-.1045267,.1045267,-.07122085,.07122085,-.07979415,.07979415,-.07922347,.07922347,-.09003421,.09003421,-.08796449,.08796449,-.07933279,.07933279,-.08307947,.08307947,-.08946349,.08946349,-.07643384,.07643384,-.07818534,.07818534,-.07990991,.07990991,-.09885664,.09885664,-.08071329,.08071329,-.06952112,.06952112,-.06429706,.06429706,-.06307229,.06307229,-.08100137,.08100137,-.07693623,.07693623,-.06906625,.06906625,-.07390462,.07390462,-.06487217,.06487217,-.1233681,.1233681,-.06979273,.06979273,-.08358669,.08358669,-.109542,.109542,-.08519717,.08519717,-.07599857,.07599857,-.06042816,.06042816,-.06546304,.06546304,-.1016245,.1016245,-.08308787,.08308787,-.07385708,.07385708,-.0675163,.0675163,-.09036695,.09036695,-.09371335,.09371335,-.1116088,.1116088,-.05693741,.05693741,-.06383983,.06383983,-.05389843,.05389843,-.08383191,.08383191,-.07820822,.07820822,-.07067557,.07067557,-.07971948,.07971948,-.07360668,.07360668,-.07008027,.07008027,-.08013378,.08013378,-.08331605,.08331605,-.07145702,.07145702,-.0786394,.0786394,-.06992679,.06992679,-.05716495,.05716495,-.05306006,.05306006,-.08855639,.08855639,-.07656397,.07656397,-.06939272,.06939272,-.07523742,.07523742,-.08472299,.08472299,-.08114341,.08114341,-.06795517,.06795517,-.0789013,.0789013,-.07488741,.07488741,-.09281972,.09281972,-.09325498,.09325498,-.1401587,.1401587,-.1176284,.1176284,-.08867597,.08867597,-.08124232,.08124232,-.09441235,.09441235,-.08029452,.08029452,-.08581848,.08581848,-.1029819,.1029819,-.09569118,.09569118,-.07690893,.07690893,-.09018228,.09018228,-.1049209,.1049209,-.08969413,.08969413,-.08651891,.08651891,-.08613331,.08613331,-.07120468,.07120468,-.08743959,.08743959,-.07607158,.07607158,-.1015547,.1015547,-.08090879,.08090879,-.07114079,.07114079,-.08744835,.08744835,-.06074904,.06074904,-.06919871,.06919871,-.07607774,.07607774,-.094446,.094446,-.07833429,.07833429,-.06817555,.06817555,-.0899739,.0899739,-.09845223,.09845223,-.0789418,.0789418,-.07921373,.07921373,-.07448032,.07448032,-.1178165,.1178165,-.08216686,.08216686,-.08103286,.08103286,-.0698147,.0698147,-.08709008,.08709008,-.08336259,.08336259,-.06213589,.06213589,-.07068045,.07068045,-.06915676,.06915676,-.07103416,.07103416,-.06523849,.06523849,-.0763476,.0763476,-.07263038,.07263038,-.07164396,.07164396,-.08745559,.08745559,-.06960181,.06960181,-.08500098,.08500098,-.0652326,.0652326,-.07319714,.07319714,-.06268125,.06268125,-.07083135,.07083135,-.07984517,.07984517,-.1256265,.1256265,-.1065412,.1065412,-.08524323,.08524323,-.09291364,.09291364,-.07936567,.07936567,-.08607723,.08607723,-.07583416,.07583416,-.07931928,.07931928,-.07408357,.07408357,-.1034404,.1034404,-.1012127,.1012127,-.07916689,.07916689,-.08753651,.08753651,-.06090366,.06090366,-.07500103,.07500103,-.1228709,.1228709,-.06318201,.06318201,-.0758542,.0758542,-.0708909,.0708909,-.1053542,.1053542,-.08549521,.08549521,-.07906308,.07906308,-.0633878,.0633878,-.0841791,.0841791,-.07115511,.07115511,-.07693949,.07693949,-.07446749,.07446749,-.1037929,.1037929,-.07991005,.07991005,-.07119439,.07119439,-.0707134,.0707134,-.08587362,.08587362,-.07001236,.07001236,-.07567115,.07567115,-.0711893,.0711893,-.06844895,.06844895,-.1035118,.1035118,-.08156618,.08156618,-.07449593,.07449593,-.0815436,.0815436,-.09110878,.09110878,-.06222534,.06222534,-.1033841,.1033841,-.06811687,.06811687,-.06828443,.06828443,-.05769408,.05769408,-.05917684,.05917684,-.08358868,.08358868]
}]};try{var y=function(){"use strict";for(var n=document.getElementsByTagName("script"),p=0;p<n.length;p++)if(n[p].src.match(/(jquery\.facedetection(\.min)?\.js)|\/ccv\.js/))return n[p].src},x=y()}catch(n){}if(void 0===e){var e=function(n,p){"use strict";return e.core[p.toString()]=p().core,function(){var z,y,x,e;if(arguments.length>1)for(y=arguments[arguments.length-2],x=arguments[arguments.length-1],e=new Array(arguments.length-2),z=0;z<arguments.length-2;z++)e[z]=arguments[z];else y=arguments[0].async,x=arguments[0].worker,e=arguments[0],delete e.async,delete e.worker,e=[e];var i={shared:{}},s=p.apply(i,e);return y?function(y,t){var a=0,r=new Array(x),h=s.pre.apply(i,[x]);for(z in i.shared)"function"==typeof i.shared[z]?delete i.shared[z]:void 0!==i.shared[z].tagName&&delete i.shared[z];for(z=0;z<x;z++){var o=new Worker(n);o.onmessage=function(n){return function(p){r[n]="string"==typeof p.data?JSON.parse(p.data):p.data,a++,a==x&&y(s.post.apply(i,[r]))}}(z);var d={input:h[z],name:p.toString(),shared:i.shared,id:z,worker:e.worker_num};try{o.postMessage(d)}catch(n){o.postMessage(JSON.stringify(d))}}}:s.post.apply(i,[[s.core.apply(i,[s.pre.apply(i,[1])[0],0,1])]])}};e.core={}}var i={pre:function(n){if("img"==n.tagName.toLowerCase()){var p=document.createElement("canvas");document.body.appendChild(n),p.width=n.offsetWidth,p.style.width=n.offsetWidth.toString()+"px",p.height=n.offsetHeight,p.style.height=n.offsetHeight.toString()+"px",document.body.removeChild(n);var z=p.getContext("2d");return z.drawImage(n,0,0),p}return n},grayscale:function(n){for(var p,z,y=n.getContext("2d"),x=y.getImageData(0,0,n.width,n.height),e=x.data,i=n.width*n.height*4;i>0;)e[i-=4]=e[p=i+1]=e[z=i+2]=.3*e[i]+.59*e[p]+.11*e[z];return y.putImageData(x,0,0),n},array_group:function(n,p){var z,y,x=new Array(n.length);for(z=0;z<n.length;z++)x[z]={parent:-1,element:n[z],rank:0};for(z=0;z<n.length;z++)if(x[z].element){for(var e=z;x[e].parent!=-1;)e=x[e].parent;for(y=0;y<n.length;y++)if(z!=y&&x[y].element&&p(x[z].element,x[y].element)){for(var i=y;x[i].parent!=-1;)i=x[i].parent;if(i!=e){x[e].rank>x[i].rank?x[i].parent=e:(x[e].parent=i,x[e].rank==x[i].rank&&x[i].rank++,e=i);for(var s,t=y;x[t].parent!=-1;)s=t,t=x[t].parent,x[s].parent=e;for(t=z;x[t].parent!=-1;)s=t,t=x[t].parent,x[s].parent=e}}}var a=new Array(n.length),r=0;for(z=0;z<n.length;z++){y=-1;var h=z;if(x[h].element){for(;x[h].parent!=-1;)h=x[h].parent;x[h].rank>=0&&(x[h].rank=~r++),y=~x[h].rank}a[z]=y}return{index:a,cat:r}},detect_objects:e(x,function(n,z,y,x){function e(n){var p=this.shared.canvas,z=this.shared.interval,y=this.shared.scale,x=this.shared.next,e=this.shared.scale_upto,i=new Array(4*(e+2*x)),s=new Array(4*(e+2*x));i[0]=p,s[0]={width:i[0].width,height:i[0].height,data:i[0].getContext("2d").getImageData(0,0,i[0].width,i[0].height).data};var t;for(t=1;t<=z;t++)i[4*t]=document.createElement("canvas"),i[4*t].width=Math.floor(i[0].width/Math.pow(y,t)),i[4*t].height=Math.floor(i[0].height/Math.pow(y,t)),i[4*t].getContext("2d").drawImage(i[0],0,0,i[0].width,i[0].height,0,0,i[4*t].width,i[4*t].height),s[4*t]={width:i[4*t].width,height:i[4*t].height,data:i[4*t].getContext("2d").getImageData(0,0,i[4*t].width,i[4*t].height).data};for(t=x;t<e+2*x;t++)i[4*t]=document.createElement("canvas"),i[4*t].width=Math.floor(i[4*t-4*x].width/2),i[4*t].height=Math.floor(i[4*t-4*x].height/2),i[4*t].getContext("2d").drawImage(i[4*t-4*x],0,0,i[4*t-4*x].width,i[4*t-4*x].height,0,0,i[4*t].width,i[4*t].height),s[4*t]={width:i[4*t].width,height:i[4*t].height,data:i[4*t].getContext("2d").getImageData(0,0,i[4*t].width,i[4*t].height).data};for(t=2*x;t<e+2*x;t++)i[4*t+1]=document.createElement("canvas"),i[4*t+1].width=Math.floor(i[4*t-4*x].width/2),i[4*t+1].height=Math.floor(i[4*t-4*x].height/2),i[4*t+1].getContext("2d").drawImage(i[4*t-4*x],1,0,i[4*t-4*x].width-1,i[4*t-4*x].height,0,0,i[4*t+1].width-2,i[4*t+1].height),s[4*t+1]={width:i[4*t+1].width,height:i[4*t+1].height,data:i[4*t+1].getContext("2d").getImageData(0,0,i[4*t+1].width,i[4*t+1].height).data},i[4*t+2]=document.createElement("canvas"),i[4*t+2].width=Math.floor(i[4*t-4*x].width/2),i[4*t+2].height=Math.floor(i[4*t-4*x].height/2),i[4*t+2].getContext("2d").drawImage(i[4*t-4*x],0,1,i[4*t-4*x].width,i[4*t-4*x].height-1,0,0,i[4*t+2].width,i[4*t+2].height-2),s[4*t+2]={width:i[4*t+2].width,height:i[4*t+2].height,data:i[4*t+2].getContext("2d").getImageData(0,0,i[4*t+2].width,i[4*t+2].height).data},i[4*t+3]=document.createElement("canvas"),i[4*t+3].width=Math.floor(i[4*t-4*x].width/2),i[4*t+3].height=Math.floor(i[4*t-4*x].height/2),i[4*t+3].getContext("2d").drawImage(i[4*t-4*x],1,1,i[4*t-4*x].width-1,i[4*t-4*x].height-1,0,0,i[4*t+3].width-2,i[4*t+3].height-2),s[4*t+3]={width:i[4*t+3].width,height:i[4*t+3].height,data:i[4*t+3].getContext("2d").getImageData(0,0,i[4*t+3].width,i[4*t+3].height).data};return[s]}function s(n,p,z){var y,x,e,i,s,t,a=this.shared.cascade,r=(this.shared.interval,this.shared.scale),h=this.shared.next,o=this.shared.scale_upto,d=1,c=1,g=[0,1,0,1],f=[0,0,1,1],l=[];for(y=0;y<o;y++){var u=n[4*y+8*h].width-Math.floor(a.width/4),w=n[4*y+8*h].height-Math.floor(a.height/4),v=[4*n[4*y].width,4*n[4*y+4*h].width,4*n[4*y+8*h].width],m=[16*n[4*y].width-16*u,8*n[4*y+4*h].width-8*u,4*n[4*y+8*h].width-4*u];for(x=0;x<a.stage_classifier.length;x++){var _=a.stage_classifier[x].orig_feature,b=a.stage_classifier[x].feature=new Array(a.stage_classifier[x].count);for(e=0;e<a.stage_classifier[x].count;e++)for(b[e]={size:_[e].size,px:new Array(_[e].size),pz:new Array(_[e].size),nx:new Array(_[e].size),nz:new Array(_[e].size)},t=0;t<_[e].size;t++)b[e].px[t]=4*_[e].px[t]+_[e].py[t]*v[_[e].pz[t]],b[e].pz[t]=_[e].pz[t],b[e].nx[t]=4*_[e].nx[t]+_[e].ny[t]*v[_[e].nz[t]],b[e].nz[t]=_[e].nz[t]}for(t=0;t<4;t++){var M=[n[4*y].data,n[4*y+4*h].data,n[4*y+8*h+t].data],k=[8*g[t]+f[t]*n[4*y].width*8,4*g[t]+f[t]*n[4*y+4*h].width*4,0];for(s=0;s<w;s++){for(i=0;i<u;i++){var C=0,I=!0;for(x=0;x<a.stage_classifier.length;x++){C=0;var A=a.stage_classifier[x].alpha,b=a.stage_classifier[x].feature;for(e=0;e<a.stage_classifier[x].count;e++){var D,N,j=b[e],E=M[j.pz[0]][k[j.pz[0]]+j.px[0]],S=M[j.nz[0]][k[j.nz[0]]+j.nx[0]];if(E<=S)C+=A[2*e];else{var W,H=!0;for(W=0;W<j.size;W++){if(j.pz[W]>=0&&(D=M[j.pz[W]][k[j.pz[W]]+j.px[W]],D<E)){if(D<=S){H=!1;break}E=D}if(j.nz[W]>=0&&(N=M[j.nz[W]][k[j.nz[W]]+j.nx[W]],N>S)){if(E<=N){H=!1;break}S=N}}C+=H?A[2*e+1]:A[2*e]}}if(C<a.stage_classifier[x].threshold){I=!1;break}}I&&l.push({x:(4*i+2*g[t])*d,y:(4*s+2*f[t])*c,width:a.width*d,height:a.height*c,neighbor:1,confidence:C}),k[0]+=16,k[1]+=8,k[2]+=4}k[0]+=m[0],k[1]+=m[1],k[2]+=m[2]}}d*=r,c*=r}return l}function t(n){var p,z,y=this.shared.min_neighbors,x=this.shared.cascade;this.shared.interval,this.shared.scale,this.shared.next,this.shared.scale_upto;for(p=0;p<x.stage_classifier.length;p++)x.stage_classifier[p].feature=x.stage_classifier[p].orig_feature;if(n=n[0],y>0){var e=i.array_group(n,function(n,p){var z=Math.floor(.25*n.width+.5);return p.x<=n.x+z&&p.x>=n.x-z&&p.y<=n.y+z&&p.y>=n.y-z&&p.width<=Math.floor(1.5*n.width+.5)&&Math.floor(1.5*p.width+.5)>=n.width}),s=e.cat,t=e.index,a=new Array(s+1);for(p=0;p<a.length;p++)a[p]={neighbors:0,x:0,y:0,width:0,height:0,confidence:0};for(p=0;p<n.length;p++){var r=n[p],h=t[p];0==a[h].neighbors&&(a[h].confidence=r.confidence),++a[h].neighbors,a[h].x+=r.x,a[h].y+=r.y,a[h].width+=r.width,a[h].height+=r.height,a[h].confidence=Math.max(a[h].confidence,r.confidence)}var o=[];for(p=0;p<s;p++){var d=a[p].neighbors;d>=y&&o.push({x:(2*a[p].x+d)/(2*d),y:(2*a[p].y+d)/(2*d),width:(2*a[p].width+d)/(2*d),height:(2*a[p].height+d)/(2*d),neighbors:a[p].neighbors,confidence:a[p].confidence})}var c=[];for(p=0;p<o.length;p++){var r=o[p],g=!0;for(z=0;z<o.length;z++){var f=o[z],l=Math.floor(.25*f.width+.5);if(p!=z&&r.x>=f.x-l&&r.y>=f.y-l&&r.x+r.width<=f.x+f.width+l&&r.y+r.height<=f.y+f.height+l&&(f.neighbors>Math.max(3,r.neighbors)||r.neighbors<3)){g=!1;break}}g&&c.push(r)}return c}return n}if(void 0!==this.shared){var a=p(arguments,["canvas","cascade","interval","min_neighbors"]);this.shared.canvas=a.canvas,this.shared.interval=a.interval,this.shared.min_neighbors=a.min_neighbors,this.shared.cascade=a.cascade,this.shared.scale=Math.pow(2,1/(a.interval+1)),this.shared.next=a.interval+1,this.shared.scale_upto=Math.floor(Math.log(Math.min(a.canvas.width/a.cascade.width,a.canvas.height/a.cascade.height))/Math.log(this.shared.scale));var r;for(r=0;r<this.shared.cascade.stage_classifier.length;r++)this.shared.cascade.stage_classifier[r].orig_feature=this.shared.cascade.stage_classifier[r].feature}return{pre:e,core:s,post:t}})};onmessage=function(n){var p="string"==typeof n.data?JSON.parse(n.data):n.data,z={shared:p.shared},y=e.core[p.name].apply(z,[p.input,p.id,p.worker]);try{postMessage(y)}catch(n){postMessage(JSON.stringify(y))}},n.fn.faceDetection=function(p){"use strict";var y,x={interval:4,minNeighbors:1,grayscale:!0,confidence:null,async:!1,complete:function(){},error:function(){}};return n.isFunction(p)?x.complete=p:n.extend(x,p),this.each(function(){function p(){var n,p;if(y=(new Date).getTime(),s.is("img"))n=new Image,n.src=s.attr("src"),n.crossOrigin=s.attr("crossorigin"),p=i.pre(n);else if(s.is("video")||s.is("canvas")){var t,a;n=s[0],t=document.createElement("canvas"),t.setAttribute("width",n.videoWidth||n.width),t.setAttribute("height",n.videoHeight||n.height),a=t.getContext("2d"),a.drawImage(n,0,0),p=i.pre(t)}x.grayscale&&(p=i.grayscale(p));try{x.async&&window.Worker?i.detect_objects({canvas:p,cascade:z,interval:x.interval,min_neighbors:x.minNeighbors,worker:1,async:!0})(e):e(i.detect_objects({canvas:p,cascade:z,interval:x.interval,min_neighbors:x.minNeighbors}))}catch(n){x.error.apply(s,[2,n.message]),x.complete.apply(s,[!1])}}function e(n){for(var p=n.length,z=[],e=0;e<p;++e)null!==x.confidence&&n[e].confidence<=x.confidence||(n[e].positionX=a.left+n[e].x,n[e].positionY=a.top+n[e].y,n[e].offsetX=t.left+n[e].x,n[e].offsetY=t.top+n[e].y,n[e].scaleX=r,n[e].scaleY=h,z.push(n[e]));z.time=(new Date).getTime()-y,x.complete.apply(s,[z])}var s=n(this),t=s.offset(),a=s.position(),r=s.width()/(this.naturalWidth||this.videoWidth)||1,h=s.height()/(this.naturalHeight||this.videoHeight)||1;return s.is("img, video, canvas")?p():(x.error.apply(s,[1,"Face detection is possible on images, videos and canvas only."]),void x.complete.apply(s,[[]]))})}}("function"==typeof jQuery?jQuery:"function"==typeof Zepto?Zepto:{fn:{}});
//# sourceMappingURL=jquery.facedetection.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(16);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(63);

(0, _jquery2.default)(window).ready(function () {
  (0, _jquery2.default)("#image-input").change(function () {
    var input = this;
    (0, _jquery2.default)('.face').remove();
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        (0, _jquery2.default)('#image-upload').attr('src', e.target.result);
        setTimeout(function () {
          (0, _jquery2.default)('#image-upload').faceDetection({
            complete: function complete(faces) {
              console.log(faces);
              for (var i = 0; i < faces.length; i++) {
                (0, _jquery2.default)('<div>', {
                  'class': 'face',
                  'css': {
                    'position': 'absolute',
                    'left': faces[i].x * faces[i].scaleX + 'px',
                    'top': faces[i].y * faces[i].scaleY + 'px',
                    'width': faces[i].width * faces[i].scaleX + 'px',
                    'height': faces[i].height * faces[i].scaleY + 'px'
                  }
                }).insertAfter(this);
              }
            },
            error: function error(code, message) {
              console.log(message);
            }
          });
        }, 5000);
      };

      reader.readAsDataURL(input.files[0]);
    }
  });
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return Sizzle; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module !== "undefined" && module.exports ) {
	module.exports = Sizzle;
} else {
	window.Sizzle = Sizzle;
}
// EXPOSE

})( window );


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(33),
	__webpack_require__(34),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, nonce, rquery ) {

"use strict";

var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(19),
	__webpack_require__(76),
	__webpack_require__(9),
	__webpack_require__(12),
	__webpack_require__(15),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse ) {

"use strict";

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return window.location;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(8),
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, support ) {

"use strict";

jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(73),
	__webpack_require__(35),
	__webpack_require__(74),
	__webpack_require__(75)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Return jQuery for attributes-only inclusion
return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(5),
	__webpack_require__(17),
	__webpack_require__(6),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, nodeName, support, rnothtmlwhite ) {

"use strict";

var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(19),
	__webpack_require__(6),
	__webpack_require__(4),
	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse, rnothtmlwhite, dataPriv ) {

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(19),
	__webpack_require__(17),
	__webpack_require__(5),

	__webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, stripAndCollapse, support, nodeName ) {

"use strict";

var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(1),
	__webpack_require__(38),
	__webpack_require__(49),

	// This is the only module that needs core/support
	__webpack_require__(78)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();

return support;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(4),
	__webpack_require__(44)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(4),
	__webpack_require__(48)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, dataPriv, dataUser ) {

"use strict";

//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(10)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, nodeName ) {

"use strict";

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access ) {

"use strict";

// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(2),
	__webpack_require__(23)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(11)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),

	__webpack_require__(11),
	__webpack_require__(24)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(4),
	__webpack_require__(90),

	__webpack_require__(11),
	__webpack_require__(24)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, dataPriv, support ) {

"use strict";

// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, noGlobal ) {

"use strict";

var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(1),
	__webpack_require__(8)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {

"use strict";

( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();

return support;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(7),
	__webpack_require__(1),
	__webpack_require__(27),
	__webpack_require__(21),
	__webpack_require__(41),
	__webpack_require__(39),
	__webpack_require__(20),
	__webpack_require__(5),

	__webpack_require__(3),
	__webpack_require__(13),
	__webpack_require__(2) // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, access, document, documentElement, rnumnonpx,
             curCSS, addGetHookIf, support, nodeName ) {

"use strict";

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(25),
	__webpack_require__(23) // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};

return jQuery.fn.delay;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(65)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, Sizzle ) {

"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {

"use strict";

return function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(60)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( fnToString ) {
	"use strict";

	return fnToString.call( Object );
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	return Object.getPrototypeOf;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
	"use strict";

	return class2type.toString;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(0),
	__webpack_require__(3),
	__webpack_require__(15), // clone
	__webpack_require__(12) // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map