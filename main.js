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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: #303030;\r\n    width: 90vw;\r\n    height: 10vh;\r\n    text-align: center;\r\n    color: white;\r\n    font-style: italic;\r\n    \r\n}\r\n\r\n.container1{\r\n    margin-left: 5%;\r\n    color: black;\r\n    width: 90%;\r\n}\r\n\r\n.container2{\r\n    margin-top: 6%;\r\n    margin-left: 5%;\r\n    background-color: #303030;\r\n    width: 90vw;\r\n    height: 10vh;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<h3>Game of thrones</h3>\n  \n  </div>\n  \n  <div class=\"container1\">\n    \n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/create']\">Create</a>\n        </li>\n        \n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Disabled</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  </div>\n  <router-outlet></router-outlet>\n  <div class=\"container2\">\n&copy;aniket h\n  </div>\n  \n  \n  "

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./got-service.service */ "./src/app/got-service.service.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
/* harmony import */ var _character_details_character_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./character-details/character-details.component */ "./src/app/character-details/character-details.component.ts");
/* harmony import */ var _houses_houses_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./houses/houses.component */ "./src/app/houses/houses.component.ts");
/* harmony import */ var _housedetails_housedetails_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./housedetails/housedetails.component */ "./src/app/housedetails/housedetails.component.ts");
/* harmony import */ var _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post-comment/post-comment.component */ "./src/app/post-comment/post-comment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_15__["BooksComponent"],
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_16__["BookDetailsComponent"],
                _characters_characters_component__WEBPACK_IMPORTED_MODULE_17__["CharactersComponent"],
                _character_details_character_details_component__WEBPACK_IMPORTED_MODULE_18__["CharacterDetailsComponent"],
                _houses_houses_component__WEBPACK_IMPORTED_MODULE_19__["HousesComponent"],
                _housedetails_housedetails_component__WEBPACK_IMPORTED_MODULE_20__["HousedetailsComponent"],
                _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_21__["PostCommentComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
                    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_15__["BooksComponent"] },
                    { path: 'characters', component: _characters_characters_component__WEBPACK_IMPORTED_MODULE_17__["CharactersComponent"] },
                    { path: 'houses', component: _houses_houses_component__WEBPACK_IMPORTED_MODULE_19__["HousesComponent"] },
                    { path: 'comment', component: _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_21__["PostCommentComponent"] },
                    { path: 'housedetails/:val', component: _housedetails_housedetails_component__WEBPACK_IMPORTED_MODULE_20__["HousedetailsComponent"] },
                    { path: 'bookdeatils/:val', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_16__["BookDetailsComponent"] },
                    { path: 'Characterdeatils/:val', component: _character_details_character_details_component__WEBPACK_IMPORTED_MODULE_18__["CharacterDetailsComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            providers: [_got_service_service__WEBPACK_IMPORTED_MODULE_14__["GotServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-details/book-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/book-details/book-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.margin{\r\n    margin-top: 5%;\r\n}\r\n\r\n.margin11{\r\n    margin-left: 6%;\r\n}"

/***/ }),

