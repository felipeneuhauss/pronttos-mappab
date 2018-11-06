webpackJsonp([15],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamSearchPageModule", function() { return ExamSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_search__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExamSearchPageModule = /** @class */ (function () {
    function ExamSearchPageModule() {
    }
    ExamSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exam_search__["a" /* ExamSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exam_search__["a" /* ExamSearchPage */]), __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__["a" /* FakeModule */]
            ],
        })
    ], ExamSearchPageModule);
    return ExamSearchPageModule;
}());

//# sourceMappingURL=exam-search.module.js.map

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

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exam_types_exam_types__ = __webpack_require__(280);
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
 * Generated class for the ExamSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamSearchPage = /** @class */ (function () {
    function ExamSearchPage(navCtrl, viewCtrl, navParams, examTypesPrv, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.examTypesPrv = examTypesPrv;
        this.modalCtrl = modalCtrl;
        this.searching = false;
        this.currentItems = [];
        this.examSelected = [];
        this.page = 0;
        this.q = '';
        this.clinic = {};
        this.type = 'lab';
        this.examSelected = this.navParams.get('examSelected') ? this.navParams.get('examSelected') : this.examSelected;
        this.clinic = this.navParams.get('clinic') ? this.navParams.get('clinic') : this.clinic;
    }
    ExamSearchPage.prototype.ionViewDidLoad = function () {
        var params = { page: this.page, q: this.q, type: this.type, clinic_id: null };
        this.getItems(params);
        if (this.clinic && this.clinic.id) {
            params.clinic_id = this.clinic.id;
            // this.getSelectedItems(params);
        }
    };
    ExamSearchPage.prototype.getItems = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.examTypesPrv.query(params).subscribe(function (data) {
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
    ExamSearchPage.prototype.getSelectedItems = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.examTypesPrv.query(params).subscribe(function (data) {
                _this.examSelected = data;
                resolve();
            });
        });
    };
    ExamSearchPage.prototype.onCancel = function () {
        this.page = 0;
        this.q = '';
        this.getItems();
    };
    ExamSearchPage.prototype.getExams = function (ev) {
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
    ExamSearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ examSelected: this.examSelected });
    };
    ExamSearchPage.prototype.addExam = function (exam) {
        var _this = this;
        if (exam.clinics) {
            delete exam.clinics;
        }
        if (exam.checked) {
            this.examSelected.push(exam);
            return;
        }
        this.examSelected.forEach(function (value, index) {
            if (exam.id === value.id) {
                _this.removeExamSelected(index);
                return;
            }
        });
    };
    ExamSearchPage.prototype.removeExamSelected = function (index) {
        var exam = this.examSelected[index];
        exam.checked = false;
        this.examSelected.splice(index, 1);
    };
    ExamSearchPage.prototype.doInfinite = function (infiniteScroll) {
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
    ExamSearchPage.prototype.filterByExamType = function ($event) {
        this.currentItems = [];
        this.getItems({ page: this.page, q: this.q, type: this.type });
    };
    ExamSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-exam-search',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/exams/exam-search/exam-search.html"*/'<!--\n  Generated template for the PatientSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exames</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar\n    [(ngModel)]="examName"\n    [placeholder]="\'Nome do exame\'"\n    [showCancelButton]="true"\n    (ionInput)="getExams($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n  <ion-segment [(ngModel)]="type" color="primary" (ionChange)="filterByExamType($event)">\n    <ion-segment-button value="lab">\n      Laboratório\n    </ion-segment-button>\n    <ion-segment-button value="image">\n      Imagem\n    </ion-segment-button>\n  </ion-segment>\n\n  <fake *ngIf="searching"></fake>\n\n  <ion-item-divider [hidden]="!examSelected?.length">\n    Itens selecionados\n  </ion-item-divider>\n  <ion-list [hidden]="!examSelected?.length">\n    <ion-item *ngFor="let exam of examSelected; let i = index;" [hidden]="!examSelected?.length">\n        <strong> {{exam.name}}</strong>\n        <button ion-button item-end (click)="removeExamSelected(i)">Remover</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-item-divider [hidden]="!examSelected?.length">\n    Lista de exames\n  </ion-item-divider>\n  <ion-list *ngIf="!searching">\n    <ion-item *ngFor="let item of currentItems" text-wrap>\n      <ion-label>\n        {{ item.name }}\n      </ion-label>\n      <ion-checkbox [checked]="item.checked" [(ngModel)]="item.checked" (ionChange)="addExam(item)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab  [disabled]="!examSelected.length" (click)="dismiss()"><ion-icon name="checkmark"></ion-icon></button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles"\n                                 loadingText="Carregando mais dados...">\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/exams/exam-search/exam-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exam_types_exam_types__["a" /* ExamTypesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ExamSearchPage);
    return ExamSearchPage;
}());

//# sourceMappingURL=exam-search.js.map

/***/ })

});
//# sourceMappingURL=15.js.map