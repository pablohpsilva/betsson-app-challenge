webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav>\n    <app-menu\n      (notify)=\"updateTextFilter($event)\">\n    </app-menu>\n  </nav>\n\n  <aside>\n    <app-container\n      [movies]=\"movies\"\n      [textFilter]=\"textFilter\">\n    </app-container>\n  </aside>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0 !important;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n* {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #e67e22;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  font-family: 'Roboto', sans-serif;\n  overflow-y: scroll;\n  /* has to be scroll, not auto */\n  -webkit-overflow-scrolling: touch;\n  background-color: #e3e2dd; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_mock_movie_mock_data__ = __webpack_require__("../../../../../src/betsson-app-challenge/assets/mock/movie.mock-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.textFilter = '';
        this.movies = Object.assign([], __WEBPACK_IMPORTED_MODULE_1__assets_mock_movie_mock_data__["a" /* movies */]);
    }
    AppComponent.prototype.updateTextFilter = function (message) {
        this.textFilter = message;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tile_tile_component__ = __webpack_require__("../../../../../src/app/components/tile/tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_container_container_component__ = __webpack_require__("../../../../../src/app/components/container/container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_tile_tile_component__["a" /* TileComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_container_container_component__["a" /* ContainerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  #container\n  class=\"container\">\n  <app-tile\n    *ngFor=\"let movie of filteredList\"\n    [title]=\"movie.name\"\n    [description]=\"movie.description\"\n    [genres]=\"movie.genres\"\n    [rating]=\"movie.rate\"\n    [length]=\"movie.length\"\n    [img]=\"movie.img\"\n    [youtube]=\"movie.youtube\"\n    [show]=\"!!movie.hasOwnProperty('show') ? movie.show : false\"\n    (click)=\"onMovieClick(movie)\"\n    ></app-tile>\n  <div\n    *ngIf=\"!filteredList || !filteredList.length\"\n    class=\"empty-movie-list\">\n    <span>\n      No movies found\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  position: relative;\n  height: 100%; }\n\n.container {\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 8px 0;\n  margin-top: 40px; }\n  .container app-tile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 4px auto; }\n\n.empty-movie-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = (function () {
    function ContainerComponent() {
        this.filteredList = [];
    }
    ContainerComponent.prototype.setTileElements = function () {
        var elements = this.el.nativeElement.querySelectorAll('.element');
        this.tileElements = [];
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var elem = elements_1[_i];
            this.tileElements.push(elem);
        }
    };
    ContainerComponent.prototype.onMovieClick = function (movie) {
        movie.show = !movie.show;
    };
    ContainerComponent.prototype.getCollapsedExpandedMeasures = function (collapsed, expanded) {
        return [
            collapsed.top - expanded.top,
            collapsed.left - expanded.left,
            collapsed.width / expanded.width,
            collapsed.height / expanded.height,
        ];
    };
    ContainerComponent.prototype.setTileElementOnClickEvent = function (elem) {
        var _this = this;
        elem.addEventListener('click', function () {
            if (elem.classList.contains('collapsed')) {
                elem.classList.add('expanding');
                elem.classList.remove('collapsed');
                elem.classList.add('expanded');
                window.scrollTo(0, 0);
                document.body.style.overflowY = "hidden";
                var collapsed = elem.getBoundingClientRect();
                elem.classList.remove('expanded');
                elem.classList.add('collapsed');
                var expanded = elem.getBoundingClientRect();
                elem.classList.add('transition');
                var _a = _this.getCollapsedExpandedMeasures(collapsed, expanded), invertedTop = _a[0], invertedLeft = _a[1], invertedWidth = _a[2], invertedHeight = _a[3];
                elem.style.transformOrigin = 'top left';
                elem.style.transform = "translateX(" + invertedLeft + "px) translateY(" + invertedTop + "px) translateZ(0) scaleX(" + invertedWidth + ") scaleY(" + invertedHeight + ")";
                elem.addEventListener('transitionend', function handler(event) {
                    elem.style.transform = '';
                    elem.style.transformOrigin = '';
                    elem.classList.remove('transition');
                    elem.classList.remove('expanding');
                    elem.classList.remove('collapsed');
                    elem.classList.add('expanded');
                    elem.removeEventListener('transitionend', handler);
                });
            }
        });
        var close = elem.querySelector('.close');
        close.addEventListener('click', function () {
            if (elem.classList.contains('expanded') && !elem.classList.contains('collapsing')) {
                document.body.style.overflowY = "scroll";
                requestAnimationFrame(function () {
                    elem.classList.add('collapsing');
                    elem.classList.remove('expanded');
                    elem.classList.add('collapsed');
                    var collapsed = elem.getBoundingClientRect();
                    elem.classList.remove('collapsed');
                    elem.classList.add('expanded');
                    var expanded = elem.getBoundingClientRect();
                    elem.classList.add('transition');
                    var _a = _this.getCollapsedExpandedMeasures(collapsed, expanded), invertedTop = _a[0], invertedLeft = _a[1], invertedWidth = _a[2], invertedHeight = _a[3];
                    elem.style.transformOrigin = 'top left';
                    elem.style.transform = "translate(" + invertedLeft + "px, " + invertedTop + "px) scale(" + invertedWidth + ", " + invertedHeight + ")";
                    elem.addEventListener('transitionend', function handler(event) {
                        elem.style.transform = '';
                        elem.style.transformOrigin = '';
                        elem.style.webkitTransform = '';
                        elem.style.webkitTransformationOrigin = '';
                        elem.classList.remove('transition');
                        elem.classList.remove('collapsing');
                        elem.classList.remove('expanded');
                        elem.classList.add('collapsed');
                        elem.removeEventListener('transitionend', handler);
                    });
                });
            }
        });
    };
    ContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // console.log(this);
        this.setTileElements();
        this.tileElements.map(function (elem) { return _this.setTileElementOnClickEvent(elem); });
    };
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTileElements();
        this.tileElements.map(function (elem) { return _this.setTileElementOnClickEvent(elem); });
        this.filterMovieList();
    };
    ContainerComponent.prototype.filterMovieList = function (title) {
        if (title === void 0) { title = ''; }
        var movies = Object.assign([], this.movies);
        if (!title) {
            this.filteredList = movies;
            return;
        }
        this.filteredList = movies.filter(function (el) { return ~el.name.toLowerCase().indexOf(title.toLowerCase()); });
    };
    ContainerComponent.prototype.ngOnChanges = function (changes) {
        var textFilter = changes.textFilter;
        if (textFilter) {
            this.filterMovieList(textFilter.currentValue);
        }
    };
    return ContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], ContainerComponent.prototype, "el", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "movies", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ContainerComponent.prototype, "textFilter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "genderFilter", void 0);
ContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-container',
        template: __webpack_require__("../../../../../src/app/components/container/container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/container/container.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContainerComponent);

var _a;
//# sourceMappingURL=container.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <div\n    class=\"app-menu\">\n    <ul class=\"menu-ul\">\n      <li>\n        <a\n          href=\"https://www.imdb.com\">\n          IMDB full\n        </a>\n      </li>\n      <li>\n        <a\n          href=\"https://github.com/pablohpsilva\">\n          pablohpsilva Github\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"layout\">\n  <div class=\"header\">\n    <div class=\"menu-icon\">\n      <img\n        src=\"/betsson-app-challenge/assets/images/icons/three.svg\"\n        alt=\"\"/>\n    </div>\n\n    <div\n      class=\"menu-content\">\n      <div\n        [hidden]=\"searchable\"\n        class=\"menu-item\">\n        IMDB-Lite\n      </div>\n      <div\n        [hidden]=\"!searchable\"\n        class=\"menu-item\">\n        <input\n          class=\"menu-input\"\n          [(ngModel)]=\"textFilter\"\n          (keyup)=\"textFilterMovies()\"\n          type=\"text\"/>\n      </div>\n    </div>\n\n    <div\n      class=\"menu-right\">\n      <div\n        (click)=\"toggleSearchBar()\"\n        class=\"menu-icon\">\n        <img\n          src=\"/betsson-app-challenge/assets/images/icons/search.svg\"\n          alt=\"\"/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 150; }\n  .menu::after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    opacity: 0;\n    will-change: opacity;\n    pointer-events: none;\n    transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1); }\n\n.menu--visible {\n  pointer-events: auto; }\n  .menu--visible.menu::after {\n    opacity: 1;\n    pointer-events: auto; }\n  .menu--visible.menu.fixed::after {\n    opacity: 0;\n    pointer-events: auto; }\n  .menu--visible .app-menu {\n    -webkit-transform: none;\n    transform: none; }\n\n.app-menu {\n  background-color: #fff;\n  color: #fff;\n  position: relative;\n  max-width: 400px;\n  width: 90%;\n  height: 100%;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);\n  -webkit-transform: translateX(-103%);\n  transform: translateX(-103%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  will-change: transform;\n  z-index: 160;\n  pointer-events: auto; }\n\n.menu--animatable .app-menu {\n  transition: all 130ms ease-in; }\n\n.menu--visible.menu--animatable .app-menu {\n  transition: all 330ms ease-out; }\n\n.menu--visible.menu:after {\n  opacity: 1;\n  pointer-events: auto; }\n\n.menu-ul {\n  list-style: none;\n  padding: 0 16px; }\n  .menu-ul li {\n    margin-bottom: 16px; }\n  .menu-ul a {\n    text-decoration: none;\n    color: #000; }\n\n/* aux */\n.layout {\n  width: 100%;\n  background-color: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5; }\n\n.header {\n  background-color: rgba(0, 0, 0, 0.8);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #FFF; }\n  .header .menu-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 0 8px; }\n  .header .menu-right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .header .menu-item {\n    padding: 8px; }\n\n.menu-input {\n  border: none;\n  border-radius: 1px;\n  padding: 4px 8px;\n  margin: 0; }\n\n.menu-icon {\n  content: \"Menu\";\n  color: #fff;\n  cursor: pointer;\n  background-color: transparent;\n  width: 40px;\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .menu-icon img {\n    width: 20px; }\n\n.app-menu {\n  width: 300px;\n  height: 100%;\n  box-shadow: none;\n  background-color: #ddd; }\n\n.menu:after {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_mock_movie_model__ = __webpack_require__("../../../../../src/betsson-app-challenge/assets/mock/movie.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    MenuComponent.prototype.toggleClassMenu = function () {
        this.myMenu.classList.add("menu--animatable");
        if (!this.myMenu.classList.contains("menu--visible")) {
            this.myMenu.classList.add("menu--visible");
            return;
        }
        this.myMenu.classList.remove('menu--visible');
    };
    MenuComponent.prototype.toggleSearchBar = function () {
        if (this.searchable) {
            this.textFilter = '';
            this.notify.emit(this.textFilter);
        }
        this.searchable = !this.searchable;
    };
    MenuComponent.prototype.onTransitionEnd = function () {
        this.myMenu.classList.remove("menu--animatable");
    };
    MenuComponent.prototype.setMenuBehaviour = function () {
        this.myMenu = document.querySelector(".menu");
        this.oppMenu = document.querySelector(".menu-icon");
        this.myMenu.addEventListener("transitionend", this.onTransitionEnd.bind(this), false);
        this.oppMenu.addEventListener("click", this.toggleClassMenu.bind(this), false);
        this.myMenu.addEventListener("click", this.toggleClassMenu.bind(this), false);
    };
    // setResizeEvent() {
    //   Observable.fromEvent(window, 'scroll')
    //     .map((el) => {
    //       // return document.documentElement.clientWidth;
    //       return el;
    //     })
    //     .debounceTime(200)
    //     .subscribe(data => {
    //       console.log(data)
    //     });
    // }
    MenuComponent.prototype.textFilterMovies = function () {
        this.notify.emit(this.textFilter);
    };
    MenuComponent.prototype.setGenreTypes = function () {
        this.genreTypes = Object.keys(__WEBPACK_IMPORTED_MODULE_1__assets_mock_movie_model__["a" /* genreType */])
            .map(function (el) { return ({
            checked: false,
            value: el,
        }); });
    };
    MenuComponent.prototype.ngOnInit = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1__assets_mock_movie_model__["a" /* genreType */]);
        // this.setResizeEvent();
        this.setMenuBehaviour();
        this.setGenreTypes();
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], MenuComponent.prototype, "notify", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tile/tile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"element collapsed\"\n  [ngStyle]=\"getBackgroundStyle()\">\n\n  <div class=\"movie-details-sample\">\n    <h4 class=\"movie-title\">{{title}}</h4>\n    <h4 class=\"movie-rating\">{{rating}}</h4>\n\n    <div class=\"backdrop backdrop-bottom\"></div>\n  </div>\n\n  <section class=\"movie-list\">\n    <div class=\"backdrop backdrop-top\"></div>\n\n    <div class=\"details-controller\">\n      <button class=\"close\"></button>\n    </div>\n\n    <div class=\"movie-details-full\">\n      <h2 class=\"movie-title\">{{title}}</h2>\n      <h4 class=\"movie-rating\">{{rating}}</h4>\n    </div>\n    <h4 class=\"movie-length\">{{length}}</h4>\n\n    <div class=\"movie-content\">\n      <iframe *ngIf=\"show\" width=\"100%\" height=\"60%\" [src]=\"youtubeURL()\" frameborder=\"0\" allowfullscreen></iframe>\n      <p>\n        {{description}}\n      </p>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tile/tile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);", ""]);