/***/ "./src/app/book-details/book-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-details/book-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentblogvalue\">\n    <mat-progress-bar *ngIf !=currentblogvalue mode=\"indeterminate\"></mat-progress-bar> \n    \n  <!--<div class=\"row margin\">\n    <div class=\"col-6\">\n      book-details works! \n\n    </div>\n    <div class=\"col-6\">\n      {{currentblogvalue.name}}\n\n    </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-6\">\n        book-details works! \n  \n      </div>\n      \n      <div class=\"col-6\">\n        {{currentblogvalue.isbn}}\n  \n      </div>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          book-details works! \n    \n        </div>\n\n        <div class=\"col-6\">\n          {{currentblogvalue.numberOfPages}}\n    \n        </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      book-details works! \n\n    </div>\n\n    <div class=\"col-6\">\n      {{currentblogvalue.authors}}\n\n    </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    Publishers \n\n  </div>\n\n  <div class=\"col-6\">\n    {{currentblogvalue.publisher}}\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    country \n\n  </div>\n\n  <div class=\"col-6\">\n    {{currentblogvalue.country}}\n\n  </div>\n\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    Released \n\n  </div>\n\n  <div class=\"col-6\">\n    {{currentblogvalue.released}}\n\n  </div>\n\n</div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      \n        characters<br/>\n     \n\n    </div>\n\n    <div class=\"col-6\">\n      <p *ngFor=\"let characters of currentcharacter\">\n        {{characters}}<br/>\n      </p>\n\n    </div>\n\n\n</div>-->\n\n<table class=\"table table-striped\">\n   \n    <tbody>\n      <tr>\n        \n        <td>Name Of  Book </td>\n        <td><div class=\"margin11\">{{currentblogvalue.name}}\n          </div></td>\n       \n      </tr>\n      <tr>\n        \n        <td>Isbn</td>\n        <td><div class=\"margin11\">{{currentblogvalue.isbn}}\n          </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>numberOfPages</td>\n          <td><div class=\"margin11\">{{currentblogvalue.numberOfPages}}\n            </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>authors</td>\n          <td><div class=\"margin11\">{{currentblogvalue.authors}}\n            </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>publisher</td>\n          <td><div class=\"margin11\">{{currentblogvalue.publisher}}\n            </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>country</td>\n          <td><div class=\"margin11\">{{currentblogvalue.country}}\n            </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>released</td>\n          <td><div class=\"margin11\">{{currentblogvalue.released}}\n            </div></td>\n        \n      </tr>\n\n      <tr>\n        \n          <td>characters</td>\n          <td><div class=\"margin11\" *ngFor=\"let characters of characterName\">\n             <b>Name:-</b> {{characters.name}} \n              <br/>\n              know more about {{characters.name}} go to url ({{characters.url}})\n              <br/>\n            \n            </div></td>\n        \n      </tr>\n\n      \n\n      <tr>\n        \n          <td></td>\n          <td>\n            <div class=\"margin11\">\n              <a class=\"btn btn-success\" (click)=\"goBack()\">Go Back</a>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <a class=\"btn btn-primary\" [routerLink]=\"['/comment']\">PostComment</a>\n            </div></td>\n        \n      </tr>\n    </tbody>\n    \n  </table>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/book-details/book-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-details/book-details.component.ts ***!
  \********************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(activerouter, router, gotservice, location) {
        this.activerouter = activerouter;
        this.router = router;
        this.gotservice = gotservice;
        this.location = location;
        this.characterName = [];
        this.currentcharacter = [];
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var val = this.activerouter.snapshot.paramMap.get('val');
        console.log("values are:-" + val);
        this.gotservice.getBooksDetails(val).subscribe(function (data) {
            //console.log("inside the data of the init");
            _this.currentblogvalue = data;
            var _loop_1 = function (i) {
                _this.currentcharacter[i] = data["characters"][i];
                //another code ----------------------
                _this.gotservice.getCharactersDetails(_this.currentcharacter[i]).subscribe(function (data) {
                    _this.characterName[i] = data;
                    console.log("character name:" + _this.characterName[i].name);
                }, function (error) {
                    console.log("error from the init eror");
                    //console.log(error.errorMessage);
                });
                //end of it ---------------------------------
            };
            //this.currentblogvalue[1]=data["isbn"];
            //this.currentblogvalue[2]=data["numberOfPages"];
            //this.currentblogvalue[3]=data["publisher"];
            //this.currentblogvalue[4]=data["country"];
            //this.currentblogvalue[5]=data["released"];
            for (var i = 0; i < 10; i++) {
                _loop_1(i);
            }
            //for(let i=0;i<this.currentblogvalue.length;i++)
            console.log("inside the data of the init" + _this.currentblogvalue.name);
        }, function (error) {
            console.log("error from the init eror");
            //console.log(error.errorMessage);
        });
    };
    BookDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/book-details/book-details.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _got_service_service__WEBPACK_IMPORTED_MODULE_2__["GotServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.margin{\r\n    margin-left: 30%;\r\n    margin-top: 5%;\r\n    background: #ff3333;\r\n}\r\n\r\n.shad{\r\n    box-shadow: 0 0 10px 10px rgba(0, 140, 186, 0.5);\r\n}\r\n\r\n.example-button {\r\n    margin-top: 16px;\r\n  }\r\n\r\n.example-tooltip-red {\r\n    background: #b71c1c;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf = \"display;else other_content\">\n \n  <div class=\"form-group\">\n      <br/>\n      <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"  name= \"searchval\" [(ngModel)]=\"searchval\"\n    placeholder=\"Enter the specific book name\"\n    matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"\n    >\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n    <br/>\n    <button (click)=\"search(val)\" class=\"btn btn-success\">Search</button>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <button (click)=\"sortBy(val)\" class=\"btn btn-primary\">Sort By Name</button>\n  </div>\n<br/>\n\n\n\n  <div class=\"row\">\n      \n<div \nmatTooltip=\"Click to see details\"\nmatTooltipClass=\"example-tooltip-red\"\naria-label=\"Button that shows a red tooltip\"\nmatTooltipPosition=\"above\"\nclass=\"example-button \"\nclass=\"card text-black mb-3 margin\" id=\"val\" style=\"max-width: 28rem; background:'#ff3333';cursor: pointer;box-shadow: 0 0 5px 5px rgba(0, 140, 186, 0.5)\" *ngFor=\"let val of allValues\" \nonmouseover=\"this.style.background='white'\"\nonmouseout=\"this.style.background='#ff3333'\"\n[routerLink]=\"['/bookdeatils',val.url]\"\n>\n  <div class=\"card-header\"> Book Name:-{{val.name}}</div>\n  <div class=\"card-body\" >\n    <h5 class=\"card-title\">Author by :{{val.authors}}</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n  </div>\n  \n</div>\n</div>\n</div>\n\n<ng-template #other_content>\n\n\n\n    <div class=\"container\" *ngIf = autosearch>\n  \n  \n        <div class=\"form-group\">\n            <br/>\n            <mat-form-field class=\"example-full-width\">\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" name= \"searchval\" [(ngModel)]=\"searchval\"\n          matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"\n          placeholder=\"Enter the specific book name\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n              {{option}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        <br/>\n          <button (click)=\"search(val)\" class=\"btn btn-success\">Search</button>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <button (click)=\"backToNormal(val)\" class=\"btn btn-primary\">Back to normal</button>\n        </div>  \n        <div class=\"row\">\n            \n      <div \n      matTooltip=\"Click to see details\"\n      matTooltipClass=\"example-tooltip-red\"\n      aria-label=\"Button that shows a red tooltip\"\n      matTooltipPosition=\"above\"\n      class=\"example-button \"\n      class=\"card text-black mb-3 margin\" id=\"val\" style=\"max-width: 28rem; background:'#ff3333';cursor: pointer;box-shadow: 0 0 5px 5px rgba(0, 140, 186, 0.5)\" \n      onmouseover=\"this.style.background='white'\"\n      onmouseout=\"this.style.background='#ff3333'\"\n      [routerLink]=\"['/bookdeatils',autosearch.url]\"\n      >\n        <div class=\"card-header\"> Book Name:-{{autosearch.name}}</div>\n        <div class=\"card-body\" >\n          <h5 class=\"card-title\">Author by :{{autosearch.authors}}</h5>\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n        \n      </div>\n      </div>\n      </div>\n\n\n\n\n\n<!--******************************-->\n\n<div class=\"container\">\n  <mat-progress-bar *ngIf !=allValues mode=\"indeterminate\"></mat-progress-bar>\n  \n  \n  <div class=\"form-group\">\n      <br/>\n      <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" name= \"searchval\" [(ngModel)]=\"searchval\"\n    matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"\n    placeholder=\"Enter the specific book name\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  <br/>\n    <button (click)=\"search(val)\" class=\"btn btn-success\">Search</button>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <button (click)=\"backToNormal(val)\" class=\"btn btn-primary\">Back to normal</button>\n  </div>  \n  <div class=\"row\">\n      \n<div \nmatTooltip=\"Click to see details\"\nmatTooltipClass=\"example-tooltip-red\"\naria-label=\"Button that shows a red tooltip\"\nmatTooltipPosition=\"above\"\nclass=\"example-button \"\nclass=\"card text-black mb-3 margin\" id=\"val\" style=\"max-width: 28rem; background:'#ff3333';cursor: pointer;box-shadow: 0 0 5px 5px rgba(0, 140, 186, 0.5)\" *ngFor=\"let val of testname\" \nonmouseover=\"this.style.background='white'\"\nonmouseout=\"this.style.background='#ff3333'\"\n[routerLink]=\"['/bookdeatils',val.url]\"\n>\n  <div class=\"card-header\"> Book Name:-{{val.name}}</div>\n  <div class=\"card-body\" >\n    <h5 class=\"card-title\">Author by :{{val.authors}}</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n  </div>\n  \n</div>\n</div>\n</div>\n</ng-template>\n\n\n\n<!--  ********************************-->\n\n\n\n\n\n<!--<p *ngFor=\"let val of allValues\">\n  {{val}}\n  (mouseover)=\"fireEvent($event)\"\n  ng-class=\"{'shad':hovering}\"\nng-mouseenter=\"hovering=true\"\nng-mouseleave=\"hovering=false\"\n\n<div (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\">\n  <span [ngStyle]=\"{backgroundColor: hover==true  ? 'red' : 'grey' }\">hello {{ hover }}</span>\n  </div>---------  works\n\n  (mouseover)=\"fireEvent($event,val)\"\n  (mouseleave)=\"fireEvent($event,val)\"\n\n\n\n  [ngClass]=\"shad\" \n(mouseover)=\"changeStyle($event)\" (mouseout)=\"changeStyle($event)\"\n</p>-->"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksComponent = /** @class */ (function () {
    function BooksComponent(httpservice) {
        this.httpservice = httpservice;
        this.allValues = [];
        this.name = [];
        this.test = [];
        this.shad = 'red';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = [];
        console.log("insde the home compoent constructor");
    }
    /*fireEvent(event: any, item: any){
  console.log(item.name);
  console.log(this.allValues.length);
  console.log(event.type);
  if(event.type=="mouseover"){
  if(item.name==this.allValues[2].name)
  $("#val").addClass("shad");
  }
  else
  $("#val").removeClass("shad");
  //if(item.name==this.allValues[0].name){
  //$("#val").addClass("shad");
  }
     */
    /*changeStyle($event){
      console.log($event.type);
      this.shad = $event.type == 'mouseover' ? 'yellow' : 'white';
      console.log(this.shad);
    }
  
    @HostListener('mouseenter') onMouseEnter() {
      this.shad.nativeElement.class = 'red';
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.shad.nativeElement.class = 'yellow';
    }*/
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.display = true;
        this.autosearch = "";
        this.httpservice.getBooks().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.allValues[i] = data[i];
                _this.options[i] = _this.allValues[i].name;
                // this.j = i;
                //let jn = i;
                // this.author[i] = data[i].authors;
                //for(let j=0;i<data[i].authors.length;j++){
                //this.auther[j]=data[i].authors[j];
                //console.log("\n auther "+this.allValues[i].authors);
                // }
                //console.log("\n inside the data of the init "+this.allValues);
            }
            /*$(document).ready(function(e){
              alert("1 click");
               
             
               
               $('#val').addClass("shad");
               alert("2 click");
             
       
           });
           */
            //console.log("\n size of the array "+data.length);
            //console.log("\n outside "+this.allValues);
        }, function (error) {
            console.log("error from the init eror");
            //console.log(error.errorMessage);
        });
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
    };
    BooksComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    BooksComponent.prototype.sortBy = function (name) {
        var _this = this;
        //alert("button is clicked"+name);
        this.display = false;
        this.autosearch = "";
        //alert("button is clicked"+this.display);
        this.httpservice.getBooks().subscribe(function (data) {
            //console.log("inside the data of the init"+data);
            for (var i = 0; i < data.length; i++) {
                _this.allValues[i] = data[i];
                _this.name[i] = _this.allValues[i].name;
                _this.test[i] = _this.allValues[i];
            }
            // this.sortedname = this.name.sort();
            _this.testname = _this.test.sort(function (a, b) {
                //alert("in sorting ");
                return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
            });
            //this.sortedvalues =  this.allValues.sort
            //console.log("soted values"+this.testname.name);
        }, function (error) {
            console.log("error from the init eror");
            //console.log(error.errorMessage);
        });
    };
    BooksComponent.prototype.backToNormal = function (val) {
        var _this = this;
        this.display = true;
        this.httpservice.getBooks().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.allValues[i] = data[i];
            }
            // console.log("\n size of the array "+data.length);
            //console.log("\n outside "+this.allValues);
        }, function (error) {
            console.log("error from the init eror");
            //console.log(error.errorMessage);
        });
    };
    BooksComponent.prototype.search = function (val) {
        var _this = this;
        console.log(this.searchval);
        this.display = false;
        //  alert("button is clicked");
        this.httpservice.getBooks().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.allValues[i] = data[i];
                if (_this.allValues[i].name == _this.searchval) {
                    console.log("matched string " + _this.allValues[i].name);
                    _this.autosearch = _this.allValues[i];
                    console.log(_this.autosearch.url);
                    // this.autosearch11=false;
                    //break;
                }
            }
        }, function (error) {
            console.log("error from the init eror");
            //console.log(error.errorMessage);
        });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_got_service_service__WEBPACK_IMPORTED_MODULE_1__["GotServiceService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/character-details/character-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/character-details/character-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.margin{\r\n    margin-top: 5%;\r\n}\r\n\r\n.margin11{\r\n    margin-left: 6%;\r\n}"

/***/ }),

