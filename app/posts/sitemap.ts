import { BASE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';
import { posts } from './_posts';

function getPosts(start: number, end: number) {
  return posts.slice(start, end);
}

export async function generateSitemaps() {
  return [{ id: 'pageType_1' }, { id: 'pageType_2' }, { id: 'pageType_3' }, { id: 'pageType_4' }];
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  const [pageType, pageNumber] = id.split('_');

  const size = 5;
  const start = parseInt(pageNumber) * size;
  const end = start + size;
  const posts = getPosts(start, end);

  return posts.map(post => ({
    url: `${BASE_URL}/posts/${post.id}`,
    lastModified: post.lastModified,
  }));
}
