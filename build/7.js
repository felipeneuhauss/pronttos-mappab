webpackJsonp([7],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesPageModule", function() { return SchedulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedules__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SchedulesPageModule = /** @class */ (function () {
    function SchedulesPageModule() {
    }
    SchedulesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedules__["a" /* SchedulesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedules__["a" /* SchedulesPage */]), __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__["a" /* FakeModule */]
            ],
        })
    ], SchedulesPageModule);
    return SchedulesPageModule;
}());

//# sourceMappingURL=schedules.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fake__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_fake__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FakeModule = /** @class */ (function () {
    function FakeModule() {
    }
    FakeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fake__["a" /* FakeComponent */], __WEBPACK_IMPORTED_MODULE_3__card_fake__["a" /* CardFakeComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__fake__["a" /* FakeComponent */], __WEBPACK_IMPORTED_MODULE_3__card_fake__["a" /* CardFakeComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], FakeModule);
    return FakeModule;
}());

//# sourceMappingURL=fake.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FakeComponent = /** @class */ (function () {
    function FakeComponent() {
        this.quantity = 15;
        this.fakeItems = new Array(15);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], FakeComponent.prototype, "quantity", void 0);
    FakeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fake',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/components/fake/fake.html"*/'<ion-list class="fake-items">\n  <ion-item *ngFor="let item of fakeItems">\n    <h2></h2>\n    <p></p>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/components/fake/fake.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FakeComponent);
    return FakeComponent;
}());

//# sourceMappingURL=fake.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardFakeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardFakeComponent = /** @class */ (function () {
    function CardFakeComponent() {
        this.fakeItems = new Array(7);
    }
    CardFakeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-fake',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/components/fake/card-fake.html"*/'<ion-card *ngFor="let item of fakeItems">\n  <ion-card-header>\n    <h5></h5>\n  </ion-card-header>\n  <ion-card-content>\n    <h3></h3>\n    <p></p>\n    <br />\n    <h3></h3>\n    <p></p>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/components/fake/card-fake.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CardFakeComponent);
    return CardFakeComponent;
}());

//# sourceMappingURL=card-fake.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_schedules_schedules__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decorators_analyticts_track_decorators__ = __webpack_require__(279);
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








