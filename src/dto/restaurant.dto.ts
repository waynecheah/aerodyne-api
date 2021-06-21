import {
  IsIn,
  IsLatitude,
  IsLongitude,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  MaxLength,
  ValidateIf
} from 'class-validator'


class RestaurantDto {
  @IsMongoId()
  @IsOptional()
  readonly _id?: string

  @ValidateIf(o => o.image.length > 0)
  @IsUrl()
  @MaxLength(500)
  @IsOptional()
  readonly image?: string

  @IsLatitude()
  @IsNotEmpty()
  readonly latitude: number

  @IsLongitude()
  @IsNotEmpty()
  readonly longitude: number

  @IsString()
  @Length(2, 10000)
  @IsNotEmpty()
  readonly name: string

  @IsString()
  @Length(2, 100)
  @IsNotEmpty()
  readonly type: string

  @IsIn(['active', 'inactive', 'suspended'])
  @IsOptional()
  readonly status?: string
}


export {
  RestaurantDto
}
