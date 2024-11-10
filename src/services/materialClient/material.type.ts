export interface Material {
  name: string;
  materialType: string;
  unit: string;
  quantityInStock: number;
  pricePerUnit: number;
  supplier: string;
  criticalStockLevel: number;
}
