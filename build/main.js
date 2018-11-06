webpackJsonp([49],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TokenManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TokenManagerProvider = /** @class */ (function () {
    function TokenManagerProvider() {
    }
    TokenManagerProvider.prototype.setToken = function (token, expiration) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expiration);
    };
    TokenManagerProvider.prototype.validateToken = function (token, expiration) {
        if (token === undefined || !token || !expiration || token == 'undefined') {
            return false;
        }
        return !(Date.now() > parseInt(expiration));
    };
    TokenManagerProvider.prototype.getToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var token = localStorage.getItem('token');
            var expiration = localStorage.getItem('expiration');
            if (_this.validateToken(token, expiration)) {
                resolve(token);
            }
            reject(null);
        });
    };
    TokenManagerProvider.prototype.getStaticToken = function () {
        return localStorage.getItem('token');
    };
    TokenManagerProvider.prototype.hasToken = function () {
        var token = localStorage.getItem('token');
        var expiration = localStorage.getItem('expiration');
        return !(token === undefined || !token || !expiration || token == 'undefined');
    };
    TokenManagerProvider.prototype.destroyToken = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    };
    TokenManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TokenManagerProvider);
    return TokenManagerProvider;
}());

//# sourceMappingURL=token-manager.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __TUTORIAL_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __USER_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_token_manager_token_manager__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__decorators_analyticts_track_decorators__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var __TUTORIAL_READ = '__tutorial_read';
var __USER_LOGGED = 'user:logged';
var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, storage, events, tokenManagerProvider, config, goolAnalytics, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.storage = storage;
        this.events = events;
        this.tokenManagerProvider = tokenManagerProvider;
        this.config = config;
        this.goolAnalytics = goolAnalytics;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.pages = [
            { title: 'Meus dados', component: 'ProfilePage' },
            { title: 'Agendamentos', component: 'SchedulesPage' },
            { title: 'Evoluções', component: 'EvolutionsPage' },
            { title: 'Profissionais', component: 'ProfessionalsPage' },
            { title: 'Pacientes', component: 'PatientsPage' },
            { title: 'Clínicas', component: 'ClinicsPage' },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.initialPage();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
        this.initEvents();
        this.initGoogleAnalytics();
    }
    MyApp.prototype.logout = function () {
        this.loggedUser = null;
        this.nav.setRoot('WelcomePage');
    };
    MyApp.prototype.initEvents = function () {
        var _this = this;
        this.events.subscribe(__USER_LOGGED, function (user) {
            // user logged. event published on login page
            _this.loggedUser = user;
        });
    };
    MyApp.prototype.initialPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.chooseInitialPage()];
                    case 1:
                        _a.rootPage = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.chooseInitialPage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.tokenManagerProvider.getToken().then(function () {
                resolve(__WEBPACK_IMPORTED_MODULE_5__pages__["o" /* MainPage */]);
                return;
            }, function () {
                _this.storage.get(__TUTORIAL_READ).then(function (tutorialRead) {
                    if (tutorialRead) {
                        resolve(__WEBPACK_IMPORTED_MODULE_5__pages__["G" /* WelcomePage */]);
                        return;
                    }
                    resolve(__WEBPACK_IMPORTED_MODULE_5__pages__["k" /* FirstRunPage */]);
                    return;
                });
            });
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('pt');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        this.nav.push(page.component);
    };
    MyApp.prototype.initGoogleAnalytics = function () {
        if (!this.platform.is('cordova')) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://www.googletagmanager.com/gtag/js?id=" + __WEBPACK_IMPORTED_MODULE_10__decorators_analyticts_track_decorators__["a" /* ANALYTICS_TRACK_ID */];
            document.getElementsByTagName("head")[0].append(script);
            var scriptGtag = document.createElement("script");
            scriptGtag.innerHTML = "if (!window.cordova) { window.dataLayer = window.dataLayer || []; " +
                " function gtag(){dataLayer.push(arguments);} gtag('js', new Date());}";
            document.getElementsByTagName("head")[0].append(scriptGtag);
            return;
        }
        this.goolAnalytics.startTrackerWithId(__WEBPACK_IMPORTED_MODULE_10__decorators_analyticts_track_decorators__["a" /* ANALYTICS_TRACK_ID */])
            .then(function () {
            console.info('Google analytics is ready now');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n  <ion-split-pane when=\"md\">\n    <!--<ion-menu [content]=\"content\" *ngIf=\"loggedUser\">-->\n      <!--<ion-header>-->\n        <!--<ion-toolbar>-->\n          <!--<ion-title>Menu</ion-title>-->\n        <!--</ion-toolbar>-->\n      <!--</ion-header>-->\n  <!---->\n      <!--<ion-content>-->\n        <!--<ion-list>-->\n          <!--<button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">-->\n            <!--{{p.title}}-->\n          <!--</button>-->\n          <!--<button menuClose ion-item (click)=\"logout()\"> Sair </button>-->\n        <!--</ion-list>-->\n      <!--</ion-content>-->\n  <!---->\n    <!--</ion-menu>-->\n    <ion-nav #content main [root]=\"rootPage\" swipeBackEnabled=\"false\"></ion-nav>\n  </ion-split-pane>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_8__providers_token_manager_token_manager__["a" /* TokenManagerProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return injector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


var injector;
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]).then(function (ref) { return injector = ref.injector; });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(353);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(354);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		471,
		46
	],
	"../pages/clinics/clinic-detail/clinic-detail.module": [
		485,
		45
	],
	"../pages/clinics/clinics.module": [
		473,
		19
	],
	"../pages/color-pick/color-pick.module": [
		472,
		44
	],
	"../pages/content/content.module": [
		474,
		43
	],
	"../pages/drugs/drug-detail/drug-detail.module": [
		475,
		42
	],
	"../pages/drugs/drugs.module": [
		476,
		18
	],
	"../pages/evolutions/evolution-filter/evolution-filter.module": [
		477,
		22
	],
	"../pages/evolutions/evolutions.module": [
		478,
		17
	],
	"../pages/exam-clinic-search/exam-clinic-search.module": [
		479,
		16
	],
	"../pages/exams/exam-detail/exam-detail.module": [
		480,
		41
	],
	"../pages/exams/exam-search/exam-search.module": [
		481,
		15
	],
	"../pages/exams/exams.module": [
		482,
		14
	],
	"../pages/hospital-monitoring/hospital-monitoring.module": [
		483,
		2
	],
	"../pages/hospitals/hospital-search/hospital-search.module": [
		484,
		13
	],
	"../pages/hospitals/hospitals.module": [
		486,
		40
	],
	"../pages/item-create/item-create.module": [
		487,
		39
	],
	"../pages/item-detail/item-detail.module": [
		488,
		38
	],
	"../pages/list-master/list-master.module": [
		489,
		37
	],
	"../pages/login/login.module": [
		490,
		36
	],
	"../pages/menu/menu.module": [
		491,
		35
	],
	"../pages/patient-monitoring-history/patient-monitoring-history.module": [
		492,
		34
	],
	"../pages/patients/patient-detail/patient-detail.module": [
		493,
		20
	],
	"../pages/patients/patient-evolutions/evolution-detail/evolution-detail.module": [
		496,
		33
	],
	"../pages/patients/patient-evolutions/patient-evolutions.module": [
		499,
		12
	],
	"../pages/patients/patient-hospital-monitoring/patient-hospital-monitoring.module": [
		497,
		21
	],
	"../pages/patients/patient-household-monitoring/patient-household-monitoring.module": [
		498,
		3
	],
	"../pages/patients/patient-search/patient-search.module": [
		500,
		11
	],
	"../pages/patients/patients.module": [
		501,
		10
	],
	"../pages/professionals/professional-detail/professional-detail.module": [
		502,
		1
	],
	"../pages/professionals/professional-search/professional-search.module": [
		503,
		9
	],
	"../pages/professionals/professionals.module": [
		505,
		8
	],
	"../pages/profile/edit-profile/edit-profile.module": [
		504,
		32
	],
	"../pages/profile/profile.module": [
		506,
		0
	],
	"../pages/schedule-detail/schedule-detail.module": [
		507,
		31
	],
	"../pages/schedules/add-event/add-event.module": [
		514,
		30
	],
	"../pages/schedules/schedules.module": [
		508,
		7
	],
	"../pages/search/search.module": [
		512,
		29
	],
	"../pages/settings/settings.module": [
		509,
		28
	],
	"../pages/signup/signup.module": [
		510,
		27
	],
	"../pages/specialization-clinic-search/specialization-clinic-search.module": [
		511,
		6
	],
	"../pages/specializations/specialization-detail/specialization-detail.module": [
		513,
		26
	],
	"../pages/specializations/specialization-search/specialization-search.module": [
		515,
		5
	],
	"../pages/specializations/specializations.module": [
		516,
		4
	],
	"../pages/tabs/tabs.module": [
		517,
		25
	],
	"../pages/tutorial/tutorial.module": [
		519,
		24
	],
	"../pages/welcome/welcome.module": [
		518,
		23
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return WelcomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return Tab5Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ProfessionalDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PatientDetailPage; });
/* unused harmony export PatientsPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return PatientSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ProfessionalSearchPage; });
/* unused harmony export ScheduleDetailPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SchedulesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EvolutionFilterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PatientEvolutionsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PatientEvolutionDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return PatientHouseholdMonitoringPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return PatientHospitalMonitoringPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return HospitalSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DrugsPage; });
/* unused harmony export DrugDetailPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SpecializationClinicSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ExamClinicSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return HospitalMonitoringPage; });
/* unused harmony export SpecializationsPage */
/* unused harmony export ExamsPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ExamDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SpecializationDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClinicDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SpecializationSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ExamSearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ColorPickPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EvolutionsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LoginPage; });
/* unused harmony export ProfilePage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EditProfilePage; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
var WelcomePage = 'WelcomePage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// export const MainPage = 'SchedulesPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'SchedulesPage';
var Tab2Root = 'ProfessionalsPage';
var Tab3Root = 'PatientsPage';
var Tab4Root = 'ClinicsPage';
var Tab5Root = 'ProfilePage';
var ProfessionalDetailPage = 'ProfessionalDetailPage';
var PatientDetailPage = 'PatientDetailPage';
var PatientsPage = 'PatientsPage';
var PatientSearchPage = 'PatientSearchPage';
var ProfessionalSearchPage = 'ProfessionalSearchPage';
var ScheduleDetailPage = 'ScheduleDetailPage';
var SchedulesPage = 'SchedulesPage';
var AddEventPage = 'AddEventPage';
var EvolutionFilterPage = 'EvolutionFilterPage';
var PatientEvolutionsPage = 'PatientEvolutionsPage';
var PatientEvolutionDetailPage = 'PatientEvolutionDetailPage';
var PatientHouseholdMonitoringPage = 'PatientHouseholdMonitoringPage';
var PatientHospitalMonitoringPage = 'PatientHospitalMonitoringPage';
var HospitalSearchPage = 'HospitalSearchPage';
var DrugsPage = 'DrugsPage';
var DrugDetailPage = 'DrugDetailPage';
var SpecializationClinicSearchPage = 'SpecializationClinicSearchPage';
var ExamClinicSearchPage = 'ExamClinicSearchPage';
var HospitalMonitoringPage = 'HospitalMonitoringPage';
var SpecializationsPage = 'SpecializationsPage';
var ExamsPage = 'ExamsPage';
var ExamDetailPage = 'ExamDetailPage';
var SpecializationDetailPage = 'SpecializationDetailPage';
var ClinicDetailPage = 'ClinicDetailPage';
var SpecializationSearchPage = 'SpecializationSearchPage';
var ExamSearchPage = 'ExamSearchPage';
var ColorPickPage = 'ColorPickPage';
var EvolutionsPage = 'EvolutionsPage';
var LoginPage = 'LoginPage';
var ProfilePage = 'ProfilePage';
var EditProfilePage = 'EditProfilePage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastProvider = /** @class */ (function () {
    function ToastProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastProvider Provider');
    }
    ToastProvider.prototype.show = function (message, time) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            closeButtonText: 'Fechar',
            duration: time ? time : 4000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecializationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_cache__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SpecializationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SpecializationsProvider = /** @class */ (function () {
    function SpecializationsProvider(api, cache) {
        this.api = api;
        this.cache = cache;
        this.cacheKey = 'specializations';
        console.log('Hello SpecializationsProvider Provider');
    }
    SpecializationsProvider.prototype.query = function (params) {
        var request = this.api.get('specializations', params);
        return this.cache.loadFromObservable(this.cacheKey, request).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res.data; }));
    };
    SpecializationsProvider.prototype.save = function (item) {
        if (!item.id) {
            return this.api.post('specializations', item).map(function (data) {
                return data.data;
            });
        }
        return this.api.put('specializations/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    SpecializationsProvider.prototype.remove = function (item) {
        return this.api.delete('specializations/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    SpecializationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2_ionic_cache__["b" /* CacheService */]])
    ], SpecializationsProvider);
    return SpecializationsProvider;
}());

