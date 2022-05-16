"use strict";
(self["webpackChunkng_sk"] = self["webpackChunkng_sk"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph/graph.component */ 1864);
/* harmony import */ var _auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/authenticated.guard */ 2307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        children: [{ path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent }],
        canActivate: [_auth_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticatedGuard],
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.SettingsComponent },
    { path: 'graph', component: _graph_graph_component__WEBPACK_IMPORTED_MODULE_0__.GraphComponent },
    { path: '**', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/de */ 8855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-apexcharts */ 54);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-interceptor */ 762);
/* harmony import */ var _bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottom-bar/bottom-bar.component */ 5470);
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graph/graph.component */ 1864);
/* harmony import */ var _graph_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph/pie-chart/pie-chart.component */ 9200);
/* harmony import */ var _graph_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graph/scatter-plot/scatter-plot.component */ 6870);
/* harmony import */ var _home_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/form/form.component */ 1200);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _home_mood_entry_mood_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/mood-entry/mood-entry.component */ 5502);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./note-dialog/note-dialog.component */ 7150);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _search_sk_paginator_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/sk-paginator-intl */ 9509);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _shared_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/error-msg/error-msg.component */ 8697);
/* harmony import */ var _shared_material_meta_material_meta_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/material-meta/material-meta.module */ 8710);
/* harmony import */ var _shared_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/pipes/enum-to-array.pipe */ 7058);
/* harmony import */ var _shared_pipes_enum_value_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/pipes/enum-value.pipe */ 1472);
/* harmony import */ var _shared_pipes_mood_enum_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/pipes/mood-enum.pipe */ 2039);
/* harmony import */ var _shared_pipes_repeat_char_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/pipes/repeat-char.pipe */ 502);
/* harmony import */ var _shared_pipes_str_to_date_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/pipes/str-to-date.pipe */ 1065);
/* harmony import */ var _shared_pipes_str_to_week_end_date_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/pipes/str-to-week-end-date.pipe */ 542);
/* harmony import */ var _shared_pipes_week_number_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/pipes/week-number.pipe */ 1863);
/* harmony import */ var _shared_sk_date_adapter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/sk-date-adapter */ 7486);
/* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./transloco-root.module */ 7460);







































(0,_angular_common__WEBPACK_IMPORTED_MODULE_28__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_0__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_29__.LOCALE_ID, useValue: 'de' },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HTTP_INTERCEPTORS, useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor, multi: true },
        _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.DateAdapter, useClass: _shared_sk_date_adapter__WEBPACK_IMPORTED_MODULE_26__.SkDateAdapter },
        { provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__.MatPaginatorIntl, useClass: _search_sk_paginator_intl__WEBPACK_IMPORTED_MODULE_15__.SkPaginatorIntl },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule,
            _shared_material_meta_material_meta_module__WEBPACK_IMPORTED_MODULE_18__.MaterialMetaModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
            _transloco_root_module__WEBPACK_IMPORTED_MODULE_27__.TranslocoRootModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_37__.NgApexchartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__.HomeComponent,
        _shared_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_19__.EnumToArrayPipe,
        _shared_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_17__.ErrorMsgComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__.NavbarComponent,
        _home_mood_entry_mood_entry_component__WEBPACK_IMPORTED_MODULE_10__.MoodEntryComponent,
        _shared_pipes_mood_enum_pipe__WEBPACK_IMPORTED_MODULE_21__.MoodEnumPipe,
        _shared_pipes_enum_value_pipe__WEBPACK_IMPORTED_MODULE_20__.EnumValuePipe,
        _note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_13__.NoteDialogComponent,
        _shared_pipes_repeat_char_pipe__WEBPACK_IMPORTED_MODULE_22__.RepeatCharPipe,
        _home_form_form_component__WEBPACK_IMPORTED_MODULE_8__.FormComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_14__.SearchComponent,
        _shared_pipes_week_number_pipe__WEBPACK_IMPORTED_MODULE_25__.WeekNumberPipe,
        _shared_pipes_str_to_date_pipe__WEBPACK_IMPORTED_MODULE_23__.StrToDatePipe,
        _shared_pipes_str_to_week_end_date_pipe__WEBPACK_IMPORTED_MODULE_24__.StrToWeekEndDatePipe,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__.SettingsComponent,
        _bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_4__.BottomBarComponent,
        _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__.GraphComponent,
        _graph_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_7__.ScatterPlotComponent,
        _graph_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__.PieChartComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule,
        _shared_material_meta_material_meta_module__WEBPACK_IMPORTED_MODULE_18__.MaterialMetaModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
        _transloco_root_module__WEBPACK_IMPORTED_MODULE_27__.TranslocoRootModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_37__.NgApexchartsModule] }); })();


/***/ }),

/***/ 762:
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api-urls */ 6296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);




