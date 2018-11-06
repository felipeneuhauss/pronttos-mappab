webpackJsonp([21],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientHospitalMonitoringPageModule", function() { return PatientHospitalMonitoringPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_hospital_monitoring__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatientHospitalMonitoringPageModule = /** @class */ (function () {
    function PatientHospitalMonitoringPageModule() {
    }
    PatientHospitalMonitoringPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_hospital_monitoring__["a" /* PatientHospitalMonitoringPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_hospital_monitoring__["a" /* PatientHospitalMonitoringPage */]),
            ],
        })
    ], PatientHospitalMonitoringPageModule);
    return PatientHospitalMonitoringPageModule;
}());

//# sourceMappingURL=patient-hospital-monitoring.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MedicalConductEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalConductEnum; });
var MedicalConductEnum;
(function (MedicalConductEnum) {
    MedicalConductEnum["CLINIC"] = "283d8d81-319a-44b0-9cb7-5662cc987176";
    MedicalConductEnum["HOSPITAL"] = "e3cf8045-bd73-4bb5-a414-ede731702517";
    MedicalConductEnum["OTHER"] = "d156bb60-8abc-4c4a-bbf8-57576937c27f";
    MedicalConductEnum["EXAM"] = "3d51e07d-2fab-4390-b3ee-4e2f6f951994";
})(MedicalConductEnum || (MedicalConductEnum = {}));
;
var HospitalConductEnum;
(function (HospitalConductEnum) {
    HospitalConductEnum["PROPOR_INTERNACAO_DOMICILIAR"] = "202a02e3-40bd-491d-87ce-f8e6f7dc1a2a";
    HospitalConductEnum["MANTER_INTERNACAO_POR_X_DIAS"] = "337b6832-0425-4473-a157-ad526d51f603";
    HospitalConductEnum["PROPOR_ANTIBIOTICOTERAPIA_DOMICILIAR"] = "b1a031d3-09f6-46bb-912c-29935164857b";
    HospitalConductEnum["PROPOR_TRANSFERENCIA_HOSPITALAR"] = "cae85c1f-2ae8-4082-b032-f61678ee9b3f";
})(HospitalConductEnum || (HospitalConductEnum = {}));
;
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientHospitalMonitoringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_evolutions_evolutions__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_patient_household_monitoring_patient_household_monitoring__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_enums__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_hospital_conduct_hospital_conduct__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_hospital_discharge_motive_hospital_discharge_motive__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_accommodations_accommodations__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_patients_patients__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(15);
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
 * Generated class for the PatientHospitalMonitoringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientHospitalMonitoringPage = /** @class */ (function () {
    function PatientHospitalMonitoringPage(navCtrl, navParams, hospitalConductPrv, hospitalDischargeMotivePrv, modalCtrl, patientPrv, userPrv, toastPrv, evolutionsPrv, accommodationPrv, patientHouseholdMonitoringPrv, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hospitalConductPrv = hospitalConductPrv;
        this.hospitalDischargeMotivePrv = hospitalDischargeMotivePrv;
        this.modalCtrl = modalCtrl;
        this.patientPrv = patientPrv;
        this.userPrv = userPrv;
        this.toastPrv = toastPrv;
        this.evolutionsPrv = evolutionsPrv;
        this.accommodationPrv = accommodationPrv;
        this.patientHouseholdMonitoringPrv = patientHouseholdMonitoringPrv;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.patientMonitoring = {
            id: '',
            evolution: { id: '', description: '', },
            admitted_at: '',
            discharged_at: '',
            discharge_justification: '',
            other_conduct: '',
            hospital: {},
            available_days: 0,
            hospitalization_reason: '',
            hospital_discharge_motive_id: '',
            accommodation_id: '',
            hospital_conduct_id: '',
        };
        this.medicalConductEnum = __WEBPACK_IMPORTED_MODULE_5__utils_enums__["b" /* MedicalConductEnum */];
        this.hospitalConductEnum = __WEBPACK_IMPORTED_MODULE_5__utils_enums__["a" /* HospitalConductEnum */];
        this.clinicSpecializationSelected = [];
        this.clinicExamSelected = [];
        this.monitoring = this.navParams.get('monitoring');
        console.log('detail.monitoring', this.monitoring);
    }
    PatientHospitalMonitoringPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getLoggedUser();
        console.log('ionViewDidLoad PatientHospitalMonitoringPage');
        for (var param in this.patientMonitoring) {
            // console.log('param', param, this.monitoring[param]);
            if (param !== 'evolution') {
                this.patientMonitoring[param] = this.monitoring[param] ? this.monitoring[param] : '';
            }
        }
        console.log('this.patientMonitoring', this.patientMonitoring);
        this.hospitalConductPrv.query().subscribe(function (hospitalConductList) {
            _this.hospitalConductList = hospitalConductList;
        });
        this.hospitalDischargeMotivePrv.query().subscribe(function (hospitalDischargeMotives) {
            _this.hospitalDischargeMotives = hospitalDischargeMotives;
        });
        this.accommodationPrv.query().subscribe(function (accommodations) {
            _this.accommodations = accommodations;
        });
    };
    PatientHospitalMonitoringPage.prototype.getLoggedUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userPrv.user()];
                    case 1:
                        _a.loggedUser = _b.sent();
                        console.log('this.loggedUser', this.loggedUser);
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientHospitalMonitoringPage.prototype.doPatientMonitoring = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, patientMonitoringPayload;
            return __generator(this, function (_a) {
                if (!this.isValid()) {
                    return [2 /*return*/];
                }
                loading = this.loadingCtrl.create({
                    content: 'Aguarde...'
                });
                loading.present();
                patientMonitoringPayload = {
                    id: this.patientMonitoring.id ? this.patientMonitoring.id : null,
                    admitted_at: this.patientMonitoring.admitted_at,
                    available_days: this.patientMonitoring.available_days,
                    hospitalization_reason: this.patientMonitoring.hospitalization_reason,
                    accommodation_id: this.patientMonitoring.accommodation_id,
                    hospital_discharge_motive_id: this.patientMonitoring.hospital_discharge_motive_id,
                    discharged_at: this.patientMonitoring.discharged_at,
                    discharge_justification: this.patientMonitoring.discharge_justification,
                    hospital_conduct_id: this.patientMonitoring.hospital_conduc_id
                };
                this.patientHouseholdMonitoringPrv.save(patientMonitoringPayload).subscribe(function (patientMonitoring) {
                    _this.patientMonitoring.id = patientMonitoring.id;
                    // Salva evolução do paciete
                    var evolutionPayload = {
                        id: _this.patientMonitoring.evolution.id ? _this.patientMonitoring.evolution.id : '',
                        patient_monitoring_id: patientMonitoring.id ? patientMonitoring.id : null,
                        description: _this.patientMonitoring.evolution.description,
                        patient_id: patientMonitoring.patient_id,
                        professional_id: _this.loggedUser.professional_id
                    };
                    _this.evolutionsPrv.save(evolutionPayload).subscribe(function (evolution) {
                        _this.patientMonitoring.evolution.id = evolution.id;
                        loading.dismiss();
                        _this.toastPrv.show('Monitoramento hospitalar salvo com sucesso!');
                        _this.viewCtrl.dismiss({ reload: true });
                    }, function (err) {
                        console.log('err', err);
                        loading.dismiss();
                    });
                }, function (err) {
                    console.log('err', err);
                    loading.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    PatientHospitalMonitoringPage.prototype.isValid = function () {
        if (!this.patientMonitoring.evolution.description) {
            this.toastPrv.show('Informe a evolução do paciente');
            return false;
        }
        // if (!this.patientMonitoring.medicalConducts.length) {
        //   this.toastPrv.show('Informe ao menos uma conduta médica');
        //   return false;
        // }
        //
        // if (this.patientMonitoring.medicalConducts.indexOf(this.medicalConductEnum.HOSPITAL) >= 0) {
        //   if (!this.hospital) {
        //     this.toastPrv.show('Selecione um hospital');
        //     return false;
        //   }
        //
        //   if (!this.patientMonitoring.hospitalization_reason) {
        //     this.toastPrv.show('Justifique a internação');
        //     return false;
        //   }
        // }
        //
        // if (this.patientMonitoring.medicalConducts.indexOf(this.medicalConductEnum.CLINIC) >= 0) {
        //   if (!this.clinicSpecializationSelected.length) {
        //     this.toastPrv.show('Selecione ao menos uma especialidade e clínica');
        //     return false;
        //   }
        // }
        //
        // if (this.patientMonitoring.medicalConducts.indexOf(this.medicalConductEnum.EXAM) >= 0) {
        //   if (!this.clinicExamSelected.length) {
        //     this.toastPrv.show('Selecione ao menos um exame e clínica');
        //     return false;
        //   }
        // }
        return true;
    };
    PatientHospitalMonitoringPage.prototype.chooseHospital = function () {
        var _this = this;
        var hospitalSearchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__index__["m" /* HospitalSearchPage */]);
        hospitalSearchModal.onDidDismiss(function (data) {
            _this.hospital = data.hospital;
            console.log('this.hospital', _this.hospital);
        });
        hospitalSearchModal.present();
    };
    PatientHospitalMonitoringPage.prototype.evolutions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.patientPrv.get(this.monitoring.patient_id).toPromise()];
                    case 1:
                        patient = _a.sent();
                        console.log('patient', patient);
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index__["r" /* PatientEvolutionsPage */], {
                            patient: patient
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientHospitalMonitoringPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ reload: false });
    };
    PatientHospitalMonitoringPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-patient-hospital-monitoring',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patients/patient-hospital-monitoring/patient-hospital-monitoring.html"*/'<!--\n  Generated template for the PatientHouseholdMonitoringPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Hospitalar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="evolutions()" [disabled]="!monitoring">\n        <ion-icon name="folder-open"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="doPatientMonitoring()">\n    <ion-list>\n\n      <ion-item>\n        <strong>Hospital:</strong> {{monitoring.hospital_name}}\n      </ion-item>\n      <ion-item>\n        <strong>Paciente:</strong> {{monitoring.patient_name}}\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Data da internação</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YY"\n                      [(ngModel)]="patientMonitoring.admitted_at" name="admitted_at" [cancelText]="\'Cancelar\'" [doneText]="\'Pronto\'"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Dias liberados</ion-label>\n        <ion-input type="tel" [(ngModel)]="patientMonitoring.available_days" name="available_days"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Acomodação</ion-label>\n        <ion-select [(ngModel)]="patientMonitoring.accommodation_id" name="accommodation_id" >\n          <ion-option *ngFor="let accommodation of accommodations" value="{{accommodation.id}}">{{accommodation.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea txt-resize placeholder="Justificativa da internação" name="hospitalization_reason"\n                      [(ngModel)]="patientMonitoring.hospitalization_reason"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea txt-resize placeholder="Informe a evolução" name="evolution_description"\n                      [(ngModel)]="patientMonitoring.evolution.description"></ion-textarea>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Conduta hospitalar</ion-label>\n        <ion-select [(ngModel)]="patientMonitoring.hospital_conduct_id" name="hospital_conduct_id" >\n          <ion-option *ngFor="let hospitalConduct of hospitalConductList" value="{{hospitalConduct.id}}">{{hospitalConduct.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Motivo da alta</ion-label>\n        <ion-select [(ngModel)]="patientMonitoring.hospital_discharge_motive_id" name="hospital_discharge_motive_id" >\n          <ion-option *ngFor="let hospitalDischargeMotive of hospitalDischargeMotives" value="{{hospitalDischargeMotive.id}}">{{hospitalDischargeMotive.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Data da alta</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YY"\n                      [(ngModel)]="patientMonitoring.discharged_at" name="discharged_at" [cancelText]="\'Cancelar\'" [doneText]="\'Pronto\'"></ion-datetime>\n      </ion-item>\n\n      <!--<ion-item>-->\n        <!--<ion-textarea txt-resize placeholder="Justificativa da alta" name="discharge_justification"-->\n                      <!--[(ngModel)]="patientMonitoring.discharge_justification"></ion-textarea>-->\n      <!--</ion-item>-->\n\n      <ion-item>\n        <button ion-button color="primary" block>Salvar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patients/patient-hospital-monitoring/patient-hospital-monitoring.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_hospital_conduct_hospital_conduct__["a" /* HospitalConductProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_hospital_discharge_motive_hospital_discharge_motive__["a" /* HospitalDischargeMotiveProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_patients_patients__["a" /* Patients */], __WEBPACK_IMPORTED_MODULE_11__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_evolutions_evolutions__["a" /* EvolutionsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_accommodations_accommodations__["a" /* AccommodationsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_patient_household_monitoring_patient_household_monitoring__["a" /* PatientHouseholdMonitoringProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], PatientHospitalMonitoringPage);
    return PatientHospitalMonitoringPage;
}());

//# sourceMappingURL=patient-hospital-monitoring.js.map

/***/ })

});
//# sourceMappingURL=21.js.map