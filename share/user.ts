var validator = require("email-validator");

export class User {
  ambno: string="";
  ambbgndt: Date;
  asrtype:string="D2";
  ambemail: string="";
  ambaddr:string="";
  atktokenid:string="";


    isValidEmail() {
    return validator.validate(this.ambemail);
  }
}


