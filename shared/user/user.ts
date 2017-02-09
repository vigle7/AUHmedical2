export class User {
  id: string;
  password: string;

    isValidID(){
    // 依照字母的編號排列，存入陣列備用。
    const letters = new Array('A', 'B', 'C', 'D', 
        'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 
        'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
        'X', 'Y', 'W', 'Z', 'I', 'O');
    // 儲存各個乘數
    let multiply = new Array(1, 9, 8, 7, 6, 5, 
                            4, 3, 2, 1);
    let nums = new Array(2);
    let firstChar;
    let firstNum;
    let lastNum;
    let total = 0;
    // 撰寫「正規表達式」。第一個字為英文字母，
    // 第二個字為1或2，後面跟著8個數字，不分大小寫。
    let regExpID=/^[a-z](1|2)\d{8}$/i; 
    // 使用「正規表達式」檢驗格式
    if (this.id.search(regExpID)==-1) {
      // 基本格式錯誤
    alert("請仔細填寫身份證號碼");
    return false;
    } else {
    // 取出第一個字元和最後一個數字。
    firstChar = this.id.charAt(0).toUpperCase();
    lastNum = this.id.charAt(9);
    }
    // 找出第一個字母對應的數字，並轉換成兩位數數字。
    for (let i=0; i<26; i++) {
    if (firstChar == letters[i]) {
      firstNum = i + 10;
      nums[0] = Math.floor(firstNum / 10);
      nums[1] = firstNum - (nums[0] * 10);
      break;
    } 
    }
    // 執行加總計算
    for(let i=0; i<multiply.length; i++){
      if (i<2) {
        total += nums[i] * multiply[i];
      } else {
        total += parseInt(this.id.charAt(i-1)) * 
                multiply[i];
      }
    }
    // 和最後一個數字比對
    if ((10 - (total % 10))!= lastNum) {
    alert("身份證號碼寫錯了！");
    return false;
    } 
    return true;
  }
}