webpackJsonp([0,3],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConverterService = (function () {
    function ConverterService() {
    }
    ConverterService.prototype.getTestResult = function (answers, _keys) {
        var result = [];
        console.info(JSON.stringify(answers));
        for (var i = 0; i < answers.length && i < _keys.length; i++) {
            var answer = answers[i]['ans'];
            var keys = _keys[i]['keys'];
            result[i] = false;
            for (var j = 0; j < keys.length; j++) {
                if (answer != undefined) {
                    answer = answer.trim();
                    answer = answer.toLowerCase();
                    while (answer.indexOf('  ') >= 0) {
                        answer = answer.replace('  ', ' ');
                    }
                }
                if (answer == keys[j]) {
                    result[i] = true;
                    break;
                }
            }
        }
        var count = 0;
        for (var i = 0; i < 40; i++) {
            if (result[i])
                count++;
        }
        return { result: result, noOfCorrect: count, score: this.getReadingScore(count) };
    };
    ConverterService.prototype.getReadingScore = function (n) {
        if (n >= 39)
            return 9;
        if (n >= 37)
            return 8.5;
        if (n >= 35)
            return 8;
        if (n >= 33)
            return 7.5;
        if (n >= 30)
            return 7;
        if (n >= 27)
            return 6.5;
        if (n >= 23)
            return 6;
        if (n >= 19)
            return 5.5;
        if (n >= 15)
            return 5;
        if (n >= 13)
            return 4.5;
        if (n >= 10)
            return 4;
        if (n >= 8)
            return 3.5;
        if (n >= 6)
            return 3;
        return 0;
    };
    ConverterService.prototype.numberToLetter = function (value) {
        switch (value) {
            case 1: return 'a';
            case 2: return 'b';
            case 3: return 'c';
            case 4: return 'd';
            case 5: return 'e';
            case 6: return 'f';
            case 7: return 'g';
            case 8: return 'h';
            case 9: return 'i';
            case 10: return 'j';
        }
        return null;
    };
    ConverterService.prototype.numberToRoman = function (value) {
        switch (value) {
            case 1: return 'i';
            case 2: return 'ii';
            case 3: return 'iii';
            case 4: return 'iv';
            case 5: return 'v';
            case 6: return 'vi';
            case 7: return 'vii';
            case 8: return 'viii';
            case 9: return 'xi';
            case 10: return 'x';
            case 11: return 'xi';
            case 12: return 'xii';
        }
        return null;
    };
    ConverterService.prototype.paragraphToArray = function (_paragraphs, _first) {
        var result = [];
        for (var i = 0; i < _paragraphs.length; i++) {
            var paragraph = _paragraphs[i];
            result[i] = [];
            while (paragraph.includes('[]')) {
                paragraph = paragraph.replace('[]', '*{}*');
            }
            var splitedPara = paragraph.split('*');
            for (var j = 0; j < splitedPara.length; j++) {
                if (splitedPara[j] == '{}') {
                    result[i].push({ isInput: true, data: _first });
                    _first++;
                }
                else {
                    result[i].push({ isInput: false, data: splitedPara[j] });
                }
            }
        }
        return result;
    };
    ConverterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ConverterService);
    return ConverterService;
}());
var DisplaySpan = (function () {
    function DisplaySpan() {
    }
    return DisplaySpan;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/converter.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetDataService = (function () {
    function GetDataService(http) {
        this.http = http;
    }
    GetDataService.prototype.findOne = function (testId, skill) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/skill/find-one/' + skill + '/' + testId).subscribe(function (value) { return resolve(value.json()); }, function (error) { return reject(error); });
        });
    };
    GetDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GetDataService);
    return GetDataService;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/get-data.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__(97);
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = (function () {
    function User() {
    }
    return User;
}());
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.saveUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/user/save', data).subscribe(function (value) { return resolve(value); }, function (error) { return reject(error); });
        });
    };
    UserService.prototype.findOne = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/user/find-one/' + userId).subscribe(function (value) { return resolve(value.json()); }, function (error) { return reject(error); });
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/user.service.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".left-block {\r\n  float: left;\r\n}\r\n\r\n.right-block {\r\n  float: right;\r\n}\r\n\r\n.left-block, .right-block {\r\n  height: 600px;\r\n  width: 49%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.left-block::-webkit-scrollbar, .right-block::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n \r\n.left-block::-webkit-scrollbar-thumb, .right-block::-webkit-scrollbar-thumb {\r\n  background-color: rgba(128, 222, 234, 0.5);\r\n  outline: 1px solid slategrey;\r\n}\r\n\r\n.left-card {\r\n  margin: 3px;\r\n  margin-bottom: 20px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.question-block {\r\n  /*box-sizing: border-box;*/\r\n  border: 1px solid #EEEEEE;\r\n  /*padding: 5px;*/\r\n  /*display: inline-block;*/\r\n  display: block;\r\n  border-width: 0 0 2px 0;\r\n\r\n}\r\n\r\n.question-block > p {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 1px;\r\n  margin: 0px;\r\n  padding: 5px;\r\n  font-size: larger;\r\n  border: 2px solid #1E88E5;\r\n  border-width: 0 0 1px 0;\r\n}\r\n\r\n.action-block {\r\n  text-align: end;\r\n}\r\n\r\n.timer {\r\n  z-index: 2;\r\n  position: fixed;\r\n  bottom: 25px;\r\n  right: 25px;\r\n  cursor: default;\r\n}\r\n\r\n.timer:hover {\r\n  opacity: 0.5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = (function () {
    function TestService(http) {
        this.http = http;
    }
    TestService.prototype.find = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/test/find').subscribe(function (response) {
                resolve(response.json());
            });
        });
    };
    TestService.prototype.findOne = function (testId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/test/find-one/' + testId).subscribe(function (value) { return resolve(value.json()); }, function (error) { return reject(error); });
        });
    };
    TestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TestService);
    return TestService;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/test.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_types_answer_answer_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_types_feature_feature_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_types_multiple_multiple_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_types_note_note_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_types_sentence_sentence_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_types_single_single_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_types_table_table_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reading_types_ending_ending_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reading_types_heading_heading_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reading_types_information_information_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reading_types_summary_select_summary_select_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reading_types_true_false_true_false_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialogs_submit_dialog__ = __webpack_require__(472);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var CommonComponent = (function () {
    function CommonComponent(dialog, snackBar, getDataService, route) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.getDataService = getDataService;
        this.route = route;
        this.keys = [];
        this.isSubmited = false;
        this.timeLeft = 3600;
    }
    CommonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testId = this.route.snapshot.params['testId'];
        this.getDataService.findOne(this.testId, this.skill).then(function (value) {
            _this.sections = value['sections'];
            _this.keys = value['keys'];
            if (_this.keys.length != 40)
                console.error('keys.length <> 40');
        }, function (reason) { return console.error(reason); });
        this.setTimer();
    };
    CommonComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    CommonComponent.prototype.setTimer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.timeLeft--;
            if (_this.timeLeft == 1800) {
                _this.snackBar.open('30 minutes left!', 'OK', { duration: 2000 });
            }
            else if (_this.timeLeft == 600) {
                _this.snackBar.open('10 minutes left!', 'OK', { duration: 2000 });
            }
            else if (_this.timeLeft <= 0) {
                clearInterval(_this.timer);
                _this.dialog.closeAll();
                _this.viewSheet(true);
            }
        }, 1000);
    };
    CommonComponent.prototype.getAllAnswers = function () {
        var arr = [];
        arr = arr.concat(this.answerComponents.toArray());
        arr = arr.concat(this.featureComponents.toArray());
        arr = arr.concat(this.multipleComponent.toArray());
        arr = arr.concat(this.noteComponent.toArray());
        arr = arr.concat(this.singleComponent.toArray());
        arr = arr.concat(this.tableComponent.toArray());
        arr = arr.concat(this.trueFalseComponents.toArray());
        arr = arr.concat(this.headingComponents.toArray());
        arr = arr.concat(this.summarySelectComponents.toArray());
        arr = arr.concat(this.endingComponents.toArray());
        arr = arr.concat(this.informationComponents.toArray());
        arr = arr.concat(this.sentenceComponents.toArray());
        // Lay du lieu
        var all = [];
        for (var i = 0; i < arr.length; i++) {
            var answers = arr[i].getAnswers();
            for (var t = 0; t <= arr[i].data.last - arr[i].data.first; t++) {
                all.push({
                    no: arr[i].data.first + t,
                    ans: answers[t]
                });
            }
        }
        // Sap xep lai
        all.sort(this.compare);
        if (all.length != 40) {
            console.error('Number of questions is not 40!');
        }
        return all;
    };
    CommonComponent.prototype.viewSheet = function (isBecauseOfTimingOut) {
        var _this = this;
        var _data = {
            answers: this.getAllAnswers(),
            keys: this.keys,
            isSubmited: this.isSubmited,
            isBecauseOfTimingOut: isBecauseOfTimingOut,
            skill: this.skill,
            testId: this.testId
        };
        // Mo dialog
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_16__dialogs_submit_dialog__["a" /* SubmitDialog */], {
            width: '600px',
            data: {
                data: _data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isSubmited = result;
        });
    };
    CommonComponent.prototype.compare = function (a, b) {
        if (a['no'] < b['no'])
            return -1;
        if (a['no'] > b['no'])
            return 1;
        return 0;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_4__common_types_answer_answer_component__["a" /* AnswerComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _a) || Object)
    ], CommonComponent.prototype, "answerComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5__common_types_feature_feature_component__["a" /* FeatureComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _b) || Object)
    ], CommonComponent.prototype, "featureComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_6__common_types_multiple_multiple_component__["a" /* MultipleComponent */]), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _c) || Object)
    ], CommonComponent.prototype, "multipleComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_7__common_types_note_note_component__["a" /* NoteComponent */]), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _d) || Object)
    ], CommonComponent.prototype, "noteComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_8__common_types_sentence_sentence_component__["a" /* SentenceComponent */]), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _e) || Object)
    ], CommonComponent.prototype, "sentenceComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_9__common_types_single_single_component__["a" /* SingleComponent */]), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _f) || Object)
    ], CommonComponent.prototype, "singleComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_10__common_types_table_table_component__["a" /* TableComponent */]), 
        __metadata('design:type', (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _g) || Object)
    ], CommonComponent.prototype, "tableComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_15__reading_types_true_false_true_false_component__["a" /* TrueFalseComponent */]), 
        __metadata('design:type', (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _h) || Object)
    ], CommonComponent.prototype, "trueFalseComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_12__reading_types_heading_heading_component__["a" /* HeadingComponent */]), 
        __metadata('design:type', (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _j) || Object)
    ], CommonComponent.prototype, "headingComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_14__reading_types_summary_select_summary_select_component__["a" /* SummarySelectComponent */]), 
        __metadata('design:type', (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _k) || Object)
    ], CommonComponent.prototype, "summarySelectComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_11__reading_types_ending_ending_component__["a" /* EndingComponent */]), 
        __metadata('design:type', (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _l) || Object)
    ], CommonComponent.prototype, "endingComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_13__reading_types_information_information_component__["a" /* InformationComponent */]), 
        __metadata('design:type', (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _m) || Object)
    ], CommonComponent.prototype, "informationComponents", void 0);
    CommonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-common',
            template: __webpack_require__(900),
            styles: [__webpack_require__(133)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _o) || Object, (typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _p) || Object, (typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]) === 'function' && _q) || Object, (typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _r) || Object])
    ], CommonComponent);
    return CommonComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/common.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Data = (function () {
    function Data() {
    }
    return Data;
}());
var Type = (function () {
    function Type() {
        this.answers = [];
        this.isError = false;
    }
    Type.prototype.ngOnInit = function () { };
    Type.prototype.getFirst = function () {
        console.log('a');
        return this.data['first'];
    };
    Type.prototype.getLast = function () {
        return this.data['last'];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], Type.prototype, "data", void 0);
    return Type;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/i-type.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_account_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(acc) {
        this.acc = acc;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acc.init();
        this.acc.checkStatus().then(function (value) { return _this.user = value; }, function (reason) { return console.error(reason); });
    };
    AppComponent.prototype.fbLogin = function () {
        var _this = this;
        this.acc.login().then(function (value) { return _this.user = value; }, function (reason) { return console.error(reason); });
    };
    AppComponent.prototype.fbLogout = function () {
        var _this = this;
        this.acc.logout().then(function (value) {
            _this.user = undefined;
        }, function (reason) { return console.error(reason); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(880),
            styles: [__webpack_require__(851)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_account_service__["a" /* AccountService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerComponent = (function (_super) {
    __extends(AnswerComponent, _super);
    function AnswerComponent() {
        _super.apply(this, arguments);
    }
    AnswerComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    AnswerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(881),
            styles: [__webpack_require__(852)]
        }), 
        __metadata('design:paramtypes', [])
    ], AnswerComponent);
    return AnswerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/answer.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureComponent = (function (_super) {
    __extends(FeatureComponent, _super);
    function FeatureComponent() {
        _super.apply(this, arguments);
        this.mark = 'letter';
    }
    FeatureComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    FeatureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__(882),
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [])
    ], FeatureComponent);
    return FeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_1__i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/feature.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultipleComponent = (function (_super) {
    __extends(MultipleComponent, _super);
    function MultipleComponent(snackBar, converterSv) {
        _super.call(this);
        this.snackBar = snackBar;
        this.converterSv = converterSv;
        this._answers = [];
    }
    MultipleComponent.prototype.checkLimit = function (p) {
        var count = 0;
        for (var i = 0; i < this._answers.length; i++) {
            if (this._answers[i])
                count++;
        }
    };
    MultipleComponent.prototype.getAnswers = function () {
        this.answers = [];
        for (var i = 0; i < this._answers.length; i++) {
            if (this._answers[i]) {
                this.answers.push(this.converterSv.numberToLetter(i + 1));
            }
        }
        return this.answers;
    };
    MultipleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multiple',
            template: __webpack_require__(883),
            styles: [__webpack_require__(854)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _b) || Object])
    ], MultipleComponent);
    return MultipleComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_3__i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/multiple.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplaySpan = (function () {
    function DisplaySpan() {
    }
    return DisplaySpan;
}());
var NoteComponent = (function (_super) {
    __extends(NoteComponent, _super);
    function NoteComponent(converterSv) {
        _super.call(this);
        this.converterSv = converterSv;
        this.displayParas = [];
        this._answers = [];
    }
    NoteComponent.prototype.ngOnInit = function () {
        var paras = this.data['paras'];
        this.displayParas = this.converterSv.paragraphToArray(paras, this.data['first']);
        for (var i = 0; i < paras.length; i++) {
            this._answers[i] = [];
        }
    };
    NoteComponent.prototype.getAnswers = function () {
        this.answers = [];
        for (var i = 0; i < this.displayParas.length; i++) {
            for (var j = 0; j < this.displayParas[i].length; j++) {
                if (this.displayParas[i][j].isInput) {
                    this.answers.push(this._answers[i][j]);
                }
            }
        }
        return this.answers;
    };
    NoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(884),
            styles: [__webpack_require__(855)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], NoteComponent);
    return NoteComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/note.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentenceComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SentenceComponent = (function (_super) {
    __extends(SentenceComponent, _super);
    function SentenceComponent() {
        _super.apply(this, arguments);
        this.displaySens = [];
    }
    SentenceComponent.prototype.ngOnInit = function () {
        var sens = this.data['sentences'];
        for (var i = 0; i < sens.length; i++) {
            var sen = sens[i];
            while (sen.includes('[]')) {
                sen = sen.replace('[]', '*{}*');
            }
            this.displaySens[i] = sen.split('*');
        }
    };
    SentenceComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    SentenceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sentence',
            template: __webpack_require__(885),
            styles: [__webpack_require__(856)]
        }), 
        __metadata('design:paramtypes', [])
    ], SentenceComponent);
    return SentenceComponent;
}(__WEBPACK_IMPORTED_MODULE_1__i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/sentence.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleComponent = (function (_super) {
    __extends(SingleComponent, _super);
    function SingleComponent() {
        _super.apply(this, arguments);
    }
    SingleComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    SingleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(886),
            styles: [__webpack_require__(857)]
        }), 
        __metadata('design:paramtypes', [])
    ], SingleComponent);
    return SingleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/single.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent() {
        _super.apply(this, arguments);
        this.displayTable = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.count = this.data['first'];
        for (var i = 0; i < this.data['table'].length; i++) {
            this.displayTable[i] = [];
            var row = this.data['table'][i];
            for (var j = 0; j < row.length; j++) {
                this.displayTable[i][j] = [];
                var cell = row[j];
                for (var t = 0; t < cell.length; t++) {
                    this.displayTable[i][j][t] = this.convert(cell[t]);
                }
            }
        }
    };
    TableComponent.prototype.convert = function (para) {
        var result = [];
        while (para.includes('[]')) {
            para = para.replace('[]', '*{}*');
        }
        var splitedPara = para.split('*');
        for (var j = 0; j < splitedPara.length; j++) {
            if (splitedPara[j] == '{}') {
                result.push({ isInput: true, data: this.count });
                this.count++;
            }
            else {
                result.push({ isInput: false, data: splitedPara[j] });
            }
        }
        // console.warn(result);
        return result;
    };
    TableComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    TableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(887),
            styles: [__webpack_require__(858)]
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/table.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = '/api/user/audio';
var AudioComponent = (function () {
    function AudioComponent(http) {
        this.http = http;
        this.filesToUpload = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    AudioComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    AudioComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    AudioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audio',
            template: __webpack_require__(891),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AudioComponent);
    return AudioComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/audio.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service__ = __webpack_require__(273);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(testSv) {
        this.testSv = testSv;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testSv.find().then(function (result) {
            _this.tests = result;
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(892),
            styles: [__webpack_require__(863)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/home.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service__ = __webpack_require__(273);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryComponent = (function () {
    function LibraryComponent(testSv) {
        this.testSv = testSv;
        this.books = [];
        this.titles = [];
    }
    LibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testSv.find().then(function (result) {
            for (var i = 0; i < result.length; i++) {
                if (_this.titles.indexOf(result[i].description) < 0) {
                    _this.titles.push(result[i].description);
                }
            }
            for (var i = 0; i < _this.titles.length; i++) {
                _this.books[i] = [];
            }
            for (var i = 0; i < result.length; i++) {
                var index = _this.titles.indexOf(result[i].description);
                _this.books[index].push(result[i]);
            }
        });
    };
    LibraryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(893),
            styles: [__webpack_require__(864)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]) === 'function' && _a) || Object])
    ], LibraryComponent);
    return LibraryComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/library.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = (function () {
    function ResultComponent(userSv, acc) {
        this.userSv = userSv;
        this.acc = acc;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acc.checkStatus().then(function (value) {
            if (value) {
                _this.userSv.findOne(value.id).then(function (value) { return _this.user = value; }, function (reason) { return console.error(reason); });
            }
        }, function (reason) { return console.error(reason); });
    };
    ResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(894),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], ResultComponent);
    return ResultComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/result.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_types_i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndingComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EndingComponent = (function (_super) {
    __extends(EndingComponent, _super);
    function EndingComponent() {
        _super.apply(this, arguments);
        this.mark = 'letter';
    }
    EndingComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    EndingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ending',
            template: __webpack_require__(895),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [])
    ], EndingComponent);
    return EndingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_types_i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/ending.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_types_i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadingComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadingComponent = (function (_super) {
    __extends(HeadingComponent, _super);
    function HeadingComponent() {
        _super.apply(this, arguments);
        this.mark = 'roman';
    }
    HeadingComponent.prototype.ngOnInit = function () {
        var count = 0;
        for (var i = 0; i < this.data['paras'].length; i++) {
            if (this.data['paras'][i].answer == undefined) {
                this.data['paras'][i].no = count;
                count++;
            }
        }
    };
    HeadingComponent.prototype.getAnswerArray = function () {
        var array = this.answers.slice(0);
        for (var i = 0; i < this.data['paras'].length; i++) {
            var a = this.data['paras'][i].answer;
            if (a != undefined) {
                array.push(a);
            }
        }
        return array;
    };
    HeadingComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    HeadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heading',
            template: __webpack_require__(896),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeadingComponent);
    return HeadingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_types_i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/heading.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_types_i_type__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_converter_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationComponent = (function (_super) {
    __extends(InformationComponent, _super);
    function InformationComponent(converterService) {
        _super.call(this);
        this.converterService = converterService;
        this.paras = [];
    }
    InformationComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.data['number_of_paras']; i++) {
            this.paras.push(this.converterService.numberToLetter(i + 1));
        }
    };
    InformationComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], InformationComponent.prototype, "sectionNumber", void 0);
    InformationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(897),
            styles: [__webpack_require__(868)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], InformationComponent);
    return InformationComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__common_types_i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/information.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummarySelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummarySelectComponent = (function () {
    function SummarySelectComponent(converterService) {
        this.converterService = converterService;
        this.displayParas = [];
        this.answers = [];
        this.mark = 'letter';
    }
    SummarySelectComponent.prototype.ngOnInit = function () {
        var paras = this.data['paras'];
        this.displayParas = this.converterService.paragraphToArray(paras, this.data['first']);
        for (var i = 0; i < paras.length; i++) {
            this.answers[i] = [];
        }
    };
    SummarySelectComponent.prototype.getAnswerArray = function () {
        var array = [];
        for (var i = 0; i < this.answers.length; i++) {
            for (var j = 0; j < this.answers[i].length; j++) {
                if (this.answers[i][j] != undefined) {
                    array.push(this.answers[i][j]);
                }
            }
        }
        return array;
    };
    SummarySelectComponent.prototype.getAnswers = function () {
        var res = [];
        for (var i = 0; i < this.displayParas.length; i++) {
            for (var j = 0; j < this.displayParas[i].length; j++) {
                if (this.displayParas[i][j]['isInput']) {
                    res.push(this.converterService.numberToLetter(this.answers[i][j]));
                }
            }
        }
        return res;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SummarySelectComponent.prototype, "data", void 0);
    SummarySelectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-summary-select',
            template: __webpack_require__(898),
            styles: [__webpack_require__(869)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], SummarySelectComponent);
    return SummarySelectComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/summary-select.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_types_i_type__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrueFalseComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrueFalseComponent = (function (_super) {
    __extends(TrueFalseComponent, _super);
    function TrueFalseComponent() {
        _super.apply(this, arguments);
    }
    TrueFalseComponent.prototype.ngOnInit = function () {
        if (this.data['options'] == 'tf') {
            this.options = ['true', 'false', 'not given'];
        }
        else if (this.data['options'] == 'yn') {
            this.options = ['yes', 'no', 'not given'];
        }
    };
    TrueFalseComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    TrueFalseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-true-false',
            template: __webpack_require__(899),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [])
    ], TrueFalseComponent);
    return TrueFalseComponent;
}(__WEBPACK_IMPORTED_MODULE_1__common_types_i_type__["a" /* Type */]));
//# sourceMappingURL=D:/projects/ielts-front/src/true-false.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttemptService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttemptService = (function () {
    function AttemptService(http, acc) {
        this.http = http;
        this.acc = acc;
    }
    AttemptService.prototype.saveAttempt = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acc.checkStatus().then(function (value) {
                if (value) {
                    data.userId = value.id;
                    var add = data.skill === 'writing' ? '-w' : '';
                    _this.http.post(__WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */].url + '/api/user/save-attempt' + add, data).subscribe(function (value) { return resolve(value); }, function (error) { return reject(error); });
                }
            }, function (reason) { return reject(reason); });
        });
    };
    AttemptService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === 'function' && _b) || Object])
    ], AttemptService);
    return AttemptService;
    var _a, _b;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/attempt.service.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_converter_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__ = __webpack_require__(471);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = (function () {
    function Data() {
    }
    return Data;
}());
var SubmitDialog = (function () {
    function SubmitDialog(dialogRef, converter, att) {
        this.dialogRef = dialogRef;
        this.converter = converter;
        this.att = att;
    }
    SubmitDialog.prototype.ngOnInit = function () {
        this.data = this.dialogRef.config.data.data;
        this.testResult = this.converter.getTestResult(this.data.answers, this.data.keys);
        if (this.data.isBecauseOfTimingOut)
            this.submit();
    };
    SubmitDialog.prototype.ngOnDestroy = function () {
        this.dialogRef.close(this.data.isSubmited);
    };
    SubmitDialog.prototype.submit = function () {
        this.data.isSubmited = true;
        var sendData = {
            testId: this.data.testId,
            skill: this.data.skill,
            score: this.testResult.score
        };
        this.att.saveAttempt(sendData).then(function (value) { }, function (reason) { return console.error(reason); });
    };
    SubmitDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-submit',
            template: __webpack_require__(901),
            styles: [__webpack_require__(871)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */], __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__["a" /* AttemptService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__["a" /* AttemptService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__["a" /* AttemptService */]) === 'function' && _c) || Object])
    ], SubmitDialog);
    return SubmitDialog;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/submit.dialog.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_component__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeningComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListeningComponent = (function (_super) {
    __extends(ListeningComponent, _super);
    function ListeningComponent(_dialog, _snackBar, _getDataService, _activatedRoute) {
        _super.call(this, _dialog, _snackBar, _getDataService, _activatedRoute);
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this._getDataService = _getDataService;
        this._activatedRoute = _activatedRoute;
        this.skill = 'listening';
    }
    ListeningComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listening',
            template: __webpack_require__(902),
            styles: [__webpack_require__(133), __webpack_require__(872)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ListeningComponent);
    return ListeningComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_4__common_common_component__["a" /* CommonComponent */]));
