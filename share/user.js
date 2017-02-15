"use strict";
var validator = require("email-validator");
var User = (function () {
    function User() {
        this.ambno = "";
        this.asrtype = "D2";
        this.ambemail = "";
        this.ambaddr = "";
        this.atktokenid = "";
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.ambemail);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRTNDO0lBQUE7UUFDRSxVQUFLLEdBQVMsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsYUFBUSxHQUFTLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBUSxFQUFFLENBQUM7SUFNdkIsQ0FBQztJQUhHLDJCQUFZLEdBQVo7UUFDQSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLFlBQUksT0FZaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGFtYm5vOiBzdHJpbmc9XCJcIjtcclxuICBhbWJiZ25kdDogRGF0ZTtcclxuICBhc3J0eXBlOnN0cmluZz1cIkQyXCI7XHJcbiAgYW1iZW1haWw6IHN0cmluZz1cIlwiO1xyXG4gIGFtYmFkZHI6c3RyaW5nPVwiXCI7XHJcbiAgYXRrdG9rZW5pZDpzdHJpbmc9XCJcIjtcclxuXHJcblxyXG4gICAgaXNWYWxpZEVtYWlsKCkge1xyXG4gICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmFtYmVtYWlsKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0=