class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        if (req.url === _shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.LOGIN_URL) {
            // Do nothing, this is a call to the oauth api
            return next.handle(req);
        }
        return this.authService.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((user) => {
            if (user.token) {
                req = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${user.token || ''}`,
                    },
                });
            }
            return next.handle(req);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2307:
/*!*********************************************!*\
  !*** ./src/app/auth/authenticated.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticatedGuard": () => (/* binding */ AuthenticatedGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AuthenticatedGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route, state) {
        return this.authService.isLoggedIn().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((loggedIn) => {
            if (!loggedIn) {
                void this.router.navigate(['/login'], {
                    queryParams: { returnUrl: state.url },
                });
                return false;
            }
            else {
                return true;
            }
        }));
    }
}
AuthenticatedGuard.ɵfac = function AuthenticatedGuard_Factory(t) { return new (t || AuthenticatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthenticatedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticatedGuard, factory: AuthenticatedGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5470:
/*!****************************************************!*\
  !*** ./src/app/bottom-bar/bottom-bar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomBarComponent": () => (/* binding */ BottomBarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ 2426);











function BottomBarComponent_mat_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 2)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BottomBarComponent_mat_toolbar_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r2.onLogout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const name_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "logged_in_as"), ": ", name_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, "logout"), " ");
  }
}

class BottomBarComponent {
  constructor(authService) {
    this.authService = authService;
    this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable();
    this.username = this.authService.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(user => user.username));
  }

  onLogout() {
    this.authService.logout();
  }

}

BottomBarComponent.ɵfac = function BottomBarComponent_Factory(t) {
  return new (t || BottomBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};

BottomBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BottomBarComponent,
  selectors: [["app-bottom-bar"]],
  decls: 3,
  vars: 3,
  consts: [[1, "app-main", "dark-theme", "mat-app-background", "bottom-bar"], ["class", "toolbar", "fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "center center", 1, "toolbar"], ["mat-button", "", 3, "click"], ["fxHide.lt-md", ""]],
  template: function BottomBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BottomBarComponent_mat_toolbar_1_Template, 11, 7, "mat-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.username));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoPipe],
  styles: [".bottom-bar[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImJvdHRvbS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLWJhciB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuIl19 */"]
});

/***/ }),

/***/ 1864:
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphComponent": () => (/* binding */ GraphComponent)
/* harmony export */ });
/* harmony import */ var _shared_periods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/periods */ 7889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scatter-plot/scatter-plot.component */ 6870);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ 9200);
/* harmony import */ var _shared_pipes_enum_value_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/enum-value.pipe */ 1472);







function GraphComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-pie-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const period_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("period", period_r1);
} }
class GraphComponent {
    constructor() {
        this.periods = _shared_periods__WEBPACK_IMPORTED_MODULE_0__.Periods;
    }
}
GraphComponent.ɵfac = function GraphComponent_Factory(t) { return new (t || GraphComponent)(); };
GraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GraphComponent, selectors: [["app-graph"]], decls: 4, vars: 3, consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "1rem", "fxLayoutAlign", "space-between"], [4, "ngFor", "ngForOf"], [3, "period"]], template: function GraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-scatter-plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GraphComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "enumValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx.periods));
    } }, directives: [_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_1__.ScatterPlotComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent], pipes: [_shared_pipes_enum_value_pipe__WEBPACK_IMPORTED_MODULE_3__.EnumValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9200:
/*!********************************************************!*\
  !*** ./src/app/graph/pie-chart/pie-chart.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartComponent": () => (/* binding */ PieChartComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/model/sk/moods */ 7318);
/* harmony import */ var src_app_shared_periods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/periods */ 7889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stimmungskalender.service */ 7648);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ 2426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 54);








const _c0 = ["chart"];

function PieChartComponent_apx_chart_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "apx-chart", 1);
  }

  if (rf & 2) {
    const chartOptions_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", chartOptions_r1.series)("chart", chartOptions_r1.chart)("labels", chartOptions_r1.labels)("responsive", chartOptions_r1.responsive)("theme", chartOptions_r1.theme);
  }
}

class PieChartComponent {
  constructor(skService, translocoService) {
    this.skService = skService;
    this.translocoService = translocoService;
    this.period = '';
    this.chart = {};
    this.chartOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
    this.header = '';
  }

  ngOnInit() {
    this.chartOptions$ = this.skService.getPieChartGraph(this.period).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(data => {
      const chartOptions = this.defaultGraph();
      chartOptions.series = data.values;
      const labels = [];
      data.label_numbers.forEach(val => labels.push(this.translocoService.translate(src_app_shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_0__.Moods[+val].toLowerCase())));
      chartOptions.labels = labels;
      return chartOptions;
    }));
    this.setHeader();
  }

  setHeader() {
    if (this.period === src_app_shared_periods__WEBPACK_IMPORTED_MODULE_1__.Periods.DAY) {
      this.header = this.translocoService.translate('day_moods');
    } else if (this.period === src_app_shared_periods__WEBPACK_IMPORTED_MODULE_1__.Periods.NIGHT) {
      this.header = this.translocoService.translate('night_moods');
    }
  }

  defaultGraph() {
    return {
      series: [],
      chart: {
        width: 380,
        type: 'pie'
      },
      labels: [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      theme: {
        mode: 'dark'
      }
    };
  }

}

PieChartComponent.ɵfac = function PieChartComponent_Factory(t) {
  return new (t || PieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_2__.StimmungskalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoService));
};

PieChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PieChartComponent,
  selectors: [["app-pie-chart"]],
  viewQuery: function PieChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  inputs: {
    period: "period"
  },
  decls: 4,
  vars: 4,
  consts: [[3, "series", "chart", "labels", "responsive", "theme", 4, "ngIf"], [3, "series", "chart", "labels", "responsive", "theme"]],
  template: function PieChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PieChartComponent_apx_chart_2_Template, 1, 5, "apx-chart", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.header);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx.chartOptions$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.ChartComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6870:
/*!**************************************************************!*\
  !*** ./src/app/graph/scatter-plot/scatter-plot.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScatterPlotComponent": () => (/* binding */ ScatterPlotComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/model/sk/moods */ 7318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/stimmungskalender.service */ 7648);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ 2426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 54);







const _c0 = ["chart"];

function ScatterPlotComponent_apx_chart_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "apx-chart", 1);
  }

  if (rf & 2) {
    const chartOptions_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chart", chartOptions_r1.chart)("colors", chartOptions_r1.colors)("dataLabels", chartOptions_r1.dataLabels)("grid", chartOptions_r1.grid)("series", chartOptions_r1.series)("stroke", chartOptions_r1.stroke)("theme", chartOptions_r1.theme)("title", chartOptions_r1.title)("tooltip", chartOptions_r1.tooltip)("xaxis", chartOptions_r1.xaxis)("yaxis", chartOptions_r1.yaxis);
  }
}

class ScatterPlotComponent {
  constructor(skService, translocoService) {
    this.skService = skService;
    this.translocoService = translocoService;
    this.chart = {};
    this.chartOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }

  ngOnInit() {
    this.chartOptions$ = this.skService.getScatterGraph().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(data => {
      const chartOptions = this.defaultGraph();
      chartOptions.xaxis.categories = data.map(i => i.x);
      chartOptions.series[0].name = this.translocoService.translate('day');
      chartOptions.series[0].data = data.map(i => i.y.day);
      chartOptions.series[1].name = this.translocoService.translate('night');
      chartOptions.series[1].data = data.map(i => i.y.night);
      return chartOptions;
    }));
  }

  defaultGraph() {
    return {
      series: [{
        name: '',
        data: []
      }, {
        name: '',
        data: []
      }],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      colors: ['#546E7A', '#E91E63'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      theme: {
        mode: 'dark'
      },
      title: {
        text: this.translocoService.translate('scatterplot'),
        align: 'left'
      },
      tooltip: {
        enabled: true
      },
      grid: {
        row: {
          colors: [],
          opacity: 1
        }
      },
      xaxis: {
        categories: []
      },
      yaxis: {
        labels: {
          formatter: value => {
            return this.translocoService.translate(src_app_shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_0__.Moods[+value].toLowerCase());
          }
        }
      }
    };
  }

}

ScatterPlotComponent.ɵfac = function ScatterPlotComponent_Factory(t) {
  return new (t || ScatterPlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_1__.StimmungskalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoService));
};

ScatterPlotComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ScatterPlotComponent,
  selectors: [["app-scatter-plot"]],
  viewQuery: function ScatterPlotComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [[3, "chart", "colors", "dataLabels", "grid", "series", "stroke", "theme", "title", "tooltip", "xaxis", "yaxis", 4, "ngIf"], [3, "chart", "colors", "dataLabels", "grid", "series", "stroke", "theme", "title", "tooltip", "xaxis", "yaxis"]],
  template: function ScatterPlotComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ScatterPlotComponent_apx_chart_0_Template, 1, 11, "apx-chart", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.chartOptions$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.ChartComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2F0dGVyLXBsb3QuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 1200:
/*!*********************************************!*\
  !*** ./src/app/home/form/form.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _mood_entry_mood_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mood-entry/mood-entry.component */ 5502);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ 2426);






function FormComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\uD83C\uDF19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\u2600\uFE0F");
} }
function FormComponent_mat_card_content_9_app_mood_entry_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mood-entry", 7);
} if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("entry", entry_r5)("form", ctx_r4.form);
} }
function FormComponent_mat_card_content_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_mat_card_content_9_app_mood_entry_1_Template, 1, 2, "app-mood-entry", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.moodTable.days_of_week);
} }
class FormComponent {
    constructor() {
        this.form = '';
        this.moodTable = {};
        this.visible = true;
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], inputs: { form: "form", moodTable: "moodTable" }, decls: 10, vars: 9, consts: [["fxLayoutAlign", "center center"], [3, "title", "click"], [4, "ngIf", "ngIfElse"], ["day", ""], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign", "space-between space-between", "fxLayoutGap.lt-md", "5rem", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign", "space-between space-between", "fxLayoutGap.lt-md", "5rem"], ["fxFlex", "", 3, "entry", "form", 4, "ngFor", "ngForOf"], ["fxFlex", "", 3, "entry", "form"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header", 0)(2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormComponent_Template_mat_card_title_click_2_listener() { return ctx.visible = !ctx.visible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FormComponent_span_6_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FormComponent_ng_template_7_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FormComponent_mat_card_content_9_Template, 2, 1, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "click_to_toggle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx.form === "night" ? "night_header" : "day_header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form === "night")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _mood_entry_mood_entry_component__WEBPACK_IMPORTED_MODULE_0__.MoodEntryComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoPipe], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGIiwiZmlsZSI6ImZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 4876);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 8856);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 4531);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../note-dialog/note-dialog.component */ 7150);
/* harmony import */ var _shared_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/forms */ 4093);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/messages */ 4613);
/* harmony import */ var _shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/model/sk/moods */ 7318);
/* harmony import */ var _shared_query_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/query-params */ 4922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/stimmungskalender.service */ 7648);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/message.service */ 2684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _shared_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/error-msg/error-msg.component */ 8697);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ 1200);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngneat/transloco */ 2426);
/* harmony import */ var _shared_pipes_str_to_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/pipes/str-to-date.pipe */ 1065);
/* harmony import */ var _shared_pipes_str_to_week_end_date_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/str-to-week-end-date.pipe */ 542);
/* harmony import */ var _shared_pipes_enum_value_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/pipes/enum-value.pipe */ 1472);

























function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function HomeComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-error-msg", 13)(2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("error", ctx_r3.error);
  }
}

function HomeComponent_div_1_mat_card_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const moodTable_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", moodTable_r2.week.note, " ");
  }
}

function HomeComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const form_r8 = ctx.$implicit;
    const moodTable_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("form", form_r8)("moodTable", moodTable_r2);
  }
}

function HomeComponent_div_1_div_28_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 17)(1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const day_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](day_r12.css_class);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 4, day_r12.label), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](4, 6, day_r12.entry.day, "shortDate"), " ");
  }
}

function HomeComponent_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, HomeComponent_div_1_div_28_mat_card_1_Template, 5, 9, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const standoutData_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", standoutData_r10);
  }
}

function HomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, HomeComponent_div_1_div_1_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 5)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "strToDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "strToWeekEndDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 6)(14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r13.openNoteDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r15.prevWeek();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function HomeComponent_div_1_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r16.nextWeek();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, HomeComponent_div_1_mat_card_24_Template, 4, 1, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, HomeComponent_div_1_div_26_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "enumValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, HomeComponent_div_1_div_28_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const moodTable_r2 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 12, "week"), " #", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 14, ctx_r1.currentWeek, "w"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](9, 17, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 20, moodTable_r2.week.week_date), "shortDate"), " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 22, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 25, moodTable_r2.week.week_date), "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("color", moodTable_r2.week.note ? "accent" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 27, "note"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 29, "prev"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 31, "next"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", moodTable_r2.week.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 33, ctx_r1.forms));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](29, 35, ctx_r1.standoutData$));
  }
}

const SK_DATE_FORMAT = 'yyyy-MM-dd';
class HomeComponent {
  constructor(skService, dialog, msgService, route, router) {
    this.skService = skService;
    this.dialog = dialog;
    this.msgService = msgService;
    this.route = route;
    this.router = router;
    this.moodTable$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable();
    this.standoutData$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable();
    this.moods = _shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_3__.Moods;
    this.forms = _shared_forms__WEBPACK_IMPORTED_MODULE_1__.Forms;
    this.error = null;
    this.loading = true;
    this.currentWeek = new Date();
  }

  ngOnInit() {
    this.standoutData$ = this.skService.getStandoutData();
    this.buildMsgListener();
    this.route.queryParams.subscribe(params => {
      if (params.hasOwnProperty(_shared_query_params__WEBPACK_IMPORTED_MODULE_4__.QP_START_DAY)) {
        this.currentWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(params[_shared_query_params__WEBPACK_IMPORTED_MODULE_4__.QP_START_DAY], SK_DATE_FORMAT, new Date());
      } else {
        this.currentWeek = new Date();
      }

      this.loadEntries();
    });
  }

  handleKeyDown($event) {
    const inputElement = $event.target;
    /* We ignore keys coming from input fields */

    if (inputElement.tagName === 'MAT-SLIDER' || inputElement.tagName === 'INPUT' || inputElement.tagName === 'TEXTAREA') {
      return;
    }
    /* We don't want to interfere with non-ampd-shortcuts like Alt+Tab or Ctrl+R */


    if ($event.ctrlKey || $event.metaKey) {
      return;
    }
    /* We don't want to interfere with tab changes */


    if ($event.altKey) {
      return;
    }

    switch ($event.key) {
      case 'a':
        // Open note dialog
        this.openNoteDialog();
        break;

      case '<':
      case 'ArrowLeft':
        // Left: Previous track
        this.prevWeek();
        break;

      case '>':
      case 'ArrowRight':
        // Right: Next track
        this.nextWeek();
        break;

      default:
        // Ignore it
        return;
    }

    $event.preventDefault();
  }

  openNoteDialog() {
    this.moodTable$.subscribe(moodTable => {
      const dialogRef = this.dialog.open(_note_dialog_note_dialog_component__WEBPACK_IMPORTED_MODULE_0__.NoteDialogComponent, {
        width: '75%',
        data: {
          week_date: moodTable.week.week_date,
          note: moodTable.week.note
        }
      });
      dialogRef.afterClosed().subscribe(() => this.msgService.sendMessage(_shared_messages__WEBPACK_IMPORTED_MODULE_2__.Messages.RELOAD));
    });
  }

  nextWeek() {
    this.currentWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(this.currentWeek, 1);
    void this.router.navigate([], {
      queryParams: {
        [_shared_query_params__WEBPACK_IMPORTED_MODULE_4__.QP_START_DAY]: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(this.currentWeek, SK_DATE_FORMAT)
      }
    }).then(() => this.msgService.sendMessage(_shared_messages__WEBPACK_IMPORTED_MODULE_2__.Messages.RELOAD));
  }

  prevWeek() {
    this.currentWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(this.currentWeek, 1);
    void this.router.navigate([], {
      queryParams: {
        [_shared_query_params__WEBPACK_IMPORTED_MODULE_4__.QP_START_DAY]: (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(this.currentWeek, SK_DATE_FORMAT)
      }
    }).then(() => this.msgService.sendMessage(_shared_messages__WEBPACK_IMPORTED_MODULE_2__.Messages.RELOAD));
  }

  loadEntries() {
    this.moodTable$ = this.skService.getMoodTable((0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(this.currentWeek, SK_DATE_FORMAT)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(err => {
      this.error = {
        title: 'Got an error while fetching entries',
        detail: err.message
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)({});
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.tap)(() => this.loading = false));
  }

  buildMsgListener() {
    this.msgService.getMessages().subscribe(msg => {
      switch (msg) {
        case _shared_messages__WEBPACK_IMPORTED_MODULE_2__.Messages.RELOAD:
          this.loadEntries();
          break;

        default:
          // Ignore it
          return;
      }
    });
  }

}

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_5__.StimmungskalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router));
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  hostBindings: function HomeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown", function HomeComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveDocument"]);
    }
  },
  decls: 3,
  vars: 4,
  consts: [["fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "2.5rem", 4, "ngIf"], ["fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutGap", "2.5rem"], ["fxFlex", "", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign", "space-between", "fxLayoutGap", "1rem"], ["fxLayoutAlign", "center center", "fxLayoutGap", "0.5rem"], ["mat-stroked-button", "", 3, "color", "click"], ["mat-stroked-button", "", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "1rem", "fxLayoutAlign", "space-between", 4, "ngIf"], ["fxFlex", ""], [3, "error"], [3, "form", "moodTable"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "1rem", "fxLayoutAlign", "space-between"], ["class", "alert", 3, "class", 4, "ngFor", "ngForOf"], [1, "alert"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 30, 37, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx.moodTable$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutAlignDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__.DefaultFlexDirective, _shared_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_7__.ErrorMsgComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _form_form_component__WEBPACK_IMPORTED_MODULE_8__.FormComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_29__.TranslocoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe, _shared_pipes_str_to_date_pipe__WEBPACK_IMPORTED_MODULE_9__.StrToDatePipe, _shared_pipes_str_to_week_end_date_pipe__WEBPACK_IMPORTED_MODULE_10__.StrToWeekEndDatePipe, _shared_pipes_enum_value_pipe__WEBPACK_IMPORTED_MODULE_11__.EnumValuePipe],
  styles: [".alert[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgY29sb3I6ICMxNTU3MjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gIGJvcmRlci1jb2xvcjogI2MzZTZjYjtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 5502:
/*!*********************************************************!*\
  !*** ./src/app/home/mood-entry/mood-entry.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodEntryComponent": () => (/* binding */ MoodEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_app_shared_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/messages */ 4613);
/* harmony import */ var _shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/sk/moods */ 7318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stimmungskalender.service */ 7648);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ 2684);
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/settings.service */ 452);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngneat/transloco */ 2426);
/* harmony import */ var _shared_pipes_mood_enum_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/mood-enum.pipe */ 2039);
/* harmony import */ var _shared_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/enum-to-array.pipe */ 7058);

















function MoodEntryComponent_mat_button_toggle_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MoodEntryComponent_mat_button_toggle_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-button-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "moodEnum");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "moodEnum");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, MoodEntryComponent_mat_button_toggle_12_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", +mood_r2 === +ctx_r1.selectedVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 11, mood_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", mood_r2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 7, ctx_r1.colorsEnabled) ? "btn-mood mood-" + mood_r2 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 15, mood_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 17, ctx_r1.isMobile$) && +mood_r2 === +ctx_r1.selectedVal);
  }
}

class MoodEntryComponent {
  constructor(skService, msgService, breakpointObserver, settingsService) {
    this.skService = skService;
    this.msgService = msgService;
    this.breakpointObserver = breakpointObserver;
    this.settingsService = settingsService;
    this.entry = {};
    this.form = '';
    this.moods = _shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_1__.Moods;
    this.selectedVal = '';
    this.buttonsDisabled = false;
    this.error = null;
    this.isMobile$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable();
    this.colorsEnabled = this.settingsService.colorsEnabled;
  }

  ngOnInit() {
    if (this.form === 'night') {
      this.selectedVal = String(this.entry.mood_night);
    } else if (this.form === 'day') {
      this.selectedVal = String(this.entry.mood_day);
    }

    this.checkMobile();
  }

  checkMobile() {
    this.isMobile$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Web, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.TabletPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.WebPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.TabletLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.WebLandscape]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(breakpoint => {
      if (breakpoint.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall] || breakpoint.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small]) {
        return true;
      } else {
        return false;
      }
    }));
  }

  getCoverCssClass() {
    return this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(breakpoint => {
      if (breakpoint.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall]) {
        return 'cover-xsmall';
      }

      if (breakpoint.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small]) {
        return 'cover-small';
      }

      if (breakpoint.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium]) {
        return 'cover-medium';
      }

      if (breakpoint.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large]) {
        return 'cover-large';
      }

      if (breakpoint.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge]) {
        return 'cover-xlarge';
      }

      return 'cover-small';
    }));
  }

  onButtonToggleClick(mood, day) {
    this.buttonsDisabled = true;

    if (mood === this.selectedVal) {
      this.selectedVal = '';
    } else {
      this.selectedVal = mood;
    }

    this.skService.saveEntry({
      mood: +mood,
      period: this.form,
      day: day
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(err => {
      this.error = {
        title: 'Got an error while setting mood',
        detail: err.message
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)({});
    })).subscribe(() => {
      this.buttonsDisabled = false;
      this.msgService.sendMessage(src_app_shared_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.RELOAD);
    });
  }

}

MoodEntryComponent.ɵfac = function MoodEntryComponent_Factory(t) {
  return new (t || MoodEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_2__.StimmungskalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService));
};

MoodEntryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MoodEntryComponent,
  selectors: [["app-mood-entry"]],
  inputs: {
    entry: "entry",
    form: "form"
  },
  decls: 14,
  vars: 19,
  consts: [["fxLayout", "column", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayout.lt-md", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "1rem", 1, "date-header"], [3, "vertical", "value", "click"], ["group", "matButtonToggleGroup"], ["fxFlex.lt-md", "", 3, "value", "active", "ngClass", "title", 4, "ngFor", "ngForOf"], ["fxFlex.lt-md", "", 3, "value", "ngClass", "title"], ["fxHide.lt-md", ""], [4, "ngIf"]],
  template: function MoodEntryComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-button-toggle-group", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MoodEntryComponent_Template_mat_button_toggle_group_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);

        return ctx.onButtonToggleClick(_r0.value, ctx.entry.day);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MoodEntryComponent_mat_button_toggle_12_Template, 10, 19, "mat-button-toggle", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "enumToArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 7, ctx.entry.day, "EEEE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 10, ctx.entry.day, "dd.LL."));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mobile", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 13, ctx.isMobile$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("vertical", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 15, ctx.isMobile$) === false)("value", ctx.selectedVal);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 17, ctx.moods));
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleGroup, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__.DefaultClassDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_17__.TranslocoPipe, _shared_pipes_mood_enum_pipe__WEBPACK_IMPORTED_MODULE_5__.MoodEnumPipe, _shared_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_6__.EnumToArrayPipe],
  styles: [".btn-mood[_ngcontent-%COMP%] {\n  opacity: 0.3 !important;\n  color: MintCream;\n  font-size: smaller;\n}\n\n.active[_ngcontent-%COMP%] {\n  opacity: 0.9 !important;\n  color: white;\n}\n\n.date-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mood-5[_ngcontent-%COMP%] {\n  background: #28a745 !important;\n  opacity: 70%;\n}\n\n.mood-4[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.7) !important;\n  opacity: 70%;\n}\n\n.mood-3[_ngcontent-%COMP%] {\n  background: #9db523 !important;\n  opacity: 70%;\n}\n\n.mood-2[_ngcontent-%COMP%] {\n  background: #ffc107 !important;\n  opacity: 70%;\n}\n\n.mood-1[_ngcontent-%COMP%] {\n  background: #dc3545 !important;\n  opacity: 70%;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2QtZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2Q0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJtb29kLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1tb29kIHtcbiAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBNaW50Q3JlYW07XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXRlLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9vZC01IHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMSkgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogNzAlO1xufVxuXG4ubW9vZC00IHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMC43KSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiA3MCU7XG59XG5cbi5tb29kLTMge1xuICBiYWNrZ3JvdW5kOiAjOWRiNTIzICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDcwJTtcbn1cblxuLm1vb2QtMiB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogNzAlO1xufVxuXG4ubW9vZC0xIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiA3MCU7XG59XG5cbi5tb2JpbGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/error-msg/error-msg.component */ 8697);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/transloco */ 2426);














function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-error-msg", 9)(2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("error", ctx_r0.error);
} }
function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The username and password were not recognized ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginValid = true;
        this.username = '';
        this.password = '';
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
        this.error = null;
    }
    onSubmit() {
        this.authService
            .login(this.username, this.password)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)((err) => {
            this.error = {
                title: 'Got an error logging in',
                detail: err.message,
            };
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
        }))
            .subscribe(() => {
            void this.router.navigate(['/home']);
        });
        this.user = this.authService.currentUser;
    }
    onLogout() {
        this.authService.logout();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 14, consts: [["fxLayout", "column", "fxFlexAlign", "stretch", "fxLayoutAlign", "center center"], ["fxFlex", "", 4, "ngIf"], [3, "ngSubmit"], ["loginForm", "ngForm"], [4, "ngIf"], ["matInput", "", "name", "username", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "password", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "mat-button", "", 3, "disabled"], ["fxFlex", ""], [3, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card")(5, "mat-card-header")(6, "mat-card-title")(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Stimmungskalender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field")(12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Please provide a valid username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field")(17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Please provide a valid password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-card-actions")(22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loginValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, "Username"))("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 10, "Password"))("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r1.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 12, "Log in"), " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _shared_error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_1__.ErrorMsgComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__.TranslocoPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bottom-bar/bottom-bar.component */ 5470);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/transloco */ 2426);













const _c0 = function () {
  return ["/graph"];
};

function NavbarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 3)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "bar_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, "graph"), " ");
  }
}

const _c1 = function () {
  return ["/search"];
};

function NavbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 3)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, "search"), " ");
  }
}

const _c2 = function () {
  return ["/settings"];
};

function NavbarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 3)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, "settings"), " ");
  }
}

function NavbarComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r4.onLogout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, "logout"), " ");
  }
}

const _c3 = function () {
  return ["/home"];
};

class NavbarComponent {
  constructor(authService) {
    this.authService = authService;
    this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
    this.loggedIn = this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout();
  }

}

NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};

NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 20,
  vars: 14,
  consts: [[1, "app-main", "dark-theme", "mat-app-background"], ["color", "primary", 1, "toolbar"], ["fxFlex.gt-md", "", "fxLayout", "row"], ["mat-button", "", 3, "routerLink"], ["fxHide.lt-md", ""], ["mat-button", "", 3, "routerLink", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "column", 1, "app-content"], ["fxFlex", ""], ["mat-button", "", 3, "click"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "div", 2)(3, "button", 3)(4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Stimmungskalender ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavbarComponent_button_8_Template, 6, 5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NavbarComponent_button_10_Template, 6, 5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NavbarComponent_button_12_Template, 6, 5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NavbarComponent_button_14_Template, 6, 3, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "router-outlet")(18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-bottom-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, ctx.loggedIn));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, ctx.loggedIn));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 9, ctx.loggedIn));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 11, ctx.loggedIn));
    }
  },
  directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_1__.BottomBarComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoPipe],
  styles: ["@media only screen and (min-width: 1280px) {\n  .app-content[_ngcontent-%COMP%] {\n    padding: 1px 10% 1rem 10%;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    padding: 0 10% 0 10%;\n  }\n}\n.app-main[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.app-content[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBRUUseUJBQUE7RUFBRjs7RUFHQTtJQUNFLG9CQUFBO0VBQUY7QUFDRjtBQUVBO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gIC5hcHAtY29udGVudCB7XG4gICAgLy8gdG9wIHwgcmlnaHQgfCBib3R0b20gfCBsZWZ0XG4gICAgcGFkZGluZzogMXB4IDEwJSAxcmVtIDEwJTtcbiAgfVxuXG4gIC50b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwIDEwJSAwIDEwJTtcbiAgfVxufVxuLmFwcC1tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG4iXX0= */"]
});

/***/ }),

/***/ 7150:
/*!******************************************************!*\
  !*** ./src/app/note-dialog/note-dialog.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteDialogComponent": () => (/* binding */ NoteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/stimmungskalender.service */ 7648);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 2426);










class NoteDialogComponent {
    constructor(skService, dialogRef, data) {
        this.skService = skService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.note = data.note;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    saveNote() {
        this.dialogRef.close();
        this.skService
            .saveNote({
            week_date: this.data.week_date,
            note: this.note,
        })
            .subscribe({
            complete: () => void 0,
            error: () => void 0,
            next: () => void 0, // nextHandler
        });
    }
}
NoteDialogComponent.ɵfac = function NoteDialogComponent_Factory(t) { return new (t || NoteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_0__.StimmungskalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
NoteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoteDialogComponent, selectors: [["app-note-dialog"]], decls: 14, vars: 13, consts: [["mat-dialog-content", ""], ["appearance", "fill", "fxFlex", ""], ["rows", "10", "matInput", "", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", 3, "click"]], template: function NoteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NoteDialogComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteDialogComponent_Template_button_click_8_listener() { return ctx.saveNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteDialogComponent_Template_button_click_11_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "transloco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, "what_happened_this_week"))("ngModel", ctx.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, "save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, "Close"), " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6392:
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/model/sk/moods */ 7318);
/* harmony import */ var _shared_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/pagination */ 9877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stimmungskalender.service */ 7648);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngneat/transloco */ 2426);
/* harmony import */ var _shared_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/enum-to-array.pipe */ 7058);
/* harmony import */ var _shared_pipes_mood_enum_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/pipes/mood-enum.pipe */ 2039);
/* harmony import */ var _shared_pipes_week_number_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pipes/week-number.pipe */ 1863);
/* harmony import */ var _shared_pipes_str_to_week_end_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pipes/str-to-week-end-date.pipe */ 542);


























function SearchComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function SearchComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function SearchComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "moodEnum");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", +mood_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, mood_r5)), " ");
  }
}

const _c0 = function () {
  return ["/home"];
};

const _c1 = function (a0) {
  return {
    start_day: a0
  };
};

function SearchComponent_div_33_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "weekNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "strToWeekEndDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "strToWeekEndDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-card-content")(12, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-card-actions")(15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const week_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, "week"), " #", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 10, week_r8.week_date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 15, week_r8.week_date), "shortDate"), " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 17, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 20, week_r8.week_date), "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](week_r8.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](24, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](25, _c1, week_r8.week_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 22, "jump_to_week"), " ");
  }
}

function SearchComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchComponent_div_33_mat_card_1_Template, 18, 27, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function SearchComponent_div_33_Template_mat_paginator_page_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r9.getPaginatorData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const weeks_r6 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 3, weeks_r6, ctx_r4.paginationFrom, ctx_r4.paginationTo));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", weeks_r6.length)("pageSizeOptions", ctx_r4.pageSizeOptions);
  }
}

class SearchComponent {
  constructor(skService, router, route) {
    this.skService = skService;
    this.router = router;
    this.route = route;
    this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
    });
    this.weeks$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable();
    this.selectedMood = 0;
    this.moods = _shared_model_sk_moods__WEBPACK_IMPORTED_MODULE_0__.Moods;
    this.pageSizeOptions = _shared_pagination__WEBPACK_IMPORTED_MODULE_1__.PAGE_SIZE_OPTIONS;
    this.paginationFrom = 0;
    this.paginationTo = _shared_pagination__WEBPACK_IMPORTED_MODULE_1__.PAGINATION_TO;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      const start = queryParams.get('start_day') || '';
      const end = queryParams.get('end_day') || '';
      const mood = +(queryParams.get('mood') || 0);
      const searchTerm = queryParams.get('term') || '';
      const sf = {
        start: start,
        end: end,
        mood: mood,
        searchTerm: searchTerm
      };
      this.weeks$ = this.skService.search(sf);
    });
    this.range.valueChanges.subscribe(event => {
      if (event.start) {
        void this.router.navigate(['search'], {
          queryParams: {
            start_day: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(event.start, 'yyyy-MM-dd')
          },
          queryParamsHandling: 'merge'
        });
      }

      if (event.end) {
        void this.router.navigate(['search'], {
          queryParams: {
            end_day: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(event.end, 'yyyy-MM-dd')
          },
          queryParamsHandling: 'merge'
        });
      }
    });
  }

  onSelectionChange(mood) {
    void this.router.navigate(['search'], {
      queryParams: {
        mood: mood
      },
      queryParamsHandling: 'merge'
    });
  }

  getPaginatorData(event) {
    this.paginationFrom = event.pageIndex * event.pageSize;
    this.paginationTo = this.paginationFrom + event.pageSize;
    return event;
  }

}

SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_stimmungskalender_service__WEBPACK_IMPORTED_MODULE_2__.StimmungskalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
};

SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  decls: 35,
  vars: 24,
  consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["appearance", "outline"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", ""], [1, "spaced-divider"], ["fxLayout", "column", "fxLayoutGap", "2.5rem", 4, "ngIf"], [3, "value"], ["fxLayout", "column", "fxLayoutGap", "2.5rem"], [4, "ngFor", "ngForOf"], ["showFirstLastButtons", "true", 3, "length", "pageSizeOptions", "page"], ["mat-stroked-button", "", 3, "routerLink", "queryParams"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card")(5, "mat-card-content", 0)(6, "mat-form-field", 1)(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-date-range-input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 3)(12, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "mat-datepicker-toggle", 5)(14, "mat-date-range-picker", null, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SearchComponent_mat_error_16_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SearchComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field", 8)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function SearchComponent_Template_mat_select_valueChange_22_listener($event) {
        return ctx.selectedMood = $event;
      })("selectionChange", function SearchComponent_Template_mat_select_selectionChange_22_listener($event) {
        return ctx.onSelectionChange($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\u2014");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, SearchComponent_mat_option_25_Template, 4, 6, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "enumToArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-form-field", 1)(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "mat-divider", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, SearchComponent_div_33_Template, 4, 7, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "async");
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 12, "search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 14, "Date:"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.range.controls["start"].hasError("matStartDateInvalid"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.range.controls["end"].hasError("matEndDateInvalid"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 16, "mood"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.selectedMood);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 18, ctx.moods));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 20, "search_term"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 22, ctx.weeks$));
    }
  },
  directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDateRangeInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginator],
  pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_23__.TranslocoPipe, _shared_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_3__.EnumToArrayPipe, _shared_pipes_mood_enum_pipe__WEBPACK_IMPORTED_MODULE_4__.MoodEnumPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe, _shared_pipes_week_number_pipe__WEBPACK_IMPORTED_MODULE_5__.WeekNumberPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, _shared_pipes_str_to_week_end_date_pipe__WEBPACK_IMPORTED_MODULE_6__.StrToWeekEndDatePipe],
  styles: [".spaced-divider[_ngcontent-%COMP%] {\n  \n  padding: 1rem 0 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VkLWRpdmlkZXIge1xuICAvKiB0b3AgfCByaWdodCB8IGJvdHRvbSB8IGxlZnQgKi9cbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9509:
/*!*********************************************!*\
  !*** ./src/app/search/sk-paginator-intl.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkPaginatorIntl": () => (/* binding */ SkPaginatorIntl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ 2426);



class SkPaginatorIntl {
    constructor(translocoService) {
        this.translocoService = translocoService;
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.firstPageLabel = this.translocoService.translate('first_page');
        this.itemsPerPageLabel = this.translocoService.translate('items_per_page');
        this.lastPageLabel = this.translocoService.translate('last_page');
        this.nextPageLabel = this.translocoService.translate('next_page');
        this.previousPageLabel = this.translocoService.translate('page');
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0) {
            return `${this.translocoService.translate('page')} 1 / 1`;
        }
        const amountPages = Math.ceil(length / pageSize);
        return `${this.translocoService.translate('page')} ${page + 1} / ${amountPages}`;
    }
}
SkPaginatorIntl.ɵfac = function SkPaginatorIntl_Factory(t) { return new (t || SkPaginatorIntl)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoService)); };
SkPaginatorIntl.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SkPaginatorIntl, factory: SkPaginatorIntl.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "LS_USER": () => (/* binding */ LS_USER)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 6317);
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ 833);
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api-urls */ 6296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);







const LS_USER = 'NG_SK_USER';
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.currentUser = new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        const currentUser = localStorage.getItem(LS_USER) || '';
        try {
            this.currentUserSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(JSON.parse(currentUser));
        }
        catch (err) {
            this.currentUserSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        }
        this.currentUser = this.currentUserSubject.asObservable();
    }
    login(username, password) {
        return this.http
            .post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.LOGIN_URL, {
            username,
            password,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            const currentUser = response.user;
            currentUser.token = response.access_token;
            localStorage.setItem(LS_USER, JSON.stringify(currentUser));
            this.currentUserSubject.next(currentUser);
            return currentUser;
        }));
    }
    isLoggedIn() {
        return this.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((user) => JSON.stringify(user) !== '{}'));
    }
    _isLoggedIn() {
        return this.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((user) => {
            if (user.token) {
                return this.http
                    .post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.VERIFY_URL, {
                    token: user.token,
                })
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => true), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false)));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false);
            }
        }));
    }
    logout() {
        this.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1)).subscribe((user) => {
            this.http
                .post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_URL, { token: user.token })
                .subscribe(() => void 0);
        });
        this.currentUserSubject.next({});
        localStorage.removeItem(LS_USER);
        void this.router.navigate(['/login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2684:
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MessageService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    sendMessage(message) {
        this.subject.next(message);
    }
    getMessages() {
        return this.subject.asObservable();
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 452:
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


const LS_KEY_COLORS_ENABLED = 'colorsEnabled';
class SettingsService {
    constructor() {
        this.colorsEnabled$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.colorsEnabled = this.colorsEnabled$.asObservable();
        this.colorsEnabled$.next(this.loadColorsEnabled());
    }
    setColorsEnabled(enabled) {
        localStorage.setItem(LS_KEY_COLORS_ENABLED, enabled.toString());
        this.colorsEnabled$.next(enabled);
    }
    loadColorsEnabled() {
        return Boolean(localStorage.getItem(LS_KEY_COLORS_ENABLED));
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7648:
/*!*******************************************************!*\
  !*** ./src/app/services/stimmungskalender.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StimmungskalenderService": () => (/* binding */ StimmungskalenderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/api-urls */ 6296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);







class StimmungskalenderService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    getMoodTable(week = '') {
        week = week.trim();
        const options = week
            ? { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('start_day', week) }
            : {};
        return this.authService.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
            return this.http.get(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.MOOD_TABLE_URL, options);
        }));
    }
    getStandoutData() {
        return this.http
            .get(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.STANDOUT_DATA_URL)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.filter((entry) => entry.entry !== null)));
    }
    getScatterGraph() {
        return this.http.get(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.SCATTER_GRAPH_URL);
    }
    getPieChartGraph(period) {
        return this.http.get(`${_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.PIE_CHART_GRAPH_URL}?period=${period}`);
    }
    saveEntry(entry) {
        return this.http.post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.ENTRY_DATE_URL, entry);
    }
    saveNote(note) {
        return this.http.post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.SAVE_NOTE_URL, note);
    }
    search(searchForm) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.set('start_day', searchForm.start);
        params = params.set('end_day', searchForm.end);
        params = params.set('mood', searchForm.mood);
        params = params.set('search_term', searchForm.searchTerm);
        return this.authService.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
            return this.http.get(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.SEARCH_URL, {
                params: params,
            });
        }));
    }
}
StimmungskalenderService.ɵfac = function StimmungskalenderService_Factory(t) { return new (t || StimmungskalenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
StimmungskalenderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: StimmungskalenderService, factory: StimmungskalenderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/api-urls */ 6296);
/* harmony import */ var _shared_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/language */ 5352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ 2426);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings.service */ 452);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);















function SettingsComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const language_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", language_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", language_r1, " ");
  }
}

class SettingsComponent {
  constructor(http, translocoService, snackBar, settingsService) {
    this.http = http;
    this.translocoService = translocoService;
    this.snackBar = snackBar;
    this.settingsService = settingsService;
    this.languages = _shared_language__WEBPACK_IMPORTED_MODULE_1__.AVAILABLE_LANGUAGES;
    this.selectedLanguage = translocoService.getActiveLang();
    this.colorsEnabled = this.settingsService.colorsEnabled;
  }

  onLanguageSelectionChange(language) {
    this.http.post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_0__.SET_LANGUAGE_URL, {
      language: language
    }).subscribe(() => this.snackBar.open('Settings saved', 'Close', {
      duration: 3 * 1000
    }));
    this.translocoService.setActiveLang(language);
  }

  onColorsEnabledChange(enabled) {
    this.settingsService.setColorsEnabled(enabled);
  }

}

SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
};

SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  decls: 23,
  vars: 17,
  consts: [["fxLayout", "column", "fxLayoutGap", "2.5rem"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "space-right", 3, "checked", "change"], [3, "value"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0)(4, "mat-card")(5, "mat-card-header")(6, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card-content")(10, "mat-select", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function SettingsComponent_Template_mat_select_valueChange_10_listener($event) {
        return ctx.selectedLanguage = $event;
      })("selectionChange", function SettingsComponent_Template_mat_select_selectionChange_10_listener($event) {
        return ctx.onLanguageSelectionChange($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SettingsComponent_mat_option_11_Template, 2, 2, "mat-option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-card")(13, "mat-card-header")(14, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-card-content")(18, "mat-slide-toggle", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SettingsComponent_Template_mat_slide_toggle_change_18_listener($event) {
        return ctx.onColorsEnabledChange($event.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "transloco");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 7, "settings"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 9, "language"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.selectedLanguage);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.languages);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 11, "colors_enabled"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 13, ctx.colorsEnabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 15, "colors_enabled_label"));
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint],
  pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 6296:
/*!************************************!*\
  !*** ./src/app/shared/api-urls.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTRY_DATE_URL": () => (/* binding */ ENTRY_DATE_URL),
/* harmony export */   "JSON_CATALOG_URL": () => (/* binding */ JSON_CATALOG_URL),
/* harmony export */   "LOGIN_URL": () => (/* binding */ LOGIN_URL),
/* harmony export */   "LOGOUT_URL": () => (/* binding */ LOGOUT_URL),
/* harmony export */   "MOOD_TABLE_URL": () => (/* binding */ MOOD_TABLE_URL),
/* harmony export */   "PIE_CHART_GRAPH_URL": () => (/* binding */ PIE_CHART_GRAPH_URL),
/* harmony export */   "SAVE_NOTE_URL": () => (/* binding */ SAVE_NOTE_URL),
/* harmony export */   "SCATTER_GRAPH_URL": () => (/* binding */ SCATTER_GRAPH_URL),
/* harmony export */   "SEARCH_URL": () => (/* binding */ SEARCH_URL),
/* harmony export */   "SET_LANGUAGE_URL": () => (/* binding */ SET_LANGUAGE_URL),
/* harmony export */   "STANDOUT_DATA_URL": () => (/* binding */ STANDOUT_DATA_URL),
/* harmony export */   "VERIFY_URL": () => (/* binding */ VERIFY_URL)
/* harmony export */ });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment.prod */ 9019);

const LOGIN_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/dj-rest-auth/login/`;
const VERIFY_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/dj-rest-auth/token/verify/`;
const LOGOUT_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/dj-rest-auth/logout/`;
const ENTRY_DATE_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/entry-day/`;
const SAVE_NOTE_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/save-note/`;
const MOOD_TABLE_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/mood-table/`;
const STANDOUT_DATA_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/standout-data/`;
const SCATTER_GRAPH_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/scatter-graph/`;
const PIE_CHART_GRAPH_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/pie-chart-graph/`;
const SEARCH_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/search/`;
const JSON_CATALOG_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/jsoni18n/`;
const SET_LANGUAGE_URL = `${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.backendApiUrl}/api/set-language/`;


/***/ }),

/***/ 8697:
/*!*********************************************************!*\
  !*** ./src/app/shared/error-msg/error-msg.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMsgComponent": () => (/* binding */ ErrorMsgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);



function ErrorMsgComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content")(4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error.detail, " ");
} }
class ErrorMsgComponent {
    constructor() {
        this.error = null;
    }
}
ErrorMsgComponent.ɵfac = function ErrorMsgComponent_Factory(t) { return new (t || ErrorMsgComponent)(); };
ErrorMsgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorMsgComponent, selectors: [["app-error-msg"]], inputs: { error: "error" }, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ErrorMsgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorMsgComponent_mat_card_0_Template, 6, 2, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1tc2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4093:
/*!*********************************!*\
  !*** ./src/app/shared/forms.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forms": () => (/* binding */ Forms)
/* harmony export */ });
var Forms;
(function (Forms) {
    Forms["NIGHT"] = "night";
    Forms["DAY"] = "day";
})(Forms || (Forms = {}));


/***/ }),

/***/ 5352:
/*!************************************!*\
  !*** ./src/app/shared/language.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AVAILABLE_LANGUAGES": () => (/* binding */ AVAILABLE_LANGUAGES)
/* harmony export */ });
const AVAILABLE_LANGUAGES = ['en-gb', 'de-de'];


/***/ }),

/***/ 8710:
/*!**************************************************************!*\
  !*** ./src/app/shared/material-meta/material-meta.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialMetaModule": () => (/* binding */ MaterialMetaModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

















