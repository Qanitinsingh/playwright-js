
let username = "Nitin";
console.log("Username :", username, "| Type :", typeof username);

let age = 30;
let phonenumbers = [1234567890, 9876543210];

console.log("Age      :", age, "| Type :", typeof age);

// Decimal Number
let salary = 75000.50;
console.log("Salary   :", salary, "| Type :", typeof salary);

// Boolean
const isAutomationQA = true;
console.log("QA       :", isAutomationQA, "| Type :", typeof isAutomationQA);

// String used in Playwright
const baseUrl = "https://playwright.dev";
console.log("Base URL :", baseUrl, "| Type :", typeof baseUrl);

// Number used in Playwright
const timeout = 30000;
console.log("Timeout  :", timeout, "| Type :", typeof timeout);

// Boolean used in Playwright
const headless = false;
console.log("Headless :", headless, "| Type :", typeof headless);

// Undefined
let testData;
console.log("TestData :", testData, "| Type :", typeof testData);

// Null
let response = null;
console.log("Response :", response, "| Type :", typeof response);

// Reassigning let
let browser = "Chrome";
console.log("Browser  :", browser, "| Type :", typeof browser);

browser = "Edge";
console.log("Browser  :", browser, "| Type :", typeof browser);

// const cannot be reassigned
const environment = "QA";
console.log("Env      :", environment, "| Type :", typeof environment);