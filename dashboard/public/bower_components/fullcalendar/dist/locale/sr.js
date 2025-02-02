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
        function t(r) {
            if (a[r]) return a[r].exports;
            var n = (a[r] = { i: r, l: !1, exports: {} });
            return e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
        }
        var a = {};
        return (
            (t.m = e),
            (t.c = a),
            (t.d = function (e, a, r) {
                t.o(e, a) || Object.defineProperty(e, a, { configurable: !1, enumerable: !0, get: r });
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
            t((t.s = 199))
        );
    })({
        0: function (t, a) {
            t.exports = e;
        },
        1: function (e, a) {
            e.exports = t;
        },
        199: function (e, t, a) {
            Object.defineProperty(t, "__esModule", { value: !0 }), a(200);
            var r = a(1);
            r.datepickerLocale("sr", "sr-SR", {
                closeText: "Zatvori",
                prevText: "&#x3C;",
                nextText: "&#x3E;",
                currentText: "Danas",
                monthNames: [
                    "Januar",
                    "Februar",
                    "Mart",
                    "April",
                    "Maj",
                    "Jun",
                    "Jul",
                    "Avgust",
                    "Septembar",
                    "Oktobar",
                    "Novembar",
                    "Decembar"
                ],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
                dayNames: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
                dayNamesShort: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
                dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
                weekHeader: "Sed",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                r.locale("sr", {
                    buttonText: {
                        prev: "Prethodna",
                        next: "Sledeći",
                        month: "Mеsеc",
                        week: "Nеdеlja",
                        day: "Dan",
                        list: "Planеr"
                    },
                    allDayText: "Cеo dan",
                    eventLimitText: function (e) {
                        return "+ još " + e;
                    },
                    noEventsMessage: "Nеma događaja za prikaz"
                });
        },
        200: function (e, t, a) {
            !(function (e, t) {
                t(a(0));
            })(0, function (e) {
                var t = {
                    words: {
                        ss: ["sekunda", "sekunde", "sekundi"],
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function (e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
                    },
                    translate: function (e, a, r) {
                        var n = t.words[r];
                        return 1 === r.length ? (a ? n[0] : n[1]) : e + " " + t.correctGrammaticalCase(e, n);
                    }
                };
                return e.defineLocale("sr", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                        "_"
                    ),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function () {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT";
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function () {
                            return [
                                "[prošle] [nedelje] [u] LT",
                                "[prošlog] [ponedeljka] [u] LT",
                                "[prošlog] [utorka] [u] LT",
                                "[prošle] [srede] [u] LT",
                                "[prošlog] [četvrtka] [u] LT",
                                "[prošlog] [petka] [u] LT",
                                "[prošle] [subote] [u] LT"
                            ][this.day()];
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 7 }
                });
            });
        }
    });
});
