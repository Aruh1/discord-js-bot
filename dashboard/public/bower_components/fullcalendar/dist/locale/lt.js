!(function (e, i) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = i(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
        ? define(["moment", "fullcalendar"], i)
        : "object" == typeof exports
        ? i(require("moment"), require("fullcalendar"))
        : i(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, i) {
    return (function (e) {
        function i(a) {
            if (n[a]) return n[a].exports;
            var t = (n[a] = { i: a, l: !1, exports: {} });
            return e[a].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
        }
        var n = {};
        return (
            (i.m = e),
            (i.c = n),
            (i.d = function (e, n, a) {
                i.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: a });
            }),
            (i.n = function (e) {
                var n =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return i.d(n, "a", n), n;
            }),
            (i.o = function (e, i) {
                return Object.prototype.hasOwnProperty.call(e, i);
            }),
            (i.p = ""),
            i((i.s = 163))
        );
    })({
        0: function (i, n) {
            i.exports = e;
        },
        1: function (e, n) {
            e.exports = i;
        },
        163: function (e, i, n) {
            Object.defineProperty(i, "__esModule", { value: !0 }), n(164);
            var a = n(1);
            a.datepickerLocale("lt", "lt", {
                closeText: "Uždaryti",
                prevText: "&#x3C;Atgal",
                nextText: "Pirmyn&#x3E;",
                currentText: "Šiandien",
                monthNames: [
                    "Sausis",
                    "Vasaris",
                    "Kovas",
                    "Balandis",
                    "Gegužė",
                    "Birželis",
                    "Liepa",
                    "Rugpjūtis",
                    "Rugsėjis",
                    "Spalis",
                    "Lapkritis",
                    "Gruodis"
                ],
                monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
                dayNames: [
                    "sekmadienis",
                    "pirmadienis",
                    "antradienis",
                    "trečiadienis",
                    "ketvirtadienis",
                    "penktadienis",
                    "šeštadienis"
                ],
                dayNamesShort: ["sek", "pir", "ant", "tre", "ket", "pen", "šeš"],
                dayNamesMin: ["Se", "Pr", "An", "Tr", "Ke", "Pe", "Še"],
                weekHeader: "SAV",
                dateFormat: "yy-mm-dd",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !0,
                yearSuffix: ""
            }),
                a.locale("lt", {
                    buttonText: { month: "Mėnuo", week: "Savaitė", day: "Diena", list: "Darbotvarkė" },
                    allDayText: "Visą dieną",
                    eventLimitText: "daugiau",
                    noEventsMessage: "Nėra įvykių rodyti"
                });
        },
        164: function (e, i, n) {
            !(function (e, i) {
                i(n(0));
            })(0, function (e) {
                function i(e, i, n, a) {
                    return i ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes";
                }
                function n(e, i, n, a) {
                    return i ? t(n)[0] : a ? t(n)[1] : t(n)[2];
                }
                function a(e) {
                    return e % 10 == 0 || (e > 10 && e < 20);
                }
                function t(e) {
                    return r[e].split("_");
                }
                function s(e, i, s, r) {
                    var d = e + " ";
                    return 1 === e
                        ? d + n(e, i, s[0], r)
                        : i
                        ? d + (a(e) ? t(s)[1] : t(s)[0])
                        : r
                        ? d + t(s)[1]
                        : d + (a(e) ? t(s)[1] : t(s)[2]);
                }
                var r = {
                    ss: "sekundė_sekundžių_sekundes",
                    m: "minutė_minutės_minutę",
                    mm: "minutės_minučių_minutes",
                    h: "valanda_valandos_valandą",
                    hh: "valandos_valandų_valandas",
                    d: "diena_dienos_dieną",
                    dd: "dienos_dienų_dienas",
                    M: "mėnuo_mėnesio_mėnesį",
                    MM: "mėnesiai_mėnesių_mėnesius",
                    y: "metai_metų_metus",
                    yy: "metai_metų_metus"
                };
                return e.defineLocale("lt", {
                    months: {
                        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
                            "_"
                        ),
                        standalone:
                            "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
                                "_"
                            ),
                        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                    },
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: {
                        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
                            "_"
                        ),
                        standalone:
                            "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
                                "_"
                            ),
                        isFormat: /dddd HH:mm/
                    },
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                    },
                    calendar: {
                        sameDay: "[Šiandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Praėjusį] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieš %s",
                        s: i,
                        ss: s,
                        m: n,
                        mm: s,
                        h: n,
                        hh: s,
                        d: n,
                        dd: s,
                        M: n,
                        MM: s,
                        y: n,
                        yy: s
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                    ordinal: function (e) {
                        return e + "-oji";
                    },
                    week: { dow: 1, doy: 4 }
                });
            });
        }
    });
});
