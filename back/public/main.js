(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row col-md-10 offset-md-1 custyle\">       \r\n        <button type=\"button\" class=\"btn btn-md btn-primary float-right\" (click)=\"openModal(template)\" style=\"margin-top: 10px;\">Add Account <i class=\"fa fa-plus\"></i></button> \r\n    <table class=\"table table-striped custab\">\r\n    <thead>\r\n        <tr>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>isPositive</th>\r\n            <th class=\"text-center\">Action</th>\r\n        </tr>\r\n    </thead>\r\n            <tr *ngFor=\"let account of accounts \">\r\n                <td>{{account.id}}</td>\r\n                <td>{{account.name}}</td>\r\n                <td>{{account.isPositive}}</td>\r\n                <td class=\"text-center\"><a class='btn btn-info btn-xs' href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> <a class=\"btn btn-danger btn-xs\" (click)=\"deleteAccount(account.id)\"><span class=\"glyphicon glyphicon-remove\"></span> Del</a></td>\r\n            </tr>\r\n    </table>\r\n    </div>\r\n    <ng-template #template>\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title pull-left\">Add Account</h4>\r\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                    <form class=\"form-signin\" [formGroup]=\"AddAccountForm\" (ngSubmit)=\"addAccount(AddAccountForm.value)\">\r\n                            <div class=\"row\">\r\n                                    <div class=\"col-lg-12\">                                 \r\n                        <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Account Name\" required=\"\" autofocus=\"\" formControlName=\"name\"/>                            \r\n                            </div>\r\n                                    <div class=\"col-lg-5 offset-md-1 \">                                  \r\n                        <input type=\"radio\" name=\"positive\" value='1' formControlName=\"positive\" [(ngModel)]='positive'>True\r\n                                    </div>\r\n                                    <div class=\"col-lg-5 offset-md-1\">    \r\n                        <input type=\"radio\" name='positive' value='0' formControlName=\"positive\" [(ngModel)]='positive'>False\r\n                                    </div>\r\n                            </div>\r\n                        \r\n                            <hr>\r\n                        \r\n                            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!AddAccountForm.valid\" (click)=\"modalRef.hide()\">Create</button>\r\n                            \r\n                        </form>\r\n            </div>\r\n          </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    function AccountComponent(settingService, modalService) {
        this.settingService = settingService;
        this.modalService = modalService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.AddAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            positive: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    AccountComponent.prototype.getAll = function () {
        var _this = this;
        this.settingService.getAllAccount().subscribe(function (res) {
            console.log(res);
            _this.accounts = res;
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AccountComponent.prototype.deleteAccount = function (id) {
        var _this = this;
        console.log(id);
        var payload = {
            id: id
        };
        this.settingService.deleteAccount(payload).subscribe(function (res) {
            console.log(res);
            _this.getAll();
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.addAccount = function (data) {
        var _this = this;
        var payload = {
            name: data.name,
            isPositive: data.positive === "1" ? 1 : 0
        };
        console.log(payload);
        this.settingService.createAccount(payload).subscribe(function (res) {
            _this.accounts.push(res);
            _this.singleAccount = res;
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _shared_services_entries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/entries.service */ "./src/app/shared/services/entries.service.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _method_method_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./method/method.component */ "./src/app/method/method.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// components






// service








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_21__["EntryComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_22__["CategoryComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_23__["AccountComponent"],
                _method_method_component__WEBPACK_IMPORTED_MODULE_24__["MethodComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000 }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()
            ],
            providers: [
                _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"],
                _shared_services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"],
                ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _shared_services_entries_service__WEBPACK_IMPORTED_MODULE_1__["EntriesService"],
                _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row col-md-10 offset-md-1 custyle\">\r\n    <button type=\"button\" class=\"btn btn-md btn-primary float-right\" (click)=\"openModal(template)\" style=\"margin-top: 10px;\">Add Category\r\n      <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n    <table class=\"table table-striped custab\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Name</th>\r\n          <th>Category</th>\r\n          <th class=\"text-center\">Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tr *ngFor=\"let category of Categories;let i=index\">\r\n        <td>{{category.id}}</td>\r\n        <td>{{category.name}}</td>\r\n        <td>{{category.account}}</td>\r\n        <td class=\"text-center\">\r\n          <a class='btn btn-info btn-xs' href=\"#\">\r\n            <span class=\"glyphicon glyphicon-edit\"></span> Edit</a>\r\n          <a class=\"btn btn-danger btn-xs\" (click)=\"deleteCategory(i)\">\r\n            <span class=\"glyphicon glyphicon-remove\"></span> Del</a>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Add Category</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form class=\"form-signin\" [formGroup]=\"AddCategoryForm\" (ngSubmit)=\"addCategory(AddCategoryForm.value)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Category Name\" required=\"\" autofocus=\"\" formControlName=\"name\"\r\n            />\r\n          </div>\r\n          <div class=\"col-lg-12\">\r\n            <select class=\"form-control\" formControlName=\"AccountId\" placeholder=\"Select Account\">\r\n              <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!AddCategoryForm.valid\" (click)=\"modalRef.hide()\">Create</button>\r\n\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(settingService, modalService) {
        this.settingService = settingService;
        this.modalService = modalService;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.AddCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            AccountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    CategoryComponent.prototype.getAll = function () {
        var _this = this;
        this.settingService.getAllCategory().subscribe(function (res) {
            console.log(res);
            _this.Categories = res;
        }, function (error) {
            console.log(error);
        });
        this.settingService.getAllAccount().subscribe(function (res) {
            _this.accounts = res;
        });
    };
    CategoryComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CategoryComponent.prototype.deleteCategory = function (i) {
        var _this = this;
        var payload = {
            id: this.Categories[i].id
        };
        this.settingService.deleteCategory(payload).subscribe(function (res) {
            _this.Categories.splice(i, 1);
        }, function (error) {
            console.log(error);
        });
    };
    CategoryComponent.prototype.addCategory = function (data) {
        var _this = this;
        var payload = {
            name: data.name,
            AccountId: data.AccountId
        };
        console.log(payload);
        this.settingService.createCategory(payload).subscribe(function (res) {
            _this.Categories.push(res);
            _this.singleCategory = res;
        }, function (error) {
            console.log(error);
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/entry/entry.component.css":
/*!*******************************************!*\
  !*** ./src/app/entry/entry.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/entry/entry.component.html":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row col-md-10 offset-md-1 custyle\">\r\n    <button type=\"button\" class=\"btn btn-md btn-primary float-right\" (click)=\"openModal(template)\" style=\"margin-top: 10px;\">Add Entry\r\n      <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n    <table class=\"table table-striped custab\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Title/Description</th>\r\n          <th>Amount</th>\r\n          <th>Account</th>\r\n          <th>Category</th>\r\n          <th>Method</th>\r\n          <th>Date</th>\r\n          <th class=\"text-center\">Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tr *ngFor=\"let entry of entrys \">\r\n        <td>{{entry.id}}</td>\r\n        <td>{{entry.title}}</td>\r\n        <td>{{entry.amount}}</td>\r\n        <td>{{entry.category}}</td>\r\n        <td>{{entry.account}}</td>\r\n        <td>{{entry.method}}</td>\r\n        <td>{{entry.createdAt}}</td>\r\n        <td class=\"text-center\">\r\n          <a class='btn btn-info btn-xs' href=\"#\">\r\n            <span class=\"glyphicon glyphicon-edit\"></span> Edit</a>\r\n          <a class=\"btn btn-danger btn-xs\" (click)=\"deleteEntry(entry.id)\">\r\n            <span class=\"glyphicon glyphicon-remove\"></span> Del</a>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <ng-template #template>\r\n    <form class=\"form-signin\" [formGroup]=\"AddEntryForm\" (ngSubmit)=\"addEntry(AddEntryForm.value)\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Add Entry</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Entry Title\" required=\"\" autofocus=\"\" formControlName=\"title\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <input type=\"number\" class=\"form-control\" name=\"name\" placeholder=\"Amount\" formControlName=\"amount\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <select class=\"form-control\" formControlName=\"AccountId\" placeholder=\"Select Account\" (change)=\"loadCategories(AddEntryForm.value.AccountId)\">\r\n              <option selected>select category</option>\r\n              <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <select class=\"form-control\" formControlName=\"CategoryId\" placeholder=\"Select Category\" (ngModelChange)=\"loadCategories(AddEntryForm.value.AccountId)\">\r\n              <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <select class=\"form-control\" formControlName=\"MethodId\" placeholder=\"Select Method\">\r\n              <option *ngFor=\"let method of methods\" value=\"{{method.id}}\">{{method.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!AddEntryForm.valid\" (click)=\"modalRef.hide()\">Create</button>\r\n    </form>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_entries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/entries.service */ "./src/app/shared/services/entries.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntryComponent = /** @class */ (function () {
    function EntryComponent(settingService, entryService, modalService) {
        this.settingService = settingService;
        this.entryService = entryService;
        this.modalService = modalService;
    }
    EntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAll();
        this.AddEntryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            AccountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            CategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MethodId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.settingService.getAllMethod().subscribe(function (res) {
            _this.methods = res;
        });
        this.settingService.getAllAccount().subscribe(function (res) {
            _this.accounts = res;
        });
    };
    EntryComponent.prototype.loadCategories = function (id) {
        var _this = this;
        this.settingService.getCategoryByAccount({ id: id }).subscribe(function (res) {
            _this.categories = res;
        });
    };
    EntryComponent.prototype.getAll = function () {
        var _this = this;
        this.entryService.getAll().subscribe(function (res) {
            console.log(res);
            _this.entrys = res;
        }, function (error) {
            console.log(error);
        });
    };
    EntryComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    EntryComponent.prototype.deleteEntry = function (id) {
        var _this = this;
        console.log(id);
        var payload = {
            id: id
        };
        this.entryService.delete(payload).subscribe(function (res) {
            console.log(res);
            _this.getAll();
        }, function (error) {
            console.log(error);
        });
    };
    EntryComponent.prototype.addEntry = function (data) {
        var _this = this;
        var payload = {
            title: data.title,
            amount: data.amount,
            AccountId: data.AccountId,
            CategoryId: data.CategoryId,
            MethodId: data.MethodId
        };
        console.log(payload);
        this.entryService.create(payload).subscribe(function (res) {
            _this.entrys.push(res);
            _this.singleEntry = res;
        }, function (error) {
            console.log(error);
        });
    };
    EntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.css */ "./src/app/entry/entry.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"], _shared_services_entries_service__WEBPACK_IMPORTED_MODULE_4__["EntriesService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a href=\"#\" class=\"navbar-brand\">Personal Accountant</a>\r\n  <button class=\"navbar-toggler\" data-target=\"#navigation\" data-control=\"navigation\" data-toggle=\"collapse\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navigation\">\r\n    <ul class=\"nav navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/home\" class=\"nav-link\">Home</a>\r\n      </li>\r\n    </ul>\r\n      <ul class=\"nav navbar-nav ml-auto\">\r\n      <li class=\"nav-item dropdown\" *ngIf=\"user\">\r\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" id=\"preview\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user.name}}</a>\r\n        <div class=\"dropdown-menu\" aria-lableledby=\"preview\">\r\n          <a class=\"dropdown-item\">Profile</a>\r\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\">Logout</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" *ngIf=\"!user\">\r\n        <a routerLink=\"/login\" class=\"nav-link\">Log In</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!user\">\r\n        <a routerLink=\"/signup\" class=\"nav-link\">Sign Up</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item\">\r\n        <a href=\"#\" class=\"nav-link\">Contact Us</a>\r\n      </li> -->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_authService, route) {
        this._authService = _authService;
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getUser().subscribe(function (res) {
            _this.user = res;
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this._authService.setUser(null);
        this.route.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgImg{\r\n  -webkit-filter: blur(1px) !important;\r\n          filter: blur(1px) !important;\r\n  background-size: cover;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\r\n  max-width: 30%;\r\n  padding: 15px 35px 45px;\r\n  margin: 0 auto;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-alerts></ngx-alerts>\r\n<div class=\"wrapper\">\r\n    <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\r\n      <h2 class=\"form-signin-heading text-center\">Login</h2>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Email Address\" required=\"\" autofocus=\"\" formControlName=\"email\"\r\n      />\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\" formControlName=\"password\"\r\n      />\r\n      <!-- <p class=\"text-center\" style=\"color: red\">{{errMessage}}</p> -->\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n        <br>\r\n      <button type=\"button\" class=\"btn btn-link \" style=\"background-color: white;\" (click)=\"signUpFormOpen()\">Register Your Self</button>\r\n      </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, authenticationService, alertService) {
        this.route = route;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[^ @]*@[^ @]*")]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    LoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        var payload = {
            email: user.email,
            password: user.password
        };
        console.log(payload);
        this.authenticationService.loginUser(payload)
            .subscribe(function (res) {
            _this.userlogin_response = res;
            localStorage.setItem('userInfo', JSON.stringify(_this.userlogin_response));
            _this.authenticationService.setUser(res);
            localStorage.setItem('isLoggedin', 'true');
            _this.alertService.success('Login SuccesFull');
            _this.route.navigate(['/dashboard']);
        }, function (err) {
            _this.errMessage = err['error'].message;
            _this.alertService.danger(err['error'].message);
            console.log(err);
        });
    };
    LoginComponent.prototype.signUpFormOpen = function () {
        this.route.navigate(['/signup']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/method/method.component.css":
/*!*********************************************!*\
  !*** ./src/app/method/method.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/method/method.component.html":
/*!**********************************************!*\
  !*** ./src/app/method/method.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row col-md-10 offset-md-1 custyle\">\r\n    <button type=\"button\" class=\"btn btn-md btn-primary float-right\" (click)=\"openModal(template)\" style=\"margin-top: 10px;\">Add Method\r\n      <i class=\"fa fa-plus\"></i>\r\n    </button>\r\n    <table class=\"table table-striped custab\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th class=\"text-center\">Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tr *ngFor=\"let method of methods \">\r\n        <td>{{method.id}}</td>\r\n        <td>{{method.name}}</td>\r\n        <td>{{method.type}}</td>\r\n        <td class=\"text-center\">\r\n          <a class='btn btn-info btn-xs' href=\"#\">\r\n            <span class=\"glyphicon glyphicon-edit\"></span> Edit</a>\r\n          <a class=\"btn btn-danger btn-xs\" (click)=\"deleteMethod(method.id)\">\r\n            <span class=\"glyphicon glyphicon-remove\"></span> Del</a>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Add Method</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form class=\"form-signin\" [formGroup]=\"AddMethodForm\" (ngSubmit)=\"addMethod(AddMethodForm.value)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Method Name\" required=\"\" autofocus=\"\" formControlName=\"name\"\r\n            />\r\n          </div>\r\n          <div class=\"col-lg-12 offset-md-1 \">\r\n            <input formControlName=\"type\">\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!AddMethodForm.valid\" (click)=\"modalRef.hide()\">Create</button>\r\n\r\n      </form>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/method/method.component.ts":
/*!********************************************!*\
  !*** ./src/app/method/method.component.ts ***!
  \********************************************/
/*! exports provided: MethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodComponent", function() { return MethodComponent; });
/* harmony import */ var _shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/settings.service */ "./src/app/shared/services/settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MethodComponent = /** @class */ (function () {
    function MethodComponent(settingService, modalService) {
        this.settingService = settingService;
        this.modalService = modalService;
    }
    MethodComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.AddMethodForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    MethodComponent.prototype.getAll = function () {
        var _this = this;
        this.settingService.getAllMethod().subscribe(function (res) {
            console.log(res);
            _this.methods = res;
        }, function (error) {
            console.log(error);
        });
    };
    MethodComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    MethodComponent.prototype.deleteMethod = function (id) {
        var _this = this;
        console.log(id);
        var payload = {
            id: id
        };
        this.settingService.deleteMethod(payload).subscribe(function (res) {
            console.log(res);
            _this.getAll();
        }, function (error) {
            console.log(error);
        });
    };
    MethodComponent.prototype.addMethod = function (data) {
        var _this = this;
        var payload = {
            name: data.name,
            type: data.type
        };
        this.settingService.createMethod(payload).subscribe(function (res) {
            _this.methods.push(res);
            _this.singleMethod = res;
        }, function (error) {
            console.log(error);
        });
    };
    MethodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-method',
            template: __webpack_require__(/*! ./method.component.html */ "./src/app/method/method.component.html"),
            styles: [__webpack_require__(/*! ./method.component.css */ "./src/app/method/method.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], MethodComponent);
    return MethodComponent;
}());



/***/ }),

/***/ "./src/app/password-validation.ts":
/*!****************************************!*\
  !*** ./src/app/password-validation.ts ***!
  \****************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            // console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            // console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _method_method_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../method/method.component */ "./src/app/method/method.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: "entry",
                component: _entry_entry_component__WEBPACK_IMPORTED_MODULE_3__["EntryComponent"]
            },
            {
                path: "category",
                component: _category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]
            },
            {
                path: "account",
                component: _account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"]
            },
            {
                path: "method",
                component: _method_method_component__WEBPACK_IMPORTED_MODULE_0__["MethodComponent"]
            }
        ]
    },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: "**", redirectTo: "home" }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(dataService) {
        this.dataService = dataService;
        this.loggedIn = false;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AuthenticationService.prototype.loginUser = function (payload) {
        return this.dataService.loginUser(payload);
    };
    AuthenticationService.prototype.getUser = function () {
        return this.user.asObservable();
    };
    AuthenticationService.prototype.setUser = function (user) {
        this.user.next(user);
    };
    AuthenticationService.prototype.registerUser = function (payload) {
        return this.dataService.registerUser(payload);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = "/api/";
    }
    // authentication
    DataService.prototype.loginUser = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'login', payload);
    };
    DataService.prototype.registerUser = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'user', payload);
    };
    //accounts
    DataService.prototype.createAccount = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'account', payload);
    };
    DataService.prototype.deleteAccount = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.baseUrl + "account/" + payload.id);
    };
    DataService.prototype.updateAccount = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + 'account', payload);
    };
    DataService.prototype.getAllAccount = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'account');
    };
    //categories
    DataService.prototype.createCategory = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'category', payload);
    };
    DataService.prototype.deleteCategory = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.baseUrl + "category/" + payload.id);
    };
    DataService.prototype.updateCategory = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + 'category', payload);
    };
    DataService.prototype.getAllCategory = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'category');
    };
    DataService.prototype.getCategoryByAccount = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + "category/" + payload.id);
    };
    //methods
    DataService.prototype.createMethod = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'method', payload);
    };
    DataService.prototype.deleteMethod = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.baseUrl + "method/" + payload.id);
    };
    DataService.prototype.updateMethod = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + 'method', payload);
    };
    DataService.prototype.getAllMethod = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'method');
    };
    //entry
    DataService.prototype.createEntry = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'entry', payload);
    };
    DataService.prototype.deleteEntry = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.baseUrl + 'entry', payload);
    };
    DataService.prototype.updateEntry = function (payload) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + 'entry', payload);
    };
    DataService.prototype.getAllEntry = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'entry');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/services/entries.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/entries.service.ts ***!
  \****************************************************/
