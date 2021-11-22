(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/+store/auth/actions.ts":
/*!****************************************!*\
  !*** ./src/app/+store/auth/actions.ts ***!
  \****************************************/
/*! exports provided: ActionTypes, register, registerSuccess, registerFailed, login, loginSuccess, loginFailed, logout, logoutSuccess, logoutFailed, setAuth, setUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFailed", function() { return registerFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailed", function() { return loginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccess", function() { return logoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailed", function() { return logoutFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuth", function() { return setAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const ActionTypes = {
    Register: '[AUTH] Register',
    RegisterSuccess: '[AUTH] Register Success',
    RegisterFailed: '[AUTH] Register Failed',
    Login: '[AUTH] Login',
    LoginSuccess: '[AUTH] Login Success',
    LoginFailed: '[AUTH] Login Failed',
    Logout: '[AUTH] Logout',
    LogoutSuccess: '[AUTH] Logout Success',
    LogoutFailed: '[AUTH] Logout Failed',
    SetAuth: '[AUTH] Set Auth',
    SetUser: '[AUTH] Set User'
};
const register = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.Register, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.RegisterSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.RegisterFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.Login, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.LoginSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.LoginFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.Logout, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logoutSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.LogoutSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logoutFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.LogoutFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.SetAuth, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.SetUser, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/+store/auth/effects.ts":
/*!****************************************!*\
  !*** ./src/app/+store/auth/effects.ts ***!
  \****************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/+store/auth/actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AuthEffects {
    constructor(actions$, authService, router) {
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.register$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["register"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ username, password }) => {
            return this.authService.signUp({ username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
                return _actions__WEBPACK_IMPORTED_MODULE_2__["registerSuccess"]({});
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['/login'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["registerFailed"]({ error: err.error })]));
        })));
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ username, password }) => {
            return this.authService.signIn({ username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((user) => localStorage.setItem('username', user.username)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((user) => {
                return [
                    _actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"]({ username: user.username, userId: user._id }),
                    _actions__WEBPACK_IMPORTED_MODULE_2__["setAuth"]({ auth: (user !== undefined || null) }),
                    _actions__WEBPACK_IMPORTED_MODULE_2__["setUser"]({ user })
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
                // console.log(res);
                // localStorage.setItem('username', username);
                this.router.navigate(['/posts']);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["loginFailed"]({ error: err.error })]));
        })));
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({}) => {
            return this.authService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
                return _actions__WEBPACK_IMPORTED_MODULE_2__["logoutSuccess"]({});
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
                localStorage.clear();
                this.router.navigate(['/login']);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
                // console.log(err.error.error.message);
                return [_actions__WEBPACK_IMPORTED_MODULE_2__["logoutFailed"]({ error: err.error })];
            }));
        })));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+store/auth/reducers.ts":
/*!*****************************************!*\
  !*** ./src/app/+store/auth/reducers.ts ***!
  \*****************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/+store/auth/actions.ts");


const initialState = {
    userId: '',
    username: '',
    auth: false,
    errorMessage: '',
    currentUser: undefined
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["setAuth"], (state, { auth }) => {
    return Object.assign(Object.assign({}, state), { auth });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["registerFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"], (state, { username, userId }) => {
    return Object.assign(Object.assign({}, state), { username, userId });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loginFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["setUser"], (state, action) => {
    return Object.assign(Object.assign({}, state), { currentUser: action.user, userId: action.user._id });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["logoutSuccess"], () => initialState));


/***/ }),

/***/ "./src/app/+store/auth/selectors.ts":
/*!******************************************!*\
  !*** ./src/app/+store/auth/selectors.ts ***!
  \******************************************/
/*! exports provided: getAuth, getUserId, getUsername, getErrorMessage, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return getUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsername", function() { return getUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
const getAuth = (state) => state.auth;
const getUserId = (state) => state.userId;
const getUsername = (state) => state.username;
const getErrorMessage = (state) => state.errorMessage;
const getUser = (state) => state.currentUser;


/***/ }),

/***/ "./src/app/+store/comments/actions.ts":
/*!********************************************!*\
  !*** ./src/app/+store/comments/actions.ts ***!
  \********************************************/
