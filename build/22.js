webpackJsonp([22],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvolutionFilterPageModule", function() { return EvolutionFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evolution_filter__ = __webpack_require__(536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EvolutionFilterPageModule = /** @class */ (function () {
    function EvolutionFilterPageModule() {
    }
    EvolutionFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__evolution_filter__["a" /* EvolutionFilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__evolution_filter__["a" /* EvolutionFilterPage */]),
            ],
        })
    ], EvolutionFilterPageModule);
    return EvolutionFilterPageModule;
}());

//# sourceMappingURL=evolution-filter.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _EVOLUTION_DATA_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolutionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_evolutions_evolutions__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(275);
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
 * Generated class for the PatientEvolutionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var _EVOLUTION_DATA_FILTER = '_EVOLUTION_DATA_FILTER';
var EvolutionsPage = /** @class */ (function () {
    function EvolutionsPage(navCtrl, navParams, evolutions, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.evolutions = evolutions;
        this.modalCtrl = modalCtrl;
        this.searching = false;
        this.currentItems = [];
    }
    EvolutionsPage.prototype.ionViewDidLoad = function () {
        this.filterEvolutions({});
    };
    EvolutionsPage.prototype.openItem = function (item) {
        var evolutionDetailModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__index__["q" /* PatientEvolutionDetailPage */], { evolution: item });
        evolutionDetailModal.present();
    };
    EvolutionsPage.prototype.filter = function () {
        var _this = this;
        var evolutionFilterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__index__["f" /* EvolutionFilterPage */]);
        evolutionFilterModal.onDidDismiss(function (data) {
            if (data.cancel) {
                return;
            }
            _this.filterEvolutions(data);
        });
        evolutionFilterModal.present();
    };
    EvolutionsPage.prototype.filterEvolutions = function (params) {
        var _this = this;
        this.searching = true;
        this.currentItems = [];
        this.evolutions.query(params).subscribe(function (data) {
            _this.searching = false;
            _this.currentItems = data;
        });
    };
    EvolutionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-evolutions',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/evolutions/evolutions.html"*/'<!--\n  Generated template for the PatientEvolutionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Evoluções</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="filter()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <card-fake *ngIf="searching"></card-fake>\n  <ion-list>\n    <div *ngFor="let item of currentItems" class="evolution-wrapper">\n      <ion-card>\n        <ion-card-header>\n          <h5>{{item.created_at_formatted}}</h5>\n        </ion-card-header>\n        <ion-card-content>\n          <label>Paciente</label>\n          <h4 class="patient-data">{{item.patient_name}}</h4>\n          <label>Especialidade</label>\n          <h4 class="specialization-data">{{item.specialization_name}}</h4>\n          <label>Profissional</label>\n          <h4 class="professional-data">{{item.professional_name}}</h4>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-content>\n          {{item.description}}\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ion-list>\n\n  <div padding *ngIf="!currentItems.length && !searching">\n    <ion-card>\n      <ion-card-content>\n        <i>Nenhuma evolução registrada</i>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/evolutions/evolutions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_evolutions_evolutions__["a" /* EvolutionsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], EvolutionsPage);
    return EvolutionsPage;
}());

