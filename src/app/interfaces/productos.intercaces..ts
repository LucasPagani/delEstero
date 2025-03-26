export interface Product {
  id: string;
  type: string;
  category: string;  // ✅ Asegurando que category esté presente
  name: string;
  price: number;
  description: string;
  stock: number;
  code: string;
}