/*! exports provided: ActionTypes, getAllComments, getAllCommentsSuccess, getAllCommentsFailed, createComment, createCommentSuccess, createCommentFailed, deleteComment, deleteCommentSuccess, deleteCommentFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllComments", function() { return getAllComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCommentsSuccess", function() { return getAllCommentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCommentsFailed", function() { return getAllCommentsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentSuccess", function() { return createCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentFailed", function() { return createCommentFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentSuccess", function() { return deleteCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentFailed", function() { return deleteCommentFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const ActionTypes = {
    GetAll: '[COMMENT] GetAll',
    GetAllSuccess: '[COMMENT] GetAllSuccess',
    GetAllFailed: '[COMMENT] GetAllFailed',
    CreateComment: '[COMMENT] CreateComment',
    CreateCommentSuccess: '[COMMENT] CreateCommentSuccess',
    CreateCommentFailed: '[COMMENT] CreateCommentFailed',
    DeleteComment: '[COMMENT] DeleteComment',
    DeleteCommentSuccess: '[COMMENT] DeleteCommentSuccess',
    DeleteCommentFailed: '[COMMENT] DeleteCommentFailed'
};
const getAllComments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetAll, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllCommentsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetAllSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllCommentsFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetAllFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.CreateComment, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCommentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.CreateCommentSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCommentFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.CreateCommentFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.DeleteComment, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCommentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.DeleteCommentSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCommentFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.DeleteCommentFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/+store/comments/effects.ts":
/*!********************************************!*\
  !*** ./src/app/+store/comments/effects.ts ***!
  \********************************************/
/*! exports provided: CommentsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsEffects", function() { return CommentsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/+store/comments/actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/comment.service */ "./src/app/core/services/comment.service.ts");







class CommentsEffects {
    constructor(actions$, commentService) {
        this.actions$ = actions$;
        this.commentService = commentService;
        this.allUserComments$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["getAllComments"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ id }) => {
            return this.commentService.getAllForPost(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((comments) => {
                return _actions__WEBPACK_IMPORTED_MODULE_2__["getAllCommentsSuccess"]({ comments });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["getAllCommentsFailed"]({ error: err.error })]));
        })));
        this.createComment$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ body }) => {
            return this.commentService.createComment(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions__WEBPACK_IMPORTED_MODULE_2__["createCommentSuccess"]({})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["createCommentFailed"]({ error: err.error })]));
        })));
        this.deleteComment$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["deleteComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ id }) => {
            return this.commentService.deleteComment(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions__WEBPACK_IMPORTED_MODULE_2__["deleteCommentSuccess"]({})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCommentFailed"]({ error: err.error })]));
        })));
    }
}
CommentsEffects.ɵfac = function CommentsEffects_Factory(t) { return new (t || CommentsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"])); };
CommentsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsEffects, factory: CommentsEffects.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _core_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+store/comments/reducers.ts":
/*!*********************************************!*\
  !*** ./src/app/+store/comments/reducers.ts ***!
  \*********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/+store/comments/actions.ts");


const initialState = {
    all: [],
    errorMessage: null
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllCommentsSuccess"], (state, { comments }) => {
    return Object.assign(Object.assign({}, state), { all: comments });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllCommentsFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["createCommentFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["deleteCommentFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}));


/***/ }),

/***/ "./src/app/+store/comments/selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/+store/comments/selectors.ts ***!
  \**********************************************/
/*! exports provided: getAll, getErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
const getAll = (state) => state.all;
const getErrorMessage = (state) => state.errorMessage;


/***/ }),

/***/ "./src/app/+store/index.ts":
/*!*********************************!*\
  !*** ./src/app/+store/index.ts ***!
  \*********************************/
