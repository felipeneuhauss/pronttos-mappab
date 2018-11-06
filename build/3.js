webpackJsonp([3],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientHouseholdMonitoringPageModule", function() { return PatientHouseholdMonitoringPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_household_monitoring__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PatientHouseholdMonitoringPageModule = /** @class */ (function () {
    function PatientHouseholdMonitoringPageModule() {
    }
    PatientHouseholdMonitoringPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patient_household_monitoring__["a" /* PatientHouseholdMonitoringPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patient_household_monitoring__["a" /* PatientHouseholdMonitoringPage */]),
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */]
            ],
        })
    ], PatientHouseholdMonitoringPageModule);
    return PatientHouseholdMonitoringPageModule;
}());

//# sourceMappingURL=patient-household-monitoring.module.js.map

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

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientHouseholdMonitoringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_patient_household_monitoring_patient_household_monitoring__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_medical_conduct_medical_conduct__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_enums__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_evolutions_evolutions__ = __webpack_require__(278);
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
 * Generated class for the PatientHouseholdMonitoringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PatientHouseholdMonitoringPage = /** @class */ (function () {
    function PatientHouseholdMonitoringPage(navCtrl, navParams, medicalConductPrv, modalCtrl, toastPrv, evolutionsPrv, patientHouseholdMonitoringPrv, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicalConductPrv = medicalConductPrv;
        this.modalCtrl = modalCtrl;
        this.toastPrv = toastPrv;
        this.evolutionsPrv = evolutionsPrv;
        this.patientHouseholdMonitoringPrv = patientHouseholdMonitoringPrv;
        this.loadingCtrl = loadingCtrl;
        this.patientMonitoring = { id: '', evolution: { id: '', description: '' },
            medicalConducts: [], hospitalization_reason: '', other_conduct: '', hospital: {} };
        this.medicalConductEnum = __WEBPACK_IMPORTED_MODULE_6__utils_enums__["b" /* MedicalConductEnum */];
        this.clinicSpecializationSelected = [];
        this.clinicExamSelected = [];
        this.schedule = this.navParams.get('schedule');
        console.log('this.schedule', this.schedule);
    }
    PatientHouseholdMonitoringPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.medicalConductPrv.query().subscribe(function (medicalConductList) {
            _this.medicalConductList = medicalConductList;
        });
        if (this.schedule.patient_monitoring_id) {
            this.patientHouseholdMonitoringPrv.get(this.schedule.patient_monitoring_id).subscribe(function (data) {
                _this.patientMonitoring = Object.assign({}, _this.patientMonitoring, data);
                if (_this.patientMonitoring.clinic_exams) {
                    _this.clinicExamSelected = _this.patientMonitoring.clinic_exams;
                }
                if (_this.patientMonitoring.clinic_specializations) {
                    _this.clinicExamSelected = _this.patientMonitoring.clinic_specializations;
                }
            });
        }
    };
    PatientHouseholdMonitoringPage.prototype.doPatientMonitoring = function () {
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
                    type: 'household',
                    id: this.patientMonitoring.id ? this.patientMonitoring.id : null,
                    patient_id: this.schedule.patient.id,
                    medical_conducts: this.patientMonitoring.medicalConducts ? this.patientMonitoring.medicalConducts : [],
                    professional_id: this.schedule.professional.id,
                    hospital_id: this.hospital ? this.hospital.id : null,
                    hospitalization_reason: this.patientMonitoring.hospitalization_reason,
                    clinic_specializations: this.clinicSpecializationSelected ? this.clinicSpecializationSelected : [],
                    clinic_exams: this.clinicExamSelected ? this.clinicExamSelected : [],
                    other_conduct: this.patientMonitoring.other_conduct,
                    schedule_id: this.schedule.id
                };
                this.patientHouseholdMonitoringPrv.save(patientMonitoringPayload).subscribe(function (patientMonitoring) {
                    _this.patientMonitoring.id = patientMonitoring.id;
                    // Salva evolução do paciete
                    var evolutionPayload = {
                        id: _this.patientMonitoring.evolution.id ? _this.patientMonitoring.evolution.id : '',
                        patient_monitoring_id: patientMonitoring.id ? patientMonitoring.id : null,
                        description: _this.patientMonitoring.evolution.description,
                        patient_id: _this.schedule.patient.id,
                        professional_id: _this.schedule.professional.id,
                    };
                    _this.evolutionsPrv.save(evolutionPayload).subscribe(function (evolution) {
                        _this.patientMonitoring.evolution.id = evolution.id;
                        loading.dismiss();
                        _this.toastPrv.show('Monitoramento salvo com sucesso!');
                        _this.navCtrl.pop();
                    }, function (err) {
                        console.error(err);
                        loading.dismiss();
                    });
                }, function (err) {
                    console.error(err);
                    loading.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    PatientHouseholdMonitoringPage.prototype.isValid = function () {
        if (!this.patientMonitoring.evolution.description) {
            this.toastPrv.show('Informe a evolução do paciente');
            return false;
        }
        if (!this.patientMonitoring.medicalConducts.length) {
            this.toastPrv.show('Informe ao menos uma conduta médica');
            return false;
        }
        if (this.patientMonitoring.medicalConducts.indexOf(this.medicalConductEnum.HOSPITAL) >= 0) {
            if (!this.hospital) {
                this.toastPrv.show('Selecione um hospital');
                return false;
            }
            if (!this.patientMonitoring.hospitalization_reason) {
                this.toastPrv.show('Justifique a internação');
                return false;
            }
        }
        if (this.patientMonitoring.medicalConducts.indexOf(this.medicalConductEnum.CLINIC) >= 0) {
            if (!this.clinicSpecializationSelected.length) {
                this.toastPrv.show('Selecione ao menos uma especialidade e clínica');
                return false;
            }
        }
        if (this.patientMonitoring.medicalConducts.indexOf(this.medicalConductEnum.EXAM) >= 0) {
            if (!this.clinicExamSelected.length) {
                this.toastPrv.show('Selecione ao menos um exame e clínica');
                return false;
            }
        }
        return true;
    };
    PatientHouseholdMonitoringPage.prototype.chooseHospital = function () {
        var _this = this;
        var hospitalSearchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__index__["m" /* HospitalSearchPage */]);
        hospitalSearchModal.onDidDismiss(function (data) {
            _this.hospital = data.hospital;
        });
        hospitalSearchModal.present();
    };
    PatientHouseholdMonitoringPage.prototype.chooseSpecializationClinics = function () {
        var _this = this;
        var specializationClinicSearchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__index__["y" /* SpecializationClinicSearchPage */], {
            'clinicSpecializationSelected': this.clinicSpecializationSelected
        });
        specializationClinicSearchModal.onDidDismiss(function (data) {
            _this.clinicSpecializationSelected = data.clinicSpecializationSelected;
            console.log('this.clinicSpecializationSelected', _this.clinicSpecializationSelected);
        });
        specializationClinicSearchModal.present();
    };
    PatientHouseholdMonitoringPage.prototype.chooseClinicsExams = function () {
        var _this = this;
        var examClinicSearchPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__index__["h" /* ExamClinicSearchPage */], {
            'clinicExamSelected': this.clinicExamSelected
        });
        examClinicSearchPage.onDidDismiss(function (data) {
            _this.clinicExamSelected = data.clinicExamSelected;
            console.log('this.clinicExamSelected', _this.clinicExamSelected);
        });
        examClinicSearchPage.present();
    };
    PatientHouseholdMonitoringPage.prototype.searchDrugs = function () {
        var drugSearchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__index__["d" /* DrugsPage */]);
        drugSearchModal.present();
    };
    PatientHouseholdMonitoringPage.prototype.evolutions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__index__["r" /* PatientEvolutionsPage */], {
            patient: this.schedule.patient
        });
    };
    PatientHouseholdMonitoringPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-patient-household-monitoring',template:/*ion-inline-start:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patients/patient-household-monitoring/patient-household-monitoring.html"*/'<!--\n  Generated template for the PatientHouseholdMonitoringPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Atendimento domiciliar</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="evolutions()">\n        <ion-icon name="folder-open"></ion-icon>\n      </button>\n      <!--<button ion-button icon-only (click)="searchDrugs()">-->\n        <!--<ion-icon name="bookmarks"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (submit)="doPatientMonitoring()">\n    <ion-list>\n\n      <ion-item>\n        <strong>Paciente:</strong> {{schedule.patient.user.name}}\n      </ion-item>\n      <ion-item>\n        <strong>Profissional:</strong> {{schedule.professional.user.name}}\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Evolução do paciente</ion-label>\n        <ion-textarea txt-resize placeholder="Informe a evolução" name="evolution_description"\n                      [(ngModel)]="patientMonitoring.evolution.description"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Conduta médica</ion-label>\n        <ion-select [(ngModel)]="patientMonitoring.medicalConducts" name="medical_conducts" multiple="true">\n          <ion-option *ngFor="let medicalConduct of medicalConductList" value="{{medicalConduct.id}}">{{medicalConduct.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="patientMonitoring.medicalConducts.indexOf(medicalConductEnum.HOSPITAL) >= 0">\n        <button ion-button type="button" full (click)="chooseHospital()">Escolher hospital</button>\n      </ion-item>\n      <ion-item *ngIf="hospital">\n        <strong>Hospital:</strong> {{hospital.name}} • {{hospital.location}}\n      </ion-item>\n\n      <ion-item *ngIf="patientMonitoring.medicalConducts.indexOf(medicalConductEnum.CLINIC) >= 0">\n        <button ion-button type="button" full (click)="chooseSpecializationClinics()">Escolher especialidade(s)</button>\n      </ion-item>\n\n      <ion-item [hidden]="!clinicSpecializationSelected?.length" no-lines>\n        <ion-item-divider>\n          Clínicas e especialidades selecionadas\n        </ion-item-divider>\n        <ion-list class="selected-item-list">\n          <ion-item *ngFor="let clinicSpecialization of clinicSpecializationSelected; let i = index;" text-wrap>\n            <strong>Clínica:</strong> {{clinicSpecialization.clinic.name}} <br />\n            <strong>Especialidade:</strong> {{clinicSpecialization.specialization.name}}\n          </ion-item>\n        </ion-list>\n      </ion-item>\n\n      <ion-item *ngIf="patientMonitoring.medicalConducts.indexOf(medicalConductEnum.EXAM) >= 0">\n        <button ion-button type="button" full (click)="chooseClinicsExams()">Escolher exame(s)</button>\n      </ion-item>\n\n      <ion-item [hidden]="!clinicExamSelected?.length" no-lines>\n        <ion-item-divider>\n          Clínica(s) e exame(s) selecionado(s)\n        </ion-item-divider>\n        <ion-list class="selected-item-list">\n          <ion-item *ngFor="let clinicExam of clinicExamSelected; let i = index;" text-wrap>\n            <strong>Clínica:</strong> {{clinicExam.clinic.name}} <br />\n            <strong>Exame:</strong> {{clinicExam.exam.name}}\n          </ion-item>\n        </ion-list>\n      </ion-item>\n\n      <ion-item *ngIf="patientMonitoring.medicalConducts.indexOf(medicalConductEnum.HOSPITAL) >= 0">\n        <ion-label stacked>Justificativa da internação</ion-label>\n        <ion-textarea txt-resize placeholder="Justificativa da internação" name="hospitalization_reason"\n                      [(ngModel)]="patientMonitoring.hospitalization_reason"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="patientMonitoring.medicalConducts.indexOf(medicalConductEnum.OTHER) >= 0">\n        <ion-label stacked>Outra conduta</ion-label>\n        <ion-textarea txt-resize placeholder="Outra conduta" name="other_conduct"\n                      [(ngModel)]="patientMonitoring.other_conduct"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button color="primary" block>Salvar e enviar</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/felipeneuhauss/Workspace/mappabapp/src/pages/patients/patient-household-monitoring/patient-household-monitoring.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_medical_conduct_medical_conduct__["a" /* MedicalConductProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_evolutions_evolutions__["a" /* EvolutionsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_patient_household_monitoring_patient_household_monitoring__["a" /* PatientHouseholdMonitoringProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], PatientHouseholdMonitoringPage);
    return PatientHouseholdMonitoringPage;
}());

//# sourceMappingURL=patient-household-monitoring.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__txt_resize_txt_resize__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__txt_resize_txt_resize__["a" /* TxtResizeDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__txt_resize_txt_resize__["a" /* TxtResizeDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxtResizeDirective; });
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

/**
 * Generated class for the TxtResizeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var TxtResizeDirective = /** @class */ (function () {
    function TxtResizeDirective(element) {
        this.element = element;
    }
    TxtResizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    TxtResizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    TxtResizeDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], TxtResizeDirective.prototype, "onInput", null);
    TxtResizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: 'ion-textarea[txt-resize]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], TxtResizeDirective);
    return TxtResizeDirective;
}());

//# sourceMappingURL=txt-resize.js.map

/***/ })

});
//# sourceMappingURL=3.js.map