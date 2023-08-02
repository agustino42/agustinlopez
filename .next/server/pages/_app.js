(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/IconLink.jsx



function IconLink({ children , className , compact =false , large =false , icon: Icon , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
        target: "_blank",
        ...props,
        className: external_clsx_default()(className, "group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300", compact ? "gap-x-2" : "gap-x-3"),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Icon, {
                className: external_clsx_default()("flex-none", large ? "h-6 w-6" : "h-4 w-4")
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "self-baseline text-white",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Logo.jsx


function Logo(props) {
    let id = useId();
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 140 32",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Agustin "
            }),
            /*#__PURE__*/ _jsx("mask", {
                id: `${id}-m`,
                fill: "#fff",
                children: /*#__PURE__*/ _jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z"
                })
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z",
                fill: `url(#${id}-g)`
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M31.75 18l1 .12.13-1.12h-1.13v1zm-8.13 0v-1h-.77l-.2.75.97.25zm-15.5 0l.98-.25-.2-.75h-.77v1zM0 18v-1h-1.13l.14 1.12L0 18zm23.62-4l-.96.25.19.75h.77v-1zm8.13 0v1h1.13l-.14-1.12-.99.12zM8.13 14v1h.77l.2-.75-.97-.25zM0 14l-1-.12-.13 1.12H0v-1zm31.75 3h-8.13v2h8.13v-2zm-9.1.75A7 7 0 0115.89 23v2a9 9 0 008.71-6.75l-1.93-.5zM15.89 23a7 7 0 01-6.78-5.25l-1.94.5A9 9 0 0015.88 25v-2zm-7.75-6H0v2h8.13v-2zm7.75 14A15 15 0 01.99 17.88l-1.98.24A17 17 0 0015.88 33v-2zm14.88-13.12A15 15 0 0115.88 31v2a17 17 0 0016.86-14.88l-1.98-.24zM23.62 15h8.13v-2h-8.13v2zm-7.74-6a7 7 0 016.78 5.25l1.93-.5A9 9 0 0015.88 7v2zM9.1 14.25A7 7 0 0115.88 9V7a9 9 0 00-8.72 6.75l1.94.5zM0 15h8.13v-2H0v2zm1-.88A15 15 0 0115.87 1v-2A17 17 0 00-1 13.88l1.98.24zM15.87 1a15 15 0 0114.88 13.12l1.98-.24A17 17 0 0015.88-1v2z",
                fill: "#fff",
                fillOpacity: 0.2,
                mask: `url(#${id}-m)`
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M52.42 24.24c4.5 0 7.83-2.54 8.26-6.36h-4.37c-.33 1.63-1.94 2.69-3.89 2.69-2.7 0-4.46-1.66-4.46-5.33 0-3.65 1.75-5.3 4.46-5.3 2.02 0 3.5 1.1 3.9 2.66h4.36c-.43-3.8-3.7-6.34-8.26-6.34-5.32 0-8.88 3.24-8.88 8.98 0 5.76 3.56 9 8.88 9zm16.35 0c4.18 0 6.56-2.71 6.56-6.72 0-4.25-2.62-6.72-6.56-6.72-4.17 0-6.57 2.71-6.57 6.72 0 4.25 2.64 6.72 6.57 6.72zm0-3.29c-1.5 0-2.47-1.05-2.47-3.43 0-2.4.99-3.46 2.47-3.46 1.5 0 2.48 1.06 2.48 3.46s-.99 3.43-2.48 3.43zm8.6 3.05h4.06v-7.27c0-1.35.8-2.64 2.33-2.64 1.42 0 2 .96 2 2.93V24h4.07v-7.27c0-1.35.8-2.64 2.3-2.64 1.42 0 2.02.96 2.02 2.93V24h4.06v-7.87c0-3.87-1.94-5.33-4.4-5.33-1.91 0-3.57.94-4.14 2.8h-.2c-.7-2.06-2.3-2.8-4.05-2.8-1.68 0-3.2.84-3.8 2.47h-.19l-.12-2.23h-3.93V24zm23.5 0h4.05v-7.27c0-1.35.8-2.64 2.33-2.64 1.41 0 1.99.96 1.99 2.93V24h4.08v-7.27c0-1.35.8-2.64 2.3-2.64 1.42 0 2.02.96 2.02 2.93V24h4.05v-7.87c0-3.87-1.94-5.33-4.39-5.33-1.92 0-3.57.94-4.15 2.8h-.2c-.69-2.06-2.3-2.8-4.05-2.8-1.68 0-3.19.84-3.79 2.47h-.2l-.11-2.23h-3.94V24zm23.48-14.47h4.05V6.5h-4.05v3.03zm0 14.47h4.05V11.04h-4.05V24zm11.45 0h2.95v-3.26h-1.51c-.63 0-.99-.17-.99-.9V14.3h2.5v-3.26h-2.5v-3.8l-4.05.37v3.43h-2.23v3.26h2.23v6.3c0 2.06.72 3.4 3.6 3.4z",
                fill: "#fff"
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsxs("linearGradient", {
                    id: `${id}-g`,
                    x1: 15.88,
                    y1: 0,
                    x2: 15.88,
                    y2: 32,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ _jsx("stop", {
                            stopColor: "#AAE4FF"
                        }),
                        /*#__PURE__*/ _jsx("stop", {
                            offset: 1,
                            stopColor: "#38BDF8"
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Button.jsx



function ButtonInner({ arrow =false , children  }) {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15"
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10"
            }),
            children,
            " ",
            arrow ? /*#__PURE__*/ _jsx("span", {
                "aria-hidden": "true",
                children: "→"
            }) : null
        ]
    });
}
function Button({ href , className , arrow , children , ...props }) {
    className = clsx(className, "group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white", arrow ? "pl-2.5 pr-[calc(9/16*1rem)]" : "px-2.5");
    return href ? /*#__PURE__*/ _jsx(Link, {
        href: href,
        className: className,
        ...props,
        children: /*#__PURE__*/ _jsx(ButtonInner, {
            arrow: arrow,
            children: children
        })
    }) : /*#__PURE__*/ _jsx("button", {
        className: className,
        ...props,
        children: /*#__PURE__*/ _jsx(ButtonInner, {
            arrow: arrow,
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./src/components/SignUpForm.jsx



function SignUpForm() {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        className: "relative isolate mt-8 flex items-center pr-1",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("label", {
                htmlFor: id,
                className: "sr-only",
                children: "Envia tu Email, Msjs"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Intro.jsx





function BookIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "48px",
        height: "48px",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                fill: "#fff",
                d: "M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                fill: "#fff",
                d: "M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                fill: "#cfd8dc",
                d: "M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                fill: "#40c351",
                d: "M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                fill: "#fff",
                "fill-rule": "evenodd",
                d: "M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z",
                "clip-rule": "evenodd"
            })
        ]
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z"
        })
    });
}
function FeedIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        })
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5"
        })
    });
}
function Intro() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                className: "mt-14 font-display text-4xl/tight font-light text-white",
                children: [
                    "Agustin Lopez ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-sky-300",
                        children: "Front-end Developer"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-orange-700",
                        children: "Tecnico Superior Universitario en Informatica"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "mt-4 text-sm/6 text-gray-300",
                children: [
                    "S\xf3lida formaci\xf3n como T\xe9cnico Superior en Inform\xe1tica, Egresado de la Universidad Nacional Experimental Ezequiel Zamora  Unellez-Barinas . He Colaborado en proyectos exitosos, Trabajo Remoto y obteniendo logros acad\xe9micos destacados y certificaciones en desarrollo web ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-green-700",
                        children: '"Estudios Online"'
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-yellow-600",
                        children: "(BootCamps,CodeWars,Ccs-Learn)"
                    }),
                    ".Mi pasi\xf3n por la tecnolog\xeda y mi capacidad para colaborar en equipos multidisciplinarios garantizan soluciones innovadoras y eficientes. Estoy preparado para superar cualquier desaf\xedo tecnol\xf3gico y agregar un valor significativo a su empresa."
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(SignUpForm, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                        href: "https://web.whatsapp.com/",
                        icon: BookIcon,
                        className: "flex-none",
                        children: "+ 57 0412 896 76 86"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                        href: "https://github.com/agustino42",
                        icon: GitHubIcon,
                        className: "flex-none",
                        children: "GitHub"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                        href: "",
                        icon: FeedIcon,
                        className: "flex-none",
                        children: "Linken"
                    })
                ]
            })
        ]
    });
}
function IntroFooter() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
        className: "flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500",
        children: [
            "Ver Proyectos ",
            " ",
            /*#__PURE__*/ jsx_runtime.jsx(IconLink, {
                href: "https://github.com/agustino42",
                icon: GitHubIcon,
                compact: true,
                large: true,
                children: "Agustin Lopez"
            })
        ]
    });
}

