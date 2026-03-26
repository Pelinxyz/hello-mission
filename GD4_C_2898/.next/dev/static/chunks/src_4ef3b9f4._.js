(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "a6ea650c73026f248d88f93882873c4a5d2907ac16ddae46af1729c80b09a706") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6ea650c73026f248d88f93882873c4a5d2907ac16ddae46af1729c80b09a706";
    }
    const { card, isFlipped, isMatched, onFlip } = t0;
    let t1;
    if ($[1] !== card.id || $[2] !== isFlipped || $[3] !== isMatched || $[4] !== onFlip) {
        t1 = ({
            "Card[handleClick]": ()=>{
                if (!isFlipped && !isMatched) {
                    onFlip(card.id);
                }
            }
        })["Card[handleClick]"];
        $[1] = card.id;
        $[2] = isFlipped;
        $[3] = isMatched;
        $[4] = onFlip;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleClick = t1;
    const isOpen = isFlipped || isMatched;
    const IconComponent = card.icon;
    const t2 = `
      w-24 h-24 flex items-center justify-center text-3xl
      rounded-2xl cursor-pointer select-none
      transition-all duration-300

      ${isOpen ? "bg-white scale-105 shadow-md" : "bg-gradient-to-br from-purple-500 to-indigo-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"}

      ${isMatched ? "ring-4 ring-green-400 opacity-80" : ""}
      `;
    let t3;
    if ($[6] !== IconComponent || $[7] !== card.color || $[8] !== isMatched || $[9] !== isOpen) {
        t3 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: isMatched ? "" : "animate-bounce",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                style: {
                    color: card.color
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Card.js",
                lineNumber: 49,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 49,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuestion"], {
            className: "text-white/70"
        }, void 0, false, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 51,
            columnNumber: 22
        }, this);
        $[6] = IconComponent;
        $[7] = card.color;
        $[8] = isMatched;
        $[9] = isOpen;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== handleClick || $[12] !== t2 || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: handleClick,
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/Card.js",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[11] = handleClick;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
}
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GameBoard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.js [app-client] (ecmascript)");
;
;
;
;
function GameBoard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "23d21bd4d1da60583c5134899ad7bf4a8808b3eca3dd91cca119516669dda6c9") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "23d21bd4d1da60583c5134899ad7bf4a8808b3eca3dd91cca119516669dda6c9";
    }
    const { cards: t1, flippedCards: t2, matchedCards: t3, onFlip } = t0;
    let t4;
    if ($[1] !== t1) {
        t4 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const cards = t4;
    let t5;
    if ($[3] !== t2) {
        t5 = t2 === undefined ? [] : t2;
        $[3] = t2;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    const flippedCards = t5;
    let t6;
    if ($[5] !== t3) {
        t6 = t3 === undefined ? [] : t3;
        $[5] = t3;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const matchedCards = t6;
    let t7;
    if ($[7] !== cards || $[8] !== flippedCards || $[9] !== matchedCards || $[10] !== onFlip) {
        let t8;
        if ($[12] !== flippedCards || $[13] !== matchedCards || $[14] !== onFlip) {
            t8 = ({
                "GameBoard[cards.map()]": (card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: card,
                        isFlipped: flippedCards.includes(card.id),
                        isMatched: matchedCards.includes(card.id),
                        onFlip: onFlip
                    }, card.id, false, {
                        fileName: "[project]/src/components/GameBoard.js",
                        lineNumber: 50,
                        columnNumber: 43
                    }, this)
            })["GameBoard[cards.map()]"];
            $[12] = flippedCards;
            $[13] = matchedCards;
            $[14] = onFlip;
            $[15] = t8;
        } else {
            t8 = $[15];
        }
        t7 = cards.map(t8);
        $[7] = cards;
        $[8] = flippedCards;
        $[9] = matchedCards;
        $[10] = onFlip;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-6 justify-items-center",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/GameBoard.js",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_c = GameBoard;
const __TURBOPACK__default__export__ = GameBoard;
var _c;
__turbopack_context__.k.register(_c, "GameBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScoreBoard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
;
;
function ScoreBoard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "d8a6d00c76dcf2fa859a210dd85b58bc964de12c135bad2564c9fbb815fc5a0d") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8a6d00c76dcf2fa859a210dd85b58bc964de12c135bad2564c9fbb815fc5a0d";
    }
    const { moves, matchedCount, totalPairs, time, onReset, onShuffle } = t0;
    const isGameComplete = matchedCount === totalPairs;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let t1;
    if ($[1] !== seconds) {
        t1 = seconds.toString().padStart(2, "0");
        $[1] = seconds;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const formattedTime = `${minutes}:${t1}`;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm flex justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                    fileName: "[project]/src/components/ScoreBoard.js",
                    lineNumber: 34,
                    columnNumber: 59
                }, this),
                " WAKTU"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== formattedTime) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl w-36",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold",
                    children: formattedTime
                }, void 0, false, {
                    fileName: "[project]/src/components/ScoreBoard.js",
                    lineNumber: 41,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[4] = formattedTime;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm flex justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMousePointer"], {}, void 0, false, {
                    fileName: "[project]/src/components/ScoreBoard.js",
                    lineNumber: 49,
                    columnNumber: 59
                }, this),
                " PERCOBAAN"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== moves) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl w-36",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold",
                    children: moves
                }, void 0, false, {
                    fileName: "[project]/src/components/ScoreBoard.js",
                    lineNumber: 56,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = moves;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm flex justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                    fileName: "[project]/src/components/ScoreBoard.js",
                    lineNumber: 64,
                    columnNumber: 59
                }, this),
                " DITEMUKAN"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== matchedCount || $[11] !== totalPairs) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl w-36",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold",
                    children: [
                        matchedCount,
                        "/",
                        totalPairs
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ScoreBoard.js",
                    lineNumber: 71,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[10] = matchedCount;
        $[11] = totalPairs;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t3 || $[14] !== t5 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-6 justify-center mb-6",
            children: [
                t3,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t5;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== formattedTime || $[18] !== isGameComplete || $[19] !== moves) {
        t9 = isGameComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-yellow-400/20 border border-yellow-400 px-6 py-4 rounded-2xl mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-yellow-300 text-xl font-bold",
                children: [
                    "🎉 Selamat! Selesai dalam ",
                    formattedTime,
                    " dengan ",
                    moves,
                    " percobaan!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScoreBoard.js",
                lineNumber: 90,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 90,
            columnNumber: 28
        }, this);
        $[17] = formattedTime;
        $[18] = isGameComplete;
        $[19] = moves;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    const t10 = isGameComplete ? onReset : onShuffle;
    isGameComplete ? "bg-yellow-400 text-indigo-900 hover:bg-yellow-300" : "bg-yellow-400 text-indigo-900 hover:bg-yellow-300";
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRedo"], {}, void 0, false, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = isGameComplete ? "Main Lagi" : "Acak Ulang";
    let t13;
    if ($[22] !== t10 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t10,
            className: "\n          px-10 py-4 font-bold text-xl rounded-full transition-all duration-300 flex items-center gap-3 mx-auto\n\n          bg-yellow-400 text-indigo-900 hover:bg-yellow-300\n        ",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t13 || $[26] !== t8 || $[27] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t8,
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoreBoard.js",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t8;
        $[27] = t9;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
}
_c = ScoreBoard;
const __TURBOPACK__default__export__ = ScoreBoard;
var _c;
__turbopack_context__.k.register(_c, "ScoreBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GameBoard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScoreBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScoreBoard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const ICONS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAppleAlt"],
        color: '#ef4444'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLemon"],
        color: '#eab308'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"],
        color: '#ec4899'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"],
        color: '#f97316'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoDiamond"],
        color: '#06b6d4'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiFillThunderbolt"],
        color: '#a855f7'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMoon"],
        color: '#22c55e'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFire"],
        color: '#f43f5e'
    }
];
const shuffleArray = (array)=>{
    const shuffled = [
        ...array
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled;
};
const createCards = (pairCount)=>{
    const selected = ICONS.slice(0, pairCount);
    const paired = selected.flatMap((item, index)=>[
            {
                id: index * 2,
                icon: item.icon,
                color: item.color,
                pairId: index
            },
            {
                id: index * 2 + 1,
                icon: item.icon,
                color: item.color,
                pairId: index
            }
        ]);
    return shuffleArray(paired);
};
function Home() {
    _s();
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [flippedCards, setFlippedCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matchedCards, setMatchedCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [moves, setMoves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            resetGame();
        }
    }["Home.useEffect"], [
        difficulty
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setInterval({
                "Home.useEffect.timer": ()=>{
                    if (matchedCards.length !== cards.length && cards.length > 0) {
                        setTime({
                            "Home.useEffect.timer": (prev)=>prev + 1
                        }["Home.useEffect.timer"]);
                    }
                }
            }["Home.useEffect.timer"], 1000);
            return ({
                "Home.useEffect": ()=>clearInterval(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        matchedCards,
        cards
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (flippedCards.length === 2) {
                const [a, b] = flippedCards;
                const first = cards.find({
                    "Home.useEffect.first": (c)=>c.id === a
                }["Home.useEffect.first"]);
                const second = cards.find({
                    "Home.useEffect.second": (c_0)=>c_0.id === b
                }["Home.useEffect.second"]);
                setMoves({
                    "Home.useEffect": (prev_0)=>prev_0 + 1
                }["Home.useEffect"]);
                if (first.pairId === second.pairId) {
                    setMatchedCards({
                        "Home.useEffect": (prev_1)=>[
                                ...prev_1,
                                a,
                                b
                            ]
                    }["Home.useEffect"]);
                    setFlippedCards([]);
                } else {
                    setTimeout({
                        "Home.useEffect": ()=>setFlippedCards([])
                    }["Home.useEffect"], 800);
                }
            }
        }
    }["Home.useEffect"], [
        flippedCards,
        cards
    ]);
    const handleFlip = (id)=>{
        if (flippedCards.length < 2 && !flippedCards.includes(id)) {
            setFlippedCards((prev_2)=>[
                    ...prev_2,
                    id
                ]);
        }
    };
    const resetGame = ()=>{
        setCards(createCards(difficulty));
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
        setTime(0);
    };
    const shuffleCards = ()=>{
        setCards(createCards(difficulty));
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
        setTime(0);
    };
    const levels = [
        {
            level: 4,
            label: "Easy",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSmile"],
            color: "from-green-400 to-emerald-500"
        },
        {
            level: 6,
            label: "Medium",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMeh"],
            color: "from-yellow-400 to-orange-400"
        },
        {
            level: 8,
            label: "Hard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSkull"],
            color: "from-red-500 to-pink-500"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center  bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl font-extrabold mb-6 flex gap-3 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiCardJoker"], {
                        className: "text-blue-400 text-5xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 129,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-gradient-to-r from-blue-200 via-cyan-400 to-indigo-400 bg-clip-text text-transparent",
                        children: "Memory Card"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 130,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 128,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mb-8",
                children: levels.map((item)=>{
                    const Icon = item.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setDifficulty(item.level),
                        className: `
                group flex items-center gap-2 px-6 py-3 rounded-full font-semibold
                transition-all duration-300

                ${difficulty === item.level ? `bg-gradient-to-r ${item.color} text-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]` : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105"}
              `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "text-lg transition-transform duration-300 group-hover:rotate-12"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.level, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 138,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScoreBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                moves: moves,
                matchedCount: matchedCards.length / 2,
                totalPairs: difficulty,
                time: time,
                onReset: resetGame,
                onShuffle: shuffleCards
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameBoard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    cards: cards,
                    flippedCards: flippedCards,
                    matchedCards: matchedCards,
                    onFlip: handleFlip
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 125,
        columnNumber: 10
    }, this);
}
_s(Home, "JRnX6hVuOnI+zmgr7L05JIwLvIk=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4ef3b9f4._.js.map