webpackJsonp([0,3],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__(45);
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
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/skill/find-one/' + skill + '/' + testId).subscribe(function (response) {
                resolve(response.json());
            });
        });
    };
    GetDataService.prototype.getDataForEachType = function () {
        var data = [{
                "section_number": "feature",
                "passage": {
                    "image": "",
                    "heading": "Collecting Ant Specimens 8-4-3",
                    "paras": [{
                            "content": "This book will provide a detailed examination of the Little Ice Age..."
                        }]
                },
                "sub_sections": [{
                        "first": 31,
                        "last": 36,
                        "type": "feature",
                        "duplicatable": false,
                        "des": "Classify the following statements as referring to",
                        "features": ["hand colleting", "using bait", "sampling ground litter", "using a pitfall trap"],
                        "text": [
                            "It is preferable to take specimens from groups of ants.",
                            "It is particularly effective for wet habitats.",
                            "It is a good method for species which are hard to find.",
                            "Little time and efford is required.",
                            "Separate containers are used for individual specimens.",
                            "Non-alcoholic preservative should be used."
                        ],
                    }]
            }, {
                "section_number": "Summary - Select",
                "passage": {
                    "image": "",
                    "heading": "Summary Select 8-2-2",
                    "paras": [{
                            "content": "This book will provide a detailed examination of the Little Ice Age..."
                        }]
                },
                "sub_sections": [{
                        "first": 18,
                        "last": 22,
                        "type": "summary-select",
                        // "source": "select",
                        "duplicatable": true,
                        "heading": "Weather during the Little Ice Age",
                        "paras": [
                            "Documentation of past weather conditions is limited: our main sources of knowledge of conditions in the distant past are [] and []. ",
                            "We can deduce that Little Ice Age was a time of [], rather than of consistent freezing. Within it there were some periods of very cold winters, others of [] and heavy rain, and yet others that saw [] with no rain at all."
                        ],
                        "words": ["climatic shifts", "ice cores", "tree rings", "glaciers", "interactions", "weather observations", "heat waves", "storms", "written accounts"]
                    }]
            }, {
                "section_number": "Summary - Text",
                "passage": {
                    "image": "",
                    "heading": "Great Migrations 11-3-2",
                    "paras": [{
                            "content": "Animal migration, however it is defined, is far more than just the movement of animals. It can loosely be described as travel that takes place at regular intervals - often in an annual cycle - that may involve many members of a species, and is rewarded only after a long journey. It suggests inherited instinct. The biologist Hugh Dingle has identified five characteristics that apply, in varying degrees and combinations, to all migrations. They are prolonged movements that carry animals outside familiar habitats; they tend to be linear, not zigzaggy; they involve special behaviours concerning preparation (such as overfeeding) and arrival; they demand special allocations of energy. And one more: migrating animals maintain an intense attentiveness to the greater mission, which keeps them undistracted by temptations and undeterred by challenges that would turn other animals aside."
                        }]
                },
                "sub_sections": [{
                        "first": 23,
                        "last": 26,
                        "type": "summary",
                        // "source": "text",
                        "word_limit": 1,
                        "number_limit": 0,
                        "heading": "The migration of pronghorns",
                        "paras": [
                            "Pronghorns rely on their eyesight and [] to population’s summer habitat is a national park, and their winter home is on the [] where they go to avoid the danger presented by the snow at that time of year.",
                            "However, their route between these two areas contains three [].",
                            "One problem is the construction of new homes in a narrow [] of land on the pronghorns’ route."
                        ]
                    }]
            }, {
                "section_number": "multi",
                "passage": {
                    "image": "http://abc.com/img.jpg",
                    "heading": "A neuroscientist reveals how to think differently 9-2-1",
                    "paras": [{
                            "mark": "a",
                            "content": "Hearing impairment or other auditory function deficit in young children can have a major impact on their development of speech and communication, resulting in a detrimental effect on their ability to learn at school. This is likely to have major consequences for the individual and the population as a whole. The New Zealand Ministry of Health has found from research carried out over two decades that 6-10% of children in that country are affected by hearing loss."
                        }, {
                            "mark": "b",
                            "content": "A preliminary study in New Zealand has shown that classroom noise presents a major concern for teachers and pupils. Modern teaching practices, the organisation of desks in the classroom, poor classroom acoustics, and mechanical means of ventilation such as air-conditioning units all contribute to the number of children unable to comprehend the teacher's voice. Education researchers Nelson and Soli have also suggested that recent trends in learning often involve collaborative interaction of multiple minds and tools as much as individual possession of information. This all amounts to heightened activity and noise levels, which have the potential to be particularly serious for children experiencing auditory function deficit. Noise in classrooms can only exacerbate their difficulty in comprehending and processing verbal communication with other children and instructions from the teacher."
                        }]
                },
                "sub_sections": [{
                        "first": 11,
                        "last": 12,
                        "type": "multiple",
                        "limit": 2,
                        "des": "The list below includes factors contributing to classroom noise.",
                        "choices": [
                            "current teaching methods",
                            "echoing corridors",
                            "cooling systems",
                            "large class sizes",
                            "loud-voiced teachers",
                            "playground games"
                        ]
                    }]
            }, {
                "section_number": "information",
                "passage": {
                    "image": "",
                    "heading": "Information theory - the big idea - 9-3-3",
                    "sub_heading": "Information theory lies at the heart of everything - from DVD players and the genetic code of DNA to the physics of the univers at its most fundamental. It has been central to the development of the science of communication, which enables data to be sent electronically and has therefore had a major impact on our lives",
                    "paras": [{
                            "mark": "a",
                            "content": "In April 2002 an event took...",
                        }, {
                            "mark": "b",
                            "content": "In April 2002 an event took...",
                        }, {
                            "mark": "c",
                            "content": "In April 2002 an event took...",
                        }, {
                            "mark": "d",
                            "content": "In April 2002 an event took...",
                        }, {
                            "mark": "e",
                            "content": "In April 2002 an event took...",
                        }, {
                            "mark": "f",
                            "content": "In April 2002 an event took...",
                        }]
                },
                "sub_sections": [{
                        "first": 27,
                        "last": 32,
                        "type": "information",
                        "number_of_paras": 6,
                        "text": [
                            "an explaination of the factors affecting the transmission of information",
                            "an example of how unnecessary information can be omitted",
                            "a reference to Shannon's attitude to fame",
                            "details of a machine capable of interpreting incomplete information",
                            "a detailed account of an incident involving information theory",
                            "a reference to what Shannon initially intended to achieve in his research"
                        ]
                    }]
            }, {
                "section_number": "ending",
                "passage": {
                    "image": "",
                    "heading": "A neuroscientist reveals how to think differently 9-2-3",
                    "paras": [{
                            "content": "In the last decade a revolution has occurred in the way..."
                        }]
                },
                "sub_sections": [{
                        "first": 38,
                        "last": 40,
                        "type": "ending",
                        "duplicatable": true,
                        "sentences": [
                            "Thinking like a successful iconoclast is demanding because it",
                            "The concept of the social brain is useful to iconoclasts because it",
                            "Iconoclasts are generally an asset because their way of thinking",
                        ],
                        "endings": [
                            "requires both perceptual and social intelligence skills.",
                            "focuses on how groups decide on an action.",
                            "works in many fields, both artistic and scientific.",
                            "leaves one open to criticism and rejection.",
                            "involves understanding how organisations manage people.",
                        ]
                    }]
            }, {
                "section_number": "sentence",
                "passage": {
                    "image": "",
                    "heading": "Blah",
                    "paras": [{
                            "content": "Animal migration, however it is defined, is far more than just the movement of animals. It can loosely be described as travel that takes place at regular intervals - often in an annual cycle - that may involve many members of a species, and is rewarded only after a long journey. It suggests inherited instinct. The biologist Hugh Dingle has identified five characteristics that apply, in varying degrees and combinations, to all migrations. They are prolonged movements that carry animals outside familiar habitats; they tend to be linear, not zigzaggy; they involve special behaviours concerning preparation (such as overfeeding) and arrival; they demand special allocations of energy. And one more: migrating animals maintain an intense attentiveness to the greater mission, which keeps them undistracted by temptations and undeterred by challenges that would turn other animals aside."
                        }]
                },
                "sub_sections": [{
                        "first": 38,
                        "last": 40,
                        "type": "sentence",
                        "word_limit": 2,
                        "number_limit": 0,
                        "sentences": [
                            "Von Frisch discovered the difference between dance types by changing the position of the [].",
                            "The dance outside the hive points in the direction of the [].",
                            "The angle of the dance from the vertical shows the angle of the food from the []."
                        ]
                    }]
            }, {
                "section_number": "true-false",
                "passage": {
                    "image": "http://abc.com/img.jpg",
                    "heading": "William Henry Perkin 9-1-1",
                    "sub_heading": "The man who invented synthetic dyes",
                    "paras": [{
                            "content": "William Henry Perkin was born on March 12,1838, in London, England."
                        }]
                },
                "sub_sections": [{
                        "first": 1,
                        "last": 7,
                        "type": "true-false",
                        "options": "tf",
                        "text": [
                            "Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.", "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.", "Perkin employed August Wilhelm Hofmann as his assistant.",
                            "Perkin was still young when he made the discovery that made him rich and famous.",
                            "The trees from which quinine is derived grow only in South America.",
                            "Perkin hoped to manufacture a drug from a coal tar waste product.",
                            "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur."
                        ]
                    }, {
                        "first": 1,
                        "last": 7,
                        "type": "true-false",
                        "options": "yn",
                        "text": [
                            "Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.", "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.", "Perkin employed August Wilhelm Hofmann as his assistant.",
                            "Perkin was still young when he made the discovery that made him rich and famous.",
                            "The trees from which quinine is derived grow only in South America.",
                            "Perkin hoped to manufacture a drug from a coal tar waste product.",
                            "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur."
                        ]
                    }]
            }, {
                "section_number": "Short-answer questions",
                "passage": {
                    "image": "http://abc.com/img.jpg",
                    "heading": "William Henry Perkin 9-1-1",
                    "sub_heading": "The man who invented synthetic dyes",
                    "paras": [{
                            "content": "William Henry Perkin was born on March 12,1838, in London, England."
                        }]
                },
                "sub_sections": [{
                        "first": 8,
                        "last": 13,
                        "type": "answer",
                        "word_limit": 2,
                        "number_limit": 0,
                        "text": [
                            "Before Perkin’s discovery, with what group in society was the colour purple associated?",
                            "What potential did Perkin immediately understand that his new dye had?",
                            "What was the name finally used to refer to the first colour Perkin invented?",
                            "What was the name of the person Perkin consulted before setting up his own dye works?",
                            "In what country did Perkin’s newly invented colour first become fashionable?",
                            "According to the passage, which disease is now being targeted by researchers using synthetic dyes?",
                        ]
                    }]
            }, {
                "section_number": "heading",
                "passage": {
                    "image": "http://abc.com/img.jpg",
                    "heading": "The little ice age 8-2-2",
                    "sub_heading": "",
                    "paras": [{
                            "content": "The question of whether we are alone in the Universe has haunted humanity for centuries, but we may now stand poised on the brink of the answer to that question, as we search for radio signals from other intelligent civilisations. This search, often known by the acronym SETI (search for extra-terrestrial intelligence], is a difficult one. Although groups around the world have been searching intermittently for three decades, it is only now that we have reached the level of technology where we can make a determined attempt to search all nearby stars for any sign of life."
                        }, {
                            "mark": "a",
                            "content": "The primary reason for the search is basic curiosity - the same curiosity about the natural world that drives all pure science. We want to know whether we are alone in the Universe. We want to know whether life evolves naturally if given the right conditions, or whether there is something very special about the Earth to have fostered the variety of life forms that we see around us on the planet. The simple detection of a radio signal will be sufficient to answer this most basic of all questions. In this sense, SETI is another cog in the machinery of pure science which is continually pushing out the horizon of our knowledge. However, there are other reasons for being interested in whether life exists elsewhere. For example, we have had civilisation on Earth for perhaps only a few thousand years, and the threats of nuclear war and pollution over the last few decades have told us that our survival may be tenuous. Will we last another two thousand years or will we wipe ourselves out? Since the lifetime of a planet like ours is several billion years, we can expect that, if other civilisations do survive in our galaxy, their ages will range from zero to several billion years. Thus any other civilisation that we hear from is likely to be far older, on average, than ourselves. The mere existence of such a civilisation will tell us that long-term survival is possible, and gives us some cause for optimism. It is even possible that the older civilisation may pass on the benefits of their experience in dealing with threats to survival such as nuclear war and global pollution, and other threats that we haven’t yet discovered."
                        }, {
                            "mark": "b",
                            "content": "In discussing whether we are alone, most SETI scientists adopt two ground rules. First, UFQs (Unidentified Flying Objects) are generally ignored since most scientists don’t consider the evidence for them to be strong enough to bear serious consideration (although it is also important to keep an open mind in case any really convincing evidence emerges in the future). Second, we make a very conservative assumption that we are looking for a life form that is pretty well like us, since if it differs radically from us we may well not recognise it as a life form, quite apart from whether we are able to communicate with it. In other words, the life form we are looking for may well have two green heads and seven fingers, but it will nevertheless resemble us in that it should communicate with its fellows, be interested in the Universe, live on a planet orbiting a star like our Sun, and perhaps most restrictively, have a chemistry, like us, based on carbon and water."
                        }, {
                            "mark": "c",
                            "content": "Even when we make these assumptions, our understanding of other life forms is still severely limited. We do not even know, for example, how many stars have planets, and we certainly do not know how likely it is that life will arise naturally, given the right conditions. However, when we look at the 100 billion stars in our galaxy (the Milky Way), and 100 billion galaxies in the observable Universe, it seems inconceivable that at least one of these planets does not have a life form on it; in fact, the best educated guess we can make, using the little that we do know about the conditions for carbon-based life, leads us to estimate that perhaps one in 100,000 stars might have a life-bearing planet orbiting it. That means that our nearest neighbours are perhaps 100 light years away, which is almost next door in astronomical terms."
                        }]
                },
                "sub_sections": [{
                        "first": 14,
                        "last": 17,
                        "type": "heading",
                        "headings": [
                            "Seeking the transmission of radio signals from planets",
                            "Appropriate responses to signals from other civilisations",
                            "Vast distances to Earth’s closest neighbours",
                            "Assumptions underlying the search for extra-terrestrial intelligence",
                            "Reasons for the search for extra-terrestrial intelligence",
                            "Knowledge of extra-terrestrial life forms",
                            "Likelihood of life on other planets",
                            "People have always responded to climate change",
                            "Enough food at last"
                        ],
                        "paras": [{
                                "char": "a",
                                "answer": 8
                            }, {
                                "char": "b",
                            }, {
                                "char": "c",
                                "answer": 5
                            }, {
                                "char": "d",
                            }, {
                                "char": "e",
                            }, {
                                "char": "f",
                            }]
                    }]
            }, {
                "section_number": "single",
                "passage": {
                    "image": "http://abc.com/img.jpg",
                    "heading": "A neuroscientist reveals how to think differently 9-2-3",
                    "paras": [{
                            "content": "In the last decade a revolution has occurred In the way that scientists think about the brain."
                        }, {
                            "content": "We now know that the decisions humans make can be traced to the firing patterns of neurons in specific parts of the brain. These discoveries have led to the field known as neuroeconomics, which studies the brain's secrets to success in an economic environment that demands innovation and being able to do things differently from competitors. A brain that can do this is an iconoclastic one. Briefly, an iconoclast is a person who does something that others say can't be done."
                        }]
                },
                "sub_sections": [{
                        "first": 27,
                        "last": 31,
                        "type": "single",
                        "questions": [{
                                "text": "Neuroeconomics is a field of study which seeks to",
                                "choices": [
                                    "cause a change in how scientists understand brain chemistry.",
                                    "understand how good decisions are made in the brain.",
                                    "understand how the brain is linked to achievement in competitive fields.",
                                    "trace the specific firing patterns of neurons in different areas of the brain."
                                ]
                            }, {
                                "text": "According to the writer, iconoclasts are distinctive because",
                                "choices": [
                                    "they create unusual brain circuits.",
                                    "their brains function differently.",
                                    "their personalities are distinctive.",
                                    "they make decisions easily."
                                ]
                            }, {
                                "text": "According to the writer, the brain works efficiently because",
                                "choices": [
                                    "it uses the eyes quickly.",
                                    "it interprets data logically.",
                                    "it generates its own energy.",
                                    "it relies on previous events."
                                ]
                            }]
                    }]
            }];
        return data;
    };
    GetDataService.prototype.getReadingTest = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            // console.log(id);
            _this.http.get('http://localhost:3000/api/readings/' + id).subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    GetDataService.prototype.getReadingOffline = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/assets/read-data.json').subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    GetDataService.prototype.getListeningOffline = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/assets/listen-data.json').subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    GetDataService.prototype.getWriteOffline = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/assets/write-data.json').subscribe(function (result) {
                resolve(result.json());
            });
        });
    };
    GetDataService.prototype.getSpeakOffline = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/assets/speak-data.json').subscribe(function (result) {
                resolve(result.json());
            });
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__(45);
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
    function UserService(http, global) {
        this.http = http;
        this.global = global;
    }
    UserService.prototype.saveUser = function (data) {
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/user/save', data).subscribe(function (response) {
            console.info(response);
        });
    };
    UserService.prototype.saveAttempt = function (_userId, _testId, _skill, _score) {
        var data = {
            userId: _userId,
            testId: _testId,
            skill: _skill,
            score: _score
        };
        console.log(data);
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/user/save-attempt', data).subscribe(function (response) {
            console.info(response);
        });
    };
    UserService.prototype.findOne = function (userId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */].url + '/api/user/find-one/' + userId).subscribe(function (response) {
                resolve(response.json());
            });
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/user.service.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { IReadingComponent } from '../i-reading/i-reading.component';
var FeatureComponent = (function () {
    // duplicatable: boolean = true;
    function FeatureComponent(converterService) {
        this.converterService = converterService;
        this.answers = [];
        this.mark = 'letter';
    }
    FeatureComponent.prototype.ngOnInit = function () {
    };
    FeatureComponent.prototype.getAnswers = function () {
        var res = [];
        for (var i = 0; i < this.answers.length; i++) {
            res[i] = this.converterService.numberToLetter(this.answers[i]);
        }
        return res;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FeatureComponent.prototype, "data", void 0);
    FeatureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__(864),
            styles: [__webpack_require__(839)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], FeatureComponent);
    return FeatureComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/feature.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultipleComponent = (function () {
    function MultipleComponent(snackBar, converterService) {
        this.snackBar = snackBar;
        this.converterService = converterService;
        this.answers = [];
    }
    MultipleComponent.prototype.ngOnInit = function () {
        var length = this.data['choices'].length;
    };
    MultipleComponent.prototype.checkLimit = function () {
        var count = 0;
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i]) {
                count++;
            }
        }
        if (this.numberOfChecked == this.data['limit'] && count == this.data['limit'] + 1) {
            console.warn('Limit');
            this.snackBar.open('Be careful with the choice limit!', 'OK', {
                duration: 2000
            });
        }
        this.numberOfChecked = count;
    };
    MultipleComponent.prototype.getAnswers = function () {
        var res = [];
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i]) {
                res.push(this.converterService.numberToLetter(i + 1));
            }
        }
        return res;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MultipleComponent.prototype, "data", void 0);
    MultipleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multiple',
            template: __webpack_require__(865),
            styles: [__webpack_require__(840)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _b) || Object])
    ], MultipleComponent);
    return MultipleComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/multiple.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteComponent = (function () {
    function NoteComponent(converterService) {
        this.converterService = converterService;
        this.displayParas = [];
        this.answers = [];
    }
    NoteComponent.prototype.ngOnInit = function () {
        var paras = this.data['paras'];
        this.displayParas = this.converterService.paragraphToArray(paras, this.data['first']);
        for (var i = 0; i < paras.length; i++) {
            this.answers[i] = [];
        }
    };
    NoteComponent.prototype.getAnswers = function () {
        var res = [];
        for (var i = 0; i < this.displayParas.length; i++) {
            for (var j = 0; j < this.displayParas[i].length; j++) {
                if (this.displayParas[i][j]['isInput']) {
                    res.push(this.answers[i][j]);
                }
            }
        }
        return res;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NoteComponent.prototype, "data", void 0);
    NoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(866),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], NoteComponent);
    return NoteComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/note.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleComponent = (function () {
    function SingleComponent() {
        this.answers = [];
    }
    SingleComponent.prototype.ngOnInit = function () {
        var noOfQues = this.data['last'] - this.data['first'] + 1;
        if (this.data['questions'].length != noOfQues) {
            console.error('single :: wrong number of questions, required ' + noOfQues);
        }
    };
    SingleComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SingleComponent.prototype, "data", void 0);
    SingleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(867),
            styles: [__webpack_require__(842)]
        }), 
        __metadata('design:paramtypes', [])
    ], SingleComponent);
    return SingleComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/single.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = (function () {
    function TableComponent(converterService) {
        this.answers = [];
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TableComponent.prototype, "data", void 0);
    TableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(868),
            styles: [__webpack_require__(843)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], TableComponent);
    return TableComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/table.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_types_feature_feature_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_types_multiple_multiple_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_types_note_note_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_types_single_single_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_types_table_table_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialogs_submit_dialog__ = __webpack_require__(463);
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
    function CommonComponent(dialog, snackBar, getDataService, activatedRoute, global) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.getDataService = getDataService;
        this.activatedRoute = activatedRoute;
        this.global = global;
        this.data = [];
        this.keys = [];
        this.isSubmited = false;
        this.displayParas = [];
        this.timer = 3600;
    }
    CommonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testId = this.activatedRoute.snapshot.params['testId'];
        this.getDataService.findOne(this.testId, this.skill).then(function (result) {
            _this.data = result['sections'];
            _this.keys = result['keys'];
            if (_this.keys.length != 40) {
                console.error('keys.length <> 40');
            }
        });
        this.setTimer();
    };
    CommonComponent.prototype.setTimer = function () {
        // let setting = setInterval(() => {
        //   this.timer --;
        //   if (this.timer == 1800) {
        //     this.snackBar.open('30 minutes left!', 'OK', { duration: 2000 });
        //   } else if (this.timer == 600) {
        //     this.snackBar.open('10 minutes left!', 'OK', { duration: 2000 });
        //   } else if (this.timer <= 0) {
        //     clearInterval(setting);
        //     this.viewSheet(true);
        //   }
        // }, 1);
    };
    CommonComponent.prototype.getAnswers = function () {
        var arr = [];
        arr = arr.concat(this.multipleComponent.toArray());
        arr = arr.concat(this.noteComponent.toArray());
        arr = arr.concat(this.singleComponent.toArray());
        arr = arr.concat(this.tableComponent.toArray());
        // Lay du lieu
        var overall = [];
        for (var i = 0; i < arr.length; i++) {
            var data = arr[i].getAnswers();
            for (var t = 0; t <= arr[i].data.last - arr[i].data.first; t++) {
                overall.push({
                    no: arr[i].data.first + t,
                    ans: data[t]
                });
            }
        }
        // Sap xep lai
        overall.sort(this.compare);
        if (overall.length != 40) {
            console.error('overall.length != 40');
        }
        return overall;
    };
    CommonComponent.prototype.viewSheet = function (isTimeout) {
        var _this = this;
        var _data = {
            answers: this.getAnswers(),
            keys: this.keys,
            isSubmited: this.isSubmited,
            // isTimeout: isTimeout,
            skill: this.skill,
            testId: this.testId
        };
        // Mo dialog
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__dialogs_submit_dialog__["a" /* SubmitDialog */], {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5__common_types_feature_feature_component__["a" /* FeatureComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _a) || Object)
    ], CommonComponent.prototype, "featureComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_6__common_types_multiple_multiple_component__["a" /* MultipleComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _b) || Object)
    ], CommonComponent.prototype, "multipleComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_7__common_types_note_note_component__["a" /* NoteComponent */]), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _c) || Object)
    ], CommonComponent.prototype, "noteComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_8__common_types_single_single_component__["a" /* SingleComponent */]), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _d) || Object)
    ], CommonComponent.prototype, "singleComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_9__common_types_table_table_component__["a" /* TableComponent */]), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _e) || Object)
    ], CommonComponent.prototype, "tableComponent", void 0);
    CommonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-common',
            template: __webpack_require__(880),
            styles: [__webpack_require__(855)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]) === 'function' && _k) || Object])
    ], CommonComponent);
    return CommonComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/common.component.js.map

