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
            t((t.s = 197))
        );
    })({
        0: function (t, r) {
            t.exports = e;
        },
        1: function (e, r) {
            e.exports = t;
        },
        197: function (e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 }), r(198);
            var n = r(1);
            n.datepickerLocale("sr-cyrl", "sr", {
                closeText: "Затвори",
                prevText: "&#x3C;",
                nextText: "&#x3E;",
                currentText: "Данас",
                monthNames: [
                    "Јануар",
                    "Фебруар",
                    "Март",
                    "Април",
                    "Мај",
                    "Јун",
                    "Јул",
                    "Август",
                    "Септембар",
                    "Октобар",
                    "Новембар",
                    "Децембар"
                ],
                monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
                dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
                dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
                dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
                weekHeader: "Сед",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                n.locale("sr-cyrl", {
                    buttonText: {
                        prev: "Претходна",
                        next: "следећи",
                        month: "Месец",
                        week: "Недеља",
                        day: "Дан",
                        list: "Планер"
                    },
                    allDayText: "Цео дан",
                    eventLimitText: function (e) {
                        return "+ још " + e;
                    },
                    noEventsMessage: "Нема догађаја за приказ"
                });
        },
        198: function (e, t, r) {
            !(function (e, t) {
                t(r(0));
            })(0, function (e) {
                var t = {
                    words: {
                        ss: ["секунда", "секунде", "секунди"],
                        m: ["један минут", "једне минуте"],
                        mm: ["минут", "минуте", "минута"],
                        h: ["један сат", "једног сата"],
                        hh: ["сат", "сата", "сати"],
                        dd: ["дан", "дана", "дана"],
                        MM: ["месец", "месеца", "месеци"],
                        yy: ["година", "године", "година"]
                    },
                    correctGrammaticalCase: function (e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
                    },
                    translate: function (e, r, n) {
                        var a = t.words[n];
                        return 1 === n.length ? (r ? a[0] : a[1]) : e + " " + t.correctGrammaticalCase(e, a);
                    }
                };
                return e.defineLocale("sr-cyrl", {
                    months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
                        "_"
                    ),
                    monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                    weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                    weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
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
                        sameDay: "[данас у] LT",
                        nextDay: "[сутра у] LT",
                        nextWeek: function () {
                            switch (this.day()) {
                                case 0:
                                    return "[у] [недељу] [у] LT";
                                case 3:
                                    return "[у] [среду] [у] LT";
                                case 6:
                                    return "[у] [суботу] [у] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[у] dddd [у] LT";
                            }
                        },
                        lastDay: "[јуче у] LT",
                        lastWeek: function () {
                            return [
                                "[прошле] [недеље] [у] LT",
                                "[прошлог] [понедељка] [у] LT",
                                "[прошлог] [уторка] [у] LT",
                                "[прошле] [среде] [у] LT",
                                "[прошлог] [четвртка] [у] LT",
                                "[прошлог] [петка] [у] LT",
                                "[прошле] [суботе] [у] LT"
                            ][this.day()];
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "пре %s",
                        s: "неколико секунди",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "дан",
                        dd: t.translate,
                        M: "месец",
                        MM: t.translate,
                        y: "годину",
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
