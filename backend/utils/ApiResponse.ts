

 class ApiResponse {
    private message:string;
    private data?: any;
    private status: number;

    constructor (message:string,status: number,data?: any){
        this.message= message;
        this.status=status;
        this.data= data;

    }


    static success(message:string,status:number,data?: any){
        return new ApiResponse(message,status,data)
    }

   static error(message: string, status:number){

        return new ApiResponse(message,status);
    }

}
export default ApiResponse;