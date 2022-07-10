export class Product {
  id: number | undefined;
  sku: string | undefined;
  name: string | undefined;
  description: string | undefined;
  unitPrice: number = 0;
  imageUrl: string | undefined;
  active: boolean | undefined;
  unitsInStock: number | undefined;
  dateCreated: Date | undefined;
  lastUpdated: Date | undefined;

}
