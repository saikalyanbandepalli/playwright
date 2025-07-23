import {test,expect} from '@playwright/test';
import { LoginPage } from './LoginPage';
import {users} from './credentials'; 

for(let user of users){
    test(`login_test_case_${user.username}`,async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(user.username, user.password);
    })
}
 
 