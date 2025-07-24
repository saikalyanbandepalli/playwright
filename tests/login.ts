 
export class login{
    constructor(private page: any) { }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/v1")
 
    }
    async login(username: string, password: string) {
        //page.locator('[data-test="username"]').click();
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        //await this.page.locator('[data-test="login-button"]').click();
        // await this.page.pause()
        await this.page.getByRole('button', { name: 'LOGIN' }).click();
    }
}