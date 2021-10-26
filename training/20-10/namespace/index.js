"use strict";
var edu;
(function (edu) {
    var ankush;
    (function (ankush) {
        var training;
        (function (training) {
            var lanugage;
            (function (lanugage) {
                var LangCode;
                (function (LangCode) {
                    LangCode["ENGLISH-US"] = "en-us";
                    LangCode["ENGLISH-UK"] = "en-uk";
                    LangCode["ENGLISH-INDIA"] = "en-in";
                })(LangCode = lanugage.LangCode || (lanugage.LangCode = {}));
                ;
                var Language = /** @class */ (function () {
                    function Language(langCode) {
                        this.lang = langCode;
                    }
                    Language.prototype.getText = function (textId, langCode) {
                        var lang = langCode !== null && langCode !== void 0 ? langCode : this.lang;
                        var langObj = langString[lang];
                        return langObj[textId];
                    };
                    return Language;
                }());
                lanugage.Language = Language;
                var langString = {
                    'en-us': {
                        'bank-note': 'Check',
                        'colour': 'Color'
                    },
                    'en-uk': {
                        'bank-note': 'Cheque',
                        'colour': 'Colour'
                    },
                    'en-in': {
                        'bank-note': 'Cheque',
                        'colour': 'Colour and Color and Raang'
                    },
                };
            })(lanugage = training.lanugage || (training.lanugage = {}));
        })(training = ankush.training || (ankush.training = {}));
    })(ankush = edu.ankush || (edu.ankush = {}));
})(edu || (edu = {}));
var edu;
(function (edu) {
    var ankush;
    (function (ankush) {
        var training;
        (function (training) {
            var utils;
            (function (utils) {
                function randomNum(max) {
                    return Math.floor(Math.random() * max);
                }
                utils.randomNum = randomNum;
            })(utils = training.utils || (training.utils = {}));
        })(training = ankush.training || (ankush.training = {}));
    })(ankush = edu.ankush || (edu.ankush = {}));
})(edu || (edu = {}));
///<reference path='language.ts'/>
///<reference path='utils.ts'/>
var utils = edu.ankush.training.utils;
var langUtil = edu.ankush.training.lanugage;
var lang = new langUtil.Language(langUtil.LangCode["ENGLISH-INDIA"]);
var result = document.querySelector("#result");
var btn = document.querySelector("#roll");
result.innerHTML += "India :: Cheque is Called " + lang.getText('bank-note') + "<br>";
result.innerHTML += "India :: Colour is Called " + lang.getText('colour') + "<br>";
result.innerHTML += "US :: Cheque is Called " + lang.getText('bank-note', langUtil.LangCode["ENGLISH-US"]) + "<br>";
result.innerHTML += "US :: Colour is Called " + lang.getText('colour', langUtil.LangCode["ENGLISH-US"]) + "<br>";
btn.onclick = function () {
    var num = utils.randomNum(6) + 1;
    result.innerHTML += "</br>" +
        (num === 6 ? "Dice rolled, Got 6. Go Ahead." : "Dice rolled and stoped at " + num);
};