//# sourceMappingURL=specializations.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolutionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EvolutionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EvolutionsProvider = /** @class */ (function () {
    function EvolutionsProvider(http, api) {
        this.http = http;
        this.api = api;
        console.log('Hello EvolutionsProvider Provider');
    }
    EvolutionsProvider.prototype.query = function (params) {
        return this.api.get('patient-evolutions', params).map(function (data) {
            return data.data;
        });
    };
    EvolutionsProvider.prototype.patientEvolutions = function (patientId) {
        return this.api.get('patient-evolutions?patient_id=' + patientId).map(function (data) {
            var items = data.data;
            return items;
        });
    };
    EvolutionsProvider.prototype.save = function (patientEvolution) {
        if (!patientEvolution.id) {
            return this.api.post('patient-evolutions', patientEvolution).map(function (data) {
                return data.data;
            });
        }
        return this.api.put('patient-evolutions/' + patientEvolution.id, patientEvolution).map(function (data) {
            return data.data;
        });
    };
    EvolutionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2____["a" /* Api */]])
    ], EvolutionsProvider);
    return EvolutionsProvider;
}());

//# sourceMappingURL=evolutions.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANALYTICS_TRACK_ID; });
/* harmony export (immutable) */ __webpack_exports__["b"] = AnalytictsTrack;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_google_analytics__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_inject__ = __webpack_require__(356);


