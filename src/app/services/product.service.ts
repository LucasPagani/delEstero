
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/productos.intercaces.';
//import { Product } from './product.interface'; // Define tu interfaz de producto

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any;

  constructor(private firestore: Firestore) { }

  getProducts() {
    const productsCollection = collection(this.firestore, 'products');
    return getDocs(productsCollection);
  }

  getProducts2(): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'products'); // La colección de Firebase
    return collectionData(productsRef, { idField: 'id' }) as Observable<Product[]>;
  }

 // Obtener productos filtrados por categoría
 getProductsByType(type: string): Observable<Product[]> {
  const productsCollection = collection(this.firestore, 'products');
  const q = type ? query(productsCollection, where("type", "==", type)) : productsCollection;
  return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
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
