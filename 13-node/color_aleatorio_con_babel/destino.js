"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Realizar un programa que genere un color aleatorio en formato RGB(canal rojo, verde y azul entre 0 y 255) y lo muestre por consola.Este estará implementado en un archivo llamado color.js
// La funcionalidad debe estar implementada dentro de una clase y deberá utilizar sintaxis ES6(const, let, arrow function y template string).
// Convertir este código ES6 a JS5 con Babel online.Realizar esta conversión en forma automática dentro de un proyecto node.js que utilice Babel CLI
var Color = /*#__PURE__*/_createClass(function Color() {
  _classCallCheck(this, Color);

  _defineProperty(this, "randomColor", function () {
    return Math.floor(Math.random() * 255);
  });

  this.colorRGB = "".concat(this.randomColor(), ", ").concat(this.randomColor(), ", ").concat(this.randomColor());
});

var color = new Color();
console.log(color.colorRGB);
