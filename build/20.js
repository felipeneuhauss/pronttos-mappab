webpackJsonp([20],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailPageModule", function() { return PatientDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_detail__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_detail_user_detail_module__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PatientDetailPageModule = /** @class */ (function () {
    function PatientDetailPageModule() {
    }
    PatientDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__patient_detail__["a" /* PatientDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__patient_detail__["a" /* PatientDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_user_detail_user_detail_module__["a" /* UserDetailComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__patient_detail__["a" /* PatientDetailPage */]
            ]
        })
    ], PatientDetailPageModule);
    return PatientDetailPageModule;
}());

//# sourceMappingURL=patient-detail.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserDetailComponentModule = /** @class */ (function () {
    function UserDetailComponentModule() {
    }
    UserDetailComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_detail__["a" /* UserDetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_detail__["a" /* UserDetailComponent */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(), __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__user_detail__["a" /* UserDetailComponent */]
            ]
        })
    ], UserDetailComponentModule);
    return UserDetailComponentModule;
}());

//# sourceMappingURL=user-detail.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_states_states__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_specializations_specializations__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages__ = __webpack_require__(275);
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
 * Generated class for the UserDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(userPrv, toastPrv, modalCtrl, statePrv, specializationPrv) {
        this.userPrv = userPrv;
        this.toastPrv = toastPrv;
        this.modalCtrl = modalCtrl;
        this.statePrv = statePrv;
        this.specializationPrv = specializationPrv;
        this.allowEdition = false;
    }
    UserDetailComponent.prototype.ngOnChanges = function (simpleChange) {
        if (simpleChange.user.currentValue) {
            this.getLoggedUser();
            this.loadStates();
            this.loadCities();
            this.loadSpecializations();
        }
    };
    UserDetailComponent.prototype.getLoggedUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userPrv.user()];
                    case 1:
                        _a.loggedUser = _b.sent();
                        this.allowEdition = (this.loggedUser.id == this.user.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.user.terms_read = 1;
        this.userPrv.save(this.user).subscribe(function (data) {
            _this.userPrv.setUser(data.data);
            _this.user = data.data;
            _this.toastPrv.show('Seus dados foram salvos com sucesso');
        });
    };
    UserDetailComponent.prototype.loadStates = function () {
        var _this = this;
        this.statePrv.query().subscribe(function (data) {
            _this.states = data;
        });
    };
    UserDetailComponent.prototype.loadCities = function () {
        var _this = this;
        if (this.user && this.user.state_id) {
            this.statePrv.cities(this.user.state_id).subscribe(function (data) {
                _this.cities = data;
            });
        }
    };
    UserDetailComponent.prototype.loadSpecializations = function () {
        var _this = this;
        this.specializationPrv.query().subscribe(function (data) {
            _this.specializations = data;
        });
    };
    UserDetailComponent.prototype.chooseAColor = function () {
        var _this = this;
        var colorModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages__["c" /* ColorPickPage */], { color: this.user.professional.color });
        colorModal.onDidDismiss(function (data) {
            _this.user.professional.color = data.color;
        });
        colorModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "specialization", void 0);
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-detail',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/components/user-detail/user-detail.html"*/'<form (ngSubmit)="save()">\n  <ion-list *ngIf="user">\n    <ion-item *ngIf="specialization">\n      <ion-label color="fourth" stacked>Especialização</ion-label>\n      <ion-select [(ngModel)]="user.professional.specialization_id" name="specialization_id" [disabled]="!allowEdition">\n        <ion-option *ngFor="let specialization of specializations" value="{{specialization.id}}">{{specialization.name}}</ion-option>\n      </ion-select>\n\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>Nome</ion-label>\n      <ion-input [disabled]="!allowEdition" type="text" placeholder="Nome" [(ngModel)]="user.name" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>E-mail</ion-label>\n      <ion-input [disabled]="!allowEdition" type="email" placeholder="E-mail" [(ngModel)]="user.email" name="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>E-mail secundário</ion-label>\n      <ion-input [disabled]="!allowEdition" type="email" placeholder="E-mail secundario" [(ngModel)]="user.optional_email" name="optional_email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Telefone</ion-label>\n      <ion-input type="tel" [(ngModel)]="user.phone" name="phone" [brmasker]="{phone: true}" [disabled]="!allowEdition"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Celular</ion-label>\n      <ion-input type="tel" [(ngModel)]="user.mobile" name="mobile" [brmasker]="{phone: true}" [disabled]="!allowEdition"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>CEP</ion-label>\n      <ion-input [disabled]="!allowEdition" type="tel" placeholder="CEP"\n                 [brmasker]="{mask:\'00000-000\', len:9}"\n                 [(ngModel)]="user.zip_code" name="zip_code"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>Endereço</ion-label>\n      <ion-input [disabled]="!allowEdition" type="text" placeholder="Endereço" [(ngModel)]="user.address" name="address"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>Número</ion-label>\n      <ion-input [disabled]="!allowEdition" type="text" placeholder="Número" [(ngModel)]="user.number" name="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>Complemento</ion-label>\n      <ion-input [disabled]="!allowEdition" type="text" placeholder="Complemento" [(ngModel)]="user.complement" name="complement"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="fourth" stacked>Bairro</ion-label>\n      <ion-input [disabled]="!allowEdition" type="text" placeholder="Bairro" [(ngModel)]="user.district" name="district"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Estado</ion-label>\n      <ion-select [(ngModel)]="user.state_id" name="state" (ionChange)="loadCities($event)" [disabled]="!allowEdition">\n        <ion-option *ngFor="let state of states" value="{{state.id}}">{{state.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Cidade</ion-label>\n      <ion-select [(ngModel)]="user.city_id" name="city" [disabled]="!allowEdition">\n        <ion-option *ngFor="let city of cities" value="{{city.id}}">{{city.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <button *ngIf="allowEdition" ion-button color="light" type="button" full (click)="chooseAColor()" [style.backgroundColor]="user.professional.color">Escolha uma cor</button>\n      <button *ngIf="!allowEdition"  ion-button color="light" type="button" full [style.backgroundColor]="user.professional.color"></button>\n    </ion-item>\n\n    <ion-item no-lines *ngIf="allowEdition">\n      <button ion-button full color="primary" >Salvar</button>\n    </ion-item>\n  </ion-list>\n</form>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/components/user-detail/user-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_states_states__["a" /* StatesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_specializations_specializations__["a" /* SpecializationsProvider */]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());