class MaterialMetaModule {
}
MaterialMetaModule.ɵfac = function MaterialMetaModule_Factory(t) { return new (t || MaterialMetaModule)(); };
MaterialMetaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialMetaModule });
MaterialMetaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialMetaModule, { exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule] }); })();


/***/ }),

/***/ 4613:
/*!************************************!*\
  !*** ./src/app/shared/messages.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Messages": () => (/* binding */ Messages)
/* harmony export */ });
var Messages;
(function (Messages) {
    Messages["RELOAD"] = "reload";
})(Messages || (Messages = {}));


/***/ }),

/***/ 7318:
/*!******************************************!*\
  !*** ./src/app/shared/model/sk/moods.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Moods": () => (/* binding */ Moods)
/* harmony export */ });
var Moods;
(function (Moods) {
    Moods[Moods["VERY_BAD"] = 1] = "VERY_BAD";
    Moods[Moods["BAD"] = 2] = "BAD";
    Moods[Moods["MEDIUM"] = 3] = "MEDIUM";
    Moods[Moods["GOOD"] = 4] = "GOOD";
    Moods[Moods["VERY_GOOD"] = 5] = "VERY_GOOD";
})(Moods || (Moods = {}));


/***/ }),

/***/ 9877:
/*!**************************************!*\
  !*** ./src/app/shared/pagination.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGE_SIZE_OPTIONS": () => (/* binding */ PAGE_SIZE_OPTIONS),
