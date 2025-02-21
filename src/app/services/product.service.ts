
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, getDoc, doc, updateDoc } from '@angular/fire/firestore';
//import { Product } from './product.interface'; // Define tu interfaz de producto

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  getProducts() {
    const productsCollection = collection(this.firestore, 'Productos');
    return getDocs(productsCollection);
  }

  getProduct(id: any) {
    const productDoc = doc(this.firestore, 'products', id);
    return getDoc(productDoc);
  }

  createProduct(product: any) {
    const productsCollection = collection(this.firestore, 'products');
    return addDoc(productsCollection, product);
  }

  updateProduct(id: string, product: any) {
    const productDoc = doc(this.firestore, 'products', id);
    return updateDoc(productDoc, { ...product });
  }
}