var ANALYTICS_TRACK_ID = 'UA-127707998-1';
function AnalytictsTrack(page) {
    return function (constructor) {
        var LIFECYCLE_HOOKS = [
            'ionViewWillEnter',
        ];
        LIFECYCLE_HOOKS.forEach(function (hook) {
            constructor.prototype[hook] = function () {
                if (!window.cordova) {
                    gtag('config', ANALYTICS_TRACK_ID, {
                        'page_title': page,
                        'page_location': page,
                        'page_path': page
                    });
                }
                else {
                    var goolAnalytics_1 = Object(__WEBPACK_IMPORTED_MODULE_1__utils_inject__["a" /* inject */])(__WEBPACK_IMPORTED_MODULE_0__ionic_native_google_analytics__["a" /* GoogleAnalytics */]);
                    goolAnalytics_1.startTrackerWithId(ANALYTICS_TRACK_ID).then(function () {
                        goolAnalytics_1.trackView(page);
                    });
                }
            };
        });
    };
}
//# sourceMappingURL=analyticts-track.decorators.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
var Functions = /** @class */ (function () {
    function Functions() {
    }
    Functions._sortBy = function (items, property) {
        function compare(a, b) {
            if (a[property] < b[property])
                return -1;
            if (a[property] > b[property])
                return 1;
            return 0;
        }
        items.sort(compare);
        return items;
    };
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamTypesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functions__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ExamTypesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExamTypesProvider = /** @class */ (function () {
    function ExamTypesProvider(api) {
        this.api = api;
        console.log('Hello ExamTypesProvider Provider');
    }
    ExamTypesProvider.prototype.query = function (params) {
        return this.api.get('exam-types', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_2__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    ExamTypesProvider.prototype.save = function (item) {
        if (!item.id) {
            return this.api.post('exam-types', item).map(function (data) {
                return data.data;
            });
        }
        return this.api.put('exam-types/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    ExamTypesProvider.prototype.remove = function (item) {
        return this.api.delete('exam-types/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    ExamTypesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["a" /* Api */]])
    ], ExamTypesProvider);
    return ExamTypesProvider;
}());

//# sourceMappingURL=exam-types.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patients; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functions__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Patients = /** @class */ (function () {
    function Patients(api) {
        this.api = api;
    }
    Patients.prototype.query = function (params) {
        return this.api.get('patients', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_2__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    Patients.prototype.get = function (id) {
        return this.api.get('patients/' + id).map(function (data) {
            return data.data;
        });
    };
    Patients.prototype.add = function (item) {
    };
    Patients.prototype.delete = function (item) {
    };
    Patients = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]])
    ], Patients);
    return Patients;
}());