/* harmony export */   "PAGINATION_TO": () => (/* binding */ PAGINATION_TO)
/* harmony export */ });
const PAGE_SIZE_OPTIONS = [4, 10, 20, 50];
const PAGINATION_TO = 4;


/***/ }),

/***/ 7889:
/*!***********************************!*\
  !*** ./src/app/shared/periods.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Periods": () => (/* binding */ Periods)
/* harmony export */ });
var Periods;
(function (Periods) {
    Periods["NIGHT"] = "mood_night";
    Periods["DAY"] = "mood_day";
})(Periods || (Periods = {}));


/***/ }),

/***/ 7058:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/enum-to-array.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumToArrayPipe": () => (/* binding */ EnumToArrayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EnumToArrayPipe {
    // eslint-disable-next-line @typescript-eslint/ban-types
    transform(data) {
        const keys = Object.keys(data);
        return keys.slice(0, keys.length / 2).reverse();
    }
}
EnumToArrayPipe.ɵfac = function EnumToArrayPipe_Factory(t) { return new (t || EnumToArrayPipe)(); };
EnumToArrayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "enumToArray", type: EnumToArrayPipe, pure: true });


/***/ }),

/***/ 1472:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/enum-value.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumValuePipe": () => (/* binding */ EnumValuePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EnumValuePipe {
    // eslint-disable-next-line @typescript-eslint/ban-types
    transform(forms) {
        return Object.values(forms).map((v) => String(v));
    }
}
EnumValuePipe.ɵfac = function EnumValuePipe_Factory(t) { return new (t || EnumValuePipe)(); };
EnumValuePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "enumValue", type: EnumValuePipe, pure: true });


