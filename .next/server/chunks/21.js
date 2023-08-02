"use strict";
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 9126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ FeedProvider),
/* harmony export */   "s": () => (/* binding */ useFeed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


let FeedContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isFeed: false
});
function FeedProvider({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedContext.Provider, {
        value: {
            isFeed: true
        },
        children: children
    });
}
function useFeed() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FeedContext);
}


/***/ }),

/***/ 4021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ a),
  "article": () => (/* binding */ article),
  "code": () => (/* binding */ code),
  "h2": () => (/* binding */ h2),
  "img": () => (/* binding */ img),
  "wrapper": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/FeedProvider.jsx
var FeedProvider = __webpack_require__(9126);
;// CONCATENATED MODULE: ./src/components/FormattedDate.jsx

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
});
function FormattedDate({ date , ...props }) {
    date = typeof date === "string" ? new Date(date) : date;
    return /*#__PURE__*/ jsx_runtime.jsx("time", {
        dateTime: date.toISOString(),
        ...props,
        children: dateFormatter.format(date)
    });
}

;// CONCATENATED MODULE: ./src/components/mdx.jsx







const a = (link_default());
const wrapper = function Wrapper({ children  }) {
    return children;
};
const h2 = function H2(props) {
    let { isFeed  } = (0,FeedProvider/* useFeed */.s)();
    if (isFeed) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime.jsx("h2", {
        ...props
    });
};
const img = function Img(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 [&+*]:mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                alt: "",
                sizes: "(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw",
                ...props
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"
            })
        ]
    });
};
function ContentWrapper({ className , children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mx-auto max-w-7xl px-6 lg:flex lg:px-8",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: external_clsx_default()("mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto", className),
                children: children
            })
        })
    });
}
function ArticleHeader({ id , date  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "relative mb-10 xl:mb-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: `#${id}`,
                        className: "inline-flex",
                        children: /*#__PURE__*/ jsx_runtime.jsx(FormattedDate, {
                            date: date,
                            className: "hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ContentWrapper, {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: `#${id}`,
                        className: "inline-flex",
                        children: /*#__PURE__*/ jsx_runtime.jsx(FormattedDate, {
                            date: date,
                            className: "text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden"
                        })
                    })
                })
            })
        ]
    });
}
const article = function Article({ id , title , date , children  }) {
    let { isFeed  } = (0,FeedProvider/* useFeed */.s)();
    let heightRef = (0,external_react_.useRef)();
    let [heightAdjustment, setHeightAdjustment] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        let observer = new window.ResizeObserver(()=>{
            let { height  } = heightRef.current.getBoundingClientRect();
            let nextMultipleOf8 = 8 * Math.ceil(height / 8);
            setHeightAdjustment(nextMultipleOf8 - height);
        });
        observer.observe(heightRef.current);
        return ()=>{
            observer.disconnect();
        };
    }, []);
    if (isFeed) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("script", {
                    type: "text/metadata",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                            id,
                            title,
                            date
                        })
                    }
                }),
                children
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx("article", {
        id: id,
        className: "scroll-mt-16",
        style: {
            paddingBottom: `${heightAdjustment}px`
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            ref: heightRef,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(ArticleHeader, {
                    id: id,
                    date: date
                }),
                /*#__PURE__*/ jsx_runtime.jsx(ContentWrapper, {
                    className: "typography",
                    children: children
                })
            ]
        })
    });
};
const code = function Code({ highlightedCode , ...props }) {
    if (highlightedCode) {
        return /*#__PURE__*/ jsx_runtime.jsx("code", {
            ...props,
            dangerouslySetInnerHTML: {
                __html: highlightedCode
            }
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx("code", {
        ...props
    });
};


/***/ })

};
;