//# sourceMappingURL=D:/projects/ielts-front/src/listening.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_common_component__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReadingComponent = (function (_super) {
    __extends(ReadingComponent, _super);
    function ReadingComponent(_dialog, _snackBar, _getDataService, _activatedRoute) {
        _super.call(this, _dialog, _snackBar, _getDataService, _activatedRoute);
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this._getDataService = _getDataService;
        this._activatedRoute = _activatedRoute;
        this.skill = 'reading';
    }
    ReadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reading',
            template: __webpack_require__(903),
            styles: [__webpack_require__(133), __webpack_require__(873)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ReadingComponent);
    return ReadingComponent;
    var _a, _b, _c, _d;
}(__WEBPACK_IMPORTED_MODULE_4__common_common_component__["a" /* CommonComponent */]));
//# sourceMappingURL=D:/projects/ielts-front/src/reading.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpeakingComponent = (function () {
    function SpeakingComponent(getDataService, route, accSv, userSv) {
        this.getDataService = getDataService;
        this.route = route;
        this.accSv = accSv;
        this.userSv = userSv;
        this.url = '/api/user/audio';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: this.url });
    }
    SpeakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testId = this.route.snapshot.params['testId'];
        this.getDataService.findOne(this.testId, 'speaking').then(function (value) {
            _this.data = value;
        }, function (reason) { return console.error(reason); });
        this.accSv.checkStatus().then(function (value) {
            if (value) {
                _this.userSv.findOne(value.id).then(function (value) {
                    for (var i = 0; i < value.attempts.length; i++) {
                        var attempt = value.attempts[i];
                        if (attempt.skill === 'speaking' && attempt.test_id == _this.testId) {
                            _this.audioUrl = attempt.audioUrl;
                            break;
                        }
                    }
                }, function (reason) { return console.error(reason); });
            }
        }, function (reason) { return console.error(reason); });
    };
    SpeakingComponent.prototype.upload = function () {
        var _this = this;
        // this.uploader.queue[0].is
        this.accSv.checkStatus().then(function (value) {
            if (value) {
                var testId_1 = _this.testId;
                _this.uploader.onBuildItemForm = function (fileItem, form) {
                    form.append('testId', testId_1);
                    form.append('userId', value.id);
                    return { fileItem: fileItem, form: form };
                };
                _this.uploader.queue[_this.uploader.queue.length - 1].upload();
            }
        }, function (reason) { return console.error(reason); });
    };
    SpeakingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-speaking',
            template: __webpack_require__(904),
            styles: [__webpack_require__(133), __webpack_require__(874)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object])
    ], SpeakingComponent);
    return SpeakingComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/speaking.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_data_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WritingComponent = (function () {
    function WritingComponent(getDataService, route, att, acc, userSv) {
        this.getDataService = getDataService;
        this.route = route;
        this.att = att;
        this.acc = acc;
        this.userSv = userSv;
        this.isSubmitted = false;
    }
    WritingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testId = this.route.snapshot.params['testId'];
        this.getDataService.findOne(this.testId, 'writing').then(function (value) {
            _this.data = value;
        }, function (reason) { return console.error(reason); });
        this.acc.checkStatus().then(function (value) {
            if (value) {
                _this.userSv.findOne(value.id).then(function (value) {
                    for (var i = 0; i < value.attempts.length; i++) {
                        var attempt = value.attempts[i];
                        if (attempt.skill === 'writing' && attempt.test_id == _this.testId) {
                            _this.task1 = _this._task1 = attempt.task1;
                            _this.task2 = _this._task2 = attempt.task2;
                            break;
                        }
                    }
                }, function (reason) { return console.error(reason); });
            }
        }, function (reason) { return console.error(reason); });
    };
    WritingComponent.prototype.submit = function () {
        var _this = this;
        var sendData = {
            testId: this.testId,
            skill: 'writing',
            task1: this.task1,
            task2: this.task2
        };
        this.att.saveAttempt(sendData).then(function (value) {
            _this.isSubmitted = true;
            _this._task1 = _this.task1;
            _this._task2 = _this.task2;
        }, function (reason) { return console.error(reason); });
    };
    WritingComponent.prototype.isDisabled = function () {
        if (this.task1 == this._task1 && this.task2 == this._task2)
            return true;
        return false;
    };
    WritingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-writing',
            template: __webpack_require__(905),
            styles: [__webpack_require__(133), __webpack_require__(875)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_get_data_service__["a" /* GetDataService */], __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__["a" /* AttemptService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_get_data_service__["a" /* GetDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__["a" /* AttemptService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_attempt_service__["a" /* AttemptService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === 'function' && _e) || Object])
    ], WritingComponent);
    return WritingComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/writing.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 532;


/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(693);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/projects/ielts-front/src/main.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skills_listening_listening_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skills_reading_reading_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_writing_writing_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills_speaking_speaking_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_result_result_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_library_library_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_audio_audio_component__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_8__pages_library_library_component__["a" /* LibraryComponent */] },
    { path: 'reading/:testId', component: __WEBPACK_IMPORTED_MODULE_3__skills_reading_reading_component__["a" /* ReadingComponent */] },
    { path: 'listening/:testId', component: __WEBPACK_IMPORTED_MODULE_2__skills_listening_listening_component__["a" /* ListeningComponent */] },
    { path: 'writing/:testId', component: __WEBPACK_IMPORTED_MODULE_4__skills_writing_writing_component__["a" /* WritingComponent */] },
    { path: 'speaking/:testId', component: __WEBPACK_IMPORTED_MODULE_5__skills_speaking_speaking_component__["a" /* SpeakingComponent */] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_7__pages_result_result_component__["a" /* ResultComponent */] },
    { path: 'audio', component: __WEBPACK_IMPORTED_MODULE_9__pages_audio_audio_component__["a" /* AudioComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/app-routing.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_result_result_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__skills_reading_reading_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__skills_listening_listening_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__skills_writing_writing_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__skills_speaking_speaking_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__skills_common_common_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reading_types_true_false_true_false_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_types_answer_answer_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reading_types_heading_heading_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_types_sentence_sentence_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reading_types_ending_ending_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reading_types_information_information_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reading_types_summary_select_summary_select_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_option_list_option_list_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_types_feature_feature_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__common_types_multiple_multiple_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__common_types_note_note_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_types_single_single_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__common_types_table_table_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_test_toolbar_test_toolbar_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_global_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_user_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_account_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__skills_dialogs_submit_dialog__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_letter_pipe__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_timer_pipe__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipes_roman_pipe__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_loading_loading_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_library_library_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_audio_audio_component__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__skills_reading_reading_component__["a" /* ReadingComponent */],
                __WEBPACK_IMPORTED_MODULE_34__skills_dialogs_submit_dialog__["a" /* SubmitDialog */],
                __WEBPACK_IMPORTED_MODULE_13__skills_listening_listening_component__["a" /* ListeningComponent */],
                __WEBPACK_IMPORTED_MODULE_17__reading_types_true_false_true_false_component__["a" /* TrueFalseComponent */],
                __WEBPACK_IMPORTED_MODULE_18__common_types_answer_answer_component__["a" /* AnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__reading_types_heading_heading_component__["a" /* HeadingComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pipes_roman_pipe__["a" /* RomanPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_test_toolbar_test_toolbar_component__["a" /* TestToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__common_types_sentence_sentence_component__["a" /* SentenceComponent */],
                __WEBPACK_IMPORTED_MODULE_21__reading_types_ending_ending_component__["a" /* EndingComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_letter_pipe__["a" /* LetterPipe */],
                __WEBPACK_IMPORTED_MODULE_22__reading_types_information_information_component__["a" /* InformationComponent */],
                __WEBPACK_IMPORTED_MODULE_23__reading_types_summary_select_summary_select_component__["a" /* SummarySelectComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_option_list_option_list_component__["a" /* OptionListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__common_types_feature_feature_component__["a" /* FeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_14__skills_writing_writing_component__["a" /* WritingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__skills_speaking_speaking_component__["a" /* SpeakingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__common_types_multiple_multiple_component__["a" /* MultipleComponent */],
                __WEBPACK_IMPORTED_MODULE_28__common_types_single_single_component__["a" /* SingleComponent */],
                __WEBPACK_IMPORTED_MODULE_27__common_types_note_note_component__["a" /* NoteComponent */],
                __WEBPACK_IMPORTED_MODULE_29__common_types_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pipes_timer_pipe__["a" /* TimerPipe */],
                __WEBPACK_IMPORTED_MODULE_16__skills_common_common_component__["a" /* CommonComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_audio_audio_component__["a" /* AudioComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileDropDirective"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_34__skills_dialogs_submit_dialog__["a" /* SubmitDialog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__["FacebookService"],
                __WEBPACK_IMPORTED_MODULE_31__services_global_service__["a" /* GlobalService */],
                __WEBPACK_IMPORTED_MODULE_32__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_33__services_account_service__["a" /* AccountService */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/app.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], LoadingComponent.prototype, "isShow", void 0);
    LoadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(888),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/loading.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionListComponent = (function () {
    function OptionListComponent() {
    }
    OptionListComponent.prototype.ngOnInit = function () {
    };
    OptionListComponent.prototype.changeColor = function (value) {
        if (this.answers.indexOf(value) >= 0) {
            return true;
        }
        return false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OptionListComponent.prototype, "list", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OptionListComponent.prototype, "answers", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], OptionListComponent.prototype, "mark", void 0);
    OptionListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-option-list',
            template: __webpack_require__(889),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [])
    ], OptionListComponent);
    return OptionListComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/option-list.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service__ = __webpack_require__(273);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestToolbarComponent = (function () {
    function TestToolbarComponent(testSv) {
        this.testSv = testSv;
    }
    TestToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testSv.findOne(this.testId).then(function (value) { return _this.test = value; }, function (reason) { return console.error(reason); });
        if (this.currentPage == 0)
            this.skill = 'Listening';
        if (this.currentPage == 1)
            this.skill = 'Reading';
        if (this.currentPage == 2)
            this.skill = 'Writing';
        if (this.currentPage == 3)
            this.skill = 'Speaking';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], TestToolbarComponent.prototype, "currentPage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], TestToolbarComponent.prototype, "testId", void 0);
    TestToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-toolbar',
            template: __webpack_require__(890),
            styles: [__webpack_require__(861)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]) === 'function' && _a) || Object])
    ], TestToolbarComponent);
    return TestToolbarComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/test-toolbar.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(454);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(689);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/projects/ielts-front/src/index.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LetterPipe = (function () {
    function LetterPipe() {
    }
    LetterPipe.prototype.transform = function (value, args) {
        var result = '';
        switch (value) {
            case 1: return 'a';
            case 2: return 'b';
            case 3: return 'c';
            case 4: return 'd';
            case 5: return 'e';
            case 6: return 'f';
            case 7: return 'g';
            case 8: return 'h';
            case 9: return 'i';
            case 10: return 'j';
        }
        return 'nan';
    };
    LetterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'letter'
        }), 
        __metadata('design:paramtypes', [])
    ], LetterPipe);
    return LetterPipe;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/letter.pipe.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RomanPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RomanPipe = (function () {
    function RomanPipe() {
    }
    RomanPipe.prototype.transform = function (value, args) {
        var result = '';
        switch (value) {
            case 1: return 'i';
            case 2: return 'ii';
            case 3: return 'iii';
            case 4: return 'iv';
            case 5: return 'v';
            case 6: return 'vi';
            case 7: return 'vii';
            case 8: return 'viii';
            case 9: return 'ix';
            case 10: return 'x';
            case 11: return 'xi';
        }
        return 'n';
    };
    RomanPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'roman'
        }), 
        __metadata('design:paramtypes', [])
    ], RomanPipe);
    return RomanPipe;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/roman.pipe.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerPipe = (function () {
    function TimerPipe() {
    }
    TimerPipe.prototype.transform = function (value) {
        var m = Math.floor(value / 60);
        var s = value % 60;
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        return m + ":" + s;
    };
    TimerPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'timer'
        }), 
        __metadata('design:paramtypes', [])
    ], TimerPipe);
    return TimerPipe;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/timer.pipe.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/projects/ielts-front/src/environment.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/projects/ielts-front/src/polyfills.js.map

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n#copy {\r\n  font-size: small;\r\n}\r\n\r\n.fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.nav-bar {\r\n  height: 100%;\r\n}\r\n\r\n.nav-bar > button {\r\n  /*border: solid #e41937;\r\n  border-width: 0px 0px;\r\n  border-radius: 0;*/\r\n  height: 100%;\r\n  color: #e41937;\r\n}\r\n\r\n.logo {\r\n  height: 100%;\r\n}\r\n\r\n.logo-a {\r\n  height: 50%;\r\n  margin-right: 16px;\r\n}\r\n\r\n.avatar {\r\n  height: 75%;\r\n  border-radius: 70%;\r\n}\r\n\r\nmd-toolbar {\r\n  height: 64px;\r\n  /*background: #EEEEEE;*/\r\n  background: white;\r\n}\r\n\r\n.header-toolbar {\r\n  border-bottom: 1px solid #e41937;\r\n  /*position: fixed;\r\n  top: 0px;\r\n  left: 0px;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "md-select {\r\n  width: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".margin-right {\r\n  margin-right: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".note {\r\n  margin: auto;\r\n  background: rgba(67, 169, 208, 0.25);\r\n  border: 2px solid #1E88E5;\r\n  padding: 0px 22px;\r\n  display: table;\r\n}\r\n\r\n.text-only {\r\n  line-height: 30px;\r\n}\r\n/*\r\n.mat-input-table {\r\n  position: relative;\r\n  top: 6px;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".radio-group {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.margin-right {\r\n  margin-right: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".para-in-cell {\r\n  margin: 0px;\r\n  text-align: initial;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".loading {\r\n  padding: 50px;\r\n  opacity: 0.5;\r\n}\r\n\r\nmd-progress-bar {\r\n  margin-bottom: 15px;\r\n}\r\n\r\nmd-progress-bar:nth-child(2) {\r\n  width: 40%;\r\n}\r\n\r\nmd-progress-bar:nth-child(3) {\r\n  width: 20%;\r\n}\r\n\r\nmd-progress-bar:nth-child(4) {\r\n  width: 30%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".format-table > tbody > tr > td {\r\n  border-width: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\nnav {\r\n  position: relative;\r\n  top: 4px;\r\n}\r\n\r\nnav > button {\r\n  border-radius: 0px;\r\n}\r\n\r\n.active {\r\n  color: #e41937;\r\n  cursor: default;\r\n}\r\n\r\n.inactive {\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".banner {\r\n  width: 100%;\r\n}\r\n\r\n.overall {\r\n  padding: 10px 75px 20px 75px;\r\n}\r\n\r\n.section > .header-bar > p {\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n  font-size: x-large;\r\n}\r\n\r\n.section > .header-bar > button {\r\n  float: right;\r\n  margin: 20px 0px;\r\n}\r\n\r\n.section > .card-div {\r\n  float: left;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  width: 24%;\r\n}\r\n\r\n.section > .card-div > md-card {\r\n  border-radius: 0px;\r\n  padding: 10px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  cursor: pointer;\r\n  border-left: 7px solid #bdbdbd;\r\n}\r\n\r\n.section > .card-div > md-card:hover {\r\n  border-color: #cb253e;\r\n}\r\n\r\n.section > .card-div > md-card > img {\r\n  width: calc(100% + 20px);\r\n  margin: -10px -10px 0px;\r\n}\r\n\r\n.section > .card-div > md-card > .card-des > .test-title {\r\n  font-size: x-large;\r\n  margin: 15px 0px 4px 10px;\r\n}\r\n\r\n.section > .card-div > md-card > .card-des > .test-des {\r\n  margin: 0px 0px 9px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".banner {\r\n  width: 100%;\r\n}\r\n\r\n.overall {\r\n  padding: 10px 75px 20px 75px;\r\n}\r\n\r\n.section {\r\n  /*display: grid;*/\r\n}\r\n\r\n.section > .header-bar > p {\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n  font-size: x-large;\r\n}\r\n\r\n.section > .header-bar > button {\r\n  float: right;\r\n  margin: 20px 0px;\r\n}\r\n\r\n.section > .card-div {\r\n  /*float: left;*/\r\n  display: inline-block;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  width: 24%;\r\n}\r\n\r\n.section > .card-div > md-card {\r\n  border-radius: 0px;\r\n  padding: 10px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  cursor: pointer;\r\n  border-left: 7px solid #bdbdbd;\r\n}\r\n\r\n.section > .card-div > md-card:hover {\r\n  border-color: #cb253e;\r\n}\r\n\r\n.section > .card-div > md-card > img {\r\n  width: calc(100% + 20px);\r\n  margin: -10px -10px 0px;\r\n}\r\n\r\n.section > .card-div > md-card > .card-des > .test-title {\r\n  font-size: x-large;\r\n  margin: 15px 0px 4px 10px;\r\n}\r\n\r\n.section > .card-div > md-card > .card-des > .test-des {\r\n  margin: 0px 0px 9px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "table {\r\n  text-align: center;\r\n  margin: 0px;\r\n}\r\n\r\n.overall {\r\n  padding: 30px 150px;\r\n}\r\n\r\n.section-header {\r\n  font-size: x-large;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "md-select {\r\n  width: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".half-card {\r\n  width: 60%;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  top: -4px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".half-card {\r\n  width: 60%;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  top: -4px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".options {\r\n  margin-left: 30px;\r\n}\r\n\r\n.option {\r\n  font-style: italic;\r\n  font-weight: bold;\r\n}\r\n\r\ntd > p {\r\n  margin: 0px;\r\n}\r\n\r\ntd {\r\n  padding: 5px;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "md-dialog-content::-webkit-scrollbar { \r\n    display: none; \r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  /*background: rgba(67, 169, 208, 0.25);*/\r\n}\r\n\r\ntd, th {\r\n  border: 1px solid #9E9E9E;\r\n  padding: 5px;\r\n}\r\n\r\n.first-col, .second-col {\r\n  /*text-align: center;*/\r\n}\r\n\r\n.first-col {\r\n  width: 15%;\r\n}\r\n\r\n.second-col {\r\n\r\n}\r\n\r\n.mat-dialog-content {\r\n  max-height: 50vh;\r\n}\r\n\r\n.submit {\r\n  margin-right: 10px;\r\n}\r\n\r\n.score, .no-of-correct {\r\n  text-align: right;\r\n  margin: 0px;\r\n}\r\n\r\n.score {\r\n  font-size: 300%\r\n}\r\n\r\n.no-of-correct {\r\n  color: grey;\r\n  margin: 5px 0px 10px 0px;\r\n}\r\n\r\n.score-prefix {\r\n  font-size: 60%;\r\n  color: inherit;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".left-block {\r\n  width: 65%;\r\n}\r\n\r\n.right-block {\r\n  width: 33%;\r\n}\r\n\r\nmd-input-container, textarea {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\naudio {\r\n  width: 100%;\r\n  margin-bottom: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".title {\r\n  text-align: center;\r\n}\r\n\r\n.left-card {\r\n  margin-bottom: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".box {\r\n  border: 1px solid black;\r\n  background: rgba(67, 169, 208, 0.25);\r\n  padding: 10px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\nmd-card {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.topic {\r\n  font-size: 110%;\r\n  font-weight: bold;\r\n}\r\n\r\naudio {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.left-block {\r\n  width: 55%;\r\n}\r\n\r\n.right-block {\r\n  width: 43%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".left-block {\r\n  width: 45%;\r\n}\r\n\r\n.right-block {\r\n  width: 53%;\r\n}\r\n\r\n.left-block, .right-block {\r\n  /*height: 600px;*/\r\n  /*width: 49%;*/\r\n  /*overflow: visible;*/\r\n}\r\n\r\nmd-input-container, textarea {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<!-- <md-toolbar></md-toolbar> -->\r\n\r\n<md-toolbar class=\"header-toolbar\">\r\n  <a class=\"logo-a\" href=\"/\"><img class=\"logo\" src=\"/assets/logo.png\"></a>\r\n  <nav class=\"nav-bar\">\r\n    <button md-button routerLink=\"/library\">Library</button>\r\n  </nav>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <nav class=\"nav-bar\">\r\n    <button md-button *ngIf=\"user\" routerLink=\"/result\">Result</button>\r\n    <button md-button *ngIf=\"!user\" (click)=\"fbLogin()\">Login</button>\r\n    <button md-button *ngIf=\"user\" (click)=\"fbLogout()\">Logout</button>\r\n    <button md-button *ngIf=\"user\">\r\n      <span>{{user.first_name}}</span>\r\n      <img class=\"avatar\" [src]=\"user.picture.data.url\">\r\n    </button>\r\n  </nav>\r\n</md-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<md-toolbar>\r\n  <span id=\"copy\">&copy;2017 - IELTS Online</span>\r\n  <span class=\"spacer\"></span>\r\n</md-toolbar>"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<div *ngFor=\"let text of data.text; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{text}}</p>\n  <md-input-container>\n    <input mdInput type=\"text\" [(ngModel)]=\"answers[i]\"/>\n  </md-input-container>\n</div>\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<app-option-list [list]=\"data.features\"\n                 [answers]=\"answers\"\n                 [mark]=\"mark\"></app-option-list>\n\n<div *ngFor=\"let item of data.text; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{item}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let feature of data.features; let j = 'index'\"\n               [value]=\"j + 1 | letter\">{{j + 1 | letter | uppercase}}. {{feature}}</md-option>\n  </md-select>\n</div>\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<div *ngFor=\"let item of data.choices; let i = 'index'\">\n  <md-checkbox [(ngModel)]=\"_answers[i]\" (change)=\"checkLimit(i)\">\n    <span class=\"blue margin-right\">{{i + 1 | letter | uppercase}}</span>\n    {{item}}\n  </md-checkbox>\n</div>\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<div class=\"note\">\n  <p *ngIf=\"data.heading\" class=\"heading\">{{data.heading}}</p>\n  <p *ngFor=\"let para of displayParas; let i = 'index'\">\n    <span *ngFor=\"let span of para; let j = 'index'\">\n      <md-input-container *ngIf=\"span.isInput\" floatingPlaceholder=\"false\">\n        <span md-prefix class=\"margin-right-10\" style=\"font-weight: bold\">{{span.data}}</span>\n        <input mdInput type=\"text\" [(ngModel)]=\"_answers[i][j]\" placeholder=\"\"/>\n      </md-input-container>\n      <span *ngIf=\"!span.isInput\" class=\"text-only\" [innerHTML]=\"span.data\"></span>\n    </span>\n  </p>\n</div>\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<p *ngIf=\"data.heading\" class=\"heading\">{{data.heading}}</p>\n\n<!-- <div > -->\n  <p *ngFor=\"let sen of displaySens; let i = 'index'\">\n    <span>{{data.first + i}}. </span>\n    <span *ngFor=\"let span of sen\">\n      <md-input-container *ngIf=\"span == '{}'\" floatingPlaceholder=\"false\">\n        <input mdInput type=\"text\" [(ngModel)]=\"answers[i]\" placeholder=\"\"/>\n      </md-input-container>\n      <span *ngIf=\"span != '{}'\">{{span}}</span>\n    </span>\n  </p>\n<!-- </div> -->\n"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<p *ngIf=\"data.heading\" class=\"heading\">{{data.heading}}</p>\n\n<div *ngFor=\"let question of data.questions; let i = 'index'\">\n  <p><span *ngIf=\"data.first != data.last\">{{data.first + i}}. </span>{{question.text}}</p>\n  <md-radio-group class=\"radio-group\" [(ngModel)]=\"answers[i]\">\n    <md-radio-button *ngFor=\"let choice of question.choices; let i = 'index'\" [value]=\"i + 1 | letter\">\n      <span class=\"blue margin-right\">{{i+1 | letter | uppercase}}</span>\n      {{choice}}\n    </md-radio-button>\n  </md-radio-group>\n</div>\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<table class=\"format-table\">\n  <tr *ngFor=\"let row of displayTable\">\n    <td *ngFor=\"let cell of row\">\n      <p *ngFor=\"let para of cell\" class=\"para-in-cell\">\n        <span *ngFor=\"let span of para\">\n          <md-input-container *ngIf=\"span.isInput\" floatingPlaceholder=\"false\">\n            <span md-prefix class=\"margin-right-10\" style=\"font-weight: bold\">{{span.data}}</span>\n            <input mdInput type=\"text\" [(ngModel)]=\"answers[span.data - data.first]\" placeholder=\"\"/>\n          </md-input-container>\n          <span *ngIf=\"!span.isInput\" [innerHTML]=\"span.data\"></span>\n        </span>\n      </p>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"loading overall\" *ngIf=\"isShow === 'true'\">\n  <p class=\"header blue\">Loading...</p>\n  <md-progress-bar color=\"primary\" mode=\"indeterminate\"></md-progress-bar>\n  <!-- <md-progress-bar color=\"primary\" mode=\"indeterminate\"></md-progress-bar>\n  <md-progress-bar color=\"primary\" mode=\"indeterminate\"></md-progress-bar> -->\n</div>\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<table class=\"format-table\">\n  <tr *ngFor=\"let item of list; let i = 'index'\" [style.color]=\"changeColor(i + 1) ? '#1E88E5' : ''\">\n    <td>\n      <span *ngIf=\"mark == 'letter'\" class=\"blue\">{{i + 1 | letter | uppercase}}</span>\n      <span *ngIf=\"mark == 'roman'\">{{i + 1 | roman}}</span>\n    </td>\n    <td>{{item}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"breadcrumb\">\n  <p>\n    <a routerLink=\"/\">Home</a>\n    <md-icon class=\"icon\">chevron_right</md-icon>\n    <a routerLink=\"/library\">Library</a>\n    <md-icon class=\"icon\">chevron_right</md-icon>\n    <span *ngIf=\"test\">{{test.description}} - {{test.title}}</span>\n    <md-icon class=\"icon\">chevron_right</md-icon>\n    <span>{{skill}}</span>\n  </p>\n  <span class=\"fill-remaining-space\"></span>\n  <nav [ngSwitch]=\"currentPage\">\n    <button *ngSwitchCase=\"0\" md-raised-button class=\"active\">Listening</button>\n    <button *ngIf=\"currentPage != 0\" md-button class=\"inactive\" routerLink=\"/listening/{{testId}}\">Listening</button>\n\n    <button *ngSwitchCase=\"1\" md-raised-button class=\"active\">Reading</button>\n    <button *ngIf=\"currentPage != 1\" md-button class=\"inactive\" routerLink=\"/reading/{{testId}}\">Reading</button>\n\n    <button *ngSwitchCase=\"2\" md-raised-button class=\"active\">Writing</button>\n    <button *ngIf=\"currentPage != 2\" md-button class=\"inactive\" routerLink=\"/writing/{{testId}}\">Writing</button>\n\n    <button *ngSwitchCase=\"3\" md-raised-button class=\"active\">Speaking</button>\n    <button *ngIf=\"currentPage != 3\" md-button class=\"inactive\" routerLink=\"/speaking/{{testId}}\">Speaking</button>\n  </nav>\n</md-toolbar>"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" /> -->\n<button type=\"button\" (click)=\"upload()\">Upload</button>\n\n<div class=\"container\">\n \n    <div class=\"navbar navbar-default\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href>Angular2 File Upload</a>\n        </div>\n    </div>\n \n    <div class=\"row\">\n \n        <div class=\"col-md-3\">\n \n            <h3>Select files</h3>\n \n            <div ng2FileDrop\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                 (fileOver)=\"fileOverBase($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Base drop zone\n            </div>\n \n            <div ng2FileDrop\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\n                 (fileOver)=\"fileOverAnother($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Another drop zone\n            </div>\n \n            Multiple\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n \n            Single\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n        </div>\n \n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n \n            <h3>Upload queue</h3>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n \n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                    <td *ngIf=\"uploader.isHTML5\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n \n            <div>\n                <div>\n                    Queue progress:\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n \n        </div>\n \n    </div>\n \n</div>"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<img class=\"banner\" src=\"/assets/banner.png\">\n\n<div class=\"overall\">\n  <div class=\"section\">\n    <div class=\"header-bar\">\n      <p class=\"red\">Recent Tests</p>\n      <button md-button class=\"red\" routerLink=\"/library\">\n        See Library\n        <md-icon class=\"icon\">chevron_right</md-icon>\n      </button>\n    </div>\n    <div *ngFor=\"let test of tests | slice:0:8\" class=\"card-div\">\n      <md-card routerLink=\"/listening/{{test.id}}\">\n        <!-- <img md-card-image [src]=\"test.image\"> -->\n        <div class=\"card-des\">\n          <p class=\"test-title red\">{{test.title}}</p>\n          <p class=\"test-des\">{{test.description}}</p>\n        </div>\n      </md-card>\n    </div>\n  </div>\n\n  <!-- <div class=\"section\">\n    <div class=\"header-bar\"></div>\n    <div class=\"card-div\"></div>\n  </div> -->\n</div>\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"breadcrumb\">\n  <p>\n    <a href=\"/\">Home</a>\n    <md-icon class=\"icon\">chevron_right</md-icon>\n    <span href=\"/library\">Library</span>\n  </p>\n</md-toolbar>\n\n<div class=\"overall\">\n  <div *ngFor=\"let book of books\" class=\"section\">\n    <div class=\"header-bar\">\n      <p class=\"red\">{{book[0].description}}</p>\n    </div>\n    <div *ngFor=\"let test of book\" class=\"card-div\">\n      <md-card routerLink=\"/listening/{{test.id}}\">\n        <div class=\"card-des\">\n          <p class=\"test-title red\">{{test.title}}</p>\n          <p class=\"test-des\">{{test.description}}</p>\n        </div>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"breadcrumb\">\n  <p>\n    <a href=\"/\">Home</a>\n    <md-icon class=\"icon\">chevron_right</md-icon>\n    <span href=\"/library\">Result</span>\n  </p>\n</md-toolbar>\n\n<app-loading isShow=\"{{user ? false : true}}\"></app-loading>\n\n<div class=\"overall\" *ngIf=\"user\">\n  <p class=\"section-header red\">Your Results</p>\n  <table *ngIf=\"user.attempts.length != 0\" class=\"format-table\">\n    <tr>\n      <td><b>Test</b></td>\n      <td><b>Skill</b></td>\n      <td><b>Score</b></td>\n      <!-- <td><b>Time</b></td> -->\n    </tr>\n    <tr *ngFor=\"let attempt of user.attempts.slice().reverse()\">\n      <td>{{attempt.test_id}}</td>\n      <td>{{attempt.skill | uppercase}}</td>\n      <td>{{attempt.score}}\n        <a *ngIf=\"attempt.skill === 'writing'\" class=\"blue\" routerLink=\"/writing/{{attempt.test_id}}\">See your answer</a>\n      </td>\n      <!-- <td></td> -->\n    </tr>\n  </table>\n\n  <p *ngIf=\"user.attempts.length == 0\">You haven't done any test yet!</p>\n</div>"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<app-option-list [list]=\"data.endings\"\n                 [answers]=\"answers\"\n                 [mark]=\"mark\"></app-option-list>\n\n<div *ngFor=\"let sen of data.sentences; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{sen}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let ending of data.endings; let j = 'index'\"\n               [value]=\"j + 1 | letter\">{{j + 1 | letter | uppercase}}. {{ending}}</md-option>\n  </md-select>\n</div>\n"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<app-option-list [list]=\"data.headings\"\n                 [answers]=\"getAnswerArray()\"\n                 [mark]=\"mark\"></app-option-list>\n\n<div *ngFor=\"let para of data.paras; let j = 'index'\">\n  <p>\n    <span *ngIf=\"para.no != undefined\">{{para.no + data.first}}. </span>\n    <span *ngIf=\"para.no == undefined\"><i>Example: </i></span>\n    Paragraph <b>{{para.char | uppercase}}</b>\n  </p>\n\n  <div *ngIf=\"!para.answer\">\n    <md-select [(ngModel)]=\"answers[para.no]\">\n      <md-option *ngFor=\"let heading of data.headings; let i = 'index'\"\n                 [value]=\"i + 1 | roman\">{{i + 1 | roman}}</md-option>\n    </md-select>\n  </div>\n  <div *ngIf=\"para.answer\">\n    <p><i>Answer: </i>{{para.answer | roman}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<div *ngFor=\"let item of data.text; let i = 'index'\">\n  <p><span *ngIf=\"data.first != data.last\">{{data.first + i}}. </span>{{item}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let para of paras; let j = 'index'\"\n               [value]=\"para\">Paragraph {{para | uppercase}}</md-option>\n  </md-select>\n</div>"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<md-card class=\"half-card\">\n  <md-card-title>{{data.heading}}</md-card-title>\n  <md-card-content>\n    <p *ngFor=\"let para of displayParas; let i = 'index'\">\n      <span *ngFor=\"let span of para; let j = 'index'\">\n        <div *ngIf=\"span.isInput\" class=\"inline-flex\">\n          <b>{{span.data}}</b>\n          <md-select [(ngModel)]=\"answers[i][j]\">\n            <md-option *ngFor=\"let word of data.words; let i = 'index'\"\n                       [value]=\"i + 1\">{{i + 1 | letter | uppercase}}. {{word}}</md-option>\n          </md-select>\n        </div>\n        <span *ngIf=\"!span.isInput\">{{span.data}}</span>\n      </span>\n    </p>\n  </md-card-content>\n</md-card>\n\n<app-option-list [list]=\"data.words\"\n                 [answers]=\"getAnswerArray()\"\n                 [mark]=\"mark\"></app-option-list>\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<div class=\"options\">\n  <table *ngIf=\"data.options == 'tf'\">\n    <tr>\n      <td><p class=\"option primary-color\">TRUE</p></td>\n      <td><p>if the statement argees with the information</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">FALSE</p></td>\n      <td><p>if the statement contradicts the information</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">NOT GIVEN</p></td>\n      <td><p>if there is no information on this</p></td>\n    </tr>\n  </table>\n\n  <table *ngIf=\"data.options == 'yn'\">\n    <tr>\n      <td><p class=\"option primary-color\">YES</p></td>\n      <td><p>if the statement argees with the claims of the writer</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">NO</p></td>\n      <td><p>if the statement contradicts the claims of the writer</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">NOT GIVEN</p></td>\n      <td><p>if it is impossible to say what the writer thinks about this</p></td>\n    </tr>\n  </table>\n</div>\n\n<div *ngFor=\"let text of data.text; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{text}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let item of options\" [value]=\"item\">{{item | uppercase}}</md-option>\n  </md-select>\n</div>\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<p>\n  common works!\n</p>\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title class=\"primary-color\">Answer Sheet</md-card-title>\r\n  <md-card-subtitle>{{data.skill | uppercase}}</md-card-subtitle>\r\n  <md-card-content>\r\n    <div *ngIf=\"data.isSubmited\">\r\n      <p class=\"score primary-color\"><span class=\"score-prefix\">Your score is </span>{{testResult.score | number : '1.1-1'}}</p>\r\n      <p class=\"no-of-correct\">Correct answers: {{testResult.noOfCorrect}}/40</p>\r\n    </div>\r\n    <md-dialog-content>\r\n      <table class=\"format-table\">\r\n        <tr>\r\n          <th>No.</th>\r\n          <th>Your Answer</th>\r\n          <th *ngIf=\"data.isSubmited\">Key</th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of data.answers; let i = 'index'\">\r\n          <td class=\"first-col\">{{item.no}}</td>\r\n          <td class=\"second-col\">\r\n            <span *ngIf=\"!data.isSubmited && item.ans\">{{item.ans}}</span>\r\n            <span *ngIf=\"data.isSubmited && testResult.result\" [ngStyle]=\"{color: testResult.result[i] ? 'green' : 'red'}\">{{item.ans}}</span>\r\n          </td>\r\n          <td *ngIf=\"data.isSubmited\" class=\"second-col\">\r\n            <span *ngIf=\"data.keys[i]\">\r\n              <span *ngFor=\"let key of data.keys[i].keys; let j = 'index'\">\r\n                <span *ngIf=\"j != 0\"> / </span>\r\n                <span>{{key | uppercase}}</span>\r\n              </span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </md-dialog-content>\r\n  </md-card-content>\r\n</md-card>\r\n<md-dialog-actions>\r\n  <button md-raised-button color=\"primary\" *ngIf=\"!data.isSubmited\" (click)=\"submit()\" class=\"submit\">Submit</button>\r\n  <button md-button md-dialog-close>Close</button>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"0\" [testId]=\"testId\"></app-test-toolbar>\n<app-loading isShow=\"{{sections ? false : true}}\"></app-loading>\n\n<div class=\"left-block\">\n  <md-tab-group *ngIf=\"sections\" class=\"margin-bottom-20 overall\">\n    <md-tab *ngFor=\"let section of sections; let i = 'index'\" label=\"Section {{section.section_number}}\">\n      <div class=\"padding-20\">\n        <!-- Block for each set of questions -->\n        <div *ngFor=\"let question of section.sub_sections\" class=\"margin-bottom-20\">\n          <div class=\"question-block blue\">\n            <p *ngIf=\"question.first == question.last\">Question {{question.first}}</p>\n            <p *ngIf=\"question.first != question.last\">\n              <span>Questions {{question.first}}</span>\n              <span *ngIf=\"question.last - question.first == 1\"> and </span>\n              <span *ngIf=\"question.last - question.first > 1\">-</span>\n              <span>{{question.last}}</span>\n            </p>  \n          </div>\n          \n          <div *ngIf=\"question.type == 'answer'\"><app-answer [data]=\"question\"></app-answer></div>\n          <div *ngIf=\"question.type == 'feature'\"><app-feature [data]=\"question\"></app-feature></div>\n          <div *ngIf=\"question.type == 'multiple'\"><app-multiple [data]=\"question\"></app-multiple></div>\n          <div *ngIf=\"question.type == 'note'\"><app-note [data]=\"question\"></app-note></div>\n          <div *ngIf=\"question.type == 'sentence'\"><app-sentence [data]=\"question\"></app-sentence></div>\n          <div *ngIf=\"question.type == 'single'\"><app-single [data]=\"question\"></app-single></div>\n          <div *ngIf=\"question.type == 'table'\"><app-table [data]=\"question\"></app-table></div>\n        </div>\n      </div>\n    </md-tab>\n  </md-tab-group>\n</div>\n\n<div class=\"right-block\">\n  <div class=\"padding-20\">\n    <audio src=\"/assets/Track01.mp3\" controls autoplay></audio>\n\n    <md-input-container class=\"margin-bottom-20\">\n      <textarea mdInput placeholder=\"Note\">You can take notes here but remember to transfer your answers to your answer sheet.</textarea>\n    </md-input-container>\n\n    <div class=\"action-block\">\n      <button md-raised-button color=\"primary\" (click)=\"viewSheet(false)\">\n        <span *ngIf=\"!isSubmited\">View Answer Sheet & Submit</span>\n        <span *ngIf=\"isSubmited\">Review</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<button class=\"timer\" md-raised-button>\n  <md-icon class=\"icon\">alarm</md-icon>\n  {{timeLeft | timer}}\n</button>\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"1\" [testId]=\"testId\"></app-test-toolbar>\n<app-loading isShow=\"{{sections ? false : true}}\"></app-loading>\n\n<md-tab-group *ngIf=\"sections\" class=\"margin-bottom-20 overall\">\n  <md-tab *ngFor=\"let section of sections\" label=\"Section {{section.section_number}}\">\n    <div class=\"padding-20\">\n      \n      <!-- Left-Block -->\n      <div class=\"left-block\">\n        <md-card class=\"left-card\">\n          <md-card-title class=\"blue title\">{{section.passage.heading | uppercase}}</md-card-title>\n          <md-card-subtitle>{{section.passage.sub_heading}}</md-card-subtitle>\n          <md-card-content>\n            <div *ngFor=\"let para of section.passage.paras\">\n              <p style=\"position:relative;\">\n                <b style=\"position:absolute;left:-15px\">{{para.mark | uppercase}}</b>\n                {{para.content}}\n              </p>\n            </div>\n          </md-card-content>\n        </md-card>\n      </div>\n      <!-- /Left-Block -->\n      \n      <!-- Right-Block -->\n      <div class=\"right-block\">\n        <!-- Block for each set of questions -->\n        <div *ngFor=\"let question of section.sub_sections\" class=\"margin-bottom-20\">\n          <div class=\"question-block blue\">\n            <p *ngIf=\"question.first == question.last\">Question {{question.first}}</p>\n            <p *ngIf=\"question.first != question.last\">\n              <span>Questions {{question.first}}</span>\n              <span *ngIf=\"question.last - question.first == 1\"> and </span>\n              <span *ngIf=\"question.last - question.first > 1\">-</span>\n              <span>{{question.last}}</span>\n            </p>  \n          </div>\n          \n          <div *ngIf=\"question.type == 'answer'\"><app-answer [data]=\"question\"></app-answer></div>\n          <div *ngIf=\"question.type == 'feature'\"><app-feature [data]=\"question\"></app-feature></div>\n          <div *ngIf=\"question.type == 'multiple'\"><app-multiple [data]=\"question\"></app-multiple></div>\n          <div *ngIf=\"question.type == 'note'\"><app-note [data]=\"question\"></app-note></div>\n          <div *ngIf=\"question.type == 'sentence'\"><app-sentence [data]=\"question\"></app-sentence></div>\n          <div *ngIf=\"question.type == 'single'\"><app-single [data]=\"question\"></app-single></div>\n          <div *ngIf=\"question.type == 'table'\"><app-table [data]=\"question\"></app-table></div>\n\n          <div *ngIf=\"question.type == 'true-false'\">\n            <app-true-false [data]=\"question\"></app-true-false>\n          </div>\n          <div *ngIf=\"question.type == 'heading'\">\n            <app-heading [data]=\"question\"></app-heading>\n          </div>\n          <div *ngIf=\"question.type == 'summary-select'\">\n            <app-summary-select [data]=\"question\"></app-summary-select>\n          </div>\n          <div *ngIf=\"question.type == 'ending'\">\n            <app-ending [data]=\"question\"></app-ending>\n          </div>\n          <div *ngIf=\"question.type == 'information'\">\n            <app-information [data]=\"question\"\n              [sectionNumber]=\"section.section_number\"></app-information>\n          </div>\n        </div>\n\n        <div class=\"action-block\">\n          <button md-raised-button color=\"primary\" (click)=\"viewSheet(false)\">\n            <span *ngIf=\"!isSubmited\">View Answer Sheet & Submit</span>\n            <span *ngIf=\"isSubmited\">Review</span>\n          </button>\n        </div>\n      </div>\n      <!-- /Right-Block -->\n\n    </div>\n  </md-tab>\n</md-tab-group>\n\n<button class=\"timer\" md-raised-button>\n  <md-icon class=\"icon\">alarm</md-icon>\n  {{timeLeft | timer}}\n</button>\n"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"3\" [testId]=\"testId\"></app-test-toolbar>\n<app-loading isShow=\"{{data ? false : true}}\"></app-loading>\n\n<div class=\"padding-20 overall\">\n  <div class=\"left-block\" *ngIf=\"data\">\n    <md-card>\n      <md-card-title class=\"primary-color center\">Part 1</md-card-title>\n      <md-card-subtitle>The examiner asks the candidate about him/herself, his/her home, work or studies and other familier topics.</md-card-subtitle>\n      <md-card-content>\n        <div *ngFor=\"let topic of data.part_1.topics\">\n          <p class=\"topic primary-color\">{{topic.title}}</p>\n          <ul>\n            <li *ngFor=\"let question of topic.questions\">{{question}}</li>\n          </ul>\n        </div>\n      </md-card-content>\n    </md-card>\n\n    <md-card>\n      <md-card-title class=\"primary-color center\">Part 2</md-card-title>\n      <md-card-subtitle></md-card-subtitle>\n      <md-card-content>\n        <p>You will have to talk about the topic for one to two minutes.</p>\n        <p>You have one minute to think about what you are going to say.</p>\n        <p>You can make some notes to help you if you wish.</p>\n        <div class=\"box\">\n          <p>{{data.part_2.question}}</p>\n          <p>You should say</p>\n          <ul>\n            <li *ngFor=\"let clue of data.part_2.clues\">{{clue}}</li>\n          </ul>\n          <p>{{data.part_2.final_clue}}</p>\n        </div>\n      </md-card-content>\n    </md-card>\n\n    <md-card>\n      <md-card-title class=\"primary-color center\">Part 3</md-card-title>\n      <md-card-subtitle>Discussion topics</md-card-subtitle>\n      <md-card-content>\n        <!-- <p>Discussion topics:</p> -->\n        <div *ngFor=\"let topic of data.part_3.topics\">\n          <p class=\"topic primary-color\">{{topic.title}}</p>\n          <i>Example questions:</i>\n          <p *ngFor=\"let question of topic.questions\">{{question}}</p>\n        </div>\n      </md-card-content>\n    </md-card>\n  </div>\n\n  <div class=\"right-block\">\n    <md-card>\n      <md-card-title class=\"primary-color\">Your speaking file</md-card-title>\n      <md-card-content>\n        <audio src=\"/uploads/{{audioUrl}}\" controls></audio>\n        <p>Make sure your audio file is less than 5MB.</p>\n        <input class=\"file\" type=\"file\" accept=\".mp3\" ng2FileSelect [uploader]=\"uploader\" />\n\n        <div [ngSwitch]=\"uploader.queue.length && !uploader.queue[uploader.queue.length - 1].isUploaded && !uploader.queue[uploader.queue.length - 1].isUploading\">\n          <button *ngSwitchCase=\"true\" md-raised-button (click)=\"upload()\" color=\"primary\">Upload</button>\n          <button *ngSwitchCase=\"false\" [disabled]=\"true\" md-raised-button color=\"primary\">\n            <span [ngSwitch]=\"!uploader.queue.length\">\n              <span *ngSwitchCase=\"true\">Upload</span>\n              <span *ngSwitchCase=\"false\">\n                <span [ngSwitch]=\"uploader.queue[uploader.queue.length - 1].isUploading\">\n                  <span *ngSwitchCase=\"true\">Uploading...</span>\n                  <span *ngSwitchCase=\"false\">Uploaded</span>\n                </span>\n              </span>\n            </span>\n          </button>\n        </div>\n\n      </md-card-content>\n    </md-card>\n  </div>\n</div>\n"

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"2\" [testId]=\"testId\"></app-test-toolbar>\n<app-loading isShow=\"{{data ? false : true}}\"></app-loading>\n\n<div class=\"padding-20 overall\">\n  <div class=\"left-block\" *ngIf=\"data\">\n    <md-card class=\"left-card\">\n      <md-card-title class=\"primary-color center\">Writing Task 1</md-card-title>\n      <md-card-subtitle>You should spend about 20 minutes on this task.</md-card-subtitle>\n      <md-card-content>\n        <table class=\"format-table\"><tr><td><p *ngFor=\"let text of data.task_1.text\">{{text}}</p></td></tr></table>\n        <p>Write at least 150 words.</p>\n        <div class=\"space-20\"></div>\n        <img src=\"http://content.ieltsonlinetests.com/fileman/Uploads/Images/ielts/practice%203/percentage-of-water-used-for-different-purposes.png\">\n      </md-card-content>\n    </md-card>\n\n    <md-card class=\"left-card\">\n      <md-card-title class=\"primary-color center\">Writing Task 2</md-card-title>\n      <md-card-subtitle>You should spend about 40 minutes on this task.</md-card-subtitle>\n      <md-card-content>\n        <p>Write about the following topic:</p>\n        <table class=\"format-table\"><tr><td><p *ngFor=\"let text of data.task_2.text\">{{text}}</p></td></tr></table>\n        <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>\n        <p>Write at least 250 words.</p>\n      </md-card-content>\n    </md-card>\n  </div>\n\n  <div class=\"right-block\">\n    <md-input-container class=\"margin-bottom-50\">\n      <textarea mdInput [(ngModel)]=\"task1\" placeholder=\"Task 1\"></textarea>\n    </md-input-container>\n\n    <md-input-container class=\"margin-bottom-50\">\n      <textarea mdInput [(ngModel)]=\"task2\" placeholder=\"Task 2\"></textarea>\n    </md-input-container>\n\n    <div class=\"action-block margin-bottom-20\">\n      <button md-raised-button (click)=\"submit()\" [disabled]=\"isDisabled()\" color=\"primary\">\n        <span *ngIf=\"!isDisabled() || !isSubmitted\">Submit</span>\n        <span *ngIf=\"isSubmitted && isDisabled()\">Submitted</span>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(533);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = (function () {
    function AccountService(fb, userSv) {
        this.fb = fb;
        this.userSv = userSv;
        this.apiUrl = '/me?fields=first_name,name,picture,email';
    }
    AccountService.prototype.init = function () {
        var fbParams = {
            // appId: '1084564141677221',
            appId: __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].appId,
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        };
        this.fb.init(fbParams);
    };
    AccountService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.login().then(function (value) {
                _this.fb.api(_this.apiUrl).then(function (_value) {
                    _this.userSv.saveUser(_value).then(function (value) {
                        resolve(_value);
                    }, function (reason) {
                        _this.logout();
                        reject(reason);
                    });
                }, function (reason) {
                    _this.logout();
                    reject(reason);
                });
            }, function (reason) { return reject(reason); });
        });
    };
    AccountService.prototype.checkStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.getLoginStatus().then(function (value) {
                if (value.status === 'connected') {
                    _this.fb.api(_this.apiUrl).then(function (_value) {
                        resolve(_value);
                    }, function (reason) {
                        // this.logout();
                        reject(reason);
                    });
                }
                else {
                    resolve(undefined);
                }
            }, function (reason) { return reject(reason); });
        });
    };
    AccountService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.logout().then(function (value) {
                resolve(value);
            }, function (reason) { return reject(reason); });
        });
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__["FacebookService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__["FacebookService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], AccountService);
    return AccountService;
    var _a, _b;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/account.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
var GlobalService = (function () {
    function GlobalService() {
    }
    // Online
    GlobalService.url = '';
    GlobalService.appId = '1084564141677221';
    return GlobalService;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/global.service.js.map

/***/ })

},[949]);
//# sourceMappingURL=main.bundle.js.map