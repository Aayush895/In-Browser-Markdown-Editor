import multer from 'multer'
import path from 'path'
import fs from 'fs'
import os from 'os'

// tmpdir provides a temporary directory parh that's guaranteed to be writable
// Adding 'public' to the path doesn't provide any additional benefits in the temporary directory context
// The files in os.tmpdir() are typically meant to be temporary - they're just intermediary storage before being uploaded to your cloud storage
const uploadDir = path.join(os.tmpdir(), 'public', 'temp')

// Create directory if it doesn't exist
fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

export const upload = multer({ storage })
