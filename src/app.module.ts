import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { RestaurantResolvers } from './restaurant.resolvers'
import { RestaurantService } from './restaurant.service'


@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot({
      debug: false,
      context: ({ req, connection }) => {
        // subscriptions
        if (connection) {
            return { req: connection.variables }
        }

        // queries and mutations
        return { req }
      },
      formatError: (err) => {
        if (err.extensions) {
            Object.keys(err.extensions).map(prop => {
                if (prop == 'code' || prop == 'exception') return
                delete err.extensions[prop]
            })
        }

        return err
      },
      introspection: true,
      playground: true,
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [],
  providers: [
    RestaurantResolvers,
    RestaurantService
  ]
})
export class AppModule { }