/***/ "./src/app/character-details/character-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/character-details/character-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentblogvalue\">\n  <mat-progress-bar *ngIf !=currentblogvalue mode=\"indeterminate\"></mat-progress-bar> \n  \n<!--<div class=\"row margin\">\n  <div class=\"col-6\">\n    book-details works! \n\n  </div>\n  <div class=\"col-6\">\n    {{currentblogvalue.name}}\n\n  </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      book-details works! \n\n    </div>\n    \n    <div class=\"col-6\">\n      {{currentblogvalue.isbn}}\n\n    </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-6\">\n        book-details works! \n  \n      </div>\n\n      <div class=\"col-6\">\n        {{currentblogvalue.numberOfPages}}\n  \n      </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    book-details works! \n\n  </div>\n\n  <div class=\"col-6\">\n    {{currentblogvalue.authors}}\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n<div class=\"col-6\">\n  Publishers \n\n</div>\n\n<div class=\"col-6\">\n  {{currentblogvalue.publisher}}\n\n</div>\n\n</div>\n\n<div class=\"row\">\n<div class=\"col-6\">\n  country \n\n</div>\n\n<div class=\"col-6\">\n  {{currentblogvalue.country}}\n\n</div>\n\n</div>\n\n\n<div class=\"row\">\n<div class=\"col-6\">\n  Released \n\n</div>\n\n<div class=\"col-6\">\n  {{currentblogvalue.released}}\n\n</div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    \n      characters<br/>\n   \n\n  </div>\n\n  <div class=\"col-6\">\n    <p *ngFor=\"let characters of currentcharacter\">\n      {{characters}}<br/>\n    </p>\n\n  </div>\n\n\n</div>-->\n\n<table class=\"table table-striped\">\n \n  <tbody>\n    <tr>\n      \n      <td>Name Of  Character </td>\n      <td><div class=\"margin11\" *ngIf =\"currentblogvalue.name;else other_content13\">{{currentblogvalue.name}}\n          <div><ng-template #other_content13>No name available</ng-template></div> \n      </div></td>\n     \n    </tr>\n    <tr>\n      \n      <td>gender</td>\n      <td><div class=\"margin11\">{{currentblogvalue.gender}}\n        </div></td>\n      \n    </tr>\n    <tr>\n      \n        <td>aliases</td>\n        <td><div class=\"margin11\">{{currentblogvalue.aliases}}\n          </div></td>\n      \n    </tr>\n    <tr>\n      \n        <td>allegiances</td>\n        <td><div class=\"margin11\">{{currentblogvalue.allegiances}}\n          </div></td>\n      \n    </tr>\n    \n    <tr>\n      \n        <td>tvSeries</td>\n        <td><div class=\"margin11\">{{currentblogvalue.tvSeries}}\n          </div></td>\n      \n    </tr>\n    <tr>\n      \n        <td>playedBy</td>\n        <td><div class=\"margin11\">{{currentblogvalue.playedBy}}\n          </div></td>\n      \n    </tr>\n\n    <tr>\n      \n        <td>Books played in :-</td>\n        <td><div class=\"margin11\" *ngFor=\"let characters of currentBookName\">\n           <b>Name:-</b> {{characters.name}} \n            <br/>\n            know more about {{characters.name}} go to url ({{characters.url}})\n            <br/>\n          \n          </div></td>\n      \n    </tr>\n\n    \n\n    <tr>\n      \n        <td></td>\n        <td><div class=\"margin11\">\n            <mat-icon></mat-icon>\n            <a class=\"btn btn-success\" (click)=\"goBack()\">Go Back</a>\n          </div></td>\n      \n    </tr>\n  </tbody>\n  \n</table>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/character-details/character-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/character-details/character-details.component.ts ***!
  \******************************************************************/
