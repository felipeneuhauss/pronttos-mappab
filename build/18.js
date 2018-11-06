webpackJsonp([18],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsPageModule", function() { return DrugsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drugs__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DrugsPageModule = /** @class */ (function () {
    function DrugsPageModule() {
    }
    DrugsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drugs__["a" /* DrugsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drugs__["a" /* DrugsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__["a" /* FakeModule */]
            ],
        })
    ], DrugsPageModule);
    return DrugsPageModule;
}());

//# sourceMappingURL=drugs.module.js.map

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

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_drugs_drugs__ = __webpack_require__(292);
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
 * Generated class for the DrugsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DrugsPage = /** @class */ (function () {
    function DrugsPage(navCtrl, viewCtrl, drugs, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.drugs = drugs;
        this.modalCtrl = modalCtrl;
        this.currentItems = [];
        this.page = 0;
        this.q = '';
    }
    DrugsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DrugsPage');
        this.getItems();
    };
    DrugsPage.prototype.getItems = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.drugs.query(params).subscribe(function (data) {
                if (params && params.q) {
                    _this.currentItems = data;
                    resolve();
                    return;
                }
                _this.currentItems = _this.currentItems.concat(data);
                resolve();
            });
        });
    };
    DrugsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('doInfinite');
            _this.page++;
            _this.getItems({ page: _this.page }).then(function () {
                resolve();
                infiniteScroll.complete();
            });
        });
    };
    DrugsPage.prototype.onCancel = function () {
        this.page = 0;
        this.q = '';
        this.getItems();
    };
    DrugsPage.prototype.getDrugs = function (ev) {
        var val = ev.target.value;
        if (val === '') {
            this.q = '';
            this.page = 0;
            this.getItems({ page: this.page, q: this.q });
            return;
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '' && val.length > 3) {
            this.q = val;
            this.page = 0;
            this.getItems({ page: this.page, q: this.q });
        }
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    DrugsPage.prototype.detailDrugDescription = function (drug) {
        var detailDrugDescriptionModal = this.modalCtrl.create('DrugDetailPage', { drug: drug });
        detailDrugDescriptionModal.present();
    };
    DrugsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DrugsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-drugs',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/drugs/drugs.html"*/'<!--\n  Generated template for the DrugsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista de remédios</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n    [(ngModel)]="drugName"\n    [placeholder]="\'Nome do remédio\'"\n    [cancelButtonText]="\'Cancelar\'"\n    [showCancelButton]="true"\n    (ionInput)="getDrugs($event)" (ionClear)="onCancel($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of currentItems" (click)="detailDrugDescription(item)">\n      <ion-label>\n        {{ item.mapper.name }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles"\n                                 loadingText="Carregando mais dados...">\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/drugs/drugs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_drugs_drugs__["a" /* DrugsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], DrugsPage);
    return DrugsPage;
}());

//# sourceMappingURL=drugs.js.map

/***/ })

});
//# sourceMappingURL=18.js.map