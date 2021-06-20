import {
  IsIn,
  IsLatitude,
  IsLongitude,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length
} from 'class-validator'


class RestaurantDto {
  @IsMongoId()
  @IsOptional()
  readonly _id?: string

  @IsString()
  @Length(1, 200)
  @IsOptional()
  readonly image: string

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
  @Length(2, 100)
  @IsOptional()
  readonly status?: string
}


export {
  RestaurantDto
}
