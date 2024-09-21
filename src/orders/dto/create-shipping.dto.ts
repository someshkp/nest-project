import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateShippingDto {
  @IsNotEmpty({ message: 'Phone Number cannot be empty' })
  @IsString({ message: 'Phone format should be string' })
  phone: string;

  @IsOptional()
  @IsString({ message: 'Name should be string' })
  name: string;

  @IsNotEmpty({ message: 'Address cannot be empty' })
  @IsString({ message: 'Address format should be string' })
  address: string;

  @IsNotEmpty({ message: 'City cannot be empty' })
  @IsString({ message: 'City format should be string' })
  city: string;

  @IsNotEmpty({ message: 'PostCode cannot be empty' })
  @IsString({ message: 'PostCode format should be string' })
  postCode: string;

  @IsNotEmpty({ message: 'State cannot be empty' })
  @IsString({ message: 'State format should be string' })
  state: string;

  @IsNotEmpty({ message: 'Country cannot be empty' })
  @IsString({ message: 'Country format should be string' })
  country: string;
}
