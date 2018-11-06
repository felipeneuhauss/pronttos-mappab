webpackJsonp([45],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicDetailPageModule", function() { return ClinicDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_detail__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClinicDetailPageModule = /** @class */ (function () {
    function ClinicDetailPageModule() {
    }
    ClinicDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clinic_detail__["a" /* ClinicDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clinic_detail__["a" /* ClinicDetailPage */]), __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], ClinicDetailPageModule);
    return ClinicDetailPageModule;
}());

//# sourceMappingURL=clinic-detail.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clinics_clinics__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(275);
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
 * Generated class for the ClinicDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClinicDetailPage = /** @class */ (function () {
    function ClinicDetailPage(navCtrl, navParams, toastPrv, modalCtrl, viewCtrl, clinicPrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastPrv = toastPrv;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.clinicPrv = clinicPrv;
        this.item = {
            id: '',
            contact_name: '',
            exams: '',
            specializations: '',
            name: '', email: '',
            phone_number: '',
            mobile_number: ''
        };
        this.item = this.navParams.get('item') ? this.navParams.get('item') : this.item;
        console.log('this.item', this.item);
    }
    ClinicDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamDetailPage');
    };
    ClinicDetailPage.prototype.save = function () {
        var _this = this;
        if (!this.isValid()) {
            return;
        }
        var payload = this.item;
        this.clinicPrv.save(payload).subscribe(function (res) {
            _this.toastPrv.show('Clinica salvo com sucesso!');
            _this.viewCtrl.dismiss({ reload: true });
        }, function (err) {
            console.log(err);
            _this.toastPrv.show('Tivemos problemas em salvar o item!');
        });
    };
    ClinicDetailPage.prototype.isValid = function () {
        if (!this.item.name) {
            this.toastPrv.show('Informe o nome da clínica');
            return false;
        }
        if (!this.item.contact_name) {
            this.toastPrv.show('Informe o nome do contato');
            return false;
        }
        if (!this.item.email) {
            this.toastPrv.show('Informe o e-mail');
            return false;
        }
        if (!this.item.phone_number && !this.item.mobile_number) {
            this.toastPrv.show('Informe ao menos um número de contato');
            return false;
        }
        return true;
    };
    ClinicDetailPage.prototype.remove = function () {
        var _this = this;
        this.clinicPrv.remove(this.item).subscribe(function (res) {
            _this.toastPrv.show('Item removido com sucesso!');
            _this.viewCtrl.dismiss({ reload: true });
        }, function (err) {
            _this.toastPrv.show('Tivemos problemas em remover o item!');
        });
    };
    ClinicDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ reload: false });
    };
    ClinicDetailPage.prototype.chooseSpecializations = function () {
        var _this = this;
        var specializationSearchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__index__["A" /* SpecializationSearchPage */], {
            'clinic': this.item
        });
        specializationSearchModal.onDidDismiss(function (data) {
            _this.item.specializations = data.specializationSelected ? data.specializationSelected : {};
            if (_this.item.specializations.length) {
                for (var _i = 0, _a = _this.item.specializations; _i < _a.length; _i++) {
                    var specialization = _a[_i];
                    specialization.price = specialization.price ? specialization.price : 0.0;
                }
            }
        });
        specializationSearchModal.present();
    };
    ClinicDetailPage.prototype.chooseExams = function () {
        var _this = this;
        var examSearchPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__index__["j" /* ExamSearchPage */], {
            'clinic': this.item
        });
        examSearchPage.onDidDismiss(function (data) {
            _this.item.exams = data.examSelected ? data.examSelected : {};
            if (_this.item.exams.length) {
                for (var _i = 0, _a = _this.item.exams; _i < _a.length; _i++) {
                    var exam = _a[_i];
                    exam.price = exam.price ? exam.price : 0.0;
                }
            }
        });
        examSearchPage.present();
    };
    ClinicDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-clinic-detail',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/clinics/clinic-detail/clinic-detail.html"*/'<!--\n  Generated template for the ClinicDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes da clínica</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (ngSubmit)="save()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Nome da clínica</ion-label>\n        <ion-input type="text"[(ngModel)]="item.name" name="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Nome de contato</ion-label>\n        <ion-input type="text"[(ngModel)]="item.contact_name" name="contact_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input type="email"[(ngModel)]="item.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Telefone</ion-label>\n        <ion-input type="tel"[(ngModel)]="item.phone_number" name="phone_number" [brmasker]="{phone: true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Celular</ion-label>\n        <ion-input type="tel"[(ngModel)]="item.mobile_number" name="mobile_number" [brmasker]="{phone: true}"></ion-input>\n      </ion-item>\n\n      <!--<ion-item>-->\n        <!--<button ion-button type="button" full (click)="chooseSpecializations()">Ver especialidade(s) - {{item.specializations}}</button>-->\n      <!--</ion-item>-->\n\n      <!--<ion-item>-->\n        <!--<button ion-button type="button" full (click)="chooseExams()">Ver exame(s) - {{item.exams}}</button>-->\n      <!--</ion-item>-->\n\n      <ion-item no-lines>\n        <button ion-button type="submit" full>Salvar</button>\n      </ion-item>\n      <ion-item no-lines *ngIf="item.id">\n        <button ion-button type="button" full color="danger" (click)="remove()">Remover</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/clinics/clinic-detail/clinic-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_clinics_clinics__["a" /* ClinicsProvider */]])
    ], ClinicDetailPage);
    return ClinicDetailPage;
}());

//# sourceMappingURL=clinic-detail.js.map

/***/ })

});
//# sourceMappingURL=45.js.map