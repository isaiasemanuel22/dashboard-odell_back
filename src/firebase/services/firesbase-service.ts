import { Bucket } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private readonly bucket: Bucket

  constructor() {
    const serviceAccount = require('../services/dashboard.json'); // Reemplaza con tu archivo de credenciales

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${serviceAccount.projectId}.firebaseio.com`,
        storageBucket: `${serviceAccount.projectId}.appspot.com`,
      });

    this.bucket = admin.storage().bucket();
  }
/*
  async uploadImage(file: Express.Multer.File): Promise<string> {
    const fileName = `${uuidv4()}-${file.originalname}`;
    const fileUpload = this.bucket.file(fileName);

    return new Promise((resolve, reject) => {
      const stream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      stream.on('error', (error) => {
        console.error('Error uploading to Firebase:', error);
        reject(error);
      });

      stream.on('finish', async () => {
        try {
          const publicUrl = await fileUpload.getSignedUrl({
            action: 'read',
            expires: '03-01-2500',
          });
          resolve(publicUrl[0]);
        } catch (error) {
          console.error('Error generating public URL:', error);
          reject(error);
        }
      });

      stream.end(file.buffer);
    });
  }

  async deleteImage(fileName: string): Promise<void> {
    try {
      await this.bucket.file(fileName).delete();
      console.log(`Successfully deleted ${fileName} from Firebase.`);
    } catch (error) {
      console.error('Error deleting image from Firebase:', error);
      throw error;
    }
  }*/
}