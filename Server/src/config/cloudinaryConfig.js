import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from './serverConfig.js'

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

export async function uploadOnCloudinary(localFilePath) {
  try {
    if (!localFilePath) {
      throw new Error('No file path provided')
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    })
    // Once the file is uploaded from server to cloudinary, delete the file from server
    fs.unlinkSync(localFilePath)
    return response
  } catch (error) {
    // remove the locally saved temporary file as the upload operation got failed
    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath)
    }
    return null
  }
}
