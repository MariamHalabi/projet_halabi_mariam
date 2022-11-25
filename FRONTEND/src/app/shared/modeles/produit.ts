export class Produit {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  summary: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    summary: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.summary = summary;
  }
}
