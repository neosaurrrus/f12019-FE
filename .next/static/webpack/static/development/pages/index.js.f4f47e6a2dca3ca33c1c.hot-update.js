webpackHotUpdate("static/development/pages/index.js",{

/***/ "./queries/queries.js":
/*!****************************!*\
  !*** ./queries/queries.js ***!
  \****************************/
/*! exports provided: GET_DRIVERS_QUERY, GET_TEAMS_QUERY, GET_TEAM_QUERY, GET_DRIVER_QUERY, CREATE_DRIVER_MUTATION, CREATE_TEAM_MUTATION, DELETE_DRIVER_MUTATION, DELETE_TEAM_MUTATION, UPDATE_TEAM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DRIVERS_QUERY", function() { return GET_DRIVERS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEAMS_QUERY", function() { return GET_TEAMS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEAM_QUERY", function() { return GET_TEAM_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DRIVER_QUERY", function() { return GET_DRIVER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_DRIVER_MUTATION", function() { return CREATE_DRIVER_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TEAM_MUTATION", function() { return CREATE_TEAM_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DRIVER_MUTATION", function() { return DELETE_DRIVER_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TEAM_MUTATION", function() { return DELETE_TEAM_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TEAM_MUTATION", function() { return UPDATE_TEAM_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation($id:ID!, $name:String!, $founded: Int!){\n        updateTeam(name:$name, founded:$founded){\n            name\n            founded\n        }\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation($id: ID!) {\n    deleteTeam(id: $id) {\n      id\n      name\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation($id: ID!) {\n    deleteDriver(\n      id:$id\n    ){\n        id\n        firstName\n        lastName\n        nationality\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation($name: String!, $founded: Int!) {\n    addTeam(name: $name, founded: $founded) \n    {\n      name\n      founded\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation($firstName: String!, $lastName: String!, $nationality:String!, $teamId:ID!) {\n        addDriver(firstName: $firstName, lastName: $lastName, nationality: $nationality, teamId:$teamId) {\n            firstName\n            lastName\n            nationality\n            team{\n                name\n            }\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query($id: ID){\n        driver(id:$id) {\n            id\n            firstName\n            lastName\n            nationality\n            team{\n                name\n                drivers{\n                    id\n                    firstName\n                    lastName\n                }\n            }\n\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    {\n        drivers {\n            id\n            firstName\n            lastName\n            nationality\n            team{\n                name\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query($id: ID) {\n        team(id:$id){\n            id\n            name\n            founded\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    {\n        teams{\n            name\n            founded\n            id\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_TEAMS_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var GET_TEAM_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());
var GET_DRIVERS_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3());
var GET_DRIVER_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4());
var CREATE_DRIVER_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5());
var CREATE_TEAM_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject6());
var DELETE_DRIVER_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject7());
var DELETE_TEAM_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject8());
var UPDATE_TEAM_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject9());


/***/ })

})
//# sourceMappingURL=index.js.f4f47e6a2dca3ca33c1c.hot-update.js.map