/*! exports provided: CharacterDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsComponent", function() { return CharacterDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharacterDetailsComponent = /** @class */ (function () {
    function CharacterDetailsComponent(activerouter, router, gotservice, location) {
        this.activerouter = activerouter;
        this.router = router;
        this.gotservice = gotservice;
        this.location = location;
        this.currentBookName = [];
    }
    CharacterDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var val = this.activerouter.snapshot.paramMap.get('val');
        console.log("values are:-" + val);
        this.gotservice.getCharactersDetails(val).subscribe(function (data) {
            _this.currentblogvalue = data;
            console.log("character name:" + data["books"].length);
            var _loop_1 = function (i) {
                _this.currentBookName[i] = data["books"][i];
                //console.log("book name :- "+this.currentBookName[i]);
                _this.gotservice.getCharactersDetails(_this.currentBookName[i]).subscribe(function (data) {
                    _this.currentBookName[i] = data;
                    console.log("character name:" + _this.currentBookName[i].name);
                }, function (error) {
                    console.log("error from the init eror");
                    //console.log(error.errorMessage);
                });
            };
            for (var i = 0; i < data["books"].length; i++) {
                _loop_1(i);
            }
        }, function (error) {
            console.log("error from the init eror");
            //console.log(error.errorMessage);
        });
    };
    CharacterDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    CharacterDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-details',
            template: __webpack_require__(/*! ./character-details.component.html */ "./src/app/character-details/character-details.component.html"),
            styles: [__webpack_require__(/*! ./character-details.component.css */ "./src/app/character-details/character-details.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _got_service_service__WEBPACK_IMPORTED_MODULE_2__["GotServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CharacterDetailsComponent);
    return CharacterDetailsComponent;
}());



