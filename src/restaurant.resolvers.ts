import { UsePipes, ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { RestaurantDto } from './dto'
import { RestaurantService } from './restaurant.service'


@Resolver('Restaurant')
export class RestaurantResolvers {
  constructor (
    private readonly restaurantService: RestaurantService
  ) { }

  @Query()
  async restaurant (
    @Args('_id') id: string
  ) {
    return this.restaurantService.getOneByQuery(id)
  }

  @Query()
  async restaurants () {
    return this.restaurantService.getAllByQuery()
  }

  @Mutation()
  @UsePipes(
    new ValidationPipe({})
  )
  async createRestaurant (
    @Args('input') data: RestaurantDto
  ) {
    return await this.restaurantService.create(data)
  }

  @Mutation()
  async removeRestaurant (
    @Args('_id') id: string
  ) {
    return await this.restaurantService.remove(id)
  }

  @Mutation()
  async restoreRestaurant (
    @Args('_id') id: string
  ) {
    return await this.restaurantService.restore(id)
  }

  @Mutation()
  @UsePipes(
    new ValidationPipe({})
  )
  async updateRestaurant (
    @Args('input') data: RestaurantDto
  ) {
    return await this.restaurantService.update(data._id, data)
  }
}
