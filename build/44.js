webpackJsonp([44],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickPageModule", function() { return ColorPickPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_pick__ = __webpack_require__(531);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColorPickPageModule = /** @class */ (function () {
    function ColorPickPageModule() {
    }
    ColorPickPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__color_pick__["a" /* ColorPickPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__color_pick__["a" /* ColorPickPage */]),
            ],
        })
    ], ColorPickPageModule);
    return ColorPickPageModule;
}());

//# sourceMappingURL=color-pick.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the ColorPickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ColorPickPage = /** @class */ (function () {
    function ColorPickPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.colors = [
            { name: 'Olive', hex: '#808000' },
            { name: 'Mint Cream', hex: '#FFFFFA' },
            { name: 'Pale Goldenrod', hex: '#EE8AAA' },
            { name: 'Dark Sea Green', hex: '#8FBC8F' },
            { name: 'Teal', hex: '#008080' },
            { name: 'Hot Pink', hex: '#FF9B44' },
            { name: 'Deep Sky Blue', hex: '#0BFFFF' },
            { name: 'Purple', hex: '#800080' },
            { name: 'Light Goldenrod Yellow', hex: '#FAFAD2' },
            { name: 'Medium Orchid', hex: '#BA55D3' },
            { name: 'Dim Gray', hex: '#696969' },
            { name: 'Blue', hex: '#0000FF' },
            { name: 'Pale Turquoise', hex: '#AFEEEE' },
            { name: 'Crimson', hex: '#DC143C' },
            { name: 'Light Sea Green', hex: '#20B2AA' },
            { name: 'Khaki', hex: '#F0E68C' },
            { name: 'Coral', hex: '#FF7F50' },
            { name: 'Forest Green', hex: '#228B22' },
            { name: 'Rosy Brown', hex: '#BC8F8F' },
            { name: 'Indigo', hex: '#4B0082' },
            { name: 'Bisque', hex: '#FFE4C4' },
            { name: 'Thistle', hex: '#0D8BFD' },
            { name: 'Blanched Almond', hex: '#FFEBCD' },
            { name: 'Chartreuse', hex: '#7FFF00' },
            { name: 'White Smoke', hex: '#F5F5F5' },
            { name: 'Dark Khaki', hex: '#BDB76B' },
            { name: 'Floral White', hex: '#FFFA00' },
            { name: 'Turquoise', hex: '#40E0D0' },
        ];
        this.selectedColor = this.navParams.get('color');
    }
    ColorPickPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ColorPickPage');
    };
    ColorPickPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ color: this.selectedColor });
    };
    ColorPickPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-color-pick',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/color-pick/color-pick.html"*/'<!--\n  Generated template for the ColorPickPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escolha uma cor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group [(ngModel)]="selectedColor">\n    <ion-item *ngFor="let color of colors">\n      <ion-label>\n        <div class="color-box" [style.backgroundColor]="color.hex"></div> {{ color.name }} - <i>{{ color.hex }}</i>\n      </ion-label>\n      <ion-radio [value]="color.hex"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab  [disabled]="!selectedColor" (click)="dismiss()"><ion-icon name="checkmark"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/color-pick/color-pick.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ColorPickPage);
    return ColorPickPage;
}());

//# sourceMappingURL=color-pick.js.map

/***/ })

});
//# sourceMappingURL=44.js.map