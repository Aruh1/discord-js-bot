!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
        ? define(["moment", "fullcalendar"], t)
        : "object" == typeof exports
        ? t(require("moment"), require("fullcalendar"))
        : t(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, t) {
    return (function (e) {
        function t(n) {
            if (a[n]) return a[n].exports;
            var u = (a[n] = { i: n, l: !1, exports: {} });
            return e[n].call(u.exports, u, u.exports, t), (u.l = !0), u.exports;
        }
        var a = {};
        return (
            (t.m = e),
            (t.c = a),
            (t.d = function (e, a, n) {
                t.o(e, a) || Object.defineProperty(e, a, { configurable: !1, enumerable: !0, get: n });
            }),
            (t.n = function (e) {
                var a =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(a, "a", a), a;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 123))
        );
    })({
        0: function (t, a) {
            t.exports = e;
        },
        1: function (e, a) {
            e.exports = t;
        },
        123: function (e, t, a) {
            Object.defineProperty(t, "__esModule", { value: !0 }), a(124);
            var n = a(1);
            n.datepickerLocale("et", "et", {
                closeText: "Sulge",
                prevText: "Eelnev",
                nextText: "Järgnev",
                currentText: "Täna",
                monthNames: [
                    "Jaanuar",
                    "Veebruar",
                    "Märts",
                    "Aprill",
                    "Mai",
                    "Juuni",
                    "Juuli",
                    "August",
                    "September",
                    "Oktoober",
                    "November",
                    "Detsember"
                ],
                monthNamesShort: [
                    "Jaan",
                    "Veebr",
                    "Märts",
                    "Apr",
                    "Mai",
                    "Juuni",
                    "Juuli",
                    "Aug",
                    "Sept",
                    "Okt",
                    "Nov",
                    "Dets"
                ],
                dayNames: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
                dayNamesShort: ["Pühap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
                dayNamesMin: ["P", "E", "T", "K", "N", "R", "L"],
                weekHeader: "näd",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                n.locale("et", {
                    buttonText: { month: "Kuu", week: "Nädal", day: "Päev", list: "Päevakord" },
                    allDayText: "Kogu päev",
                    eventLimitText: function (e) {
                        return "+ veel " + e;
                    },
                    noEventsMessage: "Kuvamiseks puuduvad sündmused"
                });
        },
        124: function (e, t, a) {
            !(function (e, t) {
                t(a(0));
            })(0, function (e) {
                function t(e, t, a, n) {
                    var u = {
                        s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                        ss: [e + "sekundi", e + "sekundit"],
                        m: ["ühe minuti", "üks minut"],
                        mm: [e + " minuti", e + " minutit"],
                        h: ["ühe tunni", "tund aega", "üks tund"],
                        hh: [e + " tunni", e + " tundi"],
                        d: ["ühe päeva", "üks päev"],
                        M: ["kuu aja", "kuu aega", "üks kuu"],
                        MM: [e + " kuu", e + " kuud"],
                        y: ["ühe aasta", "aasta", "üks aasta"],
                        yy: [e + " aasta", e + " aastat"]
                    };
                    return t ? (u[a][2] ? u[a][2] : u[a][1]) : n ? u[a][0] : u[a][1];
                }
                return e.defineLocale("et", {
                    months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
                        "_"
                    ),
                    monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                    weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[Täna,] LT",
                        nextDay: "[Homme,] LT",
                        nextWeek: "[Järgmine] dddd LT",
                        lastDay: "[Eile,] LT",
                        lastWeek: "[Eelmine] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s pärast",
                        past: "%s tagasi",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: "%d päeva",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                });
            });
        }
    });
});
