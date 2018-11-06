webpackJsonp([26],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecializationDetailPageModule", function() { return SpecializationDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialization_detail__ = __webpack_require__(571);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecializationDetailPageModule = /** @class */ (function () {
    function SpecializationDetailPageModule() {
    }
    SpecializationDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__specialization_detail__["a" /* SpecializationDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__specialization_detail__["a" /* SpecializationDetailPage */]),
            ],
        })
    ], SpecializationDetailPageModule);
    return SpecializationDetailPageModule;
}());

//# sourceMappingURL=specialization-detail.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecializationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_specializations_specializations__ = __webpack_require__(277);
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
 * Generated class for the SpecializationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecializationDetailPage = /** @class */ (function () {
    function SpecializationDetailPage(navCtrl, navParams, toastPrv, viewCtrl, specializationPrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastPrv = toastPrv;
        this.viewCtrl = viewCtrl;
        this.specializationPrv = specializationPrv;
        this.item = { id: '', name: '' };
        this.item = this.navParams.get('item') ? this.navParams.get('item') : this.item;
    }
    SpecializationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecializationDetailPage');
    };
    SpecializationDetailPage.prototype.save = function () {
        var _this = this;
        // TODO: validar e salvar especialidade
        if (!this.isValid()) {
            return;
        }
        var payload = this.item;
        this.specializationPrv.save(payload).subscribe(function (res) {
            _this.toastPrv.show('Especialização salva com sucesso!');
            _this.viewCtrl.dismiss({ reload: true });
        }, function (err) {
            console.log(err);
            _this.toastPrv.show('Tivemos problemas em salvar o item!');
        });
    };
    SpecializationDetailPage.prototype.isValid = function () {
        if (!this.item.name) {
            this.toastPrv.show('Informe o nome');
            return false;
        }
        return true;
    };
    SpecializationDetailPage.prototype.remove = function () {
        var _this = this;
        this.specializationPrv.remove(this.item).subscribe(function (res) {
            _this.toastPrv.show('Item removido com sucesso!');
            _this.viewCtrl.dismiss({ reload: true });
        }, function (err) {
            console.log(err);
            _this.toastPrv.show('Tivemos problemas em remover o item!');
        });
    };
    SpecializationDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ reload: false });
    };
    SpecializationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-specialization-detail',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/specializations/specialization-detail/specialization-detail.html"*/'<!--\n  Generated template for the SpecializationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhe da especialização</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (ngSubmit)="save()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Nome da especialidade</ion-label>\n        <ion-input type="text"[(ngModel)]="item.name" name="name"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <button ion-button type="submit" full>Salvar</button>\n      </ion-item>\n      <ion-item no-lines *ngIf="item.id">\n        <button ion-button type="button" full color="danger" (click)="remove()">Remover</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/specializations/specialization-detail/specialization-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_specializations_specializations__["a" /* SpecializationsProvider */]])
    ], SpecializationDetailPage);
    return SpecializationDetailPage;
}());

//# sourceMappingURL=specialization-detail.js.map

/***/ })

});
//# sourceMappingURL=26.js.map