/***/ }),

/***/ "./src/app/characters/characters.component.css":
/*!*****************************************************!*\
  !*** ./src/app/characters/characters.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin{\r\n    margin-left: 30%;\r\n    margin-top: 5%;\r\n    background: hsl(209, 100%, 60%);\r\n}\r\n\r\n.shad{\r\n    box-shadow: 0 0 10px 10px rgba(0, 140, 186, 0.5);\r\n}\r\n\r\n.example-button {\r\n    margin-top: 16px;\r\n  }\r\n\r\n.example-tooltip-red {\r\n    background: hsl(209, 100%, 60%);\r\n  }"

/***/ }),

/***/ "./src/app/characters/characters.component.html":
/*!******************************************************!*\
  !*** ./src/app/characters/characters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <mat-progress-bar *ngIf !=allValues mode=\"indeterminate\"></mat-progress-bar>\n\n<div \nmatTooltip=\"Click to see details\"\nmatTooltipClass=\"example-tooltip-red\"\naria-label=\"Button that shows a red tooltip\"\nmatTooltipPosition=\"above\"\nclass=\"example-button\"\nclass=\"card text-black mb-3 margin\" id=\"val\"  style=\"max-width: 28rem; background:'hsl(209, 100%, 60%);';cursor: pointer;box-shadow: 0 0 5px 5px rgba(0, 140, 186, 0.5)\" *ngFor=\"let val of allValues;let i=index;\" \nonmouseover=\"this.style.background='white'\"\nonmouseout=\"this.style.background='hsl(209, 100%, 60%)'\"\n[routerLink]=\"['/Characterdeatils',val.url]\"\n>\n\n\n<div class=\"card-header\">Character No. #{{i + 1}}</div>\n\n<div class=\"card-body\">\n  <h5 class=\"card-title\" *ngIf =\"val.name;else other_content12\">Character Name:-{{val.name}}</h5>\n  <ng-template #other_content12><h5>No name available</h5></ng-template>\n  <p class=\"card-text\" *ngFor=\"let name of BooksName\">Books :-{{name.name}}</p>\n</div>\n\n</div>\n\n</div>\n\n\n\n\n\n\n<!--<p *ngFor=\"let val of allValues\">\n{{val}}\n(mouseover)=\"fireEvent($event)\"\nng-class=\"{'shad':hovering}\"\nng-mouseenter=\"hovering=true\"\nng-mouseleave=\"hovering=false\"\n\n<div (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\">\n<span [ngStyle]=\"{backgroundColor: hover==true  ? 'red' : 'grey' }\">hello {{ hover }}</span>\n</div>---------  works\n\n(mouseover)=\"fireEvent($event,val)\"\n(mouseleave)=\"fireEvent($event,val)\"\n\n\n\n[ngClass]=\"shad\" \n(mouseover)=\"changeStyle($event)\" (mouseout)=\"changeStyle($event)\"\n</p>-->"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/characters/characters.component.ts ***!
  \****************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(httpservice) {
        this.httpservice = httpservice;
        this.allValues = [];
        this.BooksName = [];
        this.currentBookName = [];
        this.str = [];
        this.j = 0;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpservice.getCharacters().subscribe(function (data) {
            // console.log("inside the data of the init"+data.length);
            for (var i = 0; i < data.length; i++) {
                _this.allValues[i] = data[i];
                console.log("inside the data of the init" + data["books"]);
            }
        }, function (error) {
            console.log("error from the init eror");
        });
    };
    CharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/characters/characters.component.css")]
        }),
        __metadata("design:paramtypes", [_got_service_service__WEBPACK_IMPORTED_MODULE_1__["GotServiceService"]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/got-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/got-service.service.ts ***!
  \****************************************/
