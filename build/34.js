webpackJsonp([34],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientMonitoringHistoryPageModule", function() { return PatientMonitoringHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_monitoring_history__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientMonitoringHistoryPageModule = /** @class */ (function () {
    function PatientMonitoringHistoryPageModule() {
    }
    PatientMonitoringHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_monitoring_history__["a" /* PatientMonitoringHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_monitoring_history__["a" /* PatientMonitoringHistoryPage */]),
            ],
        })
    ], PatientMonitoringHistoryPageModule);
    return PatientMonitoringHistoryPageModule;
}());

//# sourceMappingURL=patient-monitoring-history.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientMonitoringHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patient_household_monitoring_patient_household_monitoring__ = __webpack_require__(283);
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
 * Generated class for the PatientMonitoringHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientMonitoringHistoryPage = /** @class */ (function () {
    function PatientMonitoringHistoryPage(navCtrl, navParams, patientHouseholdMonitoring) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patientHouseholdMonitoring = patientHouseholdMonitoring;
        this.type = 'household';
    }
    PatientMonitoringHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PatientMonitoringHistoryPage');
        this.getItems();
    };
    PatientMonitoringHistoryPage.prototype.getItems = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.patientHouseholdMonitoring.query(params).subscribe(function (data) {
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
    PatientMonitoringHistoryPage.prototype.filterByMonitoringType = function (type) {
    };
    PatientMonitoringHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-patient-monitoring-history',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patient-monitoring-history/patient-monitoring-history.html"*/'<!--\n  Generated template for the PatientMonitoringHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Histórico de monitoramento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-segment [(ngModel)]="type" color="primary" (ionChange)="filterByMonitoringType($event)">\n    <ion-segment-button value="household">\n      Domiciliar\n    </ion-segment-button>\n    <ion-segment-button value="hospital">\n      Hospitalar\n    </ion-segment-button>\n  </ion-segment>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patient-monitoring-history/patient-monitoring-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_patient_household_monitoring_patient_household_monitoring__["a" /* PatientHouseholdMonitoringProvider */]])
    ], PatientMonitoringHistoryPage);
    return PatientMonitoringHistoryPage;
}());

//# sourceMappingURL=patient-monitoring-history.js.map

/***/ })

});
//# sourceMappingURL=34.js.map