/***/ }),

/***/ 2039:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/mood-enum.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodEnumPipe": () => (/* binding */ MoodEnumPipe)
/* harmony export */ });
/* harmony import */ var _model_sk_moods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/sk/moods */ 7318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MoodEnumPipe {
    transform(key) {
        return _model_sk_moods__WEBPACK_IMPORTED_MODULE_0__.Moods[+key].toLowerCase();
    }
}
MoodEnumPipe.ɵfac = function MoodEnumPipe_Factory(t) { return new (t || MoodEnumPipe)(); };
MoodEnumPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "moodEnum", type: MoodEnumPipe, pure: true });


/***/ }),

/***/ 502:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/repeat-char.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatCharPipe": () => (/* binding */ RepeatCharPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class RepeatCharPipe {
    transform(value, count) {
        return value.repeat(count);
    }
}
RepeatCharPipe.ɵfac = function RepeatCharPipe_Factory(t) { return new (t || RepeatCharPipe)(); };
RepeatCharPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "repeatChar", type: RepeatCharPipe, pure: true });


/***/ }),

/***/ 1065:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/str-to-date.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrToDatePipe": () => (/* binding */ StrToDatePipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 4876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class StrToDatePipe {
    transform(value) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(value, 'yyyy-MM-dd', new Date());
    }
}
StrToDatePipe.ɵfac = function StrToDatePipe_Factory(t) { return new (t || StrToDatePipe)(); };
StrToDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "strToDate", type: StrToDatePipe, pure: true });