//# sourceMappingURL=patients.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientHouseholdMonitoringProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PatientHouseholdMonitoringProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PatientHouseholdMonitoringProvider = /** @class */ (function () {
    function PatientHouseholdMonitoringProvider(api) {
        this.api = api;
        console.log('Hello PatientHouseholdMonitoringProvider Provider');
    }
    PatientHouseholdMonitoringProvider.prototype.query = function (params) {
        return this.api.get('patient-monitoring', params).map(function (data) {
            return data.datat;
        });
    };
    PatientHouseholdMonitoringProvider.prototype.get = function (id) {
        return this.api.get('patient-monitoring/' + id).map(function (data) {
            return data.data;
        });
    };
    PatientHouseholdMonitoringProvider.prototype.save = function (item) {
        if (!item.id) {
            return this.api.post('patient-monitoring', item).map(function (data) {
                return data.data;
            });
        }
        return this.api.put('patient-monitoring/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    PatientHouseholdMonitoringProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["a" /* Api */]])
    ], PatientHouseholdMonitoringProvider);
    return PatientHouseholdMonitoringProvider;
}());

//# sourceMappingURL=patient-household-monitoring.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StatesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StatesProvider = /** @class */ (function () {
    function StatesProvider(api) {
        this.api = api;
        console.log('Hello StatesProvider Provider');
    }
    StatesProvider.prototype.query = function (params) {
        return this.api.get('states', params).map(function (data) {
            return data.data;
        });
    };
    StatesProvider.prototype.cities = function (stateId) {
        return this.api.get('states/' + stateId + '/cities').map(function (data) {
            return data;
        });
    };
    StatesProvider.prototype.save = function (item) {
        if (!item.id) {
            return this.api.post('states', item).map(function (data) {
                return data.data;
            });
        }
        return this.api.put('states/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    StatesProvider.prototype.remove = function (item) {
        return this.api.delete('states/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    StatesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["a" /* Api */]])
    ], StatesProvider);
    return StatesProvider;
}());