/***/ }),

/***/ 44:
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
    ConverterService.prototype.paragraphToArray = function (paragraphs, first) {
        var result = [];
        for (var i = 0; i < paragraphs.length; i++) {
            result[i] = [];
            var paragraph = paragraphs[i];
            while (paragraph.includes('[]')) {
                paragraph = paragraph.replace('[]', '*{}*');
            }
            var splitedPara = paragraph.split('*');
            for (var j = 0; j < splitedPara.length; j++) {
                if (splitedPara[j] == '{}') {
                    result[i].push({ isInput: true, data: first });
                    first++;
                }
                else {
                    result[i].push({ isInput: false, data: splitedPara[j] });
                }
            }
        }
        // console.warn(result);
        return result;
    };
    ConverterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ConverterService);
    return ConverterService;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/converter.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
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
var GlobalService = (function () {
    function GlobalService() {
        // static url: string = 'http://localhost:3000';
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
    }
    GlobalService.prototype.setFb = function (_user) {
        // this.userSv.findOne(_user.id).then(result => {
        this.user.next(_user);
        // });
    };
    GlobalService.url = '';
    GlobalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GlobalService);
    return GlobalService;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/global.service.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_user_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_global_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__);
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
    function AppComponent(fb, userService, global) {
        this.fb = fb;
        this.userService = userService;
        this.global = global;
        this.fbConnected = false;
        var fbParams = {
            appId: '1084564141677221',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        };
        this.fb.init(fbParams);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showFbLoginStatus();
    };
    AppComponent.prototype.fbLogin = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            console.log(response);
            _this.fb.api('/me?fields=first_name,name,picture,email').then(function (data) {
                _this.userService.saveUser(data);
                _this.fbConnected = true;
                _this.user = data;
                _this.global.setFb(data);
            });
        }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.showFbLoginStatus = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (response) {
            console.log(response);
            if (response.status === 'connected') {
                _this.fbConnected = true;
                _this.fb.api('/me?fields=first_name,name,picture,email').then(function (data) {
                    _this.user = data;
                    _this.global.setFb(data);
                });
            }
        });
    };
    AppComponent.prototype.fbLogout = function () {
        var _this = this;
        this.fb.logout().then(function (value) {
            console.log(value);
            _this.fbConnected = false;
            _this.user = undefined;
            _this.global.setFb(undefined);
        }, function (reason) { return console.error(reason); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(863),
            styles: [__webpack_require__(838)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__["FacebookService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_facebook_sdk__["FacebookService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_global_service__["a" /* GlobalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_global_service__["a" /* GlobalService */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__(45);
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
    function ResultComponent(userSv, global) {
        this.userSv = userSv;
        this.global = global;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.global.user.subscribe(function (_user) {
            if (_user) {
                _this.userSv.findOne(_user.id).then(function (result) {
                    _this.user = result;
                });
            }
        });
    };
    ResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(871),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]) === 'function' && _b) || Object])
    ], ResultComponent);
    return ResultComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/result.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service__ = __webpack_require__(683);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(testService) {
        this.testService = testService;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testService.find().then(function (result) {
            _this.tests = result;
        });
        this.cardWidth = (document.body.clientWidth / 4) + 'px';
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(872),
            styles: [__webpack_require__(847)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */]) === 'function' && _a) || Object])
    ], TestComponent);
    return TestComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/test.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerComponent = (function () {
    function AnswerComponent() {
        this.answers = [];
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    AnswerComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AnswerComponent.prototype, "data", void 0);
    AnswerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(873),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [])
    ], AnswerComponent);
    return AnswerComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/answer.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EndingComponent = (function () {
    function EndingComponent(converterService) {
        this.converterService = converterService;
        this.answers = [];
        this.mark = 'letter';
    }
    EndingComponent.prototype.ngOnInit = function () {
    };
    EndingComponent.prototype.getAnswers = function () {
        var res = [];
        for (var i = 0; i < this.answers.length; i++) {
            res[i] = this.converterService.numberToLetter(this.answers[i]);
        }
        return res;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EndingComponent.prototype, "data", void 0);
    EndingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ending',
            template: __webpack_require__(874),
            styles: [__webpack_require__(849)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], EndingComponent);
    return EndingComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/ending.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadingComponent = (function () {
    function HeadingComponent(converterService) {
        this.converterService = converterService;
        this.answers = [];
        this.duplicatable = false;
        this.mark = 'roman';
    }
    HeadingComponent.prototype.ngOnInit = function () {
        var first = this.data['first'];
        for (var i = 0; i < this.data['paras'].length; i++) {
            if (this.data['paras'][i]['answer'] == undefined) {
                this.data['paras'][i]['no'] = first;
                first++;
            }
        }
    };
    HeadingComponent.prototype.getAnswerArray = function () {
        var array = this.answers.slice(0);
        for (var i = 0; i < this.data['paras'].length; i++) {
            var a = this.data['paras'][i]['answer'];
            if (a != undefined) {
                array.push(a);
            }
        }
        return array;
    };
    HeadingComponent.prototype.getAnswers = function () {
        var res = [];
        for (var i = 0; i < this.answers.length; i++) {
            var temp = '';
            if (this.answers[i]) {
                temp = this.converterService.numberToRoman(this.answers[i]);
            }
            else {
                temp = undefined;
            }
            res.push(temp);
        }
        return res;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], HeadingComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], HeadingComponent.prototype, "sectionNumber", void 0);
    HeadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heading',
            template: __webpack_require__(875),
            styles: [__webpack_require__(850)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], HeadingComponent);
    return HeadingComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/heading.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationComponent = (function () {
    function InformationComponent(converterService) {
        this.converterService = converterService;
        this.answers = [];
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
        __metadata('design:type', Object)
    ], InformationComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], InformationComponent.prototype, "sectionNumber", void 0);
    InformationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(876),
            styles: [__webpack_require__(851)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], InformationComponent);
    return InformationComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/information.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentenceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SentenceComponent = (function () {
    function SentenceComponent() {
        this.displaySens = [];
        this.answers = [];
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SentenceComponent.prototype, "data", void 0);
    SentenceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sentence',
            template: __webpack_require__(877),
            styles: [__webpack_require__(852)]
        }), 
        __metadata('design:paramtypes', [])
    ], SentenceComponent);
    return SentenceComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/sentence.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_converter_service__ = __webpack_require__(44);
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
            template: __webpack_require__(878),
            styles: [__webpack_require__(853)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_converter_service__["a" /* ConverterService */]) === 'function' && _a) || Object])
    ], SummarySelectComponent);
    return SummarySelectComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/summary-select.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrueFalseComponent; });
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
var TrueFalseComponent = (function () {
    function TrueFalseComponent() {
        this.answers = [];
    }
    TrueFalseComponent.prototype.ngOnInit = function () {
        if (this.data.options == 'tf') {
            this.options = ['true', 'false', 'not given'];
        }
        else if (this.data.options == 'yn') {
            this.options = ['yes', 'no', 'not given'];
        }
    };
    TrueFalseComponent.prototype.getAnswers = function () {
        return this.answers;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Data)
    ], TrueFalseComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], TrueFalseComponent.prototype, "sectionNumber", void 0);
    TrueFalseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-true-false',
            template: __webpack_require__(879),
            styles: [__webpack_require__(854)]
        }), 
        __metadata('design:paramtypes', [])
    ], TrueFalseComponent);
    return TrueFalseComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/true-false.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_converter_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__(45);
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
    function SubmitDialog(dialogRef, converter, userSv, global) {
        this.dialogRef = dialogRef;
        this.converter = converter;
        this.userSv = userSv;
        this.global = global;
    }
    SubmitDialog.prototype.ngOnInit = function () {
        this.data = this.dialogRef.config.data.data;
        this.testResult = this.converter.getTestResult(this.data.answers, this.data.keys);
    };
    SubmitDialog.prototype.ngOnDestroy = function () {
        this.dialogRef.close(this.data.isSubmited);
    };
    SubmitDialog.prototype.submit = function () {
        var _this = this;
        this.data.isSubmited = true;
        this.global.user.subscribe(function (user) {
            if (user != undefined) {
                _this.userSv.saveAttempt(user.id, _this.data.testId, _this.data.skill, _this.testResult.score);
            }
        });
    };
    SubmitDialog = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-submit',
            template: __webpack_require__(881),
            styles: [__webpack_require__(856)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_converter_service__["a" /* ConverterService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]) === 'function' && _d) || Object])
    ], SubmitDialog);
    return SubmitDialog;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/submit.dialog.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_converter_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_common_component__ = __webpack_require__(276);
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
    function ListeningComponent(_dialog, _snackBar, _getDataService, _activatedRoute, _global) {
        _super.call(this, _dialog, _snackBar, _getDataService, _activatedRoute, _global);
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this._getDataService = _getDataService;
        this._activatedRoute = _activatedRoute;
        this._global = _global;
        this.skill = 'listening';
    }
    ListeningComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listening',
            template: __webpack_require__(882),
            styles: [__webpack_require__(857)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */], __WEBPACK_IMPORTED_MODULE_4__services_converter_service__["a" /* ConverterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */]) === 'function' && _e) || Object])
    ], ListeningComponent);
    return ListeningComponent;
    var _a, _b, _c, _d, _e;
}(__WEBPACK_IMPORTED_MODULE_6__common_common_component__["a" /* CommonComponent */]));
//# sourceMappingURL=D:/projects/ielts-front/src/listening.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_types_feature_feature_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_types_multiple_multiple_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_types_note_note_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_types_single_single_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_types_table_table_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reading_types_answer_answer_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reading_types_ending_ending_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reading_types_heading_heading_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reading_types_information_information_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reading_types_sentence_sentence_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reading_types_summary_select_summary_select_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reading_types_true_false_true_false_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_common_component__ = __webpack_require__(276);
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
    function ReadingComponent(_dialog, _snackBar, _getDataService, _activatedRoute, _global) {
        _super.call(this, _dialog, _snackBar, _getDataService, _activatedRoute, _global);
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this._getDataService = _getDataService;
        this._activatedRoute = _activatedRoute;
        this._global = _global;
        this.skill = 'reading';
    }
    ReadingComponent.prototype.getAnswers = function () {
        var arr = [];
        arr = arr.concat(this.trueFalseComponents.toArray());
        arr = arr.concat(this.answerComponents.toArray());
        arr = arr.concat(this.headingComponents.toArray());
        arr = arr.concat(this.multipleComponents.toArray());
        arr = arr.concat(this.singleComponents.toArray());
        arr = arr.concat(this.summaryComponents.toArray());
        arr = arr.concat(this.summarySelectComponents.toArray());
        arr = arr.concat(this.endingComponents.toArray());
        arr = arr.concat(this.informationComponents.toArray());
        arr = arr.concat(this.sentenceComponents.toArray());
        arr = arr.concat(this.featureComponents.toArray());
        arr = arr.concat(this.tableComponents.toArray());
        // Lay du lieu
        var overall = [];
        for (var i = 0; i < arr.length; i++) {
            var data = arr[i].getAnswers();
            for (var t = 0; t <= arr[i].data.last - arr[i].data.first; t++) {
                overall.push({
                    no: arr[i].data.first + t,
                    ans: data[t]
                });
            }
        }
        // Sap xep lai
        overall.sort(this.compare);
        if (overall.length != 40) {
            console.error('overall.length != 40');
        }
        return overall;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5__common_types_feature_feature_component__["a" /* FeatureComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _a) || Object)
    ], ReadingComponent.prototype, "featureComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_6__common_types_multiple_multiple_component__["a" /* MultipleComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _b) || Object)
    ], ReadingComponent.prototype, "multipleComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_7__common_types_note_note_component__["a" /* NoteComponent */]), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _c) || Object)
    ], ReadingComponent.prototype, "summaryComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_8__common_types_single_single_component__["a" /* SingleComponent */]), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _d) || Object)
    ], ReadingComponent.prototype, "singleComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_9__common_types_table_table_component__["a" /* TableComponent */]), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _e) || Object)
    ], ReadingComponent.prototype, "tableComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_16__reading_types_true_false_true_false_component__["a" /* TrueFalseComponent */]), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _f) || Object)
    ], ReadingComponent.prototype, "trueFalseComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_10__reading_types_answer_answer_component__["a" /* AnswerComponent */]), 
        __metadata('design:type', (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _g) || Object)
    ], ReadingComponent.prototype, "answerComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_12__reading_types_heading_heading_component__["a" /* HeadingComponent */]), 
        __metadata('design:type', (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _h) || Object)
    ], ReadingComponent.prototype, "headingComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_15__reading_types_summary_select_summary_select_component__["a" /* SummarySelectComponent */]), 
        __metadata('design:type', (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _j) || Object)
    ], ReadingComponent.prototype, "summarySelectComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_11__reading_types_ending_ending_component__["a" /* EndingComponent */]), 
        __metadata('design:type', (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _k) || Object)
    ], ReadingComponent.prototype, "endingComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_13__reading_types_information_information_component__["a" /* InformationComponent */]), 
        __metadata('design:type', (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _l) || Object)
    ], ReadingComponent.prototype, "informationComponents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_14__reading_types_sentence_sentence_component__["a" /* SentenceComponent */]), 
        __metadata('design:type', (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _m) || Object)
    ], ReadingComponent.prototype, "sentenceComponents", void 0);
    ReadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reading',
            template: __webpack_require__(883),
            styles: [__webpack_require__(858)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _o) || Object, (typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === 'function' && _p) || Object, (typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_get_data_service__["a" /* GetDataService */]) === 'function' && _q) || Object, (typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _r) || Object, (typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]) === 'function' && _s) || Object])
    ], ReadingComponent);
    return ReadingComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
}(__WEBPACK_IMPORTED_MODULE_17__common_common_component__["a" /* CommonComponent */]));
//# sourceMappingURL=D:/projects/ielts-front/src/reading.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__ = __webpack_require__(122);
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
    function SpeakingComponent(getDataService) {
        this.getDataService = getDataService;
    }
    SpeakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getSpeakOffline().then(function (result) {
            _this.data = result;
            console.log(_this.data);
        });
    };
    SpeakingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-speaking',
            template: __webpack_require__(884),
            styles: [__webpack_require__(859)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]) === 'function' && _a) || Object])
    ], SpeakingComponent);
    return SpeakingComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/speaking.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__ = __webpack_require__(122);
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
    function WritingComponent(getDataService) {
        this.getDataService = getDataService;
    }
    WritingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getWriteOffline().then(function (result) {
            _this.data = result;
            console.log(_this.data);
        });
    };
    WritingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-writing',
            template: __webpack_require__(885),
            styles: [__webpack_require__(860)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_data_service__["a" /* GetDataService */]) === 'function' && _a) || Object])
    ], WritingComponent);
    return WritingComponent;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/writing.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 519;


