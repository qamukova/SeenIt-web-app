function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-post-post-module"], {
  /***/
  "./src/app/components/comment/comment-create/comment-create.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/comment/comment-create/comment-create.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CommentCreateComponent */

  /***/
  function srcAppComponentsCommentCommentCreateCommentCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentCreateComponent", function () {
      return CommentCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../+store */
    "./src/app/+store/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["f"];

    var CommentCreateComponent = /*#__PURE__*/function () {
      function CommentCreateComponent(store) {
        _classCallCheck(this, CommentCreateComponent);

        this.store = store;
        this.postCommentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CommentCreateComponent, [{
        key: "postComment",
        value: function postComment() {
          var _this = this;

          var body = this.createCommentForm.value;
          body.postId = this.postId;
          body.author = this.username ? this.username : localStorage.getItem('username');
          this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUsername"]).subscribe(function (username) {
            _this.username = username; // if (!username) { body.author = localStorage.getItem('username'); }
            // body.author = username;
          });
          this.postCommentEmitter.emit(body);
          this.createCommentForm.reset();
        }
      }]);

      return CommentCreateComponent;
    }();

    CommentCreateComponent.ɵfac = function CommentCreateComponent_Factory(t) {
      return new (t || CommentCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    CommentCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentCreateComponent,
      selectors: [["app-comment-create"]],
      viewQuery: function CommentCreateComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.createCommentForm = _t.first);
        }
      },
      inputs: {
        postId: "postId"
      },
      outputs: {
        postCommentEmitter: "postCommentEmitter"
      },
      decls: 6,
      vars: 1,
      consts: [["id", "commentForm", 3, "ngSubmit"], ["f", "ngForm"], ["required", "", "ngModel", "", "name", "content", "type", "text", "cols", "30", "rows", "10"], ["type", "submit", "value", "Add Comment", "id", "btnPostComment", 3, "disabled"]],
      template: function CommentCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentCreateComponent_Template_form_ngSubmit_0_listener() {
            return ctx.postComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["#commentForm[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 400px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n  height: 6em;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtY3JlYXRlL2NvbW1lbnQtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtY3JlYXRlL2NvbW1lbnQtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29tbWVudEZvcm0+KiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiNjb21tZW50Rm9ybT5sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2NvbW1lbnRGb3JtPnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA2ZW07XHJcbn1cclxuXHJcbiNjb21tZW50Rm9ybT5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment-create',
          templateUrl: './comment-create.component.html',
          styleUrls: ['./comment-create.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, {
        createCommentForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['f']
        }],
        postId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        postCommentEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/comment/comment-info/comment-info.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/comment/comment-info/comment-info.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CommentInfoComponent */

  /***/
  function srcAppComponentsCommentCommentInfoCommentInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentInfoComponent", function () {
      return CommentInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../+store */
    "./src/app/+store/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommentInfoComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentInfoComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.deleteComment(ctx_r1.commentInfo["_id"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CommentInfoComponent = /*#__PURE__*/function () {
      function CommentInfoComponent(store) {
        _classCallCheck(this, CommentInfoComponent);

        this.store = store;
        this.deleteCommentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CommentInfoComponent, [{
        key: "deleteComment",
        value: function deleteComment(id) {
          this.deleteCommentEmitter.emit(id);
        }
      }, {
        key: "isAuthor",
        value: function isAuthor(commentInfo) {
          var _this2 = this;

          this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUsername"]).subscribe(function (username) {
            if (username) {
              _this2.authorName = username;
            }

            _this2.authorName = localStorage.getItem('username');
          }); // return commentInfo.author === localStorage.getItem('username');

          return commentInfo.author === this.authorName;
        }
      }]);

      return CommentInfoComponent;
    }();

    CommentInfoComponent.ɵfac = function CommentInfoComponent_Factory(t) {
      return new (t || CommentInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    CommentInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentInfoComponent,
      selectors: [["app-comment-info"]],
      inputs: {
        commentInfo: "commentInfo"
      },
      outputs: {
        deleteCommentEmitter: "deleteCommentEmitter"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "post", "post-content"], [1, "info"], ["class", "deleteLink", 3, "click", 4, "ngIf"], [1, "deleteLink", 3, "click"]],
      template: function CommentInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommentInfoComponent_button_5_Template, 2, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.commentInfo["content"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" submitted by ", ctx.commentInfo["author"], " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor(ctx.commentInfo));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".post[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background: #ddf9c0;\r\n  margin: 15px;\r\n  position: relative;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: inline-block;\r\n  vert-align: top;\r\n  min-height: 100px;\r\n  padding: 10px;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 1.5em;\r\n}\r\n\r\n.voting[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  text-align: center;\r\n}\r\n\r\n.post-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  vertical-align: top;\r\n  padding: 10px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  font-size: 1.25em;\r\n  text-decoration: none;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  color: #999999;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  line-height: 0.75em;\r\n  cursor: pointer;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow.clicked[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQtaW5mby9jb21tZW50LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWluZm8vY29tbWVudC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2RkZjljMDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydC1hbGlnbjogdG9wO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwgaW1nIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5yYW5rIHtcclxuICB3aWR0aDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yYW5rPnNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEuNWVtO1xyXG59XHJcblxyXG4udm90aW5nIHtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRpdGxlIGF7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY29udHJvbHMuYWN0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udHJvbHMuYWN0aW9uIGEge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250cm9scy5hY3Rpb24gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdzpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdy5jbGlja2VkIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment-info',
          templateUrl: './comment-info.component.html',
          styleUrls: ['./comment-info.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, {
        commentInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteCommentEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post-create/post-create.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/post/post-create/post-create.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PostCreateComponent */

  /***/
  function srcAppComponentsPostPostCreatePostCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function () {
      return PostCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../+store */
    "./src/app/+store/index.ts");
    /* harmony import */


    var _store_posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../+store/posts/actions */
    "./src/app/+store/posts/actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["f"];

    var PostCreateComponent = /*#__PURE__*/function () {
      function PostCreateComponent(store) {
        _classCallCheck(this, PostCreateComponent);

        this.store = store;
      }

      _createClass(PostCreateComponent, [{
        key: "createPost",
        value: function createPost() {
          var body = this.createPostForm.value; // body.author = localStorage.getItem('username');

          this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUsername"]).subscribe(function (username) {
            body.author = username;
          });
          this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUserId"]).subscribe(function (userId) {
            body.creatorPostId = userId;
          });
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_2__["createPost"]({
            body: body
          }));
        }
      }]);

      return PostCreateComponent;
    }();

    PostCreateComponent.ɵfac = function PostCreateComponent_Factory(t) {
      return new (t || PostCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    PostCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostCreateComponent,
      selectors: [["app-post-create"]],
      viewQuery: function PostCreateComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.createPostForm = _t.first);
        }
      },
      decls: 22,
      vars: 1,
      consts: [["id", "viewSubmit"], [1, "submitArea"], [1, "submitArea", "formContainer"], ["id", "submitForm", 1, "submitForm", 3, "ngSubmit"], ["f", "ngForm"], ["required", "", "name", "url", "ngModel", "", "type", "text"], ["required", "", "name", "title", "ngModel", "", "type", "text"], ["required", "", "name", "imageURL", "ngModel", "", "type", "text"], ["name", "description", "ngModel", ""], ["id", "btnSubmitPost", "value", "Submit", "type", "submit", 3, "disabled"]],
      template: function PostCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please, fill out the form. A thumbnail image is not required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostCreateComponent_Template_form_ngSubmit_7_listener() {
            return ctx.createPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Link URL:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Link Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Link Thumbnail Image (optional):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description (optional):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-create',
          templateUrl: './post-create.component.html',
          styleUrls: ['./post-create.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, {
        createPostForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['f']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post-details/post-details.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/post/post-details/post-details.component.ts ***!
    \************************************************************************/

  /*! exports provided: PostDetailsComponent */

  /***/
  function srcAppComponentsPostPostDetailsPostDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function () {
      return PostDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../+store */
    "./src/app/+store/index.ts");
    /* harmony import */


    var _store_posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../+store/posts/actions */
    "./src/app/+store/posts/actions.ts");
    /* harmony import */


    var _store_comments_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../+store/comments/actions */
    "./src/app/+store/comments/actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _post_info_post_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../post-info/post-info.component */
    "./src/app/components/post/post-info/post-info.component.ts");
    /* harmony import */


    var _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../comment/comment-create/comment-create.component */
    "./src/app/components/comment/comment-create/comment-create.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _comment_comment_info_comment_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../comment/comment-info/comment-info.component */
    "./src/app/components/comment/comment-info/comment-info.component.ts");

    function PostDetailsComponent_app_comment_info_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comment-info", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCommentEmitter", function PostDetailsComponent_app_comment_info_4_Template_app_comment_info_deleteCommentEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteComment($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var commentInfo_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentInfo", commentInfo_r1);
      }
    }

    var PostDetailsComponent = /*#__PURE__*/function () {
      function PostDetailsComponent(store, route, toastr) {
        _classCallCheck(this, PostDetailsComponent);

        this.store = store;
        this.route = route;
        this.toastr = toastr;
        this.commentErrorMsg$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getCommentErrorMessage"]);
      }

      _createClass(PostDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.id = this.route.snapshot.params.id;
          this.post = this.route.snapshot.data.post;
          this.store.dispatch(_store_comments_actions__WEBPACK_IMPORTED_MODULE_3__["getAllComments"]({
            id: this.id
          }));
          this.comments$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getCommentAll"]);
          this.commentErrorMsg$.subscribe(function (message) {
            return _this3.showToasterMsg(message);
          });
        }
      }, {
        key: "showToasterMsg",
        value: function showToasterMsg(errMsg) {
          if (errMsg) {
            this.toastr.error(errMsg, 'Error!');
          }
        }
      }, {
        key: "loadComments",
        value: function loadComments() {
          this.store.dispatch(_store_comments_actions__WEBPACK_IMPORTED_MODULE_3__["getAllComments"]({
            id: this.id
          }));
          this.comments$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getCommentAll"]);
        }
      }, {
        key: "postComment",
        value: function postComment(body) {
          this.store.dispatch(_store_comments_actions__WEBPACK_IMPORTED_MODULE_3__["createComment"]({
            body: body
          }));
          this.loadComments();
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(id) {
          this.store.dispatch(_store_comments_actions__WEBPACK_IMPORTED_MODULE_3__["deleteComment"]({
            id: id
          }));
          this.loadComments();
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]({
            id: id
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_2__["getPostByIdCansel"]());
        }
      }]);

      return PostDetailsComponent;
    }();

    PostDetailsComponent.ɵfac = function PostDetailsComponent_Factory(t) {
      return new (t || PostDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    PostDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostDetailsComponent,
      selectors: [["app-post-details"]],
      decls: 6,
      vars: 6,
      consts: [["id", "viewComments"], [3, "post", "desc", "deletePostEmitter"], [1, "post", "post-content"], [3, "postId", "postCommentEmitter"], [3, "commentInfo", "deleteCommentEmitter", 4, "ngFor", "ngForOf"], [3, "commentInfo", "deleteCommentEmitter"]],
      template: function PostDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-post-info", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deletePostEmitter", function PostDetailsComponent_Template_app_post_info_deletePostEmitter_1_listener($event) {
            return ctx.deletePost($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-comment-create", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("postCommentEmitter", function PostDetailsComponent_Template_app_comment_create_postCommentEmitter_3_listener($event) {
            return ctx.postComment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostDetailsComponent_app_comment_info_4_Template, 1, 1, "app-comment-info", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx.post)("desc", ctx.post.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postId", ctx.post._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.comments$));
        }
      },
      directives: [_post_info_post_info_component__WEBPACK_IMPORTED_MODULE_7__["PostInfoComponent"], _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_8__["CommentCreateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _comment_comment_info_comment_info_component__WEBPACK_IMPORTED_MODULE_10__["CommentInfoComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: [".post[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background: #ddf9c0;\r\n  margin: 15px;\r\n  position: relative;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: inline-block;\r\n  vert-align: top;\r\n  min-height: 100px;\r\n  padding: 10px;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 1.5em;\r\n}\r\n\r\n.voting[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  text-align: center;\r\n}\r\n\r\n.post-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  vertical-align: top;\r\n  padding: 10px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  font-size: 1.25em;\r\n  text-decoration: none;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  color: #999999;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  line-height: 0.75em;\r\n  cursor: pointer;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow.clicked[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n}\r\n\r\n\r\n\r\n#commentForm[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 400px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n  height: 6em;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LWRldGFpbHMvcG9zdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2RkZjljMDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydC1hbGlnbjogdG9wO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwgaW1nIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5yYW5rIHtcclxuICB3aWR0aDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yYW5rPnNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEuNWVtO1xyXG59XHJcblxyXG4udm90aW5nIHtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRpdGxlIGF7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY29udHJvbHMuYWN0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udHJvbHMuYWN0aW9uIGEge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250cm9scy5hY3Rpb24gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdzpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdy5jbGlja2VkIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLyogQ29tbWVudCBDU1MgKi9cclxuXHJcbiNjb21tZW50Rm9ybT4qIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2NvbW1lbnRGb3JtPmxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jY29tbWVudEZvcm0+dGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBoZWlnaHQ6IDZlbTtcclxufVxyXG5cclxuI2NvbW1lbnRGb3JtPmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-details',
          templateUrl: './post-details.component.html',
          styleUrls: ['./post-details.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post-edit/post-edit.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/post/post-edit/post-edit.component.ts ***!
    \******************************************************************/

  /*! exports provided: PostEditComponent */

  /***/
  function srcAppComponentsPostPostEditPostEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostEditComponent", function () {
      return PostEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../+store */
    "./src/app/+store/index.ts");
    /* harmony import */


    var _store_posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../+store/posts/actions */
    "./src/app/+store/posts/actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/post.service */
    "./src/app/core/services/post.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["f"];

    function PostEditComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostEditComponent_ng_template_7_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.editPost();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Link URL:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_7_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.post.url = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Link Title:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_7_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.post.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link Thumbnail Image (optional):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_7_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.post.imageURL = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description (optional):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_7_Template_textarea_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.post.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.post.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.post.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.post.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.post.imageURL);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.post.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
      }
    }

    var PostEditComponent = /*#__PURE__*/function () {
      // post$: Observable<PostInfo>;
      function PostEditComponent(store, route, postService, toastr) {
        _classCallCheck(this, PostEditComponent);

        this.store = store;
        this.route = route;
        this.postService = postService;
        this.toastr = toastr;
      }

      _createClass(PostEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var id = this.route.snapshot.params.id;
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_2__["getPostById"]({
            id: id
          })); // this.post$ = this.store.select(getByIdPost);

          this.postService.getById(id).subscribe(function (data) {
            _this4.post = data;
          });
        }
      }, {
        key: "editPost",
        value: function editPost() {
          var id = this.route.snapshot.params.id;
          var body = this.editPostForm.value;
          this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUsername"]).subscribe(function (username) {
            body.author = username;
          });
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_2__["editPost"]({
            body: body,
            id: id
          })); // body.author = localStorage.getItem('username');
          // this.store.select(getPostErrorMessage).subscribe((error) => {
          //   if (error) { return this.toastr.error(error, 'Error!'); }
          // });
        }
      }]);

      return PostEditComponent;
    }();

    PostEditComponent.ɵfac = function PostEditComponent_Factory(t) {
      return new (t || PostEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    PostEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostEditComponent,
      selectors: [["app-post-edit"]],
      viewQuery: function PostEditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editPostForm = _t.first);
        }
      },
      decls: 8,
      vars: 1,
      consts: [["id", "viewEdit"], [1, "submitArea"], [1, "submitArea", "formContainer"], [")", "", 3, "ngIf"], ["id", "editPostForm", 1, "submitForm", 3, "ngSubmit"], ["f", "ngForm"], ["required", "", "name", "url", "type", "text", 3, "ngModel", "ngModelChange"], ["required", "", "name", "title", "type", "text", 3, "ngModel", "value", "ngModelChange"], ["required", "", "name", "imageUrl", "type", "text", 3, "ngModel", "ngModelChange"], ["required", "", "name", "description", 3, "ngModel", "ngModelChange"], ["id", "btnEditPost", "type", "submit", "value", "Edit Post", 3, "disabled"]],
      template: function PostEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please, fill out the form. A thumbnail image/description is not required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostEditComponent_ng_template_7_Template, 15, 6, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LWVkaXQvcG9zdC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-edit',
          templateUrl: './post-edit.component.html',
          styleUrls: ['./post-edit.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _core_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, {
        editPostForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['f']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post-info/post-info.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/post/post-info/post-info.component.ts ***!
    \******************************************************************/

  /*! exports provided: PostInfoComponent */

  /***/
  function srcAppComponentsPostPostInfoPostInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostInfoComponent", function () {
      return PostInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../+store */
    "./src/app/+store/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PostInfoComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.rank);
      }
    }

    function PostInfoComponent_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.post["description"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/posts/edit", a1];
    };

    function PostInfoComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostInfoComponent_ng_template_18_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deletePost(ctx_r3.post["_id"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.post["_id"]));
      }
    }

    var _c1 = function _c1(a1) {
      return ["/posts/details", a1];
    }; // import * as PostsActions from '../../../+store/posts/actions';


    var PostInfoComponent = /*#__PURE__*/function () {
      function PostInfoComponent(store) {
        _classCallCheck(this, PostInfoComponent);

        this.store = store;
        this.deletePostEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PostInfoComponent, [{
        key: "isAuthor",
        value: function isAuthor(post) {
          var _this5 = this;

          this.store.select(_store__WEBPACK_IMPORTED_MODULE_1__["getAuthUserId"]).subscribe(function (id) {
            return _this5.userId = id;
          }); // return post.author === localStorage.getItem('username');

          return post.creatorPostId === this.userId;
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          this.deletePostEmitter.emit(id); // this.store.dispatch(PostsActions.deletePost({ id }));
        }
      }]);

      return PostInfoComponent;
    }();

    PostInfoComponent.ɵfac = function PostInfoComponent_Factory(t) {
      return new (t || PostInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    PostInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostInfoComponent,
      selectors: [["app-post-info"]],
      inputs: {
        post: "post",
        rank: "rank",
        desc: "desc"
      },
      outputs: {
        deletePostEmitter: "deletePostEmitter"
      },
      decls: 19,
      vars: 11,
      consts: [[1, "post"], ["class", "col rank", 4, "ngIf"], [1, "col", "thumbnail"], [3, "href"], [3, "src"], [1, "post-content"], [1, "title"], [1, "details"], [4, "ngIf"], [1, "info"], [1, "controls"], [1, "action"], [1, "commentsLink", 3, "routerLink"], [3, "ngIf"], [1, "col", "rank"], ["href", "#", 3, "routerLink"], [3, "click"]],
      template: function PostInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostInfoComponent_div_1_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostInfoComponent_p_10_Template, 2, 1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PostInfoComponent_ng_template_18_Template, 6, 3, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rank);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.post["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.post["imgURL"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.post["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.post["title"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" submitted by ", ctx.post == null ? null : ctx.post.author, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.post["_id"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor(ctx.post));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".post[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background: #ddf9c0;\r\n  margin: 15px;\r\n  position: relative;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  min-height: 100px;\r\n  padding: 10px;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 1.5em;\r\n}\r\n\r\n.voting[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  text-align: center;\r\n}\r\n\r\n.post-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  vertical-align: top;\r\n  padding: 10px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 1.25em;\r\n  text-decoration: none;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  color: #999999;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  line-height: 0.75em;\r\n  cursor: pointer;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow.clicked[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 400px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n  height: 6em;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtaW5mby9wb3N0LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC1pbmZvL3Bvc3QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3Qge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNkZGY5YzA7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRodW1ibmFpbCBpbWcge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnJhbmsge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJhbms+c3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMS41ZW07XHJcbn1cclxuXHJcbi52b3Rpbmcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUgYSB7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY29udHJvbHMuYWN0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udHJvbHMuYWN0aW9uIGEge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250cm9scy5hY3Rpb24gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdzpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdy5jbGlja2VkIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI2NvbW1lbnRGb3JtPioge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jY29tbWVudEZvcm0+bGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNjb21tZW50Rm9ybT50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGhlaWdodDogNmVtO1xyXG59XHJcblxyXG4jY29tbWVudEZvcm0+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-info',
          templateUrl: './post-info.component.html',
          styleUrls: ['./post-info.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, {
        post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rank: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        desc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deletePostEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post-list/post-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/post/post-list/post-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: PostListComponent */

  /***/
  function srcAppComponentsPostPostListPostListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostListComponent", function () {
      return PostListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../+store/posts/actions */
    "./src/app/+store/posts/actions.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../+store */
    "./src/app/+store/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/post.service */
    "./src/app/core/services/post.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _post_info_post_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../post-info/post-info.component */
    "./src/app/components/post/post-info/post-info.component.ts");

    function PostListComponent_app_post_info_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post-info", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deletePostEmitter", function PostListComponent_app_post_info_2_Template_app_post_info_deletePostEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deletePost($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1)("rank", i_r2);
      }
    }

    var PostListComponent = /*#__PURE__*/function () {
      function PostListComponent(route, postService, store) {
        _classCallCheck(this, PostListComponent);

        this.route = route;
        this.postService = postService;
        this.store = store;
      }

      _createClass(PostListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.url.subscribe(function (segmentArr) {
            var segment = segmentArr[0];

            if (!segment) {
              _this6.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_1__["getAllPosts"]({}));

              _this6.allPosts$ = _this6.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getPostAll"]);
            } else {
              _this6.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_1__["getUserPosts"]({}));

              _this6.allPosts$ = _this6.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getPostsUser"]);
            }
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_1__["deletePost"]({
            id: id
          }));
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_1__["getAllPosts"]({}));
          this.allPosts$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_2__["getPostAll"]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.store.dispatch(_store_posts_actions__WEBPACK_IMPORTED_MODULE_1__["getAllPostsCancel"]());
        }
      }]);

      return PostListComponent;
    }();

    PostListComponent.ɵfac = function PostListComponent_Factory(t) {
      return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostListComponent,
      selectors: [["app-post-list"]],
      decls: 4,
      vars: 3,
      consts: [["id", "viewCatalog"], [1, "posts"], [3, "post", "rank", "deletePostEmitter", 4, "ngFor", "ngForOf"], [3, "post", "rank", "deletePostEmitter"]],
      template: function PostListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostListComponent_app_post_info_2_Template, 1, 2, "app-post-info", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.allPosts$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _post_info_post_info_component__WEBPACK_IMPORTED_MODULE_7__["PostInfoComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".post[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  background: #ddf9c0;\r\n  margin: 15px;\r\n  position: relative;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  min-height: 100px;\r\n  padding: 10px;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.rank[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 1.5em;\r\n}\r\n\r\n.voting[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n  color: #999999;\r\n  font-weight: bold;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  text-align: center;\r\n}\r\n\r\n.post-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  vertical-align: top;\r\n  padding: 10px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 1.25em;\r\n  text-decoration: none;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  color: #999999;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  text-decoration: none;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  line-height: 0.75em;\r\n  cursor: pointer;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover {\r\n  color: #000000;\r\n}\r\n\r\n.arrow.clicked[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 400px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n  height: 6em;\r\n}\r\n\r\n#commentForm[_ngcontent-%COMP%] > input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3Qge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNkZGY5YzA7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRodW1ibmFpbCBpbWcge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnJhbmsge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJhbms+c3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMS41ZW07XHJcbn1cclxuXHJcbi52b3Rpbmcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUgYSB7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uY29udHJvbHMge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY29udHJvbHMgLmFjdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRyb2xzIC5hY3Rpb24gYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRyb2xzIC5hY3Rpb24gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdzpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5hcnJvdy5jbGlja2VkIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuI2NvbW1lbnRGb3JtPioge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jY29tbWVudEZvcm0+bGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNjb21tZW50Rm9ybT50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGhlaWdodDogNmVtO1xyXG59XHJcblxyXG4jY29tbWVudEZvcm0+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _core_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/post/post-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: PostRoutingModule */

  /***/
  function srcAppComponentsPostPostRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function () {
      return PostRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./post-list/post-list.component */
    "./src/app/components/post/post-list/post-list.component.ts");
    /* harmony import */


    var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post-create/post-create.component */
    "./src/app/components/post/post-create/post-create.component.ts");
    /* harmony import */


    var _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./post-edit/post-edit.component */
    "./src/app/components/post/post-edit/post-edit.component.ts");
    /* harmony import */


    var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post-details/post-details.component */
    "./src/app/components/post/post-details/post-details.component.ts");
    /* harmony import */


    var _core_resolvers_single_post_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../core/resolvers/single-post.resolver */
    "./src/app/core/resolvers/single-post.resolver.ts"); // Modules
    // Components


    var postRoutes = [{
      path: '',
      component: _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__["PostListComponent"],
      data: {
        isLogged: true
      }
    }, {
      path: 'user',
      component: _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__["PostListComponent"],
      data: {
        isLogged: true
      }
    }, {
      path: 'create',
      component: _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"],
      data: {
        isLogged: true
      }
    }, {
      path: 'edit/:id',
      component: _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_4__["PostEditComponent"],
      data: {
        isLogged: true
      }
    }, {
      path: 'details/:id',
      component: _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailsComponent"],
      data: {
        isLogged: true
      },
      resolve: {
        post: _core_resolvers_single_post_resolver__WEBPACK_IMPORTED_MODULE_6__["SinglePostResolver"]
      }
    }];

    var PostRoutingModule = function PostRoutingModule() {
      _classCallCheck(this, PostRoutingModule);
    };

    PostRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PostRoutingModule
    });
    PostRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PostRoutingModule_Factory(t) {
        return new (t || PostRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(postRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(postRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/post/post.module.ts ***!
    \************************************************/

  /*! exports provided: PostModule */

  /***/
  function srcAppComponentsPostPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostModule", function () {
      return PostModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _post_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post-routing.module */
    "./src/app/components/post/post-routing.module.ts");
    /* harmony import */


    var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./post-create/post-create.component */
    "./src/app/components/post/post-create/post-create.component.ts");
    /* harmony import */


    var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post-details/post-details.component */
    "./src/app/components/post/post-details/post-details.component.ts");
    /* harmony import */


    var _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post-edit/post-edit.component */
    "./src/app/components/post/post-edit/post-edit.component.ts");
    /* harmony import */


    var _post_info_post_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./post-info/post-info.component */
    "./src/app/components/post/post-info/post-info.component.ts");
    /* harmony import */


    var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./post-list/post-list.component */
    "./src/app/components/post/post-list/post-list.component.ts");
    /* harmony import */


    var _comment_comment_info_comment_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../comment/comment-info/comment-info.component */
    "./src/app/components/comment/comment-info/comment-info.component.ts");
    /* harmony import */


    var _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../comment/comment-create/comment-create.component */
    "./src/app/components/comment/comment-create/comment-create.component.ts"); // Modules
    // Components


    var PostModule = function PostModule() {
      _classCallCheck(this, PostModule);
    };

    PostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PostModule
    });
    PostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PostModule_Factory(t) {
        return new (t || PostModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _post_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostRoutingModule"]], _post_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostRoutingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostModule, {
        declarations: [_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"], _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailsComponent"], _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_6__["PostEditComponent"], _post_info_post_info_component__WEBPACK_IMPORTED_MODULE_7__["PostInfoComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__["PostListComponent"], _comment_comment_info_comment_info_component__WEBPACK_IMPORTED_MODULE_9__["CommentInfoComponent"], _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_10__["CommentCreateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _post_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostRoutingModule"]],
        exports: [_post_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"], _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailsComponent"], _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_6__["PostEditComponent"], _post_info_post_info_component__WEBPACK_IMPORTED_MODULE_7__["PostInfoComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__["PostListComponent"], _comment_comment_info_comment_info_component__WEBPACK_IMPORTED_MODULE_9__["CommentInfoComponent"], _comment_comment_create_comment_create_component__WEBPACK_IMPORTED_MODULE_10__["CommentCreateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _post_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostRoutingModule"]],
          exports: [_post_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/resolvers/single-post.resolver.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/resolvers/single-post.resolver.ts ***!
    \********************************************************/

  /*! exports provided: SinglePostResolver */

  /***/
  function srcAppCoreResolversSinglePostResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinglePostResolver", function () {
      return SinglePostResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/core/services/post.service.ts");

    var SinglePostResolver = /*#__PURE__*/function () {
      function SinglePostResolver(postService) {
        _classCallCheck(this, SinglePostResolver);

        this.postService = postService;
      }

      _createClass(SinglePostResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.params.id;
          return this.postService.getById(id);
        }
      }]);

      return SinglePostResolver;
    }();

    SinglePostResolver.ɵfac = function SinglePostResolver_Factory(t) {
      return new (t || SinglePostResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]));
    };

    SinglePostResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SinglePostResolver,
      factory: SinglePostResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglePostResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-post-post-module-es5.js.map