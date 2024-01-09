import { BASE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';
import { products } from './_products';

function getProducts(start: number, end: number) {
  return products.slice(start, end);
}

export async function generateSitemaps() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const size = 5;
  const start = id * size;
  const end = start + size;
  const products = getProducts(start, end);

  return products.map(product => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: product.lastModified,
  }));
}
