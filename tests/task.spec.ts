import {test} from "@playwright/test";
import {users} from "./credentials"; 
import { cart } from "./cart";
import { login } from "./login";
 
for(let user of users){
test(`${user.testcase}`,async({page})=>{
  const loginpageObj=new login(page);
  await loginpageObj.goto()
  await loginpageObj.login(user.username,user.password);
  const cartpageObj=new cart(page);
  cartpageObj.checkout(user.firstName,user.lastName,user.postalCode)
 
})
}
 