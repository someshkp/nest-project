import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { userSignInDto } from './user-signin.dto';

export class userSignupDto extends userSignInDto {
  @IsNotEmpty({ message: 'Name can not be empty' })
  @IsString({ message: 'Name must be string' })
  name: string;
}
