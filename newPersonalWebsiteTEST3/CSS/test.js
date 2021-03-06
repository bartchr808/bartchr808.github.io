! function (e) {
    var t = /iPhone/i,
        i = /iPod/i,
        r = /iPad/i,
        n = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        o = /Android/i,
        a = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        s = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        l = /IEMobile/i,
        h = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        c = /BlackBerry/i,
        u = /BB10/i,
        f = /Opera Mini/i,
        p = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        d = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        m = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
        E = function (e, t) {
            return e.test(t)
        },
        g = function (e) {
            var g = e || navigator.userAgent,
                v = g.split("[FBAN");
            return "undefined" != typeof v[1] && (g = v[0]), v = g.split("Twitter"), "undefined" != typeof v[1] && (g = v[0]), this.apple = {
                phone: E(t, g),
                ipod: E(i, g),
                tablet: !E(t, g) && E(r, g),
                device: E(t, g) || E(i, g) || E(r, g)
            }, this.amazon = {
                phone: E(a, g),
                tablet: !E(a, g) && E(s, g),
                device: E(a, g) || E(s, g)
            }, this.android = {
                phone: E(a, g) || E(n, g),
                tablet: !E(a, g) && !E(n, g) && (E(s, g) || E(o, g)),
                device: E(a, g) || E(s, g) || E(n, g) || E(o, g)
            }, this.windows = {
                phone: E(l, g),
                tablet: E(h, g),
                device: E(l, g) || E(h, g)
            }, this.other = {
                blackberry: E(c, g),
                blackberry10: E(u, g),
                opera: E(f, g),
                firefox: E(d, g),
                chrome: E(p, g),
                device: E(c, g) || E(u, g) || E(f, g) || E(d, g) || E(p, g)
            }, this.seven_inch = E(m, g), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window ? this : void 0
        },
        v = function () {
            var e = new g;
            return e.Class = g, e
        };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = g : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = v() : "function" == typeof define && define.amd ? define("isMobile", [], e.isMobile = v()) : e.isMobile = v()
}(this), ! function (e, t, i) {
    function r(e, t) {
        return typeof e === t
    }

    function n() {
        var e, t, i, n, o, a, h;
        for (var u in l)
            if (l.hasOwnProperty(u)) {
                if (e = [], t = l[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (i = 0; i < t.options.aliases.length; i++) e.push(t.options.aliases[i].toLowerCase());
                for (n = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) a = e[o], h = a.split("."), 1 === h.length ? c[h[0]] = n : (!c[h[0]] || c[h[0]] instanceof Boolean || (c[h[0]] = new Boolean(c[h[0]])), c[h[0]][h[1]] = n), s.push((n ? "" : "no-") + h.join("-"))
            }
    }

    function o(e) {
        var t = u.className,
            i = c._config.classPrefix || "";
        if (f && (t = t.baseVal), c._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            t = t.replace(r, "$1" + i + "js$2")
        }
        c._config.enableClasses && (t += " " + i + e.join(" " + i), f ? u.className.baseVal = t : u.className = t)
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : f ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    var s = [],
        l = [],
        h = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var i = this;
                setTimeout(function () {
                    t(i[e])
                }, 0)
            },
            addTest: function (e, t, i) {
                l.push({
                    name: e,
                    fn: t,
                    options: i
                })
            },
            addAsyncTest: function (e) {
                l.push({
                    name: null,
                    fn: e
                })
            }
        },
        c = function () {};
    c.prototype = h, c = new c;
    var u = t.documentElement,
        f = "svg" === u.nodeName.toLowerCase();
    c.addTest("webgl", function () {
        var t = a("canvas"),
            i = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return i in t ? t[i]("webgl") || t[i]("experimental-webgl") : "WebGLRenderingContext" in e
    }), n(), o(s), delete h.addTest, delete h.addAsyncTest;
    for (var p = 0; p < c._q.length; p++) c._q[p]();
    e.Modernizr = c
}(window, document);
var THREE = THREE || {
    REVISION: "54"
};
self.console = self.console || {
        info: function () {},
        log: function () {},
        debug: function () {},
        warn: function () {},
        error: function () {}
    }, self.Int32Array = self.Int32Array || Array, self.Float32Array = self.Float32Array || Array, String.prototype.startsWith = String.prototype.startsWith || function (e) {
        return this.slice(0, e.length) === e
    }, String.prototype.endsWith = String.prototype.endsWith || function (e) {
        var e = String(e),
            t = this.lastIndexOf(e);
        return (t > -1 && t) === this.length - e.length
    }, String.prototype.trim = String.prototype.trim || function () {
        return this.replace(/^\s+|\s+$/g, "")
    },
    function () {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
        void 0 === window.requestAnimationFrame && (window.requestAnimationFrame = function (t) {
            var i = Date.now(),
                r = Math.max(0, 16 - (i - e)),
                n = window.setTimeout(function () {
                    t(i + r)
                }, r);
            return e = i + r, n
        }), window.cancelAnimationFrame = window.cancelAnimationFrame || function (e) {
            window.clearTimeout(e)
        }
    }(), THREE.CullFaceNone = 0, THREE.CullFaceBack = 1, THREE.CullFaceFront = 2, THREE.CullFaceFrontBack = 3, THREE.FrontFaceDirectionCW = 0, THREE.FrontFaceDirectionCCW = 1, THREE.BasicShadowMap = 0, THREE.PCFShadowMap = 1, THREE.PCFSoftShadowMap = 2, THREE.FrontSide = 0, THREE.BackSide = 1, THREE.DoubleSide = 2, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NoBlending = 0, THREE.NormalBlending = 1, THREE.AdditiveBlending = 2, THREE.SubtractiveBlending = 3, THREE.MultiplyBlending = 4, THREE.CustomBlending = 5, THREE.AddEquation = 100, THREE.SubtractEquation = 101, THREE.ReverseSubtractEquation = 102, THREE.ZeroFactor = 200, THREE.OneFactor = 201, THREE.SrcColorFactor = 202, THREE.OneMinusSrcColorFactor = 203, THREE.SrcAlphaFactor = 204, THREE.OneMinusSrcAlphaFactor = 205, THREE.DstAlphaFactor = 206, THREE.OneMinusDstAlphaFactor = 207, THREE.DstColorFactor = 208, THREE.OneMinusDstColorFactor = 209, THREE.SrcAlphaSaturateFactor = 210, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.AddOperation = 2, THREE.UVMapping = function () {}, THREE.CubeReflectionMapping = function () {}, THREE.CubeRefractionMapping = function () {}, THREE.SphericalReflectionMapping = function () {}, THREE.SphericalRefractionMapping = function () {}, THREE.RepeatWrapping = 1e3, THREE.ClampToEdgeWrapping = 1001, THREE.MirroredRepeatWrapping = 1002, THREE.NearestFilter = 1003, THREE.NearestMipMapNearestFilter = 1004, THREE.NearestMipMapLinearFilter = 1005, THREE.LinearFilter = 1006, THREE.LinearMipMapNearestFilter = 1007, THREE.LinearMipMapLinearFilter = 1008, THREE.UnsignedByteType = 1009, THREE.ByteType = 1010, THREE.ShortType = 1011, THREE.UnsignedShortType = 1012, THREE.IntType = 1013, THREE.UnsignedIntType = 1014, THREE.FloatType = 1015, THREE.UnsignedShort4444Type = 1016, THREE.UnsignedShort5551Type = 1017, THREE.UnsignedShort565Type = 1018, THREE.AlphaFormat = 1019, THREE.RGBFormat = 1020, THREE.RGBAFormat = 1021, THREE.LuminanceFormat = 1022, THREE.LuminanceAlphaFormat = 1023, THREE.RGB_S3TC_DXT1_Format = 2001, THREE.RGBA_S3TC_DXT1_Format = 2002, THREE.RGBA_S3TC_DXT3_Format = 2003, THREE.RGBA_S3TC_DXT5_Format = 2004, THREE.Color = function (e) {
        return void 0 !== e && this.set(e), this
    }, THREE.Color.prototype = {
        constructor: THREE.Color,
        r: 1,
        g: 1,
        b: 1,
        copy: function (e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        },
        copyGammaToLinear: function (e) {
            return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this
        },
        copyLinearToGamma: function (e) {
            return this.r = Math.sqrt(e.r), this.g = Math.sqrt(e.g), this.b = Math.sqrt(e.b), this
        },
        convertGammaToLinear: function () {
            var e = this.r,
                t = this.g,
                i = this.b;
            return this.r = e * e, this.g = t * t, this.b = i * i, this
        },
        convertLinearToGamma: function () {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        set: function (e) {
            switch (typeof e) {
            case "number":
                this.setHex(e);
                break;
            case "string":
                this.setStyle(e)
            }
        },
        setRGB: function (e, t, i) {
            return this.r = e, this.g = t, this.b = i, this
        },
        setHSV: function (e, t, i) {
            var r, n, o;
            return 0 === i ? this.r = this.g = this.b = 0 : (r = Math.floor(6 * e), n = 6 * e - r, e = i * (1 - t), o = i * (1 - t * n), t = i * (1 - t * (1 - n)), 0 === r ? (this.r = i, this.g = t, this.b = e) : 1 === r ? (this.r = o, this.g = i, this.b = e) : 2 === r ? (this.r = e, this.g = i, this.b = t) : 3 === r ? (this.r = e, this.g = o, this.b = i) : 4 === r ? (this.r = t, this.g = e, this.b = i) : 5 === r && (this.r = i, this.g = e, this.b = o)), this
        },
        getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        setHex: function (e) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
        },
        getHexString: function () {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getStyle: function () {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        setStyle: function (e) {
            return /^rgb\((\d+),(\d+),(\d+)\)$/i.test(e) ? (e = /^rgb\((\d+),(\d+),(\d+)\)$/i.exec(e), this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, this) : /^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(e) ? (e = /^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(e), this.r = Math.min(100, parseInt(e[1], 10)) / 100, this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, this) : /^\#([0-9a-f]{6})$/i.test(e) ? (e = /^\#([0-9a-f]{6})$/i.exec(e), this.setHex(parseInt(e[1], 16)), this) : /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e) ? (e = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e), this.setHex(parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3], 16)), this) : /^(\w+)$/i.test(e) ? (this.setHex(THREE.ColorKeywords[e]), this) : void 0
        },
        getHSV: function (e) {
            var t = this.r,
                i = this.g,
                r = this.b,
                n = Math.max(Math.max(t, i), r),
                o = Math.min(Math.min(t, i), r);
            if (o === n) o = t = 0;
            else {
                var a = n - o,
                    o = a / n,
                    t = (t === n ? (i - r) / a : i === n ? 2 + (r - t) / a : 4 + (t - i) / a) / 6;
                0 > t && (t += 1), t > 1 && (t -= 1)
            }
            return void 0 === e && (e = {
                h: 0,
                s: 0,
                v: 0
            }), e.h = t, e.s = o, e.v = n, e
        },
        lerpSelf: function (e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
        },
        clone: function () {
            return (new THREE.Color).setRGB(this.r, this.g, this.b)
        }
    }, THREE.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, THREE.Vector2 = function (e, t) {
        this.x = e || 0, this.y = t || 0
    }, THREE.Vector2.prototype = {
        constructor: THREE.Vector2,
        set: function (e, t) {
            return this.x = e, this.y = t, this
        },
        setX: function (e) {
            return this.x = e, this
        },
        setY: function (e) {
            return this.y = e, this
        },
        setComponent: function (e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw Error("index is out of range: " + e)
            }
        },
        getComponent: function (e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + e)
            }
        },
        copy: function (e) {
            return this.x = e.x, this.y = e.y, this
        },
        addScalar: function (e) {
            return this.x += e, this.y += e, this
        },
        add: function (e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this
        },
        addSelf: function (e) {
            return this.x += e.x, this.y += e.y, this
        },
        sub: function (e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this
        },
        subSelf: function (e) {
            return this.x -= e.x, this.y -= e.y, this
        },
        multiplyScalar: function (e) {
            return this.x *= e, this.y *= e, this
        },
        divideScalar: function (e) {
            return 0 !== e ? (this.x /= e, this.y /= e) : this.set(0, 0), this
        },
        minSelf: function (e) {
            return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
        },
        maxSelf: function (e) {
            return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
        },
        clampSelf: function (e, t) {
            return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
        },
        negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (e) {
            return this.x * e.x + this.y * e.y
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        distanceTo: function (e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function (e) {
            var t = this.x - e.x,
                e = this.y - e.y;
            return t * t + e * e
        },
        setLength: function (e) {
            var t = this.length();
            return 0 !== t && e !== t && this.multiplyScalar(e / t), this
        },
        lerpSelf: function (e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        },
        equals: function (e) {
            return e.x === this.x && e.y === this.y
        },
        clone: function () {
            return new THREE.Vector2(this.x, this.y)
        }
    }, THREE.Vector3 = function (e, t, i) {
        this.x = e || 0, this.y = t || 0, this.z = i || 0
    }, THREE.Vector3.prototype = {
        constructor: THREE.Vector3,
        set: function (e, t, i) {
            return this.x = e, this.y = t, this.z = i, this
        },
        setX: function (e) {
            return this.x = e, this
        },
        setY: function (e) {
            return this.y = e, this
        },
        setZ: function (e) {
            return this.z = e, this
        },
        setComponent: function (e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw Error("index is out of range: " + e)
            }
        },
        getComponent: function (e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " + e)
            }
        },
        copy: function (e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        },
        add: function (e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
        },
        addSelf: function (e) {
            return this.x += e.x, this.y += e.y, this.z += e.z, this
        },
        addScalar: function (e) {
            return this.x += e, this.y += e, this.z += e, this
        },
        sub: function (e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
        },
        subSelf: function (e) {
            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
        },
        multiply: function (e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
        },
        multiplySelf: function (e) {
            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
        },
        multiplyScalar: function (e) {
            return this.x *= e, this.y *= e, this.z *= e, this
        },
        divideSelf: function (e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
        },
        divideScalar: function (e) {
            return 0 !== e ? (this.x /= e, this.y /= e, this.z /= e) : this.z = this.y = this.x = 0, this
        },
        minSelf: function (e) {
            return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
        },
        maxSelf: function (e) {
            return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
        },
        clampSelf: function (e, t) {
            return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
        },
        negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        setLength: function (e) {
            var t = this.length();
            return 0 !== t && e !== t && this.multiplyScalar(e / t), this
        },
        lerpSelf: function (e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        },
        cross: function (e, t) {
            return this.x = e.y * t.z - e.z * t.y, this.y = e.z * t.x - e.x * t.z, this.z = e.x * t.y - e.y * t.x, this
        },
        crossSelf: function (e) {
            var t = this.x,
                i = this.y,
                r = this.z;
            return this.x = i * e.z - r * e.y, this.y = r * e.x - t * e.z, this.z = t * e.y - i * e.x, this
        },
        angleTo: function (e) {
            return Math.acos(this.dot(e) / this.length() / e.length())
        },
        distanceTo: function (e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function (e) {
            var t = this.x - e.x,
                i = this.y - e.y,
                e = this.z - e.z;
            return t * t + i * i + e * e
        },
        getPositionFromMatrix: function (e) {
            return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
        },
        setEulerFromRotationMatrix: function (e, t) {
            function i(e) {
                return Math.min(Math.max(e, -1), 1)
            }
            var r = e.elements,
                n = r[0],
                o = r[4],
                a = r[8],
                s = r[1],
                l = r[5],
                h = r[9],
                c = r[2],
                u = r[6],
                r = r[10];
            return void 0 === t || "XYZ" === t ? (this.y = Math.asin(i(a)), .99999 > Math.abs(a) ? (this.x = Math.atan2(-h, r), this.z = Math.atan2(-o, n)) : (this.x = Math.atan2(u, l), this.z = 0)) : "YXZ" === t ? (this.x = Math.asin(-i(h)), .99999 > Math.abs(h) ? (this.y = Math.atan2(a, r), this.z = Math.atan2(s, l)) : (this.y = Math.atan2(-c, n), this.z = 0)) : "ZXY" === t ? (this.x = Math.asin(i(u)), .99999 > Math.abs(u) ? (this.y = Math.atan2(-c, r), this.z = Math.atan2(-o, l)) : (this.y = 0, this.z = Math.atan2(s, n))) : "ZYX" === t ? (this.y = Math.asin(-i(c)), .99999 > Math.abs(c) ? (this.x = Math.atan2(u, r), this.z = Math.atan2(s, n)) : (this.x = 0, this.z = Math.atan2(-o, l))) : "YZX" === t ? (this.z = Math.asin(i(s)), .99999 > Math.abs(s) ? (this.x = Math.atan2(-h, l), this.y = Math.atan2(-c, n)) : (this.x = 0, this.y = Math.atan2(a, r))) : "XZY" === t && (this.z = Math.asin(-i(o)), .99999 > Math.abs(o) ? (this.x = Math.atan2(u, l), this.y = Math.atan2(a, n)) : (this.x = Math.atan2(-h, r), this.y = 0)), this
        },
        setEulerFromQuaternion: function (e, t) {
            function i(e) {
                return Math.min(Math.max(e, -1), 1)
            }
            var r = e.x * e.x,
                n = e.y * e.y,
                o = e.z * e.z,
                a = e.w * e.w;
            return void 0 === t || "XYZ" === t ? (this.x = Math.atan2(2 * (e.x * e.w - e.y * e.z), a - r - n + o), this.y = Math.asin(i(2 * (e.x * e.z + e.y * e.w))), this.z = Math.atan2(2 * (e.z * e.w - e.x * e.y), a + r - n - o)) : "YXZ" === t ? (this.x = Math.asin(i(2 * (e.x * e.w - e.y * e.z))), this.y = Math.atan2(2 * (e.x * e.z + e.y * e.w), a - r - n + o), this.z = Math.atan2(2 * (e.x * e.y + e.z * e.w), a - r + n - o)) : "ZXY" === t ? (this.x = Math.asin(i(2 * (e.x * e.w + e.y * e.z))), this.y = Math.atan2(2 * (e.y * e.w - e.z * e.x), a - r - n + o), this.z = Math.atan2(2 * (e.z * e.w - e.x * e.y), a - r + n - o)) : "ZYX" === t ? (this.x = Math.atan2(2 * (e.x * e.w + e.z * e.y), a - r - n + o), this.y = Math.asin(i(2 * (e.y * e.w - e.x * e.z))), this.z = Math.atan2(2 * (e.x * e.y + e.z * e.w), a + r - n - o)) : "YZX" === t ? (this.x = Math.atan2(2 * (e.x * e.w - e.z * e.y), a - r + n - o), this.y = Math.atan2(2 * (e.y * e.w - e.x * e.z), a + r - n - o), this.z = Math.asin(i(2 * (e.x * e.y + e.z * e.w)))) : "XZY" === t && (this.x = Math.atan2(2 * (e.x * e.w + e.y * e.z), a - r + n - o), this.y = Math.atan2(2 * (e.x * e.z + e.y * e.w), a + r - n - o), this.z = Math.asin(i(2 * (e.z * e.w - e.x * e.y)))), this
        },
        getScaleFromMatrix: function (e) {
            var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
                i = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
                e = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
            return this.x = t, this.y = i, this.z = e, this
        },
        equals: function (e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        },
        clone: function () {
            return new THREE.Vector3(this.x, this.y, this.z)
        }
    }, THREE.Vector4 = function (e, t, i, r) {
        this.x = e || 0, this.y = t || 0, this.z = i || 0, this.w = void 0 !== r ? r : 1
    }, THREE.Vector4.prototype = {
        constructor: THREE.Vector4,
        set: function (e, t, i, r) {
            return this.x = e, this.y = t, this.z = i, this.w = r, this
        },
        setX: function (e) {
            return this.x = e, this
        },
        setY: function (e) {
            return this.y = e, this
        },
        setZ: function (e) {
            return this.z = e, this
        },
        setW: function (e) {
            return this.w = e, this
        },
        setComponent: function (e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw Error("index is out of range: " + e)
            }
        },
        getComponent: function (e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + e)
            }
        },
        copy: function (e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
        },
        addScalar: function (e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this
        },
        add: function (e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
        },
        addSelf: function (e) {
            return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this
        },
        sub: function (e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
        },
        subSelf: function (e) {
            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this
        },
        multiplyScalar: function (e) {
            return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
        },
        divideScalar: function (e) {
            return 0 !== e ? (this.x /= e, this.y /= e, this.z /= e, this.w /= e) : (this.z = this.y = this.x = 0, this.w = 1), this
        },
        minSelf: function (e) {
            return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this
        },
        maxSelf: function (e) {
            return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this
        },
        clampSelf: function (e, t) {
            return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this
        },
        negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        setLength: function (e) {
            var t = this.length();
            return 0 !== t && e !== t && this.multiplyScalar(e / t), this
        },
        lerpSelf: function (e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
        },
        equals: function (e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        },
        clone: function () {
            return new THREE.Vector4(this.x, this.y, this.z, this.w)
        },
        setAxisAngleFromQuaternion: function (e) {
            this.w = 2 * Math.acos(e.w);
            var t = Math.sqrt(1 - e.w * e.w);
            return 1e-4 > t ? (this.x = 1, this.z = this.y = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
        },
        setAxisAngleFromRotationMatrix: function (e) {
            var t, i, r, e = e.elements,
                n = e[0];
            r = e[4];
            var o = e[8],
                a = e[1],
                s = e[5],
                l = e[9];
            i = e[2], t = e[6];
            var h = e[10];
            return .01 > Math.abs(r - a) && .01 > Math.abs(o - i) && .01 > Math.abs(l - t) ? .1 > Math.abs(r + a) && .1 > Math.abs(o + i) && .1 > Math.abs(l + t) && .1 > Math.abs(n + s + h - 3) ? (this.set(1, 0, 0, 0), this) : (e = Math.PI, n = (n + 1) / 2, s = (s + 1) / 2, h = (h + 1) / 2, r = (r + a) / 4, o = (o + i) / 4, l = (l + t) / 4, n > s && n > h ? .01 > n ? (t = 0, r = i = .707106781) : (t = Math.sqrt(n), i = r / t, r = o / t) : s > h ? .01 > s ? (t = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(s), t = r / i, r = l / i) : .01 > h ? (i = t = .707106781, r = 0) : (r = Math.sqrt(h), t = o / r, i = l / r), this.set(t, i, r, e), this) : (e = Math.sqrt((t - l) * (t - l) + (o - i) * (o - i) + (a - r) * (a - r)), .001 > Math.abs(e) && (e = 1), this.x = (t - l) / e, this.y = (o - i) / e, this.z = (a - r) / e, this.w = Math.acos((n + s + h - 1) / 2), this)
        }
    }, THREE.Box2 = function (e, t) {
        this.min = void 0 !== e ? e.clone() : new THREE.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t.clone() : new THREE.Vector2(-(1 / 0), -(1 / 0))
    }, THREE.Box2.prototype = {
        constructor: THREE.Box2,
        set: function (e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromPoints: function (e) {
            if (0 < e.length) {
                var t = e[0];
                this.min.copy(t), this.max.copy(t);
                for (var i = 1, r = e.length; r > i; i++) t = e[i], t.x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x), t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y)
            } else this.makeEmpty();
            return this
        },
        setFromCenterAndSize: function (e, t) {
            var i = THREE.Box2.__v1.copy(t).multiplyScalar(.5);
            return this.min.copy(e).subSelf(i), this.max.copy(e).addSelf(i), this
        },
        copy: function (e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function () {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
        },
        empty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        center: function (e) {
            return (e || new THREE.Vector2).add(this.min, this.max).multiplyScalar(.5)
        },
        size: function (e) {
            return (e || new THREE.Vector2).sub(this.max, this.min)
        },
        expandByPoint: function (e) {
            return this.min.minSelf(e), this.max.maxSelf(e), this
        },
        expandByVector: function (e) {
            return this.min.subSelf(e), this.max.addSelf(e), this
        },
        expandByScalar: function (e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        containsPoint: function (e) {
            return this.min.x <= e.x && e.x <= this.max.x && this.min.y <= e.y && e.y <= this.max.y
        },
        containsBox: function (e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
        },
        getParameter: function (e) {
            return new THREE.Vector2((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        },
        isIntersectionBox: function (e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
        },
        clampPoint: function (e, t) {
            return (t || new THREE.Vector2).copy(e).clampSelf(this.min, this.max)
        },
        distanceToPoint: function (e) {
            return THREE.Box2.__v1.copy(e).clampSelf(this.min, this.max).subSelf(e).length()
        },
        intersect: function (e) {
            return this.min.maxSelf(e.min), this.max.minSelf(e.max), this
        },
        union: function (e) {
            return this.min.minSelf(e.min), this.max.maxSelf(e.max), this
        },
        translate: function (e) {
            return this.min.addSelf(e), this.max.addSelf(e), this
        },
        equals: function (e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        },
        clone: function () {
            return (new THREE.Box2).copy(this)
        }
    }, THREE.Box2.__v1 = new THREE.Vector2, THREE.Box3 = function (e, t) {
        this.min = void 0 !== e ? e.clone() : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t.clone() : new THREE.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
    }, THREE.Box3.prototype = {
        constructor: THREE.Box3,
        set: function (e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromPoints: function (e) {
            if (0 < e.length) {
                var t = e[0];
                this.min.copy(t), this.max.copy(t);
                for (var i = 1, r = e.length; r > i; i++) t = e[i], t.x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x), t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y), t.z < this.min.z ? this.min.z = t.z : t.z > this.max.z && (this.max.z = t.z)
            } else this.makeEmpty();
            return this
        },
        setFromCenterAndSize: function (e, t) {
            var i = THREE.Box3.__v1.copy(t).multiplyScalar(.5);
            return this.min.copy(e).subSelf(i), this.max.copy(e).addSelf(i), this
        },
        copy: function (e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
        },
        empty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        center: function (e) {
            return (e || new THREE.Vector3).add(this.min, this.max).multiplyScalar(.5)
        },
        size: function (e) {
            return (e || new THREE.Vector3).sub(this.max, this.min)
        },
        expandByPoint: function (e) {
            return this.min.minSelf(e), this.max.maxSelf(e), this
        },
        expandByVector: function (e) {
            return this.min.subSelf(e), this.max.addSelf(e), this
        },
        expandByScalar: function (e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        containsPoint: function (e) {
            return this.min.x <= e.x && e.x <= this.max.x && this.min.y <= e.y && e.y <= this.max.y && this.min.z <= e.z && e.z <= this.max.z
        },
        containsBox: function (e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
        },
        getParameter: function (e) {
            return new THREE.Vector3((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        },
        isIntersectionBox: function (e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
        },
        clampPoint: function (e, t) {
            return t || new THREE.Vector3, (new THREE.Vector3).copy(e).clampSelf(this.min, this.max)
        },
        distanceToPoint: function (e) {
            return THREE.Box3.__v1.copy(e).clampSelf(this.min, this.max).subSelf(e).length()
        },
        getBoundingSphere: function (e) {
            return e = e || new THREE.Sphere, e.center = this.center(), e.radius = .5 * this.size(THREE.Box3.__v0).length(), e
        },
        intersect: function (e) {
            return this.min.maxSelf(e.min), this.max.minSelf(e.max), this
        },
        union: function (e) {
            return this.min.minSelf(e.min), this.max.maxSelf(e.max), this
        },
        transform: function (e) {
            return e = [e.multiplyVector3(THREE.Box3.__v0.set(this.min.x, this.min.y, this.min.z)), e.multiplyVector3(THREE.Box3.__v1.set(this.min.x, this.min.y, this.max.z)), e.multiplyVector3(THREE.Box3.__v2.set(this.min.x, this.max.y, this.min.z)), e.multiplyVector3(THREE.Box3.__v3.set(this.min.x, this.max.y, this.max.z)), e.multiplyVector3(THREE.Box3.__v4.set(this.max.x, this.min.y, this.min.z)), e.multiplyVector3(THREE.Box3.__v5.set(this.max.x, this.min.y, this.max.z)), e.multiplyVector3(THREE.Box3.__v6.set(this.max.x, this.max.y, this.min.z)), e.multiplyVector3(THREE.Box3.__v7.set(this.max.x, this.max.y, this.max.z))], this.makeEmpty(), this.setFromPoints(e), this
        },
        translate: function (e) {
            return this.min.addSelf(e), this.max.addSelf(e), this
        },
        equals: function (e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        },
        clone: function () {
            return (new THREE.Box3).copy(this)
        }
    }, THREE.Box3.__v0 = new THREE.Vector3, THREE.Box3.__v1 = new THREE.Vector3, THREE.Box3.__v2 = new THREE.Vector3, THREE.Box3.__v3 = new THREE.Vector3, THREE.Box3.__v4 = new THREE.Vector3, THREE.Box3.__v5 = new THREE.Vector3, THREE.Box3.__v6 = new THREE.Vector3, THREE.Box3.__v7 = new THREE.Vector3, THREE.Matrix3 = function () {
        this.elements = new Float32Array(9)
    }, THREE.Matrix3.prototype = {
        constructor: THREE.Matrix3,
        multiplyVector3: function (e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                n = e.z;
            return e.x = t[0] * i + t[3] * r + t[6] * n, e.y = t[1] * i + t[4] * r + t[7] * n, e.z = t[2] * i + t[5] * r + t[8] * n, e
        },
        multiplyVector3Array: function (e) {
            for (var t = THREE.Matrix3.__v1, i = 0, r = e.length; r > i; i += 3) t.x = e[i], t.y = e[i + 1], t.z = e[i + 2], this.multiplyVector3(t), e[i] = t.x, e[i + 1] = t.y, e[i + 2] = t.z;
            return e
        },
        getInverse: function (e) {
            var t = e.elements,
                e = t[10] * t[5] - t[6] * t[9],
                i = -t[10] * t[1] + t[2] * t[9],
                r = t[6] * t[1] - t[2] * t[5],
                n = -t[10] * t[4] + t[6] * t[8],
                o = t[10] * t[0] - t[2] * t[8],
                a = -t[6] * t[0] + t[2] * t[4],
                s = t[9] * t[4] - t[5] * t[8],
                l = -t[9] * t[0] + t[1] * t[8],
                h = t[5] * t[0] - t[1] * t[4],
                t = t[0] * e + t[1] * n + t[2] * s,
                t = 1 / t,
                c = this.elements;
            return c[0] = t * e, c[1] = t * i, c[2] = t * r, c[3] = t * n, c[4] = t * o, c[5] = t * a, c[6] = t * s, c[7] = t * l, c[8] = t * h, this
        },
        transpose: function () {
            var e, t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        },
        transposeIntoArray: function (e) {
            var t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
        }
    }, THREE.Matrix3.__v1 = new THREE.Vector3, THREE.Matrix4 = function (e, t, i, r, n, o, a, s, l, h, c, u, f, p, d, m) {
        this.elements = new Float32Array(16), this.set(void 0 !== e ? e : 1, t || 0, i || 0, r || 0, n || 0, void 0 !== o ? o : 1, a || 0, s || 0, l || 0, h || 0, void 0 !== c ? c : 1, u || 0, f || 0, p || 0, d || 0, void 0 !== m ? m : 1)
    }, THREE.Matrix4.prototype = {
        constructor: THREE.Matrix4,
        set: function (e, t, i, r, n, o, a, s, l, h, c, u, f, p, d, m) {
            var E = this.elements;
            return E[0] = e, E[4] = t, E[8] = i, E[12] = r, E[1] = n, E[5] = o, E[9] = a, E[13] = s, E[2] = l, E[6] = h, E[10] = c, E[14] = u, E[3] = f, E[7] = p, E[11] = d, E[15] = m, this
        },
        identity: function () {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        copy: function (e) {
            return e = e.elements, this.set(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]), this
        },
        setRotationFromEuler: function (e, t) {
            var i = this.elements,
                r = e.x,
                n = e.y,
                o = e.z,
                a = Math.cos(r),
                r = Math.sin(r),
                s = Math.cos(n),
                n = Math.sin(n),
                l = Math.cos(o),
                o = Math.sin(o);
            if (void 0 === t || "XYZ" === t) {
                var h = a * l,
                    c = a * o,
                    u = r * l,
                    f = r * o;
                i[0] = s * l, i[4] = -s * o, i[8] = n, i[1] = c + u * n, i[5] = h - f * n, i[9] = -r * s, i[2] = f - h * n, i[6] = u + c * n, i[10] = a * s
            } else "YXZ" === t ? (h = s * l, c = s * o, u = n * l, f = n * o, i[0] = h + f * r, i[4] = u * r - c, i[8] = a * n, i[1] = a * o, i[5] = a * l, i[9] = -r, i[2] = c * r - u, i[6] = f + h * r, i[10] = a * s) : "ZXY" === t ? (h = s * l, c = s * o, u = n * l, f = n * o, i[0] = h - f * r, i[4] = -a * o, i[8] = u + c * r, i[1] = c + u * r, i[5] = a * l, i[9] = f - h * r, i[2] = -a * n, i[6] = r, i[10] = a * s) : "ZYX" === t ? (h = a * l, c = a * o, u = r * l, f = r * o, i[0] = s * l, i[4] = u * n - c, i[8] = h * n + f, i[1] = s * o, i[5] = f * n + h, i[9] = c * n - u, i[2] = -n, i[6] = r * s, i[10] = a * s) : "YZX" === t ? (h = a * s, c = a * n, u = r * s, f = r * n, i[0] = s * l, i[4] = f - h * o, i[8] = u * o + c, i[1] = o, i[5] = a * l, i[9] = -r * l, i[2] = -n * l, i[6] = c * o + u, i[10] = h - f * o) : "XZY" === t && (h = a * s, c = a * n, u = r * s, f = r * n, i[0] = s * l, i[4] = -o, i[8] = n * l, i[1] = h * o + f, i[5] = a * l, i[9] = c * o - u, i[2] = u * o - c,
                i[6] = r * l, i[10] = f * o + h);
            return this
        },
        setRotationFromQuaternion: function (e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                n = e.z,
                o = e.w,
                a = i + i,
                s = r + r,
                l = n + n,
                e = i * a,
                h = i * s,
                i = i * l,
                c = r * s,
                r = r * l,
                n = n * l,
                a = o * a,
                s = o * s,
                o = o * l;
            return t[0] = 1 - (c + n), t[4] = h - o, t[8] = i + s, t[1] = h + o, t[5] = 1 - (e + n), t[9] = r - a, t[2] = i - s, t[6] = r + a, t[10] = 1 - (e + c), this
        },
        lookAt: function (e, t, i) {
            var r = this.elements,
                n = THREE.Matrix4.__v1,
                o = THREE.Matrix4.__v2,
                a = THREE.Matrix4.__v3;
            return a.sub(e, t).normalize(), 0 === a.length() && (a.z = 1), n.cross(i, a).normalize(), 0 === n.length() && (a.x += 1e-4, n.cross(i, a).normalize()), o.cross(a, n), r[0] = n.x, r[4] = o.x, r[8] = a.x, r[1] = n.y, r[5] = o.y, r[9] = a.y, r[2] = n.z, r[6] = o.z, r[10] = a.z, this
        },
        multiply: function (e, t) {
            var i = e.elements,
                r = t.elements,
                n = this.elements,
                o = i[0],
                a = i[4],
                s = i[8],
                l = i[12],
                h = i[1],
                c = i[5],
                u = i[9],
                f = i[13],
                p = i[2],
                d = i[6],
                m = i[10],
                E = i[14],
                g = i[3],
                v = i[7],
                T = i[11],
                i = i[15],
                y = r[0],
                _ = r[4],
                R = r[8],
                x = r[12],
                b = r[1],
                w = r[5],
                H = r[9],
                S = r[13],
                M = r[2],
                C = r[6],
                A = r[10],
                P = r[14],
                L = r[3],
                F = r[7],
                D = r[11],
                r = r[15];
            return n[0] = o * y + a * b + s * M + l * L, n[4] = o * _ + a * w + s * C + l * F, n[8] = o * R + a * H + s * A + l * D, n[12] = o * x + a * S + s * P + l * r, n[1] = h * y + c * b + u * M + f * L, n[5] = h * _ + c * w + u * C + f * F, n[9] = h * R + c * H + u * A + f * D, n[13] = h * x + c * S + u * P + f * r, n[2] = p * y + d * b + m * M + E * L, n[6] = p * _ + d * w + m * C + E * F, n[10] = p * R + d * H + m * A + E * D, n[14] = p * x + d * S + m * P + E * r, n[3] = g * y + v * b + T * M + i * L, n[7] = g * _ + v * w + T * C + i * F, n[11] = g * R + v * H + T * A + i * D, n[15] = g * x + v * S + T * P + i * r, this
        },
        multiplySelf: function (e) {
            return this.multiply(this, e)
        },
        multiplyToArray: function (e, t, i) {
            var r = this.elements;
            return this.multiply(e, t), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this
        },
        multiplyScalar: function (e) {
            var t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
        },
        multiplyVector3: function (e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                n = e.z,
                o = 1 / (t[3] * i + t[7] * r + t[11] * n + t[15]);
            return e.x = (t[0] * i + t[4] * r + t[8] * n + t[12]) * o, e.y = (t[1] * i + t[5] * r + t[9] * n + t[13]) * o, e.z = (t[2] * i + t[6] * r + t[10] * n + t[14]) * o, e
        },
        multiplyVector4: function (e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                n = e.z,
                o = e.w;
            return e.x = t[0] * i + t[4] * r + t[8] * n + t[12] * o, e.y = t[1] * i + t[5] * r + t[9] * n + t[13] * o, e.z = t[2] * i + t[6] * r + t[10] * n + t[14] * o, e.w = t[3] * i + t[7] * r + t[11] * n + t[15] * o, e
        },
        multiplyVector3Array: function (e) {
            for (var t = THREE.Matrix4.__v1, i = 0, r = e.length; r > i; i += 3) t.x = e[i], t.y = e[i + 1], t.z = e[i + 2], this.multiplyVector3(t), e[i] = t.x, e[i + 1] = t.y, e[i + 2] = t.z;
            return e
        },
        rotateAxis: function (e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                n = e.z;
            return e.x = i * t[0] + r * t[4] + n * t[8], e.y = i * t[1] + r * t[5] + n * t[9], e.z = i * t[2] + r * t[6] + n * t[10], e.normalize(), e
        },
        crossVector: function (e) {
            var t = this.elements,
                i = new THREE.Vector4;
            return i.x = t[0] * e.x + t[4] * e.y + t[8] * e.z + t[12] * e.w, i.y = t[1] * e.x + t[5] * e.y + t[9] * e.z + t[13] * e.w, i.z = t[2] * e.x + t[6] * e.y + t[10] * e.z + t[14] * e.w, i.w = e.w ? t[3] * e.x + t[7] * e.y + t[11] * e.z + t[15] * e.w : 1, i
        },
        determinant: function () {
            var e = this.elements,
                t = e[0],
                i = e[4],
                r = e[8],
                n = e[12],
                o = e[1],
                a = e[5],
                s = e[9],
                l = e[13],
                h = e[2],
                c = e[6],
                u = e[10],
                f = e[14],
                p = e[3],
                d = e[7],
                m = e[11],
                e = e[15];
            return n * s * c * p - r * l * c * p - n * a * u * p + i * l * u * p + r * a * f * p - i * s * f * p - n * s * h * d + r * l * h * d + n * o * u * d - t * l * u * d - r * o * f * d + t * s * f * d + n * a * h * m - i * l * h * m - n * o * c * m + t * l * c * m + i * o * f * m - t * a * f * m - r * a * h * e + i * s * h * e + r * o * c * e - t * s * c * e - i * o * u * e + t * a * u * e
        },
        transpose: function () {
            var e, t = this.elements;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
        },
        flattenToArray: function (e) {
            var t = this.elements;
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
        },
        flattenToArrayOffset: function (e, t) {
            var i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
        },
        getPosition: function () {
            var e = this.elements;
            return THREE.Matrix4.__v1.set(e[12], e[13], e[14])
        },
        setPosition: function (e) {
            var t = this.elements;
            return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
        },
        getColumnX: function () {
            var e = this.elements;
            return THREE.Matrix4.__v1.set(e[0], e[1], e[2])
        },
        getColumnY: function () {
            var e = this.elements;
            return THREE.Matrix4.__v1.set(e[4], e[5], e[6])
        },
        getColumnZ: function () {
            var e = this.elements;
            return THREE.Matrix4.__v1.set(e[8], e[9], e[10])
        },
        getInverse: function (e) {
            var t = this.elements,
                i = e.elements,
                r = i[0],
                n = i[4],
                o = i[8],
                a = i[12],
                s = i[1],
                l = i[5],
                h = i[9],
                c = i[13],
                u = i[2],
                f = i[6],
                p = i[10],
                d = i[14],
                m = i[3],
                E = i[7],
                g = i[11],
                i = i[15];
            return t[0] = h * d * E - c * p * E + c * f * g - l * d * g - h * f * i + l * p * i, t[4] = a * p * E - o * d * E - a * f * g + n * d * g + o * f * i - n * p * i, t[8] = o * c * E - a * h * E + a * l * g - n * c * g - o * l * i + n * h * i, t[12] = a * h * f - o * c * f - a * l * p + n * c * p + o * l * d - n * h * d, t[1] = c * p * m - h * d * m - c * u * g + s * d * g + h * u * i - s * p * i, t[5] = o * d * m - a * p * m + a * u * g - r * d * g - o * u * i + r * p * i, t[9] = a * h * m - o * c * m - a * s * g + r * c * g + o * s * i - r * h * i, t[13] = o * c * u - a * h * u + a * s * p - r * c * p - o * s * d + r * h * d, t[2] = l * d * m - c * f * m + c * u * E - s * d * E - l * u * i + s * f * i, t[6] = a * f * m - n * d * m - a * u * E + r * d * E + n * u * i - r * f * i, t[10] = n * c * m - a * l * m + a * s * E - r * c * E - n * s * i + r * l * i, t[14] = a * l * u - n * c * u - a * s * f + r * c * f + n * s * d - r * l * d, t[3] = h * f * m - l * p * m - h * u * E + s * p * E + l * u * g - s * f * g, t[7] = n * p * m - o * f * m + o * u * E - r * p * E - n * u * g + r * f * g, t[11] = o * l * m - n * h * m - o * s * E + r * h * E + n * s * g - r * l * g, t[15] = n * h * u - o * l * u + o * s * f - r * h * f - n * s * p + r * l * p, this.multiplyScalar(1 / e.determinant()), this
        },
        compose: function (e, t, i) {
            var r = this.elements,
                n = THREE.Matrix4.__m1,
                o = THREE.Matrix4.__m2;
            return n.identity(), n.setRotationFromQuaternion(t), o.makeScale(i), this.multiply(n, o), r[12] = e.x, r[13] = e.y, r[14] = e.z, this
        },
        decompose: function (e, t, i) {
            var r = this.elements,
                n = THREE.Matrix4.__v1,
                o = THREE.Matrix4.__v2,
                a = THREE.Matrix4.__v3;
            return n.set(r[0], r[1], r[2]), o.set(r[4], r[5], r[6]), a.set(r[8], r[9], r[10]), e = e instanceof THREE.Vector3 ? e : new THREE.Vector3, t = t instanceof THREE.Quaternion ? t : new THREE.Quaternion, i = i instanceof THREE.Vector3 ? i : new THREE.Vector3, i.x = n.length(), i.y = o.length(), i.z = a.length(), e.x = r[12], e.y = r[13], e.z = r[14], r = THREE.Matrix4.__m1, r.copy(this), r.elements[0] /= i.x, r.elements[1] /= i.x, r.elements[2] /= i.x, r.elements[4] /= i.y, r.elements[5] /= i.y, r.elements[6] /= i.y, r.elements[8] /= i.z, r.elements[9] /= i.z, r.elements[10] /= i.z, t.setFromRotationMatrix(r), [e, t, i]
        },
        extractPosition: function (e) {
            var t = this.elements,
                e = e.elements;
            return t[12] = e[12], t[13] = e[13], t[14] = e[14], this
        },
        extractRotation: function (e) {
            var t = this.elements,
                e = e.elements,
                i = THREE.Matrix4.__v1,
                r = 1 / i.set(e[0], e[1], e[2]).length(),
                n = 1 / i.set(e[4], e[5], e[6]).length(),
                i = 1 / i.set(e[8], e[9], e[10]).length();
            return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[8] = e[8] * i, t[9] = e[9] * i, t[10] = e[10] * i, this
        },
        translate: function (e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                e = e.z;
            return t[12] = t[0] * i + t[4] * r + t[8] * e + t[12], t[13] = t[1] * i + t[5] * r + t[9] * e + t[13], t[14] = t[2] * i + t[6] * r + t[10] * e + t[14], t[15] = t[3] * i + t[7] * r + t[11] * e + t[15], this
        },
        rotateX: function (e) {
            var t = this.elements,
                i = t[4],
                r = t[5],
                n = t[6],
                o = t[7],
                a = t[8],
                s = t[9],
                l = t[10],
                h = t[11],
                c = Math.cos(e),
                e = Math.sin(e);
            return t[4] = c * i + e * a, t[5] = c * r + e * s, t[6] = c * n + e * l, t[7] = c * o + e * h, t[8] = c * a - e * i, t[9] = c * s - e * r, t[10] = c * l - e * n, t[11] = c * h - e * o, this
        },
        rotateY: function (e) {
            var t = this.elements,
                i = t[0],
                r = t[1],
                n = t[2],
                o = t[3],
                a = t[8],
                s = t[9],
                l = t[10],
                h = t[11],
                c = Math.cos(e),
                e = Math.sin(e);
            return t[0] = c * i - e * a, t[1] = c * r - e * s, t[2] = c * n - e * l, t[3] = c * o - e * h, t[8] = c * a + e * i, t[9] = c * s + e * r, t[10] = c * l + e * n, t[11] = c * h + e * o, this
        },
        rotateZ: function (e) {
            var t = this.elements,
                i = t[0],
                r = t[1],
                n = t[2],
                o = t[3],
                a = t[4],
                s = t[5],
                l = t[6],
                h = t[7],
                c = Math.cos(e),
                e = Math.sin(e);
            return t[0] = c * i + e * a, t[1] = c * r + e * s, t[2] = c * n + e * l, t[3] = c * o + e * h, t[4] = c * a - e * i, t[5] = c * s - e * r, t[6] = c * l - e * n, t[7] = c * h - e * o, this
        },
        rotateByAxis: function (e, t) {
            var i = this.elements;
            if (1 === e.x && 0 === e.y && 0 === e.z) return this.rotateX(t);
            if (0 === e.x && 1 === e.y && 0 === e.z) return this.rotateY(t);
            if (0 === e.x && 0 === e.y && 1 === e.z) return this.rotateZ(t);
            var r = e.x,
                n = e.y,
                o = e.z,
                a = Math.sqrt(r * r + n * n + o * o),
                r = r / a,
                n = n / a,
                o = o / a,
                a = r * r,
                s = n * n,
                l = o * o,
                h = Math.cos(t),
                c = Math.sin(t),
                u = 1 - h,
                f = r * n * u,
                p = r * o * u,
                u = n * o * u,
                r = r * c,
                d = n * c,
                c = o * c,
                o = a + (1 - a) * h,
                a = f + c,
                n = p - d,
                f = f - c,
                s = s + (1 - s) * h,
                c = u + r,
                p = p + d,
                u = u - r,
                l = l + (1 - l) * h,
                h = i[0],
                r = i[1],
                d = i[2],
                m = i[3],
                E = i[4],
                g = i[5],
                v = i[6],
                T = i[7],
                y = i[8],
                _ = i[9],
                R = i[10],
                x = i[11];
            return i[0] = o * h + a * E + n * y, i[1] = o * r + a * g + n * _, i[2] = o * d + a * v + n * R, i[3] = o * m + a * T + n * x, i[4] = f * h + s * E + c * y, i[5] = f * r + s * g + c * _, i[6] = f * d + s * v + c * R, i[7] = f * m + s * T + c * x, i[8] = p * h + u * E + l * y, i[9] = p * r + u * g + l * _, i[10] = p * d + u * v + l * R, i[11] = p * m + u * T + l * x, this
        },
        scale: function (e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                e = e.z;
            return t[0] *= i, t[4] *= r, t[8] *= e, t[1] *= i, t[5] *= r, t[9] *= e, t[2] *= i, t[6] *= r, t[10] *= e, t[3] *= i, t[7] *= r, t[11] *= e, this
        },
        getMaxScaleOnAxis: function () {
            var e = this.elements;
            return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], Math.max(e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10])))
        },
        makeTranslation: function (e) {
            return this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1), this
        },
        makeRotationX: function (e) {
            var t = Math.cos(e),
                e = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function (e) {
            var t = Math.cos(e),
                e = Math.sin(e);
            return this.set(t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function (e) {
            var t = Math.cos(e),
                e = Math.sin(e);
            return this.set(t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function (e, t) {
            var i = Math.cos(t),
                r = Math.sin(t),
                n = 1 - i,
                o = e.x,
                a = e.y,
                s = e.z,
                l = n * o,
                h = n * a;
            return this.set(l * o + i, l * a - r * s, l * s + r * a, 0, l * a + r * s, h * a + i, h * s - r * o, 0, l * s - r * a, h * s + r * o, n * s * s + i, 0, 0, 0, 0, 1), this
        },
        makeScale: function (e) {
            return this.set(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1), this
        },
        makeFrustum: function (e, t, i, r, n, o) {
            var a = this.elements;
            return a[0] = 2 * n / (t - e), a[4] = 0, a[8] = (t + e) / (t - e), a[12] = 0, a[1] = 0, a[5] = 2 * n / (r - i), a[9] = (r + i) / (r - i), a[13] = 0, a[2] = 0, a[6] = 0, a[10] = -(o + n) / (o - n), a[14] = -2 * o * n / (o - n), a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        },
        makePerspective: function (e, t, i, r) {
            var e = i * Math.tan(THREE.Math.degToRad(.5 * e)),
                n = -e;
            return this.makeFrustum(n * t, e * t, n, e, i, r)
        },
        makeOrthographic: function (e, t, i, r, n, o) {
            var a = this.elements,
                s = t - e,
                l = i - r,
                h = o - n;
            return a[0] = 2 / s, a[4] = 0, a[8] = 0, a[12] = -((t + e) / s), a[1] = 0, a[5] = 2 / l, a[9] = 0, a[13] = -((i + r) / l), a[2] = 0, a[6] = 0, a[10] = -2 / h, a[14] = -((o + n) / h), a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        },
        clone: function () {
            var e = this.elements;
            return new THREE.Matrix4(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
        }
    }, THREE.Matrix4.__v1 = new THREE.Vector3, THREE.Matrix4.__v2 = new THREE.Vector3, THREE.Matrix4.__v3 = new THREE.Vector3, THREE.Matrix4.__m1 = new THREE.Matrix4, THREE.Matrix4.__m2 = new THREE.Matrix4, THREE.Ray = function (e, t) {
        this.origin = void 0 !== e ? e.clone() : new THREE.Vector3, this.direction = void 0 !== t ? t.clone() : new THREE.Vector3
    }, THREE.Ray.prototype = {
        constructor: THREE.Ray,
        set: function (e, t) {
            return this.origin.copy(e), this.direction.copy(t), this
        },
        copy: function (e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
        },
        at: function (e, t) {
            return (t || new THREE.Vector3).copy(this.direction).multiplyScalar(e).addSelf(this.origin)
        },
        recastSelf: function (e) {
            return this.origin.copy(this.at(e, THREE.Ray.__v1)), this
        },
        closestPointToPoint: function (e, t) {
            var i = t || new THREE.Vector3;
            i.sub(e, this.origin);
            var r = i.dot(this.direction);
            return i.copy(this.direction).multiplyScalar(r).addSelf(this.origin)
        },
        distanceToPoint: function (e) {
            var t = THREE.Ray.__v1.sub(e, this.origin).dot(this.direction);
            return THREE.Ray.__v1.copy(this.direction).multiplyScalar(t).addSelf(this.origin), THREE.Ray.__v1.distanceTo(e)
        },
        isIntersectionSphere: function (e) {
            return this.distanceToPoint(e.center) <= e.radius
        },
        isIntersectionPlane: function (e) {
            return 0 != e.normal.dot(this.direction) || 0 == e.distanceToPoint(this.origin)
        },
        distanceToPlane: function (e) {
            var t = e.normal.dot(this.direction);
            return 0 != t ? -(this.origin.dot(e.normal) + e.constant) / t : 0 == e.distanceToPoint(this.origin) ? 0 : void 0
        },
        intersectPlane: function (e, t) {
            var i = this.distanceToPlane(e);
            return void 0 === i ? void 0 : this.at(i, t)
        },
        transform: function (e) {
            return this.direction = e.multiplyVector3(this.direction.addSelf(this.origin)), this.origin = e.multiplyVector3(this.origin), this.direction.subSelf(this.origin), this
        },
        equals: function (e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        },
        clone: function () {
            return (new THREE.Ray).copy(this)
        }
    }, THREE.Ray.__v1 = new THREE.Vector3, THREE.Ray.__v2 = new THREE.Vector3, THREE.Frustum = function () {
        this.planes = [new THREE.Plane, new THREE.Plane, new THREE.Plane, new THREE.Plane, new THREE.Plane, new THREE.Plane]
    }, THREE.Frustum.prototype.setFromMatrix = function (e) {
        var t = this.planes,
            i = e.elements,
            e = i[0],
            r = i[1],
            n = i[2],
            o = i[3],
            a = i[4],
            s = i[5],
            l = i[6],
            h = i[7],
            c = i[8],
            u = i[9],
            f = i[10],
            p = i[11],
            d = i[12],
            m = i[13],
            E = i[14],
            i = i[15];
        for (t[0].setComponents(o - e, h - a, p - c, i - d), t[1].setComponents(o + e, h + a, p + c, i + d), t[2].setComponents(o + r, h + s, p + u, i + m), t[3].setComponents(o - r, h - s, p - u, i - m), t[4].setComponents(o - n, h - l, p - f, i - E), t[5].setComponents(o + n, h + l, p + f, i + E), e = 0; 6 > e; e++) t[e].normalize()
    }, THREE.Frustum.prototype.contains = function (e) {
        for (var t = this.planes, i = e.matrixWorld, r = i.getPosition(), e = -e.geometry.boundingSphere.radius * i.getMaxScaleOnAxis(), n = i = 0; 6 > n; n++)
            if (i = t[n].distanceToPoint(r), e >= i) return !1;
        return !0
    }, THREE.Frustum.__v1 = new THREE.Vector3, THREE.Plane = function (e, t) {
        this.normal = void 0 !== e ? e.clone() : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
    }, THREE.Plane.prototype = {
        constructor: THREE.Plane,
        set: function (e, t) {
            return this.normal.copy(e), this.constant = t, this
        },
        setComponents: function (e, t, i, r) {
            return this.normal.set(e, t, i), this.constant = r, this
        },
        setFromNormalAndCoplanarPoint: function (e, t) {
            return this.normal.copy(e).normalize(), this.constant = -t.dot(this.normal), this
        },
        setFromCoplanarPoints: function (e, t, i) {
            return t = THREE.Plane.__v1.sub(i, t).crossSelf(THREE.Plane.__v2.sub(e, t)).normalize(), this.setFromNormalAndCoplanarPoint(t, e), this
        },
        copy: function (e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this
        },
        normalize: function () {
            var e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this
        },
        distanceToPoint: function (e) {
            return this.normal.dot(e) + this.constant
        },
        distanceToSphere: function (e) {
            return this.distanceToPoint(e.center) - e.radius
        },
        projectPoint: function (e, t) {
            return this.orthoPoint(e, t).subSelf(e).negate()
        },
        orthoPoint: function (e, t) {
            var i = this.distanceToPoint(e);
            return (t || new THREE.Vector3).copy(this.normal).multiplyScalar(i)
        },
        isIntersectionLine: function (e, t) {
            var i = this.distanceToPoint(e),
                r = this.distanceToPoint(t);
            return 0 > i && r > 0 || 0 > r && i > 0
        },
        coplanarPoint: function (e) {
            return (e || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
        },
        transform: function (e, t) {
            var i = THREE.Plane.__v1,
                r = THREE.Plane.__v2,
                t = t || (new THREE.Matrix3).getInverse(e).transpose(),
                i = t.multiplyVector3(i.copy(this.normal)),
                r = this.coplanarPoint(r),
                r = e.multiplyVector3(r);
            return this.setFromNormalAndCoplanarPoint(i, r), this
        },
        translate: function (e) {
            return this.constant -= e.dot(this.normal), this
        },
        equals: function (e) {
            return e.normal.equals(this.normal) && e.constant == this.constant
        },
        clone: function () {
            return (new THREE.Plane).copy(this)
        }
    }, THREE.Plane.__vZero = new THREE.Vector3(0, 0, 0), THREE.Plane.__v1 = new THREE.Vector3, THREE.Plane.__v2 = new THREE.Vector3, THREE.Sphere = function (e, t) {
        this.center = void 0 === e ? new THREE.Vector3 : e.clone(), this.radius = void 0 === t ? 0 : t
    }, THREE.Sphere.prototype = {
        constructor: THREE.Sphere,
        set: function (e, t) {
            return this.center.copy(e), this.radius = t, this
        },
        setFromCenterAndPoints: function (e, t) {
            for (var i = 0, r = 0, n = t.length; n > r; r++) var o = e.distanceToSquared(t[r]),
                i = Math.max(i, o);
            return this.center = e, this.radius = Math.sqrt(i), this
        },
        copy: function (e) {
            return this.center.copy(e.center), this.radius = e.radius, this
        },
        empty: function () {
            return 0 >= this.radius
        },
        containsPoint: function (e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function (e) {
            return e.distanceTo(this.center) - this.radius
        },
        clampPoint: function (e, t) {
            var i = this.center.distanceToSquared(e),
                r = t || new THREE.Vector3;
            return r.copy(e), i > this.radius * this.radius && (r.subSelf(this.center).normalize(), r.multiplyScalar(this.radius).addSelf(this.center)), r
        },
        getBoundingBox: function (e) {
            return e = e || new THREE.Box3, e.set(this.center, this.center), e.expandByScalar(this.radius), e
        },
        transform: function (e) {
            return this.center = e.multiplyVector3(this.center), this.radius *= e.getMaxScaleOnAxis(), this
        },
        translate: function (e) {
            return this.center.addSelf(e), this
        },
        equals: function (e) {
            return e.center.equals(this.center) && e.radius === this.radius
        },
        clone: function () {
            return (new THREE.Sphere).copy(this)
        }
    }, THREE.Math = {
        clamp: function (e, t, i) {
            return t > e ? t : e > i ? i : e
        },
        clampBottom: function (e, t) {
            return t > e ? t : e
        },
        mapLinear: function (e, t, i, r, n) {
            return r + (e - t) * (n - r) / (i - t)
        },
        random16: function () {
            return (65280 * Math.random() + 255 * Math.random()) / 65535
        },
        randInt: function (e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        },
        randFloat: function (e, t) {
            return e + Math.random() * (t - e)
        },
        randFloatSpread: function (e) {
            return e * (.5 - Math.random())
        },
        sign: function (e) {
            return 0 > e ? -1 : e > 0 ? 1 : 0
        },
        degToRad: function (e) {
            return e * THREE.Math.__d2r
        },
        radToDeg: function (e) {
            return e * THREE.Math.__r2d
        }
    }, THREE.Math.__d2r = Math.PI / 180, THREE.Math.__r2d = 180 / Math.PI, THREE.Quaternion = function (e, t, i, r) {
        this.x = e || 0, this.y = t || 0, this.z = i || 0, this.w = void 0 !== r ? r : 1
    }, THREE.Quaternion.prototype = {
        constructor: THREE.Quaternion,
        set: function (e, t, i, r) {
            return this.x = e, this.y = t, this.z = i, this.w = r, this
        },
        copy: function (e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
        },
        setFromEuler: function (e, t) {
            var i = Math.cos(e.x / 2),
                r = Math.cos(e.y / 2),
                n = Math.cos(e.z / 2),
                o = Math.sin(e.x / 2),
                a = Math.sin(e.y / 2),
                s = Math.sin(e.z / 2);
            return void 0 === t || "XYZ" === t ? (this.x = o * r * n + i * a * s, this.y = i * a * n - o * r * s, this.z = i * r * s + o * a * n, this.w = i * r * n - o * a * s) : "YXZ" === t ? (this.x = o * r * n + i * a * s, this.y = i * a * n - o * r * s, this.z = i * r * s - o * a * n, this.w = i * r * n + o * a * s) : "ZXY" === t ? (this.x = o * r * n - i * a * s, this.y = i * a * n + o * r * s, this.z = i * r * s + o * a * n, this.w = i * r * n - o * a * s) : "ZYX" === t ? (this.x = o * r * n - i * a * s, this.y = i * a * n + o * r * s, this.z = i * r * s - o * a * n, this.w = i * r * n + o * a * s) : "YZX" === t ? (this.x = o * r * n + i * a * s, this.y = i * a * n + o * r * s, this.z = i * r * s - o * a * n, this.w = i * r * n - o * a * s) : "XZY" === t && (this.x = o * r * n - i * a * s, this.y = i * a * n - o * r * s, this.z = i * r * s + o * a * n, this.w = i * r * n + o * a * s), this
        },
        setFromAxisAngle: function (e, t) {
            var i = t / 2,
                r = Math.sin(i);
            return this.x = e.x * r, this.y = e.y * r, this.z = e.z * r, this.w = Math.cos(i), this
        },
        setFromRotationMatrix: function (e) {
            var t = e.elements,
                i = t[0],
                e = t[4],
                r = t[8],
                n = t[1],
                o = t[5],
                a = t[9],
                s = t[2],
                l = t[6],
                t = t[10],
                h = i + o + t;
            return h > 0 ? (i = .5 / Math.sqrt(h + 1), this.w = .25 / i, this.x = (l - a) * i, this.y = (r - s) * i, this.z = (n - e) * i) : i > o && i > t ? (i = 2 * Math.sqrt(1 + i - o - t), this.w = (l - a) / i, this.x = .25 * i, this.y = (e + n) / i, this.z = (r + s) / i) : o > t ? (i = 2 * Math.sqrt(1 + o - i - t), this.w = (r - s) / i, this.x = (e + n) / i, this.y = .25 * i, this.z = (a + l) / i) : (i = 2 * Math.sqrt(1 + t - i - o), this.w = (n - e) / i, this.x = (r + s) / i, this.y = (a + l) / i, this.z = .25 * i), this
        },
        inverse: function () {
            return this.conjugate().normalize(), this
        },
        conjugate: function () {
            return this.x *= -1, this.y *= -1, this.z *= -1, this
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        normalize: function () {
            var e = this.length();
            return 0 === e ? (this.z = this.y = this.x = 0, this.w = 1) : (e = 1 / e, this.x *= e, this.y *= e, this.z *= e, this.w *= e), this
        },
        multiply: function (e, t) {
            return this.copy(e), this.multiplySelf(t)
        },
        multiplySelf: function (e) {
            var t = this.x,
                i = this.y,
                r = this.z,
                n = this.w,
                o = e.x,
                a = e.y,
                s = e.z,
                e = e.w;
            return this.x = t * e + n * o + i * s - r * a, this.y = i * e + n * a + r * o - t * s, this.z = r * e + n * s + t * a - i * o, this.w = n * e - t * o - i * a - r * s, this
        },
        multiplyVector3: function (e, t) {
            t || (t = e);
            var i = e.x,
                r = e.y,
                n = e.z,
                o = this.x,
                a = this.y,
                s = this.z,
                l = this.w,
                h = l * i + a * n - s * r,
                c = l * r + s * i - o * n,
                u = l * n + o * r - a * i,
                i = -o * i - a * r - s * n;
            return t.x = h * l + i * -o + c * -s - u * -a, t.y = c * l + i * -a + u * -o - h * -s, t.z = u * l + i * -s + h * -a - c * -o, t
        },
        slerpSelf: function (e, t) {
            var i = this.x,
                r = this.y,
                n = this.z,
                o = this.w,
                a = o * e.w + i * e.x + r * e.y + n * e.z;
            if (0 > a ? (this.w = -e.w, this.x = -e.x, this.y = -e.y, this.z = -e.z, a = -a) : this.copy(e), a >= 1) return this.w = o, this.x = i, this.y = r, this.z = n, this;
            var s = Math.acos(a),
                l = Math.sqrt(1 - a * a);
            return .001 > Math.abs(l) ? (this.w = .5 * (o + this.w), this.x = .5 * (i + this.x), this.y = .5 * (r + this.y), this.z = .5 * (n + this.z), this) : (a = Math.sin((1 - t) * s) / l, s = Math.sin(t * s) / l, this.w = o * a + this.w * s, this.x = i * a + this.x * s, this.y = r * a + this.y * s, this.z = n * a + this.z * s, this)
        },
        equals: function (e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        },
        clone: function () {
            return new THREE.Quaternion(this.x, this.y, this.z, this.w)
        }
    }, THREE.Quaternion.slerp = function (e, t, i, r) {
        return i.copy(e).slerpSelf(t, r)
    }, THREE.Spline = function (e) {
        function t(e, t, i, r, n, o, a) {
            return e = .5 * (i - e), r = .5 * (r - t), (2 * (t - i) + e + r) * a + (-3 * (t - i) - 2 * e - r) * o + e * n + t
        }
        this.points = e;
        var i, r, n, o, a, s, l, h, c, u = [],
            f = {
                x: 0,
                y: 0,
                z: 0
            };
        this.initFromArray = function (e) {
            this.points = [];
            for (var t = 0; t < e.length; t++) this.points[t] = {
                x: e[t][0],
                y: e[t][1],
                z: e[t][2]
            }
        }, this.getPoint = function (e) {
            return i = (this.points.length - 1) * e, r = Math.floor(i), n = i - r, u[0] = 0 === r ? r : r - 1, u[1] = r, u[2] = r > this.points.length - 2 ? this.points.length - 1 : r + 1, u[3] = r > this.points.length - 3 ? this.points.length - 1 : r + 2, s = this.points[u[0]], l = this.points[u[1]], h = this.points[u[2]], c = this.points[u[3]], o = n * n, a = n * o, f.x = t(s.x, l.x, h.x, c.x, n, o, a), f.y = t(s.y, l.y, h.y, c.y, n, o, a), f.z = t(s.z, l.z, h.z, c.z, n, o, a), f
        }, this.getControlPointsArray = function () {
            var e, t, i = this.points.length,
                r = [];
            for (e = 0; i > e; e++) t = this.points[e], r[e] = [t.x, t.y, t.z];
            return r
        }, this.getLength = function (e) {
            var t, i, r, n = t = t = 0,
                o = new THREE.Vector3,
                a = new THREE.Vector3,
                s = [],
                l = 0;
            for (s[0] = 0, e || (e = 100), i = this.points.length * e, o.copy(this.points[0]), e = 1; i > e; e++) t = e / i, r = this.getPoint(t), a.copy(r), l += a.distanceTo(o), o.copy(r), t *= this.points.length - 1, t = Math.floor(t), t != n && (s[t] = l, n = t);
            return s[s.length] = l, {
                chunks: s,
                total: l
            }
        }, this.reparametrizeByArcLength = function (e) {
            var t, i, r, n, o, a, s = [],
                l = new THREE.Vector3,
                h = this.getLength();
            for (s.push(l.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
                for (i = h.chunks[t] - h.chunks[t - 1], a = Math.ceil(e * i / h.total), n = (t - 1) / (this.points.length - 1), o = t / (this.points.length - 1), i = 1; a - 1 > i; i++) r = n + i * (1 / a) * (o - n), r = this.getPoint(r), s.push(l.copy(r).clone());
                s.push(l.copy(this.points[t]).clone())
            }
            this.points = s
        }
    }, THREE.Triangle = function (e, t, i) {
        this.a = new THREE.Vector3, this.b = new THREE.Vector3, this.c = new THREE.Vector3, void 0 !== e && void 0 !== t && void 0 !== i && (this.a.copy(e), this.b.copy(t), this.c.copy(i))
    }, THREE.Triangle.normal = function (e, t, i, r) {
        return r = r || new THREE.Vector3, r.sub(i, t), THREE.Triangle.__v0.sub(e, t), r.crossSelf(THREE.Triangle.__v0), e = r.lengthSq(), e > 0 ? r.multiplyScalar(1 / Math.sqrt(e)) : r.set(0, 0, 0)
    }, THREE.Triangle.barycoordFromPoint = function (e, t, i, r, n) {
        THREE.Triangle.__v0.sub(r, t), THREE.Triangle.__v1.sub(i, t), THREE.Triangle.__v2.sub(e, t);
        var e = THREE.Triangle.__v0.dot(THREE.Triangle.__v0),
            t = THREE.Triangle.__v0.dot(THREE.Triangle.__v1),
            i = THREE.Triangle.__v0.dot(THREE.Triangle.__v2),
            o = THREE.Triangle.__v1.dot(THREE.Triangle.__v1),
            r = THREE.Triangle.__v1.dot(THREE.Triangle.__v2),
            a = e * o - t * t,
            n = n || new THREE.Vector3;
        return 0 == a ? n.set(-2, -1, -1) : (a = 1 / a, o = (o * i - t * r) * a, e = (e * r - t * i) * a, n.set(1 - o - e, e, o))
    }, THREE.Triangle.containsPoint = function (e, t, i, r) {
        return e = THREE.Triangle.barycoordFromPoint(e, t, i, r, THREE.Triangle.__v3), 0 <= e.x && 0 <= e.y && 1 >= e.x + e.y
    }, THREE.Triangle.prototype = {
        constructor: THREE.Triangle,
        set: function (e, t, i) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
        },
        setFromPointsAndIndices: function (e, t, i, r) {
            return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this
        },
        copy: function (e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
        },
        area: function () {
            return THREE.Triangle.__v0.sub(this.c, this.b), THREE.Triangle.__v1.sub(this.a, this.b), .5 * THREE.Triangle.__v0.crossSelf(THREE.Triangle.__v1).length()
        },
        midpoint: function (e) {
            return (e || new THREE.Vector3).add(this.a, this.b).addSelf(this.c).multiplyScalar(1 / 3)
        },
        normal: function (e) {
            return THREE.Triangle.normal(this.a, this.b, this.c, e)
        },
        plane: function (e) {
            return (e || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function (e, t) {
            return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
        },
        containsPoint: function (e) {
            return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
        },
        equals: function (e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        },
        clone: function () {
            return (new THREE.Triangle).copy(this)
        }
    }, THREE.Triangle.__v0 = new THREE.Vector3, THREE.Triangle.__v1 = new THREE.Vector3, THREE.Triangle.__v2 = new THREE.Vector3, THREE.Triangle.__v3 = new THREE.Vector3, THREE.Vertex = function (e) {
        return e
    }, THREE.UV = function (e, t) {
        return new THREE.Vector2(e, t)
    }, THREE.Clock = function (e) {
        this.autoStart = void 0 !== e ? e : !0, this.elapsedTime = this.oldTime = this.startTime = 0, this.running = !1
    }, THREE.Clock.prototype.start = function () {
        this.oldTime = this.startTime = Date.now(), this.running = !0
    }, THREE.Clock.prototype.stop = function () {
        this.getElapsedTime(), this.running = !1
    }, THREE.Clock.prototype.getElapsedTime = function () {
        return this.getDelta(), this.elapsedTime
    }, THREE.Clock.prototype.getDelta = function () {
        var e = 0;
        if (this.autoStart && !this.running && this.start(), this.running) {
            var t = Date.now(),
                e = .001 * (t - this.oldTime);
            this.oldTime = t, this.elapsedTime += e
        }
        return e
    }, THREE.EventDispatcher = function () {
        var e = {};
        this.addEventListener = function (t, i) {
            void 0 === e[t] && (e[t] = []), -1 === e[t].indexOf(i) && e[t].push(i)
        }, this.removeEventListener = function (t, i) {
            var r = e[t].indexOf(i); - 1 !== r && e[t].splice(r, 1)
        }, this.dispatchEvent = function (t) {
            var i = e[t.type];
            if (void 0 !== i) {
                t.target = this;
                for (var r = 0, n = i.length; n > r; r++) i[r].call(this, t)
            }
        }
    },
    function (e) {
        e.Raycaster = function (t, i, r, n) {
            this.ray = new e.Ray(t, i), 0 < this.ray.direction.length() && this.ray.direction.normalize(), this.near = r || 0, this.far = n || 1 / 0
        };
        var t = new e.Sphere,
            i = new e.Ray,
            r = new e.Plane,
            n = new e.Vector3,
            o = new e.Matrix4,
            a = function (e, t) {
                return e.distance - t.distance
            };
        new e.Vector3, new e.Vector3, new e.Vector3;
        var s = function (a, s, l) {
                if (a instanceof e.Particle) {
                    if (s = s.ray.distanceToPoint(a.matrixWorld.getPosition()), s > a.scale.x) return l;
                    l.push({
                        distance: s,
                        point: a.position,
                        face: null,
                        object: a
                    })
                } else if (a instanceof e.Mesh) {
                    if (t.set(a.matrixWorld.getPosition(), a.geometry.boundingSphere.radius * a.matrixWorld.getMaxScaleOnAxis()), !s.ray.isIntersectionSphere(t)) return l;
                    var h, c, u, f = a.geometry,
                        p = f.vertices,
                        d = a.material instanceof e.MeshFaceMaterial,
                        m = !0 === d ? a.material.materials : null,
                        E = a.material.side,
                        g = s.precision;
                    a.matrixRotationWorld.extractRotation(a.matrixWorld), o.getInverse(a.matrixWorld), i.copy(s.ray).transform(o);
                    for (var v = 0, T = f.faces.length; T > v; v++) {
                        var y = f.faces[v],
                            E = !0 === d ? m[y.materialIndex] : a.material;
                        if (void 0 !== E) {
                            r.setFromNormalAndCoplanarPoint(y.normal, p[y.a]);
                            var _ = i.distanceToPlane(r);
                            if (!(Math.abs(_) < g || 0 > _)) {
                                if (E = E.side, E !== e.DoubleSide && (h = i.direction.dot(r.normal), !(E === e.FrontSide ? 0 > h : h > 0))) continue;
                                if (!(_ < s.near || _ > s.far)) {
                                    if (n = i.at(_, n), y instanceof e.Face3) {
                                        if (E = p[y.a], h = p[y.b], c = p[y.c], !e.Triangle.containsPoint(n, E, h, c)) continue
                                    } else {
                                        if (!(y instanceof e.Face4)) throw Error("face type not supported");
                                        if (E = p[y.a], h = p[y.b], c = p[y.c], u = p[y.d], !e.Triangle.containsPoint(n, E, h, u) && !e.Triangle.containsPoint(n, h, c, u)) continue
                                    }
                                    l.push({
                                        distance: _,
                                        point: s.ray.at(_),
                                        face: y,
                                        faceIndex: v,
                                        object: a
                                    })
                                }
                            }
                        }
                    }
                }
            },
            l = function (e, t, i) {
                for (var e = e.getDescendants(), r = 0, n = e.length; n > r; r++) s(e[r], t, i)
            };
        e.Raycaster.prototype.precision = 1e-4, e.Raycaster.prototype.set = function (e, t) {
            this.ray.set(e, t), 0 < this.ray.direction.length() && this.ray.direction.normalize()
        }, e.Raycaster.prototype.intersectObject = function (e, t) {
            var i = [];
            return !0 === t && l(e, this, i), s(e, this, i), i.sort(a), i
        }, e.Raycaster.prototype.intersectObjects = function (e, t) {
            for (var i = [], r = 0, n = e.length; n > r; r++) s(e[r], this, i), !0 === t && l(e[r], this, i);
            return i.sort(a), i
        }
    }(THREE), THREE.Object3D = function () {
        this.id = THREE.Object3DIdCount++, this.name = "", this.properties = {}, this.parent = void 0, this.children = [], this.up = new THREE.Vector3(0, 1, 0), this.position = new THREE.Vector3, this.rotation = new THREE.Vector3, this.eulerOrder = THREE.Object3D.defaultEulerOrder, this.scale = new THREE.Vector3(1, 1, 1), this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixRotationWorld = new THREE.Matrix4, this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0, this.quaternion = new THREE.Quaternion, this.useQuaternion = !1, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this._vector = new THREE.Vector3
    }, THREE.Object3D.prototype = {
        constructor: THREE.Object3D,
        applyMatrix: function (e) {
            this.matrix.multiply(e, this.matrix), this.scale.getScaleFromMatrix(this.matrix), e = (new THREE.Matrix4).extractRotation(this.matrix), this.rotation.setEulerFromRotationMatrix(e, this.eulerOrder), this.position.getPositionFromMatrix(this.matrix)
        },
        translate: function (e, t) {
            this.matrix.rotateAxis(t), this.position.addSelf(t.multiplyScalar(e))
        },
        translateX: function (e) {
            this.translate(e, this._vector.set(1, 0, 0))
        },
        translateY: function (e) {
            this.translate(e, this._vector.set(0, 1, 0))
        },
        translateZ: function (e) {
            this.translate(e, this._vector.set(0, 0, 1))
        },
        localToWorld: function (e) {
            return this.matrixWorld.multiplyVector3(e)
        },
        worldToLocal: function (e) {
            return THREE.Object3D.__m1.getInverse(this.matrixWorld).multiplyVector3(e)
        },
        lookAt: function (e) {
            this.matrix.lookAt(e, this.position, this.up), this.rotationAutoUpdate && (!1 === this.useQuaternion ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1]))
        },
        add: function (e) {
            if (e === this);
            else if (e instanceof THREE.Object3D) {
                void 0 !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e);
                for (var t = this; void 0 !== t.parent;) t = t.parent;
                void 0 !== t && t instanceof THREE.Scene && t.__addObject(e)
            }
        },
        remove: function (e) {
            var t = this.children.indexOf(e);
            if (-1 !== t) {
                for (e.parent = void 0, this.children.splice(t, 1), t = this; void 0 !== t.parent;) t = t.parent;
                void 0 !== t && t instanceof THREE.Scene && t.__removeObject(e)
            }
        },
        traverse: function (e) {
            e(this);
            for (var t = 0, i = this.children.length; i > t; t++) this.children[t].traverse(e)
        },
        getChildByName: function (e, t) {
            for (var i = 0, r = this.children.length; r > i; i++) {
                var n = this.children[i];
                if (n.name === e || !0 === t && (n = n.getChildByName(e, t), void 0 !== n)) return n
            }
        },
        getDescendants: function (e) {
            void 0 === e && (e = []), Array.prototype.push.apply(e, this.children);
            for (var t = 0, i = this.children.length; i > t; t++) this.children[t].getDescendants(e);
            return e
        },
        updateMatrix: function () {
            this.matrix.setPosition(this.position), !1 === this.useQuaternion ? this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder) : this.matrix.setRotationFromQuaternion(this.quaternion), (1 !== this.scale.x || 1 !== this.scale.y || 1 !== this.scale.z) && this.matrix.scale(this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function (e) {
            !0 === this.matrixAutoUpdate && this.updateMatrix(), !0 !== this.matrixWorldNeedsUpdate && !0 !== e || (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
            for (var t = 0, i = this.children.length; i > t; t++) this.children[t].updateMatrixWorld(e)
        },
        clone: function (e) {
            void 0 === e && (e = new THREE.Object3D), e.name = this.name, e.up.copy(this.up), e.position.copy(this.position), e.rotation instanceof THREE.Vector3 && e.rotation.copy(this.rotation), e.eulerOrder = this.eulerOrder, e.scale.copy(this.scale), e.renderDepth = this.renderDepth, e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.matrixWorld.copy(this.matrixWorld), e.matrixRotationWorld.copy(this.matrixRotationWorld), e.matrixAutoUpdate = this.matrixAutoUpdate, e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, e.quaternion.copy(this.quaternion), e.useQuaternion = this.useQuaternion, e.visible = this.visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled;
            for (var t = 0; t < this.children.length; t++) e.add(this.children[t].clone());
            return e
        }
    }, THREE.Object3D.__m1 = new THREE.Matrix4, THREE.Object3D.defaultEulerOrder = "XYZ", THREE.Object3DIdCount = 0, THREE.Projector = function () {
        function e() {
            if (o === E) {
                var e = new THREE.RenderableObject;
                return m.push(e), E++, o++, e
            }
            return m[o++]
        }

        function t() {
            if (s === v) {
                var e = new THREE.RenderableVertex;
                return g.push(e), v++, s++, e
            }
            return g[s++]
        }

        function i(e, t) {
            return t.z - e.z
        }

        function r(e, t) {
            var i = 0,
                r = 1,
                n = e.z + e.w,
                o = t.z + t.w,
                a = -e.z + e.w,
                s = -t.z + t.w;
            return n >= 0 && o >= 0 && a >= 0 && s >= 0 ? !0 : 0 > n && 0 > o || 0 > a && 0 > s ? !1 : (0 > n ? i = Math.max(i, n / (n - o)) : 0 > o && (r = Math.min(r, n / (n - o))), 0 > a ? i = Math.max(i, a / (a - s)) : 0 > s && (r = Math.min(r, a / (a - s))), i > r ? !1 : (e.lerpSelf(t, i), t.lerpSelf(e, 1 - r), !0))
        }
        var n, o, a, s, l, h, c, u, f, p, d, m = [],
            E = 0,
            g = [],
            v = 0,
            T = [],
            y = 0,
            _ = [],
            R = 0,
            x = [],
            b = 0,
            w = [],
            H = 0,
            S = {
                objects: [],
                sprites: [],
                lights: [],
                elements: []
            },
            M = new THREE.Vector3,
            C = new THREE.Vector4,
            A = new THREE.Matrix4,
            P = new THREE.Matrix4,
            L = new THREE.Matrix3,
            F = new THREE.Frustum,
            D = new THREE.Vector4,
            z = new THREE.Vector4;
        this.projectVector = function (e, t) {
            return t.matrixWorldInverse.getInverse(t.matrixWorld),
                A.multiply(t.projectionMatrix, t.matrixWorldInverse), A.multiplyVector3(e), e
        }, this.unprojectVector = function (e, t) {
            return t.projectionMatrixInverse.getInverse(t.projectionMatrix), A.multiply(t.matrixWorld, t.projectionMatrixInverse), A.multiplyVector3(e), e
        }, this.pickingRay = function (e, t) {
            e.z = -1;
            var i = new THREE.Vector3(e.x, e.y, 1);
            return this.unprojectVector(e, t), this.unprojectVector(i, t), i.subSelf(e).normalize(), new THREE.Raycaster(e, i)
        }, this.projectScene = function (m, E, v, U) {
            var N, O, B, V, k, I, G, W, j, X, Y, q, K, $, Z, Q = E.near,
                J = E.far,
                ee = !1;
            d = f = c = h = 0, S.elements.length = 0, m.updateMatrixWorld(), void 0 === E.parent && E.updateMatrixWorld(), E.matrixWorldInverse.getInverse(E.matrixWorld), A.multiply(E.projectionMatrix, E.matrixWorldInverse), F.setFromMatrix(A), o = 0, S.objects.length = 0, S.sprites.length = 0, S.lights.length = 0;
            var te = function (t) {
                for (var i = 0, r = t.children.length; r > i; i++) {
                    var o = t.children[i];
                    !1 !== o.visible && (o instanceof THREE.Light ? S.lights.push(o) : o instanceof THREE.Mesh || o instanceof THREE.Line ? !1 !== o.frustumCulled && !0 !== F.contains(o) || (n = e(), n.object = o, null !== o.renderDepth ? n.z = o.renderDepth : (M.copy(o.matrixWorld.getPosition()), A.multiplyVector3(M), n.z = M.z), S.objects.push(n)) : o instanceof THREE.Sprite || o instanceof THREE.Particle ? (n = e(), n.object = o, null !== o.renderDepth ? n.z = o.renderDepth : (M.copy(o.matrixWorld.getPosition()), A.multiplyVector3(M), n.z = M.z), S.sprites.push(n)) : (n = e(), n.object = o, null !== o.renderDepth ? n.z = o.renderDepth : (M.copy(o.matrixWorld.getPosition()), A.multiplyVector3(M), n.z = M.z), S.objects.push(n)), te(o))
                }
            };
            for (te(m), !0 === v && S.objects.sort(i), m = 0, v = S.objects.length; v > m; m++)
                if (W = S.objects[m].object, j = W.matrixWorld, s = 0, W instanceof THREE.Mesh) {
                    for (X = W.geometry, B = X.vertices, Y = X.faces, X = X.faceVertexUvs, L.getInverse(j), L.transpose(), K = W.material instanceof THREE.MeshFaceMaterial, $ = !0 === K ? W.material : null, N = 0, O = B.length; O > N; N++) a = t(), a.positionWorld.copy(B[N]), j.multiplyVector3(a.positionWorld), a.positionScreen.copy(a.positionWorld), A.multiplyVector4(a.positionScreen), a.positionScreen.x /= a.positionScreen.w, a.positionScreen.y /= a.positionScreen.w, a.visible = a.positionScreen.z > Q && a.positionScreen.z < J;
                    for (B = 0, N = Y.length; N > B; B++)
                        if (O = Y[B], Z = !0 === K ? $.materials[O.materialIndex] : W.material, void 0 !== Z) {
                            if (I = Z.side, O instanceof THREE.Face3) {
                                if (V = g[O.a], k = g[O.b], G = g[O.c], !0 !== V.visible || !0 !== k.visible || !0 !== G.visible) continue;
                                if (ee = 0 > (G.positionScreen.x - V.positionScreen.x) * (k.positionScreen.y - V.positionScreen.y) - (G.positionScreen.y - V.positionScreen.y) * (k.positionScreen.x - V.positionScreen.x), I !== THREE.DoubleSide && ee !== (I === THREE.FrontSide)) continue;
                                h === y ? (q = new THREE.RenderableFace3, T.push(q), y++, h++, l = q) : l = T[h++], l.v1.copy(V), l.v2.copy(k), l.v3.copy(G)
                            } else if (O instanceof THREE.Face4) {
                                if (V = g[O.a], k = g[O.b], G = g[O.c], q = g[O.d], !0 !== V.visible || !0 !== k.visible || !0 !== G.visible || !0 !== q.visible) continue;
                                if (ee = 0 > (q.positionScreen.x - V.positionScreen.x) * (k.positionScreen.y - V.positionScreen.y) - (q.positionScreen.y - V.positionScreen.y) * (k.positionScreen.x - V.positionScreen.x) || 0 > (k.positionScreen.x - G.positionScreen.x) * (q.positionScreen.y - G.positionScreen.y) - (k.positionScreen.y - G.positionScreen.y) * (q.positionScreen.x - G.positionScreen.x), I !== THREE.DoubleSide && ee !== (I === THREE.FrontSide)) continue;
                                if (c === R) {
                                    var ie = new THREE.RenderableFace4;
                                    _.push(ie), R++, c++, l = ie
                                } else l = _[c++];
                                l.v1.copy(V), l.v2.copy(k), l.v3.copy(G), l.v4.copy(q)
                            }
                            for (l.normalWorld.copy(O.normal), !1 === ee && (I === THREE.BackSide || I === THREE.DoubleSide) && l.normalWorld.negate(), L.multiplyVector3(l.normalWorld).normalize(), l.centroidWorld.copy(O.centroid), j.multiplyVector3(l.centroidWorld), l.centroidScreen.copy(l.centroidWorld), A.multiplyVector3(l.centroidScreen), G = O.vertexNormals, V = 0, k = G.length; k > V; V++) q = l.vertexNormalsWorld[V], q.copy(G[V]), !1 === ee && (I === THREE.BackSide || I === THREE.DoubleSide) && q.negate(), L.multiplyVector3(q).normalize();
                            for (l.vertexNormalsLength = G.length, V = 0, k = X.length; k > V; V++)
                                if (q = X[V][B], void 0 !== q)
                                    for (I = 0, G = q.length; G > I; I++) l.uvs[V][I] = q[I];
                            l.color = O.color, l.material = Z, l.z = l.centroidScreen.z, S.elements.push(l)
                        }
                } else if (W instanceof THREE.Line)
                for (P.multiply(A, j), B = W.geometry.vertices, V = t(), V.positionScreen.copy(B[0]), P.multiplyVector4(V.positionScreen), j = W.type === THREE.LinePieces ? 2 : 1, N = 1, O = B.length; O > N; N++) V = t(), V.positionScreen.copy(B[N]), P.multiplyVector4(V.positionScreen), (N + 1) % j > 0 || (k = g[s - 2], D.copy(V.positionScreen), z.copy(k.positionScreen), !0 === r(D, z) && (D.multiplyScalar(1 / D.w), z.multiplyScalar(1 / z.w), f === b ? (Y = new THREE.RenderableLine, x.push(Y), b++, f++, u = Y) : u = x[f++], u.v1.positionScreen.copy(D), u.v2.positionScreen.copy(z), u.z = Math.max(D.z, z.z), u.material = W.material, S.elements.push(u)));
            for (m = 0, v = S.sprites.length; v > m; m++) W = S.sprites[m].object, j = W.matrixWorld, W instanceof THREE.Particle && (C.set(j.elements[12], j.elements[13], j.elements[14], 1), A.multiplyVector4(C), C.z /= C.w, 0 < C.z && 1 > C.z && (d === H ? (Q = new THREE.RenderableParticle, w.push(Q), H++, d++, p = Q) : p = w[d++], p.object = W, p.x = C.x / C.w, p.y = C.y / C.w, p.z = C.z, p.rotation = W.rotation.z, p.scale.x = W.scale.x * Math.abs(p.x - (C.x + E.projectionMatrix.elements[0]) / (C.w + E.projectionMatrix.elements[12])), p.scale.y = W.scale.y * Math.abs(p.y - (C.y + E.projectionMatrix.elements[5]) / (C.w + E.projectionMatrix.elements[13])), p.material = W.material, S.elements.push(p)));
            return !0 === U && S.elements.sort(i), S
        }
    }, THREE.Face3 = function (e, t, i, r, n, o) {
        this.a = e, this.b = t, this.c = i, this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3, this.vertexNormals = r instanceof Array ? r : [], this.color = n instanceof THREE.Color ? n : new THREE.Color, this.vertexColors = n instanceof Array ? n : [], this.vertexTangents = [], this.materialIndex = void 0 !== o ? o : 0, this.centroid = new THREE.Vector3
    }, THREE.Face3.prototype = {
        constructor: THREE.Face3,
        clone: function () {
            var e = new THREE.Face3(this.a, this.b, this.c);
            e.normal.copy(this.normal), e.color.copy(this.color), e.centroid.copy(this.centroid), e.materialIndex = this.materialIndex;
            var t, i;
            for (t = 0, i = this.vertexNormals.length; i > t; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
            for (t = 0, i = this.vertexColors.length; i > t; t++) e.vertexColors[t] = this.vertexColors[t].clone();
            for (t = 0, i = this.vertexTangents.length; i > t; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
            return e
        }
    }, THREE.Face4 = function (e, t, i, r, n, o, a) {
        this.a = e, this.b = t, this.c = i, this.d = r, this.normal = n instanceof THREE.Vector3 ? n : new THREE.Vector3, this.vertexNormals = n instanceof Array ? n : [], this.color = o instanceof THREE.Color ? o : new THREE.Color, this.vertexColors = o instanceof Array ? o : [], this.vertexTangents = [], this.materialIndex = void 0 !== a ? a : 0, this.centroid = new THREE.Vector3
    }, THREE.Face4.prototype = {
        constructor: THREE.Face4,
        clone: function () {
            var e = new THREE.Face4(this.a, this.b, this.c, this.d);
            e.normal.copy(this.normal), e.color.copy(this.color), e.centroid.copy(this.centroid), e.materialIndex = this.materialIndex;
            var t, i;
            for (t = 0, i = this.vertexNormals.length; i > t; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
            for (t = 0, i = this.vertexColors.length; i > t; t++) e.vertexColors[t] = this.vertexColors[t].clone();
            for (t = 0, i = this.vertexTangents.length; i > t; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
            return e
        }
    }, THREE.Geometry = function () {
        THREE.EventDispatcher.call(this), this.id = THREE.GeometryIdCount++, this.name = "", this.vertices = [], this.colors = [], this.normals = [], this.faces = [], this.faceUvs = [[]], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.hasTangents = !1, this.dynamic = !0, this.buffersNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.tangentsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
    }, THREE.Geometry.prototype = {
        constructor: THREE.Geometry,
        applyMatrix: function (e) {
            var t = new THREE.Matrix3;
            t.getInverse(e).transpose();
            for (var i = 0, r = this.vertices.length; r > i; i++) e.multiplyVector3(this.vertices[i]);
            for (i = 0, r = this.faces.length; r > i; i++) {
                var n = this.faces[i];
                t.multiplyVector3(n.normal).normalize();
                for (var o = 0, a = n.vertexNormals.length; a > o; o++) t.multiplyVector3(n.vertexNormals[o]).normalize();
                e.multiplyVector3(n.centroid)
            }
        },
        computeCentroids: function () {
            var e, t, i;
            for (e = 0, t = this.faces.length; t > e; e++) i = this.faces[e], i.centroid.set(0, 0, 0), i instanceof THREE.Face3 ? (i.centroid.addSelf(this.vertices[i.a]), i.centroid.addSelf(this.vertices[i.b]), i.centroid.addSelf(this.vertices[i.c]), i.centroid.divideScalar(3)) : i instanceof THREE.Face4 && (i.centroid.addSelf(this.vertices[i.a]), i.centroid.addSelf(this.vertices[i.b]), i.centroid.addSelf(this.vertices[i.c]), i.centroid.addSelf(this.vertices[i.d]), i.centroid.divideScalar(4))
        },
        computeFaceNormals: function () {
            var e, t, i, r, n, o, a = new THREE.Vector3,
                s = new THREE.Vector3;
            for (e = 0, t = this.faces.length; t > e; e++) i = this.faces[e], r = this.vertices[i.a], n = this.vertices[i.b], o = this.vertices[i.c], a.sub(o, n), s.sub(r, n), a.crossSelf(s), a.normalize(), i.normal.copy(a)
        },
        computeVertexNormals: function (e) {
            var t, i, r, n;
            if (void 0 === this.__tmpVertices) {
                for (n = this.__tmpVertices = Array(this.vertices.length), t = 0, i = this.vertices.length; i > t; t++) n[t] = new THREE.Vector3;
                for (t = 0, i = this.faces.length; i > t; t++) r = this.faces[t], r instanceof THREE.Face3 ? r.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3] : r instanceof THREE.Face4 && (r.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3])
            } else
                for (n = this.__tmpVertices, t = 0, i = this.vertices.length; i > t; t++) n[t].set(0, 0, 0);
            if (e) {
                var o, a, s, l = new THREE.Vector3,
                    h = new THREE.Vector3,
                    c = new THREE.Vector3,
                    u = new THREE.Vector3,
                    f = new THREE.Vector3;
                for (t = 0, i = this.faces.length; i > t; t++) r = this.faces[t], r instanceof THREE.Face3 ? (e = this.vertices[r.a], o = this.vertices[r.b], a = this.vertices[r.c], l.sub(a, o), h.sub(e, o), l.crossSelf(h), n[r.a].addSelf(l), n[r.b].addSelf(l), n[r.c].addSelf(l)) : r instanceof THREE.Face4 && (e = this.vertices[r.a], o = this.vertices[r.b], a = this.vertices[r.c], s = this.vertices[r.d], c.sub(s, o), h.sub(e, o), c.crossSelf(h), n[r.a].addSelf(c), n[r.b].addSelf(c), n[r.d].addSelf(c), u.sub(s, a), f.sub(o, a), u.crossSelf(f), n[r.b].addSelf(u), n[r.c].addSelf(u), n[r.d].addSelf(u))
            } else
                for (t = 0, i = this.faces.length; i > t; t++) r = this.faces[t], r instanceof THREE.Face3 ? (n[r.a].addSelf(r.normal), n[r.b].addSelf(r.normal), n[r.c].addSelf(r.normal)) : r instanceof THREE.Face4 && (n[r.a].addSelf(r.normal), n[r.b].addSelf(r.normal), n[r.c].addSelf(r.normal), n[r.d].addSelf(r.normal));
            for (t = 0, i = this.vertices.length; i > t; t++) n[t].normalize();
            for (t = 0, i = this.faces.length; i > t; t++) r = this.faces[t], r instanceof THREE.Face3 ? (r.vertexNormals[0].copy(n[r.a]), r.vertexNormals[1].copy(n[r.b]), r.vertexNormals[2].copy(n[r.c])) : r instanceof THREE.Face4 && (r.vertexNormals[0].copy(n[r.a]), r.vertexNormals[1].copy(n[r.b]), r.vertexNormals[2].copy(n[r.c]), r.vertexNormals[3].copy(n[r.d]))
        },
        computeMorphNormals: function () {
            var e, t, i, r, n;
            for (i = 0, r = this.faces.length; r > i; i++)
                for (n = this.faces[i], n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []), e = 0, t = n.vertexNormals.length; t > e; e++) n.__originalVertexNormals[e] ? n.__originalVertexNormals[e].copy(n.vertexNormals[e]) : n.__originalVertexNormals[e] = n.vertexNormals[e].clone();
            var o = new THREE.Geometry;
            for (o.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                    var a, s, l = this.morphNormals[e].faceNormals,
                        h = this.morphNormals[e].vertexNormals;
                    for (i = 0, r = this.faces.length; r > i; i++) n = this.faces[i], a = new THREE.Vector3, s = n instanceof THREE.Face3 ? {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3
                    } : {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3,
                        d: new THREE.Vector3
                    }, l.push(a), h.push(s)
                }
                for (l = this.morphNormals[e], o.vertices = this.morphTargets[e].vertices, o.computeFaceNormals(), o.computeVertexNormals(), i = 0, r = this.faces.length; r > i; i++) n = this.faces[i], a = l.faceNormals[i], s = l.vertexNormals[i], a.copy(n.normal), n instanceof THREE.Face3 ? (s.a.copy(n.vertexNormals[0]), s.b.copy(n.vertexNormals[1]), s.c.copy(n.vertexNormals[2])) : (s.a.copy(n.vertexNormals[0]), s.b.copy(n.vertexNormals[1]), s.c.copy(n.vertexNormals[2]), s.d.copy(n.vertexNormals[3]))
            }
            for (i = 0, r = this.faces.length; r > i; i++) n = this.faces[i], n.normal = n.__originalFaceNormal, n.vertexNormals = n.__originalVertexNormals
        },
        computeTangents: function () {
            function e(e, t, i, r, n, o, b) {
                s = e.vertices[t], l = e.vertices[i], h = e.vertices[r], c = a[n], u = a[o], f = a[b], p = l.x - s.x, d = h.x - s.x, m = l.y - s.y, E = h.y - s.y, g = l.z - s.z, v = h.z - s.z, T = u.x - c.x, y = f.x - c.x, _ = u.y - c.y, R = f.y - c.y, x = 1 / (T * R - y * _), S.set((R * p - _ * d) * x, (R * m - _ * E) * x, (R * g - _ * v) * x), M.set((T * d - y * p) * x, (T * E - y * m) * x, (T * v - y * g) * x), w[t].addSelf(S), w[i].addSelf(S), w[r].addSelf(S), H[t].addSelf(M), H[i].addSelf(M), H[r].addSelf(M)
            }
            var t, i, r, n, o, a, s, l, h, c, u, f, p, d, m, E, g, v, T, y, _, R, x, b, w = [],
                H = [],
                S = new THREE.Vector3,
                M = new THREE.Vector3,
                C = new THREE.Vector3,
                A = new THREE.Vector3,
                P = new THREE.Vector3;
            for (t = 0, i = this.vertices.length; i > t; t++) w[t] = new THREE.Vector3, H[t] = new THREE.Vector3;
            for (t = 0, i = this.faces.length; i > t; t++) o = this.faces[t], a = this.faceVertexUvs[0][t], o instanceof THREE.Face3 ? e(this, o.a, o.b, o.c, 0, 1, 2) : o instanceof THREE.Face4 && (e(this, o.a, o.b, o.d, 0, 1, 3), e(this, o.b, o.c, o.d, 1, 2, 3));
            var L = ["a", "b", "c", "d"];
            for (t = 0, i = this.faces.length; i > t; t++)
                for (o = this.faces[t], r = 0; r < o.vertexNormals.length; r++) P.copy(o.vertexNormals[r]), n = o[L[r]], b = w[n], C.copy(b), C.subSelf(P.multiplyScalar(P.dot(b))).normalize(), A.cross(o.vertexNormals[r], b), n = A.dot(H[n]), n = 0 > n ? -1 : 1, o.vertexTangents[r] = new THREE.Vector4(C.x, C.y, C.z, n);
            this.hasTangents = !0
        },
        computeLineDistances: function () {
            for (var e = 0, t = this.vertices, i = 0, r = t.length; r > i; i++) i > 0 && (e += t[i].distanceTo(t[i - 1])), this.lineDistances[i] = e
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function () {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromCenterAndPoints(this.boundingSphere.center, this.vertices)
        },
        mergeVertices: function () {
            var e, t, i, r, n, o = {},
                a = [],
                s = [],
                l = Math.pow(10, 4);
            for (t = 0, i = this.vertices.length; i > t; t++) e = this.vertices[t], e = [Math.round(e.x * l), Math.round(e.y * l), Math.round(e.z * l)].join("_"), void 0 === o[e] ? (o[e] = t, a.push(this.vertices[t]), s[t] = a.length - 1) : s[t] = s[o[e]];
            for (t = 0, i = this.faces.length; i > t; t++)
                if (o = this.faces[t], o instanceof THREE.Face3) o.a = s[o.a], o.b = s[o.b], o.c = s[o.c];
                else if (o instanceof THREE.Face4)
                for (o.a = s[o.a], o.b = s[o.b], o.c = s[o.c], o.d = s[o.d], e = [o.a, o.b, o.c, o.d], l = 3; l > 0; l--)
                    if (e.indexOf(o["abcd" [l]]) !== l) {
                        for (e.splice(l, 1), this.faces[t] = new THREE.Face3(e[0], e[1], e[2], o.normal, o.color, o.materialIndex), e = 0, r = this.faceVertexUvs.length; r > e; e++)(n = this.faceVertexUvs[e][t]) && n.splice(l, 1);
                        this.faces[t].vertexColors = o.vertexColors;
                        break
                    }
            return s = this.vertices.length - a.length, this.vertices = a, s
        },
        clone: function () {
            for (var e = new THREE.Geometry, t = this.vertices, i = 0, r = t.length; r > i; i++) e.vertices.push(t[i].clone());
            for (t = this.faces, i = 0, r = t.length; r > i; i++) e.faces.push(t[i].clone());
            for (t = this.faceVertexUvs[0], i = 0, r = t.length; r > i; i++) {
                for (var n = t[i], o = [], a = 0, s = n.length; s > a; a++) o.push(new THREE.Vector2(n[a].x, n[a].y));
                e.faceVertexUvs[0].push(o)
            }
            return e
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.GeometryIdCount = 0, THREE.BufferGeometry = function () {
        THREE.EventDispatcher.call(this), this.id = THREE.GeometryIdCount++, this.attributes = {}, this.dynamic = !1, this.offsets = [], this.boundingSphere = this.boundingBox = null, this.hasTangents = !1, this.morphTargets = []
    }, THREE.BufferGeometry.prototype = {
        constructor: THREE.BufferGeometry,
        applyMatrix: function (e) {
            var t, i;
            this.attributes.position && (t = this.attributes.position.array), this.attributes.normal && (i = this.attributes.normal.array), void 0 !== t && (e.multiplyVector3Array(t), this.verticesNeedUpdate = !0), void 0 !== i && (t = new THREE.Matrix3, t.getInverse(e).transpose(), t.multiplyVector3Array(i), this.normalizeNormals(), this.normalsNeedUpdate = !0)
        },
        computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var e = this.attributes.position.array;
            if (e) {
                var t, i, r, n = this.boundingBox;
                3 <= e.length && (n.min.x = n.max.x = e[0], n.min.y = n.max.y = e[1], n.min.z = n.max.z = e[2]);
                for (var o = 3, a = e.length; a > o; o += 3) t = e[o], i = e[o + 1], r = e[o + 2], t < n.min.x ? n.min.x = t : t > n.max.x && (n.max.x = t), i < n.min.y ? n.min.y = i : i > n.max.y && (n.max.y = i), r < n.min.z ? n.min.z = r : r > n.max.z && (n.max.z = r)
            }
            void 0 !== e && 0 !== e.length || (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0))
        },
        computeBoundingSphere: function () {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var e = this.attributes.position.array;
            if (e) {
                for (var t, i, r, n = 0, o = 0, a = e.length; a > o; o += 3) t = e[o], i = e[o + 1], r = e[o + 2], t = t * t + i * i + r * r, t > n && (n = t);
                this.boundingSphere.radius = Math.sqrt(n)
            }
        },
        computeVertexNormals: function () {
            if (this.attributes.position) {
                var e, t, i, r;
                if (e = this.attributes.position.array.length, void 0 === this.attributes.normal) this.attributes.normal = {
                    itemSize: 3,
                    array: new Float32Array(e),
                    numItems: e
                };
                else
                    for (e = 0, t = this.attributes.normal.array.length; t > e; e++) this.attributes.normal.array[e] = 0;
                var n, o, a, s, l, h, c = this.attributes.position.array,
                    u = this.attributes.normal.array,
                    f = new THREE.Vector3,
                    p = new THREE.Vector3,
                    d = new THREE.Vector3,
                    m = new THREE.Vector3,
                    E = new THREE.Vector3;
                if (this.attributes.index) {
                    var g = this.attributes.index.array,
                        v = this.offsets;
                    for (i = 0, r = v.length; r > i; ++i) {
                        t = v[i].start, n = v[i].count;
                        var T = v[i].index;
                        for (e = t, t += n; t > e; e += 3) n = T + g[e], o = T + g[e + 1], a = T + g[e + 2], s = c[3 * n], l = c[3 * n + 1], h = c[3 * n + 2], f.set(s, l, h), s = c[3 * o], l = c[3 * o + 1], h = c[3 * o + 2], p.set(s, l, h), s = c[3 * a], l = c[3 * a + 1], h = c[3 * a + 2], d.set(s, l, h), m.sub(d, p), E.sub(f, p), m.crossSelf(E), u[3 * n] += m.x, u[3 * n + 1] += m.y, u[3 * n + 2] += m.z, u[3 * o] += m.x, u[3 * o + 1] += m.y, u[3 * o + 2] += m.z, u[3 * a] += m.x, u[3 * a + 1] += m.y, u[3 * a + 2] += m.z
                    }
                } else
                    for (e = 0, t = c.length; t > e; e += 9) s = c[e], l = c[e + 1], h = c[e + 2], f.set(s, l, h), s = c[e + 3], l = c[e + 4], h = c[e + 5], p.set(s, l, h), s = c[e + 6], l = c[e + 7], h = c[e + 8], d.set(s, l, h), m.sub(d, p), E.sub(f, p), m.crossSelf(E), u[e] = m.x, u[e + 1] = m.y, u[e + 2] = m.z, u[e + 3] = m.x, u[e + 4] = m.y, u[e + 5] = m.z, u[e + 6] = m.x, u[e + 7] = m.y, u[e + 8] = m.z;
                this.normalizeNormals(), this.normalsNeedUpdate = !0
            }
        },
        normalizeNormals: function () {
            for (var e, t, i, r = this.attributes.normal.array, n = 0, o = r.length; o > n; n += 3) e = r[n], t = r[n + 1], i = r[n + 2], e = 1 / Math.sqrt(e * e + t * t + i * i), r[n] *= e, r[n + 1] *= e, r[n + 2] *= e
        },
        computeTangents: function () {
            function e(e) {
                B.x = r[3 * e], B.y = r[3 * e + 1], B.z = r[3 * e + 2], V.copy(B), z = l[e], N.copy(z), N.subSelf(B.multiplyScalar(B.dot(z))).normalize(), O.cross(V, z), U = O.dot(h[e]), D = 0 > U ? -1 : 1, s[4 * e] = N.x, s[4 * e + 1] = N.y, s[4 * e + 2] = N.z, s[4 * e + 3] = D
            }
            if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv);
            else {
                var t = this.attributes.index.array,
                    i = this.attributes.position.array,
                    r = this.attributes.normal.array,
                    n = this.attributes.uv.array,
                    o = i.length / 3;
                if (void 0 === this.attributes.tangent) {
                    var a = 4 * o;
                    this.attributes.tangent = {
                        itemSize: 4,
                        array: new Float32Array(a),
                        numItems: a
                    }
                }
                for (var s = this.attributes.tangent.array, l = [], h = [], a = 0; o > a; a++) l[a] = new THREE.Vector3, h[a] = new THREE.Vector3;
                var c, u, f, p, d, m, E, g, v, T, y, _, R, x, b, w, H, S, M, C, A, P, o = new THREE.Vector3,
                    a = new THREE.Vector3,
                    L = this.offsets;
                for (S = 0, M = L.length; M > S; ++S) {
                    H = L[S].start, C = L[S].count;
                    var F = L[S].index;
                    for (w = H, H += C; H > w; w += 3) C = F + t[w], A = F + t[w + 1], P = F + t[w + 2], c = i[3 * C], u = i[3 * C + 1], f = i[3 * C + 2], p = i[3 * A], d = i[3 * A + 1], m = i[3 * A + 2], E = i[3 * P], g = i[3 * P + 1], v = i[3 * P + 2], T = n[2 * C], y = n[2 * C + 1], _ = n[2 * A], R = n[2 * A + 1], x = n[2 * P], b = n[2 * P + 1], p -= c, c = E - c, d -= u, u = g - u, m -= f, f = v - f, _ -= T, T = x - T, R -= y, y = b - y, b = 1 / (_ * y - T * R), o.set((y * p - R * c) * b, (y * d - R * u) * b, (y * m - R * f) * b), a.set((_ * c - T * p) * b, (_ * u - T * d) * b, (_ * f - T * m) * b), l[C].addSelf(o), l[A].addSelf(o), l[P].addSelf(o), h[C].addSelf(a), h[A].addSelf(a), h[P].addSelf(a)
                }
                var D, z, U, N = new THREE.Vector3,
                    O = new THREE.Vector3,
                    B = new THREE.Vector3,
                    V = new THREE.Vector3;
                for (S = 0, M = L.length; M > S; ++S)
                    for (H = L[S].start, C = L[S].count, F = L[S].index, w = H, H += C; H > w; w += 3) C = F + t[w], A = F + t[w + 1], P = F + t[w + 2], e(C), e(A), e(P);
                this.tangentsNeedUpdate = this.hasTangents = !0
            }
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.Camera = function () {
        THREE.Object3D.call(this), this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4, this.projectionMatrixInverse = new THREE.Matrix4
    }, THREE.Camera.prototype = Object.create(THREE.Object3D.prototype), THREE.Camera.prototype.lookAt = function (e) {
        this.matrix.lookAt(this.position, e, this.up), !0 === this.rotationAutoUpdate && (!1 === this.useQuaternion ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1]))
    }, THREE.OrthographicCamera = function (e, t, i, r, n, o) {
        THREE.Camera.call(this), this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = void 0 !== n ? n : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
    }, THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype), THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
        this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
    }, THREE.PerspectiveCamera = function (e, t, i, r) {
        THREE.Camera.call(this), this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== r ? r : 2e3, this.updateProjectionMatrix()
    }, THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype), THREE.PerspectiveCamera.prototype.setLens = function (e, t) {
        void 0 === t && (t = 24), this.fov = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
    }, THREE.PerspectiveCamera.prototype.setViewOffset = function (e, t, i, r, n, o) {
        this.fullWidth = e, this.fullHeight = t, this.x = i, this.y = r, this.width = n, this.height = o, this.updateProjectionMatrix()
    }, THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
        if (this.fullWidth) {
            var e = this.fullWidth / this.fullHeight,
                t = Math.tan(THREE.Math.degToRad(.5 * this.fov)) * this.near,
                i = -t,
                r = e * i,
                e = Math.abs(e * t - r),
                i = Math.abs(t - i);
            this.projectionMatrix.makeFrustum(r + this.x * e / this.fullWidth, r + (this.x + this.width) * e / this.fullWidth, t - (this.y + this.height) * i / this.fullHeight, t - this.y * i / this.fullHeight, this.near, this.far)
        } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
    }, THREE.Light = function (e) {
        THREE.Object3D.call(this), this.color = new THREE.Color(e)
    }, THREE.Light.prototype = Object.create(THREE.Object3D.prototype), THREE.AmbientLight = function (e) {
        THREE.Light.call(this, e)
    }, THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype), THREE.AreaLight = function (e, t) {
        THREE.Light.call(this, e), this.normal = new THREE.Vector3(0, -1, 0), this.right = new THREE.Vector3(1, 0, 0), this.intensity = void 0 !== t ? t : 1, this.height = this.width = 1, this.constantAttenuation = 1.5, this.linearAttenuation = .5, this.quadraticAttenuation = .1
    }, THREE.AreaLight.prototype = Object.create(THREE.Light.prototype), THREE.DirectionalLight = function (e, t) {
        THREE.Light.call(this, e), this.position = new THREE.Vector3(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== t ? t : 1, this.onlyShadow = this.castShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraTop = this.shadowCameraRight = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapHeight = this.shadowMapWidth = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
    }, THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype), THREE.HemisphereLight = function (e, t, i) {
        THREE.Light.call(this, e), this.groundColor = new THREE.Color(t), this.position = new THREE.Vector3(0, 100, 0), this.intensity = void 0 !== i ? i : 1
    }, THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype), THREE.PointLight = function (e, t, i) {
        THREE.Light.call(this, e), this.position = new THREE.Vector3(0, 0, 0), this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== i ? i : 0
    }, THREE.PointLight.prototype = Object.create(THREE.Light.prototype), THREE.SpotLight = function (e, t, i, r, n) {
        THREE.Light.call(this, e), this.position = new THREE.Vector3(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== r ? r : Math.PI / 2, this.exponent = void 0 !== n ? n : 10, this.onlyShadow = this.castShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapHeight = this.shadowMapWidth = 512, this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
    }, THREE.SpotLight.prototype = Object.create(THREE.Light.prototype), THREE.Loader = function (e) {
        this.statusDomElement = (this.showStatus = e) ? THREE.Loader.prototype.addStatusElement() : null, this.onLoadStart = function () {}, this.onLoadProgress = function () {}, this.onLoadComplete = function () {}
    }, THREE.Loader.prototype = {
        constructor: THREE.Loader,
        crossOrigin: "anonymous",
        addStatusElement: function () {
            var e = document.createElement("div");
            return e.style.position = "absolute", e.style.right = "0px", e.style.top = "0px", e.style.fontSize = "0.8em", e.style.textAlign = "left", e.style.background = "rgba(0,0,0,0.25)", e.style.color = "#fff", e.style.width = "120px", e.style.padding = "0.5em 0.5em 0.5em 0.5em", e.style.zIndex = 1e3, e.innerHTML = "Loading ...", e
        },
        updateProgress: function (e) {
            var t = "Loaded ",
                t = e.total ? t + ((100 * e.loaded / e.total).toFixed(0) + "%") : t + ((e.loaded / 1e3).toFixed(2) + " KB");
            this.statusDomElement.innerHTML = t
        },
        extractUrlBase: function (e) {
            return e = e.split("/"), e.pop(), (1 > e.length ? "." : e.join("/")) + "/"
        },
        initMaterials: function (e, t) {
            for (var i = [], r = 0; r < e.length; ++r) i[r] = THREE.Loader.prototype.createMaterial(e[r], t);
            return i
        },
        needsTangents: function (e) {
            for (var t = 0, i = e.length; i > t; t++)
                if (e[t] instanceof THREE.ShaderMaterial) return !0;
            return !1
        },
        createMaterial: function (e, t) {
            function i(e) {
                return e = Math.log(e) / Math.LN2, Math.floor(e) == e
            }

            function r(e) {
                return e = Math.log(e) / Math.LN2, Math.pow(2, Math.round(e))
            }

            function n(e, n, o, s, l, h, c) {
                var u = o.toLowerCase().endsWith(".dds"),
                    f = t + "/" + o;
                if (u) {
                    var p = THREE.ImageUtils.loadCompressedTexture(f);
                    e[n] = p
                } else p = document.createElement("canvas"), e[n] = new THREE.Texture(p);
                if (e[n].sourceFile = o, s && (e[n].repeat.set(s[0], s[1]), 1 !== s[0] && (e[n].wrapS = THREE.RepeatWrapping), 1 !== s[1] && (e[n].wrapT = THREE.RepeatWrapping)), l && e[n].offset.set(l[0], l[1]), h && (o = {
                        repeat: THREE.RepeatWrapping,
                        mirror: THREE.MirroredRepeatWrapping
                    }, void 0 !== o[h[0]] && (e[n].wrapS = o[h[0]]), void 0 !== o[h[1]] && (e[n].wrapT = o[h[1]])), c && (e[n].anisotropy = c), !u) {
                    var d = e[n],
                        e = new Image;
                    e.onload = function () {
                        if (i(this.width) && i(this.height)) d.image = this;
                        else {
                            var e = r(this.width),
                                t = r(this.height);
                            d.image.width = e, d.image.height = t, d.image.getContext("2d").drawImage(this, 0, 0, e, t)
                        }
                        d.needsUpdate = !0
                    }, e.crossOrigin = a.crossOrigin, e.src = f
                }
            }

            function o(e) {
                return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
            }
            var a = this,
                s = "MeshLambertMaterial",
                l = {
                    color: 15658734,
                    opacity: 1,
                    map: null,
                    lightMap: null,
                    normalMap: null,
                    bumpMap: null,
                    wireframe: !1
                };
            if (e.shading) {
                var h = e.shading.toLowerCase();
                "phong" === h ? s = "MeshPhongMaterial" : "basic" === h && (s = "MeshBasicMaterial")
            }
            return void 0 !== e.blending && void 0 !== THREE[e.blending] && (l.blending = THREE[e.blending]), (void 0 !== e.transparent || 1 > e.opacity) && (l.transparent = e.transparent), void 0 !== e.depthTest && (l.depthTest = e.depthTest), void 0 !== e.depthWrite && (l.depthWrite = e.depthWrite), void 0 !== e.visible && (l.visible = e.visible), void 0 !== e.flipSided && (l.side = THREE.BackSide), void 0 !== e.doubleSided && (l.side = THREE.DoubleSide), void 0 !== e.wireframe && (l.wireframe = e.wireframe), void 0 !== e.vertexColors && ("face" === e.vertexColors ? l.vertexColors = THREE.FaceColors : e.vertexColors && (l.vertexColors = THREE.VertexColors)), e.colorDiffuse ? l.color = o(e.colorDiffuse) : e.DbgColor && (l.color = e.DbgColor), e.colorSpecular && (l.specular = o(e.colorSpecular)), e.colorAmbient && (l.ambient = o(e.colorAmbient)), e.transparency && (l.opacity = e.transparency), e.specularCoef && (l.shininess = e.specularCoef), e.mapDiffuse && t && n(l, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), e.mapLight && t && n(l, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), e.mapBump && t && n(l, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), e.mapNormal && t && n(l, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), e.mapSpecular && t && n(l, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), e.mapBumpScale && (l.bumpScale = e.mapBumpScale), e.mapNormal ? (s = THREE.ShaderUtils.lib.normal, h = THREE.UniformsUtils.clone(s.uniforms), h.tNormal.value = l.normalMap, e.mapNormalFactor && h.uNormalScale.value.set(e.mapNormalFactor, e.mapNormalFactor), l.map && (h.tDiffuse.value = l.map, h.enableDiffuse.value = !0), l.specularMap && (h.tSpecular.value = l.specularMap, h.enableSpecular.value = !0), l.lightMap && (h.tAO.value = l.lightMap, h.enableAO.value = !0), h.uDiffuseColor.value.setHex(l.color), h.uSpecularColor.value.setHex(l.specular), h.uAmbientColor.value.setHex(l.ambient), h.uShininess.value = l.shininess, void 0 !== l.opacity && (h.uOpacity.value = l.opacity), s = new THREE.ShaderMaterial({
                fragmentShader: s.fragmentShader,
                vertexShader: s.vertexShader,
                uniforms: h,
                lights: !0,
                fog: !0
            }), l.transparent && (s.transparent = !0)) : s = new THREE[s](l), void 0 !== e.DbgName && (s.name = e.DbgName), s
        }
    }, THREE.BinaryLoader = function (e) {
        THREE.Loader.call(this, e)
    }, THREE.BinaryLoader.prototype = Object.create(THREE.Loader.prototype), THREE.BinaryLoader.prototype.load = function (e, t, i, r) {
        var i = i && "string" == typeof i ? i : this.extractUrlBase(e),
            r = r && "string" == typeof r ? r : this.extractUrlBase(e),
            n = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
        this.onLoadStart(), this.loadAjaxJSON(this, e, t, i, r, n)
    }, THREE.BinaryLoader.prototype.loadAjaxJSON = function (e, t, i, r, n, o) {
        var a = new XMLHttpRequest;
        a.onreadystatechange = function () {
            if (4 == a.readyState && (200 == a.status || 0 == a.status)) {
                var t = JSON.parse(a.responseText);
                e.loadAjaxBuffers(t, i, n, r, o)
            }
        }, a.open("GET", t, !0), a.send(null)
    }, THREE.BinaryLoader.prototype.loadAjaxBuffers = function (e, t, i, r, n) {
        var o = new XMLHttpRequest,
            a = i + "/" + e.buffers,
            s = 0;
        o.onreadystatechange = function () {
            if (4 == o.readyState) {
                if (200 == o.status || 0 == o.status) {
                    var i = o.response;
                    void 0 === i && (i = new Uint8Array(o.responseBody).buffer), THREE.BinaryLoader.prototype.createBinModel(i, t, r, e.materials)
                }
            } else 3 == o.readyState ? n && (0 == s && (s = o.getResponseHeader("Content-Length")), n({
                total: s,
                loaded: o.responseText.length
            })) : 2 == o.readyState && (s = o.getResponseHeader("Content-Length"))
        }, o.open("GET", a, !0), o.responseType = "arraybuffer", o.send(null)
    }, THREE.BinaryLoader.prototype.createBinModel = function (e, t, i, r) {
        var n = function () {
            function t(e) {
                return e % 4 ? 4 - e % 4 : 0
            }

            function i(e, t) {
                return new Uint8Array(e, t, 1)[0]
            }

            function r(e, t) {
                return new Uint32Array(e, t, 1)[0]
            }

            function n(t, i) {
                var r, n, o, a, s, l, h, c = new Uint32Array(e, i, 3 * t);
                for (r = 0; t > r; r++) n = c[3 * r], o = c[3 * r + 1], a = c[3 * r + 2], s = L[2 * n], n = L[2 * n + 1], l = L[2 * o], h = L[2 * o + 1], o = L[2 * a], a = L[2 * a + 1], C.faceVertexUvs[0].push([new THREE.Vector2(s, n), new THREE.Vector2(l, h), new THREE.Vector2(o, a)])
            }

            function o(t, i) {
                var r, n, o, a, s, l, h, c, u, f = new Uint32Array(e, i, 4 * t);
                for (r = 0; t > r; r++) n = f[4 * r], o = f[4 * r + 1], a = f[4 * r + 2], s = f[4 * r + 3], l = L[2 * n], n = L[2 * n + 1], h = L[2 * o], c = L[2 * o + 1], o = L[2 * a], u = L[2 * a + 1], a = L[2 * s], s = L[2 * s + 1], C.faceVertexUvs[0].push([new THREE.Vector2(l, n), new THREE.Vector2(h, c), new THREE.Vector2(o, u), new THREE.Vector2(a, s)])
            }

            function a(t, i, r) {
                for (var n, o, a, s, i = new Uint32Array(e, i, 3 * t), l = new Uint16Array(e, r, t), r = 0; t > r; r++) n = i[3 * r], o = i[3 * r + 1], a = i[3 * r + 2], s = l[r], C.faces.push(new THREE.Face3(n, o, a, null, null, s))
            }

            function s(t, i, r) {
                for (var n, o, a, s, l, i = new Uint32Array(e, i, 4 * t), h = new Uint16Array(e, r, t), r = 0; t > r; r++) n = i[4 * r], o = i[4 * r + 1], a = i[4 * r + 2], s = i[4 * r + 3], l = h[r], C.faces.push(new THREE.Face4(n, o, a, s, null, null, l))
            }

            function l(t, i, r, n) {
                for (var o, a, s, l, h, c, u, i = new Uint32Array(e, i, 3 * t), r = new Uint32Array(e, r, 3 * t), f = new Uint16Array(e, n, t), n = 0; t > n; n++) {
                    o = i[3 * n], a = i[3 * n + 1], s = i[3 * n + 2], h = r[3 * n], c = r[3 * n + 1], u = r[3 * n + 2], l = f[n];
                    var p = P[3 * c],
                        d = P[3 * c + 1];
                    c = P[3 * c + 2];
                    var m = P[3 * u],
                        E = P[3 * u + 1];
                    u = P[3 * u + 2], C.faces.push(new THREE.Face3(o, a, s, [new THREE.Vector3(P[3 * h], P[3 * h + 1], P[3 * h + 2]), new THREE.Vector3(p, d, c), new THREE.Vector3(m, E, u)], null, l))
                }
            }

            function h(t, i, r, n) {
                for (var o, a, s, l, h, c, u, f, p, i = new Uint32Array(e, i, 4 * t), r = new Uint32Array(e, r, 4 * t), d = new Uint16Array(e, n, t), n = 0; t > n; n++) {
                    o = i[4 * n], a = i[4 * n + 1], s = i[4 * n + 2], l = i[4 * n + 3], c = r[4 * n], u = r[4 * n + 1], f = r[4 * n + 2], p = r[4 * n + 3], h = d[n];
                    var m = P[3 * u],
                        E = P[3 * u + 1];
                    u = P[3 * u + 2];
                    var g = P[3 * f],
                        v = P[3 * f + 1];
                    f = P[3 * f + 2];
                    var T = P[3 * p],
                        y = P[3 * p + 1];
                    p = P[3 * p + 2], C.faces.push(new THREE.Face4(o, a, s, l, [new THREE.Vector3(P[3 * c], P[3 * c + 1], P[3 * c + 2]), new THREE.Vector3(m, E, u), new THREE.Vector3(g, v, f), new THREE.Vector3(T, y, p)], null, h))
                }
            }
            var c, u, f, p, d, m, E, g, v, T, y, _, R, x, b, w, H, S, M, C = this,
                A = 0,
                P = [],
                L = [];
            for (THREE.Geometry.call(this), w = e, S = A, x = new Uint8Array(w, S, 12), T = "", R = 0; 12 > R; R++) T += String.fromCharCode(x[S + R]);
            c = i(w, S + 12), i(w, S + 13), i(w, S + 14), i(w, S + 15), u = i(w, S + 16), f = i(w, S + 17), p = i(w, S + 18), d = i(w, S + 19), m = r(w, S + 20), E = r(w, S + 20 + 4), g = r(w, S + 20 + 8), v = r(w, S + 20 + 12), T = r(w, S + 20 + 16), y = r(w, S + 20 + 20), _ = r(w, S + 20 + 24), R = r(w, S + 20 + 28), x = r(w, S + 20 + 32), b = r(w, S + 20 + 36), w = r(w, S + 20 + 40), A += c, S = 3 * u + d, M = 4 * u + d, H = v * S, c = T * (S + 3 * f), u = y * (S + 3 * p), d = _ * (S + 3 * f + 3 * p), S = R * M, f = x * (M + 4 * f), p = b * (M + 4 * p), M = A;
            var F, D, z, U, A = new Float32Array(e, A, 3 * m);
            for (F = 0; m > F; F++) D = A[3 * F], z = A[3 * F + 1], U = A[3 * F + 2], C.vertices.push(new THREE.Vector3(D, z, U));
            if (m = A = M + 3 * m * Float32Array.BYTES_PER_ELEMENT, E)
                for (A = new Int8Array(e, A, 3 * E), M = 0; E > M; M++) F = A[3 * M], D = A[3 * M + 1], z = A[3 * M + 2], P.push(F / 127, D / 127, z / 127);
            if (A = m + 3 * E * Int8Array.BYTES_PER_ELEMENT, E = A += t(3 * E), g)
                for (m = new Float32Array(e, A, 2 * g), A = 0; g > A; A++) M = m[2 * A], F = m[2 * A + 1], L.push(M, F);
            g = A = E + 2 * g * Float32Array.BYTES_PER_ELEMENT, H = g + H + t(2 * v), E = H + c + t(2 * T), c = E + u + t(2 * y), u = c + d + t(2 * _), S = u + S + t(2 * R), d = S + f + t(2 * x), f = d + p + t(2 * b), y && (p = E + 3 * y * Uint32Array.BYTES_PER_ELEMENT, a(y, E, p + 3 * y * Uint32Array.BYTES_PER_ELEMENT), n(y, p)), _ && (y = c + 3 * _ * Uint32Array.BYTES_PER_ELEMENT, p = y + 3 * _ * Uint32Array.BYTES_PER_ELEMENT, l(_, c, y, p + 3 * _ * Uint32Array.BYTES_PER_ELEMENT), n(_, p)), b && (_ = d + 4 * b * Uint32Array.BYTES_PER_ELEMENT, s(b, d, _ + 4 * b * Uint32Array.BYTES_PER_ELEMENT), o(b, _)), w && (b = f + 4 * w * Uint32Array.BYTES_PER_ELEMENT, _ = b + 4 * w * Uint32Array.BYTES_PER_ELEMENT, h(w, f, b, _ + 4 * w * Uint32Array.BYTES_PER_ELEMENT), o(w, _)), v && a(v, g, g + 3 * v * Uint32Array.BYTES_PER_ELEMENT), T && (v = H + 3 * T * Uint32Array.BYTES_PER_ELEMENT, l(T, H, v, v + 3 * T * Uint32Array.BYTES_PER_ELEMENT)), R && s(R, u, u + 4 * R * Uint32Array.BYTES_PER_ELEMENT), x && (T = S + 4 * x * Uint32Array.BYTES_PER_ELEMENT, h(x, S, T, T + 4 * x * Uint32Array.BYTES_PER_ELEMENT)), this.computeCentroids(), this.computeFaceNormals()
        };
        n.prototype = Object.create(THREE.Geometry.prototype), n = new n(i), i = this.initMaterials(r, i), this.needsTangents(i) && n.computeTangents(), t(n, i)
    }, THREE.ImageLoader = function () {
        THREE.EventDispatcher.call(this), this.crossOrigin = null
    }, THREE.ImageLoader.prototype = {
        constructor: THREE.ImageLoader,
        load: function (e, t) {
            var i = this;
            void 0 === t && (t = new Image), t.addEventListener("load", function () {
                i.dispatchEvent({
                    type: "load",
                    content: t
                })
            }, !1), t.addEventListener("error", function () {
                i.dispatchEvent({
                    type: "error",
                    message: "Couldn't load URL [" + e + "]"
                })
            }, !1), i.crossOrigin && (t.crossOrigin = i.crossOrigin), t.src = e
        }
    }, THREE.JSONLoader = function (e) {
        THREE.Loader.call(this, e), this.withCredentials = !1
    }, THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype), THREE.JSONLoader.prototype.load = function (e, t, i) {
        i = i && "string" == typeof i ? i : this.extractUrlBase(e), this.onLoadStart(), this.loadAjaxJSON(this, e, t, i)
    }, THREE.JSONLoader.prototype.loadAjaxJSON = function (e, t, i, r, n) {
        var o = new XMLHttpRequest,
            a = 0;
        o.withCredentials = this.withCredentials, o.onreadystatechange = function () {
            if (o.readyState === o.DONE) {
                if (200 === o.status || 0 === o.status) {
                    if (o.responseText) {
                        var t = JSON.parse(o.responseText);
                        e.createModel(t, i, r)
                    }
                    e.onLoadComplete()
                }
            } else o.readyState === o.LOADING ? n && (0 === a && (a = o.getResponseHeader("Content-Length")), n({
                total: a,
                loaded: o.responseText.length
            })) : o.readyState === o.HEADERS_RECEIVED && (a = o.getResponseHeader("Content-Length"))
        }, o.open("GET", t, !0), o.send(null)
    }, THREE.JSONLoader.prototype.createModel = function (e, t, i) {
        var r, n, o, a, s, l, h, c, u, f, p, d, m, E, g, v = new THREE.Geometry,
            T = void 0 !== e.scale ? 1 / e.scale : 1,
            y = e.faces;
        f = e.vertices;
        var _ = e.normals,
            R = e.colors,
            x = 0;
        for (r = 0; r < e.uvs.length; r++) e.uvs[r].length && x++;
        for (r = 0; x > r; r++) v.faceUvs[r] = [], v.faceVertexUvs[r] = [];
        for (a = 0, s = f.length; s > a;) l = new THREE.Vector3, l.x = f[a++] * T, l.y = f[a++] * T, l.z = f[a++] * T, v.vertices.push(l);
        for (a = 0, s = y.length; s > a;) {
            if (f = y[a++], l = 1 & f, o = 2 & f, r = 4 & f, n = 8 & f, c = 16 & f, h = 32 & f, p = 64 & f, f &= 128, l ? (d = new THREE.Face4, d.a = y[a++], d.b = y[a++], d.c = y[a++], d.d = y[a++], l = 4) : (d = new THREE.Face3, d.a = y[a++], d.b = y[a++], d.c = y[a++], l = 3), o && (o = y[a++], d.materialIndex = o), o = v.faces.length, r)
                for (r = 0; x > r; r++) m = e.uvs[r], u = y[a++], g = m[2 * u], u = m[2 * u + 1], v.faceUvs[r][o] = new THREE.Vector2(g, u);
            if (n)
                for (r = 0; x > r; r++) {
                    for (m = e.uvs[r], E = [], n = 0; l > n; n++) u = y[a++], g = m[2 * u], u = m[2 * u + 1], E[n] = new THREE.Vector2(g, u);
                    v.faceVertexUvs[r][o] = E
                }
            if (c && (c = 3 * y[a++], n = new THREE.Vector3, n.x = _[c++], n.y = _[c++], n.z = _[c], d.normal = n), h)
                for (r = 0; l > r; r++) c = 3 * y[a++], n = new THREE.Vector3, n.x = _[c++], n.y = _[c++], n.z = _[c], d.vertexNormals.push(n);
            if (p && (h = y[a++], h = new THREE.Color(R[h]), d.color = h), f)
                for (r = 0; l > r; r++) h = y[a++], h = new THREE.Color(R[h]), d.vertexColors.push(h);
            v.faces.push(d)
        }
        if (e.skinWeights)
            for (a = 0, s = e.skinWeights.length; s > a; a += 2) y = e.skinWeights[a], _ = e.skinWeights[a + 1], v.skinWeights.push(new THREE.Vector4(y, _, 0, 0));
        if (e.skinIndices)
            for (a = 0, s = e.skinIndices.length; s > a; a += 2) y = e.skinIndices[a], _ = e.skinIndices[a + 1], v.skinIndices.push(new THREE.Vector4(y, _, 0, 0));
        if (v.bones = e.bones, v.animation = e.animation, void 0 !== e.morphTargets)
            for (a = 0, s = e.morphTargets.length; s > a; a++)
                for (v.morphTargets[a] = {}, v.morphTargets[a].name = e.morphTargets[a].name, v.morphTargets[a].vertices = [], R = v.morphTargets[a].vertices, x = e.morphTargets[a].vertices, y = 0, _ = x.length; _ > y; y += 3) f = new THREE.Vector3, f.x = x[y] * T, f.y = x[y + 1] * T, f.z = x[y + 2] * T, R.push(f);
        if (void 0 !== e.morphColors)
            for (a = 0, s = e.morphColors.length; s > a; a++)
                for (v.morphColors[a] = {}, v.morphColors[a].name = e.morphColors[a].name, v.morphColors[a].colors = [], _ = v.morphColors[a].colors, R = e.morphColors[a].colors, T = 0, y = R.length; y > T; T += 3) x = new THREE.Color(16755200), x.setRGB(R[T], R[T + 1], R[T + 2]), _.push(x);
        v.computeCentroids(), v.computeFaceNormals(), e = this.initMaterials(e.materials, i), this.needsTangents(e) && v.computeTangents(), t(v, e)
    }, THREE.LoadingMonitor = function () {
        THREE.EventDispatcher.call(this);
        var e = this,
            t = 0,
            i = 0,
            r = function () {
                t++, e.dispatchEvent({
                    type: "progress",
                    loaded: t,
                    total: i
                }), t === i && e.dispatchEvent({
                    type: "load"
                })
            };
        this.add = function (e) {
            i++, e.addEventListener("load", r, !1)
        }
    }, THREE.SceneLoader = function () {
        this.onLoadStart = function () {}, this.onLoadProgress = function () {}, this.onLoadComplete = function () {}, this.callbackSync = function () {}, this.callbackProgress = function () {}, this.geometryHandlerMap = {}, this.hierarchyHandlerMap = {}, this.addGeometryHandler("ascii", THREE.JSONLoader), this.addGeometryHandler("binary", THREE.BinaryLoader)
    }, THREE.SceneLoader.prototype.constructor = THREE.SceneLoader, THREE.SceneLoader.prototype.load = function (e, t) {
        var i = this,
            r = new XMLHttpRequest;
        r.onreadystatechange = function () {
            if (4 === r.readyState && (200 === r.status || 0 === r.status)) {
                var n = JSON.parse(r.responseText);
                i.parse(n, t, e)
            }
        }, r.open("GET", e, !0), r.send(null)
    }, THREE.SceneLoader.prototype.addGeometryHandler = function (e, t) {
        this.geometryHandlerMap[e] = {
            loaderClass: t
        }
    }, THREE.SceneLoader.prototype.addHierarchyHandler = function (e, t) {
        this.hierarchyHandlerMap[e] = {
            loaderClass: t
        }
    }, THREE.SceneLoader.prototype.parse = function (e, t, i) {
        function r(e, t) {
            return "relativeToHTML" == t ? e : w + "/" + e
        }

        function n() {
            o(R.scene, S.objects)
        }

        function o(e, t) {
            var i, n, a, l, h, p;
            for (p in t)
                if (void 0 === R.objects[p]) {
                    var d = t[p],
                        v = null;
                    if (d.type && d.type in b.hierarchyHandlerMap) {
                        if (void 0 === d.loading) {
                            i = {
                                type: 1,
                                url: 1,
                                material: 1,
                                position: 1,
                                rotation: 1,
                                scale: 1,
                                visible: 1,
                                children: 1,
                                properties: 1,
                                skin: 1,
                                morph: 1,
                                mirroredLoop: 1,
                                duration: 1
                            }, n = {};
                            for (var T in d) T in i || (n[T] = d[T]);
                            u = R.materials[d.material], d.loading = !0, i = b.hierarchyHandlerMap[d.type].loaderObject, i.options ? i.load(r(d.url, S.urlBaseType), s(p, e, u, d)) : i.load(r(d.url, S.urlBaseType), s(p, e, u, d), n)
                        }
                    } else if (void 0 !== d.geometry) {
                        if (c = R.geometries[d.geometry]) {
                            if (v = !1, u = R.materials[d.material], v = u instanceof THREE.ShaderMaterial, n = d.position, a = d.rotation, l = d.scale, i = d.matrix, h = d.quaternion, d.material || (u = new THREE.MeshFaceMaterial(R.face_materials[d.geometry])), u instanceof THREE.MeshFaceMaterial && 0 === u.materials.length && (u = new THREE.MeshFaceMaterial(R.face_materials[d.geometry])), u instanceof THREE.MeshFaceMaterial)
                                for (var y = 0; y < u.materials.length; y++) v = v || u.materials[y] instanceof THREE.ShaderMaterial;
                            v && c.computeTangents(), d.skin ? v = new THREE.SkinnedMesh(c, u) : d.morph ? (v = new THREE.MorphAnimMesh(c, u), void 0 !== d.duration && (v.duration = d.duration), void 0 !== d.time && (v.time = d.time), void 0 !== d.mirroredLoop && (v.mirroredLoop = d.mirroredLoop), u.morphNormals && c.computeMorphNormals()) : v = new THREE.Mesh(c, u), v.name = p, i ? (v.matrixAutoUpdate = !1, v.matrix.set(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15])) : (v.position.set(n[0], n[1], n[2]), h ? (v.quaternion.set(h[0], h[1], h[2], h[3]), v.useQuaternion = !0) : v.rotation.set(a[0], a[1], a[2]), v.scale.set(l[0], l[1], l[2])), v.visible = d.visible, v.castShadow = d.castShadow, v.receiveShadow = d.receiveShadow, e.add(v), R.objects[p] = v
                        }
                    } else "DirectionalLight" === d.type || "PointLight" === d.type || "AmbientLight" === d.type ? (E = void 0 !== d.color ? d.color : 16777215, g = void 0 !== d.intensity ? d.intensity : 1, "DirectionalLight" === d.type ? (n = d.direction, m = new THREE.DirectionalLight(E, g), m.position.set(n[0], n[1], n[2]), d.target && (H.push({
                        object: m,
                        targetName: d.target
                    }), m.target = null)) : "PointLight" === d.type ? (n = d.position, i = d.distance, m = new THREE.PointLight(E, g, i), m.position.set(n[0], n[1], n[2])) : "AmbientLight" === d.type && (m = new THREE.AmbientLight(E)), e.add(m), m.name = p, R.lights[p] = m, R.objects[p] = m) : "PerspectiveCamera" === d.type || "OrthographicCamera" === d.type ? ("PerspectiveCamera" === d.type ? f = new THREE.PerspectiveCamera(d.fov, d.aspect, d.near, d.far) : "OrthographicCamera" === d.type && (f = new THREE.OrthographicCamera(d.left, d.right, d.top, d.bottom, d.near, d.far)), n = d.position, f.position.set(n[0], n[1], n[2]), e.add(f), f.name = p, R.cameras[p] = f, R.objects[p] = f) : (n = d.position, a = d.rotation, l = d.scale, h = d.quaternion, v = new THREE.Object3D, v.name = p, v.position.set(n[0], n[1], n[2]), h ? (v.quaternion.set(h[0], h[1], h[2], h[3]), v.useQuaternion = !0) : v.rotation.set(a[0], a[1], a[2]), v.scale.set(l[0], l[1], l[2]), v.visible = void 0 !== d.visible ? d.visible : !1, e.add(v), R.objects[p] = v, R.empties[p] = v);
                    if (v) {
                        if (void 0 !== d.properties)
                            for (var _ in d.properties) v.properties[_] = d.properties[_];
                        void 0 !== d.children && o(v, d.children)
                    }
                }
        }

        function a(e) {
            return function (t, i) {
                R.geometries[e] = t, R.face_materials[e] = i, n(), v -= 1, b.onLoadComplete(), h()
            }
        }

        function s(e, t, i, r) {
            return function (o) {
                var o = o.content ? o.content : o.dae ? o.scene : o,
                    a = r.position,
                    s = r.rotation,
                    l = r.quaternion,
                    c = r.scale;
                o.position.set(a[0], a[1], a[2]), l ? (o.quaternion.set(l[0], l[1], l[2], l[3]), o.useQuaternion = !0) : o.rotation.set(s[0], s[1], s[2]), o.scale.set(c[0], c[1], c[2]), i && o.traverse(function (e) {
                    e.material = i
                });
                var u = void 0 !== r.visible ? r.visible : !0;
                o.traverse(function (e) {
                    e.visible = u
                }), t.add(o), o.name = e, R.objects[e] = o, n(), v -= 1, b.onLoadComplete(), h()
            }
        }

        function l(e) {
            return function (t, i) {
                R.geometries[e] = t, R.face_materials[e] = i
            }
        }

        function h() {
            if (b.callbackProgress({
                    totalModels: y,
                    totalTextures: _,
                    loadedModels: y - v,
                    loadedTextures: _ - T
                }, R), b.onLoadProgress(), 0 === v && 0 === T) {
                for (var e = 0; e < H.length; e++) {
                    var i = H[e],
                        r = R.objects[i.targetName];
                    r ? i.object.target = r : (i.object.target = new THREE.Object3D, R.scene.add(i.object.target)), i.object.target.properties.targetInverse = i.object
                }
                t(R)
            }
        }
        var c, u, f, p, d, m, E, g, v, T, y, _, R, x, b = this,
            w = THREE.Loader.prototype.extractUrlBase(i),
            H = [],
            S = e;
        for (x in this.geometryHandlerMap) e = this.geometryHandlerMap[x].loaderClass, this.geometryHandlerMap[x].loaderObject = new e;
        for (x in this.hierarchyHandlerMap) e = this.hierarchyHandlerMap[x].loaderClass, this.hierarchyHandlerMap[x].loaderObject = new e;
        T = v = 0, R = {
            scene: new THREE.Scene,
            geometries: {},
            face_materials: {},
            materials: {},
            textures: {},
            objects: {},
            cameras: {},
            lights: {},
            fogs: {},
            empties: {}
        }, S.transform && (x = S.transform.position, e = S.transform.rotation, i = S.transform.scale, x && R.scene.position.set(x[0], x[1], x[2]), e && R.scene.rotation.set(e[0], e[1], e[2]), i && R.scene.scale.set(i[0], i[1], i[2]), x || e || i) && (R.scene.updateMatrix(), R.scene.updateMatrixWorld()), x = function (e) {
            return function () {
                T -= e, h(), b.onLoadComplete()
            }
        };
        for (var M in S.fogs) e = S.fogs[M], "linear" === e.type ? p = new THREE.Fog(0, e.near, e.far) : "exp2" === e.type && (p = new THREE.FogExp2(0, e.density)), e = e.color, p.color.setRGB(e[0], e[1], e[2]), R.fogs[M] = p;
        for (var C in S.geometries) p = S.geometries[C], p.type in this.geometryHandlerMap && (v += 1, b.onLoadStart());
        for (var A in S.objects) p = S.objects[A], p.type && p.type in this.hierarchyHandlerMap && (v += 1, b.onLoadStart());
        y = v;
        for (C in S.geometries)
            if (p = S.geometries[C], "cube" === p.type) c = new THREE.CubeGeometry(p.width, p.height, p.depth, p.widthSegments, p.heightSegments, p.depthSegments), R.geometries[C] = c;
            else if ("plane" === p.type) c = new THREE.PlaneGeometry(p.width, p.height, p.widthSegments, p.heightSegments), R.geometries[C] = c;
        else if ("sphere" === p.type) c = new THREE.SphereGeometry(p.radius, p.widthSegments, p.heightSegments), R.geometries[C] = c;
        else if ("cylinder" === p.type) c = new THREE.CylinderGeometry(p.topRad, p.botRad, p.height, p.radSegs, p.heightSegs), R.geometries[C] = c;
        else if ("torus" === p.type) c = new THREE.TorusGeometry(p.radius, p.tube, p.segmentsR, p.segmentsT), R.geometries[C] = c;
        else if ("icosahedron" === p.type) c = new THREE.IcosahedronGeometry(p.radius, p.subdivisions), R.geometries[C] = c;
        else if (p.type in this.geometryHandlerMap) {
            A = {};
            for (d in p) "type" !== d && "url" !== d && (A[d] = p[d]);
            this.geometryHandlerMap[p.type].loaderObject.load(r(p.url, S.urlBaseType), a(C), A)
        } else "embedded" === p.type && (A = S.embeds[p.id], A.metadata = S.metadata, A && this.geometryHandlerMap.ascii.loaderObject.createModel(A, l(C), ""));
        for (var P in S.textures)
            if (C = S.textures[P], C.url instanceof Array)
                for (T += C.url.length, d = 0; d < C.url.length; d++) b.onLoadStart();
            else T += 1, b.onLoadStart();
        _ = T;
        for (P in S.textures) {
            if (C = S.textures[P], void 0 !== C.mapping && void 0 !== THREE[C.mapping] && (C.mapping = new THREE[C.mapping]), C.url instanceof Array) {
                for (A = C.url.length, p = [], d = 0; A > d; d++) p[d] = r(C.url[d], S.urlBaseType);
                d = (d = p[0].endsWith(".dds")) ? THREE.ImageUtils.loadCompressedTextureCube(p, C.mapping, x(A)) : THREE.ImageUtils.loadTextureCube(p, C.mapping, x(A))
            } else d = C.url.toLowerCase().endsWith(".dds"), A = r(C.url, S.urlBaseType), p = x(1), d = d ? THREE.ImageUtils.loadCompressedTexture(A, C.mapping, p) : THREE.ImageUtils.loadTexture(A, C.mapping, p), void 0 !== THREE[C.minFilter] && (d.minFilter = THREE[C.minFilter]), void 0 !== THREE[C.magFilter] && (d.magFilter = THREE[C.magFilter]), C.anisotropy && (d.anisotropy = C.anisotropy), C.repeat && (d.repeat.set(C.repeat[0], C.repeat[1]), 1 !== C.repeat[0] && (d.wrapS = THREE.RepeatWrapping), 1 !== C.repeat[1] && (d.wrapT = THREE.RepeatWrapping)), C.offset && d.offset.set(C.offset[0], C.offset[1]), C.wrap && (A = {
                repeat: THREE.RepeatWrapping,
                mirror: THREE.MirroredRepeatWrapping
            }, void 0 !== A[C.wrap[0]] && (d.wrapS = A[C.wrap[0]]), void 0 !== A[C.wrap[1]] && (d.wrapT = A[C.wrap[1]]));
            R.textures[P] = d
        }
        var L, F;
        for (L in S.materials) {
            P = S.materials[L];
            for (F in P.parameters) "envMap" === F || "map" === F || "lightMap" === F || "bumpMap" === F ? P.parameters[F] = R.textures[P.parameters[F]] : "shading" === F ? P.parameters[F] = "flat" === P.parameters[F] ? THREE.FlatShading : THREE.SmoothShading : "side" === F ? P.parameters[F] = "double" == P.parameters[F] ? THREE.DoubleSide : "back" == P.parameters[F] ? THREE.BackSide : THREE.FrontSide : "blending" === F ? P.parameters[F] = P.parameters[F] in THREE ? THREE[P.parameters[F]] : THREE.NormalBlending : "combine" === F ? P.parameters[F] = P.parameters[F] in THREE ? THREE[P.parameters[F]] : THREE.MultiplyOperation : "vertexColors" === F ? "face" == P.parameters[F] ? P.parameters[F] = THREE.FaceColors : P.parameters[F] && (P.parameters[F] = THREE.VertexColors) : "wrapRGB" === F && (x = P.parameters[F], P.parameters[F] = new THREE.Vector3(x[0], x[1], x[2]));
            void 0 !== P.parameters.opacity && 1 > P.parameters.opacity && (P.parameters.transparent = !0), P.parameters.normalMap ? (x = THREE.ShaderUtils.lib.normal, C = THREE.UniformsUtils.clone(x.uniforms), d = P.parameters.color, A = P.parameters.specular, p = P.parameters.ambient, M = P.parameters.shininess, C.tNormal.value = R.textures[P.parameters.normalMap], P.parameters.normalScale && C.uNormalScale.value.set(P.parameters.normalScale[0], P.parameters.normalScale[1]), P.parameters.map && (C.tDiffuse.value = P.parameters.map, C.enableDiffuse.value = !0), P.parameters.envMap && (C.tCube.value = P.parameters.envMap, C.enableReflection.value = !0, C.uReflectivity.value = P.parameters.reflectivity), P.parameters.lightMap && (C.tAO.value = P.parameters.lightMap, C.enableAO.value = !0), P.parameters.specularMap && (C.tSpecular.value = R.textures[P.parameters.specularMap], C.enableSpecular.value = !0), P.parameters.displacementMap && (C.tDisplacement.value = R.textures[P.parameters.displacementMap], C.enableDisplacement.value = !0, C.uDisplacementBias.value = P.parameters.displacementBias, C.uDisplacementScale.value = P.parameters.displacementScale), C.uDiffuseColor.value.setHex(d), C.uSpecularColor.value.setHex(A), C.uAmbientColor.value.setHex(p), C.uShininess.value = M, P.parameters.opacity && (C.uOpacity.value = P.parameters.opacity), u = new THREE.ShaderMaterial({
                fragmentShader: x.fragmentShader,
                vertexShader: x.vertexShader,
                uniforms: C,
                lights: !0,
                fog: !0
            })) : u = new THREE[P.type](P.parameters), R.materials[L] = u
        }
        for (L in S.materials)
            if (P = S.materials[L], P.parameters.materials) {
                for (F = [], d = 0; d < P.parameters.materials.length; d++) F.push(R.materials[P.parameters.materials[d]]);
                R.materials[L].materials = F
            }
        n(), R.cameras && S.defaults.camera && (R.currentCamera = R.cameras[S.defaults.camera]), R.fogs && S.defaults.fog && (R.scene.fog = R.fogs[S.defaults.fog]), e = S.defaults.bgcolor, R.bgColor = new THREE.Color, R.bgColor.setRGB(e[0], e[1], e[2]), R.bgColorAlpha = S.defaults.bgalpha, b.callbackSync(R), h()
    }, THREE.TextureLoader = function () {
        THREE.EventDispatcher.call(this), this.crossOrigin = null
    }, THREE.TextureLoader.prototype = {
        constructor: THREE.TextureLoader,
        load: function (e) {
            var t = this,
                i = new Image;
            i.addEventListener("load", function () {
                var e = new THREE.Texture(i);
                e.needsUpdate = !0, t.dispatchEvent({
                    type: "load",
                    content: e
                })
            }, !1), i.addEventListener("error", function () {
                t.dispatchEvent({
                    type: "error",
                    message: "Couldn't load URL [" + e + "]"
                })
            }, !1), t.crossOrigin && (i.crossOrigin = t.crossOrigin), i.src = e
        }
    }, THREE.Material = function () {
        THREE.EventDispatcher.call(this), this.id = THREE.MaterialIdCount++, this.name = "", this.side = THREE.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = THREE.NormalBlending, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.depthWrite = this.depthTest = !0, this.polygonOffset = !1, this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this.overdraw = !1, this.needsUpdate = this.visible = !0
    }, THREE.Material.prototype.setValues = function (e) {
        if (void 0 !== e)
            for (var t in e) {
                var i = e[t];
                if (void 0 === i);
                else if (t in this) {
                    var r = this[t];
                    r instanceof THREE.Color && i instanceof THREE.Color ? r.copy(i) : r instanceof THREE.Color ? r.set(i) : r instanceof THREE.Vector3 && i instanceof THREE.Vector3 ? r.copy(i) : this[t] = i
                }
            }
    }, THREE.Material.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.Material), e.name = this.name, e.side = this.side, e.opacity = this.opacity, e.transparent = this.transparent, e.blending = this.blending, e.blendSrc = this.blendSrc, e.blendDst = this.blendDst, e.blendEquation = this.blendEquation, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.overdraw = this.overdraw, e.visible = this.visible, e
    }, THREE.Material.prototype.dispose = function () {
        this.dispatchEvent({
            type: "dispose"
        })
    }, THREE.MaterialIdCount = 0, THREE.LineBasicMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.linewidth = 1, this.linejoin = this.linecap = "round", this.vertexColors = !1, this.fog = !0, this.setValues(e)
    }, THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineBasicMaterial.prototype.clone = function () {
        var e = new THREE.LineBasicMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.linecap = this.linecap, e.linejoin = this.linejoin, e.vertexColors = this.vertexColors, e.fog = this.fog, e
    }, THREE.LineDashedMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.scale = this.linewidth = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
    }, THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineDashedMaterial.prototype.clone = function () {
        var e = new THREE.LineDashedMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.scale = this.scale, e.dashSize = this.dashSize, e.gapSize = this.gapSize, e.vertexColors = this.vertexColors, e.fog = this.fog, e
    }, THREE.MeshBasicMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.envMap = this.specularMap = this.lightMap = this.map = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshBasicMaterial.prototype.clone = function () {
        var e = new THREE.MeshBasicMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e
    }, THREE.MeshLambertMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.ambient = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.envMap = this.specularMap = this.lightMap = this.map = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshLambertMaterial.prototype.clone = function () {
        var e = new THREE.MeshLambertMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
    }, THREE.MeshPhongMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.ambient = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.specular = new THREE.Color(1118481), this.shininess = 30, this.metal = !1, this.perPixel = !0, this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.bumpMap = this.lightMap = this.map = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.envMap = this.specularMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshPhongMaterial.prototype.clone = function () {
        var e = new THREE.MeshPhongMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.perPixel = this.perPixel, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
    }, THREE.MeshDepthMaterial = function (e) {
        THREE.Material.call(this), this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
    }, THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshDepthMaterial.prototype.clone = function () {
        var e = new THREE.LineBasicMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
    }, THREE.MeshNormalMaterial = function (e) {
        THREE.Material.call(this, e), this.shading = THREE.FlatShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
    }, THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshNormalMaterial.prototype.clone = function () {
        var e = new THREE.MeshNormalMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
    }, THREE.MeshFaceMaterial = function (e) {
        this.materials = e instanceof Array ? e : []
    }, THREE.MeshFaceMaterial.prototype.clone = function () {
        return new THREE.MeshFaceMaterial(this.materials.slice(0))
    }, THREE.ParticleBasicMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = !1, this.fog = !0, this.setValues(e)
    }, THREE.ParticleBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ParticleBasicMaterial.prototype.clone = function () {
        var e = new THREE.ParticleBasicMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.vertexColors = this.vertexColors, e.fog = this.fog, e
    }, THREE.ParticleCanvasMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.program = function () {}, this.setValues(e)
    }, THREE.ParticleCanvasMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ParticleCanvasMaterial.prototype.clone = function () {
        var e = new THREE.ParticleCanvasMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.program = this.program, e
    }, THREE.ParticleDOMMaterial = function (e) {
        this.element = e
    }, THREE.ParticleDOMMaterial.prototype.clone = function () {
        return new THREE.ParticleDOMMaterial(this.element)
    }, THREE.ShaderMaterial = function (e) {
        THREE.Material.call(this), this.vertexShader = this.fragmentShader = "void main() {}", this.uniforms = {}, this.defines = {}, this.attributes = null, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ShaderMaterial.prototype.clone = function () {
        var e = new THREE.ShaderMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = THREE.UniformsUtils.clone(this.uniforms), e.attributes = this.attributes, e.defines = this.defines, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
    }, THREE.SpriteMaterial = function (e) {
        THREE.Material.call(this), this.color = new THREE.Color(16777215), this.map = new THREE.Texture, this.useScreenCoordinates = !0, this.depthTest = !this.useScreenCoordinates, this.sizeAttenuation = !this.useScreenCoordinates, this.scaleByViewport = !this.sizeAttenuation, this.alignment = THREE.SpriteAlignment.center.clone(), this.fog = !1, this.uvOffset = new THREE.Vector2(0, 0), this.uvScale = new THREE.Vector2(1, 1), this.setValues(e), e = e || {}, void 0 === e.depthTest && (this.depthTest = !this.useScreenCoordinates), void 0 === e.sizeAttenuation && (this.sizeAttenuation = !this.useScreenCoordinates), void 0 === e.scaleByViewport && (this.scaleByViewport = !this.sizeAttenuation)
    }, THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteMaterial.prototype.clone = function () {
        var e = new THREE.SpriteMaterial;
        return THREE.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.useScreenCoordinates = this.useScreenCoordinates, e.sizeAttenuation = this.sizeAttenuation, e.scaleByViewport = this.scaleByViewport, e.alignment.copy(this.alignment), e.uvOffset.copy(this.uvOffset), e.uvScale.copy(this.uvScale), e.fog = this.fog, e
    }, THREE.SpriteAlignment = {}, THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1), THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1), THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1), THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0), THREE.SpriteAlignment.center = new THREE.Vector2(0, 0), THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0), THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1), THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1), THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1), THREE.Texture = function (e, t, i, r, n, o, a, s, l) {
        THREE.EventDispatcher.call(this), this.id = THREE.TextureIdCount++, this.name = "", this.image = e, this.mipmaps = [], this.mapping = void 0 !== t ? t : new THREE.UVMapping, this.wrapS = void 0 !== i ? i : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== n ? n : THREE.LinearFilter, this.minFilter = void 0 !== o ? o : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== a ? a : THREE.RGBAFormat, this.type = void 0 !== s ? s : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.needsUpdate = !1, this.onUpdate = null
    }, THREE.Texture.prototype = {
        constructor: THREE.Texture,
        clone: function (e) {
            return void 0 === e && (e = new THREE.Texture), e.image = this.image, e.mipmaps = this.mipmaps.slice(0), e.mapping = this.mapping, e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.unpackAlignment = this.unpackAlignment, e
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.TextureIdCount = 0, THREE.CompressedTexture = function (e, t, i, r, n, o, a, s, l, h, c) {
        THREE.Texture.call(this, null, o, a, s, l, h, r, n, c), this.image = {
            width: t,
            height: i
        }, this.mipmaps = e, this.generateMipmaps = !1
    }, THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CompressedTexture.prototype.clone = function () {
        var e = new THREE.CompressedTexture;
        return THREE.Texture.prototype.clone.call(this, e), e
    }, THREE.DataTexture = function (e, t, i, r, n, o, a, s, l, h, c) {
        THREE.Texture.call(this, null, o, a, s, l, h, r, n, c), this.image = {
            data: e,
            width: t,
            height: i
        }
    }, THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype), THREE.DataTexture.prototype.clone = function () {
        var e = new THREE.DataTexture;
        return THREE.Texture.prototype.clone.call(this, e), e
    }, THREE.Particle = function (e) {
        THREE.Object3D.call(this),
            this.material = e
    }, THREE.Particle.prototype = Object.create(THREE.Object3D.prototype), THREE.Particle.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.Particle(this.material)), THREE.Object3D.prototype.clone.call(this, e), e
    }, THREE.ParticleSystem = function (e, t) {
        THREE.Object3D.call(this), this.geometry = e, this.material = void 0 !== t ? t : new THREE.ParticleBasicMaterial({
            color: 16777215 * Math.random()
        }), this.sortParticles = !1, this.geometry && null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere(), this.frustumCulled = !1
    }, THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype), THREE.ParticleSystem.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.ParticleSystem(this.geometry, this.material)), e.sortParticles = this.sortParticles, THREE.Object3D.prototype.clone.call(this, e), e
    }, THREE.Line = function (e, t, i) {
        THREE.Object3D.call(this), this.geometry = e, this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({
            color: 16777215 * Math.random()
        }), this.type = void 0 !== i ? i : THREE.LineStrip, this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
    }, THREE.LineStrip = 0, THREE.LinePieces = 1, THREE.Line.prototype = Object.create(THREE.Object3D.prototype), THREE.Line.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.Line(this.geometry, this.material, this.type)), THREE.Object3D.prototype.clone.call(this, e), e
    }, THREE.Mesh = function (e, t) {
        if (THREE.Object3D.call(this), this.geometry = e, this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({
                color: 16777215 * Math.random(),
                wireframe: !0
            }), this.geometry && (null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere(), this.geometry.morphTargets.length)) {
            this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (var i = 0; i < this.geometry.morphTargets.length; i++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[i].name] = i
        }
    }, THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype), THREE.Mesh.prototype.getMorphTargetIndexByName = function (e) {
        return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : 0
    }, THREE.Mesh.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.Mesh(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, e), e
    }, THREE.Bone = function (e) {
        THREE.Object3D.call(this), this.skin = e, this.skinMatrix = new THREE.Matrix4
    }, THREE.Bone.prototype = Object.create(THREE.Object3D.prototype), THREE.Bone.prototype.update = function (e, t) {
        this.matrixAutoUpdate && (t |= this.updateMatrix()), (t || this.matrixWorldNeedsUpdate) && (e ? this.skinMatrix.multiply(e, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
        var i, r = this.children.length;
        for (i = 0; r > i; i++) this.children[i].update(this.skinMatrix, t)
    }, THREE.SkinnedMesh = function (e, t, i) {
        THREE.Mesh.call(this, e, t), this.useVertexTexture = void 0 !== i ? i : !0, this.identityMatrix = new THREE.Matrix4, this.bones = [], this.boneMatrices = [];
        var r, n, o;
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (e = 0; e < this.geometry.bones.length; e++) i = this.geometry.bones[e], r = i.pos, n = i.rotq, o = i.scl, t = this.addBone(), t.name = i.name, t.position.set(r[0], r[1], r[2]), t.quaternion.set(n[0], n[1], n[2], n[3]), t.useQuaternion = !0, void 0 !== o ? t.scale.set(o[0], o[1], o[2]) : t.scale.set(1, 1, 1);
            for (e = 0; e < this.bones.length; e++) i = this.geometry.bones[e], t = this.bones[e], -1 === i.parent ? this.add(t) : this.bones[i.parent].add(t);
            e = this.bones.length, this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = e = e > 256 ? 64 : e > 64 ? 32 : e > 16 ? 16 : 8, this.boneMatrices = new Float32Array(4 * this.boneTextureWidth * this.boneTextureHeight), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * e), this.pose()
        }
    }, THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.SkinnedMesh.prototype.addBone = function (e) {
        return void 0 === e && (e = new THREE.Bone(this)), this.bones.push(e), e
    }, THREE.SkinnedMesh.prototype.updateMatrixWorld = function (e) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1);
        for (var e = 0, t = this.children.length; t > e; e++) {
            var i = this.children[e];
            i instanceof THREE.Bone ? i.update(this.identityMatrix, !1) : i.updateMatrixWorld(!0)
        }
        if (void 0 == this.boneInverses)
            for (this.boneInverses = [], e = 0, t = this.bones.length; t > e; e++) i = new THREE.Matrix4, i.getInverse(this.bones[e].skinMatrix), this.boneInverses.push(i);
        for (e = 0, t = this.bones.length; t > e; e++) THREE.SkinnedMesh.offsetMatrix.multiply(this.bones[e].skinMatrix, this.boneInverses[e]), THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices, 16 * e);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }, THREE.SkinnedMesh.prototype.pose = function () {
        this.updateMatrixWorld(!0);
        for (var e = 0; e < this.geometry.skinIndices.length; e++) {
            var t = this.geometry.skinWeights[e],
                i = 1 / t.lengthManhattan();
            1 / 0 !== i ? t.multiplyScalar(i) : t.set(1)
        }
    }, THREE.SkinnedMesh.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), THREE.Mesh.prototype.clone.call(this, e), e
    }, THREE.SkinnedMesh.offsetMatrix = new THREE.Matrix4, THREE.MorphAnimMesh = function (e, t) {
        THREE.Mesh.call(this, e, t), this.duration = 1e3, this.mirroredLoop = !1, this.currentKeyframe = this.lastKeyframe = this.time = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, this.geometry.morphTargets.length - 1)
    }, THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.MorphAnimMesh.prototype.setFrameRange = function (e, t) {
        this.startKeyframe = e, this.endKeyframe = t, this.length = this.endKeyframe - this.startKeyframe + 1
    }, THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
        this.direction = 1, this.directionBackwards = !1
    }, THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
        this.direction = -1, this.directionBackwards = !0
    }, THREE.MorphAnimMesh.prototype.parseAnimations = function () {
        var e = this.geometry;
        e.animations || (e.animations = {});
        for (var t, i = e.animations, r = /([a-z]+)(\d+)/, n = 0, o = e.morphTargets.length; o > n; n++) {
            var a = e.morphTargets[n].name.match(r);
            if (a && 1 < a.length) {
                a = a[1], i[a] || (i[a] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                });
                var s = i[a];
                n < s.start && (s.start = n), n > s.end && (s.end = n), t || (t = a)
            }
        }
        e.firstAnimation = t
    }, THREE.MorphAnimMesh.prototype.setAnimationLabel = function (e, t, i) {
        this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[e] = {
            start: t,
            end: i
        }
    }, THREE.MorphAnimMesh.prototype.playAnimation = function (e, t) {
        var i = this.geometry.animations[e];
        i ? (this.setFrameRange(i.start, i.end), this.duration = 1e3 * ((i.end - i.start) / t), this.time = 0) : void 0
    }, THREE.MorphAnimMesh.prototype.updateAnimation = function (e) {
        var t = this.duration / this.length;
        this.time += this.direction * e, this.mirroredLoop ? (this.time > this.duration || 0 > this.time) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1)) : (this.time %= this.duration, 0 > this.time && (this.time += this.duration)), e = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / t), 0, this.length - 1), e !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[e] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = e), t = this.time % t / t, this.directionBackwards && (t = 1 - t), this.morphTargetInfluences[this.currentKeyframe] = t, this.morphTargetInfluences[this.lastKeyframe] = 1 - t
    }, THREE.MorphAnimMesh.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.MorphAnimMesh(this.geometry, this.material)), e.duration = this.duration, e.mirroredLoop = this.mirroredLoop, e.time = this.time, e.lastKeyframe = this.lastKeyframe, e.currentKeyframe = this.currentKeyframe, e.direction = this.direction, e.directionBackwards = this.directionBackwards, THREE.Mesh.prototype.clone.call(this, e), e
    }, THREE.Ribbon = function (e, t) {
        THREE.Object3D.call(this), this.geometry = e, this.material = t
    }, THREE.Ribbon.prototype = Object.create(THREE.Object3D.prototype), THREE.Ribbon.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.Ribbon(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, e), e
    }, THREE.LOD = function () {
        THREE.Object3D.call(this), this.LODs = []
    }, THREE.LOD.prototype = Object.create(THREE.Object3D.prototype), THREE.LOD.prototype.addLevel = function (e, t) {
        void 0 === t && (t = 0);
        for (var t = Math.abs(t), i = 0; i < this.LODs.length && !(t < this.LODs[i].visibleAtDistance); i++);
        this.LODs.splice(i, 0, {
            visibleAtDistance: t,
            object3D: e
        }), this.add(e)
    }, THREE.LOD.prototype.update = function (e) {
        if (1 < this.LODs.length) {
            e.matrixWorldInverse.getInverse(e.matrixWorld), e = e.matrixWorldInverse, e = -(e.elements[2] * this.matrixWorld.elements[12] + e.elements[6] * this.matrixWorld.elements[13] + e.elements[10] * this.matrixWorld.elements[14] + e.elements[14]), this.LODs[0].object3D.visible = !0;
            for (var t = 1; t < this.LODs.length && e >= this.LODs[t].visibleAtDistance; t++) this.LODs[t - 1].object3D.visible = !1, this.LODs[t].object3D.visible = !0;
            for (; t < this.LODs.length; t++) this.LODs[t].object3D.visible = !1
        }
    }, THREE.LOD.prototype.clone = function () {}, THREE.Sprite = function (e) {
        THREE.Object3D.call(this), this.material = void 0 !== e ? e : new THREE.SpriteMaterial, this.rotation3d = this.rotation, this.rotation = 0
    }, THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype), THREE.Sprite.prototype.updateMatrix = function () {
        this.matrix.setPosition(this.position), this.rotation3d.set(0, 0, this.rotation), this.matrix.setRotationFromEuler(this.rotation3d), (1 !== this.scale.x || 1 !== this.scale.y) && this.matrix.scale(this.scale), this.matrixWorldNeedsUpdate = !0
    }, THREE.Sprite.prototype.clone = function (e) {
        return void 0 === e && (e = new THREE.Sprite(this.material)), THREE.Object3D.prototype.clone.call(this, e), e
    }, THREE.Scene = function () {
        THREE.Object3D.call(this), this.overrideMaterial = this.fog = null, this.matrixAutoUpdate = !1, this.__objects = [], this.__lights = [], this.__objectsAdded = [], this.__objectsRemoved = []
    }, THREE.Scene.prototype = Object.create(THREE.Object3D.prototype), THREE.Scene.prototype.__addObject = function (e) {
        if (e instanceof THREE.Light) - 1 === this.__lights.indexOf(e) && this.__lights.push(e), e.target && void 0 === e.target.parent && this.add(e.target);
        else if (!(e instanceof THREE.Camera || e instanceof THREE.Bone) && -1 === this.__objects.indexOf(e)) {
            this.__objects.push(e), this.__objectsAdded.push(e);
            var t = this.__objectsRemoved.indexOf(e); - 1 !== t && this.__objectsRemoved.splice(t, 1)
        }
        for (t = 0; t < e.children.length; t++) this.__addObject(e.children[t])
    }, THREE.Scene.prototype.__removeObject = function (e) {
        if (e instanceof THREE.Light) {
            var t = this.__lights.indexOf(e); - 1 !== t && this.__lights.splice(t, 1)
        } else e instanceof THREE.Camera || (t = this.__objects.indexOf(e), -1 !== t && (this.__objects.splice(t, 1), this.__objectsRemoved.push(e), t = this.__objectsAdded.indexOf(e), -1 !== t && this.__objectsAdded.splice(t, 1)));
        for (t = 0; t < e.children.length; t++) this.__removeObject(e.children[t])
    }, THREE.Fog = function (e, t, i) {
        this.name = "", this.color = new THREE.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== i ? i : 1e3
    }, THREE.Fog.prototype.clone = function () {
        return new THREE.Fog(this.color.getHex(), this.near, this.far)
    }, THREE.FogExp2 = function (e, t) {
        this.name = "", this.color = new THREE.Color(e), this.density = void 0 !== t ? t : 25e-5
    }, THREE.FogExp2.prototype.clone = function () {
        return new THREE.FogExp2(this.color.getHex(), this.density)
    }, THREE.CanvasRenderer = function (e) {
        function t(e) {
            $ !== e && ($ = Y.globalAlpha = e)
        }

        function i(e) {
            Z !== e && (e === THREE.NormalBlending ? Y.globalCompositeOperation = "source-over" : e === THREE.AdditiveBlending ? Y.globalCompositeOperation = "lighter" : e === THREE.SubtractiveBlending && (Y.globalCompositeOperation = "darker"), Z = e)
        }

        function r(e) {
            Q !== e && (Q = Y.strokeStyle = e)
        }

        function n(e) {
            J !== e && (J = Y.fillStyle = e)
        }
        var o, a, s, l, h, c, u, f, p, d, m, E, g, v, T, y, _, R, x, b, w, H, S, M, C, A, P, L, F, D, z, U, N, O, B, V, k, I, G, e = e || {},
            W = this,
            j = new THREE.Projector,
            X = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
            Y = X.getContext("2d"),
            q = new THREE.Color(0),
            K = 0,
            $ = 1,
            Z = 0,
            Q = null,
            J = null,
            ee = null,
            te = null,
            ie = null,
            re = new THREE.RenderableVertex,
            ne = new THREE.RenderableVertex,
            oe = new THREE.Color,
            ae = new THREE.Color,
            se = new THREE.Color,
            le = new THREE.Color,
            he = new THREE.Color,
            ce = new THREE.Color,
            ue = new THREE.Color,
            fe = {},
            pe = {},
            de = new THREE.Box2,
            me = new THREE.Box2,
            Ee = new THREE.Box2,
            ge = !1,
            ve = new THREE.Color,
            Te = new THREE.Color,
            ye = new THREE.Color,
            _e = new THREE.Vector3,
            Re = 16;
        O = document.createElement("canvas"), O.width = O.height = 2, B = O.getContext("2d"), B.fillStyle = "rgba(0,0,0,1)", B.fillRect(0, 0, 2, 2), V = B.getImageData(0, 0, 2, 2), k = V.data, I = document.createElement("canvas"), I.width = I.height = Re, G = I.getContext("2d"), G.translate(-Re / 2, -Re / 2), G.scale(Re, Re), Re--, this.domElement = X, this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1, this.sortElements = this.sortObjects = this.autoClear = !0, this.info = {
            render: {
                vertices: 0,
                faces: 0
            }
        }, this.setSize = function (e, t) {
            l = e * this.devicePixelRatio, h = t * this.devicePixelRatio, c = Math.floor(l / 2), u = Math.floor(h / 2), X.width = l, X.height = h, X.style.width = e + "px", X.style.height = t + "px", de.min.set(-c, -u), de.max.set(c, u), me.min.set(-c, -u), me.max.set(c, u), $ = 1, Z = 0, ie = te = ee = J = Q = null
        }, this.setClearColor = function (e, t) {
            q.copy(e), K = void 0 !== t ? t : 1, me.min.set(-c, -u), me.max.set(c, u)
        }, this.setClearColorHex = function (e, t) {
            q.setHex(e), K = void 0 !== t ? t : 1, me.min.set(-c, -u), me.max.set(c, u)
        }, this.getMaxAnisotropy = function () {
            return 0
        }, this.clear = function () {
            Y.setTransform(1, 0, 0, -1, c, u), !1 === me.empty() && (me.intersect(de), me.expandByScalar(2), 1 > K && Y.clearRect(0 | me.min.x, 0 | me.min.y, me.max.x - me.min.x | 0, me.max.y - me.min.y | 0), K > 0 && (i(THREE.NormalBlending), t(1), n("rgba(" + Math.floor(255 * q.r) + "," + Math.floor(255 * q.g) + "," + Math.floor(255 * q.b) + "," + K + ")"), Y.fillRect(0 | me.min.x, 0 | me.min.y, me.max.x - me.min.x | 0, me.max.y - me.min.y | 0)), me.makeEmpty())
        }, this.render = function (e, l) {
            function h(e, t, i) {
                for (var r = 0, n = s.length; n > r; r++) {
                    var o = s[r],
                        a = o.color;
                    if (o instanceof THREE.DirectionalLight) {
                        var l = o.matrixWorld.getPosition().normalize(),
                            h = t.dot(l);
                        0 >= h || (h *= o.intensity, i.r += a.r * h, i.g += a.g * h, i.b += a.b * h)
                    } else o instanceof THREE.PointLight && (l = o.matrixWorld.getPosition(), h = t.dot(_e.sub(l, e).normalize()), 0 >= h || (h *= 0 == o.distance ? 1 : 1 - Math.min(e.distanceTo(l) / o.distance, 1), 0 != h && (h *= o.intensity, i.r += a.r * h, i.g += a.g * h, i.b += a.b * h)))
                }
            }

            function X(e, r, n, o, a, s, c, u) {
                W.info.render.vertices += 3, W.info.render.faces++, t(u.opacity), i(u.blending), E = e.positionScreen.x, g = e.positionScreen.y, v = r.positionScreen.x, T = r.positionScreen.y, y = n.positionScreen.x, _ = n.positionScreen.y, q(E, g, v, T, y, _), (u instanceof THREE.MeshLambertMaterial || u instanceof THREE.MeshPhongMaterial) && null === u.map && null === u.map ? (ce.copy(u.color), ue.copy(u.emissive), u.vertexColors === THREE.FaceColors && (ce.r *= c.color.r, ce.g *= c.color.g, ce.b *= c.color.b), !0 === ge ? !1 === u.wireframe && u.shading == THREE.SmoothShading && 3 == c.vertexNormalsLength ? (ae.r = se.r = le.r = ve.r, ae.g = se.g = le.g = ve.g, ae.b = se.b = le.b = ve.b, h(c.v1.positionWorld, c.vertexNormalsWorld[0], ae), h(c.v2.positionWorld, c.vertexNormalsWorld[1], se), h(c.v3.positionWorld, c.vertexNormalsWorld[2], le), ae.r = ae.r * ce.r + ue.r, ae.g = ae.g * ce.g + ue.g, ae.b = ae.b * ce.b + ue.b, se.r = se.r * ce.r + ue.r, se.g = se.g * ce.g + ue.g, se.b = se.b * ce.b + ue.b, le.r = le.r * ce.r + ue.r, le.g = le.g * ce.g + ue.g, le.b = le.b * ce.b + ue.b, he.r = .5 * (se.r + le.r), he.g = .5 * (se.g + le.g), he.b = .5 * (se.b + le.b), A = Re(ae, se, le, he), J(E, g, v, T, y, _, 0, 0, 1, 0, 0, 1, A)) : (oe.r = ve.r, oe.g = ve.g, oe.b = ve.b, h(c.centroidWorld, c.normalWorld, oe), oe.r = oe.r * ce.r + ue.r, oe.g = oe.g * ce.g + ue.g, oe.b = oe.b * ce.b + ue.b, !0 === u.wireframe ? $(oe, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : Z(oe)) : !0 === u.wireframe ? $(u.color, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : Z(u.color)) : u instanceof THREE.MeshBasicMaterial || u instanceof THREE.MeshLambertMaterial || u instanceof THREE.MeshPhongMaterial ? null !== u.map ? u.map.mapping instanceof THREE.UVMapping && (P = c.uvs[0], Q(E, g, v, T, y, _, P[o].x, P[o].y, P[a].x, P[a].y, P[s].x, P[s].y, u.map)) : null !== u.envMap ? u.envMap.mapping instanceof THREE.SphericalReflectionMapping && (e = l.matrixWorldInverse, _e.copy(c.vertexNormalsWorld[o]), L = .5 * (_e.x * e.elements[0] + _e.y * e.elements[4] + _e.z * e.elements[8]) + .5, F = .5 * (_e.x * e.elements[1] + _e.y * e.elements[5] + _e.z * e.elements[9]) + .5, _e.copy(c.vertexNormalsWorld[a]), D = .5 * (_e.x * e.elements[0] + _e.y * e.elements[4] + _e.z * e.elements[8]) + .5, z = .5 * (_e.x * e.elements[1] + _e.y * e.elements[5] + _e.z * e.elements[9]) + .5, _e.copy(c.vertexNormalsWorld[s]), U = .5 * (_e.x * e.elements[0] + _e.y * e.elements[4] + _e.z * e.elements[8]) + .5, N = .5 * (_e.x * e.elements[1] + _e.y * e.elements[5] + _e.z * e.elements[9]) + .5, Q(E, g, v, T, y, _, L, F, D, z, U, N, u.envMap)) : (oe.copy(u.color), u.vertexColors === THREE.FaceColors && (oe.r *= c.color.r, oe.g *= c.color.g, oe.b *= c.color.b), !0 === u.wireframe ? $(oe, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : Z(oe)) : u instanceof THREE.MeshDepthMaterial ? (M = l.near, C = l.far, ae.r = ae.g = ae.b = 1 - xe(e.positionScreen.z, M, C), se.r = se.g = se.b = 1 - xe(r.positionScreen.z, M, C), le.r = le.g = le.b = 1 - xe(n.positionScreen.z, M, C), he.r = .5 * (se.r + le.r), he.g = .5 * (se.g + le.g), he.b = .5 * (se.b + le.b), A = Re(ae, se, le, he), J(E, g, v, T, y, _, 0, 0, 1, 0, 0, 1, A)) : u instanceof THREE.MeshNormalMaterial && (oe.r = be(c.normalWorld.x), oe.g = be(c.normalWorld.y), oe.b = be(c.normalWorld.z), !0 === u.wireframe ? $(oe, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : Z(oe))
            }

            function q(e, t, i, r, n, o) {
                Y.beginPath(), Y.moveTo(e, t), Y.lineTo(i, r), Y.lineTo(n, o), Y.closePath()
            }

            function K(e, t, i, r, n, o, a, s) {
                Y.beginPath(), Y.moveTo(e, t), Y.lineTo(i, r), Y.lineTo(n, o), Y.lineTo(a, s), Y.closePath()
            }

            function $(e, t, i, n) {
                ee !== t && (ee = Y.lineWidth = t), te !== i && (te = Y.lineCap = i), ie !== n && (ie = Y.lineJoin = n), r(e.getStyle()), Y.stroke(), Ee.expandByScalar(2 * t)
            }

            function Z(e) {
                n(e.getStyle()), Y.fill()
            }

            function Q(e, t, i, r, o, a, s, l, h, c, u, f, p) {
                if (!(p instanceof THREE.DataTexture || void 0 === p.image || 0 == p.image.width)) {
                    if (!0 === p.needsUpdate) {
                        var d = p.wrapS == THREE.RepeatWrapping,
                            m = p.wrapT == THREE.RepeatWrapping;
                        fe[p.id] = Y.createPattern(p.image, !0 === d && !0 === m ? "repeat" : !0 === d && !1 === m ? "repeat-x" : !1 === d && !0 === m ? "repeat-y" : "no-repeat"), p.needsUpdate = !1
                    }
                    n(void 0 === fe[p.id] ? "rgba(0,0,0,1)" : fe[p.id]);
                    var d = p.offset.x / p.repeat.x,
                        m = p.offset.y / p.repeat.y,
                        E = p.image.width * p.repeat.x,
                        g = p.image.height * p.repeat.y,
                        s = (s + d) * E,
                        l = (1 - l + m) * g,
                        i = i - e,
                        r = r - t,
                        o = o - e,
                        a = a - t,
                        h = (h + d) * E - s,
                        c = (1 - c + m) * g - l,
                        u = (u + d) * E - s,
                        f = (1 - f + m) * g - l,
                        d = h * f - u * c;
                    0 === d ? (void 0 === pe[p.id] && (t = document.createElement("canvas"), t.width = p.image.width, t.height = p.image.height, t = t.getContext("2d"), t.drawImage(p.image, 0, 0), pe[p.id] = t.getImageData(0, 0, p.image.width, p.image.height).data), t = pe[p.id], s = 4 * (Math.floor(s) + Math.floor(l) * p.image.width), oe.setRGB(t[s] / 255, t[s + 1] / 255, t[s + 2] / 255), Z(oe)) : (d = 1 / d, p = (f * i - c * o) * d, c = (f * r - c * a) * d, i = (h * o - u * i) * d, r = (h * a - u * r) * d, e = e - p * s - i * l, s = t - c * s - r * l, Y.save(), Y.transform(p, c, i, r, e, s), Y.fill(), Y.restore())
                }
            }

            function J(e, t, i, r, n, o, a, s, l, h, c, u, f) {
                var p, d;
                p = f.width - 1, d = f.height - 1, a *= p, s *= d, i -= e, r -= t, n -= e, o -= t, l = l * p - a, h = h * d - s, c = c * p - a, u = u * d - s, d = 1 / (l * u - c * h), p = (u * i - h * n) * d, h = (u * r - h * o) * d, i = (l * n - c * i) * d, r = (l * o - c * r) * d, e = e - p * a - i * s, t = t - h * a - r * s, Y.save(), Y.transform(p, h, i, r, e, t), Y.clip(), Y.drawImage(f, 0, 0), Y.restore()
            }

            function Re(e, t, i, r) {
                return k[0] = 255 * e.r | 0, k[1] = 255 * e.g | 0, k[2] = 255 * e.b | 0, k[4] = 255 * t.r | 0, k[5] = 255 * t.g | 0, k[6] = 255 * t.b | 0, k[8] = 255 * i.r | 0, k[9] = 255 * i.g | 0, k[10] = 255 * i.b | 0, k[12] = 255 * r.r | 0, k[13] = 255 * r.g | 0, k[14] = 255 * r.b | 0, B.putImageData(V, 0, 0), G.drawImage(O, 0, 0), I
            }

            function xe(e, t, i) {
                return e = (e - t) / (i - t), e * e * (3 - 2 * e)
            }

            function be(e) {
                return e = .5 * (e + 1), 0 > e ? 0 : e > 1 ? 1 : e
            }

            function we(e, t) {
                var i = t.x - e.x,
                    r = t.y - e.y,
                    n = i * i + r * r;
                0 !== n && (n = 1 / Math.sqrt(n), i *= n, r *= n, t.x += i, t.y += r, e.x -= i, e.y -= r)
            }
            if (!1 == l instanceof THREE.Camera);
            else {
                if (!0 === this.autoClear && this.clear(), Y.setTransform(1, 0, 0, -1, c, u), W.info.render.vertices = 0, W.info.render.faces = 0, o = j.projectScene(e, l, this.sortObjects, this.sortElements), a = o.elements, s = o.lights, ge = 0 < s.length, !0 === ge) {
                    ve.setRGB(0, 0, 0), Te.setRGB(0, 0, 0), ye.setRGB(0, 0, 0);
                    for (var He = 0, Se = s.length; Se > He; He++) {
                        var Me = s[He],
                            Ce = Me.color;
                        Me instanceof THREE.AmbientLight ? (ve.r += Ce.r, ve.g += Ce.g, ve.b += Ce.b) : Me instanceof THREE.DirectionalLight ? (Te.r += Ce.r, Te.g += Ce.g, Te.b += Ce.b) : Me instanceof THREE.PointLight && (ye.r += Ce.r, ye.g += Ce.g, ye.b += Ce.b)
                    }
                }
                for (He = 0, Se = a.length; Se > He; He++) {
                    var Ae = a[He],
                        Me = Ae.material;
                    if (void 0 !== Me && !1 !== Me.visible) {
                        if (Ee.makeEmpty(), Ae instanceof THREE.RenderableParticle) {
                            f = Ae, f.x *= c, f.y *= u;
                            var Ce = f,
                                Pe = Ae;
                            t(Me.opacity), i(Me.blending);
                            var Le = void 0,
                                Fe = void 0,
                                De = void 0,
                                ze = void 0,
                                Ue = Ae = void 0,
                                Ne = void 0;
                            Me instanceof THREE.ParticleBasicMaterial ? null === Me.map ? (De = Pe.object.scale.x, ze = Pe.object.scale.y, De *= Pe.scale.x * c, ze *= Pe.scale.y * u, Ee.min.set(Ce.x - De, Ce.y - ze), Ee.max.set(Ce.x + De, Ce.y + ze), !1 !== de.isIntersectionBox(Ee) && (n(Me.color.getStyle()), Y.save(), Y.translate(Ce.x, Ce.y), Y.rotate(-Pe.rotation), Y.scale(De, ze), Y.fillRect(-1, -1, 2, 2), Y.restore())) : (Ae = Me.map.image, Ue = Ae.width >> 1, Ne = Ae.height >> 1, De = Pe.scale.x * c, ze = Pe.scale.y * u, Le = De * Ue, Fe = ze * Ne, Ee.min.set(Ce.x - Le, Ce.y - Fe), Ee.max.set(Ce.x + Le, Ce.y + Fe), !1 !== de.isIntersectionBox(Ee) && (Y.save(), Y.translate(Ce.x, Ce.y), Y.rotate(-Pe.rotation), Y.scale(De, -ze), Y.translate(-Ue, -Ne), Y.drawImage(Ae, 0, 0), Y.restore())) : Me instanceof THREE.ParticleCanvasMaterial && (Le = Pe.scale.x * c, Fe = Pe.scale.y * u, Ee.min.set(Ce.x - Le, Ce.y - Fe), Ee.max.set(Ce.x + Le, Ce.y + Fe), !1 !== de.isIntersectionBox(Ee) && (r(Me.color.getStyle()), n(Me.color.getStyle()), Y.save(), Y.translate(Ce.x, Ce.y), Y.rotate(-Pe.rotation), Y.scale(Le, Fe), Me.program(Y), Y.restore()))
                        } else Ae instanceof THREE.RenderableLine ? (f = Ae.v1, p = Ae.v2, f.positionScreen.x *= c, f.positionScreen.y *= u, p.positionScreen.x *= c, p.positionScreen.y *= u, Ee.setFromPoints([f.positionScreen, p.positionScreen]), !0 === de.isIntersectionBox(Ee) && (Ce = f, Pe = p, t(Me.opacity), i(Me.blending), Y.beginPath(), Y.moveTo(Ce.positionScreen.x, Ce.positionScreen.y), Y.lineTo(Pe.positionScreen.x, Pe.positionScreen.y), Me instanceof THREE.LineBasicMaterial && (Ce = Me.linewidth, ee !== Ce && (ee = Y.lineWidth = Ce), Ce = Me.linecap, te !== Ce && (te = Y.lineCap = Ce), Ce = Me.linejoin, ie !== Ce && (ie = Y.lineJoin = Ce), r(Me.color.getStyle()), Y.stroke(), Ee.expandByScalar(2 * Me.linewidth)))) : Ae instanceof THREE.RenderableFace3 ? (f = Ae.v1, p = Ae.v2, d = Ae.v3, f.positionScreen.x *= c, f.positionScreen.y *= u, p.positionScreen.x *= c, p.positionScreen.y *= u, d.positionScreen.x *= c, d.positionScreen.y *= u, !0 === Me.overdraw && (we(f.positionScreen, p.positionScreen), we(p.positionScreen, d.positionScreen), we(d.positionScreen, f.positionScreen)), Ee.setFromPoints([f.positionScreen, p.positionScreen, d.positionScreen]), !0 === de.isIntersectionBox(Ee) && X(f, p, d, 0, 1, 2, Ae, Me, e)) : Ae instanceof THREE.RenderableFace4 && (f = Ae.v1, p = Ae.v2, d = Ae.v3, m = Ae.v4, f.positionScreen.x *= c, f.positionScreen.y *= u, p.positionScreen.x *= c, p.positionScreen.y *= u, d.positionScreen.x *= c, d.positionScreen.y *= u, m.positionScreen.x *= c, m.positionScreen.y *= u, re.positionScreen.copy(p.positionScreen), ne.positionScreen.copy(m.positionScreen), !0 === Me.overdraw && (we(f.positionScreen, p.positionScreen), we(p.positionScreen, m.positionScreen), we(m.positionScreen, f.positionScreen), we(d.positionScreen, re.positionScreen), we(d.positionScreen, ne.positionScreen)), Ee.setFromPoints([f.positionScreen, p.positionScreen, d.positionScreen, m.positionScreen]), !0 === de.isIntersectionBox(Ee) && (Ce = f, Pe = p, Le = d, Fe = m, De = re, ze = ne, Ue = e, W.info.render.vertices += 4, W.info.render.faces++, t(Me.opacity), i(Me.blending), void 0 !== Me.map && null !== Me.map || void 0 !== Me.envMap && null !== Me.envMap ? (X(Ce, Pe, Fe, 0, 1, 3, Ae, Me, Ue), X(De, Le, ze, 1, 2, 3, Ae, Me, Ue)) : (E = Ce.positionScreen.x, g = Ce.positionScreen.y, v = Pe.positionScreen.x, T = Pe.positionScreen.y, y = Le.positionScreen.x, _ = Le.positionScreen.y, R = Fe.positionScreen.x, x = Fe.positionScreen.y, b = De.positionScreen.x, w = De.positionScreen.y, H = ze.positionScreen.x, S = ze.positionScreen.y, Me instanceof THREE.MeshLambertMaterial || Me instanceof THREE.MeshPhongMaterial ? (ce.copy(Me.color), ue.copy(Me.emissive), Me.vertexColors === THREE.FaceColors && (ce.r *= Ae.color.r, ce.g *= Ae.color.g, ce.b *= Ae.color.b), !0 === ge ? !1 === Me.wireframe && Me.shading == THREE.SmoothShading && 4 == Ae.vertexNormalsLength ? (ae.r = se.r = le.r = he.r = ve.r, ae.g = se.g = le.g = he.g = ve.g, ae.b = se.b = le.b = he.b = ve.b, h(Ae.v1.positionWorld, Ae.vertexNormalsWorld[0], ae), h(Ae.v2.positionWorld, Ae.vertexNormalsWorld[1], se), h(Ae.v4.positionWorld, Ae.vertexNormalsWorld[3], le), h(Ae.v3.positionWorld, Ae.vertexNormalsWorld[2], he), ae.r = ae.r * ce.r + ue.r, ae.g = ae.g * ce.g + ue.g, ae.b = ae.b * ce.b + ue.b, se.r = se.r * ce.r + ue.r, se.g = se.g * ce.g + ue.g, se.b = se.b * ce.b + ue.b, le.r = le.r * ce.r + ue.r, le.g = le.g * ce.g + ue.g, le.b = le.b * ce.b + ue.b, he.r = he.r * ce.r + ue.r, he.g = he.g * ce.g + ue.g, he.b = he.b * ce.b + ue.b, A = Re(ae, se, le, he), q(E, g, v, T, R, x), J(E, g, v, T, R, x, 0, 0, 1, 0, 0, 1, A), q(b, w, y, _, H, S), J(b, w, y, _, H, S, 1, 0, 1, 1, 0, 1, A)) : (oe.r = ve.r, oe.g = ve.g, oe.b = ve.b, h(Ae.centroidWorld, Ae.normalWorld, oe), oe.r = oe.r * ce.r + ue.r, oe.g = oe.g * ce.g + ue.g, oe.b = oe.b * ce.b + ue.b, K(E, g, v, T, y, _, R, x), !0 === Me.wireframe ? $(oe, Me.wireframeLinewidth, Me.wireframeLinecap, Me.wireframeLinejoin) : Z(oe)) : (oe.r = ce.r + ue.r, oe.g = ce.g + ue.g, oe.b = ce.b + ue.b, K(E, g, v, T, y, _, R, x), !0 === Me.wireframe ? $(oe, Me.wireframeLinewidth, Me.wireframeLinecap, Me.wireframeLinejoin) : Z(oe))) : Me instanceof THREE.MeshBasicMaterial ? (oe.copy(Me.color), Me.vertexColors === THREE.FaceColors && (oe.r *= Ae.color.r, oe.g *= Ae.color.g, oe.b *= Ae.color.b), K(E, g, v, T, y, _, R, x), !0 === Me.wireframe ? $(oe, Me.wireframeLinewidth, Me.wireframeLinecap, Me.wireframeLinejoin) : Z(oe)) : Me instanceof THREE.MeshNormalMaterial ? (oe.r = be(Ae.normalWorld.x), oe.g = be(Ae.normalWorld.y), oe.b = be(Ae.normalWorld.z), K(E, g, v, T, y, _, R, x), !0 === Me.wireframe ? $(oe, Me.wireframeLinewidth, Me.wireframeLinecap, Me.wireframeLinejoin) : Z(oe)) : Me instanceof THREE.MeshDepthMaterial && (M = l.near, C = l.far, ae.r = ae.g = ae.b = 1 - xe(Ce.positionScreen.z, M, C), se.r = se.g = se.b = 1 - xe(Pe.positionScreen.z, M, C), le.r = le.g = le.b = 1 - xe(Fe.positionScreen.z, M, C), he.r = he.g = he.b = 1 - xe(Le.positionScreen.z, M, C), A = Re(ae, se, le, he), q(E, g, v, T, R, x), J(E, g, v, T, R, x, 0, 0, 1, 0, 0, 1, A), q(b, w, y, _, H, S), J(b, w, y, _, H, S, 1, 0, 1, 1, 0, 1, A)))));
                        me.union(Ee)
                    }
                }
                Y.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
    }, THREE.ShaderChunk = {
        fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
        fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
        envmap_fragment: "#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
        envmap_pars_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
        envmap_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",
        map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
        map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",
        map_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
        map_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
        map_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
        map_fragment: "#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
        lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
        lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",
        lights_lambert_pars_vertex: "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
        lights_lambert_vertex: "vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
        lights_phong_pars_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
        lights_phong_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
        lights_phong_pars_fragment: "uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
        lights_phong_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -viewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
        color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
        skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned 	  += boneMatY * skinVertex * skinWeight.y;\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
        default_vertex: "vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix 	+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",
        defaultnormal_vertex: "vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",
        shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( depthKernel[0][0] < shadowCoord.z ) shadowKernel[0][0] = 0.25;\nelse shadowKernel[0][0] = 0.0;\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( depthKernel[0][1] < shadowCoord.z ) shadowKernel[0][1] = 0.25;\nelse shadowKernel[0][1] = 0.0;\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( depthKernel[0][2] < shadowCoord.z ) shadowKernel[0][2] = 0.25;\nelse shadowKernel[0][2] = 0.0;\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( depthKernel[1][0] < shadowCoord.z ) shadowKernel[1][0] = 0.25;\nelse shadowKernel[1][0] = 0.0;\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( depthKernel[1][1] < shadowCoord.z ) shadowKernel[1][1] = 0.25;\nelse shadowKernel[1][1] = 0.0;\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( depthKernel[1][2] < shadowCoord.z ) shadowKernel[1][2] = 0.25;\nelse shadowKernel[1][2] = 0.0;\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( depthKernel[2][0] < shadowCoord.z ) shadowKernel[2][0] = 0.25;\nelse shadowKernel[2][0] = 0.0;\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( depthKernel[2][1] < shadowCoord.z ) shadowKernel[2][1] = 0.25;\nelse shadowKernel[2][1] = 0.0;\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( depthKernel[2][2] < shadowCoord.z ) shadowKernel[2][2] = 0.25;\nelse shadowKernel[2][2] = 0.0;\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",
        linear_to_gamma_fragment: "#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"
    }, THREE.UniformsUtils = {
        merge: function (e) {
            var t, i, r, n = {};
            for (t = 0; t < e.length; t++)
                for (i in r = this.clone(e[t])) n[i] = r[i];
            return n
        },
        clone: function (e) {
            var t, i, r, n = {};
            for (t in e)
                for (i in n[t] = {}, e[t]) r = e[t][i], n[t][i] = r instanceof THREE.Color || r instanceof THREE.Vector2 || r instanceof THREE.Vector3 || r instanceof THREE.Vector4 || r instanceof THREE.Matrix4 || r instanceof THREE.Texture ? r.clone() : r instanceof Array ? r.slice() : r;
            return n
        }
    }, THREE.UniformsLib = {
        common: {
            diffuse: {
                type: "c",
                value: new THREE.Color(15658734)
            },
            opacity: {
                type: "f",
                value: 1
            },
            map: {
                type: "t",
                value: null
            },
            offsetRepeat: {
                type: "v4",
                value: new THREE.Vector4(0, 0, 1, 1)
            },
            lightMap: {
                type: "t",
                value: null
            },
            specularMap: {
                type: "t",
                value: null
            },
            envMap: {
                type: "t",
                value: null
            },
            flipEnvMap: {
                type: "f",
                value: -1
            },
            useRefract: {
                type: "i",
                value: 0
            },
            reflectivity: {
                type: "f",
                value: 1
            },
            refractionRatio: {
                type: "f",
                value: .98
            },
            combine: {
                type: "i",
                value: 0
            },
            morphTargetInfluences: {
                type: "f",
                value: 0
            }
        },
        bump: {
            bumpMap: {
                type: "t",
                value: null
            },
            bumpScale: {
                type: "f",
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                type: "t",
                value: null
            },
            normalScale: {
                type: "v2",
                value: new THREE.Vector2(1, 1)
            }
        },
        fog: {
            fogDensity: {
                type: "f",
                value: 25e-5
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2e3
            },
            fogColor: {
                type: "c",
                value: new THREE.Color(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                type: "fv",
                value: []
            },
            directionalLightDirection: {
                type: "fv",
                value: []
            },
            directionalLightColor: {
                type: "fv",
                value: []
            },
            hemisphereLightDirection: {
                type: "fv",
                value: []
            },
            hemisphereLightSkyColor: {
                type: "fv",
                value: []
            },
            hemisphereLightGroundColor: {
                type: "fv",
                value: []
            },
            pointLightColor: {
                type: "fv",
                value: []
            },
            pointLightPosition: {
                type: "fv",
                value: []
            },
            pointLightDistance: {
                type: "fv1",
                value: []
            },
            spotLightColor: {
                type: "fv",
                value: []
            },
            spotLightPosition: {
                type: "fv",
                value: []
            },
            spotLightDirection: {
                type: "fv",
                value: []
            },
            spotLightDistance: {
                type: "fv1",
                value: []
            },
            spotLightAngleCos: {
                type: "fv1",
                value: []
            },
            spotLightExponent: {
                type: "fv1",
                value: []
            }
        },
        particle: {
            psColor: {
                type: "c",
                value: new THREE.Color(15658734)
            },
            opacity: {
                type: "f",
                value: 1
            },
            size: {
                type: "f",
                value: 1
            },
            scale: {
                type: "f",
                value: 1
            },
            map: {
                type: "t",
                value: null
            },
            fogDensity: {
                type: "f",
                value: 25e-5
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2e3
            },
            fogColor: {
                type: "c",
                value: new THREE.Color(16777215)
            }
        },
        shadowmap: {
            shadowMap: {
                type: "tv",
                value: []
            },
            shadowMapSize: {
                type: "v2v",
                value: []
            },
            shadowBias: {
                type: "fv1",
                value: []
            },
            shadowDarkness: {
                type: "fv1",
                value: []
            },
            shadowMatrix: {
                type: "m4v",
                value: []
            }
        }
    }, THREE.ShaderLib = {
        depth: {
            uniforms: {
                mNear: {
                    type: "f",
                    value: 1
                },
                mFar: {
                    type: "f",
                    value: 2e3
                },
                opacity: {
                    type: "f",
                    value: 1
                }
            },
            vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"
        },
        normal: {
            uniforms: {
                opacity: {
                    type: "f",
                    value: 1
                }
            },
            vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}",
            fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"
        },
        basic: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
            vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
        },
        lambert: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
                ambient: {
                    type: "c",
                    value: new THREE.Color(16777215)
                },
                emissive: {
                    type: "c",
                    value: new THREE.Color(0)
                },
                wrapRGB: {
                    type: "v3",
                    value: new THREE.Vector3(1, 1, 1)
                }
            }]),
            vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
        },
        phong: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
                ambient: {
                    type: "c",
                    value: new THREE.Color(16777215)
                },
                emissive: {
                    type: "c",
                    value: new THREE.Color(0)
                },
                specular: {
                    type: "c",
                    value: new THREE.Color(1118481)
                },
                shininess: {
                    type: "f",
                    value: 30
                },
                wrapRGB: {
                    type: "v3",
                    value: new THREE.Vector3(1, 1, 1)
                }
            }]),
            vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
        },
        particle_basic: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
            vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
        },
        dashed: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
                scale: {
                    type: "f",
                    value: 1
                },
                dashSize: {
                    type: "f",
                    value: 1
                },
                totalSize: {
                    type: "f",
                    value: 2
                }
            }]),
            vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")
        },
        depthRGBA: {
            uniforms: {},
            vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),
            fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"
        }
    }, THREE.WebGLRenderer = function (e) {
        function t(e) {
            if (e.__webglCustomAttributesList)
                for (var t in e.__webglCustomAttributesList) k.deleteBuffer(e.__webglCustomAttributesList[t].buffer)
        }

        function i(e, t) {
            var i = e.vertices.length,
                r = t.material;
            if (r.attributes) {
                void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
                for (var n in r.attributes) {
                    var o = r.attributes[n];
                    if (!o.__webglInitialized || o.createUniqueBuffers) {
                        o.__webglInitialized = !0;
                        var a = 1;
                        "v2" === o.type ? a = 2 : "v3" === o.type ? a = 3 : "v4" === o.type ? a = 4 : "c" === o.type && (a = 3), o.size = a, o.array = new Float32Array(i * a), o.buffer = k.createBuffer(), o.buffer.belongsToAttribute = n, o.needsUpdate = !0
                    }
                    e.__webglCustomAttributesList.push(o)
                }
            }
        }

        function r(e, t) {
            var i = t.geometry,
                r = e.faces3,
                s = e.faces4,
                l = 3 * r.length + 4 * s.length,
                h = 1 * r.length + 2 * s.length,
                s = 3 * r.length + 4 * s.length,
                r = n(t, e),
                c = a(r),
                u = o(r),
                f = r.vertexColors ? r.vertexColors : !1;
            if (e.__vertexArray = new Float32Array(3 * l), u && (e.__normalArray = new Float32Array(3 * l)), i.hasTangents && (e.__tangentArray = new Float32Array(4 * l)), f && (e.__colorArray = new Float32Array(3 * l)), c && ((0 < i.faceUvs.length || 0 < i.faceVertexUvs.length) && (e.__uvArray = new Float32Array(2 * l)), (1 < i.faceUvs.length || 1 < i.faceVertexUvs.length) && (e.__uv2Array = new Float32Array(2 * l))), t.geometry.skinWeights.length && t.geometry.skinIndices.length && (e.__skinIndexArray = new Float32Array(4 * l), e.__skinWeightArray = new Float32Array(4 * l)), e.__faceArray = new Uint16Array(3 * h), e.__lineArray = new Uint16Array(2 * s), e.numMorphTargets)
                for (e.__morphTargetsArrays = [], i = 0, c = e.numMorphTargets; c > i; i++) e.__morphTargetsArrays.push(new Float32Array(3 * l));
            if (e.numMorphNormals)
                for (e.__morphNormalsArrays = [], i = 0, c = e.numMorphNormals; c > i; i++) e.__morphNormalsArrays.push(new Float32Array(3 * l));
            if (e.__webglFaceCount = 3 * h, e.__webglLineCount = 2 * s, r.attributes) {
                void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
                for (var p in r.attributes) {
                    var d, h = r.attributes[p],
                        i = {};
                    for (d in h) i[d] = h[d];
                    i.__webglInitialized && !i.createUniqueBuffers || (i.__webglInitialized = !0, s = 1, "v2" === i.type ? s = 2 : "v3" === i.type ? s = 3 : "v4" === i.type ? s = 4 : "c" === i.type && (s = 3), i.size = s, i.array = new Float32Array(l * s), i.buffer = k.createBuffer(), i.buffer.belongsToAttribute = p, h.needsUpdate = !0, i.__original = h), e.__webglCustomAttributesList.push(i)
                }
            }
            e.__inittedArrays = !0
        }

        function n(e, t) {
            return e.material instanceof THREE.MeshFaceMaterial ? e.material.materials[t.materialIndex] : e.material
        }

        function o(e) {
            return e instanceof THREE.MeshBasicMaterial && !e.envMap || e instanceof THREE.MeshDepthMaterial ? !1 : e && void 0 !== e.shading && e.shading === THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading
        }

        function a(e) {
            return !!(e.map || e.lightMap || e.bumpMap || e.normalMap || e.specularMap || e instanceof THREE.ShaderMaterial)
        }

        function s(e) {
            var t, i, r;
            for (t in e.attributes) r = "index" === t ? k.ELEMENT_ARRAY_BUFFER : k.ARRAY_BUFFER, i = e.attributes[t], i.buffer = k.createBuffer(), k.bindBuffer(r, i.buffer), k.bufferData(r, i.array, k.STATIC_DRAW)
        }

        function l(e, t, i) {
            var r = e.attributes,
                n = r.index,
                o = r.position,
                a = r.normal,
                s = r.uv,
                l = r.color,
                r = r.tangent;
            if (e.elementsNeedUpdate && void 0 !== n && (k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, n.buffer), k.bufferData(k.ELEMENT_ARRAY_BUFFER, n.array, t)), e.verticesNeedUpdate && void 0 !== o && (k.bindBuffer(k.ARRAY_BUFFER, o.buffer), k.bufferData(k.ARRAY_BUFFER, o.array, t)), e.normalsNeedUpdate && void 0 !== a && (k.bindBuffer(k.ARRAY_BUFFER, a.buffer), k.bufferData(k.ARRAY_BUFFER, a.array, t)), e.uvsNeedUpdate && void 0 !== s && (k.bindBuffer(k.ARRAY_BUFFER, s.buffer), k.bufferData(k.ARRAY_BUFFER, s.array, t)), e.colorsNeedUpdate && void 0 !== l && (k.bindBuffer(k.ARRAY_BUFFER, l.buffer), k.bufferData(k.ARRAY_BUFFER, l.array, t)), e.tangentsNeedUpdate && void 0 !== r && (k.bindBuffer(k.ARRAY_BUFFER, r.buffer), k.bufferData(k.ARRAY_BUFFER, r.array, t)), i)
                for (var h in e.attributes) delete e.attributes[h].array
        }

        function h(e) {
            ye[e] || (k.enableVertexAttribArray(e), ye[e] = !0)
        }

        function c() {
            for (var e in ye) ye[e] && (k.disableVertexAttribArray(e), ye[e] = !1)
        }

        function u(e, t) {
            return e.z !== t.z ? t.z - e.z : t.id - e.id
        }

        function f(e, t) {
            return t[0] - e[0]
        }

        function p(e, t, i) {
            if (e.length)
                for (var r = 0, n = e.length; n > r; r++) J = K = null, Z = Q = re = ie = he = le = ne = -1, He = !0, e[r].render(t, i, ve, Te), J = K = null, Z = Q = re = ie = he = le = ne = -1, He = !0
        }

        function d(e, t, i, r, n, o, a, s) {
            var l, h, c, u;
            t ? (h = e.length - 1, u = t = -1) : (h = 0, t = e.length, u = 1);
            for (var f = h; f !== t; f += u)
                if (l = e[f], l.render) {
                    if (h = l.object, c = l.buffer, s) l = s;
                    else {
                        if (l = l[i], !l) continue;
                        a && X.setBlending(l.blending, l.blendEquation, l.blendSrc, l.blendDst), X.setDepthTest(l.depthTest), X.setDepthWrite(l.depthWrite), H(l.polygonOffset, l.polygonOffsetFactor, l.polygonOffsetUnits)
                    }
                    X.setMaterialFaces(l), c instanceof THREE.BufferGeometry ? X.renderBufferDirect(r, n, o, l, c, h) : X.renderBuffer(r, n, o, l, c, h)
                }
        }

        function m(e, t, i, r, n, o, a) {
            for (var s, l, h = 0, c = e.length; c > h; h++)
                if (s = e[h], l = s.object, l.visible) {
                    if (a) s = a;
                    else {
                        if (s = s[t], !s) continue;
                        o && X.setBlending(s.blending, s.blendEquation, s.blendSrc, s.blendDst), X.setDepthTest(s.depthTest), X.setDepthWrite(s.depthWrite), H(s.polygonOffset, s.polygonOffsetFactor, s.polygonOffsetUnits)
                    }
                    X.renderImmediateObject(i, r, n, s, l)
                }
        }

        function E(e, t, i) {
            e.push({
                buffer: t,
                object: i,
                opaque: null,
                transparent: null
            })
        }

        function g(e) {
            for (var t in e.attributes)
                if (e.attributes[t].needsUpdate) return !0;
            return !1
        }

        function v(e) {
            for (var t in e.attributes) e.attributes[t].needsUpdate = !1
        }

        function T(e, t) {
            for (var i = e.length - 1; i >= 0; i--) e[i].object === t && e.splice(i, 1)
        }

        function y(e, t) {
            for (var i = e.length - 1; i >= 0; i--) e[i] === t && e.splice(i, 1)
        }

        function _(e, t, i, r, n) {
            te = 0, r.needsUpdate && (r.program && We(r), X.initMaterial(r, t, i, n), r.needsUpdate = !1), r.morphTargets && !n.__webglMorphTargetInfluences && (n.__webglMorphTargetInfluences = new Float32Array(X.maxMorphTargets));
            var o = !1,
                a = r.program,
                s = a.uniforms,
                l = r.uniforms;
            if (a !== K && (k.useProgram(a), K = a, o = !0), r.id !== Z && (Z = r.id, o = !0), (o || e !== J) && (k.uniformMatrix4fv(s.projectionMatrix, !1, e.projectionMatrix.elements), e !== J && (J = e)), r.skinning)
                if (Fe && n.useVertexTexture) {
                    if (null !== s.boneTexture) {
                        var h = R();
                        k.uniform1i(s.boneTexture, h), X.setTexture(n.boneTexture, h)
                    }
                } else null !== s.boneGlobalMatrices && k.uniformMatrix4fv(s.boneGlobalMatrices, !1, n.boneMatrices);
            if (o) {
                if (i && r.fog && (l.fogColor.value = i.color, i instanceof THREE.Fog ? (l.fogNear.value = i.near, l.fogFar.value = i.far) : i instanceof THREE.FogExp2 && (l.fogDensity.value = i.density)), r instanceof THREE.MeshPhongMaterial || r instanceof THREE.MeshLambertMaterial || r.lights) {
                    if (He) {
                        for (var c, u, f, p, d = h = 0, m = 0, E = Se, g = E.directional.colors, v = E.directional.positions, T = E.point.colors, y = E.point.positions, _ = E.point.distances, x = E.spot.colors, H = E.spot.positions, S = E.spot.distances, C = E.spot.directions, A = E.spot.anglesCos, F = E.spot.exponents, D = E.hemi.skyColors, z = E.hemi.groundColors, U = E.hemi.positions, N = 0, O = 0, B = 0, V = 0, I = 0, G = 0, W = 0, j = 0, Y = c = 0, i = p = Y = 0, o = t.length; o > i; i++) c = t[i], c.onlyShadow || (u = c.color, f = c.intensity, p = c.distance, c instanceof THREE.AmbientLight ? c.visible && (X.gammaInput ? (h += u.r * u.r, d += u.g * u.g, m += u.b * u.b) : (h += u.r, d += u.g, m += u.b)) : c instanceof THREE.DirectionalLight ? (I += 1, c.visible && (we.copy(c.matrixWorld.getPosition()), we.subSelf(c.target.matrixWorld.getPosition()), we.normalize(), 0 === we.x && 0 === we.y && 0 === we.z || (c = 3 * N, v[c] = we.x, v[c + 1] = we.y, v[c + 2] = we.z, X.gammaInput ? b(g, c, u, f * f) : w(g, c, u, f), N += 1))) : c instanceof THREE.PointLight ? (G += 1, c.visible && (Y = 3 * O, X.gammaInput ? b(T, Y, u, f * f) : w(T, Y, u, f), f = c.matrixWorld.getPosition(), y[Y] = f.x, y[Y + 1] = f.y, y[Y + 2] = f.z, _[O] = p, O += 1)) : c instanceof THREE.SpotLight ? (W += 1, c.visible && (Y = 3 * B, X.gammaInput ? b(x, Y, u, f * f) : w(x, Y, u, f), f = c.matrixWorld.getPosition(), H[Y] = f.x, H[Y + 1] = f.y, H[Y + 2] = f.z, S[B] = p, we.copy(f), we.subSelf(c.target.matrixWorld.getPosition()), we.normalize(), C[Y] = we.x, C[Y + 1] = we.y, C[Y + 2] = we.z, A[B] = Math.cos(c.angle), F[B] = c.exponent, B += 1)) : c instanceof THREE.HemisphereLight && (j += 1, c.visible && (we.copy(c.matrixWorld.getPosition()), we.normalize(), 0 === we.x && 0 === we.y && 0 === we.z || (p = 3 * V, U[p] = we.x, U[p + 1] = we.y, U[p + 2] = we.z, u = c.color, c = c.groundColor, X.gammaInput ? (f *= f, b(D, p, u, f), b(z, p, c, f)) : (w(D, p, u, f), w(z, p, c, f)), V += 1))));
                        for (i = 3 * N, o = Math.max(g.length, 3 * I); o > i; i++) g[i] = 0;
                        for (i = 3 * O, o = Math.max(T.length, 3 * G); o > i; i++) T[i] = 0;
                        for (i = 3 * B, o = Math.max(x.length, 3 * W); o > i; i++) x[i] = 0;
                        for (i = 3 * V, o = Math.max(D.length, 3 * j); o > i; i++) D[i] = 0;
                        for (i = 3 * V, o = Math.max(z.length, 3 * j); o > i; i++) z[i] = 0;
                        E.directional.length = N, E.point.length = O, E.spot.length = B, E.hemi.length = V, E.ambient[0] = h, E.ambient[1] = d, E.ambient[2] = m, He = !1
                    }
                    i = Se, l.ambientLightColor.value = i.ambient, l.directionalLightColor.value = i.directional.colors, l.directionalLightDirection.value = i.directional.positions, l.pointLightColor.value = i.point.colors, l.pointLightPosition.value = i.point.positions, l.pointLightDistance.value = i.point.distances, l.spotLightColor.value = i.spot.colors, l.spotLightPosition.value = i.spot.positions, l.spotLightDistance.value = i.spot.distances, l.spotLightDirection.value = i.spot.directions, l.spotLightAngleCos.value = i.spot.anglesCos, l.spotLightExponent.value = i.spot.exponents, l.hemisphereLightSkyColor.value = i.hemi.skyColors, l.hemisphereLightGroundColor.value = i.hemi.groundColors, l.hemisphereLightDirection.value = i.hemi.positions
                }
                if (r instanceof THREE.MeshBasicMaterial || r instanceof THREE.MeshLambertMaterial || r instanceof THREE.MeshPhongMaterial) {
                    l.opacity.value = r.opacity, X.gammaInput ? l.diffuse.value.copyGammaToLinear(r.color) : l.diffuse.value = r.color, l.map.value = r.map, l.lightMap.value = r.lightMap, l.specularMap.value = r.specularMap, r.bumpMap && (l.bumpMap.value = r.bumpMap, l.bumpScale.value = r.bumpScale), r.normalMap && (l.normalMap.value = r.normalMap, l.normalScale.value.copy(r.normalScale));
                    var q;
                    r.map ? q = r.map : r.specularMap ? q = r.specularMap : r.normalMap ? q = r.normalMap : r.bumpMap && (q = r.bumpMap), void 0 !== q && (i = q.offset, q = q.repeat, l.offsetRepeat.value.set(i.x, i.y, q.x, q.y)), l.envMap.value = r.envMap, l.flipEnvMap.value = r.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1, l.reflectivity.value = r.reflectivity, l.refractionRatio.value = r.refractionRatio, l.combine.value = r.combine, l.useRefract.value = r.envMap && r.envMap.mapping instanceof THREE.CubeRefractionMapping
                }
                if (r instanceof THREE.LineBasicMaterial ? (l.diffuse.value = r.color, l.opacity.value = r.opacity) : r instanceof THREE.LineDashedMaterial ? (l.diffuse.value = r.color, l.opacity.value = r.opacity, l.dashSize.value = r.dashSize, l.totalSize.value = r.dashSize + r.gapSize, l.scale.value = r.scale) : r instanceof THREE.ParticleBasicMaterial ? (l.psColor.value = r.color, l.opacity.value = r.opacity, l.size.value = r.size, l.scale.value = L.height / 2, l.map.value = r.map) : r instanceof THREE.MeshPhongMaterial ? (l.shininess.value = r.shininess, X.gammaInput ? (l.ambient.value.copyGammaToLinear(r.ambient), l.emissive.value.copyGammaToLinear(r.emissive), l.specular.value.copyGammaToLinear(r.specular)) : (l.ambient.value = r.ambient, l.emissive.value = r.emissive, l.specular.value = r.specular), r.wrapAround && l.wrapRGB.value.copy(r.wrapRGB)) : r instanceof THREE.MeshLambertMaterial ? (X.gammaInput ? (l.ambient.value.copyGammaToLinear(r.ambient), l.emissive.value.copyGammaToLinear(r.emissive)) : (l.ambient.value = r.ambient, l.emissive.value = r.emissive), r.wrapAround && l.wrapRGB.value.copy(r.wrapRGB)) : r instanceof THREE.MeshDepthMaterial ? (l.mNear.value = e.near, l.mFar.value = e.far, l.opacity.value = r.opacity) : r instanceof THREE.MeshNormalMaterial && (l.opacity.value = r.opacity), n.receiveShadow && !r._shadowPass && l.shadowMatrix)
                    for (i = q = 0, o = t.length; o > i; i++) h = t[i], h.castShadow && (h instanceof THREE.SpotLight || h instanceof THREE.DirectionalLight && !h.shadowCascade) && (l.shadowMap.value[q] = h.shadowMap, l.shadowMapSize.value[q] = h.shadowMapSize, l.shadowMatrix.value[q] = h.shadowMatrix, l.shadowDarkness.value[q] = h.shadowDarkness, l.shadowBias.value[q] = h.shadowBias, q++);
                for (t = r.uniformsList, l = 0, q = t.length; q > l; l++)
                    if (o = a.uniforms[t[l][1]])
                        if (i = t[l][0], d = i.type, h = i.value, "i" === d) k.uniform1i(o, h);
                        else if ("f" === d) k.uniform1f(o, h);
                else if ("v2" === d) k.uniform2f(o, h.x, h.y);
                else if ("v3" === d) k.uniform3f(o, h.x, h.y, h.z);
                else if ("v4" === d) k.uniform4f(o, h.x, h.y, h.z, h.w);
                else if ("c" === d) k.uniform3f(o, h.r, h.g, h.b);
                else if ("iv1" === d) k.uniform1iv(o, h);
                else if ("iv" === d) k.uniform3iv(o, h);
                else if ("fv1" === d) k.uniform1fv(o, h);
                else if ("fv" === d) k.uniform3fv(o, h);
                else if ("v2v" === d) {
                    for (void 0 === i._array && (i._array = new Float32Array(2 * h.length)), d = 0, m = h.length; m > d; d++) E = 2 * d, i._array[E] = h[d].x, i._array[E + 1] = h[d].y;
                    k.uniform2fv(o, i._array)
                } else if ("v3v" === d) {
                    for (void 0 === i._array && (i._array = new Float32Array(3 * h.length)), d = 0, m = h.length; m > d; d++) E = 3 * d, i._array[E] = h[d].x, i._array[E + 1] = h[d].y, i._array[E + 2] = h[d].z;
                    k.uniform3fv(o, i._array)
                } else if ("v4v" === d) {
                    for (void 0 === i._array && (i._array = new Float32Array(4 * h.length)), d = 0, m = h.length; m > d; d++) E = 4 * d, i._array[E] = h[d].x, i._array[E + 1] = h[d].y, i._array[E + 2] = h[d].z, i._array[E + 3] = h[d].w;
                    k.uniform4fv(o, i._array)
                } else if ("m4" === d) void 0 === i._array && (i._array = new Float32Array(16)), h.flattenToArray(i._array), k.uniformMatrix4fv(o, !1, i._array);
                else if ("m4v" === d) {
                    for (void 0 === i._array && (i._array = new Float32Array(16 * h.length)), d = 0, m = h.length; m > d; d++) h[d].flattenToArrayOffset(i._array, 16 * d);
                    k.uniformMatrix4fv(o, !1, i._array)
                } else if ("t" === d) {
                    if (E = h, h = R(), k.uniform1i(o, h), E)
                        if (E.image instanceof Array && 6 === E.image.length) {
                            if (i = E, o = h, 6 === i.image.length)
                                if (i.needsUpdate) {
                                    for (i.image.__webglTextureCube || (i.image.__webglTextureCube = k.createTexture(), X.info.memory.textures++), k.activeTexture(k.TEXTURE0 + o), k.bindTexture(k.TEXTURE_CUBE_MAP, i.image.__webglTextureCube), k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, i.flipY), o = i instanceof THREE.CompressedTexture, h = [], d = 0; 6 > d; d++) X.autoScaleCubemaps && !o ? (m = h, E = d, g = i.image[d], T = Ae, g.width <= T && g.height <= T || (y = Math.max(g.width, g.height), v = Math.floor(g.width * T / y), T = Math.floor(g.height * T / y), y = document.createElement("canvas"), y.width = v, y.height = T, y.getContext("2d").drawImage(g, 0, 0, g.width, g.height, 0, 0, v, T), g = y), m[E] = g) : h[d] = i.image[d];
                                    for (d = h[0], m = 0 === (d.width & d.width - 1) && 0 === (d.height & d.height - 1), E = P(i.format), g = P(i.type), M(k.TEXTURE_CUBE_MAP, i, m), d = 0; 6 > d; d++)
                                        if (o)
                                            for (T = h[d].mipmaps, y = 0, _ = T.length; _ > y; y++) v = T[y], k.compressedTexImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X + d, y, E, v.width, v.height, 0, v.data);
                                        else k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X + d, 0, E, E, g, h[d]);
                                    i.generateMipmaps && m && k.generateMipmap(k.TEXTURE_CUBE_MAP), i.needsUpdate = !1, i.onUpdate && i.onUpdate()
                                } else k.activeTexture(k.TEXTURE0 + o), k.bindTexture(k.TEXTURE_CUBE_MAP, i.image.__webglTextureCube)
                        } else E instanceof THREE.WebGLRenderTargetCube ? (i = E, k.activeTexture(k.TEXTURE0 + h), k.bindTexture(k.TEXTURE_CUBE_MAP, i.__webglTexture)) : X.setTexture(E, h)
                } else if ("tv" === d) {
                    for (void 0 === i._array && (i._array = []), d = 0, m = i.value.length; m > d; d++) i._array[d] = R();
                    for (k.uniform1iv(o, i._array), d = 0, m = i.value.length; m > d; d++) E = i.value[d], h = i._array[d], E && X.setTexture(E, h)
                }(r instanceof THREE.ShaderMaterial || r instanceof THREE.MeshPhongMaterial || r.envMap) && null !== s.cameraPosition && (t = e.matrixWorld.getPosition(), k.uniform3f(s.cameraPosition, t.x, t.y, t.z)), (r instanceof THREE.MeshPhongMaterial || r instanceof THREE.MeshLambertMaterial || r instanceof THREE.ShaderMaterial || r.skinning) && null !== s.viewMatrix && k.uniformMatrix4fv(s.viewMatrix, !1, e.matrixWorldInverse.elements)
            }
            return k.uniformMatrix4fv(s.modelViewMatrix, !1, n._modelViewMatrix.elements), s.normalMatrix && k.uniformMatrix3fv(s.normalMatrix, !1, n._normalMatrix.elements), null !== s.modelMatrix && k.uniformMatrix4fv(s.modelMatrix, !1, n.matrixWorld.elements), a
        }

        function R() {
            var e = te;
            return te += 1, e
        }

        function x(e, t) {
            e._modelViewMatrix.multiply(t.matrixWorldInverse, e.matrixWorld), e._normalMatrix.getInverse(e._modelViewMatrix), e._normalMatrix.transpose()
        }

        function b(e, t, i, r) {
            e[t] = i.r * i.r * r, e[t + 1] = i.g * i.g * r, e[t + 2] = i.b * i.b * r
        }

        function w(e, t, i, r) {
            e[t] = i.r * r, e[t + 1] = i.g * r, e[t + 2] = i.b * r
        }

        function H(e, t, i) {
            ce !== e && (e ? k.enable(k.POLYGON_OFFSET_FILL) : k.disable(k.POLYGON_OFFSET_FILL), ce = e), !e || ue === t && fe === i || (k.polygonOffset(t, i), ue = t, fe = i)
        }

        function S(e, t) {
            var i;
            return "fragment" === e ? i = k.createShader(k.FRAGMENT_SHADER) : "vertex" === e && (i = k.createShader(k.VERTEX_SHADER)), k.shaderSource(i, t), k.compileShader(i), k.getShaderParameter(i, k.COMPILE_STATUS) ? i : null
        }

        function M(e, t, i) {
            i ? (k.texParameteri(e, k.TEXTURE_WRAP_S, P(t.wrapS)), k.texParameteri(e, k.TEXTURE_WRAP_T, P(t.wrapT)), k.texParameteri(e, k.TEXTURE_MAG_FILTER, P(t.magFilter)), k.texParameteri(e, k.TEXTURE_MIN_FILTER, P(t.minFilter))) : (k.texParameteri(e, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE), k.texParameteri(e, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE), k.texParameteri(e, k.TEXTURE_MAG_FILTER, A(t.magFilter)), k.texParameteri(e, k.TEXTURE_MIN_FILTER, A(t.minFilter))), W && t.type !== THREE.FloatType && (1 < t.anisotropy || t.__oldAnisotropy) && (k.texParameterf(e, W.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Pe)), t.__oldAnisotropy = t.anisotropy)
        }

        function C(e, t) {
            k.bindRenderbuffer(k.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (k.renderbufferStorage(k.RENDERBUFFER, k.DEPTH_COMPONENT16, t.width, t.height), k.framebufferRenderbuffer(k.FRAMEBUFFER, k.DEPTH_ATTACHMENT, k.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (k.renderbufferStorage(k.RENDERBUFFER, k.DEPTH_STENCIL, t.width, t.height), k.framebufferRenderbuffer(k.FRAMEBUFFER, k.DEPTH_STENCIL_ATTACHMENT, k.RENDERBUFFER, e)) : k.renderbufferStorage(k.RENDERBUFFER, k.RGBA4, t.width, t.height)
        }

        function A(e) {
            return e === THREE.NearestFilter || e === THREE.NearestMipMapNearestFilter || e === THREE.NearestMipMapLinearFilter ? k.NEAREST : k.LINEAR
        }

        function P(e) {
            if (e === THREE.RepeatWrapping) return k.REPEAT;
            if (e === THREE.ClampToEdgeWrapping) return k.CLAMP_TO_EDGE;
            if (e === THREE.MirroredRepeatWrapping) return k.MIRRORED_REPEAT;
            if (e === THREE.NearestFilter) return k.NEAREST;
            if (e === THREE.NearestMipMapNearestFilter) return k.NEAREST_MIPMAP_NEAREST;
            if (e === THREE.NearestMipMapLinearFilter) return k.NEAREST_MIPMAP_LINEAR;
            if (e === THREE.LinearFilter) return k.LINEAR;
            if (e === THREE.LinearMipMapNearestFilter) return k.LINEAR_MIPMAP_NEAREST;
            if (e === THREE.LinearMipMapLinearFilter) return k.LINEAR_MIPMAP_LINEAR;
            if (e === THREE.UnsignedByteType) return k.UNSIGNED_BYTE;
            if (e === THREE.UnsignedShort4444Type) return k.UNSIGNED_SHORT_4_4_4_4;
            if (e === THREE.UnsignedShort5551Type) return k.UNSIGNED_SHORT_5_5_5_1;
            if (e === THREE.UnsignedShort565Type) return k.UNSIGNED_SHORT_5_6_5;
            if (e === THREE.ByteType) return k.BYTE;
            if (e === THREE.ShortType) return k.SHORT;
            if (e === THREE.UnsignedShortType) return k.UNSIGNED_SHORT;
            if (e === THREE.IntType) return k.INT;
            if (e === THREE.UnsignedIntType) return k.UNSIGNED_INT;
            if (e === THREE.FloatType) return k.FLOAT;
            if (e === THREE.AlphaFormat) return k.ALPHA;
            if (e === THREE.RGBFormat) return k.RGB;
            if (e === THREE.RGBAFormat) return k.RGBA;
            if (e === THREE.LuminanceFormat) return k.LUMINANCE;
            if (e === THREE.LuminanceAlphaFormat) return k.LUMINANCE_ALPHA;
            if (e === THREE.AddEquation) return k.FUNC_ADD;
            if (e === THREE.SubtractEquation) return k.FUNC_SUBTRACT;
            if (e === THREE.ReverseSubtractEquation) return k.FUNC_REVERSE_SUBTRACT;
            if (e === THREE.ZeroFactor) return k.ZERO;
            if (e === THREE.OneFactor) return k.ONE;
            if (e === THREE.SrcColorFactor) return k.SRC_COLOR;
            if (e === THREE.OneMinusSrcColorFactor) return k.ONE_MINUS_SRC_COLOR;
            if (e === THREE.SrcAlphaFactor) return k.SRC_ALPHA;
            if (e === THREE.OneMinusSrcAlphaFactor) return k.ONE_MINUS_SRC_ALPHA;
            if (e === THREE.DstAlphaFactor) return k.DST_ALPHA;
            if (e === THREE.OneMinusDstAlphaFactor) return k.ONE_MINUS_DST_ALPHA;
            if (e === THREE.DstColorFactor) return k.DST_COLOR;
            if (e === THREE.OneMinusDstColorFactor) return k.ONE_MINUS_DST_COLOR;
            if (e === THREE.SrcAlphaSaturateFactor) return k.SRC_ALPHA_SATURATE;
            if (void 0 !== j) {
                if (e === THREE.RGB_S3TC_DXT1_Format) return j.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (e === THREE.RGBA_S3TC_DXT1_Format) return j.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (e === THREE.RGBA_S3TC_DXT3_Format) return j.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (e === THREE.RGBA_S3TC_DXT5_Format) return j.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            return 0
        }
        var e = e || {},
            L = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
            F = void 0 !== e.precision ? e.precision : "highp",
            D = void 0 !== e.alpha ? e.alpha : !0,
            z = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
            U = void 0 !== e.antialias ? e.antialias : !1,
            N = void 0 !== e.stencil ? e.stencil : !0,
            O = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
            B = void 0 !== e.clearColor ? new THREE.Color(e.clearColor) : new THREE.Color(0),
            V = void 0 !== e.clearAlpha ? e.clearAlpha : 0;
        this.domElement = L, this.context = null, this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1, this.autoUpdateScene = this.autoUpdateObjects = this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.shadowMapEnabled = this.physicallyBasedShading = this.gammaOutput = this.gammaInput = !1, this.shadowMapAutoUpdate = !0, this.shadowMapType = THREE.PCFShadowMap, this.shadowMapCullFace = THREE.CullFaceFront, this.shadowMapCascade = this.shadowMapDebug = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.renderPluginsPre = [], this.renderPluginsPost = [], this.info = {
            memory: {
                programs: 0,
                geometries: 0,
                textures: 0
            },
            render: {
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            }
        };
        var k, I, G, W, j, X = this,
            Y = [],
            q = 0,
            K = null,
            $ = null,
            Z = -1,
            Q = null,
            J = null,
            ee = 0,
            te = 0,
            ie = -1,
            re = -1,
            ne = -1,
            oe = -1,
            ae = -1,
            se = -1,
            le = -1,
            he = -1,
            ce = null,
            ue = null,
            fe = null,
            pe = null,
            de = 0,
            me = 0,
            Ee = 0,
            ge = 0,
            ve = 0,
            Te = 0,
            ye = {},
            _e = new THREE.Frustum,
            Re = new THREE.Matrix4,
            xe = new THREE.Matrix4,
            be = new THREE.Vector3,
            we = new THREE.Vector3,
            He = !0,
            Se = {
                ambient: [0, 0, 0],
                directional: {
                    length: 0,
                    colors: [],
                    positions: []
                },
                point: {
                    length: 0,
                    colors: [],
                    positions: [],
                    distances: []
                },
                spot: {
                    length: 0,
                    colors: [],
                    positions: [],
                    distances: [],
                    directions: [],
                    anglesCos: [],
                    exponents: []
                },
                hemi: {
                    length: 0,
                    skyColors: [],
                    groundColors: [],
                    positions: []
                }
            };
        try {
            if (!(k = L.getContext("experimental-webgl", {
                    alpha: D,
                    premultipliedAlpha: z,
                    antialias: U,
                    stencil: N,
                    preserveDrawingBuffer: O
                }))) throw "Error creating WebGL context."
        } catch (Me) {}
        I = k.getExtension("OES_texture_float"), G = k.getExtension("OES_standard_derivatives"), W = k.getExtension("EXT_texture_filter_anisotropic") || k.getExtension("MOZ_EXT_texture_filter_anisotropic") || k.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), j = k.getExtension("WEBGL_compressed_texture_s3tc") || k.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || k.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"), k.clearColor(0, 0, 0, 1), k.clearDepth(1), k.clearStencil(0), k.enable(k.DEPTH_TEST), k.depthFunc(k.LEQUAL), k.frontFace(k.CCW), k.cullFace(k.BACK), k.enable(k.CULL_FACE), k.enable(k.BLEND), k.blendEquation(k.FUNC_ADD), k.blendFunc(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA), k.clearColor(B.r, B.g, B.b, V), this.context = k;
        var Ce = (k.getParameter(k.MAX_TEXTURE_IMAGE_UNITS), k.getParameter(k.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
        k.getParameter(k.MAX_TEXTURE_SIZE);
        var Ae = k.getParameter(k.MAX_CUBE_MAP_TEXTURE_SIZE),
            Pe = W ? k.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
            Le = Ce > 0,
            Fe = Le && I;
        j && k.getParameter(k.COMPRESSED_TEXTURE_FORMATS);
        var De = k.getShaderPrecisionFormat(k.VERTEX_SHADER, k.HIGH_FLOAT),
            ze = k.getShaderPrecisionFormat(k.VERTEX_SHADER, k.MEDIUM_FLOAT);
        k.getShaderPrecisionFormat(k.VERTEX_SHADER, k.LOW_FLOAT);
        var Ue = k.getShaderPrecisionFormat(k.FRAGMENT_SHADER, k.HIGH_FLOAT),
            Ne = k.getShaderPrecisionFormat(k.FRAGMENT_SHADER, k.MEDIUM_FLOAT);
        k.getShaderPrecisionFormat(k.FRAGMENT_SHADER, k.LOW_FLOAT), k.getShaderPrecisionFormat(k.VERTEX_SHADER, k.HIGH_INT), k.getShaderPrecisionFormat(k.VERTEX_SHADER, k.MEDIUM_INT), k.getShaderPrecisionFormat(k.VERTEX_SHADER, k.LOW_INT), k.getShaderPrecisionFormat(k.FRAGMENT_SHADER, k.HIGH_INT), k.getShaderPrecisionFormat(k.FRAGMENT_SHADER, k.MEDIUM_INT), k.getShaderPrecisionFormat(k.FRAGMENT_SHADER, k.LOW_INT);
        var Oe = 0 < De.precision && 0 < Ue.precision,
            Be = 0 < ze.precision && 0 < Ne.precision;
        "highp" === F && !Oe && (Be ? void(F = "mediump") : void(F = "lowp")), "mediump" === F && !Be && void(F = "lowp"), this.getContext = function () {
            return k
        }, this.supportsVertexTextures = function () {
            return Le
        }, this.getMaxAnisotropy = function () {
            return Pe
        }, this.setSize = function (e, t) {
            L.width = e * this.devicePixelRatio, L.height = t * this.devicePixelRatio, L.style.width = e + "px", L.style.height = t + "px", this.setViewport(0, 0, L.width, L.height)
        }, this.setViewport = function (e, t, i, r) {
            de = void 0 !== e ? e : 0, me = void 0 !== t ? t : 0, Ee = void 0 !== i ? i : L.width, ge = void 0 !== r ? r : L.height, k.viewport(de, me, Ee, ge)
        }, this.setScissor = function (e, t, i, r) {
            k.scissor(e, t, i, r)
        }, this.enableScissorTest = function (e) {
            e ? k.enable(k.SCISSOR_TEST) : k.disable(k.SCISSOR_TEST)
        }, this.setClearColorHex = function (e, t) {
            B.setHex(e), V = t, k.clearColor(B.r, B.g, B.b, V)
        }, this.setClearColor = function (e, t) {
            B.copy(e), V = t, k.clearColor(B.r, B.g, B.b, V)
        }, this.getClearColor = function () {
            return B
        }, this.getClearAlpha = function () {
            return V
        }, this.clear = function (e, t, i) {
            var r = 0;
            (void 0 === e || e) && (r |= k.COLOR_BUFFER_BIT), (void 0 === t || t) && (r |= k.DEPTH_BUFFER_BIT), (void 0 === i || i) && (r |= k.STENCIL_BUFFER_BIT), k.clear(r)
        }, this.clearTarget = function (e, t, i, r) {
            this.setRenderTarget(e), this.clear(t, i, r)
        }, this.addPostPlugin = function (e) {
            e.init(this), this.renderPluginsPost.push(e)
        }, this.addPrePlugin = function (e) {
            e.init(this), this.renderPluginsPre.push(e)
        }, this.updateShadowMap = function (e, t) {
            K = null, Z = Q = he = le = ne = -1, He = !0, re = ie = -1, this.shadowMapPlugin.update(e, t)
        };
        var Ve = function (e) {
                if (e = e.target, e.removeEventListener("dispose", Ve), e.__webglInit = void 0, void 0 !== e.__webglVertexBuffer && k.deleteBuffer(e.__webglVertexBuffer), void 0 !== e.__webglNormalBuffer && k.deleteBuffer(e.__webglNormalBuffer), void 0 !== e.__webglTangentBuffer && k.deleteBuffer(e.__webglTangentBuffer), void 0 !== e.__webglColorBuffer && k.deleteBuffer(e.__webglColorBuffer), void 0 !== e.__webglUVBuffer && k.deleteBuffer(e.__webglUVBuffer), void 0 !== e.__webglUV2Buffer && k.deleteBuffer(e.__webglUV2Buffer), void 0 !== e.__webglSkinIndicesBuffer && k.deleteBuffer(e.__webglSkinIndicesBuffer), void 0 !== e.__webglSkinWeightsBuffer && k.deleteBuffer(e.__webglSkinWeightsBuffer), void 0 !== e.__webglFaceBuffer && k.deleteBuffer(e.__webglFaceBuffer), void 0 !== e.__webglLineBuffer && k.deleteBuffer(e.__webglLineBuffer), void 0 !== e.__webglLineDistanceBuffer && k.deleteBuffer(e.__webglLineDistanceBuffer), void 0 !== e.geometryGroups)
                    for (var i in e.geometryGroups) {
                        var r = e.geometryGroups[i];
                        if (void 0 !== r.numMorphTargets)
                            for (var n = 0, o = r.numMorphTargets; o > n; n++) k.deleteBuffer(r.__webglMorphTargetsBuffers[n]);
                        if (void 0 !== r.numMorphNormals)
                            for (n = 0, o = r.numMorphNormals; o > n; n++) k.deleteBuffer(r.__webglMorphNormalsBuffers[n]);
                        t(r)
                    }
                t(e), X.info.memory.geometries--
            },
            ke = function (e) {
                e = e.target, e.removeEventListener("dispose", ke), e.image && e.image.__webglTextureCube ? k.deleteTexture(e.image.__webglTextureCube) : e.__webglInit && (e.__webglInit = !1, k.deleteTexture(e.__webglTexture)),
                    X.info.memory.textures--
            },
            Ie = function (e) {
                if (e = e.target, e.removeEventListener("dispose", Ie), e && e.__webglTexture)
                    if (k.deleteTexture(e.__webglTexture), e instanceof THREE.WebGLRenderTargetCube)
                        for (var t = 0; 6 > t; t++) k.deleteFramebuffer(e.__webglFramebuffer[t]), k.deleteRenderbuffer(e.__webglRenderbuffer[t]);
                    else k.deleteFramebuffer(e.__webglFramebuffer), k.deleteRenderbuffer(e.__webglRenderbuffer);
                X.info.memory.textures--
            },
            Ge = function (e) {
                e = e.target, e.removeEventListener("dispose", Ge), We(e)
            },
            We = function (e) {
                var t = e.program;
                if (void 0 !== t) {
                    e.program = void 0;
                    var i, r, n = !1,
                        e = 0;
                    for (i = Y.length; i > e; e++)
                        if (r = Y[e], r.program === t) {
                            r.usedTimes--, 0 === r.usedTimes && (n = !0);
                            break
                        }
                    if (!0 === n) {
                        for (n = [], e = 0, i = Y.length; i > e; e++) r = Y[e], r.program !== t && n.push(r);
                        Y = n, k.deleteProgram(t), X.info.memory.programs--
                    }
                }
            };
        this.renderBufferImmediate = function (e, t, i) {
            if (e.hasPositions && !e.__webglVertexBuffer && (e.__webglVertexBuffer = k.createBuffer()), e.hasNormals && !e.__webglNormalBuffer && (e.__webglNormalBuffer = k.createBuffer()), e.hasUvs && !e.__webglUvBuffer && (e.__webglUvBuffer = k.createBuffer()), e.hasColors && !e.__webglColorBuffer && (e.__webglColorBuffer = k.createBuffer()), e.hasPositions && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglVertexBuffer), k.bufferData(k.ARRAY_BUFFER, e.positionArray, k.DYNAMIC_DRAW), k.enableVertexAttribArray(t.attributes.position), k.vertexAttribPointer(t.attributes.position, 3, k.FLOAT, !1, 0, 0)), e.hasNormals) {
                if (k.bindBuffer(k.ARRAY_BUFFER, e.__webglNormalBuffer), i.shading === THREE.FlatShading) {
                    var r, n, o, a, s, l, h, c, u, f, p, d = 3 * e.count;
                    for (p = 0; d > p; p += 9) f = e.normalArray, r = f[p], n = f[p + 1], o = f[p + 2], a = f[p + 3], l = f[p + 4], c = f[p + 5], s = f[p + 6], h = f[p + 7], u = f[p + 8], r = (r + a + s) / 3, n = (n + l + h) / 3, o = (o + c + u) / 3, f[p] = r, f[p + 1] = n, f[p + 2] = o, f[p + 3] = r, f[p + 4] = n, f[p + 5] = o, f[p + 6] = r, f[p + 7] = n, f[p + 8] = o
                }
                k.bufferData(k.ARRAY_BUFFER, e.normalArray, k.DYNAMIC_DRAW), k.enableVertexAttribArray(t.attributes.normal), k.vertexAttribPointer(t.attributes.normal, 3, k.FLOAT, !1, 0, 0)
            }
            e.hasUvs && i.map && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglUvBuffer), k.bufferData(k.ARRAY_BUFFER, e.uvArray, k.DYNAMIC_DRAW), k.enableVertexAttribArray(t.attributes.uv), k.vertexAttribPointer(t.attributes.uv, 2, k.FLOAT, !1, 0, 0)), e.hasColors && i.vertexColors !== THREE.NoColors && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, e.colorArray, k.DYNAMIC_DRAW), k.enableVertexAttribArray(t.attributes.color), k.vertexAttribPointer(t.attributes.color, 3, k.FLOAT, !1, 0, 0)), k.drawArrays(k.TRIANGLES, 0, e.count), e.count = 0
        }, this.renderBufferDirect = function (e, t, i, r, n, o) {
            if (!1 !== r.visible)
                if (i = _(e, t, i, r, o), e = i.attributes, t = !1, r = 16777215 * n.id + 2 * i.id + (r.wireframe ? 1 : 0), r !== Q && (Q = r, t = !0), t && c(), o instanceof THREE.Mesh)
                    if (o = n.attributes.index) {
                        r = n.offsets, 1 < r.length && (t = !0);
                        for (var i = 0, a = r.length; a > i; i++) {
                            var s = r[i].index;
                            if (t) {
                                var l = n.attributes.position,
                                    u = l.itemSize;
                                if (k.bindBuffer(k.ARRAY_BUFFER, l.buffer), h(e.position), k.vertexAttribPointer(e.position, u, k.FLOAT, !1, 0, 4 * s * u), u = n.attributes.normal, 0 <= e.normal && u) {
                                    var f = u.itemSize;
                                    k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.normal), k.vertexAttribPointer(e.normal, f, k.FLOAT, !1, 0, 4 * s * f)
                                }
                                u = n.attributes.uv, 0 <= e.uv && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.uv), k.vertexAttribPointer(e.uv, f, k.FLOAT, !1, 0, 4 * s * f)), u = n.attributes.color, 0 <= e.color && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.color), k.vertexAttribPointer(e.color, f, k.FLOAT, !1, 0, 4 * s * f)), u = n.attributes.tangent, 0 <= e.tangent && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.tangent), k.vertexAttribPointer(e.tangent, f, k.FLOAT, !1, 0, 4 * s * f)), k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, o.buffer)
                            }
                            k.drawElements(k.TRIANGLES, r[i].count, k.UNSIGNED_SHORT, 2 * r[i].start), X.info.render.calls++, X.info.render.vertices += r[i].count, X.info.render.faces += r[i].count / 3
                        }
                    } else t && (l = n.attributes.position, u = l.itemSize, k.bindBuffer(k.ARRAY_BUFFER, l.buffer), h(e.position), k.vertexAttribPointer(e.position, u, k.FLOAT, !1, 0, 0), u = n.attributes.normal, 0 <= e.normal && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.normal), k.vertexAttribPointer(e.normal, f, k.FLOAT, !1, 0, 0)), u = n.attributes.uv, 0 <= e.uv && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.uv), k.vertexAttribPointer(e.uv, f, k.FLOAT, !1, 0, 0)), u = n.attributes.color, 0 <= e.color && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.color), k.vertexAttribPointer(e.color, f, k.FLOAT, !1, 0, 0)), u = n.attributes.tangent, 0 <= e.tangent && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.tangent), k.vertexAttribPointer(e.tangent, f, k.FLOAT, !1, 0, 0))), k.drawArrays(k.TRIANGLES, 0, l.numItems / 3), X.info.render.calls++, X.info.render.vertices += l.numItems / 3, X.info.render.faces += l.numItems / 3 / 3;
            else o instanceof THREE.ParticleSystem && t && (l = n.attributes.position, u = l.itemSize, k.bindBuffer(k.ARRAY_BUFFER, l.buffer), h(e.position), k.vertexAttribPointer(e.position, u, k.FLOAT, !1, 0, 0), u = n.attributes.color, 0 <= e.color && u && (f = u.itemSize, k.bindBuffer(k.ARRAY_BUFFER, u.buffer), h(e.color), k.vertexAttribPointer(e.color, f, k.FLOAT, !1, 0, 0)), k.drawArrays(k.POINTS, 0, l.numItems / 3), X.info.render.calls++, X.info.render.points += l.numItems / 3)
        }, this.renderBuffer = function (e, t, i, r, n, o) {
            if (!1 !== r.visible) {
                var a, s, i = _(e, t, i, r, o),
                    t = i.attributes,
                    e = !1,
                    i = 16777215 * n.id + 2 * i.id + (r.wireframe ? 1 : 0);
                if (i !== Q && (Q = i, e = !0), e && c(), !r.morphTargets && 0 <= t.position) e && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglVertexBuffer), h(t.position), k.vertexAttribPointer(t.position, 3, k.FLOAT, !1, 0, 0));
                else if (o.morphTargetBase) {
                    if (i = r.program.attributes, -1 !== o.morphTargetBase && 0 <= i.position ? (k.bindBuffer(k.ARRAY_BUFFER, n.__webglMorphTargetsBuffers[o.morphTargetBase]), h(i.position), k.vertexAttribPointer(i.position, 3, k.FLOAT, !1, 0, 0)) : 0 <= i.position && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglVertexBuffer), h(i.position), k.vertexAttribPointer(i.position, 3, k.FLOAT, !1, 0, 0)), o.morphTargetForcedOrder.length) {
                        var l = 0;
                        for (s = o.morphTargetForcedOrder, a = o.morphTargetInfluences; l < r.numSupportedMorphTargets && l < s.length;) 0 <= i["morphTarget" + l] && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglMorphTargetsBuffers[s[l]]), h(i["morphTarget" + l]), k.vertexAttribPointer(i["morphTarget" + l], 3, k.FLOAT, !1, 0, 0)), 0 <= i["morphNormal" + l] && r.morphNormals && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglMorphNormalsBuffers[s[l]]), h(i["morphNormal" + l]), k.vertexAttribPointer(i["morphNormal" + l], 3, k.FLOAT, !1, 0, 0)), o.__webglMorphTargetInfluences[l] = a[s[l]], l++
                    } else {
                        s = [], a = o.morphTargetInfluences;
                        var u, p = a.length;
                        for (u = 0; p > u; u++) l = a[u], l > 0 && s.push([l, u]);
                        for (s.length > r.numSupportedMorphTargets ? (s.sort(f), s.length = r.numSupportedMorphTargets) : s.length > r.numSupportedMorphNormals ? s.sort(f) : 0 === s.length && s.push([0, 0]), l = 0; l < r.numSupportedMorphTargets;) s[l] ? (u = s[l][1], 0 <= i["morphTarget" + l] && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglMorphTargetsBuffers[u]), h(i["morphTarget" + l]), k.vertexAttribPointer(i["morphTarget" + l], 3, k.FLOAT, !1, 0, 0)), 0 <= i["morphNormal" + l] && r.morphNormals && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglMorphNormalsBuffers[u]), h(i["morphNormal" + l]), k.vertexAttribPointer(i["morphNormal" + l], 3, k.FLOAT, !1, 0, 0)), o.__webglMorphTargetInfluences[l] = a[u]) : o.__webglMorphTargetInfluences[l] = 0, l++
                    }
                    null !== r.program.uniforms.morphTargetInfluences && k.uniform1fv(r.program.uniforms.morphTargetInfluences, o.__webglMorphTargetInfluences)
                }
                if (e) {
                    if (n.__webglCustomAttributesList)
                        for (a = 0, s = n.__webglCustomAttributesList.length; s > a; a++) i = n.__webglCustomAttributesList[a], 0 <= t[i.buffer.belongsToAttribute] && (k.bindBuffer(k.ARRAY_BUFFER, i.buffer), h(t[i.buffer.belongsToAttribute]), k.vertexAttribPointer(t[i.buffer.belongsToAttribute], i.size, k.FLOAT, !1, 0, 0));
                    0 <= t.color && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglColorBuffer), h(t.color), k.vertexAttribPointer(t.color, 3, k.FLOAT, !1, 0, 0)), 0 <= t.normal && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglNormalBuffer), h(t.normal), k.vertexAttribPointer(t.normal, 3, k.FLOAT, !1, 0, 0)), 0 <= t.tangent && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglTangentBuffer), h(t.tangent), k.vertexAttribPointer(t.tangent, 4, k.FLOAT, !1, 0, 0)), 0 <= t.uv && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglUVBuffer), h(t.uv), k.vertexAttribPointer(t.uv, 2, k.FLOAT, !1, 0, 0)), 0 <= t.uv2 && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglUV2Buffer), h(t.uv2), k.vertexAttribPointer(t.uv2, 2, k.FLOAT, !1, 0, 0)), r.skinning && 0 <= t.skinIndex && 0 <= t.skinWeight && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglSkinIndicesBuffer), h(t.skinIndex), k.vertexAttribPointer(t.skinIndex, 4, k.FLOAT, !1, 0, 0), k.bindBuffer(k.ARRAY_BUFFER, n.__webglSkinWeightsBuffer), h(t.skinWeight), k.vertexAttribPointer(t.skinWeight, 4, k.FLOAT, !1, 0, 0)), 0 <= t.lineDistance && (k.bindBuffer(k.ARRAY_BUFFER, n.__webglLineDistanceBuffer), h(t.lineDistance), k.vertexAttribPointer(t.lineDistance, 1, k.FLOAT, !1, 0, 0))
                }
                o instanceof THREE.Mesh ? (r.wireframe ? (r = r.wireframeLinewidth, r !== pe && (k.lineWidth(r), pe = r), e && k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, n.__webglLineBuffer), k.drawElements(k.LINES, n.__webglLineCount, k.UNSIGNED_SHORT, 0)) : (e && k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, n.__webglFaceBuffer), k.drawElements(k.TRIANGLES, n.__webglFaceCount, k.UNSIGNED_SHORT, 0)), X.info.render.calls++, X.info.render.vertices += n.__webglFaceCount, X.info.render.faces += n.__webglFaceCount / 3) : o instanceof THREE.Line ? (o = o.type === THREE.LineStrip ? k.LINE_STRIP : k.LINES, r = r.linewidth, r !== pe && (k.lineWidth(r), pe = r), k.drawArrays(o, 0, n.__webglLineCount), X.info.render.calls++) : o instanceof THREE.ParticleSystem ? (k.drawArrays(k.POINTS, 0, n.__webglParticleCount), X.info.render.calls++, X.info.render.points += n.__webglParticleCount) : o instanceof THREE.Ribbon && (k.drawArrays(k.TRIANGLE_STRIP, 0, n.__webglVertexCount), X.info.render.calls++)
            }
        }, this.render = function (e, t, i, r) {
            if (!1 == t instanceof THREE.Camera);
            else {
                var n, o, a, s, l = e.__lights,
                    h = e.fog;
                for (Z = -1, He = !0, this.autoUpdateScene && e.updateMatrixWorld(), void 0 === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), Re.multiply(t.projectionMatrix, t.matrixWorldInverse), _e.setFromMatrix(Re), this.autoUpdateObjects && this.initWebGLObjects(e), p(this.renderPluginsPre, e, t), X.info.render.calls = 0, X.info.render.vertices = 0, X.info.render.faces = 0, X.info.render.points = 0, this.setRenderTarget(i), (this.autoClear || r) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), s = e.__webglObjects, r = 0, n = s.length; n > r; r++)
                    if (o = s[r], a = o.object, o.render = !1, a.visible && (!(a instanceof THREE.Mesh || a instanceof THREE.ParticleSystem) || !a.frustumCulled || _e.contains(a))) {
                        x(a, t);
                        var c = o,
                            f = c.buffer,
                            E = void 0,
                            g = E = void 0,
                            g = c.object.material;
                        g instanceof THREE.MeshFaceMaterial ? (E = f.materialIndex, E = g.materials[E], E.transparent ? (c.transparent = E, c.opaque = null) : (c.opaque = E, c.transparent = null)) : (E = g) && (E.transparent ? (c.transparent = E, c.opaque = null) : (c.opaque = E, c.transparent = null)), o.render = !0, !0 === this.sortObjects && (null !== a.renderDepth ? o.z = a.renderDepth : (be.copy(a.matrixWorld.getPosition()), Re.multiplyVector3(be), o.z = be.z), o.id = a.id)
                    }
                for (this.sortObjects && s.sort(u), s = e.__webglObjectsImmediate, r = 0, n = s.length; n > r; r++) o = s[r], a = o.object, a.visible && (x(a, t), a = o.object.material, a.transparent ? (o.transparent = a, o.opaque = null) : (o.opaque = a, o.transparent = null));
                e.overrideMaterial ? (r = e.overrideMaterial, this.setBlending(r.blending, r.blendEquation, r.blendSrc, r.blendDst), this.setDepthTest(r.depthTest), this.setDepthWrite(r.depthWrite), H(r.polygonOffset, r.polygonOffsetFactor, r.polygonOffsetUnits), d(e.__webglObjects, !1, "", t, l, h, !0, r), m(e.__webglObjectsImmediate, "", t, l, h, !1, r)) : (r = null, this.setBlending(THREE.NoBlending), d(e.__webglObjects, !0, "opaque", t, l, h, !1, r), m(e.__webglObjectsImmediate, "opaque", t, l, h, !1, r), d(e.__webglObjects, !1, "transparent", t, l, h, !0, r), m(e.__webglObjectsImmediate, "transparent", t, l, h, !0, r)), p(this.renderPluginsPost, e, t), i && i.generateMipmaps && i.minFilter !== THREE.NearestFilter && i.minFilter !== THREE.LinearFilter && (i instanceof THREE.WebGLRenderTargetCube ? (k.bindTexture(k.TEXTURE_CUBE_MAP, i.__webglTexture), k.generateMipmap(k.TEXTURE_CUBE_MAP), k.bindTexture(k.TEXTURE_CUBE_MAP, null)) : (k.bindTexture(k.TEXTURE_2D, i.__webglTexture), k.generateMipmap(k.TEXTURE_2D), k.bindTexture(k.TEXTURE_2D, null))), this.setDepthTest(!0), this.setDepthWrite(!0)
            }
        }, this.renderImmediateObject = function (e, t, i, r, n) {
            var o = _(e, t, i, r, n);
            Q = -1, X.setMaterialFaces(r), n.immediateRenderCallback ? n.immediateRenderCallback(o, k, _e) : n.render(function (e) {
                X.renderBufferImmediate(e, o, r)
            })
        }, this.initWebGLObjects = function (e) {
            for (e.__webglObjects || (e.__webglObjects = [], e.__webglObjectsImmediate = [], e.__webglSprites = [], e.__webglFlares = []); e.__objectsAdded.length;) {
                var t = e.__objectsAdded[0],
                    h = e,
                    c = void 0,
                    u = void 0,
                    p = void 0,
                    d = void 0;
                if (!t.__webglInit)
                    if (t.__webglInit = !0, t._modelViewMatrix = new THREE.Matrix4, t._normalMatrix = new THREE.Matrix3, void 0 !== t.geometry && void 0 === t.geometry.__webglInit && (t.geometry.__webglInit = !0, t.geometry.addEventListener("dispose", Ve)), t instanceof THREE.Mesh)
                        if (u = t.geometry, p = t.material, u instanceof THREE.Geometry) {
                            if (void 0 === u.geometryGroups) {
                                var m = u,
                                    _ = void 0,
                                    R = void 0,
                                    x = void 0,
                                    b = void 0,
                                    w = void 0,
                                    H = void 0,
                                    S = {},
                                    M = m.morphTargets.length,
                                    C = m.morphNormals.length,
                                    A = p instanceof THREE.MeshFaceMaterial;
                                for (m.geometryGroups = {}, _ = 0, R = m.faces.length; R > _; _++) x = m.faces[_], b = A ? x.materialIndex : 0, void 0 === S[b] && (S[b] = {
                                    hash: b,
                                    counter: 0
                                }), H = S[b].hash + "_" + S[b].counter, void 0 === m.geometryGroups[H] && (m.geometryGroups[H] = {
                                    faces3: [],
                                    faces4: [],
                                    materialIndex: b,
                                    vertices: 0,
                                    numMorphTargets: M,
                                    numMorphNormals: C
                                }), w = x instanceof THREE.Face3 ? 3 : 4, 65535 < m.geometryGroups[H].vertices + w && (S[b].counter += 1, H = S[b].hash + "_" + S[b].counter, void 0 === m.geometryGroups[H] && (m.geometryGroups[H] = {
                                    faces3: [],
                                    faces4: [],
                                    materialIndex: b,
                                    vertices: 0,
                                    numMorphTargets: M,
                                    numMorphNormals: C
                                })), x instanceof THREE.Face3 ? m.geometryGroups[H].faces3.push(_) : m.geometryGroups[H].faces4.push(_), m.geometryGroups[H].vertices += w;
                                m.geometryGroupsList = [];
                                var P = void 0;
                                for (P in m.geometryGroups) m.geometryGroups[P].id = ee++, m.geometryGroupsList.push(m.geometryGroups[P])
                            }
                            for (c in u.geometryGroups)
                                if (d = u.geometryGroups[c], !d.__webglVertexBuffer) {
                                    var L = d;
                                    L.__webglVertexBuffer = k.createBuffer(), L.__webglNormalBuffer = k.createBuffer(), L.__webglTangentBuffer = k.createBuffer(), L.__webglColorBuffer = k.createBuffer(), L.__webglUVBuffer = k.createBuffer(), L.__webglUV2Buffer = k.createBuffer(), L.__webglSkinIndicesBuffer = k.createBuffer(), L.__webglSkinWeightsBuffer = k.createBuffer(), L.__webglFaceBuffer = k.createBuffer(), L.__webglLineBuffer = k.createBuffer();
                                    var F = void 0,
                                        D = void 0;
                                    if (L.numMorphTargets)
                                        for (L.__webglMorphTargetsBuffers = [], F = 0, D = L.numMorphTargets; D > F; F++) L.__webglMorphTargetsBuffers.push(k.createBuffer());
                                    if (L.numMorphNormals)
                                        for (L.__webglMorphNormalsBuffers = [], F = 0, D = L.numMorphNormals; D > F; F++) L.__webglMorphNormalsBuffers.push(k.createBuffer());
                                    X.info.memory.geometries++, r(d, t), u.verticesNeedUpdate = !0, u.morphTargetsNeedUpdate = !0, u.elementsNeedUpdate = !0, u.uvsNeedUpdate = !0, u.normalsNeedUpdate = !0, u.tangentsNeedUpdate = !0, u.colorsNeedUpdate = !0
                                }
                        } else u instanceof THREE.BufferGeometry && s(u);
                else if (t instanceof THREE.Ribbon) {
                    if (u = t.geometry, !u.__webglVertexBuffer) {
                        var z = u;
                        z.__webglVertexBuffer = k.createBuffer(), z.__webglColorBuffer = k.createBuffer(), z.__webglNormalBuffer = k.createBuffer(), X.info.memory.geometries++;
                        var U = u,
                            N = t,
                            O = U.vertices.length;
                        U.__vertexArray = new Float32Array(3 * O), U.__colorArray = new Float32Array(3 * O), U.__normalArray = new Float32Array(3 * O), U.__webglVertexCount = O, i(U, N), u.verticesNeedUpdate = !0, u.colorsNeedUpdate = !0, u.normalsNeedUpdate = !0
                    }
                } else if (t instanceof THREE.Line) {
                    if (u = t.geometry, !u.__webglVertexBuffer) {
                        var B = u;
                        B.__webglVertexBuffer = k.createBuffer(), B.__webglColorBuffer = k.createBuffer(), B.__webglLineDistanceBuffer = k.createBuffer(), X.info.memory.geometries++;
                        var V = u,
                            I = t,
                            G = V.vertices.length;
                        V.__vertexArray = new Float32Array(3 * G), V.__colorArray = new Float32Array(3 * G), V.__lineDistanceArray = new Float32Array(1 * G), V.__webglLineCount = G, i(V, I), u.verticesNeedUpdate = !0, u.colorsNeedUpdate = !0, u.lineDistancesNeedUpdate = !0
                    }
                } else if (t instanceof THREE.ParticleSystem && (u = t.geometry, !u.__webglVertexBuffer))
                    if (u instanceof THREE.Geometry) {
                        var W = u;
                        W.__webglVertexBuffer = k.createBuffer(), W.__webglColorBuffer = k.createBuffer(), X.info.memory.geometries++;
                        var j = u,
                            Y = t,
                            q = j.vertices.length;
                        j.__vertexArray = new Float32Array(3 * q), j.__colorArray = new Float32Array(3 * q), j.__sortArray = [], j.__webglParticleCount = q, i(j, Y), u.verticesNeedUpdate = !0, u.colorsNeedUpdate = !0
                    } else u instanceof THREE.BufferGeometry && s(u);
                if (!t.__webglActive) {
                    if (t instanceof THREE.Mesh)
                        if (u = t.geometry, u instanceof THREE.BufferGeometry) E(h.__webglObjects, u, t);
                        else
                            for (c in u.geometryGroups) d = u.geometryGroups[c], E(h.__webglObjects, d, t);
                    else t instanceof THREE.Ribbon || t instanceof THREE.Line || t instanceof THREE.ParticleSystem ? (u = t.geometry, E(h.__webglObjects, u, t)) : t instanceof THREE.ImmediateRenderObject || t.immediateRenderCallback ? h.__webglObjectsImmediate.push({
                        object: t,
                        opaque: null,
                        transparent: null
                    }) : t instanceof THREE.Sprite ? h.__webglSprites.push(t) : t instanceof THREE.LensFlare && h.__webglFlares.push(t);
                    t.__webglActive = !0
                }
                e.__objectsAdded.splice(0, 1)
            }
            for (; e.__objectsRemoved.length;) {
                var K = e.__objectsRemoved[0],
                    $ = e;
                K instanceof THREE.Mesh || K instanceof THREE.ParticleSystem || K instanceof THREE.Ribbon || K instanceof THREE.Line ? T($.__webglObjects, K) : K instanceof THREE.Sprite ? y($.__webglSprites, K) : K instanceof THREE.LensFlare ? y($.__webglFlares, K) : (K instanceof THREE.ImmediateRenderObject || K.immediateRenderCallback) && T($.__webglObjectsImmediate, K), K.__webglActive = !1, e.__objectsRemoved.splice(0, 1)
            }
            for (var Z = 0, Q = e.__webglObjects.length; Q > Z; Z++) {
                var J = e.__webglObjects[Z].object,
                    te = J.geometry,
                    ie = void 0,
                    re = void 0,
                    ne = void 0;
                if (J instanceof THREE.Mesh)
                    if (te instanceof THREE.BufferGeometry)(te.verticesNeedUpdate || te.elementsNeedUpdate || te.uvsNeedUpdate || te.normalsNeedUpdate || te.colorsNeedUpdate || te.tangentsNeedUpdate) && l(te, k.DYNAMIC_DRAW, !te.dynamic), te.verticesNeedUpdate = !1, te.elementsNeedUpdate = !1, te.uvsNeedUpdate = !1, te.normalsNeedUpdate = !1, te.colorsNeedUpdate = !1, te.tangentsNeedUpdate = !1;
                    else {
                        for (var oe = 0, ae = te.geometryGroupsList.length; ae > oe; oe++)
                            if (ie = te.geometryGroupsList[oe], ne = n(J, ie), te.buffersNeedUpdate && r(ie, J), re = ne.attributes && g(ne), te.verticesNeedUpdate || te.morphTargetsNeedUpdate || te.elementsNeedUpdate || te.uvsNeedUpdate || te.normalsNeedUpdate || te.colorsNeedUpdate || te.tangentsNeedUpdate || re) {
                                var se = ie,
                                    le = J,
                                    he = k.DYNAMIC_DRAW,
                                    ce = !te.dynamic,
                                    ue = ne;
                                if (se.__inittedArrays) {
                                    var fe = o(ue),
                                        pe = ue.vertexColors ? ue.vertexColors : !1,
                                        de = a(ue),
                                        me = fe === THREE.SmoothShading,
                                        Ee = void 0,
                                        ge = void 0,
                                        ve = void 0,
                                        Te = void 0,
                                        ye = void 0,
                                        _e = void 0,
                                        we = void 0,
                                        He = void 0,
                                        Se = void 0,
                                        Me = void 0,
                                        Ce = void 0,
                                        Ae = void 0,
                                        Pe = void 0,
                                        Le = void 0,
                                        Fe = void 0,
                                        De = void 0,
                                        ze = void 0,
                                        Ue = void 0,
                                        Ne = void 0,
                                        Oe = void 0,
                                        Be = void 0,
                                        ke = void 0,
                                        Ie = void 0,
                                        Ge = void 0,
                                        We = void 0,
                                        je = void 0,
                                        Xe = void 0,
                                        Ye = void 0,
                                        qe = void 0,
                                        Ke = void 0,
                                        $e = void 0,
                                        Ze = void 0,
                                        Qe = void 0,
                                        Je = void 0,
                                        et = void 0,
                                        tt = void 0,
                                        it = void 0,
                                        rt = void 0,
                                        nt = void 0,
                                        ot = void 0,
                                        at = void 0,
                                        st = void 0,
                                        lt = void 0,
                                        ht = void 0,
                                        ct = void 0,
                                        ut = void 0,
                                        ft = 0,
                                        pt = 0,
                                        dt = 0,
                                        mt = 0,
                                        Et = 0,
                                        gt = 0,
                                        vt = 0,
                                        Tt = 0,
                                        yt = 0,
                                        _t = 0,
                                        Rt = 0,
                                        xt = 0,
                                        bt = void 0,
                                        wt = se.__vertexArray,
                                        Ht = se.__uvArray,
                                        St = se.__uv2Array,
                                        Mt = se.__normalArray,
                                        Ct = se.__tangentArray,
                                        At = se.__colorArray,
                                        Pt = se.__skinIndexArray,
                                        Lt = se.__skinWeightArray,
                                        Ft = se.__morphTargetsArrays,
                                        Dt = se.__morphNormalsArrays,
                                        zt = se.__webglCustomAttributesList,
                                        Ut = void 0,
                                        Nt = se.__faceArray,
                                        Ot = se.__lineArray,
                                        Bt = le.geometry,
                                        Vt = Bt.elementsNeedUpdate,
                                        kt = Bt.uvsNeedUpdate,
                                        It = Bt.normalsNeedUpdate,
                                        Gt = Bt.tangentsNeedUpdate,
                                        Wt = Bt.colorsNeedUpdate,
                                        jt = Bt.morphTargetsNeedUpdate,
                                        Xt = Bt.vertices,
                                        Yt = se.faces3,
                                        qt = se.faces4,
                                        Kt = Bt.faces,
                                        $t = Bt.faceVertexUvs[0],
                                        Zt = Bt.faceVertexUvs[1],
                                        Qt = Bt.skinIndices,
                                        Jt = Bt.skinWeights,
                                        ei = Bt.morphTargets,
                                        ti = Bt.morphNormals;
                                    if (Bt.verticesNeedUpdate) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], Ae = Xt[Te.a], Pe = Xt[Te.b], Le = Xt[Te.c], wt[pt] = Ae.x, wt[pt + 1] = Ae.y, wt[pt + 2] = Ae.z, wt[pt + 3] = Pe.x, wt[pt + 4] = Pe.y, wt[pt + 5] = Pe.z, wt[pt + 6] = Le.x, wt[pt + 7] = Le.y, wt[pt + 8] = Le.z, pt += 9;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], Ae = Xt[Te.a], Pe = Xt[Te.b], Le = Xt[Te.c], Fe = Xt[Te.d], wt[pt] = Ae.x, wt[pt + 1] = Ae.y, wt[pt + 2] = Ae.z, wt[pt + 3] = Pe.x, wt[pt + 4] = Pe.y, wt[pt + 5] = Pe.z, wt[pt + 6] = Le.x, wt[pt + 7] = Le.y, wt[pt + 8] = Le.z, wt[pt + 9] = Fe.x, wt[pt + 10] = Fe.y, wt[pt + 11] = Fe.z, pt += 12;
                                        k.bindBuffer(k.ARRAY_BUFFER, se.__webglVertexBuffer), k.bufferData(k.ARRAY_BUFFER, wt, he)
                                    }
                                    if (jt)
                                        for (at = 0, st = ei.length; st > at; at++) {
                                            for (Ee = Rt = 0, ge = Yt.length; ge > Ee; Ee++) ct = Yt[Ee], Te = Kt[ct], Ae = ei[at].vertices[Te.a], Pe = ei[at].vertices[Te.b], Le = ei[at].vertices[Te.c], lt = Ft[at], lt[Rt] = Ae.x, lt[Rt + 1] = Ae.y, lt[Rt + 2] = Ae.z, lt[Rt + 3] = Pe.x, lt[Rt + 4] = Pe.y, lt[Rt + 5] = Pe.z, lt[Rt + 6] = Le.x, lt[Rt + 7] = Le.y, lt[Rt + 8] = Le.z, ue.morphNormals && (me ? (ut = ti[at].vertexNormals[ct], Oe = ut.a, Be = ut.b, ke = ut.c) : ke = Be = Oe = ti[at].faceNormals[ct], ht = Dt[at], ht[Rt] = Oe.x, ht[Rt + 1] = Oe.y, ht[Rt + 2] = Oe.z, ht[Rt + 3] = Be.x, ht[Rt + 4] = Be.y, ht[Rt + 5] = Be.z, ht[Rt + 6] = ke.x, ht[Rt + 7] = ke.y, ht[Rt + 8] = ke.z), Rt += 9;
                                            for (Ee = 0, ge = qt.length; ge > Ee; Ee++) ct = qt[Ee], Te = Kt[ct], Ae = ei[at].vertices[Te.a], Pe = ei[at].vertices[Te.b], Le = ei[at].vertices[Te.c], Fe = ei[at].vertices[Te.d], lt = Ft[at], lt[Rt] = Ae.x, lt[Rt + 1] = Ae.y, lt[Rt + 2] = Ae.z, lt[Rt + 3] = Pe.x, lt[Rt + 4] = Pe.y, lt[Rt + 5] = Pe.z, lt[Rt + 6] = Le.x, lt[Rt + 7] = Le.y, lt[Rt + 8] = Le.z, lt[Rt + 9] = Fe.x, lt[Rt + 10] = Fe.y, lt[Rt + 11] = Fe.z, ue.morphNormals && (me ? (ut = ti[at].vertexNormals[ct], Oe = ut.a, Be = ut.b, ke = ut.c, Ie = ut.d) : Ie = ke = Be = Oe = ti[at].faceNormals[ct], ht = Dt[at], ht[Rt] = Oe.x, ht[Rt + 1] = Oe.y, ht[Rt + 2] = Oe.z, ht[Rt + 3] = Be.x, ht[Rt + 4] = Be.y, ht[Rt + 5] = Be.z, ht[Rt + 6] = ke.x, ht[Rt + 7] = ke.y, ht[Rt + 8] = ke.z, ht[Rt + 9] = Ie.x, ht[Rt + 10] = Ie.y, ht[Rt + 11] = Ie.z), Rt += 12;
                                            k.bindBuffer(k.ARRAY_BUFFER, se.__webglMorphTargetsBuffers[at]), k.bufferData(k.ARRAY_BUFFER, Ft[at], he), ue.morphNormals && (k.bindBuffer(k.ARRAY_BUFFER, se.__webglMorphNormalsBuffers[at]), k.bufferData(k.ARRAY_BUFFER, Dt[at], he))
                                        }
                                    if (Jt.length) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], Ye = Jt[Te.a], qe = Jt[Te.b], Ke = Jt[Te.c], Lt[_t] = Ye.x, Lt[_t + 1] = Ye.y, Lt[_t + 2] = Ye.z, Lt[_t + 3] = Ye.w, Lt[_t + 4] = qe.x, Lt[_t + 5] = qe.y, Lt[_t + 6] = qe.z, Lt[_t + 7] = qe.w, Lt[_t + 8] = Ke.x, Lt[_t + 9] = Ke.y, Lt[_t + 10] = Ke.z, Lt[_t + 11] = Ke.w, Ze = Qt[Te.a], Qe = Qt[Te.b], Je = Qt[Te.c], Pt[_t] = Ze.x, Pt[_t + 1] = Ze.y, Pt[_t + 2] = Ze.z, Pt[_t + 3] = Ze.w, Pt[_t + 4] = Qe.x, Pt[_t + 5] = Qe.y, Pt[_t + 6] = Qe.z, Pt[_t + 7] = Qe.w, Pt[_t + 8] = Je.x, Pt[_t + 9] = Je.y, Pt[_t + 10] = Je.z, Pt[_t + 11] = Je.w, _t += 12;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], Ye = Jt[Te.a], qe = Jt[Te.b], Ke = Jt[Te.c], $e = Jt[Te.d], Lt[_t] = Ye.x, Lt[_t + 1] = Ye.y, Lt[_t + 2] = Ye.z, Lt[_t + 3] = Ye.w, Lt[_t + 4] = qe.x, Lt[_t + 5] = qe.y, Lt[_t + 6] = qe.z, Lt[_t + 7] = qe.w, Lt[_t + 8] = Ke.x, Lt[_t + 9] = Ke.y, Lt[_t + 10] = Ke.z, Lt[_t + 11] = Ke.w, Lt[_t + 12] = $e.x, Lt[_t + 13] = $e.y, Lt[_t + 14] = $e.z, Lt[_t + 15] = $e.w, Ze = Qt[Te.a], Qe = Qt[Te.b], Je = Qt[Te.c], et = Qt[Te.d], Pt[_t] = Ze.x, Pt[_t + 1] = Ze.y, Pt[_t + 2] = Ze.z, Pt[_t + 3] = Ze.w, Pt[_t + 4] = Qe.x, Pt[_t + 5] = Qe.y, Pt[_t + 6] = Qe.z, Pt[_t + 7] = Qe.w, Pt[_t + 8] = Je.x, Pt[_t + 9] = Je.y, Pt[_t + 10] = Je.z, Pt[_t + 11] = Je.w, Pt[_t + 12] = et.x, Pt[_t + 13] = et.y, Pt[_t + 14] = et.z, Pt[_t + 15] = et.w, _t += 16;
                                        _t > 0 && (k.bindBuffer(k.ARRAY_BUFFER, se.__webglSkinIndicesBuffer), k.bufferData(k.ARRAY_BUFFER, Pt, he), k.bindBuffer(k.ARRAY_BUFFER, se.__webglSkinWeightsBuffer), k.bufferData(k.ARRAY_BUFFER, Lt, he))
                                    }
                                    if (Wt && pe) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], we = Te.vertexColors, He = Te.color, 3 === we.length && pe === THREE.VertexColors ? (Ge = we[0], We = we[1], je = we[2]) : je = We = Ge = He, At[yt] = Ge.r, At[yt + 1] = Ge.g, At[yt + 2] = Ge.b, At[yt + 3] = We.r, At[yt + 4] = We.g, At[yt + 5] = We.b, At[yt + 6] = je.r, At[yt + 7] = je.g, At[yt + 8] = je.b, yt += 9;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], we = Te.vertexColors, He = Te.color, 4 === we.length && pe === THREE.VertexColors ? (Ge = we[0], We = we[1], je = we[2], Xe = we[3]) : Xe = je = We = Ge = He, At[yt] = Ge.r, At[yt + 1] = Ge.g, At[yt + 2] = Ge.b, At[yt + 3] = We.r, At[yt + 4] = We.g, At[yt + 5] = We.b, At[yt + 6] = je.r, At[yt + 7] = je.g, At[yt + 8] = je.b, At[yt + 9] = Xe.r, At[yt + 10] = Xe.g, At[yt + 11] = Xe.b, yt += 12;
                                        yt > 0 && (k.bindBuffer(k.ARRAY_BUFFER, se.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, At, he))
                                    }
                                    if (Gt && Bt.hasTangents) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], Se = Te.vertexTangents, De = Se[0], ze = Se[1], Ue = Se[2], Ct[vt] = De.x, Ct[vt + 1] = De.y, Ct[vt + 2] = De.z, Ct[vt + 3] = De.w, Ct[vt + 4] = ze.x, Ct[vt + 5] = ze.y, Ct[vt + 6] = ze.z, Ct[vt + 7] = ze.w, Ct[vt + 8] = Ue.x, Ct[vt + 9] = Ue.y, Ct[vt + 10] = Ue.z, Ct[vt + 11] = Ue.w, vt += 12;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], Se = Te.vertexTangents, De = Se[0], ze = Se[1], Ue = Se[2], Ne = Se[3], Ct[vt] = De.x, Ct[vt + 1] = De.y, Ct[vt + 2] = De.z, Ct[vt + 3] = De.w, Ct[vt + 4] = ze.x, Ct[vt + 5] = ze.y, Ct[vt + 6] = ze.z, Ct[vt + 7] = ze.w, Ct[vt + 8] = Ue.x, Ct[vt + 9] = Ue.y, Ct[vt + 10] = Ue.z, Ct[vt + 11] = Ue.w, Ct[vt + 12] = Ne.x, Ct[vt + 13] = Ne.y, Ct[vt + 14] = Ne.z, Ct[vt + 15] = Ne.w, vt += 16;
                                        k.bindBuffer(k.ARRAY_BUFFER, se.__webglTangentBuffer), k.bufferData(k.ARRAY_BUFFER, Ct, he)
                                    }
                                    if (It && fe) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++)
                                            if (Te = Kt[Yt[Ee]], ye = Te.vertexNormals, _e = Te.normal, 3 === ye.length && me)
                                                for (tt = 0; 3 > tt; tt++) rt = ye[tt], Mt[gt] = rt.x, Mt[gt + 1] = rt.y, Mt[gt + 2] = rt.z, gt += 3;
                                            else
                                                for (tt = 0; 3 > tt; tt++) Mt[gt] = _e.x, Mt[gt + 1] = _e.y, Mt[gt + 2] = _e.z, gt += 3;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++)
                                            if (Te = Kt[qt[Ee]], ye = Te.vertexNormals, _e = Te.normal, 4 === ye.length && me)
                                                for (tt = 0; 4 > tt; tt++) rt = ye[tt], Mt[gt] = rt.x, Mt[gt + 1] = rt.y, Mt[gt + 2] = rt.z, gt += 3;
                                            else
                                                for (tt = 0; 4 > tt; tt++) Mt[gt] = _e.x, Mt[gt + 1] = _e.y, Mt[gt + 2] = _e.z, gt += 3;
                                        k.bindBuffer(k.ARRAY_BUFFER, se.__webglNormalBuffer), k.bufferData(k.ARRAY_BUFFER, Mt, he)
                                    }
                                    if (kt && $t && de) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++)
                                            if (ve = Yt[Ee], Me = $t[ve], void 0 !== Me)
                                                for (tt = 0; 3 > tt; tt++) nt = Me[tt], Ht[dt] = nt.x, Ht[dt + 1] = nt.y, dt += 2;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++)
                                            if (ve = qt[Ee], Me = $t[ve], void 0 !== Me)
                                                for (tt = 0; 4 > tt; tt++) nt = Me[tt], Ht[dt] = nt.x, Ht[dt + 1] = nt.y, dt += 2;
                                        dt > 0 && (k.bindBuffer(k.ARRAY_BUFFER, se.__webglUVBuffer), k.bufferData(k.ARRAY_BUFFER, Ht, he))
                                    }
                                    if (kt && Zt && de) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++)
                                            if (ve = Yt[Ee], Ce = Zt[ve], void 0 !== Ce)
                                                for (tt = 0; 3 > tt; tt++) ot = Ce[tt], St[mt] = ot.x, St[mt + 1] = ot.y, mt += 2;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++)
                                            if (ve = qt[Ee], Ce = Zt[ve], void 0 !== Ce)
                                                for (tt = 0; 4 > tt; tt++) ot = Ce[tt], St[mt] = ot.x, St[mt + 1] = ot.y, mt += 2;
                                        mt > 0 && (k.bindBuffer(k.ARRAY_BUFFER, se.__webglUV2Buffer), k.bufferData(k.ARRAY_BUFFER, St, he))
                                    }
                                    if (Vt) {
                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Nt[Et] = ft, Nt[Et + 1] = ft + 1, Nt[Et + 2] = ft + 2, Et += 3, Ot[Tt] = ft, Ot[Tt + 1] = ft + 1, Ot[Tt + 2] = ft, Ot[Tt + 3] = ft + 2, Ot[Tt + 4] = ft + 1, Ot[Tt + 5] = ft + 2, Tt += 6, ft += 3;
                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Nt[Et] = ft, Nt[Et + 1] = ft + 1, Nt[Et + 2] = ft + 3, Nt[Et + 3] = ft + 1, Nt[Et + 4] = ft + 2, Nt[Et + 5] = ft + 3, Et += 6, Ot[Tt] = ft, Ot[Tt + 1] = ft + 1, Ot[Tt + 2] = ft, Ot[Tt + 3] = ft + 3, Ot[Tt + 4] = ft + 1, Ot[Tt + 5] = ft + 2, Ot[Tt + 6] = ft + 2, Ot[Tt + 7] = ft + 3, Tt += 8, ft += 4;
                                        k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, se.__webglFaceBuffer), k.bufferData(k.ELEMENT_ARRAY_BUFFER, Nt, he), k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, se.__webglLineBuffer), k.bufferData(k.ELEMENT_ARRAY_BUFFER, Ot, he)
                                    }
                                    if (zt)
                                        for (tt = 0, it = zt.length; it > tt; tt++)
                                            if (Ut = zt[tt], Ut.__original.needsUpdate) {
                                                if (xt = 0, 1 === Ut.size) {
                                                    if (void 0 === Ut.boundTo || "vertices" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], Ut.array[xt] = Ut.value[Te.a], Ut.array[xt + 1] = Ut.value[Te.b], Ut.array[xt + 2] = Ut.value[Te.c], xt += 3;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], Ut.array[xt] = Ut.value[Te.a], Ut.array[xt + 1] = Ut.value[Te.b], Ut.array[xt + 2] = Ut.value[Te.c], Ut.array[xt + 3] = Ut.value[Te.d], xt += 4
                                                    } else if ("faces" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) bt = Ut.value[Yt[Ee]], Ut.array[xt] = bt, Ut.array[xt + 1] = bt, Ut.array[xt + 2] = bt, xt += 3;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) bt = Ut.value[qt[Ee]], Ut.array[xt] = bt, Ut.array[xt + 1] = bt, Ut.array[xt + 2] = bt, Ut.array[xt + 3] = bt, xt += 4
                                                    }
                                                } else if (2 === Ut.size) {
                                                    if (void 0 === Ut.boundTo || "vertices" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], Ae = Ut.value[Te.a], Pe = Ut.value[Te.b], Le = Ut.value[Te.c], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Pe.x, Ut.array[xt + 3] = Pe.y, Ut.array[xt + 4] = Le.x, Ut.array[xt + 5] = Le.y, xt += 6;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], Ae = Ut.value[Te.a], Pe = Ut.value[Te.b], Le = Ut.value[Te.c], Fe = Ut.value[Te.d], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Pe.x, Ut.array[xt + 3] = Pe.y, Ut.array[xt + 4] = Le.x, Ut.array[xt + 5] = Le.y, Ut.array[xt + 6] = Fe.x, Ut.array[xt + 7] = Fe.y, xt += 8
                                                    } else if ("faces" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Le = Pe = Ae = bt = Ut.value[Yt[Ee]], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Pe.x, Ut.array[xt + 3] = Pe.y, Ut.array[xt + 4] = Le.x, Ut.array[xt + 5] = Le.y, xt += 6;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Fe = Le = Pe = Ae = bt = Ut.value[qt[Ee]], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Pe.x, Ut.array[xt + 3] = Pe.y, Ut.array[xt + 4] = Le.x, Ut.array[xt + 5] = Le.y, Ut.array[xt + 6] = Fe.x, Ut.array[xt + 7] = Fe.y, xt += 8
                                                    }
                                                } else if (3 === Ut.size) {
                                                    var ii;
                                                    if (ii = "c" === Ut.type ? ["r", "g", "b"] : ["x", "y", "z"], void 0 === Ut.boundTo || "vertices" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], Ae = Ut.value[Te.a], Pe = Ut.value[Te.b], Le = Ut.value[Te.c], Ut.array[xt] = Ae[ii[0]], Ut.array[xt + 1] = Ae[ii[1]], Ut.array[xt + 2] = Ae[ii[2]], Ut.array[xt + 3] = Pe[ii[0]], Ut.array[xt + 4] = Pe[ii[1]], Ut.array[xt + 5] = Pe[ii[2]], Ut.array[xt + 6] = Le[ii[0]], Ut.array[xt + 7] = Le[ii[1]], Ut.array[xt + 8] = Le[ii[2]], xt += 9;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], Ae = Ut.value[Te.a], Pe = Ut.value[Te.b], Le = Ut.value[Te.c], Fe = Ut.value[Te.d], Ut.array[xt] = Ae[ii[0]], Ut.array[xt + 1] = Ae[ii[1]], Ut.array[xt + 2] = Ae[ii[2]], Ut.array[xt + 3] = Pe[ii[0]], Ut.array[xt + 4] = Pe[ii[1]], Ut.array[xt + 5] = Pe[ii[2]], Ut.array[xt + 6] = Le[ii[0]], Ut.array[xt + 7] = Le[ii[1]], Ut.array[xt + 8] = Le[ii[2]], Ut.array[xt + 9] = Fe[ii[0]], Ut.array[xt + 10] = Fe[ii[1]], Ut.array[xt + 11] = Fe[ii[2]], xt += 12
                                                    } else if ("faces" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Le = Pe = Ae = bt = Ut.value[Yt[Ee]], Ut.array[xt] = Ae[ii[0]], Ut.array[xt + 1] = Ae[ii[1]], Ut.array[xt + 2] = Ae[ii[2]], Ut.array[xt + 3] = Pe[ii[0]], Ut.array[xt + 4] = Pe[ii[1]], Ut.array[xt + 5] = Pe[ii[2]], Ut.array[xt + 6] = Le[ii[0]], Ut.array[xt + 7] = Le[ii[1]], Ut.array[xt + 8] = Le[ii[2]], xt += 9;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Fe = Le = Pe = Ae = bt = Ut.value[qt[Ee]], Ut.array[xt] = Ae[ii[0]], Ut.array[xt + 1] = Ae[ii[1]], Ut.array[xt + 2] = Ae[ii[2]], Ut.array[xt + 3] = Pe[ii[0]], Ut.array[xt + 4] = Pe[ii[1]], Ut.array[xt + 5] = Pe[ii[2]], Ut.array[xt + 6] = Le[ii[0]], Ut.array[xt + 7] = Le[ii[1]], Ut.array[xt + 8] = Le[ii[2]], Ut.array[xt + 9] = Fe[ii[0]], Ut.array[xt + 10] = Fe[ii[1]], Ut.array[xt + 11] = Fe[ii[2]], xt += 12
                                                    } else if ("faceVertices" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) bt = Ut.value[Yt[Ee]], Ae = bt[0], Pe = bt[1], Le = bt[2], Ut.array[xt] = Ae[ii[0]], Ut.array[xt + 1] = Ae[ii[1]], Ut.array[xt + 2] = Ae[ii[2]], Ut.array[xt + 3] = Pe[ii[0]], Ut.array[xt + 4] = Pe[ii[1]], Ut.array[xt + 5] = Pe[ii[2]], Ut.array[xt + 6] = Le[ii[0]], Ut.array[xt + 7] = Le[ii[1]], Ut.array[xt + 8] = Le[ii[2]], xt += 9;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) bt = Ut.value[qt[Ee]], Ae = bt[0], Pe = bt[1], Le = bt[2], Fe = bt[3], Ut.array[xt] = Ae[ii[0]], Ut.array[xt + 1] = Ae[ii[1]], Ut.array[xt + 2] = Ae[ii[2]], Ut.array[xt + 3] = Pe[ii[0]], Ut.array[xt + 4] = Pe[ii[1]], Ut.array[xt + 5] = Pe[ii[2]], Ut.array[xt + 6] = Le[ii[0]], Ut.array[xt + 7] = Le[ii[1]], Ut.array[xt + 8] = Le[ii[2]], Ut.array[xt + 9] = Fe[ii[0]], Ut.array[xt + 10] = Fe[ii[1]], Ut.array[xt + 11] = Fe[ii[2]], xt += 12
                                                    }
                                                } else if (4 === Ut.size)
                                                    if (void 0 === Ut.boundTo || "vertices" === Ut.boundTo) {
                                                        for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Te = Kt[Yt[Ee]], Ae = Ut.value[Te.a], Pe = Ut.value[Te.b], Le = Ut.value[Te.c], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Ae.z, Ut.array[xt + 3] = Ae.w, Ut.array[xt + 4] = Pe.x, Ut.array[xt + 5] = Pe.y, Ut.array[xt + 6] = Pe.z, Ut.array[xt + 7] = Pe.w, Ut.array[xt + 8] = Le.x, Ut.array[xt + 9] = Le.y, Ut.array[xt + 10] = Le.z, Ut.array[xt + 11] = Le.w, xt += 12;
                                                        for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Te = Kt[qt[Ee]], Ae = Ut.value[Te.a], Pe = Ut.value[Te.b], Le = Ut.value[Te.c], Fe = Ut.value[Te.d], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Ae.z, Ut.array[xt + 3] = Ae.w, Ut.array[xt + 4] = Pe.x, Ut.array[xt + 5] = Pe.y, Ut.array[xt + 6] = Pe.z, Ut.array[xt + 7] = Pe.w, Ut.array[xt + 8] = Le.x, Ut.array[xt + 9] = Le.y, Ut.array[xt + 10] = Le.z, Ut.array[xt + 11] = Le.w, Ut.array[xt + 12] = Fe.x, Ut.array[xt + 13] = Fe.y, Ut.array[xt + 14] = Fe.z, Ut.array[xt + 15] = Fe.w, xt += 16
                                                    } else if ("faces" === Ut.boundTo) {
                                                    for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) Le = Pe = Ae = bt = Ut.value[Yt[Ee]], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Ae.z, Ut.array[xt + 3] = Ae.w, Ut.array[xt + 4] = Pe.x, Ut.array[xt + 5] = Pe.y, Ut.array[xt + 6] = Pe.z, Ut.array[xt + 7] = Pe.w, Ut.array[xt + 8] = Le.x, Ut.array[xt + 9] = Le.y, Ut.array[xt + 10] = Le.z, Ut.array[xt + 11] = Le.w, xt += 12;
                                                    for (Ee = 0, ge = qt.length; ge > Ee; Ee++) Fe = Le = Pe = Ae = bt = Ut.value[qt[Ee]], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Ae.z, Ut.array[xt + 3] = Ae.w, Ut.array[xt + 4] = Pe.x, Ut.array[xt + 5] = Pe.y, Ut.array[xt + 6] = Pe.z, Ut.array[xt + 7] = Pe.w, Ut.array[xt + 8] = Le.x, Ut.array[xt + 9] = Le.y, Ut.array[xt + 10] = Le.z, Ut.array[xt + 11] = Le.w, Ut.array[xt + 12] = Fe.x, Ut.array[xt + 13] = Fe.y, Ut.array[xt + 14] = Fe.z, Ut.array[xt + 15] = Fe.w, xt += 16
                                                } else if ("faceVertices" === Ut.boundTo) {
                                                    for (Ee = 0, ge = Yt.length; ge > Ee; Ee++) bt = Ut.value[Yt[Ee]], Ae = bt[0], Pe = bt[1], Le = bt[2], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Ae.z, Ut.array[xt + 3] = Ae.w, Ut.array[xt + 4] = Pe.x, Ut.array[xt + 5] = Pe.y, Ut.array[xt + 6] = Pe.z, Ut.array[xt + 7] = Pe.w, Ut.array[xt + 8] = Le.x, Ut.array[xt + 9] = Le.y, Ut.array[xt + 10] = Le.z, Ut.array[xt + 11] = Le.w, xt += 12;
                                                    for (Ee = 0, ge = qt.length; ge > Ee; Ee++) bt = Ut.value[qt[Ee]],
                                                        Ae = bt[0], Pe = bt[1], Le = bt[2], Fe = bt[3], Ut.array[xt] = Ae.x, Ut.array[xt + 1] = Ae.y, Ut.array[xt + 2] = Ae.z, Ut.array[xt + 3] = Ae.w, Ut.array[xt + 4] = Pe.x, Ut.array[xt + 5] = Pe.y, Ut.array[xt + 6] = Pe.z, Ut.array[xt + 7] = Pe.w, Ut.array[xt + 8] = Le.x, Ut.array[xt + 9] = Le.y, Ut.array[xt + 10] = Le.z, Ut.array[xt + 11] = Le.w, Ut.array[xt + 12] = Fe.x, Ut.array[xt + 13] = Fe.y, Ut.array[xt + 14] = Fe.z, Ut.array[xt + 15] = Fe.w, xt += 16
                                                }
                                                k.bindBuffer(k.ARRAY_BUFFER, Ut.buffer), k.bufferData(k.ARRAY_BUFFER, Ut.array, he)
                                            }
                                    ce && (delete se.__inittedArrays, delete se.__colorArray, delete se.__normalArray, delete se.__tangentArray, delete se.__uvArray, delete se.__uv2Array, delete se.__faceArray, delete se.__vertexArray, delete se.__lineArray, delete se.__skinIndexArray, delete se.__skinWeightArray)
                                }
                            }
                        te.verticesNeedUpdate = !1, te.morphTargetsNeedUpdate = !1, te.elementsNeedUpdate = !1, te.uvsNeedUpdate = !1, te.normalsNeedUpdate = !1, te.colorsNeedUpdate = !1, te.tangentsNeedUpdate = !1, te.buffersNeedUpdate = !1, ne.attributes && v(ne)
                    } else if (J instanceof THREE.Ribbon) {
                    if (ne = n(J, te), re = ne.attributes && g(ne), te.verticesNeedUpdate || te.colorsNeedUpdate || te.normalsNeedUpdate || re) {
                        var ri = te,
                            ni = k.DYNAMIC_DRAW,
                            oi = void 0,
                            ai = void 0,
                            si = void 0,
                            li = void 0,
                            hi = void 0,
                            ci = void 0,
                            ui = void 0,
                            fi = void 0,
                            pi = void 0,
                            di = void 0,
                            mi = void 0,
                            Ei = void 0,
                            gi = void 0,
                            vi = ri.vertices,
                            Ti = ri.colors,
                            yi = ri.normals,
                            _i = vi.length,
                            Ri = Ti.length,
                            xi = yi.length,
                            bi = ri.__vertexArray,
                            wi = ri.__colorArray,
                            Hi = ri.__normalArray,
                            Si = ri.colorsNeedUpdate,
                            Mi = ri.normalsNeedUpdate,
                            Ci = ri.__webglCustomAttributesList;
                        if (ri.verticesNeedUpdate) {
                            for (oi = 0; _i > oi; oi++) li = vi[oi], hi = 3 * oi, bi[hi] = li.x, bi[hi + 1] = li.y, bi[hi + 2] = li.z;
                            k.bindBuffer(k.ARRAY_BUFFER, ri.__webglVertexBuffer), k.bufferData(k.ARRAY_BUFFER, bi, ni)
                        }
                        if (Si) {
                            for (ai = 0; Ri > ai; ai++) ci = Ti[ai], hi = 3 * ai, wi[hi] = ci.r, wi[hi + 1] = ci.g, wi[hi + 2] = ci.b;
                            k.bindBuffer(k.ARRAY_BUFFER, ri.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, wi, ni)
                        }
                        if (Mi) {
                            for (si = 0; xi > si; si++) ui = yi[si], hi = 3 * si, Hi[hi] = ui.x, Hi[hi + 1] = ui.y, Hi[hi + 2] = ui.z;
                            k.bindBuffer(k.ARRAY_BUFFER, ri.__webglNormalBuffer), k.bufferData(k.ARRAY_BUFFER, Hi, ni)
                        }
                        if (Ci)
                            for (fi = 0, pi = Ci.length; pi > fi; fi++)
                                if (Ei = Ci[fi], Ei.needsUpdate && (void 0 === Ei.boundTo || "vertices" === Ei.boundTo)) {
                                    if (hi = 0, mi = Ei.value.length, 1 === Ei.size)
                                        for (di = 0; mi > di; di++) Ei.array[di] = Ei.value[di];
                                    else if (2 === Ei.size)
                                        for (di = 0; mi > di; di++) gi = Ei.value[di], Ei.array[hi] = gi.x, Ei.array[hi + 1] = gi.y, hi += 2;
                                    else if (3 === Ei.size)
                                        if ("c" === Ei.type)
                                            for (di = 0; mi > di; di++) gi = Ei.value[di], Ei.array[hi] = gi.r, Ei.array[hi + 1] = gi.g, Ei.array[hi + 2] = gi.b, hi += 3;
                                        else
                                            for (di = 0; mi > di; di++) gi = Ei.value[di], Ei.array[hi] = gi.x, Ei.array[hi + 1] = gi.y, Ei.array[hi + 2] = gi.z, hi += 3;
                                    else if (4 === Ei.size)
                                        for (di = 0; mi > di; di++) gi = Ei.value[di], Ei.array[hi] = gi.x, Ei.array[hi + 1] = gi.y, Ei.array[hi + 2] = gi.z, Ei.array[hi + 3] = gi.w, hi += 4;
                                    k.bindBuffer(k.ARRAY_BUFFER, Ei.buffer), k.bufferData(k.ARRAY_BUFFER, Ei.array, ni)
                                }
                    }
                    te.verticesNeedUpdate = !1, te.colorsNeedUpdate = !1, te.normalsNeedUpdate = !1, ne.attributes && v(ne)
                } else if (J instanceof THREE.Line) {
                    if (ne = n(J, te), re = ne.attributes && g(ne), te.verticesNeedUpdate || te.colorsNeedUpdate || te.lineDistancesNeedUpdate || re) {
                        var Ai = te,
                            Pi = k.DYNAMIC_DRAW,
                            Li = void 0,
                            Fi = void 0,
                            Di = void 0,
                            zi = void 0,
                            Ui = void 0,
                            Ni = void 0,
                            Oi = Ai.vertices,
                            Bi = Ai.colors,
                            Vi = Ai.lineDistances,
                            ki = Oi.length,
                            Ii = Bi.length,
                            Gi = Vi.length,
                            Wi = Ai.__vertexArray,
                            ji = Ai.__colorArray,
                            Xi = Ai.__lineDistanceArray,
                            Yi = Ai.colorsNeedUpdate,
                            qi = Ai.lineDistancesNeedUpdate,
                            Ki = Ai.__webglCustomAttributesList,
                            $i = void 0,
                            Zi = void 0,
                            Qi = void 0,
                            Ji = void 0,
                            er = void 0,
                            tr = void 0;
                        if (Ai.verticesNeedUpdate) {
                            for (Li = 0; ki > Li; Li++) zi = Oi[Li], Ui = 3 * Li, Wi[Ui] = zi.x, Wi[Ui + 1] = zi.y, Wi[Ui + 2] = zi.z;
                            k.bindBuffer(k.ARRAY_BUFFER, Ai.__webglVertexBuffer), k.bufferData(k.ARRAY_BUFFER, Wi, Pi)
                        }
                        if (Yi) {
                            for (Fi = 0; Ii > Fi; Fi++) Ni = Bi[Fi], Ui = 3 * Fi, ji[Ui] = Ni.r, ji[Ui + 1] = Ni.g, ji[Ui + 2] = Ni.b;
                            k.bindBuffer(k.ARRAY_BUFFER, Ai.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, ji, Pi)
                        }
                        if (qi) {
                            for (Di = 0; Gi > Di; Di++) Xi[Di] = Vi[Di];
                            k.bindBuffer(k.ARRAY_BUFFER, Ai.__webglLineDistanceBuffer), k.bufferData(k.ARRAY_BUFFER, Xi, Pi)
                        }
                        if (Ki)
                            for ($i = 0, Zi = Ki.length; Zi > $i; $i++)
                                if (tr = Ki[$i], tr.needsUpdate && (void 0 === tr.boundTo || "vertices" === tr.boundTo)) {
                                    if (Ui = 0, Ji = tr.value.length, 1 === tr.size)
                                        for (Qi = 0; Ji > Qi; Qi++) tr.array[Qi] = tr.value[Qi];
                                    else if (2 === tr.size)
                                        for (Qi = 0; Ji > Qi; Qi++) er = tr.value[Qi], tr.array[Ui] = er.x, tr.array[Ui + 1] = er.y, Ui += 2;
                                    else if (3 === tr.size)
                                        if ("c" === tr.type)
                                            for (Qi = 0; Ji > Qi; Qi++) er = tr.value[Qi], tr.array[Ui] = er.r, tr.array[Ui + 1] = er.g, tr.array[Ui + 2] = er.b, Ui += 3;
                                        else
                                            for (Qi = 0; Ji > Qi; Qi++) er = tr.value[Qi], tr.array[Ui] = er.x, tr.array[Ui + 1] = er.y, tr.array[Ui + 2] = er.z, Ui += 3;
                                    else if (4 === tr.size)
                                        for (Qi = 0; Ji > Qi; Qi++) er = tr.value[Qi], tr.array[Ui] = er.x, tr.array[Ui + 1] = er.y, tr.array[Ui + 2] = er.z, tr.array[Ui + 3] = er.w, Ui += 4;
                                    k.bindBuffer(k.ARRAY_BUFFER, tr.buffer), k.bufferData(k.ARRAY_BUFFER, tr.array, Pi)
                                }
                    }
                    te.verticesNeedUpdate = !1, te.colorsNeedUpdate = !1, te.lineDistancesNeedUpdate = !1, ne.attributes && v(ne)
                } else if (J instanceof THREE.ParticleSystem)
                    if (te instanceof THREE.BufferGeometry)(te.verticesNeedUpdate || te.colorsNeedUpdate) && l(te, k.DYNAMIC_DRAW, !te.dynamic), te.verticesNeedUpdate = !1, te.colorsNeedUpdate = !1;
                    else {
                        if (ne = n(J, te), re = ne.attributes && g(ne), te.verticesNeedUpdate || te.colorsNeedUpdate || J.sortParticles || re) {
                            var ir = te,
                                rr = k.DYNAMIC_DRAW,
                                nr = J,
                                or = void 0,
                                ar = void 0,
                                sr = void 0,
                                lr = void 0,
                                hr = void 0,
                                cr = void 0,
                                ur = ir.vertices,
                                fr = ur.length,
                                pr = ir.colors,
                                dr = pr.length,
                                mr = ir.__vertexArray,
                                Er = ir.__colorArray,
                                gr = ir.__sortArray,
                                vr = ir.verticesNeedUpdate,
                                Tr = ir.colorsNeedUpdate,
                                yr = ir.__webglCustomAttributesList,
                                _r = void 0,
                                Rr = void 0,
                                xr = void 0,
                                br = void 0,
                                wr = void 0,
                                Hr = void 0;
                            if (nr.sortParticles) {
                                for (xe.copy(Re), xe.multiplySelf(nr.matrixWorld), or = 0; fr > or; or++) sr = ur[or], be.copy(sr), xe.multiplyVector3(be), gr[or] = [be.z, or];
                                for (gr.sort(f), or = 0; fr > or; or++) sr = ur[gr[or][1]], lr = 3 * or, mr[lr] = sr.x, mr[lr + 1] = sr.y, mr[lr + 2] = sr.z;
                                for (ar = 0; dr > ar; ar++) lr = 3 * ar, cr = pr[gr[ar][1]], Er[lr] = cr.r, Er[lr + 1] = cr.g, Er[lr + 2] = cr.b;
                                if (yr)
                                    for (_r = 0, Rr = yr.length; Rr > _r; _r++)
                                        if (Hr = yr[_r], void 0 === Hr.boundTo || "vertices" === Hr.boundTo)
                                            if (lr = 0, br = Hr.value.length, 1 === Hr.size)
                                                for (xr = 0; br > xr; xr++) hr = gr[xr][1], Hr.array[xr] = Hr.value[hr];
                                            else if (2 === Hr.size)
                                    for (xr = 0; br > xr; xr++) hr = gr[xr][1], wr = Hr.value[hr], Hr.array[lr] = wr.x, Hr.array[lr + 1] = wr.y, lr += 2;
                                else if (3 === Hr.size)
                                    if ("c" === Hr.type)
                                        for (xr = 0; br > xr; xr++) hr = gr[xr][1], wr = Hr.value[hr], Hr.array[lr] = wr.r, Hr.array[lr + 1] = wr.g, Hr.array[lr + 2] = wr.b, lr += 3;
                                    else
                                        for (xr = 0; br > xr; xr++) hr = gr[xr][1], wr = Hr.value[hr], Hr.array[lr] = wr.x, Hr.array[lr + 1] = wr.y, Hr.array[lr + 2] = wr.z, lr += 3;
                                else if (4 === Hr.size)
                                    for (xr = 0; br > xr; xr++) hr = gr[xr][1], wr = Hr.value[hr], Hr.array[lr] = wr.x, Hr.array[lr + 1] = wr.y, Hr.array[lr + 2] = wr.z, Hr.array[lr + 3] = wr.w, lr += 4
                            } else {
                                if (vr)
                                    for (or = 0; fr > or; or++) sr = ur[or], lr = 3 * or, mr[lr] = sr.x, mr[lr + 1] = sr.y, mr[lr + 2] = sr.z;
                                if (Tr)
                                    for (ar = 0; dr > ar; ar++) cr = pr[ar], lr = 3 * ar, Er[lr] = cr.r, Er[lr + 1] = cr.g, Er[lr + 2] = cr.b;
                                if (yr)
                                    for (_r = 0, Rr = yr.length; Rr > _r; _r++)
                                        if (Hr = yr[_r], Hr.needsUpdate && (void 0 === Hr.boundTo || "vertices" === Hr.boundTo))
                                            if (br = Hr.value.length, lr = 0, 1 === Hr.size)
                                                for (xr = 0; br > xr; xr++) Hr.array[xr] = Hr.value[xr];
                                            else if (2 === Hr.size)
                                    for (xr = 0; br > xr; xr++) wr = Hr.value[xr], Hr.array[lr] = wr.x, Hr.array[lr + 1] = wr.y, lr += 2;
                                else if (3 === Hr.size)
                                    if ("c" === Hr.type)
                                        for (xr = 0; br > xr; xr++) wr = Hr.value[xr], Hr.array[lr] = wr.r, Hr.array[lr + 1] = wr.g, Hr.array[lr + 2] = wr.b, lr += 3;
                                    else
                                        for (xr = 0; br > xr; xr++) wr = Hr.value[xr], Hr.array[lr] = wr.x, Hr.array[lr + 1] = wr.y, Hr.array[lr + 2] = wr.z, lr += 3;
                                else if (4 === Hr.size)
                                    for (xr = 0; br > xr; xr++) wr = Hr.value[xr], Hr.array[lr] = wr.x, Hr.array[lr + 1] = wr.y, Hr.array[lr + 2] = wr.z, Hr.array[lr + 3] = wr.w, lr += 4
                            }
                            if ((vr || nr.sortParticles) && (k.bindBuffer(k.ARRAY_BUFFER, ir.__webglVertexBuffer), k.bufferData(k.ARRAY_BUFFER, mr, rr)), (Tr || nr.sortParticles) && (k.bindBuffer(k.ARRAY_BUFFER, ir.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, Er, rr)), yr)
                                for (_r = 0, Rr = yr.length; Rr > _r; _r++) Hr = yr[_r], (Hr.needsUpdate || nr.sortParticles) && (k.bindBuffer(k.ARRAY_BUFFER, Hr.buffer), k.bufferData(k.ARRAY_BUFFER, Hr.array, rr))
                        }
                        te.verticesNeedUpdate = !1, te.colorsNeedUpdate = !1, ne.attributes && v(ne)
                    }
            }
        }, this.initMaterial = function (e, t, i, r) {
            var n, o, a, s;
            e.addEventListener("dispose", Ge);
            var l, h, c, u, f;
            if (e instanceof THREE.MeshDepthMaterial ? f = "depth" : e instanceof THREE.MeshNormalMaterial ? f = "normal" : e instanceof THREE.MeshBasicMaterial ? f = "basic" : e instanceof THREE.MeshLambertMaterial ? f = "lambert" : e instanceof THREE.MeshPhongMaterial ? f = "phong" : e instanceof THREE.LineBasicMaterial ? f = "basic" : e instanceof THREE.LineDashedMaterial ? f = "dashed" : e instanceof THREE.ParticleBasicMaterial && (f = "particle_basic"), f) {
                var p = THREE.ShaderLib[f];
                e.uniforms = THREE.UniformsUtils.clone(p.uniforms), e.vertexShader = p.vertexShader, e.fragmentShader = p.fragmentShader
            }
            var d, m, E;
            for (n = a = m = E = p = 0, o = t.length; o > n; n++) d = t[n], d.onlyShadow || (d instanceof THREE.DirectionalLight && a++, d instanceof THREE.PointLight && m++, d instanceof THREE.SpotLight && E++, d instanceof THREE.HemisphereLight && p++);
            for (n = a, o = m, a = E, s = p, p = d = 0, E = t.length; E > p; p++) m = t[p], m.castShadow && (m instanceof THREE.SpotLight && d++, m instanceof THREE.DirectionalLight && !m.shadowCascade && d++);
            u = d, Fe && r && r.useVertexTexture ? c = 1024 : (t = k.getParameter(k.MAX_VERTEX_UNIFORM_VECTORS), t = Math.floor((t - 20) / 4), void 0 !== r && r instanceof THREE.SkinnedMesh && (t = Math.min(r.bones.length, t), t < r.bones.length && void 0), c = t);
            e: {
                m = e.fragmentShader, E = e.vertexShader, p = e.uniforms, t = e.attributes, d = e.defines;
                var g, v, T, i = {
                        map: !!e.map,
                        envMap: !!e.envMap,
                        lightMap: !!e.lightMap,
                        bumpMap: !!e.bumpMap,
                        normalMap: !!e.normalMap,
                        specularMap: !!e.specularMap,
                        vertexColors: e.vertexColors,
                        fog: i,
                        useFog: e.fog,
                        fogExp: i instanceof THREE.FogExp2,
                        sizeAttenuation: e.sizeAttenuation,
                        skinning: e.skinning,
                        maxBones: c,
                        useVertexTexture: Fe && r && r.useVertexTexture,
                        boneTextureWidth: r && r.boneTextureWidth,
                        boneTextureHeight: r && r.boneTextureHeight,
                        morphTargets: e.morphTargets,
                        morphNormals: e.morphNormals,
                        maxMorphTargets: this.maxMorphTargets,
                        maxMorphNormals: this.maxMorphNormals,
                        maxDirLights: n,
                        maxPointLights: o,
                        maxSpotLights: a,
                        maxHemiLights: s,
                        maxShadows: u,
                        shadowMapEnabled: this.shadowMapEnabled && r.receiveShadow,
                        shadowMapType: this.shadowMapType,
                        shadowMapDebug: this.shadowMapDebug,
                        shadowMapCascade: this.shadowMapCascade,
                        alphaTest: e.alphaTest,
                        metal: e.metal,
                        perPixel: e.perPixel,
                        wrapAround: e.wrapAround,
                        doubleSided: e.side === THREE.DoubleSide,
                        flipSided: e.side === THREE.BackSide
                    },
                    r = [];
                f ? r.push(f) : (r.push(m), r.push(E));
                for (v in d) r.push(v), r.push(d[v]);
                for (g in i) r.push(g), r.push(i[g]);
                for (f = r.join(), g = 0, v = Y.length; v > g; g++)
                    if (r = Y[g], r.code === f) {
                        r.usedTimes++, h = r.program;
                        break e
                    }
                g = "SHADOWMAP_TYPE_BASIC", i.shadowMapType === THREE.PCFShadowMap ? g = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === THREE.PCFSoftShadowMap && (g = "SHADOWMAP_TYPE_PCF_SOFT"), v = [];
                for (T in d) r = d[T], !1 !== r && (r = "#define " + T + " " + r, v.push(r));
                r = v.join("\n"), T = k.createProgram(), v = ["precision " + F + " float;", r, Le ? "#define VERTEX_TEXTURES" : "", X.gammaInput ? "#define GAMMA_INPUT" : "", X.gammaOutput ? "#define GAMMA_OUTPUT" : "", X.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", "#define MAX_DIR_LIGHTS " + i.maxDirLights, "#define MAX_POINT_LIGHTS " + i.maxPointLights, "#define MAX_SPOT_LIGHTS " + i.maxSpotLights, "#define MAX_HEMI_LIGHTS " + i.maxHemiLights, "#define MAX_SHADOWS " + i.maxShadows, "#define MAX_BONES " + i.maxBones, i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.vertexColors ? "#define USE_COLOR" : "", i.skinning ? "#define USE_SKINNING" : "", i.useVertexTexture ? "#define BONE_TEXTURE" : "", i.boneTextureWidth ? "#define N_BONE_PIXEL_X " + i.boneTextureWidth.toFixed(1) : "", i.boneTextureHeight ? "#define N_BONE_PIXEL_Y " + i.boneTextureHeight.toFixed(1) : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals ? "#define USE_MORPHNORMALS" : "", i.perPixel ? "#define PHONG_PER_PIXEL" : "", i.wrapAround ? "#define WRAP_AROUND" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + g : "", i.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", i.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n"), g = ["precision " + F + " float;", i.bumpMap || i.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", r, "#define MAX_DIR_LIGHTS " + i.maxDirLights, "#define MAX_POINT_LIGHTS " + i.maxPointLights, "#define MAX_SPOT_LIGHTS " + i.maxSpotLights, "#define MAX_HEMI_LIGHTS " + i.maxHemiLights, "#define MAX_SHADOWS " + i.maxShadows, i.alphaTest ? "#define ALPHATEST " + i.alphaTest : "", X.gammaInput ? "#define GAMMA_INPUT" : "", X.gammaOutput ? "#define GAMMA_OUTPUT" : "", X.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.vertexColors ? "#define USE_COLOR" : "", i.metal ? "#define METAL" : "", i.perPixel ? "#define PHONG_PER_PIXEL" : "", i.wrapAround ? "#define WRAP_AROUND" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + g : "", i.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", i.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"), g = S("fragment", g + m), v = S("vertex", v + E), k.attachShader(T, v), k.attachShader(T, g), k.linkProgram(T), k.getProgramParameter(T, k.LINK_STATUS) || void 0, k.deleteShader(g), k.deleteShader(v), T.uniforms = {}, T.attributes = {};
                var y;
                g = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" "), i.useVertexTexture ? g.push("boneTexture") : g.push("boneGlobalMatrices");
                for (y in p) g.push(y);
                for (y = g, g = 0, v = y.length; v > g; g++) p = y[g], T.uniforms[p] = k.getUniformLocation(T, p);
                for (g = "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" "), y = 0; y < i.maxMorphTargets; y++) g.push("morphTarget" + y);
                for (y = 0; y < i.maxMorphNormals; y++) g.push("morphNormal" + y);
                for (h in t) g.push(h);
                for (h = g, y = 0, t = h.length; t > y; y++) g = h[y], T.attributes[g] = k.getAttribLocation(T, g);
                T.id = q++, Y.push({
                    program: T,
                    code: f,
                    usedTimes: 1
                }), X.info.memory.programs = Y.length, h = T
            }
            if (e.program = h, y = e.program.attributes, e.morphTargets)
                for (e.numSupportedMorphTargets = 0, t = "morphTarget", h = 0; h < this.maxMorphTargets; h++) T = t + h, 0 <= y[T] && e.numSupportedMorphTargets++;
            if (e.morphNormals)
                for (e.numSupportedMorphNormals = 0, t = "morphNormal", h = 0; h < this.maxMorphNormals; h++) T = t + h, 0 <= y[T] && e.numSupportedMorphNormals++;
            e.uniformsList = [];
            for (l in e.uniforms) e.uniformsList.push([e.uniforms[l], l])
        }, this.setFaceCulling = function (e, t) {
            e === THREE.CullFaceNone ? k.disable(k.CULL_FACE) : (t === THREE.FrontFaceDirectionCW ? k.frontFace(k.CW) : k.frontFace(k.CCW), e === THREE.CullFaceBack ? k.cullFace(k.BACK) : e === THREE.CullFaceFront ? k.cullFace(k.FRONT) : k.cullFace(k.FRONT_AND_BACK), k.enable(k.CULL_FACE))
        }, this.setMaterialFaces = function (e) {
            var t = e.side === THREE.DoubleSide,
                e = e.side === THREE.BackSide;
            ie !== t && (t ? k.disable(k.CULL_FACE) : k.enable(k.CULL_FACE), ie = t), re !== e && (e ? k.frontFace(k.CW) : k.frontFace(k.CCW), re = e)
        }, this.setDepthTest = function (e) {
            le !== e && (e ? k.enable(k.DEPTH_TEST) : k.disable(k.DEPTH_TEST), le = e)
        }, this.setDepthWrite = function (e) {
            he !== e && (k.depthMask(e), he = e)
        }, this.setBlending = function (e, t, i, r) {
            e !== ne && (e === THREE.NoBlending ? k.disable(k.BLEND) : e === THREE.AdditiveBlending ? (k.enable(k.BLEND), k.blendEquation(k.FUNC_ADD), k.blendFunc(k.SRC_ALPHA, k.ONE)) : e === THREE.SubtractiveBlending ? (k.enable(k.BLEND), k.blendEquation(k.FUNC_ADD), k.blendFunc(k.ZERO, k.ONE_MINUS_SRC_COLOR)) : e === THREE.MultiplyBlending ? (k.enable(k.BLEND), k.blendEquation(k.FUNC_ADD), k.blendFunc(k.ZERO, k.SRC_COLOR)) : e === THREE.CustomBlending ? k.enable(k.BLEND) : (k.enable(k.BLEND), k.blendEquationSeparate(k.FUNC_ADD, k.FUNC_ADD), k.blendFuncSeparate(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA, k.ONE, k.ONE_MINUS_SRC_ALPHA)), ne = e), e === THREE.CustomBlending ? (t !== oe && (k.blendEquation(P(t)), oe = t), (i !== ae || r !== se) && (k.blendFunc(P(i), P(r)), ae = i, se = r)) : se = ae = oe = null
        }, this.setTexture = function (e, t) {
            if (e.needsUpdate) {
                e.__webglInit || (e.__webglInit = !0, e.addEventListener("dispose", ke), e.__webglTexture = k.createTexture(), X.info.memory.textures++), k.activeTexture(k.TEXTURE0 + t), k.bindTexture(k.TEXTURE_2D, e.__webglTexture), k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, e.flipY), k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), k.pixelStorei(k.UNPACK_ALIGNMENT, e.unpackAlignment);
                var i = e.image,
                    r = 0 === (i.width & i.width - 1) && 0 === (i.height & i.height - 1),
                    n = P(e.format),
                    o = P(e.type);
                M(k.TEXTURE_2D, e, r);
                var a = e.mipmaps;
                if (e instanceof THREE.DataTexture)
                    if (0 < a.length && r) {
                        for (var s = 0, l = a.length; l > s; s++) i = a[s], k.texImage2D(k.TEXTURE_2D, s, n, i.width, i.height, 0, n, o, i.data);
                        e.generateMipmaps = !1
                    } else k.texImage2D(k.TEXTURE_2D, 0, n, i.width, i.height, 0, n, o, i.data);
                else if (e instanceof THREE.CompressedTexture)
                    for (s = 0, l = a.length; l > s; s++) i = a[s], k.compressedTexImage2D(k.TEXTURE_2D, s, n, i.width, i.height, 0, i.data);
                else if (0 < a.length && r) {
                    for (s = 0, l = a.length; l > s; s++) i = a[s], k.texImage2D(k.TEXTURE_2D, s, n, n, o, i);
                    e.generateMipmaps = !1
                } else k.texImage2D(k.TEXTURE_2D, 0, n, n, o, e.image);
                e.generateMipmaps && r && k.generateMipmap(k.TEXTURE_2D), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
            } else k.activeTexture(k.TEXTURE0 + t), k.bindTexture(k.TEXTURE_2D, e.__webglTexture)
        }, this.setRenderTarget = function (e) {
            var t = e instanceof THREE.WebGLRenderTargetCube;
            if (e && !e.__webglFramebuffer) {
                void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", Ie), e.__webglTexture = k.createTexture(), X.info.memory.textures++;
                var i = 0 === (e.width & e.width - 1) && 0 === (e.height & e.height - 1),
                    r = P(e.format),
                    n = P(e.type);
                if (t) {
                    e.__webglFramebuffer = [], e.__webglRenderbuffer = [], k.bindTexture(k.TEXTURE_CUBE_MAP, e.__webglTexture), M(k.TEXTURE_CUBE_MAP, e, i);
                    for (var o = 0; 6 > o; o++) {
                        e.__webglFramebuffer[o] = k.createFramebuffer(), e.__webglRenderbuffer[o] = k.createRenderbuffer(), k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, r, e.width, e.height, 0, r, n, null);
                        var a = e,
                            s = k.TEXTURE_CUBE_MAP_POSITIVE_X + o;
                        k.bindFramebuffer(k.FRAMEBUFFER, e.__webglFramebuffer[o]), k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, s, a.__webglTexture, 0), C(e.__webglRenderbuffer[o], e)
                    }
                    i && k.generateMipmap(k.TEXTURE_CUBE_MAP)
                } else e.__webglFramebuffer = k.createFramebuffer(), e.__webglRenderbuffer = e.shareDepthFrom ? e.shareDepthFrom.__webglRenderbuffer : k.createRenderbuffer(), k.bindTexture(k.TEXTURE_2D, e.__webglTexture), M(k.TEXTURE_2D, e, i), k.texImage2D(k.TEXTURE_2D, 0, r, e.width, e.height, 0, r, n, null), r = k.TEXTURE_2D, k.bindFramebuffer(k.FRAMEBUFFER, e.__webglFramebuffer), k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, r, e.__webglTexture, 0), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? k.framebufferRenderbuffer(k.FRAMEBUFFER, k.DEPTH_ATTACHMENT, k.RENDERBUFFER, e.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && k.framebufferRenderbuffer(k.FRAMEBUFFER, k.DEPTH_STENCIL_ATTACHMENT, k.RENDERBUFFER, e.__webglRenderbuffer) : C(e.__webglRenderbuffer, e), i && k.generateMipmap(k.TEXTURE_2D);
                t ? k.bindTexture(k.TEXTURE_CUBE_MAP, null) : k.bindTexture(k.TEXTURE_2D, null), k.bindRenderbuffer(k.RENDERBUFFER, null), k.bindFramebuffer(k.FRAMEBUFFER, null)
            }
            e ? (t = t ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer, i = e.width, e = e.height, n = r = 0) : (t = null, i = Ee, e = ge, r = de, n = me), t !== $ && (k.bindFramebuffer(k.FRAMEBUFFER, t), k.viewport(r, n, i, e), $ = t), ve = i, Te = e
        }, this.shadowMapPlugin = new THREE.ShadowMapPlugin, this.addPrePlugin(this.shadowMapPlugin), this.addPostPlugin(new THREE.SpritePlugin), this.addPostPlugin(new THREE.LensFlarePlugin)
    }, THREE.WebGLRenderTarget = function (e, t, i) {
        THREE.EventDispatcher.call(this), this.width = e, this.height = t, i = i || {}, this.wrapS = void 0 !== i.wrapS ? i.wrapS : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== i.wrapT ? i.wrapT : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== i.magFilter ? i.magFilter : THREE.LinearFilter, this.minFilter = void 0 !== i.minFilter ? i.minFilter : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.format = void 0 !== i.format ? i.format : THREE.RGBAFormat, this.type = void 0 !== i.type ? i.type : THREE.UnsignedByteType, this.depthBuffer = void 0 !== i.depthBuffer ? i.depthBuffer : !0, this.stencilBuffer = void 0 !== i.stencilBuffer ? i.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = null
    }, THREE.WebGLRenderTarget.prototype.clone = function () {
        var e = new THREE.WebGLRenderTarget(this.width, this.height);
        return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e
    }, THREE.WebGLRenderTarget.prototype.dispose = function () {
        this.dispatchEvent({
            type: "dispose"
        })
    }, THREE.WebGLRenderTargetCube = function (e, t, i) {
        THREE.WebGLRenderTarget.call(this, e, t, i), this.activeCubeFace = 0
    }, THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype), THREE.RenderableVertex = function () {
        this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4, this.visible = !0
    }, THREE.RenderableVertex.prototype.copy = function (e) {
        this.positionWorld.copy(e.positionWorld), this.positionScreen.copy(e.positionScreen)
    }, THREE.RenderableFace3 = function () {
        this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.centroidWorld = new THREE.Vector3, this.centroidScreen = new THREE.Vector3, this.normalWorld = new THREE.Vector3, this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.vertexNormalsLength = 0, this.material = this.color = null, this.uvs = [[]], this.z = null
    }, THREE.RenderableFace4 = function () {
        this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.v4 = new THREE.RenderableVertex, this.centroidWorld = new THREE.Vector3, this.centroidScreen = new THREE.Vector3, this.normalWorld = new THREE.Vector3, this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.vertexNormalsLength = 0, this.material = this.color = null, this.uvs = [[]], this.z = null
    }, THREE.RenderableObject = function () {
        this.z = this.object = null
    }, THREE.RenderableParticle = function () {
        this.rotation = this.z = this.y = this.x = this.object = null, this.scale = new THREE.Vector2, this.material = null
    }, THREE.RenderableLine = function () {
        this.z = null, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.material = null
    }, THREE.ColorUtils = {
        adjustHSV: function (e, t, i, r) {
            var n = THREE.ColorUtils.__hsv;
            e.getHSV(n), n.h = THREE.Math.clamp(n.h + t, 0, 1), n.s = THREE.Math.clamp(n.s + i, 0, 1), n.v = THREE.Math.clamp(n.v + r, 0, 1), e.setHSV(n.h, n.s, n.v)
        }
    }, THREE.ColorUtils.__hsv = {
        h: 0,
        s: 0,
        v: 0
    }, THREE.GeometryUtils = {
        merge: function (e, t) {
            var i, r, n = e.vertices.length,
                o = t instanceof THREE.Mesh ? t.geometry : t,
                a = e.vertices,
                s = o.vertices,
                l = e.faces,
                h = o.faces,
                c = e.faceVertexUvs[0],
                o = o.faceVertexUvs[0];
            t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), i = t.matrix, r = new THREE.Matrix4, r.extractRotation(i, t.scale));
            for (var u = 0, f = s.length; f > u; u++) {
                var p = s[u].clone();
                i && i.multiplyVector3(p), a.push(p)
            }
            for (u = 0, f = h.length; f > u; u++) {
                var d, m, p = h[u],
                    E = p.vertexNormals,
                    g = p.vertexColors;
                for (p instanceof THREE.Face3 ? d = new THREE.Face3(p.a + n, p.b + n, p.c + n) : p instanceof THREE.Face4 && (d = new THREE.Face4(p.a + n, p.b + n, p.c + n, p.d + n)), d.normal.copy(p.normal), r && r.multiplyVector3(d.normal), a = 0, s = E.length; s > a; a++) m = E[a].clone(), r && r.multiplyVector3(m), d.vertexNormals.push(m);
                for (d.color.copy(p.color), a = 0, s = g.length; s > a; a++) m = g[a], d.vertexColors.push(m.clone());
                d.materialIndex = p.materialIndex, d.centroid.copy(p.centroid), i && i.multiplyVector3(d.centroid), l.push(d)
            }
            for (u = 0, f = o.length; f > u; u++) {
                for (i = o[u], r = [], a = 0, s = i.length; s > a; a++) r.push(new THREE.Vector2(i[a].x, i[a].y));
                c.push(r)
            }
        },
        removeMaterials: function (e, t) {
            for (var i = {}, r = 0, n = t.length; n > r; r++) i[t[r]] = !0;
            for (var o, a = [], r = 0, n = e.faces.length; n > r; r++) o = e.faces[r], o.materialIndex in i || a.push(o);
            e.faces = a
        },
        randomPointInTriangle: function (e, t, i) {
            var r, n, o, a = new THREE.Vector3,
                s = THREE.GeometryUtils.__v1;
            return r = THREE.GeometryUtils.random(), n = THREE.GeometryUtils.random(), r + n > 1 && (r = 1 - r, n = 1 - n), o = 1 - r - n, a.copy(e), a.multiplyScalar(r), s.copy(t), s.multiplyScalar(n), a.addSelf(s), s.copy(i), s.multiplyScalar(o), a.addSelf(s), a
        },
        randomPointInFace: function (e, t, i) {
            var r, n, o;
            if (e instanceof THREE.Face3) return r = t.vertices[e.a], n = t.vertices[e.b], o = t.vertices[e.c], THREE.GeometryUtils.randomPointInTriangle(r, n, o);
            if (e instanceof THREE.Face4) {
                r = t.vertices[e.a], n = t.vertices[e.b], o = t.vertices[e.c];
                var a, t = t.vertices[e.d];
                return i ? e._area1 && e._area2 ? (i = e._area1, a = e._area2) : (i = THREE.GeometryUtils.triangleArea(r, n, t), a = THREE.GeometryUtils.triangleArea(n, o, t), e._area1 = i, e._area2 = a) : (i = THREE.GeometryUtils.triangleArea(r, n, t), a = THREE.GeometryUtils.triangleArea(n, o, t)), THREE.GeometryUtils.random() * (i + a) < i ? THREE.GeometryUtils.randomPointInTriangle(r, n, t) : THREE.GeometryUtils.randomPointInTriangle(n, o, t)
            }
        },
        randomPointsInGeometry: function (e, t) {
            function i(e) {
                function t(i, r) {
                    if (i > r) return i;
                    var n = i + Math.floor((r - i) / 2);
                    return p[n] > e ? t(i, n - 1) : p[n] < e ? t(n + 1, r) : n
                }
                return t(0, p.length - 1)
            }
            var r, n, o, a, s, l, h = e.faces,
                c = e.vertices,
                u = h.length,
                f = 0,
                p = [];
            for (n = 0; u > n; n++) r = h[n], r instanceof THREE.Face3 ? (o = c[r.a], a = c[r.b], s = c[r.c], r._area = THREE.GeometryUtils.triangleArea(o, a, s)) : r instanceof THREE.Face4 && (o = c[r.a], a = c[r.b], s = c[r.c], l = c[r.d], r._area1 = THREE.GeometryUtils.triangleArea(o, a, l), r._area2 = THREE.GeometryUtils.triangleArea(a, s, l), r._area = r._area1 + r._area2), f += r._area, p[n] = f;
            for (r = [], n = 0; t > n; n++) c = THREE.GeometryUtils.random() * f, c = i(c), r[n] = THREE.GeometryUtils.randomPointInFace(h[c], e, !0);
            return r
        },
        triangleArea: function (e, t, i) {
            var r = THREE.GeometryUtils.__v1,
                n = THREE.GeometryUtils.__v2;
            return r.sub(t, e), n.sub(i, e), r.crossSelf(n), .5 * r.length()
        },
        center: function (e) {
            e.computeBoundingBox();
            var t = e.boundingBox,
                i = new THREE.Vector3;
            return i.add(t.min, t.max), i.multiplyScalar(-.5), e.applyMatrix((new THREE.Matrix4).makeTranslation(i)), e.computeBoundingBox(), i
        },
        normalizeUVs: function (e) {
            for (var e = e.faceVertexUvs[0], t = 0, i = e.length; i > t; t++)
                for (var r = e[t], n = 0, o = r.length; o > n; n++) 1 !== r[n].x && (r[n].x -= Math.floor(r[n].x)), 1 !== r[n].y && (r[n].y -= Math.floor(r[n].y))
        },
        triangulateQuads: function (e) {
            var t, i, r, n, o = [],
                a = [],
                s = [];
            for (t = 0, i = e.faceUvs.length; i > t; t++) a[t] = [];
            for (t = 0, i = e.faceVertexUvs.length; i > t; t++) s[t] = [];
            for (t = 0, i = e.faces.length; i > t; t++)
                if (r = e.faces[t], r instanceof THREE.Face4) {
                    n = r.a;
                    var l = r.b,
                        h = r.c,
                        c = r.d,
                        u = new THREE.Face3,
                        f = new THREE.Face3;
                    for (u.color.copy(r.color), f.color.copy(r.color), u.materialIndex = r.materialIndex, f.materialIndex = r.materialIndex, u.a = n, u.b = l, u.c = c, f.a = l, f.b = h, f.c = c, 4 === r.vertexColors.length && (u.vertexColors[0] = r.vertexColors[0].clone(), u.vertexColors[1] = r.vertexColors[1].clone(), u.vertexColors[2] = r.vertexColors[3].clone(), f.vertexColors[0] = r.vertexColors[1].clone(), f.vertexColors[1] = r.vertexColors[2].clone(), f.vertexColors[2] = r.vertexColors[3].clone()), o.push(u, f), r = 0, n = e.faceVertexUvs.length; n > r; r++) e.faceVertexUvs[r].length && (u = e.faceVertexUvs[r][t], l = u[1], h = u[2], c = u[3], u = [u[0].clone(), l.clone(), c.clone()], l = [l.clone(), h.clone(), c.clone()], s[r].push(u, l));
                    for (r = 0, n = e.faceUvs.length; n > r; r++) e.faceUvs[r].length && (l = e.faceUvs[r][t], a[r].push(l, l))
                } else {
                    for (o.push(r), r = 0, n = e.faceUvs.length; n > r; r++) a[r].push(e.faceUvs[r][t]);
                    for (r = 0, n = e.faceVertexUvs.length; n > r; r++) s[r].push(e.faceVertexUvs[r][t])
                }
            e.faces = o, e.faceUvs = a, e.faceVertexUvs = s, e.computeCentroids(), e.computeFaceNormals(), e.computeVertexNormals(), e.hasTangents && e.computeTangents()
        },
        explode: function (e) {
            for (var t = [], i = 0, r = e.faces.length; r > i; i++) {
                var n = t.length,
                    o = e.faces[i];
                if (o instanceof THREE.Face4) {
                    var a = o.a,
                        s = o.b,
                        l = o.c,
                        a = e.vertices[a],
                        s = e.vertices[s],
                        l = e.vertices[l],
                        h = e.vertices[o.d];
                    t.push(a.clone()), t.push(s.clone()), t.push(l.clone()), t.push(h.clone()), o.a = n, o.b = n + 1, o.c = n + 2, o.d = n + 3
                } else a = o.a, s = o.b, l = o.c, a = e.vertices[a], s = e.vertices[s], l = e.vertices[l], t.push(a.clone()), t.push(s.clone()), t.push(l.clone()), o.a = n, o.b = n + 1, o.c = n + 2
            }
            e.vertices = t, delete e.__tmpVertices
        },
        tessellate: function (e, t) {
            var i, r, n, o, a, s, l, h, c, u, f, p, d, m, E, g, v, T, y, _ = [],
                R = [];
            for (i = 0, r = e.faceVertexUvs.length; r > i; i++) R[i] = [];
            for (i = 0, r = e.faces.length; r > i; i++)
                if (n = e.faces[i], n instanceof THREE.Face3)
                    if (o = n.a, a = n.b, s = n.c, h = e.vertices[o], c = e.vertices[a], u = e.vertices[s], p = h.distanceTo(c), d = c.distanceTo(u), f = h.distanceTo(u), p > t || d > t || f > t)
                        for (l = e.vertices.length, T = n.clone(), y = n.clone(), p >= d && p >= f ? (h = h.clone(), h.lerpSelf(c, .5), T.a = o, T.b = l, T.c = s, y.a = l, y.b = a, y.c = s, 3 === n.vertexNormals.length && (o = n.vertexNormals[0].clone(), o.lerpSelf(n.vertexNormals[1], .5), T.vertexNormals[1].copy(o), y.vertexNormals[0].copy(o)), 3 === n.vertexColors.length && (o = n.vertexColors[0].clone(), o.lerpSelf(n.vertexColors[1], .5), T.vertexColors[1].copy(o), y.vertexColors[0].copy(o)), n = 0) : d >= p && d >= f ? (h = c.clone(), h.lerpSelf(u, .5), T.a = o, T.b = a, T.c = l, y.a = l, y.b = s, y.c = o, 3 === n.vertexNormals.length && (o = n.vertexNormals[1].clone(), o.lerpSelf(n.vertexNormals[2], .5), T.vertexNormals[2].copy(o), y.vertexNormals[0].copy(o), y.vertexNormals[1].copy(n.vertexNormals[2]), y.vertexNormals[2].copy(n.vertexNormals[0])), 3 === n.vertexColors.length && (o = n.vertexColors[1].clone(), o.lerpSelf(n.vertexColors[2], .5), T.vertexColors[2].copy(o), y.vertexColors[0].copy(o), y.vertexColors[1].copy(n.vertexColors[2]), y.vertexColors[2].copy(n.vertexColors[0])), n = 1) : (h = h.clone(), h.lerpSelf(u, .5), T.a = o, T.b = a, T.c = l, y.a = l, y.b = a, y.c = s, 3 === n.vertexNormals.length && (o = n.vertexNormals[0].clone(), o.lerpSelf(n.vertexNormals[2], .5), T.vertexNormals[2].copy(o), y.vertexNormals[0].copy(o)), 3 === n.vertexColors.length && (o = n.vertexColors[0].clone(), o.lerpSelf(n.vertexColors[2], .5), T.vertexColors[2].copy(o), y.vertexColors[0].copy(o)), n = 2), _.push(T, y), e.vertices.push(h), o = 0, a = e.faceVertexUvs.length; a > o; o++) e.faceVertexUvs[o].length && (h = e.faceVertexUvs[o][i], y = h[0], s = h[1], T = h[2], 0 === n ? (c = y.clone(), c.lerpSelf(s, .5), h = [y.clone(), c.clone(), T.clone()], s = [c.clone(), s.clone(), T.clone()]) : 1 === n ? (c = s.clone(), c.lerpSelf(T, .5), h = [y.clone(), s.clone(), c.clone()], s = [c.clone(), T.clone(), y.clone()]) : (c = y.clone(), c.lerpSelf(T, .5), h = [y.clone(), s.clone(), c.clone()], s = [c.clone(), s.clone(), T.clone()]), R[o].push(h, s));
                    else
                        for (_.push(n), o = 0, a = e.faceVertexUvs.length; a > o; o++) R[o].push(e.faceVertexUvs[o][i]);
            else if (o = n.a, a = n.b, s = n.c, l = n.d, h = e.vertices[o], c = e.vertices[a], u = e.vertices[s], f = e.vertices[l], p = h.distanceTo(c), d = c.distanceTo(u), m = u.distanceTo(f), E = h.distanceTo(f), p > t || d > t || m > t || E > t)
                for (g = e.vertices.length, v = e.vertices.length + 1, T = n.clone(), y = n.clone(), p >= d && p >= m && p >= E || m >= d && m >= p && m >= E ? (p = h.clone(), p.lerpSelf(c, .5), c = u.clone(), c.lerpSelf(f, .5), T.a = o, T.b = g, T.c = v, T.d = l, y.a = g, y.b = a, y.c = s, y.d = v, 4 === n.vertexNormals.length && (o = n.vertexNormals[0].clone(), o.lerpSelf(n.vertexNormals[1], .5), a = n.vertexNormals[2].clone(), a.lerpSelf(n.vertexNormals[3], .5), T.vertexNormals[1].copy(o), T.vertexNormals[2].copy(a), y.vertexNormals[0].copy(o), y.vertexNormals[3].copy(a)), 4 === n.vertexColors.length && (o = n.vertexColors[0].clone(), o.lerpSelf(n.vertexColors[1], .5), a = n.vertexColors[2].clone(), a.lerpSelf(n.vertexColors[3], .5), T.vertexColors[1].copy(o), T.vertexColors[2].copy(a), y.vertexColors[0].copy(o), y.vertexColors[3].copy(a)), n = 0) : (p = c.clone(), p.lerpSelf(u, .5), c = f.clone(), c.lerpSelf(h, .5), T.a = o, T.b = a, T.c = g, T.d = v, y.a = v, y.b = g, y.c = s, y.d = l, 4 === n.vertexNormals.length && (o = n.vertexNormals[1].clone(),
                        o.lerpSelf(n.vertexNormals[2], .5), a = n.vertexNormals[3].clone(), a.lerpSelf(n.vertexNormals[0], .5), T.vertexNormals[2].copy(o), T.vertexNormals[3].copy(a), y.vertexNormals[0].copy(a), y.vertexNormals[1].copy(o)), 4 === n.vertexColors.length && (o = n.vertexColors[1].clone(), o.lerpSelf(n.vertexColors[2], .5), a = n.vertexColors[3].clone(), a.lerpSelf(n.vertexColors[0], .5), T.vertexColors[2].copy(o), T.vertexColors[3].copy(a), y.vertexColors[0].copy(a), y.vertexColors[1].copy(o)), n = 1), _.push(T, y), e.vertices.push(p, c), o = 0, a = e.faceVertexUvs.length; a > o; o++) e.faceVertexUvs[o].length && (h = e.faceVertexUvs[o][i], y = h[0], s = h[1], T = h[2], h = h[3], 0 === n ? (c = y.clone(), c.lerpSelf(s, .5), u = T.clone(), u.lerpSelf(h, .5), y = [y.clone(), c.clone(), u.clone(), h.clone()], s = [c.clone(), s.clone(), T.clone(), u.clone()]) : (c = s.clone(), c.lerpSelf(T, .5), u = h.clone(), u.lerpSelf(y, .5), y = [y.clone(), s.clone(), c.clone(), u.clone()], s = [u.clone(), c.clone(), T.clone(), h.clone()]), R[o].push(y, s));
            else
                for (_.push(n), o = 0, a = e.faceVertexUvs.length; a > o; o++) R[o].push(e.faceVertexUvs[o][i]);
            e.faces = _, e.faceVertexUvs = R
        },
        setMaterialIndex: function (e, t, i, r) {
            for (e = e.faces, r = r || e.length - 1, i = i || 0; r >= i; i++) e[i].materialIndex = t
        }
    }, THREE.GeometryUtils.random = THREE.Math.random16, THREE.GeometryUtils.__v1 = new THREE.Vector3, THREE.GeometryUtils.__v2 = new THREE.Vector3, THREE.ImageUtils = {
        crossOrigin: "anonymous",
        loadTexture: function (e, t, i, r) {
            var n = new Image,
                o = new THREE.Texture(n, t),
                t = new THREE.ImageLoader;
            return t.addEventListener("load", function (e) {
                o.image = e.content, o.needsUpdate = !0, i && i(o)
            }), t.addEventListener("error", function (e) {
                r && r(e.message)
            }), t.crossOrigin = this.crossOrigin, t.load(e, n), o.sourceFile = e, o
        },
        loadCompressedTexture: function (e, t, i, r) {
            var n = new THREE.CompressedTexture;
            n.mapping = t;
            var o = new XMLHttpRequest;
            return o.onload = function () {
                var e = THREE.ImageUtils.parseDDS(o.response, !0);
                n.format = e.format, n.mipmaps = e.mipmaps, n.image.width = e.width, n.image.height = e.height, n.generateMipmaps = !1, n.needsUpdate = !0, i && i(n)
            }, o.onerror = r, o.open("GET", e, !0), o.responseType = "arraybuffer", o.send(null), n
        },
        loadTextureCube: function (e, t, i, r) {
            var n = [];
            n.loadCount = 0;
            var o = new THREE.Texture;
            o.image = n, void 0 !== t && (o.mapping = t), o.flipY = !1;
            for (var t = 0, a = e.length; a > t; ++t) {
                var s = new Image;
                n[t] = s, s.onload = function () {
                    n.loadCount += 1, 6 === n.loadCount && (o.needsUpdate = !0, i && i(o))
                }, s.onerror = r, s.crossOrigin = this.crossOrigin, s.src = e[t]
            }
            return o
        },
        loadCompressedTextureCube: function (e, t, i, r) {
            var n = [];
            n.loadCount = 0;
            var o = new THREE.CompressedTexture;
            if (o.image = n, void 0 !== t && (o.mapping = t), o.flipY = !1, o.generateMipmaps = !1, t = function (e, t) {
                    return function () {
                        var r = THREE.ImageUtils.parseDDS(e.response, !0);
                        t.format = r.format, t.mipmaps = r.mipmaps, t.width = r.width, t.height = r.height, n.loadCount += 1, 6 === n.loadCount && (o.format = r.format, o.needsUpdate = !0, i && i(o))
                    }
                }, e instanceof Array)
                for (var a = 0, s = e.length; s > a; ++a) {
                    var l = {};
                    n[a] = l;
                    var h = new XMLHttpRequest;
                    h.onload = t(h, l), h.onerror = r, l = e[a], h.open("GET", l, !0), h.responseType = "arraybuffer", h.send(null)
                } else h = new XMLHttpRequest, h.onload = function () {
                    var e = THREE.ImageUtils.parseDDS(h.response, !0);
                    if (e.isCubemap) {
                        for (var t = e.mipmaps.length / e.mipmapCount, r = 0; t > r; r++) {
                            n[r] = {
                                mipmaps: []
                            };
                            for (var a = 0; a < e.mipmapCount; a++) n[r].mipmaps.push(e.mipmaps[r * e.mipmapCount + a]), n[r].format = e.format, n[r].width = e.width, n[r].height = e.height
                        }
                        o.format = e.format, o.needsUpdate = !0, i && i(o)
                    }
                }, h.onerror = r, h.open("GET", e, !0), h.responseType = "arraybuffer", h.send(null);
            return o
        },
        parseDDS: function (e, t) {
            function i(e) {
                return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24)
            }
            var r = {
                    mipmaps: [],
                    width: 0,
                    height: 0,
                    format: null,
                    mipmapCount: 1
                },
                n = i("DXT1"),
                o = i("DXT3"),
                a = i("DXT5"),
                s = new Int32Array(e, 0, 31);
            if (542327876 !== s[0]) return r;
            if (4 & !s[20]) return r;
            var l = s[21];
            switch (l) {
            case n:
                n = 8, r.format = THREE.RGB_S3TC_DXT1_Format;
                break;
            case o:
                n = 16, r.format = THREE.RGBA_S3TC_DXT3_Format;
                break;
            case a:
                n = 16, r.format = THREE.RGBA_S3TC_DXT5_Format;
                break;
            default:
                return r
            }
            r.mipmapCount = 1, 131072 & s[2] && !1 !== t && (r.mipmapCount = Math.max(1, s[7])), r.isCubemap = !!(512 & s[28]), r.width = s[4], r.height = s[3];
            for (var s = s[1] + 4, o = r.width, a = r.height, l = r.isCubemap ? 6 : 1, h = 0; l > h; h++) {
                for (var c = 0; c < r.mipmapCount; c++) {
                    var u = Math.max(4, o) / 4 * Math.max(4, a) / 4 * n,
                        f = {
                            data: new Uint8Array(e, s, u),
                            width: o,
                            height: a
                        };
                    r.mipmaps.push(f), s += u, o = Math.max(.5 * o, 1), a = Math.max(.5 * a, 1)
                }
                o = r.width, a = r.height
            }
            return r
        },
        getNormalMap: function (e, t) {
            var i = function (e) {
                    var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
                    return [e[0] / t, e[1] / t, e[2] / t]
                },
                t = 1 | t,
                r = e.width,
                n = e.height,
                o = document.createElement("canvas");
            o.width = r, o.height = n;
            var a = o.getContext("2d");
            a.drawImage(e, 0, 0);
            for (var s = a.getImageData(0, 0, r, n).data, l = a.createImageData(r, n), h = l.data, c = 0; r > c; c++)
                for (var u = 0; n > u; u++) {
                    var f = 0 > u - 1 ? 0 : u - 1,
                        p = u + 1 > n - 1 ? n - 1 : u + 1,
                        d = 0 > c - 1 ? 0 : c - 1,
                        m = c + 1 > r - 1 ? r - 1 : c + 1,
                        E = [],
                        g = [0, 0, s[4 * (u * r + c)] / 255 * t];
                    for (E.push([-1, 0, s[4 * (u * r + d)] / 255 * t]), E.push([-1, -1, s[4 * (f * r + d)] / 255 * t]), E.push([0, -1, s[4 * (f * r + c)] / 255 * t]), E.push([1, -1, s[4 * (f * r + m)] / 255 * t]), E.push([1, 0, s[4 * (u * r + m)] / 255 * t]), E.push([1, 1, s[4 * (p * r + m)] / 255 * t]), E.push([0, 1, s[4 * (p * r + c)] / 255 * t]), E.push([-1, 1, s[4 * (p * r + d)] / 255 * t]), f = [], d = E.length, p = 0; d > p; p++) {
                        var m = E[p],
                            v = E[(p + 1) % d],
                            m = [m[0] - g[0], m[1] - g[1], m[2] - g[2]],
                            v = [v[0] - g[0], v[1] - g[1], v[2] - g[2]];
                        f.push(i([m[1] * v[2] - m[2] * v[1], m[2] * v[0] - m[0] * v[2], m[0] * v[1] - m[1] * v[0]]))
                    }
                    for (E = [0, 0, 0], p = 0; p < f.length; p++) E[0] += f[p][0], E[1] += f[p][1], E[2] += f[p][2];
                    E[0] /= f.length, E[1] /= f.length, E[2] /= f.length, g = 4 * (u * r + c), h[g] = 255 * ((E[0] + 1) / 2) | 0, h[g + 1] = 255 * ((E[1] + 1) / 2) | 0, h[g + 2] = 255 * E[2] | 0, h[g + 3] = 255
                }
            return a.putImageData(l, 0, 0), o
        },
        generateDataTexture: function (e, t, i) {
            for (var r = e * t, n = new Uint8Array(3 * r), o = Math.floor(255 * i.r), a = Math.floor(255 * i.g), i = Math.floor(255 * i.b), s = 0; r > s; s++) n[3 * s] = o, n[3 * s + 1] = a, n[3 * s + 2] = i;
            return e = new THREE.DataTexture(n, e, t, THREE.RGBFormat), e.needsUpdate = !0, e
        }
    }, THREE.SceneUtils = {
        createMultiMaterialObject: function (e, t) {
            for (var i = new THREE.Object3D, r = 0, n = t.length; n > r; r++) i.add(new THREE.Mesh(e, t[r]));
            return i
        },
        detach: function (e, t, i) {
            e.applyMatrix(t.matrixWorld), t.remove(e), i.add(e)
        },
        attach: function (e, t, i) {
            var r = new THREE.Matrix4;
            r.getInverse(i.matrixWorld), e.applyMatrix(r), t.remove(e), i.add(e)
        }
    }, THREE.ShaderUtils = {
        lib: {
            fresnel: {
                uniforms: {
                    mRefractionRatio: {
                        type: "f",
                        value: 1.02
                    },
                    mFresnelBias: {
                        type: "f",
                        value: .1
                    },
                    mFresnelPower: {
                        type: "f",
                        value: 2
                    },
                    mFresnelScale: {
                        type: "f",
                        value: 1
                    },
                    tCube: {
                        type: "t",
                        value: null
                    }
                },
                fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
                vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\nvec3 I = worldPosition.xyz - cameraPosition;\nvReflect = reflect( I, worldNormal );\nvRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
            },
            normal: {
                uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
                    enableAO: {
                        type: "i",
                        value: 0
                    },
                    enableDiffuse: {
                        type: "i",
                        value: 0
                    },
                    enableSpecular: {
                        type: "i",
                        value: 0
                    },
                    enableReflection: {
                        type: "i",
                        value: 0
                    },
                    enableDisplacement: {
                        type: "i",
                        value: 0
                    },
                    tDisplacement: {
                        type: "t",
                        value: null
                    },
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    tCube: {
                        type: "t",
                        value: null
                    },
                    tNormal: {
                        type: "t",
                        value: null
                    },
                    tSpecular: {
                        type: "t",
                        value: null
                    },
                    tAO: {
                        type: "t",
                        value: null
                    },
                    uNormalScale: {
                        type: "v2",
                        value: new THREE.Vector2(1, 1)
                    },
                    uDisplacementBias: {
                        type: "f",
                        value: 0
                    },
                    uDisplacementScale: {
                        type: "f",
                        value: 1
                    },
                    uDiffuseColor: {
                        type: "c",
                        value: new THREE.Color(16777215)
                    },
                    uSpecularColor: {
                        type: "c",
                        value: new THREE.Color(1118481)
                    },
                    uAmbientColor: {
                        type: "c",
                        value: new THREE.Color(16777215)
                    },
                    uShininess: {
                        type: "f",
                        value: 30
                    },
                    uOpacity: {
                        type: "f",
                        value: 1
                    },
                    useRefract: {
                        type: "i",
                        value: 0
                    },
                    uRefractionRatio: {
                        type: "f",
                        value: .98
                    },
                    uReflectivity: {
                        type: "f",
                        value: .5
                    },
                    uOffset: {
                        type: "v2",
                        value: new THREE.Vector2(0, 0)
                    },
                    uRepeat: {
                        type: "v2",
                        value: new THREE.Vector2(1, 1)
                    },
                    wrapRGB: {
                        type: "v3",
                        value: new THREE.Vector3(1, 1, 1)
                    }
                }]),
                fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;", THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}", THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
                vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;", THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned 	  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned 	  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")
            },
            cube: {
                uniforms: {
                    tCube: {
                        type: "t",
                        value: null
                    },
                    tFlip: {
                        type: "f",
                        value: -1
                    }
                },
                vertexShader: "varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
                fragmentShader: "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"
            }
        }
    }, THREE.FontUtils = {
        faces: {},
        face: "helvetiker",
        weight: "normal",
        style: "normal",
        size: 150,
        divisions: 10,
        getFace: function () {
            return this.faces[this.face][this.weight][this.style]
        },
        loadFace: function (e) {
            var t = e.familyName.toLowerCase();
            return this.faces[t] = this.faces[t] || {}, this.faces[t][e.cssFontWeight] = this.faces[t][e.cssFontWeight] || {}, this.faces[t][e.cssFontWeight][e.cssFontStyle] = e, this.faces[t][e.cssFontWeight][e.cssFontStyle] = e
        },
        drawText: function (e) {
            for (var t = this.getFace(), i = this.size / t.resolution, r = 0, n = String(e).split(""), o = n.length, a = [], e = 0; o > e; e++) {
                var s = new THREE.Path,
                    s = this.extractGlyphPoints(n[e], t, i, r, s),
                    r = r + s.offset;
                a.push(s.path)
            }
            return {
                paths: a,
                offset: r / 2
            }
        },
        extractGlyphPoints: function (e, t, i, r, n) {
            var o, a, s, l, h, c, u, f, p, d, m, E = [],
                g = t.glyphs[e] || t.glyphs["?"];
            if (g) {
                if (g.o)
                    for (t = g._cachedOutline || (g._cachedOutline = g.o.split(" ")), l = t.length, e = 0; l > e;) switch (s = t[e++]) {
                    case "m":
                        s = t[e++] * i + r, h = t[e++] * i, n.moveTo(s, h);
                        break;
                    case "l":
                        s = t[e++] * i + r, h = t[e++] * i, n.lineTo(s, h);
                        break;
                    case "q":
                        if (s = t[e++] * i + r, h = t[e++] * i, f = t[e++] * i + r, p = t[e++] * i, n.quadraticCurveTo(f, p, s, h), o = E[E.length - 1])
                            for (c = o.x, u = o.y, o = 1, a = this.divisions; a >= o; o++) {
                                var v = o / a;
                                THREE.Shape.Utils.b2(v, c, f, s), THREE.Shape.Utils.b2(v, u, p, h)
                            }
                        break;
                    case "b":
                        if (s = t[e++] * i + r, h = t[e++] * i, f = t[e++] * i + r, p = t[e++] * -i, d = t[e++] * i + r, m = t[e++] * -i, n.bezierCurveTo(s, h, f, p, d, m), o = E[E.length - 1])
                            for (c = o.x, u = o.y, o = 1, a = this.divisions; a >= o; o++) v = o / a, THREE.Shape.Utils.b3(v, c, f, d, s), THREE.Shape.Utils.b3(v, u, p, m, h)
                    }
                return {
                    offset: g.ha * i,
                    path: n
                }
            }
        }
    }, THREE.FontUtils.generateShapes = function (e, t) {
        var t = t || {},
            i = void 0 !== t.curveSegments ? t.curveSegments : 4,
            r = void 0 !== t.font ? t.font : "helvetiker",
            n = void 0 !== t.weight ? t.weight : "normal",
            o = void 0 !== t.style ? t.style : "normal";
        for (THREE.FontUtils.size = void 0 !== t.size ? t.size : 100, THREE.FontUtils.divisions = i, THREE.FontUtils.face = r, THREE.FontUtils.weight = n, THREE.FontUtils.style = o, i = THREE.FontUtils.drawText(e).paths, r = [], n = 0, o = i.length; o > n; n++) Array.prototype.push.apply(r, i[n].toShapes());
        return r
    },
    function (e) {
        var t = function (e) {
            for (var t = e.length, i = 0, r = t - 1, n = 0; t > n; r = n++) i += e[r].x * e[n].y - e[n].x * e[r].y;
            return .5 * i
        };
        return e.Triangulate = function (e, i) {
            var r = e.length;
            if (3 > r) return null;
            var n, o, a, s = [],
                l = [],
                h = [];
            if (0 < t(e))
                for (o = 0; r > o; o++) l[o] = o;
            else
                for (o = 0; r > o; o++) l[o] = r - 1 - o;
            var c = 2 * r;
            for (o = r - 1; r > 2 && !(0 >= c--);) {
                n = o, n >= r && (n = 0), o = n + 1, o >= r && (o = 0), a = o + 1, a >= r && (a = 0);
                var u;
                e: {
                    var f = u = void 0,
                        p = void 0,
                        d = void 0,
                        m = void 0,
                        E = void 0,
                        g = void 0,
                        v = void 0,
                        T = void 0,
                        f = e[l[n]].x,
                        p = e[l[n]].y,
                        d = e[l[o]].x,
                        m = e[l[o]].y,
                        E = e[l[a]].x,
                        g = e[l[a]].y;
                    if (1e-10 > (d - f) * (g - p) - (m - p) * (E - f)) u = !1;
                    else {
                        var y = void 0,
                            _ = void 0,
                            R = void 0,
                            x = void 0,
                            b = void 0,
                            w = void 0,
                            H = void 0,
                            S = void 0,
                            M = void 0,
                            C = void 0,
                            M = S = H = T = v = void 0,
                            y = E - d,
                            _ = g - m,
                            R = f - E,
                            x = p - g,
                            b = d - f,
                            w = m - p;
                        for (u = 0; r > u; u++)
                            if (u !== n && u !== o && u !== a && (v = e[l[u]].x, T = e[l[u]].y, H = v - f, S = T - p, M = v - d, C = T - m, v -= E, T -= g, M = y * C - _ * M, H = b * S - w * H, S = R * T - x * v, M >= 0 && S >= 0 && H >= 0)) {
                                u = !1;
                                break e
                            }
                        u = !0
                    }
                }
                if (u) {
                    for (s.push([e[l[n]], e[l[o]], e[l[a]]]), h.push([l[n], l[o], l[a]]), n = o, a = o + 1; r > a; n++, a++) l[n] = l[a];
                    r--, c = 2 * r
                }
            }
            return i ? h : s
        }, e.Triangulate.area = t, e
    }(THREE.FontUtils), self._typeface_js = {
        faces: THREE.FontUtils.faces,
        loadFace: THREE.FontUtils.loadFace
    }, THREE.Curve = function () {}, THREE.Curve.prototype.getPoint = function () {
        return null
    }, THREE.Curve.prototype.getPointAt = function (e) {
        return e = this.getUtoTmapping(e), this.getPoint(e)
    }, THREE.Curve.prototype.getPoints = function (e) {
        e || (e = 5);
        var t, i = [];
        for (t = 0; e >= t; t++) i.push(this.getPoint(t / e));
        return i
    }, THREE.Curve.prototype.getSpacedPoints = function (e) {
        e || (e = 5);
        var t, i = [];
        for (t = 0; e >= t; t++) i.push(this.getPointAt(t / e));
        return i
    }, THREE.Curve.prototype.getLength = function () {
        var e = this.getLengths();
        return e[e.length - 1]
    }, THREE.Curve.prototype.getLengths = function (e) {
        if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t, i, r = [],
            n = this.getPoint(0),
            o = 0;
        for (r.push(0), i = 1; e >= i; i++) t = this.getPoint(i / e), o += t.distanceTo(n), r.push(o), n = t;
        return this.cacheArcLengths = r
    }, THREE.Curve.prototype.updateArcLengths = function () {
        this.needsUpdate = !0, this.getLengths()
    }, THREE.Curve.prototype.getUtoTmapping = function (e, t) {
        var i, r = this.getLengths(),
            n = 0,
            o = r.length;
        i = t ? t : e * r[o - 1];
        for (var a, s = 0, l = o - 1; l >= s;)
            if (n = Math.floor(s + (l - s) / 2), a = r[n] - i, 0 > a) s = n + 1;
            else {
                if (!(a > 0)) {
                    l = n;
                    break
                }
                l = n - 1
            }
        return n = l, r[n] == i ? n / (o - 1) : (s = r[n], r = (n + (i - s) / (r[n + 1] - s)) / (o - 1))
    }, THREE.Curve.prototype.getTangent = function (e) {
        var t = e - 1e-4,
            e = e + 1e-4;
        return 0 > t && (t = 0), e > 1 && (e = 1), t = this.getPoint(t), this.getPoint(e).clone().subSelf(t).normalize()
    }, THREE.Curve.prototype.getTangentAt = function (e) {
        return e = this.getUtoTmapping(e), this.getTangent(e)
    }, THREE.LineCurve = function (e, t) {
        this.v1 = e, this.v2 = t
    }, THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.LineCurve.prototype.getPoint = function (e) {
        var t = this.v2.clone().subSelf(this.v1);
        return t.multiplyScalar(e).addSelf(this.v1), t
    }, THREE.LineCurve.prototype.getPointAt = function (e) {
        return this.getPoint(e)
    }, THREE.LineCurve.prototype.getTangent = function () {
        return this.v2.clone().subSelf(this.v1).normalize()
    }, THREE.QuadraticBezierCurve = function (e, t, i) {
        this.v0 = e, this.v1 = t, this.v2 = i
    }, THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.QuadraticBezierCurve.prototype.getPoint = function (e) {
        var t;
        return t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), e = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), new THREE.Vector2(t, e)
    }, THREE.QuadraticBezierCurve.prototype.getTangent = function (e) {
        var t;
        return t = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x), e = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y), t = new THREE.Vector2(t, e), t.normalize(), t
    }, THREE.CubicBezierCurve = function (e, t, i, r) {
        this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
    }, THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.CubicBezierCurve.prototype.getPoint = function (e) {
        var t;
        return t = THREE.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new THREE.Vector2(t, e)
    }, THREE.CubicBezierCurve.prototype.getTangent = function (e) {
        var t;
        return t = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t = new THREE.Vector2(t, e), t.normalize(), t
    }, THREE.SplineCurve = function (e) {
        this.points = void 0 == e ? [] : e
    }, THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.SplineCurve.prototype.getPoint = function (e) {
        var t, i = new THREE.Vector2,
            r = [],
            n = this.points;
        return t = (n.length - 1) * e, e = Math.floor(t), t -= e, r[0] = 0 == e ? e : e - 1, r[1] = e, r[2] = e > n.length - 2 ? n.length - 1 : e + 1, r[3] = e > n.length - 3 ? n.length - 1 : e + 2, i.x = THREE.Curve.Utils.interpolate(n[r[0]].x, n[r[1]].x, n[r[2]].x, n[r[3]].x, t), i.y = THREE.Curve.Utils.interpolate(n[r[0]].y, n[r[1]].y, n[r[2]].y, n[r[3]].y, t), i
    }, THREE.EllipseCurve = function (e, t, i, r, n, o, a) {
        this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = r, this.aStartAngle = n, this.aEndAngle = o, this.aClockwise = a
    }, THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype), THREE.EllipseCurve.prototype.getPoint = function (e) {
        var t = this.aEndAngle - this.aStartAngle;
        return this.aClockwise || (e = 1 - e), t = this.aStartAngle + e * t, e = this.aX + this.xRadius * Math.cos(t), t = this.aY + this.yRadius * Math.sin(t), new THREE.Vector2(e, t)
    }, THREE.ArcCurve = function (e, t, i, r, n, o) {
        THREE.EllipseCurve.call(this, e, t, i, i, r, n, o)
    }, THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype), THREE.Curve.Utils = {
        tangentQuadraticBezier: function (e, t, i, r) {
            return 2 * (1 - e) * (i - t) + 2 * e * (r - i)
        },
        tangentCubicBezier: function (e, t, i, r, n) {
            return -3 * t * (1 - e) * (1 - e) + 3 * i * (1 - e) * (1 - e) - 6 * e * i * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * n
        },
        tangentSpline: function (e) {
            return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + (-6 * e * e + 6 * e) + (3 * e * e - 2 * e)
        },
        interpolate: function (e, t, i, r, n) {
            var e = .5 * (i - e),
                r = .5 * (r - t),
                o = n * n;
            return (2 * t - 2 * i + e + r) * n * o + (-3 * t + 3 * i - 2 * e - r) * o + e * n + t
        }
    }, THREE.Curve.create = function (e, t) {
        return e.prototype = Object.create(THREE.Curve.prototype), e.prototype.getPoint = t, e
    }, THREE.LineCurve3 = THREE.Curve.create(function (e, t) {
        this.v1 = e, this.v2 = t
    }, function (e) {
        var t = new THREE.Vector3;
        return t.sub(this.v2, this.v1), t.multiplyScalar(e), t.addSelf(this.v1), t
    }), THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (e, t, i) {
        this.v0 = e, this.v1 = t, this.v2 = i
    }, function (e) {
        var t, i;
        return t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), i = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), e = THREE.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z), new THREE.Vector3(t, i, e)
    }), THREE.CubicBezierCurve3 = THREE.Curve.create(function (e, t, i, r) {
        this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
    }, function (e) {
        var t, i;
        return t = THREE.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), e = THREE.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new THREE.Vector3(t, i, e)
    }), THREE.SplineCurve3 = THREE.Curve.create(function (e) {
        this.points = void 0 == e ? [] : e
    }, function (e) {
        var t, i = new THREE.Vector3,
            r = [],
            n = this.points,
            e = (n.length - 1) * e;
        t = Math.floor(e), e -= t, r[0] = 0 == t ? t : t - 1, r[1] = t, r[2] = t > n.length - 2 ? n.length - 1 : t + 1, r[3] = t > n.length - 3 ? n.length - 1 : t + 2, t = n[r[0]];
        var o = n[r[1]],
            a = n[r[2]],
            r = n[r[3]];
        return i.x = THREE.Curve.Utils.interpolate(t.x, o.x, a.x, r.x, e), i.y = THREE.Curve.Utils.interpolate(t.y, o.y, a.y, r.y, e), i.z = THREE.Curve.Utils.interpolate(t.z, o.z, a.z, r.z, e), i
    }), THREE.ClosedSplineCurve3 = THREE.Curve.create(function (e) {
        this.points = void 0 == e ? [] : e
    }, function (e) {
        var t, i = new THREE.Vector3,
            r = [],
            n = this.points;
        return t = (n.length - 0) * e, e = Math.floor(t), t -= e, e += e > 0 ? 0 : (Math.floor(Math.abs(e) / n.length) + 1) * n.length, r[0] = (e - 1) % n.length, r[1] = e % n.length, r[2] = (e + 1) % n.length, r[3] = (e + 2) % n.length, i.x = THREE.Curve.Utils.interpolate(n[r[0]].x, n[r[1]].x, n[r[2]].x, n[r[3]].x, t),
            i.y = THREE.Curve.Utils.interpolate(n[r[0]].y, n[r[1]].y, n[r[2]].y, n[r[3]].y, t), i.z = THREE.Curve.Utils.interpolate(n[r[0]].z, n[r[1]].z, n[r[2]].z, n[r[3]].z, t), i
    }), THREE.CurvePath = function () {
        this.curves = [], this.bends = [], this.autoClose = !1
    }, THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype), THREE.CurvePath.prototype.add = function (e) {
        this.curves.push(e)
    }, THREE.CurvePath.prototype.checkConnection = function () {}, THREE.CurvePath.prototype.closePath = function () {
        var e = this.curves[0].getPoint(0),
            t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new THREE.LineCurve(t, e))
    }, THREE.CurvePath.prototype.getPoint = function (e) {
        for (var t = e * this.getLength(), i = this.getCurveLengths(), e = 0; e < i.length;) {
            if (i[e] >= t) return t = i[e] - t, e = this.curves[e], t = 1 - t / e.getLength(), e.getPointAt(t);
            e++
        }
        return null
    }, THREE.CurvePath.prototype.getLength = function () {
        var e = this.getCurveLengths();
        return e[e.length - 1]
    }, THREE.CurvePath.prototype.getCurveLengths = function () {
        if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
        var e, t = [],
            i = 0,
            r = this.curves.length;
        for (e = 0; r > e; e++) i += this.curves[e].getLength(), t.push(i);
        return this.cacheLengths = t
    }, THREE.CurvePath.prototype.getBoundingBox = function () {
        var e, t, i, r, n, o, a = this.getPoints();
        e = t = Number.NEGATIVE_INFINITY, r = n = Number.POSITIVE_INFINITY;
        var s, l, h, c, u = a[0] instanceof THREE.Vector3;
        for (c = u ? new THREE.Vector3 : new THREE.Vector2, l = 0, h = a.length; h > l; l++) s = a[l], s.x > e ? e = s.x : s.x < r && (r = s.x), s.y > t ? t = s.y : s.y < n && (n = s.y), u && (s.z > i ? i = s.z : s.z < o && (o = s.z)), c.addSelf(s);
        return a = {
            minX: r,
            minY: n,
            maxX: e,
            maxY: t,
            centroid: c.divideScalar(h)
        }, u && (a.maxZ = i, a.minZ = o), a
    }, THREE.CurvePath.prototype.createPointsGeometry = function (e) {
        return e = this.getPoints(e, !0), this.createGeometry(e)
    }, THREE.CurvePath.prototype.createSpacedPointsGeometry = function (e) {
        return e = this.getSpacedPoints(e, !0), this.createGeometry(e)
    }, THREE.CurvePath.prototype.createGeometry = function (e) {
        for (var t = new THREE.Geometry, i = 0; i < e.length; i++) t.vertices.push(new THREE.Vector3(e[i].x, e[i].y, e[i].z || 0));
        return t
    }, THREE.CurvePath.prototype.addWrapPath = function (e) {
        this.bends.push(e)
    }, THREE.CurvePath.prototype.getTransformedPoints = function (e, t) {
        var i, r, n = this.getPoints(e);
        for (t || (t = this.bends), i = 0, r = t.length; r > i; i++) n = this.getWrapPoints(n, t[i]);
        return n
    }, THREE.CurvePath.prototype.getTransformedSpacedPoints = function (e, t) {
        var i, r, n = this.getSpacedPoints(e);
        for (t || (t = this.bends), i = 0, r = t.length; r > i; i++) n = this.getWrapPoints(n, t[i]);
        return n
    }, THREE.CurvePath.prototype.getWrapPoints = function (e, t) {
        var i, r, n, o, a, s, l = this.getBoundingBox();
        for (i = 0, r = e.length; r > i; i++) n = e[i], o = n.x, a = n.y, s = o / l.maxX, s = t.getUtoTmapping(s, o), o = t.getPoint(s), a = t.getNormalVector(s).multiplyScalar(a), n.x = o.x + a.x, n.y = o.y + a.y;
        return e
    }, THREE.Gyroscope = function () {
        THREE.Object3D.call(this)
    }, THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype), THREE.Gyroscope.prototype.updateMatrixWorld = function (e) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent ? (this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.rotationWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.rotationObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.rotationObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        for (var t = 0, i = this.children.length; i > t; t++) this.children[t].updateMatrixWorld(e)
    }, THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3, THREE.Gyroscope.prototype.translationObject = new THREE.Vector3, THREE.Gyroscope.prototype.rotationWorld = new THREE.Quaternion, THREE.Gyroscope.prototype.rotationObject = new THREE.Quaternion, THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3, THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3, THREE.Path = function (e) {
        THREE.CurvePath.call(this), this.actions = [], e && this.fromPoints(e)
    }, THREE.Path.prototype = Object.create(THREE.CurvePath.prototype), THREE.PathActions = {
        MOVE_TO: "moveTo",
        LINE_TO: "lineTo",
        QUADRATIC_CURVE_TO: "quadraticCurveTo",
        BEZIER_CURVE_TO: "bezierCurveTo",
        CSPLINE_THRU: "splineThru",
        ARC: "arc",
        ELLIPSE: "ellipse"
    }, THREE.Path.prototype.fromPoints = function (e) {
        this.moveTo(e[0].x, e[0].y);
        for (var t = 1, i = e.length; i > t; t++) this.lineTo(e[t].x, e[t].y)
    }, THREE.Path.prototype.moveTo = function (e, t) {
        var i = Array.prototype.slice.call(arguments);
        this.actions.push({
            action: THREE.PathActions.MOVE_TO,
            args: i
        })
    }, THREE.Path.prototype.lineTo = function (e, t) {
        var i = Array.prototype.slice.call(arguments),
            r = this.actions[this.actions.length - 1].args,
            r = new THREE.LineCurve(new THREE.Vector2(r[r.length - 2], r[r.length - 1]), new THREE.Vector2(e, t));
        this.curves.push(r), this.actions.push({
            action: THREE.PathActions.LINE_TO,
            args: i
        })
    }, THREE.Path.prototype.quadraticCurveTo = function (e, t, i, r) {
        var n = Array.prototype.slice.call(arguments),
            o = this.actions[this.actions.length - 1].args,
            o = new THREE.QuadraticBezierCurve(new THREE.Vector2(o[o.length - 2], o[o.length - 1]), new THREE.Vector2(e, t), new THREE.Vector2(i, r));
        this.curves.push(o), this.actions.push({
            action: THREE.PathActions.QUADRATIC_CURVE_TO,
            args: n
        })
    }, THREE.Path.prototype.bezierCurveTo = function (e, t, i, r, n, o) {
        var a = Array.prototype.slice.call(arguments),
            s = this.actions[this.actions.length - 1].args,
            s = new THREE.CubicBezierCurve(new THREE.Vector2(s[s.length - 2], s[s.length - 1]), new THREE.Vector2(e, t), new THREE.Vector2(i, r), new THREE.Vector2(n, o));
        this.curves.push(s), this.actions.push({
            action: THREE.PathActions.BEZIER_CURVE_TO,
            args: a
        })
    }, THREE.Path.prototype.splineThru = function (e) {
        var t = Array.prototype.slice.call(arguments),
            i = this.actions[this.actions.length - 1].args,
            i = [new THREE.Vector2(i[i.length - 2], i[i.length - 1])];
        Array.prototype.push.apply(i, e), i = new THREE.SplineCurve(i), this.curves.push(i), this.actions.push({
            action: THREE.PathActions.CSPLINE_THRU,
            args: t
        })
    }, THREE.Path.prototype.arc = function (e, t, i, r, n, o) {
        var a = this.actions[this.actions.length - 1].args;
        this.absarc(e + a[a.length - 2], t + a[a.length - 1], i, r, n, o)
    }, THREE.Path.prototype.absarc = function (e, t, i, r, n, o) {
        this.absellipse(e, t, i, i, r, n, o)
    }, THREE.Path.prototype.ellipse = function (e, t, i, r, n, o, a) {
        var s = this.actions[this.actions.length - 1].args;
        this.absellipse(e + s[s.length - 2], t + s[s.length - 1], i, r, n, o, a)
    }, THREE.Path.prototype.absellipse = function (e, t, i, r, n, o, a) {
        var s = Array.prototype.slice.call(arguments),
            l = new THREE.EllipseCurve(e, t, i, r, n, o, a);
        this.curves.push(l), l = l.getPoint(a ? 1 : 0), s.push(l.x), s.push(l.y), this.actions.push({
            action: THREE.PathActions.ELLIPSE,
            args: s
        })
    }, THREE.Path.prototype.getSpacedPoints = function (e) {
        e || (e = 40);
        for (var t = [], i = 0; e > i; i++) t.push(this.getPoint(i / e));
        return t
    }, THREE.Path.prototype.getPoints = function (e, t) {
        if (this.useSpacedPoints) return this.getSpacedPoints(e, t);
        var i, r, n, o, a, s, l, h, c, u, f, p, d, e = e || 12,
            m = [];
        for (i = 0, r = this.actions.length; r > i; i++) switch (n = this.actions[i], o = n.action, n = n.args, o) {
        case THREE.PathActions.MOVE_TO:
            m.push(new THREE.Vector2(n[0], n[1]));
            break;
        case THREE.PathActions.LINE_TO:
            m.push(new THREE.Vector2(n[0], n[1]));
            break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
            for (a = n[2], s = n[3], c = n[0], u = n[1], 0 < m.length ? (o = m[m.length - 1], f = o.x, p = o.y) : (o = this.actions[i - 1].args, f = o[o.length - 2], p = o[o.length - 1]), n = 1; e >= n; n++) d = n / e, o = THREE.Shape.Utils.b2(d, f, c, a), d = THREE.Shape.Utils.b2(d, p, u, s), m.push(new THREE.Vector2(o, d));
            break;
        case THREE.PathActions.BEZIER_CURVE_TO:
            for (a = n[4], s = n[5], c = n[0], u = n[1], l = n[2], h = n[3], 0 < m.length ? (o = m[m.length - 1], f = o.x, p = o.y) : (o = this.actions[i - 1].args, f = o[o.length - 2], p = o[o.length - 1]), n = 1; e >= n; n++) d = n / e, o = THREE.Shape.Utils.b3(d, f, c, l, a), d = THREE.Shape.Utils.b3(d, p, u, h, s), m.push(new THREE.Vector2(o, d));
            break;
        case THREE.PathActions.CSPLINE_THRU:
            for (o = this.actions[i - 1].args, d = [new THREE.Vector2(o[o.length - 2], o[o.length - 1])], o = e * n[0].length, d = d.concat(n[0]), d = new THREE.SplineCurve(d), n = 1; o >= n; n++) m.push(d.getPointAt(n / o));
            break;
        case THREE.PathActions.ARC:
            for (a = n[0], s = n[1], u = n[2], l = n[3], o = n[4], c = !!n[5], f = o - l, p = 2 * e, n = 1; p >= n; n++) d = n / p, c || (d = 1 - d), d = l + d * f, o = a + u * Math.cos(d), d = s + u * Math.sin(d), m.push(new THREE.Vector2(o, d));
            break;
        case THREE.PathActions.ELLIPSE:
            for (a = n[0], s = n[1], u = n[2], h = n[3], l = n[4], o = n[5], c = !!n[6], f = o - l, p = 2 * e, n = 1; p >= n; n++) d = n / p, c || (d = 1 - d), d = l + d * f, o = a + u * Math.cos(d), d = s + h * Math.sin(d), m.push(new THREE.Vector2(o, d))
        }
        return i = m[m.length - 1], 1e-10 > Math.abs(i.x - m[0].x) && 1e-10 > Math.abs(i.y - m[0].y) && m.splice(m.length - 1, 1), t && m.push(m[0]), m
    }, THREE.Path.prototype.toShapes = function () {
        var e, t, i, r, n = [],
            o = new THREE.Path;
        for (e = 0, t = this.actions.length; t > e; e++) i = this.actions[e], r = i.args, i = i.action, i == THREE.PathActions.MOVE_TO && 0 != o.actions.length && (n.push(o), o = new THREE.Path), o[i].apply(o, r);
        if (0 != o.actions.length && n.push(o), 0 == n.length) return [];
        var a;
        if (r = [], e = !THREE.Shape.Utils.isClockWise(n[0].getPoints()), 1 == n.length) return o = n[0], a = new THREE.Shape, a.actions = o.actions, a.curves = o.curves, r.push(a), r;
        if (e)
            for (a = new THREE.Shape, e = 0, t = n.length; t > e; e++) o = n[e], THREE.Shape.Utils.isClockWise(o.getPoints()) ? (a.actions = o.actions, a.curves = o.curves, r.push(a), a = new THREE.Shape) : a.holes.push(o);
        else {
            for (e = 0, t = n.length; t > e; e++) o = n[e], THREE.Shape.Utils.isClockWise(o.getPoints()) ? (a && r.push(a), a = new THREE.Shape, a.actions = o.actions, a.curves = o.curves) : a.holes.push(o);
            r.push(a)
        }
        return r
    }, THREE.Shape = function () {
        THREE.Path.apply(this, arguments), this.holes = []
    }, THREE.Shape.prototype = Object.create(THREE.Path.prototype), THREE.Shape.prototype.extrude = function (e) {
        return new THREE.ExtrudeGeometry(this, e)
    }, THREE.Shape.prototype.makeGeometry = function (e) {
        return new THREE.ShapeGeometry(this, e)
    }, THREE.Shape.prototype.getPointsHoles = function (e) {
        var t, i = this.holes.length,
            r = [];
        for (t = 0; i > t; t++) r[t] = this.holes[t].getTransformedPoints(e, this.bends);
        return r
    }, THREE.Shape.prototype.getSpacedPointsHoles = function (e) {
        var t, i = this.holes.length,
            r = [];
        for (t = 0; i > t; t++) r[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
        return r
    }, THREE.Shape.prototype.extractAllPoints = function (e) {
        return {
            shape: this.getTransformedPoints(e),
            holes: this.getPointsHoles(e)
        }
    }, THREE.Shape.prototype.extractPoints = function (e) {
        return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e)
    }, THREE.Shape.prototype.extractAllSpacedPoints = function (e) {
        return {
            shape: this.getTransformedSpacedPoints(e),
            holes: this.getSpacedPointsHoles(e)
        }
    }, THREE.Shape.Utils = {
        removeHoles: function (e, t) {
            var i, r, n, o, a, s, l, h, c, u, f = e.concat(),
                p = f.concat(),
                d = [];
            for (a = 0; a < t.length; a++) {
                for (s = t[a], Array.prototype.push.apply(p, s), r = Number.POSITIVE_INFINITY, i = 0; i < s.length; i++)
                    for (c = s[i], u = [], h = 0; h < f.length; h++) l = f[h], l = c.distanceToSquared(l), u.push(l), r > l && (r = l, n = i, o = h);
                i = o - 1 >= 0 ? o - 1 : f.length - 1, r = n - 1 >= 0 ? n - 1 : s.length - 1;
                var m = [s[n], f[o], f[i]];
                h = THREE.FontUtils.Triangulate.area(m);
                var E = [s[n], s[r], f[o]];
                c = THREE.FontUtils.Triangulate.area(E), u = o, l = n, o += 1, n += -1, 0 > o && (o += f.length), o %= f.length, 0 > n && (n += s.length), n %= s.length, i = o - 1 >= 0 ? o - 1 : f.length - 1, r = n - 1 >= 0 ? n - 1 : s.length - 1, m = [s[n], f[o], f[i]], m = THREE.FontUtils.Triangulate.area(m), E = [s[n], s[r], f[o]], E = THREE.FontUtils.Triangulate.area(E), h + c > m + E && (o = u, n = l, 0 > o && (o += f.length), o %= f.length, 0 > n && (n += s.length), n %= s.length, i = o - 1 >= 0 ? o - 1 : f.length - 1, r = n - 1 >= 0 ? n - 1 : s.length - 1), h = f.slice(0, o), c = f.slice(o), u = s.slice(n), l = s.slice(0, n), r = [s[n], s[r], f[o]], d.push([s[n], f[o], f[i]]), d.push(r), f = h.concat(u).concat(l).concat(c)
            }
            return {
                shape: f,
                isolatedPts: d,
                allpoints: p
            }
        },
        triangulateShape: function (e, t) {
            var i, r, n, o, a = THREE.Shape.Utils.removeHoles(e, t),
                s = a.allpoints,
                l = a.isolatedPts,
                a = THREE.FontUtils.Triangulate(a.shape, !1),
                h = {};
            for (i = 0, r = s.length; r > i; i++) o = s[i].x + ":" + s[i].y, void 0 !== h[o] && void 0, h[o] = i;
            for (i = 0, r = a.length; r > i; i++)
                for (n = a[i], s = 0; 3 > s; s++) o = n[s].x + ":" + n[s].y, o = h[o], void 0 !== o && (n[s] = o);
            for (i = 0, r = l.length; r > i; i++)
                for (n = l[i], s = 0; 3 > s; s++) o = n[s].x + ":" + n[s].y, o = h[o], void 0 !== o && (n[s] = o);
            return a.concat(l)
        },
        isClockWise: function (e) {
            return 0 > THREE.FontUtils.Triangulate.area(e)
        },
        b2p0: function (e, t) {
            var i = 1 - e;
            return i * i * t
        },
        b2p1: function (e, t) {
            return 2 * (1 - e) * e * t
        },
        b2p2: function (e, t) {
            return e * e * t
        },
        b2: function (e, t, i, r) {
            return this.b2p0(e, t) + this.b2p1(e, i) + this.b2p2(e, r)
        },
        b3p0: function (e, t) {
            var i = 1 - e;
            return i * i * i * t
        },
        b3p1: function (e, t) {
            var i = 1 - e;
            return 3 * i * i * e * t
        },
        b3p2: function (e, t) {
            return 3 * (1 - e) * e * e * t
        },
        b3p3: function (e, t) {
            return e * e * e * t
        },
        b3: function (e, t, i, r, n) {
            return this.b3p0(e, t) + this.b3p1(e, i) + this.b3p2(e, r) + this.b3p3(e, n)
        }
    }, THREE.AnimationHandler = function () {
        var e = [],
            t = {},
            i = {
                update: function (t) {
                    for (var i = 0; i < e.length; i++) e[i].update(t)
                },
                addToUpdate: function (t) {
                    -1 === e.indexOf(t) && e.push(t)
                },
                removeFromUpdate: function (t) {
                    t = e.indexOf(t), -1 !== t && e.splice(t, 1)
                },
                add: function (e) {
                    if (void 0 !== t[e.name] && void 0, t[e.name] = e, !0 !== e.initialized) {
                        for (var i = 0; i < e.hierarchy.length; i++) {
                            for (var r = 0; r < e.hierarchy[i].keys.length; r++)
                                if (0 > e.hierarchy[i].keys[r].time && (e.hierarchy[i].keys[r].time = 0), void 0 !== e.hierarchy[i].keys[r].rot && !(e.hierarchy[i].keys[r].rot instanceof THREE.Quaternion)) {
                                    var n = e.hierarchy[i].keys[r].rot;
                                    e.hierarchy[i].keys[r].rot = new THREE.Quaternion(n[0], n[1], n[2], n[3])
                                }
                            if (e.hierarchy[i].keys.length && void 0 !== e.hierarchy[i].keys[0].morphTargets) {
                                for (n = {}, r = 0; r < e.hierarchy[i].keys.length; r++)
                                    for (var o = 0; o < e.hierarchy[i].keys[r].morphTargets.length; o++) {
                                        var a = e.hierarchy[i].keys[r].morphTargets[o];
                                        n[a] = -1
                                    }
                                for (e.hierarchy[i].usedMorphTargets = n, r = 0; r < e.hierarchy[i].keys.length; r++) {
                                    var s = {};
                                    for (a in n) {
                                        for (o = 0; o < e.hierarchy[i].keys[r].morphTargets.length; o++)
                                            if (e.hierarchy[i].keys[r].morphTargets[o] === a) {
                                                s[a] = e.hierarchy[i].keys[r].morphTargetsInfluences[o];
                                                break
                                            }
                                        o === e.hierarchy[i].keys[r].morphTargets.length && (s[a] = 0)
                                    }
                                    e.hierarchy[i].keys[r].morphTargetsInfluences = s
                                }
                            }
                            for (r = 1; r < e.hierarchy[i].keys.length; r++) e.hierarchy[i].keys[r].time === e.hierarchy[i].keys[r - 1].time && (e.hierarchy[i].keys.splice(r, 1), r--);
                            for (r = 0; r < e.hierarchy[i].keys.length; r++) e.hierarchy[i].keys[r].index = r
                        }
                        for (r = parseInt(e.length * e.fps, 10), e.JIT = {}, e.JIT.hierarchy = [], i = 0; i < e.hierarchy.length; i++) e.JIT.hierarchy.push(Array(r));
                        e.initialized = !0
                    }
                },
                get: function (e) {
                    return "string" == typeof e ? t[e] ? t[e] : null : void 0
                },
                parse: function (e) {
                    var t = [];
                    if (e instanceof THREE.SkinnedMesh)
                        for (var i = 0; i < e.bones.length; i++) t.push(e.bones[i]);
                    else r(e, t);
                    return t
                }
            },
            r = function (e, t) {
                t.push(e);
                for (var i = 0; i < e.children.length; i++) r(e.children[i], t)
            };
        return i.LINEAR = 0, i.CATMULLROM = 1, i.CATMULLROM_FORWARD = 2, i
    }(), THREE.Animation = function (e, t, i) {
        this.root = e, this.data = THREE.AnimationHandler.get(t), this.hierarchy = THREE.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.loop = this.isPaused = !0, this.interpolationType = void 0 !== i ? i : THREE.AnimationHandler.LINEAR, this.points = [], this.target = new THREE.Vector3
    }, THREE.Animation.prototype.play = function (e, t) {
        if (!1 === this.isPlaying) {
            this.isPlaying = !0, this.loop = void 0 !== e ? e : !0, this.currentTime = void 0 !== t ? t : 0;
            var i, r, n = this.hierarchy.length;
            for (i = 0; n > i; i++) {
                r = this.hierarchy[i], this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD && (r.useQuaternion = !0), r.matrixAutoUpdate = !0, void 0 === r.animationCache && (r.animationCache = {}, r.animationCache.prevKey = {
                    pos: 0,
                    rot: 0,
                    scl: 0
                }, r.animationCache.nextKey = {
                    pos: 0,
                    rot: 0,
                    scl: 0
                }, r.animationCache.originalMatrix = r instanceof THREE.Bone ? r.skinMatrix : r.matrix);
                var o = r.animationCache.prevKey;
                r = r.animationCache.nextKey, o.pos = this.data.hierarchy[i].keys[0], o.rot = this.data.hierarchy[i].keys[0], o.scl = this.data.hierarchy[i].keys[0], r.pos = this.getNextKeyWith("pos", i, 1), r.rot = this.getNextKeyWith("rot", i, 1), r.scl = this.getNextKeyWith("scl", i, 1)
            }
            this.update(0)
        }
        this.isPaused = !1, THREE.AnimationHandler.addToUpdate(this)
    }, THREE.Animation.prototype.pause = function () {
        !0 === this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this), this.isPaused = !this.isPaused
    }, THREE.Animation.prototype.stop = function () {
        this.isPaused = this.isPlaying = !1, THREE.AnimationHandler.removeFromUpdate(this)
    }, THREE.Animation.prototype.update = function (e) {
        if (!1 !== this.isPlaying) {
            var t, i, r, n, o, a, s, l, h, c = ["pos", "rot", "scl"];
            h = this.currentTime += e * this.timeScale, l = this.currentTime %= this.data.length, parseInt(Math.min(l * this.data.fps, this.data.length * this.data.fps), 10);
            for (var u = 0, f = this.hierarchy.length; f > u; u++) {
                e = this.hierarchy[u], s = e.animationCache;
                for (var p = 0; 3 > p; p++) {
                    if (t = c[p], o = s.prevKey[t], a = s.nextKey[t], a.time <= h) {
                        if (h > l) {
                            if (!this.loop) return void this.stop();
                            for (o = this.data.hierarchy[u].keys[0], a = this.getNextKeyWith(t, u, 1); a.time < l;) o = a, a = this.getNextKeyWith(t, u, a.index + 1)
                        } else
                            do o = a, a = this.getNextKeyWith(t, u, a.index + 1); while (a.time < l);
                        s.prevKey[t] = o, s.nextKey[t] = a
                    }
                    e.matrixAutoUpdate = !0, e.matrixWorldNeedsUpdate = !0, i = (l - o.time) / (a.time - o.time), r = o[t], n = a[t], (0 > i || i > 1) && (i = 0 > i ? 0 : 1), "pos" === t ? (t = e.position, this.interpolationType === THREE.AnimationHandler.LINEAR ? (t.x = r[0] + (n[0] - r[0]) * i, t.y = r[1] + (n[1] - r[1]) * i, t.z = r[2] + (n[2] - r[2]) * i) : this.interpolationType !== THREE.AnimationHandler.CATMULLROM && this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD || (this.points[0] = this.getPrevKeyWith("pos", u, o.index - 1).pos, this.points[1] = r, this.points[2] = n, this.points[3] = this.getNextKeyWith("pos", u, a.index + 1).pos, i = .33 * i + .33, r = this.interpolateCatmullRom(this.points, i), t.x = r[0], t.y = r[1], t.z = r[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (i = this.interpolateCatmullRom(this.points, 1.01 * i), this.target.set(i[0], i[1], i[2]), this.target.subSelf(t), this.target.y = 0, this.target.normalize(), i = Math.atan2(this.target.x, this.target.z), e.rotation.set(0, i, 0)))) : "rot" === t ? THREE.Quaternion.slerp(r, n, e.quaternion, i) : "scl" === t && (t = e.scale, t.x = r[0] + (n[0] - r[0]) * i, t.y = r[1] + (n[1] - r[1]) * i, t.z = r[2] + (n[2] - r[2]) * i)
                }
            }
        }
    }, THREE.Animation.prototype.interpolateCatmullRom = function (e, t) {
        var i, r, n, o, a, s, l = [],
            h = [];
        return i = (e.length - 1) * t, r = Math.floor(i), i -= r, l[0] = 0 === r ? r : r - 1, l[1] = r, l[2] = r > e.length - 2 ? r : r + 1, l[3] = r > e.length - 3 ? r : r + 2, r = e[l[0]], o = e[l[1]], a = e[l[2]], s = e[l[3]], l = i * i, n = i * l, h[0] = this.interpolate(r[0], o[0], a[0], s[0], i, l, n), h[1] = this.interpolate(r[1], o[1], a[1], s[1], i, l, n), h[2] = this.interpolate(r[2], o[2], a[2], s[2], i, l, n), h
    }, THREE.Animation.prototype.interpolate = function (e, t, i, r, n, o, a) {
        return e = .5 * (i - e), r = .5 * (r - t), (2 * (t - i) + e + r) * a + (-3 * (t - i) - 2 * e - r) * o + e * n + t
    }, THREE.Animation.prototype.getNextKeyWith = function (e, t, i) {
        for (var r = this.data.hierarchy[t].keys, i = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? i < r.length - 1 ? i : r.length - 1 : i % r.length; i < r.length; i++)
            if (void 0 !== r[i][e]) return r[i];
        return this.data.hierarchy[t].keys[0]
    }, THREE.Animation.prototype.getPrevKeyWith = function (e, t, i) {
        for (var r = this.data.hierarchy[t].keys, i = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? i > 0 ? i : 0 : i >= 0 ? i : i + r.length; i >= 0; i--)
            if (void 0 !== r[i][e]) return r[i];
        return this.data.hierarchy[t].keys[r.length - 1]
    }, THREE.KeyFrameAnimation = function (e, t, i) {
        for (this.root = e, this.data = THREE.AnimationHandler.get(t), this.hierarchy = THREE.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.loop = this.isPaused = !0, this.JITCompile = void 0 !== i ? i : !0, e = 0, t = this.hierarchy.length; t > e; e++) {
            var i = this.data.hierarchy[e].sids,
                r = this.hierarchy[e];
            if (this.data.hierarchy[e].keys.length && i) {
                for (var n = 0; n < i.length; n++) {
                    var o = i[n],
                        a = this.getNextKeyWith(o, e, 0);
                    a && a.apply(o)
                }
                r.matrixAutoUpdate = !1, this.data.hierarchy[e].node.updateMatrix(), r.matrixWorldNeedsUpdate = !0
            }
        }
    }, THREE.KeyFrameAnimation.prototype.play = function (e, t) {
        if (!this.isPlaying) {
            this.isPlaying = !0, this.loop = void 0 !== e ? e : !0, this.currentTime = void 0 !== t ? t : 0, this.startTimeMs = t, this.startTime = 1e7, this.endTime = -this.startTime;
            var i, r, n, o = this.hierarchy.length;
            for (i = 0; o > i; i++) r = this.hierarchy[i], n = this.data.hierarchy[i], r.useQuaternion = !0, void 0 === n.animationCache && (n.animationCache = {}, n.animationCache.prevKey = null, n.animationCache.nextKey = null, n.animationCache.originalMatrix = r instanceof THREE.Bone ? r.skinMatrix : r.matrix), r = this.data.hierarchy[i].keys, r.length && (n.animationCache.prevKey = r[0], n.animationCache.nextKey = r[1], this.startTime = Math.min(r[0].time, this.startTime), this.endTime = Math.max(r[r.length - 1].time, this.endTime));
            this.update(0)
        }
        this.isPaused = !1, THREE.AnimationHandler.addToUpdate(this)
    }, THREE.KeyFrameAnimation.prototype.pause = function () {
        this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this), this.isPaused = !this.isPaused
    }, THREE.KeyFrameAnimation.prototype.stop = function () {
        this.isPaused = this.isPlaying = !1, THREE.AnimationHandler.removeFromUpdate(this);
        for (var e = 0; e < this.data.hierarchy.length; e++) {
            var t = this.hierarchy[e],
                i = this.data.hierarchy[e];
            if (void 0 !== i.animationCache) {
                var r = i.animationCache.originalMatrix;
                t instanceof THREE.Bone ? (r.copy(t.skinMatrix), t.skinMatrix = r) : (r.copy(t.matrix), t.matrix = r), delete i.animationCache
            }
        }
    }, THREE.KeyFrameAnimation.prototype.update = function (e) {
        if (this.isPlaying) {
            var t, i, r, n, o, a, s, l = this.data.JIT.hierarchy;
            if (a = this.currentTime += e * this.timeScale, o = this.currentTime %= this.data.length, o < this.startTimeMs && (o = this.currentTime = this.startTimeMs + o), n = parseInt(Math.min(o * this.data.fps, this.data.length * this.data.fps), 10), (s = a > o) && !this.loop) {
                for (var e = 0, h = this.hierarchy.length; h > e; e++) {
                    var c = this.data.hierarchy[e].keys,
                        l = this.data.hierarchy[e].sids;
                    if (r = c.length - 1, n = this.hierarchy[e], c.length) {
                        for (c = 0; c < l.length; c++) o = l[c], (a = this.getPrevKeyWith(o, e, r)) && a.apply(o);
                        this.data.hierarchy[e].node.updateMatrix(), n.matrixWorldNeedsUpdate = !0
                    }
                }
                this.stop()
            } else if (!(o < this.startTime)) {
                for (e = 0, h = this.hierarchy.length; h > e; e++) {
                    r = this.hierarchy[e], t = this.data.hierarchy[e];
                    var c = t.keys,
                        u = t.animationCache;
                    if (this.JITCompile && void 0 !== l[e][n]) r instanceof THREE.Bone ? (r.skinMatrix = l[e][n], r.matrixWorldNeedsUpdate = !1) : (r.matrix = l[e][n], r.matrixWorldNeedsUpdate = !0);
                    else if (c.length) {
                        if (this.JITCompile && u && (r instanceof THREE.Bone ? r.skinMatrix = u.originalMatrix : r.matrix = u.originalMatrix), t = u.prevKey, i = u.nextKey, t && i) {
                            if (i.time <= a) {
                                if (s && this.loop)
                                    for (t = c[0], i = c[1]; i.time < o;) t = i, i = c[t.index + 1];
                                else if (!s)
                                    for (var f = c.length - 1; i.time < o && i.index !== f;) t = i, i = c[t.index + 1];
                                u.prevKey = t, u.nextKey = i
                            }
                            i.time >= o ? t.interpolate(i, o) : t.interpolate(i, i.time)
                        }
                        this.data.hierarchy[e].node.updateMatrix(), r.matrixWorldNeedsUpdate = !0
                    }
                }
                if (this.JITCompile && void 0 === l[0][n])
                    for (this.hierarchy[0].updateMatrixWorld(!0), e = 0; e < this.hierarchy.length; e++) l[e][n] = this.hierarchy[e] instanceof THREE.Bone ? this.hierarchy[e].skinMatrix.clone() : this.hierarchy[e].matrix.clone()
            }
        }
    }, THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (e, t, i) {
        for (t = this.data.hierarchy[t].keys, i %= t.length; i < t.length; i++)
            if (t[i].hasTarget(e)) return t[i];
        return t[0]
    }, THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (e, t, i) {
        for (t = this.data.hierarchy[t].keys, i = i >= 0 ? i : i + t.length; i >= 0; i--)
            if (t[i].hasTarget(e)) return t[i];
        return t[t.length - 1]
    }, THREE.CubeCamera = function (e, t, i) {
        THREE.Object3D.call(this);
        var r = new THREE.PerspectiveCamera(90, 1, e, t);
        r.up.set(0, -1, 0), r.lookAt(new THREE.Vector3(1, 0, 0)), this.add(r);
        var n = new THREE.PerspectiveCamera(90, 1, e, t);
        n.up.set(0, -1, 0), n.lookAt(new THREE.Vector3(-1, 0, 0)), this.add(n);
        var o = new THREE.PerspectiveCamera(90, 1, e, t);
        o.up.set(0, 0, 1), o.lookAt(new THREE.Vector3(0, 1, 0)), this.add(o);
        var a = new THREE.PerspectiveCamera(90, 1, e, t);
        a.up.set(0, 0, -1), a.lookAt(new THREE.Vector3(0, -1, 0)), this.add(a);
        var s = new THREE.PerspectiveCamera(90, 1, e, t);
        s.up.set(0, -1, 0), s.lookAt(new THREE.Vector3(0, 0, 1)), this.add(s);
        var l = new THREE.PerspectiveCamera(90, 1, e, t);
        l.up.set(0, -1, 0), l.lookAt(new THREE.Vector3(0, 0, -1)), this.add(l), this.renderTarget = new THREE.WebGLRenderTargetCube(i, i, {
            format: THREE.RGBFormat,
            magFilter: THREE.LinearFilter,
            minFilter: THREE.LinearFilter
        }), this.updateCubeMap = function (e, t) {
            var i = this.renderTarget,
                h = i.generateMipmaps;
            i.generateMipmaps = !1, i.activeCubeFace = 0, e.render(t, r, i), i.activeCubeFace = 1, e.render(t, n, i), i.activeCubeFace = 2, e.render(t, o, i), i.activeCubeFace = 3, e.render(t, a, i), i.activeCubeFace = 4, e.render(t, s, i), i.generateMipmaps = h, i.activeCubeFace = 5, e.render(t, l, i)
        }
    }, THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype), THREE.CombinedCamera = function (e, t, i, r, n, o, a) {
        THREE.Camera.call(this), this.fov = i, this.left = -e / 2, this.right = e / 2, this.top = t / 2, this.bottom = -t / 2, this.cameraO = new THREE.OrthographicCamera(e / -2, e / 2, t / 2, t / -2, o, a), this.cameraP = new THREE.PerspectiveCamera(i, e / t, r, n), this.zoom = 1, this.toPerspective()
    }, THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype), THREE.CombinedCamera.prototype.toPerspective = function () {
        this.near = this.cameraP.near, this.far = this.cameraP.far, this.cameraP.fov = this.fov / this.zoom, this.cameraP.updateProjectionMatrix(), this.projectionMatrix = this.cameraP.projectionMatrix, this.inPerspectiveMode = !0, this.inOrthographicMode = !1
    }, THREE.CombinedCamera.prototype.toOrthographic = function () {
        var e = this.cameraP.aspect,
            t = (this.cameraP.near + this.cameraP.far) / 2,
            t = Math.tan(this.fov / 2) * t,
            e = 2 * t * e / 2,
            t = t / this.zoom,
            e = e / this.zoom;
        this.cameraO.left = -e, this.cameraO.right = e, this.cameraO.top = t, this.cameraO.bottom = -t, this.cameraO.updateProjectionMatrix(), this.near = this.cameraO.near, this.far = this.cameraO.far, this.projectionMatrix = this.cameraO.projectionMatrix, this.inPerspectiveMode = !1, this.inOrthographicMode = !0
    }, THREE.CombinedCamera.prototype.setSize = function (e, t) {
        this.cameraP.aspect = e / t, this.left = -e / 2, this.right = e / 2, this.top = t / 2, this.bottom = -t / 2
    }, THREE.CombinedCamera.prototype.setFov = function (e) {
        this.fov = e, this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
    }, THREE.CombinedCamera.prototype.updateProjectionMatrix = function () {
        this.inPerspectiveMode ? this.toPerspective() : (this.toPerspective(), this.toOrthographic())
    }, THREE.CombinedCamera.prototype.setLens = function (e, t) {
        void 0 === t && (t = 24);
        var i = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e)));
        return this.setFov(i), i
    }, THREE.CombinedCamera.prototype.setZoom = function (e) {
        this.zoom = e, this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
    }, THREE.CombinedCamera.prototype.toFrontView = function () {
        this.rotation.x = 0, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
    }, THREE.CombinedCamera.prototype.toBackView = function () {
        this.rotation.x = 0, this.rotation.y = Math.PI, this.rotation.z = 0, this.rotationAutoUpdate = !1
    }, THREE.CombinedCamera.prototype.toLeftView = function () {
        this.rotation.x = 0, this.rotation.y = -Math.PI / 2, this.rotation.z = 0, this.rotationAutoUpdate = !1
    }, THREE.CombinedCamera.prototype.toRightView = function () {
        this.rotation.x = 0, this.rotation.y = Math.PI / 2, this.rotation.z = 0, this.rotationAutoUpdate = !1
    }, THREE.CombinedCamera.prototype.toTopView = function () {
        this.rotation.x = -Math.PI / 2, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
    }, THREE.CombinedCamera.prototype.toBottomView = function () {
        this.rotation.x = Math.PI / 2, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
    }, THREE.AsteriskGeometry = function (e, t) {
        THREE.Geometry.call(this);
        for (var i = .707 * e, r = .707 * t, i = [[e, 0, 0], [t, 0, 0], [-e, 0, 0], [-t, 0, 0], [0, e, 0], [0, t, 0], [0, -e, 0], [0, -t, 0], [0, 0, e], [0, 0, t], [0, 0, -e], [0, 0, -t], [i, i, 0], [r, r, 0], [-i, -i, 0], [-r, -r, 0], [i, -i, 0], [r, -r, 0], [-i, i, 0], [-r, r, 0], [i, 0, i], [r, 0, r], [-i, 0, -i], [-r, 0, -r], [i, 0, -i], [r, 0, -r], [-i, 0, i], [-r, 0, r], [0, i, i], [0, r, r], [0, -i, -i], [0, -r, -r], [0, i, -i], [0, r, -r], [0, -i, i], [0, -r, r]], r = 0, n = i.length; n > r; r++) this.vertices.push(new THREE.Vector3(i[r][0], i[r][1], i[r][2]))
    }, THREE.AsteriskGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CircleGeometry = function (e, t, i, r) {
        THREE.Geometry.call(this);
        var n, e = e || 50,
            i = void 0 !== i ? i : 0,
            r = void 0 !== r ? r : 2 * Math.PI,
            t = void 0 !== t ? Math.max(3, t) : 8,
            o = [];
        n = new THREE.Vector3;
        var a = new THREE.Vector2(.5, .5);
        for (this.vertices.push(n), o.push(a), n = 0; t >= n; n++) {
            var s = new THREE.Vector3;
            s.x = e * Math.cos(i + n / t * r), s.y = e * Math.sin(i + n / t * r), this.vertices.push(s), o.push(new THREE.Vector2((s.x / e + 1) / 2, -(s.y / e + 1) / 2 + 1))
        }
        for (i = new THREE.Vector3(0, 0, -1), n = 1; t >= n; n++) this.faces.push(new THREE.Face3(n, n + 1, 0, [i, i, i])), this.faceVertexUvs[0].push([o[n], o[n + 1], a]);
        this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
    }, THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CubeGeometry = function (e, t, i, r, n, o) {
        function a(e, t, i, r, n, o, a, l) {
            var h, c = s.widthSegments,
                u = s.heightSegments,
                f = n / 2,
                p = o / 2,
                d = s.vertices.length;
            "x" === e && "y" === t || "y" === e && "x" === t ? h = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (h = "y", u = s.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (h = "x", c = s.depthSegments);
            var m = c + 1,
                E = u + 1,
                g = n / c,
                v = o / u,
                T = new THREE.Vector3;
            for (T[h] = a > 0 ? 1 : -1, n = 0; E > n; n++)
                for (o = 0; m > o; o++) {
                    var y = new THREE.Vector3;
                    y[e] = (o * g - f) * i, y[t] = (n * v - p) * r, y[h] = a, s.vertices.push(y)
                }
            for (n = 0; u > n; n++)
                for (o = 0; c > o; o++) e = new THREE.Face4(o + m * n + d, o + m * (n + 1) + d, o + 1 + m * (n + 1) + d, o + 1 + m * n + d), e.normal.copy(T), e.vertexNormals.push(T.clone(), T.clone(), T.clone(), T.clone()), e.materialIndex = l, s.faces.push(e), s.faceVertexUvs[0].push([new THREE.Vector2(o / c, 1 - n / u), new THREE.Vector2(o / c, 1 - (n + 1) / u), new THREE.Vector2((o + 1) / c, 1 - (n + 1) / u), new THREE.Vector2((o + 1) / c, 1 - n / u)])
        }
        THREE.Geometry.call(this);
        var s = this;
        this.width = e, this.height = t, this.depth = i, this.widthSegments = r || 1, this.heightSegments = n || 1, this.depthSegments = o || 1, e = this.width / 2, t = this.height / 2, i = this.depth / 2, a("z", "y", -1, -1, this.depth, this.height, e, 0), a("z", "y", 1, -1, this.depth, this.height, -e, 1), a("x", "z", 1, 1, this.width, this.depth, t, 2), a("x", "z", 1, -1, this.width, this.depth, -t, 3), a("x", "y", 1, -1, this.width, this.height, i, 4), a("x", "y", -1, -1, this.width, this.height, -i, 5), this.computeCentroids(), this.mergeVertices()
    }, THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CylinderGeometry = function (e, t, i, r, n, o) {
        THREE.Geometry.call(this);
        var a, s, e = void 0 !== e ? e : 20,
            t = void 0 !== t ? t : 20,
            i = void 0 !== i ? i : 100,
            l = i / 2,
            r = r || 8,
            n = n || 1,
            h = [],
            c = [];
        for (s = 0; n >= s; s++) {
            var u = [],
                f = [],
                p = s / n,
                d = p * (t - e) + e;
            for (a = 0; r >= a; a++) {
                var m = a / r,
                    E = new THREE.Vector3;
                E.x = d * Math.sin(2 * m * Math.PI), E.y = -p * i + l, E.z = d * Math.cos(2 * m * Math.PI), this.vertices.push(E), u.push(this.vertices.length - 1), f.push(new THREE.Vector2(m, 1 - p))
            }
            h.push(u), c.push(f)
        }
        for (i = (t - e) / i, a = 0; r > a; a++)
            for (0 !== e ? (u = this.vertices[h[0][a]].clone(), f = this.vertices[h[0][a + 1]].clone()) : (u = this.vertices[h[1][a]].clone(), f = this.vertices[h[1][a + 1]].clone()), u.setY(Math.sqrt(u.x * u.x + u.z * u.z) * i).normalize(), f.setY(Math.sqrt(f.x * f.x + f.z * f.z) * i).normalize(), s = 0; n > s; s++) {
                var p = h[s][a],
                    d = h[s + 1][a],
                    m = h[s + 1][a + 1],
                    E = h[s][a + 1],
                    g = u.clone(),
                    v = u.clone(),
                    T = f.clone(),
                    y = f.clone(),
                    _ = c[s][a].clone(),
                    R = c[s + 1][a].clone(),
                    x = c[s + 1][a + 1].clone(),
                    b = c[s][a + 1].clone();
                this.faces.push(new THREE.Face4(p, d, m, E, [g, v, T, y])), this.faceVertexUvs[0].push([_, R, x, b])
            }
        if (!o && e > 0)
            for (this.vertices.push(new THREE.Vector3(0, l, 0)), a = 0; r > a; a++) p = h[0][a], d = h[0][a + 1], m = this.vertices.length - 1, g = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(0, 1, 0), T = new THREE.Vector3(0, 1, 0), _ = c[0][a].clone(), R = c[0][a + 1].clone(), x = new THREE.Vector2(R.u, 0), this.faces.push(new THREE.Face3(p, d, m, [g, v, T])), this.faceVertexUvs[0].push([_, R, x]);
        if (!o && t > 0)
            for (this.vertices.push(new THREE.Vector3(0, -l, 0)), a = 0; r > a; a++) p = h[s][a + 1], d = h[s][a], m = this.vertices.length - 1, g = new THREE.Vector3(0, -1, 0), v = new THREE.Vector3(0, -1, 0), T = new THREE.Vector3(0, -1, 0), _ = c[s][a + 1].clone(), R = c[s][a].clone(), x = new THREE.Vector2(R.u, 1), this.faces.push(new THREE.Face3(p, d, m, [g, v, T])), this.faceVertexUvs[0].push([_, R, x]);
        this.computeCentroids(), this.computeFaceNormals()
    }, THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ExtrudeGeometry = function (e, t) {
        "undefined" != typeof e && (THREE.Geometry.call(this), e = e instanceof Array ? e : [e], this.shapebb = e[e.length - 1].getBoundingBox(), this.addShapeList(e, t), this.computeCentroids(), this.computeFaceNormals())
    }, THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ExtrudeGeometry.prototype.addShapeList = function (e, t) {
        for (var i = e.length, r = 0; i > r; r++) this.addShape(e[r], t)
    }, THREE.ExtrudeGeometry.prototype.addShape = function (e, t) {
        function i(e, t, i) {
            return t.clone().multiplyScalar(i).addSelf(e)
        }

        function r(e, t, i) {
            var r = THREE.ExtrudeGeometry.__v1,
                n = THREE.ExtrudeGeometry.__v2,
                o = THREE.ExtrudeGeometry.__v3,
                a = THREE.ExtrudeGeometry.__v4,
                s = THREE.ExtrudeGeometry.__v5,
                l = THREE.ExtrudeGeometry.__v6;
            return r.set(e.x - t.x, e.y - t.y), n.set(e.x - i.x, e.y - i.y), r = r.normalize(), n = n.normalize(), o.set(-r.y, r.x), a.set(n.y, -n.x), s.copy(e).addSelf(o), l.copy(e).addSelf(a), s.equals(l) ? a.clone() : (s.copy(t).addSelf(o), l.copy(i).addSelf(a), o = r.dot(a), a = l.subSelf(s).dot(a),
                a /= o, 0 > a ? (t = Math.atan2(t.y - e.y, t.x - e.x), e = Math.atan2(i.y - e.y, i.x - e.x), t > e && (e += 2 * Math.PI), i = (t + e) / 2, e = -Math.cos(i), i = -Math.sin(i), new THREE.Vector2(e, i)) : r.multiplyScalar(a).addSelf(s).subSelf(e).clone())
        }

        function n(i, r) {
            var n, o;
            for (O = i.length; 0 <= --O;) {
                n = O, o = O - 1, 0 > o && (o = i.length - 1);
                for (var a = 0, s = v + 2 * m, a = 0; s > a; a++) {
                    var l = z * a,
                        h = z * (a + 1),
                        c = r + n + l,
                        l = r + o + l,
                        u = r + o + h,
                        h = r + n + h,
                        f = i,
                        p = a,
                        d = s,
                        E = n,
                        g = o,
                        c = c + M,
                        l = l + M,
                        u = u + M,
                        h = h + M;
                    S.faces.push(new THREE.Face4(c, l, u, h, null, null, R)), c = x.generateSideWallUV(S, e, f, t, c, l, u, h, p, d, E, g), S.faceVertexUvs[0].push(c)
                }
            }
        }

        function o(e, t, i) {
            S.vertices.push(new THREE.Vector3(e, t, i))
        }

        function a(i, r, n, o) {
            i += M, r += M, n += M, S.faces.push(new THREE.Face3(i, r, n, null, null, _)), i = o ? x.generateBottomUV(S, e, t, i, r, n) : x.generateTopUV(S, e, t, i, r, n), S.faceVertexUvs[0].push(i)
        }
        var s, l, h, c, u, f = void 0 !== t.amount ? t.amount : 100,
            p = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
            d = void 0 !== t.bevelSize ? t.bevelSize : p - 2,
            m = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
            E = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
            g = void 0 !== t.curveSegments ? t.curveSegments : 12,
            v = void 0 !== t.steps ? t.steps : 1,
            T = t.extrudePath,
            y = !1,
            _ = t.material,
            R = t.extrudeMaterial,
            x = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
        T && (s = T.getSpacedPoints(v), y = !0, E = !1, l = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(T, v, !1), h = new THREE.Vector3, c = new THREE.Vector3, u = new THREE.Vector3), E || (d = p = m = 0);
        var b, w, H, S = this,
            M = this.vertices.length,
            g = e.extractPoints(g),
            C = g.shape,
            g = g.holes;
        if (T = !THREE.Shape.Utils.isClockWise(C)) {
            for (C = C.reverse(), w = 0, H = g.length; H > w; w++) b = g[w], THREE.Shape.Utils.isClockWise(b) && (g[w] = b.reverse());
            T = !1
        }
        var A = THREE.Shape.Utils.triangulateShape(C, g),
            T = C;
        for (w = 0, H = g.length; H > w; w++) b = g[w], C = C.concat(b);
        var P, L, F, D, z = C.length,
            U = A.length,
            N = [],
            O = 0,
            B = T.length;
        for (P = B - 1, L = O + 1; B > O; O++, P++, L++) P === B && (P = 0), L === B && (L = 0), N[O] = r(T[O], T[P], T[L]);
        var V, k = [],
            I = N.concat();
        for (w = 0, H = g.length; H > w; w++) {
            for (b = g[w], V = [], O = 0, B = b.length, P = B - 1, L = O + 1; B > O; O++, P++, L++) P === B && (P = 0), L === B && (L = 0), V[O] = r(b[O], b[P], b[L]);
            k.push(V), I = I.concat(V)
        }
        for (P = 0; m > P; P++) {
            for (b = P / m, F = p * (1 - b), L = d * Math.sin(b * Math.PI / 2), O = 0, B = T.length; B > O; O++) D = i(T[O], N[O], L), o(D.x, D.y, -F);
            for (w = 0, H = g.length; H > w; w++)
                for (b = g[w], V = k[w], O = 0, B = b.length; B > O; O++) D = i(b[O], V[O], L), o(D.x, D.y, -F)
        }
        for (L = d, O = 0; z > O; O++) D = E ? i(C[O], I[O], L) : C[O], y ? (c.copy(l.normals[0]).multiplyScalar(D.x), h.copy(l.binormals[0]).multiplyScalar(D.y), u.copy(s[0]).addSelf(c).addSelf(h), o(u.x, u.y, u.z)) : o(D.x, D.y, 0);
        for (b = 1; v >= b; b++)
            for (O = 0; z > O; O++) D = E ? i(C[O], I[O], L) : C[O], y ? (c.copy(l.normals[b]).multiplyScalar(D.x), h.copy(l.binormals[b]).multiplyScalar(D.y), u.copy(s[b]).addSelf(c).addSelf(h), o(u.x, u.y, u.z)) : o(D.x, D.y, f / v * b);
        for (P = m - 1; P >= 0; P--) {
            for (b = P / m, F = p * (1 - b), L = d * Math.sin(b * Math.PI / 2), O = 0, B = T.length; B > O; O++) D = i(T[O], N[O], L), o(D.x, D.y, f + F);
            for (w = 0, H = g.length; H > w; w++)
                for (b = g[w], V = k[w], O = 0, B = b.length; B > O; O++) D = i(b[O], V[O], L), y ? o(D.x, D.y + s[v - 1].y, s[v - 1].x + F) : o(D.x, D.y, f + F)
        }
        if (E) {
            for (p = 0 * z, O = 0; U > O; O++) f = A[O], a(f[2] + p, f[1] + p, f[0] + p, !0);
            for (p = z * (v + 2 * m), O = 0; U > O; O++) f = A[O], a(f[0] + p, f[1] + p, f[2] + p, !1)
        } else {
            for (O = 0; U > O; O++) f = A[O], a(f[2], f[1], f[0], !0);
            for (O = 0; U > O; O++) f = A[O], a(f[0] + z * v, f[1] + z * v, f[2] + z * v, !1)
        }
        for (f = 0, n(T, f), f += T.length, w = 0, H = g.length; H > w; w++) b = g[w], n(b, f), f += b.length
    }, THREE.ExtrudeGeometry.WorldUVGenerator = {
        generateTopUV: function (e, t, i, r, n, o) {
            return t = e.vertices[n].x, n = e.vertices[n].y, i = e.vertices[o].x, o = e.vertices[o].y, [new THREE.Vector2(e.vertices[r].x, e.vertices[r].y), new THREE.Vector2(t, n), new THREE.Vector2(i, o)]
        },
        generateBottomUV: function (e, t, i, r, n, o) {
            return this.generateTopUV(e, t, i, r, n, o)
        },
        generateSideWallUV: function (e, t, i, r, n, o, a, s) {
            var t = e.vertices[n].x,
                i = e.vertices[n].y,
                n = e.vertices[n].z,
                r = e.vertices[o].x,
                l = e.vertices[o].y,
                o = e.vertices[o].z,
                h = e.vertices[a].x,
                c = e.vertices[a].y,
                a = e.vertices[a].z,
                u = e.vertices[s].x,
                f = e.vertices[s].y,
                e = e.vertices[s].z;
            return .01 > Math.abs(i - l) ? [new THREE.Vector2(t, 1 - n), new THREE.Vector2(r, 1 - o), new THREE.Vector2(h, 1 - a), new THREE.Vector2(u, 1 - e)] : [new THREE.Vector2(i, 1 - n), new THREE.Vector2(l, 1 - o), new THREE.Vector2(c, 1 - a), new THREE.Vector2(f, 1 - e)]
        }
    }, THREE.ExtrudeGeometry.__v1 = new THREE.Vector2, THREE.ExtrudeGeometry.__v2 = new THREE.Vector2, THREE.ExtrudeGeometry.__v3 = new THREE.Vector2, THREE.ExtrudeGeometry.__v4 = new THREE.Vector2, THREE.ExtrudeGeometry.__v5 = new THREE.Vector2, THREE.ExtrudeGeometry.__v6 = new THREE.Vector2, THREE.ShapeGeometry = function (e, t) {
        THREE.Geometry.call(this), !1 == e instanceof Array && (e = [e]), this.shapebb = e[e.length - 1].getBoundingBox(), this.addShapeList(e, t), this.computeCentroids(), this.computeFaceNormals()
    }, THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ShapeGeometry.prototype.addShapeList = function (e, t) {
        for (var i = 0, r = e.length; r > i; i++) this.addShape(e[i], t);
        return this
    }, THREE.ShapeGeometry.prototype.addShape = function (e, t) {
        void 0 === t && (t = {});
        var i, r, n, o = t.material,
            a = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
            s = this.vertices.length;
        i = e.extractPoints(void 0 !== t.curveSegments ? t.curveSegments : 12);
        var l = i.shape,
            h = i.holes;
        if (!THREE.Shape.Utils.isClockWise(l))
            for (l = l.reverse(), i = 0, r = h.length; r > i; i++) n = h[i], THREE.Shape.Utils.isClockWise(n) && (h[i] = n.reverse());
        var c = THREE.Shape.Utils.triangulateShape(l, h);
        for (i = 0, r = h.length; r > i; i++) n = h[i], l = l.concat(n);
        for (h = l.length, r = c.length, i = 0; h > i; i++) n = l[i], this.vertices.push(new THREE.Vector3(n.x, n.y, 0));
        for (i = 0; r > i; i++) h = c[i], l = h[0] + s, n = h[1] + s, h = h[2] + s, this.faces.push(new THREE.Face3(l, n, h, null, null, o)), this.faceVertexUvs[0].push(a.generateBottomUV(this, e, t, l, n, h))
    }, THREE.LatheGeometry = function (e, t, i) {
        THREE.Geometry.call(this);
        for (var t = t || 12, i = i || 2 * Math.PI, r = [], n = (new THREE.Matrix4).makeRotationZ(i / t), o = 0; o < e.length; o++) r[o] = e[o].clone(), this.vertices.push(r[o]);
        for (var a = t + 1, i = 0; a > i; i++)
            for (o = 0; o < r.length; o++) r[o] = n.multiplyVector3(r[o].clone()), this.vertices.push(r[o]);
        for (i = 0; t > i; i++)
            for (r = 0, n = e.length; n - 1 > r; r++) this.faces.push(new THREE.Face4(i * n + r, (i + 1) % a * n + r, (i + 1) % a * n + (r + 1) % n, i * n + (r + 1) % n)), this.faceVertexUvs[0].push([new THREE.Vector2(1 - i / t, r / n), new THREE.Vector2(1 - (i + 1) / t, r / n), new THREE.Vector2(1 - (i + 1) / t, (r + 1) / n), new THREE.Vector2(1 - i / t, (r + 1) / n)]);
        this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PlaneGeometry = function (e, t, i, r) {
        THREE.Geometry.call(this), this.width = e, this.height = t, this.widthSegments = i || 1, this.heightSegments = r || 1;
        for (var i = e / 2, n = t / 2, r = this.widthSegments, o = this.heightSegments, a = r + 1, s = o + 1, l = this.width / r, h = this.height / o, c = new THREE.Vector3(0, 0, 1), e = 0; s > e; e++)
            for (t = 0; a > t; t++) this.vertices.push(new THREE.Vector3(t * l - i, -(e * h - n), 0));
        for (e = 0; o > e; e++)
            for (t = 0; r > t; t++) i = new THREE.Face4(t + a * e, t + a * (e + 1), t + 1 + a * (e + 1), t + 1 + a * e), i.normal.copy(c), i.vertexNormals.push(c.clone(), c.clone(), c.clone(), c.clone()), this.faces.push(i), this.faceVertexUvs[0].push([new THREE.Vector2(t / r, 1 - e / o), new THREE.Vector2(t / r, 1 - (e + 1) / o), new THREE.Vector2((t + 1) / r, 1 - (e + 1) / o), new THREE.Vector2((t + 1) / r, 1 - e / o)]);
        this.computeCentroids()
    }, THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.SphereGeometry = function (e, t, i, r, n, o, a) {
        THREE.Geometry.call(this), this.radius = e || 50, this.widthSegments = Math.max(3, Math.floor(t) || 8), this.heightSegments = Math.max(2, Math.floor(i) || 6);
        for (var r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI, s = [], l = [], i = 0; i <= this.heightSegments; i++) {
            for (var h = [], c = [], t = 0; t <= this.widthSegments; t++) {
                var u = t / this.widthSegments,
                    f = i / this.heightSegments,
                    p = new THREE.Vector3;
                p.x = -this.radius * Math.cos(r + u * n) * Math.sin(o + f * a), p.y = this.radius * Math.cos(o + f * a), p.z = this.radius * Math.sin(r + u * n) * Math.sin(o + f * a), this.vertices.push(p), h.push(this.vertices.length - 1), c.push(new THREE.Vector2(u, 1 - f))
            }
            s.push(h), l.push(c)
        }
        for (i = 0; i < this.heightSegments; i++)
            for (t = 0; t < this.widthSegments; t++) {
                var r = s[i][t + 1],
                    n = s[i][t],
                    o = s[i + 1][t],
                    a = s[i + 1][t + 1],
                    h = this.vertices[r].clone().normalize(),
                    c = this.vertices[n].clone().normalize(),
                    u = this.vertices[o].clone().normalize(),
                    f = this.vertices[a].clone().normalize(),
                    p = l[i][t + 1].clone(),
                    d = l[i][t].clone(),
                    m = l[i + 1][t].clone(),
                    E = l[i + 1][t + 1].clone();
                Math.abs(this.vertices[r].y) === this.radius ? (this.faces.push(new THREE.Face3(r, o, a, [h, u, f])), this.faceVertexUvs[0].push([p, m, E])) : Math.abs(this.vertices[o].y) === this.radius ? (this.faces.push(new THREE.Face3(r, n, o, [h, c, u])), this.faceVertexUvs[0].push([p, d, m])) : (this.faces.push(new THREE.Face4(r, n, o, a, [h, c, u, f])), this.faceVertexUvs[0].push([p, d, m, E]))
            }
        this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
    }, THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TextGeometry = function (e, t) {
        var i = THREE.FontUtils.generateShapes(e, t);
        t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), THREE.ExtrudeGeometry.call(this, i, t)
    }, THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype), THREE.TorusGeometry = function (e, t, i, r, n) {
        for (THREE.Geometry.call(this), this.radius = e || 100, this.tube = t || 40, this.radialSegments = i || 8, this.tubularSegments = r || 6, this.arc = n || 2 * Math.PI, n = new THREE.Vector3, e = [], t = [], i = 0; i <= this.radialSegments; i++)
            for (r = 0; r <= this.tubularSegments; r++) {
                var o = r / this.tubularSegments * this.arc,
                    a = 2 * i / this.radialSegments * Math.PI;
                n.x = this.radius * Math.cos(o), n.y = this.radius * Math.sin(o);
                var s = new THREE.Vector3;
                s.x = (this.radius + this.tube * Math.cos(a)) * Math.cos(o), s.y = (this.radius + this.tube * Math.cos(a)) * Math.sin(o), s.z = this.tube * Math.sin(a), this.vertices.push(s), e.push(new THREE.Vector2(r / this.tubularSegments, i / this.radialSegments)), t.push(s.clone().subSelf(n).normalize())
            }
        for (i = 1; i <= this.radialSegments; i++)
            for (r = 1; r <= this.tubularSegments; r++) {
                var n = (this.tubularSegments + 1) * i + r - 1,
                    o = (this.tubularSegments + 1) * (i - 1) + r - 1,
                    a = (this.tubularSegments + 1) * (i - 1) + r,
                    s = (this.tubularSegments + 1) * i + r,
                    l = new THREE.Face4(n, o, a, s, [t[n], t[o], t[a], t[s]]);
                l.normal.addSelf(t[n]), l.normal.addSelf(t[o]), l.normal.addSelf(t[a]), l.normal.addSelf(t[s]), l.normal.normalize(), this.faces.push(l), this.faceVertexUvs[0].push([e[n].clone(), e[o].clone(), e[a].clone(), e[s].clone()])
            }
        this.computeCentroids()
    }, THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusKnotGeometry = function (e, t, i, r, n, o, a) {
        function s(e, t, i, r, n, o) {
            var a = Math.cos(e);
            return Math.cos(t), t = Math.sin(e), e *= i / r, i = Math.cos(e), a *= .5 * n * (2 + i), t = .5 * n * (2 + i) * t, n = .5 * o * n * Math.sin(e), new THREE.Vector3(a, t, n)
        }
        for (THREE.Geometry.call(this), this.radius = e || 100, this.tube = t || 40, this.radialSegments = i || 64, this.tubularSegments = r || 8, this.p = n || 2, this.q = o || 3, this.heightScale = a || 1, this.grid = Array(this.radialSegments), i = new THREE.Vector3, r = new THREE.Vector3, n = new THREE.Vector3, e = 0; e < this.radialSegments; ++e)
            for (this.grid[e] = Array(this.tubularSegments), t = 0; t < this.tubularSegments; ++t) {
                var l = 2 * (e / this.radialSegments) * this.p * Math.PI,
                    a = 2 * (t / this.tubularSegments) * Math.PI,
                    o = s(l, a, this.q, this.p, this.radius, this.heightScale),
                    l = s(l + .01, a, this.q, this.p, this.radius, this.heightScale);
                i.sub(l, o), r.add(l, o), n.cross(i, r), r.cross(n, i), n.normalize(), r.normalize(), l = -this.tube * Math.cos(a), a = this.tube * Math.sin(a), o.x += l * r.x + a * n.x, o.y += l * r.y + a * n.y, o.z += l * r.z + a * n.z, this.grid[e][t] = this.vertices.push(new THREE.Vector3(o.x, o.y, o.z)) - 1
            }
        for (e = 0; e < this.radialSegments; ++e)
            for (t = 0; t < this.tubularSegments; ++t) {
                var n = (e + 1) % this.radialSegments,
                    o = (t + 1) % this.tubularSegments,
                    i = this.grid[e][t],
                    r = this.grid[n][t],
                    n = this.grid[n][o],
                    o = this.grid[e][o],
                    a = new THREE.Vector2(e / this.radialSegments, t / this.tubularSegments),
                    l = new THREE.Vector2((e + 1) / this.radialSegments, t / this.tubularSegments),
                    h = new THREE.Vector2((e + 1) / this.radialSegments, (t + 1) / this.tubularSegments),
                    c = new THREE.Vector2(e / this.radialSegments, (t + 1) / this.tubularSegments);
                this.faces.push(new THREE.Face4(i, r, n, o)), this.faceVertexUvs[0].push([a, l, h, c])
            }
        this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TubeGeometry = function (e, t, i, r, n, o) {
        THREE.Geometry.call(this), this.path = e, this.segments = t || 64, this.radius = i || 1, this.radiusSegments = r || 8, this.closed = n || !1, o && (this.debug = new THREE.Object3D), this.grid = [];
        var a, s, l, h, c, u, f, p, n = this.segments + 1,
            o = new THREE.Vector3,
            t = new THREE.TubeGeometry.FrenetFrames(this.path, this.segments, this.closed);
        for (u = t.tangents, f = t.normals, p = t.binormals, this.tangents = u, this.normals = f, this.binormals = p, t = 0; n > t; t++)
            for (this.grid[t] = [], r = t / (n - 1), c = e.getPointAt(r), r = u[t], a = f[t], s = p[t], this.debug && (this.debug.add(new THREE.ArrowHelper(r, c, i, 255)), this.debug.add(new THREE.ArrowHelper(a, c, i, 16711680)), this.debug.add(new THREE.ArrowHelper(s, c, i, 65280))), r = 0; r < this.radiusSegments; r++) l = 2 * (r / this.radiusSegments) * Math.PI, h = -this.radius * Math.cos(l), l = this.radius * Math.sin(l), o.copy(c), o.x += h * a.x + l * s.x, o.y += h * a.y + l * s.y, o.z += h * a.z + l * s.z, this.grid[t][r] = this.vertices.push(new THREE.Vector3(o.x, o.y, o.z)) - 1;
        for (t = 0; t < this.segments; t++)
            for (r = 0; r < this.radiusSegments; r++) n = this.closed ? (t + 1) % this.segments : t + 1, o = (r + 1) % this.radiusSegments, e = this.grid[t][r], i = this.grid[n][r], n = this.grid[n][o], o = this.grid[t][o], u = new THREE.Vector2(t / this.segments, r / this.radiusSegments), f = new THREE.Vector2((t + 1) / this.segments, r / this.radiusSegments), p = new THREE.Vector2((t + 1) / this.segments, (r + 1) / this.radiusSegments), a = new THREE.Vector2(t / this.segments, (r + 1) / this.radiusSegments), this.faces.push(new THREE.Face4(e, i, n, o)), this.faceVertexUvs[0].push([u, f, p, a]);
        this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TubeGeometry.FrenetFrames = function (e, t, i) {
        new THREE.Vector3;
        var r = new THREE.Vector3;
        new THREE.Vector3;
        var n, o, a, s = [],
            l = [],
            h = [],
            c = new THREE.Vector3,
            u = new THREE.Matrix4,
            t = t + 1;
        for (this.tangents = s, this.normals = l, this.binormals = h, n = 0; t > n; n++) o = n / (t - 1), s[n] = e.getTangentAt(o), s[n].normalize();
        for (l[0] = new THREE.Vector3, h[0] = new THREE.Vector3, e = Number.MAX_VALUE, n = Math.abs(s[0].x), o = Math.abs(s[0].y), a = Math.abs(s[0].z), e >= n && (e = n, r.set(1, 0, 0)), e >= o && (e = o, r.set(0, 1, 0)), e >= a && r.set(0, 0, 1), c.cross(s[0], r).normalize(), l[0].cross(s[0], c), h[0].cross(s[0], l[0]), n = 1; t > n; n++) l[n] = l[n - 1].clone(), h[n] = h[n - 1].clone(), c.cross(s[n - 1], s[n]), 1e-4 < c.length() && (c.normalize(), r = Math.acos(s[n - 1].dot(s[n])), u.makeRotationAxis(c, r).multiplyVector3(l[n])), h[n].cross(s[n], l[n]);
        if (i)
            for (r = Math.acos(l[0].dot(l[t - 1])), r /= t - 1, 0 < s[0].dot(c.cross(l[0], l[t - 1])) && (r = -r), n = 1; t > n; n++) u.makeRotationAxis(s[n], r * n).multiplyVector3(l[n]), h[n].cross(s[n], l[n])
    }, THREE.PolyhedronGeometry = function (e, t, i, r) {
        function n(e) {
            var t = e.normalize().clone();
            t.index = l.vertices.push(t) - 1;
            var i = Math.atan2(e.z, -e.x) / 2 / Math.PI + .5,
                e = Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5;
            return t.uv = new THREE.Vector2(i, 1 - e), t
        }

        function o(e, t, i, r) {
            1 > r ? (r = new THREE.Face3(e.index, t.index, i.index, [e.clone(), t.clone(), i.clone()]), r.centroid.addSelf(e).addSelf(t).addSelf(i).divideScalar(3), r.normal = r.centroid.clone().normalize(), l.faces.push(r), r = Math.atan2(r.centroid.z, -r.centroid.x), l.faceVertexUvs[0].push([s(e.uv, e, r), s(t.uv, t, r), s(i.uv, i, r)])) : (r -= 1, o(e, a(e, t), a(e, i), r), o(a(e, t), t, a(t, i), r), o(a(e, i), a(t, i), i, r), o(a(e, t), a(t, i), a(e, i), r))
        }

        function a(e, t) {
            u[e.index] || (u[e.index] = []), u[t.index] || (u[t.index] = []);
            var i = u[e.index][t.index];
            return void 0 === i && (u[e.index][t.index] = u[t.index][e.index] = i = n((new THREE.Vector3).add(e, t).divideScalar(2))), i
        }

        function s(e, t, i) {
            return 0 > i && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new THREE.Vector2(i / 2 / Math.PI + .5, e.y)), e
        }
        THREE.Geometry.call(this);
        for (var i = i || 1, r = r || 0, l = this, h = 0, c = e.length; c > h; h++) n(new THREE.Vector3(e[h][0], e[h][1], e[h][2]));
        for (var u = [], e = this.vertices, h = 0, c = t.length; c > h; h++) o(e[t[h][0]], e[t[h][1]], e[t[h][2]], r);
        for (this.mergeVertices(), h = 0, c = this.vertices.length; c > h; h++) this.vertices[h].multiplyScalar(i);
        this.computeCentroids(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, i)
    }, THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.IcosahedronGeometry = function (e, t) {
        var i = (1 + Math.sqrt(5)) / 2;
        THREE.PolyhedronGeometry.call(this, [[-1, i, 0], [1, i, 0], [-1, -i, 0], [1, -i, 0], [0, -1, i], [0, 1, i], [0, -1, -i], [0, 1, -i], [i, 0, -1], [i, 0, 1], [-i, 0, -1], [-i, 0, 1]], [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]], e, t)
    }, THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.OctahedronGeometry = function (e, t) {
        THREE.PolyhedronGeometry.call(this, [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], [[0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2], [1, 2, 5], [1, 5, 3], [1, 3, 4], [1, 4, 2]], e, t)
    }, THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TetrahedronGeometry = function (e, t) {
        THREE.PolyhedronGeometry.call(this, [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]], [[2, 1, 0], [0, 3, 2], [1, 3, 0], [2, 3, 1]], e, t)
    }, THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ParametricGeometry = function (e, t, i, r) {
        THREE.Geometry.call(this);
        var n, o, a, s, l = this.vertices,
            h = this.faces,
            c = this.faceVertexUvs[0],
            r = void 0 === r ? !1 : r,
            u = t + 1;
        for (n = 0; i >= n; n++)
            for (s = n / i, o = 0; t >= o; o++) a = o / t, a = e(a, s), l.push(a);
        var f, p, d, m;
        for (n = 0; i > n; n++)
            for (o = 0; t > o; o++) e = n * u + o, l = n * u + o + 1, s = (n + 1) * u + o, a = (n + 1) * u + o + 1, f = new THREE.Vector2(o / t, n / i), p = new THREE.Vector2((o + 1) / t, n / i), d = new THREE.Vector2(o / t, (n + 1) / i), m = new THREE.Vector2((o + 1) / t, (n + 1) / i), r ? (h.push(new THREE.Face3(e, l, s)), h.push(new THREE.Face3(l, a, s)), c.push([f, p, d]), c.push([p, m, d])) : (h.push(new THREE.Face4(e, l, a, s)), c.push([f, p, m, d]));
        this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ConvexGeometry = function (e) {
        function t(e) {
            var t = e.length();
            return new THREE.Vector2(e.x / t, e.y / t)
        }
        THREE.Geometry.call(this);
        for (var i = [[0, 1, 2], [0, 2, 1]], r = 3; r < e.length; r++) {
            var n = r,
                o = e[n].clone(),
                a = o.length();
            o.x += 2e-6 * a * (Math.random() - .5), o.y += 2e-6 * a * (Math.random() - .5), o.z += 2e-6 * a * (Math.random() - .5);
            for (var a = [], s = 0; s < i.length;) {
                var l, h = i[s],
                    c = o,
                    u = e[h[0]];
                l = u;
                var f = e[h[1]],
                    p = e[h[2]],
                    d = new THREE.Vector3,
                    m = new THREE.Vector3;
                if (d.sub(p, f), m.sub(l, f), d.crossSelf(m), d.normalize(), l = d, u = l.dot(u), l.dot(c) >= u) {
                    for (c = 0; 3 > c; c++) {
                        for (u = [h[c], h[(c + 1) % 3]], l = !0, f = 0; f < a.length; f++)
                            if (a[f][0] === u[1] && a[f][1] === u[0]) {
                                a[f] = a[a.length - 1], a.pop(), l = !1;
                                break
                            }
                        l && a.push(u)
                    }
                    i[s] = i[i.length - 1], i.pop()
                } else s++
            }
            for (f = 0; f < a.length; f++) i.push([a[f][0], a[f][1], n])
        }
        for (n = 0, o = Array(e.length), r = 0; r < i.length; r++)
            for (a = i[r], s = 0; 3 > s; s++) void 0 === o[a[s]] && (o[a[s]] = n++, this.vertices.push(e[a[s]])), a[s] = o[a[s]];
        for (r = 0; r < i.length; r++) this.faces.push(new THREE.Face3(i[r][0], i[r][1], i[r][2]));
        for (r = 0; r < this.faces.length; r++) a = this.faces[r], this.faceVertexUvs[0].push([t(this.vertices[a.a]), t(this.vertices[a.b]), t(this.vertices[a.c])]);
        this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.ConvexGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.AxisHelper = function (e) {
        var t = new THREE.Geometry;
        t.vertices.push(new THREE.Vector3, new THREE.Vector3(e || 1, 0, 0), new THREE.Vector3, new THREE.Vector3(0, e || 1, 0), new THREE.Vector3, new THREE.Vector3(0, 0, e || 1)), t.colors.push(new THREE.Color(16711680), new THREE.Color(16755200), new THREE.Color(65280), new THREE.Color(11206400), new THREE.Color(255), new THREE.Color(43775)), e = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors
        }), THREE.Line.call(this, t, e, THREE.LinePieces)
    }, THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype), THREE.ArrowHelper = function (e, t, i, r) {
        THREE.Object3D.call(this), void 0 === r && (r = 16776960), void 0 === i && (i = 20);
        var n = new THREE.Geometry;
        n.vertices.push(new THREE.Vector3(0, 0, 0)), n.vertices.push(new THREE.Vector3(0, 1, 0)), this.line = new THREE.Line(n, new THREE.LineBasicMaterial({
            color: r
        })), this.add(this.line), n = new THREE.CylinderGeometry(0, .05, .25, 5, 1), this.cone = new THREE.Mesh(n, new THREE.MeshBasicMaterial({
            color: r
        })), this.cone.position.set(0, 1, 0), this.add(this.cone), t instanceof THREE.Vector3 && (this.position = t), this.setDirection(e), this.setLength(i)
    }, THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.ArrowHelper.prototype.setDirection = function (e) {
        var t = new THREE.Vector3(0, 1, 0).crossSelf(e),
            e = Math.acos(new THREE.Vector3(0, 1, 0).dot(e.clone().normalize()));
        this.matrix = (new THREE.Matrix4).makeRotationAxis(t.normalize(), e), this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder)
    }, THREE.ArrowHelper.prototype.setLength = function (e) {
        this.scale.set(e, e, e)
    }, THREE.ArrowHelper.prototype.setColor = function (e) {
        this.line.material.color.setHex(e), this.cone.material.color.setHex(e)
    }, THREE.CameraHelper = function (e) {
        function t(e, t, r) {
            i(e, r), i(t, r)
        }

        function i(e, t) {
            r.geometry.vertices.push(new THREE.Vector3), r.geometry.colors.push(new THREE.Color(t)), void 0 === r.pointMap[e] && (r.pointMap[e] = []), r.pointMap[e].push(r.geometry.vertices.length - 1)
        }
        THREE.Line.call(this);
        var r = this;
        this.geometry = new THREE.Geometry, this.material = new THREE.LineBasicMaterial({
            color: 16777215,
            vertexColors: THREE.FaceColors
        }), this.type = THREE.LinePieces, this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = {}, t("n1", "n2", 16755200), t("n2", "n4", 16755200), t("n4", "n3", 16755200), t("n3", "n1", 16755200), t("f1", "f2", 16755200), t("f2", "f4", 16755200), t("f4", "f3", 16755200), t("f3", "f1", 16755200), t("n1", "f1", 16755200), t("n2", "f2", 16755200), t("n3", "f3", 16755200), t("n4", "f4", 16755200), t("p", "n1", 16711680), t("p", "n2", 16711680), t("p", "n3", 16711680), t("p", "n4", 16711680), t("u1", "u2", 43775), t("u2", "u3", 43775), t("u3", "u1", 43775), t("c", "t", 16777215), t("p", "c", 3355443), t("cn1", "cn2", 3355443), t("cn3", "cn4", 3355443), t("cf1", "cf2", 3355443), t("cf3", "cf4", 3355443), this.camera = e, this.update(e)
    }, THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype), THREE.CameraHelper.prototype.update = function () {
        function e(e, i, r, n) {
            if (THREE.CameraHelper.__v.set(i, r, n), THREE.CameraHelper.__projector.unprojectVector(THREE.CameraHelper.__v, THREE.CameraHelper.__c), e = t.pointMap[e], void 0 !== e)
                for (i = 0, r = e.length; r > i; i++) t.geometry.vertices[e[i]].copy(THREE.CameraHelper.__v)
        }
        var t = this;
        THREE.CameraHelper.__c.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -1, -1, -1), e("n2", 1, -1, -1), e("n3", -1, 1, -1), e("n4", 1, 1, -1), e("f1", -1, -1, 1), e("f2", 1, -1, 1), e("f3", -1, 1, 1), e("f4", 1, 1, 1), e("u1", .7, 1.1, -1), e("u2", -.7, 1.1, -1), e("u3", 0, 2, -1), e("cf1", -1, 0, 1), e("cf2", 1, 0, 1), e("cf3", 0, -1, 1), e("cf4", 0, 1, 1), e("cn1", -1, 0, -1), e("cn2", 1, 0, -1), e("cn3", 0, -1, -1), e("cn4", 0, 1, -1), this.geometry.verticesNeedUpdate = !0
    }, THREE.CameraHelper.__projector = new THREE.Projector, THREE.CameraHelper.__v = new THREE.Vector3, THREE.CameraHelper.__c = new THREE.Camera, THREE.DirectionalLightHelper = function (e, t, i) {
        THREE.Object3D.call(this), this.light = e, this.position = e.position, this.direction = new THREE.Vector3, this.direction.sub(e.target.position, e.position), this.color = e.color.clone();
        var r = THREE.Math.clamp(e.intensity, 0, 1);
        this.color.r *= r, this.color.g *= r, this.color.b *= r;
        var r = this.color.getHex(),
            n = new THREE.SphereGeometry(t, 16, 8),
            o = new THREE.AsteriskGeometry(1.25 * t, 2.25 * t),
            a = new THREE.MeshBasicMaterial({
                color: r,
                fog: !1
            }),
            s = new THREE.LineBasicMaterial({
                color: r,
                fog: !1
            });
        this.lightArrow = new THREE.ArrowHelper(this.direction, null, i, r), this.lightSphere = new THREE.Mesh(n, a), this.lightArrow.cone.material.fog = !1, this.lightArrow.line.material.fog = !1, this.lightRays = new THREE.Line(o, s, THREE.LinePieces), this.add(this.lightArrow), this.add(this.lightSphere), this.add(this.lightRays), this.lightSphere.properties.isGizmo = !0, this.lightSphere.properties.gizmoSubject = e, this.lightSphere.properties.gizmoRoot = this, this.targetSphere = null, e.target.properties.targetInverse && (t = new THREE.SphereGeometry(t, 8, 4), i = new THREE.MeshBasicMaterial({
            color: r,
            wireframe: !0,
            fog: !1
        }), this.targetSphere = new THREE.Mesh(t, i), this.targetSphere.position = e.target.position, this.targetSphere.properties.isGizmo = !0, this.targetSphere.properties.gizmoSubject = e.target, this.targetSphere.properties.gizmoRoot = this.targetSphere, e = new THREE.LineDashedMaterial({
            color: r,
            dashSize: 4,
            gapSize: 4,
            opacity: .75,
            transparent: !0,
            fog: !1
        }), r = new THREE.Geometry, r.vertices.push(this.position.clone()), r.vertices.push(this.targetSphere.position.clone()), r.computeLineDistances(), this.targetLine = new THREE.Line(r, e), this.targetLine.properties.isGizmo = !0), this.properties.isGizmo = !0
    }, THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.DirectionalLightHelper.prototype.update = function () {
        this.direction.sub(this.light.target.position, this.light.position), this.lightArrow.setDirection(this.direction), this.color.copy(this.light.color);
        var e = THREE.Math.clamp(this.light.intensity, 0, 1);
        this.color.r *= e, this.color.g *= e, this.color.b *= e, this.lightArrow.setColor(this.color.getHex()), this.lightSphere.material.color.copy(this.color), this.lightRays.material.color.copy(this.color), this.targetSphere.material.color.copy(this.color), this.targetLine.material.color.copy(this.color), this.targetLine.geometry.vertices[0].copy(this.light.position), this.targetLine.geometry.vertices[1].copy(this.light.target.position), this.targetLine.geometry.computeLineDistances(), this.targetLine.geometry.verticesNeedUpdate = !0
    }, THREE.HemisphereLightHelper = function (e, t, i) {
        THREE.Object3D.call(this), this.light = e, this.position = e.position;
        var r = THREE.Math.clamp(e.intensity, 0, 1);
        this.color = e.color.clone(), this.color.r *= r, this.color.g *= r, this.color.b *= r;
        var n = this.color.getHex();
        this.groundColor = e.groundColor.clone(), this.groundColor.r *= r, this.groundColor.g *= r, this.groundColor.b *= r;
        for (var r = this.groundColor.getHex(), o = new THREE.SphereGeometry(t, 16, 8, 0, 2 * Math.PI, 0, .5 * Math.PI), a = new THREE.SphereGeometry(t, 16, 8, 0, 2 * Math.PI, .5 * Math.PI, Math.PI), s = new THREE.MeshBasicMaterial({
                color: n,
                fog: !1
            }), l = new THREE.MeshBasicMaterial({
                color: r,
                fog: !1
            }), h = 0, c = o.faces.length; c > h; h++) o.faces[h].materialIndex = 0;
        for (h = 0, c = a.faces.length; c > h; h++) a.faces[h].materialIndex = 1;
        THREE.GeometryUtils.merge(o, a), this.lightSphere = new THREE.Mesh(o, new THREE.MeshFaceMaterial([s, l])), this.lightArrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1.1 * (t + i), 0), i, n), this.lightArrow.rotation.x = Math.PI, this.lightArrowGround = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1.1 * (t + i), 0), i, r), t = new THREE.Object3D, t.rotation.x = .5 * -Math.PI, t.add(this.lightSphere), t.add(this.lightArrow), t.add(this.lightArrowGround), this.add(t), this.lightSphere.properties.isGizmo = !0, this.lightSphere.properties.gizmoSubject = e, this.lightSphere.properties.gizmoRoot = this, this.properties.isGizmo = !0, this.target = new THREE.Vector3, this.lookAt(this.target)
    }, THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.HemisphereLightHelper.prototype.update = function () {
        var e = THREE.Math.clamp(this.light.intensity, 0, 1);
        this.color.copy(this.light.color), this.groundColor.copy(this.light.groundColor), this.color.r *= e, this.color.g *= e, this.color.b *= e, this.groundColor.r *= e, this.groundColor.g *= e, this.groundColor.b *= e, this.lightSphere.material.materials[0].color.copy(this.color), this.lightSphere.material.materials[1].color.copy(this.groundColor), this.lightArrow.setColor(this.color.getHex()), this.lightArrowGround.setColor(this.groundColor.getHex()), this.lookAt(this.target)
    }, THREE.PointLightHelper = function (e, t) {
        THREE.Object3D.call(this), this.light = e, this.position = e.position, this.color = e.color.clone();
        var i = THREE.Math.clamp(e.intensity, 0, 1);
        this.color.r *= i, this.color.g *= i, this.color.b *= i;
        var r = this.color.getHex(),
            i = new THREE.SphereGeometry(t, 16, 8),
            n = new THREE.AsteriskGeometry(1.25 * t, 2.25 * t),
            o = new THREE.IcosahedronGeometry(1, 2),
            a = new THREE.MeshBasicMaterial({
                color: r,
                fog: !1
            }),
            s = new THREE.LineBasicMaterial({
                color: r,
                fog: !1
            }),
            r = new THREE.MeshBasicMaterial({
                color: r,
                fog: !1,
                wireframe: !0,
                opacity: .1,
                transparent: !0
            });
        this.lightSphere = new THREE.Mesh(i, a), this.lightRays = new THREE.Line(n, s, THREE.LinePieces), this.lightDistance = new THREE.Mesh(o, r), i = e.distance, 0 === i ? this.lightDistance.visible = !1 : this.lightDistance.scale.set(i, i, i), this.add(this.lightSphere), this.add(this.lightRays), this.add(this.lightDistance), this.lightSphere.properties.isGizmo = !0, this.lightSphere.properties.gizmoSubject = e, this.lightSphere.properties.gizmoRoot = this, this.properties.isGizmo = !0
    }, THREE.PointLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.PointLightHelper.prototype.update = function () {
        this.color.copy(this.light.color);
        var e = THREE.Math.clamp(this.light.intensity, 0, 1);
        this.color.r *= e, this.color.g *= e, this.color.b *= e, this.lightSphere.material.color.copy(this.color), this.lightRays.material.color.copy(this.color), this.lightDistance.material.color.copy(this.color), e = this.light.distance, 0 === e ? this.lightDistance.visible = !1 : (this.lightDistance.visible = !0, this.lightDistance.scale.set(e, e, e))
    }, THREE.SpotLightHelper = function (e, t, i) {
        THREE.Object3D.call(this), this.light = e, this.position = e.position, this.direction = new THREE.Vector3, this.direction.sub(e.target.position, e.position), this.color = e.color.clone();
        var r = THREE.Math.clamp(e.intensity, 0, 1);
        this.color.r *= r, this.color.g *= r, this.color.b *= r;
        var r = this.color.getHex(),
            n = new THREE.SphereGeometry(t, 16, 8),
            o = new THREE.AsteriskGeometry(1.25 * t, 2.25 * t),
            a = new THREE.CylinderGeometry(1e-4, 1, 1, 8, 1, !0),
            s = new THREE.Matrix4;
        s.rotateX(-Math.PI / 2), s.translate(new THREE.Vector3(0, -.5, 0)), a.applyMatrix(s);
        var l = new THREE.MeshBasicMaterial({
                color: r,
                fog: !1
            }),
            s = new THREE.LineBasicMaterial({
                color: r,
                fog: !1
            }),
            h = new THREE.MeshBasicMaterial({
                color: r,
                fog: !1,
                wireframe: !0,
                opacity: .3,
                transparent: !0
            });
        this.lightArrow = new THREE.ArrowHelper(this.direction, null, i, r), this.lightSphere = new THREE.Mesh(n, l), this.lightCone = new THREE.Mesh(a, h), i = e.distance ? e.distance : 1e4, n = 2 * i * Math.tan(.5 * e.angle), this.lightCone.scale.set(n, n, i), this.lightArrow.cone.material.fog = !1, this.lightArrow.line.material.fog = !1, this.lightRays = new THREE.Line(o, s, THREE.LinePieces), this.gyroscope = new THREE.Gyroscope, this.gyroscope.add(this.lightArrow), this.gyroscope.add(this.lightSphere), this.gyroscope.add(this.lightRays), this.add(this.gyroscope), this.add(this.lightCone), this.lookAt(e.target.position), this.lightSphere.properties.isGizmo = !0, this.lightSphere.properties.gizmoSubject = e, this.lightSphere.properties.gizmoRoot = this, this.targetSphere = null, e.target.properties.targetInverse && (t = new THREE.SphereGeometry(t, 8, 4), o = new THREE.MeshBasicMaterial({
            color: r,
            wireframe: !0,
            fog: !1
        }), this.targetSphere = new THREE.Mesh(t, o), this.targetSphere.position = e.target.position, this.targetSphere.properties.isGizmo = !0, this.targetSphere.properties.gizmoSubject = e.target, this.targetSphere.properties.gizmoRoot = this.targetSphere, e = new THREE.LineDashedMaterial({
            color: r,
            dashSize: 4,
            gapSize: 4,
            opacity: .75,
            transparent: !0,
            fog: !1
        }), r = new THREE.Geometry, r.vertices.push(this.position.clone()), r.vertices.push(this.targetSphere.position.clone()), r.computeLineDistances(), this.targetLine = new THREE.Line(r, e), this.targetLine.properties.isGizmo = !0), this.properties.isGizmo = !0
    }, THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.SpotLightHelper.prototype.update = function () {
        this.direction.sub(this.light.target.position, this.light.position), this.lightArrow.setDirection(this.direction), this.lookAt(this.light.target.position);
        var e = this.light.distance ? this.light.distance : 1e4,
            t = 2 * e * Math.tan(.5 * this.light.angle);
        this.lightCone.scale.set(t, t, e), this.color.copy(this.light.color), e = THREE.Math.clamp(this.light.intensity, 0, 1), this.color.r *= e, this.color.g *= e, this.color.b *= e, this.lightArrow.setColor(this.color.getHex()), this.lightSphere.material.color.copy(this.color), this.lightRays.material.color.copy(this.color), this.lightCone.material.color.copy(this.color), this.targetSphere.material.color.copy(this.color), this.targetLine.material.color.copy(this.color), this.targetLine.geometry.vertices[0].copy(this.light.position), this.targetLine.geometry.vertices[1].copy(this.light.target.position), this.targetLine.geometry.computeLineDistances(), this.targetLine.geometry.verticesNeedUpdate = !0
    }, THREE.ImmediateRenderObject = function () {
        THREE.Object3D.call(this), this.render = function () {};
    }, THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype), THREE.LensFlare = function (e, t, i, r, n) {
        THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, i, r, n)
    }, THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype), THREE.LensFlare.prototype.add = function (e, t, i, r, n, o) {
        void 0 === t && (t = -1), void 0 === i && (i = 0), void 0 === o && (o = 1), void 0 === n && (n = new THREE.Color(16777215)), void 0 === r && (r = THREE.NormalBlending), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
            texture: e,
            size: t,
            distance: i,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            rotation: 1,
            opacity: o,
            color: n,
            blending: r
        })
    }, THREE.LensFlare.prototype.updateLensFlares = function () {
        var e, t, i = this.lensFlares.length,
            r = 2 * -this.positionScreen.x,
            n = 2 * -this.positionScreen.y;
        for (e = 0; i > e; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + r * t.distance, t.y = this.positionScreen.y + n * t.distance, t.wantedRotation = .25 * t.x * Math.PI, t.rotation += .25 * (t.wantedRotation - t.rotation)
    }, THREE.MorphBlendMesh = function (e, t) {
        THREE.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
        var i = this.geometry.morphTargets.length;
        this.createAnimation("__default", 0, i - 1, i / 1), this.setAnimationWeight("__default", 1)
    }, THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.MorphBlendMesh.prototype.createAnimation = function (e, t, i, r) {
        t = {
            startFrame: t,
            endFrame: i,
            length: i - t + 1,
            fps: r,
            duration: (i - t) / r,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        }, this.animationsMap[e] = t, this.animationsList.push(t)
    }, THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (e) {
        for (var t, i = /([a-z]+)(\d+)/, r = {}, n = this.geometry, o = 0, a = n.morphTargets.length; a > o; o++) {
            var s = n.morphTargets[o].name.match(i);
            if (s && 1 < s.length) {
                var l = s[1];
                r[l] || (r[l] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                }), s = r[l], o < s.start && (s.start = o), o > s.end && (s.end = o), t || (t = l)
            }
        }
        for (l in r) s = r[l], this.createAnimation(l, s.start, s.end, e);
        this.firstAnimation = t
    }, THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (e) {
        (e = this.animationsMap[e]) && (e.direction = 1, e.directionBackwards = !1)
    }, THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (e) {
        (e = this.animationsMap[e]) && (e.direction = -1, e.directionBackwards = !0)
    }, THREE.MorphBlendMesh.prototype.setAnimationFPS = function (e, t) {
        var i = this.animationsMap[e];
        i && (i.fps = t, i.duration = (i.end - i.start) / i.fps)
    }, THREE.MorphBlendMesh.prototype.setAnimationDuration = function (e, t) {
        var i = this.animationsMap[e];
        i && (i.duration = t, i.fps = (i.end - i.start) / i.duration)
    }, THREE.MorphBlendMesh.prototype.setAnimationWeight = function (e, t) {
        var i = this.animationsMap[e];
        i && (i.weight = t)
    }, THREE.MorphBlendMesh.prototype.setAnimationTime = function (e, t) {
        var i = this.animationsMap[e];
        i && (i.time = t)
    }, THREE.MorphBlendMesh.prototype.getAnimationTime = function (e) {
        var t = 0;
        return (e = this.animationsMap[e]) && (t = e.time), t
    }, THREE.MorphBlendMesh.prototype.getAnimationDuration = function (e) {
        var t = -1;
        return (e = this.animationsMap[e]) && (t = e.duration), t
    }, THREE.MorphBlendMesh.prototype.playAnimation = function (e) {
        var t = this.animationsMap[e];
        t ? (t.time = 0, t.active = !0) : void 0
    }, THREE.MorphBlendMesh.prototype.stopAnimation = function (e) {
        (e = this.animationsMap[e]) && (e.active = !1)
    }, THREE.MorphBlendMesh.prototype.update = function (e) {
        for (var t = 0, i = this.animationsList.length; i > t; t++) {
            var r = this.animationsList[t];
            if (r.active) {
                var n = r.duration / r.length;
                r.time += r.direction * e, r.mirroredLoop ? (r.time > r.duration || 0 > r.time) && (r.direction *= -1, r.time > r.duration && (r.time = r.duration, r.directionBackwards = !0), 0 > r.time && (r.time = 0, r.directionBackwards = !1)) : (r.time %= r.duration, 0 > r.time && (r.time += r.duration));
                var o = r.startFrame + THREE.Math.clamp(Math.floor(r.time / n), 0, r.length - 1),
                    a = r.weight;
                o !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0, this.morphTargetInfluences[r.currentFrame] = 1 * a, this.morphTargetInfluences[o] = 0, r.lastFrame = r.currentFrame, r.currentFrame = o), n = r.time % n / n, r.directionBackwards && (n = 1 - n), this.morphTargetInfluences[r.currentFrame] = n * a, this.morphTargetInfluences[r.lastFrame] = (1 - n) * a
            }
        }
    }, THREE.LensFlarePlugin = function () {
        function e(e) {
            var i = t.createProgram(),
                r = t.createShader(t.FRAGMENT_SHADER),
                n = t.createShader(t.VERTEX_SHADER);
            return t.shaderSource(r, e.fragmentShader), t.shaderSource(n, e.vertexShader), t.compileShader(r), t.compileShader(n), t.attachShader(i, r), t.attachShader(i, n), t.linkProgram(i), i
        }
        var t, i, r, n, o, a, s, l, h, c, u, f;
        this.init = function (p) {
            t = p.context, i = p, r = new Float32Array(16), n = new Uint16Array(6), p = 0, r[p++] = -1, r[p++] = -1, r[p++] = 0, r[p++] = 0, r[p++] = 1, r[p++] = -1, r[p++] = 1, r[p++] = 0, r[p++] = 1, r[p++] = 1, r[p++] = 1, r[p++] = 1, r[p++] = -1, r[p++] = 1, r[p++] = 0, r[p++] = 1, p = 0, n[p++] = 0, n[p++] = 1, n[p++] = 2, n[p++] = 0, n[p++] = 2, n[p++] = 3, o = t.createBuffer(), a = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, o), t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, a), t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW), s = t.createTexture(), l = t.createTexture(), t.bindTexture(t.TEXTURE_2D, s), t.texImage2D(t.TEXTURE_2D, 0, t.RGB, 16, 16, 0, t.RGB, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.bindTexture(t.TEXTURE_2D, l), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 16, 16, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), 0 >= t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (h = !1, c = e(THREE.ShaderFlares.lensFlare)) : (h = !0, c = e(THREE.ShaderFlares.lensFlareVertexTexture)), u = {}, f = {}, u.vertex = t.getAttribLocation(c, "position"), u.uv = t.getAttribLocation(c, "uv"), f.renderType = t.getUniformLocation(c, "renderType"), f.map = t.getUniformLocation(c, "map"), f.occlusionMap = t.getUniformLocation(c, "occlusionMap"), f.opacity = t.getUniformLocation(c, "opacity"), f.color = t.getUniformLocation(c, "color"), f.scale = t.getUniformLocation(c, "scale"), f.rotation = t.getUniformLocation(c, "rotation"), f.screenPosition = t.getUniformLocation(c, "screenPosition")
        }, this.render = function (e, r, n, p) {
            var e = e.__webglFlares,
                d = e.length;
            if (d) {
                var m = new THREE.Vector3,
                    E = p / n,
                    g = .5 * n,
                    v = .5 * p,
                    T = 16 / p,
                    y = new THREE.Vector2(T * E, T),
                    _ = new THREE.Vector3(1, 1, 0),
                    R = new THREE.Vector2(1, 1),
                    x = f,
                    T = u;
                t.useProgram(c), t.enableVertexAttribArray(u.vertex), t.enableVertexAttribArray(u.uv), t.uniform1i(x.occlusionMap, 0), t.uniform1i(x.map, 1), t.bindBuffer(t.ARRAY_BUFFER, o), t.vertexAttribPointer(T.vertex, 2, t.FLOAT, !1, 16, 0), t.vertexAttribPointer(T.uv, 2, t.FLOAT, !1, 16, 8), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, a), t.disable(t.CULL_FACE), t.depthMask(!1);
                var b, w, H, S, M;
                for (b = 0; d > b; b++)
                    if (T = 16 / p, y.set(T * E, T), S = e[b], m.set(S.matrixWorld.elements[12], S.matrixWorld.elements[13], S.matrixWorld.elements[14]), r.matrixWorldInverse.multiplyVector3(m), r.projectionMatrix.multiplyVector3(m), _.copy(m), R.x = _.x * g + g, R.y = _.y * v + v, h || 0 < R.x && R.x < n && 0 < R.y && R.y < p)
                        for (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, s), t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGB, R.x - 8, R.y - 8, 16, 16, 0), t.uniform1i(x.renderType, 0), t.uniform2f(x.scale, y.x, y.y), t.uniform3f(x.screenPosition, _.x, _.y, _.z), t.disable(t.BLEND), t.enable(t.DEPTH_TEST), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, l), t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGBA, R.x - 8, R.y - 8, 16, 16, 0), t.uniform1i(x.renderType, 1), t.disable(t.DEPTH_TEST), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, s), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0), S.positionScreen.copy(_), S.customUpdateCallback ? S.customUpdateCallback(S) : S.updateLensFlares(), t.uniform1i(x.renderType, 2), t.enable(t.BLEND), w = 0, H = S.lensFlares.length; H > w; w++) M = S.lensFlares[w], .001 < M.opacity && .001 < M.scale && (_.x = M.x, _.y = M.y, _.z = M.z, T = M.size * M.scale / p, y.x = T * E, y.y = T, t.uniform3f(x.screenPosition, _.x, _.y, _.z), t.uniform2f(x.scale, y.x, y.y), t.uniform1f(x.rotation, M.rotation), t.uniform1f(x.opacity, M.opacity), t.uniform3f(x.color, M.color.r, M.color.g, M.color.b), i.setBlending(M.blending, M.blendEquation, M.blendSrc, M.blendDst), i.setTexture(M.texture, 1), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0));
                t.enable(t.CULL_FACE), t.enable(t.DEPTH_TEST), t.depthMask(!0)
            }
        }
    }, THREE.ShadowMapPlugin = function () {
        var e, t, i, r, n, o, a = new THREE.Frustum,
            s = new THREE.Matrix4,
            l = new THREE.Vector3,
            h = new THREE.Vector3;
        this.init = function (a) {
            e = a.context, t = a;
            var a = THREE.ShaderLib.depthRGBA,
                s = THREE.UniformsUtils.clone(a.uniforms);
            i = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s
            }), r = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s,
                morphTargets: !0
            }), n = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s,
                skinning: !0
            }), o = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s,
                morphTargets: !0,
                skinning: !0
            }), i._shadowPass = !0, r._shadowPass = !0, n._shadowPass = !0, o._shadowPass = !0
        }, this.render = function (e, i) {
            t.shadowMapEnabled && t.shadowMapAutoUpdate && this.update(e, i)
        }, this.update = function (c, u) {
            var f, p, d, m, E, g, v, T, y, _ = [];
            for (m = 0, e.clearColor(1, 1, 1, 1), e.disable(e.BLEND), e.enable(e.CULL_FACE), e.frontFace(e.CCW), t.shadowMapCullFace === THREE.CullFaceFront ? e.cullFace(e.FRONT) : e.cullFace(e.BACK), t.setDepthTest(!0), f = 0, p = c.__lights.length; p > f; f++)
                if (d = c.__lights[f], d.castShadow)
                    if (d instanceof THREE.DirectionalLight && d.shadowCascade)
                        for (E = 0; E < d.shadowCascadeCount; E++) {
                            var R;
                            if (d.shadowCascadeArray[E]) R = d.shadowCascadeArray[E];
                            else {
                                y = d, v = E, R = new THREE.DirectionalLight, R.isVirtual = !0, R.onlyShadow = !0, R.castShadow = !0, R.shadowCameraNear = y.shadowCameraNear, R.shadowCameraFar = y.shadowCameraFar, R.shadowCameraLeft = y.shadowCameraLeft, R.shadowCameraRight = y.shadowCameraRight, R.shadowCameraBottom = y.shadowCameraBottom, R.shadowCameraTop = y.shadowCameraTop, R.shadowCameraVisible = y.shadowCameraVisible, R.shadowDarkness = y.shadowDarkness, R.shadowBias = y.shadowCascadeBias[v], R.shadowMapWidth = y.shadowCascadeWidth[v], R.shadowMapHeight = y.shadowCascadeHeight[v], R.pointsWorld = [], R.pointsFrustum = [], T = R.pointsWorld, g = R.pointsFrustum;
                                for (var x = 0; 8 > x; x++) T[x] = new THREE.Vector3, g[x] = new THREE.Vector3;
                                T = y.shadowCascadeNearZ[v], y = y.shadowCascadeFarZ[v], g[0].set(-1, -1, T), g[1].set(1, -1, T), g[2].set(-1, 1, T), g[3].set(1, 1, T), g[4].set(-1, -1, y), g[5].set(1, -1, y), g[6].set(-1, 1, y), g[7].set(1, 1, y), R.originalCamera = u, g = new THREE.Gyroscope, g.position = d.shadowCascadeOffset, g.add(R), g.add(R.target), u.add(g), d.shadowCascadeArray[E] = R
                            }
                            v = d, T = E, y = v.shadowCascadeArray[T], y.position.copy(v.position), y.target.position.copy(v.target.position), y.lookAt(y.target), y.shadowCameraVisible = v.shadowCameraVisible, y.shadowDarkness = v.shadowDarkness, y.shadowBias = v.shadowCascadeBias[T], g = v.shadowCascadeNearZ[T], v = v.shadowCascadeFarZ[T], y = y.pointsFrustum, y[0].z = g, y[1].z = g, y[2].z = g, y[3].z = g, y[4].z = v, y[5].z = v, y[6].z = v, y[7].z = v, _[m] = R, m++
                        } else _[m] = d, m++;
            for (f = 0, p = _.length; p > f; f++) {
                if (d = _[f], d.shadowMap || (E = THREE.LinearFilter, t.shadowMapType === THREE.PCFSoftShadowMap && (E = THREE.NearestFilter), d.shadowMap = new THREE.WebGLRenderTarget(d.shadowMapWidth, d.shadowMapHeight, {
                        minFilter: E,
                        magFilter: E,
                        format: THREE.RGBAFormat
                    }), d.shadowMapSize = new THREE.Vector2(d.shadowMapWidth, d.shadowMapHeight), d.shadowMatrix = new THREE.Matrix4), !d.shadowCamera) {
                    if (d instanceof THREE.SpotLight) d.shadowCamera = new THREE.PerspectiveCamera(d.shadowCameraFov, d.shadowMapWidth / d.shadowMapHeight, d.shadowCameraNear, d.shadowCameraFar);
                    else {
                        if (!(d instanceof THREE.DirectionalLight)) continue;
                        d.shadowCamera = new THREE.OrthographicCamera(d.shadowCameraLeft, d.shadowCameraRight, d.shadowCameraTop, d.shadowCameraBottom, d.shadowCameraNear, d.shadowCameraFar)
                    }
                    c.add(d.shadowCamera), t.autoUpdateScene && c.updateMatrixWorld()
                }
                if (d.shadowCameraVisible && !d.cameraHelper && (d.cameraHelper = new THREE.CameraHelper(d.shadowCamera), d.shadowCamera.add(d.cameraHelper)), d.isVirtual && R.originalCamera == u) {
                    for (E = u, m = d.shadowCamera, g = d.pointsFrustum, y = d.pointsWorld, l.set(1 / 0, 1 / 0, 1 / 0), h.set(-(1 / 0), -(1 / 0), -(1 / 0)), v = 0; 8 > v; v++) T = y[v], T.copy(g[v]), THREE.ShadowMapPlugin.__projector.unprojectVector(T, E), m.matrixWorldInverse.multiplyVector3(T), T.x < l.x && (l.x = T.x), T.x > h.x && (h.x = T.x), T.y < l.y && (l.y = T.y), T.y > h.y && (h.y = T.y), T.z < l.z && (l.z = T.z), T.z > h.z && (h.z = T.z);
                    m.left = l.x, m.right = h.x, m.top = h.y, m.bottom = l.y, m.updateProjectionMatrix()
                }
                for (m = d.shadowMap, g = d.shadowMatrix, E = d.shadowCamera, E.position.copy(d.matrixWorld.getPosition()), E.lookAt(d.target.matrixWorld.getPosition()), E.updateMatrixWorld(), E.matrixWorldInverse.getInverse(E.matrixWorld), d.cameraHelper && (d.cameraHelper.visible = d.shadowCameraVisible), d.shadowCameraVisible && d.cameraHelper.update(), g.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), g.multiplySelf(E.projectionMatrix), g.multiplySelf(E.matrixWorldInverse), s.multiply(E.projectionMatrix, E.matrixWorldInverse), a.setFromMatrix(s), t.setRenderTarget(m), t.clear(), y = c.__webglObjects, d = 0, m = y.length; m > d; d++) v = y[d], g = v.object, v.render = !1, !g.visible || !g.castShadow || (g instanceof THREE.Mesh || g instanceof THREE.ParticleSystem) && g.frustumCulled && !a.contains(g) || (g._modelViewMatrix.multiply(E.matrixWorldInverse, g.matrixWorld), v.render = !0);
                for (d = 0, m = y.length; m > d; d++) v = y[d], v.render && (g = v.object, v = v.buffer, x = g.material instanceof THREE.MeshFaceMaterial ? g.material.materials[0] : g.material, T = 0 < g.geometry.morphTargets.length && x.morphTargets, x = g instanceof THREE.SkinnedMesh && x.skinning, T = g.customDepthMaterial ? g.customDepthMaterial : x ? T ? o : n : T ? r : i, v instanceof THREE.BufferGeometry ? t.renderBufferDirect(E, c.__lights, null, T, v, g) : t.renderBuffer(E, c.__lights, null, T, v, g));
                for (y = c.__webglObjectsImmediate, d = 0, m = y.length; m > d; d++) v = y[d], g = v.object, g.visible && g.castShadow && (g._modelViewMatrix.multiply(E.matrixWorldInverse, g.matrixWorld), t.renderImmediateObject(E, c.__lights, null, i, g))
            }
            f = t.getClearColor(), p = t.getClearAlpha(), e.clearColor(f.r, f.g, f.b, p), e.enable(e.BLEND), t.shadowMapCullFace === THREE.CullFaceFront && e.cullFace(e.BACK)
        }
    }, THREE.ShadowMapPlugin.__projector = new THREE.Projector, THREE.SpritePlugin = function () {
        function e(e, t) {
            return e.z !== t.z ? t.z - e.z : t.id - e.id
        }
        var t, i, r, n, o, a, s, l, h;
        this.init = function (e) {
            t = e.context, i = e, r = new Float32Array(16), n = new Uint16Array(6), e = 0, r[e++] = -1, r[e++] = -1, r[e++] = 0, r[e++] = 0, r[e++] = 1, r[e++] = -1, r[e++] = 1, r[e++] = 0, r[e++] = 1, r[e++] = 1, r[e++] = 1, r[e++] = 1, r[e++] = -1, r[e++] = 1, r[e++] = 0, r[e++] = 1, e = 0, n[e++] = 0, n[e++] = 1, n[e++] = 2, n[e++] = 0, n[e++] = 2, n[e++] = 3, o = t.createBuffer(), a = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, o), t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, a), t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW);
            var e = THREE.ShaderSprite.sprite,
                c = t.createProgram(),
                u = t.createShader(t.FRAGMENT_SHADER),
                f = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(u, e.fragmentShader), t.shaderSource(f, e.vertexShader), t.compileShader(u), t.compileShader(f), t.attachShader(c, u), t.attachShader(c, f), t.linkProgram(c), s = c, l = {}, h = {}, l.position = t.getAttribLocation(s, "position"), l.uv = t.getAttribLocation(s, "uv"), h.uvOffset = t.getUniformLocation(s, "uvOffset"), h.uvScale = t.getUniformLocation(s, "uvScale"), h.rotation = t.getUniformLocation(s, "rotation"), h.scale = t.getUniformLocation(s, "scale"), h.alignment = t.getUniformLocation(s, "alignment"), h.color = t.getUniformLocation(s, "color"), h.map = t.getUniformLocation(s, "map"), h.opacity = t.getUniformLocation(s, "opacity"), h.useScreenCoordinates = t.getUniformLocation(s, "useScreenCoordinates"), h.sizeAttenuation = t.getUniformLocation(s, "sizeAttenuation"), h.screenPosition = t.getUniformLocation(s, "screenPosition"), h.modelViewMatrix = t.getUniformLocation(s, "modelViewMatrix"), h.projectionMatrix = t.getUniformLocation(s, "projectionMatrix"), h.fogType = t.getUniformLocation(s, "fogType"), h.fogDensity = t.getUniformLocation(s, "fogDensity"), h.fogNear = t.getUniformLocation(s, "fogNear"), h.fogFar = t.getUniformLocation(s, "fogFar"), h.fogColor = t.getUniformLocation(s, "fogColor"), h.alphaTest = t.getUniformLocation(s, "alphaTest")
        }, this.render = function (r, n, c, u) {
            var f = r.__webglSprites,
                p = f.length;
            if (p) {
                var d = l,
                    m = h,
                    E = u / c,
                    c = .5 * c,
                    g = .5 * u;
                t.useProgram(s), t.enableVertexAttribArray(d.position), t.enableVertexAttribArray(d.uv), t.disable(t.CULL_FACE), t.enable(t.BLEND), t.bindBuffer(t.ARRAY_BUFFER, o), t.vertexAttribPointer(d.position, 2, t.FLOAT, !1, 16, 0), t.vertexAttribPointer(d.uv, 2, t.FLOAT, !1, 16, 8), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, a), t.uniformMatrix4fv(m.projectionMatrix, !1, n.projectionMatrix.elements), t.activeTexture(t.TEXTURE0), t.uniform1i(m.map, 0);
                var v = d = 0,
                    T = r.fog;
                T ? (t.uniform3f(m.fogColor, T.color.r, T.color.g, T.color.b), T instanceof THREE.Fog ? (t.uniform1f(m.fogNear, T.near), t.uniform1f(m.fogFar, T.far), t.uniform1i(m.fogType, 1), v = d = 1) : T instanceof THREE.FogExp2 && (t.uniform1f(m.fogDensity, T.density), t.uniform1i(m.fogType, 2), v = d = 2)) : (t.uniform1i(m.fogType, 0), v = d = 0);
                for (var y, _, R = [], T = 0; p > T; T++) y = f[T], _ = y.material, y.visible && 0 !== _.opacity && (_.useScreenCoordinates ? y.z = -y.position.z : (y._modelViewMatrix.multiply(n.matrixWorldInverse, y.matrixWorld), y.z = -y._modelViewMatrix.elements[14]));
                for (f.sort(e), T = 0; p > T; T++) y = f[T], _ = y.material, y.visible && 0 !== _.opacity && _.map && _.map.image && _.map.image.width && (t.uniform1f(m.alphaTest, _.alphaTest), !0 === _.useScreenCoordinates ? (t.uniform1i(m.useScreenCoordinates, 1), t.uniform3f(m.screenPosition, (y.position.x * i.devicePixelRatio - c) / c, (g - y.position.y * i.devicePixelRatio) / g, Math.max(0, Math.min(1, y.position.z))), R[0] = i.devicePixelRatio, R[1] = i.devicePixelRatio) : (t.uniform1i(m.useScreenCoordinates, 0), t.uniform1i(m.sizeAttenuation, _.sizeAttenuation ? 1 : 0), t.uniformMatrix4fv(m.modelViewMatrix, !1, y._modelViewMatrix.elements), R[0] = 1, R[1] = 1), n = r.fog && _.fog ? v : 0, d !== n && (t.uniform1i(m.fogType, n), d = n), n = 1 / (_.scaleByViewport ? u : 1), R[0] *= n * E * y.scale.x, R[1] *= n * y.scale.y, t.uniform2f(m.uvScale, _.uvScale.x, _.uvScale.y), t.uniform2f(m.uvOffset, _.uvOffset.x, _.uvOffset.y), t.uniform2f(m.alignment, _.alignment.x, _.alignment.y), t.uniform1f(m.opacity, _.opacity), t.uniform3f(m.color, _.color.r, _.color.g, _.color.b), t.uniform1f(m.rotation, y.rotation), t.uniform2fv(m.scale, R), i.setBlending(_.blending, _.blendEquation, _.blendSrc, _.blendDst), i.setDepthTest(_.depthTest), i.setDepthWrite(_.depthWrite), i.setTexture(_.map, 0), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0));
                t.enable(t.CULL_FACE)
            }
        }
    }, THREE.DepthPassPlugin = function () {
        this.enabled = !1, this.renderTarget = null;
        var e, t, i, r, n, o, a = new THREE.Frustum,
            s = new THREE.Matrix4;
        this.init = function (a) {
            e = a.context, t = a;
            var a = THREE.ShaderLib.depthRGBA,
                s = THREE.UniformsUtils.clone(a.uniforms);
            i = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s
            }), r = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s,
                morphTargets: !0
            }), n = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s,
                skinning: !0
            }), o = new THREE.ShaderMaterial({
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: s,
                morphTargets: !0,
                skinning: !0
            }), i._shadowPass = !0, r._shadowPass = !0, n._shadowPass = !0, o._shadowPass = !0
        }, this.render = function (e, t) {
            this.enabled && this.update(e, t)
        }, this.update = function (l, h) {
            var c, u, f, p, d, m;
            for (e.clearColor(1, 1, 1, 1), e.disable(e.BLEND), t.setDepthTest(!0), t.autoUpdateScene && l.updateMatrixWorld(), h.matrixWorldInverse.getInverse(h.matrixWorld), s.multiply(h.projectionMatrix, h.matrixWorldInverse), a.setFromMatrix(s), t.setRenderTarget(this.renderTarget), t.clear(), m = l.__webglObjects, c = 0, u = m.length; u > c; c++) f = m[c], d = f.object, f.render = !1, !d.visible || (d instanceof THREE.Mesh || d instanceof THREE.ParticleSystem) && d.frustumCulled && !a.contains(d) || (d._modelViewMatrix.multiply(h.matrixWorldInverse, d.matrixWorld), f.render = !0);
            var E;
            for (c = 0, u = m.length; u > c; c++) f = m[c], !f.render || (d = f.object, f = f.buffer, d instanceof THREE.ParticleSystem && !d.customDepthMaterial) || ((E = d.material instanceof THREE.MeshFaceMaterial ? d.material.materials[0] : d.material) && t.setMaterialFaces(d.material), p = 0 < d.geometry.morphTargets.length && E.morphTargets, E = d instanceof THREE.SkinnedMesh && E.skinning, p = d.customDepthMaterial ? d.customDepthMaterial : E ? p ? o : n : p ? r : i, f instanceof THREE.BufferGeometry ? t.renderBufferDirect(h, l.__lights, null, p, f, d) : t.renderBuffer(h, l.__lights, null, p, f, d));
            for (m = l.__webglObjectsImmediate, c = 0, u = m.length; u > c; c++) f = m[c], d = f.object, d.visible && (d._modelViewMatrix.multiply(h.matrixWorldInverse, d.matrixWorld), t.renderImmediateObject(h, l.__lights, null, i, d));
            c = t.getClearColor(), u = t.getClearAlpha(), e.clearColor(c.r, c.g, c.b, u), e.enable(e.BLEND)
        }
    }, THREE.ShaderFlares = {
        lensFlareVertexTexture: {
            vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
            fragmentShader: "precision mediump float;\nuniform sampler2D map;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
        },
        lensFlare: {
            vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
            fragmentShader: "precision mediump float;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
        }
    }, THREE.ShaderSprite = {
        sprite: {
            vertexShader: "uniform int useScreenCoordinates;\nuniform int sizeAttenuation;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
            fragmentShader: "precision mediump float;\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"
        }
    },
    function (e) {
        var t, i = e.fn.jquery.split(".");
        for (t in i) i[t] = parseInt(i[t]);
        if (!e.browser && (1 < i[0] || 9 <= i[1])) {
            if (i = {
                    browser: void 0,
                    version: void 0,
                    mobile: !1
                }, navigator && navigator.userAgent && (i.ua = navigator.userAgent, i.webkit = /WebKit/i.test(i.ua), i.browserArray = "MSIE Chrome Opera Kindle Silk BlackBerry PlayBook Android Safari Mozilla Nokia".split(" "), /Sony[^ ]*/i.test(i.ua) ? i.mobile = "Sony" : /RIM Tablet/i.test(i.ua) ? i.mobile = "RIM Tablet" : /BlackBerry/i.test(i.ua) ? i.mobile = "BlackBerry" : /iPhone/i.test(i.ua) ? i.mobile = "iPhone" : /iPad/i.test(i.ua) ? i.mobile = "iPad" : /iPod/i.test(i.ua) ? i.mobile = "iPod" : /Opera Mini/i.test(i.ua) ? i.mobile = "Opera Mini" : /IEMobile/i.test(i.ua) ? i.mobile = "IEMobile" : /BB[0-9]{1,}; Touch/i.test(i.ua) ? i.mobile = "BlackBerry" : /Nokia/i.test(i.ua) ? i.mobile = "Nokia" : /Android/i.test(i.ua) && (i.mobile = "Android"), /MSIE|Trident/i.test(i.ua) ? (i.browser = "MSIE", i.version = /MSIE/i.test(navigator.userAgent) && 0 < parseFloat(i.ua.split("MSIE")[1].match(/[0-9\.]{1,}/)[0]) ? parseFloat(i.ua.split("MSIE")[1].match(/[0-9\.]{1,}/)[0]) : "Edge", /Trident/i.test(i.ua) && /rv:([0-9]{1,}[\.0-9]{0,})/.test(i.ua) && (i.version = parseFloat(i.ua.match(/rv:([0-9]{1,}[\.0-9]{0,})/)[1].match(/[0-9\.]{1,}/)[0]))) : /Chrome/.test(i.ua) ? (i.browser = "Chrome", i.version = parseFloat(i.ua.split("Chrome/")[1].split("Safari")[0].match(/[0-9\.]{1,}/)[0])) : /Opera/.test(i.ua) ? (i.browser = "Opera", i.version = parseFloat(i.ua.split("Version/")[1].match(/[0-9\.]{1,}/)[0])) : /Kindle|Silk|KFTT|KFOT|KFJWA|KFJWI|KFSOWI|KFTHWA|KFTHWI|KFAPWA|KFAPWI/i.test(i.ua) ? (i.mobile = "Kindle", /Silk/i.test(i.ua) ? (i.browser = "Silk", i.version = parseFloat(i.ua.split("Silk/")[1].split("Safari")[0].match(/[0-9\.]{1,}/)[0])) : /Kindle/i.test(i.ua) && /Version/i.test(i.ua) && (i.browser = "Kindle", i.version = parseFloat(i.ua.split("Version/")[1].split("Safari")[0].match(/[0-9\.]{1,}/)[0]))) : /BlackBerry/.test(i.ua) ? (i.browser = "BlackBerry", i.version = parseFloat(i.ua.split("/")[1].match(/[0-9\.]{1,}/)[0])) : /PlayBook/.test(i.ua) ? (i.browser = "PlayBook", i.version = parseFloat(i.ua.split("Version/")[1].split("Safari")[0].match(/[0-9\.]{1,}/)[0])) : /BB[0-9]{1,}; Touch/.test(i.ua) ? (i.browser = "Blackberry", i.version = parseFloat(i.ua.split("Version/")[1].split("Safari")[0].match(/[0-9\.]{1,}/)[0])) : /Android/.test(i.ua) ? (i.browser = "Android", i.version = parseFloat(i.ua.split("Version/")[1].split("Safari")[0].match(/[0-9\.]{1,}/)[0])) : /Safari/.test(i.ua) ? (i.browser = "Safari", i.version = parseFloat(i.ua.split("Version/")[1].split("Safari")[0].match(/[0-9\.]{1,}/)[0])) : /Firefox/.test(i.ua) ? (i.browser = "Mozilla", i.version = parseFloat(i.ua.split("Firefox/")[1].match(/[0-9\.]{1,}/)[0])) : /Nokia/.test(i.ua) && (i.browser = "Nokia", i.version = parseFloat(i.ua.split("Browser")[1].match(/[0-9\.]{1,}/)[0]))), i.browser)
                for (var r in i.browserArray) i[i.browserArray[r].toLowerCase()] = i.browser == i.browserArray[r];
            e.extend(!0, e.browser = {}, i)
        }
    }(jQuery), ! function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
    }(this, function () {
        "use strict";
        var e = function () {};
        e.version = "2.0.2", e.Controller = function (i) {
            var n, o, a = "ScrollMagic.Controller",
                s = {
                    f: "FORWARD",
                    r: "REVERSE",
                    p: "PAUSED"
                },
                l = t.defaults,
                h = this,
                c = r.extend({}, l, i),
                u = [],
                f = !1,
                p = 0,
                d = s.p,
                m = !0,
                E = 0,
                g = !0,
                v = function () {
                    for (var e in c) l.hasOwnProperty(e) || delete c[e];
                    if (c.container = r.get.elements(c.container)[0], !c.container) throw a + " init failed.";
                    m = c.container === window || c.container === document.body || !document.body.contains(c.container), m && (c.container = window), E = c.vertical ? r.get.height(c.container) : r.get.width(c.container), c.container.addEventListener("resize", b), c.container.addEventListener("scroll", b), c.refreshInterval = parseInt(c.refreshInterval) || l.refreshInterval, T()
                },
                T = function () {
                    c.refreshInterval > 0 && (o = window.setTimeout(w, c.refreshInterval))
                },
                y = function () {
                    return c.vertical ? r.get.scrollTop(c.container) : r.get.scrollLeft(c.container)
                },
                _ = function (e) {
                    c.vertical ? m ? window.scrollTo(r.get.scrollLeft(), e) : c.container.scrollTop = e : m ? window.scrollTo(e, r.get.scrollTop()) : c.container.scrollLeft = e
                },
                R = function () {
                    if (g && f) {
                        p = h.scrollPos();
                        var e = r.type.Array(f) ? f : u.slice(0);
                        d === s.r && e.reverse(), e.forEach(function (e) {
                            e.update(!0)
                        }), 0 === e.length && c.loglevel >= 3, f = !1
                    }
                },
                x = function () {
                    n = r.rAF(R)
                },
                b = function (e) {
                    if ("resize" == e.type) E = c.vertical ? r.get.height(c.container) : r.get.width(c.container), d = s.p;
                    else {
                        var t = p;
                        p = h.scrollPos();
                        var i = p - t;
                        0 !== i && (d = i > 0 ? s.f : s.r)
                    }
                    f || (f = !0, x())
                },
                w = function () {
                    if (!m && E != (c.vertical ? r.get.height(c.container) : r.get.width(c.container))) {
                        var e;
                        try {
                            e = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (t) {
                            e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                        }
                        c.container.dispatchEvent(e)
                    }
                    u.forEach(function (e) {
                        e.refresh()
                    }), T()
                };
            this._options = c;
            var H = function (e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return t.sort(function (e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            };
            return this.addScene = function (t) {
                if (r.type.Array(t)) t.forEach(function (e) {
                    h.addScene(e)
                });
                else if (t instanceof e.Scene)
                    if (t.controller() !== h) t.addTo(h);
                    else if (u.indexOf(t) < 0) {
                    u.push(t), u = H(u), t.on("shift.controller_sort", function () {
                        u = H(u)
                    });
                    for (var i in c.globalSceneOptions) t[i] && t[i].call(t, c.globalSceneOptions[i])
                }
                return h
            }, this.removeScene = function (e) {
                if (r.type.Array(e)) e.forEach(function (e) {
                    h.removeScene(e)
                });
                else {
                    var t = u.indexOf(e);
                    t > -1 && (e.off("shift.controller_sort"), u.splice(t, 1), e.remove())
                }
                return h
            }, this.updateScene = function (t, i) {
                return r.type.Array(t) ? t.forEach(function (e) {
                    h.updateScene(e, i)
                }) : i ? t.update(!0) : f !== !0 && t instanceof e.Scene && (f = f || [], -1 == f.indexOf(t) && f.push(t), f = H(f), x()), h
            }, this.update = function (e) {
                return b({
                    type: "resize"
                }), e && R(), h
            }, this.scrollTo = function (t) {
                if (r.type.Number(t)) _.call(c.container, t);
                else if (t instanceof e.Scene) t.controller() === h ? h.scrollTo(t.scrollOffset()) : log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t);
                else if (r.type.Function(t)) _ = t;
                else {
                    var i = r.get.elements(t)[0];
                    if (i) {
                        var n = c.vertical ? "top" : "left",
                            o = r.get.offset(c.container),
                            a = r.get.offset(i);
                        m || (o[n] -= h.scrollPos()), h.scrollTo(a[n] - o[n])
                    } else log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", t)
                }
                return h
            }, this.scrollPos = function (e) {
                return arguments.length ? (r.type.Function(e) && (y = e), h) : y.call(h)
            }, this.info = function (e) {
                var t = {
                    size: E,
                    vertical: c.vertical,
                    scrollPos: p,
                    scrollDirection: d,
                    container: c.container,
                    isDocument: m
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
            }, this.loglevel = function (e) {
                return arguments.length ? (c.loglevel != e && (c.loglevel = e), h) : c.loglevel
            }, this.enabled = function (e) {
                return arguments.length ? (g != e && (g = !!e, h.updateScene(u, !0)), h) : g
            }, this.destroy = function (e) {
                window.clearTimeout(o);
                for (var t = u.length; t--;) u[t].destroy(e);
                return c.container.removeEventListener("resize", b),
                    c.container.removeEventListener("scroll", b), r.cAF(n), null
            }, v(), h
        };
        var t = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        e.Controller.addOption = function (e, i) {
            t.defaults[e] = i
        }, e.Controller.extend = function (t) {
            var i = this;
            e.Controller = function () {
                return i.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
            }, r.extend(e.Controller, i), e.Controller.prototype = i.prototype, e.Controller.prototype.constructor = e.Controller
        }, e.Scene = function (t) {
            var n, o, a = "data-scrollmagic-pin-spacer",
                s = i.defaults,
                l = this,
                h = r.extend({}, s, t),
                c = "BEFORE",
                u = 0,
                f = {
                    start: 0,
                    end: 0
                },
                p = 0,
                d = !0,
                m = function () {
                    for (var e in h) s.hasOwnProperty(e) || delete h[e];
                    for (var t in s) x(t);
                    _(), l.on("change.internal", function (e) {
                        "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? v() : "reverse" === e.what && l.update())
                    }).on("shift.internal", function () {
                        E(), l.update()
                    })
                };
            this.addTo = function (t) {
                return t instanceof e.Controller && o != t && (o && o.removeScene(l), o = t, _(), g(!0), v(!0), E(), o.info("container").addEventListener("resize", T), t.addScene(l), l.trigger("add", {
                    controller: o
                }), l.update()), l
            }, this.enabled = function (e) {
                return arguments.length ? (d != e && (d = !!e, l.update(!0)), l) : d
            }, this.remove = function () {
                if (o) {
                    o.info("container").removeEventListener("resize", T);
                    var e = o;
                    o = void 0, e.removeScene(l), l.trigger("remove")
                }
                return l
            }, this.destroy = function (e) {
                return l.trigger("destroy", {
                    reset: e
                }), l.remove(), l.off("*.*"), null
            }, this.update = function (e) {
                if (o)
                    if (e)
                        if (o.enabled() && d) {
                            var t, i = o.info("scrollPos");
                            t = h.duration > 0 ? (i - f.start) / (f.end - f.start) : i >= f.start ? 1 : 0, l.trigger("update", {
                                startPos: f.start,
                                endPos: f.end,
                                scrollPos: i
                            }), l.progress(t)
                        } else w && "DURING" === c && S(!0);
                else o.updateScene(l, !1);
                return l
            }, this.refresh = function () {
                return g(), v(), l
            }, this.progress = function (e) {
                if (arguments.length) {
                    var t = !1,
                        i = c,
                        r = o ? o.info("scrollDirection") : "PAUSED",
                        n = h.reverse || e >= u;
                    if (0 === h.duration ? (t = u != e, u = 1 > e && n ? 0 : 1, c = 0 === u ? "BEFORE" : "DURING") : 0 >= e && "BEFORE" !== c && n ? (u = 0, c = "BEFORE", t = !0) : e > 0 && 1 > e && n ? (u = e, c = "DURING", t = !0) : e >= 1 && "AFTER" !== c ? (u = 1, c = "AFTER", t = !0) : "DURING" !== c || n || S(), t) {
                        var a = {
                                progress: u,
                                state: c,
                                scrollDirection: r
                            },
                            s = c != i,
                            f = function (e) {
                                l.trigger(e, a)
                            };
                        s && "DURING" !== i && (f("enter"), f("BEFORE" === i ? "start" : "end")), f("progress"), s && "DURING" !== c && (f("BEFORE" === c ? "start" : "end"), f("leave"))
                    }
                    return l
                }
                return u
            };
            var E = function () {
                    f = {
                        start: p + h.offset
                    }, o && h.triggerElement && (f.start -= o.info("size") * h.triggerHook), f.end = f.start + h.duration
                },
                g = function (e) {
                    if (n) {
                        var t = "duration";
                        R(t, n.call(l)) && !e && (l.trigger("change", {
                            what: t,
                            newval: h[t]
                        }), l.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                v = function (e) {
                    var t = 0,
                        i = h.triggerElement;
                    if (o && i) {
                        for (var n = o.info(), s = r.get.offset(n.container), c = n.vertical ? "top" : "left"; i.parentNode.hasAttribute(a);) i = i.parentNode;
                        var u = r.get.offset(i);
                        n.isDocument || (s[c] -= o.scrollPos()), t = u[c] - s[c]
                    }
                    var f = t != p;
                    p = t, f && !e && l.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                T = function () {
                    h.triggerHook > 0 && l.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                y = r.extend(i.validate, {
                    duration: function (e) {
                        if (r.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function () {
                                return o ? o.info("size") * t : 0
                            }
                        }
                        if (r.type.Function(e)) {
                            n = e;
                            try {
                                e = parseFloat(n())
                            } catch (i) {
                                e = -1
                            }
                        }
                        if (e = parseFloat(e), !r.type.Number(e) || 0 > e) throw n ? (n = void 0, 0) : 0;
                        return e
                    }
                }),
                _ = function (e) {
                    e = arguments.length ? [e] : Object.keys(y), e.forEach(function (e) {
                        var t;
                        if (y[e]) try {
                            t = y[e](h[e])
                        } catch (i) {
                            t = s[e]
                        } finally {
                            h[e] = t
                        }
                    })
                },
                R = function (e, t) {
                    var i = !1,
                        r = h[e];
                    return h[e] != t && (h[e] = t, _(e), i = r != h[e]), i
                },
                x = function (e) {
                    l[e] || (l[e] = function (t) {
                        return arguments.length ? ("duration" === e && (n = void 0), R(e, t) && (l.trigger("change", {
                            what: e,
                            newval: h[e]
                        }), i.shifts.indexOf(e) > -1 && l.trigger("shift", {
                            reason: e
                        })), l) : h[e]
                    })
                };
            this.controller = function () {
                return o
            }, this.state = function () {
                return c
            }, this.scrollOffset = function () {
                return f.start
            }, this.triggerPosition = function () {
                var e = h.offset;
                return o && (e += h.triggerElement ? p : o.info("size") * l.triggerHook()), e
            };
            var b = {};
            this.on = function (e, t) {
                return r.type.Function(t) && (e = e.trim().split(" "), e.forEach(function (e) {
                    var i = e.split("."),
                        r = i[0],
                        n = i[1];
                    "*" != r && (b[r] || (b[r] = []), b[r].push({
                        namespace: n || "",
                        callback: t
                    }))
                })), l
            }, this.off = function (e, t) {
                return e ? (e = e.trim().split(" "), e.forEach(function (e) {
                    var i = e.split("."),
                        r = i[0],
                        n = i[1] || "",
                        o = "*" === r ? Object.keys(b) : [r];
                    o.forEach(function (e) {
                        for (var i = b[e] || [], r = i.length; r--;) {
                            var o = i[r];
                            !o || n !== o.namespace && "*" !== n || t && t != o.callback || i.splice(r, 1)
                        }
                        i.length || delete b[e]
                    })
                }), l) : l
            }, this.trigger = function (t, i) {
                if (t) {
                    var r = t.trim().split("."),
                        n = r[0],
                        o = r[1],
                        a = b[n];
                    a && a.forEach(function (t) {
                        o && o !== t.namespace || t.callback.call(l, new e.Event(n, t.namespace, l, i))
                    })
                }
                return l
            };
            var w, H;
            l.on("shift.internal", function (e) {
                var t = "duration" === e.reason;
                ("AFTER" === c && t || "DURING" === c && 0 === h.duration) && S(), t && M()
            }).on("progress.internal", function () {
                S()
            }).on("add.internal", function () {
                M()
            }).on("destroy.internal", function (e) {
                l.removePin(e.reset)
            });
            var S = function (e) {
                    if (w && o) {
                        var t = o.info();
                        if (e || "DURING" !== c) {
                            var i = {
                                    position: H.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                n = r.css(w, "position") != i.position;
                            H.pushFollowers ? h.duration > 0 && ("AFTER" === c && 0 === parseFloat(r.css(H.spacer, "padding-top")) ? n = !0 : "BEFORE" === c && 0 === parseFloat(r.css(H.spacer, "padding-bottom")) && (n = !0)) : i[t.vertical ? "top" : "left"] = h.duration * u, r.css(w, i), n && M()
                        } else {
                            "fixed" != r.css(w, "position") && (r.css(w, {
                                position: "fixed"
                            }), M());
                            var a = r.get.offset(H.spacer, !0),
                                s = h.reverse || 0 === h.duration ? t.scrollPos - f.start : Math.round(u * h.duration * 10) / 10;
                            a[t.vertical ? "top" : "left"] += s, r.css(w, {
                                top: a.top,
                                left: a.left
                            })
                        }
                    }
                },
                M = function () {
                    if (w && o && H.inFlow) {
                        var e = "DURING" === c,
                            t = o.info("vertical"),
                            i = H.spacer.children[0],
                            n = r.isMarginCollapseType(r.css(H.spacer, "display")),
                            a = {};
                        H.relSize.width || H.relSize.autoFullWidth ? e ? r.css(w, {
                            width: r.get.width(H.spacer)
                        }) : r.css(w, {
                            width: "100%"
                        }) : (a["min-width"] = r.get.width(t ? w : i, !0, !0), a.width = e ? a["min-width"] : "auto"), H.relSize.height ? e ? r.css(w, {
                            height: r.get.height(H.spacer) - h.duration
                        }) : r.css(w, {
                            height: "100%"
                        }) : (a["min-height"] = r.get.height(t ? i : w, !0, !n), a.height = e ? a["min-height"] : "auto"), H.pushFollowers && (a["padding" + (t ? "Top" : "Left")] = h.duration * u, a["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - u)), r.css(H.spacer, a)
                    }
                },
                C = function () {
                    o && w && "DURING" === c && !o.info("isDocument") && S()
                },
                A = function () {
                    o && w && "DURING" === c && ((H.relSize.width || H.relSize.autoFullWidth) && r.get.width(window) != r.get.width(H.spacer.parentNode) || H.relSize.height && r.get.height(window) != r.get.height(H.spacer.parentNode)) && M()
                },
                P = function (e) {
                    o && w && "DURING" === c && !o.info("isDocument") && (e.preventDefault(), o.scrollTo(o.info("scrollPos") - (e[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"] / 3 || 30 * -e.detail)))
                };
            this.setPin = function (e, t) {
                var i = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (t = r.extend({}, i, t), e = r.get.elements(e)[0], !e) return l;
                if ("fixed" === r.css(e, "position")) return l;
                if (w) {
                    if (w === e) return l;
                    l.removePin()
                }
                w = e;
                var n = w.parentNode.style.display,
                    o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                w.parentNode.style.display = "none";
                var s = "absolute" != r.css(w, "position"),
                    h = r.css(w, o.concat(["display"])),
                    c = r.css(w, ["width", "height"]);
                w.parentNode.style.display = n, !s && t.pushFollowers && (t.pushFollowers = !1);
                var u = w.parentNode.insertBefore(document.createElement("div"), w),
                    f = r.extend(h, {
                        position: s ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (s || r.extend(f, r.css(w, ["width", "height"])), r.css(u, f), u.setAttribute(a, ""), r.addClass(u, t.spacerClass), H = {
                        spacer: u,
                        relSize: {
                            width: "%" === c.width.slice(-1),
                            height: "%" === c.height.slice(-1),
                            autoFullWidth: "auto" === c.width && s && r.isMarginCollapseType(h.display)
                        },
                        pushFollowers: t.pushFollowers,
                        inFlow: s
                    }, !w.___origStyle) {
                    w.___origStyle = {};
                    var p = w.style,
                        d = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    d.forEach(function (e) {
                        w.___origStyle[e] = p[e] || ""
                    })
                }
                return H.relSize.width && r.css(u, {
                    width: c.width
                }), H.relSize.height && r.css(u, {
                    height: c.height
                }), u.appendChild(w), r.css(w, {
                    position: s ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (H.relSize.width || H.relSize.autoFullWidth) && r.css(w, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", C), window.addEventListener("resize", C), window.addEventListener("resize", A), w.addEventListener("mousewheel", P), w.addEventListener("DOMMouseScroll", P), S(), l
            }, this.removePin = function (e) {
                if (w) {
                    if ("DURING" === c && S(!0), e || !o) {
                        var t = H.spacer.children[0];
                        if (t.hasAttribute(a)) {
                            var i = H.spacer.style,
                                n = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, n.forEach(function (e) {
                                margins[e] = i[e] || ""
                            }), r.css(t, margins)
                        }
                        H.spacer.parentNode.insertBefore(t, H.spacer), H.spacer.parentNode.removeChild(H.spacer), w.parentNode.hasAttribute(a) || (r.css(w, w.___origStyle), delete w.___origStyle)
                    }
                    window.removeEventListener("scroll", C), window.removeEventListener("resize", C), window.removeEventListener("resize", A), w.removeEventListener("mousewheel", P), w.removeEventListener("DOMMouseScroll", P), w = void 0
                }
                return l
            };
            var L, F = [];
            return l.on("destroy.internal", function (e) {
                l.removeClassToggle(e.reset)
            }), this.setClassToggle = function (e, t) {
                var i = r.get.elements(e);
                return 0 !== i.length && r.type.String(t) ? (F.length > 0 && l.removeClassToggle(), L = t, F = i, l.on("enter.internal_class leave.internal_class", function (e) {
                    var t = "enter" === e.type ? r.addClass : r.removeClass;
                    F.forEach(function (e) {
                        t(e, L)
                    })
                }), l) : l
            }, this.removeClassToggle = function (e) {
                return e && F.forEach(function (e) {
                    r.removeClass(e, L)
                }), l.off("start.internal_class end.internal_class"), L = void 0, F = [], l
            }, m(), l
        };
        var i = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function (e) {
                    if (e = parseFloat(e), !r.type.Number(e)) throw 0;
                    return e
                },
                triggerElement: function (e) {
                    if (e = e || void 0) {
                        var t = r.get.elements(e)[0];
                        if (!t) throw 0;
                        e = t
                    }
                    return e
                },
                triggerHook: function (e) {
                    var t = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (r.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw 0;
                        e = t[e]
                    }
                    return e
                },
                reverse: function (e) {
                    return !!e
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        e.Scene.addOption = function (e, t, r, n) {
            e in i.defaults || (i.defaults[e] = t, i.validate[e] = r, n && i.shifts.push(e))
        }, e.Scene.extend = function (t) {
            var i = this;
            e.Scene = function () {
                return i.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
            }, r.extend(e.Scene, i), e.Scene.prototype = i.prototype, e.Scene.prototype.constructor = e.Scene
        }, e.Event = function (e, t, i, r) {
            r = r || {};
            for (var n in r) this[n] = r[n];
            return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var r = e._util = function (e) {
            var t, i = {},
                r = function (e) {
                    return parseFloat(e) || 0
                },
                n = function (t) {
                    return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
                },
                o = function (t, i, o, a) {
                    if (i = i === document ? e : i, i === e) a = !1;
                    else if (!u.DomElement(i)) return 0;
                    t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                    var s = (o ? i["offset" + t] || i["outer" + t] : i["client" + t] || i["inner" + t]) || 0;
                    if (o && a) {
                        var l = n(i);
                        s += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                    }
                    return s
                },
                a = function (e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
                        return e[1].toUpperCase()
                    })
                };
            i.extend = function (e) {
                for (e = e || {}, t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
                return e
            }, i.isMarginCollapseType = function (e) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
            };
            var s = 0,
                l = ["ms", "moz", "webkit", "o"],
                h = e.requestAnimationFrame,
                c = e.cancelAnimationFrame;
            for (t = 0; !h && t < l.length; ++t) h = e[l[t] + "RequestAnimationFrame"], c = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
            h || (h = function (t) {
                var i = (new Date).getTime(),
                    r = Math.max(0, 16 - (i - s)),
                    n = e.setTimeout(function () {
                        t(i + r)
                    }, r);
                return s = i + r, n
            }), c || (c = function (t) {
                e.clearTimeout(t)
            }), i.rAF = h.bind(e), i.cAF = c.bind(e);
            var u = i.type = function (e) {
                return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            u.String = function (e) {
                return "string" === u(e)
            }, u.Function = function (e) {
                return "function" === u(e)
            }, u.Array = function (e) {
                return Array.isArray(e)
            }, u.Number = function (e) {
                return !u.Array(e) && e - parseFloat(e) + 1 >= 0
            }, u.DomElement = function (e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            };
            var f = i.get = {};
            return f.elements = function (t) {
                var i = [];
                if (u.String(t)) try {
                    t = document.querySelectorAll(t)
                } catch (r) {
                    return i
                }
                if ("nodelist" === u(t) || u.Array(t))
                    for (var n = 0, o = i.length = t.length; o > n; n++) {
                        var a = t[n];
                        i[n] = u.DomElement(a) ? a : f.elements(a)
                    } else(u.DomElement(t) || t === document || t === e) && (i = [t]);
                return i
            }, f.scrollTop = function (t) {
                return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
            }, f.scrollLeft = function (t) {
                return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
            }, f.width = function (e, t, i) {
                return o("width", e, t, i)
            }, f.height = function (e, t, i) {
                return o("height", e, t, i)
            }, f.offset = function (e, t) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (e && e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    i.top = r.top, i.left = r.left, t || (i.top += f.scrollTop(), i.left += f.scrollLeft())
                }
                return i
            }, i.addClass = function (e, t) {
                t && (e.classList ? e.classList.add(t) : e.className += " " + t)
            }, i.removeClass = function (e, t) {
                t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function (e, t) {
                if (u.String(t)) return n(e)[a(t)];
                if (u.Array(t)) {
                    var i = {},
                        r = n(e);
                    return t.forEach(function (e) {
                        i[e] = r[a(e)]
                    }), i
                }
                for (var o in t) {
                    var s = t[o];
                    s == parseFloat(s) && (s += "px"), e.style[a(o)] = s
                }
            }, i
        }(window || {});
        return e
    }), ! function (e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
    }(this, function (e, t, i) {
        "use strict";
        e.Scene.addOption("tweenChanges", !1, function (e) {
            return !!e
        }), e.Scene.extend(function () {
            var e, r = this;
            r.on("progress.plugin_gsap", function () {
                n()
            }), r.on("destroy.plugin_gsap", function (e) {
                r.removeTween(e.reset)
            });
            var n = function () {
                if (e) {
                    var t = r.progress(),
                        i = r.state();
                    e.repeat && -1 === e.repeat() ? "DURING" === i && e.paused() ? e.play() : "DURING" === i || e.paused() || e.pause() : t != e.progress() && (0 === r.duration() ? t > 0 ? e.play() : e.reverse() : r.tweenChanges() && e.tweenTo ? e.tweenTo(t * e.duration()) : e.progress(t).pause())
                }
            };
            r.setTween = function (o, a, s) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (s = a, a = 1), o = t.to(o, a, s));
                try {
                    l = i ? new i({
                        smoothChildTiming: !0
                    }).add(o) : o, l.pause()
                } catch (h) {
                    return r
                }
                return e && r.removeTween(), e = l, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), n(), r
            }, r.removeTween = function (t) {
                return e && (t && e.progress(0).pause(), e.kill(), e = void 0), r
            }
        })
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, i) {
                var r = function (e) {
                        var t, i = [],
                            r = e.length;
                        for (t = 0; t !== r; i.push(e[t++]));
                        return i
                    },
                    n = function (e, t, i) {
                        var r, n, o = e.cycle;
                        for (r in o) n = o[r], e[r] = "function" == typeof n ? n.call(t[i], i) : n[i % n.length];
                        delete e.cycle
                    },
                    o = function (e, t, r) {
                        i.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
                    },
                    a = 1e-10,
                    s = i._internals,
                    l = s.isSelector,
                    h = s.isArray,
                    c = o.prototype = i.to({}, .1, {}),
                    u = [];
                o.version = "1.18.2", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, c.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function (e, t) {
                    var r, n = this.ratio,
                        o = this.vars.immediateRender || e.immediateRender;
                    t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (r in e) this.vars[r] = e[r];
                    if (this._initted || o)
                        if (t) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || o)
                        for (var s, l = 1 / (1 - n), h = this._firstPT; h;) s = h.s + h.c, h.c *= l, h.s = s - h.c, h = h._next;
                    return this
                }, c.render = function (e, t, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, n, o, l, h, c, u, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        E = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (e >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > v || 0 >= e && e >= -1e-7 || v === a && "isPause" !== this.data) && v !== e && (i = !0, v > a && (n = "onReverseComplete")), this._rawPrevTime = f = !t || e || v === e ? e : a)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (n = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !t || e || v === e ? e : a)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, c = this._easeType, u = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), 1 === c ? this.ratio = 1 - h : 2 === c ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), d === this._time && !i && E === this._cycle) return void(m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = E, s.lazyTweens.push(this), void(this._lazy = [e, t]);
                        this._time && !r ? this.ratio = this._ease.getRatio(this._time / g) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && e >= 0 && (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== E && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === g && this._rawPrevTime === a && f !== a && (this._rawPrevTime = 0))
                }, o.to = function (e, t, i) {
                    return new o(e, t, i)
                }, o.from = function (e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(e, t, i)
                }, o.fromTo = function (e, t, i, r) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new o(e, t, r)
                }, o.staggerTo = o.allTo = function (e, t, a, s, c, f, p) {
                    s = s || 0;
                    var d, m, E, g, v = 0,
                        T = [],
                        y = function () {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), c.apply(p || a.callbackScope || this, f || u)
                        },
                        _ = a.cycle,
                        R = a.startAt && a.startAt.cycle;
                    for (h(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e))), e = e || [], 0 > s && (e = r(e), e.reverse(), s *= -1), d = e.length - 1, E = 0; d >= E; E++) {
                        m = {};
                        for (g in a) m[g] = a[g];
                        if (_ && n(m, e, E), R) {
                            R = m.startAt = {};
                            for (g in a.startAt) R[g] = a.startAt[g];
                            n(m.startAt, e, E)
                        }
                        m.delay = v + (m.delay || 0), E === d && c && (m.onComplete = y), T[E] = new o(e[E], t, m), v += s
                    }
                    return T
                }, o.staggerFrom = o.allFrom = function (e, t, i, r, n, a, s) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(e, t, i, r, n, a, s)
                }, o.staggerFromTo = o.allFromTo = function (e, t, i, r, n, a, s, l) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, o.staggerTo(e, t, r, n, a, s, l)
                }, o.delayedCall = function (e, t, i, r, n) {
                    return new o(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: r,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, o.set = function (e, t) {
                    return new o(e, 0, t)
                }, o.isTweening = function (e) {
                    return i.getTweensOf(e, !0).length > 0
                };
                var f = function (e, t) {
                        for (var r = [], n = 0, o = e._first; o;) o instanceof i ? r[n++] = o : (t && (r[n++] = o), r = r.concat(f(o, t)), n = r.length), o = o._next;
                        return r
                    },
                    p = o.getAllTweens = function (t) {
                        return f(e._rootTimeline, t).concat(f(e._rootFramesTimeline, t))
                    };
                o.killAll = function (e, i, r, n) {
                    null == i && (i = !0), null == r && (r = !0);
                    var o, a, s, l = p(0 != n),
                        h = l.length,
                        c = i && r && n;
                    for (s = 0; h > s; s++) a = l[s], (c || a instanceof t || (o = a.target === a.vars.onComplete) && r || i && !o) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, o.killChildTweensOf = function (e, t) {
                    if (null != e) {
                        var n, a, c, u, f, p = s.tweenLookup;
                        if ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = r(e)), h(e))
                            for (u = e.length; --u > -1;) o.killChildTweensOf(e[u], t);
                        else {
                            n = [];
                            for (c in p)
                                for (a = p[c].target.parentNode; a;) a === e && (n = n.concat(p[c].tweens)), a = a.parentNode;
                            for (f = n.length, u = 0; f > u; u++) t && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                        }
                    }
                };
                var d = function (e, i, r, n) {
                    i = i !== !1, r = r !== !1, n = n !== !1;
                    for (var o, a, s = p(n), l = i && r && n, h = s.length; --h > -1;) a = s[h], (l || a instanceof t || (o = a.target === a.vars.onComplete) && r || i && !o) && a.paused(e)
                };
                return o.pauseAll = function (e, t, i) {
                    d(!0, e, t, i)
                }, o.resumeAll = function (e, t, i) {
                    d(!1, e, t, i)
                }, o.globalTimeScale = function (t) {
                    var r = e._rootTimeline,
                        n = i.ticker.time;
                    return arguments.length ? (t = t || a, r._startTime = n - (n - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, n = i.ticker.frame, r._startTime = n - (n - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
                }, c.progress = function (e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, c.totalProgress = function (e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, c.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, c.duration = function (t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, c.totalDuration = function (e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function (e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function (e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function (e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, o
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, i) {
                var r = function (e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, r, n = this.vars;
                        for (r in n) i = n[r], l(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
                        l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                    },
                    n = 1e-10,
                    o = i._internals,
                    a = r._internals = {},
                    s = o.isSelector,
                    l = o.isArray,
                    h = o.lazyTweens,
                    c = o.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    f = function (e) {
                        var t, i = {};
                        for (t in e) i[t] = e[t];
                        return i
                    },
                    p = function (e, t, i) {
                        var r, n, o = e.cycle;
                        for (r in o) n = o[r], e[r] = "function" == typeof n ? n.call(t[i], i) : n[i % n.length];
                        delete e.cycle
                    },
                    d = a.pauseCallback = function () {},
                    m = function (e) {
                        var t, i = [],
                            r = e.length;
                        for (t = 0; t !== r; i.push(e[t++]));
                        return i
                    },
                    E = r.prototype = new t;
                return r.version = "1.18.2", E.constructor = r, E.kill()._gc = E._forcingPlayhead = E._hasPause = !1, E.to = function (e, t, r, n) {
                    var o = r.repeat && u.TweenMax || i;
                    return t ? this.add(new o(e, t, r), n) : this.set(e, r, n)
                }, E.from = function (e, t, r, n) {
                    return this.add((r.repeat && u.TweenMax || i).from(e, t, r), n)
                }, E.fromTo = function (e, t, r, n, o) {
                    var a = n.repeat && u.TweenMax || i;
                    return t ? this.add(a.fromTo(e, t, r, n), o) : this.set(e, n, o)
                }, E.staggerTo = function (e, t, n, o, a, l, h, c) {
                    var u, d, E = new r({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = n.cycle;
                    for ("string" == typeof e && (e = i.selector(e) || e), e = e || [], s(e) && (e = m(e)), o = o || 0, 0 > o && (e = m(e), e.reverse(), o *= -1), d = 0; d < e.length; d++) u = f(n), u.startAt && (u.startAt = f(u.startAt), u.startAt.cycle && p(u.startAt, e, d)), g && p(u, e, d), E.to(e[d], t, u, d * o);
                    return this.add(E, a)
                }, E.staggerFrom = function (e, t, i, r, n, o, a, s) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, r, n, o, a, s)
                }, E.staggerFromTo = function (e, t, i, r, n, o, a, s, l) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, r, n, o, a, s, l)
                }, E.call = function (e, t, r, n) {
                    return this.add(i.delayedCall(0, e, t, r), n)
                }, E.set = function (e, t, r) {
                    return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new i(e, 0, t), r)
                }, r.exportRoot = function (e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var n, o, a = new r(e),
                        s = a._timeline;
                    for (null == t && (t = !0), s._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = s._time, n = s._first; n;) o = n._next, t && n instanceof i && n.target === n.vars.onComplete || a.add(n, n._startTime - n._delay), n = o;
                    return s.add(a, 0), a
                }, E.add = function (n, o, a, s) {
                    var h, c, u, f, p, d;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, n)), !(n instanceof e)) {
                        if (n instanceof Array || n && n.push && l(n)) {
                            for (a = a || "normal", s = s || 0, h = o, c = n.length, u = 0; c > u; u++) l(f = n[u]) && (f = new r({
                                tweens: f
                            })), this.add(f, h), "string" != typeof f && "function" != typeof f && ("sequence" === a ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), h += s;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof n) return this.addLabel(n, o);
                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                        n = i.delayedCall(0, n)
                    }
                    if (t.prototype.add.call(this, n, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > n._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, E.remove = function (t) {
                    if (t instanceof e) {
                        this._remove(t, !1);
                        var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && l(t)) {
                        for (var r = t.length; --r > -1;) this.remove(t[r]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, E._remove = function (e, i) {
                    t.prototype._remove.call(this, e, i);
                    var r = this._last;
                    return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, E.append = function (e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, E.insert = E.insertMultiple = function (e, t, i, r) {
                    return this.add(e, t || 0, i, r)
                }, E.appendMultiple = function (e, t, i, r) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
                }, E.addLabel = function (e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, E.addPause = function (e, t, r, n) {
                    var o = i.delayedCall(0, d, r, n || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = t, o.data = "isPause", this._hasPause = !0, this.add(o, e)
                }, E.removeLabel = function (e) {
                    return delete this._labels[e], this
                }, E.getLabelTime = function (e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, E._parseTimeOrLabel = function (t, i, r, n) {
                    var o;
                    if (n instanceof e && n.timeline === this) this.remove(n);
                    else if (n && (n instanceof Array || n.push && l(n)))
                        for (o = n.length; --o > -1;) n[o] instanceof e && n[o].timeline === this && this.remove(n[o]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, r);
                    if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (o = t.indexOf("="), -1 === o) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                        i = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, r) : this.duration()
                    }
                    return Number(t) + i
                }, E.seek = function (e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, E.stop = function () {
                    return this.paused(!0)
                }, E.gotoAndPlay = function (e, t) {
                    return this.play(e, t)
                }, E.gotoAndStop = function (e, t) {
                    return this.pause(e, t)
                }, E.render = function (e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, o, a, s, l, u, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._startTime,
                        E = this._timeScale,
                        g = this._paused;
                    if (e >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (o = !0, s = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > n && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, e = p + 1e-4;
                    else if (1e-7 > e)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (s = "onReverseComplete", o = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, 0 === e && o)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (o = !1), r = r._next;
                            e = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (e >= d)
                                for (r = this._first; r && r._startTime <= e && !u;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next;
                            else
                                for (r = this._last; r && r._startTime >= e && !u;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
                            u && (this._time = e = u._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    }
                    if (this._time !== d && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && e > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (t || this._callback("onStart")), f = this._time, f >= d)
                            for (r = this._first; r && (a = r._next, f === this._time && (!this._paused || g));)(r._active || r._startTime <= f && !r._paused && !r._gc) && (u === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = a;
                        else
                            for (r = this._last; r && (a = r._prev, f === this._time && (!this._paused || g));) {
                                if (r._active || r._startTime <= d && !r._paused && !r._gc) {
                                    if (u === r) {
                                        for (u = r._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                                }
                                r = a
                            }
                        this._onUpdate && (t || (h.length && c(), this._callback("onUpdate"))), s && (this._gc || (m === this._startTime || E !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s)))
                    }
                }, E._hasPausedChild = function () {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, E.getChildren = function (e, t, r, n) {
                    n = n || -9999999999;
                    for (var o = [], a = this._first, s = 0; a;) a._startTime < n || (a instanceof i ? t !== !1 && (o[s++] = a) : (r !== !1 && (o[s++] = a), e !== !1 && (o = o.concat(a.getChildren(!0, t, r)), s = o.length))), a = a._next;
                    return o
                }, E.getTweensOf = function (e, t) {
                    var r, n, o = this._gc,
                        a = [],
                        s = 0;
                    for (o && this._enabled(!0, !0), r = i.getTweensOf(e), n = r.length; --n > -1;)(r[n].timeline === this || t && this._contains(r[n])) && (a[s++] = r[n]);
                    return o && this._enabled(!1, !0), a
                }, E.recent = function () {
                    return this._recent
                }, E._contains = function (e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, E.shiftChildren = function (e, t, i) {
                    i = i || 0;
                    for (var r, n = this._first, o = this._labels; n;) n._startTime >= i && (n._startTime += e), n = n._next;
                    if (t)
                        for (r in o) o[r] >= i && (o[r] += e);
                    return this._uncache(!0)
                }, E._kill = function (e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(e, t) && (n = !0);
                    return n
                }, E.clear = function (e) {
                    var t = this.getChildren(!1, !0, !0),
                        i = t.length;
                    for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, E.invalidate = function () {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return e.prototype.invalidate.call(this)
                }, E._enabled = function (e, i) {
                    if (e === this._gc)
                        for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
                    return t.prototype._enabled.call(this, e, i)
                }, E.totalTime = function (t, i, r) {
                    this._forcingPlayhead = !0;
                    var n = e.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, n
                }, E.duration = function (e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, E.totalDuration = function (e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, i, r = 0, n = this._last, o = 999999999999; n;) t = n._prev, n._dirty && n.totalDuration(), n._startTime > o && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : o = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), o = 0), i = n._startTime + n._totalDuration / n._timeScale, i > r && (r = i), n = t;
                            this._duration = this._totalDuration = r, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, E.paused = function (t) {
                    if (!t)
                        for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return e.prototype.paused.apply(this, arguments)
                }, E.usesFrames = function () {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, E.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, r
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, i) {
                var r = function (t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    n = 1e-10,
                    o = t._internals,
                    a = o.lazyTweens,
                    s = o.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = r.prototype = new e;
                return h.constructor = r, h.kill()._gc = !1, r.version = "1.18.2", h.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, h.addCallback = function (e, i, r, n) {
                    return this.add(t.delayedCall(0, e, r, n), i)
                }, h.removeCallback = function (e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var i = this.getTweensOf(e, !1), r = i.length, n = this._parseTimeOrLabel(t); --r > -1;) i[r]._startTime === n && i[r]._enabled(!1, !1);
                    return this
                }, h.removePause = function (t) {
                    return this.removeCallback(e._internals.pauseCallback, t)
                }, h.tweenTo = function (e, i) {
                    i = i || {};
                    var r, n, o, a = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (n in i) a[n] = i[n];
                    return a.time = this._parseTimeOrLabel(e), r = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new t(this, r, a), a.onStart = function () {
                        o.target.paused(!0), o.vars.time !== o.target.time() && r === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && o._callback("onStart")
                    }, o
                }, h.tweenFromTo = function (e, t, i) {
                    i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var r = this.tweenTo(t, i);
                    return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
                }, h.render = function (e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, o, l, h, c, u, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        E = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        T = this._timeScale,
                        y = this._rawPrevTime,
                        _ = this._paused,
                        R = this._cycle;
                    if (e >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > y || y === n) && y !== e && this._first && (c = !0, y > n && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m + 1e-4);
                    else if (1e-7 > e)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== E || 0 === m && y !== n && (y > 0 || 0 > e && y >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = o = !0, h = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : n, 0 === e && o)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (o = !1), r = r._next;
                            e = 0, this._initted || (c = !0)
                        } else if (0 === m && 0 > y && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                        if (e = this._time, e >= E)
                            for (r = this._first; r && r._startTime <= e && !f;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (f = r), r = r._next;
                        else
                            for (r = this._last; r && r._startTime >= e && !f;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (f = r), r = r._prev;
                        f && (this._time = e = f._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== R && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & R),
                            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            w = this._totalTime,
                            H = this._cycle,
                            S = this._rawPrevTime,
                            M = this._time;
                        if (this._totalTime = R * m, this._cycle < R ? x = !x : this._totalTime += m, this._time = E, this._rawPrevTime = 0 === m ? y - 1e-4 : y, this._cycle = R, this._locked = !0, E = x ? 0 : m, this.render(E, t, 0 === m), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), E !== this._time) return;
                        if (b && (E = x ? m + 1e-4 : -1e-4, this.render(E, !0, !1)), this._locked = !1, this._paused && !_) return;
                        this._time = M, this._totalTime = w, this._cycle = H, this._rawPrevTime = S
                    }
                    if (!(this._time !== E && this._first || i || c || f)) return void(g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && e > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (t || this._callback("onStart")), p = this._time, p >= E)
                        for (r = this._first; r && (l = r._next, p === this._time && (!this._paused || _));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (f === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = l;
                    else
                        for (r = this._last; r && (l = r._prev, p === this._time && (!this._paused || _));) {
                            if (r._active || r._startTime <= E && !r._paused && !r._gc) {
                                if (f === r) {
                                    for (f = r._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)
                            }
                            r = l
                        }
                    this._onUpdate && (t || (a.length && s(), this._callback("onUpdate"))), h && (this._locked || this._gc || (v === this._startTime || T !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (a.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[h] && this._callback(h)))
                }, h.getActive = function (e, t, i) {
                    null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                    var r, n, o = [],
                        a = this.getChildren(e, t, i),
                        s = 0,
                        l = a.length;
                    for (r = 0; l > r; r++) n = a[r], n.isActive() && (o[s++] = n);
                    return o
                }, h.getLabelAfter = function (e) {
                    e || 0 !== e && (e = this._time);
                    var t, i = this.getLabelsArray(),
                        r = i.length;
                    for (t = 0; r > t; t++)
                        if (i[t].time > e) return i[t].name;
                    return null
                }, h.getLabelBefore = function (e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (t[i].time < e) return t[i].name;
                    return null
                }, h.getLabelsArray = function () {
                    var e, t = [],
                        i = 0;
                    for (e in this._labels) t[i++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function (e, t) {
                        return e.time - t.time
                    }), t
                }, h.progress = function (e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, h.totalProgress = function (e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function (t) {
                    return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, h.repeat = function (e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function (e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function (e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, h.currentLabel = function (e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, r
            }, !0),
            function () {
                var e = 180 / Math.PI,
                    t = [],
                    i = [],
                    r = [],
                    n = {},
                    o = _gsScope._gsDefine.globals,
                    a = function (e, t, i, r) {
                        this.a = e, this.b = t, this.c = i, this.d = r, this.da = r - e, this.ca = i - e, this.ba = t - e
                    },
                    s = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function (e, t, i, r) {
                        var n = {
                                a: e
                            },
                            o = {},
                            a = {},
                            s = {
                                c: r
                            },
                            l = (e + t) / 2,
                            h = (t + i) / 2,
                            c = (i + r) / 2,
                            u = (l + h) / 2,
                            f = (h + c) / 2,
                            p = (f - u) / 8;
                        return n.b = l + (e - l) / 4, o.b = u + p, n.c = o.a = (n.b + o.b) / 2, o.c = a.a = (u + f) / 2, a.b = f - p, s.b = c + (r - c) / 4, a.c = s.a = (a.b + s.b) / 2, [n, o, a, s]
                    },
                    h = function (e, n, o, a, s) {
                        var h, c, u, f, p, d, m, E, g, v, T, y, _, R = e.length - 1,
                            x = 0,
                            b = e[0].a;
                        for (h = 0; R > h; h++) p = e[x], c = p.a, u = p.d, f = e[x + 1].d, s ? (T = t[h], y = i[h], _ = (y + T) * n * .25 / (a ? .5 : r[h] || .5), d = u - (u - c) * (a ? .5 * n : 0 !== T ? _ / T : 0), m = u + (f - u) * (a ? .5 * n : 0 !== y ? _ / y : 0), E = u - (d + ((m - d) * (3 * T / (T + y) + .5) / 4 || 0))) : (d = u - (u - c) * n * .5, m = u + (f - u) * n * .5, E = u - (d + m) / 2), d += E, m += E, p.c = g = d, 0 !== h ? p.b = b : p.b = b = p.a + .6 * (p.c - p.a), p.da = u - c, p.ca = g - c, p.ba = b - c, o ? (v = l(c, b, g, u), e.splice(x, 1, v[0], v[1], v[2], v[3]), x += 4) : x++, b = m;
                        p = e[x], p.b = b, p.c = b + .4 * (p.d - b), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = b - p.a, o && (v = l(p.a, b, p.c, p.d), e.splice(x, 1, v[0], v[1], v[2], v[3]))
                    },
                    c = function (e, r, n, o) {
                        var s, l, h, c, u, f, p = [];
                        if (o)
                            for (e = [o].concat(e), l = e.length; --l > -1;) "string" == typeof (f = e[l][r]) && "=" === f.charAt(1) && (e[l][r] = o[r] + Number(f.charAt(0) + f.substr(2)));
                        if (s = e.length - 2, 0 > s) return p[0] = new a(e[0][r], 0, 0, e[-1 > s ? 0 : 1][r]), p;
                        for (l = 0; s > l; l++) h = e[l][r], c = e[l + 1][r], p[l] = new a(h, 0, 0, c), n && (u = e[l + 2][r], t[l] = (t[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                        return p[l] = new a(e[l][r], 0, 0, e[l + 1][r]), p
                    },
                    u = function (e, o, a, l, u, f) {
                        var p, d, m, E, g, v, T, y, _ = {},
                            R = [],
                            x = f || e[0];
                        u = "string" == typeof u ? "," + u + "," : s, null == o && (o = 1);
                        for (d in e[0]) R.push(d);
                        if (e.length > 1) {
                            for (y = e[e.length - 1], T = !0, p = R.length; --p > -1;)
                                if (d = R[p], Math.abs(x[d] - y[d]) > .05) {
                                    T = !1;
                                    break
                                }
                            T && (e = e.concat(), f && e.unshift(f), e.push(e[1]), f = e[e.length - 3])
                        }
                        for (t.length = i.length = r.length = 0, p = R.length; --p > -1;) d = R[p], n[d] = -1 !== u.indexOf("," + d + ","), _[d] = c(e, d, n[d], f);
                        for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = R.length; --p > -1;)
                                if (n[d])
                                    for (m = _[R[p]], v = m.length - 1, E = 0; v > E; E++) g = m[E + 1].da / i[E] + m[E].da / t[E], r[E] = (r[E] || 0) + g * g;
                            for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                        }
                        for (p = R.length, E = a ? 4 : 1; --p > -1;) d = R[p], m = _[d], h(m, o, a, l, n[d]), T && (m.splice(0, E), m.splice(m.length - E, E));
                        return _
                    },
                    f = function (e, t, i) {
                        t = t || "soft";
                        var r, n, o, s, l, h, c, u, f, p, d, m = {},
                            E = "cubic" === t ? 3 : 2,
                            g = "soft" === t,
                            v = [];
                        if (g && i && (e = [i].concat(e)), null == e || e.length < E + 1) throw "invalid Bezier data";
                        for (f in e[0]) v.push(f);
                        for (h = v.length; --h > -1;) {
                            for (f = v[h], m[f] = l = [], p = 0, u = e.length, c = 0; u > c; c++) r = null == i ? e[c][f] : "string" == typeof (d = e[c][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && c > 1 && u - 1 > c && (l[p++] = (r + l[p - 2]) / 2), l[p++] = r;
                            for (u = p - E + 1, p = 0, c = 0; u > c; c += E) r = l[c], n = l[c + 1], o = l[c + 2], s = 2 === E ? 0 : l[c + 3], l[p++] = d = 3 === E ? new a(r, n, o, s) : new a(r, (2 * n + r) / 3, (2 * n + o) / 3, o);
                            l.length = p
                        }
                        return m
                    },
                    p = function (e, t, i) {
                        for (var r, n, o, a, s, l, h, c, u, f, p, d = 1 / i, m = e.length; --m > -1;)
                            for (f = e[m], o = f.a, a = f.d - o, s = f.c - o, l = f.b - o, r = n = 0, c = 1; i >= c; c++) h = d * c, u = 1 - h, r = n - (n = (h * h * a + 3 * u * (h * s + u * l)) * h), p = m * i + c - 1, t[p] = (t[p] || 0) + r * r
                    },
                    d = function (e, t) {
                        t = t >> 0 || 6;
                        var i, r, n, o, a = [],
                            s = [],
                            l = 0,
                            h = 0,
                            c = t - 1,
                            u = [],
                            f = [];
                        for (i in e) p(e[i], a, t);
                        for (n = a.length, r = 0; n > r; r++) l += Math.sqrt(a[r]), o = r % t, f[o] = l, o === c && (h += l, o = r / t >> 0, u[o] = f, s[o] = h, l = 0, f = []);
                        return {
                            length: h,
                            lengths: s,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function (e, t, i) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var r, n, o, a, s, l = t.values || [],
                                h = {},
                                c = l[0],
                                p = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                            for (r in c) this._props.push(r);
                            for (o = this._props.length; --o > -1;) r = this._props[o], this._overwriteProps.push(r), n = this._func[r] = "function" == typeof e[r], h[r] = n ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), s || h[r] !== l[0][r] && (s = h);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, s) : f(l, t.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1;) {
                                    for (a = 0; 3 > a; a++) r = p[o][a], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                                    r = p[o][2], this._initialRotations[o] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (t) {
                            var i, r, n, o, a, s, l, h, c, u, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                m = t !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, u = this._curSeg, t *= this._length, n = this._li, t > this._l2 && f - 1 > n) {
                                    for (h = f - 1; h > n && (this._l2 = c[++n]) <= t;);
                                    this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                                } else if (t < this._l1 && n > 0) {
                                    for (; n > 0 && (this._l1 = c[--n]) >= t;);
                                    0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = n, t -= this._l1, n = this._si, t > this._s2 && n < u.length - 1) {
                                    for (h = u.length - 1; h > n && (this._s2 = u[++n]) <= t;);
                                    this._s1 = u[n - 1], this._si = n
                                } else if (t < this._s1 && n > 0) {
                                    for (; n > 0 && (this._s1 = u[--n]) >= t;);
                                    0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                                }
                                s = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > t ? 0 : t >= 1 ? f - 1 : f * t >> 0, s = (t - i * (1 / f)) * f;
                            for (r = 1 - s, n = this._props.length; --n > -1;) o = this._props[n], a = this._beziers[o][i], l = (s * s * a.da + 3 * r * (s * a.ca + r * a.ba)) * s + a.a, this._round[o] && (l = Math.round(l)), p[o] ? d[o](l) : d[o] = l;
                            if (this._autoRotate) {
                                var E, g, v, T, y, _, R, x = this._autoRotate;
                                for (n = x.length; --n > -1;) o = x[n][2], _ = x[n][3] || 0, R = x[n][4] === !0 ? 1 : e, a = this._beziers[x[n][0]], E = this._beziers[x[n][1]], a && E && (a = a[i], E = E[i], g = a.a + (a.b - a.a) * s, T = a.b + (a.c - a.b) * s, g += (T - g) * s, T += (a.c + (a.d - a.c) * s - T) * s, v = E.a + (E.b - E.a) * s, y = E.b + (E.c - E.b) * s, v += (y - v) * s, y += (E.c + (E.d - E.c) * s - y) * s, l = m ? Math.atan2(y - v, T - g) * R + _ : this._initialRotations[n], p[o] ? d[o](l) : d[o] = l)
                            }
                        }
                    }),
                    E = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (e, t, i) {
                    return new a(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
                }, m._cssRegister = function () {
                    var e = o.CSSPlugin;
                    if (e) {
                        var t = e._internals,
                            i = t._parseToProxy,
                            r = t._setPluginRatio,
                            n = t.CSSPropTween;
                        t._registerComplexSpecialProp("bezier", {
                            parser: function (e, t, o, a, s, l) {
                                t instanceof Array && (t = {
                                    values: t
                                }), l = new m;
                                var h, c, u, f = t.values,
                                    p = f.length - 1,
                                    d = [],
                                    E = {};
                                if (0 > p) return s;
                                for (h = 0; p >= h; h++) u = i(e, f[h], a, s, l, p !== h), d[h] = u.end;
                                for (c in t) E[c] = t[c];
                                return E.values = d, s = new n(e, "bezier", 0, 0, u.pt, 2), s.data = u, s.plugin = l, s.setRatio = r, 0 === E.autoRotate && (E.autoRotate = !0), !E.autoRotate || E.autoRotate instanceof Array || (h = E.autoRotate === !0 ? 0 : Number(E.autoRotate), E.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x ? [["x", "y", "rotation", h, !1]] : !1), E.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, E, a._tween), s
                            }
                        })
                    }
                }, E._roundProps = function (e, t) {
                    for (var i = this._overwriteProps, r = i.length; --r > -1;)(e[i[r]] || e.bezier || e.bezierThrough) && (this._round[i[r]] = t)
                }, E._kill = function (e) {
                    var t, i, r = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], i = r.length; --i > -1;) r[i] === t && r.splice(i, 1);
                    return this._super._kill.call(this, e)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
                var i, r, n, o, a = function () {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    s = _gsScope._gsDefine.globals,
                    l = {},
                    h = a.prototype = new e("css");
                h.constructor = a, a.version = "1.18.2", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c, u, f, p, d, m, E = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    _ = /opacity *= *([^)]*)/i,
                    R = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    b = /^(rgb|hsl)/,
                    w = /([A-Z])/g,
                    H = /-([a-z])/gi,
                    S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    M = function (e, t) {
                        return t.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    P = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    L = /,(?=[^\)]*(?:\(|$))/gi,
                    F = Math.PI / 180,
                    D = 180 / Math.PI,
                    z = {},
                    U = document,
                    N = function (e) {
                        return U.createElementNS ? U.createElementNS("http://www.w3.org/1999/xhtml", e) : U.createElement(e)
                    },
                    O = N("div"),
                    B = N("img"),
                    V = a._internals = {
                        _specialProps: l
                    },
                    k = navigator.userAgent,
                    I = function () {
                        var e = k.indexOf("Android"),
                            t = N("a");
                        return f = -1 !== k.indexOf("Safari") && -1 === k.indexOf("Chrome") && (-1 === e || Number(k.substr(e + 8, 1)) > 3), d = f && Number(k.substr(k.indexOf("Version/") + 8, 1)) < 6, p = -1 !== k.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(k) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(k)) && (m = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
                    }(),
                    G = function (e) {
                        return _.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function (e) {
                        window.console && void 0
                    },
                    j = "",
                    X = "",
                    Y = function (e, t) {
                        t = t || O;
                        var i, r, n = t.style;
                        if (void 0 !== n[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + e];);
                        return r >= 0 ? (X = 3 === r ? "ms" : i[r], j = "-" + X.toLowerCase() + "-", X + e) : null
                    },
                    q = U.defaultView ? U.defaultView.getComputedStyle : function () {},
                    K = a.getStyle = function (e, t, i, r, n) {
                        var o;
                        return I || "opacity" !== t ? (!r && e.style[t] ? o = e.style[t] : (i = i || q(e)) ? o = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(w, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == n || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : n) : G(e)
                    },
                    $ = V.convertToPixels = function (e, i, r, n, o) {
                        if ("px" === n || !n) return r;
                        if ("auto" === n || !r) return 0;
                        var s, l, h, c = C.test(i),
                            u = e,
                            f = O.style,
                            p = 0 > r;
                        if (p && (r = -r), "%" === n && -1 !== i.indexOf("border")) s = r / 100 * (c ? e.clientWidth : e.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + K(e, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) f[c ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                            else {
                                if (u = e.parentNode || U.body, l = u._gsCache, h = t.ticker.frame, l && c && l.time === h) return l.width * r / 100;
                                f[c ? "width" : "height"] = r + n
                            }
                            u.appendChild(O), s = parseFloat(O[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(O), c && "%" === n && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = s / r * 100), 0 !== s || o || (s = $(e, i, r, n, !0))
                        }
                        return p ? -s : s
                    },
                    Z = V.calculateOffset = function (e, t, i) {
                        if ("absolute" !== K(e, "position", i)) return 0;
                        var r = "left" === t ? "Left" : "Top",
                            n = K(e, "margin" + r, i);
                        return e["offset" + r] - ($(e, t, parseFloat(n), n.replace(y, "")) || 0)
                    },
                    Q = function (e, t) {
                        var i, r, n, o = {};
                        if (t = t || q(e, null))
                            if (i = t.length)
                                for (; --i > -1;) n = t[i], (-1 === n.indexOf("-transform") || we === n) && (o[n.replace(H, M)] = t.getPropertyValue(n));
                            else
                                for (i in t)(-1 === i.indexOf("Transform") || be === i) && (o[i] = t[i]);
                        else if (t = e.currentStyle || e.style)
                            for (i in t) "string" == typeof i && void 0 === o[i] && (o[i.replace(H, M)] = t[i]);
                        return I || (o.opacity = G(e)), r = Ne(e, t, !1), o.rotation = r.rotation, o.skewX = r.skewX, o.scaleX = r.scaleX, o.scaleY = r.scaleY, o.x = r.x, o.y = r.y, Se && (o.z = r.z, o.rotationX = r.rotationX, o.rotationY = r.rotationY, o.scaleZ = r.scaleZ), o.filters && delete o.filters, o
                    },
                    J = function (e, t, i, r, n) {
                        var o, a, s, l = {},
                            h = e.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (o = i[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[a] || "" === t[a].replace(T, "") ? o : 0 : Z(e, a), void 0 !== h[a] && (s = new de(h, a, h[a], s)));
                        if (r)
                            for (a in r) "className" !== a && (l[a] = r[a]);
                        return {
                            difs: l,
                            firstMPT: s
                        }
                    },
                    ee = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    te = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function (e, t, i) {
                        var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            n = ee[t],
                            o = n.length;
                        for (i = i || q(e, null); --o > -1;) r -= parseFloat(K(e, "padding" + n[o], i, !0)) || 0, r -= parseFloat(K(e, "border" + n[o] + "Width", i, !0)) || 0;
                        return r
                    },
                    re = function (e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        (null == e || "" === e) && (e = "0 0");
                        var i = e.split(" "),
                            r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            n = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + n + (i.length > 2 ? " " + i[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== n.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === n.charAt(1), t.ox = parseFloat(r.replace(T, "")), t.oy = parseFloat(n.replace(T, "")), t.v = e), t || e
                    },
                    ne = function (e, t) {
                        return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                    },
                    oe = function (e, t) {
                        return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
                    },
                    ae = function (e, t, i, r) {
                        var n, o, a, s, l, h = 1e-6;
                        return null == e ? s = t : "number" == typeof e ? s = e : (n = 360, o = e.split("_"), l = "=" === e.charAt(1), a = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : D) - (l ? 0 : t), o.length && (r && (r[i] = t + a), -1 !== e.indexOf("short") && (a %= n, a !== a % (n / 2) && (a = 0 > a ? a + n : a - n)), -1 !== e.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * n) % n - (a / n | 0) * n : -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * n) % n - (a / n | 0) * n)), s = t + a), h > s && s > -h && (s = 0), s
                    },
                    se = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    le = function (e, t, i) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    he = a.parseColor = function (e, t) {
                        var i, r, n, o, a, s, l, h, c, u, f;
                        if (e)
                            if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), se[e]) i = se[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (r = e.charAt(1), n = e.charAt(2), o = e.charAt(3), e = "#" + r + r + n + n + o + o), e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (i = f = e.match(E), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(g)
                                    } else a = Number(i[0]) % 360 / 360, s = Number(i[1]) / 100, l = Number(i[2]) / 100, n = .5 >= l ? l * (s + 1) : l + s - l * s, r = 2 * l - n, i.length > 3 && (i[3] = Number(e[3])), i[0] = le(a + 1 / 3, r, n), i[1] = le(a, r, n), i[2] = le(a - 1 / 3, r, n);
                                else i = e.match(E) || se.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = se.black;
                        return t && !f && (r = i[0] / 255, n = i[1] / 255, o = i[2] / 255, h = Math.max(r, n, o), c = Math.min(r, n, o), l = (h + c) / 2, h === c ? a = s = 0 : (u = h - c, s = l > .5 ? u / (2 - h - c) : u / (h + c), a = h === r ? (n - o) / u + (o > n ? 6 : 0) : h === n ? (o - r) / u + 2 : (r - n) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * s + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ce = function (e, t) {
                        var i, r, n, o = e.match(ue) || [],
                            a = 0,
                            s = o.length ? "" : e;
                        for (i = 0; i < o.length; i++) r = o[i], n = e.substr(a, e.indexOf(r, a) - a), a += n.length + r.length, r = he(r, t), 3 === r.length && r.push(1), s += n + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                        return s
                    },
                    ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in se) ue += "|" + h + "\\b";
                ue = new RegExp(ue + ")", "gi"), a.colorStringFilter = function (e) {
                    var t, i = e[0] + e[1];
                    ue.lastIndex = 0, ue.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = ce(e[0], t), e[1] = ce(e[1], t))
                }, t.defaultStringFilter || (t.defaultStringFilter = a.colorStringFilter);
                var fe = function (e, t, i, r) {
                        if (null == e) return function (e) {
                            return e
                        };
                        var n, o = t ? (e.match(ue) || [""])[0] : "",
                            a = e.split(o).join("").match(v) || [],
                            s = e.substr(0, e.indexOf(a[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            h = -1 !== e.indexOf(" ") ? " " : ",",
                            c = a.length,
                            u = c > 0 ? a[0].replace(E, "") : "";
                        return c ? n = t ? function (e) {
                            var t, f, p, d;
                            if ("number" == typeof e) e += u;
                            else if (r && L.test(e)) {
                                for (d = e.replace(L, "|").split("|"), p = 0; p < d.length; p++) d[p] = n(d[p]);
                                return d.join(",")
                            }
                            if (t = (e.match(ue) || [o])[0], f = e.split(t).join("").match(v) || [], p = f.length, c > p--)
                                for (; ++p < c;) f[p] = i ? f[(p - 1) / 2 | 0] : a[p];
                            return s + f.join(h) + h + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function (e) {
                            var t, o, f;
                            if ("number" == typeof e) e += u;
                            else if (r && L.test(e)) {
                                for (o = e.replace(L, "|").split("|"), f = 0; f < o.length; f++) o[f] = n(o[f]);
                                return o.join(",")
                            }
                            if (t = e.match(v) || [], f = t.length, c > f--)
                                for (; ++f < c;) t[f] = i ? t[(f - 1) / 2 | 0] : a[f];
                            return s + t.join(h) + l
                        } : function (e) {
                            return e
                        }
                    },
                    pe = function (e) {
                        return e = e.split(","),
                            function (t, i, r, n, o, a, s) {
                                var l, h = (i + "").split(" ");
                                for (s = {}, l = 0; 4 > l; l++) s[e[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return n.parse(t, s, o, a)
                            }
                    },
                    de = (V._setPluginRatio = function (e) {
                        this.plugin.setRatio(e);
                        for (var t, i, r, n, o, a = this.data, s = a.proxy, l = a.firstMPT, h = 1e-6; l;) t = s[l.v], l.r ? t = Math.round(t) : h > t && t > -h && (t = 0), l.t[l.p] = t, l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = s.rotation), 1 === e || 0 === e)
                            for (l = a.firstMPT, o = 1 === e ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                        i[o] = n
                                    }
                                } else i[o] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function (e, t, i, r, n) {
                        this.t = e, this.p = t, this.v = i, this.r = n, r && (r._prev = this, this._next = r)
                    }),
                    me = (V._parseToProxy = function (e, t, i, r, n, o) {
                        var a, s, l, h, c, u = r,
                            f = {},
                            p = {},
                            d = i._transform,
                            m = z;
                        for (i._transform = null, z = t, r = c = i.parse(e, t, r, n), z = m, o && (i._transform = d, u && (u._prev = null, u._prev && (u._prev._next = null))); r && r !== u;) {
                            if (r.type <= 1 && (s = r.p, p[s] = r.s + r.c, f[s] = r.s, o || (h = new de(r, "s", s, h, r.r), r.c = 0), 1 === r.type))
                                for (a = r.l; --a > 0;) l = "xn" + a, s = r.p + "_" + l, p[s] = r.data[l], f[s] = r[l], o || (h = new de(r, l, s, h, r.rxp[l]));
                            r = r._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: h,
                            pt: c
                        }
                    }, V.CSSPropTween = function (e, t, r, n, a, s, l, h, c, u, f) {
                        this.t = e, this.p = t, this.s = r, this.c = n, this.n = l || t, e instanceof me || o.push(this.n), this.r = h, this.type = s || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? r : u, this.e = void 0 === f ? r + n : f, a && (this._next = a, a._prev = this)
                    }),
                    Ee = function (e, t, i, r, n, o) {
                        var a = new me(e, t, i, r - i, n, -1, o);
                        return a.b = i, a.e = a.xs0 = r, a
                    },
                    ge = a.parseComplex = function (e, t, i, r, n, o, a, s, l, h) {
                        i = i || o || "", a = new me(e, t, 0, 0, a, h ? 2 : 1, null, !1, s, i, r), r += "";
                        var u, f, p, d, m, v, T, y, _, R, x, b, w, H = i.split(", ").join(",").split(" "),
                            S = r.split(", ").join(",").split(" "),
                            M = H.length,
                            C = c !== !1;
                        for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (H = H.join(" ").replace(L, ", ").split(" "), S = S.join(" ").replace(L, ", ").split(" "), M = H.length), M !== S.length && (H = (o || "").split(" "), M = H.length), a.plugin = l, a.setRatio = h, ue.lastIndex = 0, u = 0; M > u; u++)
                            if (d = H[u], m = S[u], y = parseFloat(d), y || 0 === y) a.appendXtra("", y, ne(m, y), m.replace(g, ""), C && -1 !== m.indexOf("px"), !0);
                            else if (n && ue.test(d)) b = "," === m.charAt(m.length - 1) ? ")," : ")", w = -1 !== m.indexOf("hsl") && I, d = he(d, w), m = he(m, w), _ = d.length + m.length > 6, _ && !I && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(S[u]).join("transparent")) : (I || (_ = !1), w ? a.appendXtra(_ ? "hsla(" : "hsl(", d[0], ne(m[0], d[0]), ",", !1, !0).appendXtra("", d[1], ne(m[1], d[1]), "%,", !1).appendXtra("", d[2], ne(m[2], d[2]), _ ? "%," : "%" + b, !1) : a.appendXtra(_ ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], _ ? "," : b, !0), _ && (d = d.length < 4 ? 1 : d[3], a.appendXtra("", d, (m.length < 4 ? 1 : m[3]) - d, b, !1))), ue.lastIndex = 0;
                        else if (v = d.match(E)) {
                            if (T = m.match(g), !T || T.length !== v.length) return a;
                            for (p = 0, f = 0; f < v.length; f++) x = v[f], R = d.indexOf(x, p), a.appendXtra(d.substr(p, R - p), Number(x), ne(T[f], x), "", C && "px" === d.substr(R + x.length, 2), 0 === f), p = R + x.length;
                            a["xs" + a.l] += d.substr(p)
                        } else a["xs" + a.l] += a.l ? " " + m : m;
                        if (-1 !== r.indexOf("=") && a.data) {
                            for (b = a.xs0 + a.data.s, u = 1; u < a.l; u++) b += a["xs" + u] + a.data["xn" + u];
                            a.e = b + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ve = 9;
                for (h = me.prototype, h.l = h.pr = 0; --ve > 0;) h["xn" + ve] = 0, h["xs" + ve] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (e, t, i, r, n, o) {
                    var a = this,
                        s = a.l;
                    return a["xs" + s] += o && s ? " " + e : e || "", i || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", s > 0 ? (a.data["xn" + s] = t + i, a.rxp["xn" + s] = n, a["xn" + s] = t, a.plugin || (a.xfirst = new me(a, "xn" + s, t, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: t + i
                    }, a.rxp = {}, a.s = t, a.c = i, a.r = n, a)) : (a["xs" + s] += t + (r || ""), a)
                };
                var Te = function (e, t) {
                        t = t || {}, this.p = t.prefix ? Y(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || fe(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0;
                    },
                    ye = V._registerComplexSpecialProp = function (e, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var r, n, o = e.split(","),
                            a = t.defaultValue;
                        for (i = i || [a], r = 0; r < o.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = i[r] || a, n = new Te(o[r], t)
                    },
                    _e = function (e) {
                        if (!l[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            ye(e, {
                                parser: function (e, i, r, n, o, a, h) {
                                    var c = s.com.greensock.plugins[t];
                                    return c ? (c._cssRegister(), l[r].parse(e, i, r, n, o, a, h)) : (W("Error: " + t + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                h = Te.prototype, h.parseComplex = function (e, t, i, r, n, o) {
                    var a, s, l, h, c, u, f = this.keyword;
                    if (this.multi && (L.test(i) || L.test(t) ? (s = t.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : f && (s = [t], l = [i])), l) {
                        for (h = l.length > s.length ? l.length : s.length, a = 0; h > a; a++) t = s[a] = s[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (c = t.indexOf(f), u = i.indexOf(f), c !== u && (-1 === u ? s[a] = s[a].split(f).join("") : -1 === c && (s[a] += " " + f)));
                        t = s.join(", "), i = l.join(", ")
                    }
                    return ge(e, this.p, t, i, this.clrs, this.dflt, r, this.pr, n, o)
                }, h.parse = function (e, t, i, r, o, a, s) {
                    return this.parseComplex(e.style, this.format(K(e, this.p, n, !1, this.dflt)), this.format(t), o, a)
                }, a.registerSpecialProp = function (e, t, i) {
                    ye(e, {
                        parser: function (e, r, n, o, a, s, l) {
                            var h = new me(e, n, 0, 0, a, 2, n, !1, i);
                            return h.plugin = s, h.setRatio = t(e, r, o._tween, n), h
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = f || p;
                var Re, xe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    be = Y("transform"),
                    we = j + "transform",
                    He = Y("transformOrigin"),
                    Se = null !== Y("perspective"),
                    Me = V.Transform = function () {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
                    },
                    Ce = window.SVGElement,
                    Ae = function (e, t, i) {
                        var r, n = U.createElementNS("http://www.w3.org/2000/svg", e),
                            o = /([a-z])([A-Z])/g;
                        for (r in i) n.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), i[r]);
                        return t.appendChild(n), n
                    },
                    Pe = U.documentElement,
                    Le = function () {
                        var e, t, i, r = m || /Android/i.test(k) && !window.chrome;
                        return U.createElementNS && !r && (e = Ae("svg", Pe), t = Ae("rect", e, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = t.getBoundingClientRect().width, t.style[He] = "50% 50%", t.style[be] = "scaleX(0.5)", r = i === t.getBoundingClientRect().width && !(p && Se), Pe.removeChild(e)), r
                    }(),
                    Fe = function (e, t, i, r, n) {
                        var o, s, l, h, c, u, f, p, d, m, E, g, v, T, y = e._gsTransform,
                            _ = Ue(e, !0);
                        y && (v = y.xOrigin, T = y.yOrigin), (!r || (o = r.split(" ")).length < 2) && (f = e.getBBox(), t = re(t).split(" "), o = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * f.width : parseFloat(t[0])) + f.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * f.height : parseFloat(t[1])) + f.y]), i.xOrigin = h = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), r && _ !== ze && (u = _[0], f = _[1], p = _[2], d = _[3], m = _[4], E = _[5], g = u * d - f * p, s = h * (d / g) + c * (-p / g) + (p * E - d * m) / g, l = h * (-f / g) + c * (u / g) - (u * E - f * m) / g, h = i.xOrigin = o[0] = s, c = i.yOrigin = o[1] = l), y && (n || n !== !1 && a.defaultSmoothOrigin !== !1 ? (s = h - v, l = c - T, y.xOffset += s * _[0] + l * _[2] - s, y.yOffset += s * _[1] + l * _[3] - l) : y.xOffset = y.yOffset = 0), e.setAttribute("data-svg-origin", o.join(" "))
                    },
                    De = function (e) {
                        return !!(Ce && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                    },
                    ze = [1, 0, 0, 1, 0, 0],
                    Ue = function (e, t) {
                        var i, r, n, o, a, s = e._gsTransform || new Me,
                            l = 1e5;
                        if (be ? r = K(e, we, null, !0) : e.currentStyle && (r = e.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (s.svg || e.getBBox && De(e)) && (i && -1 !== (e.style[be] + "").indexOf("matrix") && (r = e.style[be], i = 0), n = e.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (r = n, i = 0) : -1 !== n.indexOf("translate") && (r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return ze;
                        for (n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ve = n.length; --ve > -1;) o = Number(n[ve]), n[ve] = (a = o - (o |= 0)) ? (a * l + (0 > a ? -.5 : .5) | 0) / l + o : o;
                        return t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                    },
                    Ne = V.getTransform = function (e, i, r, o) {
                        if (e._gsTransform && r && !o) return e._gsTransform;
                        var s, l, h, c, u, f, p = r ? e._gsTransform || new Me : new Me,
                            d = p.scaleX < 0,
                            m = 2e-5,
                            E = 1e5,
                            g = Se ? parseFloat(K(e, He, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (p.svg = !(!e.getBBox || !De(e)), p.svg && (Fe(e, K(e, He, n, !1, "50% 50%") + "", p, e.getAttribute("data-svg-origin")), Re = a.useSVGTransformAttr || Le), s = Ue(e), s !== ze) {
                            if (16 === s.length) {
                                var T, y, _, R, x, b = s[0],
                                    w = s[1],
                                    H = s[2],
                                    S = s[3],
                                    M = s[4],
                                    C = s[5],
                                    A = s[6],
                                    P = s[7],
                                    L = s[8],
                                    F = s[9],
                                    z = s[10],
                                    U = s[12],
                                    N = s[13],
                                    O = s[14],
                                    B = s[11],
                                    V = Math.atan2(A, z);
                                p.zOrigin && (O = -p.zOrigin, U = L * O - s[12], N = F * O - s[13], O = z * O + p.zOrigin - s[14]), p.rotationX = V * D, V && (R = Math.cos(-V), x = Math.sin(-V), T = M * R + L * x, y = C * R + F * x, _ = A * R + z * x, L = M * -x + L * R, F = C * -x + F * R, z = A * -x + z * R, B = P * -x + B * R, M = T, C = y, A = _), V = Math.atan2(-H, z), p.rotationY = V * D, V && (R = Math.cos(-V), x = Math.sin(-V), T = b * R - L * x, y = w * R - F * x, _ = H * R - z * x, F = w * x + F * R, z = H * x + z * R, B = S * x + B * R, b = T, w = y, H = _), V = Math.atan2(w, b), p.rotation = V * D, V && (R = Math.cos(-V), x = Math.sin(-V), b = b * R + M * x, y = w * R + C * x, C = w * -x + C * R, A = H * -x + A * R, w = y), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), p.scaleX = (Math.sqrt(b * b + w * w) * E + .5 | 0) / E, p.scaleY = (Math.sqrt(C * C + F * F) * E + .5 | 0) / E, p.scaleZ = (Math.sqrt(A * A + z * z) * E + .5 | 0) / E, p.skewX = 0, p.perspective = B ? 1 / (0 > B ? -B : B) : 0, p.x = U, p.y = N, p.z = O, p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * M), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * C))
                            } else if ((!Se || o || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) && (void 0 === p.x || "none" !== K(e, "display", i))) {
                                var k = s.length >= 6,
                                    I = k ? s[0] : 1,
                                    G = s[1] || 0,
                                    W = s[2] || 0,
                                    j = k ? s[3] : 1;
                                p.x = s[4] || 0, p.y = s[5] || 0, h = Math.sqrt(I * I + G * G), c = Math.sqrt(j * j + W * W), u = I || G ? Math.atan2(G, I) * D : p.rotation || 0, f = W || j ? Math.atan2(W, j) * D + u : p.skewX || 0, Math.abs(f) > 90 && Math.abs(f) < 270 && (d ? (h *= -1, f += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, f += 0 >= f ? 180 : -180)), p.scaleX = h, p.scaleY = c, p.rotation = u, p.skewX = f, Se && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * I + p.yOrigin * W), p.y -= p.yOrigin - (p.xOrigin * G + p.yOrigin * j))
                            }
                            p.zOrigin = g;
                            for (l in p) p[l] < m && p[l] > -m && (p[l] = 0)
                        }
                        return r && (e._gsTransform = p, p.svg && (Re && e.style[be] ? t.delayedCall(.001, function () {
                            ke(e.style, be)
                        }) : !Re && e.getAttribute("transform") && t.delayedCall(.001, function () {
                            e.removeAttribute("transform")
                        }))), p
                    },
                    Oe = function (e) {
                        var t, i, r = this.data,
                            n = -r.rotation * F,
                            o = n + r.skewX * F,
                            a = 1e5,
                            s = (Math.cos(n) * r.scaleX * a | 0) / a,
                            l = (Math.sin(n) * r.scaleX * a | 0) / a,
                            h = (Math.sin(o) * -r.scaleY * a | 0) / a,
                            c = (Math.cos(o) * r.scaleY * a | 0) / a,
                            u = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -h, h = -i, t = f.filter, u.filter = "";
                            var p, d, E = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                T = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                R = r.x + E * r.xPercent / 100,
                                x = r.y + g * r.yPercent / 100;
                            if (null != r.ox && (p = (r.oxp ? E * r.ox * .01 : r.ox) - E / 2, d = (r.oyp ? g * r.oy * .01 : r.oy) - g / 2, R += p - (p * s + d * l), x += d - (p * h + d * c)), v ? (p = E / 2, d = g / 2, T += ", Dx=" + (p - (p * s + d * l) + R) + ", Dy=" + (d - (p * h + d * c) + x) + ")") : T += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = t.replace(P, T) : u.filter = T + " " + t, (0 === e || 1 === e) && 1 === s && 0 === l && 0 === h && 1 === c && (v && -1 === T.indexOf("Dx=0, Dy=0") || _.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var b, w, H, S = 8 > m ? 1 : -1;
                                for (p = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((E - ((0 > s ? -s : s) * E + (0 > l ? -l : l) * g)) / 2 + R), r.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > h ? -h : h) * E)) / 2 + x), ve = 0; 4 > ve; ve++) w = te[ve], b = f[w], i = -1 !== b.indexOf("px") ? parseFloat(b) : $(this.t, w, parseFloat(b), b.replace(y, "")) || 0, H = i !== r[w] ? 2 > ve ? -r.ieOffsetX : -r.ieOffsetY : 2 > ve ? p - r.ieOffsetX : d - r.ieOffsetY, u[w] = (r[w] = Math.round(i - H * (0 === ve || 2 === ve ? 1 : S))) + "px"
                            }
                        }
                    },
                    Be = V.set3DTransformRatio = V.setTransformRatio = function (e) {
                        var t, i, r, n, o, a, s, l, h, c, u, f, d, m, E, g, v, T, y, _, R, x, b, w = this.data,
                            H = this.t.style,
                            S = w.rotation,
                            M = w.rotationX,
                            C = w.rotationY,
                            A = w.scaleX,
                            P = w.scaleY,
                            L = w.scaleZ,
                            D = w.x,
                            z = w.y,
                            U = w.z,
                            N = w.svg,
                            O = w.perspective,
                            B = w.force3D;
                        if (((1 === e || 0 === e) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !U && !O && !C && !M && 1 === L || Re && N || !Se) return void(S || w.skewX || N ? (S *= F, x = w.skewX * F, b = 1e5, t = Math.cos(S) * A, n = Math.sin(S) * A, i = Math.sin(S - x) * -P, o = Math.cos(S - x) * P, x && "simple" === w.skewType && (v = Math.tan(x), v = Math.sqrt(1 + v * v), i *= v, o *= v, w.skewY && (t *= v, n *= v)), N && (D += w.xOrigin - (w.xOrigin * t + w.yOrigin * i) + w.xOffset, z += w.yOrigin - (w.xOrigin * n + w.yOrigin * o) + w.yOffset, Re && (w.xPercent || w.yPercent) && (m = this.t.getBBox(), D += .01 * w.xPercent * m.width, z += .01 * w.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > z && z > -m && (z = 0)), y = (t * b | 0) / b + "," + (n * b | 0) / b + "," + (i * b | 0) / b + "," + (o * b | 0) / b + "," + D + "," + z + ")", N && Re ? this.t.setAttribute("transform", "matrix(" + y) : H[be] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + y) : H[be] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + P + "," + D + "," + z + ")");
                        if (p && (m = 1e-4, m > A && A > -m && (A = L = 2e-5), m > P && P > -m && (P = L = 2e-5), !O || w.z || w.rotationX || w.rotationY || (O = 0)), S || w.skewX) S *= F, E = t = Math.cos(S), g = n = Math.sin(S), w.skewX && (S -= w.skewX * F, E = Math.cos(S), g = Math.sin(S), "simple" === w.skewType && (v = Math.tan(w.skewX * F), v = Math.sqrt(1 + v * v), E *= v, g *= v, w.skewY && (t *= v, n *= v))), i = -g, o = E;
                        else {
                            if (!(C || M || 1 !== L || O || N)) return void(H[be] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + z + "px," + U + "px)" + (1 !== A || 1 !== P ? " scale(" + A + "," + P + ")" : ""));
                            t = o = 1, i = n = 0
                        }
                        h = 1, r = a = s = l = c = u = 0, f = O ? -1 / O : 0, d = w.zOrigin, m = 1e-6, _ = ",", R = "0", S = C * F, S && (E = Math.cos(S), g = Math.sin(S), s = -g, c = f * -g, r = t * g, a = n * g, h = E, f *= E, t *= E, n *= E), S = M * F, S && (E = Math.cos(S), g = Math.sin(S), v = i * E + r * g, T = o * E + a * g, l = h * g, u = f * g, r = i * -g + r * E, a = o * -g + a * E, h *= E, f *= E, i = v, o = T), 1 !== L && (r *= L, a *= L, h *= L, f *= L), 1 !== P && (i *= P, o *= P, l *= P, u *= P), 1 !== A && (t *= A, n *= A, s *= A, c *= A), (d || N) && (d && (D += r * -d, z += a * -d, U += h * -d + d), N && (D += w.xOrigin - (w.xOrigin * t + w.yOrigin * i) + w.xOffset, z += w.yOrigin - (w.xOrigin * n + w.yOrigin * o) + w.yOffset), m > D && D > -m && (D = R), m > z && z > -m && (z = R), m > U && U > -m && (U = 0)), y = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", y += (m > t && t > -m ? R : t) + _ + (m > n && n > -m ? R : n) + _ + (m > s && s > -m ? R : s), y += _ + (m > c && c > -m ? R : c) + _ + (m > i && i > -m ? R : i) + _ + (m > o && o > -m ? R : o), M || C || 1 !== L ? (y += _ + (m > l && l > -m ? R : l) + _ + (m > u && u > -m ? R : u) + _ + (m > r && r > -m ? R : r), y += _ + (m > a && a > -m ? R : a) + _ + (m > h && h > -m ? R : h) + _ + (m > f && f > -m ? R : f) + _) : y += ",0,0,0,0,1,0,", y += D + _ + z + _ + U + _ + (O ? 1 + -U / O : 1) + ")", H[be] = y
                    };
                h = Me.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (e, t, i, r, o, s, l) {
                        if (r._lastParsedTransform === l) return o;
                        r._lastParsedTransform = l;
                        var h, c, u, f, p, d, m, E, g, v, T = e._gsTransform,
                            y = e.style,
                            _ = 1e-6,
                            R = xe.length,
                            x = l,
                            b = {},
                            w = "transformOrigin";
                        if (l.display ? (f = K(e, "display"), y.display = "block", h = Ne(e, n, !0, l.parseTransform), y.display = f) : h = Ne(e, n, !0, l.parseTransform), r._transform = h, "string" == typeof x.transform && be) f = O.style, f[be] = x.transform, f.display = "block", f.position = "absolute", U.body.appendChild(O), c = Ne(O, null, !1), U.body.removeChild(O), c.perspective || (c.perspective = h.perspective), null != x.xPercent && (c.xPercent = oe(x.xPercent, h.xPercent)), null != x.yPercent && (c.yPercent = oe(x.yPercent, h.yPercent));
                        else if ("object" == typeof x) {
                            if (c = {
                                    scaleX: oe(null != x.scaleX ? x.scaleX : x.scale, h.scaleX),
                                    scaleY: oe(null != x.scaleY ? x.scaleY : x.scale, h.scaleY),
                                    scaleZ: oe(x.scaleZ, h.scaleZ),
                                    x: oe(x.x, h.x),
                                    y: oe(x.y, h.y),
                                    z: oe(x.z, h.z),
                                    xPercent: oe(x.xPercent, h.xPercent),
                                    yPercent: oe(x.yPercent, h.yPercent),
                                    perspective: oe(x.transformPerspective, h.perspective)
                                }, E = x.directionalRotation, null != E)
                                if ("object" == typeof E)
                                    for (f in E) x[f] = E[f];
                                else x.rotation = E;
                                "string" == typeof x.x && -1 !== x.x.indexOf("%") && (c.x = 0, c.xPercent = oe(x.x, h.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (c.y = 0, c.yPercent = oe(x.y, h.yPercent)), c.rotation = ae("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : h.rotation, h.rotation, "rotation", b), Se && (c.rotationX = ae("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", b), c.rotationY = ae("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", b)), c.skewX = null == x.skewX ? h.skewX : ae(x.skewX, h.skewX), c.skewY = null == x.skewY ? h.skewY : ae(x.skewY, h.skewY), (u = c.skewY - h.skewY) && (c.skewX += u, c.rotation += u)
                        }
                        for (Se && null != x.force3D && (h.force3D = x.force3D, m = !0), h.skewType = x.skewType || h.skewType || a.defaultSkewType, d = h.force3D || h.z || h.rotationX || h.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, d || null == x.scale || (c.scaleZ = 1); --R > -1;) i = xe[R], p = c[i] - h[i], (p > _ || -_ > p || null != x[i] || null != z[i]) && (m = !0, o = new me(h, i, h[i], p, o), i in b && (o.e = b[i]), o.xs0 = 0, o.plugin = s, r._overwriteProps.push(o.n));
                        return p = x.transformOrigin, h.svg && (p || x.svgOrigin) && (g = h.xOffset, v = h.yOffset, Fe(e, re(p), c, x.svgOrigin, x.smoothOrigin), o = Ee(h, "xOrigin", (T ? h : c).xOrigin, c.xOrigin, o, w), o = Ee(h, "yOrigin", (T ? h : c).yOrigin, c.yOrigin, o, w), (g !== h.xOffset || v !== h.yOffset) && (o = Ee(h, "xOffset", T ? g : h.xOffset, h.xOffset, o, w), o = Ee(h, "yOffset", T ? v : h.yOffset, h.yOffset, o, w)), p = Re ? null : "0px 0px"), (p || Se && d && h.zOrigin) && (be ? (m = !0, i = He, p = (p || K(e, i, n, !1, "50% 50%")) + "", o = new me(y, i, 0, 0, o, -1, w), o.b = y[i], o.plugin = s, Se ? (f = h.zOrigin, p = p.split(" "), h.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px", o = new me(h, "zOrigin", 0, 0, o, -1, o.n), o.b = f, o.xs0 = o.e = h.zOrigin) : o.xs0 = o.e = p) : re(p + "", h)), m && (r._transformType = h.svg && Re || !d && 3 !== this._transformType ? 2 : 3), o
                    },
                    prefix: !0
                }), ye("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ye("borderRadius", {
                    defaultValue: "0px",
                    parser: function (e, t, i, o, a, s) {
                        t = this.format(t);
                        var l, h, c, u, f, p, d, m, E, g, v, T, y, _, R, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            w = e.style;
                        for (E = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), l = t.split(" "), h = 0; h < b.length; h++) this.p.indexOf("border") && (b[h] = Y(b[h])), f = u = K(e, b[h], n, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), p = c = l[h], d = parseFloat(f), T = f.substr((d + "").length), y = "=" === p.charAt(1), y ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = r[i] || T), v !== T && (_ = $(e, "borderLeft", d, T), R = $(e, "borderTop", d, T), "%" === v ? (f = _ / E * 100 + "%", u = R / g * 100 + "%") : "em" === v ? (x = $(e, "borderLeft", 1, "em"), f = _ / x + "em", u = R / x + "em") : (f = _ + "px", u = R + "px"), y && (p = parseFloat(f) + m + v, c = parseFloat(u) + m + v)), a = ge(w, b[h], f + " " + u, p + " " + c, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: fe("0px 0px 0px 0px", !1, !0)
                }), ye("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (e, t, i, r, o, a) {
                        var s, l, h, c, u, f, p = "background-position",
                            d = n || q(e, null),
                            E = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(t);
                        if (-1 !== E.indexOf("%") != (-1 !== g.indexOf("%")) && (f = K(e, "backgroundImage").replace(S, ""), f && "none" !== f)) {
                            for (s = E.split(" "), l = g.split(" "), B.setAttribute("src", f), h = 2; --h > -1;) E = s[h], c = -1 !== E.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? e.offsetWidth - B.width : e.offsetHeight - B.height, s[h] = c ? parseFloat(E) / 100 * u + "px" : parseFloat(E) / u * 100 + "%");
                            E = s.join(" ")
                        }
                        return this.parseComplex(e.style, E, g, o, a)
                    },
                    formatter: re
                }), ye("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: re
                }), ye("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ye("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ye("transformStyle", {
                    prefix: !0
                }), ye("backfaceVisibility", {
                    prefix: !0
                }), ye("userSelect", {
                    prefix: !0
                }), ye("margin", {
                    parser: pe("marginTop,marginRight,marginBottom,marginLeft")
                }), ye("padding", {
                    parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ye("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (e, t, i, r, o, a) {
                        var s, l, h;
                        return 9 > m ? (l = e.currentStyle, h = 8 > m ? " " : ",", s = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", t = this.format(t).split(",").join(h)) : (s = this.format(K(e, this.p, n, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, s, t, o, a)
                    }
                }), ye("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ye("autoRound,strictUnits", {
                    parser: function (e, t, i, r, n) {
                        return n
                    }
                }), ye("border", {
                    defaultValue: "0px solid #000",
                    parser: function (e, t, i, r, o, a) {
                        return this.parseComplex(e.style, this.format(K(e, "borderTopWidth", n, !1, "0px") + " " + K(e, "borderTopStyle", n, !1, "solid") + " " + K(e, "borderTopColor", n, !1, "#000")), this.format(t), o, a)
                    },
                    color: !0,
                    formatter: function (e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(ue) || ["#000"])[0]
                    }
                }), ye("borderWidth", {
                    parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ye("float,cssFloat,styleFloat", {
                    parser: function (e, t, i, r, n, o) {
                        var a = e.style,
                            s = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new me(a, s, 0, 0, n, -1, i, !1, 0, a[s], t)
                    }
                });
                var Ve = function (e) {
                    var t, i = this.t,
                        r = i.filter || K(this.data, "filter") || "",
                        n = this.s + this.c * e | 0;
                    100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), t = !K(this.data, "filter")) : (i.filter = r.replace(x, ""), t = !0)), t || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(_, "opacity=" + n))
                };
                ye("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (e, t, i, r, o, a) {
                        var s = parseFloat(K(e, "opacity", n, !1, "1")),
                            l = e.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), h && 1 === s && "hidden" === K(e, "visibility", n) && 0 !== t && (s = 0), I ? o = new me(l, "opacity", s, t - s, o) : (o = new me(l, "opacity", 100 * s, 100 * (t - s), o), o.xn1 = h ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = a, o.setRatio = Ve), h && (o = new me(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), o.xs0 = "inherit", r._overwriteProps.push(o.n), r._overwriteProps.push(i)), o
                    }
                });
                var ke = function (e, t) {
                        t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(w, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    Ie = function (e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : ke(i, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ye("className", {
                    parser: function (e, t, r, o, a, s, l) {
                        var h, c, u, f, p, d = e.getAttribute("class") || "",
                            m = e.style.cssText;
                        if (a = o._classNamePT = new me(e, r, 0, 0, a, 2), a.setRatio = Ie, a.pr = -11, i = !0, a.b = d, c = Q(e, n), u = e._gsClassPT) {
                            for (f = {}, p = u.data; p;) f[p.p] = 1, p = p._next;
                            u.setRatio(1)
                        }
                        return e._gsClassPT = a, a.e = "=" !== t.charAt(1) ? t : d.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", a.e), h = J(e, c, Q(e), l, f), e.setAttribute("class", d), a.data = h.firstMPT, e.style.cssText = m, a = a.xfirst = o.parse(e, h.difs, a, s)
                    }
                });
                var Ge = function (e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, i, r, n, o, a = this.t.style,
                            s = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", n = !0;
                        else
                            for (t = this.e.split(" ").join("").split(","), r = t.length; --r > -1;) i = t[r], l[i] && (l[i].parse === s ? n = !0 : i = "transformOrigin" === i ? He : l[i].p), ke(a, i);
                        n && (ke(a, be), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (ye("clearProps", {
                        parser: function (e, t, r, n, o) {
                            return o = new me(e, r, 0, 0, o, 2), o.setRatio = Ge, o.e = t, o.pr = -10, o.data = n._tween, i = !0, o
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ve = h.length; ve--;) _e(h[ve]);
                h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (e, t, s) {
                    if (!e.nodeType) return !1;
                    this._target = e, this._tween = s, this._vars = t, c = t.autoRound, i = !1, r = t.suffixMap || a.suffixMap, n = q(e, ""), o = this._overwriteProps;
                    var h, p, m, E, g, v, T, y, _, x = e.style;
                    if (u && "" === x.zIndex && (h = K(e, "zIndex", n), ("auto" === h || "" === h) && this._addLazySet(x, "zIndex", 0)), "string" == typeof t && (E = x.cssText, h = Q(e, n), x.cssText = E + ";" + t, h = J(e, h, Q(e)).difs, !I && R.test(t) && (h.opacity = parseFloat(RegExp.$1)), t = h, x.cssText = E), t.className ? this._firstPT = p = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = p = this.parse(e, t, null), this._transformType) {
                        for (_ = 3 === this._transformType, be ? f && (u = !0, "" === x.zIndex && (T = K(e, "zIndex", n), ("auto" === T || "" === T) && this._addLazySet(x, "zIndex", 0)), d && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (_ ? "visible" : "hidden"))) : x.zoom = 1, m = p; m && m._next;) m = m._next;
                        y = new me(e, "transform", 0, 0, null, 2), this._linkCSSP(y, null, m), y.setRatio = be ? Be : Oe, y.data = this._transform || Ne(e, n, !0), y.tween = s, y.pr = -1, o.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, m = E; m && m.pr > p.pr;) m = m._next;
                            (p._prev = m ? m._prev : g) ? p._prev._next = p: E = p, (p._next = m) ? m._prev = p : g = p, p = v
                        }
                        this._firstPT = E
                    }
                    return !0
                }, h.parse = function (e, t, i, o) {
                    var a, s, h, u, f, p, d, m, E, g, v = e.style;
                    for (a in t) p = t[a], s = l[a], s ? i = s.parse(e, p, a, this, i, o, t) : (f = K(e, a, n) + "", E = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || E && b.test(p) ? (E || (p = he(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = ge(v, a, f, p, !0, "transparent", i, 0, o)) : !E || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (h = parseFloat(f), d = h || 0 === h ? f.substr((h + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (h = ie(e, a, n), d = "px") : "left" === a || "top" === a ? (h = Z(e, a, n), d = "px") : (h = "opacity" !== a ? 0 : 1, d = "")), g = E && "=" === p.charAt(1), g ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(y, "")) : (u = parseFloat(p), m = E ? p.replace(y, "") : ""), "" === m && (m = a in r ? r[a] : d), p = u || 0 === u ? (g ? u + h : u) + m : t[a], d !== m && "" !== m && (u || 0 === u) && h && (h = $(e, a, h, d), "%" === m ? (h /= $(e, a, 100, "%") / 100, t.strictUnits !== !0 && (f = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= $(e, a, 1, m) : "px" !== m && (u = $(e, a, u, m), m = "px"), g && (u || 0 === u) && (p = u + h + m)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[a] && (p || p + "" != "NaN" && null != p) ? (i = new me(v, a, u || h || 0, 0, i, -1, a, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : f) : W("invalid " + a + " tween value: " + t[a]) : (i = new me(v, a, h, u - h, i, 0, a, c !== !1 && ("px" === m || "zIndex" === a), 0, f, p), i.xs0 = m)) : i = ge(v, a, f, p, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                    return i
                }, h.setRatio = function (e) {
                    var t, i, r, n = this._firstPT,
                        o = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; n;) {
                                if (t = n.c * e + n.s, n.r ? t = Math.round(t) : o > t && t > -o && (t = 0), n.type)
                                    if (1 === n.type)
                                        if (r = n.l, 2 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2;
                                        else if (3 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === r) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + t + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                    n.t[n.p] = i
                                } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(e);
                                else n.t[n.p] = t + n.xs0;
                                n = n._next
                            } else
                                for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(e), n = n._next;
                        else
                            for (; n;) {
                                if (2 !== n.type)
                                    if (n.r && -1 !== n.type)
                                        if (t = Math.round(n.s + n.c), n.type) {
                                            if (1 === n.type) {
                                                for (r = n.l, i = n.xs0 + t + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                                n.t[n.p] = i
                                            }
                                        } else n.t[n.p] = t + n.xs0;
                                else n.t[n.p] = n.e;
                                else n.setRatio(e);
                                n = n._next
                            }
                }, h._enableTransforms = function (e) {
                    this._transform = this._transform || Ne(this._target, n, !0), this._transformType = this._transform.svg && Re || !e && 3 !== this._transformType ? 2 : 3
                };
                var We = function (e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function (e, t, i) {
                    var r = this._firstPT = new me(e, t, 0, 0, this._firstPT, 2);
                    r.e = i, r.setRatio = We, r.data = this
                }, h._linkCSSP = function (e, t, i, r) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), i ? i._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
                }, h._kill = function (t) {
                    var i, r, n, o = t;
                    if (t.autoAlpha || t.alpha) {
                        o = {};
                        for (r in t) o[r] = t[r];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    return t.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), e.prototype._kill.call(this, o)
                };
                var je = function (e, t, i) {
                    var r, n, o, a;
                    if (e.slice)
                        for (n = e.length; --n > -1;) je(e[n], t, i);
                    else
                        for (r = e.childNodes, n = r.length; --n > -1;) o = r[n], a = o.type, o.style && (t.push(Q(o)), i && i.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || je(o, t, i)
                };
                return a.cascadeTo = function (e, i, r) {
                    var n, o, a, s, l = t.to(e, i, r),
                        h = [l],
                        c = [],
                        u = [],
                        f = [],
                        p = t._internals.reservedProps;
                    for (e = l._targets || l.target, je(e, c, f), l.render(i, !0, !0), je(e, u), l.render(0, !0, !0), l._enabled(!0), n = f.length; --n > -1;)
                        if (o = J(f[n], c[n], u[n]), o.firstMPT) {
                            o = o.difs;
                            for (a in r) p[a] && (o[a] = r[a]);
                            s = {};
                            for (a in o) s[a] = c[n][a];
                            h.push(t.fromTo(f[n], i, s, o))
                        }
                    return h
                }, e.activate([a]), a
            }, !0),
            function () {
                var e = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function (e, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    t = function (e) {
                        for (; e;) e.f || e.blob || (e.r = 1), e = e._next
                    },
                    i = e.prototype;
                i._onInitAllProps = function () {
                    for (var e, i, r, n = this._tween, o = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), a = o.length, s = {}, l = n._propLookup.roundProps; --a > -1;) s[o[a]] = 1;
                    for (a = o.length; --a > -1;)
                        for (e = o[a], i = n._firstPT; i;) r = i._next, i.pg ? i.t._roundProps(s, !0) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), r && (r._prev = i._prev), i._prev ? i._prev._next = r : n._firstPT === i && (n._firstPT = r), i._next = i._prev = null, n._propLookup[e] = l)), i = r;
                    return !1
                }, i._add = function (e, t, i, r) {
                    this._addTween(e, t, i, i + r, t, !0), this._overwriteProps.push(t)
                }
            }(),
            function () {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function (e, t, i) {
                        var r;
                        if ("function" != typeof e.setAttribute) return !1;
                        for (r in t) this._addTween(e, "setAttribute", e.getAttribute(r) + "", t[r] + "", r, !1, r), this._overwriteProps.push(r);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function (e, t, i) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var r, n, o, a, s, l, h = t.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (r in t) "useRadians" !== r && (l = (t[r] + "").split("_"), n = l[0], o = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? o + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, s = a - o, l.length && (n = l.join("_"), -1 !== n.indexOf("short") && (s %= h, s !== s % (h / 2) && (s = 0 > s ? s + h : s - h)), -1 !== n.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * h) % h - (s / h | 0) * h : -1 !== n.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * h) % h - (s / h | 0) * h)), (s > c || -c > s) && (this._addTween(e, r, o, o + s, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function (e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (e) {
                var t, i, r, n = _gsScope.GreenSockGlobals || _gsScope,
                    o = n.com.greensock,
                    a = 2 * Math.PI,
                    s = Math.PI / 2,
                    l = o._class,
                    h = function (t, i) {
                        var r = l("easing." + t, function () {}, !0),
                            n = r.prototype = new e;
                        return n.constructor = r, n.getRatio = i, r
                    },
                    c = e.register || function () {},
                    u = function (e, t, i, r, n) {
                        var o = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new r
                        }, !0);
                        return c(o, e), o
                    },
                    f = function (e, t, i) {
                        this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                    },
                    p = function (t, i) {
                        var r = l("easing." + t, function (e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            n = r.prototype = new e;
                        return n.constructor = r, n.getRatio = i, n.config = function (e) {
                            return new r(e)
                        }, r
                    },
                    d = u("Back", p("BackOut", function (e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function (e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function (e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function (e, t, i) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    E = m.prototype = new e;
                return E.constructor = m, E.getRatio = function (e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), E.config = m.config = function (e, t, i) {
                    return new m(e, t, i)
                }, t = l("easing.SteppedEase", function (e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0), E = t.prototype = new e, E.constructor = t, E.getRatio = function (e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, E.config = t.config = function (e) {
                    return new t(e)
                }, i = l("easing.RoughEase", function (t) {
                    t = t || {};
                    for (var i, r, n, o, a, s, l = t.taper || "none", h = [], c = 0, u = 0 | (t.points || 20), p = u, d = t.randomize !== !1, m = t.clamp === !0, E = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) i = d ? Math.random() : 1 / u * p, r = E ? E.getRatio(i) : i, "none" === l ? n = g : "out" === l ? (o = 1 - i, n = o * o * g) : "in" === l ? n = i * i * g : .5 > i ? (o = 2 * i, n = o * o * .5 * g) : (o = 2 * (1 - i), n = o * o * .5 * g), d ? r += Math.random() * n - .5 * n : p % 2 ? r += .5 * n : r -= .5 * n, m && (r > 1 ? r = 1 : 0 > r && (r = 0)), h[c++] = {
                        x: i,
                        y: r
                    };
                    for (h.sort(function (e, t) {
                            return e.x - t.x
                        }), s = new f(1, 1, null), p = u; --p > -1;) a = h[p], s = new f(a.x, a.y, s);
                    this._prev = new f(0, 0, 0 !== s.t ? s : s.next)
                }, !0), E = i.prototype = new e, E.constructor = i, E.getRatio = function (e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, E.config = function (e) {
                    return new i(e)
                }, i.ease = new i, u("Bounce", h("BounceOut", function (e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), h("BounceIn", function (e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), h("BounceInOut", function (e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), u("Circ", h("CircOut", function (e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), h("CircIn", function (e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), h("CircInOut", function (e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), r = function (t, i, r) {
                    var n = l("easing." + t, function (e, t) {
                            this._p1 = e >= 1 ? e : 1, this._p2 = (t || r) / (1 > e ? e : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        o = n.prototype = new e;
                    return o.constructor = n, o.getRatio = i, o.config = function (e, t) {
                        return new n(e, t)
                    }, n
                }, u("Elastic", r("ElasticOut", function (e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), r("ElasticIn", function (e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
                }, .3), r("ElasticInOut", function (e) {
                    return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", h("ExpoOut", function (e) {
                    return 1 - Math.pow(2, -10 * e)
                }), h("ExpoIn", function (e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), h("ExpoInOut", function (e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), u("Sine", h("SineOut", function (e) {
                    return Math.sin(e * s)
                }), h("SineIn", function (e) {
                    return -Math.cos(e * s) + 1
                }), h("SineInOut", function (e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function (t) {
                        return e.map[t]
                    }
                }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (e, t) {
        "use strict";
        var i = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!i.TweenLite) {
            var r, n, o, a, s, l = function (e) {
                    var t, r = e.split("."),
                        n = i;
                    for (t = 0; t < r.length; t++) n[r[t]] = n = n[r[t]] || {};
                    return n
                },
                h = l("com.greensock"),
                c = 1e-10,
                u = function (e) {
                    var t, i = [],
                        r = e.length;
                    for (t = 0; t !== r; i.push(e[t++]));
                    return i
                },
                f = function () {},
                p = function () {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                    }
                }(),
                d = {},
                m = function (r, n, o, a) {
                    this.sc = d[r] ? d[r].sc : [], d[r] = this, this.gsClass = null, this.func = o;
                    var s = [];
                    this.check = function (h) {
                        for (var c, u, f, p, E, g = n.length, v = g; --g > -1;)(c = d[n[g]] || new m(n[g], [])).gsClass ? (s[g] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && o)
                            for (u = ("com.greensock." + r).split("."), f = u.pop(), p = l(u.join("."))[f] = this.gsClass = o.apply(o, s), a && (i[f] = p, E = "undefined" != typeof module && module.exports, !E && "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                                    return p
                                }) : r === t && E && (module.exports = p)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                E = e._gsDefine = function (e, t, i, r) {
                    return new m(e, t, i, r)
                },
                g = h._class = function (e, t, i) {
                    return t = t || function () {}, E(e, [], function () {
                        return t
                    }, i), t
                };
            E.globals = i;
            var v = [0, 0, 1, 1],
                T = [],
                y = g("easing.Ease", function (e, t, i, r) {
                    this._func = e, this._type = i || 0, this._power = r || 0, this._params = t ? v.concat(t) : v
                }, !0),
                _ = y.map = {},
                R = y.register = function (e, t, i, r) {
                    for (var n, o, a, s, l = t.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (o = l[c], n = r ? g("easing." + o, null, !0) : h.easing[o] || {}, a = u.length; --a > -1;) s = u[a], _[o + "." + s] = _[s + o] = n[s] = e.getRatio ? e : e[s] || new e
                };
            for (o = y.prototype, o._calcEnd = !1, o.getRatio = function (e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
                }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = r.length; --n > -1;) o = r[n] + ",Power" + n, R(new y(null, null, 1, n), o, "easeOut", !0), R(new y(null, null, 2, n), o, "easeIn" + (0 === n ? ",easeNone" : "")), R(new y(null, null, 3, n), o, "easeInOut");
            _.linear = h.easing.Linear.easeIn, _.swing = h.easing.Quad.easeInOut;
            var x = g("events.EventDispatcher", function (e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            o = x.prototype, o.addEventListener = function (e, t, i, r, n) {
                n = n || 0;
                var o, l, h = this._listeners[e],
                    c = 0;
                for (null == h && (this._listeners[e] = h = []), l = h.length; --l > -1;) o = h[l], o.c === t && o.s === i ? h.splice(l, 1) : 0 === c && o.pr < n && (c = l + 1);
                h.splice(c, 0, {
                    c: t,
                    s: i,
                    up: r,
                    pr: n
                }), this !== a || s || a.wake()
            }, o.removeEventListener = function (e, t) {
                var i, r = this._listeners[e];
                if (r)
                    for (i = r.length; --i > -1;)
                        if (r[i].c === t) return void r.splice(i, 1)
            }, o.dispatchEvent = function (e) {
                var t, i, r, n = this._listeners[e];
                if (n)
                    for (t = n.length, i = this._eventTarget; --t > -1;) r = n[t], r && (r.up ? r.c.call(r.s || i, {
                        type: e,
                        target: i
                    }) : r.c.call(r.s || i))
            };
            var b = e.requestAnimationFrame,
                w = e.cancelAnimationFrame,
                H = Date.now || function () {
                    return (new Date).getTime()
                },
                S = H();
            for (r = ["ms", "moz", "webkit", "o"], n = r.length; --n > -1 && !b;) b = e[r[n] + "RequestAnimationFrame"], w = e[r[n] + "CancelAnimationFrame"] || e[r[n] + "CancelRequestAnimationFrame"];
            g("Ticker", function (e, t) {
                var i, r, n, o, l, h = this,
                    u = H(),
                    p = t !== !1 && b ? "auto" : !1,
                    d = 500,
                    m = 33,
                    E = "tick",
                    g = function (e) {
                        var t, a, s = H() - S;
                        s > d && (u += s - m), S += s, h.time = (S - u) / 1e3, t = h.time - l, (!i || t > 0 || e === !0) && (h.frame++, l += t + (t >= o ? .004 : o - t), a = !0), e !== !0 && (n = r(g)), a && h.dispatchEvent(E)
                    };
                x.call(h), h.time = h.frame = 0, h.tick = function () {
                    g(!0)
                }, h.lagSmoothing = function (e, t) {
                    d = e || 1 / c, m = Math.min(t, d, 0)
                }, h.sleep = function () {
                    null != n && (p && w ? w(n) : clearTimeout(n), r = f, n = null, h === a && (s = !1))
                }, h.wake = function (e) {
                    null !== n ? h.sleep() : e ? u += -S + (S = H()) : h.frame > 10 && (S = H() - d + 5), r = 0 === i ? f : p && b ? b : function (e) {
                        return setTimeout(e, 1e3 * (l - h.time) + 1 | 0)
                    }, h === a && (s = !0), g(2)
                }, h.fps = function (e) {
                    return arguments.length ? (i = e, o = 1 / (i || 60), l = this.time + o, void h.wake()) : i
                }, h.useRAF = function (e) {
                    return arguments.length ? (h.sleep(), p = e, void h.fps(i)) : p
                }, h.fps(e), setTimeout(function () {
                    "auto" === p && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
                }, 1500)
            }), o = h.Ticker.prototype = new h.events.EventDispatcher, o.constructor = h.Ticker;
            var M = g("core.Animation", function (e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, Y) {
                    s || a.wake();
                    var i = this.vars.useFrames ? X : Y;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = M.ticker = new h.Ticker, o = M.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var C = function () {
                s && H() - S > 2e3 && a.wake(), setTimeout(C, 2e3)
            };
            C(), o.play = function (e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, o.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, o.resume = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, o.seek = function (e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, o.restart = function (e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, o.reverse = function (e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, o.render = function (e, t, i) {}, o.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function () {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale
            }, o._enabled = function (e, t) {
                return s || a.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function (e, t) {
                return this._enabled(!1, !1)
            }, o.kill = function (e, t) {
                return this._kill(e, t), this
            }, o._uncache = function (e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, o._swapSelfInParams = function (e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, o._callback = function (e) {
                var t = this.vars;
                t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || T)
            }, o.eventCallback = function (e, t, i, r) {
                if ("on" === (e || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[e];
                    null == t ? delete n[e] : (n[e] = t, n[e + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, o.delay = function (e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, o.duration = function (e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function (e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, o.time = function (e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, o.totalTime = function (e, t, i) {
                if (s || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var r = this._totalDuration,
                            n = this._timeline;
                        if (e > r && !i && (e = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - e : e) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (D.length && K(), this.render(e, t, !1), D.length && K())
                }
                return this
            }, o.progress = o.totalProgress = function (e, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
            }, o.startTime = function (e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, o.endTime = function (e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function (e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || c, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, o.reversed = function (e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function (e) {
                if (!arguments.length) return this._paused;
                var t, i, r = this._timeline;
                return e != this._paused && r && (s || e || a.wake(), t = r.rawTime(), i = t - this._pauseTime, !e && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var A = g("core.SimpleTimeline", function (e) {
                M.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = A.prototype = new M, o.constructor = A, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (e, t, i, r) {
                var n, o;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (o = e._startTime; n && n._startTime > o;) n = n._prev;
                return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._recent = e, this._timeline && this._uncache(!0), this
            }, o._remove = function (e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function (e, t, i) {
                var r, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; n;) r = n._next, (n._active || e >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r
            }, o.rawTime = function () {
                return s || a.wake(), this._totalTime
            };
            var P = g("TweenLite", function (t, i, r) {
                    if (M.call(this, i, r), this.render = P.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : P.selector(t) || t;
                    var n, o, a, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? j[P.defaultOverwrite] : "number" == typeof l ? l >> 0 : j[l], (s || t instanceof Array || t.push && p(t)) && "number" != typeof t[0])
                        for (this._targets = a = u(t), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++) o = a[n], o ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(u(o))) : (this._siblings[n] = $(o, this, !1), 1 === l && this._siblings[n].length > 1 && Q(o, this, null, 1, this._siblings[n])) : (o = a[n--] = P.selector(o), "string" == typeof o && a.splice(n + 1, 1)) : a.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = $(t, this, !1), 1 === l && this._siblings.length > 1 && Q(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                L = function (t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                F = function (e, t) {
                    var i, r = {};
                    for (i in e) W[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!k[i] || k[i] && k[i]._autoCSS) || (r[i] = e[i], delete e[i]);
                    e.css = r
                };
            o = P.prototype = new M, o.constructor = P, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, P.version = "1.18.2", P.defaultEase = o._ease = new y(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = a, P.autoSleep = 120, P.lagSmoothing = function (e, t) {
                a.lagSmoothing(e, t)
            }, P.selector = e.$ || e.jQuery || function (t) {
                var i = e.$ || e.jQuery;
                return i ? (P.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var D = [],
                z = {},
                U = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = function (e) {
                    for (var t, i = this._firstPT, r = 1e-6; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s, i.r ? t = Math.round(t) : r > t && t > -r && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                },
                O = function (e, t, i, r) {
                    var n, o, a, s, l, h, c, u = [e, t],
                        f = 0,
                        p = "",
                        d = 0;
                    for (u.start = e, i && (i(u), e = u[0], t = u[1]), u.length = 0, n = e.match(U) || [], o = t.match(U) || [], r && (r._next = null, r.blob = 1, u._firstPT = r), l = o.length, s = 0; l > s; s++) c = o[s], h = t.substr(f, t.indexOf(c, f) - f), p += h || !s ? h : ",", f += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), c === n[s] || n.length <= s ? p += c : (p && (u.push(p), p = ""), a = parseFloat(n[s]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                        f: 0,
                        r: d && 4 > d
                    }), f += c.length;
                    return p += t.substr(f), p && u.push(p), u.setRatio = N, u
                },
                B = function (e, t, i, r, n, o, a, s) {
                    var l, h, c = "get" === i ? e[t] : i,
                        u = typeof e[t],
                        f = "string" == typeof r && "=" === r.charAt(1),
                        p = {
                            t: e,
                            p: t,
                            s: c,
                            f: "function" === u,
                            pg: 0,
                            n: n || t,
                            r: o,
                            pr: 0,
                            c: f ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - c || 0
                        };
                    return "number" !== u && ("function" === u && "get" === i && (h = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), p.s = c = a ? e[h](a) : e[h]()), "string" == typeof c && (a || isNaN(c)) ? (p.fp = a, l = O(c, r, s || P.defaultStringFilter, p), p = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: n || t,
                        pr: 0
                    }) : f || (p.s = parseFloat(c), p.c = parseFloat(r) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
                },
                V = P._internals = {
                    isArray: p,
                    isSelector: L,
                    lazyTweens: D,
                    blobDif: O
                },
                k = P._plugins = {},
                I = V.tweenLookup = {},
                G = 0,
                W = V.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                j = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                X = M._rootFramesTimeline = new A,
                Y = M._rootTimeline = new A,
                q = 30,
                K = V.lazyRender = function () {
                    var e, t = D.length;
                    for (z = {}; --t > -1;) e = D[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    D.length = 0
                };
            Y._startTime = a.time, X._startTime = a.frame, Y._active = X._active = !0, setTimeout(K, 1), M._updateRoot = P.render = function () {
                var e, t, i;
                if (D.length && K(), Y.render((a.time - Y._startTime) * Y._timeScale, !1, !1), X.render((a.frame - X._startTime) * X._timeScale, !1, !1), D.length && K(), a.frame >= q) {
                    q = a.frame + (parseInt(P.autoSleep, 10) || 120);
                    for (i in I) {
                        for (t = I[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete I[i]
                    }
                    if (i = Y._first, (!i || i._paused) && P.autoSleep && !X._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", M._updateRoot);
            var $ = function (e, t, i) {
                    var r, n, o = e._gsTweenID;
                    if (I[o || (e._gsTweenID = o = "t" + G++)] || (I[o] = {
                            target: e,
                            tweens: []
                        }), t && (r = I[o].tweens, r[n = r.length] = t, i))
                        for (; --n > -1;) r[n] === t && r.splice(n, 1);
                    return I[o].tweens
                },
                Z = function (e, t, i, r) {
                    var n, o, a = e.vars.onOverwrite;
                    return a && (n = a(e, t, i, r)), a = P.onOverwrite, a && (o = a(e, t, i, r)), n !== !1 && o !== !1
                },
                Q = function (e, t, i, r, n) {
                    var o, a, s, l;
                    if (1 === r || r >= 4) {
                        for (l = n.length, o = 0; l > o; o++)
                            if ((s = n[o]) !== t) s._gc || s._kill(null, e, t) && (a = !0);
                            else if (5 === r) break;
                        return a
                    }
                    var h, u = t._startTime + c,
                        f = [],
                        p = 0,
                        d = 0 === t._duration;
                    for (o = n.length; --o > -1;)(s = n[o]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (h = h || J(t, 0, d), 0 === J(s, h, d) && (f[p++] = s)) : s._startTime <= u && s._startTime + s.totalDuration() / s._timeScale > u && ((d || !s._initted) && u - s._startTime <= 2e-10 || (f[p++] = s)));
                    for (o = p; --o > -1;)
                        if (s = f[o], 2 === r && s._kill(i, e, t) && (a = !0), 2 !== r || !s._firstPT && s._initted) {
                            if (2 !== r && !Z(s, t)) continue;
                            s._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                J = function (e, t, i) {
                    for (var r = e._timeline, n = r._timeScale, o = e._startTime; r._timeline;) {
                        if (o += r._startTime, n *= r._timeScale, r._paused) return -100;
                        r = r._timeline
                    }
                    return o /= n, o > t ? o - t : i && o === t || !e._initted && 2 * c > o - t ? c : (o += e.totalDuration() / e._timeScale / n) > t + c ? 0 : o - t - c
                };
            o._init = function () {
                var e, t, i, r, n, o = this.vars,
                    a = this._overwrittenProps,
                    s = this._duration,
                    l = !!o.immediateRender,
                    h = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                    for (r in o.startAt) n[r] = o.startAt[r];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && o.lazy !== !1, n.startAt = n.delay = null, this._startAt = P.to(this.target, 0, n), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== s) return
                } else if (o.runBackwards && 0 !== s)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (r in o) W[r] && "autoCSS" !== r || (i[r] = o[r]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = P.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, o.easeParams) : _[h] || P.defaultEase : P.defaultEase, o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (t && P._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function (t, i, r, n) {
                var o, a, s, l, h, c;
                if (null == t) return !1;
                z[t._gsTweenID] && K(), this.vars.css || t.style && t !== e && t.nodeType && k.css && this.vars.autoCSS !== !1 && F(this.vars, t);
                for (o in this.vars)
                    if (c = this.vars[o], W[o]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (k[o] && (l = new k[o])._onInitTween(t, this.vars[o], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else i[o] = B.call(this, t, o, "get", c, o, 0, null, this.vars.stringFilter);
                return n && this._kill(n, t) ? this._initProps(t, i, r, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && Q(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0), s)
            }, o.render = function (e, t, i) {
                var r, n, o, a, s = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (e >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > h || 0 >= e && e >= -1e-7 || h === c && "isPause" !== this.data) && h !== e && (i = !0, h > c && (n = "onReverseComplete")), this._rawPrevTime = a = !t || e || h === e ? e : c);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && h > 0) && (n = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !t || e || h === e ? e : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var u = e / l,
                        f = this._easeType,
                        p = this._easePower;
                    (1 === f || 3 === f && u >= .5) && (u = 1 - u), 3 === f && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), 1 === f ? this.ratio = 1 - u : 2 === f ? this.ratio = u : .5 > e / l ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== s || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = h, D.push(this), void(this._lazy = [e, t]);
                        this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && e >= 0 && (this._active = !0), 0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, i), t || (this._time !== s || r) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, o._kill = function (e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : P.selector(t) || t;
                var r, n, o, a, s, l, h, c, u, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((p(t) || L(t)) && "number" != typeof t[0])
                    for (r = t.length; --r > -1;) this._kill(e, t[r], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (r = this._targets.length; --r > -1;)
                            if (t === this._targets[r]) {
                                s = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        s = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (s) {
                        if (h = e || s, c = e !== n && "all" !== n && e !== s && ("object" != typeof e || !e._tempKill), i && (P.onOverwrite || this.vars.onOverwrite)) {
                            for (o in h) s[o] && (u || (u = []), u.push(o));
                            if ((u || !e) && !Z(this, i, t, u)) return !1
                        }
                        for (o in h)(a = s[o]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), c && (n[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function () {
                return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, o._enabled = function (e, t) {
                if (s || a.wake(), e && this._gc) {
                    var i, r = this._targets;
                    if (r)
                        for (i = r.length; --i > -1;) this._siblings[i] = $(r[i], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return M.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? P._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, P.to = function (e, t, i) {
                return new P(e, t, i)
            }, P.from = function (e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new P(e, t, i)
            }, P.fromTo = function (e, t, i, r) {
                return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new P(e, t, r)
            }, P.delayedCall = function (e, t, i, r, n) {
                return new P(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: r,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, P.set = function (e, t) {
                return new P(e, 0, t)
            }, P.getTweensOf = function (e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : P.selector(e) || e;
                var i, r, n, o;
                if ((p(e) || L(e)) && "number" != typeof e[0]) {
                    for (i = e.length, r = []; --i > -1;) r = r.concat(P.getTweensOf(e[i], t));
                    for (i = r.length; --i > -1;)
                        for (o = r[i], n = i; --n > -1;) o === r[n] && r.splice(i, 1)
                } else
                    for (r = $(e).concat(), i = r.length; --i > -1;)(r[i]._gc || t && !r[i].isActive()) && r.splice(i, 1);
                return r
            }, P.killTweensOf = P.killDelayedCallsTo = function (e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var r = P.getTweensOf(e, t), n = r.length; --n > -1;) r[n]._kill(i, e)
            };
            var ee = g("plugins.TweenPlugin", function (e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ee.prototype
            }, !0);
            if (o = ee.prototype, ee.version = "1.18.0", ee.API = 2, o._firstPT = null, o._addTween = B, o.setRatio = N, o._kill = function (e) {
                    var t, i = this._overwriteProps,
                        r = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                    return !1
                }, o._roundProps = function (e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, P._onPluginEvent = function (e, t) {
                    var i, r, n, o, a, s = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; s;) {
                            for (a = s._next, r = n; r && r.pr > s.pr;) r = r._next;
                            (s._prev = r ? r._prev : o) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : o = s, s = a
                        }
                        s = t._firstPT = n
                    }
                    for (; s;) s.pg && "function" == typeof s.t[e] && s.t[e]() && (i = !0), s = s._next;
                    return i
                }, ee.activate = function (e) {
                    for (var t = e.length; --t > -1;) e[t].API === ee.API && (k[(new e[t])._propName] = e[t]);
                    return !0
                }, E.plugin = function (e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        r = e.priority || 0,
                        n = e.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                            ee.call(this, i, r), this._overwriteProps = n || []
                        }, e.global === !0),
                        s = a.prototype = new ee(i);
                    s.constructor = a, a.API = e.API;
                    for (t in o) "function" == typeof e[t] && (s[o[t]] = e[t]);
                    return a.version = e.version, ee.activate([a]), a
                }, r = e._gsQueue) {
                for (n = 0; n < r.length; n++) r[n]();
                for (o in d) d[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            s = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function (e, t) {
        function i(e) {
            return "string" == typeof e
        }

        function r(e) {
            var t = R.call(arguments, 1);
            return function () {
                return e.apply(this, t.concat(R.call(arguments)))
            }
        }

        function n(e) {
            return e.replace(v, "$2")
        }

        function o(e) {
            return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
        }

        function a(t, r, n, o, a) {
            var s, l, u, p, d;
            return o !== h ? (u = n.match(t ? v : /^([^#?]*)\??([^#]*)(#?.*)/), d = u[3] || "", 2 === a && i(o) ? l = o.replace(t ? g : F, "") : (p = f(u[2]), o = i(o) ? f[t ? C : M](o) : o, l = 2 === a ? o : 1 === a ? e.extend({}, o, p) : e.extend({}, p, o), l = c(l), t && (l = l.replace(T, x))), s = u[1] + (t ? _ : l || !u[1] ? "?" : "") + l + d) : s = r(n !== h ? n : location.href), s
        }

        function s(e, t, r) {
            return t === h || "boolean" == typeof t ? (r = t, t = b[e ? C : M]()) : t = i(t) ? t.replace(e ? g : F, "") : t, f(t, r)
        }

        function l(t, r, n, o) {
            return i(n) || "object" == typeof n || (o = n, n = r, r = h), this.each(function () {
                var i = e(this),
                    a = r || E()[(this.nodeName || "").toLowerCase()] || "",
                    s = a && i.attr(a) || "";
                i.attr(a, b[t](s, n, o))
            })
        }
        var h, c, u, f, p, d, m, E, g, v, T, y, _, R = Array.prototype.slice,
            x = decodeURIComponent,
            b = e.param,
            w = e.bbq = e.bbq || {},
            H = e.event.special,
            S = "hashchange",
            M = "querystring",
            C = "fragment",
            A = "elemUrlAttr",
            P = "href",
            L = "src",
            F = /^.*\?|#.*$/g,
            D = {};
        b[M] = r(a, 0, o), b[C] = u = r(a, 1, n), b.sorted = c = function (t, i) {
            var r = [],
                n = {};
            return e.each(b(t, i).split("&"), function (e, t) {
                var i = t.replace(/(?:%5B|=).*$/, ""),
                    o = n[i];
                o || (o = n[i] = [], r.push(i)), o.push(t)
            }), e.map(r.sort(), function (e) {
                return n[e]
            }).join("&")
        }, u.noEscape = function (t) {
            t = t || "";
            var i = e.map(t.split(""), encodeURIComponent);
            T = new RegExp(i.join("|"), "g")
        }, u.noEscape(",/"), u.ajaxCrawlable = function (e) {
            return e !== h && (e ? (g = /^.*(?:#!|#)/, v = /^([^#]*)(?:#!|#)?(.*)$/, _ = "#!") : (g = /^.*#/, v = /^([^#]*)#?(.*)$/, _ = "#"), y = !!e), y
        }, u.ajaxCrawlable(0), e.deparam = f = function (t, i) {
            var r = {},
                n = {
                    "true": !0,
                    "false": !1,
                    "null": null
                };
            return e.each(t.replace(/\+/g, " ").split("&"), function (t, o) {
                var a, s = o.split("="),
                    l = x(s[0]),
                    c = r,
                    u = 0,
                    f = l.split("]["),
                    p = f.length - 1;
                if (/\[/.test(f[0]) && /\]$/.test(f[p]) ? (f[p] = f[p].replace(/\]$/, ""), f = f.shift().split("[").concat(f), p = f.length - 1) : p = 0, 2 === s.length)
                    if (a = x(s[1]), i && (a = a && !isNaN(a) ? +a : "undefined" === a ? h : n[a] !== h ? n[a] : a), p)
                        for (; p >= u; u++) l = "" === f[u] ? c.length : f[u], c = c[l] = p > u ? c[l] || (f[u + 1] && isNaN(f[u + 1]) ? {} : []) : a;
                    else e.isArray(r[l]) ? r[l].push(a) : r[l] !== h ? r[l] = [r[l], a] : r[l] = a;
                else l && (r[l] = i ? h : "")
            }), r
        }, f[M] = r(s, 0), f[C] = p = r(s, 1), e[A] || (e[A] = function (t) {
            return e.extend(D, t)
        })({
            a: P,
            base: P,
            iframe: L,
            img: L,
            input: L,
            form: "action",
            link: P,
            script: L
        }), E = e[A], e.fn[M] = r(l, M), e.fn[C] = r(l, C), w.pushState = d = function (e, t) {
            i(e) && /^#/.test(e) && t === h && (t = 2);
            var r = e !== h,
                n = u(location.href, r ? e : {}, r ? t : 2);
            location.href = n
        }, w.getState = m = function (e, t) {
            return e === h || "boolean" == typeof e ? p(e) : p(t)[e]
        }, w.removeState = function (t) {
            var i = {};
            t !== h && (i = m(), e.each(e.isArray(t) ? t : arguments, function (e, t) {
                delete i[t]
            })), d(i, 2)
        }, H[S] = e.extend(H[S], {
            add: function (t) {
                function i(e) {
                    var t = e[C] = u();
                    e.getState = function (e, i) {
                        return e === h || "boolean" == typeof e ? f(t, e) : f(t, i)[e]
                    }, r.apply(this, arguments)
                }
                var r;
                return e.isFunction(t) ? (r = t, i) : (r = t.handler, void(t.handler = i))
            }
        })
    }(jQuery, this),
    function (e, t, i) {
        function r(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var n, o = "hashchange",
            a = document,
            s = e.event.special,
            l = a.documentMode,
            h = "on" + o in t && (l === i || l > 7);
        e.fn[o] = function (e) {
            return e ? this.bind(o, e) : this.trigger(o)
        }, e.fn[o].delay = 50, s[o] = e.extend(s[o], {
            setup: function () {
                return h ? !1 : void e(n.start)
            },
            teardown: function () {
                return h ? !1 : void e(n.stop)
            }
        }), n = function () {
            function n() {
                var i = r(),
                    a = p(c);
                i !== c ? (f(c = i, a), e(t).trigger(o)) : a !== c && (location.href = location.href.replace(/#.*/, "") + a), s = setTimeout(n, e.fn[o].delay)
            }
            var s, l = {},
                c = r(),
                u = function (e) {
                    return e
                },
                f = u,
                p = u;
            return l.start = function () {
                s || n()
            }, l.stop = function () {
                s && clearTimeout(s), s = i
            }, e.browser.msie && !h && function () {
                var t, i;
                l.start = function () {
                    t || (i = e.fn[o].src, i = i && i + r(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        i || f(r()), n()
                    }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, a.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (t.document.title = a.title)
                        } catch (e) {}
                    })
                }, l.stop = u, p = function () {
                    return r(t.location.href)
                }, f = function (i, r) {
                    var n = t.document,
                        s = e.fn[o].domain;
                    i !== r && (n.title = a.title, n.open(), s && n.write('<script>document.domain="' + s + '"</script>'), n.close(), t.location.hash = i)
                }
            }(), l
        }()
    }(jQuery, this),
    function () {
        var e;
        window.stopLoad = !0, e = function () {
            var e, t, i, r, n, o, a, s, l, h, c, u, f, p, d, m, E, g;
            u = !0, g = 0, r = function (e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }, l = 0, i = function () {
                var e, t, n;
                for (e = ["Mixing awesomesauce", "Generating experiences", "Synchronizing passions", "Revitalizing dreams", "Building the unbuildable", "Inspiring innovation", "Flying to the moon", "Spreading smiles", "Filtering memes", "Feeding puppies", "Picking up Bobby Tables"], n = l; n === l;) n = r(0, e.length - 1);
                l = n, $("#loader-old-message").remove(), t = $("<div />").text(e[n]).attr({
                    "class": "loader-message",
                    id: "loader-next-message"
                }).appendTo("#loader"), $("#loader-main-message").attr({
                    id: "loader-old-message"
                }), setTimeout(function () {
                    return t.attr({
                        id: "loader-main-message"
                    })
                }, 10), setTimeout(function () {
                    u && i()
                }, 1200)
            }, setTimeout(function () {
                return u ? i() : void 0
            }, 400), d = function (e) {
                null == e && (e = !1), $("#pages").css({
                    "min-height": $(window).height()
                }), g = $(window).height(), $("#pages>.page, .page-height").css({
                    minHeight: g - $("#nav").outerHeight() - $("#spacer").outerHeight()
                }), $(".v-center-self").each(function () {
                    var e;
                    return e = $(this).parent().innerHeight() / 2 - $(this).outerHeight() / 2, 0 > e && (e = 0), $(this).css({
                        top: e
                    })
                }), $(".v-center").each(function () {
                    var e;
                    return e = g / 2 - $(this).outerHeight() / 2 - 42, 0 > e && (e = 0), $(this).css({
                        top: e
                    })
                }), e || (setTimeout(function () {
                    return d(!0)
                }, 500), setTimeout(function () {
                    return d(!0)
                }, 1e3))
            }, e = [], m = [], t = {
                home: window.home,
                blog: function () {
                    return function () {}
                },
                portfolio: function () {
                    return $("#portfolio-bottom a:first").trigger("click"),
                        function () {}
                },
                about: function () {
                    var e, t, i, r, n, o, a;
                    return e = new ScrollMagic.Controller, $(window).width() > 768 && (o = new TimelineMax, o.add([TweenMax.fromTo("#about-part-2-title", 1, {
                            x: "160px",
                            opacity: 0
                        }, {
                            x: 0,
                            opacity: 1,
                            ease: Power2.easeOut
                        }), TweenMax.fromTo("#about-part-2-image", 1, {
                            y: "190px",
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            ease: Power2.easeOut
                        }), TweenMax.fromTo("#about-part-2-paragraph", 1, {
                            x: "260px",
                            opacity: 0
                        }, {
                            x: 0,
                            opacity: 1,
                            ease: Power2.easeOut
                        })]), a = new TimelineMax, a.add([TweenMax.fromTo("#about-title", 1, {
                            y: 0
                        }, {
                            y: 100,
                            ease: Power0.easeNone
                        }), TweenMax.fromTo("#about-subtitle", 1, {
                            y: 0
                        }, {
                            y: 150,
                            ease: Power0.easeNone
                        }), TweenMax.fromTo("#about-down-arrow", 1, {
                            y: 0
                        }, {
                            y: 0,
                            ease: Power0.easeNone
                        }), TweenMax.fromTo("#about-part-1-parent", 1, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: Power0.easeNone
                        })]), t = new ScrollMagic.Scene({
                            duration: 300,
                            offset: 0,
                            triggerElement: "#about-part-2",
                            reverse: !0
                        }), t.setTween(o), i = new ScrollMagic.Scene({
                            duration: 600,
                            offset: 200,
                            triggerElement: "#about-part-1",
                            reverse: !0
                        }), i.setTween(a), e.addScene(t).addScene(i)), r = new ScrollMagic.Scene({
                            offset: 0,
                            triggerElement: "#about-part-3-main",
                            reverse: !0
                        }), n = new ScrollMagic.Scene({
                            offset: 0,
                            triggerElement: "#about-steps",
                            reverse: !0
                        }), r.setClassToggle("#about", "society"), n.setClassToggle("#about-steps", "active"), e.addScene(r).addScene(n), m.push(e),
                        function () {}
                }
            }, $("#about-scroll-down-1").click(function () {
                return $("body").animate({
                    scrollTop: g
                }, 750)
            }), E = function () {}, c = function (i) {
                var r, n, o, a, s, l, h, c;
                for (E(), $("#mobile-menu").hasClass("active") && ($("#hamburger").removeClass("active"), $("#mobile-menu").removeClass("active").delay(200).hide(1)), h = $("#pages>.page.active").removeClass("ready"), h.removeClass("active"), $("#nav a.active").removeClass("active"), o = 0, s = e.length; s > o; o++) r = e[o], r.off(".controller");
                for (a = 0, l = m.length; l > a; a++) n = m[a], n.destroy(!0);
                $("#nav a[href='/#!/" + i + "']").addClass("active"), $("#" + i).css({
                    opacity: 0
                }).show(), c = new TimelineMax, c.add([TweenMax.fromTo(h, .3, {
                    y: "0%",
                    opacity: 1
                }, {
                    y: "-50px",
                    opacity: 0,
                    ease: Power1.easeOut,
                    onComplete: function () {
                        h.hide()
                    }
                }), TweenMax.fromTo($("#" + i), .3, {
                    y: "50px",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    ease: Power1.easeOut
                })]), c.play(), $(window).scrollTop(0), setTimeout(function () {
                    return $("#" + i).addClass("active"), d(), $(window).trigger("scroll")
                }, 100), E = t[i](), d()
            }, $(window).on("hashchange", function () {
                var e, i;
                return 0 === document.location.hash.indexOf("#!/") && document.location.hash.substring(3) in t || (document.location.hash = "#!/home"), i = document.location.hash.substring(3), e = document.location.hash.substring(3), c(e)
            }), o = 0;
            for (a = 0, h = projectData.length; h > a; a++) p = projectData[a], $("#portfolio-content").prepend('<div class="slide" data-image="' + p.image + '" style="background-image:url(\'assets/img/sites/' + p.image + '\');"><div class="color-overlay" style="background: linear-gradient(' + projectColors[o] + ", " + projectColors[o + 1] + ');"></div><img class="overlay" src="assets/img/whiteoverlay.png"/><div class="v-center-self"><h1>' + p.name + "</h1><h2>" + p.subtitle + '</h2><a href="' + p.url + '" class="btn" target="_blank">SEE PROJECT</a></div></div>'), $("#portfolio-bottom").append('<a href="javascript:void(0);" data-image="' + p.image + '"><span></span></a>'), o++;
            return !isMobile.any && Modernizr.webgl ? $("#home-name-alt").hide() : $("#home-name").hide(), $(window).load(function () {
                u = !1, $("#loader").addClass("loaded"), $("#pages").addClass("loaded"), setTimeout(function () {
                    return $("#nav").addClass("loaded"), $("#loader").hide()
                }, 500), d(), "#!/contact" === document.location.hash && ($(".contact-link:first").trigger("click"), document.location.hash = "#!/home"), $(window).trigger("hashchange")
            }).resize(d), $(".contact-link").click(function (e) {
                var t;
                return e.preventDefault(), $("body").toggleClass("contact"), $("body").hasClass("contact") ? (t = $("#contact").outerHeight(), $("#pages, #nav").css({
                    transform: "translate3d(0," + t + "px,0)"
                })) : $("#pages, #nav").css({
                    transform: "translate3d(0,0,0)"
                })
            }), f = null, $("#about-down-arrow").click(function () {
                return $("body").animate({
                    scrollTop: $("#about-part-2").offset().top - $("#nav").outerHeight() - 15
                }, 300)
            }), $("#portfolio-bottom a").click(function () {
                var e, t;
                return t = $("#portfolio .slide.active"), $("#portfolio .active").removeClass("active"), $(this).addClass("active"), e = $("#portfolio .slide[data-image='" + $(this).attr("data-image") + "']"), e.addClass("active"), TweenMax.fromTo(t, .3, {
                    css: {
                        y: 0,
                        opacity: 1
                    }
                }, {
                    css: {
                        y: -50,
                        opacity: 0,
                        ease: Power4.easeOut
                    }
                }), TweenMax.fromTo(e, .3, {
                    css: {
                        y: 50,
                        opacity: 0
                    }
                }, {
                    css: {
                        y: 0,
                        opacity: 1,
                        ease: Power4.easeOut
                    }
                })
            }).mouseenter(function () {
                return f = $("<div />").css({
                    "background-image": "url('/assets/img/screenshots/" + $(this).attr("data-image") + "')"
                }).addClass("portfolio-hover"), f.appendTo("body"), f.css({
                    bottom: $(window).height() - $(this).offset().top + 20,
                    left: $(this).offset().left - f.outerWidth() / 2 + $(this).outerWidth() / 2 + 7.5
                }), TweenMax.fromTo(f, .3, {
                    css: {
                        y: -10,
                        opacity: 0
                    }
                }, {
                    css: {
                        y: 0,
                        opacity: 1
                    }
                })
            }).mouseleave(function () {
                var e;
                return e = f, TweenMax.fromTo(e, .3, {
                    css: {
                        y: 0,
                        opacity: 1
                    }
                }, {
                    css: {
                        y: -10,
                        opacity: 0
                    },
                    onComplete: function () {
                        return e.remove()
                    }
                })
            }), s = 0, $("#portfolio .slide").bind("mousewheel DOMMouseScroll", function (e) {
                var t;
                return $(window).width() <= 768 || (t = (new Date).getTime(), 500 > t - s) ? void 0 : (s = t, e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? $("#portfolio-bottom a.active").prev().trigger("click") : $("#portfolio-bottom a.active").next().trigger("click"))
            }), n = !1
        }, $(e)
    }.call(this);
var homeData = {
        init: !1,
        cubes: []
    },
    projectColors = ["#1577E8", "#EA16F5", "#16F516", "#A200FF", "#FFFB00", "#FF0000", "#00FFB3"],
    projectData = [{
        name: "PROJECT 5K",
        image: "project5k.jpg",
        subtitle: "Promoting greater volunteerism among youth",
        url: "http://project5k.ca"
    }, {
        name: "VIA MUSICA",
        image: "viamusica.jpg",
        subtitle: "Enhancing music study through digital innovation",
        url: "http://viamusica.com"
    }, {
        name: "IN THE LOOP",
        image: "intheloop.jpg",
        subtitle: "Easing access to breaking news through machine-learning",
        url: "http://devpost.com/software/in-the-loop-real-time-news-aggregating-web-app"
    }, {
        name: "YIELD FUNDING GROUP",
        image: "yieldfunding.jpg",
        subtitle: "Enabling a new generation of B2B funding",
        url: "http://yieldfunding.com"
    }, {
        name: "MARKVILLE HISTORY",
        image: "markvillehistory.jpg",
        subtitle: "Improving experiences for a traditional school website",
        url: "http://markvillehistory.com"
    }, {
        name: "MARKHAM GETTING TOGETHER",
        image: "mgt.jpg",
        subtitle: "Faciliating greater outreach for community events",
        url: "http://markham-getting-together.com"
    }];
window.home = function () {
    function e() {
        homeData.renderer.render(scene, camera)
    }

    function t() {
        function e(e) {
            var o, a, s = 6,
                l = 0,
                h = 0,
                c = 1e3,
                u = 1e3;
            for (n = [], t.clearRect(0, 0, i, r), t.font = "20px Arial", t.fillText(e.toUpperCase(), 0, 20), a = new Uint32Array(t.getImageData(0, 0, i, r).data.buffer), o = 0; o < a.length; o++)
                if (4278190080 & a[o]) {
                    var f = o % i * s * 2 + s,
                        p = (o / i | 0) * s * 2 + s;
                    l = Math.max(f, l), h = Math.max(p, h), c = Math.min(f, c), u = Math.min(p, u), n.push({
                        x: f,
                        y: p
                    })
                }
            return {
                max: [l, h],
                min: [c, u],
                coords: n
            }
        }
        homeData.init = !0;
        var t = $("<canvas />")[0].getContext("2d"),
            i = t.canvas.width,
            r = t.canvas.height,
            n = [];
        t.fillStyle = "rgb(0, 154, 253)";
        var o = $("#home-name");
        homeData.renderer = new THREE.WebGLRenderer({
            antialias: !0,
            alpha: !0,
            canvas: o[0]
        }), homeData.renderer.setClearColor(0, 0), homeData.renderer.setSize(o.width(), o.height()), scene = new THREE.Scene, camera = new THREE.PerspectiveCamera(60, o.width() / o.height(), 1, 1e4), camera.position.z = 200, camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        }), scene.add(camera), plane = new THREE.Mesh(new THREE.PlaneGeometry(5e3, 5e3), new THREE.MeshBasicMaterial({
            color: 16777215
        })), scene.add(plane);
        var a = new THREE.SpotLight(16777215, 1);
        a.position.z = 2e3, a.position.y = 50, scene.add(a);
        var s = e("KEVIN");
        homeData.coords = s.coords, homeData.offsetX = (s.max[0] + s.min[0]) / 2, homeData.offsetY = (s.max[1] + s.min[1]) / 2;
        for (var l = [], h = 0; h < homeData.coords.length; h++) {
            var c = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 20), new THREE.MeshLambertMaterial({
                color: "#2098e8"
            }));
            c.position.x = homeData.coords[h].x - homeData.offsetX, c.position.y = -(homeData.coords[h].y - homeData.offsetY), c.position.z = -50;
            var u = (Math.abs(c.position.x) + Math.abs(c.position.y)) / 250;
            homeData.cubes.push(c), l.push(TweenMax.to(homeData.cubes[h].position, 2, {
                z: 0,
                delay: u
            })), scene.add(c)
        }
        var f = new TimelineMax;
        f.insertMultiple(l), f.play()
    }

    function i(e, t, i) {
        var r = new THREE.Color(e.material.color.getHex());
        TweenMax.to(r, 1, {
            r: t.r,
            g: t.g,
            b: t.b,
            delay: i,
            ease: Cubic.easeInOut,
            onUpdate: function () {
                e.material.color = r
            }
        })
    }
    if (!isMobile.any && Modernizr.webgl) {
        homeData.init || t();
        var r = $(window).width() / 2,
            n = $(window).height() / 2;
        return $(document).on("click.controller", function () {
                for (var e = Math.floor(16777215 * Math.random()), t = 0; t < homeData.coords.length; t++) {
                    var r = homeData.coords[t].x - homeData.offsetX,
                        n = -(homeData.coords[t].y - homeData.offsetY),
                        o = (Math.abs(r) + Math.abs(n)) / 1e3;
                    i(homeData.cubes[t], new THREE.Color(e), o)
                }
            }), $(document).on("mousemove.controller", function (e) {
                camera.position.x = -Math.min(12, Math.max(-12, (e.pageX - r) / 50)), camera.position.y = (e.pageY - n) / 7, camera.lookAt({
                    x: 0,
                    y: 0,
                    z: 0
                })
            }), TweenMax.ticker.addEventListener("tick", e),
            function () {
                TweenMax.ticker.removeEventListener("tick", e), $(document).off(".controller")
            }
    }
    return function () {}
};
var content = {
    about: {
        "about-subtitle": ["Skiing like a madman, git commiting with passion, and coding for the betterment of society.", "Ski like a madman, git committing with passion, code for better lives"],
        "about-part-2-paragraph": ["Hello there! My name is Kevin, and I am a 17 year old high school student from the beautiful city of Markham, Ontario. With a passion in computer science and web development, I work on earth-shaking (and sometimes not-so-earth-shaking) portfolio in my spare time. You know, things that get you right out of bed at the start of the day :)", "My name is Kevin<br/>High school student from Markham<br/>Coding is great fun<hr/>Projects are lovely<br/>Sometimes they are earth-shaking<br/>Sometimes they are not"],
        "about-part-3-paragraph-content": ["Technology is absolutely unique in its ability to rapidly permeate itself into everyone's daily life. Not only is this great for getting thousands of people to fly birds through pipes together, it's great for making real, positive social impact and change. It is this power that I harness on a daily basis.", "Tech can be unique<br/>It can change the world real fast.<br/>Just like angry birds<hr/>I use this power<br/>To make positive impacts<br/>All day, every day"],
        "about-part-4-paragraph": ["Be it 36 hours of programming, an all-nighter of studying, or plain, simple snow flying in my face, there is nothing like the adreneline of doing something <strong>cool.</strong>", "I can code all night<br/>I can wipeout on the snow<br/>Either way it's <strong>cool</strong>"]
    },
    contact: {
        "contact-paragraph": ["Opportunity, cordiality, or just plain curiosity? Either way, feel free to get in touch with one of the ways below!", "Opportunity?<br/>Or just curiosity?<br/>Either way, I'm free!"]
    }
};