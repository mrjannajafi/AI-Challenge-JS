"use strict";
// 🟢🟡🟠🔴🔵🟣
// چالش ۱: جمع اعداد یک آرایه
// یک تابع بنویسید که یک آرایه از اعداد را به عنوان ورودی بگیرد و مجموع آن‌ها را برگرداند.

/*
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // خروجی: 15
*/

// 🟢🟡🟠🔴🔵🟣
// چالش ۲: پیدا کردن بزرگترین عدد در آرایه
// یک تابع بنویسید که بزرگترین عدد را در یک آرایه از اعداد پیدا کند.
/*
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 2, 3, 4, 5]));
*/

// 🟢🟡🟠🔴🔵🟣
// چالش ۳: فیلتر کردن اعداد زوج
// یک تابع بنویسید که یک آرایه از اعداد را به عنوان ورودی بگیرد و فقط اعداد زوج را برگرداند.

/*
function filterEvenNumbers(arr) {
  const evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
console.table(filterEvenNumbers([1, 2, 3, 4, 5]));
*/

// 🟢🟡🟠🔴🔵🟣
// چالش ۴: معکوس کردن یک رشته
// یک تابع بنویسید که یک رشته را به عنوان ورودی بگیرد و آن را معکوس کند.

/*
const reverseString = function (str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
console.log(reverseString(`Hi , I'm Marjan`));
*/

// 🟢🟡🟠🔴🔵🟣
// چالش ۵: استفاده از توابع با آرایه‌ها
// یک تابع بنویسید که یک آرایه از رشته‌ها را به عنوان ورودی بگیرد و طول هر رشته را در یک آرایه جدید برگرداند.

/*
const lengthArray = function (arr) {
  let lengthSrting = [];
  for (let i = 0; i < arr.length; i++) {
    lengthSrting.push(arr[i].length);
  }
  return lengthSrting 
};
console.table(lengthArray(['marjan' , 'zahra' , 'nastaran']));
*/

// 🟢🟡🟠🔴🔵🟣
// چالش 6 : تبدیل دما از سلسیوس به فارنهایت
// یک تابع بنویسید که دما را در سلسیوس به فارنهایت تبدیل کند.
// سپس با استفاده از یک آرایه از دماهای سلسیوس، دماهای معادل فارنهایت را محاسبه کنید
// F = (1.8 × C) + 32

/*
const calctemper = function (arr) {
  let fahrenheit = [];
  for (let i = 0; i < arr.length; i++) {
    fahrenheit.push(1.8 * arr[i] + 32);
  }
  return fahrenheit;
};
console.table(calctemper( [0, 20, 30]));
*/

// 🟢🟡🟠🔴🔵🟣
// چالش 7: شمارش حروف در یک رشته
// چ یک تابع بنویسید که یک رشته را به عنوان ورودی بگیرد و تعداد حروف هر حرف را در آن رشته محاسبه کند. 
// از شیء برای ذخیره نتایج استفاده کنید.