/*! exports provided: reducers, getAuthStore, getAuthUsername, getAuthUserId, getIsAuth, getAuthUser, getAuthErrorMessage, getPostStore, getPostAll, getByIdPost, getPostsUser, getPostErrorMessage, getCommentsStore, getCommentAll, getCommentErrorMessage, getRouterStore, getRouterUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthStore", function() { return getAuthStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUsername", function() { return getAuthUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUserId", function() { return getAuthUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuth", function() { return getIsAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUser", function() { return getAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthErrorMessage", function() { return getAuthErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostStore", function() { return getPostStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostAll", function() { return getPostAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByIdPost", function() { return getByIdPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsUser", function() { return getPostsUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostErrorMessage", function() { return getPostErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentsStore", function() { return getCommentsStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentAll", function() { return getCommentAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentErrorMessage", function() { return getCommentErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterStore", function() { return getRouterStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterUrl", function() { return getRouterUrl; });
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/reducers */ "./src/app/+store/auth/reducers.ts");
/* harmony import */ var _posts_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/reducers */ "./src/app/+store/posts/reducers.ts");
/* harmony import */ var _comments_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments/reducers */ "./src/app/+store/comments/reducers.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/selectors */ "./src/app/+store/auth/selectors.ts");
/* harmony import */ var _posts_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/selectors */ "./src/app/+store/posts/selectors.ts");
/* harmony import */ var _comments_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/selectors */ "./src/app/+store/comments/selectors.ts");








const reducers = {
    auth: _auth_reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    posts: _posts_reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    comments: _comments_reducers__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["routerReducer"]
};
/* Auth Selectors */
const getAuthStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('auth');
const getAuthUsername = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAuthStore, _auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUsername"]);
const getAuthUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAuthStore, _auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUserId"]);
const getIsAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAuthStore, _auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getAuth"]);
const getAuthUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAuthStore, _auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]);
const getAuthErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAuthStore, _auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"]);
// export const getIsAuthenticated = createSelector(getIsAuth, auth => !! auth);
/* Post Selectors */
const getPostStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('posts');
const getPostAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getPostStore, _posts_selectors__WEBPACK_IMPORTED_MODULE_6__["getAll"]);
const getByIdPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getPostStore, _posts_selectors__WEBPACK_IMPORTED_MODULE_6__["getById"]);
const getPostsUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getPostStore, _posts_selectors__WEBPACK_IMPORTED_MODULE_6__["getPosts"]);
const getPostErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getPostStore, _posts_selectors__WEBPACK_IMPORTED_MODULE_6__["getErrorMessage"]);
/* Comments Selectors */
const getCommentsStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('comments');
const getCommentAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getCommentsStore, _comments_selectors__WEBPACK_IMPORTED_MODULE_7__["getAll"]);
const getCommentErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getCommentsStore, _comments_selectors__WEBPACK_IMPORTED_MODULE_7__["getErrorMessage"]);
/* Router Selectors */
const getRouterStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('router');
const getRouterUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getRouterStore, (routerState) => routerState ? routerState.state.url : '');


/***/ }),

/***/ "./src/app/+store/posts/actions.ts":
/*!*****************************************!*\
  !*** ./src/app/+store/posts/actions.ts ***!
  \*****************************************/
/*! exports provided: ActionTypes, getAllPosts, getAllPostsSuccess, getAllPostsFailed, getAllPostsCancel, getPostById, getPostByIdSuccess, getPostByIdFailed, getPostByIdCansel, getUserPosts, getUserPostsSuccess, getUserPostsFailed, createPost, createPostSuccess, createPostFailed, editPost, editPostSuccess, editPostFailed, deletePost, deletePostSuccess, deletePostFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostsSuccess", function() { return getAllPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostsFailed", function() { return getAllPostsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostsCancel", function() { return getAllPostsCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostById", function() { return getPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostByIdSuccess", function() { return getPostByIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostByIdFailed", function() { return getPostByIdFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostByIdCansel", function() { return getPostByIdCansel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPosts", function() { return getUserPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPostsSuccess", function() { return getUserPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPostsFailed", function() { return getUserPostsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostSuccess", function() { return createPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostFailed", function() { return createPostFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPost", function() { return editPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPostSuccess", function() { return editPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPostFailed", function() { return editPostFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostSuccess", function() { return deletePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostFailed", function() { return deletePostFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const ActionTypes = {
    GetAll: '[POST] GetAll',
    GetAllSuccess: '[POST] GetAllSuccess',
    GetAllFailed: '[POST] GetAllFailed',
    GetAllCancel: '[POST] GetAllCancel',
    GetPostById: '[POST] GetPostById',
    GetPostByIdSuccess: '[POST] GetPostByIdSuccess',
    GetPostByIdFailed: '[POST] GetPostByIdFailed',
    GetPostByIdCancel: '[POST] GetPostByIdCancel',
    GetUserPosts: '[POST] GetUserPosts',
    GetUserPostsSuccess: '[POST] GetUserPostsSuccess',
    GetUserPostsFailed: '[POST] GetUserPostsFailed',
    CreatePost: '[POST] CretePost',
    CreatePostSuccess: '[POST] CreatePostSuccess',
    CreatePostFailed: '[POST] CreatePostFailed',
    EditPost: '[POST] EditPost',
    EditPostSuccess: '[POST] EditPostSuccess',
    EditPostFailed: '[POST] EditPostFailed',
    DeletePost: '[POST] DeletePost',
    DeletePostSuccess: '[POST] DeletePostSuccess',
    DeletePostFailed: '[POST] DeletePostFailed'
};
const getAllPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetAll, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetAllSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllPostsFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetAllFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getAllPostsCancel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetAllCancel);
const getPostById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetPostById, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPostByIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetPostByIdSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPostByIdFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetPostByIdFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPostByIdCansel = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetPostByIdCancel);
const getUserPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetUserPosts, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetUserPostsSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserPostsFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.GetUserPostsFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.CreatePost, 
// tslint:disable-next-line:ban-types
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.CreatePostSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPostFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.CreatePostFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.EditPost, 
// tslint:disable-next-line:ban-types
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editPostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.EditPostSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editPostFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.EditPostFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.DeletePost, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.DeletePostSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.DeletePostFailed, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/+store/posts/effects.ts":
/*!*****************************************!*\
  !*** ./src/app/+store/posts/effects.ts ***!
  \*****************************************/
