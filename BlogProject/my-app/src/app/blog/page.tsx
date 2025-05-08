import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

async function fetchPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    cache: 'no-store', // Dinamik veri için önbelleği devre dışı bırak
  });
  if (!res.ok) {
    throw new Error('Yazılar alınamadı');
  }
  return res.json();
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <Container className="mt-5">
      <h1>Blog</h1>
      {posts.map((post: any) => (
        <Card key={post._id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}