//# sourceMappingURL=states.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello LoadingProvider Provider');
    }
    LoadingProvider.prototype.show = function (message) {
        if (message === void 0) { message = 'Aguarde...'; }
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    LoadingProvider.prototype.dismiss = function () {
        this.loading.dismiss();
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Professionals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Professionals = /** @class */ (function () {
    function Professionals(api) {
        this.api = api;
    }
    Professionals.prototype.query = function (params) {
        return this.api.get('professionals', params).map(function (data) {
            return data.data;
        });
    };
    Professionals.prototype.get = function (id) {
        return this.api.get('professionals/' + id).map(function (data) {
            return data.data;
        });
    };
    Professionals.prototype.add = function (item) {
    };
    Professionals.prototype.delete = function (item) {
    };
    Professionals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]])
    ], Professionals);
    return Professionals;
}());

//# sourceMappingURL=professionals.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ClinicsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClinicsProvider = /** @class */ (function () {
    function ClinicsProvider(api) {
        this.api = api;
        console.log('Hello ClinicsProvider Provider');
    }
    ClinicsProvider.prototype.query = function (params) {
        return this.api.get('clinics', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_1__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    ClinicsProvider.prototype.save = function (item) {
        if (!item.id) {
            return this.api.post('clinics', item).map(function (data) {
                return data.data;
            });
        }
        return this.api.put('clinics/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    ClinicsProvider.prototype.remove = function (item) {
        return this.api.delete('clinics/' + item.id, item).map(function (data) {
            return data.data;
        });
    };
    ClinicsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2____["a" /* Api */]])
    ], ClinicsProvider);
    return ClinicsProvider;
}());

//# sourceMappingURL=clinics.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SchedulesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SchedulesProvider = /** @class */ (function () {
    function SchedulesProvider(api) {
        this.api = api;
        console.log('Hello SchedulesProvider Provider');
    }
    SchedulesProvider.prototype.query = function (startsIn, endsIn, patientId, professionalId) {
        var params = [];
        if (startsIn) {
            params.push('starts_in=' + startsIn);
        }
        if (endsIn) {
            params.push('ends_in=' + endsIn);
        }
        if (patientId) {
            params.push('patient_id=' + patientId);
        }
        if (professionalId) {
            params.push('professional_id=' + professionalId);
        }
        var urlParams = params.length ? '?' + params.join('&') : '';
        return this.api.get('schedules' + urlParams).map(function (data) {
            return data.data;
        });
    };
    SchedulesProvider.prototype.add = function (item) {
        return this.api.post('schedules', item);
    };
    SchedulesProvider.prototype.save = function (item) {
        if (!item.id) {
            return this.api.post('schedules', item);
        }
        return this.api.put('schedules/' + item.id, item);
    };
    SchedulesProvider.prototype.delete = function (item) {
        return this.api.delete('schedules/' + item.id);
    };
    SchedulesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]])
    ], SchedulesProvider);
    return SchedulesProvider;
}());

//# sourceMappingURL=schedules.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DRUG_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrugModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_model__ = __webpack_require__(357);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */

var DRUG_BASE_URL = 'https://www.medicinanet.com.br';
var DrugModel = /** @class */ (function (_super) {
    __extends(DrugModel, _super);
    function DrugModel(mapper) {
        var _this = _super.call(this) || this;
        _this.mapper = mapper;
        return _this;
    }
    DrugModel.fromData = function (data) {
        return new DrugModel(data);
    };
    return DrugModel;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_model__["a" /* AbstractModel */]));

//# sourceMappingURL=drug.model.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_drug_model__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DrugsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DrugsProvider = /** @class */ (function () {
    function DrugsProvider(api) {
        this.api = api;
        console.log('Hello DrugsProvider Provider');
    }
    DrugsProvider.prototype.query = function (params) {
        return this.api.get('drugs', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_2__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return __WEBPACK_IMPORTED_MODULE_1__models_drug_model__["b" /* DrugModel */].fromResponse(items);
        });
    };
    DrugsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3____["a" /* Api */]])
    ], DrugsProvider);
    return DrugsProvider;
}());