/*! exports provided: PostEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEffects", function() { return PostEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/+store/posts/actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/post.service */ "./src/app/core/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class PostEffects {
    constructor(actions$, postService, router) {
        this.actions$ = actions$;
        this.postService = postService;
        this.router = router;
        this.allPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["getAllPosts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.postService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["getAllPostsCancel"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((posts) => _actions__WEBPACK_IMPORTED_MODULE_2__["getAllPostsSuccess"]({ posts })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["getAllPostsFailed"]({ error: err.error })]));
        })));
        this.allUserPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["getUserPosts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.postService.getUserPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userPosts) => _actions__WEBPACK_IMPORTED_MODULE_2__["getUserPostsSuccess"]({ posts: userPosts })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["getUserPostsFailed"]({ error: err.error })]));
        })));
        this.postById$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ id }) => {
            return this.postService.getById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["getPostByIdCansel"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((post) => _actions__WEBPACK_IMPORTED_MODULE_2__["getPostByIdSuccess"]({ post })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["getPostByIdFailed"]({ error: err.error })]));
        })));
        this.createPost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createPost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ body }) => {
            return this.postService.createPost(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions__WEBPACK_IMPORTED_MODULE_2__["createPostSuccess"]({})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['/posts'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["createPostFailed"]({ error: err.error })]));
        })));
        this.editPost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["editPost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ body, id }) => {
            return this.postService.editPost(body, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions__WEBPACK_IMPORTED_MODULE_2__["editPostSuccess"]({})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.router.navigate(['/posts'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["editPostFailed"]({ error: err.error })]));
        })));
        this.postDelete$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ id }) => {
            return this.postService.deletePost(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
                return _actions__WEBPACK_IMPORTED_MODULE_2__["deletePostSuccess"]({});
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
                if (this.router.url !== '/posts') {
                    // return PostsActions.getAllPosts({});
                    this.router.navigate(['/posts']);
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => [_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostFailed"]({ error: err.error })]));
        })));
    }
}
PostEffects.ɵfac = function PostEffects_Factory(t) { return new (t || PostEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PostEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostEffects, factory: PostEffects.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _core_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+store/posts/reducers.ts":
/*!******************************************!*\
  !*** ./src/app/+store/posts/reducers.ts ***!
  \******************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/+store/posts/actions.ts");


const initialState = {
    all: [],
    post: null,
    userPosts: [],
    errorMessage: null
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllPostsSuccess"], (state, { posts }) => {
    return Object.assign(Object.assign({}, state), { all: posts });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getAllPostsFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getPostByIdSuccess"], (state, { post }) => {
    return Object.assign(Object.assign({}, state), { post });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getPostByIdFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getUserPostsSuccess"], (state, { posts }) => {
    return Object.assign(Object.assign({}, state), { userPosts: posts });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["getUserPostsFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["createPostFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["editPostFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["deletePostFailed"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { errorMessage: error });
}));


/***/ }),

