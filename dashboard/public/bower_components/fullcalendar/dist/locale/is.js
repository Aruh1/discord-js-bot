!(function (e, r) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = r(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
        ? define(["moment", "fullcalendar"], r)
        : "object" == typeof exports
        ? r(require("moment"), require("fullcalendar"))
        : r(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, r) {
    return (function (e) {
        function r(t) {
            if (n[t]) return n[t].exports;
            var a = (n[t] = { i: t, l: !1, exports: {} });
            return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
        }
        var n = {};
        return (
            (r.m = e),
            (r.c = n),
            (r.d = function (e, n, t) {
                r.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: t });
            }),
            (r.n = function (e) {
                var n =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return r.d(n, "a", n), n;
            }),
            (r.o = function (e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }),
            (r.p = ""),
            r((r.s = 149))
        );
    })({
        0: function (r, n) {
            r.exports = e;
        },
        1: function (e, n) {
            e.exports = r;
        },
        149: function (e, r, n) {
            Object.defineProperty(r, "__esModule", { value: !0 }), n(150);
            var t = n(1);
            t.datepickerLocale("is", "is", {
                closeText: "Loka",
                prevText: "&#x3C; Fyrri",
                nextText: "Næsti &#x3E;",
                currentText: "Í dag",
                monthNames: [
                    "Janúar",
                    "Febrúar",
                    "Mars",
                    "Apríl",
                    "Maí",
                    "Júní",
                    "Júlí",
                    "Ágúst",
                    "September",
                    "Október",
                    "Nóvember",
                    "Desember"
                ],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
                dayNames: [
                    "Sunnudagur",
                    "Mánudagur",
                    "Þriðjudagur",
                    "Miðvikudagur",
                    "Fimmtudagur",
                    "Föstudagur",
                    "Laugardagur"
                ],
                dayNamesShort: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
                dayNamesMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
                weekHeader: "Vika",
                dateFormat: "dd.mm.yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                t.locale("is", {
                    buttonText: { month: "Mánuður", week: "Vika", day: "Dagur", list: "Dagskrá" },
                    allDayHtml: "Allan<br/>daginn",
                    eventLimitText: "meira",
                    noEventsMessage: "Engir viðburðir til að sýna"
                });
        },
        150: function (e, r, n) {
            !(function (e, r) {
                r(n(0));
            })(0, function (e) {
                function r(e) {
                    return e % 100 == 11 || e % 10 != 1;
                }
                function n(e, n, t, a) {
                    var u = e + " ";
                    switch (t) {
                        case "s":
                            return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                        case "ss":
                            return r(e) ? u + (n || a ? "sekúndur" : "sekúndum") : u + "sekúnda";
                        case "m":
                            return n ? "mínúta" : "mínútu";
                        case "mm":
                            return r(e) ? u + (n || a ? "mínútur" : "mínútum") : n ? u + "mínúta" : u + "mínútu";
                        case "hh":
                            return r(e) ? u + (n || a ? "klukkustundir" : "klukkustundum") : u + "klukkustund";
                        case "d":
                            return n ? "dagur" : a ? "dag" : "degi";
                        case "dd":
                            return r(e)
                                ? n
                                    ? u + "dagar"
                                    : u + (a ? "daga" : "dögum")
                                : n
                                ? u + "dagur"
                                : u + (a ? "dag" : "degi");
                        case "M":
                            return n ? "mánuður" : a ? "mánuð" : "mánuði";
                        case "MM":
                            return r(e)
                                ? n
                                    ? u + "mánuðir"
                                    : u + (a ? "mánuði" : "mánuðum")
                                : n
                                ? u + "mánuður"
                                : u + (a ? "mánuð" : "mánuði");
                        case "y":
                            return n || a ? "ár" : "ári";
                        case "yy":
                            return r(e) ? u + (n || a ? "ár" : "árum") : u + (n || a ? "ár" : "ári");
                    }
                }
                return e.defineLocale("is", {
                    months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
                        "_"
                    ),
                    monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                    weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
                        "_"
                    ),
                    weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                    weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                    },
                    calendar: {
                        sameDay: "[í dag kl.] LT",
                        nextDay: "[á morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[í gær kl.] LT",
                        lastWeek: "[síðasta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s síðan",
                        s: n,
                        ss: n,
                        m: n,
                        mm: n,
                        h: "klukkustund",
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                });
            });
        }
    });
});