/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(678);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=D:/projects/ielts-front/src/main.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skills_listening_listening_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skills_reading_reading_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_writing_writing_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills_speaking_speaking_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_test_test_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_result_result_component__ = __webpack_require__(454);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_test_test_component__["a" /* TestComponent */] },
    { path: 'test/:testId/reading', component: __WEBPACK_IMPORTED_MODULE_3__skills_reading_reading_component__["a" /* ReadingComponent */] },
    { path: 'test/:testId/listening', component: __WEBPACK_IMPORTED_MODULE_2__skills_listening_listening_component__["a" /* ListeningComponent */] },
    { path: 'test/writing', component: __WEBPACK_IMPORTED_MODULE_4__skills_writing_writing_component__["a" /* WritingComponent */] },
    { path: 'test/speaking', component: __WEBPACK_IMPORTED_MODULE_5__skills_speaking_speaking_component__["a" /* SpeakingComponent */] },
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_7__pages_result_result_component__["a" /* ResultComponent */] },
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

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_test_test_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_result_result_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__skills_reading_reading_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__skills_listening_listening_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__skills_writing_writing_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__skills_speaking_speaking_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__skills_common_common_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reading_types_true_false_true_false_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reading_types_answer_answer_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reading_types_heading_heading_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reading_types_sentence_sentence_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reading_types_ending_ending_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reading_types_information_information_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reading_types_summary_select_summary_select_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_option_list_option_list_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_types_feature_feature_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_types_multiple_multiple_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__common_types_note_note_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__common_types_single_single_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_types_table_table_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_test_toolbar_test_toolbar_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_global_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_user_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__skills_dialogs_submit_dialog__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_letter_pipe__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_timer_pipe__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_roman_pipe__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_text_number_pipe__ = __webpack_require__(681);
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





































