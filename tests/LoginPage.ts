export class LoginPage{
    constructor(private page:any){}
    async goto(){
        await this.page.goto("https://www.saucedemo.com/v1/")
    }
    async login(username: string, password: string){
                 await this.page.locator('[data-test="username"]').fill('standard_user');
                await this.page.locator('[data-test="password"]').fill('secret_sauce');
                await this.page.getByRole('button', { name: 'LOGIN' }).dblclick();
    }
}