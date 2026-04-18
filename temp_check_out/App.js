(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase, toCamelCase, toPascalCase, mergeClasses;
  var init_utils = __esm({
    "frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js"() {
      toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      toCamelCase = (string) => string.replace(
        /^([A-Z])|[\s-_]+(\w)/g,
        (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
      );
      toPascalCase = (string) => {
        const camelCase = toCamelCase(string);
        return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
      };
      mergeClasses = (...classes) => classes.filter((className, index, array) => {
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
      }).join(" ").trim();
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes;
  var init_defaultAttributes = __esm({
    "frontend/node_modules/lucide-react/dist/esm/defaultAttributes.js"() {
      defaultAttributes = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      };
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/Icon.js
  var import_react2, Icon;
  var init_Icon = __esm({
    "frontend/node_modules/lucide-react/dist/esm/Icon.js"() {
      import_react2 = __require("react");
      init_defaultAttributes();
      init_utils();
      Icon = (0, import_react2.forwardRef)(
        ({
          color = "currentColor",
          size = 24,
          strokeWidth = 2,
          absoluteStrokeWidth,
          className = "",
          children,
          iconNode,
          ...rest
        }, ref) => {
          return (0, import_react2.createElement)(
            "svg",
            {
              ref,
              ...defaultAttributes,
              width: size,
              height: size,
              stroke: color,
              strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
              className: mergeClasses("lucide", className),
              ...rest
            },
            [
              ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
              ...Array.isArray(children) ? children : [children]
            ]
          );
        }
      );
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js
  var import_react3, createLucideIcon;
  var init_createLucideIcon = __esm({
    "frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js"() {
      import_react3 = __require("react");
      init_utils();
      init_Icon();
      createLucideIcon = (iconName, iconNode) => {
        const Component = (0, import_react3.forwardRef)(
          ({ className, ...props }, ref) => (0, import_react3.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses(
              `lucide-${toKebabCase(toPascalCase(iconName))}`,
              `lucide-${iconName}`,
              className
            ),
            ...props
          })
        );
        Component.displayName = toPascalCase(iconName);
        return Component;
      };
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/app-window.js
  var __iconNode, AppWindow;
  var init_app_window = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/app-window.js"() {
      init_createLucideIcon();
      __iconNode = [
        ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
        ["path", { d: "M10 4v4", key: "pp8u80" }],
        ["path", { d: "M2 8h20", key: "d11cs7" }],
        ["path", { d: "M6 4v4", key: "1svtjw" }]
      ];
      AppWindow = createLucideIcon("app-window", __iconNode);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js
  var __iconNode2, ArrowRight;
  var init_arrow_right = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js"() {
      init_createLucideIcon();
      __iconNode2 = [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
      ];
      ArrowRight = createLucideIcon("arrow-right", __iconNode2);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/book-open.js
  var __iconNode3, BookOpen;
  var init_book_open = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/book-open.js"() {
      init_createLucideIcon();
      __iconNode3 = [
        ["path", { d: "M12 7v14", key: "1akyts" }],
        [
          "path",
          {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
          }
        ]
      ];
      BookOpen = createLucideIcon("book-open", __iconNode3);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/calendar.js
  var __iconNode4, Calendar;
  var init_calendar = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/calendar.js"() {
      init_createLucideIcon();
      __iconNode4 = [
        ["path", { d: "M8 2v4", key: "1cmpym" }],
        ["path", { d: "M16 2v4", key: "4m81vk" }],
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
        ["path", { d: "M3 10h18", key: "8toen8" }]
      ];
      Calendar = createLucideIcon("calendar", __iconNode4);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js
  var __iconNode5, ChartColumn;
  var init_chart_column = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js"() {
      init_createLucideIcon();
      __iconNode5 = [
        ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        ["path", { d: "M18 17V9", key: "2bz60n" }],
        ["path", { d: "M13 17V5", key: "1frdt8" }],
        ["path", { d: "M8 17v-3", key: "17ska0" }]
      ];
      ChartColumn = createLucideIcon("chart-column", __iconNode5);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.js
  var __iconNode6, CirclePlus;
  var init_circle_plus = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.js"() {
      init_createLucideIcon();
      __iconNode6 = [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 12h8", key: "1wcyev" }],
        ["path", { d: "M12 8v8", key: "napkw2" }]
      ];
      CirclePlus = createLucideIcon("circle-plus", __iconNode6);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/clipboard-list.js
  var __iconNode7, ClipboardList;
  var init_clipboard_list = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/clipboard-list.js"() {
      init_createLucideIcon();
      __iconNode7 = [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
        [
          "path",
          {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
          }
        ],
        ["path", { d: "M12 11h4", key: "1jrz19" }],
        ["path", { d: "M12 16h4", key: "n85exb" }],
        ["path", { d: "M8 11h.01", key: "1dfujw" }],
        ["path", { d: "M8 16h.01", key: "18s6g9" }]
      ];
      ClipboardList = createLucideIcon("clipboard-list", __iconNode7);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/clock.js
  var __iconNode8, Clock;
  var init_clock = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/clock.js"() {
      init_createLucideIcon();
      __iconNode8 = [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
      ];
      Clock = createLucideIcon("clock", __iconNode8);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/eye-off.js
  var __iconNode9, EyeOff;
  var init_eye_off = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/eye-off.js"() {
      init_createLucideIcon();
      __iconNode9 = [
        [
          "path",
          {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
          }
        ],
        ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
        [
          "path",
          {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
          }
        ],
        ["path", { d: "m2 2 20 20", key: "1ooewy" }]
      ];
      EyeOff = createLucideIcon("eye-off", __iconNode9);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/eye.js
  var __iconNode10, Eye;
  var init_eye = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/eye.js"() {
      init_createLucideIcon();
      __iconNode10 = [
        [
          "path",
          {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
          }
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
      ];
      Eye = createLucideIcon("eye", __iconNode10);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/hourglass.js
  var __iconNode11, Hourglass;
  var init_hourglass = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/hourglass.js"() {
      init_createLucideIcon();
      __iconNode11 = [
        ["path", { d: "M5 22h14", key: "ehvnwv" }],
        ["path", { d: "M5 2h14", key: "pdyrp9" }],
        [
          "path",
          {
            d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
            key: "1d314k"
          }
        ],
        [
          "path",
          { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
        ]
      ];
      Hourglass = createLucideIcon("hourglass", __iconNode11);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/house.js
  var __iconNode12, House;
  var init_house = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/house.js"() {
      init_createLucideIcon();
      __iconNode12 = [
        ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
        [
          "path",
          {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt"
          }
        ]
      ];
      House = createLucideIcon("house", __iconNode12);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/indian-rupee.js
  var __iconNode13, IndianRupee;
  var init_indian_rupee = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/indian-rupee.js"() {
      init_createLucideIcon();
      __iconNode13 = [
        ["path", { d: "M6 3h12", key: "ggurg9" }],
        ["path", { d: "M6 8h12", key: "6g4wlu" }],
        ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
        ["path", { d: "M6 13h3", key: "wdp6ag" }],
        ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
      ];
      IndianRupee = createLucideIcon("indian-rupee", __iconNode13);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/lock.js
  var __iconNode14, Lock;
  var init_lock = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/lock.js"() {
      init_createLucideIcon();
      __iconNode14 = [
        ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
      ];
      Lock = createLucideIcon("lock", __iconNode14);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/log-out.js
  var __iconNode15, LogOut;
  var init_log_out = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/log-out.js"() {
      init_createLucideIcon();
      __iconNode15 = [
        ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
        ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
      ];
      LogOut = createLucideIcon("log-out", __iconNode15);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/mail.js
  var __iconNode16, Mail;
  var init_mail = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/mail.js"() {
      init_createLucideIcon();
      __iconNode16 = [
        ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
        ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
      ];
      Mail = createLucideIcon("mail", __iconNode16);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js
  var __iconNode17, MapPin;
  var init_map_pin = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js"() {
      init_createLucideIcon();
      __iconNode17 = [
        [
          "path",
          {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
          }
        ],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
      ];
      MapPin = createLucideIcon("map-pin", __iconNode17);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/menu.js
  var __iconNode18, Menu;
  var init_menu = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/menu.js"() {
      init_createLucideIcon();
      __iconNode18 = [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
      ];
      Menu = createLucideIcon("menu", __iconNode18);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/phone.js
  var __iconNode19, Phone;
  var init_phone = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/phone.js"() {
      init_createLucideIcon();
      __iconNode19 = [
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
          }
        ]
      ];
      Phone = createLucideIcon("phone", __iconNode19);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/plus.js
  var __iconNode20, Plus;
  var init_plus = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/plus.js"() {
      init_createLucideIcon();
      __iconNode20 = [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }]
      ];
      Plus = createLucideIcon("plus", __iconNode20);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/settings.js
  var __iconNode21, Settings;
  var init_settings = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/settings.js"() {
      init_createLucideIcon();
      __iconNode21 = [
        [
          "path",
          {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
          }
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
      ];
      Settings = createLucideIcon("settings", __iconNode21);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/shield.js
  var __iconNode22, Shield;
  var init_shield = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/shield.js"() {
      init_createLucideIcon();
      __iconNode22 = [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
          }
        ]
      ];
      Shield = createLucideIcon("shield", __iconNode22);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/star.js
  var __iconNode23, Star;
  var init_star = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/star.js"() {
      init_createLucideIcon();
      __iconNode23 = [
        [
          "path",
          {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
          }
        ]
      ];
      Star = createLucideIcon("star", __iconNode23);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/store.js
  var __iconNode24, Store;
  var init_store = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/store.js"() {
      init_createLucideIcon();
      __iconNode24 = [
        ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
        ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
        ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
        ["path", { d: "M2 7h20", key: "1fcdvo" }],
        [
          "path",
          {
            d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
            key: "6c3vgh"
          }
        ]
      ];
      Store = createLucideIcon("store", __iconNode24);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js
  var __iconNode25, Trash2;
  var init_trash_2 = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js"() {
      init_createLucideIcon();
      __iconNode25 = [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
      ];
      Trash2 = createLucideIcon("trash-2", __iconNode25);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/user.js
  var __iconNode26, User;
  var init_user = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/user.js"() {
      init_createLucideIcon();
      __iconNode26 = [
        ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
      ];
      User = createLucideIcon("user", __iconNode26);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/users.js
  var __iconNode27, Users;
  var init_users = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/users.js"() {
      init_createLucideIcon();
      __iconNode27 = [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
      ];
      Users = createLucideIcon("users", __iconNode27);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/utensils.js
  var __iconNode28, Utensils;
  var init_utensils = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/utensils.js"() {
      init_createLucideIcon();
      __iconNode28 = [
        ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
        ["path", { d: "M7 2v20", key: "1473qp" }],
        ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
      ];
      Utensils = createLucideIcon("utensils", __iconNode28);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/icons/x.js
  var __iconNode29, X;
  var init_x = __esm({
    "frontend/node_modules/lucide-react/dist/esm/icons/x.js"() {
      init_createLucideIcon();
      __iconNode29 = [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
      ];
      X = createLucideIcon("x", __iconNode29);
    }
  });

  // frontend/node_modules/lucide-react/dist/esm/lucide-react.js
  var init_lucide_react = __esm({
    "frontend/node_modules/lucide-react/dist/esm/lucide-react.js"() {
      init_chart_column();
      init_circle_plus();
      init_house();
      init_utensils();
      init_app_window();
      init_arrow_right();
      init_book_open();
      init_calendar();
      init_clipboard_list();
      init_clock();
      init_eye_off();
      init_eye();
      init_hourglass();
      init_indian_rupee();
      init_lock();
      init_log_out();
      init_mail();
      init_map_pin();
      init_menu();
      init_phone();
      init_plus();
      init_settings();
      init_shield();
      init_star();
      init_store();
      init_trash_2();
      init_user();
      init_users();
      init_x();
    }
  });

  // frontend/src/components/Navbar.jsx
  var import_react4, import_react_router_dom2, scrollToSection, Navbar, NavButton, MobileNavLink, Navbar_default;
  var init_Navbar = __esm({
    "frontend/src/components/Navbar.jsx"() {
      import_react4 = __toESM(__require("react"), 1);
      init_lucide_react();
      import_react_router_dom2 = __require("react-router-dom");
      scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      };
      Navbar = () => {
        const [isMenuOpen, setIsMenuOpen] = (0, import_react4.useState)(false);
        const [isScrolled, setIsScrolled] = (0, import_react4.useState)(false);
        const location = (0, import_react_router_dom2.useLocation)();
        const navigate = (0, import_react_router_dom2.useNavigate)();
        (0, import_react4.useEffect)(() => {
          const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        (0, import_react4.useEffect)(() => {
          const { sectionId } = location.state || {};
          if (location.pathname === "/" && sectionId) {
            setTimeout(() => {
              scrollToSection(sectionId);
            }, 100);
          }
        }, [location]);
        const handleNavClick = (sectionId) => {
          if (location.pathname !== "/") {
            navigate("/", { state: { sectionId } });
          } else {
            scrollToSection(sectionId);
          }
          setIsMenuOpen(false);
        };
        return /* @__PURE__ */ import_react4.default.createElement(
          "nav",
          {
            className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50" : "bg-white/80 backdrop-blur-md shadow-lg"}`
          },
          /* @__PURE__ */ import_react4.default.createElement("div", { className: "container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "relative group" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute -inset-2 rounded-lg blur opacity-25" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "relative text-2xl sm:text-3xl font-extrabold tracking-wide" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-sm" }, "MealSphere")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full " }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" })), /* @__PURE__ */ import_react4.default.createElement("div", { className: "hidden md:flex items-center space-x-6" }, /* @__PURE__ */ import_react4.default.createElement(NavButton, { onClick: () => handleNavClick("home") }, "Home"), /* @__PURE__ */ import_react4.default.createElement(NavButton, { onClick: () => handleNavClick("about-section") }, "About"), /* @__PURE__ */ import_react4.default.createElement(NavButton, { onClick: () => handleNavClick("features") }, "Features"), /* @__PURE__ */ import_react4.default.createElement(NavButton, { onClick: () => handleNavClick("contact") }, "Contact"), /* @__PURE__ */ import_react4.default.createElement(import_react_router_dom2.Link, { to: "/signup" }, /* @__PURE__ */ import_react4.default.createElement("button", { className: "group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "relative z-10 flex items-center gap-2" }, /* @__PURE__ */ import_react4.default.createElement(User, { size: 18, className: "group-hover:rotate-12 transition-transform duration-300" }), "Join Us / Login"), /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })))), /* @__PURE__ */ import_react4.default.createElement(
            "button",
            {
              className: "md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative",
              onClick: () => setIsMenuOpen(!isMenuOpen)
            },
            isMenuOpen ? /* @__PURE__ */ import_react4.default.createElement(Menu, { size: 24, className: "transition-transform duration-300" }) : /* @__PURE__ */ import_react4.default.createElement(Menu, { size: 24, className: "transition-transform duration-300" }),
            isMenuOpen && /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute inset-0 bg-amber-500/20 rounded-full animate-ping" })
          )),
          /* @__PURE__ */ import_react4.default.createElement(
            "div",
            {
              className: `md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`
            },
            /* @__PURE__ */ import_react4.default.createElement("div", { className: "bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex flex-col p-6 space-y-4" }, /* @__PURE__ */ import_react4.default.createElement(MobileNavLink, { onClick: () => handleNavClick("home") }, "Home"), /* @__PURE__ */ import_react4.default.createElement(MobileNavLink, { onClick: () => handleNavClick("about-section") }, "About"), /* @__PURE__ */ import_react4.default.createElement(MobileNavLink, { onClick: () => handleNavClick("features") }, "Features"), /* @__PURE__ */ import_react4.default.createElement(MobileNavLink, { onClick: () => handleNavClick("contact") }, "Contact"), /* @__PURE__ */ import_react4.default.createElement(import_react_router_dom2.Link, { to: "/signup", onClick: () => setIsMenuOpen(false) }, /* @__PURE__ */ import_react4.default.createElement("button", { className: "w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2" }, /* @__PURE__ */ import_react4.default.createElement(User, { size: 18 }), "Join Us"))))
          )
        );
      };
      NavButton = ({ onClick, children }) => /* @__PURE__ */ import_react4.default.createElement(
        "button",
        {
          onClick,
          className: "relative text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-amber-50"
        },
        children,
        /* @__PURE__ */ import_react4.default.createElement("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" })
      );
      MobileNavLink = ({ children, onClick }) => /* @__PURE__ */ import_react4.default.createElement(
        "button",
        {
          onClick,
          className: "text-gray-700 hover:text-amber-600 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3 text-left w-full"
        },
        children
      );
      Navbar_default = Navbar;
    }
  });

  // frontend/src/pages/Landing_Page.jsx
  var Landing_Page_exports = {};
  __export(Landing_Page_exports, {
    default: () => Landing_Page_default
  });
  function Landing() {
    const [allReviews, setAllReviews] = (0, import_react5.useState)([
      { text: "MealSphere transformed our mess management completely. Highly recommended!", name: "Alex Kumar, Student" },
      { text: "Finally, a solution that makes meal planning effortless and efficient.", name: "Priya Sharma, Working Professional" },
      { text: "The booking system is intuitive and saves so much time every day.", name: "Rahul Patel, Hostel Resident" }
    ]);
    const handleAddReview = (newReview) => {
      setAllReviews((prevReviews) => [...prevReviews, newReview]);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-white flex flex-col" }, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(HeroSection, null), /* @__PURE__ */ React.createElement(AboutUs, null), /* @__PURE__ */ React.createElement(Features, null), /* @__PURE__ */ React.createElement(Reviews, { reviews: allReviews }), /* @__PURE__ */ React.createElement(ContactAndReviews, { allReviews, onAddReview: handleAddReview }), /* @__PURE__ */ React.createElement(Footer, null));
  }
  function HeroSection() {
    const [isVisible, setIsVisible] = (0, import_react5.useState)(false);
    (0, import_react5.useEffect)(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);
    return /* @__PURE__ */ React.createElement("div", { id: "home", className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "/lbg.jpg",
        alt: "Food Management",
        className: "w-full h-full object-cover"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80" })), /* @__PURE__ */ React.createElement("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: `transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}` }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2" }, "Streamline Your", /* @__PURE__ */ React.createElement("span", { className: "block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mt-2" }, "Mess Management")), /* @__PURE__ */ React.createElement("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4" }, "Connect with local messes, book meals in advance, and enjoy hassle-free dining with our comprehensive management platform."), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4" }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, { to: "/signup" }, /* @__PURE__ */ React.createElement("button", { className: "bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 text-sm sm:text-base lg:text-lg w-full sm:w-auto min-w-[200px]" }, "Get Started Today")), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          const element = document.getElementById("about-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        },
        className: "border-2 border-white/30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm sm:text-base lg:text-lg backdrop-blur-sm w-full sm:w-auto min-w-[200px]"
      },
      "Learn More"
    )))));
  }
  function AboutUs() {
    const [isVisible, setIsVisible] = (0, import_react5.useState)(false);
    (0, import_react5.useEffect)(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
      );
      const element = document.getElementById("about-section");
      if (element) observer.observe(element);
      return () => observer.disconnect();
    }, []);
    return /* @__PURE__ */ React.createElement("section", { id: "about-section", className: "py-20 bg-gray-50" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6" }, /* @__PURE__ */ React.createElement("div", { className: `transition-all duration-800 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}` }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-16" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" }, "About MealSphere"), /* @__PURE__ */ React.createElement("div", { className: "w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" })), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-base sm:text-lg text-gray-700 leading-relaxed mb-6" }, "MealSphere revolutionizes mess management by connecting students, working professionals, and mess owners through an intuitive digital platform. We understand the challenges of meal planning and aim to make dining convenient and accessible."), /* @__PURE__ */ React.createElement("p", { className: "text-base sm:text-lg text-gray-700 leading-relaxed mb-8" }, "Our platform streamlines the entire process from menu discovery to meal booking, while helping reduce food waste through better planning and coordination."), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-4 sm:gap-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl sm:text-3xl font-bold text-amber-600 mb-2" }, "1000+"), /* @__PURE__ */ React.createElement("div", { className: "text-sm sm:text-base text-gray-600" }, "Happy Users")), /* @__PURE__ */ React.createElement("div", { className: "p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl sm:text-3xl font-bold text-amber-600 mb-2" }, "50+"), /* @__PURE__ */ React.createElement("div", { className: "text-sm sm:text-base text-gray-600" }, "Partner Messes")), /* @__PURE__ */ React.createElement("div", { className: "p-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl sm:text-3xl font-bold text-amber-600 mb-2" }, "24/7"), /* @__PURE__ */ React.createElement("div", { className: "text-sm sm:text-base text-gray-600" }, "Support")))), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-xl p-8 border border-gray-100" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold" }, "\u{1F3AF}")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Our Mission"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-sm" }, "Simplifying meal management for everyone"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold" }, "\u{1F331}")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Sustainability"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-sm" }, "Reducing food waste through smart planning"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold" }, "\u{1F91D}")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900" }, "Community"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-sm" }, "Building connections through shared meals"))))))))));
  }
  function Features() {
    const [visibleCards, setVisibleCards] = (0, import_react5.useState)([]);
    (0, import_react5.useEffect)(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              setVisibleCards((prev) => [...prev, index]);
            }
          });
        },
        { threshold: 0.1 }
      );
      const cards = document.querySelectorAll(".feature-card");
      cards.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
    }, []);
    const features = [
      {
        title: "Smart Mess Discovery",
        description: "Find and connect with messes in your area. Browse menus, check availability, and read reviews from other users to make informed dining decisions.",
        icon: "\u{1F50D}",
        color: "blue"
      },
      {
        title: "Easy Meal Booking",
        description: "Reserve your meals in advance with our simple booking system. Check daily menus and secure your spot without the hassle of waiting in queues.",
        icon: "\u{1F4F1}",
        color: "green"
      },
      {
        title: "Reduce Food Waste",
        description: "Help minimize food waste through better meal planning. Our system connects surplus food with those in need, creating a more sustainable dining ecosystem.",
        icon: "\u{1F331}",
        color: "amber"
      }
    ];
    const colorClasses = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      amber: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
    };
    return /* @__PURE__ */ React.createElement("section", { id: "features", className: "py-20 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-16" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" }, "Key Features"), /* @__PURE__ */ React.createElement("div", { className: "w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8" }), /* @__PURE__ */ React.createElement("p", { className: "text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4" }, "Discover how MealSphere makes mess management simple, efficient, and sustainable")), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" }, features.map((feature, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        "data-index": index,
        className: `feature-card group transition-all duration-500 ${visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
        style: { transitionDelay: `${index * 200}ms` }
      },
      /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full" }, /* @__PURE__ */ React.createElement("div", { className: `w-16 h-16 bg-gradient-to-r ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300` }, /* @__PURE__ */ React.createElement("span", { className: "text-2xl" }, feature.icon)), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300" }, feature.title), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 leading-relaxed" }, feature.description))
    )))));
  }
  function Reviews({ reviews = [] }) {
    return /* @__PURE__ */ React.createElement("section", { className: "py-20 bg-gray-50" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-16" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" }, "What Our Users Say"), /* @__PURE__ */ React.createElement("div", { className: "w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto" })), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" }, reviews.length > 0 ? reviews.map((review, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        className: "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg" }, review.name.charAt(0)), /* @__PURE__ */ React.createElement("div", { className: "ml-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex text-amber-400 mb-1" }, [...Array(5)].map((_, i) => /* @__PURE__ */ React.createElement("span", { key: i }, "\u2B50"))), /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-gray-900" }, review.name))),
      /* @__PURE__ */ React.createElement("p", { className: "text-gray-700 italic leading-relaxed" }, '"', review.text, '"')
    )) : /* @__PURE__ */ React.createElement("div", { className: "col-span-full text-center py-12" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4" }, "\u{1F4AC}"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-xl" }, "No reviews yet. Be the first to share your experience!")))));
  }
  function ContactAndReviews({ allReviews, onAddReview }) {
    const [review, setReview] = (0, import_react5.useState)("");
    const [name, setName] = (0, import_react5.useState)("");
    const [isSubmitting, setIsSubmitting] = (0, import_react5.useState)(false);
    const [contactForm, setContactForm] = (0, import_react5.useState)({
      name: "",
      email: "",
      message: ""
    });
    const handleReviewSubmit = async (e) => {
      e.preventDefault();
      if (review && name) {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        const newReview = { text: review, name };
        onAddReview(newReview);
        setReview("");
        setName("");
        setIsSubmitting(false);
      }
    };
    const handleContactSubmit = (e) => {
      e.preventDefault();
      console.log("Contact form submitted:", contactForm);
      setContactForm({ name: "", email: "", message: "" });
    };
    return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "py-20 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8" }, "Get In Touch"), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-50 rounded-2xl p-8 border border-gray-100" }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleContactSubmit, className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Your Name",
        value: contactForm.name,
        onChange: (e) => setContactForm({ ...contactForm, name: e.target.value }),
        className: "w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none",
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        placeholder: "Your Email",
        value: contactForm.email,
        onChange: (e) => setContactForm({ ...contactForm, email: e.target.value }),
        className: "w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none",
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        placeholder: "Your Message",
        rows: "4",
        value: contactForm.message,
        onChange: (e) => setContactForm({ ...contactForm, message: e.target.value }),
        className: "w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none resize-none",
        required: true
      }
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-4 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      },
      "Send Message"
    )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8" }, "Share Your Experience"), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-50 rounded-2xl p-8 border border-gray-100" }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleReviewSubmit, className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value: review,
        onChange: (e) => setReview(e.target.value),
        className: "w-full p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none resize-none",
        rows: "4",
        placeholder: "Tell us about your experience with MealSphere...",
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row gap-4" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: name,
        onChange: (e) => setName(e.target.value),
        type: "text",
        className: "flex-1 p-4 bg-white border border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none w-full sm:w-auto",
        placeholder: "Your Name",
        required: true
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
      },
      isSubmitting ? "Submitting..." : "Submit Review"
    ))))))));
  }
  function Footer() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return /* @__PURE__ */ React.createElement("footer", { className: "bg-gray-900 text-white py-16" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12" }, /* @__PURE__ */ React.createElement("div", { className: "md:col-span-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4" }, "MealSphere"), /* @__PURE__ */ React.createElement("p", { className: "text-sm sm:text-base text-gray-400 leading-relaxed mb-6 max-w-md" }, "Revolutionizing mess management through technology. Connect, book, and enjoy meals with ease while contributing to a sustainable future."), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-4" }, /* @__PURE__ */ React.createElement("a", { href: "#", className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300" }, "\u{1F4E7}"), /* @__PURE__ */ React.createElement("a", { href: "#", className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300" }, "\u{1F4F1}"), /* @__PURE__ */ React.createElement("a", { href: "#", className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300" }, "\u{1F310}"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "text-base sm:text-lg font-semibold mb-4" }, "Quick Links"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-2 text-gray-400" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { onClick: () => {
      const element = document.getElementById("about-section");
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, className: "hover:text-amber-400 transition-colors duration-300 text-left" }, "About Us")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { onClick: () => {
      const element = document.getElementById("features");
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, className: "hover:text-amber-400 transition-colors duration-300 text-left" }, "Features")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", { onClick: () => {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, className: "hover:text-amber-400 transition-colors duration-300 text-left" }, "Contact")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, { to: "/signup", className: "hover:text-amber-400 transition-colors duration-300" }, "Get Started")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "text-base sm:text-lg font-semibold mb-4" }, "Support"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-2 text-gray-400" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "hover:text-amber-400 transition-colors duration-300" }, "Help Center")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "hover:text-amber-400 transition-colors duration-300" }, "Contact Us")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "hover:text-amber-400 transition-colors duration-300" }, "Privacy Policy")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "hover:text-amber-400 transition-colors duration-300" }, "Terms of Service"))))), /* @__PURE__ */ React.createElement("div", { className: "border-t border-gray-800 pt-8 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm sm:text-base text-gray-400" }, "\xA9 ", currentYear, " MealSphere. All rights reserved. Made with \u2764\uFE0F for better dining experiences."))));
  }
  var import_react5, import_react_router_dom3, Landing_Page_default;
  var init_Landing_Page = __esm({
    "frontend/src/pages/Landing_Page.jsx"() {
      import_react5 = __require("react");
      import_react_router_dom3 = __require("react-router-dom");
      init_Navbar();
      Landing_Page_default = Landing;
    }
  });

  // frontend/node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  var init_bind = __esm({
    "frontend/node_modules/axios/lib/helpers/bind.js"() {
      "use strict";
    }
  });

  // frontend/node_modules/axios/lib/utils.js
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toString, getPrototypeOf, kindOf, kindOfTest, typeOfTest, isArray, isUndefined, isArrayBuffer, isString, isFunction, isNumber, isObject, isBoolean, isPlainObject, isDate, isFile, isBlob, isFileList, isStream, isFormData, isURLSearchParams, isReadableStream, isRequest, isResponse, isHeaders, trim, _global, isContextDefined, extend, stripBOM, inherits, toFlatObject, endsWith, toArray, isTypedArray, forEachEntry, matchAll, isHTMLForm, toCamelCase2, hasOwnProperty, isRegExp, reduceDescriptors, freezeMethods, toObjectSet, noop, toFiniteNumber, toJSONObject, isAsyncFn, isThenable, _setImmediate, asap, utils_default;
  var init_utils2 = __esm({
    "frontend/node_modules/axios/lib/utils.js"() {
      "use strict";
      init_bind();
      ({ toString } = Object.prototype);
      ({ getPrototypeOf } = Object);
      kindOf = /* @__PURE__ */ ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      typeOfTest = (type) => (thing) => typeof thing === type;
      ({ isArray } = Array);
      isUndefined = typeOfTest("undefined");
      isArrayBuffer = kindOfTest("ArrayBuffer");
      isString = typeOfTest("string");
      isFunction = typeOfTest("function");
      isNumber = typeOfTest("number");
      isObject = (thing) => thing !== null && typeof thing === "object";
      isBoolean = (thing) => thing === true || thing === false;
      isPlainObject = (val) => {
        if (kindOf(val) !== "object") {
          return false;
        }
        const prototype3 = getPrototypeOf(val);
        return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
      };
      isDate = kindOfTest("Date");
      isFile = kindOfTest("File");
      isBlob = kindOfTest("Blob");
      isFileList = kindOfTest("FileList");
      isStream = (val) => isObject(val) && isFunction(val.pipe);
      isFormData = (thing) => {
        let kind;
        return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
        kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
      };
      isURLSearchParams = kindOfTest("URLSearchParams");
      [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
      trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      _global = (() => {
        if (typeof globalThis !== "undefined") return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      isContextDefined = (context) => !isUndefined(context) && context !== _global;
      extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(b, (val, key) => {
          if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        }, { allOwnKeys });
        return a;
      };
      stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      inherits = (constructor, superConstructor, props, descriptors2) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, "super", {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null) return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      toArray = (thing) => {
        if (!thing) return null;
        if (isArray(thing)) return thing;
        let i = thing.length;
        if (!isNumber(i)) return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      isTypedArray = /* @__PURE__ */ ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;
        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      isHTMLForm = kindOfTest("HTMLFormElement");
      toCamelCase2 = (str) => {
        return str.toLowerCase().replace(
          /[-_\s]([a-z\d])(\w*)/g,
          function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          }
        );
      };
      hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      isRegExp = kindOfTest("RegExp");
      reduceDescriptors = (obj, reducer) => {
        const descriptors2 = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors2, (descriptor, name) => {
          let ret;
          if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
            return false;
          }
          const value = obj[name];
          if (!isFunction(value)) return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define2 = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
        return obj;
      };
      noop = () => {
      };
      toFiniteNumber = (value, defaultValue) => {
        return value != null && Number.isFinite(value = +value) ? value : defaultValue;
      };
      toJSONObject = (obj) => {
        const stack = new Array(10);
        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }
            if (!("toJSON" in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = void 0;
              return target;
            }
          }
          return source;
        };
        return visit(obj, 0);
      };
      isAsyncFn = kindOfTest("AsyncFunction");
      isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
      _setImmediate = ((setImmediateSupported, postMessageSupported) => {
        if (setImmediateSupported) {
          return setImmediate;
        }
        return postMessageSupported ? ((token, callbacks) => {
          _global.addEventListener("message", ({ source, data }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          }, false);
          return (cb) => {
            callbacks.push(cb);
            _global.postMessage(token, "*");
          };
        })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
      })(
        typeof setImmediate === "function",
        isFunction(_global.postMessage)
      );
      asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
      utils_default = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isReadableStream,
        isRequest,
        isResponse,
        isHeaders,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase: toCamelCase2,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable,
        setImmediate: _setImmediate,
        asap
      };
    }
  });

  // frontend/node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }
  var prototype, descriptors, AxiosError_default;
  var init_AxiosError = __esm({
    "frontend/node_modules/axios/lib/core/AxiosError.js"() {
      "use strict";
      init_utils2();
      utils_default.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils_default.toJSONObject(this.config),
            code: this.code,
            status: this.status
          };
        }
      });
      prototype = AxiosError.prototype;
      descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config, request, response, customProps) => {
        const axiosError = Object.create(prototype);
        utils_default.toFlatObject(error, axiosError, function filter2(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      AxiosError_default = AxiosError;
    }
  });

  // frontend/node_modules/axios/lib/helpers/null.js
  var null_default;
  var init_null = __esm({
    "frontend/node_modules/axios/lib/helpers/null.js"() {
      null_default = null;
    }
  });

  // frontend/node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null) return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var predicates, toFormData_default;
  var init_toFormData = __esm({
    "frontend/node_modules/axios/lib/helpers/toFormData.js"() {
      "use strict";
      init_utils2();
      init_AxiosError();
      init_null();
      predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      toFormData_default = toFormData;
    }
  });

  // frontend/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2, AxiosURLSearchParams_default;
  var init_AxiosURLSearchParams = __esm({
    "frontend/node_modules/axios/lib/helpers/AxiosURLSearchParams.js"() {
      "use strict";
      init_toFormData();
      prototype2 = AxiosURLSearchParams.prototype;
      prototype2.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype2.toString = function toString2(encoder) {
        const _encode = encoder ? function(value) {
          return encoder.call(this, value, encode);
        } : encode;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      AxiosURLSearchParams_default = AxiosURLSearchParams;
    }
  });

  // frontend/node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    if (utils_default.isFunction(options)) {
      options = {
        serialize: options
      };
    }
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  var init_buildURL = __esm({
    "frontend/node_modules/axios/lib/helpers/buildURL.js"() {
      "use strict";
      init_utils2();
      init_AxiosURLSearchParams();
    }
  });

  // frontend/node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager, InterceptorManager_default;
  var init_InterceptorManager = __esm({
    "frontend/node_modules/axios/lib/core/InterceptorManager.js"() {
      "use strict";
      init_utils2();
      InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils_default.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        }
      };
      InterceptorManager_default = InterceptorManager;
    }
  });

  // frontend/node_modules/axios/lib/defaults/transitional.js
  var transitional_default;
  var init_transitional = __esm({
    "frontend/node_modules/axios/lib/defaults/transitional.js"() {
      "use strict";
      transitional_default = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
    }
  });

  // frontend/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default;
  var init_URLSearchParams = __esm({
    "frontend/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js"() {
      "use strict";
      init_AxiosURLSearchParams();
      URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;
    }
  });

  // frontend/node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default;
  var init_FormData = __esm({
    "frontend/node_modules/axios/lib/platform/browser/classes/FormData.js"() {
      "use strict";
      FormData_default = typeof FormData !== "undefined" ? FormData : null;
    }
  });

  // frontend/node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default;
  var init_Blob = __esm({
    "frontend/node_modules/axios/lib/platform/browser/classes/Blob.js"() {
      "use strict";
      Blob_default = typeof Blob !== "undefined" ? Blob : null;
    }
  });

  // frontend/node_modules/axios/lib/platform/browser/index.js
  var browser_default;
  var init_browser = __esm({
    "frontend/node_modules/axios/lib/platform/browser/index.js"() {
      init_URLSearchParams();
      init_FormData();
      init_Blob();
      browser_default = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams_default,
          FormData: FormData_default,
          Blob: Blob_default
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
    }
  });

  // frontend/node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
    navigator: () => _navigator,
    origin: () => origin
  });
  var hasBrowserEnv, _navigator, hasStandardBrowserEnv, hasStandardBrowserWebWorkerEnv, origin;
  var init_utils3 = __esm({
    "frontend/node_modules/axios/lib/platform/common/utils.js"() {
      hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
      _navigator = typeof navigator === "object" && navigator || void 0;
      hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
      hasStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      origin = hasBrowserEnv && window.location.href || "http://localhost";
    }
  });

  // frontend/node_modules/axios/lib/platform/index.js
  var platform_default;
  var init_platform = __esm({
    "frontend/node_modules/axios/lib/platform/index.js"() {
      init_browser();
      init_utils3();
      platform_default = {
        ...utils_exports,
        ...browser_default
      };
    }
  });

  // frontend/node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  var init_toURLEncodedForm = __esm({
    "frontend/node_modules/axios/lib/helpers/toURLEncodedForm.js"() {
      "use strict";
      init_utils2();
      init_toFormData();
      init_platform();
    }
  });

  // frontend/node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__") return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default;
  var init_formDataToJSON = __esm({
    "frontend/node_modules/axios/lib/helpers/formDataToJSON.js"() {
      "use strict";
      init_utils2();
      formDataToJSON_default = formDataToJSON;
    }
  });

  // frontend/node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults, defaults_default;
  var init_defaults = __esm({
    "frontend/node_modules/axios/lib/defaults/index.js"() {
      "use strict";
      init_utils2();
      init_AxiosError();
      init_transitional();
      init_toFormData();
      init_toURLEncodedForm();
      init_platform();
      init_formDataToJSON();
      defaults = {
        transitional: transitional_default,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils_default.isObject(data);
          if (isObjectPayload && utils_default.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils_default.isFormData(data);
          if (isFormData2) {
            return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
          }
          if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
            return data;
          }
          if (utils_default.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils_default.isURLSearchParams(data)) {
            headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return data.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }
            if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
              const _FormData = this.env && this.env.FormData;
              return toFormData_default(
                isFileList2 ? { "files[]": data } : data,
                _FormData && new _FormData(),
                this.formSerializer
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          const transitional2 = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
            return data;
          }
          if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform_default.classes.FormData,
          Blob: platform_default.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": void 0
          }
        }
      };
      utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
        defaults.headers[method] = {};
      });
      defaults_default = defaults;
    }
  });

  // frontend/node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf, parseHeaders_default;
  var init_parseHeaders = __esm({
    "frontend/node_modules/axios/lib/helpers/parseHeaders.js"() {
      "use strict";
      init_utils2();
      ignoreDuplicateOf = utils_default.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      parseHeaders_default = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
    }
  });

  // frontend/node_modules/axios/lib/core/AxiosHeaders.js
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value)) return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var $internals, isValidHeaderName, AxiosHeaders, AxiosHeaders_default;
  var init_AxiosHeaders = __esm({
    "frontend/node_modules/axios/lib/core/AxiosHeaders.js"() {
      "use strict";
      init_utils2();
      init_parseHeaders();
      $internals = /* @__PURE__ */ Symbol("internals");
      isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = utils_default.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders_default(header), valueOrRewrite);
          } else if (utils_default.isHeaders(header)) {
            for (const [key, value] of header.entries()) {
              setHeader(value, key, rewrite);
            }
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils_default.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils_default.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils_default.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils_default.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils_default.forEach(this, (value, header) => {
            const key = utils_default.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils_default.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype3 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype3, _header);
              accessors[lHeader] = true;
            }
          }
          utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
        let mapped = key[0].toUpperCase() + key.slice(1);
        return {
          get: () => value,
          set(headerValue) {
            this[mapped] = headerValue;
          }
        };
      });
      utils_default.freezeMethods(AxiosHeaders);
      AxiosHeaders_default = AxiosHeaders;
    }
  });

  // frontend/node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  var init_transformData = __esm({
    "frontend/node_modules/axios/lib/core/transformData.js"() {
      "use strict";
      init_utils2();
      init_defaults();
      init_AxiosHeaders();
    }
  });

  // frontend/node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  var init_isCancel = __esm({
    "frontend/node_modules/axios/lib/cancel/isCancel.js"() {
      "use strict";
    }
  });

  // frontend/node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  var CanceledError_default;
  var init_CanceledError = __esm({
    "frontend/node_modules/axios/lib/cancel/CanceledError.js"() {
      "use strict";
      init_AxiosError();
      init_utils2();
      utils_default.inherits(CanceledError, AxiosError_default, {
        __CANCEL__: true
      });
      CanceledError_default = CanceledError;
    }
  });

  // frontend/node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  var init_settle = __esm({
    "frontend/node_modules/axios/lib/core/settle.js"() {
      "use strict";
      init_AxiosError();
    }
  });

  // frontend/node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  var init_parseProtocol = __esm({
    "frontend/node_modules/axios/lib/helpers/parseProtocol.js"() {
      "use strict";
    }
  });

  // frontend/node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default;
  var init_speedometer = __esm({
    "frontend/node_modules/axios/lib/helpers/speedometer.js"() {
      "use strict";
      speedometer_default = speedometer;
    }
  });

  // frontend/node_modules/axios/lib/helpers/throttle.js
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1e3 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };
    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    const flush = () => lastArgs && invoke(lastArgs);
    return [throttled, flush];
  }
  var throttle_default;
  var init_throttle = __esm({
    "frontend/node_modules/axios/lib/helpers/throttle.js"() {
      throttle_default = throttle;
    }
  });

  // frontend/node_modules/axios/lib/helpers/progressEventReducer.js
  var progressEventReducer, progressEventDecorator, asyncDecorator;
  var init_progressEventReducer = __esm({
    "frontend/node_modules/axios/lib/helpers/progressEventReducer.js"() {
      init_speedometer();
      init_throttle();
      init_utils2();
      progressEventReducer = (listener, isDownloadStream, freq = 3) => {
        let bytesNotified = 0;
        const _speedometer = speedometer_default(50, 250);
        return throttle_default((e) => {
          const loaded = e.loaded;
          const total = e.lengthComputable ? e.total : void 0;
          const progressBytes = loaded - bytesNotified;
          const rate = _speedometer(progressBytes);
          const inRange = loaded <= total;
          bytesNotified = loaded;
          const data = {
            loaded,
            total,
            progress: total ? loaded / total : void 0,
            bytes: progressBytes,
            rate: rate ? rate : void 0,
            estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? "download" : "upload"]: true
          };
          listener(data);
        }, freq);
      };
      progressEventDecorator = (total, throttled) => {
        const lengthComputable = total != null;
        return [(loaded) => throttled[0]({
          lengthComputable,
          total,
          loaded
        }), throttled[1]];
      };
      asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));
    }
  });

  // frontend/node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default;
  var init_isURLSameOrigin = __esm({
    "frontend/node_modules/axios/lib/helpers/isURLSameOrigin.js"() {
      init_platform();
      isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
        url = new URL(url, platform_default.origin);
        return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
      })(
        new URL(platform_default.origin),
        platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
      ) : () => true;
    }
  });

  // frontend/node_modules/axios/lib/helpers/cookies.js
  var cookies_default;
  var init_cookies = __esm({
    "frontend/node_modules/axios/lib/helpers/cookies.js"() {
      init_utils2();
      init_platform();
      cookies_default = platform_default.hasStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        {
          write(name, value, expires, path, domain, secure) {
            const cookie = [name + "=" + encodeURIComponent(value)];
            utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
            utils_default.isString(path) && cookie.push("path=" + path);
            utils_default.isString(domain) && cookie.push("domain=" + domain);
            secure === true && cookie.push("secure");
            document.cookie = cookie.join("; ");
          },
          read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        }
      ) : (
        // Non-standard browser env (web workers, react-native) lack needed support.
        {
          write() {
          },
          read() {
            return null;
          },
          remove() {
          }
        }
      );
    }
  });

  // frontend/node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  var init_isAbsoluteURL = __esm({
    "frontend/node_modules/axios/lib/helpers/isAbsoluteURL.js"() {
      "use strict";
    }
  });

  // frontend/node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  var init_combineURLs = __esm({
    "frontend/node_modules/axios/lib/helpers/combineURLs.js"() {
      "use strict";
    }
  });

  // frontend/node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !isAbsoluteURL(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  var init_buildFullPath = __esm({
    "frontend/node_modules/axios/lib/core/buildFullPath.js"() {
      "use strict";
      init_isAbsoluteURL();
      init_combineURLs();
    }
  });

  // frontend/node_modules/axios/lib/core/mergeConfig.js
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, prop, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, prop, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  var headersToObject;
  var init_mergeConfig = __esm({
    "frontend/node_modules/axios/lib/core/mergeConfig.js"() {
      "use strict";
      init_utils2();
      init_AxiosHeaders();
      headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
    }
  });

  // frontend/node_modules/axios/lib/helpers/resolveConfig.js
  var resolveConfig_default;
  var init_resolveConfig = __esm({
    "frontend/node_modules/axios/lib/helpers/resolveConfig.js"() {
      init_platform();
      init_utils2();
      init_isURLSameOrigin();
      init_cookies();
      init_buildFullPath();
      init_mergeConfig();
      init_AxiosHeaders();
      init_buildURL();
      resolveConfig_default = (config) => {
        const newConfig = mergeConfig({}, config);
        let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
        newConfig.headers = headers = AxiosHeaders_default.from(headers);
        newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
        if (auth) {
          headers.set(
            "Authorization",
            "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
          );
        }
        let contentType;
        if (utils_default.isFormData(data)) {
          if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
            headers.setContentType(void 0);
          } else if ((contentType = headers.getContentType()) !== false) {
            const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
            headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
          }
        }
        if (platform_default.hasStandardBrowserEnv) {
          withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
          if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
            const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
            if (xsrfValue) {
              headers.set(xsrfHeaderName, xsrfValue);
            }
          }
        }
        return newConfig;
      };
    }
  });

  // frontend/node_modules/axios/lib/adapters/xhr.js
  var isXHRAdapterSupported, xhr_default;
  var init_xhr = __esm({
    "frontend/node_modules/axios/lib/adapters/xhr.js"() {
      init_utils2();
      init_settle();
      init_transitional();
      init_AxiosError();
      init_CanceledError();
      init_parseProtocol();
      init_platform();
      init_AxiosHeaders();
      init_progressEventReducer();
      init_resolveConfig();
      isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      xhr_default = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          const _config = resolveConfig_default(config);
          let requestData = _config.data;
          const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
          let { responseType, onUploadProgress, onDownloadProgress } = _config;
          let onCanceled;
          let uploadThrottled, downloadThrottled;
          let flushUpload, flushDownload;
          function done() {
            flushUpload && flushUpload();
            flushDownload && flushDownload();
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener("abort", onCanceled);
          }
          let request = new XMLHttpRequest();
          request.open(_config.method.toUpperCase(), _config.url, true);
          request.timeout = _config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            const responseHeaders = AxiosHeaders_default.from(
              "getAllResponseHeaders" in request && request.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional2 = _config.transitional || transitional_default;
            if (_config.timeoutErrorMessage) {
              timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(new AxiosError_default(
              timeoutErrorMessage,
              transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
              config,
              request
            ));
            request = null;
          };
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
              request.setRequestHeader(key, val);
            });
          }
          if (!utils_default.isUndefined(_config.withCredentials)) {
            request.withCredentials = !!_config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = _config.responseType;
          }
          if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
            request.addEventListener("progress", downloadThrottled);
          }
          if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
            request.upload.addEventListener("progress", uploadThrottled);
            request.upload.addEventListener("loadend", flushUpload);
          }
          if (_config.cancelToken || _config.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
              request.abort();
              request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
              _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(_config.url);
          if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
            return;
          }
          request.send(requestData || null);
        });
      };
    }
  });

  // frontend/node_modules/axios/lib/helpers/composeSignals.js
  var composeSignals, composeSignals_default;
  var init_composeSignals = __esm({
    "frontend/node_modules/axios/lib/helpers/composeSignals.js"() {
      init_CanceledError();
      init_AxiosError();
      init_utils2();
      composeSignals = (signals, timeout) => {
        const { length } = signals = signals ? signals.filter(Boolean) : [];
        if (timeout || length) {
          let controller = new AbortController();
          let aborted;
          const onabort = function(reason) {
            if (!aborted) {
              aborted = true;
              unsubscribe();
              const err = reason instanceof Error ? reason : this.reason;
              controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
            }
          };
          let timer = timeout && setTimeout(() => {
            timer = null;
            onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
          }, timeout);
          const unsubscribe = () => {
            if (signals) {
              timer && clearTimeout(timer);
              timer = null;
              signals.forEach((signal2) => {
                signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
              });
              signals = null;
            }
          };
          signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
          const { signal } = controller;
          signal.unsubscribe = () => utils_default.asap(unsubscribe);
          return signal;
        }
      };
      composeSignals_default = composeSignals;
    }
  });

  // frontend/node_modules/axios/lib/helpers/trackStream.js
  var streamChunk, readBytes, readStream, trackStream;
  var init_trackStream = __esm({
    "frontend/node_modules/axios/lib/helpers/trackStream.js"() {
      streamChunk = function* (chunk, chunkSize) {
        let len = chunk.byteLength;
        if (!chunkSize || len < chunkSize) {
          yield chunk;
          return;
        }
        let pos = 0;
        let end;
        while (pos < len) {
          end = pos + chunkSize;
          yield chunk.slice(pos, end);
          pos = end;
        }
      };
      readBytes = async function* (iterable, chunkSize) {
        for await (const chunk of readStream(iterable)) {
          yield* streamChunk(chunk, chunkSize);
        }
      };
      readStream = async function* (stream) {
        if (stream[Symbol.asyncIterator]) {
          yield* stream;
          return;
        }
        const reader = stream.getReader();
        try {
          for (; ; ) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            yield value;
          }
        } finally {
          await reader.cancel();
        }
      };
      trackStream = (stream, chunkSize, onProgress, onFinish) => {
        const iterator = readBytes(stream, chunkSize);
        let bytes = 0;
        let done;
        let _onFinish = (e) => {
          if (!done) {
            done = true;
            onFinish && onFinish(e);
          }
        };
        return new ReadableStream({
          async pull(controller) {
            try {
              const { done: done2, value } = await iterator.next();
              if (done2) {
                _onFinish();
                controller.close();
                return;
              }
              let len = value.byteLength;
              if (onProgress) {
                let loadedBytes = bytes += len;
                onProgress(loadedBytes);
              }
              controller.enqueue(new Uint8Array(value));
            } catch (err) {
              _onFinish(err);
              throw err;
            }
          },
          cancel(reason) {
            _onFinish(reason);
            return iterator.return();
          }
        }, {
          highWaterMark: 2
        });
      };
    }
  });

  // frontend/node_modules/axios/lib/adapters/fetch.js
  var isFetchSupported, isReadableStreamSupported, encodeText, test, supportsRequestStream, DEFAULT_CHUNK_SIZE, supportsResponseStream, resolvers, getBodyLength, resolveBodyLength, fetch_default;
  var init_fetch = __esm({
    "frontend/node_modules/axios/lib/adapters/fetch.js"() {
      init_platform();
      init_utils2();
      init_AxiosError();
      init_composeSignals();
      init_trackStream();
      init_AxiosHeaders();
      init_progressEventReducer();
      init_resolveConfig();
      init_settle();
      isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
      isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
      encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
      test = (fn, ...args) => {
        try {
          return !!fn(...args);
        } catch (e) {
          return false;
        }
      };
      supportsRequestStream = isReadableStreamSupported && test(() => {
        let duplexAccessed = false;
        const hasContentType = new Request(platform_default.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            duplexAccessed = true;
            return "half";
          }
        }).headers.has("Content-Type");
        return duplexAccessed && !hasContentType;
      });
      DEFAULT_CHUNK_SIZE = 64 * 1024;
      supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
      resolvers = {
        stream: supportsResponseStream && ((res) => res.body)
      };
      isFetchSupported && ((res) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
          !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
            throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
          });
        });
      })(new Response());
      getBodyLength = async (body) => {
        if (body == null) {
          return 0;
        }
        if (utils_default.isBlob(body)) {
          return body.size;
        }
        if (utils_default.isSpecCompliantForm(body)) {
          const _request = new Request(platform_default.origin, {
            method: "POST",
            body
          });
          return (await _request.arrayBuffer()).byteLength;
        }
        if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
          return body.byteLength;
        }
        if (utils_default.isURLSearchParams(body)) {
          body = body + "";
        }
        if (utils_default.isString(body)) {
          return (await encodeText(body)).byteLength;
        }
      };
      resolveBodyLength = async (headers, body) => {
        const length = utils_default.toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
      };
      fetch_default = isFetchSupported && (async (config) => {
        let {
          url,
          method,
          data,
          signal,
          cancelToken,
          timeout,
          onDownloadProgress,
          onUploadProgress,
          responseType,
          headers,
          withCredentials = "same-origin",
          fetchOptions
        } = resolveConfig_default(config);
        responseType = responseType ? (responseType + "").toLowerCase() : "text";
        let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
        let request;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
          composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
          if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request(url, {
              method: "POST",
              body: data,
              duplex: "half"
            });
            let contentTypeHeader;
            if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
              headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
              const [onProgress, flush] = progressEventDecorator(
                requestContentLength,
                progressEventReducer(asyncDecorator(onUploadProgress))
              );
              data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
          }
          if (!utils_default.isString(withCredentials)) {
            withCredentials = withCredentials ? "include" : "omit";
          }
          const isCredentialsSupported = "credentials" in Request.prototype;
          request = new Request(url, {
            ...fetchOptions,
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : void 0
          });
          let response = await fetch(request);
          const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
          if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
            const options = {};
            ["status", "statusText", "headers"].forEach((prop) => {
              options[prop] = response[prop];
            });
            const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
            const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            ) || [];
            response = new Response(
              trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
                flush && flush();
                unsubscribe && unsubscribe();
              }),
              options
            );
          }
          responseType = responseType || "text";
          let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
          !isStreamResponse && unsubscribe && unsubscribe();
          return await new Promise((resolve, reject) => {
            settle(resolve, reject, {
              data: responseData,
              headers: AxiosHeaders_default.from(response.headers),
              status: response.status,
              statusText: response.statusText,
              config,
              request
            });
          });
        } catch (err) {
          unsubscribe && unsubscribe();
          if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
            throw Object.assign(
              new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
              {
                cause: err.cause || err
              }
            );
          }
          throw AxiosError_default.from(err, err && err.code, config, request);
        }
      });
    }
  });

  // frontend/node_modules/axios/lib/adapters/adapters.js
  var knownAdapters, renderReason, isResolvedHandle, adapters_default;
  var init_adapters = __esm({
    "frontend/node_modules/axios/lib/adapters/adapters.js"() {
      init_utils2();
      init_null();
      init_xhr();
      init_fetch();
      init_AxiosError();
      knownAdapters = {
        http: null_default,
        xhr: xhr_default,
        fetch: fetch_default
      };
      utils_default.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { value });
        }
      });
      renderReason = (reason) => `- ${reason}`;
      isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
      adapters_default = {
        getAdapter: (adapters) => {
          adapters = utils_default.isArray(adapters) ? adapters : [adapters];
          const { length } = adapters;
          let nameOrAdapter;
          let adapter;
          const rejectedReasons = {};
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
              adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
              if (adapter === void 0) {
                throw new AxiosError_default(`Unknown adapter '${id}'`);
              }
            }
            if (adapter) {
              break;
            }
            rejectedReasons[id || "#" + i] = adapter;
          }
          if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(
              ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
            );
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new AxiosError_default(
              `There is no suitable adapter to dispatch the request ` + s,
              "ERR_NOT_SUPPORT"
            );
          }
          return adapter;
        },
        adapters: knownAdapters
      };
    }
  });

  // frontend/node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  var init_dispatchRequest = __esm({
    "frontend/node_modules/axios/lib/core/dispatchRequest.js"() {
      "use strict";
      init_transformData();
      init_isCancel();
      init_defaults();
      init_CanceledError();
      init_AxiosHeaders();
      init_adapters();
    }
  });

  // frontend/node_modules/axios/lib/env/data.js
  var VERSION;
  var init_data = __esm({
    "frontend/node_modules/axios/lib/env/data.js"() {
      VERSION = "1.8.4";
    }
  });

  // frontend/node_modules/axios/lib/helpers/validator.js
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validators, deprecatedWarnings, validator_default;
  var init_validator = __esm({
    "frontend/node_modules/axios/lib/helpers/validator.js"() {
      "use strict";
      init_data();
      init_AxiosError();
      validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator === false) {
            throw new AxiosError_default(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError_default.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      validators.spelling = function spelling(correctSpelling) {
        return (value, opt) => {
          console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
          return true;
        };
      };
      validator_default = {
        assertOptions,
        validators
      };
    }
  });

  // frontend/node_modules/axios/lib/core/Axios.js
  var validators2, Axios, Axios_default;
  var init_Axios = __esm({
    "frontend/node_modules/axios/lib/core/Axios.js"() {
      "use strict";
      init_utils2();
      init_buildURL();
      init_InterceptorManager();
      init_dispatchRequest();
      init_mergeConfig();
      init_buildFullPath();
      init_validator();
      init_AxiosHeaders();
      validators2 = validator_default.validators;
      Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager_default(),
            response: new InterceptorManager_default()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        async request(configOrUrl, config) {
          try {
            return await this._request(configOrUrl, config);
          } catch (err) {
            if (err instanceof Error) {
              let dummy = {};
              Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
              const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
              try {
                if (!err.stack) {
                  err.stack = stack;
                } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                  err.stack += "\n" + stack;
                }
              } catch (e) {
              }
            }
            throw err;
          }
        }
        _request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional: transitional2, paramsSerializer, headers } = config;
          if (transitional2 !== void 0) {
            validator_default.assertOptions(transitional2, {
              silentJSONParsing: validators2.transitional(validators2.boolean),
              forcedJSONParsing: validators2.transitional(validators2.boolean),
              clarifyTimeoutError: validators2.transitional(validators2.boolean)
            }, false);
          }
          if (paramsSerializer != null) {
            if (utils_default.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator_default.assertOptions(paramsSerializer, {
                encode: validators2.function,
                serialize: validators2.function
              }, true);
            }
          }
          if (config.allowAbsoluteUrls !== void 0) {
          } else if (this.defaults.allowAbsoluteUrls !== void 0) {
            config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
          } else {
            config.allowAbsoluteUrls = true;
          }
          validator_default.assertOptions(config, {
            baseUrl: validators2.spelling("baseURL"),
            withXsrfToken: validators2.spelling("withXSRFToken")
          }, true);
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders = headers && utils_default.merge(
            headers.common,
            headers[config.method]
          );
          headers && utils_default.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method) => {
              delete headers[method];
            }
          );
          config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          i = 0;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      Axios_default = Axios;
    }
  });

  // frontend/node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken, CancelToken_default;
  var init_CancelToken = __esm({
    "frontend/node_modules/axios/lib/cancel/CancelToken.js"() {
      "use strict";
      init_CanceledError();
      CancelToken = class _CancelToken {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners) return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError_default(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        toAbortSignal() {
          const controller = new AbortController();
          const abort = (err) => {
            controller.abort(err);
          };
          this.subscribe(abort);
          controller.signal.unsubscribe = () => this.unsubscribe(abort);
          return controller.signal;
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new _CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      CancelToken_default = CancelToken;
    }
  });

  // frontend/node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  var init_spread = __esm({
    "frontend/node_modules/axios/lib/helpers/spread.js"() {
      "use strict";
    }
  });

  // frontend/node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }
  var init_isAxiosError = __esm({
    "frontend/node_modules/axios/lib/helpers/isAxiosError.js"() {
      "use strict";
      init_utils2();
    }
  });

  // frontend/node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode, HttpStatusCode_default;
  var init_HttpStatusCode = __esm({
    "frontend/node_modules/axios/lib/helpers/HttpStatusCode.js"() {
      HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      HttpStatusCode_default = HttpStatusCode;
    }
  });

  // frontend/node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios, axios_default;
  var init_axios = __esm({
    "frontend/node_modules/axios/lib/axios.js"() {
      "use strict";
      init_utils2();
      init_bind();
      init_Axios();
      init_mergeConfig();
      init_defaults();
      init_formDataToJSON();
      init_CanceledError();
      init_CancelToken();
      init_isCancel();
      init_data();
      init_toFormData();
      init_AxiosError();
      init_spread();
      init_isAxiosError();
      init_AxiosHeaders();
      init_adapters();
      init_HttpStatusCode();
      axios = createInstance(defaults_default);
      axios.Axios = Axios_default;
      axios.CanceledError = CanceledError_default;
      axios.CancelToken = CancelToken_default;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData_default;
      axios.AxiosError = AxiosError_default;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders_default;
      axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.getAdapter = adapters_default.getAdapter;
      axios.HttpStatusCode = HttpStatusCode_default;
      axios.default = axios;
      axios_default = axios;
    }
  });

  // frontend/node_modules/axios/index.js
  var Axios2, AxiosError2, CanceledError2, isCancel2, CancelToken2, VERSION2, all2, Cancel, isAxiosError2, spread2, toFormData2, AxiosHeaders2, HttpStatusCode2, formToJSON, getAdapter, mergeConfig2;
  var init_axios2 = __esm({
    "frontend/node_modules/axios/index.js"() {
      init_axios();
      ({
        Axios: Axios2,
        AxiosError: AxiosError2,
        CanceledError: CanceledError2,
        isCancel: isCancel2,
        CancelToken: CancelToken2,
        VERSION: VERSION2,
        all: all2,
        Cancel,
        isAxiosError: isAxiosError2,
        spread: spread2,
        toFormData: toFormData2,
        AxiosHeaders: AxiosHeaders2,
        HttpStatusCode: HttpStatusCode2,
        formToJSON,
        getAdapter,
        mergeConfig: mergeConfig2
      } = axios_default);
    }
  });

  // frontend/src/components/Login.jsx
  var Login_exports = {};
  __export(Login_exports, {
    default: () => Login_default
  });
  function LoginSignupPage() {
    const { userType } = (0, import_react_router_dom4.useParams)();
    const navigate = (0, import_react_router_dom4.useNavigate)();
    const location = (0, import_react_router_dom4.useLocation)();
    const [isTokenChecked, setIsTokenChecked] = (0, import_react6.useState)(false);
    (0, import_react6.useEffect)(() => {
      const checkToken = async () => {
        const effectiveUserType = userType || "customer";
        const endpoint = effectiveUserType === "customer" ? `${import_meta2.env.VITE_BASE_URL}/user/auth/me` : `${import_meta2.env.VITE_BASE_URL}/messOwner/auth/me`;
        try {
          const response = await axios_default.get(endpoint, {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "X-XSS-Protection": "1; mode=block",
              "X-Content-Type-Options": "nosniff"
            }
          });
          if (response.status === 200 && response.data.message === "Authorized") {
            if (effectiveUserType === "customer") {
              navigate("/user-dashboard");
            } else {
              const landingPath = await resolveMessOwnerRedirectPath();
              navigate(landingPath);
            }
          }
        } catch (error) {
          console.error("Token verification failed:", error);
        } finally {
          setIsTokenChecked(true);
        }
      };
      const { fromLogout } = location.state || {};
      if (fromLogout) {
        setIsTokenChecked(true);
      } else {
        checkToken();
      }
    }, [userType, navigate, location]);
    if (!isTokenChecked) {
      return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" }));
    }
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col p-4" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" }), /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex items-center justify-center pt-20 px-4 sm:px-6 relative z-10" }, /* @__PURE__ */ React.createElement(AuthSection, { userType, navigate })));
  }
  function AuthSection({ userType, navigate }) {
    const [mode, setMode] = (0, import_react6.useState)("login");
    const [formData, setFormData] = (0, import_react6.useState)({
      email: "",
      password: "",
      name: "",
      phone: ""
    });
    const [errors, setErrors] = (0, import_react6.useState)({});
    const [loading, setLoading] = (0, import_react6.useState)(false);
    const [showPassword, setShowPassword] = (0, import_react6.useState)(false);
    const effectiveUserType = userType || "customer";
    const BASE_URL = import_meta2.env.VITE_BASE_URL;
    const API_ENDPOINTS = {
      customer: {
        login: `${BASE_URL}/user/login`,
        signup: `${BASE_URL}/user/signup`
      },
      messOwner: {
        login: `${BASE_URL}/messOwner/login`,
        signup: `${BASE_URL}/messOwner/signup`
      }
    };
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email) ? "" : "Please enter a valid email address";
    };
    const validatePassword = (password) => {
      if (password.length < 8) {
        return "Password must be at least 8 characters long";
      }
      if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter";
      }
      if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter";
      }
      if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number";
      }
      if (!/[^A-Za-z0-9]/.test(password)) {
        return "Password must contain at least one special character";
      }
      return "";
    };
    const validateName = (name) => {
      if (name.length < 2) {
        return "Name must be at least 2 characters long";
      }
      if (!/^[a-zA-Z\s]*$/.test(name)) {
        return "Name can only contain letters and spaces";
      }
      return "";
    };
    const validatePhone = (phone) => {
      const phoneRegex = /^\+91[6-9]\d{9}$/;
      return phoneRegex.test(phone) ? "" : "Please enter a valid Indian phone number (e.g., +91XXXXXXXXXX)";
    };
    const validateForm = () => {
      if (mode === "login") return true;
      const newErrors = {};
      newErrors.email = validateEmail(formData.email);
      newErrors.password = validatePassword(formData.password);
      newErrors.name = validateName(formData.name);
      newErrors.phone = validatePhone(formData.phone);
      setErrors(newErrors);
      return Object.values(newErrors).every((error) => error === "");
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      const sanitizedValue = value.replace(/[<>{}]/g, "");
      setFormData({ ...formData, [name]: sanitizedValue });
      if (mode === "signup") {
        switch (name) {
          case "email":
            setErrors({ ...errors, email: validateEmail(sanitizedValue) });
            break;
          case "password":
            setErrors({ ...errors, password: validatePassword(sanitizedValue) });
            break;
          case "name":
            setErrors({ ...errors, name: validateName(sanitizedValue) });
            break;
          case "phone":
            setErrors({ ...errors, phone: validatePhone(sanitizedValue) });
            break;
          default:
            break;
        }
      }
    };
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErrors({ ...errors, server: "" });
      try {
        const endpoint = effectiveUserType === "customer" ? API_ENDPOINTS.customer.login : API_ENDPOINTS.messOwner.login;
        await axios_default.post(
          endpoint,
          {
            email: formData.email.trim(),
            password: formData.password
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "X-XSS-Protection": "1; mode=block",
              "X-Content-Type-Options": "nosniff"
            }
          }
        );
        if (effectiveUserType === "customer") {
          navigate("/user-dashboard");
        } else {
          const landingPath = await resolveMessOwnerRedirectPath();
          navigate(landingPath);
        }
      } catch (err) {
        setErrors({
          ...errors,
          server: err.response?.data?.message || "Login failed. Please try again."
        });
      } finally {
        setLoading(false);
      }
    };
    const handleSignup = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        return;
      }
      setLoading(true);
      setErrors({ ...errors, server: "" });
      try {
        const endpoint = effectiveUserType === "customer" ? API_ENDPOINTS.customer.signup : API_ENDPOINTS.messOwner.signup;
        await axios_default.post(
          endpoint,
          {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            password: formData.password
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "X-XSS-Protection": "1; mode=block",
              "X-Content-Type-Options": "nosniff"
            }
          }
        );
        if (effectiveUserType === "customer") {
          navigate("/user-dashboard");
        } else {
          const landingPath = await resolveMessOwnerRedirectPath();
          navigate(landingPath);
        }
      } catch (err) {
        setErrors({
          ...errors,
          server: err.response?.data?.message || "Signup failed"
        });
      } finally {
        setLoading(false);
      }
    };
    const userTypeConfig = {
      customer: {
        title: "Customer Portal",
        icon: User,
        color: "blue",
        gradient: "from-blue-500 to-indigo-600",
        bgGradient: "from-blue-50 to-indigo-50",
        description: "Access your meal reservations and discover local messes"
      },
      messOwner: {
        title: "Mess Owner Portal",
        icon: Store,
        color: "orange",
        gradient: "from-orange-500 to-amber-600",
        bgGradient: "from-orange-50 to-amber-50",
        description: "Manage your mess, menus, and customer orders"
      }
    };
    const config = userTypeConfig[effectiveUserType];
    const IconComponent = config.icon;
    return /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-md mx-auto animate-fadeIn" }, /* @__PURE__ */ React.createElement("div", { className: "card p-8 relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-8" }, /* @__PURE__ */ React.createElement("div", { className: `w-20 h-20 bg-gradient-to-r ${config.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg` }, /* @__PURE__ */ React.createElement(IconComponent, { className: "w-10 h-10 text-white" })), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2" }, config.title), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-sm" }, config.description)), /* @__PURE__ */ React.createElement("div", { className: "flex bg-gray-100 rounded-lg p-1 mb-6" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setMode("login"),
        className: `flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${mode === "login" ? `bg-gradient-to-r ${config.gradient} text-white shadow-md` : "text-gray-600 hover:text-gray-800"}`
      },
      "Login"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setMode("signup"),
        className: `flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${mode === "signup" ? `bg-gradient-to-r ${config.gradient} text-white shadow-md` : "text-gray-600 hover:text-gray-800"}`
      },
      "Sign Up"
    )), Object.values(errors).some((error) => error) && /* @__PURE__ */ React.createElement("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 animate-slideUp" }, errors.server && /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 text-red-500 mr-2" }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, errors.server)), mode === "signup" && errors.email && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.email), mode === "signup" && errors.password && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.password), mode === "signup" && errors.name && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.name), mode === "signup" && errors.phone && /* @__PURE__ */ React.createElement("p", { className: "text-sm ml-7" }, errors.phone)), mode === "login" ? /* @__PURE__ */ React.createElement("form", { onSubmit: handleLogin, className: "space-y-6", noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        placeholder: effectiveUserType === "customer" ? "Email address: user1@gmail.com" : "Email address: user2@gmail.com",
        required: true,
        className: "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: showPassword ? "text" : "password",
        name: "password",
        value: formData.password,
        onChange: handleChange,
        placeholder: effectiveUserType === "customer" ? "Password: U1234567u@" : "Password: M1234567m@",
        required: true,
        className: "w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      },
      showPassword ? /* @__PURE__ */ React.createElement(EyeOff, { className: "w-5 h-5" }) : /* @__PURE__ */ React.createElement(Eye, { className: "w-5 h-5" })
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: `w-full bg-gradient-to-r ${config.gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`
      },
      loading ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Logging in...") : "Login"
    )) : /* @__PURE__ */ React.createElement("form", { onSubmit: handleSignup, className: "space-y-6", noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(User, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        name: "name",
        value: formData.name,
        onChange: handleChange,
        placeholder: effectiveUserType === "customer" ? "Full Name" : "Mess Owner's Name",
        required: true,
        className: `w-full pl-12 pr-4 py-3 bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Phone, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "tel",
        name: "phone",
        value: formData.phone,
        onChange: handleChange,
        placeholder: "+91XXXXXXXXXX",
        required: true,
        className: `w-full pl-12 pr-4 py-3 bg-gray-50 border ${errors.phone ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        name: "email",
        value: formData.email,
        onChange: handleChange,
        placeholder: "Email address",
        required: true,
        className: `w-full pl-12 pr-4 py-3 bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: showPassword ? "text" : "password",
        name: "password",
        value: formData.password,
        onChange: handleChange,
        placeholder: "Password",
        required: true,
        className: `w-full pl-12 pr-12 py-3 bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-200"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      },
      showPassword ? /* @__PURE__ */ React.createElement(EyeOff, { className: "w-5 h-5" }) : /* @__PURE__ */ React.createElement(Eye, { className: "w-5 h-5" })
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: loading || Object.values(errors).some((error) => error),
        className: `w-full bg-gradient-to-r ${config.gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`
      },
      loading ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Creating account...") : "Create Account"
    )), /* @__PURE__ */ React.createElement("div", { className: "mt-8 text-center" }, /* @__PURE__ */ React.createElement(
      import_react_router_dom4.Link,
      {
        to: "/",
        className: "text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
      },
      "\u2190 Back to Home"
    ))));
  }
  var import_react6, import_react_router_dom4, import_meta2, LAST_ACTIVE_MESS_KEY, resolveMessOwnerRedirectPath, Login_default;
  var init_Login = __esm({
    "frontend/src/components/Login.jsx"() {
      import_react6 = __require("react");
      import_react_router_dom4 = __require("react-router-dom");
      init_lucide_react();
      init_axios2();
      init_Navbar();
      import_meta2 = {};
      LAST_ACTIVE_MESS_KEY = "ownerLastActiveMessId";
      resolveMessOwnerRedirectPath = async () => {
        try {
          const response = await axios_default.get(`${import_meta2.env.VITE_BASE_URL}/mess/owner/messes`, {
            withCredentials: true
          });
          const messes = response.data?.messes || [];
          if (!messes.length) {
            localStorage.removeItem(LAST_ACTIVE_MESS_KEY);
            return "/mess-dashboard/create-first-mess";
          }
          const lastActiveMessId = localStorage.getItem(LAST_ACTIVE_MESS_KEY);
          const resolvedMess = messes.find((mess) => mess._id === lastActiveMessId) || messes[0];
          localStorage.setItem(LAST_ACTIVE_MESS_KEY, resolvedMess._id);
          return `/mess-dashboard/${resolvedMess._id}`;
        } catch (error) {
          if (error.response?.status === 404) {
            localStorage.removeItem(LAST_ACTIVE_MESS_KEY);
            return "/mess-dashboard/create-first-mess";
          }
          return "/mess-dashboard";
        }
      };
      Login_default = LoginSignupPage;
    }
  });

  // frontend/src/components/UserTypeSelection.jsx
  var UserTypeSelection_exports = {};
  __export(UserTypeSelection_exports, {
    default: () => UserTypeSelection_default
  });
  function UserTypeSelectionPage() {
    const [isVisible, setIsVisible] = (0, import_react7.useState)(false);
    (0, import_react7.useEffect)(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" }), /* @__PURE__ */ import_react7.default.createElement(Navbar_default, null), /* @__PURE__ */ import_react7.default.createElement(HeroSection2, { isVisible }), /* @__PURE__ */ import_react7.default.createElement(Footer2, null));
  }
  function HeroSection2({ isVisible }) {
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "relative z-10 max-w-6xl mx-auto text-center" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: `transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}` }, /* @__PURE__ */ import_react7.default.createElement("h1", { className: "mt-10 text-3xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" }, "Choose Your", /* @__PURE__ */ import_react7.default.createElement("span", { className: "block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mt-2" }, "Account Type")), /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed" }, "Join MealSphere as a mess owner to manage your business or as a customer to discover amazing meals"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12" }, /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom5.Link, { to: "/login-signup/messOwner", className: "group" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "card hover-lift bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 p-6 sm:p-8 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "relative z-10" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" }, /* @__PURE__ */ import_react7.default.createElement(Store, { className: "w-10 h-10 sm:w-12 sm:h-12 text-white" })), /* @__PURE__ */ import_react7.default.createElement("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" }, "Mess Owner"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed" }, "Manage your mess services, menus, and customers, efficiently with our comprehensive management tools"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "grid grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(Users, { className: "w-6 h-6 text-orange-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Manage Members")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(Utensils, { className: "w-6 h-6 text-orange-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Update Menus")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(ChartColumn, { className: "w-6 h-6 text-orange-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Track Analytics")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(Settings, { className: "w-6 h-6 text-orange-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Mess Settings"))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex items-center justify-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all duration-300" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-sm sm:text-base" }, "Start Managing"), /* @__PURE__ */ import_react7.default.createElement(ArrowRight, { className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" }))))), /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom5.Link, { to: "/login-signup/customer", className: "group" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "card hover-lift bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 p-6 sm:p-8 text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "relative z-10" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" }, /* @__PURE__ */ import_react7.default.createElement(User, { className: "w-10 h-10 sm:w-12 sm:h-12 text-white" })), /* @__PURE__ */ import_react7.default.createElement("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" }, "Customer"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed" }, "Discover delicious meals, place orders, and enjoy hassle-free dining from local mess services"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "grid grid-cols-2 gap-4 mb-6" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(Utensils, { className: "w-6 h-6 text-blue-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Browse Menus")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(Calendar, { className: "w-6 h-6 text-blue-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Reserve Meals")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(Store, { className: "w-6 h-6 text-blue-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Find Nearby")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-col items-center p-3 bg-white/50 rounded-lg" }, /* @__PURE__ */ import_react7.default.createElement(Shield, { className: "w-6 h-6 text-blue-500 mb-2" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs sm:text-sm font-medium text-gray-700" }, "Secure Orders"))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-sm sm:text-base" }, "Start Reserving"), /* @__PURE__ */ import_react7.default.createElement(ArrowRight, { className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" })))))), /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom5.Link, { to: "/" }, /* @__PURE__ */ import_react7.default.createElement("button", { className: "btn-secondary text-sm sm:text-base mb-4" }, "\u2190 Back to Home")))));
  }
  function Footer2() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return /* @__PURE__ */ import_react7.default.createElement("footer", { className: "bg-gray-900 text-white py-8 sm:py-12 relative z-10" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "md:col-span-1" }, /* @__PURE__ */ import_react7.default.createElement("h3", { className: "text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4" }, "MealSphere"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-sm sm:text-base text-gray-400 leading-relaxed" }, "Revolutionizing mess management through technology. Connect, book, and enjoy meals with ease.")), /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("h4", { className: "text-base sm:text-lg font-semibold mb-3 sm:mb-4" }, "Quick Links"), /* @__PURE__ */ import_react7.default.createElement("ul", { className: "space-y-2 text-gray-400 text-sm sm:text-base" }, /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom5.Link, { to: "/", className: "hover:text-amber-400 transition-colors duration-300" }, "Home")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement(import_react_router_dom5.Link, { to: "/signup", className: "hover:text-amber-400 transition-colors duration-300" }, "Get Started")))), /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("h4", { className: "text-base sm:text-lg font-semibold mb-3 sm:mb-4" }, "Support"), /* @__PURE__ */ import_react7.default.createElement("ul", { className: "space-y-2 text-gray-400 text-sm sm:text-base" }, /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "#", className: "hover:text-amber-400 transition-colors duration-300" }, "Help Center")), /* @__PURE__ */ import_react7.default.createElement("li", null, /* @__PURE__ */ import_react7.default.createElement("a", { href: "#", className: "hover:text-amber-400 transition-colors duration-300" }, "Contact Us"))))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "border-t border-gray-800 pt-6 sm:pt-8 text-center" }, /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-xs sm:text-sm text-gray-400" }, "\xA9 ", currentYear, " MealSphere. All rights reserved. Made with \u2764\uFE0F for better dining experiences."))));
  }
  var import_react7, import_react_router_dom5, UserTypeSelection_default;
  var init_UserTypeSelection = __esm({
    "frontend/src/components/UserTypeSelection.jsx"() {
      import_react7 = __toESM(__require("react"), 1);
      import_react_router_dom5 = __require("react-router-dom");
      init_lucide_react();
      init_Navbar();
      UserTypeSelection_default = UserTypeSelectionPage;
    }
  });

  // frontend/src/components/UserDashboardNavbar.jsx
  var import_react8, import_react_router_dom6, import_meta3, UserDashboardNavbar, NavButton2, MobileNavLink2, UserDashboardNavbar_default;
  var init_UserDashboardNavbar = __esm({
    "frontend/src/components/UserDashboardNavbar.jsx"() {
      import_react8 = __toESM(__require("react"), 1);
      init_lucide_react();
      import_react_router_dom6 = __require("react-router-dom");
      init_axios2();
      import_meta3 = {};
      UserDashboardNavbar = () => {
        const [isMenuOpen, setIsMenuOpen] = (0, import_react8.useState)(false);
        const [isScrolled, setIsScrolled] = (0, import_react8.useState)(false);
        const navigate = (0, import_react_router_dom6.useNavigate)();
        (0, import_react8.useEffect)(() => {
          const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        const handleLogout = async () => {
          try {
            const response = await axios_default.post(
              `${import_meta3.env.VITE_BASE_URL}/user/logout`,
              {},
              {
                withCredentials: true,
                headers: {
                  "Content-Type": "application/json"
                }
              }
            );
            if (response.status === 200) {
              navigate("/login-signup/customer", { state: { fromLogout: true } });
            } else {
              console.error("Logout failed:", response.statusText);
            }
          } catch (error) {
            console.error("Error during logout:", error);
          }
        };
        return /* @__PURE__ */ import_react8.default.createElement(
          "nav",
          {
            className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50" : "bg-white/80 backdrop-blur-md shadow-lg"}`
          },
          /* @__PURE__ */ import_react8.default.createElement("div", { className: "container mx-auto px-6 py-4 flex justify-between items-center" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "relative group" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300 animate-pulse" }), /* @__PURE__ */ import_react8.default.createElement("div", { className: "relative text-3xl font-extrabold tracking-wide" }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-glow" }, "MealSphere")), /* @__PURE__ */ import_react8.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping" }), /* @__PURE__ */ import_react8.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" })), /* @__PURE__ */ import_react8.default.createElement("div", { className: "hidden md:flex items-center space-x-6" }, /* @__PURE__ */ import_react8.default.createElement(NavButton2, { icon: House, href: "/" }, "Home"), /* @__PURE__ */ import_react8.default.createElement(NavButton2, { icon: User, href: "/user-dashboard" }, "Dashboard"), /* @__PURE__ */ import_react8.default.createElement(
            "button",
            {
              onClick: handleLogout,
              className: "group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            },
            /* @__PURE__ */ import_react8.default.createElement("span", { className: "relative z-10 flex items-center gap-2" }, /* @__PURE__ */ import_react8.default.createElement(LogOut, { size: 18, className: "group-hover:rotate-12 transition-transform duration-300" }), "Logout"),
            /* @__PURE__ */ import_react8.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
          )), /* @__PURE__ */ import_react8.default.createElement(
            "button",
            {
              className: "md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative",
              onClick: () => setIsMenuOpen(!isMenuOpen)
            },
            /* @__PURE__ */ import_react8.default.createElement(Menu, { size: 24, className: `transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}` }),
            isMenuOpen && /* @__PURE__ */ import_react8.default.createElement("div", { className: "absolute inset-0 bg-amber-500/20 rounded-full animate-ping" })
          )),
          /* @__PURE__ */ import_react8.default.createElement(
            "div",
            {
              className: `md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`
            },
            /* @__PURE__ */ import_react8.default.createElement("div", { className: "bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex flex-col p-6 space-y-4" }, /* @__PURE__ */ import_react8.default.createElement(MobileNavLink2, { icon: House, href: "#home", onClick: () => setIsMenuOpen(false) }, "Home"), /* @__PURE__ */ import_react8.default.createElement(MobileNavLink2, { icon: User, href: "/user-dashboard", onClick: () => setIsMenuOpen(false) }, "Dashboard"), /* @__PURE__ */ import_react8.default.createElement(
              "button",
              {
                onClick: () => {
                  handleLogout();
                  setIsMenuOpen(false);
                },
                className: "w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              },
              /* @__PURE__ */ import_react8.default.createElement(LogOut, { size: 18 }),
              "Logout"
            )))
          )
        );
      };
      NavButton2 = ({ icon: Icon2, href, children }) => /* @__PURE__ */ import_react8.default.createElement(
        "a",
        {
          href,
          className: "relative text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-amber-50"
        },
        /* @__PURE__ */ import_react8.default.createElement(Icon2, { size: 18, className: "group-hover:scale-110 transition-transform duration-300" }),
        children,
        /* @__PURE__ */ import_react8.default.createElement("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" })
      );
      MobileNavLink2 = ({ icon: Icon2, href, children, onClick }) => /* @__PURE__ */ import_react8.default.createElement(
        "a",
        {
          href,
          onClick,
          className: "text-gray-700 hover:text-amber-600 font-medium py-3 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3"
        },
        /* @__PURE__ */ import_react8.default.createElement(Icon2, { size: 18 }),
        children
      );
      UserDashboardNavbar_default = UserDashboardNavbar;
    }
  });

  // frontend/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "frontend/node_modules/lodash/isObject.js"(exports, module) {
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject2;
    }
  });

  // frontend/node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "frontend/node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // frontend/node_modules/lodash/_root.js
  var require_root = __commonJS({
    "frontend/node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // frontend/node_modules/lodash/now.js
  var require_now = __commonJS({
    "frontend/node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // frontend/node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "frontend/node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // frontend/node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "frontend/node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // frontend/node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "frontend/node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // frontend/node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "frontend/node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // frontend/node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "frontend/node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // frontend/node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "frontend/node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // frontend/node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "frontend/node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // frontend/node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "frontend/node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // frontend/node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "frontend/node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject2 = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // frontend/node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "frontend/node_modules/lodash/debounce.js"(exports, module) {
      var isObject2 = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce2;
    }
  });

  // frontend/node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default;
  var init_clsx = __esm({
    "frontend/node_modules/clsx/dist/clsx.mjs"() {
      clsx_default = clsx;
    }
  });

  // frontend/node_modules/react-toastify/dist/index.mjs
  function Mt(t) {
    if (!t || typeof document == "undefined") return;
    let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
  }
  function Z(t, o, e = 300) {
    let { scrollHeight: r2, style: s } = t;
    requestAnimationFrame(() => {
      s.minHeight = "initial", s.height = r2 + "px", s.transition = `all ${e}ms`, requestAnimationFrame(() => {
        s.height = "0", s.padding = "0", s.margin = "0", setTimeout(o, e);
      });
    });
  }
  function $({ enter: t, exit: o, appendPosition: e = false, collapse: r2 = true, collapseDuration: s = 300 }) {
    return function({ children: a, position: d, preventExitTransition: c, done: T, nodeRef: g, isIn: v, playToast: x }) {
      let C = e ? `${t}--${d}` : t, S = e ? `${o}--${d}` : o, E = (0, import_react10.useRef)(0);
      return (0, import_react10.useLayoutEffect)(() => {
        let f = g.current, p = C.split(" "), b = (n) => {
          n.target === g.current && (x(), f.removeEventListener("animationend", b), f.removeEventListener("animationcancel", b), E.current === 0 && n.type !== "animationcancel" && f.classList.remove(...p));
        };
        (() => {
          f.classList.add(...p), f.addEventListener("animationend", b), f.addEventListener("animationcancel", b);
        })();
      }, []), (0, import_react10.useEffect)(() => {
        let f = g.current, p = () => {
          f.removeEventListener("animationend", p), r2 ? Z(f, T, s) : T();
        };
        v || (c ? p() : (() => {
          E.current = 1, f.className += ` ${S}`, f.addEventListener("animationend", p);
        })());
      }, [v]), import_react10.default.createElement(import_react10.default.Fragment, null, a);
    };
  }
  function J(t, o) {
    return { content: tt(t.content, t.props), containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, reason: t.removalReason, status: o };
  }
  function tt(t, o, e = false) {
    return (0, import_react11.isValidElement)(t) && !N(t.type) ? (0, import_react11.cloneElement)(t, { closeToast: o.closeToast, toastProps: o, data: o.data, isPaused: e }) : P(t) ? t({ closeToast: o.closeToast, toastProps: o, data: o.data, isPaused: e }) : t;
  }
  function yt({ closeToast: t, theme: o, ariaLabel: e = "close" }) {
    return import_react12.default.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o}`, type: "button", onClick: (r2) => {
      r2.stopPropagation(), t(true);
    }, "aria-label": e }, import_react12.default.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, import_react12.default.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }
  function gt({ delay: t, isRunning: o, closeToast: e, type: r2 = "default", hide: s, className: l, controlledProgress: a, progress: d, rtl: c, isIn: T, theme: g }) {
    let v = s || a && d === 0, x = { animationDuration: `${t}ms`, animationPlayState: o ? "running" : "paused" };
    a && (x.transform = `scaleX(${d})`);
    let C = clsx_default("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${r2}`, { ["Toastify__progress-bar--rtl"]: c }), S = P(l) ? l({ rtl: c, type: r2, defaultClassName: C }) : clsx_default(C, l), E = { [a && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d < 1 ? null : () => {
      T && e();
    } };
    return import_react13.default.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": v }, import_react13.default.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r2}` }), import_react13.default.createElement("div", { role: "progressbar", "aria-hidden": v ? "true" : "false", "aria-label": "notification timer", className: S, style: x, ...E }));
  }
  function _t(t, o, e) {
    let r2 = 1, s = 0, l = [], a = [], d = o, c = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), g = (i) => (T.add(i), () => T.delete(i)), v = () => {
      a = Array.from(c.values()), T.forEach((i) => i());
    }, x = ({ containerId: i, toastId: n, updateId: u }) => {
      let h = i ? i !== t : t !== 1, m = c.has(n) && u == null;
      return h || m;
    }, C = (i, n) => {
      c.forEach((u) => {
        var h;
        (n == null || n === u.props.toastId) && ((h = u.toggle) == null || h.call(u, i));
      });
    }, S = (i) => {
      var n, u;
      (u = (n = i.props) == null ? void 0 : n.onClose) == null || u.call(n, i.removalReason), i.isActive = false;
    }, E = (i) => {
      if (i == null) c.forEach(S);
      else {
        let n = c.get(i);
        n && S(n);
      }
      v();
    }, f = () => {
      s -= l.length, l = [];
    }, p = (i) => {
      var m, _;
      let { toastId: n, updateId: u } = i.props, h = u == null;
      i.staleId && c.delete(i.staleId), i.isActive = true, c.set(n, i), v(), e(J(i, h ? "added" : "updated")), h && ((_ = (m = i.props).onOpen) == null || _.call(m));
    };
    return { id: t, props: d, observe: g, toggle: C, removeToast: E, toasts: c, clearQueue: f, buildToast: (i, n) => {
      if (x(n)) return;
      let { toastId: u, updateId: h, data: m, staleId: _, delay: k } = n, M = h == null;
      M && s++;
      let A = { ...d, style: d.toastStyle, key: r2++, ...Object.fromEntries(Object.entries(n).filter(([D, Y]) => Y != null)), toastId: u, updateId: h, data: m, isIn: false, className: B(n.className || d.toastClassName), progressClassName: B(n.progressClassName || d.progressClassName), autoClose: n.isLoading ? false : pt(n.autoClose, d.autoClose), closeToast(D) {
        c.get(u).removalReason = D, E(u);
      }, deleteToast() {
        let D = c.get(u);
        if (D != null) {
          if (e(J(D, "removed")), c.delete(u), s--, s < 0 && (s = 0), l.length > 0) {
            p(l.shift());
            return;
          }
          v();
        }
      } };
      A.closeButton = d.closeButton, n.closeButton === false || z(n.closeButton) ? A.closeButton = n.closeButton : n.closeButton === true && (A.closeButton = z(d.closeButton) ? d.closeButton : true);
      let R = { content: i, props: A, staleId: _ };
      d.limit && d.limit > 0 && s > d.limit && M ? l.push(R) : L2(k) ? setTimeout(() => {
        p(R);
      }, k) : p(R);
    }, setProps(i) {
      d = i;
    }, setToggle: (i, n) => {
      let u = c.get(i);
      u && (u.toggle = n);
    }, isToastActive: (i) => {
      var n;
      return (n = c.get(i)) == null ? void 0 : n.isActive;
    }, getSnapshot: () => a };
  }
  function Qt() {
    F.forEach((t) => nt(t.content, t.options)), F = [];
  }
  function X2(t, o) {
    var r2;
    if (o) return !!((r2 = I.get(o)) != null && r2.isToastActive(t));
    let e = false;
    return I.forEach((s) => {
      s.isToastActive(t) && (e = true);
    }), e;
  }
  function ht(t) {
    if (!bt()) {
      F = F.filter((o) => t != null && o.options.toastId !== t);
      return;
    }
    if (t == null || mt(t)) I.forEach((o) => {
      o.removeToast(t);
    });
    else if (t && ("containerId" in t || "id" in t)) {
      let o = I.get(t.containerId);
      o ? o.removeToast(t.id) : I.forEach((e) => {
        e.removeToast(t.id);
      });
    }
  }
  function nt(t, o) {
    z(t) && (bt() || F.push({ content: t, options: o }), I.forEach((e) => {
      e.buildToast(t, o);
    }));
  }
  function xt(t) {
    var o;
    (o = I.get(t.containerId || 1)) == null || o.setToggle(t.id, t.fn);
  }
  function rt(t, o) {
    I.forEach((e) => {
      (o == null || !(o != null && o.containerId) || (o == null ? void 0 : o.containerId) === e.id) && e.toggle(t, o == null ? void 0 : o.id);
    });
  }
  function Et(t) {
    let o = t.containerId || 1;
    return { subscribe(e) {
      let r2 = _t(o, t, Vt);
      I.set(o, r2);
      let s = r2.observe(e);
      return Qt(), () => {
        s(), I.delete(o);
      };
    }, setProps(e) {
      var r2;
      (r2 = I.get(o)) == null || r2.setProps(e);
    }, getSnapshot() {
      var e;
      return (e = I.get(o)) == null ? void 0 : e.getSnapshot();
    } };
  }
  function Pt(t) {
    return st.add(t), () => {
      st.delete(t);
    };
  }
  function Wt(t) {
    return t && (N(t.toastId) || L2(t.toastId)) ? t.toastId : at();
  }
  function U(t, o) {
    return nt(t, o), o.toastId;
  }
  function V(t, o) {
    return { ...o, type: o && o.type || t, toastId: Wt(o) };
  }
  function Q(t) {
    return (o, e) => U(o, V(t, e));
  }
  function y(t, o) {
    return U(t, V("default", o));
  }
  function Gt(t, { pending: o, error: e, success: r2 }, s) {
    let l;
    o && (l = N(o) ? y.loading(o, s) : y.loading(o.render, { ...s, ...o }));
    let a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, d = (T, g, v) => {
      if (g == null) {
        y.dismiss(l);
        return;
      }
      let x = { type: T, ...a, ...s, data: v }, C = N(g) ? { render: g } : g;
      return l ? y.update(l, { ...x, ...C }) : y(C.render, { ...x, ...C }), v;
    }, c = P(t) ? t() : t;
    return c.then((T) => d("success", r2, T)).catch((T) => d("error", e, T)), c;
  }
  function qt(t) {
    ht(t);
  }
  function It(t) {
    var a;
    let { subscribe: o, getSnapshot: e, setProps: r2 } = (0, import_react15.useRef)(Et(t)).current;
    r2(t);
    let s = (a = (0, import_react15.useSyncExternalStore)(o, e, e)) == null ? void 0 : a.slice();
    function l(d) {
      if (!s) return [];
      let c = /* @__PURE__ */ new Map();
      return t.newestOnTop && s.reverse(), s.forEach((T) => {
        let { position: g } = T.props;
        c.has(g) || c.set(g, []), c.get(g).push(T);
      }), Array.from(c, (T) => d(T[0], T[1]));
    }
    return { getToastToRender: l, isToastActive: X2, count: s == null ? void 0 : s.length };
  }
  function At(t) {
    let [o, e] = (0, import_react16.useState)(false), [r2, s] = (0, import_react16.useState)(false), l = (0, import_react16.useRef)(null), a = (0, import_react16.useRef)({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, didMove: false }).current, { autoClose: d, pauseOnHover: c, closeToast: T, onClick: g, closeOnClick: v } = t;
    xt({ id: t.toastId, containerId: t.containerId, fn: e }), (0, import_react16.useEffect)(() => {
      if (t.pauseOnFocusLoss) return x(), () => {
        C();
      };
    }, [t.pauseOnFocusLoss]);
    function x() {
      document.hasFocus() || p(), window.addEventListener("focus", f), window.addEventListener("blur", p);
    }
    function C() {
      window.removeEventListener("focus", f), window.removeEventListener("blur", p);
    }
    function S(m) {
      if (t.draggable === true || t.draggable === m.pointerType) {
        b();
        let _ = l.current;
        a.canCloseOnClick = true, a.canDrag = true, _.style.transition = "none", t.draggableDirection === "x" ? (a.start = m.clientX, a.removalDistance = _.offsetWidth * (t.draggablePercent / 100)) : (a.start = m.clientY, a.removalDistance = _.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100);
      }
    }
    function E(m) {
      let { top: _, bottom: k, left: M, right: A } = l.current.getBoundingClientRect();
      m.nativeEvent.type !== "touchend" && t.pauseOnHover && m.clientX >= M && m.clientX <= A && m.clientY >= _ && m.clientY <= k ? p() : f();
    }
    function f() {
      e(true);
    }
    function p() {
      e(false);
    }
    function b() {
      a.didMove = false, document.addEventListener("pointermove", n), document.addEventListener("pointerup", u);
    }
    function i() {
      document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", u);
    }
    function n(m) {
      let _ = l.current;
      if (a.canDrag && _) {
        a.didMove = true, o && p(), t.draggableDirection === "x" ? a.delta = m.clientX - a.start : a.delta = m.clientY - a.start, a.start !== m.clientX && (a.canCloseOnClick = false);
        let k = t.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
        _.style.transform = `translate3d(${k},0)`, _.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`;
      }
    }
    function u() {
      i();
      let m = l.current;
      if (a.canDrag && a.didMove && m) {
        if (a.canDrag = false, Math.abs(a.delta) > a.removalDistance) {
          s(true), t.closeToast(true), t.collapseAll();
          return;
        }
        m.style.transition = "transform 0.2s, opacity 0.2s", m.style.removeProperty("transform"), m.style.removeProperty("opacity");
      }
    }
    let h = { onPointerDown: S, onPointerUp: E };
    return d && c && (h.onMouseEnter = p, t.stacked || (h.onMouseLeave = f)), v && (h.onClick = (m) => {
      g && g(m), a.canCloseOnClick && T(true);
    }), { playToast: f, pauseToast: p, isRunning: o, preventExitTransition: r2, toastRef: l, eventHandlers: h };
  }
  function ao(t) {
    return import_react19.default.createElement(G, { ...t }, import_react19.default.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
  }
  function so(t) {
    return import_react19.default.createElement(G, { ...t }, import_react19.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
  }
  function no(t) {
    return import_react19.default.createElement(G, { ...t }, import_react19.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
  }
  function ro(t) {
    return import_react19.default.createElement(G, { ...t }, import_react19.default.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
  }
  function io() {
    return import_react19.default.createElement("div", { className: "Toastify__spinner" });
  }
  function Nt({ theme: t, type: o, isLoading: e, icon: r2 }) {
    let s = null, l = { theme: t, type: o };
    return r2 === false || (P(r2) ? s = r2({ ...l, isLoading: e }) : (0, import_react19.isValidElement)(r2) ? s = (0, import_react19.cloneElement)(r2, l) : e ? s = W.spinner() : lo(o) && (s = W[o](l))), s;
  }
  function Lt(t) {
    let o = { ..._o, ...t }, e = t.stacked, [r2, s] = (0, import_react14.useState)(true), l = (0, import_react14.useRef)(null), { getToastToRender: a, isToastActive: d, count: c } = It(o), { className: T, style: g, rtl: v, containerId: x, hotKeys: C } = o;
    function S(f) {
      let p = clsx_default("Toastify__toast-container", `Toastify__toast-container--${f}`, { ["Toastify__toast-container--rtl"]: v });
      return P(T) ? T({ position: f, rtl: v, defaultClassName: p }) : clsx_default(p, B(T));
    }
    function E() {
      e && (s(true), y.play());
    }
    return Ot(() => {
      var f;
      if (e) {
        let p = l.current.querySelectorAll('[data-in="true"]'), b = 12, i = (f = o.position) == null ? void 0 : f.includes("top"), n = 0, u = 0;
        Array.from(p).reverse().forEach((h, m) => {
          let _ = h;
          _.classList.add("Toastify__toast--stacked"), m > 0 && (_.dataset.collapsed = `${r2}`), _.dataset.pos || (_.dataset.pos = i ? "top" : "bot");
          let k = n * (r2 ? 0.2 : 1) + (r2 ? 0 : b * m);
          _.style.setProperty("--y", `${i ? k : k * -1}px`), _.style.setProperty("--g", `${b}`), _.style.setProperty("--s", `${1 - (r2 ? u : 0)}`), n += _.offsetHeight, u += 0.025;
        });
      }
    }, [r2, c, e]), (0, import_react14.useEffect)(() => {
      function f(p) {
        var i;
        let b = l.current;
        C(p) && ((i = b.querySelector('[tabIndex="0"]')) == null || i.focus(), s(false), y.pause()), p.key === "Escape" && (document.activeElement === b || b != null && b.contains(document.activeElement)) && (s(true), y.play());
      }
      return document.addEventListener("keydown", f), () => {
        document.removeEventListener("keydown", f);
      };
    }, [C]), import_react14.default.createElement("section", { ref: l, className: "Toastify", id: x, onMouseEnter: () => {
      e && (s(false), y.pause());
    }, onMouseLeave: E, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": o["aria-label"] }, a((f, p) => {
      let b = p.length ? { ...g } : { ...g, pointerEvents: "none" };
      return import_react14.default.createElement("div", { tabIndex: -1, className: S(f), "data-stacked": e, style: b, key: `c-${f}` }, p.map(({ content: i, props: n }) => import_react14.default.createElement(wt, { ...n, stacked: e, collapseAll: E, isIn: d(n.toastId, n.containerId), key: `t-${n.key}` }, i)));
    }));
  }
  var import_react9, import_react10, import_react11, import_react12, import_react13, import_react14, import_react15, import_react16, import_react17, import_react18, import_react19, L2, N, P, mt, B, pt, z, Xt, at, I, F, st, Vt, bt, vt, Ct, Ot, G, W, lo, wt, K, lt, mo, po, uo, _o;
  var init_dist = __esm({
    "frontend/node_modules/react-toastify/dist/index.mjs"() {
      "use client";
      import_react9 = __require("react");
      import_react10 = __toESM(__require("react"), 1);
      import_react11 = __require("react");
      import_react12 = __toESM(__require("react"), 1);
      import_react13 = __toESM(__require("react"), 1);
      init_clsx();
      init_clsx();
      import_react14 = __toESM(__require("react"), 1);
      import_react15 = __require("react");
      import_react16 = __require("react");
      import_react17 = __require("react");
      init_clsx();
      import_react18 = __toESM(__require("react"), 1);
      import_react19 = __toESM(__require("react"), 1);
      Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
      L2 = (t) => typeof t == "number" && !isNaN(t);
      N = (t) => typeof t == "string";
      P = (t) => typeof t == "function";
      mt = (t) => N(t) || L2(t);
      B = (t) => N(t) || P(t) ? t : null;
      pt = (t, o) => t === false || L2(t) && t > 0 ? t : o;
      z = (t) => (0, import_react9.isValidElement)(t) || N(t) || P(t) || L2(t);
      Xt = 1;
      at = () => `${Xt++}`;
      I = /* @__PURE__ */ new Map();
      F = [];
      st = /* @__PURE__ */ new Set();
      Vt = (t) => st.forEach((o) => o(t));
      bt = () => I.size > 0;
      vt = (t, { containerId: o }) => {
        var e;
        return (e = I.get(o || 1)) == null ? void 0 : e.toasts.get(t);
      };
      Ct = (t = {}) => {
        I.forEach((o) => {
          o.props.limit && (!t.containerId || o.id === t.containerId) && o.clearQueue();
        });
      };
      y.loading = (t, o) => U(t, V("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...o }));
      y.promise = Gt;
      y.success = Q("success");
      y.info = Q("info");
      y.error = Q("error");
      y.warning = Q("warning");
      y.warn = y.warning;
      y.dark = (t, o) => U(t, V("default", { theme: "dark", ...o }));
      y.dismiss = qt;
      y.clearWaitingQueue = Ct;
      y.isActive = X2;
      y.update = (t, o = {}) => {
        let e = vt(t, o);
        if (e) {
          let { props: r2, content: s } = e, l = { delay: 100, ...r2, ...o, toastId: o.toastId || t, updateId: at() };
          l.toastId !== t && (l.staleId = t);
          let a = l.render || s;
          delete l.render, U(a, l);
        }
      };
      y.done = (t) => {
        y.update(t, { progress: 1 });
      };
      y.onChange = Pt;
      y.play = (t) => rt(true, t);
      y.pause = (t) => rt(false, t);
      Ot = typeof window != "undefined" ? import_react17.useLayoutEffect : import_react17.useEffect;
      G = ({ theme: t, type: o, isLoading: e, ...r2 }) => import_react19.default.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${o})`, ...r2 });
      W = { info: so, warning: ao, success: no, error: ro, spinner: io };
      lo = (t) => t in W;
      wt = (t) => {
        let { isRunning: o, preventExitTransition: e, toastRef: r2, eventHandlers: s, playToast: l } = At(t), { closeButton: a, children: d, autoClose: c, onClick: T, type: g, hideProgressBar: v, closeToast: x, transition: C, position: S, className: E, style: f, progressClassName: p, updateId: b, role: i, progress: n, rtl: u, toastId: h, deleteToast: m, isIn: _, isLoading: k, closeOnClick: M, theme: A, ariaLabel: R } = t, D = clsx_default("Toastify__toast", `Toastify__toast-theme--${A}`, `Toastify__toast--${g}`, { ["Toastify__toast--rtl"]: u }, { ["Toastify__toast--close-on-click"]: M }), Y = P(E) ? E({ rtl: u, position: S, type: g, defaultClassName: D }) : clsx_default(D, E), ft = Nt(t), dt = !!n || !c, j = { closeToast: x, type: g, theme: A }, H = null;
        return a === false || (P(a) ? H = a(j) : (0, import_react18.isValidElement)(a) ? H = (0, import_react18.cloneElement)(a, j) : H = yt(j)), import_react18.default.createElement(C, { isIn: _, done: m, position: S, preventExitTransition: e, nodeRef: r2, playToast: l }, import_react18.default.createElement("div", { id: h, tabIndex: 0, onClick: T, "data-in": _, className: Y, ...s, style: f, ref: r2, ..._ && { role: i, "aria-label": R } }, ft != null && import_react18.default.createElement("div", { className: clsx_default("Toastify__toast-icon", { ["Toastify--animate-icon Toastify__zoom-enter"]: !k }) }, ft), tt(d, t, !o), H, !t.customProgressBar && import_react18.default.createElement(gt, { ...b && !dt ? { key: `p-${b}` } : {}, rtl: u, theme: A, delay: c, isRunning: o, isIn: _, closeToast: x, hide: v, type: g, className: p, controlledProgress: dt, progress: n || 0 })));
      };
      K = (t, o = false) => ({ enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: o });
      lt = $(K("bounce", true));
      mo = $(K("slide", true));
      po = $(K("zoom"));
      uo = $(K("flip"));
      _o = { position: "top-right", transition: lt, autoClose: 5e3, closeButton: true, pauseOnHover: true, pauseOnFocusLoss: true, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (t) => t.altKey && t.code === "KeyT" };
    }
  });

  // frontend/node_modules/react-toastify/dist/ReactToastify.css
  var init_ReactToastify = __esm({
    "frontend/node_modules/react-toastify/dist/ReactToastify.css"() {
    }
  });

  // frontend/src/components/MessCard.jsx
  var import_react20, import_meta4, MessCard, MessCard_default;
  var init_MessCard = __esm({
    "frontend/src/components/MessCard.jsx"() {
      init_lucide_react();
      import_react20 = __require("react");
      import_meta4 = {};
      MessCard = ({ mess, onMonthlyBooking, onDailyReservation, isReservationAllowed, reservedMesses }) => {
        const { name, menu, address, _id, image } = mess;
        const [isHovered, setIsHovered] = (0, import_react20.useState)(false);
        const dayDishes = menu?.dayMeal?.dishes || [];
        const nightDishes = menu?.nightMeal?.dishes || [];
        const hasDayMenu = dayDishes.length > 0;
        const hasNightMenu = nightDishes.length > 0;
        const hasSpots = true;
        const reservedForDay = reservedMesses.some(
          (res) => res.messId === _id && res.mealType === "day"
        );
        const reservedForNight = reservedMesses.some(
          (res) => res.messId === _id && res.mealType === "night"
        );
        const baseURL = import_meta4.env.VITE_BASE_URL || "http://localhost:3000";
        const imageURL = image?.startsWith("/uploads") ? `${baseURL}${image}` : image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png";
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `card group relative overflow-hidden transition-all duration-500 ${isHovered ? "scale-105 shadow-2xl" : ""}`,
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false)
          },
          /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ React.createElement("div", { className: "relative overflow-hidden rounded-t-xl" }, /* @__PURE__ */ React.createElement(
            "img",
            {
              src: imageURL,
              alt: name,
              className: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            }
          ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 animate-fadeIn" }, /* @__PURE__ */ React.createElement(Star, { className: "w-4 h-4 text-yellow-500 fill-current" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold" }, "4.5"))),
          /* @__PURE__ */ React.createElement("div", { className: "p-6 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300" }, name), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 text-sm" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-4 h-4 mr-1" }), /* @__PURE__ */ React.createElement("span", { className: "truncate" }, address || "No address available"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-yellow-800" }, "Lunch")), dayDishes.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, dayDishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), dayDishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", dayDishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No lunch available")), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-blue-800" }, "Dinner")), nightDishes.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, nightDishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), nightDishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", nightDishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No dinner available"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: () => onMonthlyBooking(name),
              className: `w-full btn-primary flex items-center justify-center gap-2 ${!hasSpots ? "opacity-50 cursor-not-allowed" : ""}`,
              disabled: !hasSpots
            },
            /* @__PURE__ */ React.createElement(Calendar, { className: "w-4 h-4" }),
            "Enroll Monthly"
          ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, reservedForDay ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Lunch Reserved \u2713") : !hasDayMenu ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700 font-medium" }, "Menu not available yet") : /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: () => onDailyReservation(mess._id, "day"),
              className: `btn-success text-sm flex items-center justify-center gap-1 ${!hasSpots || !isReservationAllowed.day || !hasDayMenu ? "opacity-50 cursor-not-allowed" : ""}`,
              disabled: !hasSpots || !isReservationAllowed.day || !hasDayMenu
            },
            /* @__PURE__ */ React.createElement(Utensils, { className: "w-3 h-3" }),
            "Reserve Lunch"
          ), reservedForNight ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Dinner Reserved \u2713") : !hasNightMenu ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700 font-medium" }, "Menu not available yet") : /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: () => onDailyReservation(mess._id, "night"),
              className: `bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm flex items-center justify-center gap-1 ${!hasSpots || !isReservationAllowed.night || !hasNightMenu ? "opacity-50 cursor-not-allowed" : ""}`,
              disabled: !hasSpots || !isReservationAllowed.night || !hasNightMenu
            },
            /* @__PURE__ */ React.createElement(Utensils, { className: "w-3 h-3" }),
            "Reserve Dinner"
          ))))
        );
      };
      MessCard_default = MessCard;
    }
  });

  // frontend/src/pages/UserDashboard.jsx
  var UserDashboard_exports = {};
  __export(UserDashboard_exports, {
    default: () => UserDashboard_default
  });
  function UserDashboard() {
    const [searchQuery, setSearchQuery] = (0, import_react21.useState)("");
    const [sortOption, setSortOption] = (0, import_react21.useState)("Price ascending");
    const [messData, setMessData] = (0, import_react21.useState)([]);
    const [reservedMesses, setReservedMesses] = (0, import_react21.useState)([]);
    const [enrolledMess, setEnrolledMess] = (0, import_react21.useState)(null);
    const [loading, setLoading] = (0, import_react21.useState)(true);
    const [error, setError] = (0, import_react21.useState)("");
    const [enrollmentError, setEnrollmentError] = (0, import_react21.useState)("");
    const [location, setLocation] = (0, import_react21.useState)({ lat: null, lng: null });
    const [isReservationAllowed, setIsReservationAllowed] = (0, import_react21.useState)({
      day: true,
      night: true
    });
    const [showAllMesses, setShowAllMesses] = (0, import_react21.useState)(false);
    const [ledgerDays, setLedgerDays] = (0, import_react21.useState)(30);
    const [mealLedger, setMealLedger] = (0, import_react21.useState)([]);
    const [ledgerSummary, setLedgerSummary] = (0, import_react21.useState)({
      totalMeals: 0,
      totalSpend: 0,
      averageMealCost: 0
    });
    const [monthlyInsights, setMonthlyInsights] = (0, import_react21.useState)({
      month: "",
      mostEatenDish: null,
      averageMealCost: 0
    });
    const [ledgerLoading, setLedgerLoading] = (0, import_react21.useState)(false);
    const debouncedSetSearchQuery = (0, import_react21.useMemo)(
      () => (0, import_debounce.default)((value) => setSearchQuery(value), 300),
      []
    );
    (0, import_react21.useEffect)(() => {
      return () => debouncedSetSearchQuery.cancel();
    }, [debouncedSetSearchQuery]);
    const checkReservationTime = () => {
      setIsReservationAllowed({
        day: isBookingOpenForMeal("day"),
        night: isBookingOpenForMeal("night")
      });
    };
    const fetchMesses = async (lat = null, lng = null, fetchAll = false) => {
      try {
        setLoading(true);
        setError("");
        let response;
        if (fetchAll || !lat || !lng) {
          console.log("Fetching all messes");
          response = await axios_default.get(`${import_meta5.env.VITE_BASE_URL}/mess/get-all-mess`, {
            withCredentials: true
          });
        } else {
          console.log(`Fetching nearby messes for lat: ${lat}, lng: ${lng}`);
          response = await axios_default.get(
            `${import_meta5.env.VITE_BASE_URL}/mess/get-mess-by-latlong?lat=${lat}&lng=${lng}`,
            { withCredentials: true }
          );
        }
        console.log("API response:", response.data);
        setMessData(response.data.messes || []);
      } catch (err) {
        console.error("Fetch messes error:", err);
        setError(err.response?.data?.message || "Failed to fetch messes.");
      } finally {
        setLoading(false);
      }
    };
    const fetchReservations = async () => {
      try {
        const response = await axios_default.get(
          `${import_meta5.env.VITE_BASE_URL}/user/reservations/today`,
          { withCredentials: true }
        );
        console.log("Today's reservations:", response.data);
        setReservedMesses(response.data.reservations || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch reservations.");
      }
    };
    const fetchEnrolledMess = async () => {
      try {
        const response = await axios_default.get(
          `${import_meta5.env.VITE_BASE_URL}/mess/get-enrolled-mess`,
          { withCredentials: true }
        );
        setEnrolledMess(response.data.userMess);
      } catch (err) {
        setEnrollmentError(err.response?.data?.message || "Failed to fetch enrolled mess.");
        if (err.response?.data?.message === "Request Not accepted yet" && err.response?.data?.userMess) {
          setEnrolledMess(err.response.data.userMess);
        }
      }
    };
    const fetchMealLedger = async (days = ledgerDays) => {
      try {
        setLedgerLoading(true);
        const response = await axios_default.get(
          `${import_meta5.env.VITE_BASE_URL}/user/meal-ledger?days=${days}`,
          { withCredentials: true }
        );
        setMealLedger(response.data.entries || []);
        setLedgerSummary(response.data.summary || { totalMeals: 0, totalSpend: 0, averageMealCost: 0 });
        setMonthlyInsights(
          response.data.monthlyInsights || { month: "", mostEatenDish: null, averageMealCost: 0 }
        );
      } catch (err) {
        console.error("Failed to fetch meal ledger:", err);
      } finally {
        setLedgerLoading(false);
      }
    };
    (0, import_react21.useEffect)(() => {
      checkReservationTime();
      const interval = setInterval(checkReservationTime, 6e4);
      setLoading(true);
      if (navigator.geolocation) {
        console.log("Requesting geolocation...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Geolocation success: lat=${latitude}, lng=${longitude}`);
            setLocation({ lat: latitude, lng: longitude });
            setShowAllMesses(false);
            fetchMesses(latitude, longitude, false);
            fetchReservations();
            fetchEnrolledMess();
            fetchMealLedger(ledgerDays);
          },
          (err) => {
            console.error("Geolocation error:", err);
            setError("Unable to get your location. Showing all messes instead.");
            setShowAllMesses(true);
            fetchMesses(null, null, true);
            fetchReservations();
            fetchEnrolledMess();
            fetchMealLedger(ledgerDays);
          },
          { timeout: 1e4 }
        );
      } else {
        console.error("Geolocation not supported");
        setError("Geolocation is not supported. Showing all messes instead.");
        setShowAllMesses(true);
        fetchMesses(null, null, true);
        fetchReservations();
        fetchEnrolledMess();
        fetchMealLedger(ledgerDays);
      }
      return () => clearInterval(interval);
    }, []);
    (0, import_react21.useEffect)(() => {
      fetchMealLedger(ledgerDays);
    }, [ledgerDays]);
    const handleToggleMessView = () => {
      setShowAllMesses((prev) => {
        const newShowAllMesses = !prev;
        console.log(`Toggling to ${newShowAllMesses ? "all messes" : "nearby messes"}`);
        if (newShowAllMesses) {
          fetchMesses(null, null, true);
        } else {
          console.log("Checking location for nearby messes...");
          if (location.lat && location.lng) {
            console.log(`Using current location: lat=${location.lat}, lng=${location.lng}`);
            fetchMesses(location.lat, location.lng, false);
          } else {
            console.log("Retrying geolocation for nearby messes...");
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                console.log(`Geolocation retry success: lat=${latitude}, lng=${longitude}`);
                setLocation({ lat: latitude, lng: longitude });
                fetchMesses(latitude, longitude, false);
              },
              (err) => {
                console.error("Geolocation retry error:", err);
                setError("Unable to get your location. Showing all messes instead.");
                setShowAllMesses(true);
                fetchMesses(null, null, true);
              },
              { timeout: 5e3 }
            );
          }
        }
        return newShowAllMesses;
      });
    };
    const handleCancelReservation = async (reservationId, messName, mealType) => {
      const now = /* @__PURE__ */ new Date();
      if (window.confirm(`Are you sure you want to cancel your ${mealType === "day" ? "lunch" : "dinner"} reservation at ${messName}?`)) {
        try {
          await axios_default.delete(
            `${import_meta5.env.VITE_BASE_URL}/user/reservations/cancel/${reservationId}`,
            { withCredentials: true }
          );
          y.success(`Reservation at ${messName} cancelled successfully!`);
          fetchReservations();
          fetchMealLedger(ledgerDays);
        } catch (err) {
          y.error(err.response?.data?.message || "Failed to cancel reservation.");
        }
      }
    };
    const handleMonthlyBooking = async (messName) => {
      const selectedMess = messData.find((mess) => mess.name === messName);
      try {
        const response = await axios_default.post(
          `${import_meta5.env.VITE_BASE_URL}/mess/${selectedMess._id}/join`,
          {},
          { withCredentials: true }
        );
        if (response.status === 200) {
          y.info(
            `To join ${messName}, please visit the mess owner at their location (${response.data.enrollment.messId.address}) and pay monthly charge.`
          );
          fetchEnrolledMess();
        }
      } catch (err) {
        if (err.response?.status === 400) {
          y.warn("Already registered for a mess!");
        } else if (err.response?.status === 500) {
          y.info("Enrolled! Please wait for the mess owner to accept your request.");
          fetchEnrolledMess();
        } else {
          y.error("Server error");
        }
      }
    };
    const handleDailyReservation = async (messId, mealType) => {
      const selectedMess = messData.find((mess) => mess._id === messId);
      if (!isBookingOpenForMeal(mealType)) {
        y.error(getBookingClosedMessage(mealType));
        return;
      }
      if (window.confirm(
        `Are you sure you want to reserve a ${mealType === "day" ? "lunch" : "dinner"} meal for today at ${selectedMess.name}? You can pay when you go to eat.`
      )) {
        try {
          const response = await axios_default.post(
            `${import_meta5.env.VITE_BASE_URL}/user/reserve`,
            { messId, mealType },
            { withCredentials: true }
          );
          y.success(response.data.message || `Reservation confirmed for ${mealType === "day" ? "lunch" : "dinner"} at ${selectedMess.name}! Please visit ${selectedMess.name} to eat and pay.`);
          fetchReservations();
          fetchMealLedger(ledgerDays);
        } catch (err) {
          y.error(err.response?.data?.message || `Failed to reserve ${mealType === "day" ? "lunch" : "dinner"} meal.`);
        }
      }
    };
    const handleEnrolledMessReservation = async (messId, mealType) => {
      console.log(`Handling reservation for enrolled mess: ${messId}, mealType: ${mealType}`);
      const messName = enrolledMess.messId?.name || "Unknown Mess";
      if (!isBookingOpenForMeal(mealType)) {
        y.error(getBookingClosedMessage(mealType));
        return;
      }
      if (window.confirm(
        `Are you sure you want to attend ${mealType === "day" ? "lunch" : "dinner"} at ${messName} today? You can pay when you go to eat.`
      )) {
        try {
          const endpoint = `${import_meta5.env.VITE_BASE_URL}/mess/attend/${messId}/${mealType}`;
          const response = await axios_default.post(endpoint, {}, { withCredentials: true });
          y.success(response.data.message || `Attendance confirmed for ${mealType === "day" ? "lunch" : "dinner"} at ${messName}! Please visit ${messName} to eat and pay.`);
          fetchReservations();
          fetchMealLedger(ledgerDays);
        } catch (err) {
          y.error(err.response?.data?.message || `Failed to reserve ${mealType === "day" ? "lunch" : "dinner"} meal.`);
        }
      }
    };
    const sortedMessOptions = (0, import_react21.useMemo)(() => {
      return [...messData].sort((a, b) => {
        const priceA = parseInt(a.price?.replace(/[^0-9]/g, "") || 0);
        const priceB = parseInt(b.price?.replace(/[^0-9]/g, "") || 0);
        return sortOption === "Price ascending" ? priceA - priceB : priceB - priceA;
      });
    }, [messData, sortOption]);
    const filteredMessOptions = (0, import_react21.useMemo)(() => {
      const normalizedQuery = searchQuery.trim().toLowerCase();
      if (!normalizedQuery) {
        return sortedMessOptions.filter((mess) => mess._id !== enrolledMess?.messId?._id);
      }
      const matchesSearchQuery = (mess) => {
        const messName = (mess.name || "").toLowerCase();
        const dayDishNames = mess?.menu?.dayMeal?.dishes || [];
        const nightDishNames = mess?.menu?.nightMeal?.dishes || [];
        const dishText = [...dayDishNames, ...nightDishNames].map((dish) => [dish?.name, ...dish?.items || []].filter(Boolean).join(" ")).join(" ").toLowerCase();
        return messName.includes(normalizedQuery) || dishText.includes(normalizedQuery);
      };
      return sortedMessOptions.filter(
        (mess) => mess._id !== enrolledMess?.messId?._id && matchesSearchQuery(mess)
      );
    }, [sortedMessOptions, searchQuery, enrolledMess]);
    const hasDayReservation = reservedMesses.some((res) => res.mealType === "day");
    const hasNightReservation = reservedMesses.some((res) => res.mealType === "night");
    const enrolledMessDayReservation = reservedMesses.some(
      (res) => res.messId === enrolledMess?.messId?._id && res.mealType === "day"
    );
    const enrolledMessNightReservation = reservedMesses.some(
      (res) => res.messId === enrolledMess?.messId?._id && res.mealType === "night"
    );
    const formatCurrency = (value) => `\u20B9${Number(value || 0).toFixed(2)}`;
    const formatMealType = (mealType) => mealType === "day" ? "Lunch" : "Dinner";
    const getStatusClasses = (status, type) => {
      if (type === "reservation") {
        return status === "cancelled" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700";
      }
      if (status === "attended") return "bg-green-100 text-green-700";
      if (status === "cancelled") return "bg-red-100 text-red-700";
      return "bg-slate-100 text-slate-700";
    };
    const getAttendanceLabel = (entry) => {
      if (entry.attendanceStatus === "not_marked" || entry.attendanceStatus === "not_applicable") {
        return "Not marked";
      }
      return entry.attendanceStatus;
    };
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col" }, /* @__PURE__ */ React.createElement(UserDashboardNavbar_default, null), /* @__PURE__ */ React.createElement(Lt, { position: "top-right", autoClose: 3e3, hideProgressBar: false, newestOnTop: true, closeOnClick: true, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true }), /* @__PURE__ */ React.createElement("div", { className: "flex flex-1 flex-col mt-20 p-4 sm:p-6" }, /* @__PURE__ */ React.createElement("div", { className: "mb-4 sm:mb-6 animate-slideIn" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-xl p-4 flex items-center gap-3" }, /* @__PURE__ */ React.createElement(Clock, { className: "w-5 h-5 text-amber-600" }), /* @__PURE__ */ React.createElement("div", { className: "text-amber-800 text-sm sm:text-base" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, "Reservation Times:"), /* @__PURE__ */ React.createElement("span", { className: "ml-2 block sm:inline" }, "Lunch before 11 AM \u2022 Dinner before 7 PM")))), /* @__PURE__ */ React.createElement("div", { className: "mb-6 sm:mb-8 animate-fadeIn" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl sm:text-3xl font-bold text-gradient mb-4 sm:mb-6 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Star, { className: "w-8 h-8 text-yellow-500" }), "Your Enrolled Mess"), loading ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading enrolled mess...")) : enrollmentError === "Request Not accepted yet" && enrolledMess ? /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold" }, /* @__PURE__ */ React.createElement(Hourglass, { className: "w-8 h-8" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-800 mb-1" }, enrolledMess.messId?.name || "Pending Mess"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 mb-2 flex items-center gap-1" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-4 h-4" }), enrolledMess.messId?.address || "No address available"), /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800" }, "Enrollment Pending")))) : enrollmentError ? /* @__PURE__ */ React.createElement("div", { className: "card p-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4" }, "\u{1F3E0}"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-lg" }, enrollmentError === "User is not enrolled in any mess" ? "You are not enrolled in any mess yet." : enrollmentError)) : enrolledMess ? /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold" }, enrolledMess.messId.name?.charAt(0) || "M"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-gray-800 mb-1" }, enrolledMess.messId.name || "Unknown Mess"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 mb-2 flex items-center gap-1" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-4 h-4" }), enrolledMess.messId.address || "No address available"), /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800" }, "Monthly Member"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-yellow-800" }, "Lunch")), enrolledMess.messId?.menu?.dayMeal?.dishes?.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, enrolledMess.messId.menu.dayMeal.dishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), enrolledMess.messId.menu.dayMeal.dishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", enrolledMess.messId.menu.dayMeal.dishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No lunch available")), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse" }), /* @__PURE__ */ React.createElement("h4", { className: "text-sm font-semibold text-blue-800" }, "Dinner")), enrolledMess.messId?.menu?.nightMeal?.dishes?.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, enrolledMess.messId.menu.nightMeal.dishes.slice(0, 2).map((dish, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium text-gray-700" }, dish.name), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-green-600" }, "\u20B9", dish.price))), enrolledMess.messId.menu.nightMeal.dishes.length > 2 && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "+", enrolledMess.messId.menu.nightMeal.dishes.length - 2, " more items")) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No dinner available"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, enrolledMessDayReservation ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Lunch Reserved \u2713") : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handleEnrolledMessReservation(enrolledMess.messId._id, "day"),
        className: `btn-success text-sm flex items-center justify-center gap-1 ${!isReservationAllowed.day ? "opacity-50 cursor-not-allowed" : ""}`,
        disabled: !isReservationAllowed.day
      },
      /* @__PURE__ */ React.createElement(Utensils, { className: "w-3 h-3" }),
      "Attend Lunch"
    ), enrolledMessNightReservation ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600" }, "Dinner Reserved \u2713") : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handleEnrolledMessReservation(enrolledMess.messId._id, "night"),
        className: `bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm flex items-center justify-center gap-1 ${!isReservationAllowed.night ? "opacity-50 cursor-not-allowed" : ""}`,
        disabled: !isReservationAllowed.night
      },
      /* @__PURE__ */ React.createElement(Utensils, { className: "w-3 h-3" }),
      "Attend Dinner"
    ))) : null), /* @__PURE__ */ React.createElement("div", { className: "mb-8 animate-fadeIn animate-delay-200" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold text-gradient mb-6 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Calendar, { className: "w-8 h-8 text-blue-500" }), "Today's Reservations"), loading ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading reservations...")) : reservedMesses.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, reservedMesses.map((reservation, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        className: "card p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 animate-scaleIn",
        style: { animationDelay: `${index * 100}ms` }
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-4" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `w-w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${reservation.mealType === "day" ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-gradient-to-r from-blue-500 to-indigo-500"}`
        },
        /* @__PURE__ */ React.createElement(Utensils, { className: "w-6 h-6" })
      ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-gray-800" }, reservation.messName || "Unknown Mess"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600" }, reservation.mealType === "day" ? "Lunch" : "Dinner"))),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => handleCancelReservation(reservation.reservationId, reservation.messName, reservation.mealType),
          className: `w-full btn-danger text-sm`
        },
        "Cancel Reservation"
      )
    ))) : /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4 animate-bounce" }, "\u{1F4C5}"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-lg" }, "No reservations for today."))), /* @__PURE__ */ React.createElement("div", { className: "mb-8 animate-fadeIn animate-delay-300" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold text-gradient flex items-center gap-2" }, /* @__PURE__ */ React.createElement(BookOpen, { className: "w-8 h-8 text-indigo-600" }), "Personal Meal Ledger"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, [7, 30, 90].map((days) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: days,
        onClick: () => setLedgerDays(days),
        className: `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${ledgerDays === days ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg" : "bg-white text-slate-700 border border-slate-200 hover:border-indigo-300"}`
      },
      "Last ",
      days,
      " days"
    )))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "card p-5 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-emerald-700 font-semibold" }, "Total Spend (", ledgerDays, " days)"), /* @__PURE__ */ React.createElement(IndianRupee, { className: "w-5 h-5 text-emerald-700" })), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-emerald-900" }, formatCurrency(ledgerSummary.totalSpend)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-emerald-700 mt-1" }, "Across ", ledgerSummary.totalMeals, " meal entries")), /* @__PURE__ */ React.createElement("div", { className: "card p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-blue-700 font-semibold" }, "Monthly Most Eaten Dish"), /* @__PURE__ */ React.createElement(ChartColumn, { className: "w-5 h-5 text-blue-700" })), /* @__PURE__ */ React.createElement("p", { className: "text-xl font-bold text-blue-900 truncate" }, monthlyInsights.mostEatenDish || "No data yet"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-blue-700 mt-1" }, monthlyInsights.month || "Current month")), /* @__PURE__ */ React.createElement("div", { className: "card p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-amber-700 font-semibold" }, "Monthly Avg Meal Cost"), /* @__PURE__ */ React.createElement(IndianRupee, { className: "w-5 h-5 text-amber-700" })), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-amber-900" }, formatCurrency(monthlyInsights.averageMealCost)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-amber-700 mt-1" }, "Average for ", monthlyInsights.month || "this month"))), /* @__PURE__ */ React.createElement("div", { className: "card overflow-hidden" }, ledgerLoading ? /* @__PURE__ */ React.createElement("div", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-3" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading ledger...")) : mealLedger.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "No meal history found for the selected range.")) : /* @__PURE__ */ React.createElement("div", { className: "max-h-[320px] overflow-auto" }, /* @__PURE__ */ React.createElement("table", { className: "min-w-full text-sm" }, /* @__PURE__ */ React.createElement("thead", { className: "sticky top-0 bg-slate-50 text-slate-700 uppercase text-xs tracking-wide" }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Date"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Mess"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Meal"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Dish"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Price"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Reservation"), /* @__PURE__ */ React.createElement("th", { className: "text-left px-4 py-3" }, "Attendance"))), /* @__PURE__ */ React.createElement("tbody", null, mealLedger.map((entry) => /* @__PURE__ */ React.createElement("tr", { key: entry.id, className: "border-t border-slate-100 hover:bg-slate-50" }, /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 text-slate-700" }, new Date(entry.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 font-medium text-slate-800" }, entry.messName), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 text-slate-700" }, formatMealType(entry.mealType)), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 text-slate-700" }, entry.dishNames?.length > 0 ? entry.dishNames.join(", ") : "Not available"), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3 font-semibold text-slate-800" }, formatCurrency(entry.totalPrice)), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3" }, /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(entry.reservationStatus, "reservation")}` }, entry.reservationStatus)), /* @__PURE__ */ React.createElement("td", { className: "px-4 py-3" }, /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(entry.attendanceStatus, "attendance")}` }, getAttendanceLabel(entry)))))))))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center mb-8 gap-4 animate-slideIn animate-delay-300" }, /* @__PURE__ */ React.createElement("div", { className: "relative w-full md:w-1/2" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Search mess options...",
        onChange: (e) => debouncedSetSearchQuery(e.target.value),
        className: "w-full p-4 pl-12 bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-full shadow-lg focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" }, "\u{1F50D}")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, ["Price ascending", "Price descending"].map((option) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: option,
        className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${sortOption === option ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" : "bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg"}`,
        onClick: () => setSortOption(option)
      },
      option === "Price ascending" ? "Price \u2191" : "Price \u2193"
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `px-6 py-3 rounded-full font-medium transition-all duration-300 ${showAllMesses ? "bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"}`,
        onClick: handleToggleMessView
      },
      showAllMesses ? "Show Nearby Messes" : "Show All Messes"
    ))), loading && /* @__PURE__ */ React.createElement("div", { className: "text-center p-12" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-lg" }, "Loading mess options...")), error && /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center bg-red-50 border-red-200" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4" }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("p", { className: "text-red-600 text-lg" }, error), error.includes("location") && /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "mt-4 px-6 py-3 bg-blue-500 text-white rounded-full",
        onClick: () => {
          setError("");
          setLoading(true);
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ lat: latitude, lng: longitude });
              setShowAllMesses(false);
              fetchMesses(latitude, longitude, false);
            },
            (err) => {
              console.error("Geolocation retry error:", err);
              setError("Unable to get your location. Showing all messes instead.");
              setShowAllMesses(true);
              fetchMesses(null, null, true);
            },
            { timeout: 5e3 }
          );
        }
      },
      "Retry Location"
    )), !loading && !error && /* @__PURE__ */ React.createElement("div", { className: "animate-fadeIn animate-delay-500" }, (hasDayReservation || hasNightReservation) && /* @__PURE__ */ React.createElement("div", { className: "mb-6 p-4 bg-green-100 border border-green-200 rounded-xl" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-green-800" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }), /* @__PURE__ */ React.createElement("span", { className: "font-medium" }, hasDayReservation && hasNightReservation ? "You have reservations for both lunch and dinner today!" : hasDayReservation ? "You have a lunch reservation today!" : "You have a dinner reservation today!"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" }, filteredMessOptions.length > 0 ? filteredMessOptions.map((mess, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "animate-scaleIn", style: { animationDelay: `${index * 100}ms` } }, /* @__PURE__ */ React.createElement(
      MessCard_default,
      {
        mess,
        onMonthlyBooking: handleMonthlyBooking,
        onDailyReservation: handleDailyReservation,
        isReservationAllowed,
        reservedMesses
      }
    ))) : /* @__PURE__ */ React.createElement("div", { className: "col-span-full card p-12 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4 animate-bounce" }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-xl" }, searchQuery.trim() ? "No results found." : showAllMesses ? "No messes found." : "No messes found near your location. Try showing all messes."))))));
  }
  var import_react21, import_debounce, import_meta5, getCurrentISTDate, isBookingOpenForMeal, getBookingClosedMessage, UserDashboard_default;
  var init_UserDashboard = __esm({
    "frontend/src/pages/UserDashboard.jsx"() {
      import_react21 = __require("react");
      init_UserDashboardNavbar();
      init_lucide_react();
      init_axios2();
      import_debounce = __toESM(require_debounce(), 1);
      init_dist();
      init_ReactToastify();
      init_MessCard();
      import_meta5 = {};
      getCurrentISTDate = () => {
        const now = /* @__PURE__ */ new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 6e4;
        return new Date(new Date(utc + 5.5 * 60 * 60 * 1e3));
      };
      isBookingOpenForMeal = (mealType) => {
        const currentIST = getCurrentISTDate();
        const hour = currentIST.getHours();
        if (mealType === "day") return hour < 11;
        if (mealType === "night") return hour < 19;
        return false;
      };
      getBookingClosedMessage = (mealType) => mealType === "day" ? "Booking closed for lunch. Lunch bookings close at 11:00 AM IST." : "Booking closed for dinner. Dinner bookings close at 7:00 PM IST.";
      UserDashboard_default = UserDashboard;
    }
  });

  // frontend/src/components/MessDashboardNavbar.jsx
  var import_react22, import_react_router_dom7, import_meta6, MessDashboardNavbar, NavButton3, MobileNavLink3, MessDashboardNavbar_default;
  var init_MessDashboardNavbar = __esm({
    "frontend/src/components/MessDashboardNavbar.jsx"() {
      import_react22 = __toESM(__require("react"), 1);
      init_lucide_react();
      import_react_router_dom7 = __require("react-router-dom");
      init_axios2();
      import_meta6 = {};
      MessDashboardNavbar = () => {
        const [isMenuOpen, setIsMenuOpen] = (0, import_react22.useState)(false);
        const [isScrolled, setIsScrolled] = (0, import_react22.useState)(false);
        const navigate = (0, import_react_router_dom7.useNavigate)();
        (0, import_react22.useEffect)(() => {
          const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        const handleLogout = async () => {
          try {
            const response = await axios_default.post(
              `${import_meta6.env.VITE_BASE_URL}/messOwner/logout`,
              {},
              {
                withCredentials: true,
                headers: {
                  "Content-Type": "application/json"
                }
              }
            );
            if (response.status === 200) {
              navigate("/login-signup/messOwner", { state: { fromLogout: true } });
            } else {
              console.error("Logout failed:", response.statusText);
            }
          } catch (error) {
            console.error("Error during logout:", error);
          }
        };
        return /* @__PURE__ */ import_react22.default.createElement(
          "nav",
          {
            className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50" : "bg-white/80 backdrop-blur-md shadow-lg"}`
          },
          /* @__PURE__ */ import_react22.default.createElement("div", { className: "container mx-auto px-6 py-4 flex justify-between items-center" }, /* @__PURE__ */ import_react22.default.createElement("div", { className: "relative group" }, /* @__PURE__ */ import_react22.default.createElement("div", { className: "absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300 animate-pulse" }), /* @__PURE__ */ import_react22.default.createElement("div", { className: "relative text-3xl font-extrabold tracking-wide" }, /* @__PURE__ */ import_react22.default.createElement("span", { className: "bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-glow" }, "MealSphere")), /* @__PURE__ */ import_react22.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping" }), /* @__PURE__ */ import_react22.default.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" })), /* @__PURE__ */ import_react22.default.createElement("div", { className: "hidden md:flex items-center space-x-6" }, /* @__PURE__ */ import_react22.default.createElement(NavButton3, { icon: House, href: "/" }, "Home"), /* @__PURE__ */ import_react22.default.createElement(NavButton3, { icon: AppWindow, href: "/mess-dashboard" }, "Dashboard"), /* @__PURE__ */ import_react22.default.createElement(
            "button",
            {
              onClick: handleLogout,
              className: "group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            },
            /* @__PURE__ */ import_react22.default.createElement("span", { className: "relative z-10 flex items-center gap-2" }, /* @__PURE__ */ import_react22.default.createElement(LogOut, { size: 18, className: "group-hover:rotate-12 transition-transform duration-300" }), "Logout"),
            /* @__PURE__ */ import_react22.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
          )), /* @__PURE__ */ import_react22.default.createElement(
            "button",
            {
              className: "md:hidden p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 relative",
              onClick: () => setIsMenuOpen(!isMenuOpen)
            },
            /* @__PURE__ */ import_react22.default.createElement(Menu, { size: 24, className: `transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}` }),
            isMenuOpen && /* @__PURE__ */ import_react22.default.createElement("div", { className: "absolute inset-0 bg-orange-500/20 rounded-full animate-ping" })
          )),
          /* @__PURE__ */ import_react22.default.createElement(
            "div",
            {
              className: `md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`
            },
            /* @__PURE__ */ import_react22.default.createElement("div", { className: "bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50" }, /* @__PURE__ */ import_react22.default.createElement("div", { className: "flex flex-col p-6 space-y-4" }, /* @__PURE__ */ import_react22.default.createElement(MobileNavLink3, { icon: House, href: "/", onClick: () => setIsMenuOpen(false) }, "Home"), /* @__PURE__ */ import_react22.default.createElement(MobileNavLink3, { icon: AppWindow, href: "/mess-dashboard", onClick: () => setIsMenuOpen(false) }, "Dashboard"), /* @__PURE__ */ import_react22.default.createElement(
              "button",
              {
                onClick: () => {
                  handleLogout();
                  setIsMenuOpen(false);
                },
                className: "w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              },
              /* @__PURE__ */ import_react22.default.createElement(LogOut, { size: 18 }),
              "Logout"
            )))
          )
        );
      };
      NavButton3 = ({ icon: Icon2, href, children }) => /* @__PURE__ */ import_react22.default.createElement(
        "a",
        {
          href,
          className: "relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 group flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-orange-50"
        },
        /* @__PURE__ */ import_react22.default.createElement(Icon2, { size: 18, className: "group-hover:scale-110 transition-transform duration-300" }),
        children,
        /* @__PURE__ */ import_react22.default.createElement("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full" })
      );
      MobileNavLink3 = ({ icon: Icon2, href, children, onClick }) => /* @__PURE__ */ import_react22.default.createElement(
        "a",
        {
          href,
          onClick,
          className: "text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3"
        },
        /* @__PURE__ */ import_react22.default.createElement(Icon2, { size: 18 }),
        children
      );
      MessDashboardNavbar_default = MessDashboardNavbar;
    }
  });

  // frontend/src/pages/MessDashboard.jsx
  var MessDashboard_exports = {};
  __export(MessDashboard_exports, {
    default: () => MessDashboard_default
  });
  var import_react23, import_react_router_dom8, import_meta7, LAST_ACTIVE_MESS_KEY2, defaultMenuForm, MessDashboard, MessDashboard_default;
  var init_MessDashboard = __esm({
    "frontend/src/pages/MessDashboard.jsx"() {
      import_react23 = __toESM(__require("react"), 1);
      import_react_router_dom8 = __require("react-router-dom");
      init_axios2();
      init_lucide_react();
      init_MessDashboardNavbar();
      import_meta7 = {};
      LAST_ACTIVE_MESS_KEY2 = "ownerLastActiveMessId";
      defaultMenuForm = {
        dayMeal: { dishes: [{ name: "", price: "", items: "" }] },
        nightMeal: { dishes: [{ name: "", price: "", items: "" }] }
      };
      MessDashboard = () => {
        const navigate = (0, import_react_router_dom8.useNavigate)();
        const { messId: routeMessId } = (0, import_react_router_dom8.useParams)();
        const [messes, setMesses] = (0, import_react23.useState)([]);
        const [loading, setLoading] = (0, import_react23.useState)(true);
        const [error, setError] = (0, import_react23.useState)("");
        const [success, setSuccess] = (0, import_react23.useState)("");
        const [sidebarOpen, setSidebarOpen] = (0, import_react23.useState)(false);
        const [isMenuModalOpen, setIsMenuModalOpen] = (0, import_react23.useState)(false);
        const [menuForm, setMenuForm] = (0, import_react23.useState)(defaultMenuForm);
        const [activeMessId, setActiveMessId] = (0, import_react23.useState)(null);
        (0, import_react23.useEffect)(() => {
          const timer = setTimeout(() => {
            setSuccess("");
            setError("");
          }, 3e3);
          return () => clearTimeout(timer);
        }, [success, error]);
        const fetchOwnerMesses = async () => {
          setLoading(true);
          try {
            const response = await axios_default.get(`${import_meta7.env.VITE_BASE_URL}/mess/owner/messes`, {
              withCredentials: true
            });
            const fetchedMesses = response.data?.messes || [];
            if (!fetchedMesses.length) {
              navigate("/mess-dashboard/create-first-mess", { replace: true });
              return;
            }
            setMesses(fetchedMesses);
            const storedMessId = localStorage.getItem(LAST_ACTIVE_MESS_KEY2);
            const fallbackMessId = fetchedMesses[0]._id;
            const requestedMessId = routeMessId;
            const resolvedMessId = [requestedMessId, storedMessId, fallbackMessId].find(
              (candidateId) => fetchedMesses.some((mess) => mess._id === candidateId)
            );
            setActiveMessId(resolvedMessId);
            localStorage.setItem(LAST_ACTIVE_MESS_KEY2, resolvedMessId);
            if (routeMessId !== resolvedMessId) {
              navigate(`/mess-dashboard/${resolvedMessId}`, { replace: true });
            }
          } catch (err) {
            if (err.response?.status === 404) {
              navigate("/mess-dashboard/create-first-mess", { replace: true });
              return;
            }
            setError(err.response?.data?.message || "Failed to fetch messes");
          } finally {
            setLoading(false);
          }
        };
        (0, import_react23.useEffect)(() => {
          fetchOwnerMesses();
        }, []);
        (0, import_react23.useEffect)(() => {
          if (!messes.length) return;
          if (!routeMessId) return;
          const exists = messes.some((mess) => mess._id === routeMessId);
          if (!exists) {
            const fallbackMessId = messes[0]._id;
            setActiveMessId(fallbackMessId);
            localStorage.setItem(LAST_ACTIVE_MESS_KEY2, fallbackMessId);
            navigate(`/mess-dashboard/${fallbackMessId}`, { replace: true });
            return;
          }
          setActiveMessId(routeMessId);
          localStorage.setItem(LAST_ACTIVE_MESS_KEY2, routeMessId);
        }, [routeMessId, messes, navigate]);
        const activeMess = (0, import_react23.useMemo)(
          () => messes.find((mess) => mess._id === activeMessId) || null,
          [messes, activeMessId]
        );
        const handleSelectMess = (messId) => {
          setSidebarOpen(false);
          setActiveMessId(messId);
          localStorage.setItem(LAST_ACTIVE_MESS_KEY2, messId);
          navigate(`/mess-dashboard/${messId}`);
        };
        const handleDeleteMess = async () => {
          if (!activeMess) return;
          if (!window.confirm(`Delete ${activeMess.name}? This action cannot be undone.`)) return;
          try {
            setLoading(true);
            await axios_default.delete(`${import_meta7.env.VITE_BASE_URL}/mess/${activeMess._id}`, {
              withCredentials: true
            });
            const updatedMesses = messes.filter((mess) => mess._id !== activeMess._id);
            setMesses(updatedMesses);
            setSuccess("Mess deleted successfully");
            if (!updatedMesses.length) {
              localStorage.removeItem(LAST_ACTIVE_MESS_KEY2);
              navigate("/mess-dashboard/create-first-mess", { replace: true });
              return;
            }
            const nextMessId = updatedMesses[0]._id;
            setActiveMessId(nextMessId);
            localStorage.setItem(LAST_ACTIVE_MESS_KEY2, nextMessId);
            navigate(`/mess-dashboard/${nextMessId}`, { replace: true });
          } catch (err) {
            setError(err.response?.data?.message || "Failed to delete mess");
          } finally {
            setLoading(false);
          }
        };
        const handleMenuChange = (event, mealType, index, field) => {
          const { value } = event.target;
          setMenuForm((prev) => {
            const updatedDishes = [...prev[mealType].dishes];
            if (field === "items") {
              updatedDishes[index] = {
                ...updatedDishes[index],
                items: value
              };
            } else {
              updatedDishes[index] = {
                ...updatedDishes[index],
                [field]: value
              };
            }
            return {
              ...prev,
              [mealType]: { dishes: updatedDishes }
            };
          });
        };
        const addDish = (mealType) => {
          setMenuForm((prev) => ({
            ...prev,
            [mealType]: {
              dishes: [...prev[mealType].dishes, { name: "", price: "", items: "" }]
            }
          }));
        };
        const deleteDish = (mealType, index) => {
          setMenuForm((prev) => {
            const updatedDishes = [...prev[mealType].dishes];
            updatedDishes.splice(index, 1);
            return {
              ...prev,
              [mealType]: {
                dishes: updatedDishes.length ? updatedDishes : [{ name: "", price: "", items: "" }]
              }
            };
          });
        };
        const openMenuModal = () => {
          if (!activeMess) return;
          const normalizeMenu = (menu) => ({
            dayMeal: {
              dishes: (menu?.dayMeal?.dishes || []).length ? menu.dayMeal.dishes.map((dish) => ({
                name: dish.name || "",
                price: dish.price || "",
                items: Array.isArray(dish.items) ? dish.items.join(", ") : dish.items || ""
              })) : [{ name: "", price: "", items: "" }]
            },
            nightMeal: {
              dishes: (menu?.nightMeal?.dishes || []).length ? menu.nightMeal.dishes.map((dish) => ({
                name: dish.name || "",
                price: dish.price || "",
                items: Array.isArray(dish.items) ? dish.items.join(", ") : dish.items || ""
              })) : [{ name: "", price: "", items: "" }]
            }
          });
          setMenuForm(normalizeMenu(activeMess.menu));
          setIsMenuModalOpen(true);
        };
        const closeMenuModal = () => {
          setIsMenuModalOpen(false);
          setMenuForm(defaultMenuForm);
        };
        const handleMenuSubmit = async (event) => {
          event.preventDefault();
          if (!activeMess) return;
          const parsedMenu = {
            dayMeal: {
              dishes: menuForm.dayMeal.dishes.filter((dish) => dish.name && dish.price !== "").map((dish) => ({
                name: dish.name.trim(),
                price: Number(dish.price),
                items: String(dish.items || "").split(",").map((item) => item.trim()).filter(Boolean)
              }))
            },
            nightMeal: {
              dishes: menuForm.nightMeal.dishes.filter((dish) => dish.name && dish.price !== "").map((dish) => ({
                name: dish.name.trim(),
                price: Number(dish.price),
                items: String(dish.items || "").split(",").map((item) => item.trim()).filter(Boolean)
              }))
            }
          };
          try {
            setLoading(true);
            const response = await axios_default.put(
              `${import_meta7.env.VITE_BASE_URL}/mess/${activeMess._id}`,
              { menu: parsedMenu },
              { withCredentials: true }
            );
            setMesses(
              (prev) => prev.map((mess) => mess._id === activeMess._id ? { ...mess, menu: parsedMenu } : mess)
            );
            setSuccess(response.data?.message || "Menu updated successfully");
            closeMenuModal();
          } catch (err) {
            setError(err.response?.data?.message || "Failed to update menu");
          } finally {
            setLoading(false);
          }
        };
        return /* @__PURE__ */ import_react23.default.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50" }, /* @__PURE__ */ import_react23.default.createElement(MessDashboardNavbar_default, null), /* @__PURE__ */ import_react23.default.createElement("div", { className: "pt-20 px-4 sm:px-6 pb-6" }, /* @__PURE__ */ import_react23.default.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ import_react23.default.createElement("div", { className: "mb-4 flex items-center justify-between lg:hidden" }, /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => setSidebarOpen((prev) => !prev),
            className: "inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-700"
          },
          /* @__PURE__ */ import_react23.default.createElement(Menu, { className: "w-4 h-4" }),
          "Messes"
        ), /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => navigate("/mess-dashboard/add-mess"),
            className: "inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm"
          },
          /* @__PURE__ */ import_react23.default.createElement(Plus, { className: "w-4 h-4" }),
          "Add"
        )), /* @__PURE__ */ import_react23.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6" }, /* @__PURE__ */ import_react23.default.createElement(
          "aside",
          {
            className: `bg-white rounded-xl border border-slate-200 shadow-sm p-4 h-fit lg:sticky lg:top-24 ${sidebarOpen ? "block" : "hidden"} lg:block`
          },
          /* @__PURE__ */ import_react23.default.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ import_react23.default.createElement("h2", { className: "text-lg font-semibold text-slate-800" }, "Your Messes"), /* @__PURE__ */ import_react23.default.createElement(
            "button",
            {
              type: "button",
              onClick: () => setSidebarOpen(false),
              className: "lg:hidden p-1 rounded hover:bg-slate-100"
            },
            /* @__PURE__ */ import_react23.default.createElement(X, { className: "w-4 h-4" })
          )),
          /* @__PURE__ */ import_react23.default.createElement("div", { className: "space-y-2 mb-4 max-h-[420px] overflow-y-auto pr-1" }, messes.map((mess) => {
            const isActive = mess._id === activeMessId;
            return /* @__PURE__ */ import_react23.default.createElement(
              "button",
              {
                key: mess._id,
                type: "button",
                onClick: () => handleSelectMess(mess._id),
                className: `w-full text-left px-3 py-2 rounded-lg border transition-all ${isActive ? "bg-indigo-50 border-indigo-300 text-indigo-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`
              },
              /* @__PURE__ */ import_react23.default.createElement("div", { className: "font-medium truncate" }, mess.name),
              /* @__PURE__ */ import_react23.default.createElement("div", { className: "text-xs text-slate-500 truncate" }, mess.address)
            );
          })),
          /* @__PURE__ */ import_react23.default.createElement(
            "button",
            {
              type: "button",
              onClick: () => navigate("/mess-dashboard/add-mess"),
              className: "w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            },
            /* @__PURE__ */ import_react23.default.createElement(Plus, { className: "w-4 h-4" }),
            "Add Mess"
          )
        ), /* @__PURE__ */ import_react23.default.createElement("section", { className: "space-y-4" }, success && /* @__PURE__ */ import_react23.default.createElement("div", { className: "bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg" }, success), error && /* @__PURE__ */ import_react23.default.createElement("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" }, error), /* @__PURE__ */ import_react23.default.createElement("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm p-6" }, loading ? /* @__PURE__ */ import_react23.default.createElement("div", { className: "flex items-center gap-3 text-slate-600" }, /* @__PURE__ */ import_react23.default.createElement("div", { className: "w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" }), "Loading mess details...") : !activeMess ? /* @__PURE__ */ import_react23.default.createElement("div", { className: "text-slate-600" }, "No active mess selected.") : /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement("div", { className: "flex items-center gap-4 mb-5" }, /* @__PURE__ */ import_react23.default.createElement(
          "img",
          {
            src: activeMess.image || "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png",
            alt: activeMess.name,
            className: "w-20 h-20 rounded-xl object-cover border border-slate-200"
          }
        ), /* @__PURE__ */ import_react23.default.createElement("div", null, /* @__PURE__ */ import_react23.default.createElement("h1", { className: "text-2xl font-bold text-slate-800" }, activeMess.name), /* @__PURE__ */ import_react23.default.createElement("p", { className: "text-slate-600" }, activeMess.address))), /* @__PURE__ */ import_react23.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: openMenuModal,
            className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          },
          /* @__PURE__ */ import_react23.default.createElement(BookOpen, { className: "w-4 h-4" }),
          "View / Update Menu"
        ), /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => navigate(`/mess-dashboard/${activeMess._id}/registered-members`),
            className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
          },
          /* @__PURE__ */ import_react23.default.createElement(Users, { className: "w-4 h-4" }),
          "View Members"
        ), /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => navigate(`/mess-dashboard/${activeMess._id}/attendance`),
            className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          },
          /* @__PURE__ */ import_react23.default.createElement(ClipboardList, { className: "w-4 h-4" }),
          "View Attendance"
        ), /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: handleDeleteMess,
            className: "inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700"
          },
          /* @__PURE__ */ import_react23.default.createElement(Trash2, { className: "w-4 h-4" }),
          "Delete Mess"
        )))))))), isMenuModalOpen && activeMess && /* @__PURE__ */ import_react23.default.createElement("div", { className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ import_react23.default.createElement("div", { className: "bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6" }, /* @__PURE__ */ import_react23.default.createElement("div", { className: "flex items-center justify-between mb-5" }, /* @__PURE__ */ import_react23.default.createElement("h2", { className: "text-xl font-bold text-slate-800" }, "Update Menu: ", activeMess.name), /* @__PURE__ */ import_react23.default.createElement("button", { type: "button", onClick: closeMenuModal, className: "p-1 rounded hover:bg-slate-100" }, /* @__PURE__ */ import_react23.default.createElement(X, { className: "w-5 h-5" }))), /* @__PURE__ */ import_react23.default.createElement("form", { onSubmit: handleMenuSubmit, className: "space-y-6" }, ["dayMeal", "nightMeal"].map((mealType) => /* @__PURE__ */ import_react23.default.createElement("div", { key: mealType, className: "border border-slate-200 rounded-lg p-4" }, /* @__PURE__ */ import_react23.default.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ import_react23.default.createElement("h3", { className: "font-semibold text-slate-700" }, mealType === "dayMeal" ? "Lunch Menu" : "Dinner Menu"), /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => addDish(mealType),
            className: "text-sm text-indigo-600 hover:text-indigo-700"
          },
          "+ Add Dish"
        )), /* @__PURE__ */ import_react23.default.createElement("div", { className: "space-y-3" }, menuForm[mealType].dishes.map((dish, index) => /* @__PURE__ */ import_react23.default.createElement("div", { key: `${mealType}-${index}`, className: "grid grid-cols-1 md:grid-cols-[1fr,120px,1fr,auto] gap-2" }, /* @__PURE__ */ import_react23.default.createElement(
          "input",
          {
            type: "text",
            value: dish.name,
            onChange: (event) => handleMenuChange(event, mealType, index, "name"),
            placeholder: "Dish name",
            className: "px-3 py-2 border border-slate-300 rounded-lg",
            required: true
          }
        ), /* @__PURE__ */ import_react23.default.createElement(
          "input",
          {
            type: "number",
            min: "0",
            value: dish.price,
            onChange: (event) => handleMenuChange(event, mealType, index, "price"),
            placeholder: "Price",
            className: "px-3 py-2 border border-slate-300 rounded-lg",
            required: true
          }
        ), /* @__PURE__ */ import_react23.default.createElement(
          "input",
          {
            type: "text",
            value: dish.items,
            onChange: (event) => handleMenuChange(event, mealType, index, "items"),
            placeholder: "Items (comma-separated)",
            className: "px-3 py-2 border border-slate-300 rounded-lg"
          }
        ), /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => deleteDish(mealType, index),
            className: "px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
          },
          "Remove"
        )))))), /* @__PURE__ */ import_react23.default.createElement("div", { className: "flex justify-end gap-2" }, /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "button",
            onClick: closeMenuModal,
            className: "px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
          },
          "Cancel"
        ), /* @__PURE__ */ import_react23.default.createElement(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          },
          "Save Menu"
        ))))));
      };
      MessDashboard_default = MessDashboard;
    }
  });

  // frontend/node_modules/leaflet/dist/leaflet-src.js
  var require_leaflet_src = __commonJS({
    "frontend/node_modules/leaflet/dist/leaflet-src.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.leaflet = {}));
      })(exports, (function(exports2) {
        "use strict";
        var version = "1.9.4";
        function extend2(dest) {
          var i, j, len, src;
          for (j = 1, len = arguments.length; j < len; j++) {
            src = arguments[j];
            for (i in src) {
              dest[i] = src[i];
            }
          }
          return dest;
        }
        var create$2 = Object.create || /* @__PURE__ */ (function() {
          function F2() {
          }
          return function(proto) {
            F2.prototype = proto;
            return new F2();
          };
        })();
        function bind2(fn, obj) {
          var slice = Array.prototype.slice;
          if (fn.bind) {
            return fn.bind.apply(fn, slice.call(arguments, 1));
          }
          var args = slice.call(arguments, 2);
          return function() {
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
          };
        }
        var lastId = 0;
        function stamp(obj) {
          if (!("_leaflet_id" in obj)) {
            obj["_leaflet_id"] = ++lastId;
          }
          return obj._leaflet_id;
        }
        function throttle2(fn, time, context) {
          var lock, args, wrapperFn, later;
          later = function() {
            lock = false;
            if (args) {
              wrapperFn.apply(context, args);
              args = false;
            }
          };
          wrapperFn = function() {
            if (lock) {
              args = arguments;
            } else {
              fn.apply(context, arguments);
              setTimeout(later, time);
              lock = true;
            }
          };
          return wrapperFn;
        }
        function wrapNum(x, range, includeMax) {
          var max = range[1], min = range[0], d = max - min;
          return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
        }
        function falseFn() {
          return false;
        }
        function formatNum(num, precision) {
          if (precision === false) {
            return num;
          }
          var pow = Math.pow(10, precision === void 0 ? 6 : precision);
          return Math.round(num * pow) / pow;
        }
        function trim2(str) {
          return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
        }
        function splitWords(str) {
          return trim2(str).split(/\s+/);
        }
        function setOptions(obj, options) {
          if (!Object.prototype.hasOwnProperty.call(obj, "options")) {
            obj.options = obj.options ? create$2(obj.options) : {};
          }
          for (var i in options) {
            obj.options[i] = options[i];
          }
          return obj.options;
        }
        function getParamString(obj, existingUrl, uppercase) {
          var params = [];
          for (var i in obj) {
            params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + "=" + encodeURIComponent(obj[i]));
          }
          return (!existingUrl || existingUrl.indexOf("?") === -1 ? "?" : "&") + params.join("&");
        }
        var templateRe = /\{ *([\w_ -]+) *\}/g;
        function template(str, data) {
          return str.replace(templateRe, function(str2, key) {
            var value = data[key];
            if (value === void 0) {
              throw new Error("No value provided for variable " + str2);
            } else if (typeof value === "function") {
              value = value(data);
            }
            return value;
          });
        }
        var isArray2 = Array.isArray || function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
        function indexOf(array, el) {
          for (var i = 0; i < array.length; i++) {
            if (array[i] === el) {
              return i;
            }
          }
          return -1;
        }
        var emptyImageUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function getPrefixed(name) {
          return window["webkit" + name] || window["moz" + name] || window["ms" + name];
        }
        var lastTime = 0;
        function timeoutDefer(fn) {
          var time = +/* @__PURE__ */ new Date(), timeToCall = Math.max(0, 16 - (time - lastTime));
          lastTime = time + timeToCall;
          return window.setTimeout(fn, timeToCall);
        }
        var requestFn = window.requestAnimationFrame || getPrefixed("RequestAnimationFrame") || timeoutDefer;
        var cancelFn = window.cancelAnimationFrame || getPrefixed("CancelAnimationFrame") || getPrefixed("CancelRequestAnimationFrame") || function(id) {
          window.clearTimeout(id);
        };
        function requestAnimFrame(fn, context, immediate) {
          if (immediate && requestFn === timeoutDefer) {
            fn.call(context);
          } else {
            return requestFn.call(window, bind2(fn, context));
          }
        }
        function cancelAnimFrame(id) {
          if (id) {
            cancelFn.call(window, id);
          }
        }
        var Util = {
          __proto__: null,
          extend: extend2,
          create: create$2,
          bind: bind2,
          get lastId() {
            return lastId;
          },
          stamp,
          throttle: throttle2,
          wrapNum,
          falseFn,
          formatNum,
          trim: trim2,
          splitWords,
          setOptions,
          getParamString,
          template,
          isArray: isArray2,
          indexOf,
          emptyImageUrl,
          requestFn,
          cancelFn,
          requestAnimFrame,
          cancelAnimFrame
        };
        function Class() {
        }
        Class.extend = function(props) {
          var NewClass = function() {
            setOptions(this);
            if (this.initialize) {
              this.initialize.apply(this, arguments);
            }
            this.callInitHooks();
          };
          var parentProto = NewClass.__super__ = this.prototype;
          var proto = create$2(parentProto);
          proto.constructor = NewClass;
          NewClass.prototype = proto;
          for (var i in this) {
            if (Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__") {
              NewClass[i] = this[i];
            }
          }
          if (props.statics) {
            extend2(NewClass, props.statics);
          }
          if (props.includes) {
            checkDeprecatedMixinEvents(props.includes);
            extend2.apply(null, [proto].concat(props.includes));
          }
          extend2(proto, props);
          delete proto.statics;
          delete proto.includes;
          if (proto.options) {
            proto.options = parentProto.options ? create$2(parentProto.options) : {};
            extend2(proto.options, props.options);
          }
          proto._initHooks = [];
          proto.callInitHooks = function() {
            if (this._initHooksCalled) {
              return;
            }
            if (parentProto.callInitHooks) {
              parentProto.callInitHooks.call(this);
            }
            this._initHooksCalled = true;
            for (var i2 = 0, len = proto._initHooks.length; i2 < len; i2++) {
              proto._initHooks[i2].call(this);
            }
          };
          return NewClass;
        };
        Class.include = function(props) {
          var parentOptions = this.prototype.options;
          extend2(this.prototype, props);
          if (props.options) {
            this.prototype.options = parentOptions;
            this.mergeOptions(props.options);
          }
          return this;
        };
        Class.mergeOptions = function(options) {
          extend2(this.prototype.options, options);
          return this;
        };
        Class.addInitHook = function(fn) {
          var args = Array.prototype.slice.call(arguments, 1);
          var init = typeof fn === "function" ? fn : function() {
            this[fn].apply(this, args);
          };
          this.prototype._initHooks = this.prototype._initHooks || [];
          this.prototype._initHooks.push(init);
          return this;
        };
        function checkDeprecatedMixinEvents(includes) {
          if (typeof L === "undefined" || !L || !L.Mixin) {
            return;
          }
          includes = isArray2(includes) ? includes : [includes];
          for (var i = 0; i < includes.length; i++) {
            if (includes[i] === L.Mixin.Events) {
              console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
            }
          }
        }
        var Events = {
          /* @method on(type: String, fn: Function, context?: Object): this
           * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
           *
           * @alternative
           * @method on(eventMap: Object): this
           * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
           */
          on: function(types, fn, context) {
            if (typeof types === "object") {
              for (var type in types) {
                this._on(type, types[type], fn);
              }
            } else {
              types = splitWords(types);
              for (var i = 0, len = types.length; i < len; i++) {
                this._on(types[i], fn, context);
              }
            }
            return this;
          },
          /* @method off(type: String, fn?: Function, context?: Object): this
           * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
           *
           * @alternative
           * @method off(eventMap: Object): this
           * Removes a set of type/listener pairs.
           *
           * @alternative
           * @method off: this
           * Removes all listeners to all events on the object. This includes implicitly attached events.
           */
          off: function(types, fn, context) {
            if (!arguments.length) {
              delete this._events;
            } else if (typeof types === "object") {
              for (var type in types) {
                this._off(type, types[type], fn);
              }
            } else {
              types = splitWords(types);
              var removeAll = arguments.length === 1;
              for (var i = 0, len = types.length; i < len; i++) {
                if (removeAll) {
                  this._off(types[i]);
                } else {
                  this._off(types[i], fn, context);
                }
              }
            }
            return this;
          },
          // attach listener (without syntactic sugar now)
          _on: function(type, fn, context, _once) {
            if (typeof fn !== "function") {
              console.warn("wrong listener type: " + typeof fn);
              return;
            }
            if (this._listens(type, fn, context) !== false) {
              return;
            }
            if (context === this) {
              context = void 0;
            }
            var newListener = { fn, ctx: context };
            if (_once) {
              newListener.once = true;
            }
            this._events = this._events || {};
            this._events[type] = this._events[type] || [];
            this._events[type].push(newListener);
          },
          _off: function(type, fn, context) {
            var listeners, i, len;
            if (!this._events) {
              return;
            }
            listeners = this._events[type];
            if (!listeners) {
              return;
            }
            if (arguments.length === 1) {
              if (this._firingCount) {
                for (i = 0, len = listeners.length; i < len; i++) {
                  listeners[i].fn = falseFn;
                }
              }
              delete this._events[type];
              return;
            }
            if (typeof fn !== "function") {
              console.warn("wrong listener type: " + typeof fn);
              return;
            }
            var index2 = this._listens(type, fn, context);
            if (index2 !== false) {
              var listener = listeners[index2];
              if (this._firingCount) {
                listener.fn = falseFn;
                this._events[type] = listeners = listeners.slice();
              }
              listeners.splice(index2, 1);
            }
          },
          // @method fire(type: String, data?: Object, propagate?: Boolean): this
          // Fires an event of the specified type. You can optionally provide a data
          // object — the first argument of the listener function will contain its
          // properties. The event can optionally be propagated to event parents.
          fire: function(type, data, propagate) {
            if (!this.listens(type, propagate)) {
              return this;
            }
            var event = extend2({}, data, {
              type,
              target: this,
              sourceTarget: data && data.sourceTarget || this
            });
            if (this._events) {
              var listeners = this._events[type];
              if (listeners) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var i = 0, len = listeners.length; i < len; i++) {
                  var l = listeners[i];
                  var fn = l.fn;
                  if (l.once) {
                    this.off(type, fn, l.ctx);
                  }
                  fn.call(l.ctx || this, event);
                }
                this._firingCount--;
              }
            }
            if (propagate) {
              this._propagateEvent(event);
            }
            return this;
          },
          // @method listens(type: String, propagate?: Boolean): Boolean
          // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
          // Returns `true` if a particular event type has any listeners attached to it.
          // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
          listens: function(type, fn, context, propagate) {
            if (typeof type !== "string") {
              console.warn('"string" type argument expected');
            }
            var _fn = fn;
            if (typeof fn !== "function") {
              propagate = !!fn;
              _fn = void 0;
              context = void 0;
            }
            var listeners = this._events && this._events[type];
            if (listeners && listeners.length) {
              if (this._listens(type, _fn, context) !== false) {
                return true;
              }
            }
            if (propagate) {
              for (var id in this._eventParents) {
                if (this._eventParents[id].listens(type, fn, context, propagate)) {
                  return true;
                }
              }
            }
            return false;
          },
          // returns the index (number) or false
          _listens: function(type, fn, context) {
            if (!this._events) {
              return false;
            }
            var listeners = this._events[type] || [];
            if (!fn) {
              return !!listeners.length;
            }
            if (context === this) {
              context = void 0;
            }
            for (var i = 0, len = listeners.length; i < len; i++) {
              if (listeners[i].fn === fn && listeners[i].ctx === context) {
                return i;
              }
            }
            return false;
          },
          // @method once(…): this
          // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
          once: function(types, fn, context) {
            if (typeof types === "object") {
              for (var type in types) {
                this._on(type, types[type], fn, true);
              }
            } else {
              types = splitWords(types);
              for (var i = 0, len = types.length; i < len; i++) {
                this._on(types[i], fn, context, true);
              }
            }
            return this;
          },
          // @method addEventParent(obj: Evented): this
          // Adds an event parent - an `Evented` that will receive propagated events
          addEventParent: function(obj) {
            this._eventParents = this._eventParents || {};
            this._eventParents[stamp(obj)] = obj;
            return this;
          },
          // @method removeEventParent(obj: Evented): this
          // Removes an event parent, so it will stop receiving propagated events
          removeEventParent: function(obj) {
            if (this._eventParents) {
              delete this._eventParents[stamp(obj)];
            }
            return this;
          },
          _propagateEvent: function(e) {
            for (var id in this._eventParents) {
              this._eventParents[id].fire(e.type, extend2({
                layer: e.target,
                propagatedFrom: e.target
              }, e), true);
            }
          }
        };
        Events.addEventListener = Events.on;
        Events.removeEventListener = Events.clearAllEventListeners = Events.off;
        Events.addOneTimeEventListener = Events.once;
        Events.fireEvent = Events.fire;
        Events.hasEventListeners = Events.listens;
        var Evented = Class.extend(Events);
        function Point(x, y2, round) {
          this.x = round ? Math.round(x) : x;
          this.y = round ? Math.round(y2) : y2;
        }
        var trunc = Math.trunc || function(v) {
          return v > 0 ? Math.floor(v) : Math.ceil(v);
        };
        Point.prototype = {
          // @method clone(): Point
          // Returns a copy of the current point.
          clone: function() {
            return new Point(this.x, this.y);
          },
          // @method add(otherPoint: Point): Point
          // Returns the result of addition of the current and the given points.
          add: function(point) {
            return this.clone()._add(toPoint(point));
          },
          _add: function(point) {
            this.x += point.x;
            this.y += point.y;
            return this;
          },
          // @method subtract(otherPoint: Point): Point
          // Returns the result of subtraction of the given point from the current.
          subtract: function(point) {
            return this.clone()._subtract(toPoint(point));
          },
          _subtract: function(point) {
            this.x -= point.x;
            this.y -= point.y;
            return this;
          },
          // @method divideBy(num: Number): Point
          // Returns the result of division of the current point by the given number.
          divideBy: function(num) {
            return this.clone()._divideBy(num);
          },
          _divideBy: function(num) {
            this.x /= num;
            this.y /= num;
            return this;
          },
          // @method multiplyBy(num: Number): Point
          // Returns the result of multiplication of the current point by the given number.
          multiplyBy: function(num) {
            return this.clone()._multiplyBy(num);
          },
          _multiplyBy: function(num) {
            this.x *= num;
            this.y *= num;
            return this;
          },
          // @method scaleBy(scale: Point): Point
          // Multiply each coordinate of the current point by each coordinate of
          // `scale`. In linear algebra terms, multiply the point by the
          // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
          // defined by `scale`.
          scaleBy: function(point) {
            return new Point(this.x * point.x, this.y * point.y);
          },
          // @method unscaleBy(scale: Point): Point
          // Inverse of `scaleBy`. Divide each coordinate of the current point by
          // each coordinate of `scale`.
          unscaleBy: function(point) {
            return new Point(this.x / point.x, this.y / point.y);
          },
          // @method round(): Point
          // Returns a copy of the current point with rounded coordinates.
          round: function() {
            return this.clone()._round();
          },
          _round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
          },
          // @method floor(): Point
          // Returns a copy of the current point with floored coordinates (rounded down).
          floor: function() {
            return this.clone()._floor();
          },
          _floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
          },
          // @method ceil(): Point
          // Returns a copy of the current point with ceiled coordinates (rounded up).
          ceil: function() {
            return this.clone()._ceil();
          },
          _ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
          },
          // @method trunc(): Point
          // Returns a copy of the current point with truncated coordinates (rounded towards zero).
          trunc: function() {
            return this.clone()._trunc();
          },
          _trunc: function() {
            this.x = trunc(this.x);
            this.y = trunc(this.y);
            return this;
          },
          // @method distanceTo(otherPoint: Point): Number
          // Returns the cartesian distance between the current and the given points.
          distanceTo: function(point) {
            point = toPoint(point);
            var x = point.x - this.x, y2 = point.y - this.y;
            return Math.sqrt(x * x + y2 * y2);
          },
          // @method equals(otherPoint: Point): Boolean
          // Returns `true` if the given point has the same coordinates.
          equals: function(point) {
            point = toPoint(point);
            return point.x === this.x && point.y === this.y;
          },
          // @method contains(otherPoint: Point): Boolean
          // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
          contains: function(point) {
            point = toPoint(point);
            return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
          },
          // @method toString(): String
          // Returns a string representation of the point for debugging purposes.
          toString: function() {
            return "Point(" + formatNum(this.x) + ", " + formatNum(this.y) + ")";
          }
        };
        function toPoint(x, y2, round) {
          if (x instanceof Point) {
            return x;
          }
          if (isArray2(x)) {
            return new Point(x[0], x[1]);
          }
          if (x === void 0 || x === null) {
            return x;
          }
          if (typeof x === "object" && "x" in x && "y" in x) {
            return new Point(x.x, x.y);
          }
          return new Point(x, y2, round);
        }
        function Bounds(a, b) {
          if (!a) {
            return;
          }
          var points = b ? [a, b] : a;
          for (var i = 0, len = points.length; i < len; i++) {
            this.extend(points[i]);
          }
        }
        Bounds.prototype = {
          // @method extend(point: Point): this
          // Extends the bounds to contain the given point.
          // @alternative
          // @method extend(otherBounds: Bounds): this
          // Extend the bounds to contain the given bounds
          extend: function(obj) {
            var min2, max2;
            if (!obj) {
              return this;
            }
            if (obj instanceof Point || typeof obj[0] === "number" || "x" in obj) {
              min2 = max2 = toPoint(obj);
            } else {
              obj = toBounds(obj);
              min2 = obj.min;
              max2 = obj.max;
              if (!min2 || !max2) {
                return this;
              }
            }
            if (!this.min && !this.max) {
              this.min = min2.clone();
              this.max = max2.clone();
            } else {
              this.min.x = Math.min(min2.x, this.min.x);
              this.max.x = Math.max(max2.x, this.max.x);
              this.min.y = Math.min(min2.y, this.min.y);
              this.max.y = Math.max(max2.y, this.max.y);
            }
            return this;
          },
          // @method getCenter(round?: Boolean): Point
          // Returns the center point of the bounds.
          getCenter: function(round) {
            return toPoint(
              (this.min.x + this.max.x) / 2,
              (this.min.y + this.max.y) / 2,
              round
            );
          },
          // @method getBottomLeft(): Point
          // Returns the bottom-left point of the bounds.
          getBottomLeft: function() {
            return toPoint(this.min.x, this.max.y);
          },
          // @method getTopRight(): Point
          // Returns the top-right point of the bounds.
          getTopRight: function() {
            return toPoint(this.max.x, this.min.y);
          },
          // @method getTopLeft(): Point
          // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
          getTopLeft: function() {
            return this.min;
          },
          // @method getBottomRight(): Point
          // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
          getBottomRight: function() {
            return this.max;
          },
          // @method getSize(): Point
          // Returns the size of the given bounds
          getSize: function() {
            return this.max.subtract(this.min);
          },
          // @method contains(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle contains the given one.
          // @alternative
          // @method contains(point: Point): Boolean
          // Returns `true` if the rectangle contains the given point.
          contains: function(obj) {
            var min, max;
            if (typeof obj[0] === "number" || obj instanceof Point) {
              obj = toPoint(obj);
            } else {
              obj = toBounds(obj);
            }
            if (obj instanceof Bounds) {
              min = obj.min;
              max = obj.max;
            } else {
              min = max = obj;
            }
            return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
          },
          // @method intersects(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle intersects the given bounds. Two bounds
          // intersect if they have at least one point in common.
          intersects: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xIntersects = max2.x >= min.x && min2.x <= max.x, yIntersects = max2.y >= min.y && min2.y <= max.y;
            return xIntersects && yIntersects;
          },
          // @method overlaps(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle overlaps the given bounds. Two bounds
          // overlap if their intersection is an area.
          overlaps: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xOverlaps = max2.x > min.x && min2.x < max.x, yOverlaps = max2.y > min.y && min2.y < max.y;
            return xOverlaps && yOverlaps;
          },
          // @method isValid(): Boolean
          // Returns `true` if the bounds are properly initialized.
          isValid: function() {
            return !!(this.min && this.max);
          },
          // @method pad(bufferRatio: Number): Bounds
          // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
          // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
          // Negative values will retract the bounds.
          pad: function(bufferRatio) {
            var min = this.min, max = this.max, heightBuffer = Math.abs(min.x - max.x) * bufferRatio, widthBuffer = Math.abs(min.y - max.y) * bufferRatio;
            return toBounds(
              toPoint(min.x - heightBuffer, min.y - widthBuffer),
              toPoint(max.x + heightBuffer, max.y + widthBuffer)
            );
          },
          // @method equals(otherBounds: Bounds): Boolean
          // Returns `true` if the rectangle is equivalent to the given bounds.
          equals: function(bounds) {
            if (!bounds) {
              return false;
            }
            bounds = toBounds(bounds);
            return this.min.equals(bounds.getTopLeft()) && this.max.equals(bounds.getBottomRight());
          }
        };
        function toBounds(a, b) {
          if (!a || a instanceof Bounds) {
            return a;
          }
          return new Bounds(a, b);
        }
        function LatLngBounds(corner1, corner2) {
          if (!corner1) {
            return;
          }
          var latlngs = corner2 ? [corner1, corner2] : corner1;
          for (var i = 0, len = latlngs.length; i < len; i++) {
            this.extend(latlngs[i]);
          }
        }
        LatLngBounds.prototype = {
          // @method extend(latlng: LatLng): this
          // Extend the bounds to contain the given point
          // @alternative
          // @method extend(otherBounds: LatLngBounds): this
          // Extend the bounds to contain the given bounds
          extend: function(obj) {
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLng) {
              sw2 = obj;
              ne2 = obj;
            } else if (obj instanceof LatLngBounds) {
              sw2 = obj._southWest;
              ne2 = obj._northEast;
              if (!sw2 || !ne2) {
                return this;
              }
            } else {
              return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
            }
            if (!sw && !ne) {
              this._southWest = new LatLng(sw2.lat, sw2.lng);
              this._northEast = new LatLng(ne2.lat, ne2.lng);
            } else {
              sw.lat = Math.min(sw2.lat, sw.lat);
              sw.lng = Math.min(sw2.lng, sw.lng);
              ne.lat = Math.max(ne2.lat, ne.lat);
              ne.lng = Math.max(ne2.lng, ne.lng);
            }
            return this;
          },
          // @method pad(bufferRatio: Number): LatLngBounds
          // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
          // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
          // Negative values will retract the bounds.
          pad: function(bufferRatio) {
            var sw = this._southWest, ne = this._northEast, heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio, widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
            return new LatLngBounds(
              new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
              new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer)
            );
          },
          // @method getCenter(): LatLng
          // Returns the center point of the bounds.
          getCenter: function() {
            return new LatLng(
              (this._southWest.lat + this._northEast.lat) / 2,
              (this._southWest.lng + this._northEast.lng) / 2
            );
          },
          // @method getSouthWest(): LatLng
          // Returns the south-west point of the bounds.
          getSouthWest: function() {
            return this._southWest;
          },
          // @method getNorthEast(): LatLng
          // Returns the north-east point of the bounds.
          getNorthEast: function() {
            return this._northEast;
          },
          // @method getNorthWest(): LatLng
          // Returns the north-west point of the bounds.
          getNorthWest: function() {
            return new LatLng(this.getNorth(), this.getWest());
          },
          // @method getSouthEast(): LatLng
          // Returns the south-east point of the bounds.
          getSouthEast: function() {
            return new LatLng(this.getSouth(), this.getEast());
          },
          // @method getWest(): Number
          // Returns the west longitude of the bounds
          getWest: function() {
            return this._southWest.lng;
          },
          // @method getSouth(): Number
          // Returns the south latitude of the bounds
          getSouth: function() {
            return this._southWest.lat;
          },
          // @method getEast(): Number
          // Returns the east longitude of the bounds
          getEast: function() {
            return this._northEast.lng;
          },
          // @method getNorth(): Number
          // Returns the north latitude of the bounds
          getNorth: function() {
            return this._northEast.lat;
          },
          // @method contains(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle contains the given one.
          // @alternative
          // @method contains (latlng: LatLng): Boolean
          // Returns `true` if the rectangle contains the given point.
          contains: function(obj) {
            if (typeof obj[0] === "number" || obj instanceof LatLng || "lat" in obj) {
              obj = toLatLng(obj);
            } else {
              obj = toLatLngBounds(obj);
            }
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLngBounds) {
              sw2 = obj.getSouthWest();
              ne2 = obj.getNorthEast();
            } else {
              sw2 = ne2 = obj;
            }
            return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
          },
          // @method intersects(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
          intersects: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat, lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
            return latIntersects && lngIntersects;
          },
          // @method overlaps(otherBounds: LatLngBounds): Boolean
          // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
          overlaps: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat, lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
            return latOverlaps && lngOverlaps;
          },
          // @method toBBoxString(): String
          // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
          toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
          },
          // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
          // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
          equals: function(bounds, maxMargin) {
            if (!bounds) {
              return false;
            }
            bounds = toLatLngBounds(bounds);
            return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
          },
          // @method isValid(): Boolean
          // Returns `true` if the bounds are properly initialized.
          isValid: function() {
            return !!(this._southWest && this._northEast);
          }
        };
        function toLatLngBounds(a, b) {
          if (a instanceof LatLngBounds) {
            return a;
          }
          return new LatLngBounds(a, b);
        }
        function LatLng(lat, lng, alt) {
          if (isNaN(lat) || isNaN(lng)) {
            throw new Error("Invalid LatLng object: (" + lat + ", " + lng + ")");
          }
          this.lat = +lat;
          this.lng = +lng;
          if (alt !== void 0) {
            this.alt = +alt;
          }
        }
        LatLng.prototype = {
          // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
          // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
          equals: function(obj, maxMargin) {
            if (!obj) {
              return false;
            }
            obj = toLatLng(obj);
            var margin = Math.max(
              Math.abs(this.lat - obj.lat),
              Math.abs(this.lng - obj.lng)
            );
            return margin <= (maxMargin === void 0 ? 1e-9 : maxMargin);
          },
          // @method toString(): String
          // Returns a string representation of the point (for debugging purposes).
          toString: function(precision) {
            return "LatLng(" + formatNum(this.lat, precision) + ", " + formatNum(this.lng, precision) + ")";
          },
          // @method distanceTo(otherLatLng: LatLng): Number
          // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
          distanceTo: function(other) {
            return Earth.distance(this, toLatLng(other));
          },
          // @method wrap(): LatLng
          // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
          wrap: function() {
            return Earth.wrapLatLng(this);
          },
          // @method toBounds(sizeInMeters: Number): LatLngBounds
          // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
          toBounds: function(sizeInMeters) {
            var latAccuracy = 180 * sizeInMeters / 40075017, lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
            return toLatLngBounds(
              [this.lat - latAccuracy, this.lng - lngAccuracy],
              [this.lat + latAccuracy, this.lng + lngAccuracy]
            );
          },
          clone: function() {
            return new LatLng(this.lat, this.lng, this.alt);
          }
        };
        function toLatLng(a, b, c) {
          if (a instanceof LatLng) {
            return a;
          }
          if (isArray2(a) && typeof a[0] !== "object") {
            if (a.length === 3) {
              return new LatLng(a[0], a[1], a[2]);
            }
            if (a.length === 2) {
              return new LatLng(a[0], a[1]);
            }
            return null;
          }
          if (a === void 0 || a === null) {
            return a;
          }
          if (typeof a === "object" && "lat" in a) {
            return new LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt);
          }
          if (b === void 0) {
            return null;
          }
          return new LatLng(a, b, c);
        }
        var CRS = {
          // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
          // Projects geographical coordinates into pixel coordinates for a given zoom.
          latLngToPoint: function(latlng, zoom2) {
            var projectedPoint = this.projection.project(latlng), scale2 = this.scale(zoom2);
            return this.transformation._transform(projectedPoint, scale2);
          },
          // @method pointToLatLng(point: Point, zoom: Number): LatLng
          // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
          // zoom into geographical coordinates.
          pointToLatLng: function(point, zoom2) {
            var scale2 = this.scale(zoom2), untransformedPoint = this.transformation.untransform(point, scale2);
            return this.projection.unproject(untransformedPoint);
          },
          // @method project(latlng: LatLng): Point
          // Projects geographical coordinates into coordinates in units accepted for
          // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
          project: function(latlng) {
            return this.projection.project(latlng);
          },
          // @method unproject(point: Point): LatLng
          // Given a projected coordinate returns the corresponding LatLng.
          // The inverse of `project`.
          unproject: function(point) {
            return this.projection.unproject(point);
          },
          // @method scale(zoom: Number): Number
          // Returns the scale used when transforming projected coordinates into
          // pixel coordinates for a particular zoom. For example, it returns
          // `256 * 2^zoom` for Mercator-based CRS.
          scale: function(zoom2) {
            return 256 * Math.pow(2, zoom2);
          },
          // @method zoom(scale: Number): Number
          // Inverse of `scale()`, returns the zoom level corresponding to a scale
          // factor of `scale`.
          zoom: function(scale2) {
            return Math.log(scale2 / 256) / Math.LN2;
          },
          // @method getProjectedBounds(zoom: Number): Bounds
          // Returns the projection's bounds scaled and transformed for the provided `zoom`.
          getProjectedBounds: function(zoom2) {
            if (this.infinite) {
              return null;
            }
            var b = this.projection.bounds, s = this.scale(zoom2), min = this.transformation.transform(b.min, s), max = this.transformation.transform(b.max, s);
            return new Bounds(min, max);
          },
          // @method distance(latlng1: LatLng, latlng2: LatLng): Number
          // Returns the distance between two geographical coordinates.
          // @property code: String
          // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
          //
          // @property wrapLng: Number[]
          // An array of two numbers defining whether the longitude (horizontal) coordinate
          // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
          // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
          //
          // @property wrapLat: Number[]
          // Like `wrapLng`, but for the latitude (vertical) axis.
          // wrapLng: [min, max],
          // wrapLat: [min, max],
          // @property infinite: Boolean
          // If true, the coordinate space will be unbounded (infinite in both axes)
          infinite: false,
          // @method wrapLatLng(latlng: LatLng): LatLng
          // Returns a `LatLng` where lat and lng has been wrapped according to the
          // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
          wrapLatLng: function(latlng) {
            var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng, lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat, alt = latlng.alt;
            return new LatLng(lat, lng, alt);
          },
          // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
          // Returns a `LatLngBounds` with the same size as the given one, ensuring
          // that its center is within the CRS's bounds.
          // Only accepts actual `L.LatLngBounds` instances, not arrays.
          wrapLatLngBounds: function(bounds) {
            var center = bounds.getCenter(), newCenter = this.wrapLatLng(center), latShift = center.lat - newCenter.lat, lngShift = center.lng - newCenter.lng;
            if (latShift === 0 && lngShift === 0) {
              return bounds;
            }
            var sw = bounds.getSouthWest(), ne = bounds.getNorthEast(), newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift), newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
            return new LatLngBounds(newSw, newNe);
          }
        };
        var Earth = extend2({}, CRS, {
          wrapLng: [-180, 180],
          // Mean Earth Radius, as recommended for use by
          // the International Union of Geodesy and Geophysics,
          // see https://rosettacode.org/wiki/Haversine_formula
          R: 6371e3,
          // distance between two geographical points using spherical law of cosines approximation
          distance: function(latlng1, latlng2) {
            var rad = Math.PI / 180, lat1 = latlng1.lat * rad, lat2 = latlng2.lat * rad, sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2), sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * c;
          }
        });
        var earthRadius = 6378137;
        var SphericalMercator = {
          R: earthRadius,
          MAX_LATITUDE: 85.0511287798,
          project: function(latlng) {
            var d = Math.PI / 180, max = this.MAX_LATITUDE, lat = Math.max(Math.min(max, latlng.lat), -max), sin = Math.sin(lat * d);
            return new Point(
              this.R * latlng.lng * d,
              this.R * Math.log((1 + sin) / (1 - sin)) / 2
            );
          },
          unproject: function(point) {
            var d = 180 / Math.PI;
            return new LatLng(
              (2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d,
              point.x * d / this.R
            );
          },
          bounds: (function() {
            var d = earthRadius * Math.PI;
            return new Bounds([-d, -d], [d, d]);
          })()
        };
        function Transformation(a, b, c, d) {
          if (isArray2(a)) {
            this._a = a[0];
            this._b = a[1];
            this._c = a[2];
            this._d = a[3];
            return;
          }
          this._a = a;
          this._b = b;
          this._c = c;
          this._d = d;
        }
        Transformation.prototype = {
          // @method transform(point: Point, scale?: Number): Point
          // Returns a transformed point, optionally multiplied by the given scale.
          // Only accepts actual `L.Point` instances, not arrays.
          transform: function(point, scale2) {
            return this._transform(point.clone(), scale2);
          },
          // destructive transform (faster)
          _transform: function(point, scale2) {
            scale2 = scale2 || 1;
            point.x = scale2 * (this._a * point.x + this._b);
            point.y = scale2 * (this._c * point.y + this._d);
            return point;
          },
          // @method untransform(point: Point, scale?: Number): Point
          // Returns the reverse transformation of the given point, optionally divided
          // by the given scale. Only accepts actual `L.Point` instances, not arrays.
          untransform: function(point, scale2) {
            scale2 = scale2 || 1;
            return new Point(
              (point.x / scale2 - this._b) / this._a,
              (point.y / scale2 - this._d) / this._c
            );
          }
        };
        function toTransformation(a, b, c, d) {
          return new Transformation(a, b, c, d);
        }
        var EPSG3857 = extend2({}, Earth, {
          code: "EPSG:3857",
          projection: SphericalMercator,
          transformation: (function() {
            var scale2 = 0.5 / (Math.PI * SphericalMercator.R);
            return toTransformation(scale2, 0.5, -scale2, 0.5);
          })()
        });
        var EPSG900913 = extend2({}, EPSG3857, {
          code: "EPSG:900913"
        });
        function svgCreate(name) {
          return document.createElementNS("http://www.w3.org/2000/svg", name);
        }
        function pointsToPath(rings, closed) {
          var str = "", i, j, len, len2, points, p;
          for (i = 0, len = rings.length; i < len; i++) {
            points = rings[i];
            for (j = 0, len2 = points.length; j < len2; j++) {
              p = points[j];
              str += (j ? "L" : "M") + p.x + " " + p.y;
            }
            str += closed ? Browser.svg ? "z" : "x" : "";
          }
          return str || "M0 0";
        }
        var style = document.documentElement.style;
        var ie = "ActiveXObject" in window;
        var ielt9 = ie && !document.addEventListener;
        var edge = "msLaunchUri" in navigator && !("documentMode" in document);
        var webkit = userAgentContains("webkit");
        var android = userAgentContains("android");
        var android23 = userAgentContains("android 2") || userAgentContains("android 3");
        var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10);
        var androidStock = android && userAgentContains("Google") && webkitVer < 537 && !("AudioNode" in window);
        var opera = !!window.opera;
        var chrome = !edge && userAgentContains("chrome");
        var gecko = userAgentContains("gecko") && !webkit && !opera && !ie;
        var safari = !chrome && userAgentContains("safari");
        var phantom = userAgentContains("phantom");
        var opera12 = "OTransition" in style;
        var win = navigator.platform.indexOf("Win") === 0;
        var ie3d = ie && "transition" in style;
        var webkit3d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !android23;
        var gecko3d = "MozPerspective" in style;
        var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;
        var mobile = typeof orientation !== "undefined" || userAgentContains("mobile");
        var mobileWebkit = mobile && webkit;
        var mobileWebkit3d = mobile && webkit3d;
        var msPointer = !window.PointerEvent && window.MSPointerEvent;
        var pointer = !!(window.PointerEvent || msPointer);
        var touchNative = "ontouchstart" in window || !!window.TouchEvent;
        var touch = !window.L_NO_TOUCH && (touchNative || pointer);
        var mobileOpera = mobile && opera;
        var mobileGecko = mobile && gecko;
        var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
        var passiveEvents = (function() {
          var supportsPassiveOption = false;
          try {
            var opts = Object.defineProperty({}, "passive", {
              get: function() {
                supportsPassiveOption = true;
              }
            });
            window.addEventListener("testPassiveEventSupport", falseFn, opts);
            window.removeEventListener("testPassiveEventSupport", falseFn, opts);
          } catch (e) {
          }
          return supportsPassiveOption;
        })();
        var canvas$1 = (function() {
          return !!document.createElement("canvas").getContext;
        })();
        var svg$1 = !!(document.createElementNS && svgCreate("svg").createSVGRect);
        var inlineSvg = !!svg$1 && (function() {
          var div = document.createElement("div");
          div.innerHTML = "<svg/>";
          return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
        })();
        var vml = !svg$1 && (function() {
          try {
            var div = document.createElement("div");
            div.innerHTML = '<v:shape adj="1"/>';
            var shape = div.firstChild;
            shape.style.behavior = "url(#default#VML)";
            return shape && typeof shape.adj === "object";
          } catch (e) {
            return false;
          }
        })();
        var mac = navigator.platform.indexOf("Mac") === 0;
        var linux = navigator.platform.indexOf("Linux") === 0;
        function userAgentContains(str) {
          return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
        }
        var Browser = {
          ie,
          ielt9,
          edge,
          webkit,
          android,
          android23,
          androidStock,
          opera,
          chrome,
          gecko,
          safari,
          phantom,
          opera12,
          win,
          ie3d,
          webkit3d,
          gecko3d,
          any3d,
          mobile,
          mobileWebkit,
          mobileWebkit3d,
          msPointer,
          pointer,
          touch,
          touchNative,
          mobileOpera,
          mobileGecko,
          retina,
          passiveEvents,
          canvas: canvas$1,
          svg: svg$1,
          vml,
          inlineSvg,
          mac,
          linux
        };
        var POINTER_DOWN = Browser.msPointer ? "MSPointerDown" : "pointerdown";
        var POINTER_MOVE = Browser.msPointer ? "MSPointerMove" : "pointermove";
        var POINTER_UP = Browser.msPointer ? "MSPointerUp" : "pointerup";
        var POINTER_CANCEL = Browser.msPointer ? "MSPointerCancel" : "pointercancel";
        var pEvent = {
          touchstart: POINTER_DOWN,
          touchmove: POINTER_MOVE,
          touchend: POINTER_UP,
          touchcancel: POINTER_CANCEL
        };
        var handle = {
          touchstart: _onPointerStart,
          touchmove: _handlePointer,
          touchend: _handlePointer,
          touchcancel: _handlePointer
        };
        var _pointers = {};
        var _pointerDocListener = false;
        function addPointerListener(obj, type, handler) {
          if (type === "touchstart") {
            _addPointerDocListener();
          }
          if (!handle[type]) {
            console.warn("wrong event specified:", type);
            return falseFn;
          }
          handler = handle[type].bind(this, handler);
          obj.addEventListener(pEvent[type], handler, false);
          return handler;
        }
        function removePointerListener(obj, type, handler) {
          if (!pEvent[type]) {
            console.warn("wrong event specified:", type);
            return;
          }
          obj.removeEventListener(pEvent[type], handler, false);
        }
        function _globalPointerDown(e) {
          _pointers[e.pointerId] = e;
        }
        function _globalPointerMove(e) {
          if (_pointers[e.pointerId]) {
            _pointers[e.pointerId] = e;
          }
        }
        function _globalPointerUp(e) {
          delete _pointers[e.pointerId];
        }
        function _addPointerDocListener() {
          if (!_pointerDocListener) {
            document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
            document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
            document.addEventListener(POINTER_UP, _globalPointerUp, true);
            document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
            _pointerDocListener = true;
          }
        }
        function _handlePointer(handler, e) {
          if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
            return;
          }
          e.touches = [];
          for (var i in _pointers) {
            e.touches.push(_pointers[i]);
          }
          e.changedTouches = [e];
          handler(e);
        }
        function _onPointerStart(handler, e) {
          if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) {
            preventDefault(e);
          }
          _handlePointer(handler, e);
        }
        function makeDblclick(event) {
          var newEvent = {}, prop, i;
          for (i in event) {
            prop = event[i];
            newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;
          }
          event = newEvent;
          newEvent.type = "dblclick";
          newEvent.detail = 2;
          newEvent.isTrusted = false;
          newEvent._simulated = true;
          return newEvent;
        }
        var delay = 200;
        function addDoubleTapListener(obj, handler) {
          obj.addEventListener("dblclick", handler);
          var last = 0, detail;
          function simDblclick(e) {
            if (e.detail !== 1) {
              detail = e.detail;
              return;
            }
            if (e.pointerType === "mouse" || e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) {
              return;
            }
            var path = getPropagationPath(e);
            if (path.some(function(el) {
              return el instanceof HTMLLabelElement && el.attributes.for;
            }) && !path.some(function(el) {
              return el instanceof HTMLInputElement || el instanceof HTMLSelectElement;
            })) {
              return;
            }
            var now = Date.now();
            if (now - last <= delay) {
              detail++;
              if (detail === 2) {
                handler(makeDblclick(e));
              }
            } else {
              detail = 1;
            }
            last = now;
          }
          obj.addEventListener("click", simDblclick);
          return {
            dblclick: handler,
            simDblclick
          };
        }
        function removeDoubleTapListener(obj, handlers) {
          obj.removeEventListener("dblclick", handlers.dblclick);
          obj.removeEventListener("click", handlers.simDblclick);
        }
        var TRANSFORM = testProp(
          ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
        );
        var TRANSITION = testProp(
          ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
        );
        var TRANSITION_END = TRANSITION === "webkitTransition" || TRANSITION === "OTransition" ? TRANSITION + "End" : "transitionend";
        function get(id) {
          return typeof id === "string" ? document.getElementById(id) : id;
        }
        function getStyle(el, style2) {
          var value = el.style[style2] || el.currentStyle && el.currentStyle[style2];
          if ((!value || value === "auto") && document.defaultView) {
            var css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style2] : null;
          }
          return value === "auto" ? null : value;
        }
        function create$1(tagName, className, container) {
          var el = document.createElement(tagName);
          el.className = className || "";
          if (container) {
            container.appendChild(el);
          }
          return el;
        }
        function remove(el) {
          var parent = el.parentNode;
          if (parent) {
            parent.removeChild(el);
          }
        }
        function empty(el) {
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
        }
        function toFront(el) {
          var parent = el.parentNode;
          if (parent && parent.lastChild !== el) {
            parent.appendChild(el);
          }
        }
        function toBack(el) {
          var parent = el.parentNode;
          if (parent && parent.firstChild !== el) {
            parent.insertBefore(el, parent.firstChild);
          }
        }
        function hasClass(el, name) {
          if (el.classList !== void 0) {
            return el.classList.contains(name);
          }
          var className = getClass(el);
          return className.length > 0 && new RegExp("(^|\\s)" + name + "(\\s|$)").test(className);
        }
        function addClass(el, name) {
          if (el.classList !== void 0) {
            var classes = splitWords(name);
            for (var i = 0, len = classes.length; i < len; i++) {
              el.classList.add(classes[i]);
            }
          } else if (!hasClass(el, name)) {
            var className = getClass(el);
            setClass(el, (className ? className + " " : "") + name);
          }
        }
        function removeClass(el, name) {
          if (el.classList !== void 0) {
            el.classList.remove(name);
          } else {
            setClass(el, trim2((" " + getClass(el) + " ").replace(" " + name + " ", " ")));
          }
        }
        function setClass(el, name) {
          if (el.className.baseVal === void 0) {
            el.className = name;
          } else {
            el.className.baseVal = name;
          }
        }
        function getClass(el) {
          if (el.correspondingElement) {
            el = el.correspondingElement;
          }
          return el.className.baseVal === void 0 ? el.className : el.className.baseVal;
        }
        function setOpacity(el, value) {
          if ("opacity" in el.style) {
            el.style.opacity = value;
          } else if ("filter" in el.style) {
            _setOpacityIE(el, value);
          }
        }
        function _setOpacityIE(el, value) {
          var filter2 = false, filterName = "DXImageTransform.Microsoft.Alpha";
          try {
            filter2 = el.filters.item(filterName);
          } catch (e) {
            if (value === 1) {
              return;
            }
          }
          value = Math.round(value * 100);
          if (filter2) {
            filter2.Enabled = value !== 100;
            filter2.Opacity = value;
          } else {
            el.style.filter += " progid:" + filterName + "(opacity=" + value + ")";
          }
        }
        function testProp(props) {
          var style2 = document.documentElement.style;
          for (var i = 0; i < props.length; i++) {
            if (props[i] in style2) {
              return props[i];
            }
          }
          return false;
        }
        function setTransform(el, offset, scale2) {
          var pos = offset || new Point(0, 0);
          el.style[TRANSFORM] = (Browser.ie3d ? "translate(" + pos.x + "px," + pos.y + "px)" : "translate3d(" + pos.x + "px," + pos.y + "px,0)") + (scale2 ? " scale(" + scale2 + ")" : "");
        }
        function setPosition(el, point) {
          el._leaflet_pos = point;
          if (Browser.any3d) {
            setTransform(el, point);
          } else {
            el.style.left = point.x + "px";
            el.style.top = point.y + "px";
          }
        }
        function getPosition(el) {
          return el._leaflet_pos || new Point(0, 0);
        }
        var disableTextSelection;
        var enableTextSelection;
        var _userSelect;
        if ("onselectstart" in document) {
          disableTextSelection = function() {
            on(window, "selectstart", preventDefault);
          };
          enableTextSelection = function() {
            off(window, "selectstart", preventDefault);
          };
        } else {
          var userSelectProperty = testProp(
            ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
          );
          disableTextSelection = function() {
            if (userSelectProperty) {
              var style2 = document.documentElement.style;
              _userSelect = style2[userSelectProperty];
              style2[userSelectProperty] = "none";
            }
          };
          enableTextSelection = function() {
            if (userSelectProperty) {
              document.documentElement.style[userSelectProperty] = _userSelect;
              _userSelect = void 0;
            }
          };
        }
        function disableImageDrag() {
          on(window, "dragstart", preventDefault);
        }
        function enableImageDrag() {
          off(window, "dragstart", preventDefault);
        }
        var _outlineElement, _outlineStyle;
        function preventOutline(element) {
          while (element.tabIndex === -1) {
            element = element.parentNode;
          }
          if (!element.style) {
            return;
          }
          restoreOutline();
          _outlineElement = element;
          _outlineStyle = element.style.outlineStyle;
          element.style.outlineStyle = "none";
          on(window, "keydown", restoreOutline);
        }
        function restoreOutline() {
          if (!_outlineElement) {
            return;
          }
          _outlineElement.style.outlineStyle = _outlineStyle;
          _outlineElement = void 0;
          _outlineStyle = void 0;
          off(window, "keydown", restoreOutline);
        }
        function getSizedParentNode(element) {
          do {
            element = element.parentNode;
          } while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
          return element;
        }
        function getScale(element) {
          var rect = element.getBoundingClientRect();
          return {
            x: rect.width / element.offsetWidth || 1,
            y: rect.height / element.offsetHeight || 1,
            boundingClientRect: rect
          };
        }
        var DomUtil = {
          __proto__: null,
          TRANSFORM,
          TRANSITION,
          TRANSITION_END,
          get,
          getStyle,
          create: create$1,
          remove,
          empty,
          toFront,
          toBack,
          hasClass,
          addClass,
          removeClass,
          setClass,
          getClass,
          setOpacity,
          testProp,
          setTransform,
          setPosition,
          getPosition,
          get disableTextSelection() {
            return disableTextSelection;
          },
          get enableTextSelection() {
            return enableTextSelection;
          },
          disableImageDrag,
          enableImageDrag,
          preventOutline,
          restoreOutline,
          getSizedParentNode,
          getScale
        };
        function on(obj, types, fn, context) {
          if (types && typeof types === "object") {
            for (var type in types) {
              addOne(obj, type, types[type], fn);
            }
          } else {
            types = splitWords(types);
            for (var i = 0, len = types.length; i < len; i++) {
              addOne(obj, types[i], fn, context);
            }
          }
          return this;
        }
        var eventsKey = "_leaflet_events";
        function off(obj, types, fn, context) {
          if (arguments.length === 1) {
            batchRemove(obj);
            delete obj[eventsKey];
          } else if (types && typeof types === "object") {
            for (var type in types) {
              removeOne(obj, type, types[type], fn);
            }
          } else {
            types = splitWords(types);
            if (arguments.length === 2) {
              batchRemove(obj, function(type2) {
                return indexOf(types, type2) !== -1;
              });
            } else {
              for (var i = 0, len = types.length; i < len; i++) {
                removeOne(obj, types[i], fn, context);
              }
            }
          }
          return this;
        }
        function batchRemove(obj, filterFn) {
          for (var id in obj[eventsKey]) {
            var type = id.split(/\d/)[0];
            if (!filterFn || filterFn(type)) {
              removeOne(obj, type, null, null, id);
            }
          }
        }
        var mouseSubst = {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          wheel: !("onwheel" in window) && "mousewheel"
        };
        function addOne(obj, type, fn, context) {
          var id = type + stamp(fn) + (context ? "_" + stamp(context) : "");
          if (obj[eventsKey] && obj[eventsKey][id]) {
            return this;
          }
          var handler = function(e) {
            return fn.call(context || obj, e || window.event);
          };
          var originalHandler = handler;
          if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) {
            handler = addPointerListener(obj, type, handler);
          } else if (Browser.touch && type === "dblclick") {
            handler = addDoubleTapListener(obj, handler);
          } else if ("addEventListener" in obj) {
            if (type === "touchstart" || type === "touchmove" || type === "wheel" || type === "mousewheel") {
              obj.addEventListener(mouseSubst[type] || type, handler, Browser.passiveEvents ? { passive: false } : false);
            } else if (type === "mouseenter" || type === "mouseleave") {
              handler = function(e) {
                e = e || window.event;
                if (isExternalTarget(obj, e)) {
                  originalHandler(e);
                }
              };
              obj.addEventListener(mouseSubst[type], handler, false);
            } else {
              obj.addEventListener(type, originalHandler, false);
            }
          } else {
            obj.attachEvent("on" + type, handler);
          }
          obj[eventsKey] = obj[eventsKey] || {};
          obj[eventsKey][id] = handler;
        }
        function removeOne(obj, type, fn, context, id) {
          id = id || type + stamp(fn) + (context ? "_" + stamp(context) : "");
          var handler = obj[eventsKey] && obj[eventsKey][id];
          if (!handler) {
            return this;
          }
          if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) {
            removePointerListener(obj, type, handler);
          } else if (Browser.touch && type === "dblclick") {
            removeDoubleTapListener(obj, handler);
          } else if ("removeEventListener" in obj) {
            obj.removeEventListener(mouseSubst[type] || type, handler, false);
          } else {
            obj.detachEvent("on" + type, handler);
          }
          obj[eventsKey][id] = null;
        }
        function stopPropagation(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else if (e.originalEvent) {
            e.originalEvent._stopped = true;
          } else {
            e.cancelBubble = true;
          }
          return this;
        }
        function disableScrollPropagation(el) {
          addOne(el, "wheel", stopPropagation);
          return this;
        }
        function disableClickPropagation(el) {
          on(el, "mousedown touchstart dblclick contextmenu", stopPropagation);
          el["_leaflet_disable_click"] = true;
          return this;
        }
        function preventDefault(e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
          return this;
        }
        function stop(e) {
          preventDefault(e);
          stopPropagation(e);
          return this;
        }
        function getPropagationPath(ev) {
          if (ev.composedPath) {
            return ev.composedPath();
          }
          var path = [];
          var el = ev.target;
          while (el) {
            path.push(el);
            el = el.parentNode;
          }
          return path;
        }
        function getMousePosition(e, container) {
          if (!container) {
            return new Point(e.clientX, e.clientY);
          }
          var scale2 = getScale(container), offset = scale2.boundingClientRect;
          return new Point(
            // offset.left/top values are in page scale (like clientX/Y),
            // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
            (e.clientX - offset.left) / scale2.x - container.clientLeft,
            (e.clientY - offset.top) / scale2.y - container.clientTop
          );
        }
        var wheelPxFactor = Browser.linux && Browser.chrome ? window.devicePixelRatio : Browser.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
        function getWheelDelta(e) {
          return Browser.edge ? e.wheelDeltaY / 2 : (
            // Don't trust window-geometry-based delta
            e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : (
              // Pixels
              e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : (
                // Lines
                e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : (
                  // Pages
                  e.deltaX || e.deltaZ ? 0 : (
                    // Skip horizontal/depth wheel events
                    e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : (
                      // Legacy IE pixels
                      e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : (
                        // Legacy Moz lines
                        e.detail ? e.detail / -32765 * 60 : (
                          // Legacy Moz pages
                          0
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }
        function isExternalTarget(el, e) {
          var related = e.relatedTarget;
          if (!related) {
            return true;
          }
          try {
            while (related && related !== el) {
              related = related.parentNode;
            }
          } catch (err) {
            return false;
          }
          return related !== el;
        }
        var DomEvent = {
          __proto__: null,
          on,
          off,
          stopPropagation,
          disableScrollPropagation,
          disableClickPropagation,
          preventDefault,
          stop,
          getPropagationPath,
          getMousePosition,
          getWheelDelta,
          isExternalTarget,
          addListener: on,
          removeListener: off
        };
        var PosAnimation = Evented.extend({
          // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
          // Run an animation of a given element to a new position, optionally setting
          // duration in seconds (`0.25` by default) and easing linearity factor (3rd
          // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
          // `0.5` by default).
          run: function(el, newPos, duration, easeLinearity) {
            this.stop();
            this._el = el;
            this._inProgress = true;
            this._duration = duration || 0.25;
            this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
            this._startPos = getPosition(el);
            this._offset = newPos.subtract(this._startPos);
            this._startTime = +/* @__PURE__ */ new Date();
            this.fire("start");
            this._animate();
          },
          // @method stop()
          // Stops the animation (if currently running).
          stop: function() {
            if (!this._inProgress) {
              return;
            }
            this._step(true);
            this._complete();
          },
          _animate: function() {
            this._animId = requestAnimFrame(this._animate, this);
            this._step();
          },
          _step: function(round) {
            var elapsed = +/* @__PURE__ */ new Date() - this._startTime, duration = this._duration * 1e3;
            if (elapsed < duration) {
              this._runFrame(this._easeOut(elapsed / duration), round);
            } else {
              this._runFrame(1);
              this._complete();
            }
          },
          _runFrame: function(progress, round) {
            var pos = this._startPos.add(this._offset.multiplyBy(progress));
            if (round) {
              pos._round();
            }
            setPosition(this._el, pos);
            this.fire("step");
          },
          _complete: function() {
            cancelAnimFrame(this._animId);
            this._inProgress = false;
            this.fire("end");
          },
          _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
          }
        });
        var Map2 = Evented.extend({
          options: {
            // @section Map State Options
            // @option crs: CRS = L.CRS.EPSG3857
            // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
            // sure what it means.
            crs: EPSG3857,
            // @option center: LatLng = undefined
            // Initial geographic center of the map
            center: void 0,
            // @option zoom: Number = undefined
            // Initial map zoom level
            zoom: void 0,
            // @option minZoom: Number = *
            // Minimum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the lowest of their `minZoom` options will be used instead.
            minZoom: void 0,
            // @option maxZoom: Number = *
            // Maximum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the highest of their `maxZoom` options will be used instead.
            maxZoom: void 0,
            // @option layers: Layer[] = []
            // Array of layers that will be added to the map initially
            layers: [],
            // @option maxBounds: LatLngBounds = null
            // When this option is set, the map restricts the view to the given
            // geographical bounds, bouncing the user back if the user tries to pan
            // outside the view. To set the restriction dynamically, use
            // [`setMaxBounds`](#map-setmaxbounds) method.
            maxBounds: void 0,
            // @option renderer: Renderer = *
            // The default method for drawing vector layers on the map. `L.SVG`
            // or `L.Canvas` by default depending on browser support.
            renderer: void 0,
            // @section Animation Options
            // @option zoomAnimation: Boolean = true
            // Whether the map zoom animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            zoomAnimation: true,
            // @option zoomAnimationThreshold: Number = 4
            // Won't animate zoom if the zoom difference exceeds this value.
            zoomAnimationThreshold: 4,
            // @option fadeAnimation: Boolean = true
            // Whether the tile fade animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            fadeAnimation: true,
            // @option markerZoomAnimation: Boolean = true
            // Whether markers animate their zoom with the zoom animation, if disabled
            // they will disappear for the length of the animation. By default it's
            // enabled in all browsers that support CSS3 Transitions except Android.
            markerZoomAnimation: true,
            // @option transform3DLimit: Number = 2^23
            // Defines the maximum size of a CSS translation transform. The default
            // value should not be changed unless a web browser positions layers in
            // the wrong place after doing a large `panBy`.
            transform3DLimit: 8388608,
            // Precision limit of a 32-bit float
            // @section Interaction Options
            // @option zoomSnap: Number = 1
            // Forces the map's zoom level to always be a multiple of this, particularly
            // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
            // By default, the zoom level snaps to the nearest integer; lower values
            // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
            // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
            zoomSnap: 1,
            // @option zoomDelta: Number = 1
            // Controls how much the map's zoom level will change after a
            // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
            // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
            // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
            zoomDelta: 1,
            // @option trackResize: Boolean = true
            // Whether the map automatically handles browser window resize to update itself.
            trackResize: true
          },
          initialize: function(id, options) {
            options = setOptions(this, options);
            this._handlers = [];
            this._layers = {};
            this._zoomBoundLayers = {};
            this._sizeChanged = true;
            this._initContainer(id);
            this._initLayout();
            this._onResize = bind2(this._onResize, this);
            this._initEvents();
            if (options.maxBounds) {
              this.setMaxBounds(options.maxBounds);
            }
            if (options.zoom !== void 0) {
              this._zoom = this._limitZoom(options.zoom);
            }
            if (options.center && options.zoom !== void 0) {
              this.setView(toLatLng(options.center), options.zoom, { reset: true });
            }
            this.callInitHooks();
            this._zoomAnimated = TRANSITION && Browser.any3d && !Browser.mobileOpera && this.options.zoomAnimation;
            if (this._zoomAnimated) {
              this._createAnimProxy();
              on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
            }
            this._addLayers(this.options.layers);
          },
          // @section Methods for modifying map state
          // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
          // Sets the view of the map (geographical center and zoom) with the given
          // animation options.
          setView: function(center, zoom2, options) {
            zoom2 = zoom2 === void 0 ? this._zoom : this._limitZoom(zoom2);
            center = this._limitCenter(toLatLng(center), zoom2, this.options.maxBounds);
            options = options || {};
            this._stop();
            if (this._loaded && !options.reset && options !== true) {
              if (options.animate !== void 0) {
                options.zoom = extend2({ animate: options.animate }, options.zoom);
                options.pan = extend2({ animate: options.animate, duration: options.duration }, options.pan);
              }
              var moved = this._zoom !== zoom2 ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom2, options.zoom) : this._tryAnimatedPan(center, options.pan);
              if (moved) {
                clearTimeout(this._sizeTimer);
                return this;
              }
            }
            this._resetView(center, zoom2, options.pan && options.pan.noMoveStart);
            return this;
          },
          // @method setZoom(zoom: Number, options?: Zoom/pan options): this
          // Sets the zoom of the map.
          setZoom: function(zoom2, options) {
            if (!this._loaded) {
              this._zoom = zoom2;
              return this;
            }
            return this.setView(this.getCenter(), zoom2, { zoom: options });
          },
          // @method zoomIn(delta?: Number, options?: Zoom options): this
          // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
          zoomIn: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom + delta, options);
          },
          // @method zoomOut(delta?: Number, options?: Zoom options): this
          // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
          zoomOut: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom - delta, options);
          },
          // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
          // Zooms the map while keeping a specified geographical point on the map
          // stationary (e.g. used internally for scroll zoom and double-click zoom).
          // @alternative
          // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
          // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
          setZoomAround: function(latlng, zoom2, options) {
            var scale2 = this.getZoomScale(zoom2), viewHalf = this.getSize().divideBy(2), containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng), centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale2), newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
            return this.setView(newCenter, zoom2, { zoom: options });
          },
          _getBoundsCenterZoom: function(bounds, options) {
            options = options || {};
            bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]), zoom2 = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
            zoom2 = typeof options.maxZoom === "number" ? Math.min(options.maxZoom, zoom2) : zoom2;
            if (zoom2 === Infinity) {
              return {
                center: bounds.getCenter(),
                zoom: zoom2
              };
            }
            var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2), swPoint = this.project(bounds.getSouthWest(), zoom2), nePoint = this.project(bounds.getNorthEast(), zoom2), center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom2);
            return {
              center,
              zoom: zoom2
            };
          },
          // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
          // Sets a map view that contains the given geographical bounds with the
          // maximum zoom level possible.
          fitBounds: function(bounds, options) {
            bounds = toLatLngBounds(bounds);
            if (!bounds.isValid()) {
              throw new Error("Bounds are not valid.");
            }
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.setView(target.center, target.zoom, options);
          },
          // @method fitWorld(options?: fitBounds options): this
          // Sets a map view that mostly contains the whole world with the maximum
          // zoom level possible.
          fitWorld: function(options) {
            return this.fitBounds([[-90, -180], [90, 180]], options);
          },
          // @method panTo(latlng: LatLng, options?: Pan options): this
          // Pans the map to a given center.
          panTo: function(center, options) {
            return this.setView(center, this._zoom, { pan: options });
          },
          // @method panBy(offset: Point, options?: Pan options): this
          // Pans the map by a given number of pixels (animated).
          panBy: function(offset, options) {
            offset = toPoint(offset).round();
            options = options || {};
            if (!offset.x && !offset.y) {
              return this.fire("moveend");
            }
            if (options.animate !== true && !this.getSize().contains(offset)) {
              this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
              return this;
            }
            if (!this._panAnim) {
              this._panAnim = new PosAnimation();
              this._panAnim.on({
                "step": this._onPanTransitionStep,
                "end": this._onPanTransitionEnd
              }, this);
            }
            if (!options.noMoveStart) {
              this.fire("movestart");
            }
            if (options.animate !== false) {
              addClass(this._mapPane, "leaflet-pan-anim");
              var newPos = this._getMapPanePos().subtract(offset).round();
              this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
            } else {
              this._rawPanBy(offset);
              this.fire("move").fire("moveend");
            }
            return this;
          },
          // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
          // Sets the view of the map (geographical center and zoom) performing a smooth
          // pan-zoom animation.
          flyTo: function(targetCenter, targetZoom, options) {
            options = options || {};
            if (options.animate === false || !Browser.any3d) {
              return this.setView(targetCenter, targetZoom, options);
            }
            this._stop();
            var from = this.project(this.getCenter()), to2 = this.project(targetCenter), size = this.getSize(), startZoom = this._zoom;
            targetCenter = toLatLng(targetCenter);
            targetZoom = targetZoom === void 0 ? startZoom : targetZoom;
            var w0 = Math.max(size.x, size.y), w1 = w0 * this.getZoomScale(startZoom, targetZoom), u1 = to2.distanceTo(from) || 1, rho = 1.42, rho2 = rho * rho;
            function r2(i) {
              var s1 = i ? -1 : 1, s2 = i ? w1 : w0, t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1, b1 = 2 * s2 * rho2 * u1, b = t1 / b1, sq = Math.sqrt(b * b + 1) - b;
              var log = sq < 1e-9 ? -18 : Math.log(sq);
              return log;
            }
            function sinh(n) {
              return (Math.exp(n) - Math.exp(-n)) / 2;
            }
            function cosh(n) {
              return (Math.exp(n) + Math.exp(-n)) / 2;
            }
            function tanh(n) {
              return sinh(n) / cosh(n);
            }
            var r0 = r2(0);
            function w(s) {
              return w0 * (cosh(r0) / cosh(r0 + rho * s));
            }
            function u(s) {
              return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
            }
            function easeOut(t) {
              return 1 - Math.pow(1 - t, 1.5);
            }
            var start = Date.now(), S = (r2(1) - r0) / rho, duration = options.duration ? 1e3 * options.duration : 1e3 * S * 0.8;
            function frame() {
              var t = (Date.now() - start) / duration, s = easeOut(t) * S;
              if (t <= 1) {
                this._flyToFrame = requestAnimFrame(frame, this);
                this._move(
                  this.unproject(from.add(to2.subtract(from).multiplyBy(u(s) / u1)), startZoom),
                  this.getScaleZoom(w0 / w(s), startZoom),
                  { flyTo: true }
                );
              } else {
                this._move(targetCenter, targetZoom)._moveEnd(true);
              }
            }
            this._moveStart(true, options.noMoveStart);
            frame.call(this);
            return this;
          },
          // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
          // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
          // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
          flyToBounds: function(bounds, options) {
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.flyTo(target.center, target.zoom, options);
          },
          // @method setMaxBounds(bounds: LatLngBounds): this
          // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
          setMaxBounds: function(bounds) {
            bounds = toLatLngBounds(bounds);
            if (this.listens("moveend", this._panInsideMaxBounds)) {
              this.off("moveend", this._panInsideMaxBounds);
            }
            if (!bounds.isValid()) {
              this.options.maxBounds = null;
              return this;
            }
            this.options.maxBounds = bounds;
            if (this._loaded) {
              this._panInsideMaxBounds();
            }
            return this.on("moveend", this._panInsideMaxBounds);
          },
          // @method setMinZoom(zoom: Number): this
          // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
          setMinZoom: function(zoom2) {
            var oldZoom = this.options.minZoom;
            this.options.minZoom = zoom2;
            if (this._loaded && oldZoom !== zoom2) {
              this.fire("zoomlevelschange");
              if (this.getZoom() < this.options.minZoom) {
                return this.setZoom(zoom2);
              }
            }
            return this;
          },
          // @method setMaxZoom(zoom: Number): this
          // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
          setMaxZoom: function(zoom2) {
            var oldZoom = this.options.maxZoom;
            this.options.maxZoom = zoom2;
            if (this._loaded && oldZoom !== zoom2) {
              this.fire("zoomlevelschange");
              if (this.getZoom() > this.options.maxZoom) {
                return this.setZoom(zoom2);
              }
            }
            return this;
          },
          // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
          // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
          panInsideBounds: function(bounds, options) {
            this._enforcingBounds = true;
            var center = this.getCenter(), newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));
            if (!center.equals(newCenter)) {
              this.panTo(newCenter, options);
            }
            this._enforcingBounds = false;
            return this;
          },
          // @method panInside(latlng: LatLng, options?: padding options): this
          // Pans the map the minimum amount to make the `latlng` visible. Use
          // padding options to fit the display to more restricted bounds.
          // If `latlng` is already within the (optionally padded) display bounds,
          // the map will not be panned.
          panInside: function(latlng, options) {
            options = options || {};
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]), pixelCenter = this.project(this.getCenter()), pixelPoint = this.project(latlng), pixelBounds = this.getPixelBounds(), paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]), paddedSize = paddedBounds.getSize();
            if (!paddedBounds.contains(pixelPoint)) {
              this._enforcingBounds = true;
              var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());
              var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);
              pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;
              pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;
              this.panTo(this.unproject(pixelCenter), options);
              this._enforcingBounds = false;
            }
            return this;
          },
          // @method invalidateSize(options: Zoom/pan options): this
          // Checks if the map container size changed and updates the map if so —
          // call it after you've changed the map size dynamically, also animating
          // pan by default. If `options.pan` is `false`, panning will not occur.
          // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
          // that it doesn't happen often even if the method is called many
          // times in a row.
          // @alternative
          // @method invalidateSize(animate: Boolean): this
          // Checks if the map container size changed and updates the map if so —
          // call it after you've changed the map size dynamically, also animating
          // pan by default.
          invalidateSize: function(options) {
            if (!this._loaded) {
              return this;
            }
            options = extend2({
              animate: false,
              pan: true
            }, options === true ? { animate: true } : options);
            var oldSize = this.getSize();
            this._sizeChanged = true;
            this._lastCenter = null;
            var newSize = this.getSize(), oldCenter = oldSize.divideBy(2).round(), newCenter = newSize.divideBy(2).round(), offset = oldCenter.subtract(newCenter);
            if (!offset.x && !offset.y) {
              return this;
            }
            if (options.animate && options.pan) {
              this.panBy(offset);
            } else {
              if (options.pan) {
                this._rawPanBy(offset);
              }
              this.fire("move");
              if (options.debounceMoveend) {
                clearTimeout(this._sizeTimer);
                this._sizeTimer = setTimeout(bind2(this.fire, this, "moveend"), 200);
              } else {
                this.fire("moveend");
              }
            }
            return this.fire("resize", {
              oldSize,
              newSize
            });
          },
          // @section Methods for modifying map state
          // @method stop(): this
          // Stops the currently running `panTo` or `flyTo` animation, if any.
          stop: function() {
            this.setZoom(this._limitZoom(this._zoom));
            if (!this.options.zoomSnap) {
              this.fire("viewreset");
            }
            return this._stop();
          },
          // @section Geolocation methods
          // @method locate(options?: Locate options): this
          // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
          // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
          // and optionally sets the map view to the user's location with respect to
          // detection accuracy (or to the world view if geolocation failed).
          // Note that, if your page doesn't use HTTPS, this method will fail in
          // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
          // See `Locate options` for more details.
          locate: function(options) {
            options = this._locateOptions = extend2({
              timeout: 1e4,
              watch: false
              // setView: false
              // maxZoom: <Number>
              // maximumAge: 0
              // enableHighAccuracy: false
            }, options);
            if (!("geolocation" in navigator)) {
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
              });
              return this;
            }
            var onResponse = bind2(this._handleGeolocationResponse, this), onError = bind2(this._handleGeolocationError, this);
            if (options.watch) {
              this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
            } else {
              navigator.geolocation.getCurrentPosition(onResponse, onError, options);
            }
            return this;
          },
          // @method stopLocate(): this
          // Stops watching location previously initiated by `map.locate({watch: true})`
          // and aborts resetting the map view if map.locate was called with
          // `{setView: true}`.
          stopLocate: function() {
            if (navigator.geolocation && navigator.geolocation.clearWatch) {
              navigator.geolocation.clearWatch(this._locationWatchId);
            }
            if (this._locateOptions) {
              this._locateOptions.setView = false;
            }
            return this;
          },
          _handleGeolocationError: function(error) {
            if (!this._container._leaflet_id) {
              return;
            }
            var c = error.code, message = error.message || (c === 1 ? "permission denied" : c === 2 ? "position unavailable" : "timeout");
            if (this._locateOptions.setView && !this._loaded) {
              this.fitWorld();
            }
            this.fire("locationerror", {
              code: c,
              message: "Geolocation error: " + message + "."
            });
          },
          _handleGeolocationResponse: function(pos) {
            if (!this._container._leaflet_id) {
              return;
            }
            var lat = pos.coords.latitude, lng = pos.coords.longitude, latlng = new LatLng(lat, lng), bounds = latlng.toBounds(pos.coords.accuracy * 2), options = this._locateOptions;
            if (options.setView) {
              var zoom2 = this.getBoundsZoom(bounds);
              this.setView(latlng, options.maxZoom ? Math.min(zoom2, options.maxZoom) : zoom2);
            }
            var data = {
              latlng,
              bounds,
              timestamp: pos.timestamp
            };
            for (var i in pos.coords) {
              if (typeof pos.coords[i] === "number") {
                data[i] = pos.coords[i];
              }
            }
            this.fire("locationfound", data);
          },
          // TODO Appropriate docs section?
          // @section Other Methods
          // @method addHandler(name: String, HandlerClass: Function): this
          // Adds a new `Handler` to the map, given its name and constructor function.
          addHandler: function(name, HandlerClass) {
            if (!HandlerClass) {
              return this;
            }
            var handler = this[name] = new HandlerClass(this);
            this._handlers.push(handler);
            if (this.options[name]) {
              handler.enable();
            }
            return this;
          },
          // @method remove(): this
          // Destroys the map and clears all related event listeners.
          remove: function() {
            this._initEvents(true);
            if (this.options.maxBounds) {
              this.off("moveend", this._panInsideMaxBounds);
            }
            if (this._containerId !== this._container._leaflet_id) {
              throw new Error("Map container is being reused by another instance");
            }
            try {
              delete this._container._leaflet_id;
              delete this._containerId;
            } catch (e) {
              this._container._leaflet_id = void 0;
              this._containerId = void 0;
            }
            if (this._locationWatchId !== void 0) {
              this.stopLocate();
            }
            this._stop();
            remove(this._mapPane);
            if (this._clearControlPos) {
              this._clearControlPos();
            }
            if (this._resizeRequest) {
              cancelAnimFrame(this._resizeRequest);
              this._resizeRequest = null;
            }
            this._clearHandlers();
            if (this._loaded) {
              this.fire("unload");
            }
            var i;
            for (i in this._layers) {
              this._layers[i].remove();
            }
            for (i in this._panes) {
              remove(this._panes[i]);
            }
            this._layers = [];
            this._panes = [];
            delete this._mapPane;
            delete this._renderer;
            return this;
          },
          // @section Other Methods
          // @method createPane(name: String, container?: HTMLElement): HTMLElement
          // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
          // then returns it. The pane is created as a child of `container`, or
          // as a child of the main map pane if not set.
          createPane: function(name, container) {
            var className = "leaflet-pane" + (name ? " leaflet-" + name.replace("Pane", "") + "-pane" : ""), pane = create$1("div", className, container || this._mapPane);
            if (name) {
              this._panes[name] = pane;
            }
            return pane;
          },
          // @section Methods for Getting Map State
          // @method getCenter(): LatLng
          // Returns the geographical center of the map view
          getCenter: function() {
            this._checkIfLoaded();
            if (this._lastCenter && !this._moved()) {
              return this._lastCenter.clone();
            }
            return this.layerPointToLatLng(this._getCenterLayerPoint());
          },
          // @method getZoom(): Number
          // Returns the current zoom level of the map view
          getZoom: function() {
            return this._zoom;
          },
          // @method getBounds(): LatLngBounds
          // Returns the geographical bounds visible in the current map view
          getBounds: function() {
            var bounds = this.getPixelBounds(), sw = this.unproject(bounds.getBottomLeft()), ne = this.unproject(bounds.getTopRight());
            return new LatLngBounds(sw, ne);
          },
          // @method getMinZoom(): Number
          // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
          getMinZoom: function() {
            return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
          },
          // @method getMaxZoom(): Number
          // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
          getMaxZoom: function() {
            return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? Infinity : this._layersMaxZoom : this.options.maxZoom;
          },
          // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
          // Returns the maximum zoom level on which the given bounds fit to the map
          // view in its entirety. If `inside` (optional) is set to `true`, the method
          // instead returns the minimum zoom level on which the map view fits into
          // the given bounds in its entirety.
          getBoundsZoom: function(bounds, inside, padding) {
            bounds = toLatLngBounds(bounds);
            padding = toPoint(padding || [0, 0]);
            var zoom2 = this.getZoom() || 0, min = this.getMinZoom(), max = this.getMaxZoom(), nw = bounds.getNorthWest(), se = bounds.getSouthEast(), size = this.getSize().subtract(padding), boundsSize = toBounds(this.project(se, zoom2), this.project(nw, zoom2)).getSize(), snap = Browser.any3d ? this.options.zoomSnap : 1, scalex = size.x / boundsSize.x, scaley = size.y / boundsSize.y, scale2 = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
            zoom2 = this.getScaleZoom(scale2, zoom2);
            if (snap) {
              zoom2 = Math.round(zoom2 / (snap / 100)) * (snap / 100);
              zoom2 = inside ? Math.ceil(zoom2 / snap) * snap : Math.floor(zoom2 / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom2));
          },
          // @method getSize(): Point
          // Returns the current size of the map container (in pixels).
          getSize: function() {
            if (!this._size || this._sizeChanged) {
              this._size = new Point(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              );
              this._sizeChanged = false;
            }
            return this._size.clone();
          },
          // @method getPixelBounds(): Bounds
          // Returns the bounds of the current map view in projected pixel
          // coordinates (sometimes useful in layer and overlay implementations).
          getPixelBounds: function(center, zoom2) {
            var topLeftPoint = this._getTopLeftPoint(center, zoom2);
            return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
          },
          // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
          // the map pane? "left point of the map layer" can be confusing, specially
          // since there can be negative offsets.
          // @method getPixelOrigin(): Point
          // Returns the projected pixel coordinates of the top left point of
          // the map layer (useful in custom layer and overlay implementations).
          getPixelOrigin: function() {
            this._checkIfLoaded();
            return this._pixelOrigin;
          },
          // @method getPixelWorldBounds(zoom?: Number): Bounds
          // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
          // If `zoom` is omitted, the map's current zoom level is used.
          getPixelWorldBounds: function(zoom2) {
            return this.options.crs.getProjectedBounds(zoom2 === void 0 ? this.getZoom() : zoom2);
          },
          // @section Other Methods
          // @method getPane(pane: String|HTMLElement): HTMLElement
          // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
          getPane: function(pane) {
            return typeof pane === "string" ? this._panes[pane] : pane;
          },
          // @method getPanes(): Object
          // Returns a plain object containing the names of all [panes](#map-pane) as keys and
          // the panes as values.
          getPanes: function() {
            return this._panes;
          },
          // @method getContainer: HTMLElement
          // Returns the HTML element that contains the map.
          getContainer: function() {
            return this._container;
          },
          // @section Conversion Methods
          // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
          // Returns the scale factor to be applied to a map transition from zoom level
          // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
          getZoomScale: function(toZoom, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === void 0 ? this._zoom : fromZoom;
            return crs.scale(toZoom) / crs.scale(fromZoom);
          },
          // @method getScaleZoom(scale: Number, fromZoom: Number): Number
          // Returns the zoom level that the map would end up at, if it is at `fromZoom`
          // level and everything is scaled by a factor of `scale`. Inverse of
          // [`getZoomScale`](#map-getZoomScale).
          getScaleZoom: function(scale2, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === void 0 ? this._zoom : fromZoom;
            var zoom2 = crs.zoom(scale2 * crs.scale(fromZoom));
            return isNaN(zoom2) ? Infinity : zoom2;
          },
          // @method project(latlng: LatLng, zoom: Number): Point
          // Projects a geographical coordinate `LatLng` according to the projection
          // of the map's CRS, then scales it according to `zoom` and the CRS's
          // `Transformation`. The result is pixel coordinate relative to
          // the CRS origin.
          project: function(latlng, zoom2) {
            zoom2 = zoom2 === void 0 ? this._zoom : zoom2;
            return this.options.crs.latLngToPoint(toLatLng(latlng), zoom2);
          },
          // @method unproject(point: Point, zoom: Number): LatLng
          // Inverse of [`project`](#map-project).
          unproject: function(point, zoom2) {
            zoom2 = zoom2 === void 0 ? this._zoom : zoom2;
            return this.options.crs.pointToLatLng(toPoint(point), zoom2);
          },
          // @method layerPointToLatLng(point: Point): LatLng
          // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
          // returns the corresponding geographical coordinate (for the current zoom level).
          layerPointToLatLng: function(point) {
            var projectedPoint = toPoint(point).add(this.getPixelOrigin());
            return this.unproject(projectedPoint);
          },
          // @method latLngToLayerPoint(latlng: LatLng): Point
          // Given a geographical coordinate, returns the corresponding pixel coordinate
          // relative to the [origin pixel](#map-getpixelorigin).
          latLngToLayerPoint: function(latlng) {
            var projectedPoint = this.project(toLatLng(latlng))._round();
            return projectedPoint._subtract(this.getPixelOrigin());
          },
          // @method wrapLatLng(latlng: LatLng): LatLng
          // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
          // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
          // CRS's bounds.
          // By default this means longitude is wrapped around the dateline so its
          // value is between -180 and +180 degrees.
          wrapLatLng: function(latlng) {
            return this.options.crs.wrapLatLng(toLatLng(latlng));
          },
          // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
          // Returns a `LatLngBounds` with the same size as the given one, ensuring that
          // its center is within the CRS's bounds.
          // By default this means the center longitude is wrapped around the dateline so its
          // value is between -180 and +180 degrees, and the majority of the bounds
          // overlaps the CRS's bounds.
          wrapLatLngBounds: function(latlng) {
            return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
          },
          // @method distance(latlng1: LatLng, latlng2: LatLng): Number
          // Returns the distance between two geographical coordinates according to
          // the map's CRS. By default this measures distance in meters.
          distance: function(latlng1, latlng2) {
            return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
          },
          // @method containerPointToLayerPoint(point: Point): Point
          // Given a pixel coordinate relative to the map container, returns the corresponding
          // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
          containerPointToLayerPoint: function(point) {
            return toPoint(point).subtract(this._getMapPanePos());
          },
          // @method layerPointToContainerPoint(point: Point): Point
          // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
          // returns the corresponding pixel coordinate relative to the map container.
          layerPointToContainerPoint: function(point) {
            return toPoint(point).add(this._getMapPanePos());
          },
          // @method containerPointToLatLng(point: Point): LatLng
          // Given a pixel coordinate relative to the map container, returns
          // the corresponding geographical coordinate (for the current zoom level).
          containerPointToLatLng: function(point) {
            var layerPoint = this.containerPointToLayerPoint(toPoint(point));
            return this.layerPointToLatLng(layerPoint);
          },
          // @method latLngToContainerPoint(latlng: LatLng): Point
          // Given a geographical coordinate, returns the corresponding pixel coordinate
          // relative to the map container.
          latLngToContainerPoint: function(latlng) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
          },
          // @method mouseEventToContainerPoint(ev: MouseEvent): Point
          // Given a MouseEvent object, returns the pixel coordinate relative to the
          // map container where the event took place.
          mouseEventToContainerPoint: function(e) {
            return getMousePosition(e, this._container);
          },
          // @method mouseEventToLayerPoint(ev: MouseEvent): Point
          // Given a MouseEvent object, returns the pixel coordinate relative to
          // the [origin pixel](#map-getpixelorigin) where the event took place.
          mouseEventToLayerPoint: function(e) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
          },
          // @method mouseEventToLatLng(ev: MouseEvent): LatLng
          // Given a MouseEvent object, returns geographical coordinate where the
          // event took place.
          mouseEventToLatLng: function(e) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
          },
          // map initialization methods
          _initContainer: function(id) {
            var container = this._container = get(id);
            if (!container) {
              throw new Error("Map container not found.");
            } else if (container._leaflet_id) {
              throw new Error("Map container is already initialized.");
            }
            on(container, "scroll", this._onScroll, this);
            this._containerId = stamp(container);
          },
          _initLayout: function() {
            var container = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Browser.any3d;
            addClass(container, "leaflet-container" + (Browser.touch ? " leaflet-touch" : "") + (Browser.retina ? " leaflet-retina" : "") + (Browser.ielt9 ? " leaflet-oldie" : "") + (Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var position = getStyle(container, "position");
            if (position !== "absolute" && position !== "relative" && position !== "fixed" && position !== "sticky") {
              container.style.position = "relative";
            }
            this._initPanes();
            if (this._initControlPos) {
              this._initControlPos();
            }
          },
          _initPanes: function() {
            var panes = this._panes = {};
            this._paneRenderers = {};
            this._mapPane = this.createPane("mapPane", this._container);
            setPosition(this._mapPane, new Point(0, 0));
            this.createPane("tilePane");
            this.createPane("overlayPane");
            this.createPane("shadowPane");
            this.createPane("markerPane");
            this.createPane("tooltipPane");
            this.createPane("popupPane");
            if (!this.options.markerZoomAnimation) {
              addClass(panes.markerPane, "leaflet-zoom-hide");
              addClass(panes.shadowPane, "leaflet-zoom-hide");
            }
          },
          // private methods that modify map state
          // @section Map state change events
          _resetView: function(center, zoom2, noMoveStart) {
            setPosition(this._mapPane, new Point(0, 0));
            var loading = !this._loaded;
            this._loaded = true;
            zoom2 = this._limitZoom(zoom2);
            this.fire("viewprereset");
            var zoomChanged = this._zoom !== zoom2;
            this._moveStart(zoomChanged, noMoveStart)._move(center, zoom2)._moveEnd(zoomChanged);
            this.fire("viewreset");
            if (loading) {
              this.fire("load");
            }
          },
          _moveStart: function(zoomChanged, noMoveStart) {
            if (zoomChanged) {
              this.fire("zoomstart");
            }
            if (!noMoveStart) {
              this.fire("movestart");
            }
            return this;
          },
          _move: function(center, zoom2, data, supressEvent) {
            if (zoom2 === void 0) {
              zoom2 = this._zoom;
            }
            var zoomChanged = this._zoom !== zoom2;
            this._zoom = zoom2;
            this._lastCenter = center;
            this._pixelOrigin = this._getNewPixelOrigin(center);
            if (!supressEvent) {
              if (zoomChanged || data && data.pinch) {
                this.fire("zoom", data);
              }
              this.fire("move", data);
            } else if (data && data.pinch) {
              this.fire("zoom", data);
            }
            return this;
          },
          _moveEnd: function(zoomChanged) {
            if (zoomChanged) {
              this.fire("zoomend");
            }
            return this.fire("moveend");
          },
          _stop: function() {
            cancelAnimFrame(this._flyToFrame);
            if (this._panAnim) {
              this._panAnim.stop();
            }
            return this;
          },
          _rawPanBy: function(offset) {
            setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
          },
          _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
          },
          _panInsideMaxBounds: function() {
            if (!this._enforcingBounds) {
              this.panInsideBounds(this.options.maxBounds);
            }
          },
          _checkIfLoaded: function() {
            if (!this._loaded) {
              throw new Error("Set map center and zoom first.");
            }
          },
          // DOM event handling
          // @section Interaction events
          _initEvents: function(remove2) {
            this._targets = {};
            this._targets[stamp(this._container)] = this;
            var onOff = remove2 ? off : on;
            onOff(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this);
            if (this.options.trackResize) {
              onOff(window, "resize", this._onResize, this);
            }
            if (Browser.any3d && this.options.transform3DLimit) {
              (remove2 ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
            }
          },
          _onResize: function() {
            cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = requestAnimFrame(
              function() {
                this.invalidateSize({ debounceMoveend: true });
              },
              this
            );
          },
          _onScroll: function() {
            this._container.scrollTop = 0;
            this._container.scrollLeft = 0;
          },
          _onMoveEnd: function() {
            var pos = this._getMapPanePos();
            if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
              this._resetView(this.getCenter(), this.getZoom());
            }
          },
          _findEventTargets: function(e, type) {
            var targets = [], target, isHover = type === "mouseout" || type === "mouseover", src = e.target || e.srcElement, dragging = false;
            while (src) {
              target = this._targets[stamp(src)];
              if (target && (type === "click" || type === "preclick") && this._draggableMoved(target)) {
                dragging = true;
                break;
              }
              if (target && target.listens(type, true)) {
                if (isHover && !isExternalTarget(src, e)) {
                  break;
                }
                targets.push(target);
                if (isHover) {
                  break;
                }
              }
              if (src === this._container) {
                break;
              }
              src = src.parentNode;
            }
            if (!targets.length && !dragging && !isHover && this.listens(type, true)) {
              targets = [this];
            }
            return targets;
          },
          _isClickDisabled: function(el) {
            while (el && el !== this._container) {
              if (el["_leaflet_disable_click"]) {
                return true;
              }
              el = el.parentNode;
            }
          },
          _handleDOMEvent: function(e) {
            var el = e.target || e.srcElement;
            if (!this._loaded || el["_leaflet_disable_events"] || e.type === "click" && this._isClickDisabled(el)) {
              return;
            }
            var type = e.type;
            if (type === "mousedown") {
              preventOutline(el);
            }
            this._fireDOMEvent(e, type);
          },
          _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
          _fireDOMEvent: function(e, type, canvasTargets) {
            if (e.type === "click") {
              var synth = extend2({}, e);
              synth.type = "preclick";
              this._fireDOMEvent(synth, synth.type, canvasTargets);
            }
            var targets = this._findEventTargets(e, type);
            if (canvasTargets) {
              var filtered = [];
              for (var i = 0; i < canvasTargets.length; i++) {
                if (canvasTargets[i].listens(type, true)) {
                  filtered.push(canvasTargets[i]);
                }
              }
              targets = filtered.concat(targets);
            }
            if (!targets.length) {
              return;
            }
            if (type === "contextmenu") {
              preventDefault(e);
            }
            var target = targets[0];
            var data = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
              data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
              data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
              data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
            }
            for (i = 0; i < targets.length; i++) {
              targets[i].fire(type, data, true);
              if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) {
                return;
              }
            }
          },
          _draggableMoved: function(obj) {
            obj = obj.dragging && obj.dragging.enabled() ? obj : this;
            return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
          },
          _clearHandlers: function() {
            for (var i = 0, len = this._handlers.length; i < len; i++) {
              this._handlers[i].disable();
            }
          },
          // @section Other Methods
          // @method whenReady(fn: Function, context?: Object): this
          // Runs the given function `fn` when the map gets initialized with
          // a view (center and zoom) and at least one layer, or immediately
          // if it's already initialized, optionally passing a function context.
          whenReady: function(callback, context) {
            if (this._loaded) {
              callback.call(context || this, { target: this });
            } else {
              this.on("load", callback, context);
            }
            return this;
          },
          // private methods for getting map state
          _getMapPanePos: function() {
            return getPosition(this._mapPane) || new Point(0, 0);
          },
          _moved: function() {
            var pos = this._getMapPanePos();
            return pos && !pos.equals([0, 0]);
          },
          _getTopLeftPoint: function(center, zoom2) {
            var pixelOrigin = center && zoom2 !== void 0 ? this._getNewPixelOrigin(center, zoom2) : this.getPixelOrigin();
            return pixelOrigin.subtract(this._getMapPanePos());
          },
          _getNewPixelOrigin: function(center, zoom2) {
            var viewHalf = this.getSize()._divideBy(2);
            return this.project(center, zoom2)._subtract(viewHalf)._add(this._getMapPanePos())._round();
          },
          _latLngToNewLayerPoint: function(latlng, zoom2, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom2);
            return this.project(latlng, zoom2)._subtract(topLeft);
          },
          _latLngBoundsToNewLayerBounds: function(latLngBounds, zoom2, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom2);
            return toBounds([
              this.project(latLngBounds.getSouthWest(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getNorthWest(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getSouthEast(), zoom2)._subtract(topLeft),
              this.project(latLngBounds.getNorthEast(), zoom2)._subtract(topLeft)
            ]);
          },
          // layer point of the current center
          _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
          },
          // offset of the specified place to the current center in pixels
          _getCenterOffset: function(latlng) {
            return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
          },
          // adjust center for view to get inside bounds
          _limitCenter: function(center, zoom2, bounds) {
            if (!bounds) {
              return center;
            }
            var centerPoint = this.project(center, zoom2), viewHalf = this.getSize().divideBy(2), viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)), offset = this._getBoundsOffset(viewBounds, bounds, zoom2);
            if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) {
              return center;
            }
            return this.unproject(centerPoint.add(offset), zoom2);
          },
          // adjust offset for view to get inside bounds
          _limitOffset: function(offset, bounds) {
            if (!bounds) {
              return offset;
            }
            var viewBounds = this.getPixelBounds(), newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
            return offset.add(this._getBoundsOffset(newBounds, bounds));
          },
          // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
          _getBoundsOffset: function(pxBounds, maxBounds, zoom2) {
            var projectedMaxBounds = toBounds(
              this.project(maxBounds.getNorthEast(), zoom2),
              this.project(maxBounds.getSouthWest(), zoom2)
            ), minOffset = projectedMaxBounds.min.subtract(pxBounds.min), maxOffset = projectedMaxBounds.max.subtract(pxBounds.max), dx = this._rebound(minOffset.x, -maxOffset.x), dy = this._rebound(minOffset.y, -maxOffset.y);
            return new Point(dx, dy);
          },
          _rebound: function(left, right) {
            return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
          },
          _limitZoom: function(zoom2) {
            var min = this.getMinZoom(), max = this.getMaxZoom(), snap = Browser.any3d ? this.options.zoomSnap : 1;
            if (snap) {
              zoom2 = Math.round(zoom2 / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom2));
          },
          _onPanTransitionStep: function() {
            this.fire("move");
          },
          _onPanTransitionEnd: function() {
            removeClass(this._mapPane, "leaflet-pan-anim");
            this.fire("moveend");
          },
          _tryAnimatedPan: function(center, options) {
            var offset = this._getCenterOffset(center)._trunc();
            if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
              return false;
            }
            this.panBy(offset, options);
            return true;
          },
          _createAnimProxy: function() {
            var proxy = this._proxy = create$1("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(proxy);
            this.on("zoomanim", function(e) {
              var prop = TRANSFORM, transform = this._proxy.style[prop];
              setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
              if (transform === this._proxy.style[prop] && this._animatingZoom) {
                this._onZoomTransitionEnd();
              }
            }, this);
            this.on("load moveend", this._animMoveEnd, this);
            this._on("unload", this._destroyAnimProxy, this);
          },
          _destroyAnimProxy: function() {
            remove(this._proxy);
            this.off("load moveend", this._animMoveEnd, this);
            delete this._proxy;
          },
          _animMoveEnd: function() {
            var c = this.getCenter(), z2 = this.getZoom();
            setTransform(this._proxy, this.project(c, z2), this.getZoomScale(z2, 1));
          },
          _catchTransitionEnd: function(e) {
            if (this._animatingZoom && e.propertyName.indexOf("transform") >= 0) {
              this._onZoomTransitionEnd();
            }
          },
          _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
          },
          _tryAnimatedZoom: function(center, zoom2, options) {
            if (this._animatingZoom) {
              return true;
            }
            options = options || {};
            if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom2 - this._zoom) > this.options.zoomAnimationThreshold) {
              return false;
            }
            var scale2 = this.getZoomScale(zoom2), offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale2);
            if (options.animate !== true && !this.getSize().contains(offset)) {
              return false;
            }
            requestAnimFrame(function() {
              this._moveStart(true, options.noMoveStart || false)._animateZoom(center, zoom2, true);
            }, this);
            return true;
          },
          _animateZoom: function(center, zoom2, startAnim, noUpdate) {
            if (!this._mapPane) {
              return;
            }
            if (startAnim) {
              this._animatingZoom = true;
              this._animateToCenter = center;
              this._animateToZoom = zoom2;
              addClass(this._mapPane, "leaflet-zoom-anim");
            }
            this.fire("zoomanim", {
              center,
              zoom: zoom2,
              noUpdate
            });
            if (!this._tempFireZoomEvent) {
              this._tempFireZoomEvent = this._zoom !== this._animateToZoom;
            }
            this._move(this._animateToCenter, this._animateToZoom, void 0, true);
            setTimeout(bind2(this._onZoomTransitionEnd, this), 250);
          },
          _onZoomTransitionEnd: function() {
            if (!this._animatingZoom) {
              return;
            }
            if (this._mapPane) {
              removeClass(this._mapPane, "leaflet-zoom-anim");
            }
            this._animatingZoom = false;
            this._move(this._animateToCenter, this._animateToZoom, void 0, true);
            if (this._tempFireZoomEvent) {
              this.fire("zoom");
            }
            delete this._tempFireZoomEvent;
            this.fire("move");
            this._moveEnd(true);
          }
        });
        function createMap(id, options) {
          return new Map2(id, options);
        }
        var Control = Class.extend({
          // @section
          // @aka Control Options
          options: {
            // @option position: String = 'topright'
            // The position of the control (one of the map corners). Possible values are `'topleft'`,
            // `'topright'`, `'bottomleft'` or `'bottomright'`
            position: "topright"
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          /* @section
           * Classes extending L.Control will inherit the following methods:
           *
           * @method getPosition: string
           * Returns the position of the control.
           */
          getPosition: function() {
            return this.options.position;
          },
          // @method setPosition(position: string): this
          // Sets the position of the control.
          setPosition: function(position) {
            var map = this._map;
            if (map) {
              map.removeControl(this);
            }
            this.options.position = position;
            if (map) {
              map.addControl(this);
            }
            return this;
          },
          // @method getContainer: HTMLElement
          // Returns the HTMLElement that contains the control.
          getContainer: function() {
            return this._container;
          },
          // @method addTo(map: Map): this
          // Adds the control to the given map.
          addTo: function(map) {
            this.remove();
            this._map = map;
            var container = this._container = this.onAdd(map), pos = this.getPosition(), corner = map._controlCorners[pos];
            addClass(container, "leaflet-control");
            if (pos.indexOf("bottom") !== -1) {
              corner.insertBefore(container, corner.firstChild);
            } else {
              corner.appendChild(container);
            }
            this._map.on("unload", this.remove, this);
            return this;
          },
          // @method remove: this
          // Removes the control from the map it is currently active on.
          remove: function() {
            if (!this._map) {
              return this;
            }
            remove(this._container);
            if (this.onRemove) {
              this.onRemove(this._map);
            }
            this._map.off("unload", this.remove, this);
            this._map = null;
            return this;
          },
          _refocusOnMap: function(e) {
            if (this._map && e && e.screenX > 0 && e.screenY > 0) {
              this._map.getContainer().focus();
            }
          }
        });
        var control = function(options) {
          return new Control(options);
        };
        Map2.include({
          // @method addControl(control: Control): this
          // Adds the given control to the map
          addControl: function(control2) {
            control2.addTo(this);
            return this;
          },
          // @method removeControl(control: Control): this
          // Removes the given control from the map
          removeControl: function(control2) {
            control2.remove();
            return this;
          },
          _initControlPos: function() {
            var corners = this._controlCorners = {}, l = "leaflet-", container = this._controlContainer = create$1("div", l + "control-container", this._container);
            function createCorner(vSide, hSide) {
              var className = l + vSide + " " + l + hSide;
              corners[vSide + hSide] = create$1("div", className, container);
            }
            createCorner("top", "left");
            createCorner("top", "right");
            createCorner("bottom", "left");
            createCorner("bottom", "right");
          },
          _clearControlPos: function() {
            for (var i in this._controlCorners) {
              remove(this._controlCorners[i]);
            }
            remove(this._controlContainer);
            delete this._controlCorners;
            delete this._controlContainer;
          }
        });
        var Layers = Control.extend({
          // @section
          // @aka Control.Layers options
          options: {
            // @option collapsed: Boolean = true
            // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
            collapsed: true,
            position: "topright",
            // @option autoZIndex: Boolean = true
            // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
            autoZIndex: true,
            // @option hideSingleBase: Boolean = false
            // If `true`, the base layers in the control will be hidden when there is only one.
            hideSingleBase: false,
            // @option sortLayers: Boolean = false
            // Whether to sort the layers. When `false`, layers will keep the order
            // in which they were added to the control.
            sortLayers: false,
            // @option sortFunction: Function = *
            // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
            // that will be used for sorting the layers, when `sortLayers` is `true`.
            // The function receives both the `L.Layer` instances and their names, as in
            // `sortFunction(layerA, layerB, nameA, nameB)`.
            // By default, it sorts layers alphabetically by their name.
            sortFunction: function(layerA, layerB, nameA, nameB) {
              return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
            }
          },
          initialize: function(baseLayers, overlays, options) {
            setOptions(this, options);
            this._layerControlInputs = [];
            this._layers = [];
            this._lastZIndex = 0;
            this._handlingClick = false;
            this._preventClick = false;
            for (var i in baseLayers) {
              this._addLayer(baseLayers[i], i);
            }
            for (i in overlays) {
              this._addLayer(overlays[i], i, true);
            }
          },
          onAdd: function(map) {
            this._initLayout();
            this._update();
            this._map = map;
            map.on("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) {
              this._layers[i].layer.on("add remove", this._onLayerChange, this);
            }
            return this._container;
          },
          addTo: function(map) {
            Control.prototype.addTo.call(this, map);
            return this._expandIfNotCollapsed();
          },
          onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) {
              this._layers[i].layer.off("add remove", this._onLayerChange, this);
            }
          },
          // @method addBaseLayer(layer: Layer, name: String): this
          // Adds a base layer (radio button entry) with the given name to the control.
          addBaseLayer: function(layer, name) {
            this._addLayer(layer, name);
            return this._map ? this._update() : this;
          },
          // @method addOverlay(layer: Layer, name: String): this
          // Adds an overlay (checkbox entry) with the given name to the control.
          addOverlay: function(layer, name) {
            this._addLayer(layer, name, true);
            return this._map ? this._update() : this;
          },
          // @method removeLayer(layer: Layer): this
          // Remove the given layer from the control.
          removeLayer: function(layer) {
            layer.off("add remove", this._onLayerChange, this);
            var obj = this._getLayer(stamp(layer));
            if (obj) {
              this._layers.splice(this._layers.indexOf(obj), 1);
            }
            return this._map ? this._update() : this;
          },
          // @method expand(): this
          // Expand the control container if collapsed.
          expand: function() {
            addClass(this._container, "leaflet-control-layers-expanded");
            this._section.style.height = null;
            var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
            if (acceptableHeight < this._section.clientHeight) {
              addClass(this._section, "leaflet-control-layers-scrollbar");
              this._section.style.height = acceptableHeight + "px";
            } else {
              removeClass(this._section, "leaflet-control-layers-scrollbar");
            }
            this._checkDisabledLayers();
            return this;
          },
          // @method collapse(): this
          // Collapse the control container if expanded.
          collapse: function() {
            removeClass(this._container, "leaflet-control-layers-expanded");
            return this;
          },
          _initLayout: function() {
            var className = "leaflet-control-layers", container = this._container = create$1("div", className), collapsed = this.options.collapsed;
            container.setAttribute("aria-haspopup", true);
            disableClickPropagation(container);
            disableScrollPropagation(container);
            var section = this._section = create$1("section", className + "-list");
            if (collapsed) {
              this._map.on("click", this.collapse, this);
              on(container, {
                mouseenter: this._expandSafely,
                mouseleave: this.collapse
              }, this);
            }
            var link = this._layersLink = create$1("a", className + "-toggle", container);
            link.href = "#";
            link.title = "Layers";
            link.setAttribute("role", "button");
            on(link, {
              keydown: function(e) {
                if (e.keyCode === 13) {
                  this._expandSafely();
                }
              },
              // Certain screen readers intercept the key event and instead send a click event
              click: function(e) {
                preventDefault(e);
                this._expandSafely();
              }
            }, this);
            if (!collapsed) {
              this.expand();
            }
            this._baseLayersList = create$1("div", className + "-base", section);
            this._separator = create$1("div", className + "-separator", section);
            this._overlaysList = create$1("div", className + "-overlays", section);
            container.appendChild(section);
          },
          _getLayer: function(id) {
            for (var i = 0; i < this._layers.length; i++) {
              if (this._layers[i] && stamp(this._layers[i].layer) === id) {
                return this._layers[i];
              }
            }
          },
          _addLayer: function(layer, name, overlay) {
            if (this._map) {
              layer.on("add remove", this._onLayerChange, this);
            }
            this._layers.push({
              layer,
              name,
              overlay
            });
            if (this.options.sortLayers) {
              this._layers.sort(bind2(function(a, b) {
                return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
              }, this));
            }
            if (this.options.autoZIndex && layer.setZIndex) {
              this._lastZIndex++;
              layer.setZIndex(this._lastZIndex);
            }
            this._expandIfNotCollapsed();
          },
          _update: function() {
            if (!this._container) {
              return this;
            }
            empty(this._baseLayersList);
            empty(this._overlaysList);
            this._layerControlInputs = [];
            var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;
            for (i = 0; i < this._layers.length; i++) {
              obj = this._layers[i];
              this._addItem(obj);
              overlaysPresent = overlaysPresent || obj.overlay;
              baseLayersPresent = baseLayersPresent || !obj.overlay;
              baseLayersCount += !obj.overlay ? 1 : 0;
            }
            if (this.options.hideSingleBase) {
              baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
              this._baseLayersList.style.display = baseLayersPresent ? "" : "none";
            }
            this._separator.style.display = overlaysPresent && baseLayersPresent ? "" : "none";
            return this;
          },
          _onLayerChange: function(e) {
            if (!this._handlingClick) {
              this._update();
            }
            var obj = this._getLayer(stamp(e.target));
            var type = obj.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
            if (type) {
              this._map.fire(type, obj);
            }
          },
          // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
          _createRadioElement: function(name, checked) {
            var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : "") + "/>";
            var radioFragment = document.createElement("div");
            radioFragment.innerHTML = radioHtml;
            return radioFragment.firstChild;
          },
          _addItem: function(obj) {
            var label = document.createElement("label"), checked = this._map.hasLayer(obj.layer), input;
            if (obj.overlay) {
              input = document.createElement("input");
              input.type = "checkbox";
              input.className = "leaflet-control-layers-selector";
              input.defaultChecked = checked;
            } else {
              input = this._createRadioElement("leaflet-base-layers_" + stamp(this), checked);
            }
            this._layerControlInputs.push(input);
            input.layerId = stamp(obj.layer);
            on(input, "click", this._onInputClick, this);
            var name = document.createElement("span");
            name.innerHTML = " " + obj.name;
            var holder = document.createElement("span");
            label.appendChild(holder);
            holder.appendChild(input);
            holder.appendChild(name);
            var container = obj.overlay ? this._overlaysList : this._baseLayersList;
            container.appendChild(label);
            this._checkDisabledLayers();
            return label;
          },
          _onInputClick: function() {
            if (this._preventClick) {
              return;
            }
            var inputs = this._layerControlInputs, input, layer;
            var addedLayers = [], removedLayers = [];
            this._handlingClick = true;
            for (var i = inputs.length - 1; i >= 0; i--) {
              input = inputs[i];
              layer = this._getLayer(input.layerId).layer;
              if (input.checked) {
                addedLayers.push(layer);
              } else if (!input.checked) {
                removedLayers.push(layer);
              }
            }
            for (i = 0; i < removedLayers.length; i++) {
              if (this._map.hasLayer(removedLayers[i])) {
                this._map.removeLayer(removedLayers[i]);
              }
            }
            for (i = 0; i < addedLayers.length; i++) {
              if (!this._map.hasLayer(addedLayers[i])) {
                this._map.addLayer(addedLayers[i]);
              }
            }
            this._handlingClick = false;
            this._refocusOnMap();
          },
          _checkDisabledLayers: function() {
            var inputs = this._layerControlInputs, input, layer, zoom2 = this._map.getZoom();
            for (var i = inputs.length - 1; i >= 0; i--) {
              input = inputs[i];
              layer = this._getLayer(input.layerId).layer;
              input.disabled = layer.options.minZoom !== void 0 && zoom2 < layer.options.minZoom || layer.options.maxZoom !== void 0 && zoom2 > layer.options.maxZoom;
            }
          },
          _expandIfNotCollapsed: function() {
            if (this._map && !this.options.collapsed) {
              this.expand();
            }
            return this;
          },
          _expandSafely: function() {
            var section = this._section;
            this._preventClick = true;
            on(section, "click", preventDefault);
            this.expand();
            var that = this;
            setTimeout(function() {
              off(section, "click", preventDefault);
              that._preventClick = false;
            });
          }
        });
        var layers = function(baseLayers, overlays, options) {
          return new Layers(baseLayers, overlays, options);
        };
        var Zoom = Control.extend({
          // @section
          // @aka Control.Zoom options
          options: {
            position: "topleft",
            // @option zoomInText: String = '<span aria-hidden="true">+</span>'
            // The text set on the 'zoom in' button.
            zoomInText: '<span aria-hidden="true">+</span>',
            // @option zoomInTitle: String = 'Zoom in'
            // The title set on the 'zoom in' button.
            zoomInTitle: "Zoom in",
            // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
            // The text set on the 'zoom out' button.
            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
            // @option zoomOutTitle: String = 'Zoom out'
            // The title set on the 'zoom out' button.
            zoomOutTitle: "Zoom out"
          },
          onAdd: function(map) {
            var zoomName = "leaflet-control-zoom", container = create$1("div", zoomName + " leaflet-bar"), options = this.options;
            this._zoomInButton = this._createButton(
              options.zoomInText,
              options.zoomInTitle,
              zoomName + "-in",
              container,
              this._zoomIn
            );
            this._zoomOutButton = this._createButton(
              options.zoomOutText,
              options.zoomOutTitle,
              zoomName + "-out",
              container,
              this._zoomOut
            );
            this._updateDisabled();
            map.on("zoomend zoomlevelschange", this._updateDisabled, this);
            return container;
          },
          onRemove: function(map) {
            map.off("zoomend zoomlevelschange", this._updateDisabled, this);
          },
          disable: function() {
            this._disabled = true;
            this._updateDisabled();
            return this;
          },
          enable: function() {
            this._disabled = false;
            this._updateDisabled();
            return this;
          },
          _zoomIn: function(e) {
            if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
              this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
            }
          },
          _zoomOut: function(e) {
            if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
              this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
            }
          },
          _createButton: function(html, title, className, container, fn) {
            var link = create$1("a", className, container);
            link.innerHTML = html;
            link.href = "#";
            link.title = title;
            link.setAttribute("role", "button");
            link.setAttribute("aria-label", title);
            disableClickPropagation(link);
            on(link, "click", stop);
            on(link, "click", fn, this);
            on(link, "click", this._refocusOnMap, this);
            return link;
          },
          _updateDisabled: function() {
            var map = this._map, className = "leaflet-disabled";
            removeClass(this._zoomInButton, className);
            removeClass(this._zoomOutButton, className);
            this._zoomInButton.setAttribute("aria-disabled", "false");
            this._zoomOutButton.setAttribute("aria-disabled", "false");
            if (this._disabled || map._zoom === map.getMinZoom()) {
              addClass(this._zoomOutButton, className);
              this._zoomOutButton.setAttribute("aria-disabled", "true");
            }
            if (this._disabled || map._zoom === map.getMaxZoom()) {
              addClass(this._zoomInButton, className);
              this._zoomInButton.setAttribute("aria-disabled", "true");
            }
          }
        });
        Map2.mergeOptions({
          zoomControl: true
        });
        Map2.addInitHook(function() {
          if (this.options.zoomControl) {
            this.zoomControl = new Zoom();
            this.addControl(this.zoomControl);
          }
        });
        var zoom = function(options) {
          return new Zoom(options);
        };
        var Scale = Control.extend({
          // @section
          // @aka Control.Scale options
          options: {
            position: "bottomleft",
            // @option maxWidth: Number = 100
            // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
            maxWidth: 100,
            // @option metric: Boolean = True
            // Whether to show the metric scale line (m/km).
            metric: true,
            // @option imperial: Boolean = True
            // Whether to show the imperial scale line (mi/ft).
            imperial: true
            // @option updateWhenIdle: Boolean = false
            // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
          },
          onAdd: function(map) {
            var className = "leaflet-control-scale", container = create$1("div", className), options = this.options;
            this._addScales(options, className + "-line", container);
            map.on(options.updateWhenIdle ? "moveend" : "move", this._update, this);
            map.whenReady(this._update, this);
            return container;
          },
          onRemove: function(map) {
            map.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
          },
          _addScales: function(options, className, container) {
            if (options.metric) {
              this._mScale = create$1("div", className, container);
            }
            if (options.imperial) {
              this._iScale = create$1("div", className, container);
            }
          },
          _update: function() {
            var map = this._map, y2 = map.getSize().y / 2;
            var maxMeters = map.distance(
              map.containerPointToLatLng([0, y2]),
              map.containerPointToLatLng([this.options.maxWidth, y2])
            );
            this._updateScales(maxMeters);
          },
          _updateScales: function(maxMeters) {
            if (this.options.metric && maxMeters) {
              this._updateMetric(maxMeters);
            }
            if (this.options.imperial && maxMeters) {
              this._updateImperial(maxMeters);
            }
          },
          _updateMetric: function(maxMeters) {
            var meters = this._getRoundNum(maxMeters), label = meters < 1e3 ? meters + " m" : meters / 1e3 + " km";
            this._updateScale(this._mScale, label, meters / maxMeters);
          },
          _updateImperial: function(maxMeters) {
            var maxFeet = maxMeters * 3.2808399, maxMiles, miles, feet;
            if (maxFeet > 5280) {
              maxMiles = maxFeet / 5280;
              miles = this._getRoundNum(maxMiles);
              this._updateScale(this._iScale, miles + " mi", miles / maxMiles);
            } else {
              feet = this._getRoundNum(maxFeet);
              this._updateScale(this._iScale, feet + " ft", feet / maxFeet);
            }
          },
          _updateScale: function(scale2, text, ratio) {
            scale2.style.width = Math.round(this.options.maxWidth * ratio) + "px";
            scale2.innerHTML = text;
          },
          _getRoundNum: function(num) {
            var pow10 = Math.pow(10, (Math.floor(num) + "").length - 1), d = num / pow10;
            d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
            return pow10 * d;
          }
        });
        var scale = function(options) {
          return new Scale(options);
        };
        var ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';
        var Attribution = Control.extend({
          // @section
          // @aka Control.Attribution options
          options: {
            position: "bottomright",
            // @option prefix: String|false = 'Leaflet'
            // The HTML text shown before the attributions. Pass `false` to disable.
            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Browser.inlineSvg ? ukrainianFlag + " " : "") + "Leaflet</a>"
          },
          initialize: function(options) {
            setOptions(this, options);
            this._attributions = {};
          },
          onAdd: function(map) {
            map.attributionControl = this;
            this._container = create$1("div", "leaflet-control-attribution");
            disableClickPropagation(this._container);
            for (var i in map._layers) {
              if (map._layers[i].getAttribution) {
                this.addAttribution(map._layers[i].getAttribution());
              }
            }
            this._update();
            map.on("layeradd", this._addAttribution, this);
            return this._container;
          },
          onRemove: function(map) {
            map.off("layeradd", this._addAttribution, this);
          },
          _addAttribution: function(ev) {
            if (ev.layer.getAttribution) {
              this.addAttribution(ev.layer.getAttribution());
              ev.layer.once("remove", function() {
                this.removeAttribution(ev.layer.getAttribution());
              }, this);
            }
          },
          // @method setPrefix(prefix: String|false): this
          // The HTML text shown before the attributions. Pass `false` to disable.
          setPrefix: function(prefix) {
            this.options.prefix = prefix;
            this._update();
            return this;
          },
          // @method addAttribution(text: String): this
          // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
          addAttribution: function(text) {
            if (!text) {
              return this;
            }
            if (!this._attributions[text]) {
              this._attributions[text] = 0;
            }
            this._attributions[text]++;
            this._update();
            return this;
          },
          // @method removeAttribution(text: String): this
          // Removes an attribution text.
          removeAttribution: function(text) {
            if (!text) {
              return this;
            }
            if (this._attributions[text]) {
              this._attributions[text]--;
              this._update();
            }
            return this;
          },
          _update: function() {
            if (!this._map) {
              return;
            }
            var attribs = [];
            for (var i in this._attributions) {
              if (this._attributions[i]) {
                attribs.push(i);
              }
            }
            var prefixAndAttribs = [];
            if (this.options.prefix) {
              prefixAndAttribs.push(this.options.prefix);
            }
            if (attribs.length) {
              prefixAndAttribs.push(attribs.join(", "));
            }
            this._container.innerHTML = prefixAndAttribs.join(' <span aria-hidden="true">|</span> ');
          }
        });
        Map2.mergeOptions({
          attributionControl: true
        });
        Map2.addInitHook(function() {
          if (this.options.attributionControl) {
            new Attribution().addTo(this);
          }
        });
        var attribution = function(options) {
          return new Attribution(options);
        };
        Control.Layers = Layers;
        Control.Zoom = Zoom;
        Control.Scale = Scale;
        Control.Attribution = Attribution;
        control.layers = layers;
        control.zoom = zoom;
        control.scale = scale;
        control.attribution = attribution;
        var Handler = Class.extend({
          initialize: function(map) {
            this._map = map;
          },
          // @method enable(): this
          // Enables the handler
          enable: function() {
            if (this._enabled) {
              return this;
            }
            this._enabled = true;
            this.addHooks();
            return this;
          },
          // @method disable(): this
          // Disables the handler
          disable: function() {
            if (!this._enabled) {
              return this;
            }
            this._enabled = false;
            this.removeHooks();
            return this;
          },
          // @method enabled(): Boolean
          // Returns `true` if the handler is enabled
          enabled: function() {
            return !!this._enabled;
          }
          // @section Extension methods
          // Classes inheriting from `Handler` must implement the two following methods:
          // @method addHooks()
          // Called when the handler is enabled, should add event hooks.
          // @method removeHooks()
          // Called when the handler is disabled, should remove the event hooks added previously.
        });
        Handler.addTo = function(map, name) {
          map.addHandler(name, this);
          return this;
        };
        var Mixin = { Events };
        var START = Browser.touch ? "touchstart mousedown" : "mousedown";
        var Draggable = Evented.extend({
          options: {
            // @section
            // @aka Draggable options
            // @option clickTolerance: Number = 3
            // The max number of pixels a user can shift the mouse pointer during a click
            // for it to be considered a valid click (as opposed to a mouse drag).
            clickTolerance: 3
          },
          // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
          // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
          initialize: function(element, dragStartTarget, preventOutline2, options) {
            setOptions(this, options);
            this._element = element;
            this._dragStartTarget = dragStartTarget || element;
            this._preventOutline = preventOutline2;
          },
          // @method enable()
          // Enables the dragging ability
          enable: function() {
            if (this._enabled) {
              return;
            }
            on(this._dragStartTarget, START, this._onDown, this);
            this._enabled = true;
          },
          // @method disable()
          // Disables the dragging ability
          disable: function() {
            if (!this._enabled) {
              return;
            }
            if (Draggable._dragging === this) {
              this.finishDrag(true);
            }
            off(this._dragStartTarget, START, this._onDown, this);
            this._enabled = false;
            this._moved = false;
          },
          _onDown: function(e) {
            if (!this._enabled) {
              return;
            }
            this._moved = false;
            if (hasClass(this._element, "leaflet-zoom-anim")) {
              return;
            }
            if (e.touches && e.touches.length !== 1) {
              if (Draggable._dragging === this) {
                this.finishDrag();
              }
              return;
            }
            if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
              return;
            }
            Draggable._dragging = this;
            if (this._preventOutline) {
              preventOutline(this._element);
            }
            disableImageDrag();
            disableTextSelection();
            if (this._moving) {
              return;
            }
            this.fire("down");
            var first = e.touches ? e.touches[0] : e, sizedParent = getSizedParentNode(this._element);
            this._startPoint = new Point(first.clientX, first.clientY);
            this._startPos = getPosition(this._element);
            this._parentScale = getScale(sizedParent);
            var mouseevent = e.type === "mousedown";
            on(document, mouseevent ? "mousemove" : "touchmove", this._onMove, this);
            on(document, mouseevent ? "mouseup" : "touchend touchcancel", this._onUp, this);
          },
          _onMove: function(e) {
            if (!this._enabled) {
              return;
            }
            if (e.touches && e.touches.length > 1) {
              this._moved = true;
              return;
            }
            var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);
            if (!offset.x && !offset.y) {
              return;
            }
            if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
              return;
            }
            offset.x /= this._parentScale.x;
            offset.y /= this._parentScale.y;
            preventDefault(e);
            if (!this._moved) {
              this.fire("dragstart");
              this._moved = true;
              addClass(document.body, "leaflet-dragging");
              this._lastTarget = e.target || e.srcElement;
              if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) {
                this._lastTarget = this._lastTarget.correspondingUseElement;
              }
              addClass(this._lastTarget, "leaflet-drag-target");
            }
            this._newPos = this._startPos.add(offset);
            this._moving = true;
            this._lastEvent = e;
            this._updatePosition();
          },
          _updatePosition: function() {
            var e = { originalEvent: this._lastEvent };
            this.fire("predrag", e);
            setPosition(this._element, this._newPos);
            this.fire("drag", e);
          },
          _onUp: function() {
            if (!this._enabled) {
              return;
            }
            this.finishDrag();
          },
          finishDrag: function(noInertia) {
            removeClass(document.body, "leaflet-dragging");
            if (this._lastTarget) {
              removeClass(this._lastTarget, "leaflet-drag-target");
              this._lastTarget = null;
            }
            off(document, "mousemove touchmove", this._onMove, this);
            off(document, "mouseup touchend touchcancel", this._onUp, this);
            enableImageDrag();
            enableTextSelection();
            var fireDragend = this._moved && this._moving;
            this._moving = false;
            Draggable._dragging = false;
            if (fireDragend) {
              this.fire("dragend", {
                noInertia,
                distance: this._newPos.distanceTo(this._startPos)
              });
            }
          }
        });
        function clipPolygon(points, bounds, round) {
          var clippedPoints, edges = [1, 4, 2, 8], i, j, k, a, b, len, edge2, p;
          for (i = 0, len = points.length; i < len; i++) {
            points[i]._code = _getBitCode(points[i], bounds);
          }
          for (k = 0; k < 4; k++) {
            edge2 = edges[k];
            clippedPoints = [];
            for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
              a = points[i];
              b = points[j];
              if (!(a._code & edge2)) {
                if (b._code & edge2) {
                  p = _getEdgeIntersection(b, a, edge2, bounds, round);
                  p._code = _getBitCode(p, bounds);
                  clippedPoints.push(p);
                }
                clippedPoints.push(a);
              } else if (!(b._code & edge2)) {
                p = _getEdgeIntersection(b, a, edge2, bounds, round);
                p._code = _getBitCode(p, bounds);
                clippedPoints.push(p);
              }
            }
            points = clippedPoints;
          }
          return points;
        }
        function polygonCenter(latlngs, crs) {
          var i, j, p1, p2, f, area, x, y2, center;
          if (!latlngs || latlngs.length === 0) {
            throw new Error("latlngs not passed");
          }
          if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
          }
          var centroidLatLng = toLatLng([0, 0]);
          var bounds = toLatLngBounds(latlngs);
          var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
          if (areaBounds < 1700) {
            centroidLatLng = centroid(latlngs);
          }
          var len = latlngs.length;
          var points = [];
          for (i = 0; i < len; i++) {
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));
          }
          area = x = y2 = 0;
          for (i = 0, j = len - 1; i < len; j = i++) {
            p1 = points[i];
            p2 = points[j];
            f = p1.y * p2.x - p2.y * p1.x;
            x += (p1.x + p2.x) * f;
            y2 += (p1.y + p2.y) * f;
            area += f * 3;
          }
          if (area === 0) {
            center = points[0];
          } else {
            center = [x / area, y2 / area];
          }
          var latlngCenter = crs.unproject(toPoint(center));
          return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);
        }
        function centroid(coords) {
          var latSum = 0;
          var lngSum = 0;
          var len = 0;
          for (var i = 0; i < coords.length; i++) {
            var latlng = toLatLng(coords[i]);
            latSum += latlng.lat;
            lngSum += latlng.lng;
            len++;
          }
          return toLatLng([latSum / len, lngSum / len]);
        }
        var PolyUtil = {
          __proto__: null,
          clipPolygon,
          polygonCenter,
          centroid
        };
        function simplify(points, tolerance) {
          if (!tolerance || !points.length) {
            return points.slice();
          }
          var sqTolerance = tolerance * tolerance;
          points = _reducePoints(points, sqTolerance);
          points = _simplifyDP(points, sqTolerance);
          return points;
        }
        function pointToSegmentDistance(p, p1, p2) {
          return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
        }
        function closestPointOnSegment(p, p1, p2) {
          return _sqClosestPointOnSegment(p, p1, p2);
        }
        function _simplifyDP(points, sqTolerance) {
          var len = points.length, ArrayConstructor = typeof Uint8Array !== "undefined" ? Uint8Array : Array, markers = new ArrayConstructor(len);
          markers[0] = markers[len - 1] = 1;
          _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
          var i, newPoints = [];
          for (i = 0; i < len; i++) {
            if (markers[i]) {
              newPoints.push(points[i]);
            }
          }
          return newPoints;
        }
        function _simplifyDPStep(points, markers, sqTolerance, first, last) {
          var maxSqDist = 0, index2, i, sqDist;
          for (i = first + 1; i <= last - 1; i++) {
            sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);
            if (sqDist > maxSqDist) {
              index2 = i;
              maxSqDist = sqDist;
            }
          }
          if (maxSqDist > sqTolerance) {
            markers[index2] = 1;
            _simplifyDPStep(points, markers, sqTolerance, first, index2);
            _simplifyDPStep(points, markers, sqTolerance, index2, last);
          }
        }
        function _reducePoints(points, sqTolerance) {
          var reducedPoints = [points[0]];
          for (var i = 1, prev = 0, len = points.length; i < len; i++) {
            if (_sqDist(points[i], points[prev]) > sqTolerance) {
              reducedPoints.push(points[i]);
              prev = i;
            }
          }
          if (prev < len - 1) {
            reducedPoints.push(points[len - 1]);
          }
          return reducedPoints;
        }
        var _lastCode;
        function clipSegment(a, b, bounds, useLastCode, round) {
          var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds), codeB = _getBitCode(b, bounds), codeOut, p, newCode;
          _lastCode = codeB;
          while (true) {
            if (!(codeA | codeB)) {
              return [a, b];
            }
            if (codeA & codeB) {
              return false;
            }
            codeOut = codeA || codeB;
            p = _getEdgeIntersection(a, b, codeOut, bounds, round);
            newCode = _getBitCode(p, bounds);
            if (codeOut === codeA) {
              a = p;
              codeA = newCode;
            } else {
              b = p;
              codeB = newCode;
            }
          }
        }
        function _getEdgeIntersection(a, b, code, bounds, round) {
          var dx = b.x - a.x, dy = b.y - a.y, min = bounds.min, max = bounds.max, x, y2;
          if (code & 8) {
            x = a.x + dx * (max.y - a.y) / dy;
            y2 = max.y;
          } else if (code & 4) {
            x = a.x + dx * (min.y - a.y) / dy;
            y2 = min.y;
          } else if (code & 2) {
            x = max.x;
            y2 = a.y + dy * (max.x - a.x) / dx;
          } else if (code & 1) {
            x = min.x;
            y2 = a.y + dy * (min.x - a.x) / dx;
          }
          return new Point(x, y2, round);
        }
        function _getBitCode(p, bounds) {
          var code = 0;
          if (p.x < bounds.min.x) {
            code |= 1;
          } else if (p.x > bounds.max.x) {
            code |= 2;
          }
          if (p.y < bounds.min.y) {
            code |= 4;
          } else if (p.y > bounds.max.y) {
            code |= 8;
          }
          return code;
        }
        function _sqDist(p1, p2) {
          var dx = p2.x - p1.x, dy = p2.y - p1.y;
          return dx * dx + dy * dy;
        }
        function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
          var x = p1.x, y2 = p1.y, dx = p2.x - x, dy = p2.y - y2, dot = dx * dx + dy * dy, t;
          if (dot > 0) {
            t = ((p.x - x) * dx + (p.y - y2) * dy) / dot;
            if (t > 1) {
              x = p2.x;
              y2 = p2.y;
            } else if (t > 0) {
              x += dx * t;
              y2 += dy * t;
            }
          }
          dx = p.x - x;
          dy = p.y - y2;
          return sqDist ? dx * dx + dy * dy : new Point(x, y2);
        }
        function isFlat(latlngs) {
          return !isArray2(latlngs[0]) || typeof latlngs[0][0] !== "object" && typeof latlngs[0][0] !== "undefined";
        }
        function _flat(latlngs) {
          console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead.");
          return isFlat(latlngs);
        }
        function polylineCenter(latlngs, crs) {
          var i, halfDist, segDist, dist, p1, p2, ratio, center;
          if (!latlngs || latlngs.length === 0) {
            throw new Error("latlngs not passed");
          }
          if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
          }
          var centroidLatLng = toLatLng([0, 0]);
          var bounds = toLatLngBounds(latlngs);
          var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
          if (areaBounds < 1700) {
            centroidLatLng = centroid(latlngs);
          }
          var len = latlngs.length;
          var points = [];
          for (i = 0; i < len; i++) {
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([latlng.lat - centroidLatLng.lat, latlng.lng - centroidLatLng.lng])));
          }
          for (i = 0, halfDist = 0; i < len - 1; i++) {
            halfDist += points[i].distanceTo(points[i + 1]) / 2;
          }
          if (halfDist === 0) {
            center = points[0];
          } else {
            for (i = 0, dist = 0; i < len - 1; i++) {
              p1 = points[i];
              p2 = points[i + 1];
              segDist = p1.distanceTo(p2);
              dist += segDist;
              if (dist > halfDist) {
                ratio = (dist - halfDist) / segDist;
                center = [
                  p2.x - ratio * (p2.x - p1.x),
                  p2.y - ratio * (p2.y - p1.y)
                ];
                break;
              }
            }
          }
          var latlngCenter = crs.unproject(toPoint(center));
          return toLatLng([latlngCenter.lat + centroidLatLng.lat, latlngCenter.lng + centroidLatLng.lng]);
        }
        var LineUtil = {
          __proto__: null,
          simplify,
          pointToSegmentDistance,
          closestPointOnSegment,
          clipSegment,
          _getEdgeIntersection,
          _getBitCode,
          _sqClosestPointOnSegment,
          isFlat,
          _flat,
          polylineCenter
        };
        var LonLat = {
          project: function(latlng) {
            return new Point(latlng.lng, latlng.lat);
          },
          unproject: function(point) {
            return new LatLng(point.y, point.x);
          },
          bounds: new Bounds([-180, -90], [180, 90])
        };
        var Mercator = {
          R: 6378137,
          R_MINOR: 6356752314245179e-9,
          bounds: new Bounds([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
          project: function(latlng) {
            var d = Math.PI / 180, r2 = this.R, y2 = latlng.lat * d, tmp = this.R_MINOR / r2, e = Math.sqrt(1 - tmp * tmp), con = e * Math.sin(y2);
            var ts = Math.tan(Math.PI / 4 - y2 / 2) / Math.pow((1 - con) / (1 + con), e / 2);
            y2 = -r2 * Math.log(Math.max(ts, 1e-10));
            return new Point(latlng.lng * d * r2, y2);
          },
          unproject: function(point) {
            var d = 180 / Math.PI, r2 = this.R, tmp = this.R_MINOR / r2, e = Math.sqrt(1 - tmp * tmp), ts = Math.exp(-point.y / r2), phi = Math.PI / 2 - 2 * Math.atan(ts);
            for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
              con = e * Math.sin(phi);
              con = Math.pow((1 - con) / (1 + con), e / 2);
              dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
              phi += dphi;
            }
            return new LatLng(phi * d, point.x * d / r2);
          }
        };
        var index = {
          __proto__: null,
          LonLat,
          Mercator,
          SphericalMercator
        };
        var EPSG3395 = extend2({}, Earth, {
          code: "EPSG:3395",
          projection: Mercator,
          transformation: (function() {
            var scale2 = 0.5 / (Math.PI * Mercator.R);
            return toTransformation(scale2, 0.5, -scale2, 0.5);
          })()
        });
        var EPSG4326 = extend2({}, Earth, {
          code: "EPSG:4326",
          projection: LonLat,
          transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
        });
        var Simple = extend2({}, CRS, {
          projection: LonLat,
          transformation: toTransformation(1, 0, -1, 0),
          scale: function(zoom2) {
            return Math.pow(2, zoom2);
          },
          zoom: function(scale2) {
            return Math.log(scale2) / Math.LN2;
          },
          distance: function(latlng1, latlng2) {
            var dx = latlng2.lng - latlng1.lng, dy = latlng2.lat - latlng1.lat;
            return Math.sqrt(dx * dx + dy * dy);
          },
          infinite: true
        });
        CRS.Earth = Earth;
        CRS.EPSG3395 = EPSG3395;
        CRS.EPSG3857 = EPSG3857;
        CRS.EPSG900913 = EPSG900913;
        CRS.EPSG4326 = EPSG4326;
        CRS.Simple = Simple;
        var Layer = Evented.extend({
          // Classes extending `L.Layer` will inherit the following options:
          options: {
            // @option pane: String = 'overlayPane'
            // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
            pane: "overlayPane",
            // @option attribution: String = null
            // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
            attribution: null,
            bubblingMouseEvents: true
          },
          /* @section
           * Classes extending `L.Layer` will inherit the following methods:
           *
           * @method addTo(map: Map|LayerGroup): this
           * Adds the layer to the given map or layer group.
           */
          addTo: function(map) {
            map.addLayer(this);
            return this;
          },
          // @method remove: this
          // Removes the layer from the map it is currently active on.
          remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
          },
          // @method removeFrom(map: Map): this
          // Removes the layer from the given map
          //
          // @alternative
          // @method removeFrom(group: LayerGroup): this
          // Removes the layer from the given `LayerGroup`
          removeFrom: function(obj) {
            if (obj) {
              obj.removeLayer(this);
            }
            return this;
          },
          // @method getPane(name? : String): HTMLElement
          // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
          getPane: function(name) {
            return this._map.getPane(name ? this.options[name] || name : this.options.pane);
          },
          addInteractiveTarget: function(targetEl) {
            this._map._targets[stamp(targetEl)] = this;
            return this;
          },
          removeInteractiveTarget: function(targetEl) {
            delete this._map._targets[stamp(targetEl)];
            return this;
          },
          // @method getAttribution: String
          // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
          getAttribution: function() {
            return this.options.attribution;
          },
          _layerAdd: function(e) {
            var map = e.target;
            if (!map.hasLayer(this)) {
              return;
            }
            this._map = map;
            this._zoomAnimated = map._zoomAnimated;
            if (this.getEvents) {
              var events = this.getEvents();
              map.on(events, this);
              this.once("remove", function() {
                map.off(events, this);
              }, this);
            }
            this.onAdd(map);
            this.fire("add");
            map.fire("layeradd", { layer: this });
          }
        });
        Map2.include({
          // @method addLayer(layer: Layer): this
          // Adds the given layer to the map
          addLayer: function(layer) {
            if (!layer._layerAdd) {
              throw new Error("The provided object is not a Layer.");
            }
            var id = stamp(layer);
            if (this._layers[id]) {
              return this;
            }
            this._layers[id] = layer;
            layer._mapToAdd = this;
            if (layer.beforeAdd) {
              layer.beforeAdd(this);
            }
            this.whenReady(layer._layerAdd, layer);
            return this;
          },
          // @method removeLayer(layer: Layer): this
          // Removes the given layer from the map.
          removeLayer: function(layer) {
            var id = stamp(layer);
            if (!this._layers[id]) {
              return this;
            }
            if (this._loaded) {
              layer.onRemove(this);
            }
            delete this._layers[id];
            if (this._loaded) {
              this.fire("layerremove", { layer });
              layer.fire("remove");
            }
            layer._map = layer._mapToAdd = null;
            return this;
          },
          // @method hasLayer(layer: Layer): Boolean
          // Returns `true` if the given layer is currently added to the map
          hasLayer: function(layer) {
            return stamp(layer) in this._layers;
          },
          /* @method eachLayer(fn: Function, context?: Object): this
           * Iterates over the layers of the map, optionally specifying context of the iterator function.
           * ```
           * map.eachLayer(function(layer){
           *     layer.bindPopup('Hello');
           * });
           * ```
           */
          eachLayer: function(method, context) {
            for (var i in this._layers) {
              method.call(context, this._layers[i]);
            }
            return this;
          },
          _addLayers: function(layers2) {
            layers2 = layers2 ? isArray2(layers2) ? layers2 : [layers2] : [];
            for (var i = 0, len = layers2.length; i < len; i++) {
              this.addLayer(layers2[i]);
            }
          },
          _addZoomLimit: function(layer) {
            if (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
              this._zoomBoundLayers[stamp(layer)] = layer;
              this._updateZoomLevels();
            }
          },
          _removeZoomLimit: function(layer) {
            var id = stamp(layer);
            if (this._zoomBoundLayers[id]) {
              delete this._zoomBoundLayers[id];
              this._updateZoomLevels();
            }
          },
          _updateZoomLevels: function() {
            var minZoom = Infinity, maxZoom = -Infinity, oldZoomSpan = this._getZoomSpan();
            for (var i in this._zoomBoundLayers) {
              var options = this._zoomBoundLayers[i].options;
              minZoom = options.minZoom === void 0 ? minZoom : Math.min(minZoom, options.minZoom);
              maxZoom = options.maxZoom === void 0 ? maxZoom : Math.max(maxZoom, options.maxZoom);
            }
            this._layersMaxZoom = maxZoom === -Infinity ? void 0 : maxZoom;
            this._layersMinZoom = minZoom === Infinity ? void 0 : minZoom;
            if (oldZoomSpan !== this._getZoomSpan()) {
              this.fire("zoomlevelschange");
            }
            if (this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
              this.setZoom(this._layersMaxZoom);
            }
            if (this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
              this.setZoom(this._layersMinZoom);
            }
          }
        });
        var LayerGroup = Layer.extend({
          initialize: function(layers2, options) {
            setOptions(this, options);
            this._layers = {};
            var i, len;
            if (layers2) {
              for (i = 0, len = layers2.length; i < len; i++) {
                this.addLayer(layers2[i]);
              }
            }
          },
          // @method addLayer(layer: Layer): this
          // Adds the given layer to the group.
          addLayer: function(layer) {
            var id = this.getLayerId(layer);
            this._layers[id] = layer;
            if (this._map) {
              this._map.addLayer(layer);
            }
            return this;
          },
          // @method removeLayer(layer: Layer): this
          // Removes the given layer from the group.
          // @alternative
          // @method removeLayer(id: Number): this
          // Removes the layer with the given internal ID from the group.
          removeLayer: function(layer) {
            var id = layer in this._layers ? layer : this.getLayerId(layer);
            if (this._map && this._layers[id]) {
              this._map.removeLayer(this._layers[id]);
            }
            delete this._layers[id];
            return this;
          },
          // @method hasLayer(layer: Layer): Boolean
          // Returns `true` if the given layer is currently added to the group.
          // @alternative
          // @method hasLayer(id: Number): Boolean
          // Returns `true` if the given internal ID is currently added to the group.
          hasLayer: function(layer) {
            var layerId = typeof layer === "number" ? layer : this.getLayerId(layer);
            return layerId in this._layers;
          },
          // @method clearLayers(): this
          // Removes all the layers from the group.
          clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
          },
          // @method invoke(methodName: String, …): this
          // Calls `methodName` on every layer contained in this group, passing any
          // additional parameters. Has no effect if the layers contained do not
          // implement `methodName`.
          invoke: function(methodName) {
            var args = Array.prototype.slice.call(arguments, 1), i, layer;
            for (i in this._layers) {
              layer = this._layers[i];
              if (layer[methodName]) {
                layer[methodName].apply(layer, args);
              }
            }
            return this;
          },
          onAdd: function(map) {
            this.eachLayer(map.addLayer, map);
          },
          onRemove: function(map) {
            this.eachLayer(map.removeLayer, map);
          },
          // @method eachLayer(fn: Function, context?: Object): this
          // Iterates over the layers of the group, optionally specifying context of the iterator function.
          // ```js
          // group.eachLayer(function (layer) {
          // 	layer.bindPopup('Hello');
          // });
          // ```
          eachLayer: function(method, context) {
            for (var i in this._layers) {
              method.call(context, this._layers[i]);
            }
            return this;
          },
          // @method getLayer(id: Number): Layer
          // Returns the layer with the given internal ID.
          getLayer: function(id) {
            return this._layers[id];
          },
          // @method getLayers(): Layer[]
          // Returns an array of all the layers added to the group.
          getLayers: function() {
            var layers2 = [];
            this.eachLayer(layers2.push, layers2);
            return layers2;
          },
          // @method setZIndex(zIndex: Number): this
          // Calls `setZIndex` on every layer contained in this group, passing the z-index.
          setZIndex: function(zIndex) {
            return this.invoke("setZIndex", zIndex);
          },
          // @method getLayerId(layer: Layer): Number
          // Returns the internal ID for a layer
          getLayerId: function(layer) {
            return stamp(layer);
          }
        });
        var layerGroup = function(layers2, options) {
          return new LayerGroup(layers2, options);
        };
        var FeatureGroup = LayerGroup.extend({
          addLayer: function(layer) {
            if (this.hasLayer(layer)) {
              return this;
            }
            layer.addEventParent(this);
            LayerGroup.prototype.addLayer.call(this, layer);
            return this.fire("layeradd", { layer });
          },
          removeLayer: function(layer) {
            if (!this.hasLayer(layer)) {
              return this;
            }
            if (layer in this._layers) {
              layer = this._layers[layer];
            }
            layer.removeEventParent(this);
            LayerGroup.prototype.removeLayer.call(this, layer);
            return this.fire("layerremove", { layer });
          },
          // @method setStyle(style: Path options): this
          // Sets the given path options to each layer of the group that has a `setStyle` method.
          setStyle: function(style2) {
            return this.invoke("setStyle", style2);
          },
          // @method bringToFront(): this
          // Brings the layer group to the top of all other layers
          bringToFront: function() {
            return this.invoke("bringToFront");
          },
          // @method bringToBack(): this
          // Brings the layer group to the back of all other layers
          bringToBack: function() {
            return this.invoke("bringToBack");
          },
          // @method getBounds(): LatLngBounds
          // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
          getBounds: function() {
            var bounds = new LatLngBounds();
            for (var id in this._layers) {
              var layer = this._layers[id];
              bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
            }
            return bounds;
          }
        });
        var featureGroup = function(layers2, options) {
          return new FeatureGroup(layers2, options);
        };
        var Icon2 = Class.extend({
          /* @section
           * @aka Icon options
           *
           * @option iconUrl: String = null
           * **(required)** The URL to the icon image (absolute or relative to your script path).
           *
           * @option iconRetinaUrl: String = null
           * The URL to a retina sized version of the icon image (absolute or relative to your
           * script path). Used for Retina screen devices.
           *
           * @option iconSize: Point = null
           * Size of the icon image in pixels.
           *
           * @option iconAnchor: Point = null
           * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
           * will be aligned so that this point is at the marker's geographical location. Centered
           * by default if size is specified, also can be set in CSS with negative margins.
           *
           * @option popupAnchor: Point = [0, 0]
           * The coordinates of the point from which popups will "open", relative to the icon anchor.
           *
           * @option tooltipAnchor: Point = [0, 0]
           * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
           *
           * @option shadowUrl: String = null
           * The URL to the icon shadow image. If not specified, no shadow image will be created.
           *
           * @option shadowRetinaUrl: String = null
           *
           * @option shadowSize: Point = null
           * Size of the shadow image in pixels.
           *
           * @option shadowAnchor: Point = null
           * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
           * as iconAnchor if not specified).
           *
           * @option className: String = ''
           * A custom class name to assign to both icon and shadow images. Empty by default.
           */
          options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0],
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          // @method createIcon(oldIcon?: HTMLElement): HTMLElement
          // Called internally when the icon has to be shown, returns a `<img>` HTML element
          // styled according to the options.
          createIcon: function(oldIcon) {
            return this._createIcon("icon", oldIcon);
          },
          // @method createShadow(oldIcon?: HTMLElement): HTMLElement
          // As `createIcon`, but for the shadow beneath it.
          createShadow: function(oldIcon) {
            return this._createIcon("shadow", oldIcon);
          },
          _createIcon: function(name, oldIcon) {
            var src = this._getIconUrl(name);
            if (!src) {
              if (name === "icon") {
                throw new Error("iconUrl not set in Icon options (see the docs).");
              }
              return null;
            }
            var img = this._createImg(src, oldIcon && oldIcon.tagName === "IMG" ? oldIcon : null);
            this._setIconStyles(img, name);
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            return img;
          },
          _setIconStyles: function(img, name) {
            var options = this.options;
            var sizeOption = options[name + "Size"];
            if (typeof sizeOption === "number") {
              sizeOption = [sizeOption, sizeOption];
            }
            var size = toPoint(sizeOption), anchor = toPoint(name === "shadow" && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
            img.className = "leaflet-marker-" + name + " " + (options.className || "");
            if (anchor) {
              img.style.marginLeft = -anchor.x + "px";
              img.style.marginTop = -anchor.y + "px";
            }
            if (size) {
              img.style.width = size.x + "px";
              img.style.height = size.y + "px";
            }
          },
          _createImg: function(src, el) {
            el = el || document.createElement("img");
            el.src = src;
            return el;
          },
          _getIconUrl: function(name) {
            return Browser.retina && this.options[name + "RetinaUrl"] || this.options[name + "Url"];
          }
        });
        function icon(options) {
          return new Icon2(options);
        }
        var IconDefault = Icon2.extend({
          options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
          },
          _getIconUrl: function(name) {
            if (typeof IconDefault.imagePath !== "string") {
              IconDefault.imagePath = this._detectIconPath();
            }
            return (this.options.imagePath || IconDefault.imagePath) + Icon2.prototype._getIconUrl.call(this, name);
          },
          _stripUrl: function(path) {
            var strip = function(str, re, idx) {
              var match = re.exec(str);
              return match && match[idx];
            };
            path = strip(path, /^url\((['"])?(.+)\1\)$/, 2);
            return path && strip(path, /^(.*)marker-icon\.png$/, 1);
          },
          _detectIconPath: function() {
            var el = create$1("div", "leaflet-default-icon-path", document.body);
            var path = getStyle(el, "background-image") || getStyle(el, "backgroundImage");
            document.body.removeChild(el);
            path = this._stripUrl(path);
            if (path) {
              return path;
            }
            var link = document.querySelector('link[href$="leaflet.css"]');
            if (!link) {
              return "";
            }
            return link.href.substring(0, link.href.length - "leaflet.css".length - 1);
          }
        });
        var MarkerDrag = Handler.extend({
          initialize: function(marker2) {
            this._marker = marker2;
          },
          addHooks: function() {
            var icon2 = this._marker._icon;
            if (!this._draggable) {
              this._draggable = new Draggable(icon2, icon2, true);
            }
            this._draggable.on({
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).enable();
            addClass(icon2, "leaflet-marker-draggable");
          },
          removeHooks: function() {
            this._draggable.off({
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).disable();
            if (this._marker._icon) {
              removeClass(this._marker._icon, "leaflet-marker-draggable");
            }
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          _adjustPan: function(e) {
            var marker2 = this._marker, map = marker2._map, speed = this._marker.options.autoPanSpeed, padding = this._marker.options.autoPanPadding, iconPos = getPosition(marker2._icon), bounds = map.getPixelBounds(), origin2 = map.getPixelOrigin();
            var panBounds = toBounds(
              bounds.min._subtract(origin2).add(padding),
              bounds.max._subtract(origin2).subtract(padding)
            );
            if (!panBounds.contains(iconPos)) {
              var movement = toPoint(
                (Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),
                (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
              ).multiplyBy(speed);
              map.panBy(movement, { animate: false });
              this._draggable._newPos._add(movement);
              this._draggable._startPos._add(movement);
              setPosition(marker2._icon, this._draggable._newPos);
              this._onDrag(e);
              this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
          },
          _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng();
            this._marker.closePopup && this._marker.closePopup();
            this._marker.fire("movestart").fire("dragstart");
          },
          _onPreDrag: function(e) {
            if (this._marker.options.autoPan) {
              cancelAnimFrame(this._panRequest);
              this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
          },
          _onDrag: function(e) {
            var marker2 = this._marker, shadow = marker2._shadow, iconPos = getPosition(marker2._icon), latlng = marker2._map.layerPointToLatLng(iconPos);
            if (shadow) {
              setPosition(shadow, iconPos);
            }
            marker2._latlng = latlng;
            e.latlng = latlng;
            e.oldLatLng = this._oldLatLng;
            marker2.fire("move", e).fire("drag", e);
          },
          _onDragEnd: function(e) {
            cancelAnimFrame(this._panRequest);
            delete this._oldLatLng;
            this._marker.fire("moveend").fire("dragend", e);
          }
        });
        var Marker2 = Layer.extend({
          // @section
          // @aka Marker options
          options: {
            // @option icon: Icon = *
            // Icon instance to use for rendering the marker.
            // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
            // If not specified, a common instance of `L.Icon.Default` is used.
            icon: new IconDefault(),
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option keyboard: Boolean = true
            // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
            keyboard: true,
            // @option title: String = ''
            // Text for the browser tooltip that appear on marker hover (no tooltip by default).
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            title: "",
            // @option alt: String = 'Marker'
            // Text for the `alt` attribute of the icon image.
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            alt: "Marker",
            // @option zIndexOffset: Number = 0
            // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
            zIndexOffset: 0,
            // @option opacity: Number = 1.0
            // The opacity of the marker.
            opacity: 1,
            // @option riseOnHover: Boolean = false
            // If `true`, the marker will get on top of others when you hover the mouse over it.
            riseOnHover: false,
            // @option riseOffset: Number = 250
            // The z-index offset used for the `riseOnHover` feature.
            riseOffset: 250,
            // @option pane: String = 'markerPane'
            // `Map pane` where the markers icon will be added.
            pane: "markerPane",
            // @option shadowPane: String = 'shadowPane'
            // `Map pane` where the markers shadow will be added.
            shadowPane: "shadowPane",
            // @option bubblingMouseEvents: Boolean = false
            // When `true`, a mouse event on this marker will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: false,
            // @option autoPanOnFocus: Boolean = true
            // When `true`, the map will pan whenever the marker is focused (via
            // e.g. pressing `tab` on the keyboard) to ensure the marker is
            // visible within the map's bounds
            autoPanOnFocus: true,
            // @section Draggable marker options
            // @option draggable: Boolean = false
            // Whether the marker is draggable with mouse/touch or not.
            draggable: false,
            // @option autoPan: Boolean = false
            // Whether to pan the map when dragging this marker near its edge or not.
            autoPan: false,
            // @option autoPanPadding: Point = Point(50, 50)
            // Distance (in pixels to the left/right and to the top/bottom) of the
            // map edge to start panning the map.
            autoPanPadding: [50, 50],
            // @option autoPanSpeed: Number = 10
            // Number of pixels the map should pan by.
            autoPanSpeed: 10
          },
          /* @section
           *
           * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
           */
          initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
          },
          onAdd: function(map) {
            this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
            if (this._zoomAnimated) {
              map.on("zoomanim", this._animateZoom, this);
            }
            this._initIcon();
            this.update();
          },
          onRemove: function(map) {
            if (this.dragging && this.dragging.enabled()) {
              this.options.draggable = true;
              this.dragging.removeHooks();
            }
            delete this.dragging;
            if (this._zoomAnimated) {
              map.off("zoomanim", this._animateZoom, this);
            }
            this._removeIcon();
            this._removeShadow();
          },
          getEvents: function() {
            return {
              zoom: this.update,
              viewreset: this.update
            };
          },
          // @method getLatLng: LatLng
          // Returns the current geographical position of the marker.
          getLatLng: function() {
            return this._latlng;
          },
          // @method setLatLng(latlng: LatLng): this
          // Changes the marker position to the given point.
          setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.update();
            return this.fire("move", { oldLatLng, latlng: this._latlng });
          },
          // @method setZIndexOffset(offset: Number): this
          // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
          setZIndexOffset: function(offset) {
            this.options.zIndexOffset = offset;
            return this.update();
          },
          // @method getIcon: Icon
          // Returns the current icon used by the marker
          getIcon: function() {
            return this.options.icon;
          },
          // @method setIcon(icon: Icon): this
          // Changes the marker icon.
          setIcon: function(icon2) {
            this.options.icon = icon2;
            if (this._map) {
              this._initIcon();
              this.update();
            }
            if (this._popup) {
              this.bindPopup(this._popup, this._popup.options);
            }
            return this;
          },
          getElement: function() {
            return this._icon;
          },
          update: function() {
            if (this._icon && this._map) {
              var pos = this._map.latLngToLayerPoint(this._latlng).round();
              this._setPos(pos);
            }
            return this;
          },
          _initIcon: function() {
            var options = this.options, classToAdd = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            var icon2 = options.icon.createIcon(this._icon), addIcon = false;
            if (icon2 !== this._icon) {
              if (this._icon) {
                this._removeIcon();
              }
              addIcon = true;
              if (options.title) {
                icon2.title = options.title;
              }
              if (icon2.tagName === "IMG") {
                icon2.alt = options.alt || "";
              }
            }
            addClass(icon2, classToAdd);
            if (options.keyboard) {
              icon2.tabIndex = "0";
              icon2.setAttribute("role", "button");
            }
            this._icon = icon2;
            if (options.riseOnHover) {
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
            }
            if (this.options.autoPanOnFocus) {
              on(icon2, "focus", this._panOnFocus, this);
            }
            var newShadow = options.icon.createShadow(this._shadow), addShadow = false;
            if (newShadow !== this._shadow) {
              this._removeShadow();
              addShadow = true;
            }
            if (newShadow) {
              addClass(newShadow, classToAdd);
              newShadow.alt = "";
            }
            this._shadow = newShadow;
            if (options.opacity < 1) {
              this._updateOpacity();
            }
            if (addIcon) {
              this.getPane().appendChild(this._icon);
            }
            this._initInteraction();
            if (newShadow && addShadow) {
              this.getPane(options.shadowPane).appendChild(this._shadow);
            }
          },
          _removeIcon: function() {
            if (this.options.riseOnHover) {
              this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
            }
            if (this.options.autoPanOnFocus) {
              off(this._icon, "focus", this._panOnFocus, this);
            }
            remove(this._icon);
            this.removeInteractiveTarget(this._icon);
            this._icon = null;
          },
          _removeShadow: function() {
            if (this._shadow) {
              remove(this._shadow);
            }
            this._shadow = null;
          },
          _setPos: function(pos) {
            if (this._icon) {
              setPosition(this._icon, pos);
            }
            if (this._shadow) {
              setPosition(this._shadow, pos);
            }
            this._zIndex = pos.y + this.options.zIndexOffset;
            this._resetZIndex();
          },
          _updateZIndex: function(offset) {
            if (this._icon) {
              this._icon.style.zIndex = this._zIndex + offset;
            }
          },
          _animateZoom: function(opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
            this._setPos(pos);
          },
          _initInteraction: function() {
            if (!this.options.interactive) {
              return;
            }
            addClass(this._icon, "leaflet-interactive");
            this.addInteractiveTarget(this._icon);
            if (MarkerDrag) {
              var draggable = this.options.draggable;
              if (this.dragging) {
                draggable = this.dragging.enabled();
                this.dragging.disable();
              }
              this.dragging = new MarkerDrag(this);
              if (draggable) {
                this.dragging.enable();
              }
            }
          },
          // @method setOpacity(opacity: Number): this
          // Changes the opacity of the marker.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._map) {
              this._updateOpacity();
            }
            return this;
          },
          _updateOpacity: function() {
            var opacity = this.options.opacity;
            if (this._icon) {
              setOpacity(this._icon, opacity);
            }
            if (this._shadow) {
              setOpacity(this._shadow, opacity);
            }
          },
          _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
          },
          _resetZIndex: function() {
            this._updateZIndex(0);
          },
          _panOnFocus: function() {
            var map = this._map;
            if (!map) {
              return;
            }
            var iconOpts = this.options.icon.options;
            var size = iconOpts.iconSize ? toPoint(iconOpts.iconSize) : toPoint(0, 0);
            var anchor = iconOpts.iconAnchor ? toPoint(iconOpts.iconAnchor) : toPoint(0, 0);
            map.panInside(this._latlng, {
              paddingTopLeft: anchor,
              paddingBottomRight: size.subtract(anchor)
            });
          },
          _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
          },
          _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
          }
        });
        function marker(latlng, options) {
          return new Marker2(latlng, options);
        }
        var Path = Layer.extend({
          // @section
          // @aka Path options
          options: {
            // @option stroke: Boolean = true
            // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
            stroke: true,
            // @option color: String = '#3388ff'
            // Stroke color
            color: "#3388ff",
            // @option weight: Number = 3
            // Stroke width in pixels
            weight: 3,
            // @option opacity: Number = 1.0
            // Stroke opacity
            opacity: 1,
            // @option lineCap: String= 'round'
            // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
            lineCap: "round",
            // @option lineJoin: String = 'round'
            // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
            lineJoin: "round",
            // @option dashArray: String = null
            // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashArray: null,
            // @option dashOffset: String = null
            // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashOffset: null,
            // @option fill: Boolean = depends
            // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
            fill: false,
            // @option fillColor: String = *
            // Fill color. Defaults to the value of the [`color`](#path-color) option
            fillColor: null,
            // @option fillOpacity: Number = 0.2
            // Fill opacity.
            fillOpacity: 0.2,
            // @option fillRule: String = 'evenodd'
            // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
            fillRule: "evenodd",
            // className: '',
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option bubblingMouseEvents: Boolean = true
            // When `true`, a mouse event on this path will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: true
          },
          beforeAdd: function(map) {
            this._renderer = map.getRenderer(this);
          },
          onAdd: function() {
            this._renderer._initPath(this);
            this._reset();
            this._renderer._addPath(this);
          },
          onRemove: function() {
            this._renderer._removePath(this);
          },
          // @method redraw(): this
          // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
          redraw: function() {
            if (this._map) {
              this._renderer._updatePath(this);
            }
            return this;
          },
          // @method setStyle(style: Path options): this
          // Changes the appearance of a Path based on the options in the `Path options` object.
          setStyle: function(style2) {
            setOptions(this, style2);
            if (this._renderer) {
              this._renderer._updateStyle(this);
              if (this.options.stroke && style2 && Object.prototype.hasOwnProperty.call(style2, "weight")) {
                this._updateBounds();
              }
            }
            return this;
          },
          // @method bringToFront(): this
          // Brings the layer to the top of all path layers.
          bringToFront: function() {
            if (this._renderer) {
              this._renderer._bringToFront(this);
            }
            return this;
          },
          // @method bringToBack(): this
          // Brings the layer to the bottom of all path layers.
          bringToBack: function() {
            if (this._renderer) {
              this._renderer._bringToBack(this);
            }
            return this;
          },
          getElement: function() {
            return this._path;
          },
          _reset: function() {
            this._project();
            this._update();
          },
          _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
          }
        });
        var CircleMarker = Path.extend({
          // @section
          // @aka CircleMarker options
          options: {
            fill: true,
            // @option radius: Number = 10
            // Radius of the circle marker, in pixels
            radius: 10
          },
          initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            this._radius = this.options.radius;
          },
          // @method setLatLng(latLng: LatLng): this
          // Sets the position of a circle marker to a new location.
          setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.redraw();
            return this.fire("move", { oldLatLng, latlng: this._latlng });
          },
          // @method getLatLng(): LatLng
          // Returns the current geographical position of the circle marker
          getLatLng: function() {
            return this._latlng;
          },
          // @method setRadius(radius: Number): this
          // Sets the radius of a circle marker. Units are in pixels.
          setRadius: function(radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
          },
          // @method getRadius(): Number
          // Returns the current radius of the circle
          getRadius: function() {
            return this._radius;
          },
          setStyle: function(options) {
            var radius = options && options.radius || this._radius;
            Path.prototype.setStyle.call(this, options);
            this.setRadius(radius);
            return this;
          },
          _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._updateBounds();
          },
          _updateBounds: function() {
            var r2 = this._radius, r22 = this._radiusY || r2, w = this._clickTolerance(), p = [r2 + w, r22 + w];
            this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
          },
          _update: function() {
            if (this._map) {
              this._updatePath();
            }
          },
          _updatePath: function() {
            this._renderer._updateCircle(this);
          },
          _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p) {
            return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
          }
        });
        function circleMarker(latlng, options) {
          return new CircleMarker(latlng, options);
        }
        var Circle = CircleMarker.extend({
          initialize: function(latlng, options, legacyOptions) {
            if (typeof options === "number") {
              options = extend2({}, legacyOptions, { radius: options });
            }
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            if (isNaN(this.options.radius)) {
              throw new Error("Circle radius cannot be NaN");
            }
            this._mRadius = this.options.radius;
          },
          // @method setRadius(radius: Number): this
          // Sets the radius of a circle. Units are in meters.
          setRadius: function(radius) {
            this._mRadius = radius;
            return this.redraw();
          },
          // @method getRadius(): Number
          // Returns the current radius of a circle. Units are in meters.
          getRadius: function() {
            return this._mRadius;
          },
          // @method getBounds(): LatLngBounds
          // Returns the `LatLngBounds` of the path.
          getBounds: function() {
            var half = [this._radius, this._radiusY || this._radius];
            return new LatLngBounds(
              this._map.layerPointToLatLng(this._point.subtract(half)),
              this._map.layerPointToLatLng(this._point.add(half))
            );
          },
          setStyle: Path.prototype.setStyle,
          _project: function() {
            var lng = this._latlng.lng, lat = this._latlng.lat, map = this._map, crs = map.options.crs;
            if (crs.distance === Earth.distance) {
              var d = Math.PI / 180, latR = this._mRadius / Earth.R / d, top = map.project([lat + latR, lng]), bottom = map.project([lat - latR, lng]), p = top.add(bottom).divideBy(2), lat2 = map.unproject(p).lat, lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
              if (isNaN(lngR) || lngR === 0) {
                lngR = latR / Math.cos(Math.PI / 180 * lat);
              }
              this._point = p.subtract(map.getPixelOrigin());
              this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
              this._radiusY = p.y - top.y;
            } else {
              var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
              this._point = map.latLngToLayerPoint(this._latlng);
              this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
            }
            this._updateBounds();
          }
        });
        function circle(latlng, options, legacyOptions) {
          return new Circle(latlng, options, legacyOptions);
        }
        var Polyline = Path.extend({
          // @section
          // @aka Polyline options
          options: {
            // @option smoothFactor: Number = 1.0
            // How much to simplify the polyline on each zoom level. More means
            // better performance and smoother look, and less means more accurate representation.
            smoothFactor: 1,
            // @option noClip: Boolean = false
            // Disable polyline clipping.
            noClip: false
          },
          initialize: function(latlngs, options) {
            setOptions(this, options);
            this._setLatLngs(latlngs);
          },
          // @method getLatLngs(): LatLng[]
          // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
          getLatLngs: function() {
            return this._latlngs;
          },
          // @method setLatLngs(latlngs: LatLng[]): this
          // Replaces all the points in the polyline with the given array of geographical points.
          setLatLngs: function(latlngs) {
            this._setLatLngs(latlngs);
            return this.redraw();
          },
          // @method isEmpty(): Boolean
          // Returns `true` if the Polyline has no LatLngs.
          isEmpty: function() {
            return !this._latlngs.length;
          },
          // @method closestLayerPoint(p: Point): Point
          // Returns the point closest to `p` on the Polyline.
          closestLayerPoint: function(p) {
            var minDistance = Infinity, minPoint = null, closest = _sqClosestPointOnSegment, p1, p2;
            for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
              var points = this._parts[j];
              for (var i = 1, len = points.length; i < len; i++) {
                p1 = points[i - 1];
                p2 = points[i];
                var sqDist = closest(p, p1, p2, true);
                if (sqDist < minDistance) {
                  minDistance = sqDist;
                  minPoint = closest(p, p1, p2);
                }
              }
            }
            if (minPoint) {
              minPoint.distance = Math.sqrt(minDistance);
            }
            return minPoint;
          },
          // @method getCenter(): LatLng
          // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
          getCenter: function() {
            if (!this._map) {
              throw new Error("Must add layer to map before using getCenter()");
            }
            return polylineCenter(this._defaultShape(), this._map.options.crs);
          },
          // @method getBounds(): LatLngBounds
          // Returns the `LatLngBounds` of the path.
          getBounds: function() {
            return this._bounds;
          },
          // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
          // Adds a given point to the polyline. By default, adds to the first ring of
          // the polyline in case of a multi-polyline, but can be overridden by passing
          // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
          addLatLng: function(latlng, latlngs) {
            latlngs = latlngs || this._defaultShape();
            latlng = toLatLng(latlng);
            latlngs.push(latlng);
            this._bounds.extend(latlng);
            return this.redraw();
          },
          _setLatLngs: function(latlngs) {
            this._bounds = new LatLngBounds();
            this._latlngs = this._convertLatLngs(latlngs);
          },
          _defaultShape: function() {
            return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
          },
          // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
          _convertLatLngs: function(latlngs) {
            var result = [], flat = isFlat(latlngs);
            for (var i = 0, len = latlngs.length; i < len; i++) {
              if (flat) {
                result[i] = toLatLng(latlngs[i]);
                this._bounds.extend(result[i]);
              } else {
                result[i] = this._convertLatLngs(latlngs[i]);
              }
            }
            return result;
          },
          _project: function() {
            var pxBounds = new Bounds();
            this._rings = [];
            this._projectLatlngs(this._latlngs, this._rings, pxBounds);
            if (this._bounds.isValid() && pxBounds.isValid()) {
              this._rawPxBounds = pxBounds;
              this._updateBounds();
            }
          },
          _updateBounds: function() {
            var w = this._clickTolerance(), p = new Point(w, w);
            if (!this._rawPxBounds) {
              return;
            }
            this._pxBounds = new Bounds([
              this._rawPxBounds.min.subtract(p),
              this._rawPxBounds.max.add(p)
            ]);
          },
          // recursively turns latlngs into a set of rings with projected coordinates
          _projectLatlngs: function(latlngs, result, projectedBounds) {
            var flat = latlngs[0] instanceof LatLng, len = latlngs.length, i, ring;
            if (flat) {
              ring = [];
              for (i = 0; i < len; i++) {
                ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
                projectedBounds.extend(ring[i]);
              }
              result.push(ring);
            } else {
              for (i = 0; i < len; i++) {
                this._projectLatlngs(latlngs[i], result, projectedBounds);
              }
            }
          },
          // clip polyline by renderer bounds so that we have less to render for performance
          _clipPoints: function() {
            var bounds = this._renderer._bounds;
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
              return;
            }
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var parts = this._parts, i, j, k, len, len2, segment, points;
            for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
              points = this._rings[i];
              for (j = 0, len2 = points.length; j < len2 - 1; j++) {
                segment = clipSegment(points[j], points[j + 1], bounds, j, true);
                if (!segment) {
                  continue;
                }
                parts[k] = parts[k] || [];
                parts[k].push(segment[0]);
                if (segment[1] !== points[j + 1] || j === len2 - 2) {
                  parts[k].push(segment[1]);
                  k++;
                }
              }
            }
          },
          // simplify each clipped part of the polyline for performance
          _simplifyPoints: function() {
            var parts = this._parts, tolerance = this.options.smoothFactor;
            for (var i = 0, len = parts.length; i < len; i++) {
              parts[i] = simplify(parts[i], tolerance);
            }
          },
          _update: function() {
            if (!this._map) {
              return;
            }
            this._clipPoints();
            this._simplifyPoints();
            this._updatePath();
          },
          _updatePath: function() {
            this._renderer._updatePoly(this);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p, closed) {
            var i, j, k, len, len2, part, w = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(p)) {
              return false;
            }
            for (i = 0, len = this._parts.length; i < len; i++) {
              part = this._parts[i];
              for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                if (!closed && j === 0) {
                  continue;
                }
                if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
                  return true;
                }
              }
            }
            return false;
          }
        });
        function polyline(latlngs, options) {
          return new Polyline(latlngs, options);
        }
        Polyline._flat = _flat;
        var Polygon = Polyline.extend({
          options: {
            fill: true
          },
          isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
          },
          // @method getCenter(): LatLng
          // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
          getCenter: function() {
            if (!this._map) {
              throw new Error("Must add layer to map before using getCenter()");
            }
            return polygonCenter(this._defaultShape(), this._map.options.crs);
          },
          _convertLatLngs: function(latlngs) {
            var result = Polyline.prototype._convertLatLngs.call(this, latlngs), len = result.length;
            if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
              result.pop();
            }
            return result;
          },
          _setLatLngs: function(latlngs) {
            Polyline.prototype._setLatLngs.call(this, latlngs);
            if (isFlat(this._latlngs)) {
              this._latlngs = [this._latlngs];
            }
          },
          _defaultShape: function() {
            return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
          },
          _clipPoints: function() {
            var bounds = this._renderer._bounds, w = this.options.weight, p = new Point(w, w);
            bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
              return;
            }
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
              clipped = clipPolygon(this._rings[i], bounds, true);
              if (clipped.length) {
                this._parts.push(clipped);
              }
            }
          },
          _updatePath: function() {
            this._renderer._updatePoly(this, true);
          },
          // Needed by the `Canvas` renderer for interactivity
          _containsPoint: function(p) {
            var inside = false, part, p1, p2, i, j, k, len, len2;
            if (!this._pxBounds || !this._pxBounds.contains(p)) {
              return false;
            }
            for (i = 0, len = this._parts.length; i < len; i++) {
              part = this._parts[i];
              for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                p1 = part[j];
                p2 = part[k];
                if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
                  inside = !inside;
                }
              }
            }
            return inside || Polyline.prototype._containsPoint.call(this, p, true);
          }
        });
        function polygon(latlngs, options) {
          return new Polygon(latlngs, options);
        }
        var GeoJSON = FeatureGroup.extend({
          /* @section
           * @aka GeoJSON options
           *
           * @option pointToLayer: Function = *
           * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
           * called when data is added, passing the GeoJSON point feature and its `LatLng`.
           * The default is to spawn a default `Marker`:
           * ```js
           * function(geoJsonPoint, latlng) {
           * 	return L.marker(latlng);
           * }
           * ```
           *
           * @option style: Function = *
           * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
           * called internally when data is added.
           * The default value is to not override any defaults:
           * ```js
           * function (geoJsonFeature) {
           * 	return {}
           * }
           * ```
           *
           * @option onEachFeature: Function = *
           * A `Function` that will be called once for each created `Feature`, after it has
           * been created and styled. Useful for attaching events and popups to features.
           * The default is to do nothing with the newly created layers:
           * ```js
           * function (feature, layer) {}
           * ```
           *
           * @option filter: Function = *
           * A `Function` that will be used to decide whether to include a feature or not.
           * The default is to include all features:
           * ```js
           * function (geoJsonFeature) {
           * 	return true;
           * }
           * ```
           * Note: dynamically changing the `filter` option will have effect only on newly
           * added data. It will _not_ re-evaluate already included features.
           *
           * @option coordsToLatLng: Function = *
           * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
           * The default is the `coordsToLatLng` static method.
           *
           * @option markersInheritOptions: Boolean = false
           * Whether default Markers for "Point" type Features inherit from group options.
           */
          initialize: function(geojson, options) {
            setOptions(this, options);
            this._layers = {};
            if (geojson) {
              this.addData(geojson);
            }
          },
          // @method addData( <GeoJSON> data ): this
          // Adds a GeoJSON object to the layer.
          addData: function(geojson) {
            var features = isArray2(geojson) ? geojson : geojson.features, i, len, feature;
            if (features) {
              for (i = 0, len = features.length; i < len; i++) {
                feature = features[i];
                if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
                  this.addData(feature);
                }
              }
              return this;
            }
            var options = this.options;
            if (options.filter && !options.filter(geojson)) {
              return this;
            }
            var layer = geometryToLayer(geojson, options);
            if (!layer) {
              return this;
            }
            layer.feature = asFeature(geojson);
            layer.defaultOptions = layer.options;
            this.resetStyle(layer);
            if (options.onEachFeature) {
              options.onEachFeature(geojson, layer);
            }
            return this.addLayer(layer);
          },
          // @method resetStyle( <Path> layer? ): this
          // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
          // If `layer` is omitted, the style of all features in the current layer is reset.
          resetStyle: function(layer) {
            if (layer === void 0) {
              return this.eachLayer(this.resetStyle, this);
            }
            layer.options = extend2({}, layer.defaultOptions);
            this._setLayerStyle(layer, this.options.style);
            return this;
          },
          // @method setStyle( <Function> style ): this
          // Changes styles of GeoJSON vector layers with the given style function.
          setStyle: function(style2) {
            return this.eachLayer(function(layer) {
              this._setLayerStyle(layer, style2);
            }, this);
          },
          _setLayerStyle: function(layer, style2) {
            if (layer.setStyle) {
              if (typeof style2 === "function") {
                style2 = style2(layer.feature);
              }
              layer.setStyle(style2);
            }
          }
        });
        function geometryToLayer(geojson, options) {
          var geometry = geojson.type === "Feature" ? geojson.geometry : geojson, coords = geometry ? geometry.coordinates : null, layers2 = [], pointToLayer = options && options.pointToLayer, _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng, latlng, latlngs, i, len;
          if (!coords && !geometry) {
            return null;
          }
          switch (geometry.type) {
            case "Point":
              latlng = _coordsToLatLng(coords);
              return _pointToLayer(pointToLayer, geojson, latlng, options);
            case "MultiPoint":
              for (i = 0, len = coords.length; i < len; i++) {
                latlng = _coordsToLatLng(coords[i]);
                layers2.push(_pointToLayer(pointToLayer, geojson, latlng, options));
              }
              return new FeatureGroup(layers2);
            case "LineString":
            case "MultiLineString":
              latlngs = coordsToLatLngs(coords, geometry.type === "LineString" ? 0 : 1, _coordsToLatLng);
              return new Polyline(latlngs, options);
            case "Polygon":
            case "MultiPolygon":
              latlngs = coordsToLatLngs(coords, geometry.type === "Polygon" ? 1 : 2, _coordsToLatLng);
              return new Polygon(latlngs, options);
            case "GeometryCollection":
              for (i = 0, len = geometry.geometries.length; i < len; i++) {
                var geoLayer = geometryToLayer({
                  geometry: geometry.geometries[i],
                  type: "Feature",
                  properties: geojson.properties
                }, options);
                if (geoLayer) {
                  layers2.push(geoLayer);
                }
              }
              return new FeatureGroup(layers2);
            case "FeatureCollection":
              for (i = 0, len = geometry.features.length; i < len; i++) {
                var featureLayer = geometryToLayer(geometry.features[i], options);
                if (featureLayer) {
                  layers2.push(featureLayer);
                }
              }
              return new FeatureGroup(layers2);
            default:
              throw new Error("Invalid GeoJSON object.");
          }
        }
        function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
          return pointToLayerFn ? pointToLayerFn(geojson, latlng) : new Marker2(latlng, options && options.markersInheritOptions && options);
        }
        function coordsToLatLng(coords) {
          return new LatLng(coords[1], coords[0], coords[2]);
        }
        function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
          var latlngs = [];
          for (var i = 0, len = coords.length, latlng; i < len; i++) {
            latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
            latlngs.push(latlng);
          }
          return latlngs;
        }
        function latLngToCoords(latlng, precision) {
          latlng = toLatLng(latlng);
          return latlng.alt !== void 0 ? [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] : [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
        }
        function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
          var coords = [];
          for (var i = 0, len = latlngs.length; i < len; i++) {
            coords.push(levelsDeep ? latLngsToCoords(latlngs[i], isFlat(latlngs[i]) ? 0 : levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
          }
          if (!levelsDeep && closed && coords.length > 0) {
            coords.push(coords[0].slice());
          }
          return coords;
        }
        function getFeature(layer, newGeometry) {
          return layer.feature ? extend2({}, layer.feature, { geometry: newGeometry }) : asFeature(newGeometry);
        }
        function asFeature(geojson) {
          if (geojson.type === "Feature" || geojson.type === "FeatureCollection") {
            return geojson;
          }
          return {
            type: "Feature",
            properties: {},
            geometry: geojson
          };
        }
        var PointToGeoJSON = {
          toGeoJSON: function(precision) {
            return getFeature(this, {
              type: "Point",
              coordinates: latLngToCoords(this.getLatLng(), precision)
            });
          }
        };
        Marker2.include(PointToGeoJSON);
        Circle.include(PointToGeoJSON);
        CircleMarker.include(PointToGeoJSON);
        Polyline.include({
          toGeoJSON: function(precision) {
            var multi = !isFlat(this._latlngs);
            var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
            return getFeature(this, {
              type: (multi ? "Multi" : "") + "LineString",
              coordinates: coords
            });
          }
        });
        Polygon.include({
          toGeoJSON: function(precision) {
            var holes = !isFlat(this._latlngs), multi = holes && !isFlat(this._latlngs[0]);
            var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);
            if (!holes) {
              coords = [coords];
            }
            return getFeature(this, {
              type: (multi ? "Multi" : "") + "Polygon",
              coordinates: coords
            });
          }
        });
        LayerGroup.include({
          toMultiPoint: function(precision) {
            var coords = [];
            this.eachLayer(function(layer) {
              coords.push(layer.toGeoJSON(precision).geometry.coordinates);
            });
            return getFeature(this, {
              type: "MultiPoint",
              coordinates: coords
            });
          },
          // @method toGeoJSON(precision?: Number|false): Object
          // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
          // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
          toGeoJSON: function(precision) {
            var type = this.feature && this.feature.geometry && this.feature.geometry.type;
            if (type === "MultiPoint") {
              return this.toMultiPoint(precision);
            }
            var isGeometryCollection = type === "GeometryCollection", jsons = [];
            this.eachLayer(function(layer) {
              if (layer.toGeoJSON) {
                var json = layer.toGeoJSON(precision);
                if (isGeometryCollection) {
                  jsons.push(json.geometry);
                } else {
                  var feature = asFeature(json);
                  if (feature.type === "FeatureCollection") {
                    jsons.push.apply(jsons, feature.features);
                  } else {
                    jsons.push(feature);
                  }
                }
              }
            });
            if (isGeometryCollection) {
              return getFeature(this, {
                geometries: jsons,
                type: "GeometryCollection"
              });
            }
            return {
              type: "FeatureCollection",
              features: jsons
            };
          }
        });
        function geoJSON(geojson, options) {
          return new GeoJSON(geojson, options);
        }
        var geoJson = geoJSON;
        var ImageOverlay = Layer.extend({
          // @section
          // @aka ImageOverlay options
          options: {
            // @option opacity: Number = 1.0
            // The opacity of the image overlay.
            opacity: 1,
            // @option alt: String = ''
            // Text for the `alt` attribute of the image (useful for accessibility).
            alt: "",
            // @option interactive: Boolean = false
            // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
            interactive: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the image.
            // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option errorOverlayUrl: String = ''
            // URL to the overlay image to show in place of the overlay that failed to load.
            errorOverlayUrl: "",
            // @option zIndex: Number = 1
            // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
            zIndex: 1,
            // @option className: String = ''
            // A custom class name to assign to the image. Empty by default.
            className: ""
          },
          initialize: function(url, bounds, options) {
            this._url = url;
            this._bounds = toLatLngBounds(bounds);
            setOptions(this, options);
          },
          onAdd: function() {
            if (!this._image) {
              this._initImage();
              if (this.options.opacity < 1) {
                this._updateOpacity();
              }
            }
            if (this.options.interactive) {
              addClass(this._image, "leaflet-interactive");
              this.addInteractiveTarget(this._image);
            }
            this.getPane().appendChild(this._image);
            this._reset();
          },
          onRemove: function() {
            remove(this._image);
            if (this.options.interactive) {
              this.removeInteractiveTarget(this._image);
            }
          },
          // @method setOpacity(opacity: Number): this
          // Sets the opacity of the overlay.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._image) {
              this._updateOpacity();
            }
            return this;
          },
          setStyle: function(styleOpts) {
            if (styleOpts.opacity) {
              this.setOpacity(styleOpts.opacity);
            }
            return this;
          },
          // @method bringToFront(): this
          // Brings the layer to the top of all overlays.
          bringToFront: function() {
            if (this._map) {
              toFront(this._image);
            }
            return this;
          },
          // @method bringToBack(): this
          // Brings the layer to the bottom of all overlays.
          bringToBack: function() {
            if (this._map) {
              toBack(this._image);
            }
            return this;
          },
          // @method setUrl(url: String): this
          // Changes the URL of the image.
          setUrl: function(url) {
            this._url = url;
            if (this._image) {
              this._image.src = url;
            }
            return this;
          },
          // @method setBounds(bounds: LatLngBounds): this
          // Update the bounds that this ImageOverlay covers
          setBounds: function(bounds) {
            this._bounds = toLatLngBounds(bounds);
            if (this._map) {
              this._reset();
            }
            return this;
          },
          getEvents: function() {
            var events = {
              zoom: this._reset,
              viewreset: this._reset
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @method setZIndex(value: Number): this
          // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
          setZIndex: function(value) {
            this.options.zIndex = value;
            this._updateZIndex();
            return this;
          },
          // @method getBounds(): LatLngBounds
          // Get the bounds that this ImageOverlay covers
          getBounds: function() {
            return this._bounds;
          },
          // @method getElement(): HTMLElement
          // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
          // used by this overlay.
          getElement: function() {
            return this._image;
          },
          _initImage: function() {
            var wasElementSupplied = this._url.tagName === "IMG";
            var img = this._image = wasElementSupplied ? this._url : create$1("img");
            addClass(img, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(img, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(img, this.options.className);
            }
            img.onselectstart = falseFn;
            img.onmousemove = falseFn;
            img.onload = bind2(this.fire, this, "load");
            img.onerror = bind2(this._overlayOnError, this, "error");
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            if (this.options.zIndex) {
              this._updateZIndex();
            }
            if (wasElementSupplied) {
              this._url = img.src;
              return;
            }
            img.src = this._url;
            img.alt = this.options.alt;
          },
          _animateZoom: function(e) {
            var scale2 = this._map.getZoomScale(e.zoom), offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
            setTransform(this._image, offset, scale2);
          },
          _reset: function() {
            var image = this._image, bounds = new Bounds(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ), size = bounds.getSize();
            setPosition(image, bounds.min);
            image.style.width = size.x + "px";
            image.style.height = size.y + "px";
          },
          _updateOpacity: function() {
            setOpacity(this._image, this.options.opacity);
          },
          _updateZIndex: function() {
            if (this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null) {
              this._image.style.zIndex = this.options.zIndex;
            }
          },
          _overlayOnError: function() {
            this.fire("error");
            var errorUrl = this.options.errorOverlayUrl;
            if (errorUrl && this._url !== errorUrl) {
              this._url = errorUrl;
              this._image.src = errorUrl;
            }
          },
          // @method getCenter(): LatLng
          // Returns the center of the ImageOverlay.
          getCenter: function() {
            return this._bounds.getCenter();
          }
        });
        var imageOverlay = function(url, bounds, options) {
          return new ImageOverlay(url, bounds, options);
        };
        var VideoOverlay = ImageOverlay.extend({
          // @section
          // @aka VideoOverlay options
          options: {
            // @option autoplay: Boolean = true
            // Whether the video starts playing automatically when loaded.
            // On some browsers autoplay will only work with `muted: true`
            autoplay: true,
            // @option loop: Boolean = true
            // Whether the video will loop back to the beginning when played.
            loop: true,
            // @option keepAspectRatio: Boolean = true
            // Whether the video will save aspect ratio after the projection.
            // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
            keepAspectRatio: true,
            // @option muted: Boolean = false
            // Whether the video starts on mute when loaded.
            muted: false,
            // @option playsInline: Boolean = true
            // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
            playsInline: true
          },
          _initImage: function() {
            var wasElementSupplied = this._url.tagName === "VIDEO";
            var vid = this._image = wasElementSupplied ? this._url : create$1("video");
            addClass(vid, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(vid, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(vid, this.options.className);
            }
            vid.onselectstart = falseFn;
            vid.onmousemove = falseFn;
            vid.onloadeddata = bind2(this.fire, this, "load");
            if (wasElementSupplied) {
              var sourceElements = vid.getElementsByTagName("source");
              var sources = [];
              for (var j = 0; j < sourceElements.length; j++) {
                sources.push(sourceElements[j].src);
              }
              this._url = sourceElements.length > 0 ? sources : [vid.src];
              return;
            }
            if (!isArray2(this._url)) {
              this._url = [this._url];
            }
            if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, "objectFit")) {
              vid.style["objectFit"] = "fill";
            }
            vid.autoplay = !!this.options.autoplay;
            vid.loop = !!this.options.loop;
            vid.muted = !!this.options.muted;
            vid.playsInline = !!this.options.playsInline;
            for (var i = 0; i < this._url.length; i++) {
              var source = create$1("source");
              source.src = this._url[i];
              vid.appendChild(source);
            }
          }
          // @method getElement(): HTMLVideoElement
          // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
          // used by this overlay.
        });
        function videoOverlay(video, bounds, options) {
          return new VideoOverlay(video, bounds, options);
        }
        var SVGOverlay = ImageOverlay.extend({
          _initImage: function() {
            var el = this._image = this._url;
            addClass(el, "leaflet-image-layer");
            if (this._zoomAnimated) {
              addClass(el, "leaflet-zoom-animated");
            }
            if (this.options.className) {
              addClass(el, this.options.className);
            }
            el.onselectstart = falseFn;
            el.onmousemove = falseFn;
          }
          // @method getElement(): SVGElement
          // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
          // used by this overlay.
        });
        function svgOverlay(el, bounds, options) {
          return new SVGOverlay(el, bounds, options);
        }
        var DivOverlay = Layer.extend({
          // @section
          // @aka DivOverlay options
          options: {
            // @option interactive: Boolean = false
            // If true, the popup/tooltip will listen to the mouse events.
            interactive: false,
            // @option offset: Point = Point(0, 0)
            // The offset of the overlay position.
            offset: [0, 0],
            // @option className: String = ''
            // A custom CSS class name to assign to the overlay.
            className: "",
            // @option pane: String = undefined
            // `Map pane` where the overlay will be added.
            pane: void 0,
            // @option content: String|HTMLElement|Function = ''
            // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
            // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
            content: ""
          },
          initialize: function(options, source) {
            if (options && (options instanceof LatLng || isArray2(options))) {
              this._latlng = toLatLng(options);
              setOptions(this, source);
            } else {
              setOptions(this, options);
              this._source = source;
            }
            if (this.options.content) {
              this._content = this.options.content;
            }
          },
          // @method openOn(map: Map): this
          // Adds the overlay to the map.
          // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
          openOn: function(map) {
            map = arguments.length ? map : this._source._map;
            if (!map.hasLayer(this)) {
              map.addLayer(this);
            }
            return this;
          },
          // @method close(): this
          // Closes the overlay.
          // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
          // and `layer.closePopup()`/`.closeTooltip()`.
          close: function() {
            if (this._map) {
              this._map.removeLayer(this);
            }
            return this;
          },
          // @method toggle(layer?: Layer): this
          // Opens or closes the overlay bound to layer depending on its current state.
          // Argument may be omitted only for overlay bound to layer.
          // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
          toggle: function(layer) {
            if (this._map) {
              this.close();
            } else {
              if (arguments.length) {
                this._source = layer;
              } else {
                layer = this._source;
              }
              this._prepareOpen();
              this.openOn(layer._map);
            }
            return this;
          },
          onAdd: function(map) {
            this._zoomAnimated = map._zoomAnimated;
            if (!this._container) {
              this._initLayout();
            }
            if (map._fadeAnimated) {
              setOpacity(this._container, 0);
            }
            clearTimeout(this._removeTimeout);
            this.getPane().appendChild(this._container);
            this.update();
            if (map._fadeAnimated) {
              setOpacity(this._container, 1);
            }
            this.bringToFront();
            if (this.options.interactive) {
              addClass(this._container, "leaflet-interactive");
              this.addInteractiveTarget(this._container);
            }
          },
          onRemove: function(map) {
            if (map._fadeAnimated) {
              setOpacity(this._container, 0);
              this._removeTimeout = setTimeout(bind2(remove, void 0, this._container), 200);
            } else {
              remove(this._container);
            }
            if (this.options.interactive) {
              removeClass(this._container, "leaflet-interactive");
              this.removeInteractiveTarget(this._container);
            }
          },
          // @namespace DivOverlay
          // @method getLatLng: LatLng
          // Returns the geographical point of the overlay.
          getLatLng: function() {
            return this._latlng;
          },
          // @method setLatLng(latlng: LatLng): this
          // Sets the geographical point where the overlay will open.
          setLatLng: function(latlng) {
            this._latlng = toLatLng(latlng);
            if (this._map) {
              this._updatePosition();
              this._adjustPan();
            }
            return this;
          },
          // @method getContent: String|HTMLElement
          // Returns the content of the overlay.
          getContent: function() {
            return this._content;
          },
          // @method setContent(htmlContent: String|HTMLElement|Function): this
          // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
          // The function should return a `String` or `HTMLElement` to be used in the overlay.
          setContent: function(content) {
            this._content = content;
            this.update();
            return this;
          },
          // @method getElement: String|HTMLElement
          // Returns the HTML container of the overlay.
          getElement: function() {
            return this._container;
          },
          // @method update: null
          // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
          update: function() {
            if (!this._map) {
              return;
            }
            this._container.style.visibility = "hidden";
            this._updateContent();
            this._updateLayout();
            this._updatePosition();
            this._container.style.visibility = "";
            this._adjustPan();
          },
          getEvents: function() {
            var events = {
              zoom: this._updatePosition,
              viewreset: this._updatePosition
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @method isOpen: Boolean
          // Returns `true` when the overlay is visible on the map.
          isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
          },
          // @method bringToFront: this
          // Brings this overlay in front of other overlays (in the same map pane).
          bringToFront: function() {
            if (this._map) {
              toFront(this._container);
            }
            return this;
          },
          // @method bringToBack: this
          // Brings this overlay to the back of other overlays (in the same map pane).
          bringToBack: function() {
            if (this._map) {
              toBack(this._container);
            }
            return this;
          },
          // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
          _prepareOpen: function(latlng) {
            var source = this._source;
            if (!source._map) {
              return false;
            }
            if (source instanceof FeatureGroup) {
              source = null;
              var layers2 = this._source._layers;
              for (var id in layers2) {
                if (layers2[id]._map) {
                  source = layers2[id];
                  break;
                }
              }
              if (!source) {
                return false;
              }
              this._source = source;
            }
            if (!latlng) {
              if (source.getCenter) {
                latlng = source.getCenter();
              } else if (source.getLatLng) {
                latlng = source.getLatLng();
              } else if (source.getBounds) {
                latlng = source.getBounds().getCenter();
              } else {
                throw new Error("Unable to get source layer LatLng.");
              }
            }
            this.setLatLng(latlng);
            if (this._map) {
              this.update();
            }
            return true;
          },
          _updateContent: function() {
            if (!this._content) {
              return;
            }
            var node = this._contentNode;
            var content = typeof this._content === "function" ? this._content(this._source || this) : this._content;
            if (typeof content === "string") {
              node.innerHTML = content;
            } else {
              while (node.hasChildNodes()) {
                node.removeChild(node.firstChild);
              }
              node.appendChild(content);
            }
            this.fire("contentupdate");
          },
          _updatePosition: function() {
            if (!this._map) {
              return;
            }
            var pos = this._map.latLngToLayerPoint(this._latlng), offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (this._zoomAnimated) {
              setPosition(this._container, pos.add(anchor));
            } else {
              offset = offset.add(pos).add(anchor);
            }
            var bottom = this._containerBottom = -offset.y, left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;
            this._container.style.bottom = bottom + "px";
            this._container.style.left = left + "px";
          },
          _getAnchor: function() {
            return [0, 0];
          }
        });
        Map2.include({
          _initOverlay: function(OverlayClass, content, latlng, options) {
            var overlay = content;
            if (!(overlay instanceof OverlayClass)) {
              overlay = new OverlayClass(options).setContent(content);
            }
            if (latlng) {
              overlay.setLatLng(latlng);
            }
            return overlay;
          }
        });
        Layer.include({
          _initOverlay: function(OverlayClass, old, content, options) {
            var overlay = content;
            if (overlay instanceof OverlayClass) {
              setOptions(overlay, options);
              overlay._source = this;
            } else {
              overlay = old && !options ? old : new OverlayClass(options, this);
              overlay.setContent(content);
            }
            return overlay;
          }
        });
        var Popup = DivOverlay.extend({
          // @section
          // @aka Popup options
          options: {
            // @option pane: String = 'popupPane'
            // `Map pane` where the popup will be added.
            pane: "popupPane",
            // @option offset: Point = Point(0, 7)
            // The offset of the popup position.
            offset: [0, 7],
            // @option maxWidth: Number = 300
            // Max width of the popup, in pixels.
            maxWidth: 300,
            // @option minWidth: Number = 50
            // Min width of the popup, in pixels.
            minWidth: 50,
            // @option maxHeight: Number = null
            // If set, creates a scrollable container of the given height
            // inside a popup if its content exceeds it.
            // The scrollable container can be styled using the
            // `leaflet-popup-scrolled` CSS class selector.
            maxHeight: null,
            // @option autoPan: Boolean = true
            // Set it to `false` if you don't want the map to do panning animation
            // to fit the opened popup.
            autoPan: true,
            // @option autoPanPaddingTopLeft: Point = null
            // The margin between the popup and the top left corner of the map
            // view after autopanning was performed.
            autoPanPaddingTopLeft: null,
            // @option autoPanPaddingBottomRight: Point = null
            // The margin between the popup and the bottom right corner of the map
            // view after autopanning was performed.
            autoPanPaddingBottomRight: null,
            // @option autoPanPadding: Point = Point(5, 5)
            // Equivalent of setting both top left and bottom right autopan padding to the same value.
            autoPanPadding: [5, 5],
            // @option keepInView: Boolean = false
            // Set it to `true` if you want to prevent users from panning the popup
            // off of the screen while it is open.
            keepInView: false,
            // @option closeButton: Boolean = true
            // Controls the presence of a close button in the popup.
            closeButton: true,
            // @option autoClose: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the popup closing when another popup is opened.
            autoClose: true,
            // @option closeOnEscapeKey: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the ESC key for closing of the popup.
            closeOnEscapeKey: true,
            // @option closeOnClick: Boolean = *
            // Set it if you want to override the default behavior of the popup closing when user clicks
            // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
            // @option className: String = ''
            // A custom CSS class name to assign to the popup.
            className: ""
          },
          // @namespace Popup
          // @method openOn(map: Map): this
          // Alternative to `map.openPopup(popup)`.
          // Adds the popup to the map and closes the previous one.
          openOn: function(map) {
            map = arguments.length ? map : this._source._map;
            if (!map.hasLayer(this) && map._popup && map._popup.options.autoClose) {
              map.removeLayer(map._popup);
            }
            map._popup = this;
            return DivOverlay.prototype.openOn.call(this, map);
          },
          onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            map.fire("popupopen", { popup: this });
            if (this._source) {
              this._source.fire("popupopen", { popup: this }, true);
              if (!(this._source instanceof Path)) {
                this._source.on("preclick", stopPropagation);
              }
            }
          },
          onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            map.fire("popupclose", { popup: this });
            if (this._source) {
              this._source.fire("popupclose", { popup: this }, true);
              if (!(this._source instanceof Path)) {
                this._source.off("preclick", stopPropagation);
              }
            }
          },
          getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
              events.preclick = this.close;
            }
            if (this.options.keepInView) {
              events.moveend = this._adjustPan;
            }
            return events;
          },
          _initLayout: function() {
            var prefix = "leaflet-popup", container = this._container = create$1(
              "div",
              prefix + " " + (this.options.className || "") + " leaflet-zoom-animated"
            );
            var wrapper = this._wrapper = create$1("div", prefix + "-content-wrapper", container);
            this._contentNode = create$1("div", prefix + "-content", wrapper);
            disableClickPropagation(container);
            disableScrollPropagation(this._contentNode);
            on(container, "contextmenu", stopPropagation);
            this._tipContainer = create$1("div", prefix + "-tip-container", container);
            this._tip = create$1("div", prefix + "-tip", this._tipContainer);
            if (this.options.closeButton) {
              var closeButton = this._closeButton = create$1("a", prefix + "-close-button", container);
              closeButton.setAttribute("role", "button");
              closeButton.setAttribute("aria-label", "Close popup");
              closeButton.href = "#close";
              closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';
              on(closeButton, "click", function(ev) {
                preventDefault(ev);
                this.close();
              }, this);
            }
          },
          _updateLayout: function() {
            var container = this._contentNode, style2 = container.style;
            style2.width = "";
            style2.whiteSpace = "nowrap";
            var width = container.offsetWidth;
            width = Math.min(width, this.options.maxWidth);
            width = Math.max(width, this.options.minWidth);
            style2.width = width + 1 + "px";
            style2.whiteSpace = "";
            style2.height = "";
            var height = container.offsetHeight, maxHeight = this.options.maxHeight, scrolledClass = "leaflet-popup-scrolled";
            if (maxHeight && height > maxHeight) {
              style2.height = maxHeight + "px";
              addClass(container, scrolledClass);
            } else {
              removeClass(container, scrolledClass);
            }
            this._containerWidth = this._container.offsetWidth;
          },
          _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), anchor = this._getAnchor();
            setPosition(this._container, pos.add(anchor));
          },
          _adjustPan: function() {
            if (!this.options.autoPan) {
              return;
            }
            if (this._map._panAnim) {
              this._map._panAnim.stop();
            }
            if (this._autopanning) {
              this._autopanning = false;
              return;
            }
            var map = this._map, marginBottom = parseInt(getStyle(this._container, "marginBottom"), 10) || 0, containerHeight = this._container.offsetHeight + marginBottom, containerWidth = this._containerWidth, layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);
            layerPos._add(getPosition(this._container));
            var containerPos = map.layerPointToContainerPoint(layerPos), padding = toPoint(this.options.autoPanPadding), paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding), paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding), size = map.getSize(), dx = 0, dy = 0;
            if (containerPos.x + containerWidth + paddingBR.x > size.x) {
              dx = containerPos.x + containerWidth - size.x + paddingBR.x;
            }
            if (containerPos.x - dx - paddingTL.x < 0) {
              dx = containerPos.x - paddingTL.x;
            }
            if (containerPos.y + containerHeight + paddingBR.y > size.y) {
              dy = containerPos.y + containerHeight - size.y + paddingBR.y;
            }
            if (containerPos.y - dy - paddingTL.y < 0) {
              dy = containerPos.y - paddingTL.y;
            }
            if (dx || dy) {
              if (this.options.keepInView) {
                this._autopanning = true;
              }
              map.fire("autopanstart").panBy([dx, dy]);
            }
          },
          _getAnchor: function() {
            return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
          }
        });
        var popup = function(options, source) {
          return new Popup(options, source);
        };
        Map2.mergeOptions({
          closePopupOnClick: true
        });
        Map2.include({
          // @method openPopup(popup: Popup): this
          // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
          // @alternative
          // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
          // Creates a popup with the specified content and options and opens it in the given point on a map.
          openPopup: function(popup2, latlng, options) {
            this._initOverlay(Popup, popup2, latlng, options).openOn(this);
            return this;
          },
          // @method closePopup(popup?: Popup): this
          // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
          closePopup: function(popup2) {
            popup2 = arguments.length ? popup2 : this._popup;
            if (popup2) {
              popup2.close();
            }
            return this;
          }
        });
        Layer.include({
          // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
          // Binds a popup to the layer with the passed `content` and sets up the
          // necessary event listeners. If a `Function` is passed it will receive
          // the layer as the first argument and should return a `String` or `HTMLElement`.
          bindPopup: function(content, options) {
            this._popup = this._initOverlay(Popup, this._popup, content, options);
            if (!this._popupHandlersAdded) {
              this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              });
              this._popupHandlersAdded = true;
            }
            return this;
          },
          // @method unbindPopup(): this
          // Removes the popup previously bound with `bindPopup`.
          unbindPopup: function() {
            if (this._popup) {
              this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              });
              this._popupHandlersAdded = false;
              this._popup = null;
            }
            return this;
          },
          // @method openPopup(latlng?: LatLng): this
          // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
          openPopup: function(latlng) {
            if (this._popup) {
              if (!(this instanceof FeatureGroup)) {
                this._popup._source = this;
              }
              if (this._popup._prepareOpen(latlng || this._latlng)) {
                this._popup.openOn(this._map);
              }
            }
            return this;
          },
          // @method closePopup(): this
          // Closes the popup bound to this layer if it is open.
          closePopup: function() {
            if (this._popup) {
              this._popup.close();
            }
            return this;
          },
          // @method togglePopup(): this
          // Opens or closes the popup bound to this layer depending on its current state.
          togglePopup: function() {
            if (this._popup) {
              this._popup.toggle(this);
            }
            return this;
          },
          // @method isPopupOpen(): boolean
          // Returns `true` if the popup bound to this layer is currently open.
          isPopupOpen: function() {
            return this._popup ? this._popup.isOpen() : false;
          },
          // @method setPopupContent(content: String|HTMLElement|Popup): this
          // Sets the content of the popup bound to this layer.
          setPopupContent: function(content) {
            if (this._popup) {
              this._popup.setContent(content);
            }
            return this;
          },
          // @method getPopup(): Popup
          // Returns the popup bound to this layer.
          getPopup: function() {
            return this._popup;
          },
          _openPopup: function(e) {
            if (!this._popup || !this._map) {
              return;
            }
            stop(e);
            var target = e.layer || e.target;
            if (this._popup._source === target && !(target instanceof Path)) {
              if (this._map.hasLayer(this._popup)) {
                this.closePopup();
              } else {
                this.openPopup(e.latlng);
              }
              return;
            }
            this._popup._source = target;
            this.openPopup(e.latlng);
          },
          _movePopup: function(e) {
            this._popup.setLatLng(e.latlng);
          },
          _onKeyPress: function(e) {
            if (e.originalEvent.keyCode === 13) {
              this._openPopup(e);
            }
          }
        });
        var Tooltip = DivOverlay.extend({
          // @section
          // @aka Tooltip options
          options: {
            // @option pane: String = 'tooltipPane'
            // `Map pane` where the tooltip will be added.
            pane: "tooltipPane",
            // @option offset: Point = Point(0, 0)
            // Optional offset of the tooltip position.
            offset: [0, 0],
            // @option direction: String = 'auto'
            // Direction where to open the tooltip. Possible values are: `right`, `left`,
            // `top`, `bottom`, `center`, `auto`.
            // `auto` will dynamically switch between `right` and `left` according to the tooltip
            // position on the map.
            direction: "auto",
            // @option permanent: Boolean = false
            // Whether to open the tooltip permanently or only on mouseover.
            permanent: false,
            // @option sticky: Boolean = false
            // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
            sticky: false,
            // @option opacity: Number = 0.9
            // Tooltip container opacity.
            opacity: 0.9
          },
          onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            this.setOpacity(this.options.opacity);
            map.fire("tooltipopen", { tooltip: this });
            if (this._source) {
              this.addEventParent(this._source);
              this._source.fire("tooltipopen", { tooltip: this }, true);
            }
          },
          onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            map.fire("tooltipclose", { tooltip: this });
            if (this._source) {
              this.removeEventParent(this._source);
              this._source.fire("tooltipclose", { tooltip: this }, true);
            }
          },
          getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (!this.options.permanent) {
              events.preclick = this.close;
            }
            return events;
          },
          _initLayout: function() {
            var prefix = "leaflet-tooltip", className = prefix + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = create$1("div", className);
            this._container.setAttribute("role", "tooltip");
            this._container.setAttribute("id", "leaflet-tooltip-" + stamp(this));
          },
          _updateLayout: function() {
          },
          _adjustPan: function() {
          },
          _setPosition: function(pos) {
            var subX, subY, map = this._map, container = this._container, centerPoint = map.latLngToContainerPoint(map.getCenter()), tooltipPoint = map.layerPointToContainerPoint(pos), direction = this.options.direction, tooltipWidth = container.offsetWidth, tooltipHeight = container.offsetHeight, offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (direction === "top") {
              subX = tooltipWidth / 2;
              subY = tooltipHeight;
            } else if (direction === "bottom") {
              subX = tooltipWidth / 2;
              subY = 0;
            } else if (direction === "center") {
              subX = tooltipWidth / 2;
              subY = tooltipHeight / 2;
            } else if (direction === "right") {
              subX = 0;
              subY = tooltipHeight / 2;
            } else if (direction === "left") {
              subX = tooltipWidth;
              subY = tooltipHeight / 2;
            } else if (tooltipPoint.x < centerPoint.x) {
              direction = "right";
              subX = 0;
              subY = tooltipHeight / 2;
            } else {
              direction = "left";
              subX = tooltipWidth + (offset.x + anchor.x) * 2;
              subY = tooltipHeight / 2;
            }
            pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);
            removeClass(container, "leaflet-tooltip-right");
            removeClass(container, "leaflet-tooltip-left");
            removeClass(container, "leaflet-tooltip-top");
            removeClass(container, "leaflet-tooltip-bottom");
            addClass(container, "leaflet-tooltip-" + direction);
            setPosition(container, pos);
          },
          _updatePosition: function() {
            var pos = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(pos);
          },
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._container) {
              setOpacity(this._container, opacity);
            }
          },
          _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            this._setPosition(pos);
          },
          _getAnchor: function() {
            return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
          }
        });
        var tooltip = function(options, source) {
          return new Tooltip(options, source);
        };
        Map2.include({
          // @method openTooltip(tooltip: Tooltip): this
          // Opens the specified tooltip.
          // @alternative
          // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
          // Creates a tooltip with the specified content and options and open it.
          openTooltip: function(tooltip2, latlng, options) {
            this._initOverlay(Tooltip, tooltip2, latlng, options).openOn(this);
            return this;
          },
          // @method closeTooltip(tooltip: Tooltip): this
          // Closes the tooltip given as parameter.
          closeTooltip: function(tooltip2) {
            tooltip2.close();
            return this;
          }
        });
        Layer.include({
          // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
          // Binds a tooltip to the layer with the passed `content` and sets up the
          // necessary event listeners. If a `Function` is passed it will receive
          // the layer as the first argument and should return a `String` or `HTMLElement`.
          bindTooltip: function(content, options) {
            if (this._tooltip && this.isTooltipOpen()) {
              this.unbindTooltip();
            }
            this._tooltip = this._initOverlay(Tooltip, this._tooltip, content, options);
            this._initTooltipInteractions();
            if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
              this.openTooltip();
            }
            return this;
          },
          // @method unbindTooltip(): this
          // Removes the tooltip previously bound with `bindTooltip`.
          unbindTooltip: function() {
            if (this._tooltip) {
              this._initTooltipInteractions(true);
              this.closeTooltip();
              this._tooltip = null;
            }
            return this;
          },
          _initTooltipInteractions: function(remove2) {
            if (!remove2 && this._tooltipHandlersAdded) {
              return;
            }
            var onOff = remove2 ? "off" : "on", events = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            if (!this._tooltip.options.permanent) {
              events.mouseover = this._openTooltip;
              events.mouseout = this.closeTooltip;
              events.click = this._openTooltip;
              if (this._map) {
                this._addFocusListeners();
              } else {
                events.add = this._addFocusListeners;
              }
            } else {
              events.add = this._openTooltip;
            }
            if (this._tooltip.options.sticky) {
              events.mousemove = this._moveTooltip;
            }
            this[onOff](events);
            this._tooltipHandlersAdded = !remove2;
          },
          // @method openTooltip(latlng?: LatLng): this
          // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
          openTooltip: function(latlng) {
            if (this._tooltip) {
              if (!(this instanceof FeatureGroup)) {
                this._tooltip._source = this;
              }
              if (this._tooltip._prepareOpen(latlng)) {
                this._tooltip.openOn(this._map);
                if (this.getElement) {
                  this._setAriaDescribedByOnLayer(this);
                } else if (this.eachLayer) {
                  this.eachLayer(this._setAriaDescribedByOnLayer, this);
                }
              }
            }
            return this;
          },
          // @method closeTooltip(): this
          // Closes the tooltip bound to this layer if it is open.
          closeTooltip: function() {
            if (this._tooltip) {
              return this._tooltip.close();
            }
          },
          // @method toggleTooltip(): this
          // Opens or closes the tooltip bound to this layer depending on its current state.
          toggleTooltip: function() {
            if (this._tooltip) {
              this._tooltip.toggle(this);
            }
            return this;
          },
          // @method isTooltipOpen(): boolean
          // Returns `true` if the tooltip bound to this layer is currently open.
          isTooltipOpen: function() {
            return this._tooltip.isOpen();
          },
          // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
          // Sets the content of the tooltip bound to this layer.
          setTooltipContent: function(content) {
            if (this._tooltip) {
              this._tooltip.setContent(content);
            }
            return this;
          },
          // @method getTooltip(): Tooltip
          // Returns the tooltip bound to this layer.
          getTooltip: function() {
            return this._tooltip;
          },
          _addFocusListeners: function() {
            if (this.getElement) {
              this._addFocusListenersOnLayer(this);
            } else if (this.eachLayer) {
              this.eachLayer(this._addFocusListenersOnLayer, this);
            }
          },
          _addFocusListenersOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
              on(el, "focus", function() {
                this._tooltip._source = layer;
                this.openTooltip();
              }, this);
              on(el, "blur", this.closeTooltip, this);
            }
          },
          _setAriaDescribedByOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
              el.setAttribute("aria-describedby", this._tooltip._container.id);
            }
          },
          _openTooltip: function(e) {
            if (!this._tooltip || !this._map) {
              return;
            }
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = true;
              var that = this;
              this._map.once("moveend", function() {
                that._openOnceFlag = false;
                that._openTooltip(e);
              });
              return;
            }
            this._tooltip._source = e.layer || e.target;
            this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
          },
          _moveTooltip: function(e) {
            var latlng = e.latlng, containerPoint, layerPoint;
            if (this._tooltip.options.sticky && e.originalEvent) {
              containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
              layerPoint = this._map.containerPointToLayerPoint(containerPoint);
              latlng = this._map.layerPointToLatLng(layerPoint);
            }
            this._tooltip.setLatLng(latlng);
          }
        });
        var DivIcon = Icon2.extend({
          options: {
            // @section
            // @aka DivIcon options
            iconSize: [12, 12],
            // also can be set through CSS
            // iconAnchor: (Point),
            // popupAnchor: (Point),
            // @option html: String|HTMLElement = ''
            // Custom HTML code to put inside the div element, empty by default. Alternatively,
            // an instance of `HTMLElement`.
            html: false,
            // @option bgPos: Point = [0, 0]
            // Optional relative position of the background, in pixels
            bgPos: null,
            className: "leaflet-div-icon"
          },
          createIcon: function(oldIcon) {
            var div = oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"), options = this.options;
            if (options.html instanceof Element) {
              empty(div);
              div.appendChild(options.html);
            } else {
              div.innerHTML = options.html !== false ? options.html : "";
            }
            if (options.bgPos) {
              var bgPos = toPoint(options.bgPos);
              div.style.backgroundPosition = -bgPos.x + "px " + -bgPos.y + "px";
            }
            this._setIconStyles(div, "icon");
            return div;
          },
          createShadow: function() {
            return null;
          }
        });
        function divIcon(options) {
          return new DivIcon(options);
        }
        Icon2.Default = IconDefault;
        var GridLayer = Layer.extend({
          // @section
          // @aka GridLayer options
          options: {
            // @option tileSize: Number|Point = 256
            // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
            tileSize: 256,
            // @option opacity: Number = 1.0
            // Opacity of the tiles. Can be used in the `createTile()` function.
            opacity: 1,
            // @option updateWhenIdle: Boolean = (depends)
            // Load new tiles only when panning ends.
            // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
            // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
            // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
            updateWhenIdle: Browser.mobile,
            // @option updateWhenZooming: Boolean = true
            // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
            updateWhenZooming: true,
            // @option updateInterval: Number = 200
            // Tiles will not update more than once every `updateInterval` milliseconds when panning.
            updateInterval: 200,
            // @option zIndex: Number = 1
            // The explicit zIndex of the tile layer.
            zIndex: 1,
            // @option bounds: LatLngBounds = undefined
            // If set, tiles will only be loaded inside the set `LatLngBounds`.
            bounds: null,
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = undefined
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: void 0,
            // @option maxNativeZoom: Number = undefined
            // Maximum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
            // from `maxNativeZoom` level and auto-scaled.
            maxNativeZoom: void 0,
            // @option minNativeZoom: Number = undefined
            // Minimum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
            // from `minNativeZoom` level and auto-scaled.
            minNativeZoom: void 0,
            // @option noWrap: Boolean = false
            // Whether the layer is wrapped around the antimeridian. If `true`, the
            // GridLayer will only be displayed once at low zoom levels. Has no
            // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
            // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
            // tiles outside the CRS limits.
            noWrap: false,
            // @option pane: String = 'tilePane'
            // `Map pane` where the grid layer will be added.
            pane: "tilePane",
            // @option className: String = ''
            // A custom class name to assign to the tile layer. Empty by default.
            className: "",
            // @option keepBuffer: Number = 2
            // When panning the map, keep this many rows and columns of tiles before unloading them.
            keepBuffer: 2
          },
          initialize: function(options) {
            setOptions(this, options);
          },
          onAdd: function() {
            this._initContainer();
            this._levels = {};
            this._tiles = {};
            this._resetView();
          },
          beforeAdd: function(map) {
            map._addZoomLimit(this);
          },
          onRemove: function(map) {
            this._removeAllTiles();
            remove(this._container);
            map._removeZoomLimit(this);
            this._container = null;
            this._tileZoom = void 0;
          },
          // @method bringToFront: this
          // Brings the tile layer to the top of all tile layers.
          bringToFront: function() {
            if (this._map) {
              toFront(this._container);
              this._setAutoZIndex(Math.max);
            }
            return this;
          },
          // @method bringToBack: this
          // Brings the tile layer to the bottom of all tile layers.
          bringToBack: function() {
            if (this._map) {
              toBack(this._container);
              this._setAutoZIndex(Math.min);
            }
            return this;
          },
          // @method getContainer: HTMLElement
          // Returns the HTML element that contains the tiles for this layer.
          getContainer: function() {
            return this._container;
          },
          // @method setOpacity(opacity: Number): this
          // Changes the [opacity](#gridlayer-opacity) of the grid layer.
          setOpacity: function(opacity) {
            this.options.opacity = opacity;
            this._updateOpacity();
            return this;
          },
          // @method setZIndex(zIndex: Number): this
          // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
          setZIndex: function(zIndex) {
            this.options.zIndex = zIndex;
            this._updateZIndex();
            return this;
          },
          // @method isLoading: Boolean
          // Returns `true` if any tile in the grid layer has not finished loading.
          isLoading: function() {
            return this._loading;
          },
          // @method redraw: this
          // Causes the layer to clear all the tiles and request them again.
          redraw: function() {
            if (this._map) {
              this._removeAllTiles();
              var tileZoom = this._clampZoom(this._map.getZoom());
              if (tileZoom !== this._tileZoom) {
                this._tileZoom = tileZoom;
                this._updateLevels();
              }
              this._update();
            }
            return this;
          },
          getEvents: function() {
            var events = {
              viewprereset: this._invalidateAll,
              viewreset: this._resetView,
              zoom: this._resetView,
              moveend: this._onMoveEnd
            };
            if (!this.options.updateWhenIdle) {
              if (!this._onMove) {
                this._onMove = throttle2(this._onMoveEnd, this.options.updateInterval, this);
              }
              events.move = this._onMove;
            }
            if (this._zoomAnimated) {
              events.zoomanim = this._animateZoom;
            }
            return events;
          },
          // @section Extension methods
          // Layers extending `GridLayer` shall reimplement the following method.
          // @method createTile(coords: Object, done?: Function): HTMLElement
          // Called only internally, must be overridden by classes extending `GridLayer`.
          // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
          // is specified, it must be called when the tile has finished loading and drawing.
          createTile: function() {
            return document.createElement("div");
          },
          // @section
          // @method getTileSize: Point
          // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
          getTileSize: function() {
            var s = this.options.tileSize;
            return s instanceof Point ? s : new Point(s, s);
          },
          _updateZIndex: function() {
            if (this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null) {
              this._container.style.zIndex = this.options.zIndex;
            }
          },
          _setAutoZIndex: function(compare) {
            var layers2 = this.getPane().children, edgeZIndex = -compare(-Infinity, Infinity);
            for (var i = 0, len = layers2.length, zIndex; i < len; i++) {
              zIndex = layers2[i].style.zIndex;
              if (layers2[i] !== this._container && zIndex) {
                edgeZIndex = compare(edgeZIndex, +zIndex);
              }
            }
            if (isFinite(edgeZIndex)) {
              this.options.zIndex = edgeZIndex + compare(-1, 1);
              this._updateZIndex();
            }
          },
          _updateOpacity: function() {
            if (!this._map) {
              return;
            }
            if (Browser.ielt9) {
              return;
            }
            setOpacity(this._container, this.options.opacity);
            var now = +/* @__PURE__ */ new Date(), nextFrame = false, willPrune = false;
            for (var key in this._tiles) {
              var tile = this._tiles[key];
              if (!tile.current || !tile.loaded) {
                continue;
              }
              var fade = Math.min(1, (now - tile.loaded) / 200);
              setOpacity(tile.el, fade);
              if (fade < 1) {
                nextFrame = true;
              } else {
                if (tile.active) {
                  willPrune = true;
                } else {
                  this._onOpaqueTile(tile);
                }
                tile.active = true;
              }
            }
            if (willPrune && !this._noPrune) {
              this._pruneTiles();
            }
            if (nextFrame) {
              cancelAnimFrame(this._fadeFrame);
              this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            }
          },
          _onOpaqueTile: falseFn,
          _initContainer: function() {
            if (this._container) {
              return;
            }
            this._container = create$1("div", "leaflet-layer " + (this.options.className || ""));
            this._updateZIndex();
            if (this.options.opacity < 1) {
              this._updateOpacity();
            }
            this.getPane().appendChild(this._container);
          },
          _updateLevels: function() {
            var zoom2 = this._tileZoom, maxZoom = this.options.maxZoom;
            if (zoom2 === void 0) {
              return void 0;
            }
            for (var z2 in this._levels) {
              z2 = Number(z2);
              if (this._levels[z2].el.children.length || z2 === zoom2) {
                this._levels[z2].el.style.zIndex = maxZoom - Math.abs(zoom2 - z2);
                this._onUpdateLevel(z2);
              } else {
                remove(this._levels[z2].el);
                this._removeTilesAtZoom(z2);
                this._onRemoveLevel(z2);
                delete this._levels[z2];
              }
            }
            var level = this._levels[zoom2], map = this._map;
            if (!level) {
              level = this._levels[zoom2] = {};
              level.el = create$1("div", "leaflet-tile-container leaflet-zoom-animated", this._container);
              level.el.style.zIndex = maxZoom;
              level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom2).round();
              level.zoom = zoom2;
              this._setZoomTransform(level, map.getCenter(), map.getZoom());
              falseFn(level.el.offsetWidth);
              this._onCreateLevel(level);
            }
            this._level = level;
            return level;
          },
          _onUpdateLevel: falseFn,
          _onRemoveLevel: falseFn,
          _onCreateLevel: falseFn,
          _pruneTiles: function() {
            if (!this._map) {
              return;
            }
            var key, tile;
            var zoom2 = this._map.getZoom();
            if (zoom2 > this.options.maxZoom || zoom2 < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (key in this._tiles) {
              tile = this._tiles[key];
              tile.retain = tile.current;
            }
            for (key in this._tiles) {
              tile = this._tiles[key];
              if (tile.current && !tile.active) {
                var coords = tile.coords;
                if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
                  this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
                }
              }
            }
            for (key in this._tiles) {
              if (!this._tiles[key].retain) {
                this._removeTile(key);
              }
            }
          },
          _removeTilesAtZoom: function(zoom2) {
            for (var key in this._tiles) {
              if (this._tiles[key].coords.z !== zoom2) {
                continue;
              }
              this._removeTile(key);
            }
          },
          _removeAllTiles: function() {
            for (var key in this._tiles) {
              this._removeTile(key);
            }
          },
          _invalidateAll: function() {
            for (var z2 in this._levels) {
              remove(this._levels[z2].el);
              this._onRemoveLevel(Number(z2));
              delete this._levels[z2];
            }
            this._removeAllTiles();
            this._tileZoom = void 0;
          },
          _retainParent: function(x, y2, z2, minZoom) {
            var x2 = Math.floor(x / 2), y22 = Math.floor(y2 / 2), z22 = z2 - 1, coords2 = new Point(+x2, +y22);
            coords2.z = +z22;
            var key = this._tileCoordsToKey(coords2), tile = this._tiles[key];
            if (tile && tile.active) {
              tile.retain = true;
              return true;
            } else if (tile && tile.loaded) {
              tile.retain = true;
            }
            if (z22 > minZoom) {
              return this._retainParent(x2, y22, z22, minZoom);
            }
            return false;
          },
          _retainChildren: function(x, y2, z2, maxZoom) {
            for (var i = 2 * x; i < 2 * x + 2; i++) {
              for (var j = 2 * y2; j < 2 * y2 + 2; j++) {
                var coords = new Point(i, j);
                coords.z = z2 + 1;
                var key = this._tileCoordsToKey(coords), tile = this._tiles[key];
                if (tile && tile.active) {
                  tile.retain = true;
                  continue;
                } else if (tile && tile.loaded) {
                  tile.retain = true;
                }
                if (z2 + 1 < maxZoom) {
                  this._retainChildren(i, j, z2 + 1, maxZoom);
                }
              }
            }
          },
          _resetView: function(e) {
            var animating = e && (e.pinch || e.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
          },
          _animateZoom: function(e) {
            this._setView(e.center, e.zoom, true, e.noUpdate);
          },
          _clampZoom: function(zoom2) {
            var options = this.options;
            if (void 0 !== options.minNativeZoom && zoom2 < options.minNativeZoom) {
              return options.minNativeZoom;
            }
            if (void 0 !== options.maxNativeZoom && options.maxNativeZoom < zoom2) {
              return options.maxNativeZoom;
            }
            return zoom2;
          },
          _setView: function(center, zoom2, noPrune, noUpdate) {
            var tileZoom = Math.round(zoom2);
            if (this.options.maxZoom !== void 0 && tileZoom > this.options.maxZoom || this.options.minZoom !== void 0 && tileZoom < this.options.minZoom) {
              tileZoom = void 0;
            } else {
              tileZoom = this._clampZoom(tileZoom);
            }
            var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;
            if (!noUpdate || tileZoomChanged) {
              this._tileZoom = tileZoom;
              if (this._abortLoading) {
                this._abortLoading();
              }
              this._updateLevels();
              this._resetGrid();
              if (tileZoom !== void 0) {
                this._update(center);
              }
              if (!noPrune) {
                this._pruneTiles();
              }
              this._noPrune = !!noPrune;
            }
            this._setZoomTransforms(center, zoom2);
          },
          _setZoomTransforms: function(center, zoom2) {
            for (var i in this._levels) {
              this._setZoomTransform(this._levels[i], center, zoom2);
            }
          },
          _setZoomTransform: function(level, center, zoom2) {
            var scale2 = this._map.getZoomScale(zoom2, level.zoom), translate = level.origin.multiplyBy(scale2).subtract(this._map._getNewPixelOrigin(center, zoom2)).round();
            if (Browser.any3d) {
              setTransform(level.el, translate, scale2);
            } else {
              setPosition(level.el, translate);
            }
          },
          _resetGrid: function() {
            var map = this._map, crs = map.options.crs, tileSize = this._tileSize = this.getTileSize(), tileZoom = this._tileZoom;
            var bounds = this._map.getPixelWorldBounds(this._tileZoom);
            if (bounds) {
              this._globalTileRange = this._pxBoundsToTileRange(bounds);
            }
            this._wrapX = crs.wrapLng && !this.options.noWrap && [
              Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
              Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
            ];
            this._wrapY = crs.wrapLat && !this.options.noWrap && [
              Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
              Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
            ];
          },
          _onMoveEnd: function() {
            if (!this._map || this._map._animatingZoom) {
              return;
            }
            this._update();
          },
          _getTiledPixelBounds: function(center) {
            var map = this._map, mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(), scale2 = map.getZoomScale(mapZoom, this._tileZoom), pixelCenter = map.project(center, this._tileZoom).floor(), halfSize = map.getSize().divideBy(scale2 * 2);
            return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
          },
          // Private method to load tiles in the grid's active zoom level according to map bounds
          _update: function(center) {
            var map = this._map;
            if (!map) {
              return;
            }
            var zoom2 = this._clampZoom(map.getZoom());
            if (center === void 0) {
              center = map.getCenter();
            }
            if (this._tileZoom === void 0) {
              return;
            }
            var pixelBounds = this._getTiledPixelBounds(center), tileRange = this._pxBoundsToTileRange(pixelBounds), tileCenter = tileRange.getCenter(), queue = [], margin = this.options.keepBuffer, noPruneRange = new Bounds(
              tileRange.getBottomLeft().subtract([margin, -margin]),
              tileRange.getTopRight().add([margin, -margin])
            );
            if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) {
              throw new Error("Attempted to load an infinite number of tiles");
            }
            for (var key in this._tiles) {
              var c = this._tiles[key].coords;
              if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
                this._tiles[key].current = false;
              }
            }
            if (Math.abs(zoom2 - this._tileZoom) > 1) {
              this._setView(center, zoom2);
              return;
            }
            for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
              for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
                var coords = new Point(i, j);
                coords.z = this._tileZoom;
                if (!this._isValidTile(coords)) {
                  continue;
                }
                var tile = this._tiles[this._tileCoordsToKey(coords)];
                if (tile) {
                  tile.current = true;
                } else {
                  queue.push(coords);
                }
              }
            }
            queue.sort(function(a, b) {
              return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
            });
            if (queue.length !== 0) {
              if (!this._loading) {
                this._loading = true;
                this.fire("loading");
              }
              var fragment = document.createDocumentFragment();
              for (i = 0; i < queue.length; i++) {
                this._addTile(queue[i], fragment);
              }
              this._level.el.appendChild(fragment);
            }
          },
          _isValidTile: function(coords) {
            var crs = this._map.options.crs;
            if (!crs.infinite) {
              var bounds = this._globalTileRange;
              if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) {
                return false;
              }
            }
            if (!this.options.bounds) {
              return true;
            }
            var tileBounds = this._tileCoordsToBounds(coords);
            return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
          },
          _keyToBounds: function(key) {
            return this._tileCoordsToBounds(this._keyToTileCoords(key));
          },
          _tileCoordsToNwSe: function(coords) {
            var map = this._map, tileSize = this.getTileSize(), nwPoint = coords.scaleBy(tileSize), sePoint = nwPoint.add(tileSize), nw = map.unproject(nwPoint, coords.z), se = map.unproject(sePoint, coords.z);
            return [nw, se];
          },
          // converts tile coordinates to its geographical bounds
          _tileCoordsToBounds: function(coords) {
            var bp = this._tileCoordsToNwSe(coords), bounds = new LatLngBounds(bp[0], bp[1]);
            if (!this.options.noWrap) {
              bounds = this._map.wrapLatLngBounds(bounds);
            }
            return bounds;
          },
          // converts tile coordinates to key for the tile cache
          _tileCoordsToKey: function(coords) {
            return coords.x + ":" + coords.y + ":" + coords.z;
          },
          // converts tile cache key to coordinates
          _keyToTileCoords: function(key) {
            var k = key.split(":"), coords = new Point(+k[0], +k[1]);
            coords.z = +k[2];
            return coords;
          },
          _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) {
              return;
            }
            remove(tile.el);
            delete this._tiles[key];
            this.fire("tileunload", {
              tile: tile.el,
              coords: this._keyToTileCoords(key)
            });
          },
          _initTile: function(tile) {
            addClass(tile, "leaflet-tile");
            var tileSize = this.getTileSize();
            tile.style.width = tileSize.x + "px";
            tile.style.height = tileSize.y + "px";
            tile.onselectstart = falseFn;
            tile.onmousemove = falseFn;
            if (Browser.ielt9 && this.options.opacity < 1) {
              setOpacity(tile, this.options.opacity);
            }
          },
          _addTile: function(coords, container) {
            var tilePos = this._getTilePos(coords), key = this._tileCoordsToKey(coords);
            var tile = this.createTile(this._wrapCoords(coords), bind2(this._tileReady, this, coords));
            this._initTile(tile);
            if (this.createTile.length < 2) {
              requestAnimFrame(bind2(this._tileReady, this, coords, null, tile));
            }
            setPosition(tile, tilePos);
            this._tiles[key] = {
              el: tile,
              coords,
              current: true
            };
            container.appendChild(tile);
            this.fire("tileloadstart", {
              tile,
              coords
            });
          },
          _tileReady: function(coords, err, tile) {
            if (err) {
              this.fire("tileerror", {
                error: err,
                tile,
                coords
              });
            }
            var key = this._tileCoordsToKey(coords);
            tile = this._tiles[key];
            if (!tile) {
              return;
            }
            tile.loaded = +/* @__PURE__ */ new Date();
            if (this._map._fadeAnimated) {
              setOpacity(tile.el, 0);
              cancelAnimFrame(this._fadeFrame);
              this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            } else {
              tile.active = true;
              this._pruneTiles();
            }
            if (!err) {
              addClass(tile.el, "leaflet-tile-loaded");
              this.fire("tileload", {
                tile: tile.el,
                coords
              });
            }
            if (this._noTilesToLoad()) {
              this._loading = false;
              this.fire("load");
              if (Browser.ielt9 || !this._map._fadeAnimated) {
                requestAnimFrame(this._pruneTiles, this);
              } else {
                setTimeout(bind2(this._pruneTiles, this), 250);
              }
            }
          },
          _getTilePos: function(coords) {
            return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
          },
          _wrapCoords: function(coords) {
            var newCoords = new Point(
              this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
              this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y
            );
            newCoords.z = coords.z;
            return newCoords;
          },
          _pxBoundsToTileRange: function(bounds) {
            var tileSize = this.getTileSize();
            return new Bounds(
              bounds.min.unscaleBy(tileSize).floor(),
              bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1])
            );
          },
          _noTilesToLoad: function() {
            for (var key in this._tiles) {
              if (!this._tiles[key].loaded) {
                return false;
              }
            }
            return true;
          }
        });
        function gridLayer(options) {
          return new GridLayer(options);
        }
        var TileLayer2 = GridLayer.extend({
          // @section
          // @aka TileLayer options
          options: {
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = 18
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: 18,
            // @option subdomains: String|String[] = 'abc'
            // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
            subdomains: "abc",
            // @option errorTileUrl: String = ''
            // URL to the tile image to show in place of the tile that failed to load.
            errorTileUrl: "",
            // @option zoomOffset: Number = 0
            // The zoom number used in tile URLs will be offset with this value.
            zoomOffset: 0,
            // @option tms: Boolean = false
            // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
            tms: false,
            // @option zoomReverse: Boolean = false
            // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
            zoomReverse: false,
            // @option detectRetina: Boolean = false
            // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
            detectRetina: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option referrerPolicy: Boolean|String = false
            // Whether the referrerPolicy attribute will be added to the tiles.
            // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
            // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
            // (e.g. to validate an API token).
            // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
            referrerPolicy: false
          },
          initialize: function(url, options) {
            this._url = url;
            options = setOptions(this, options);
            if (options.detectRetina && Browser.retina && options.maxZoom > 0) {
              options.tileSize = Math.floor(options.tileSize / 2);
              if (!options.zoomReverse) {
                options.zoomOffset++;
                options.maxZoom = Math.max(options.minZoom, options.maxZoom - 1);
              } else {
                options.zoomOffset--;
                options.minZoom = Math.min(options.maxZoom, options.minZoom + 1);
              }
              options.minZoom = Math.max(0, options.minZoom);
            } else if (!options.zoomReverse) {
              options.maxZoom = Math.max(options.minZoom, options.maxZoom);
            } else {
              options.minZoom = Math.min(options.maxZoom, options.minZoom);
            }
            if (typeof options.subdomains === "string") {
              options.subdomains = options.subdomains.split("");
            }
            this.on("tileunload", this._onTileRemove);
          },
          // @method setUrl(url: String, noRedraw?: Boolean): this
          // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
          // If the URL does not change, the layer will not be redrawn unless
          // the noRedraw parameter is set to false.
          setUrl: function(url, noRedraw) {
            if (this._url === url && noRedraw === void 0) {
              noRedraw = true;
            }
            this._url = url;
            if (!noRedraw) {
              this.redraw();
            }
            return this;
          },
          // @method createTile(coords: Object, done?: Function): HTMLElement
          // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
          // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
          // callback is called when the tile has been loaded.
          createTile: function(coords, done) {
            var tile = document.createElement("img");
            on(tile, "load", bind2(this._tileOnLoad, this, done, tile));
            on(tile, "error", bind2(this._tileOnError, this, done, tile));
            if (this.options.crossOrigin || this.options.crossOrigin === "") {
              tile.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            }
            if (typeof this.options.referrerPolicy === "string") {
              tile.referrerPolicy = this.options.referrerPolicy;
            }
            tile.alt = "";
            tile.src = this.getTileUrl(coords);
            return tile;
          },
          // @section Extension methods
          // @uninheritable
          // Layers extending `TileLayer` might reimplement the following method.
          // @method getTileUrl(coords: Object): String
          // Called only internally, returns the URL for a tile given its coordinates.
          // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
          getTileUrl: function(coords) {
            var data = {
              r: Browser.retina ? "@2x" : "",
              s: this._getSubdomain(coords),
              x: coords.x,
              y: coords.y,
              z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
              var invertedY = this._globalTileRange.max.y - coords.y;
              if (this.options.tms) {
                data["y"] = invertedY;
              }
              data["-y"] = invertedY;
            }
            return template(this._url, extend2(data, this.options));
          },
          _tileOnLoad: function(done, tile) {
            if (Browser.ielt9) {
              setTimeout(bind2(done, this, null, tile), 0);
            } else {
              done(null, tile);
            }
          },
          _tileOnError: function(done, tile, e) {
            var errorUrl = this.options.errorTileUrl;
            if (errorUrl && tile.getAttribute("src") !== errorUrl) {
              tile.src = errorUrl;
            }
            done(e, tile);
          },
          _onTileRemove: function(e) {
            e.tile.onload = null;
          },
          _getZoomForUrl: function() {
            var zoom2 = this._tileZoom, maxZoom = this.options.maxZoom, zoomReverse = this.options.zoomReverse, zoomOffset = this.options.zoomOffset;
            if (zoomReverse) {
              zoom2 = maxZoom - zoom2;
            }
            return zoom2 + zoomOffset;
          },
          _getSubdomain: function(tilePoint) {
            var index2 = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
            return this.options.subdomains[index2];
          },
          // stops loading all tiles in the background layer
          _abortLoading: function() {
            var i, tile;
            for (i in this._tiles) {
              if (this._tiles[i].coords.z !== this._tileZoom) {
                tile = this._tiles[i].el;
                tile.onload = falseFn;
                tile.onerror = falseFn;
                if (!tile.complete) {
                  tile.src = emptyImageUrl;
                  var coords = this._tiles[i].coords;
                  remove(tile);
                  delete this._tiles[i];
                  this.fire("tileabort", {
                    tile,
                    coords
                  });
                }
              }
            }
          },
          _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) {
              return;
            }
            tile.el.setAttribute("src", emptyImageUrl);
            return GridLayer.prototype._removeTile.call(this, key);
          },
          _tileReady: function(coords, err, tile) {
            if (!this._map || tile && tile.getAttribute("src") === emptyImageUrl) {
              return;
            }
            return GridLayer.prototype._tileReady.call(this, coords, err, tile);
          }
        });
        function tileLayer(url, options) {
          return new TileLayer2(url, options);
        }
        var TileLayerWMS = TileLayer2.extend({
          // @section
          // @aka TileLayer.WMS options
          // If any custom options not documented here are used, they will be sent to the
          // WMS server as extra parameters in each request URL. This can be useful for
          // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
          defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            // @option layers: String = ''
            // **(required)** Comma-separated list of WMS layers to show.
            layers: "",
            // @option styles: String = ''
            // Comma-separated list of WMS styles.
            styles: "",
            // @option format: String = 'image/jpeg'
            // WMS image format (use `'image/png'` for layers with transparency).
            format: "image/jpeg",
            // @option transparent: Boolean = false
            // If `true`, the WMS service will return images with transparency.
            transparent: false,
            // @option version: String = '1.1.1'
            // Version of the WMS service to use
            version: "1.1.1"
          },
          options: {
            // @option crs: CRS = null
            // Coordinate Reference System to use for the WMS requests, defaults to
            // map CRS. Don't change this if you're not sure what it means.
            crs: null,
            // @option uppercase: Boolean = false
            // If `true`, WMS request parameter keys will be uppercase.
            uppercase: false
          },
          initialize: function(url, options) {
            this._url = url;
            var wmsParams = extend2({}, this.defaultWmsParams);
            for (var i in options) {
              if (!(i in this.options)) {
                wmsParams[i] = options[i];
              }
            }
            options = setOptions(this, options);
            var realRetina = options.detectRetina && Browser.retina ? 2 : 1;
            var tileSize = this.getTileSize();
            wmsParams.width = tileSize.x * realRetina;
            wmsParams.height = tileSize.y * realRetina;
            this.wmsParams = wmsParams;
          },
          onAdd: function(map) {
            this._crs = this.options.crs || map.options.crs;
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var projectionKey = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[projectionKey] = this._crs.code;
            TileLayer2.prototype.onAdd.call(this, map);
          },
          getTileUrl: function(coords) {
            var tileBounds = this._tileCoordsToNwSe(coords), crs = this._crs, bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])), min = bounds.min, max = bounds.max, bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [min.y, min.x, max.y, max.x] : [min.x, min.y, max.x, max.y]).join(","), url = TileLayer2.prototype.getTileUrl.call(this, coords);
            return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + bbox;
          },
          // @method setParams(params: Object, noRedraw?: Boolean): this
          // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
          setParams: function(params, noRedraw) {
            extend2(this.wmsParams, params);
            if (!noRedraw) {
              this.redraw();
            }
            return this;
          }
        });
        function tileLayerWMS(url, options) {
          return new TileLayerWMS(url, options);
        }
        TileLayer2.WMS = TileLayerWMS;
        tileLayer.wms = tileLayerWMS;
        var Renderer = Layer.extend({
          // @section
          // @aka Renderer options
          options: {
            // @option padding: Number = 0.1
            // How much to extend the clip area around the map view (relative to its size)
            // e.g. 0.1 would be 10% of map view in each direction
            padding: 0.1
          },
          initialize: function(options) {
            setOptions(this, options);
            stamp(this);
            this._layers = this._layers || {};
          },
          onAdd: function() {
            if (!this._container) {
              this._initContainer();
              addClass(this._container, "leaflet-zoom-animated");
            }
            this.getPane().appendChild(this._container);
            this._update();
            this.on("update", this._updatePaths, this);
          },
          onRemove: function() {
            this.off("update", this._updatePaths, this);
            this._destroyContainer();
          },
          getEvents: function() {
            var events = {
              viewreset: this._reset,
              zoom: this._onZoom,
              moveend: this._update,
              zoomend: this._onZoomEnd
            };
            if (this._zoomAnimated) {
              events.zoomanim = this._onAnimZoom;
            }
            return events;
          },
          _onAnimZoom: function(ev) {
            this._updateTransform(ev.center, ev.zoom);
          },
          _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
          },
          _updateTransform: function(center, zoom2) {
            var scale2 = this._map.getZoomScale(zoom2, this._zoom), viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding), currentCenterPoint = this._map.project(this._center, zoom2), topLeftOffset = viewHalf.multiplyBy(-scale2).add(currentCenterPoint).subtract(this._map._getNewPixelOrigin(center, zoom2));
            if (Browser.any3d) {
              setTransform(this._container, topLeftOffset, scale2);
            } else {
              setPosition(this._container, topLeftOffset);
            }
          },
          _reset: function() {
            this._update();
            this._updateTransform(this._center, this._zoom);
            for (var id in this._layers) {
              this._layers[id]._reset();
            }
          },
          _onZoomEnd: function() {
            for (var id in this._layers) {
              this._layers[id]._project();
            }
          },
          _updatePaths: function() {
            for (var id in this._layers) {
              this._layers[id]._update();
            }
          },
          _update: function() {
            var p = this.options.padding, size = this._map.getSize(), min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
            this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
            this._center = this._map.getCenter();
            this._zoom = this._map.getZoom();
          }
        });
        var Canvas = Renderer.extend({
          // @section
          // @aka Canvas options
          options: {
            // @option tolerance: Number = 0
            // How much to extend the click tolerance around a path/object on the map.
            tolerance: 0
          },
          getEvents: function() {
            var events = Renderer.prototype.getEvents.call(this);
            events.viewprereset = this._onViewPreReset;
            return events;
          },
          _onViewPreReset: function() {
            this._postponeUpdatePaths = true;
          },
          onAdd: function() {
            Renderer.prototype.onAdd.call(this);
            this._draw();
          },
          _initContainer: function() {
            var container = this._container = document.createElement("canvas");
            on(container, "mousemove", this._onMouseMove, this);
            on(container, "click dblclick mousedown mouseup contextmenu", this._onClick, this);
            on(container, "mouseout", this._handleMouseOut, this);
            container["_leaflet_disable_events"] = true;
            this._ctx = container.getContext("2d");
          },
          _destroyContainer: function() {
            cancelAnimFrame(this._redrawRequest);
            delete this._ctx;
            remove(this._container);
            off(this._container);
            delete this._container;
          },
          _updatePaths: function() {
            if (this._postponeUpdatePaths) {
              return;
            }
            var layer;
            this._redrawBounds = null;
            for (var id in this._layers) {
              layer = this._layers[id];
              layer._update();
            }
            this._redraw();
          },
          _update: function() {
            if (this._map._animatingZoom && this._bounds) {
              return;
            }
            Renderer.prototype._update.call(this);
            var b = this._bounds, container = this._container, size = b.getSize(), m = Browser.retina ? 2 : 1;
            setPosition(container, b.min);
            container.width = m * size.x;
            container.height = m * size.y;
            container.style.width = size.x + "px";
            container.style.height = size.y + "px";
            if (Browser.retina) {
              this._ctx.scale(2, 2);
            }
            this._ctx.translate(-b.min.x, -b.min.y);
            this.fire("update");
          },
          _reset: function() {
            Renderer.prototype._reset.call(this);
            if (this._postponeUpdatePaths) {
              this._postponeUpdatePaths = false;
              this._updatePaths();
            }
          },
          _initPath: function(layer) {
            this._updateDashArray(layer);
            this._layers[stamp(layer)] = layer;
            var order = layer._order = {
              layer,
              prev: this._drawLast,
              next: null
            };
            if (this._drawLast) {
              this._drawLast.next = order;
            }
            this._drawLast = order;
            this._drawFirst = this._drawFirst || this._drawLast;
          },
          _addPath: function(layer) {
            this._requestRedraw(layer);
          },
          _removePath: function(layer) {
            var order = layer._order;
            var next = order.next;
            var prev = order.prev;
            if (next) {
              next.prev = prev;
            } else {
              this._drawLast = prev;
            }
            if (prev) {
              prev.next = next;
            } else {
              this._drawFirst = next;
            }
            delete layer._order;
            delete this._layers[stamp(layer)];
            this._requestRedraw(layer);
          },
          _updatePath: function(layer) {
            this._extendRedrawBounds(layer);
            layer._project();
            layer._update();
            this._requestRedraw(layer);
          },
          _updateStyle: function(layer) {
            this._updateDashArray(layer);
            this._requestRedraw(layer);
          },
          _updateDashArray: function(layer) {
            if (typeof layer.options.dashArray === "string") {
              var parts = layer.options.dashArray.split(/[, ]+/), dashArray = [], dashValue, i;
              for (i = 0; i < parts.length; i++) {
                dashValue = Number(parts[i]);
                if (isNaN(dashValue)) {
                  return;
                }
                dashArray.push(dashValue);
              }
              layer.options._dashArray = dashArray;
            } else {
              layer.options._dashArray = layer.options.dashArray;
            }
          },
          _requestRedraw: function(layer) {
            if (!this._map) {
              return;
            }
            this._extendRedrawBounds(layer);
            this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
          },
          _extendRedrawBounds: function(layer) {
            if (layer._pxBounds) {
              var padding = (layer.options.weight || 0) + 1;
              this._redrawBounds = this._redrawBounds || new Bounds();
              this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
              this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
            }
          },
          _redraw: function() {
            this._redrawRequest = null;
            if (this._redrawBounds) {
              this._redrawBounds.min._floor();
              this._redrawBounds.max._ceil();
            }
            this._clear();
            this._draw();
            this._redrawBounds = null;
          },
          _clear: function() {
            var bounds = this._redrawBounds;
            if (bounds) {
              var size = bounds.getSize();
              this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
            } else {
              this._ctx.save();
              this._ctx.setTransform(1, 0, 0, 1, 0, 0);
              this._ctx.clearRect(0, 0, this._container.width, this._container.height);
              this._ctx.restore();
            }
          },
          _draw: function() {
            var layer, bounds = this._redrawBounds;
            this._ctx.save();
            if (bounds) {
              var size = bounds.getSize();
              this._ctx.beginPath();
              this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
              this._ctx.clip();
            }
            this._drawing = true;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) {
                layer._updatePath();
              }
            }
            this._drawing = false;
            this._ctx.restore();
          },
          _updatePoly: function(layer, closed) {
            if (!this._drawing) {
              return;
            }
            var i, j, len2, p, parts = layer._parts, len = parts.length, ctx = this._ctx;
            if (!len) {
              return;
            }
            ctx.beginPath();
            for (i = 0; i < len; i++) {
              for (j = 0, len2 = parts[i].length; j < len2; j++) {
                p = parts[i][j];
                ctx[j ? "lineTo" : "moveTo"](p.x, p.y);
              }
              if (closed) {
                ctx.closePath();
              }
            }
            this._fillStroke(ctx, layer);
          },
          _updateCircle: function(layer) {
            if (!this._drawing || layer._empty()) {
              return;
            }
            var p = layer._point, ctx = this._ctx, r2 = Math.max(Math.round(layer._radius), 1), s = (Math.max(Math.round(layer._radiusY), 1) || r2) / r2;
            if (s !== 1) {
              ctx.save();
              ctx.scale(1, s);
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y / s, r2, 0, Math.PI * 2, false);
            if (s !== 1) {
              ctx.restore();
            }
            this._fillStroke(ctx, layer);
          },
          _fillStroke: function(ctx, layer) {
            var options = layer.options;
            if (options.fill) {
              ctx.globalAlpha = options.fillOpacity;
              ctx.fillStyle = options.fillColor || options.color;
              ctx.fill(options.fillRule || "evenodd");
            }
            if (options.stroke && options.weight !== 0) {
              if (ctx.setLineDash) {
                ctx.setLineDash(layer.options && layer.options._dashArray || []);
              }
              ctx.globalAlpha = options.opacity;
              ctx.lineWidth = options.weight;
              ctx.strokeStyle = options.color;
              ctx.lineCap = options.lineCap;
              ctx.lineJoin = options.lineJoin;
              ctx.stroke();
            }
          },
          // Canvas obviously doesn't have mouse events for individual drawn objects,
          // so we emulate that by calculating what's under the mouse on mousemove/click manually
          _onClick: function(e) {
            var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (layer.options.interactive && layer._containsPoint(point)) {
                if (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(layer)) {
                  clickedLayer = layer;
                }
              }
            }
            this._fireEvent(clickedLayer ? [clickedLayer] : false, e);
          },
          _onMouseMove: function(e) {
            if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) {
              return;
            }
            var point = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, point);
          },
          _handleMouseOut: function(e) {
            var layer = this._hoveredLayer;
            if (layer) {
              removeClass(this._container, "leaflet-interactive");
              this._fireEvent([layer], e, "mouseout");
              this._hoveredLayer = null;
              this._mouseHoverThrottled = false;
            }
          },
          _handleMouseHover: function(e, point) {
            if (this._mouseHoverThrottled) {
              return;
            }
            var layer, candidateHoveredLayer;
            for (var order = this._drawFirst; order; order = order.next) {
              layer = order.layer;
              if (layer.options.interactive && layer._containsPoint(point)) {
                candidateHoveredLayer = layer;
              }
            }
            if (candidateHoveredLayer !== this._hoveredLayer) {
              this._handleMouseOut(e);
              if (candidateHoveredLayer) {
                addClass(this._container, "leaflet-interactive");
                this._fireEvent([candidateHoveredLayer], e, "mouseover");
                this._hoveredLayer = candidateHoveredLayer;
              }
            }
            this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, e);
            this._mouseHoverThrottled = true;
            setTimeout(bind2(function() {
              this._mouseHoverThrottled = false;
            }, this), 32);
          },
          _fireEvent: function(layers2, e, type) {
            this._map._fireDOMEvent(e, type || e.type, layers2);
          },
          _bringToFront: function(layer) {
            var order = layer._order;
            if (!order) {
              return;
            }
            var next = order.next;
            var prev = order.prev;
            if (next) {
              next.prev = prev;
            } else {
              return;
            }
            if (prev) {
              prev.next = next;
            } else if (next) {
              this._drawFirst = next;
            }
            order.prev = this._drawLast;
            this._drawLast.next = order;
            order.next = null;
            this._drawLast = order;
            this._requestRedraw(layer);
          },
          _bringToBack: function(layer) {
            var order = layer._order;
            if (!order) {
              return;
            }
            var next = order.next;
            var prev = order.prev;
            if (prev) {
              prev.next = next;
            } else {
              return;
            }
            if (next) {
              next.prev = prev;
            } else if (prev) {
              this._drawLast = prev;
            }
            order.prev = null;
            order.next = this._drawFirst;
            this._drawFirst.prev = order;
            this._drawFirst = order;
            this._requestRedraw(layer);
          }
        });
        function canvas(options) {
          return Browser.canvas ? new Canvas(options) : null;
        }
        var vmlCreate = (function() {
          try {
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml");
            return function(name) {
              return document.createElement("<lvml:" + name + ' class="lvml">');
            };
          } catch (e) {
          }
          return function(name) {
            return document.createElement("<" + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        })();
        var vmlMixin = {
          _initContainer: function() {
            this._container = create$1("div", "leaflet-vml-container");
          },
          _update: function() {
            if (this._map._animatingZoom) {
              return;
            }
            Renderer.prototype._update.call(this);
            this.fire("update");
          },
          _initPath: function(layer) {
            var container = layer._container = vmlCreate("shape");
            addClass(container, "leaflet-vml-shape " + (this.options.className || ""));
            container.coordsize = "1 1";
            layer._path = vmlCreate("path");
            container.appendChild(layer._path);
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
          },
          _addPath: function(layer) {
            var container = layer._container;
            this._container.appendChild(container);
            if (layer.options.interactive) {
              layer.addInteractiveTarget(container);
            }
          },
          _removePath: function(layer) {
            var container = layer._container;
            remove(container);
            layer.removeInteractiveTarget(container);
            delete this._layers[stamp(layer)];
          },
          _updateStyle: function(layer) {
            var stroke = layer._stroke, fill = layer._fill, options = layer.options, container = layer._container;
            container.stroked = !!options.stroke;
            container.filled = !!options.fill;
            if (options.stroke) {
              if (!stroke) {
                stroke = layer._stroke = vmlCreate("stroke");
              }
              container.appendChild(stroke);
              stroke.weight = options.weight + "px";
              stroke.color = options.color;
              stroke.opacity = options.opacity;
              if (options.dashArray) {
                stroke.dashStyle = isArray2(options.dashArray) ? options.dashArray.join(" ") : options.dashArray.replace(/( *, *)/g, " ");
              } else {
                stroke.dashStyle = "";
              }
              stroke.endcap = options.lineCap.replace("butt", "flat");
              stroke.joinstyle = options.lineJoin;
            } else if (stroke) {
              container.removeChild(stroke);
              layer._stroke = null;
            }
            if (options.fill) {
              if (!fill) {
                fill = layer._fill = vmlCreate("fill");
              }
              container.appendChild(fill);
              fill.color = options.fillColor || options.color;
              fill.opacity = options.fillOpacity;
            } else if (fill) {
              container.removeChild(fill);
              layer._fill = null;
            }
          },
          _updateCircle: function(layer) {
            var p = layer._point.round(), r2 = Math.round(layer._radius), r22 = Math.round(layer._radiusY || r2);
            this._setPath(layer, layer._empty() ? "M0 0" : "AL " + p.x + "," + p.y + " " + r2 + "," + r22 + " 0," + 65535 * 360);
          },
          _setPath: function(layer, path) {
            layer._path.v = path;
          },
          _bringToFront: function(layer) {
            toFront(layer._container);
          },
          _bringToBack: function(layer) {
            toBack(layer._container);
          }
        };
        var create = Browser.vml ? vmlCreate : svgCreate;
        var SVG = Renderer.extend({
          _initContainer: function() {
            this._container = create("svg");
            this._container.setAttribute("pointer-events", "none");
            this._rootGroup = create("g");
            this._container.appendChild(this._rootGroup);
          },
          _destroyContainer: function() {
            remove(this._container);
            off(this._container);
            delete this._container;
            delete this._rootGroup;
            delete this._svgSize;
          },
          _update: function() {
            if (this._map._animatingZoom && this._bounds) {
              return;
            }
            Renderer.prototype._update.call(this);
            var b = this._bounds, size = b.getSize(), container = this._container;
            if (!this._svgSize || !this._svgSize.equals(size)) {
              this._svgSize = size;
              container.setAttribute("width", size.x);
              container.setAttribute("height", size.y);
            }
            setPosition(container, b.min);
            container.setAttribute("viewBox", [b.min.x, b.min.y, size.x, size.y].join(" "));
            this.fire("update");
          },
          // methods below are called by vector layers implementations
          _initPath: function(layer) {
            var path = layer._path = create("path");
            if (layer.options.className) {
              addClass(path, layer.options.className);
            }
            if (layer.options.interactive) {
              addClass(path, "leaflet-interactive");
            }
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
          },
          _addPath: function(layer) {
            if (!this._rootGroup) {
              this._initContainer();
            }
            this._rootGroup.appendChild(layer._path);
            layer.addInteractiveTarget(layer._path);
          },
          _removePath: function(layer) {
            remove(layer._path);
            layer.removeInteractiveTarget(layer._path);
            delete this._layers[stamp(layer)];
          },
          _updatePath: function(layer) {
            layer._project();
            layer._update();
          },
          _updateStyle: function(layer) {
            var path = layer._path, options = layer.options;
            if (!path) {
              return;
            }
            if (options.stroke) {
              path.setAttribute("stroke", options.color);
              path.setAttribute("stroke-opacity", options.opacity);
              path.setAttribute("stroke-width", options.weight);
              path.setAttribute("stroke-linecap", options.lineCap);
              path.setAttribute("stroke-linejoin", options.lineJoin);
              if (options.dashArray) {
                path.setAttribute("stroke-dasharray", options.dashArray);
              } else {
                path.removeAttribute("stroke-dasharray");
              }
              if (options.dashOffset) {
                path.setAttribute("stroke-dashoffset", options.dashOffset);
              } else {
                path.removeAttribute("stroke-dashoffset");
              }
            } else {
              path.setAttribute("stroke", "none");
            }
            if (options.fill) {
              path.setAttribute("fill", options.fillColor || options.color);
              path.setAttribute("fill-opacity", options.fillOpacity);
              path.setAttribute("fill-rule", options.fillRule || "evenodd");
            } else {
              path.setAttribute("fill", "none");
            }
          },
          _updatePoly: function(layer, closed) {
            this._setPath(layer, pointsToPath(layer._parts, closed));
          },
          _updateCircle: function(layer) {
            var p = layer._point, r2 = Math.max(Math.round(layer._radius), 1), r22 = Math.max(Math.round(layer._radiusY), 1) || r2, arc = "a" + r2 + "," + r22 + " 0 1,0 ";
            var d = layer._empty() ? "M0 0" : "M" + (p.x - r2) + "," + p.y + arc + r2 * 2 + ",0 " + arc + -r2 * 2 + ",0 ";
            this._setPath(layer, d);
          },
          _setPath: function(layer, path) {
            layer._path.setAttribute("d", path);
          },
          // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
          _bringToFront: function(layer) {
            toFront(layer._path);
          },
          _bringToBack: function(layer) {
            toBack(layer._path);
          }
        });
        if (Browser.vml) {
          SVG.include(vmlMixin);
        }
        function svg(options) {
          return Browser.svg || Browser.vml ? new SVG(options) : null;
        }
        Map2.include({
          // @namespace Map; @method getRenderer(layer: Path): Renderer
          // Returns the instance of `Renderer` that should be used to render the given
          // `Path`. It will ensure that the `renderer` options of the map and paths
          // are respected, and that the renderers do exist on the map.
          getRenderer: function(layer) {
            var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
            if (!renderer) {
              renderer = this._renderer = this._createRenderer();
            }
            if (!this.hasLayer(renderer)) {
              this.addLayer(renderer);
            }
            return renderer;
          },
          _getPaneRenderer: function(name) {
            if (name === "overlayPane" || name === void 0) {
              return false;
            }
            var renderer = this._paneRenderers[name];
            if (renderer === void 0) {
              renderer = this._createRenderer({ pane: name });
              this._paneRenderers[name] = renderer;
            }
            return renderer;
          },
          _createRenderer: function(options) {
            return this.options.preferCanvas && canvas(options) || svg(options);
          }
        });
        var Rectangle = Polygon.extend({
          initialize: function(latLngBounds, options) {
            Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
          },
          // @method setBounds(latLngBounds: LatLngBounds): this
          // Redraws the rectangle with the passed bounds.
          setBounds: function(latLngBounds) {
            return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
          },
          _boundsToLatLngs: function(latLngBounds) {
            latLngBounds = toLatLngBounds(latLngBounds);
            return [
              latLngBounds.getSouthWest(),
              latLngBounds.getNorthWest(),
              latLngBounds.getNorthEast(),
              latLngBounds.getSouthEast()
            ];
          }
        });
        function rectangle(latLngBounds, options) {
          return new Rectangle(latLngBounds, options);
        }
        SVG.create = create;
        SVG.pointsToPath = pointsToPath;
        GeoJSON.geometryToLayer = geometryToLayer;
        GeoJSON.coordsToLatLng = coordsToLatLng;
        GeoJSON.coordsToLatLngs = coordsToLatLngs;
        GeoJSON.latLngToCoords = latLngToCoords;
        GeoJSON.latLngsToCoords = latLngsToCoords;
        GeoJSON.getFeature = getFeature;
        GeoJSON.asFeature = asFeature;
        Map2.mergeOptions({
          // @option boxZoom: Boolean = true
          // Whether the map can be zoomed to a rectangular area specified by
          // dragging the mouse while pressing the shift key.
          boxZoom: true
        });
        var BoxZoom = Handler.extend({
          initialize: function(map) {
            this._map = map;
            this._container = map._container;
            this._pane = map._panes.overlayPane;
            this._resetStateTimeout = 0;
            map.on("unload", this._destroy, this);
          },
          addHooks: function() {
            on(this._container, "mousedown", this._onMouseDown, this);
          },
          removeHooks: function() {
            off(this._container, "mousedown", this._onMouseDown, this);
          },
          moved: function() {
            return this._moved;
          },
          _destroy: function() {
            remove(this._pane);
            delete this._pane;
          },
          _resetState: function() {
            this._resetStateTimeout = 0;
            this._moved = false;
          },
          _clearDeferredResetState: function() {
            if (this._resetStateTimeout !== 0) {
              clearTimeout(this._resetStateTimeout);
              this._resetStateTimeout = 0;
            }
          },
          _onMouseDown: function(e) {
            if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
              return false;
            }
            this._clearDeferredResetState();
            this._resetState();
            disableTextSelection();
            disableImageDrag();
            this._startPoint = this._map.mouseEventToContainerPoint(e);
            on(document, {
              contextmenu: stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this);
          },
          _onMouseMove: function(e) {
            if (!this._moved) {
              this._moved = true;
              this._box = create$1("div", "leaflet-zoom-box", this._container);
              addClass(this._container, "leaflet-crosshair");
              this._map.fire("boxzoomstart");
            }
            this._point = this._map.mouseEventToContainerPoint(e);
            var bounds = new Bounds(this._point, this._startPoint), size = bounds.getSize();
            setPosition(this._box, bounds.min);
            this._box.style.width = size.x + "px";
            this._box.style.height = size.y + "px";
          },
          _finish: function() {
            if (this._moved) {
              remove(this._box);
              removeClass(this._container, "leaflet-crosshair");
            }
            enableTextSelection();
            enableImageDrag();
            off(document, {
              contextmenu: stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this);
          },
          _onMouseUp: function(e) {
            if (e.which !== 1 && e.button !== 1) {
              return;
            }
            this._finish();
            if (!this._moved) {
              return;
            }
            this._clearDeferredResetState();
            this._resetStateTimeout = setTimeout(bind2(this._resetState, this), 0);
            var bounds = new LatLngBounds(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(bounds).fire("boxzoomend", { boxZoomBounds: bounds });
          },
          _onKeyDown: function(e) {
            if (e.keyCode === 27) {
              this._finish();
              this._clearDeferredResetState();
              this._resetState();
            }
          }
        });
        Map2.addInitHook("addHandler", "boxZoom", BoxZoom);
        Map2.mergeOptions({
          // @option doubleClickZoom: Boolean|String = true
          // Whether the map can be zoomed in by double clicking on it and
          // zoomed out by double clicking while holding shift. If passed
          // `'center'`, double-click zoom will zoom to the center of the
          //  view regardless of where the mouse was.
          doubleClickZoom: true
        });
        var DoubleClickZoom = Handler.extend({
          addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this);
          },
          removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this);
          },
          _onDoubleClick: function(e) {
            var map = this._map, oldZoom = map.getZoom(), delta = map.options.zoomDelta, zoom2 = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
            if (map.options.doubleClickZoom === "center") {
              map.setZoom(zoom2);
            } else {
              map.setZoomAround(e.containerPoint, zoom2);
            }
          }
        });
        Map2.addInitHook("addHandler", "doubleClickZoom", DoubleClickZoom);
        Map2.mergeOptions({
          // @option dragging: Boolean = true
          // Whether the map is draggable with mouse/touch or not.
          dragging: true,
          // @section Panning Inertia Options
          // @option inertia: Boolean = *
          // If enabled, panning of the map will have an inertia effect where
          // the map builds momentum while dragging and continues moving in
          // the same direction for some time. Feels especially nice on touch
          // devices. Enabled by default.
          inertia: true,
          // @option inertiaDeceleration: Number = 3000
          // The rate with which the inertial movement slows down, in pixels/second².
          inertiaDeceleration: 3400,
          // px/s^2
          // @option inertiaMaxSpeed: Number = Infinity
          // Max speed of the inertial movement, in pixels/second.
          inertiaMaxSpeed: Infinity,
          // px/s
          // @option easeLinearity: Number = 0.2
          easeLinearity: 0.2,
          // TODO refactor, move to CRS
          // @option worldCopyJump: Boolean = false
          // With this option enabled, the map tracks when you pan to another "copy"
          // of the world and seamlessly jumps to the original one so that all overlays
          // like markers and vector layers are still visible.
          worldCopyJump: false,
          // @option maxBoundsViscosity: Number = 0.0
          // If `maxBounds` is set, this option will control how solid the bounds
          // are when dragging the map around. The default value of `0.0` allows the
          // user to drag outside the bounds at normal speed, higher values will
          // slow down map dragging outside bounds, and `1.0` makes the bounds fully
          // solid, preventing the user from dragging outside the bounds.
          maxBoundsViscosity: 0
        });
        var Drag = Handler.extend({
          addHooks: function() {
            if (!this._draggable) {
              var map = this._map;
              this._draggable = new Draggable(map._mapPane, map._container);
              this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
              }, this);
              this._draggable.on("predrag", this._onPreDragLimit, this);
              if (map.options.worldCopyJump) {
                this._draggable.on("predrag", this._onPreDragWrap, this);
                map.on("zoomend", this._onZoomEnd, this);
                map.whenReady(this._onZoomEnd, this);
              }
            }
            addClass(this._map._container, "leaflet-grab leaflet-touch-drag");
            this._draggable.enable();
            this._positions = [];
            this._times = [];
          },
          removeHooks: function() {
            removeClass(this._map._container, "leaflet-grab");
            removeClass(this._map._container, "leaflet-touch-drag");
            this._draggable.disable();
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          moving: function() {
            return this._draggable && this._draggable._moving;
          },
          _onDragStart: function() {
            var map = this._map;
            map._stop();
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
              var bounds = toLatLngBounds(this._map.options.maxBounds);
              this._offsetLimit = toBounds(
                this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
                this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
              );
              this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
            } else {
              this._offsetLimit = null;
            }
            map.fire("movestart").fire("dragstart");
            if (map.options.inertia) {
              this._positions = [];
              this._times = [];
            }
          },
          _onDrag: function(e) {
            if (this._map.options.inertia) {
              var time = this._lastTime = +/* @__PURE__ */ new Date(), pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
              this._positions.push(pos);
              this._times.push(time);
              this._prunePositions(time);
            }
            this._map.fire("move", e).fire("drag", e);
          },
          _prunePositions: function(time) {
            while (this._positions.length > 1 && time - this._times[0] > 50) {
              this._positions.shift();
              this._times.shift();
            }
          },
          _onZoomEnd: function() {
            var pxCenter = this._map.getSize().divideBy(2), pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
          },
          _viscousLimit: function(value, threshold) {
            return value - (value - threshold) * this._viscosity;
          },
          _onPreDragLimit: function() {
            if (!this._viscosity || !this._offsetLimit) {
              return;
            }
            var offset = this._draggable._newPos.subtract(this._draggable._startPos);
            var limit = this._offsetLimit;
            if (offset.x < limit.min.x) {
              offset.x = this._viscousLimit(offset.x, limit.min.x);
            }
            if (offset.y < limit.min.y) {
              offset.y = this._viscousLimit(offset.y, limit.min.y);
            }
            if (offset.x > limit.max.x) {
              offset.x = this._viscousLimit(offset.x, limit.max.x);
            }
            if (offset.y > limit.max.y) {
              offset.y = this._viscousLimit(offset.y, limit.max.y);
            }
            this._draggable._newPos = this._draggable._startPos.add(offset);
          },
          _onPreDragWrap: function() {
            var worldWidth = this._worldWidth, halfWidth = Math.round(worldWidth / 2), dx = this._initialWorldOffset, x = this._draggable._newPos.x, newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx, newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx, newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
            this._draggable._absPos = this._draggable._newPos.clone();
            this._draggable._newPos.x = newX;
          },
          _onDragEnd: function(e) {
            var map = this._map, options = map.options, noInertia = !options.inertia || e.noInertia || this._times.length < 2;
            map.fire("dragend", e);
            if (noInertia) {
              map.fire("moveend");
            } else {
              this._prunePositions(+/* @__PURE__ */ new Date());
              var direction = this._lastPos.subtract(this._positions[0]), duration = (this._lastTime - this._times[0]) / 1e3, ease = options.easeLinearity, speedVector = direction.multiplyBy(ease / duration), speed = speedVector.distanceTo([0, 0]), limitedSpeed = Math.min(options.inertiaMaxSpeed, speed), limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed), decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease), offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
              if (!offset.x && !offset.y) {
                map.fire("moveend");
              } else {
                offset = map._limitOffset(offset, map.options.maxBounds);
                requestAnimFrame(function() {
                  map.panBy(offset, {
                    duration: decelerationDuration,
                    easeLinearity: ease,
                    noMoveStart: true,
                    animate: true
                  });
                });
              }
            }
          }
        });
        Map2.addInitHook("addHandler", "dragging", Drag);
        Map2.mergeOptions({
          // @option keyboard: Boolean = true
          // Makes the map focusable and allows users to navigate the map with keyboard
          // arrows and `+`/`-` keys.
          keyboard: true,
          // @option keyboardPanDelta: Number = 80
          // Amount of pixels to pan when pressing an arrow key.
          keyboardPanDelta: 80
        });
        var Keyboard = Handler.extend({
          keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
          },
          initialize: function(map) {
            this._map = map;
            this._setPanDelta(map.options.keyboardPanDelta);
            this._setZoomDelta(map.options.zoomDelta);
          },
          addHooks: function() {
            var container = this._map._container;
            if (container.tabIndex <= 0) {
              container.tabIndex = "0";
            }
            on(container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this);
            this._map.on({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this);
          },
          removeHooks: function() {
            this._removeHooks();
            off(this._map._container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this);
            this._map.off({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this);
          },
          _onMouseDown: function() {
            if (this._focused) {
              return;
            }
            var body = document.body, docEl = document.documentElement, top = body.scrollTop || docEl.scrollTop, left = body.scrollLeft || docEl.scrollLeft;
            this._map._container.focus();
            window.scrollTo(left, top);
          },
          _onFocus: function() {
            this._focused = true;
            this._map.fire("focus");
          },
          _onBlur: function() {
            this._focused = false;
            this._map.fire("blur");
          },
          _setPanDelta: function(panDelta) {
            var keys = this._panKeys = {}, codes = this.keyCodes, i, len;
            for (i = 0, len = codes.left.length; i < len; i++) {
              keys[codes.left[i]] = [-1 * panDelta, 0];
            }
            for (i = 0, len = codes.right.length; i < len; i++) {
              keys[codes.right[i]] = [panDelta, 0];
            }
            for (i = 0, len = codes.down.length; i < len; i++) {
              keys[codes.down[i]] = [0, panDelta];
            }
            for (i = 0, len = codes.up.length; i < len; i++) {
              keys[codes.up[i]] = [0, -1 * panDelta];
            }
          },
          _setZoomDelta: function(zoomDelta) {
            var keys = this._zoomKeys = {}, codes = this.keyCodes, i, len;
            for (i = 0, len = codes.zoomIn.length; i < len; i++) {
              keys[codes.zoomIn[i]] = zoomDelta;
            }
            for (i = 0, len = codes.zoomOut.length; i < len; i++) {
              keys[codes.zoomOut[i]] = -zoomDelta;
            }
          },
          _addHooks: function() {
            on(document, "keydown", this._onKeyDown, this);
          },
          _removeHooks: function() {
            off(document, "keydown", this._onKeyDown, this);
          },
          _onKeyDown: function(e) {
            if (e.altKey || e.ctrlKey || e.metaKey) {
              return;
            }
            var key = e.keyCode, map = this._map, offset;
            if (key in this._panKeys) {
              if (!map._panAnim || !map._panAnim._inProgress) {
                offset = this._panKeys[key];
                if (e.shiftKey) {
                  offset = toPoint(offset).multiplyBy(3);
                }
                if (map.options.maxBounds) {
                  offset = map._limitOffset(toPoint(offset), map.options.maxBounds);
                }
                if (map.options.worldCopyJump) {
                  var newLatLng = map.wrapLatLng(map.unproject(map.project(map.getCenter()).add(offset)));
                  map.panTo(newLatLng);
                } else {
                  map.panBy(offset);
                }
              }
            } else if (key in this._zoomKeys) {
              map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
            } else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
              map.closePopup();
            } else {
              return;
            }
            stop(e);
          }
        });
        Map2.addInitHook("addHandler", "keyboard", Keyboard);
        Map2.mergeOptions({
          // @section Mouse wheel options
          // @option scrollWheelZoom: Boolean|String = true
          // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
          // it will zoom to the center of the view regardless of where the mouse was.
          scrollWheelZoom: true,
          // @option wheelDebounceTime: Number = 40
          // Limits the rate at which a wheel can fire (in milliseconds). By default
          // user can't zoom via wheel more often than once per 40 ms.
          wheelDebounceTime: 40,
          // @option wheelPxPerZoomLevel: Number = 60
          // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
          // mean a change of one full zoom level. Smaller values will make wheel-zooming
          // faster (and vice versa).
          wheelPxPerZoomLevel: 60
        });
        var ScrollWheelZoom = Handler.extend({
          addHooks: function() {
            on(this._map._container, "wheel", this._onWheelScroll, this);
            this._delta = 0;
          },
          removeHooks: function() {
            off(this._map._container, "wheel", this._onWheelScroll, this);
          },
          _onWheelScroll: function(e) {
            var delta = getWheelDelta(e);
            var debounce2 = this._map.options.wheelDebounceTime;
            this._delta += delta;
            this._lastMousePos = this._map.mouseEventToContainerPoint(e);
            if (!this._startTime) {
              this._startTime = +/* @__PURE__ */ new Date();
            }
            var left = Math.max(debounce2 - (+/* @__PURE__ */ new Date() - this._startTime), 0);
            clearTimeout(this._timer);
            this._timer = setTimeout(bind2(this._performZoom, this), left);
            stop(e);
          },
          _performZoom: function() {
            var map = this._map, zoom2 = map.getZoom(), snap = this._map.options.zoomSnap || 0;
            map._stop();
            var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2, d4 = snap ? Math.ceil(d3 / snap) * snap : d3, delta = map._limitZoom(zoom2 + (this._delta > 0 ? d4 : -d4)) - zoom2;
            this._delta = 0;
            this._startTime = null;
            if (!delta) {
              return;
            }
            if (map.options.scrollWheelZoom === "center") {
              map.setZoom(zoom2 + delta);
            } else {
              map.setZoomAround(this._lastMousePos, zoom2 + delta);
            }
          }
        });
        Map2.addInitHook("addHandler", "scrollWheelZoom", ScrollWheelZoom);
        var tapHoldDelay = 600;
        Map2.mergeOptions({
          // @section Touch interaction options
          // @option tapHold: Boolean
          // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
          tapHold: Browser.touchNative && Browser.safari && Browser.mobile,
          // @option tapTolerance: Number = 15
          // The max number of pixels a user can shift his finger during touch
          // for it to be considered a valid tap.
          tapTolerance: 15
        });
        var TapHold = Handler.extend({
          addHooks: function() {
            on(this._map._container, "touchstart", this._onDown, this);
          },
          removeHooks: function() {
            off(this._map._container, "touchstart", this._onDown, this);
          },
          _onDown: function(e) {
            clearTimeout(this._holdTimeout);
            if (e.touches.length !== 1) {
              return;
            }
            var first = e.touches[0];
            this._startPos = this._newPos = new Point(first.clientX, first.clientY);
            this._holdTimeout = setTimeout(bind2(function() {
              this._cancel();
              if (!this._isTapValid()) {
                return;
              }
              on(document, "touchend", preventDefault);
              on(document, "touchend touchcancel", this._cancelClickPrevent);
              this._simulateEvent("contextmenu", first);
            }, this), tapHoldDelay);
            on(document, "touchend touchcancel contextmenu", this._cancel, this);
            on(document, "touchmove", this._onMove, this);
          },
          _cancelClickPrevent: function cancelClickPrevent() {
            off(document, "touchend", preventDefault);
            off(document, "touchend touchcancel", cancelClickPrevent);
          },
          _cancel: function() {
            clearTimeout(this._holdTimeout);
            off(document, "touchend touchcancel contextmenu", this._cancel, this);
            off(document, "touchmove", this._onMove, this);
          },
          _onMove: function(e) {
            var first = e.touches[0];
            this._newPos = new Point(first.clientX, first.clientY);
          },
          _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
          },
          _simulateEvent: function(type, e) {
            var simulatedEvent = new MouseEvent(type, {
              bubbles: true,
              cancelable: true,
              view: window,
              // detail: 1,
              screenX: e.screenX,
              screenY: e.screenY,
              clientX: e.clientX,
              clientY: e.clientY
              // button: 2,
              // buttons: 2
            });
            simulatedEvent._simulated = true;
            e.target.dispatchEvent(simulatedEvent);
          }
        });
        Map2.addInitHook("addHandler", "tapHold", TapHold);
        Map2.mergeOptions({
          // @section Touch interaction options
          // @option touchZoom: Boolean|String = *
          // Whether the map can be zoomed by touch-dragging with two fingers. If
          // passed `'center'`, it will zoom to the center of the view regardless of
          // where the touch events (fingers) were. Enabled for touch-capable web
          // browsers.
          touchZoom: Browser.touch,
          // @option bounceAtZoomLimits: Boolean = true
          // Set it to false if you don't want the map to zoom beyond min/max zoom
          // and then bounce back when pinch-zooming.
          bounceAtZoomLimits: true
        });
        var TouchZoom = Handler.extend({
          addHooks: function() {
            addClass(this._map._container, "leaflet-touch-zoom");
            on(this._map._container, "touchstart", this._onTouchStart, this);
          },
          removeHooks: function() {
            removeClass(this._map._container, "leaflet-touch-zoom");
            off(this._map._container, "touchstart", this._onTouchStart, this);
          },
          _onTouchStart: function(e) {
            var map = this._map;
            if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
              return;
            }
            var p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = map.getSize()._divideBy(2);
            this._startLatLng = map.containerPointToLatLng(this._centerPoint);
            if (map.options.touchZoom !== "center") {
              this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
            }
            this._startDist = p1.distanceTo(p2);
            this._startZoom = map.getZoom();
            this._moved = false;
            this._zooming = true;
            map._stop();
            on(document, "touchmove", this._onTouchMove, this);
            on(document, "touchend touchcancel", this._onTouchEnd, this);
            preventDefault(e);
          },
          _onTouchMove: function(e) {
            if (!e.touches || e.touches.length !== 2 || !this._zooming) {
              return;
            }
            var map = this._map, p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]), scale2 = p1.distanceTo(p2) / this._startDist;
            this._zoom = map.getScaleZoom(scale2, this._startZoom);
            if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale2 < 1 || this._zoom > map.getMaxZoom() && scale2 > 1)) {
              this._zoom = map._limitZoom(this._zoom);
            }
            if (map.options.touchZoom === "center") {
              this._center = this._startLatLng;
              if (scale2 === 1) {
                return;
              }
            } else {
              var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
              if (scale2 === 1 && delta.x === 0 && delta.y === 0) {
                return;
              }
              this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
            }
            if (!this._moved) {
              map._moveStart(true, false);
              this._moved = true;
            }
            cancelAnimFrame(this._animRequest);
            var moveFn = bind2(map._move, map, this._center, this._zoom, { pinch: true, round: false }, void 0);
            this._animRequest = requestAnimFrame(moveFn, this, true);
            preventDefault(e);
          },
          _onTouchEnd: function() {
            if (!this._moved || !this._zooming) {
              this._zooming = false;
              return;
            }
            this._zooming = false;
            cancelAnimFrame(this._animRequest);
            off(document, "touchmove", this._onTouchMove, this);
            off(document, "touchend touchcancel", this._onTouchEnd, this);
            if (this._map.options.zoomAnimation) {
              this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
            } else {
              this._map._resetView(this._center, this._map._limitZoom(this._zoom));
            }
          }
        });
        Map2.addInitHook("addHandler", "touchZoom", TouchZoom);
        Map2.BoxZoom = BoxZoom;
        Map2.DoubleClickZoom = DoubleClickZoom;
        Map2.Drag = Drag;
        Map2.Keyboard = Keyboard;
        Map2.ScrollWheelZoom = ScrollWheelZoom;
        Map2.TapHold = TapHold;
        Map2.TouchZoom = TouchZoom;
        exports2.Bounds = Bounds;
        exports2.Browser = Browser;
        exports2.CRS = CRS;
        exports2.Canvas = Canvas;
        exports2.Circle = Circle;
        exports2.CircleMarker = CircleMarker;
        exports2.Class = Class;
        exports2.Control = Control;
        exports2.DivIcon = DivIcon;
        exports2.DivOverlay = DivOverlay;
        exports2.DomEvent = DomEvent;
        exports2.DomUtil = DomUtil;
        exports2.Draggable = Draggable;
        exports2.Evented = Evented;
        exports2.FeatureGroup = FeatureGroup;
        exports2.GeoJSON = GeoJSON;
        exports2.GridLayer = GridLayer;
        exports2.Handler = Handler;
        exports2.Icon = Icon2;
        exports2.ImageOverlay = ImageOverlay;
        exports2.LatLng = LatLng;
        exports2.LatLngBounds = LatLngBounds;
        exports2.Layer = Layer;
        exports2.LayerGroup = LayerGroup;
        exports2.LineUtil = LineUtil;
        exports2.Map = Map2;
        exports2.Marker = Marker2;
        exports2.Mixin = Mixin;
        exports2.Path = Path;
        exports2.Point = Point;
        exports2.PolyUtil = PolyUtil;
        exports2.Polygon = Polygon;
        exports2.Polyline = Polyline;
        exports2.Popup = Popup;
        exports2.PosAnimation = PosAnimation;
        exports2.Projection = index;
        exports2.Rectangle = Rectangle;
        exports2.Renderer = Renderer;
        exports2.SVG = SVG;
        exports2.SVGOverlay = SVGOverlay;
        exports2.TileLayer = TileLayer2;
        exports2.Tooltip = Tooltip;
        exports2.Transformation = Transformation;
        exports2.Util = Util;
        exports2.VideoOverlay = VideoOverlay;
        exports2.bind = bind2;
        exports2.bounds = toBounds;
        exports2.canvas = canvas;
        exports2.circle = circle;
        exports2.circleMarker = circleMarker;
        exports2.control = control;
        exports2.divIcon = divIcon;
        exports2.extend = extend2;
        exports2.featureGroup = featureGroup;
        exports2.geoJSON = geoJSON;
        exports2.geoJson = geoJson;
        exports2.gridLayer = gridLayer;
        exports2.icon = icon;
        exports2.imageOverlay = imageOverlay;
        exports2.latLng = toLatLng;
        exports2.latLngBounds = toLatLngBounds;
        exports2.layerGroup = layerGroup;
        exports2.map = createMap;
        exports2.marker = marker;
        exports2.point = toPoint;
        exports2.polygon = polygon;
        exports2.polyline = polyline;
        exports2.popup = popup;
        exports2.rectangle = rectangle;
        exports2.setOptions = setOptions;
        exports2.stamp = stamp;
        exports2.svg = svg;
        exports2.svgOverlay = svgOverlay;
        exports2.tileLayer = tileLayer;
        exports2.tooltip = tooltip;
        exports2.transformation = toTransformation;
        exports2.version = version;
        exports2.videoOverlay = videoOverlay;
        var oldL = window.L;
        exports2.noConflict = function() {
          window.L = oldL;
          return this;
        };
        window.L = exports2;
      }));
    }
  });

  // frontend/node_modules/leaflet/dist/leaflet.css
  var init_leaflet = __esm({
    "frontend/node_modules/leaflet/dist/leaflet.css"() {
    }
  });

  // frontend/src/components/Trial.jsx
  var Trial_exports = {};
  __export(Trial_exports, {
    default: () => Trial_default
  });
  var import_react24, import_leaflet, Trial, Trial_default;
  var init_Trial = __esm({
    "frontend/src/components/Trial.jsx"() {
      import_react24 = __toESM(__require("react"), 1);
      import_leaflet = __toESM(require_leaflet_src(), 1);
      init_leaflet();
      Trial = () => {
        const mapRef = (0, import_react24.useRef)(null);
        const [marker, setMarker] = (0, import_react24.useState)(null);
        const [landmark, setLandmark] = (0, import_react24.useState)("");
        (0, import_react24.useEffect)(() => {
          const map = import_leaflet.default.map("map").setView([20.5937, 78.9629], 5);
          import_leaflet.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
          }).addTo(map);
          const newMarker = import_leaflet.default.marker([20.5937, 78.9629], { draggable: true }).addTo(map);
          newMarker.on("dragend", (event) => {
            const { lat, lng } = event.target.getLatLng();
            console.log("Selected Location:", lat, lng);
          });
          map.on("click", (e) => {
            newMarker.setLatLng(e.latlng);
            console.log("Clicked Location:", e.latlng.lat, e.latlng.lng);
          });
          setMarker(newMarker);
          mapRef.current = map;
          return () => {
            map.remove();
          };
        }, []);
        const searchLandmark = async () => {
          if (!landmark) return;
          const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${landmark}`);
          const data = await response.json();
          if (data.length > 0) {
            const { lat, lon } = data[0];
            mapRef.current.setView([lat, lon], 15);
            marker?.setLatLng([lat, lon]);
          } else {
            alert("Landmark not found!");
          }
        };
        return /* @__PURE__ */ import_react24.default.createElement("div", null, /* @__PURE__ */ import_react24.default.createElement(
          "input",
          {
            type: "text",
            placeholder: "Enter landmark",
            value: landmark,
            onChange: (e) => setLandmark(e.target.value)
          }
        ), /* @__PURE__ */ import_react24.default.createElement("button", { onClick: searchLandmark }, "Search"), /* @__PURE__ */ import_react24.default.createElement("div", { id: "map", style: { height: "400px", width: "100%" } }));
      };
      Trial_default = Trial;
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/attribution.js
  function useAttribution(map, attribution) {
    const attributionRef = (0, import_react25.useRef)(attribution);
    (0, import_react25.useEffect)(function updateAttribution() {
      if (attribution !== attributionRef.current && map.attributionControl != null) {
        if (attributionRef.current != null) {
          map.attributionControl.removeAttribution(attributionRef.current);
        }
        if (attribution != null) {
          map.attributionControl.addAttribution(attribution);
        }
      }
      attributionRef.current = attribution;
    }, [
      map,
      attribution
    ]);
  }
  var import_react25;
  var init_attribution = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/attribution.js"() {
      import_react25 = __require("react");
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/context.js
  function createLeafletContext(map) {
    return Object.freeze({
      __version: CONTEXT_VERSION,
      map
    });
  }
  function extendContext(source, extra) {
    return Object.freeze({
      ...source,
      ...extra
    });
  }
  function useLeafletContext() {
    const context = (0, import_react26.use)(LeafletContext);
    if (context == null) {
      throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
    }
    return context;
  }
  var import_react26, CONTEXT_VERSION, LeafletContext;
  var init_context = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/context.js"() {
      import_react26 = __require("react");
      CONTEXT_VERSION = 1;
      LeafletContext = (0, import_react26.createContext)(null);
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/component.js
  function createContainerComponent(useElement) {
    function ContainerComponent(props, forwardedRef) {
      const { instance, context } = useElement(props).current;
      (0, import_react27.useImperativeHandle)(forwardedRef, () => instance);
      const { children } = props;
      return children == null ? null : /* @__PURE__ */ import_react27.default.createElement(LeafletContext, {
        value: context
      }, children);
    }
    return /* @__PURE__ */ (0, import_react27.forwardRef)(ContainerComponent);
  }
  function createLeafComponent(useElement) {
    function LeafComponent(props, forwardedRef) {
      const { instance } = useElement(props).current;
      (0, import_react27.useImperativeHandle)(forwardedRef, () => instance);
      return null;
    }
    return /* @__PURE__ */ (0, import_react27.forwardRef)(LeafComponent);
  }
  var import_react27, import_react_dom;
  var init_component = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/component.js"() {
      import_react27 = __toESM(__require("react"), 1);
      import_react_dom = __require("react-dom");
      init_context();
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/events.js
  function useEventHandlers(element, eventHandlers) {
    const eventHandlersRef = (0, import_react28.useRef)(void 0);
    (0, import_react28.useEffect)(function addEventHandlers() {
      if (eventHandlers != null) {
        element.instance.on(eventHandlers);
      }
      eventHandlersRef.current = eventHandlers;
      return function removeEventHandlers() {
        if (eventHandlersRef.current != null) {
          element.instance.off(eventHandlersRef.current);
        }
        eventHandlersRef.current = null;
      };
    }, [
      element,
      eventHandlers
    ]);
  }
  var import_react28;
  var init_events = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/events.js"() {
      import_react28 = __require("react");
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/pane.js
  function withPane(props, context) {
    const pane = props.pane ?? context.pane;
    return pane ? {
      ...props,
      pane
    } : props;
  }
  var init_pane = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/pane.js"() {
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/element.js
  function createElementObject(instance, context, container) {
    return Object.freeze({
      instance,
      context,
      container
    });
  }
  function createElementHook(createElement3, updateElement) {
    if (updateElement == null) {
      return function useImmutableLeafletElement(props, context) {
        const elementRef = (0, import_react29.useRef)(void 0);
        if (!elementRef.current) elementRef.current = createElement3(props, context);
        return elementRef;
      };
    }
    return function useMutableLeafletElement(props, context) {
      const elementRef = (0, import_react29.useRef)(void 0);
      if (!elementRef.current) elementRef.current = createElement3(props, context);
      const propsRef = (0, import_react29.useRef)(props);
      const { instance } = elementRef.current;
      (0, import_react29.useEffect)(function updateElementProps() {
        if (propsRef.current !== props) {
          updateElement(instance, props, propsRef.current);
          propsRef.current = props;
        }
      }, [
        instance,
        props,
        updateElement
      ]);
      return elementRef;
    };
  }
  var import_react29;
  var init_element = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/element.js"() {
      import_react29 = __require("react");
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/layer.js
  function useLayerLifecycle(element, context) {
    (0, import_react30.useEffect)(function addLayer() {
      const container = context.layerContainer ?? context.map;
      container.addLayer(element.instance);
      return function removeLayer() {
        context.layerContainer?.removeLayer(element.instance);
        context.map.removeLayer(element.instance);
      };
    }, [
      context,
      element
    ]);
  }
  function createLayerHook(useElement) {
    return function useLayer(props) {
      const context = useLeafletContext();
      const elementRef = useElement(withPane(props, context), context);
      useAttribution(context.map, props.attribution);
      useEventHandlers(elementRef.current, props.eventHandlers);
      useLayerLifecycle(elementRef.current, context);
      return elementRef;
    };
  }
  var import_react30;
  var init_layer = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/layer.js"() {
      import_react30 = __require("react");
      init_attribution();
      init_context();
      init_events();
      init_pane();
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/generic.js
  function createLayerComponent(createElement3, updateElement) {
    const useElement = createElementHook(createElement3, updateElement);
    const useLayer = createLayerHook(useElement);
    return createContainerComponent(useLayer);
  }
  function createTileLayerComponent(createElement3, updateElement) {
    const useElement = createElementHook(createElement3, updateElement);
    const useLayer = createLayerHook(useElement);
    return createLeafComponent(useLayer);
  }
  var init_generic = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/generic.js"() {
      init_component();
      init_element();
      init_layer();
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/grid-layer.js
  function updateGridLayer(layer, props, prevProps) {
    const { opacity, zIndex } = props;
    if (opacity != null && opacity !== prevProps.opacity) {
      layer.setOpacity(opacity);
    }
    if (zIndex != null && zIndex !== prevProps.zIndex) {
      layer.setZIndex(zIndex);
    }
  }
  var init_grid_layer = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/grid-layer.js"() {
    }
  });

  // frontend/node_modules/@react-leaflet/core/lib/index.js
  var init_lib = __esm({
    "frontend/node_modules/@react-leaflet/core/lib/index.js"() {
      init_context();
      init_element();
      init_generic();
      init_grid_layer();
      init_pane();
    }
  });

  // frontend/node_modules/react-leaflet/lib/hooks.js
  function useMap() {
    return useLeafletContext().map;
  }
  function useMapEvents(handlers) {
    const map = useMap();
    (0, import_react31.useEffect)(function addMapEventHandlers() {
      map.on(handlers);
      return function removeMapEventHandlers() {
        map.off(handlers);
      };
    }, [
      map,
      handlers
    ]);
    return map;
  }
  var import_react31;
  var init_hooks = __esm({
    "frontend/node_modules/react-leaflet/lib/hooks.js"() {
      init_lib();
      import_react31 = __require("react");
    }
  });

  // frontend/node_modules/react-leaflet/lib/MapContainer.js
  function MapContainerComponent({ bounds, boundsOptions, center, children, className, id, placeholder, style, whenReady, zoom, ...options }, forwardedRef) {
    const [props] = (0, import_react32.useState)({
      className,
      id,
      style
    });
    const [context, setContext] = (0, import_react32.useState)(null);
    const mapInstanceRef = (0, import_react32.useRef)(void 0);
    (0, import_react32.useImperativeHandle)(forwardedRef, () => context?.map ?? null, [
      context
    ]);
    const mapRef = (0, import_react32.useCallback)((node) => {
      if (node !== null && !mapInstanceRef.current) {
        const map = new import_leaflet3.Map(node, options);
        mapInstanceRef.current = map;
        if (center != null && zoom != null) {
          map.setView(center, zoom);
        } else if (bounds != null) {
          map.fitBounds(bounds, boundsOptions);
        }
        if (whenReady != null) {
          map.whenReady(whenReady);
        }
        setContext(createLeafletContext(map));
      }
    }, []);
    (0, import_react32.useEffect)(() => {
      return () => {
        context?.map.remove();
      };
    }, [
      context
    ]);
    const contents = context ? /* @__PURE__ */ import_react32.default.createElement(LeafletContext, {
      value: context
    }, children) : placeholder ?? null;
    return /* @__PURE__ */ import_react32.default.createElement("div", {
      ...props,
      ref: mapRef
    }, contents);
  }
  var import_leaflet3, import_react32, MapContainer;
  var init_MapContainer = __esm({
    "frontend/node_modules/react-leaflet/lib/MapContainer.js"() {
      init_lib();
      import_leaflet3 = __toESM(require_leaflet_src(), 1);
      import_react32 = __toESM(__require("react"), 1);
      MapContainer = /* @__PURE__ */ (0, import_react32.forwardRef)(MapContainerComponent);
    }
  });

  // frontend/node_modules/react-leaflet/lib/Marker.js
  var import_leaflet4, Marker;
  var init_Marker = __esm({
    "frontend/node_modules/react-leaflet/lib/Marker.js"() {
      init_lib();
      import_leaflet4 = __toESM(require_leaflet_src(), 1);
      Marker = createLayerComponent(function createMarker({ position, ...options }, ctx) {
        const marker = new import_leaflet4.Marker(position, options);
        return createElementObject(marker, extendContext(ctx, {
          overlayContainer: marker
        }));
      }, function updateMarker(marker, props, prevProps) {
        if (props.position !== prevProps.position) {
          marker.setLatLng(props.position);
        }
        if (props.icon != null && props.icon !== prevProps.icon) {
          marker.setIcon(props.icon);
        }
        if (props.zIndexOffset != null && props.zIndexOffset !== prevProps.zIndexOffset) {
          marker.setZIndexOffset(props.zIndexOffset);
        }
        if (props.opacity != null && props.opacity !== prevProps.opacity) {
          marker.setOpacity(props.opacity);
        }
        if (marker.dragging != null && props.draggable !== prevProps.draggable) {
          if (props.draggable === true) {
            marker.dragging.enable();
          } else {
            marker.dragging.disable();
          }
        }
      });
    }
  });

  // frontend/node_modules/react-leaflet/lib/TileLayer.js
  var import_leaflet5, TileLayer;
  var init_TileLayer = __esm({
    "frontend/node_modules/react-leaflet/lib/TileLayer.js"() {
      init_lib();
      import_leaflet5 = __toESM(require_leaflet_src(), 1);
      TileLayer = createTileLayerComponent(function createTileLayer({ url, ...options }, context) {
        const layer = new import_leaflet5.TileLayer(url, withPane(options, context));
        return createElementObject(layer, context);
      }, function updateTileLayer(layer, props, prevProps) {
        updateGridLayer(layer, props, prevProps);
        const { url } = props;
        if (url != null && url !== prevProps.url) {
          layer.setUrl(url);
        }
      });
    }
  });

  // frontend/node_modules/react-leaflet/lib/index.js
  var init_lib2 = __esm({
    "frontend/node_modules/react-leaflet/lib/index.js"() {
      init_hooks();
      init_MapContainer();
      init_Marker();
      init_TileLayer();
    }
  });

  // frontend/src/pages/AddNewMess.jsx
  var AddNewMess_exports = {};
  __export(AddNewMess_exports, {
    default: () => AddNewMess_default
  });
  var import_react33, import_react_router_dom9, import_leaflet7, import_meta8, AddMessPage, AddNewMess_default;
  var init_AddNewMess = __esm({
    "frontend/src/pages/AddNewMess.jsx"() {
      import_react33 = __toESM(__require("react"), 1);
      import_react_router_dom9 = __require("react-router-dom");
      init_axios2();
      init_lib2();
      init_leaflet();
      import_leaflet7 = __toESM(require_leaflet_src(), 1);
      init_MessDashboardNavbar();
      import_meta8 = {};
      delete import_leaflet7.default.Icon.Default.prototype._getIconUrl;
      import_leaflet7.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
      });
      AddMessPage = () => {
        const [formData, setFormData] = (0, import_react33.useState)({
          name: "",
          address: "",
          liveLocation: { type: "Point", coordinates: [0, 0] }
          // Match backend GeoJSON format
        });
        const [image, setImage] = (0, import_react33.useState)(null);
        const [imagePreview, setImagePreview] = (0, import_react33.useState)(null);
        const [searchQuery, setSearchQuery] = (0, import_react33.useState)("");
        const [suggestions, setSuggestions] = (0, import_react33.useState)([]);
        const [loading, setLoading] = (0, import_react33.useState)(false);
        const [error, setError] = (0, import_react33.useState)("");
        const [success, setSuccess] = (0, import_react33.useState)("");
        const navigate = (0, import_react_router_dom9.useNavigate)();
        const LOCATIONIQ_API_KEY = "pk.a4dfe60149deb8fe491513e5931f5656";
        (0, import_react33.useEffect)(() => {
          const debounce2 = setTimeout(() => {
            if (!searchQuery) {
              setSuggestions([]);
              return;
            }
            const fetchSuggestions = async () => {
              try {
                const response = await axios_default.get(
                  `https://api.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${searchQuery}&limit=5&countrycodes=in`
                );
                setSuggestions(response.data);
              } catch (err) {
                console.error("Error fetching suggestions:", err);
                setError("Failed to fetch location suggestions.");
              }
            };
            fetchSuggestions();
          }, 500);
          return () => clearTimeout(debounce2);
        }, [searchQuery]);
        const MapController = ({ coordinates }) => {
          const map = useMap();
          (0, import_react33.useEffect)(() => {
            if (coordinates[0] !== 0 && coordinates[1] !== 0) {
              map.setView([coordinates[1], coordinates[0]], 15);
            }
          }, [coordinates, map]);
          useMapEvents({
            click(e) {
              const { lat, lng } = e.latlng;
              setFormData((prev) => ({
                ...prev,
                liveLocation: { type: "Point", coordinates: [lng, lat] }
              }));
              setSearchQuery("");
              setSuggestions([]);
            }
          });
          return coordinates[0] !== 0 ? /* @__PURE__ */ import_react33.default.createElement(Marker, { position: [coordinates[1], coordinates[0]] }) : null;
        };
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value
          }));
        };
        const handleImageChange = (e) => {
          const file = e.target.files[0];
          if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
          }
        };
        const removeImage = () => {
          setImage(null);
          setImagePreview(null);
        };
        const handleSuggestionSelect = (suggestion) => {
          setFormData((prev) => ({
            ...prev,
            liveLocation: { type: "Point", coordinates: [parseFloat(suggestion.lon), parseFloat(suggestion.lat)] },
            address: suggestion.display_name
            // Auto-fill address with suggestion
          }));
          setSearchQuery(suggestion.display_name);
          setSuggestions([]);
        };
        const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          setError("");
          setSuccess("");
          try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("address", formData.address);
            data.append("liveLocation", JSON.stringify(formData.liveLocation));
            if (image) {
              data.append("image", image);
            }
            const response = await axios_default.post(
              `${import_meta8.env.VITE_BASE_URL}/mess/register`,
              data,
              {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
              }
            );
            setSuccess(response.data.message);
            setTimeout(() => navigate("/mess-dashboard"), 2e3);
          } catch (err) {
            setError(err.response?.data?.message || "Failed to register mess");
          } finally {
            setLoading(false);
          }
        };
        return /* @__PURE__ */ import_react33.default.createElement("div", { className: "flex flex-col p-4 sm:p-5 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50" }, /* @__PURE__ */ import_react33.default.createElement("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" }), /* @__PURE__ */ import_react33.default.createElement(MessDashboardNavbar_default, null), /* @__PURE__ */ import_react33.default.createElement("div", { className: "container mx-auto px-4 py-6 sm:py-8 mt-16 sm:mt-20 relative z-10" }, /* @__PURE__ */ import_react33.default.createElement("div", { className: "bg-white rounded-xl shadow-2xl p-4 sm:p-6 mb-4 sm:mb-6 mt-2 sm:mt-4 relative z-20 animate-slideIn" }, /* @__PURE__ */ import_react33.default.createElement("h2", { className: "text-xl sm:text-2xl font-bold text-gray-800 flex items-center" }, /* @__PURE__ */ import_react33.default.createElement("span", { className: "mr-2" }, "\u{1F37D}\uFE0F"), " Register New Mess")), success && /* @__PURE__ */ import_react33.default.createElement("div", { className: "bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg shadow-md flex items-center animate-slideUp" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-6 w-6 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" })), /* @__PURE__ */ import_react33.default.createElement("p", null, success)), error && /* @__PURE__ */ import_react33.default.createElement("div", { className: "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg shadow-md flex items-center animate-slideUp" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-6 w-6 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" })), /* @__PURE__ */ import_react33.default.createElement("p", null, error)), /* @__PURE__ */ import_react33.default.createElement("div", { className: "bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto animate-fadeIn" }, /* @__PURE__ */ import_react33.default.createElement("form", { onSubmit: handleSubmit, encType: "multipart/form-data", className: "space-y-6" }, /* @__PURE__ */ import_react33.default.createElement("div", null, /* @__PURE__ */ import_react33.default.createElement("label", { className: "block text-gray-700 font-medium mb-2 flex items-center" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-5 w-5 mr-2 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })), "Mess Name"), /* @__PURE__ */ import_react33.default.createElement(
          "input",
          {
            type: "text",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            placeholder: "Enter mess name",
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all",
            required: true
          }
        )), /* @__PURE__ */ import_react33.default.createElement("div", null, /* @__PURE__ */ import_react33.default.createElement("label", { className: "block text-gray-700 font-medium mb-2 flex items-center" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-5 w-5 mr-2 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" }), /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })), "Search Location (for Map)"), /* @__PURE__ */ import_react33.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react33.default.createElement(
          "input",
          {
            type: "text",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: "Search for a location in India...",
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          }
        ), suggestions.length > 0 && /* @__PURE__ */ import_react33.default.createElement("ul", { className: "absolute z-20 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto shadow-lg" }, suggestions.map((suggestion) => /* @__PURE__ */ import_react33.default.createElement(
          "li",
          {
            key: suggestion.place_id,
            onClick: () => handleSuggestionSelect(suggestion),
            className: "p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
          },
          suggestion.display_name
        ))))), /* @__PURE__ */ import_react33.default.createElement("div", null, /* @__PURE__ */ import_react33.default.createElement("label", { className: "block text-gray-700 font-medium mb-2 flex items-center" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-5 w-5 mr-2 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" }), /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })), "Address"), /* @__PURE__ */ import_react33.default.createElement(
          "input",
          {
            type: "text",
            name: "address",
            value: formData.address,
            onChange: handleChange,
            placeholder: "Enter address manually",
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all",
            required: true
          }
        )), /* @__PURE__ */ import_react33.default.createElement("div", null, /* @__PURE__ */ import_react33.default.createElement("label", { className: "block text-gray-700 font-medium mb-2 flex items-center" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-5 w-5 mr-2 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" }), /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })), "Select Location on Map"), /* @__PURE__ */ import_react33.default.createElement(
          MapContainer,
          {
            center: [20.5937, 78.9629],
            zoom: 5,
            style: { height: "400px", width: "100%" },
            className: "rounded-lg border border-gray-300"
          },
          /* @__PURE__ */ import_react33.default.createElement(
            TileLayer,
            {
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attribution: '\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
          ),
          /* @__PURE__ */ import_react33.default.createElement(MapController, { coordinates: formData.liveLocation.coordinates })
        ), /* @__PURE__ */ import_react33.default.createElement("p", { className: "text-sm text-gray-500 mt-2" }, "Selected: Lat: ", formData.liveLocation.coordinates[1].toFixed(4), ", Lon: ", formData.liveLocation.coordinates[0].toFixed(4))), /* @__PURE__ */ import_react33.default.createElement("div", null, /* @__PURE__ */ import_react33.default.createElement("label", { className: "block text-gray-700 font-medium mb-2 flex items-center" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-5 w-5 mr-2 text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" })), "Upload Image"), /* @__PURE__ */ import_react33.default.createElement(
          "input",
          {
            type: "file",
            accept: "image/*",
            onChange: handleImageChange,
            className: "w-full p-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
          }
        ), imagePreview && /* @__PURE__ */ import_react33.default.createElement("div", { className: "mt-4 relative" }, /* @__PURE__ */ import_react33.default.createElement(
          "img",
          {
            src: imagePreview,
            alt: "Preview",
            className: "w-full max-h-48 object-cover rounded-lg shadow-md"
          }
        ), /* @__PURE__ */ import_react33.default.createElement(
          "button",
          {
            type: "button",
            onClick: removeImage,
            className: "absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
          },
          /* @__PURE__ */ import_react33.default.createElement("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /* @__PURE__ */ import_react33.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }))
        ))), /* @__PURE__ */ import_react33.default.createElement("div", { className: "flex justify-end gap-4" }, /* @__PURE__ */ import_react33.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => navigate("/mess-dashboard"),
            className: "px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
          },
          "Cancel"
        ), /* @__PURE__ */ import_react33.default.createElement(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
          },
          loading ? /* @__PURE__ */ import_react33.default.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ import_react33.default.createElement("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react33.default.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ import_react33.default.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })), "Registering...") : "Register Mess"
        ))))));
      };
      AddNewMess_default = AddMessPage;
    }
  });

  // frontend/src/pages/CreateFirstMess.jsx
  var CreateFirstMess_exports = {};
  __export(CreateFirstMess_exports, {
    default: () => CreateFirstMess_default
  });
  var import_react34, import_react_router_dom10, CreateFirstMessPage, CreateFirstMess_default;
  var init_CreateFirstMess = __esm({
    "frontend/src/pages/CreateFirstMess.jsx"() {
      import_react34 = __toESM(__require("react"), 1);
      import_react_router_dom10 = __require("react-router-dom");
      init_lucide_react();
      init_MessDashboardNavbar();
      CreateFirstMessPage = () => {
        const navigate = (0, import_react_router_dom10.useNavigate)();
        return /* @__PURE__ */ import_react34.default.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50" }, /* @__PURE__ */ import_react34.default.createElement(MessDashboardNavbar_default, null), /* @__PURE__ */ import_react34.default.createElement("div", { className: "pt-24 px-4 sm:px-6" }, /* @__PURE__ */ import_react34.default.createElement("div", { className: "max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg p-8 text-center" }, /* @__PURE__ */ import_react34.default.createElement("div", { className: "w-16 h-16 mx-auto rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4" }, /* @__PURE__ */ import_react34.default.createElement(Store, { className: "w-8 h-8" })), /* @__PURE__ */ import_react34.default.createElement("h1", { className: "text-3xl font-bold text-slate-800 mb-3" }, "Create your first mess"), /* @__PURE__ */ import_react34.default.createElement("p", { className: "text-slate-600 mb-8" }, "You do not have any registered mess yet. Start by adding your first mess and then manage menu, members, and attendance from one place."), /* @__PURE__ */ import_react34.default.createElement(
          "button",
          {
            type: "button",
            onClick: () => navigate("/mess-dashboard/add-mess"),
            className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          },
          /* @__PURE__ */ import_react34.default.createElement(CirclePlus, { className: "w-5 h-5" }),
          "Add Your First Mess"
        ))));
      };
      CreateFirstMess_default = CreateFirstMessPage;
    }
  });

  // frontend/src/pages/RegisteredMembers.jsx
  var RegisteredMembers_exports = {};
  __export(RegisteredMembers_exports, {
    default: () => RegisteredMembers_default
  });
  var import_react35, import_react_router_dom11, import_meta9, RegisteredMembers, RegisteredMembers_default;
  var init_RegisteredMembers = __esm({
    "frontend/src/pages/RegisteredMembers.jsx"() {
      import_react35 = __toESM(__require("react"), 1);
      import_react_router_dom11 = __require("react-router-dom");
      init_axios2();
      init_MessDashboardNavbar();
      import_meta9 = {};
      RegisteredMembers = () => {
        const { messId } = (0, import_react_router_dom11.useParams)();
        const navigate = (0, import_react_router_dom11.useNavigate)();
        const [acceptedMembers, setAcceptedMembers] = (0, import_react35.useState)([]);
        const [pendingRequests, setPendingRequests] = (0, import_react35.useState)([]);
        const [loading, setLoading] = (0, import_react35.useState)(true);
        const [error, setError] = (0, import_react35.useState)("");
        const [success, setSuccess] = (0, import_react35.useState)("");
        (0, import_react35.useEffect)(() => {
          fetchMembers();
        }, [messId]);
        (0, import_react35.useEffect)(() => {
          if (success || error) {
            const timer = setTimeout(() => {
              setSuccess("");
              setError("");
            }, 3e3);
            return () => clearTimeout(timer);
          }
        }, [success, error]);
        const fetchMembers = async () => {
          setLoading(true);
          try {
            const response = await axios_default.get(
              `${import_meta9.env.VITE_BASE_URL}/messOwner/${messId}/members`,
              { withCredentials: true }
            );
            setAcceptedMembers(response.data.acceptedMembers);
            setPendingRequests(response.data.pendingRequests);
          } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch members");
          } finally {
            setLoading(false);
          }
        };
        const handleAccept = async (enrollmentId) => {
          try {
            setLoading(true);
            if (window.confirm("Do you want to accept this member?")) {
              await axios_default.put(
                `${import_meta9.env.VITE_BASE_URL}/messOwner/enrollment/${enrollmentId}/accept`,
                {},
                { withCredentials: true }
              );
              setSuccess("Member accepted successfully");
              await fetchMembers();
            }
          } catch (err) {
            setError(err.response?.data?.message || "Failed to accept member");
          } finally {
            setLoading(false);
          }
        };
        const handleReject = async (enrollmentId) => {
          try {
            setLoading(true);
            if (window.confirm("Do you want to reject this request?")) {
              await axios_default.delete(
                `${import_meta9.env.VITE_BASE_URL}/messOwner/enrollment/${enrollmentId}/reject?messId=${messId}`,
                { withCredentials: true }
              );
              setSuccess("Request rejected successfully");
              await fetchMembers();
            }
          } catch (err) {
            setError(err.response?.data?.message || "Failed to reject request");
          } finally {
            setLoading(false);
          }
        };
        const handleViewAttendance = (userId) => {
          navigate(`/mess-dashboard/${messId}/user-attendance/${userId}`);
        };
        return /* @__PURE__ */ import_react35.default.createElement("div", { className: "flex flex-col p-4 sm:p-5 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50" }, /* @__PURE__ */ import_react35.default.createElement(MessDashboardNavbar_default, null), /* @__PURE__ */ import_react35.default.createElement("div", { className: "container mx-auto px-4 py-6 sm:py-8 mt-16 sm:mt-20" }, /* @__PURE__ */ import_react35.default.createElement("h2", { className: "text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6" }, "Mess Members"), success && /* @__PURE__ */ import_react35.default.createElement("div", { className: "bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg" }, success), error && /* @__PURE__ */ import_react35.default.createElement("div", { className: "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg" }, error), loading ? /* @__PURE__ */ import_react35.default.createElement("div", { className: "flex justify-center items-center p-12" }, /* @__PURE__ */ import_react35.default.createElement("div", { className: "animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full" })) : /* @__PURE__ */ import_react35.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, /* @__PURE__ */ import_react35.default.createElement("div", { className: "bg-white rounded-xl shadow-lg p-6" }, /* @__PURE__ */ import_react35.default.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Accepted Members"), acceptedMembers.length === 0 ? /* @__PURE__ */ import_react35.default.createElement("p", { className: "text-gray-500" }, "No accepted members yet.") : /* @__PURE__ */ import_react35.default.createElement("div", { className: "space-y-4" }, acceptedMembers.map((member) => /* @__PURE__ */ import_react35.default.createElement(
          "div",
          {
            key: member._id,
            className: "border p-4 rounded-lg flex justify-between items-center"
          },
          /* @__PURE__ */ import_react35.default.createElement("div", null, /* @__PURE__ */ import_react35.default.createElement(
            "button",
            {
              onClick: () => handleViewAttendance(member.userId._id),
              className: "font-medium text-blue-600 hover:text-blue-800 transition-colors underline"
            },
            member.userId.name
          ), /* @__PURE__ */ import_react35.default.createElement("p", { className: "text-gray-500" }, member.userId.email), /* @__PURE__ */ import_react35.default.createElement("p", { className: "text-sm text-gray-400" }, "Joined: ", new Date(member.joinedAt).toLocaleDateString()))
        )))), /* @__PURE__ */ import_react35.default.createElement("div", { className: "bg-white rounded-xl shadow-lg p-6" }, /* @__PURE__ */ import_react35.default.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Pending Requests"), pendingRequests.length === 0 ? /* @__PURE__ */ import_react35.default.createElement("p", { className: "text-gray-500" }, "No pending requests.") : /* @__PURE__ */ import_react35.default.createElement("div", { className: "space-y-4" }, pendingRequests.map((request) => /* @__PURE__ */ import_react35.default.createElement(
          "div",
          {
            key: request._id,
            className: "border p-4 rounded-lg flex justify-between items-center"
          },
          /* @__PURE__ */ import_react35.default.createElement("div", null, /* @__PURE__ */ import_react35.default.createElement("p", { className: "font-medium" }, request.userId.name), /* @__PURE__ */ import_react35.default.createElement("p", { className: "text-gray-500" }, request.userId.email), /* @__PURE__ */ import_react35.default.createElement("p", { className: "text-sm text-gray-400" }, "Requested: ", new Date(request.createdAt).toLocaleDateString())),
          /* @__PURE__ */ import_react35.default.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ import_react35.default.createElement(
            "button",
            {
              onClick: () => handleAccept(request._id),
              className: "bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700",
              disabled: loading
            },
            "Accept"
          ), /* @__PURE__ */ import_react35.default.createElement(
            "button",
            {
              onClick: () => handleReject(request._id),
              className: "bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700",
              disabled: loading
            },
            "Reject"
          ))
        )))))));
      };
      RegisteredMembers_default = RegisteredMembers;
    }
  });

  // frontend/src/pages/AttendencePage.jsx
  var AttendencePage_exports = {};
  __export(AttendencePage_exports, {
    default: () => AttendencePage_default
  });
  function Attendance() {
    const { messId } = (0, import_react_router_dom12.useParams)();
    const [attendanceData, setAttendanceData] = (0, import_react36.useState)({
      enrolledMembers: [],
      nonEnrolledCustomers: []
    });
    const [loading, setLoading] = (0, import_react36.useState)(true);
    const [error, setError] = (0, import_react36.useState)("");
    const [actionError, setActionError] = (0, import_react36.useState)("");
    const [markingKey, setMarkingKey] = (0, import_react36.useState)("");
    const fetchAttendance = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios_default.get(
          `${import_meta10.env.VITE_BASE_URL}/mess/${messId}/today-attendance`,
          { withCredentials: true }
        );
        setAttendanceData(response.data);
        console.log(response.data, "Attendance data fetched successfully");
      } catch (err) {
        console.error("Fetch attendance error:", err);
        setError(err.response?.data?.message || "Failed to fetch attendance data.");
      } finally {
        setLoading(false);
      }
    };
    (0, import_react36.useEffect)(() => {
      if (messId) {
        fetchAttendance();
      } else {
        setError("Mess ID is missing.");
        setLoading(false);
      }
    }, [messId]);
    const dayEnrolled = attendanceData.enrolledMembers.filter((member) => member.comingDay);
    const dayNonEnrolled = attendanceData.nonEnrolledCustomers.filter((customer) => customer.comingDay);
    const nightEnrolled = attendanceData.enrolledMembers.filter((member) => member.comingNight);
    const nightNonEnrolled = attendanceData.nonEnrolledCustomers.filter((customer) => customer.comingNight);
    const handleMarkAttendance = async (userId, mealType, attended) => {
      const key = `${userId}-${mealType}`;
      try {
        setActionError("");
        setMarkingKey(key);
        await axios_default.patch(
          `${import_meta10.env.VITE_BASE_URL}/mess/${messId}/attendance/${userId}/${mealType}`,
          { attended },
          { withCredentials: true }
        );
        await fetchAttendance();
      } catch (err) {
        console.error("Mark attendance error:", err);
        setActionError(err.response?.data?.message || "Failed to update attendance.");
      } finally {
        setMarkingKey("");
      }
    };
    const renderUserList = (users, isEnrolled, mealType) => /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, users.length > 0 ? users.map((entry) => {
      const attended = mealType === "comingDay" ? entry.dayMarked : entry.nightMarked;
      const reserveFlag = mealType === "comingDay" ? entry.comingDay : entry.comingNight;
      const meal = mealType === "comingDay" ? "day" : "night";
      const key = `${entry.user._id}-${meal}`;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: entry.user._id,
          className: `p-3 rounded-lg flex items-center justify-between gap-3 ${attended ? "bg-green-100" : "bg-slate-100"}`
        },
        /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-800" }, entry.user.name || "Unknown User"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-600" }, isEnrolled ? reserveFlag ? "Reserved" : "Not reserved (owner can still mark)" : "Reserved")),
        /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: `text-xs font-semibold px-2 py-1 rounded-full ${attended ? "bg-green-200 text-green-800" : "bg-slate-200 text-slate-700"}` }, attended ? "Present" : "Not marked"), /* @__PURE__ */ React.createElement(
          "button",
          {
            type: "button",
            onClick: () => handleMarkAttendance(entry.user._id, meal, !attended),
            disabled: markingKey === key,
            className: `text-xs font-semibold px-3 py-1 rounded-md transition-all ${attended ? "bg-amber-500 text-white hover:bg-amber-600" : "bg-blue-600 text-white hover:bg-blue-700"} ${markingKey === key ? "opacity-60 cursor-not-allowed" : ""}`
          },
          markingKey === key ? "Saving..." : attended ? "Unmark" : "Mark Present"
        ))
      );
    }) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, isEnrolled ? "No enrolled members" : "No non-enrolled customers", " for this meal."));
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col p-4 sm:p-6" }, /* @__PURE__ */ React.createElement(MessDashboardNavbar_default, null), /* @__PURE__ */ React.createElement("div", { className: "mt-16 sm:mt-20" }, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Users, { className: "w-8 h-8 text-blue-500" }), "Today's Attendance")), loading ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading attendance data...")) : error ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center bg-red-50 border-red-200" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4" }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("p", { className: "text-red-600 text-lg" }, error)) : /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, actionError && /* @__PURE__ */ React.createElement("div", { className: "card p-4 bg-red-50 border-red-200 text-red-700 text-sm" }, actionError), /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold text-yellow-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Utensils, { className: "w-6 h-6" }), "Day Attendance (Lunch)"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium text-gray-800 mb-2" }, "Enrolled Members (Total: ", attendanceData.enrolledMembers.length, ", Reserved: ", dayEnrolled.length, ")"), renderUserList(attendanceData.enrolledMembers, true, "comingDay")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium text-gray-800 mb-2" }, "Non-Enrolled Customers (Total: ", dayNonEnrolled.length, ")"), renderUserList(dayNonEnrolled, false, "comingDay")))), /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Utensils, { className: "w-6 h-6" }), "Night Attendance (Dinner)"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium text-gray-800 mb-2" }, "Enrolled Members (Total: ", attendanceData.enrolledMembers.length, ", Reserved: ", nightEnrolled.length, ")"), renderUserList(attendanceData.enrolledMembers, true, "comingNight")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium text-gray-800 mb-2" }, "Non-Enrolled Customers (Total: ", nightNonEnrolled.length, ")"), renderUserList(nightNonEnrolled, false, "comingNight"))))));
  }
  var import_react36, import_react_router_dom12, import_meta10, AttendencePage_default;
  var init_AttendencePage = __esm({
    "frontend/src/pages/AttendencePage.jsx"() {
      import_react36 = __require("react");
      import_react_router_dom12 = __require("react-router-dom");
      init_axios2();
      init_lucide_react();
      init_MessDashboardNavbar();
      import_meta10 = {};
      AttendencePage_default = Attendance;
    }
  });

  // frontend/src/pages/UserAttendance.jsx
  var UserAttendance_exports = {};
  __export(UserAttendance_exports, {
    default: () => UserAttendance_default
  });
  function UserAttendance() {
    const { messId, userId } = (0, import_react_router_dom13.useParams)();
    const [attendanceData, setAttendanceData] = (0, import_react37.useState)({
      totalDays: 0,
      presentDays: 0,
      absentDays: 0,
      records: []
    });
    const [loading, setLoading] = (0, import_react37.useState)(true);
    const [error, setError] = (0, import_react37.useState)("");
    const fetchUserAttendance = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios_default.get(
          `${import_meta11.env.VITE_BASE_URL}/mess/${messId}/user-attendance/${userId}`,
          { withCredentials: true }
        );
        setAttendanceData(response.data);
      } catch (err) {
        console.error("Fetch user attendance error:", err);
        setError(err.response?.data?.message || "Failed to fetch user attendance data.");
      } finally {
        setLoading(false);
      }
    };
    (0, import_react37.useEffect)(() => {
      if (messId && userId) {
        fetchUserAttendance();
      } else {
        setError("Mess ID or User ID is missing.");
        setLoading(false);
      }
    }, [messId, userId]);
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col p-4 sm:p-6" }, /* @__PURE__ */ React.createElement(MessDashboardNavbar_default, null), /* @__PURE__ */ React.createElement("div", { className: "mt-16 sm:mt-20" }, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(User, { className: "w-8 h-8 text-blue-500" }), "User Attendance")), loading ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "spinner mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Loading attendance data...")) : error ? /* @__PURE__ */ React.createElement("div", { className: "card p-8 text-center bg-red-50 border-red-200" }, /* @__PURE__ */ React.createElement("div", { className: "text-6xl mb-4" }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("p", { className: "text-red-600 text-lg" }, error)) : /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Calendar, { className: "w-6 h-6 text-gray-600" }), "Attendance Summary"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-blue-100 rounded-lg text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-600" }, "Total Days"), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-blue-800" }, attendanceData.totalDays)), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-green-100 rounded-lg text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-600" }, "Present Days"), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-green-800" }, attendanceData.presentDays)), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-red-100 rounded-lg text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-600" }, "Absent Days"), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-red-800" }, attendanceData.absentDays)))), /* @__PURE__ */ React.createElement("div", { className: "card p-6 bg-gradient-to-r from-white to-gray-50 border-gray-200" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Calendar, { className: "w-6 h-6 text-gray-600" }), "Attendance Records"), attendanceData.records.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, attendanceData.records.map((record, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        className: "p-4 rounded-lg bg-white shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mb-2 sm:mb-0" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-800" }, formatDate(record.date))),
      /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `px-4 py-2 rounded-lg text-sm font-medium text-center ${record.attendedDay ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`
        },
        "Lunch: ",
        record.attendedDay ? "Attended" : "Absent"
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `px-4 py-2 rounded-lg text-sm font-medium text-center ${record.attendedNight ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`
        },
        "Dinner: ",
        record.attendedNight ? "Attended" : "Absent"
      ))
    ))) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 italic" }, "No attendance records available."))));
  }
  var import_react37, import_react_router_dom13, import_meta11, UserAttendance_default;
  var init_UserAttendance = __esm({
    "frontend/src/pages/UserAttendance.jsx"() {
      import_react37 = __require("react");
      import_react_router_dom13 = __require("react-router-dom");
      init_axios2();
      init_lucide_react();
      init_MessDashboardNavbar();
      import_meta11 = {};
      UserAttendance_default = UserAttendance;
    }
  });

  // frontend/src/App.jsx
  var import_react_router_dom14 = __require("react-router-dom");
  var import_react38 = __require("react");

  // frontend/src/components/ProtectedRoute.jsx
  var import_react = __require("react");
  var import_react_router_dom = __require("react-router-dom");
  var import_meta = {};
  var ProtectedRoute = (props) => {
    const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(null);
    (0, import_react.useEffect)(() => {
      const checkAuth = async () => {
        try {
          const response = await fetch(`${import_meta.env.VITE_BASE_URL}/${props.type}/auth/me`, {
            method: "GET",
            credentials: "include"
          });
          await response.json();
          if (response.ok) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.log(error);
          setIsAuthenticated(false);
        }
      };
      checkAuth();
    }, []);
    if (isAuthenticated === null) return /* @__PURE__ */ React.createElement("p", null, "Loading...");
    return isAuthenticated ? /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null) : /* @__PURE__ */ React.createElement(import_react_router_dom.Navigate, { to: "/signup" });
  };
  var ProtectedRoute_default = ProtectedRoute;

  // frontend/src/App.jsx
  init_Navbar();
  var Landing2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_Landing_Page(), Landing_Page_exports)));
  var LoginSignupPage2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_Login(), Login_exports)));
  var UserTypeSelectionPage2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_UserTypeSelection(), UserTypeSelection_exports)));
  var UserDashboard2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_UserDashboard(), UserDashboard_exports)));
  var MessDashboard2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_MessDashboard(), MessDashboard_exports)));
  var Trial2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_Trial(), Trial_exports)));
  var AddMessPage2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_AddNewMess(), AddNewMess_exports)));
  var CreateFirstMessPage2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_CreateFirstMess(), CreateFirstMess_exports)));
  var RegisteredMembers2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_RegisteredMembers(), RegisteredMembers_exports)));
  var Attendance2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_AttendencePage(), AttendencePage_exports)));
  var UserAttendance2 = (0, import_react38.lazy)(() => Promise.resolve().then(() => (init_UserAttendance(), UserAttendance_exports)));
  function App() {
    return /* @__PURE__ */ React.createElement(import_react38.Suspense, { fallback: /* @__PURE__ */ React.createElement("div", null, "Loading...") }, /* @__PURE__ */ React.createElement(import_react_router_dom14.Routes, null, /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/", element: /* @__PURE__ */ React.createElement(Landing2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/login", element: /* @__PURE__ */ React.createElement(LoginSignupPage2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/signup", element: /* @__PURE__ */ React.createElement(UserTypeSelectionPage2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/login-signup/:userType", element: /* @__PURE__ */ React.createElement(LoginSignupPage2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { element: /* @__PURE__ */ React.createElement(ProtectedRoute_default, { type: "user" }) }, /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/user-dashboard", element: /* @__PURE__ */ React.createElement(UserDashboard2, null) })), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { element: /* @__PURE__ */ React.createElement(ProtectedRoute_default, { type: "messOwner" }) }, /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/mess-dashboard", element: /* @__PURE__ */ React.createElement(MessDashboard2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/mess-dashboard/:messId", element: /* @__PURE__ */ React.createElement(MessDashboard2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/mess-dashboard/create-first-mess", element: /* @__PURE__ */ React.createElement(CreateFirstMessPage2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "mess-dashboard/add-mess", element: /* @__PURE__ */ React.createElement(AddMessPage2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "mess-dashboard/:messId/registered-members", element: /* @__PURE__ */ React.createElement(RegisteredMembers2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "mess-dashboard/:messId/attendance", element: /* @__PURE__ */ React.createElement(Attendance2, null) }), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "mess-dashboard/:messId/user-attendance/:userId", element: /* @__PURE__ */ React.createElement(UserAttendance2, null) })), /* @__PURE__ */ React.createElement(import_react_router_dom14.Route, { path: "/trial", element: /* @__PURE__ */ React.createElement(Trial2, null) })));
  }
  var App_default = App;
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/app-window.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/book-open.js:
lucide-react/dist/esm/icons/calendar.js:
lucide-react/dist/esm/icons/chart-column.js:
lucide-react/dist/esm/icons/circle-plus.js:
lucide-react/dist/esm/icons/clipboard-list.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/eye-off.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/hourglass.js:
lucide-react/dist/esm/icons/house.js:
lucide-react/dist/esm/icons/indian-rupee.js:
lucide-react/dist/esm/icons/lock.js:
lucide-react/dist/esm/icons/log-out.js:
lucide-react/dist/esm/icons/mail.js:
lucide-react/dist/esm/icons/map-pin.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/phone.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/settings.js:
lucide-react/dist/esm/icons/shield.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/store.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/user.js:
lucide-react/dist/esm/icons/users.js:
lucide-react/dist/esm/icons/utensils.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.485.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

leaflet/dist/leaflet-src.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)
*/
