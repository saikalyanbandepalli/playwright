export class cart{
 
    constructor(private page: any) { }
   
    async checkout(firstName:string,lastName:string,postalCode:number) {
       await this.page.pause();
    }
 
}