/***/ "./src/app/+store/posts/selectors.ts":
/*!*******************************************!*\
  !*** ./src/app/+store/posts/selectors.ts ***!
  \*******************************************/
/*! exports provided: getAll, getById, getPosts, getErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
const getAll = (state) => state.all;
const getById = (state) => state.post;
const getPosts = (state) => state.userPosts;
const getErrorMessage = (state) => state.errorMessage;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authentication/login/login.component */ "./src/app/components/authentication/login/login.component.ts");
/* harmony import */ var _components_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/authentication/register/register.component */ "./src/app/components/authentication/register/register.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
// Modules


// Components





const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _components_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], data: { isLogged: false } },
    { path: 'posts', canActivateChild: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | components-post-post-module */ "components-post-post-module").then(__webpack_require__.bind(null, /*! ./components/post/post.module */ "./src/app/components/post/post.module.ts")).then(m => m.PostModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_shared_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/content/content.component */ "./src/app/components/shared/content/content.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");





// import { Store } from '@ngrx/store';
// import { getRouterUrl, IAppState } from './+store';
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_shared_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/authentication/login/login.component */ "./src/app/components/authentication/login/login.component.ts");
/* harmony import */ var _components_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/authentication/register/register.component */ "./src/app/components/authentication/register/register.component.ts");
/* harmony import */ var _core_interceptors_notification_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/interceptors/notification.interceptor */ "./src/app/core/interceptors/notification.interceptor.ts");
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./+store */ "./src/app/+store/index.ts");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./+store/auth/effects */ "./src/app/+store/auth/effects.ts");
/* harmony import */ var _store_posts_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./+store/posts/effects */ "./src/app/+store/posts/effects.ts");
/* harmony import */ var _store_comments_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./+store/comments/effects */ "./src/app/+store/comments/effects.ts");
// Modules











// Components



// Interceptors