/*! exports provided: GotServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotServiceService", function() { return GotServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/from */ "./node_modules/rxjs-compat/_esm5/add/observable/from.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GotServiceService = /** @class */ (function () {
    function GotServiceService(http) {
        this.http = http;
        this.response1 = [];
        this.books = [];
        this.baseurl = "https://anapioficeandfire.com/api";
    }
    /*public getBooks():Observable<any[]>{
     
      for(let i=1;i<=10;i++){
        this.response[i] = this.http.get(this.baseurl+'/books/'+i);
        //response[1] = this.http.get(this.baseurl+'/books/2');
       this.str=["a","f"];
      console.log("response:"+this.response[i]+""+this.str);
      
    }
    return Observable.of(this.response);
    
    
    
    }*/
    GotServiceService.prototype.getBooks = function () {
        this.response = this.http.get(this.baseurl + '/books');
        //response[1] = this.http.get(this.baseurl+'/books/2');
        this.str = ["a", "f"];
        console.log("response:" + this.response + "" + this.str);
        return this.response;
    };
    GotServiceService.prototype.getBooksDetails = function (val) {
        this.response = this.http.get(val);
        //response[1] = this.http.get(this.baseurl+'/books/2');
        this.str = ["a", "f"];
        console.log("response:" + this.response + "" + this.str);
        return this.response;
    };
    GotServiceService.prototype.getCharactersDetails = function (val) {
        this.response = this.http.get(val);
        //response[1] = this.http.get(this.baseurl+'/books/2');
        this.str = ["a", "f"];
        //console.log("response:"+this.response+""+this.str);
        return this.response;
    };
    GotServiceService.prototype.getCharacters = function () {
        //for(let i=1;i<100;i++){
        console.log("characters:");
        this.response = this.http.get(this.baseurl + '/characters');
        //response[1] = this.http.get(this.baseurl+'/books/2');
        this.str = ["a", "f"];
        console.log("response:" + this.response);
        //}
        return this.response;
    };
    GotServiceService.prototype.getCharactersBooks = function (books) {
        //for(let i=1;i<10;i++){
        // console.log("characters books:"+books.name);
        // console.log("response after*****"+books.length);
        this.response = this.http.get(books);
        //response[1] = this.http.get(this.baseurl+'/books/2');
        this.str = ["a", "f"];
        //console.log("response befor*****");
        return this.response;
    };
    GotServiceService.prototype.getHouses = function () {
        //for(let i=1;i<100;i++){
        // console.log("characters:");
        this.response = this.http.get(this.baseurl + '/houses');
        //response[1] = this.http.get(this.baseurl+'/books/2');
        this.str = ["a", "f"];
        //console.log("response:"+this.response);
        //}
        return this.response;
    };
    GotServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GotServiceService);
    return GotServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.imgsize{\r\n    height: 60vh;\r\n    width: 88vw;\r\n}\r\n\r\n.imgsize1{\r\n    height: 60vh;\r\n    width: 80vw;\r\n    \r\n}\r\n\r\n.container{\r\n    \r\n}\r\n\r\n.fontsize{\r\n    color: black;\r\n    font-style: italic;\r\n    font-size: 30%;\r\n    text-align: center;\r\n}\r\n\r\n.boarder{\r\n    border-style: solid;\r\n    border-color: red;\r\n}\r\n\r\n.buttonsize{\r\n    width: 40%;\r\n}\r\n\r\n.margin{\r\n    margin-left: 10%;\r\n}\r\n\r\n.example-button {\r\n    margin-top: 16px;\r\n  }\r\n\r\n.example-tooltip-red {\r\n    background: #b71c1c;\r\n  }\r\n\r\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <img class=\"imgsize d-sm-none d-md-none d-lg-none d-xl-block\" src=\"assets/images/game-of-thrones.jpg\">\n    </div>\n\n    <div class=\"col\">\n      <img class=\"imgsize d-none d-lg-block d-xl-none\" src=\"assets/images/game-of-thrones.jpg\">\n    </div>\n\n    <div class=\"col\">\n      <img class=\"imgsize1 d-none d-sm-block d-md-block d-lg-none\" src=\"assets/images/game-of-thrones.jpg\">\n    </div>\n\n  </div>\n   <br/><br/>\n\n  <div class=\"row\">\n    <div class=\"col fontsize\">\n          <h3>Worlds Best Series Is here</h3>\n      </div>\n      </div>\n      <br/><br/>\n\n\n\n  <div class=\"row margin\">\n    <div class=\"col-xl-4 col-lg-4  col-md-4\">\n      <button  type=\"button\" \n      matTooltip=\"Click to see details\"\n      matTooltipClass=\"example-tooltip-red\"\n      aria-label=\"Button that shows a red tooltip\"\n      matTooltipPosition=\"above\"\n      class=\"example-button\"\n      \n      class=\"btn btn-danger buttonsize\" id=\"book\" [routerLink]=\"['/books']\">\n        Books  </button>\n      </div>\n\n      <div class=\"col-xl-4  col-lg-4  col-md-4\">\n        <button type=\"button\" \n        matTooltip=\"Click to see details\"\nmatTooltipClass=\"example-tooltip-red\"\naria-label=\"Button that shows a red tooltip\"\nmatTooltipPosition=\"above\"\nclass=\"example-button\"\n        class=\"btn btn-success buttonsize\" [routerLink]=\"['/houses']\">Houses</button>\n        </div>\n\n        <div class=\"col-xl-4  col-lg-4  col-md-4\">\n          <button type=\"button\"\n          matTooltip=\"Click to see details\"\n          matTooltipClass=\"example-tooltip-red\"\n          aria-label=\"Button that shows a red tooltip\"\n          matTooltipPosition=\"above\"\n          class=\"example-button\"\n          class=\"btn btn-primary buttonsize\" [routerLink]=\"['/characters']\">Characters</button>\n          </div>\n\n\n    </div>\n\n    \n\n    \n\n    <!--\n        <div class=\"col-xl-4\">\n          <div class=\"card boarder\" style=\"width: 18rem;\">\n            <img class=\"card-img-top\" src=\"\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n          </div>\n          </div>\n        \n\n\n        \n            <div class=\"col-xl-4\">\n              <div class=\"card boarder\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Card title</h5>\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                </div>\n              </div>\n              </div>\n            -->\n  \n</div>"

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
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
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
    //private loadScript;
    //declare var Jquery:any;
    function HomeComponent(httpservice) {
        this.httpservice = httpservice;
        this.allValues = [];
        console.log("insde the home compoent constructor");
    }
    /*async ngAfterViewInit() {
        alert("inside it");
      await this.loadScript('./assets/js/loadingoverlay.min.js');
   and implents these ,AfterViewInit
  
  }
  
  private loadScript(scriptUrl: string) {
      return new Promise((resolve, reject) => {
        const scriptElement = document.createElement('script')
        scriptElement.src = scriptUrl
        scriptElement.onload = resolve
        document.body.appendChild(scriptElement)
      })
    }*/
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_got_service_service__WEBPACK_IMPORTED_MODULE_1__["GotServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/housedetails/housedetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/housedetails/housedetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.margin{\r\n    margin-top: 5%;\r\n}\r\n\r\n.margin11{\r\n    margin-left: 6%;\r\n}"

/***/ }),