//# sourceMappingURL=drugs.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalMonitoringProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_functions__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HospitalMonitoringProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HospitalMonitoringProvider = /** @class */ (function () {
    function HospitalMonitoringProvider(api) {
        this.api = api;
        console.log('Hello HospitalMonitoringProvider Provider');
    }
    HospitalMonitoringProvider.prototype.patientHospitalized = function () {
        return this.api.get('patient-hospitalized').map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_2__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    HospitalMonitoringProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["a" /* Api */]])
    ], HospitalMonitoringProvider);
    return HospitalMonitoringProvider;
}());

//# sourceMappingURL=hospital-monitoring.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HospitalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HospitalsProvider = /** @class */ (function () {
    function HospitalsProvider(api) {
        this.api = api;
        console.log('Hello HospitalsProvider Provider');
    }
    HospitalsProvider.prototype.query = function (params) {
        return this.api.get('hospitals', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_1__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    HospitalsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], HospitalsProvider);
    return HospitalsProvider;
}());

//# sourceMappingURL=hospitals.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalConductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HospitalConductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HospitalConductProvider = /** @class */ (function () {
    function HospitalConductProvider(api) {
        this.api = api;
        console.log('Hello HospitalConductProvider Provider');
    }
    HospitalConductProvider.prototype.query = function (params) {
        return this.api.get('hospital-conducts', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_1__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    HospitalConductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2____["a" /* Api */]])
    ], HospitalConductProvider);
    return HospitalConductProvider;
}());

//# sourceMappingURL=hospital-conduct.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalDischargeMotiveProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HospitalDischargeMotiveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HospitalDischargeMotiveProvider = /** @class */ (function () {
    function HospitalDischargeMotiveProvider(api) {
        this.api = api;
        console.log('Hello HospitalDischargeMotiveProvider Provider');
    }
    HospitalDischargeMotiveProvider.prototype.query = function (params) {
        return this.api.get('hospital-discharge-motives', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_1__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    HospitalDischargeMotiveProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2____["a" /* Api */]])
    ], HospitalDischargeMotiveProvider);
    return HospitalDischargeMotiveProvider;
}());

//# sourceMappingURL=hospital-discharge-motive.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccommodationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AccommodationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AccommodationsProvider = /** @class */ (function () {
    function AccommodationsProvider(api) {
        this.api = api;
        console.log('Hello AccommodationsProvider Provider');
    }
    AccommodationsProvider.prototype.query = function (params) {
        return this.api.get('accommodations', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_1__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    AccommodationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2____["a" /* Api */]])
    ], AccommodationsProvider);
    return AccommodationsProvider;
}());

//# sourceMappingURL=accommodations.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalConductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MedicalConductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MedicalConductProvider = /** @class */ (function () {
    function MedicalConductProvider(api) {
        this.api = api;
        console.log('Hello MedicalConductProvider Provider');
    }
    MedicalConductProvider.prototype.query = function (params) {
        return this.api.get('medical-conducts', params).map(function (data) {
            var items = __WEBPACK_IMPORTED_MODULE_1__utils_functions__["a" /* Functions */]._sortBy(data.data, 'name');
            return items;
        });
    };
    MedicalConductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2____["a" /* Api */]])
    ], MedicalConductProvider);
    return MedicalConductProvider;
}());

