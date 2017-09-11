"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var Customer = /** @class */ (function () {
    function Customer() {
        this._customerName = "";
    }
    Object.defineProperty(Customer.prototype, "CustomerName", {
        get: function () {
            return this._customerName;
        },
        set: function (value) {
            if (value.length === 0) {
                throw "Please provide a valid name";
            }
            this._customerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.Validate = function () {
        console.log("Test");
    };
    return Customer;
}());
var AnotherCustomer = /** @class */ (function (_super) {
    __extends(AnotherCustomer, _super);
    function AnotherCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnotherCustomer.prototype.Validate = function () {
        console.log("Another Customer");
    };
    return AnotherCustomer;
}(Customer));
try {
    var address = new Address_1.Address();
    address.Street1;
    address.Street2;
    var cust = new Customer();
    cust.CustomerName = "VipinTyagi";
    console.log(cust.CustomerName);
    cust.Validate();
    cust = new AnotherCustomer();
    cust.Validate();
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=MainIndex.js.map