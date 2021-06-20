import { Db, MongoClient, ObjectID } from 'mongodb'

import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'


@Injectable()
export class RestaurantService {
  private db: Db
  private coll = 'restaurants'
  private logger: Logger

  constructor (
    private configService: ConfigService
  ) {
    const mongoUri = configService.get<string>('MONGO_URI')
    const client   = new MongoClient(mongoUri)

    this.logger = new Logger('RestaurantService')

    client.connect(err => {
      if (err) {
        console.error(err)
        return
      }

      this.logger.log('Connected successfully to mongoDB server')

      this.db = client.db('aerodyne')
    })
  }


  async create (data) {
    const coll  = this.db.collection(this.coll)
    const count = await coll.countDocuments()

    const populatedData = {
      ...data,
      ...(!data.status && { status: 'active' }),
      _createdOn: new Date(),
      _isDeleted: false,
      _ref: count + 1,
      _updatedOn: new Date()
    }

    try {
      const { insertedCount, insertedId, ops } = await coll.insertOne(populatedData)
  
      if (insertedCount) {
        const [document] = ops
    
        this.logger.log(`New restaurant added with _id: ${insertedId}`)

        return document
      }

      throw new InternalServerErrorException(`Fail to add Restaurant`)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }

  async getOneByQuery (id: string) {
    const query = {
      _id: new ObjectID(id),
      _isDeleted: false
    }

    return await this.db.collection(this.coll).findOne(query)
  }

  async getAllByQuery () {
    return await this.db.collection(this.coll).find({ _isDeleted: false }).toArray()
  }

  async remove (_id: string) {
    const filter = {
      _id: new ObjectID(_id),
      _isDeleted: false
    }
    const update = {
      $set: {
        _deletedOn: new Date(),
        _isDeleted: true
      }
    }
    const options = { returnDocument: 'after' }
    const { lastErrorObject, value } = await this.db.collection(this.coll).findOneAndUpdate(filter, update, options)

    if (!value) {
      throw new NotFoundException(`Restaurant with ID ${_id} is not found`)
    }
    if (lastErrorObject?.err) {
      throw new InternalServerErrorException(lastErrorObject?.err)
    }

    this.logger.log(`Restaurant with _id: ${_id} has deleted`)

    return value
  }

  async restore (_id: string) {
    const filter = { _id: new ObjectID(_id) }
    const update = {
      $set: {
        _restoredOn: new Date(),
        _isDeleted: false
      }
    }
    const options = { returnDocument: 'after' }
    const { lastErrorObject, value } = await this.db.collection(this.coll).findOneAndUpdate(filter, update, options)

    if (!value) {
      throw new NotFoundException(`Restaurant with ID ${_id} is not found`)
    }
    if (lastErrorObject?.err) {
      throw new InternalServerErrorException(lastErrorObject?.err)
    }

    this.logger.log(`Restaurant with _id: ${_id} has restored`)

    return value
  }

  async update (_id: string, data) {
    const filter = {
      _id: new ObjectID(_id),
      _isDeleted: false
    }
    const update = {
      $set: {
        ...data,
        _updatedOn: new Date()
      }
    }
    const options = { returnDocument: 'after' }
    const { lastErrorObject, value } = await this.db.collection(this.coll).findOneAndUpdate(filter, update, options)

    if (!value) {
      throw new NotFoundException(`Restaurant with ID ${_id} is not found`)
    }
    if (lastErrorObject?.err) {
      throw new InternalServerErrorException(lastErrorObject?.err)
    }

    this.logger.log(`Restaurant with _id: ${_id} has updated`)

    return value
  }
}