// import { LMultipleComponent } from './listening-types/l-multiple/l-multiple.component';
// import { RMultipleComponent } from './reading-types/r-multiple/r-multiple.component';
// import { LTableComponent } from './listening-types/l-table/l-table.component';
// import { RTableComponent } from './reading-types/r-table/r-table.component';
// import { LNoteComponent } from './listening-types/l-note/l-note.component';
// import { RNoteComponent } from './reading-types/r-note/r-note.component';
// import { LSingleComponent } from './listening-types/l-single/l-single.component';
// import { RSingleComponent } from './reading-types/r-single/r-single.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__skills_reading_reading_component__["a" /* ReadingComponent */],
                __WEBPACK_IMPORTED_MODULE_32__skills_dialogs_submit_dialog__["a" /* SubmitDialog */],
                __WEBPACK_IMPORTED_MODULE_12__skills_listening_listening_component__["a" /* ListeningComponent */],
                __WEBPACK_IMPORTED_MODULE_16__reading_types_true_false_true_false_component__["a" /* TrueFalseComponent */],
                __WEBPACK_IMPORTED_MODULE_17__reading_types_answer_answer_component__["a" /* AnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__reading_types_heading_heading_component__["a" /* HeadingComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_roman_pipe__["a" /* RomanPipe */],
                __WEBPACK_IMPORTED_MODULE_36__pipes_text_number_pipe__["a" /* TextNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pages_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_test_toolbar_test_toolbar_component__["a" /* TestToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__reading_types_sentence_sentence_component__["a" /* SentenceComponent */],
                __WEBPACK_IMPORTED_MODULE_20__reading_types_ending_ending_component__["a" /* EndingComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_letter_pipe__["a" /* LetterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__reading_types_information_information_component__["a" /* InformationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__reading_types_summary_select_summary_select_component__["a" /* SummarySelectComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_option_list_option_list_component__["a" /* OptionListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__common_types_feature_feature_component__["a" /* FeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_13__skills_writing_writing_component__["a" /* WritingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__skills_speaking_speaking_component__["a" /* SpeakingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__common_types_multiple_multiple_component__["a" /* MultipleComponent */],
                __WEBPACK_IMPORTED_MODULE_27__common_types_single_single_component__["a" /* SingleComponent */],
                __WEBPACK_IMPORTED_MODULE_26__common_types_note_note_component__["a" /* NoteComponent */],
                __WEBPACK_IMPORTED_MODULE_28__common_types_table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_timer_pipe__["a" /* TimerPipe */],
                // IReadingComponent,
                // RTableComponent,
                // RMultipleComponent,
                // RSingleComponent,
                // RNoteComponent,
                // LTableComponent,
                // LMultipleComponent,
                // LSingleComponent,
                // LNoteComponent,
                __WEBPACK_IMPORTED_MODULE_15__skills_common_common_component__["a" /* CommonComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_32__skills_dialogs_submit_dialog__["a" /* SubmitDialog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__["FacebookService"],
                __WEBPACK_IMPORTED_MODULE_30__services_global_service__["a" /* GlobalService */],
                __WEBPACK_IMPORTED_MODULE_31__services_user_service__["a" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/app.module.js.map

/***/ }),

