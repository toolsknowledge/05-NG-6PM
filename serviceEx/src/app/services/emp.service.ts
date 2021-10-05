//import Injectable
//Injectable is predefined class
//Injectable class available in @angular/core package
//Injectable used to create the service
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export default class EmpService{
     public getEmployees():any{
        return [{"e_id":"e101","e_name":"e_one","e_sal":10000},
                {"e_id":"e102","e_name":"e_two","e_sal":20000},
                {"e_id":"e103","e_name":"e_three","e_sal":30000},
                {"e_id":"e104","e_name":"e_four","e_sal":40000},
                {"e_id":"e105","e_name":"e_five","e_sal":50000}];
     }
     public getSalaryStatment():any{
        return [{"e_id":"e101","net_sal":12000},
                {"e_id":"e102","net_sal":24000},
                {"e_id":"e103","net_sal":36000},
                {"e_id":"e104","net_sal":48000},
                {"e_id":"e105","net_sal":60000}]
     }
}