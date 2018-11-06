webpackJsonp([32],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]), __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_analyticts_track_decorators__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_states_states__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_specializations_specializations__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(275);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(userPrv, toastPrv, modalCtrl, navParams, statePrv, viewCtrl, specializationPrv, loadingCtrl) {
        this.userPrv = userPrv;
        this.toastPrv = toastPrv;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.statePrv = statePrv;
        this.viewCtrl = viewCtrl;
        this.specializationPrv = specializationPrv;
        this.loadingCtrl = loadingCtrl;
        this.allowEdition = true;
        this.user = this.navParams.get('user');
        this.specialization = this.user.specialization ? this.user.specialization : null;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        this.getLoggedUser();
        this.loadStates();
        this.loadCities();
        this.loadSpecializations();
    };
    EditProfilePage.prototype.getLoggedUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userPrv.user()];
                    case 1:
                        _a.loggedUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Salvando seus dados...'
        });
        loading.present();
        this.user.terms_read = 1;
        this.userPrv.save(this.user).subscribe(function (data) {
            _this.userPrv.setUser(data.data);
            _this.user = data.data;
            _this.toastPrv.show('Seus dados foram salvos com sucesso');
            loading.dismiss();
            _this.dismiss();
        });
    };
    EditProfilePage.prototype.loadStates = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando estados...'
        });
        loading.present();
        this.statePrv.query().subscribe(function (data) {
            _this.states = data;
            loading.dismiss();
        });
    };
    EditProfilePage.prototype.loadCities = function () {
        var _this = this;
        if (this.user && this.user.state_id) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Carregando cidades...'
            });
            loading_1.present();
            this.statePrv.cities(this.user.state_id).subscribe(function (data) {
                _this.cities = data;
                loading_1.dismiss();
            });
        }
    };
    EditProfilePage.prototype.loadSpecializations = function () {
        var _this = this;
        this.specializationPrv.query().subscribe(function (data) {
            _this.specializations = data;
        });
    };
    EditProfilePage.prototype.chooseAColor = function () {
        var _this = this;
        var colorModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__index__["c" /* ColorPickPage */], { color: this.user.professional.color });
        colorModal.onDidDismiss(function (data) {
            _this.user.professional.color = data.color;
        });
        colorModal.present();
    };
    EditProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__decorators_analyticts_track_decorators__["b" /* AnalytictsTrack */])('[PERFIL] Editar perfil'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/profile/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar perfil</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="save()">\n    <ion-list *ngIf="user">\n      <h5 class="light">DADOS PESSOAIS</h5>\n      <ion-item>\n        <ion-label color="fourth" stacked>Nome</ion-label>\n        <ion-input [disabled]="!allowEdition" type="text" placeholder="Nome" [(ngModel)]="user.name" name="name"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="specialization">\n        <ion-label color="fourth" stacked>Especialização</ion-label>\n        <ion-select [(ngModel)]="user.professional.specialization_id" name="specialization_id" [disabled]="!allowEdition">\n          <ion-option *ngFor="let specialization of specializations" value="{{specialization.id}}">{{specialization.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item (click)="chooseAColor()" class="color-selection">\n        <button ion-button class="color-box" color="light" type="button" full [style.backgroundColor]="user.professional.color"></button>\n        <span>Cor de identificação</span>\n        <b>{{user.professional.color}}</b>\n      </ion-item>\n      <h5 class="light">CONTATOS</h5>\n      <ion-item>\n        <ion-label color="fourth" stacked>E-mail</ion-label>\n        <ion-input [disabled]="!allowEdition" type="email" placeholder="E-mail" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="fourth" stacked>E-mail secundário</ion-label>\n        <ion-input [disabled]="!allowEdition" type="email" placeholder="E-mail secundario" [(ngModel)]="user.optional_email" name="optional_email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Telefone</ion-label>\n        <ion-input type="tel" [(ngModel)]="user.phone" name="phone" [brmasker]="{phone: true}" [disabled]="!allowEdition"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Celular</ion-label>\n        <ion-input type="tel" [(ngModel)]="user.mobile" name="mobile" [brmasker]="{phone: true}" [disabled]="!allowEdition"></ion-input>\n      </ion-item>\n      <h5 class="light">ENDEREÇO</h5>\n      <ion-item>\n        <ion-label color="fourth" stacked>CEP</ion-label>\n        <ion-input [disabled]="!allowEdition" type="tel" placeholder="CEP"\n                   [brmasker]="{mask:\'00000-000\', len:9}"\n                   [(ngModel)]="user.zip_code" name="zip_code"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="fourth" stacked>Endereço</ion-label>\n        <ion-input [disabled]="!allowEdition" type="text" placeholder="Endereço" [(ngModel)]="user.address" name="address"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="fourth" stacked>Número</ion-label>\n        <ion-input [disabled]="!allowEdition" type="text" placeholder="Número" [(ngModel)]="user.number" name="number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="fourth" stacked>Complemento</ion-label>\n        <ion-input [disabled]="!allowEdition" type="text" placeholder="Complemento" [(ngModel)]="user.complement" name="complement"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="fourth" stacked>Bairro</ion-label>\n        <ion-input [disabled]="!allowEdition" type="text" placeholder="Bairro" [(ngModel)]="user.district" name="district"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Estado</ion-label>\n        <ion-select [(ngModel)]="user.state_id" name="state" (ionChange)="loadCities($event)" [disabled]="!allowEdition">\n          <ion-option *ngFor="let state of states" value="{{state.id}}">{{state.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Cidade</ion-label>\n        <ion-select [(ngModel)]="user.city_id" name="city" [disabled]="!allowEdition" [disabled]="!user.state_id || !cities.length">\n          <ion-option *ngFor="let city of cities" value="{{city.id}}">{{city.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <button ion-button full color="secondary" round>Salvar</button>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/profile/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_states_states__["a" /* StatesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_specializations_specializations__["a" /* SpecializationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=32.js.map