// Reducers & Effects









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_notification_interceptor__WEBPACK_IMPORTED_MODULE_14__["NotificationInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            // StoreRouterConnectingModule.forRoot({
            //   serializer: AppRouterSerializer
            // }),
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_16__["reducers"], {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false
                },
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_auth_effects__WEBPACK_IMPORTED_MODULE_17__["AuthEffects"], _store_posts_effects__WEBPACK_IMPORTED_MODULE_18__["PostEffects"], _store_comments_effects__WEBPACK_IMPORTED_MODULE_19__["CommentsEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _components_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        // StoreRouterConnectingModule.forRoot({
        //   serializer: AppRouterSerializer
        // }),
        _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                    _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _components_authentication_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    // StoreRouterConnectingModule.forRoot({
                    //   serializer: AppRouterSerializer
                    // }),
                    _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_16__["reducers"], {
                        runtimeChecks: {
                            strictStateImmutability: false,
                            strictActionImmutability: false
                        },
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_auth_effects__WEBPACK_IMPORTED_MODULE_17__["AuthEffects"], _store_posts_effects__WEBPACK_IMPORTED_MODULE_18__["PostEffects"], _store_comments_effects__WEBPACK_IMPORTED_MODULE_19__["CommentsEffects"]]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument()
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_notification_interceptor__WEBPACK_IMPORTED_MODULE_14__["NotificationInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/authentication/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/authentication/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+store/auth/actions */ "./src/app/+store/auth/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = ["f"];
class LoginComponent {
    constructor(store) {
        this.store = store;
    }
    login() {
        const { username, password } = this.loginForm.value;
        this.store.dispatch(Object(_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["login"])({ username, password }));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginForm = _t.first);
    } }, decls: 21, vars: 1, consts: [["id", "viewWelcome"], [1, "welcome"], [1, "signup"], ["id", "loginForm", 3, "ngSubmit"], ["f", "ngForm"], ["required", "", "name", "username", "ngModel", "", "type", "text"], ["required", "", "name", "password", "ngModel", "", "type", "password"], ["id", "btnLogin", "value", "Sign In", "type", "submit", 3, "disabled"], [1, "about"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Welcome to SeenIt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Share interesting links and discuss great content. It's what's happening now. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign in or sign up in a second.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { loginForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/components/authentication/register/register.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/authentication/register/register.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+store/auth/actions */ "./src/app/+store/auth/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["f"];
function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords must match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(store) {
        this.store = store;
    }
    register() {
        const { username, password } = this.registerForm.value;
        this.store.dispatch(Object(_store_auth_actions__WEBPACK_IMPORTED_MODULE_1__["register"])({ username, password }));
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.registerForm = _t.first);
    } }, decls: 27, vars: 2, consts: [["id", "viewWelcome"], [1, "welcome"], [1, "signup"], ["id", "registerForm", 3, "ngSubmit"], ["f", "ngForm"], ["required", "", "name", "username", "ngModel", "", "type", "text"], ["required", "", "name", "password", "ngModel", "", "type", "password"], ["pass", "ngModel"], ["required", "", "name", "repeatPass", "ngModel", "", "type", "password"], ["repeatPass", "ngModel"], [4, "ngIf"], ["id", "btnRegister", "value", "Sign Up", "type", "submit", 3, "disabled"], [1, "about"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Repeat Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Welcome to SeenIt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Share interesting links and discuss great content. It's what's happening now. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign in or sign up in a second.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.value !== _r2.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { registerForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/components/shared/content/content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/content/content.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+store */ "./src/app/+store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/register"]; };
function ContentComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return ["/posts"]; };
const _c3 = function () { return ["/posts/create"]; };
const _c4 = function () { return ["/posts/user"]; };
function ContentComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Catalog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MyPosts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
} }
function ContentComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
class ContentComponent {
    constructor(store) {
        this.store = store;
        this.isLogged$ = store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getIsAuth"]);
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 11, vars: 5, consts: [[1, "content"], ["id", "menu"], [1, "title"], ["notLogged", ""], ["logged", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "nav", 3, "routerLink"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContentComponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContentComponent_ng_template_6_Template, 6, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContentComponent_ng_container_8_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx.isLogged$))("ngIfThen", _r2)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["#menu[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: right;\r\n  border: 1px solid black;\r\n  margin: 15px;\r\n  width: 200px;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  background: #ddf9c0;\r\n  font-size: 1.25em;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n  font-size: 1.25em;\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 5px 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]:hover {\r\n  background: #ddf9c0;\r\n}\r\n\r\n.nav.active[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuI21lbnUgLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGRmOWMwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm5hdjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2RkZjljMDtcclxufVxyXG5cclxuLm5hdi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class FooterComponent {
    constructor() {
        this.date = new Date();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 4, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SeenIt SPA \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.date, "yyyy"), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+store */ "./src/app/+store/index.ts");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../+store/auth/actions */ "./src/app/+store/auth/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.username);
} }
class HeaderComponent {
    constructor(store) {
        this.store = store;
        this.isLogged$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getIsAuth"]);
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUsername"]).subscribe((userName) => {
            this.username = userName;
            if (!userName) {
                return this.username = localStorage.getItem('username');
            }
        });
    }
    logout() {
        this.store.dispatch(Object(_store_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])({}));
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 3, consts: [[1, "logo"], [1, "header"], ["id", "profile", 4, "ngIf"], ["id", "profile"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2603");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SeenIt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.isLogged$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%], .header[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n}\r\n\r\n#profile[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: #ffffff;\r\n  text-align: right;\r\n  vertical-align: bottom;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n#profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 5px 10px;\r\n}\r\n\r\n#profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  padding: 5px 10px;\r\n}\r\n\r\n#profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2dvLCAuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuI3Byb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3Byb2ZpbGUgc3BhbiB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbiNwcm9maWxlIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbiNwcm9maWxlIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/components/shared/content/content.component.ts");
// Modules



// Components




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+store */ "./src/app/+store/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../+store/auth/actions */ "./src/app/+store/auth/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AuthGuard {
    constructor(store, authService, router) {
        this.store = store;
        this.authService = authService;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        this.user$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUser"]);
        const user_name = localStorage.getItem('username');
        if (!user_name) {
            return this.router.navigate(['/login']);
        }
        return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(user => user === undefined || null ? this.authService.getUser(user_name) : [user]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            this.store.dispatch(_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["setAuth"]({ auth: (user !== undefined || null) }));
            this.store.dispatch(_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["setUser"]({ user }));
            const isLoggedFromData = childRoute.data.isLogged;
            return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((canContinue) => {
            if (canContinue) {
                return;
            }
            const url = this.router.url;
            this.router.navigateByUrl(url);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ErrorInterceptor {
    constructor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            if (err.status === 401) {
                this.toastr.error(err.error, 'Error!');
                this.router.navigate(['/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/interceptors/notification.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/notification.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: NotificationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationInterceptor", function() { return NotificationInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");







class NotificationInterceptor {
    constructor(authService, toastr, store) {
        this.authService = authService;
        this.toastr = toastr;
        this.store = store;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && event.status === 200) {
                if (req.url.endsWith('login')) {
                    this.toastr.success('Successfully login!', 'Success!');
                }
                else if (req.url.endsWith('register')) {
                    this.toastr.success('Successfully registered!', 'Success!');
                }
                else if (req.url.endsWith('logout')) {
                    this.toastr.success('Successfully logout!', 'Success!');
                }
                else if (req.method === 'DELETE') {
                    this.toastr.success('Successfully deleted!', 'Success!');
                }
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && event.status === 201) {
                if (req.method === 'POST') {
                    this.toastr.success('Successfully created!', 'Success!');
                }
                else if (req.method === 'PUT') {
                    this.toastr.success('Successfully modified!', 'Success!');
                }
            }
        }));
    }
}
NotificationInterceptor.ɵfac = function NotificationInterceptor_Factory(t) { return new (t || NotificationInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
NotificationInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationInterceptor, factory: NotificationInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthService {
    // private options = { withCredentials: true };
    constructor(http) {
        this.http = http;
        this.BASE_URL = `http://localhost:3000/users`;
    }
    signUp(body) {
        return this.http.post(`${this.BASE_URL}/register`, body);
    }
    signIn(body) {
        return this.http.post(`${this.BASE_URL}/login`, body, { withCredentials: true });
    }
    logout() {
        return this.http.post(`${this.BASE_URL}/logout`, {}, { withCredentials: true });
    }
    getUser(username) {
        return this.http.get(`${this.BASE_URL}/${username}`);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/comment.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/comment.service.ts ***!
  \**************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CommentService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/comments';
    }
    getAllForPost(postId) {
        return this.http.get(`${this.BASE_URL}?postId=${postId}`, { withCredentials: true });
    }
    createComment(body) {
        return this.http.post(this.BASE_URL, body, { withCredentials: true });
    }
    deleteComment(id) {
        return this.http.delete(`${this.BASE_URL}/${id}`, { withCredentials: true });
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/post.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/post.service.ts ***!
  \***********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+store */ "./src/app/+store/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");





class PostService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.BASE_URL = `http://localhost:3000/posts`;
        this.BASE_USERS_URL = `http://localhost:3000/users`;
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUsername"]).subscribe((username) => {
            if (!username) {
                this.authorName = localStorage.getItem('username');
                return;
            }
            this.authorName = username;
        });
    }
    getAll() {
        return this.http.get(this.BASE_URL, { withCredentials: true });
    }
    getById(id) {
        return this.http.get(this.BASE_URL + `/${id}`, { withCredentials: true });
    }
    getUserPosts() {
        return this.http.get(`${this.BASE_USERS_URL}/${this.authorName}/posts`, { withCredentials: true });
        // `${this.BASE_URL}/user?author=${this.authorName}`
        // author=${localStorage.getItem('username')}
        // query={"author":"${localStorage.getItem('username')}"}
    }
    getDetails(id) {
        return this.http.get(this.BASE_URL + `/${id}/details`, { withCredentials: true });
        // `/details/${id}`
    }
    createPost(body) {
        return this.http.post(this.BASE_URL, body, { withCredentials: true });
        // `/create`
    }
    editPost(body, id) {
        return this.http.put(this.BASE_URL + `/${id}`, body, { withCredentials: true });
        // `/edit/${id}`
    }
    deletePost(id) {
        return this.http.delete(this.BASE_URL + `/${id}`, { withCredentials: true });
        // `/delete/${id}`
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yamukova2014\Desktop\SeenIt-web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map