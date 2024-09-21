import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class userSignInDto {
  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsEmail({}, { message: 'Please provide a valid email.' })
  email: string;

  @IsNotEmpty({ message: 'Password must not be empty' })
  @MinLength(5, { message: 'minimum character should be 5.' })
  password: string;
}
