webpackJsonp([6],{

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecializationClinicSearchPageModule", function() { return SpecializationClinicSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialization_clinic_search__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpecializationClinicSearchPageModule = /** @class */ (function () {
    function SpecializationClinicSearchPageModule() {
    }
    SpecializationClinicSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__specialization_clinic_search__["a" /* SpecializationClinicSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specialization_clinic_search__["a" /* SpecializationClinicSearchPage */]), __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__["a" /* FakeModule */]
            ],
        })
    ], SpecializationClinicSearchPageModule);
    return SpecializationClinicSearchPageModule;
}());

//# sourceMappingURL=specialization-clinic-search.module.js.map

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

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecializationClinicSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_specializations_specializations__ = __webpack_require__(277);
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
 * Generated class for the SpecializationClinicSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecializationClinicSearchPage = /** @class */ (function () {
    function SpecializationClinicSearchPage(navCtrl, viewCtrl, navParams, actionSheetCtrl, specializationsPrv, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.specializationsPrv = specializationsPrv;
        this.modalCtrl = modalCtrl;
        this.searching = false;
        this.clinicSpecializationSelected = [];
        this.clinicSpecializationSelected = this.navParams.get('clinicSpecializationSelected');
    }
    SpecializationClinicSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecializationClinicSearchPage');
        this.initializeItems();
    };
    SpecializationClinicSearchPage.prototype.initializeItems = function () {
        var _this = this;
        this.searching = true;
        this.specializationsPrv.query().subscribe(function (data) {
            _this.searching = false;
            _this.originalItems = data;
            _this.currentItems = _this.originalItems;
        });
    };
    SpecializationClinicSearchPage.prototype.onCancel = function () {
        this.currentItems = this.originalItems;
    };
    SpecializationClinicSearchPage.prototype.getSpecializations = function (ev) {
        var val = ev.target.value;
        // Reset items back to all of the items
        if (!this.originalItems || !this.originalItems.length) {
            return;
        }
        if (val === '') {
            this.currentItems = this.originalItems;
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.currentItems = this.originalItems.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) >= 0;
            });
        }
    };
    SpecializationClinicSearchPage.prototype.openClinicOptions = function (specialization) {
        var _this = this;
        var options = [];
        var _loop_1 = function (clinic) {
            options.push({
                text: clinic.name,
                handler: function () {
                    _this.addClinicAndSpecialization(clinic, specialization);
                }
            });
        };
        for (var _i = 0, _a = specialization.clinics; _i < _a.length; _i++) {
            var clinic = _a[_i];
            _loop_1(clinic);
        }
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Escolha uma clínica',
            buttons: options
        });
        actionSheet.present();
    };
    SpecializationClinicSearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ clinicSpecializationSelected: this.clinicSpecializationSelected });
    };
    SpecializationClinicSearchPage.prototype.addClinicAndSpecialization = function (clinic, specialization) {
        this.clinicSpecializationSelected.push({ clinic: clinic, specialization: specialization });
    };
    SpecializationClinicSearchPage.prototype.removeClinicSpecializationSelected = function (index) {
        this.clinicSpecializationSelected.splice(index, 1);
    };
    SpecializationClinicSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-specialization-clinic-search',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/specialization-clinic-search/specialization-clinic-search.html"*/'<!--\n  Generated template for the PatientSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Especialidade</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar\n    [(ngModel)]="specializationName"\n    [placeholder]="\'Nome da especialidade\'"\n    [showCancelButton]="true"\n    (ionInput)="getSpecializations($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n  <ion-item-divider [hidden]="!clinicSpecializationSelected?.length">\n    Itens selecionados\n  </ion-item-divider>\n  <ion-list [hidden]="!clinicSpecializationSelected?.length">\n    <ion-item *ngFor="let clinicSpecialization of clinicSpecializationSelected; let i = index;" [hidden]="!clinicSpecializationSelected?.length">\n        <strong>Clínica:</strong> {{clinicSpecialization.clinic.name}} <br />\n        <strong>Especialidade:</strong> {{clinicSpecialization.specialization.name}}\n        <button ion-button item-end (click)="removeClinicSpecializationSelected(i)">Remover</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-item-divider [hidden]="!clinicSpecializationSelected?.length">\n    Lista de especialidades\n  </ion-item-divider>\n  <ion-list>\n    <ion-item *ngFor="let item of currentItems" [hidden]="!item.clinics?.length" text-wrap>\n      <ion-label (click)="openClinicOptions(item)">\n        {{ item.name }} • <small>{{ item.clinics?.length }} Clinica(s)</small>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <fake *ngIf="searching"></fake>\n\n  <ion-fab right bottom>\n    <button ion-fab  [disabled]="!clinicSpecializationSelected.length" (click)="dismiss()"><ion-icon name="checkmark"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/specialization-clinic-search/specialization-clinic-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__providers_specializations_specializations__["a" /* SpecializationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], SpecializationClinicSearchPage);
    return SpecializationClinicSearchPage;
}());

//# sourceMappingURL=specialization-clinic-search.js.map

/***/ })

});
//# sourceMappingURL=6.js.map