/**
 * Generated class for the SchedulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulesPage = /** @class */ (function () {
    function SchedulesPage(navCtrl, navParams, alertCtrl, events, userPrv, calendar, modalCtrl, schedulesPrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.userPrv = userPrv;
        this.calendar = calendar;
        this.modalCtrl = modalCtrl;
        this.schedulesPrv = schedulesPrv;
        this.searching = true;
    }
    SchedulesPage.prototype.ionViewDidLoad = function () {
        this.date = new Date();
        this.daySelected = this.date.getDate();
        this.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        this.getLoggedUser();
        this.getDaysOfMonth();
        this.loadEventsToday();
        console.log('ionViewDidLoad SchedulesPage');
    };
    SchedulesPage.prototype.getLoggedUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userPrv.user()];
                    case 1:
                        _a.loggedUser = _b.sent();
                        this.events.publish(__WEBPACK_IMPORTED_MODULE_6__app_app_component__["c" /* __USER_LOGGED */], this.loggedUser);
                        return [2 /*return*/];
                }
            });
        });
    };
    SchedulesPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
                this.daysInNextMonth.push(l);
            }
        }
    };
    SchedulesPage.prototype.goToLastMonth = function () {
        this.daySelected = 0;
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    SchedulesPage.prototype.goToNextMonth = function () {
        this.daySelected = 0;
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    SchedulesPage.prototype.addEvent = function (event) {
        var _this = this;
        if (!event) {
            var date = this.currentYear + '-' + (this.prepareMonth(this.date.getMonth())) + '-' + this.prepareDay(this.daySelected);
            event = { patient_id: '', scheduled_to: date, professional_id: '', patient: { name: '' }, professional: { name: '' } };
        }
        event = Object.assign({}, event);
        var evolutionDetailModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AddEventPage */], { event: event });
        evolutionDetailModal.onDidDismiss(function () {
            _this.loadEventsToday();
        });
        evolutionDetailModal.present();
    };
    SchedulesPage.prototype.openHospitalMonitoring = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index__["l" /* HospitalMonitoringPage */]);
    };
    SchedulesPage.prototype.openEvolutions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index__["g" /* EvolutionsPage */]);
    };
    SchedulesPage.prototype.loadEventsToday = function () {
        var _this = this;
        this.eventList = new Array();
        var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
        this.searching = true;
        this.schedulesPrv.query(this.formatDate(startDate, true)).subscribe(function (data) {
            _this.searching = false;
            _this.eventList = data;
        });
    };
    SchedulesPage.prototype.checkEvent = function (day) {
        var date = this.date.getFullYear() + "-" + (this.prepareMonth()) + "-" + day;
        var eventsFound = [];
        if (this.eventList && this.eventList.length) {
            eventsFound = this.eventList.filter(function (item) {
                return item.scheduled_to.split(' ')[0] === date;
            });
        }
        return eventsFound.length;
    };
    SchedulesPage.prototype.selectDate = function (day) {
        var _this = this;
        this.daySelected = day;
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day;
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day;
        this.searching = true;
        this.schedulesPrv.query(thisDate1, thisDate2).subscribe(function (data) {
            _this.searching = false;
            _this.eventList = data;
        });
    };
    SchedulesPage.prototype.deleteEvent = function (evt) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure want to delete this event?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(function (msg) {
                            console.log(msg);
                            _this.loadEventsToday();
                            _this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SchedulesPage.prototype.formatDate = function (date, hideTime, twentyFourHours) {
        var hours = '';
        if (!hideTime) {
            hours = '00:00:00';
            if (twentyFourHours) {
                hours = '23:59:59';
            }
        }
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        var day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        return (date.getFullYear() + "-" + month + "-" + day + " " + hours).trim();
    };
    SchedulesPage.prototype.prepareMonth = function (month) {
        month = month ? month + 1 : this.date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        return month;
    };
    SchedulesPage.prototype.prepareDay = function (day) {
        if (day < 10) {
            day = '0' + day;
        }
        return day;
    };
    SchedulesPage.prototype.patientHouseholdMonitoring = function (event) {
        // if (event.attended_in_formatted) {
        //   return;
        // }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index__["t" /* PatientHouseholdMonitoringPage */], { schedule: event });
    };
    SchedulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__decorators_analyticts_track_decorators__["b" /* AnalytictsTrack */])('[AGENDAMENTO] Tela de agendamentos'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-schedules',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/schedules/schedules.html"*/'<!--\n  Generated template for the SchedulesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-buttons start mode="ios">-->\n      <!--<button ion-button menuToggle>-->\n        <!--<ion-icon name="menu"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n    <ion-title>Agendamentos</ion-title>\n    <ion-buttons end>\n      <button ion-button clear icon-only (click)="openHospitalMonitoring()">\n        <ion-icon name="medkit"></ion-icon>\n      </button>\n      <button ion-button clear icon-only (click)="openEvolutions()">\n        <ion-icon name="folder"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="calendar-wrapper">\n    <div class="calendar-header">\n      <ion-row class="calendar-month">\n        <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n        <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n        <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n      </ion-row>\n    </div>\n    <div class="calendar-body">\n      <ion-grid>\n        <ion-row class="calendar-weekday">\n          <ion-col class="weekend">D</ion-col>\n          <ion-col>S</ion-col>\n          <ion-col>T</ion-col>\n          <ion-col>Q</ion-col>\n          <ion-col>Q</ion-col>\n          <ion-col>S</ion-col>\n          <ion-col class="weekend">S</ion-col>\n        </ion-row>\n        <ion-row class="calendar-date">\n          <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" (click)="goToLastMonth()"></ion-col>\n          <ion-col col-1 *ngFor="let day of daysInThisMonth" (click)="selectDate(day)" class="months-day"\n                   [ngClass]="{\'daySelected\': this.daySelected === day,  \'currentDate\' : currentDate === day}">\n            <span *ngIf="currentDate === day; else otherDate">{{day}}</span>\n            <ng-template #otherDate class="otherDate">\n                <span>\n                {{day}}<br>\n                <!--<div class="event-bullet" *ngIf="checkEvent(day)"></div>-->\n                </span>\n            </ng-template>\n          </ion-col>\n          <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="goToNextMonth()"></ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <card-fake *ngIf="searching"></card-fake>\n\n  <ion-card *ngIf="!searching && !eventList?.length" class="empty-schedule">\n    <div text-center>\n      <p>\n        Nenhum agendamento para essa data\n      </p>\n    </div>\n  </ion-card>\n\n  <div class="selected-event" *ngIf="eventList?.length">\n    <ion-card *ngFor="let event of eventList">\n\n      <ion-card-header>\n         <h5>\n           {{event.scheduled_to_formatted}}\n           <button ion-button clear icon-only (click)="addEvent(event)">\n             <ion-icon name="create"></ion-icon>\n           </button>\n         </h5>\n      </ion-card-header>\n\n      <ion-card-content (click)="patientHouseholdMonitoring(event)">\n        <ion-grid no-margin no-padding>\n          <ion-row no-margin no-padding>\n            <ion-col col-10 text-left>\n              <div>\n                <label>Paciente </label> <br />\n                <strong>{{event.patient.user.name}}</strong>\n              </div>\n              <div class="professional">\n                <label>Profissional </label> <br />\n                <div class="square" [style.backgroundColor]="event.professional.color"></div>\n                <strong>\n                  {{event.professional.user.name}}\n                </strong>\n              </div>\n              <div *ngIf="event.attended_in_formatted" >\n                <span>Atendido em {{event.attended_in_formatted}}</span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addEvent()"><ion-icon name="add"></ion-icon></button>\n    <!--<ion-fab-list side="right">-->\n      <!--<button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>-->\n    <!--</ion-fab-list>-->\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/schedules/schedules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_schedules_schedules__["a" /* SchedulesProvider */]])
    ], SchedulesPage);
    return SchedulesPage;
}());

//# sourceMappingURL=schedules.js.map

/***/ })

});
//# sourceMappingURL=7.js.map