/***/ }),

/***/ 542:
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/str-to-week-end-date.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrToWeekEndDatePipe": () => (/* binding */ StrToWeekEndDatePipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 8856);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 4876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);


class StrToWeekEndDatePipe {
    transform(value) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(value, 'yyyy-MM-dd', new Date()), 1);
    }
}
StrToWeekEndDatePipe.ɵfac = function StrToWeekEndDatePipe_Factory(t) { return new (t || StrToWeekEndDatePipe)(); };
StrToWeekEndDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "strToWeekEndDate", type: StrToWeekEndDatePipe, pure: true });


/***/ }),

/***/ 1863:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/week-number.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekNumberPipe": () => (/* binding */ WeekNumberPipe)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 4876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);


class WeekNumberPipe {
    /**
     *
     * @param value Date in yyyy-MM-dd format
     * @returns The week number of value
     */
    transform(value) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(value, 'yyyy-MM-dd', new Date()), 'I');
    }
}
WeekNumberPipe.ɵfac = function WeekNumberPipe_Factory(t) { return new (t || WeekNumberPipe)(); };
WeekNumberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "weekNumber", type: WeekNumberPipe, pure: true });


/***/ }),

/***/ 4922:
/*!****************************************!*\
  !*** ./src/app/shared/query-params.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QP_START_DAY": () => (/* binding */ QP_START_DAY)