/***/ "./src/app/housedetails/housedetails.component.html":
/*!**********************************************************!*\
  !*** ./src/app/housedetails/housedetails.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentblogvalue\">\n   \n    \n  <!--<div class=\"row margin\">\n    <div class=\"col-6\">\n      book-details works! \n\n    </div>\n    <div class=\"col-6\">\n      {{currentblogvalue.name}}\n\n    </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-6\">\n        book-details works! \n  \n      </div>\n      \n      <div class=\"col-6\">\n        {{currentblogvalue.isbn}}\n  \n      </div>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6\">\n          book-details works! \n    \n        </div>\n\n        <div class=\"col-6\">\n          {{currentblogvalue.numberOfPages}}\n    \n        </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      book-details works! \n\n    </div>\n\n    <div class=\"col-6\">\n      {{currentblogvalue.authors}}\n\n    </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    Publishers \n\n  </div>\n\n  <div class=\"col-6\">\n    {{currentblogvalue.publisher}}\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    country \n\n  </div>\n\n  <div class=\"col-6\">\n    {{currentblogvalue.country}}\n\n  </div>\n\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    Released \n\n  </div>\n\n  <div class=\"col-6\">\n    {{currentblogvalue.released}}\n\n  </div>\n\n</div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      \n        characters<br/>\n     \n\n    </div>\n\n    <div class=\"col-6\">\n      <p *ngFor=\"let characters of currentcharacter\">\n        {{characters}}<br/>\n      </p>\n\n    </div>\n\n\n</div>-->\n\n<table class=\"table table-striped\">\n \n   \n    <tbody>\n      <tr>\n        \n        <td>Name Of  Houses </td>\n        <td><div class=\"margin11\">{{currentblogvalue.name}}\n          </div></td>\n       \n      </tr>\n      <tr>\n        \n        <td>region</td>\n        <td><div class=\"margin11\">{{currentblogvalue.region}}\n          </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>coatOfArms</td>\n          <td><div class=\"margin11\">{{currentblogvalue.coatOfArms}}\n            </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>titles</td>\n          <td><div class=\"margin11\" *ngIf =\"currentblogvalue.titles;else other\">{{currentblogvalue.titles}}</div>\n            \n            <td><div class=\"margin11\" *ngIf !=\"currentblogvalue.titles\">No item available</div>\n          </td>\n        \n      </tr>\n      <tr>\n        \n          <td>seats</td>\n          <td><div class=\"margin11\">{{currentblogvalue.seats}}\n            </div></td>\n        \n      </tr>\n      <tr>\n        \n          <td>words</td>\n          <td><div class=\"margin11\">{{currentblogvalue.words}}\n            </div></td>\n        \n      </tr>\n     \n\n      <tr>\n        \n          <td>swornMembers</td>\n          <td><div class=\"margin11\" *ngFor=\"let characters of characterName\">\n             <b>Name:-</b> {{characters.name}} \n              <br/>\n              know more about {{characters.name}} go to url ({{characters.url}})\n              <br/>\n            \n            </div></td>\n        \n      </tr>\n\n      \n\n      <tr>\n        \n          <td></td>\n          <td><div class=\"margin11\">\n              <mat-icon></mat-icon>\n              <a class=\"btn btn-success\" (click)=\"goBack()\">Go Back</a>\n            </div></td>\n        \n      </tr>\n    </tbody>\n    \n  </table>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/housedetails/housedetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/housedetails/housedetails.component.ts ***!
  \********************************************************/
/*! exports provided: HousedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousedetailsComponent", function() { return HousedetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HousedetailsComponent = /** @class */ (function () {
    function HousedetailsComponent(activerouter, router, gotservice, location) {
        this.activerouter = activerouter;
        this.router = router;
        this.gotservice = gotservice;
        this.location = location;
        this.characterName = [];
        this.currentcharacter = [];
    }
    HousedetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var val = this.activerouter.snapshot.paramMap.get('val');
        console.log("values are:-" + val);
        this.gotservice.getBooksDetails(val).subscribe(function (data) {
            //console.log("inside the data of the init");
            _this.currentblogvalue = data;
            var _loop_1 = function (i) {
                _this.currentcharacter[i] = data["swornMembers"][i];
                //another code ----------------------
                _this.gotservice.getCharactersDetails(_this.currentcharacter[i]).subscribe(function (data) {
                    _this.characterName[i] = data;
                    console.log("swornMembers name:" + _this.characterName[i].name);
                }, function (error) {
                    console.log("error from the init eror");
                    //console.log(error.errorMessage);
                });
                //end of it ---------------------------------
            };
            //this.currentblogvalue[1]=data["isbn"];
            //this.currentblogvalue[2]=data["numberOfPages"];
            //this.currentblogvalue[3]=data["publisher"];
            //this.currentblogvalue[4]=data["country"];
            //this.currentblogvalue[5]=data["released"];
            for (var i = 0; i < 10; i++) {
                _loop_1(i);
            }
            //for(let i=0;i<this.currentblogvalue.length;i++)
            console.log("inside the data of the init" + _this.currentblogvalue.name);
        }, function (error) {
            console.log("error from the init eror");
            //console.log(error.errorMessage);
        });
    };
    HousedetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    HousedetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-housedetails',
            template: __webpack_require__(/*! ./housedetails.component.html */ "./src/app/housedetails/housedetails.component.html"),
            styles: [__webpack_require__(/*! ./housedetails.component.css */ "./src/app/housedetails/housedetails.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _got_service_service__WEBPACK_IMPORTED_MODULE_2__["GotServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HousedetailsComponent);
    return HousedetailsComponent;
}());



/***/ }),

/***/ "./src/app/houses/houses.component.css":
/*!*********************************************!*\
  !*** ./src/app/houses/houses.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin{\r\n    margin-left: 30%;\r\n    margin-top: 5%;\r\n    background: #00ff80;\r\n}\r\n\r\n.shad{\r\n    box-shadow: 0 0 10px 10px rgba(0, 140, 186, 0.5);\r\n}\r\n\r\n.example-button {\r\n    margin-top: 16px;\r\n  }\r\n\r\n.example-tooltip-red {\r\n    background: hsl(209, 100%, 60%);\r\n  }"

/***/ }),

