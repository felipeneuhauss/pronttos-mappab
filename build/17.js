webpackJsonp([17],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvolutionsPageModule", function() { return EvolutionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evolutions__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EvolutionsPageModule = /** @class */ (function () {
    function EvolutionsPageModule() {
    }
    EvolutionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__evolutions__["a" /* EvolutionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__evolutions__["a" /* EvolutionsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__["a" /* FakeModule */]
            ],
        })
    ], EvolutionsPageModule);
    return EvolutionsPageModule;
}());

//# sourceMappingURL=evolutions.module.js.map

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

/***/ })

});
//# sourceMappingURL=17.js.map