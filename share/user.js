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
    User.prototype.isTaiwanID = function () {
        var re = new RegExp(/^[A-Z]\d{9}$/);
        return re.test(this.ambno);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRTNDO0lBQUE7UUFDRSxVQUFLLEdBQVMsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsYUFBUSxHQUFTLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBUSxFQUFFLENBQUM7SUFXdkIsQ0FBQztJQVJDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHlCQUFVLEdBQVY7UUFDQyxJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLFlBQUksT0FpQmhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBhbWJubzogc3RyaW5nPVwiXCI7XG4gIGFtYmJnbmR0OiBEYXRlO1xuICBhc3J0eXBlOnN0cmluZz1cIkQyXCI7XG4gIGFtYmVtYWlsOiBzdHJpbmc9XCJcIjtcbiAgYW1iYWRkcjpzdHJpbmc9XCJcIjtcbiAgYXRrdG9rZW5pZDpzdHJpbmc9XCJcIjtcblxuXG4gIGlzVmFsaWRFbWFpbCgpIHtcbiAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuYW1iZW1haWwpO1xuICB9XG5cbiAgaXNUYWl3YW5JRCgpIHsgXG4gICBsZXQgcmUgPSBuZXcgUmVnRXhwKC9eW0EtWl1cXGR7OX0kLyk7XG4gICByZXR1cm4gcmUudGVzdCh0aGlzLmFtYm5vKTtcbiAgfVxufVxuXG5cbiJdfQ==