webpackJsonp([30],{

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventPageModule", function() { return AddEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_event__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddEventPageModule = /** @class */ (function () {
    function AddEventPageModule() {
    }
    AddEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */]),
            ],
        })
    ], AddEventPageModule);
    return AddEventPageModule;
}());

//# sourceMappingURL=add-event.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_schedules_schedules__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(285);
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







// import * as moment from 'moment';
var AddEventPage = /** @class */ (function () {
    function AddEventPage(alertCtrl, navCtrl, schedulePrv, navParams, user, loadingPrv, viewCtrl, toastPrv, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.schedulePrv = schedulePrv;
        this.navParams = navParams;
        this.user = user;
        this.loadingPrv = loadingPrv;
        this.viewCtrl = viewCtrl;
        this.toastPrv = toastPrv;
        this.modalCtrl = modalCtrl;
        this.schedule = {
            patient_id: '',
            scheduled_to: '',
            professional_id: '',
            time: '',
            patient: { name: '' },
            professional: { name: '' }
        };
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        this.schedule = this.navParams.get('event') ? this.navParams.get('event') : this.schedule;
        console.log('this.schedule', this.schedule);
        if (this.schedule.scheduled_to) {
            var scheduledTo = this.schedule.scheduled_to.split(' ');
            this.schedule.scheduled_to = scheduledTo[0];
            this.schedule.time = scheduledTo[1];
            this.schedule.professional.professional_id = this.schedule.professional.id ? this.schedule.professional.id : null;
            this.schedule.patient.patient_id = this.schedule.patient.id ? this.schedule.patient.id : null;
        }
        this.getLoggedUser();
    };
    AddEventPage.prototype.getLoggedUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.user.user()];
                    case 1:
                        _a.loggedUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddEventPage.prototype.save = function () {
        var _this = this;
        this.schedule.patient_id = this.schedule.patient ? this.schedule.patient.patient_id : null;
        this.schedule.professional_id = this.schedule.professional ? this.schedule.professional.professional_id : null;
        if (!this.schedule.time) {
            this.toastPrv.show('Informe o horário');
            return;
        }
        if (!this.schedule.patient_id) {
            this.toastPrv.show('Selecione um paciente');
            return;
        }
        if (!this.schedule.professional_id) {
            this.toastPrv.show('Selecione um profissional');
            return;
        }
        this.schedule.scheduled_to = this.schedule.scheduled_to + ' ' + this.schedule.time;
        this.loadingPrv.show('Gravando agendamento...');
        this.schedulePrv.save(this.schedule).subscribe(function (data) {
            _this.toastPrv.show('Agendamento salvo com sucesso');
            _this.loadingPrv.dismiss();
            _this.dismiss();
        }, function () {
            _this.loadingPrv.dismiss();
        });
    };
    AddEventPage.prototype.remove = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar remoção',
            message: 'Deseja remover o agendamento?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.loadingPrv.show('Removendo agendamento...');
                        _this.schedulePrv.delete(_this.schedule).subscribe(function (data) {
                            _this.toastPrv.show('Agendamento removido com sucesso');
                            _this.loadingPrv.dismiss();
                            _this.navCtrl.pop();
                        }, function () {
                            _this.loadingPrv.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AddEventPage.prototype.choosePatient = function () {
        var _this = this;
        var patientSearchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__index__["u" /* PatientSearchPage */]);
        patientSearchModal.onDidDismiss(function (data) {
            _this.schedule.patient = data.patient;
            console.log('patient', _this.schedule.patient);
        });
        patientSearchModal.present();
    };
    AddEventPage.prototype.changeProfessional = function () {
        var _this = this;
        var searchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__index__["w" /* ProfessionalSearchPage */]);
        searchModal.onDidDismiss(function (data) {
            _this.schedule.professional = data.professional;
            console.log('professional', _this.schedule.professional);
        });
        searchModal.present();
    };
    AddEventPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/schedules/add-event/add-event.html"*/'<!--\n  Generated template for the AddEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agendamento</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="save()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Data</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"\n                      [(ngModel)]="schedule.scheduled_to" name="schedule.scheduled_to" [cancelText]="\'Cancelar\'" [doneText]="\'Pronto\'"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Horário</ion-label>\n        <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm"\n                      [(ngModel)]="schedule.time" name="schedule.time" [cancelText]="\'Cancelar\'" [doneText]="\'Pronto\'"></ion-datetime>\n      </ion-item>\n      <ion-item no-lines (click)="choosePatient()">\n        <ion-label floating>Paciente</ion-label>\n        <ion-input type="text" [(ngModel)]="schedule.patient.name" name="patient_name"></ion-input>\n      </ion-item>\n      <ion-item no-lines (click)="changeProfessional()">\n        <ion-label floating>Profissional</ion-label>\n        <ion-input type="text" [(ngModel)]="schedule.professional.name" name="professional_name"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <button ion-button type="submit" color="secondary" full>Salvar</button>\n      </ion-item>\n      <ion-item no-lines *ngIf="schedule.id">\n        <button ion-button type="button" full color="danger" (click)="remove()">Remover</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/schedules/add-event/add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_schedules_schedules__["a" /* SchedulesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ })

});
//# sourceMappingURL=30.js.map