//# sourceMappingURL=user-detail.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_patients_patients__ = __webpack_require__(282);
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





var PatientDetailPage = /** @class */ (function () {
    function PatientDetailPage(navCtrl, navParams, items, patientPrv) {
        this.navCtrl = navCtrl;
        this.patientPrv = patientPrv;
        var item = navParams.get('item') || items.defaultItem;
        var id = item.patient_id;
        this.getPatient(id);
    }
    PatientDetailPage.prototype.getPatient = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.patientPrv.get(id).toPromise()];
                    case 1:
                        _a.item = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientDetailPage.prototype.schedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index__["x" /* SchedulesPage */], { patient: this.item });
    };
    PatientDetailPage.prototype.evolutions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__index__["r" /* PatientEvolutionsPage */], {
            patient: this.item
        });
    };
    PatientDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-patient-detail',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patients/patient-detail/patient-detail.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>{{ item?.user?.name }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="evolutions()" [disabled]="!item">\n        <ion-icon name="folder-open"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="schedule()" [disabled]="!item">\n        <ion-icon name="calendar"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--<div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + item.profilePic + \')\'">-->\n  <!--</div>-->\n  <user-detail [user]="item?.user"></user-detail>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patients/patient-detail/patient-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_4__providers_patients_patients__["a" /* Patients */]])
    ], PatientDetailPage);
    return PatientDetailPage;
}());

//# sourceMappingURL=patient-detail.js.map

/***/ })

});
//# sourceMappingURL=20.js.map