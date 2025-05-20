import { IsEmail, IsNotEmpty, IsString, Matches, Min } from "class-validator";


export class RegisterDto {


    @IsString()
    @IsNotEmpty({ message: "First name is required" })
    firstName: string;

    @IsString()
    @IsNotEmpty({ message: "Last name is required" })
    lastName: string;
    @IsEmail()
    @IsString()
    @IsNotEmpty({ message: "Email is required" })
    email: string;


    @IsString()
    @IsNotEmpty({ message: "Password is required" })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {message:"Password must have atleast 8 characters including lower case and upper case letters,numbers and special characters"}
    )
    password: string;
}