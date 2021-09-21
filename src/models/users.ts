import { model, Schema, Model } from 'mongoose'
import { IUser } from '../infra/database.types'

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  token: { type: String },
})

const User: Model<IUser> = model('Users', UserSchema)

export default User