/* harmony export */ });
const QP_START_DAY = 'start_day';


/***/ }),

/***/ 7486:
/*!*******************************************!*\
  !*** ./src/app/shared/sk-date-adapter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkDateAdapter": () => (/* binding */ SkDateAdapter)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 8133);

class SkDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter {
    getFirstDayOfWeek() {
        return 1;
    }
}


/***/ }),

/***/ 7460:
/*!******************************************!*\
  !*** ./src/app/transloco-root.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslocoHttpLoader": () => (/* binding */ TranslocoHttpLoader),
/* harmony export */   "TranslocoRootModule": () => (/* binding */ TranslocoRootModule)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ 2426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.prod */ 9019);
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/api-urls */ 6296);
/* harmony import */ var _shared_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/language */ 5352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);







class TranslocoHttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        const url = `${_shared_api_urls__WEBPACK_IMPORTED_MODULE_1__.JSON_CATALOG_URL}?lang=${lang}`;
        return this.http
            .get(url)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((data) => data['catalog']));
    }
}
TranslocoHttpLoader.ɵfac = function TranslocoHttpLoader_Factory(t) { return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
TranslocoHttpLoader.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TranslocoHttpLoader, factory: TranslocoHttpLoader.ɵfac, providedIn: 'root' });
class TranslocoRootModule {
}
TranslocoRootModule.ɵfac = function TranslocoRootModule_Factory(t) { return new (t || TranslocoRootModule)(); };
TranslocoRootModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TranslocoRootModule });
TranslocoRootModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TRANSLOCO_CONFIG,
            useValue: (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.translocoConfig)({
                availableLangs: _shared_language__WEBPACK_IMPORTED_MODULE_2__.AVAILABLE_LANGUAGES,
                defaultLang: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLanguage,
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.production,
            }),
        },
        { provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    ], imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TranslocoRootModule, { exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule] }); })();


/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    backendApiUrl: 'http://punica:8000',
    defaultLanguage: 'de-de', // See AVAILABLE_LANGUAGES in ./shared/language
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // backendApiUrl: 'http://Hephaistos:8000', // withouth trailing slash
    backendApiUrl: 'http://punica:8000',
    defaultLanguage: 'de-de', // See AVAILABLE_LANGUAGES in ./shared/language
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map