// module
exports.push([module.i, ".element {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .element.collapsed {\n    cursor: pointer;\n    height: 155px;\n    width: 375px;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    .element.collapsed .close {\n      display: none; }\n    .element.collapsed .movie-list {\n      display: none; }\n  .element.expanded {\n    top: 0vh;\n    height: 100vh;\n    width: 100vw;\n    z-index: 5;\n    opacity: 1;\n    position: absolute;\n    left: 0; }\n    .element.expanded .movie-details-sample {\n      display: none; }\n\n.expanding {\n  z-index: 5; }\n  .expanding.transition {\n    transition: -webkit-transform 330ms ease-in;\n    transition: transform 330ms ease-in;\n    transition: transform 330ms ease-in, -webkit-transform 330ms ease-in; }\n  .expanding .movie-details-sample {\n    display: none; }\n\n.details-controller {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 8px 16px; }\n  .details-controller .close {\n    background: transparent;\n    padding: 8px 11px;\n    outline: none;\n    cursor: pointer;\n    border-radius: 100px;\n    border: 1px solid rgba(255, 255, 255, 0.8);\n    transition: all .3s ease; }\n    .details-controller .close:hover {\n      background: rgba(255, 255, 255, 0.4); }\n    .details-controller .close::after {\n      content: '<';\n      color: white; }\n\n.movie-list {\n  width: 100%;\n  padding: 2vh 5vw; }\n\n.movie-content {\n  background: rgba(0, 0, 0, 0.5);\n  margin: 8px 16px;\n  color: white;\n  padding: 8px;\n  height: calc(100vh - 200px); }\n\n.collapsing.transition {\n  transition: -webkit-transform 270ms ease-in;\n  transition: transform 270ms ease-in;\n  transition: transform 270ms ease-in, -webkit-transform 270ms ease-in; }\n\n.movie-details-full,\n.movie-details-sample {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 8px 16px;\n  padding-bottom: 0px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  .movie-details-full .movie-title,\n  .movie-details-sample .movie-title {\n    color: white;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .movie-details-full .movie-rating,\n  .movie-details-full .movie-title,\n  .movie-details-sample .movie-rating,\n  .movie-details-sample .movie-title {\n    z-index: 1; }\n\n.movie-details-full {\n  z-index: 10; }\n  .movie-details-full .movie-rating {\n    padding: 10px 10px;\n    font-size: 12px; }\n\n.backdrop {\n  width: 100%;\n  height: 25%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -5; }\n\n.backdrop-bottom {\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 100%);\n  height: 100%;\n  bottom: 0;\n  z-index: 0; }\n\n.backdrop-top {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, transparent 100%); }\n\n.details-controller,\n.movie-details-full,\n.movie-content {\n  z-index: 10; }\n\n.movie-length {\n  padding: 0 16px;\n  margin: 0;\n  color: #FFF; }\n\n.movie-details-sample .movie-rating {\n  padding: 8px 9px;\n  font-size: 10px; }\n\n.movie-rating {\n  color: white;\n  border-radius: 100px;\n  border: 2px solid white; }\n\n/* Article Link */\n.banner-article {\n  position: absolute;\n  bottom: 20px;\n  right: 20px; }\n\n.banner-article a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.banner-article .container-image {\n  background-color: #fff;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.banner-article img {\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\na {\n  color: #fff;\n  font-size: 16px;\n  text-decoration: none;\n  font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tile/tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TileComponent = (function () {
    function TileComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TileComponent.prototype.getBackgroundStyle = function () {
        return {
            'background-size': 'cover',
            'background-image': "url(../../../betsson-app-challenge/assets/images/movie-covers/" + this.img + ")",
            'background-position': 'center',
        };
    };
    TileComponent.prototype.youtubeURL = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtube);
    };
    TileComponent.prototype.ngOnInit = function () {
    };
    return TileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "rating", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "description", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "length", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TileComponent.prototype, "genres", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "img", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], TileComponent.prototype, "show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "youtube", void 0);
TileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-tile',
        template: __webpack_require__("../../../../../src/app/components/tile/tile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tile/tile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], TileComponent);

var _a;
//# sourceMappingURL=tile.component.js.map

/***/ }),

/***/ "../../../../../src/betsson-app-challenge/assets/mock/movie.mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movie_model__ = __webpack_require__("../../../../../src/betsson-app-challenge/assets/mock/movie.model.ts");

var movies = [
    {
        id: 1,
        key: "deadpool",
        name: "Deadpool",
        description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy],
        rate: "8.6",
        length: "1hr 48mins",
        img: "deadpool.jpg",
        youtube: "https://www.youtube.com/embed/ONHBaC-pfsk"
    },
    {
        id: 2,
        key: "we-are-the-millers",
        name: "We're the Millers",
        description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "7.0",
        length: "1hr 50mins",
        img: "we-are-the-millers.jpg",
        youtube: "https://www.youtube.com/embed/0Vsy5KzsieQ"
    },
    {
        id: 3,
        key: "straight-outta-compton",
        name: "Straight Outta Compton",
        description: "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].history],
        rate: "8.0",
        length: "2hr 27mins",
        img: "straight-outta-compton.jpg",
        youtube: "https://www.youtube.com/embed/rsbWEF1Sju0"
    },
    {
        id: 4,
        key: "gridiron-gang",
        name: "Gridiron Gang",
        description: "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].sport],
        rate: "6.9",
        length: "2hr 5mins",
        img: "gridiron-gang.jpg",
        youtube: "https://www.youtube.com/embed/qm8vVSUnUWs"
    },
    {
        id: 5,
        key: "american-gangster",
        name: "American Gangster",
        description: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.8",
        length: "2hr 37mins",
        img: "american-gangster.jpg",
        youtube: "https://www.youtube.com/embed/BV_nssS6Zkg"
    },
    {
        id: 6,
        key: "gangster-squad",
        name: "Gangster Squad",
        description: "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "6.8",
        length: "1hr 53mins",
        img: "gangster-squad.jpg",
        youtube: "https://www.youtube.com/embed/LlbN5cQKZik"
    },
    {
        id: 7,
        key: "now-you-see-me",
        name: "Now You See Me",
        description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].mystery, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "1hr 55mins",
        img: "now-you-see-me.jpg",
        youtube: "https://www.youtube.com/embed/4OtM9j2lcUA"
    },
    {
        id: 8,
        key: "jurassic-world",
        name: "Jurassic World",
        description: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "7.1",
        length: "2hr 4mins",
        img: "jurassic-world.jpg",
        youtube: "https://www.youtube.com/embed/RFinNxS5KN4"
    },
    {
        id: 9,
        key: "mission-impossible-rogue-nation",
        name: "Mission: Impossible: Rogue Nation",
        description: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.5",
        length: "2hr 11mins",
        img: "mission-impossible-rogue-nation.jpg",
        youtube: "https://www.youtube.com/embed/gOW_azQbOjw"
    },
    {
        id: 10,
        key: "the-man-from-uncle",
        name: "The Man from U.N.C.L.E.",
        description: "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "1hr 56mins",
        img: "the-man-from-uncle.jpg",
        youtube: "https://www.youtube.com/embed/-x08iNZ8Mfc"
    },
    {
        id: 10,
        key: "spectre",
        name: "Spectre",
        description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "6.9",
        length: "2hr 28mins",
        img: "spectre.jpg",
        youtube: "https://www.youtube.com/embed/ashLaclKCik"
    },
    {
        id: 11,
        key: "legend",
        name: "Legend",
        description: "The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.0",
        length: "2hr 28mins",
        img: "legend.jpg",
        youtube: "https://www.youtube.com/embed/yI3v6KfR9Mw"
    },
    {
        id: 12,
        key: "southpaw",
        name: "Southpaw",
        description: "Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].sport],
        rate: "7.5",
        length: "2hr 4mins",
        img: "southpaw.jpg",
        youtube: "https://www.youtube.com/embed/Mh2ebPxhoLs"
    },
    {
        id: 13,
        key: "bridge-of-spies",
        name: "Bridge of Spies",
        description: "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.7",
        length: "2hr 22mins",
        img: "bridge-of-spies.jpg",
        youtube: "https://www.youtube.com/embed/mBBuzHrZBro"
    },
    {
        id: 14,
        key: "ant-man",
        name: "Ant-Man",
        description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "7.4",
        length: "1hr 57mins",
        img: "ant-man.jpg",
        youtube: "https://www.youtube.com/embed/pWdKf3MneyI"
    },
    {
        id: 15,
        key: "fast-and-furious-7",
        name: "Fast & Furious 7",
        description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "2hr 17mins",
        img: "fast-and-furious-7.jpg",
        youtube: "https://www.youtube.com/embed/Skpu5HaVkOc"
    },
    {
        id: 16,
        key: "tracers",
        name: "Tracers",
        description: "Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "5.6",
        length: "1hr 34mins",
        img: "tracers.jpg",
        youtube: "https://www.youtube.com/embed/yqpfHeXqbQ8"
    },
    {
        id: 17,
        key: "running-scared",
        name: "Running Scared",
        description: "A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.4",
        length: "2hr 2mins",
        img: "running-scared.jpg",
        youtube: "https://www.youtube.com/embed/Ekr_IH1OL38"
    },
    {
        id: 18,
        key: "the-hangover",
        name: "The Hangover",
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy],
        rate: "7.8",
        length: "1hr 40mins",
        img: "the-hangover.jpg",
        youtube: "https://www.youtube.com/embed/tcdUhdOlz9M"
    },
    {
        id: 19,
        key: "project-x",
        name: "Project X",
        description: "3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "6.7",
        length: "1hr 28mins",
        img: "project-x.jpg",
        youtube: "https://www.youtube.com/embed/3BEIhA8CcY0"
    },
    {
        id: 20,
        key: "the-dark-knight",
        name: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "9.0",
        length: "2hr 32mins",
        img: "the-dark-knight.jpg",
        youtube: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 21,
        key: "the-tournament",
        name: "The Tournament",
        description: "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "6.1",
        length: "1hr 35mins",
        img: "the-tournament.jpg",
        youtube: "https://www.youtube.com/embed/i8NDAxGsfK8"
    },
    {
        id: 22,
        key: "the-matrix",
        name: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "8.7",
        length: "2hr 16mins",
        img: "the-matrix.jpg",
        youtube: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        id: 23,
        key: "bad-boys",
        name: "Bad Boys",
        description: "Two hip detectives protect a murder witness while investigating a case of stolen heroin.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "6.8",
        length: "1hr 59mins",
        img: "bad-boys.jpg",
        youtube: "https://www.youtube.com/embed/6GaPkMqAS44"
    }
];
//# sourceMappingURL=movie.mock-data.js.map

/***/ }),

/***/ "../../../../../src/betsson-app-challenge/assets/mock/movie.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genreType; });
var genreType = {
    action: "action",
    adventure: "adventure",
    biography: "biography",
    comedy: "comedy",
    crime: "crime",
    drama: "drama",
    history: "history",
    mystery: "mystery",
    scifi: "scifi",
    sport: "sport",
    thriller: "thriller"
};
//# sourceMappingURL=movie.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map