/***/ "./src/app/houses/houses.component.html":
/*!**********************************************!*\
  !*** ./src/app/houses/houses.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <mat-progress-bar *ngIf !=allValues mode=\"indeterminate\"></mat-progress-bar>\n\n<div \nmatTooltip=\"Click to see details\"\nmatTooltipClass=\"example-tooltip-red\"\naria-label=\"Button that shows a red tooltip\"\nmatTooltipPosition=\"above\"\nclass=\"example-button\"\nclass=\"card text-black mb-3 margin\" id=\"val\"  style=\"max-width: 28rem; background:'#00ff80;';cursor: pointer;box-shadow: 0 0 5px 5px rgba(0, 140, 186, 0.5)\" *ngFor=\"let val of allValues;let i=index;\" \nonmouseover=\"this.style.background='white'\"\nonmouseout=\"this.style.background='#00ff80'\"\n[routerLink]=\"['/housedetails',val.url]\"\n>\n\n<div class=\"row\">\n  <div class=\"col\">\n<div class=\"card-header\">House No. #{{i + 1}}</div>\n\n<div class=\"card-body\">\n  <h5 class=\"card-title\" *ngIf =\"val.name;else other_content12\">House Name:-{{val.name}}</h5>\n  <ng-template #other_content12><h5>No name available</h5></ng-template>\n  <p class=\"card-text\">region :-{{val.region}}</p>\n</div>\n\n</div>\n</div>\n</div>\n</div>\n\n\n\n\n\n\n<!--<p *ngFor=\"let val of allValues\">\n{{val}}\n(mouseover)=\"fireEvent($event)\"\nng-class=\"{'shad':hovering}\"\nng-mouseenter=\"hovering=true\"\nng-mouseleave=\"hovering=false\"\n\n<div (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\">\n<span [ngStyle]=\"{backgroundColor: hover==true  ? 'red' : 'grey' }\">hello {{ hover }}</span>\n</div>---------  works\n\n(mouseover)=\"fireEvent($event,val)\"\n(mouseleave)=\"fireEvent($event,val)\"\n\n\n\n[ngClass]=\"shad\" \n(mouseover)=\"changeStyle($event)\" (mouseout)=\"changeStyle($event)\"\n</p>-->"

/***/ }),

/***/ "./src/app/houses/houses.component.ts":
/*!********************************************!*\
  !*** ./src/app/houses/houses.component.ts ***!
  \********************************************/
/*! exports provided: HousesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesComponent", function() { return HousesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HousesComponent = /** @class */ (function () {
    function HousesComponent(httpservice) {
        this.httpservice = httpservice;
        this.allValues = [];
        this.BooksName = [];
        this.currentBookName = [];
        this.str = [];
        this.j = 0;
    }
    HousesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpservice.getHouses().subscribe(function (data) {
            // console.log("inside the data of the init"+data.length);
            for (var i = 0; i < data.length; i++) {
                _this.allValues[i] = data[i];
                // console.log("inside the data of the init"+data["books"]);
            }
        }, function (error) {
            console.log("error from the init eror");
        });
    };
    HousesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-houses',
            template: __webpack_require__(/*! ./houses.component.html */ "./src/app/houses/houses.component.html"),
            styles: [__webpack_require__(/*! ./houses.component.css */ "./src/app/houses/houses.component.css")]
        }),
        __metadata("design:paramtypes", [_got_service_service__WEBPACK_IMPORTED_MODULE_1__["GotServiceService"]])
    ], HousesComponent);
    return HousesComponent;
}());



/***/ }),

/***/ "./src/app/post-comment/post-comment.component.css":
/*!*********************************************************!*\
  !*** ./src/app/post-comment/post-comment.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    \r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n\r\n.alert{\r\n      color: red;\r\n  }"

/***/ }),

/***/ "./src/app/post-comment/post-comment.component.html":
/*!**********************************************************!*\
  !*** ./src/app/post-comment/post-comment.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <form #blogform=\"ngForm\" (ngSubmit)=\"createBlog()\">\n  \n      <div class=\"form-group\">\n        <br/>\n        <label for=\"exampleFormControlTextarea1\">Post your comment</label>\n        <textarea  class=\"form-control\"  name=\"comment\" [(ngModel)]=\"comment\"  #title=\"ngModel\" id=\"exampleInputEmail1\" placeholder=\"Enter your comment regarding these book\" rows=\"3\" required></textarea>\n      </div>\n  \n      <div [hidden]=\"title.valid || title.pristine\" class=\"alert\">\n    comment is required\n    \n      </div>\n    \n      \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!blogform.form.valid\">post comment</button>\n    </form>\n    </div>"

/***/ }),

/***/ "./src/app/post-comment/post-comment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/post-comment/post-comment.component.ts ***!
  \********************************************************/
/*! exports provided: PostCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentComponent", function() { return PostCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-service.service */ "./src/app/got-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostCommentComponent = /** @class */ (function () {
    function PostCommentComponent(bloghttpservice, activerouter, router, toastr, vcr) {
        this.bloghttpservice = bloghttpservice;
        this.activerouter = activerouter;
        this.router = router;
        this.toastr = toastr;
    }
    PostCommentComponent.prototype.ngOnInit = function () {
    };
    PostCommentComponent.prototype.createBlog = function () {
        // commentbody:this.commentbody; 
        var _this = this;
        this.toastr.success('comment posted successfully', 'Success!');
        setTimeout(function () {
            _this.router.navigate(['/books']);
            //console.log(data.data.blogId);
        }, 1000);
    };
    PostCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-comment',
            template: __webpack_require__(/*! ./post-comment.component.html */ "./src/app/post-comment/post-comment.component.html"),
            styles: [__webpack_require__(/*! ./post-comment.component.css */ "./src/app/post-comment/post-comment.component.css")]
        }),
        __metadata("design:paramtypes", [_got_service_service__WEBPACK_IMPORTED_MODULE_1__["GotServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], PostCommentComponent);
    return PostCommentComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! E:\Edwisor\Angular\GameOfThrone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map