/***/ 676:
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
            template: __webpack_require__(869),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [])
    ], OptionListComponent);
    return OptionListComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/option-list.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function TestToolbarComponent() {
    }
    TestToolbarComponent.prototype.ngOnInit = function () {
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
            template: __webpack_require__(870),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestToolbarComponent);
    return TestToolbarComponent;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/test-toolbar.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(453);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(675);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=D:/projects/ielts-front/src/index.js.map

/***/ }),

/***/ 679:
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

/***/ 680:
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

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextNumberPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextNumberPipe = (function () {
    function TextNumberPipe() {
    }
    TextNumberPipe.prototype.transform = function (value, args) {
        switch (value) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
        }
        return 'n';
    };
    TextNumberPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'textNumber'
        }), 
        __metadata('design:paramtypes', [])
    ], TextNumberPipe);
    return TextNumberPipe;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/text-number.pipe.js.map

/***/ }),

/***/ 682:
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

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__(45);
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
    TestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TestService);
    return TestService;
    var _a;
}());
//# sourceMappingURL=D:/projects/ielts-front/src/test.service.js.map

/***/ }),

/***/ 684:
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

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/projects/ielts-front/src/polyfills.js.map

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n#copy {\r\n  font-size: small;\r\n}\r\n\r\n.fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.nav-bar > button {\r\n  border: solid #e41937;\r\n  border-width: 0px 0px;\r\n  border-radius: 0;\r\n  height: 100%;\r\n  color: #e41937;\r\n}\r\n\r\n.nav-bar {\r\n  height: 100%;\r\n}\r\n\r\n.logo {\r\n  height: 100%;\r\n}\r\n\r\n.logo-a {\r\n  height: 50%;\r\n}\r\n\r\n.avatar {\r\n  height: 75%;\r\n  border-radius: 70%;\r\n}\r\n\r\nmd-toolbar {\r\n  height: 64px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "md-select {\r\n  width: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".radio-group {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "table {\r\n  border-collapse: collapse;\r\n  background: rgba(67, 169, 208, 0.25);\r\n}\r\n\r\ntd {\r\n  border: 1px solid #9E9E9E;\r\n  padding: 5px;\r\n}\r\n\r\n.para-in-cell {\r\n  margin: 0px;\r\n  text-align: initial;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".half-card {\r\n  width: 60%;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  top: -4px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n#outlet {\r\n  padding: 30px;\r\n}\r\n\r\n.link {\r\n  color: rgba(255, 255, 255, 0.87);\r\n  text-decoration: none;\r\n}\r\n\r\nmd-toolbar {\r\n  /*height: 40px;*/\r\n  min-height: 0px;\r\n  background: #e41937;\r\n}\r\n\r\n.mat-toolbar-layout, md-toolbar-row {\r\n  height: 100%;\r\n}\r\n\r\nnav > button {\r\n  /*color: white;*/\r\n}\r\n\r\n.active {\r\n  color: #e41937;\r\n  cursor: default;\r\n}\r\n\r\n.inactive {\r\n  color: white;\r\n}\r\n\r\n.test-title {\r\n  color: white;\r\n  font-size: 75%\r\n}\r\n\r\na {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nmd-toolbar {\r\n  height: 45px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".card-div {\r\n  float: left;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.example-card {\r\n  /*width: 230px;*/\r\n  /*float: left;*/\r\n  /*margin: 10px;*/\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('http://schoolsuganda.com/uploads/articles/35/650x650/1433145871-bc.png');\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".half-card {\r\n  width: 60%;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  top: -4px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".half-card {\r\n  width: 60%;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  top: -4px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".half-card {\r\n  width: 60%;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.icon {\r\n  position: absolute;\r\n  top: -4px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".options {\r\n  margin-left: 30px;\r\n}\r\n\r\n.option {\r\n  font-style: italic;\r\n  font-weight: bold;\r\n}\r\n\r\ntd > p {\r\n  margin: 0px;\r\n}\r\n\r\ntd {\r\n  padding: 5px;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "md-dialog-content::-webkit-scrollbar { \r\n    display: none; \r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  /*background: rgba(67, 169, 208, 0.25);*/\r\n}\r\n\r\ntd, th {\r\n  border: 1px solid #9E9E9E;\r\n  padding: 5px;\r\n}\r\n\r\n.first-col, .second-col {\r\n  /*text-align: center;*/\r\n}\r\n\r\n.first-col {\r\n  width: 15%;\r\n}\r\n\r\n.second-col {\r\n\r\n}\r\n\r\n.mat-dialog-content {\r\n  max-height: 50vh;\r\n}\r\n\r\n.submit {\r\n  margin-right: 10px;\r\n}\r\n\r\n.score, .no-of-correct {\r\n  text-align: right;\r\n  margin: 0px;\r\n}\r\n\r\n.score {\r\n  font-size: 300%\r\n}\r\n\r\n.no-of-correct {\r\n  color: grey;\r\n  margin: 5px 0px 10px 0px;\r\n}\r\n\r\n.score-prefix {\r\n  font-size: 60%;\r\n  color: inherit;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".para {\r\n  text-align: justify;\r\n  /*padding-left: 30px;*/\r\n}\r\n\r\n#check {\r\n  position: fixed;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.mark {\r\n  position: absolute;\r\n  left: -20px;\r\n}\r\n\r\n.question-block {\r\n  border: 2px solid #3F51B5;\r\n  padding: 5px;\r\n  display: inline-block;\r\n}\r\n\r\n.question-block > h3 {\r\n  margin: 0px;\r\n  color: #3F51B5;\r\n}\r\n\r\n#heading {\r\n  color: #673ab7;\r\n}\r\n\r\n/** {\r\n  overflow: scroll;\r\n}*/\r\n\r\nfigure, md-grid-tile {\r\n  /*align-items: initial;*/\r\n  display: block;\r\n}\r\n\r\n.left-block, .right-block {\r\n  height: 700px;\r\n  overflow: scroll;\r\n}\r\n\r\n.left-block::-webkit-scrollbar, .right-block::-webkit-scrollbar { \r\n  display: none; \r\n}\r\n\r\n.left-block {\r\n  width: 49%;\r\n  /*background: red;*/\r\n  float: left;\r\n}\r\n\r\n.right-block {\r\n  width: 50%;\r\n  /*background: blue;*/\r\n  float: right;\r\n}\r\n\r\n.left-card {\r\n  margin: 3px;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n}\r\n\r\nmd-tab-group {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.actions {\r\n  text-align: end;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.timer {\r\n  position: fixed;\r\n  bottom: 25px;\r\n  right: 25px;\r\n}\r\n\r\n.timer:hover {\r\n  opacity: 0.5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".para {\r\n  text-align: justify;\r\n  /*padding-left: 30px;*/\r\n}\r\n\r\n#check {\r\n  position: fixed;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.mark {\r\n  position: absolute;\r\n  left: -20px;\r\n}\r\n\r\n.question-block {\r\n  border: 2px solid #673ab7;\r\n  padding: 5px;\r\n  display: inline-block;\r\n}\r\n\r\n.question-block > h3 {\r\n  margin: 0px;\r\n  color: #673ab7;\r\n}\r\n\r\n#heading {\r\n  color: #673ab7;\r\n}\r\n\r\n/** {\r\n  overflow: scroll;\r\n}*/\r\n\r\nfigure, md-grid-tile {\r\n  /*align-items: initial;*/\r\n  display: block;\r\n}\r\n\r\n.left-block, .right-block {\r\n  height: 700px;\r\n  overflow: scroll;\r\n}\r\n\r\n.left-block::-webkit-scrollbar, .right-block::-webkit-scrollbar { \r\n  display: none; \r\n}\r\n\r\n.left-block {\r\n  width: 49%;\r\n  /*background: red;*/\r\n  float: left;\r\n}\r\n\r\n.right-block {\r\n  width: 50%;\r\n  /*background: blue;*/\r\n  float: right;\r\n}\r\n\r\n.left-card {\r\n  margin: 3px;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n}\r\n\r\nmd-tab-group {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.actions {\r\n  text-align: end;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.timer {\r\n  position: fixed;\r\n  bottom: 25px;\r\n  right: 25px;\r\n}\r\n\r\n.timer:hover {\r\n  opacity: 0.5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".box {\r\n  border: 1px solid black;\r\n  background: rgba(67, 169, 208, 0.25);\r\n  padding: 10px;\r\n}\r\n\r\nmd-card {\r\n  width: 50%;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.topic {\r\n  font-size: 110%;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".box {\r\n  border: 1px solid black;\r\n  background: rgba(67, 169, 208, 0.25);\r\n  padding: 10px;\r\n}\r\n\r\nmd-card {\r\n  width: 50%;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <a class=\"logo-a\" href=\"/\"><img class=\"logo\" src=\"/assets/logo.png\"></a>\n  <span class=\"fill-remaining-space\"></span>\n  <nav class=\"nav-bar\">\n    <button md-button routerLink=\"/\">Library</button>\n    <button md-button *ngIf=\"!fbConnected\" (click)=\"fbLogin()\">Login</button>\n    <button md-button *ngIf=\"fbConnected && user\" routerLink=\"/result\">\n      <img class=\"avatar\" [src]=\"user.picture.data.url\">\n      <span>{{user.first_name}}</span>\n      <md-icon class=\"icon\">arrow_drop_down</md-icon>\n    </button>\n    <button md-button *ngIf=\"fbConnected\" (click)=\"fbLogout()\">Logout</button>\n  </nav>\n</md-toolbar>\n\n<router-outlet></router-outlet>\n<md-toolbar>\n  <span id=\"copy\">&copy;2017 - IELTS Online</span>\n  <span class=\"spacer\"></span>\n</md-toolbar>\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<app-option-list [list]=\"data.features\"\n                 [answers]=\"answers\"\n                 [mark]=\"mark\"></app-option-list>\n\n<div *ngFor=\"let item of data.text; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{item}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let feature of data.features; let j = 'index'\"\n               [value]=\"j + 1\">{{j + 1 | letter | uppercase}}. {{feature}}</md-option>\n  </md-select>\n</div>\n"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<div *ngFor=\"let item of data.choices; let i = 'index'\">\n  <md-checkbox [(ngModel)]=\"answers[i]\" \n    (change)=\"checkLimit()\">\n    {{i + 1 | letter | uppercase}}. {{item}}\n  </md-checkbox>\n</div>\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<md-card class=\"half-card\">\n  <md-card-title>{{data.heading}}</md-card-title>\n  <md-card-content>\n    <p *ngFor=\"let para of displayParas; let i = 'index'\">\n      <span *ngFor=\"let span of para; let j = 'index'\">\n        <md-input-container *ngIf=\"span.isInput\" floatingPlaceholder=\"false\">\n          <b md-prefix class=\"margin-right-10\">{{span.data}} </b>\n          <input mdInput type=\"text\" [(ngModel)]=\"answers[i][j]\" placeholder=\"\"/>\n        </md-input-container>\n        <span *ngIf=\"!span.isInput\" [innerHTML]=\"span.data\"></span>\n      </span>\n    </p>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<h3>{{data.heading}}</h3>\n\n<div *ngFor=\"let question of data.questions; let i = 'index'\">\n  <p><span *ngIf=\"data.first != data.last\">{{data.first + i}}. </span>{{question.text}}</p>\n  <md-radio-group class=\"radio-group\" [(ngModel)]=\"answers[i]\">\n    <md-radio-button *ngFor=\"let choice of question.choices; let i = 'index'\" \n      [value]=\"i + 1 | letter\">{{i+1 | letter | uppercase}}. {{choice}}</md-radio-button>\n  </md-radio-group>\n</div>\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "<p class=\"italic\" *ngFor=\"let dir of data.directions\" [innerHTML]=\"dir\"></p>\n\n<table>\n  <tr *ngFor=\"let row of displayTable\">\n    <td *ngFor=\"let cell of row\">\n      <p *ngFor=\"let para of cell\" class=\"para-in-cell\">\n        <span *ngFor=\"let span of para\">\n          <md-input-container *ngIf=\"span.isInput\" floatingPlaceholder=\"false\">\n            <b md-prefix class=\"margin-right-10\">{{span.data}} </b>\n            <input mdInput type=\"text\" [(ngModel)]=\"answers[span.data - data.first]\" placeholder=\"\"/>\n          </md-input-container>\n          <span *ngIf=\"!span.isInput\" [innerHTML]=\"span.data\"></span>\n        </span>\n      </p>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"half-card\">\n  <!-- <md-card-title>List of Headings</md-card-title> -->\n  <!-- {{answers}} -->\n  <!-- {{changeColor(1)}} -->\n  <!-- {{answer.indexOf(1)}} -->\n  <md-card-content>\n    <p *ngFor=\"let item of list; let i = 'index'\"\n       [style.color]=\"changeColor(i + 1) ? 'rgb(103, 58, 183)' : ''\"\n       [style.fontStyle]=\"changeColor(i + 1) ? 'bold' : ''\"\n       class=\"relative\">\n        <span *ngIf=\"mark == 'letter'\">{{i + 1 | letter | uppercase}}. </span>\n        <span *ngIf=\"mark == 'roman'\">{{i + 1 | roman}}. </span>\n        {{item}}\n        <!-- <md-icon class=\"icon\"\n          color=\"\"\n          *ngIf=\"checkDuplicated(i + 1)\"\n          md-tooltip=\"This option is used more than once\"\n          [mdTooltipPosition]=\"'right'\">\n          info\n        </md-icon> -->\n    </p>\n  </md-card-content>\n</md-card>\n\n<!-- [style.color]=\"changeColor(i + 1) ? 'rgb(103, 58, 183)' : ''\" -->"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <p class=\"test-title\">\n    <a href=\"/\">Library</a>\n    <md-icon class=\"icon\">chevron_right</md-icon>\n    <a href=\"/\">Cambridge IELTS 10</a>\n    <md-icon class=\"icon\">chevron_right</md-icon>\n    Test 1\n  </p>\n  <span class=\"fill-remaining-space\"></span>\n  <nav>\n    <button *ngIf=\"currentPage == 0\" md-raised-button class=\"active\">Listening</button>\n    <button *ngIf=\"currentPage != 0\" md-button class=\"inactive\" routerLink=\"/test/{{testId}}/listening\">Listening</button>\n\n    <button *ngIf=\"currentPage == 1\" md-raised-button class=\"active\">Reading</button>\n    <button *ngIf=\"currentPage != 1\" md-button class=\"inactive\" routerLink=\"/test/{{testId}}/reading\">Reading</button>\n\n    <button *ngIf=\"currentPage == 2\" md-raised-button class=\"active\">Writing</button>\n    <button *ngIf=\"currentPage != 2\" md-button class=\"inactive\" routerLink=\"/test/writing\">Writing</button>\n\n    <button *ngIf=\"currentPage == 3\" md-raised-button class=\"active\">Speaking</button>\n    <button *ngIf=\"currentPage != 3\" md-button class=\"inactive\" routerLink=\"/test/speaking\">Speaking</button>\n  </nav>\n</md-toolbar>"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <table>\n    <tr>\n      <th>Test</th>\n      <th>Skill</th>\n      <th>Score</th>\n      <th>Time</th>\n    </tr>\n    <tr *ngFor=\"let attempt of user.attempts.slice().reverse()\">\n      <td>{{attempt.test_id}}</td>\n      <td>{{attempt.skill}}</td>\n      <td>{{attempt.score}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<div class=\"overall\">\n  <div *ngFor=\"let test of tests\" class=\"card-div\" [ngStyle]=\"{'width': cardWidth}\">\n    <md-card class=\"example-card\">\n      <md-card-header>\n        <div md-card-avatar class=\"example-header-image\"></div>\n        <md-card-title>{{test.title}}</md-card-title>\n        <md-card-subtitle>{{test.description}}</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"http://schoolsuganda.com/uploads/articles/35/650x650/1433145871-bc.png\">\n      <!-- <md-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n          bred for hunting.\n        </p>\n      </md-card-content> -->\n      <md-card-actions>\n        <button md-button routerLink=\"/test/{{test.id}}/listening\">TAKE THIS TEST</button>\n        <!-- <button md-button>SHARE</button> -->\n      </md-card-actions>\n    </md-card>\n  </div>\n</div>\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<i>\n  <p>Answer the questions below.</p>\n  <p>Choose <b>NO MORE THAN {{data.word_limit | textNumber | uppercase}} WORDS <span *ngIf=\"data.number_limit != 0\">AND/OR {{data.number_limit | textNumber | uppercase}} NUMBER</span></b> from the passage for each answer.</p>\n  <p>\n    Write your answers in boxes {{data.first}}\n    <span *ngIf=\"data.last - data.first == 1\"> and </span>\n    <span *ngIf=\"data.last - data.first > 1\">-</span>\n    {{data.last}} on your answer sheet.\n  </p>\n</i>\n\n<div *ngFor=\"let text of data.text; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{text}}</p>\n  <md-input-container>\n    <input mdInput type=\"text\" [(ngModel)]=\"answers[i]\"/>\n  </md-input-container>\n</div>\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<md-slide-toggle [(ngModel)]=\"data.duplicatable\">NB (Can choose more than once)</md-slide-toggle>\n<p>\n  <i>Complete each sentence with the correct ending, \n  <b>{{1 | letter | uppercase}}-{{data.endings.length | letter | uppercase}}</b>\n  , below.</i>\n</p>\n<p><i>\n    Write the correct letters, \n    <b>{{1 | letter | uppercase}}-{{data.endings.length | letter | uppercase}}</b>\n    , in boxes {{data.first}}\n    <span *ngIf=\"data.last - data.first == 1\"> and </span>\n    <span *ngIf=\"data.last - data.first > 1\"> - </span>\n    {{data.last}} on your answer sheet.\n</i></p>\n<p *ngIf=\"data.duplicatable\"><b>NB</b> You may use any letter more than once.</p>\n\n<app-option-list [list]=\"data.endings\"\n                 [answers]=\"answers\"\n                 [mark]=\"mark\"></app-option-list>\n\n<div *ngFor=\"let sen of data.sentences; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{sen}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let ending of data.endings; let j = 'index'\"\n               [value]=\"j + 1\">{{j + 1 | letter | uppercase}}</md-option>\n  </md-select>\n</div>\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<p>\n  Reading Passage {{sectionNumber}} has {{data.paras.length | textNumber}} paragraphs, \n  <b>A-{{data.paras[data.paras.length - 1].char | uppercase}}</b>.\n</p>\n<p><i>Choose the correct heading for paragraph ?-? from the list of headings below.</i></p>\n<p><i>\n  Write the correct number, \n  <b>i-{{data.headings.length | roman}}</b>\n  , in boxes {{data.first}}-{{data.last}} on your answer sheet.\n</i></p>\n\n<!-- <md-card class=\"half-card\">\n  <md-card-title>List of Headings</md-card-title>\n  <md-card-content>\n    <p *ngFor=\"let heading of data.headings; let i = 'index'\"\n       [style.color]=\"changeColor(i + 1) ? 'rgb(103, 58, 183)' : ''\"\n       class=\"relative\">\n       <span>{{i + 1 | roman}}. </span>\n       {{heading}}\n        <md-icon class=\"icon\" \n          color=\"warn\"\n          *ngIf=\"checkDuplicated(i + 1)\"\n          md-tooltip=\"This option is used more than once\"\n          [mdTooltipPosition]=\"'right'\">\n          warning\n        </md-icon>\n    </p>\n  </md-card-content>\n</md-card> -->\n\n<app-option-list \n                 [list]=\"data.headings\"\n                 [answers]=\"getAnswerArray()\"\n                 [mark]=\"mark\"></app-option-list>\n\n<div *ngFor=\"let para of data.paras; let j = 'index'\">\n  <p>\n    <span *ngIf=\"para.no\">{{para.no}}. </span>\n    <span *ngIf=\"!para.no\"><i>Example: </i></span>\n    Paragraph {{para.char | uppercase}}\n  </p>\n  <div *ngIf=\"!para.answer\">\n    <md-select [(ngModel)]=\"answers[para.no - data.first]\">\n      <md-option *ngFor=\"let heading of data.headings; let i = 'index'\"\n                 [value]=\"i + 1\">{{i + 1 | roman}}</md-option>\n    </md-select>\n  </div>\n  <div *ngIf=\"para.answer\">\n    <p><i>Answer: </i>{{para.answer | roman}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<p><i>\n  Reading Passage {{sectionNumber}} has {{data.number_of_paras | textNumber}} paragraphs, \n  <b>A-{{data.number_of_paras | letter | uppercase}}</b>.\n</i></p>\n<p>Which paragraph contains the following information?</p>\n<p><i>\n  Write the correct letter, \n  <b>A-{{data.number_of_paras | letter | uppercase}}</b>\n  , in boxes {{data.first}}-{{data.last}} on your answer sheet.\n</i></p>\n<p *ngIf=\"data.nb\"><b>NB</b> You may use any letter more than once.</p>\n\n<div *ngFor=\"let item of data.text; let i = 'index'\">\n  <p><span *ngIf=\"data.first != data.last\">{{data.first + i}}. </span>{{item}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let para of paras; let j = 'index'\"\n               [value]=\"para\">Paragraph {{para | uppercase}}</md-option>\n  </md-select>\n</div>"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<p><i>Complete the sentence<span *ngIf=\"data.first != data.last\">s</span> below.</i></p>\n<p>\n  <i>Choose <b>NO MORE THAN {{data.word_limit | textNumber | uppercase}} WORDS <span *ngIf=\"data.number_limit != 0\">AND/OR {{data.number_limit | textNumber | uppercase}} NUMBER</span></b> from the text for each answer.</i>\n</p>\n<p>\n  <i>\n    Write your answers in boxes {{data.first}}\n    <span *ngIf=\"data.last - data.first == 1\"> and </span>\n    <span *ngIf=\"data.last - data.first > 1\"> - </span>\n    {{data.last}} on your answer sheet.\n  </i>\n</p>\n\n<!-- <div > -->\n  <p *ngFor=\"let sen of displaySens; let i = 'index'\">\n    <span>{{data.first + i}}. </span>\n    <span *ngFor=\"let span of sen\">\n      <md-input-container *ngIf=\"span == '{}'\" floatingPlaceholder=\"false\">\n        <input mdInput type=\"text\" [(ngModel)]=\"answers[i]\" placeholder=\"\"/>\n      </md-input-container>\n      <span *ngIf=\"span != '{}'\">{{span}}</span>\n    </span>\n  </p>\n<!-- </div> -->\n"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<md-slide-toggle [(ngModel)]=\"data.duplicatable\">Duplicatable</md-slide-toggle>\n\n<p><i>Complete the summary using the list of words, \n  <b>A-{{data.words.length | letter | uppercase}}</b>, below.</i></p>\n<p><i>\n  Write your letter, <b>A-{{data.words.length | letter | uppercase}}</b>, in boxes {{data.first}}\n  <span *ngIf=\"data.last - data.first == 1\"> and </span>\n  <span *ngIf=\"data.last - data.first > 1\">-</span>\n  {{data.last}} on your answer sheet.\n</i></p>\n\n<md-card class=\"half-card\">\n  <md-card-title>{{data.heading}}</md-card-title>\n  <md-card-content>\n    <p *ngFor=\"let para of displayParas; let i = 'index'\">\n      <span *ngFor=\"let span of para; let j = 'index'\">\n        <div *ngIf=\"span.isInput\" class=\"inline-flex\">\n          <b>{{span.data}}</b>\n          <md-select [(ngModel)]=\"answers[i][j]\">\n            <md-option *ngFor=\"let word of data.words; let i = 'index'\"\n                       [value]=\"i + 1\">{{i + 1 | letter | uppercase}}. {{word}}</md-option>\n          </md-select>\n        </div>\n        <span *ngIf=\"!span.isInput\">{{span.data}}</span>\n      </span>\n    </p>\n  </md-card-content>\n</md-card>\n\n<app-option-list \n                 [list]=\"data.words\"\n                 [answers]=\"getAnswerArray()\"\n                 [mark]=\"mark\"></app-option-list>\n"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Need correction adapting for each type, true-false or yes-no.</h1> -->\n\n<p>Do the following statements agree with the information given in Reading Passage {{sectionNumber}}?</p>\n<p>\n  <i>In boxes {{data.first}}-{{data.last}} on your answer sheet, write</i>\n</p>\n\n<div class=\"options\">\n  <table *ngIf=\"data.options == 'tf'\">\n    <tr>\n      <td><p class=\"option primary-color\">TRUE</p></td>\n      <td><p>if the statement argees with the information</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">FALSE</p></td>\n      <td><p>if the statement contradicts the information</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">NOT GIVEN</p></td>\n      <td><p>if there is no information on this</p></td>\n    </tr>\n  </table>\n\n  <table *ngIf=\"data.options == 'yn'\">\n    <tr>\n      <td><p class=\"option primary-color\">YES</p></td>\n      <td><p>if the statement argees with the claims of the writer</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">NO</p></td>\n      <td><p>if the statement contradicts the claims of the writer</p></td>\n    </tr>\n    <tr>\n      <td><p class=\"option primary-color\">NOT GIVEN</p></td>\n      <td><p>if it is impossible to say what the writer thinks about this</p></td>\n    </tr>\n  </table>\n\n</div>\n\n<div *ngFor=\"let text of data.text; let i = 'index'\">\n  <p><span>{{data.first + i}}. </span>{{text}}</p>\n  <md-select [(ngModel)]=\"answers[i]\">\n    <md-option *ngFor=\"let item of options\" [value]=\"item\">{{item | uppercase}}</md-option>\n  </md-select>\n</div>\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<p>\n  common works!\n</p>\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <md-card-title class=\"primary-color\">Answer Sheet</md-card-title>\r\n  <md-card-subtitle>{{data.skill | uppercase}}</md-card-subtitle>\r\n  <md-card-content>\r\n    <div *ngIf=\"data.isSubmited\">\r\n      <p class=\"score primary-color\"><span class=\"score-prefix\">Your score is </span>{{testResult.score | number : '1.1-1'}}</p>\r\n      <p class=\"no-of-correct\">Correct answers: {{testResult.noOfCorrect}}/40</p>\r\n    </div>\r\n    <md-dialog-content>\r\n      <table>\r\n        <tr>\r\n          <th>No.</th>\r\n          <th>Your Answer</th>\r\n          <th *ngIf=\"data.isSubmited\">Key</th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of data.answers; let i = 'index'\">\r\n          <td class=\"first-col\">{{item.no}}</td>\r\n          <td class=\"second-col\">\r\n            <span *ngIf=\"!data.isSubmited && item.ans\">{{item.ans}}</span>\r\n            <span *ngIf=\"data.isSubmited && testResult.result\" [ngStyle]=\"{color: testResult.result[i] ? 'green' : 'red'}\">{{item.ans}}</span>\r\n            <!-- <md-icon class=\"icon\"\r\n              color=\"blue\"\r\n              *ngIf=\"isSubmited && testResult.result[i]\">\r\n              info\r\n            </md-icon>\r\n            <md-icon class=\"icon\"\r\n              color=\"red\"\r\n              *ngIf=\"isSubmited && !testResult.result[i]\">\r\n              info\r\n            </md-icon> -->\r\n          </td>\r\n          <td *ngIf=\"data.isSubmited\" class=\"second-col\">\r\n            <span *ngIf=\"data.keys[i]\">\r\n              <span *ngFor=\"let key of data.keys[i].keys; let j = 'index'\">\r\n                <span *ngIf=\"j != 0\"> / </span>\r\n                <span>{{key}}</span>\r\n              </span>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </md-dialog-content>\r\n  </md-card-content>\r\n</md-card>\r\n<md-dialog-actions>\r\n  <button md-raised-button color=\"primary\" *ngIf=\"!data.isSubmited\" (click)=\"submit()\" class=\"submit\">Submit</button>\r\n  <button md-button md-dialog-close>Close</button>\r\n</md-dialog-actions>\r\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"0\" [testId]=\"testId\"></app-test-toolbar>\n\n<button class=\"timer\" md-raised-button>\n  <md-icon class=\"icon\">alarm</md-icon>\n  {{timer | timer}}\n</button>\n<md-tab-group *ngIf=\"data\">\n  <md-tab *ngFor=\"let section of data\" label=\"Section {{section.section_number}}\">\n    <div class=\"padding-20\">\n      \n      <!-- Right-Block -->\n      <div class=\"\">\n        <!-- Block for each set of questions -->\n        <div *ngFor=\"let question of section.sub_sections\" class=\"margin-bottom-50\">\n          <div class=\"question-block\">\n            <h3 *ngIf=\"question.first == question.last\">Question {{question.first}}</h3>\n            <h3 *ngIf=\"question.first != question.last\">\n              Questions {{question.first}}\n                <span *ngIf=\"question.last - question.first == 1\"> and </span>\n                <span *ngIf=\"question.last - question.first > 1\">-</span>\n              {{question.last}}\n            </h3>  \n          </div>\n          \n          <div *ngIf=\"question.type == 'feature'\">\n            <app-feature [data]=\"question\"></app-feature>\n          </div>\n          <div *ngIf=\"question.type == 'table'\">\n            <app-table [data]=\"question\"></app-table>\n          </div>\n          <div *ngIf=\"question.type == 'multiple'\">\n            <app-multiple [data]=\"question\"></app-multiple>\n          </div>\n          <div *ngIf=\"question.type == 'single'\">\n            <app-single [data]=\"question\"></app-single>\n          </div>\n          <div *ngIf=\"question.type == 'note'\">\n            <app-note [data]=\"question\"></app-note>\n          </div>\n        </div>\n\n        <div class=\"actions\">\n          <button md-raised-button color=\"primary\" (click)=\"viewSheet(isSubmited)\">\n            <span *ngIf=\"!isSubmited\">View Answer Sheet & Submit</span>\n            <span *ngIf=\"isSubmited\">Review</span>\n          </button>\n        </div>\n      </div>\n      <!-- /Right-Block -->\n\n    </div>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"1\" [testId]=\"testId\"></app-test-toolbar>\n\n<button class=\"timer\" md-raised-button>\n  <md-icon class=\"icon\">alarm</md-icon>\n  {{timer | timer}}\n</button>\n<md-tab-group *ngIf=\"data\">\n  <md-tab *ngFor=\"let section of data\" label=\"Section {{section.section_number}}\">\n    <div class=\"padding-20\">\n      \n      <!-- Left-Block -->\n      <div class=\"left-block\">\n        <md-card class=\"left-card\">\n          <md-card-title class=\"primary-color title\">{{section.passage.heading}}</md-card-title>\n          <md-card-subtitle>{{section.passage.sub_heading}}</md-card-subtitle>\n          <md-card-content>\n            <div *ngFor=\"let para of section.passage.paras\">\n              <!-- <button *ngIf=\"para.mark\" md-mini-fab class=\"mark\" disabled=\"false\">\n                {{para.mark | uppercase}}\n              </button> -->\n              <button *ngIf=\"para.mark\" md-mini-fab disabled=\"false\">\n                {{para.mark | uppercase}}\n              </button>\n              <p>{{para.content}}</p>\n            </div>\n          </md-card-content>\n        </md-card>\n      </div>\n      <!-- /Left-Block -->\n      \n      <!-- Right-Block -->\n      <div class=\"right-block\">\n        <!-- Block for each set of questions -->\n        <div *ngFor=\"let question of section.sub_sections\" class=\"margin-bottom-50\">\n          <div class=\"question-block\">\n            <h3 *ngIf=\"question.first == question.last\">Question {{question.first}}</h3>\n            <h3 *ngIf=\"question.first != question.last\">\n              Questions {{question.first}}\n                <span *ngIf=\"question.last - question.first == 1\"> and </span>\n                <span *ngIf=\"question.last - question.first > 1\">-</span>\n              {{question.last}}\n            </h3>  \n          </div>\n          \n          <div *ngIf=\"question.type == 'feature'\">\n            <app-feature [data]=\"question\"></app-feature>\n          </div>\n          <div *ngIf=\"question.type == 'multiple'\">\n            <app-multiple [data]=\"question\"></app-multiple>\n          </div>\n          <div *ngIf=\"question.type == 'summary'\">\n            <app-note [data]=\"question\"></app-note>\n          </div>\n          <div *ngIf=\"question.type == 'single'\">\n            <app-single [data]=\"question\"></app-single>\n          </div>\n          <div *ngIf=\"question.type == 'table'\">\n            <app-table [data]=\"question\"></app-table>\n          </div>\n\n          <div *ngIf=\"question.type == 'true-false'\">\n            <app-true-false [data]=\"question\" \n              [sectionNumber]=\"section.section_number\"></app-true-false>\n          </div>\n          <div *ngIf=\"question.type == 'answer'\">\n            <app-answer [data]=\"question\"></app-answer>\n          </div>\n          <div *ngIf=\"question.type == 'heading'\">\n            <app-heading [data]=\"question\"\n              [sectionNumber]=\"section.section_number\"></app-heading>\n          </div>\n          <!-- <div *ngIf=\"question.type == 'single'\">\n            <app-r-single [data]=\"question\"></app-r-single>\n          </div> -->\n          <!-- <div *ngIf=\"question.type == 'summary'\">\n            <app-r-note [data]=\"question\"></app-r-note>\n          </div> -->\n          <div *ngIf=\"question.type == 'summary-select'\">\n            <app-summary-select [data]=\"question\"></app-summary-select>\n          </div>\n          <div *ngIf=\"question.type == 'sentence'\">\n            <app-sentence [data]=\"question\"></app-sentence>\n          </div>\n          <div *ngIf=\"question.type == 'ending'\">\n            <app-ending [data]=\"question\"></app-ending>\n          </div>\n          <div *ngIf=\"question.type == 'information'\">\n            <app-information [data]=\"question\"\n              [sectionNumber]=\"section.section_number\"></app-information>\n          </div>\n          \n        </div>\n\n        <div class=\"actions\">\n          <button md-raised-button color=\"primary\" (click)=\"viewSheet(isSubmited)\">\n            <span *ngIf=\"!isSubmited\">View Answer Sheet & Submit</span>\n            <span *ngIf=\"isSubmited\">Review</span>\n          </button>\n        </div>\n      </div>\n      <!-- /Right-Block -->\n\n    </div>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"3\" testId=\"testId\"></app-test-toolbar>\n\n<div class=\"padding-20\" *ngIf=\"data\">\n  <md-card>\n    <md-card-title class=\"primary-color center\">Part 1</md-card-title>\n    <md-card-subtitle>The examiner asks the candidate about him/herself, his/her home, work or studies and other familier topics.</md-card-subtitle>\n    <md-card-content>\n      <div *ngFor=\"let topic of data.part_1.topics\">\n        <p class=\"topic primary-color\">{{topic.title}}</p>\n        <ul>\n          <li *ngFor=\"let question of topic.questions\">{{question}}</li>\n        </ul>\n      </div>\n    </md-card-content>\n  </md-card>\n\n  <div class=\"space-20\"></div>\n\n  <md-card>\n    <md-card-title class=\"primary-color center\">Part 2</md-card-title>\n    <md-card-subtitle>\n      \n    </md-card-subtitle>\n    <md-card-content>\n      <p>You will have to talk about the topic for one to two minutes.</p>\n      <p>You have one minute to think about what you are going to say.</p>\n      <p>You can make some notes to help you if you wish.</p>\n      <div class=\"box\">\n        <p>{{data.part_2.question}}</p>\n        <p>You should say</p>\n        <ul>\n          <li *ngFor=\"let clue of data.part_2.clues\">{{clue}}</li>\n        </ul>\n        <p>{{data.part_2.final_clue}}</p>\n      </div>\n    </md-card-content>\n  </md-card>\n\n  <div class=\"space-20\"></div>\n\n  <md-card>\n    <md-card-title class=\"primary-color center\">Part 3</md-card-title>\n    <md-card-subtitle>Discussion topics</md-card-subtitle>\n    <md-card-content>\n      <!-- <p>Discussion topics:</p> -->\n      <div *ngFor=\"let topic of data.part_3.topics\">\n        <p class=\"topic primary-color\">{{topic.title}}</p>\n        <i>Example questions:</i>\n        <p *ngFor=\"let question of topic.questions\">{{question}}</p>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<app-test-toolbar currentPage=\"2\" testId=\"testId\"></app-test-toolbar>\n\n<div class=\"padding-20\" *ngIf=\"data\">\n  <md-card>\n    <md-card-title class=\"primary-color center\">Writing Task 1</md-card-title>\n    <md-card-subtitle>You should spend about 20 minutes on this task.</md-card-subtitle>\n    <md-card-content>\n      <div class=\"box\">\n        <p *ngFor=\"let text of data.task_1.text\">{{text}}</p>\n      </div>\n      <p>Write at least 150 words.</p>\n      <div class=\"space-20\"></div>\n      <img src=\"http://content.ieltsonlinetests.com/fileman/Uploads/Images/ielts/practice%203/percentage-of-water-used-for-different-purposes.png\">\n    </md-card-content>\n  </md-card>\n\n  <div class=\"space-20\"></div>\n\n  <md-card>\n    <md-card-title class=\"primary-color center\">Writing Task 2</md-card-title>\n    <md-card-subtitle>You should spend about 40 minutes on this task.</md-card-subtitle>\n    <md-card-content>\n      <p>Write about the following topic:</p>\n      <div class=\"box\">\n        <p *ngFor=\"let text of data.task_2.text\">{{text}}</p>\n      </div>\n      <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>\n      <p>Write at least 250 words.</p>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(520);


/***/ })

},[929]);
//# sourceMappingURL=main.bundle.js.map