import { Address } from "./Address";
class Customer {
    private _customerName: string = "";

    public set CustomerName(value: string) {
        if (value.length === 0) {
            throw "Please provide a valid name";

        }
        this._customerName = value;
    }

    public get CustomerName(): string {
        return this._customerName;
    }


    Validate() {
        console.log("Test");
    }
}
class AnotherCustomer extends Customer {
    Validate() {
        console.log("Another Customer");
    }
}
try {
    var address = new Address();
    address.Street1;
    address.Street2
    var cust = new Customer();
    cust.CustomerName = "VipinTyagi";
    console.log(cust.CustomerName);
    cust.Validate();
    cust = new AnotherCustomer();
    cust.Validate();
} catch (error) {
    console.log(error);

}