//# sourceMappingURL=medical-conduct.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_config__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_professionals_professionals__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_patients_patients__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_evolutions_evolutions__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_calendar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_schedules_schedules__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_token_manager_token_manager__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_clinics_clinics__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_hospitals_hospitals__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_exam_types_exam_types__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_patient_household_monitoring_patient_household_monitoring__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_medical_conduct_medical_conduct__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_drugs_drugs__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_specializations_specializations__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_hospital_monitoring_hospital_monitoring__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_hospital_conduct_hospital_conduct__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_hospital_discharge_motive_hospital_discharge_motive__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_accommodations_accommodations__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_states_states__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_brmasker_ionic_3__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ionic_cache__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_google_analytics__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_loading_loading__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_11__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_34_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_35_ionic_cache__["a" /* CacheModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* AppConfig */], {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/color-pick/color-pick.module#ColorPickPageModule', name: 'ColorPickPage', segment: 'color-pick', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinics/clinics.module#ClinicsPageModule', name: 'ClinicsPage', segment: 'clinics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drugs/drug-detail/drug-detail.module#DrugDetailPageModule', name: 'DrugDetailPage', segment: 'drug-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/drugs/drugs.module#DrugsPageModule', name: 'DrugsPage', segment: 'drugs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evolutions/evolution-filter/evolution-filter.module#EvolutionFilterPageModule', name: 'EvolutionFilterPage', segment: 'evolution-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evolutions/evolutions.module#EvolutionsPageModule', name: 'EvolutionsPage', segment: 'evolutions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exam-clinic-search/exam-clinic-search.module#ExamClinicSearchPageModule', name: 'ExamClinicSearchPage', segment: 'exam-clinic-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exams/exam-detail/exam-detail.module#ExamDetailPageModule', name: 'ExamDetailPage', segment: 'exam-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exams/exam-search/exam-search.module#ExamSearchPageModule', name: 'ExamSearchPage', segment: 'exam-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exams/exams.module#ExamsPageModule', name: 'ExamsPage', segment: 'exams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospital-monitoring/hospital-monitoring.module#HospitalMonitoringPageModule', name: 'HospitalMonitoringPage', segment: 'hospital-monitoring', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospitals/hospital-search/hospital-search.module#HospitalSearchPageModule', name: 'HospitalSearchPage', segment: 'hospital-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinics/clinic-detail/clinic-detail.module#ClinicDetailPageModule', name: 'ClinicDetailPage', segment: 'clinic-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospitals/hospitals.module#HospitalsPageModule', name: 'HospitalsPage', segment: 'hospitals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patient-monitoring-history/patient-monitoring-history.module#PatientMonitoringHistoryPageModule', name: 'PatientMonitoringHistoryPage', segment: 'patient-monitoring-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patients/patient-detail/patient-detail.module#PatientDetailPageModule', name: 'PatientDetailPage', segment: 'patient-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patients/patient-evolutions/evolution-detail/evolution-detail.module#PatientEvolutionDetailPageModule', name: 'PatientEvolutionDetailPage', segment: 'evolution-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patients/patient-hospital-monitoring/patient-hospital-monitoring.module#PatientHospitalMonitoringPageModule', name: 'PatientHospitalMonitoringPage', segment: 'patient-hospital-monitoring', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patients/patient-household-monitoring/patient-household-monitoring.module#PatientHouseholdMonitoringPageModule', name: 'PatientHouseholdMonitoringPage', segment: 'patient-household-monitoring', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patients/patient-evolutions/patient-evolutions.module#PatientEvolutionsPageModule', name: 'PatientEvolutionsPage', segment: 'patient-evolutions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patients/patient-search/patient-search.module#PatientSearchPageModule', name: 'PatientSearchPage', segment: 'patient-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patients/patients.module#PatientsPageModule', name: 'PatientsPage', segment: 'patients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/professionals/professional-detail/professional-detail.module#ProfessionalDetailPageModule', name: 'ProfessionalDetailPage', segment: 'professional-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/professionals/professional-search/professional-search.module#ProfessionalSearchPageModule', name: 'ProfessionalSearchPage', segment: 'professional-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/professionals/professionals.module#ProfessionalsPageModule', name: 'ProfessionalsPage', segment: 'professionals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule-detail/schedule-detail.module#ScheduleDetailPageModule', name: 'ScheduleDetailPage', segment: 'schedule-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedules/schedules.module#SchedulesPageModule', name: 'SchedulesPage', segment: 'schedules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specialization-clinic-search/specialization-clinic-search.module#SpecializationClinicSearchPageModule', name: 'SpecializationClinicSearchPage', segment: 'specialization-clinic-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specializations/specialization-detail/specialization-detail.module#SpecializationDetailPageModule', name: 'SpecializationDetailPage', segment: 'specialization-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedules/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specializations/specialization-search/specialization-search.module#SpecializationSearchPageModule', name: 'SpecializationSearchPage', segment: 'specialization-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specializations/specializations.module#SpecializationsPageModule', name: 'SpecializationsPage', segment: 'specializations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_19__providers_token_manager_token_manager__["a" /* TokenManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_14__providers_professionals_professionals__["a" /* Professionals */],
                __WEBPACK_IMPORTED_MODULE_15__providers_patients_patients__["a" /* Patients */],
                __WEBPACK_IMPORTED_MODULE_18__providers_schedules_schedules__["a" /* SchedulesProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_evolutions_evolutions__["a" /* EvolutionsProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_schedules_schedules__["a" /* SchedulesProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_clinics_clinics__["a" /* ClinicsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_hospitals_hospitals__["a" /* HospitalsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_exam_types_exam_types__["a" /* ExamTypesProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_patient_household_monitoring_patient_household_monitoring__["a" /* PatientHouseholdMonitoringProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_medical_conduct_medical_conduct__["a" /* MedicalConductProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_drugs_drugs__["a" /* DrugsProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_specializations_specializations__["a" /* SpecializationsProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_hospital_monitoring_hospital_monitoring__["a" /* HospitalMonitoringProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_medical_conduct_medical_conduct__["a" /* MedicalConductProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_hospital_conduct_hospital_conduct__["a" /* HospitalConductProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_hospital_discharge_motive_hospital_discharge_motive__["a" /* HospitalDischargeMotiveProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_accommodations_accommodations__["a" /* AccommodationsProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_states_states__["a" /* StatesProvider */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_37__providers_loading_loading__["a" /* LoadingProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __USER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var __USER = '_user';
var User = /** @class */ (function () {
    function User(api, storage, events) {
        this.api = api;
        this.storage = storage;
        this.events = events;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var payload = {
                client_id: 1,
                client_secret: '8kBuAAMtIQT2HfwT5RzSbkl4xKUSMtoODszC4jXe',
                grant_type: 'password'
            };
            if (accountInfo.username && accountInfo.password) {
                payload.username = accountInfo.username;
                payload.password = accountInfo.password;
            }
            var seq = _this.api.login('oauth/token', payload);
            seq.then(function (res) {
                // If the API returned a successful response, mark the user as logged in
                _this._loggedIn(res);
                _this.api.get('user').subscribe(function (data) {
                    _this._user = data.data;
                    _this.storage.set(__USER, _this._user);
                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_4__app_app_component__["c" /* __USER_LOGGED */], _this._user);
                    resolve(res);
                });
            }, function (err) {
                console.error('ERROR', err);
                reject(err);
            });
        });
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.register('register-user', accountInfo);
        seq.then(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
        this.api.logout();
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp;
    };
    User.prototype.user = function () {
        return this.storage.get(__USER);
    };
    User.prototype.setUser = function (user) {
        this._user = user;
        this.storage.set(__USER, this._user);
    };
    User.prototype.save = function (item) {
        return this.api.put('users/' + item.id, item);
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_main__ = __webpack_require__(145);

var inject = function (type) {
    return __WEBPACK_IMPORTED_MODULE_0__app_main__["injector"].get(type);
};

//# sourceMappingURL=inject.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractModel; });
var AbstractModel = /** @class */ (function () {
    function AbstractModel() {
    }
    AbstractModel.fromResponse = function (data) {
        var _this = this;
        return data.map(function (item) { return _this.fromData(item); });
    };
    AbstractModel.fromData = function (data) {
        return data;
    };
    return AbstractModel;
}());

//# sourceMappingURL=abstract.model.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = {
    scrollPadding: false,
    scrollAssist: false,
    autoFocusAssist: true,
    backButtonText: '',
    toastDuration: 3000,
    toastPosition: 'top',
    swipeBackEnabled: false,
    http: {
        defaultOptions: {
            timeout: 30000
        }
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BASE_URL */
/* unused harmony export API_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_token_manager_token_manager__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// export const BASE_URL = 'http://mappab-api-prod.us-east-2.elasticbeanstalk.com/';
// export const BASE_URL = 'http://mappab-api-staging.us-east-2.elasticbeanstalk.com/';
var BASE_URL = 'http://mappab.local/';
var API_URL = BASE_URL + 'api';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http, tokenManagerProvider) {
        this.http = http;
        this.tokenManagerProvider = tokenManagerProvider;
        this.url = API_URL;
    }
    Api.prototype.login = function (endpoint, body, reqOpts) {
        var _this = this;
        reqOpts = reqOpts ? reqOpts : {};
        return new Promise(function (resolve, reject) {
            _this.http.post(BASE_URL + endpoint, body, reqOpts).subscribe(function (data) {
                _this.tokenManagerProvider.setToken(data.access_token, data.expires_in + Date.now());
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Api.prototype.register = function (endpoint, body, reqOpts) {
        var _this = this;
        reqOpts = reqOpts ? reqOpts : {};
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + '/' + endpoint, body, reqOpts).subscribe(function (data) {
                // this.tokenManagerProvider.setToken(data.access_token, data.expires_in + Date.now());
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Api.prototype.logout = function () {
        this.tokenManagerProvider.destroyToken();
    };
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        reqOpts.headers = this.getHeaders();
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        reqOpts = reqOpts ? reqOpts : {};
        reqOpts.headers = this.getHeaders();
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        reqOpts = reqOpts ? reqOpts : {};
        reqOpts.headers = this.getHeaders();
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        reqOpts = reqOpts ? reqOpts : {};
        reqOpts.headers = this.getHeaders();
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        reqOpts = reqOpts ? reqOpts : {};
        reqOpts.headers = this.getHeaders();
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + this.getToken());
        return headers;
    };
    Api.prototype.getToken = function () {
        return this.tokenManagerProvider.getStaticToken();
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_token_manager_token_manager__["a" /* TokenManagerProvider */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[145]);
//# sourceMappingURL=main.js.map