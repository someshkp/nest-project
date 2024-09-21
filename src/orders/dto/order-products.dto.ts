import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class OrderProductsDto {
  @IsNotEmpty({ message: 'Product Id can not be empty.' })
  id: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Price should be number and decimal precision 2' },
  )
  @IsPositive({ message: 'Price cannot be negative.' })
  product_unit_price: number;

  @IsNumber({}, { message: 'Product quantity should be number' })
  @IsPositive({ message: 'Product quantity cannot be negative.' })
  product_quantity: number;
}