/*! exports provided: EntriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesService", function() { return EntriesService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntriesService = /** @class */ (function () {
    function EntriesService(dataService) {
        this.dataService = dataService;
    }
    EntriesService.prototype.create = function (payload) {
        return this.dataService.createEntry(payload);
    };
    EntriesService.prototype.update = function (payload) {
        return this.dataService.updateEntry(payload);
    };
    EntriesService.prototype.delete = function (payload) {
        return this.dataService.deleteEntry(payload);
    };
    EntriesService.prototype.getAll = function () {
        return this.dataService.getAllEntry();
    };
    EntriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], EntriesService);
    return EntriesService;
}());



/***/ }),

/***/ "./src/app/shared/services/settings.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/settings.service.ts ***!
  \*****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsService = /** @class */ (function () {
    function SettingsService(dataService) {
        this.dataService = dataService;
    }
    //category
    SettingsService.prototype.createCategory = function (payload) {
        return this.dataService.createCategory(payload);
    };
    SettingsService.prototype.updateCategory = function (payload) {
        return this.dataService.updateCategory(payload);
    };
    SettingsService.prototype.deleteCategory = function (payload) {
        return this.dataService.deleteCategory(payload);
    };
    SettingsService.prototype.getAllCategory = function () {
        return this.dataService.getAllCategory();
    };
    SettingsService.prototype.getCategoryByAccount = function (payload) {
        return this.dataService.getCategoryByAccount(payload);
    };
    //method
    SettingsService.prototype.createMethod = function (payload) {
        return this.dataService.createMethod(payload);
    };
    SettingsService.prototype.updateMethod = function (payload) {
        return this.dataService.updateMethod(payload);
    };
    SettingsService.prototype.deleteMethod = function (payload) {
        return this.dataService.deleteMethod(payload);
    };
    SettingsService.prototype.getAllMethod = function () {
        return this.dataService.getAllMethod();
    };
    //account
    SettingsService.prototype.createAccount = function (payload) {
        return this.dataService.createAccount(payload);
    };
    SettingsService.prototype.updateAccount = function (payload) {
        return this.dataService.updateAccount(payload);
    };
    SettingsService.prototype.deleteAccount = function (payload) {
        return this.dataService.deleteAccount(payload);
    };
    SettingsService.prototype.getAllAccount = function () {
        return this.dataService.getAllAccount();
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n    height: 100%;\r\n    width: 200px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 56px;\r\n    left: -3px;\r\n    background-color: #343a40;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.sidebar-nav {\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n.sidebar-nav li {\r\n    position: relative; \r\n    line-height: 20px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.sidebar-nav li:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100%;\r\n    width: 3px;\r\n    background-color: #1c1c1c;\r\n    transition: width .2s ease-in;\r\n\r\n}\r\n\r\n.sidebar-nav li:hover:before,\r\n.sidebar-nav li.open:hover:before {\r\n    width: 100%;\r\n    transition: width .2s ease-in;\r\n\r\n}\r\n\r\n.sidebar-nav li a {\r\n    display: block;\r\n    color: #ddd;\r\n    text-decoration: none;\r\n    padding: 10px 15px 10px 30px;    \r\n    font-size: 14px;\r\n}\r\n\r\n.sidebar-nav li a:hover,\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus,\r\n.sidebar-nav li.open a:hover,\r\n.sidebar-nav li.open a:active,\r\n.sidebar-nav li.open a:focus{\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n    height: 65px;\r\n    font-size: 20px;\r\n    line-height: 44px;\r\n}\r\n\r\n.sidebar-nav .dropdown-menu {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    border: none;\r\n    background-color: #222;\r\n    box-shadow: none;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: #818181;\r\n    display: block;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.main {\r\n    margin-left: 160px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\r\n    <ul class=\"nav sidebar-nav\">\r\n        <li class=\"sidebar-brand\">\r\n            <a [routerLink]=\"['entry']\" style=\"font-size: 20px;\">\r\n               Entry\r\n            </a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a  class=\"dropdown-toggle\" (click)=\"stopPropogate($event)\" data-toggle=\"dropdown\" style=\"font-size: 20px;\" [routerLink]=\"['category']\">Settings <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li class=\"sidebar-brand\"><a [routerLink]=\"['category']\">Category</a></li>\r\n            <li><a [routerLink]=\"['account']\">Account</a></li>\r\n            <li><a [routerLink]=\"['method']\">Method</a></li>\r\n          </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.stopPropogate = function (e) {
        console.log(e);
        e.preventDefault();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper container\">\r\n  <form class=\"form-signin\" [formGroup]=\"signupForm\" (ngSubmit)=\"registerUser(signupForm.value)\">\r\n    <div class=\"row\">\r\n      <h2 class=\"form-signin-heading text-center\">Welcome aboard!</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Your Name\" required=\"\" autofocus=\"\" formControlName=\"name\"\r\n        />\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <input type=\"text\" class=\"form-control\" name=\"userame\" placeholder=\" User Name\" required=\"\" autofocus=\"\" formControlName=\"username\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\" required=\"\" formControlName=\"email\" />\r\n          </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\" formControlName=\"password\"\r\n        />\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Confirm Password\" required=\"\" formControlName=\"confirmPassword\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div [hidden]=\"signupForm.controls.confirmPassword.valid || signupForm.controls.confirmPassword.pristine\" class=\"alert alert-danger\">\r\n          Password mismatch\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!signupForm.valid\">Signup</button>\r\n      </div>\r\n    </div>\r\n    <p>Already Have a Account?\r\n      <button type=\"button\" class=\"btn btn-link \" style=\"background-color: white; margin-top: -6px;\" (click)=\"logInFormOpen()\">Login.</button>\r\n    </p>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../password-validation */ "./src/app/password-validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, authenticationService, alertService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.passwordMatchValidator = function (signupForm) {
            return signupForm.get('password').value === signupForm.get('confirmPassword').value ? null : { 'mismatch': true };
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        }, _password_validation__WEBPACK_IMPORTED_MODULE_3__["PasswordValidation"].MatchPassword);
    };
    SignupComponent.prototype.registerUser = function (user) {
        var _this = this;
        var payload = {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
        };
        // console.log(payload);
        this.authenticationService.registerUser(payload)
            .subscribe(function (res) {
            console.log(res, 'api');
            // this.alertService.success(res['msg']);
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err, 'api');
            _this.alertService.danger(err['error'].message);
        });
    };
    SignupComponent.prototype.logInFormOpen = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], ngx_alerts__WEBPACK_IMPORTED_MODULE_0__["AlertService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\github\personal-accountant\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map