//# sourceMappingURL=evolutions.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolutionFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__evolutions__ = __webpack_require__(526);
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
 * Generated class for the EvolutionFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvolutionFilterPage = /** @class */ (function () {
    function EvolutionFilterPage(navCtrl, user, viewCtrl, modalCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.professional = { name: '' };
        this.patient = { name: '' };
        this.customOptions = {
            buttons: [{
                    text: 'Limpar',
                    handler: function () {
                        _this.date = null;
                    }
                }]
        };
    }
    EvolutionFilterPage.prototype.ionViewDidLoad = function () {
        this.getLoggedUser();
        this.initFilter();
    };
    EvolutionFilterPage.prototype.initFilter = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__evolutions__["b" /* _EVOLUTION_DATA_FILTER */]).then(function (evolutionFilterData) {
            if (evolutionFilterData) {
                _this.patient = evolutionFilterData.patient ? evolutionFilterData.patient : { name: '' };
                _this.professional = evolutionFilterData.professional ? evolutionFilterData.professional : { name: '' };
                _this.date = evolutionFilterData.date ? evolutionFilterData.date : '';
            }
        });
    };
    EvolutionFilterPage.prototype.getLoggedUser = function () {
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
    EvolutionFilterPage.prototype.dateChanged = function () {
        this.addNewFilterData('date', this.date);
    };
    EvolutionFilterPage.prototype.choosePatient = function () {
        var _this = this;
        var patientSearchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__index__["u" /* PatientSearchPage */]);
        patientSearchModal.onDidDismiss(function (data) {
            if (data.patient) {
                _this.patient = data.patient;
                _this.addNewFilterData('patient', _this.patient);
            }
        });
        patientSearchModal.present();
    };
    EvolutionFilterPage.prototype.changeProfessional = function () {
        var _this = this;
        var searchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__index__["w" /* ProfessionalSearchPage */]);
        searchModal.onDidDismiss(function (data) {
            if (data.professional) {
                _this.professional = data.professional;
                _this.addNewFilterData('professional', _this.professional);
            }
        });
        searchModal.present();
    };
    EvolutionFilterPage.prototype.dismiss = function (cancel) {
        var params = { cancel: cancel ? true : false };
        if (this.patient && this.patient.name && this.patient.patient_id) {
            params['patient_id'] = this.patient.patient_id;
        }
        if (this.professional && this.professional.name && this.professional.professional_id) {
            params['professional_id'] = this.professional.professional_id;
        }
        if (this.date) {
            params['created_at'] = this.date;
            this.addNewFilterData('date', this.date);
        }
        this.viewCtrl.dismiss(params);
    };
    EvolutionFilterPage.prototype.filter = function () {
        this.dismiss();
    };
    EvolutionFilterPage.prototype.addNewFilterData = function (field, value) {
        var _this = this;
        if (value !== undefined && value !== '' && value !== null) {
            this.storage.get(__WEBPACK_IMPORTED_MODULE_5__evolutions__["b" /* _EVOLUTION_DATA_FILTER */]).then(function (evolutionFilterData) {
                if (!evolutionFilterData) {
                    evolutionFilterData = { professional: '', patient: '', date: '' };
                }
                evolutionFilterData[field] = value;
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_5__evolutions__["b" /* _EVOLUTION_DATA_FILTER */], evolutionFilterData);
            });
        }
    };
    EvolutionFilterPage.prototype.clear = function () {
        this.professional = { name: '' };
        this.patient = { name: '' };
        this.date = '';
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__evolutions__["b" /* _EVOLUTION_DATA_FILTER */], null);
    };
    EvolutionFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-evolution-filter',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/evolutions/evolution-filter/evolution-filter.html"*/'<!--\n  Generated template for the EvolutionFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Filtrar evoluções</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss(true)">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <form (ngSubmit)="filter()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Data</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"\n                      [pickerOptions]="customOptions" (ionChange)="dateChanged()"\n                      [(ngModel)]="date" name="date" [cancelText]="\'Cancelar\'" [doneText]="\'Pronto\'"></ion-datetime>\n      </ion-item>\n      <ion-item no-lines (click)="choosePatient()">\n        <ion-label floating>Paciente</ion-label>\n        <ion-input type="text" [(ngModel)]="patient.name" name="patient_name"></ion-input>\n      </ion-item>\n      <ion-item no-lines (click)="changeProfessional()">\n        <ion-label floating>Profissional</ion-label>\n        <ion-input type="text" [(ngModel)]="professional.name" name="professional_name"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <button ion-button type="submit" full>Filtrar</button>\n      </ion-item>\n      <ion-item no-lines>\n        <button ion-button type="button" full color="light" (click)="clear()">Limpar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/evolutions/evolution-filter/evolution-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], EvolutionFilterPage);
    return EvolutionFilterPage;
}());

//# sourceMappingURL=evolution-filter.js.map

/***/ })

});
//# sourceMappingURL=22.js.map