;// CONCATENATED MODULE: external "motion"
const external_motion_namespaceObject = require("motion");
;// CONCATENATED MODULE: ./src/components/StarField.jsx



const stars = [
    // [cx, cy, dim, blur]
    [
        4,
        4,
        true,
        true
    ],
    [
        4,
        44,
        true
    ],
    [
        36,
        22
    ],
    [
        50,
        146,
        true,
        true
    ],
    [
        64,
        43,
        true,
        true
    ],
    [
        76,
        30,
        true
    ],
    [
        101,
        116
    ],
    [
        140,
        36,
        true
    ],
    [
        149,
        134
    ],
    [
        162,
        74,
        true
    ],
    [
        171,
        96,
        true,
        true
    ],
    [
        210,
        56,
        true,
        true
    ],
    [
        235,
        90
    ],
    [
        275,
        82,
        true,
        true
    ],
    [
        306,
        6
    ],
    [
        307,
        64,
        true,
        true
    ],
    [
        380,
        68,
        true
    ],
    [
        380,
        108,
        true,
        true
    ],
    [
        391,
        148,
        true,
        true
    ],
    [
        405,
        18,
        true
    ],
    [
        412,
        86,
        true,
        true
    ],
    [
        426,
        210,
        true,
        true
    ],
    [
        427,
        56,
        true,
        true
    ],
    [
        538,
        138
    ],
    [
        563,
        88,
        true,
        true
    ],
    [
        611,
        154,
        true,
        true
    ],
    [
        637,
        150
    ],
    [
        651,
        146,
        true
    ],
    [
        682,
        70,
        true,
        true
    ],
    [
        683,
        128
    ],
    [
        781,
        82,
        true,
        true
    ],
    [
        785,
        158,
        true
    ],
    [
        832,
        146,
        true,
        true
    ],
    [
        852,
        89
    ]
];
const constellations = [
    [
        [
            247,
            103
        ],
        [
            261,
            86
        ],
        [
            307,
            104
        ],
        [
            357,
            36
        ]
    ],
    [
        [
            586,
            120
        ],
        [
            516,
            100
        ],
        [
            491,
            62
        ],
        [
            440,
            107
        ],
        [
            477,
            180
        ],
        [
            516,
            100
        ]
    ],
    [
        [
            733,
            100
        ],
        [
            803,
            120
        ],
        [
            879,
            113
        ],
        [
            823,
            164
        ],
        [
            803,
            120
        ]
    ]
];
function Star({ blurId , point: [cx, cy, dim, blur]  }) {
    let groupRef = (0,external_react_.useRef)();
    let ref = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let delay = Math.random() * 2;
        let animations = [
            (0,external_motion_namespaceObject.animate)(groupRef.current, {
                opacity: 1
            }, {
                duration: 4,
                delay
            }),
            (0,external_motion_namespaceObject.animate)(ref.current, {
                opacity: dim ? [
                    0.2,
                    0.5
                ] : [
                    1,
                    0.6
                ],
                scale: dim ? [
                    1,
                    1.2
                ] : [
                    1.2,
                    1
                ]
            }, {
                delay,
                duration: Math.random() * 2 + 2,
                direction: "alternate",
                repeat: Infinity
            })
        ];
        return ()=>{
            for (let animation of animations){
                animation.cancel();
            }
        };
    }, [
        dim
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("g", {
        ref: groupRef,
        className: "opacity-0",
        children: /*#__PURE__*/ jsx_runtime.jsx("circle", {
            ref: ref,
            cx: cx,
            cy: cy,
            r: 1,
            style: {
                transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
                opacity: dim ? 0.2 : 1,
                transform: `scale(${dim ? 1 : 1.2})`
            },
            filter: blur ? `url(#${blurId})` : undefined
        })
    });
}
function Constellation({ points  }) {
    let ref = (0,external_react_.useRef)();
    let uniquePoints = points.filter((point, pointIndex)=>points.findIndex((p)=>String(p) === String(point)) === pointIndex);
    let isFilled = uniquePoints.length !== points.length;
    (0,external_react_.useEffect)(()=>{
        let sequence = (0,external_motion_namespaceObject.timeline)([
            [
                ref.current,
                {
                    strokeDashoffset: 0,
                    visibility: "visible"
                },
                {
                    duration: 5,
                    delay: Math.random() * 3 + 2
                }
            ],
            ...isFilled ? [
                [
                    ref.current,
                    {
                        fill: "rgb(255 255 255 / 0.02)"
                    },
                    {
                        duration: 1
                    }
                ]
            ] : []
        ]);
        return ()=>{
            sequence.cancel();
        };
    }, [
        isFilled
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                ref: ref,
                stroke: "white",
                strokeOpacity: "0.2",
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                fill: "transparent",
                d: `M ${points.join("L")}`,
                className: "invisible"
            }),
            uniquePoints.map((point, pointIndex)=>/*#__PURE__*/ jsx_runtime.jsx(Star, {
                    point: point
                }, pointIndex))
        ]
    });
}
function StarField() {
    let blurId = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 881 211",
        fill: "white",
        "aria-hidden": "true",
        className: "pointer-events-none absolute -right-44 top-14 w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime.jsx("filter", {
                    id: blurId,
                    children: /*#__PURE__*/ jsx_runtime.jsx("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: ".5"
                    })
                })
            }),
            constellations.map((points, constellationIndex)=>/*#__PURE__*/ jsx_runtime.jsx(Constellation, {
                    points: points
                }, constellationIndex)),
            stars.map((point, pointIndex)=>/*#__PURE__*/ jsx_runtime.jsx(Star, {
                    point: point,
                    blurId: blurId
                }, pointIndex))
        ]
    });
}

// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./src/components/ThemeToggle.jsx



function ThemeIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
        })
    });
}
function ThemeToggle() {
    let [mounted, setMounted] = (0,external_react_.useState)(false);
    let { resolvedTheme , setTheme  } = (0,external_next_themes_.useTheme)();
    let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        type: "button",
        className: "group absolute right-4 top-4 z-50 -m-2.5 p-2.5",
        onClick: ()=>setTheme(otherTheme),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "sr-only",
                children: [
                    "Switch to ",
                    otherTheme,
                    " theme"
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ThemeIcon, {
                className: "h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layout.jsx





function Timeline() {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            className: "absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("pattern", {
                        id: id,
                        width: "6",
                        height: "8",
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M0 0H6M0 8H6",
                            className: "stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10",
                            fill: "none"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                    width: "100%",
                    height: "100%",
                    fill: `url(#${id})`
                })
            ]
        })
    });
}
function Glow() {
    let id = (0,external_react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                className: "absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                                id: `${id}-desktop`,
                                cx: "100%",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(56, 189, 248, 0.3)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "53.95%",
                                        stopColor: "rgba(0, 71, 255, 0.09)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(10, 14, 23, 0)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                                id: `${id}-mobile`,
                                cy: "100%",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(56, 189, 248, 0.3)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "53.95%",
                                        stopColor: "rgba(0, 71, 255, 0.09)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(10, 14, 23, 0)"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "100%",
                        height: "100%",
                        fill: `url(#${id}-desktop)`,
                        className: "hidden lg:block"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "100%",
                        height: "100%",
                        fill: `url(#${id}-mobile)`,
                        className: "lg:hidden"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"
            })
        ]
    });
}
function FixedSidebar({ main , footer  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Glow, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(StarField, {}),
                                    main
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6",
                            children: footer
                        })
                    ]
                })
            })
        ]
    });
}
function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(FixedSidebar, {
                main: /*#__PURE__*/ jsx_runtime.jsx(Intro, {}),
                footer: /*#__PURE__*/ jsx_runtime.jsx(IntroFooter, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ThemeToggle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Timeline, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        className: "space-y-20 py-20 sm:space-y-32 sm:py-32",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7834);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7411);
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4021);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6788);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Agustin Lopez | Tecnico Universitario en Informatica  "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Commit is a lightweight Git client you can open from anywhere any time you’re ready to commit your work with a single keyboard shortcut. It’s fast, beautiful, and completely unnecessary."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                attribute: "class",
                disableTransitionOnChange: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.MDXProvider, {
                    components: _components_mdx__WEBPACK_IMPORTED_MODULE_5__,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6788:
/***/ (() => {



/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2235:
/***/ ((module) => {

"use strict";
module.exports = require("focus-visible");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7834:
/***/ ((module) => {

"use strict";
module.exports = import("@mdx-js/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,61,21], () => (__webpack_exec__(5857)));
module.exports = __webpack_exports__;

})();