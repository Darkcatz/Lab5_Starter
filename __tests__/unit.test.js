// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//PhoneNumber tests
test("333-333-3333 is a Valid Phone number", () =>{
  expect(isPhoneNumber('333-333-3333')).toBe(true);
});

test("421-124-1234 is a Valid Phone number", () =>{
  expect(isPhoneNumber('421-124-1234')).toBe(true);
});

test("421-124-123 is not a Valid Phone number", () =>{
  expect(isPhoneNumber('421-124-123')).toBe(false);
});

test("3 a is not Valid Phone number", () =>{
  expect(isPhoneNumber('3')).toBe(false);
});

//isEmail tests
test("bob@gmail.com is a Valid Email", () =>{
  expect(isEmail('bob@gmail.com')).toBe(true);
});

test("billy@ucsd.ca is a Valid Email", () =>{
  expect(isEmail('billy@ucsd.com')).toBe(true);
});

test("chickenatgmail.com is not a Valid Email", () =>{
  expect(isEmail('chickenatgmail.com')).toBe(false);
});

test("ilovefood.com is not a Valid Email", () =>{
  expect(isEmail('ilovefood.com')).toBe(false);
});

//is Strong password tests
test("AppleEater402 is a Strong Password", () =>{
  expect(isStrongPassword('AppleEater402')).toBe(true);
});

test("ILoveMac_ch4 is a Strong Password", () =>{
  expect(isStrongPassword('ILoveMac_ch4')).toBe(true);
});

test("FF is not a Strong Password", () =>{
  expect(isStrongPassword('FF')).toBe(false);
});

test("ilovefood.com is not a Strong Password", () =>{
  expect(isStrongPassword('ilovefood.com')).toBe(false);
});

//isDate Tests
test("12/12/2020 is a Valid Date", () =>{
expect(isDate('12/12/2020')).toBe(true);
});

test("3/16/2024 is a Valid Date", () =>{
  expect(isDate('3/16/2024')).toBe(true);
});

test("255/4/23 is not a Valid Date", () =>{
  expect(isDate('255/4/23')).toBe(false);
});

test("12/12/12 is not a Valid Date", () =>{
  expect(isDate('12/12/12')).toBe(false);
});

//IsHexColor Tests
test("#ffffff is a Hex Code", () =>{
expect(isHexColor('#ffffff')).toBe(true);
});

test("#25ff34 is a Hex Code", () =>{
  expect(isHexColor('#25ff34')).toBe(true);
});

test("#zzzzzz is not a Hex Code", () =>{
  expect(isHexColor('#zzzzzz')).toBe(false);
});

test("#12345678 is not a Hex Code", () =>{
  expect(isHexColor('#12345678')).toBe(false);
});