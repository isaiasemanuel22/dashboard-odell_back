import {Injectable } from '@nestjs/common'
import { FirebaseRepository } from 'src/firebase/services/firebase-repository.service';
import { Product } from '../../commons/models/Product.entity';

@Injectable()
export class ProductsService {

  constructor(private readonly dbFiresbase:FirebaseRepository) {
  }

  async getProducts():Promise<Product[]>{
    
    const snapshot = await this.dbFiresbase.firesbaseApp().collection('products').get();

    let products:Product[] = [];
    
    snapshot.forEach((doc)=> {
      let product = {
        id:doc.id,
        ...doc.data()
      } as Product;
      products.push(product);
   })
   return products;
  }

  async addProductFirebase(product:Product){
    return await this.dbFiresbase.firesbaseApp().collection('products').add(product);
  }

  async addSupplementFirebase(product:Product){
    return await this.dbFiresbase.firesbaseApp().collection('supplements').add(product);
  }

}

