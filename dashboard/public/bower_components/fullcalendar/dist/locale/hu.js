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
            if (r[n]) return r[n].exports;
            var a = (r[n] = { i: n, l: !1, exports: {} });
            return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
        }
        var r = {};
        return (
            (t.m = e),
            (t.c = r),
            (t.d = function (e, r, n) {
                t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
            }),
            (t.n = function (e) {
                var r =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(r, "a", r), r;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 145))
        );
    })({
        0: function (t, r) {
            t.exports = e;
        },
        1: function (e, r) {
            e.exports = t;
        },
        145: function (e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 }), r(146);
            var n = r(1);
            n.datepickerLocale("hu", "hu", {
                closeText: "bezár",
                prevText: "vissza",
                nextText: "előre",
                currentText: "ma",
                monthNames: [
                    "Január",
                    "Február",
                    "Március",
                    "Április",
                    "Május",
                    "Június",
                    "Július",
                    "Augusztus",
                    "Szeptember",
                    "Október",
                    "November",
                    "December"
                ],
                monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
                dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
                dayNamesShort: ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"],
                dayNamesMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
                weekHeader: "Hét",
                dateFormat: "yy.mm.dd.",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !0,
                yearSuffix: ""
            }),
                n.locale("hu", {
                    buttonText: { month: "Hónap", week: "Hét", day: "Nap", list: "Napló" },
                    allDayText: "Egész nap",
                    eventLimitText: "további",
                    noEventsMessage: "Nincs megjeleníthető esemény"
                });
        },
        146: function (e, t, r) {
            !(function (e, t) {
                t(r(0));
            })(0, function (e) {
                function t(e, t, r, n) {
                    var a = e;
                    switch (r) {
                        case "s":
                            return n || t ? "néhány másodperc" : "néhány másodperce";
                        case "ss":
                            return a + (n || t) ? " másodperc" : " másodperce";
                        case "m":
                            return "egy" + (n || t ? " perc" : " perce");
                        case "mm":
                            return a + (n || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (n || t ? " óra" : " órája");
                        case "hh":
                            return a + (n || t ? " óra" : " órája");
                        case "d":
                            return "egy" + (n || t ? " nap" : " napja");
                        case "dd":
                            return a + (n || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (n || t ? " hónap" : " hónapja");
                        case "MM":
                            return a + (n || t ? " hónap" : " hónapja");
                        case "y":
                            return "egy" + (n || t ? " év" : " éve");
                        case "yy":
                            return a + (n || t ? " év" : " éve");
                    }
                    return "";
                }
                function r(e) {
                    return (e ? "" : "[múlt] ") + "[" + n[this.day()] + "] LT[-kor]";
                }
                var n = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
                return e.defineLocale("hu", {
                    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
                        "_"
                    ),
                    monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function (e) {
                        return "u" === e.charAt(1).toLowerCase();
                    },
                    meridiem: function (e, t, r) {
                        return e < 12 ? (!0 === r ? "de" : "DE") : !0 === r ? "du" : "DU";
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function () {
                            return r.call(this, !0);
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function () {
                            return r.call(this, !1);
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s múlva",
                        past: "%s",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
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
