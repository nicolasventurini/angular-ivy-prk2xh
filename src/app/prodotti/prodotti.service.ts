import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';

@Injectable()
export class ProdottiService {
  getProdotti(): Prodotto[] {
    return [
      {
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2021',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
        imageUrl:
          'https://www.paraide.com/webres/catalog/xl/AccuformSpringBraceLeafRake79.jpg',
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2021',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'https://m.media-amazon.com/images/I/81-VfpVRKRL.jpg',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2021',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'https://m.media-amazon.com/images/I/31BgeyAS3DS.jpg',
      },
      {
        productId: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2021',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl:
          'https://lzd-img-global.slatic.net/g/p/b00d9f8cf8c67212b93f7ffaa6d4a064.jpg_720x720q80.jpg',
      },
      {
        productId: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2020',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl:
          'https://i.pcmag.com/imagery/roundups/01l4AvaewFPRvEV3gAY8iO2-2..v1630352113.jpg',
      },
    ];
  }
}
