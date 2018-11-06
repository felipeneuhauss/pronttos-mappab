webpackJsonp([16],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamClinicSearchPageModule", function() { return ExamClinicSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_clinic_search__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExamClinicSearchPageModule = /** @class */ (function () {
    function ExamClinicSearchPageModule() {
    }
    ExamClinicSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exam_clinic_search__["a" /* ExamClinicSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exam_clinic_search__["a" /* ExamClinicSearchPage */]), __WEBPACK_IMPORTED_MODULE_3__components_fake_fake_module__["a" /* FakeModule */]
            ],
        })
    ], ExamClinicSearchPageModule);
    return ExamClinicSearchPageModule;
}());

//# sourceMappingURL=exam-clinic-search.module.js.map

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

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamClinicSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exam_types_exam_types__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(276);
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
 * Generated class for the ExamClinicSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamClinicSearchPage = /** @class */ (function () {
    function ExamClinicSearchPage(navCtrl, viewCtrl, navParams, toastPrv, actionSheetCtrl, examTypesPrv, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.toastPrv = toastPrv;
        this.actionSheetCtrl = actionSheetCtrl;
        this.examTypesPrv = examTypesPrv;
        this.modalCtrl = modalCtrl;
        this.searching = false;
        this.currentItems = [];
        this.clinicExamSelected = [];
        this.page = 0;
        this.q = '';
        this.type = 'lab';
        this.clinicExamSelected = this.navParams.get('clinicExamSelected');
    }
    ExamClinicSearchPage.prototype.ionViewDidLoad = function () {
        this.getItems();
    };
    ExamClinicSearchPage.prototype.onCancel = function () {
        this.page = 0;
        this.q = '';
        this.getItems();
    };
    ExamClinicSearchPage.prototype.getExams = function (ev) {
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
            this.getItems({ page: this.page, q: this.q, type: this.type });
        }
    };
    ExamClinicSearchPage.prototype.getItems = function (params) {
        var _this = this;
        this.searching = true;
        return new Promise(function (resolve) {
            _this.examTypesPrv.query(params).subscribe(function (data) {
                _this.searching = false;
                if (params && params.q) {
                    _this.currentItems = data;
                    resolve();
                    return;
                }
                _this.currentItems = _this.currentItems.concat(data);
                resolve();
            }, function (err) {
                console.error(err);
                _this.searching = false;
            });
        });
    };
    ExamClinicSearchPage.prototype.openClinicOptions = function (exam) {
        var _this = this;
        if (this.clinicExamSelected.length === 5) {
            this.toastPrv.show('No máximo 5 exames já foram adicionados. Remova algum exame para continuar.', 3500);
            return;
        }
        var options = [];
        var _loop_1 = function (clinic) {
            options.push({
                text: clinic.name,
                handler: function () {
                    _this.addClinicAndExam(clinic, exam);
                }
            });
        };
        for (var _i = 0, _a = exam.clinics; _i < _a.length; _i++) {
            var clinic = _a[_i];
            _loop_1(clinic);
        }
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Escolha uma clínica para o exame',
            buttons: options
        });
        actionSheet.present();
    };
    ExamClinicSearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ clinicExamSelected: this.clinicExamSelected });
    };
    ExamClinicSearchPage.prototype.addClinicAndExam = function (clinic, exam) {
        this.clinicExamSelected.push({ clinic: clinic, exam: exam });
        console.log('this.clinicExamSelected.length', this.clinicExamSelected.length);
        if (this.clinicExamSelected.length === 5) {
            this.toastPrv.show('No máximo 5 exames já foram adicionados.', 3500);
            this.dismiss();
        }
    };
    ExamClinicSearchPage.prototype.removeClinicExamSelected = function (index) {
        this.clinicExamSelected.splice(index, 1);
    };
    ExamClinicSearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('doInfinite');
            _this.page++;
            _this.getItems({ page: _this.page, type: _this.type, q: _this.q }).then(function () {
                resolve();
                infiniteScroll.complete();
            });
        });
    };
    ExamClinicSearchPage.prototype.filterByExamType = function ($event) {
        console.log('$event', $event);
        this.currentItems = [];
        this.getItems({ page: this.page, q: this.q, type: this.type });
    };
    ExamClinicSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-exam-clinic-search',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/exam-clinic-search/exam-clinic-search.html"*/'<!--\n  Generated template for the PatientSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exames e clínicas</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar\n    [(ngModel)]="examName"\n    [placeholder]="\'Nome do exame\'"\n    [showCancelButton]="true"\n    (ionInput)="getExams($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <!-- Segment in content -->\n  <ion-segment [(ngModel)]="type" color="primary" (ionChange)="filterByExamType($event)">\n    <ion-segment-button value="lab">\n      Laboratório\n    </ion-segment-button>\n    <ion-segment-button value="image">\n      Imagem\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-item-divider [hidden]="!clinicExamSelected?.length">\n    Itens selecionados\n  </ion-item-divider>\n  <ion-list [hidden]="!clinicExamSelected?.length">\n    <ion-item *ngFor="let clinicExam of clinicExamSelected; let i = index;" [hidden]="!clinicExamSelected?.length">\n        <strong>Clínica:</strong> {{clinicExam.clinic.name}} <br />\n        <strong>Especialidade:</strong> {{clinicExam.exam.name}}\n        <button ion-button item-end (click)="removeClinicExamSelected(i)">Remover</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-item-divider [hidden]="!clinicExamSelected?.length">\n    Lista de exames\n  </ion-item-divider>\n  <ion-list>\n    <ion-item *ngFor="let item of currentItems" [hidden]="!item.clinics?.length" text-wrap>\n      <ion-label (click)="openClinicOptions(item)">\n        {{ item.name }} • <small>{{ item.clinics?.length }} Clinica(s)</small>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <fake *ngIf="searching"></fake>\n\n  <ion-fab right bottom>\n    <button ion-fab  [disabled]="!clinicExamSelected.length" (click)="dismiss()"><ion-icon name="checkmark"></ion-icon></button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles"\n                                 loadingText="Carregando mais dados...">\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/exam-clinic-search/exam-clinic-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exam_types_exam_types__["a" /* ExamTypesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ExamClinicSearchPage);
    return ExamClinicSearchPage;
}());

//# sourceMappingURL=exam-clinic-search.js.map

/***/ })

});
//# sourceMappingURL=16.js.map