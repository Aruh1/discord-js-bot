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
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        var n = {};
        return (
            (t.m = e),
            (t.c = n),
            (t.d = function (e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
            }),
            (t.n = function (e) {
                var n =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(n, "a", n), n;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 203))
        );
    })({
        0: function (t, n) {
            t.exports = e;
        },
        1: function (e, n) {
            e.exports = t;
        },
        203: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }), n(204);
            var r = n(1);
            r.datepickerLocale("th", "th", {
                closeText: "ปิด",
                prevText: "&#xAB;&#xA0;ย้อน",
                nextText: "ถัดไป&#xA0;&#xBB;",
                currentText: "วันนี้",
                monthNames: [
                    "มกราคม",
                    "กุมภาพันธ์",
                    "มีนาคม",
                    "เมษายน",
                    "พฤษภาคม",
                    "มิถุนายน",
                    "กรกฎาคม",
                    "สิงหาคม",
                    "กันยายน",
                    "ตุลาคม",
                    "พฤศจิกายน",
                    "ธันวาคม"
                ],
                monthNamesShort: [
                    "ม.ค.",
                    "ก.พ.",
                    "มี.ค.",
                    "เม.ย.",
                    "พ.ค.",
                    "มิ.ย.",
                    "ก.ค.",
                    "ส.ค.",
                    "ก.ย.",
                    "ต.ค.",
                    "พ.ย.",
                    "ธ.ค."
                ],
                dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
                dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                weekHeader: "Wk",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                r.locale("th", {
                    buttonText: { month: "เดือน", week: "สัปดาห์", day: "วัน", list: "แผนงาน" },
                    allDayText: "ตลอดวัน",
                    eventLimitText: "เพิ่มเติม",
                    noEventsMessage: "ไม่มีกิจกรรมที่จะแสดง"
                });
        },
        204: function (e, t, n) {
            !(function (e, t) {
                t(n(0));
            })(0, function (e) {
                return e.defineLocale("th", {
                    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
                        "_"
                    ),
                    monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY เวลา H:mm",
                        LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                    },
                    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                    isPM: function (e) {
                        return "หลังเที่ยง" === e;
                    },
                    meridiem: function (e, t, n) {
                        return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
                    },
                    calendar: {
                        sameDay: "[วันนี้ เวลา] LT",
                        nextDay: "[พรุ่งนี้ เวลา] LT",
                        nextWeek: "dddd[หน้า เวลา] LT",
                        lastDay: "[เมื่อวานนี้ เวลา] LT",
                        lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "อีก %s",
                        past: "%sที่แล้ว",
                        s: "ไม่กี่วินาที",
                        ss: "%d วินาที",
                        m: "1 นาที",
                        mm: "%d นาที",
                        h: "1 ชั่วโมง",
                        hh: "%d ชั่วโมง",
                        d: "1 วัน",
                        dd: "%d วัน",
                        M: "1 เดือน",
                        MM: "%d เดือน",
                        y: "1 ปี",
                        yy: "%d ปี"
                    }
                });
            });
        }
    });
});
