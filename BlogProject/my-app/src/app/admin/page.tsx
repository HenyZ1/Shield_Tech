'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import Heading from '@tiptap/extension-heading';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaHome, FaBlog, FaBox, FaUsers, FaEye, FaSun, FaMoon } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';

// TipTap için özel toolbar bileşeni
const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('Resim URL’sini girin:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addYoutubeVideo = () => {
    const url = window.prompt('YouTube URL’sini girin:');
    if (url) {
      editor.chain().focus().setYoutubeVideo({ src: url }).run();
    }
  };

  return (
    <div className="mb-2 d-flex flex-wrap gap-2">
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        Bold
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        Italic
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        Liste
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        Alıntı
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        Kod Bloğu
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run()}
      >
        Tablo
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => {
          const url = window.prompt('Bağlantı URL’sini girin:');
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
      >
        Bağlantı Ekle
      </Button>
      <Button variant="outline-primary" size="sm" onClick={addImage}>
        Resim Ekle
      </Button>
      <Button variant="outline-primary" size="sm" onClick={addYoutubeVideo}>
        Video Ekle
      </Button>
    </div>
  );
};

export default function AdminDashboard() {
  const [posts, setPosts] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publishStatus, setPublishStatus] = useState<'draft' | 'published' | 'scheduled'>('draft');
  const [publishDate, setPublishDate] = useState<Date | null>(null);
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productStock, setProductStock] = useState<number>(0);
  const [productImageUrl, setProductImageUrl] = useState('');
  const [editPost, setEditPost] = useState<any | null>(null);
  const [editProduct, setEditProduct] = useState<any | null>(null);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [postFilterStatus, setPostFilterStatus] = useState<string>('all');
  const [postFilterDateStart, setPostFilterDateStart] = useState<Date | null>(null);
  const [postFilterDateEnd, setPostFilterDateEnd] = useState<Date | null>(null);
  const [productFilterStatus, setProductFilterStatus] = useState<string>('all');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });
  const router = useRouter();

  // Tema değiştiğinde localStorage'a kaydet ve body sınıfını güncelle
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }
  }, [theme]);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageExtension,
      Link.configure({
        openOnClick: false,
      }),
      Youtube.configure({
        inline: false,
        width: 480,
        height: 270,
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Blockquote,
      CodeBlock,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts', { credentials: 'include' });
        const data = await res.json();
        if (res.ok) {
          setPosts(data);
        } else {
          router.push('/login');
        }
      } catch (error) {
        router.push('/login');
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products', { credentials: 'include' });
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
        } else {
          router.push('/login');
        }
      } catch (error) {
        router.push('/login');
      }
    };

    const fetchSubscribers = async () => {
      try {
        const res = await fetch('/api/subscribers', { credentials: 'include' });
        const data = await res.json();
        if (res.ok) {
          setSubscribers(data);
        } else {
          router.push('/login');
        }
      } catch (error) {
        router.push('/login');
      }
    };

    fetchPosts();
    fetchProducts();
    fetchSubscribers();
  }, [router]);

  useEffect(() => {
    if (editPost && editor) {
      editor.commands.setContent(editPost.content);
      setTitle(editPost.title);
      setPublishStatus(editPost.status || 'draft');
      setPublishDate(editPost.publishDate ? new Date(editPost.publishDate) : null);
      setCategory(editPost.category || '');
      setTags(editPost.tags || []);
      setMetaTitle(editPost.metaTitle || '');
      setMetaDescription(editPost.metaDescription || '');
      setSlug(editPost.slug || '');
      setFeaturedImageUrl(editPost.featuredImageUrl || '');
      setImagePreview(editPost.featuredImageUrl || null);
    }
  }, [editPost, editor]);

  useEffect(() => {
    if (editProduct) {
      setProductName(editProduct.name);
      setProductDescription(editProduct.description);
      setProductPrice(editProduct.price || 0);
      setProductStock(editProduct.stock || 0);
      setProductImageUrl(editProduct.imageUrl);
      setImagePreview(editProduct.imageUrl);
    }
  }, [editProduct]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'post' | 'product') => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        if (type === 'post') {
          setFeaturedImageUrl('');
        } else {
          setProductImageUrl('');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return featuredImageUrl || productImageUrl;
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        return data.url;
      } else {
        toast.error('Görsel yüklenirken hata oluştu!');
        return '';
      }
    } catch (error) {
      toast.error('Görsel yüklenirken hata oluştu!');
      return '';
    }
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImage();
      const payload = {
        title,
        content,
        status: publishStatus,
        publishDate: publishStatus === 'scheduled' ? publishDate : null,
        category,
        tags,
        metaTitle,
        metaDescription,
        slug,
        featuredImageUrl: imageUrl,
      };

      if (editPost) {
        const res = await fetch(`/api/posts/${editPost._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          credentials: 'include',
        });
        const updatedPost = await res.json();
        if (res.ok) {
          setPosts(posts.map((post) => (post._id === editPost._id ? updatedPost : post)));
          setEditPost(null);
          toast.success(`"${title}" başarıyla güncellendi!`);
        }
      } else {
        const res = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          credentials: 'include',
        });
        const newPost = await res.json();
        if (res.ok) {
          setPosts([newPost, ...posts]);
          toast.success(`"${title}" başarıyla eklendi!`);
        }
      }
      setTitle('');
      setContent('');
      setPublishStatus('draft');
      setPublishDate(null);
      setCategory('');
      setTags([]);
      setMetaTitle('');
      setMetaDescription('');
      setSlug('');
      setFeaturedImageUrl('');
      setImageFile(null);
      setImagePreview(null);
      editor?.commands.setContent('');
      setShowPostModal(false);
    } catch (error) {
      console.error('Hata:', error);
      toast.error('Bir hata oluştu!');
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImage();
      const payload = {
        name: productName,
        description: productDescription,
        price: productPrice,
        stock: productStock,
        imageUrl,
      };

      if (editProduct) {
        const res = await fetch('/api/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editProduct._id, ...payload }),
          credentials: 'include',
        });
        const updatedProduct = await res.json();
        if (res.ok) {
          setProducts(products.map((product) => (product._id === editProduct._id ? updatedProduct : product)));
          setEditProduct(null);
          toast.success(`"${productName}" başarıyla güncellendi!`);
        }
      } else {
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          credentials: 'include',
        });
        const newProduct = await res.json();
        if (res.ok) {
          setProducts([newProduct, ...products]);
          toast.success(`"${productName}" başarıyla eklendi!`);
        }
      }
      setProductName('');
      setProductDescription('');
      setProductPrice(0);
      setProductStock(0);
      setProductImageUrl('');
      setImageFile(null);
      setImagePreview(null);
      setShowProductModal(false);
    } catch (error) {
      console.error('Hata:', error);
      toast.error('Bir hata oluştu!');
    }
  };

  const handlePostEdit = (post: any) => {
    setEditPost(post);
    setShowPostModal(true);
  };

  const handleProductEdit = (product: any) => {
    setEditProduct(product);
    setShowProductModal(true);
  };

  const handlePostDelete = async (id: string) => {
    if (confirm('Bu yazıyı silmek istediğinizden emin misiniz?')) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        if (res.ok) {
          setPosts(posts.filter((post) => post._id !== id));
          toast.success('Yazı başarıyla silindi!');
        } else {
          toast.error('Yazı silinirken hata oluştu!');
        }
      } catch (error) {
        toast.error('Bir hata oluştu!');
      }
    }
  };

  const handleProductDelete = async (id: string) => {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      try {
        const res = await fetch('/api/products', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
          credentials: 'include',
        });
        if (res.ok) {
          setProducts(products.filter((product) => product._id !== id));
          toast.success('Ürün başarıyla silindi!');
        } else {
          toast.error('Ürün silinirken hata oluştu!');
        }
      } catch (error) {
        toast.error('Bir hata oluştu!');
      }
    }
  };

  const handleClosePostModal = () => {
    setShowPostModal(false);
    setEditPost(null);
    setTitle('');
    setContent('');
    setPublishStatus('draft');
    setPublishDate(null);
    setCategory('');
    setTags([]);
    setMetaTitle('');
    setMetaDescription('');
    setSlug('');
    setFeaturedImageUrl('');
    setImageFile(null);
    setImagePreview(null);
    editor?.commands.setContent('');
  };

  const handleCloseProductModal = () => {
    setShowProductModal(false);
    setEditProduct(null);
    setProductName('');
    setProductDescription('');
    setProductPrice(0);
    setProductStock(0);
    setProductImageUrl('');
    setImageFile(null);
    setImagePreview(null);
  };

  const handleLogout = () => {
    document.cookie = 'token=; Max-Age=0; Path=/';
    router.push('/login');
  };

  const filteredPosts = posts.filter((post) => {
    let matches = true;
    if (postFilterStatus !== 'all') {
      matches = matches && post.status === postFilterStatus;
    }
    if (postFilterDateStart) {
      matches = matches && new Date(post.createdAt) >= postFilterDateStart;
    }
    if (postFilterDateEnd) {
      matches = matches && new Date(post.createdAt) <= postFilterDateEnd;
    }
    return matches;
  });

  const filteredProducts = products.filter((product) => {
    let matches = true;
    if (productFilterStatus !== 'all') {
      matches = matches && (productFilterStatus === 'inStock' ? product.stock > 0 : product.stock === 0);
    }
    return matches;
  });

  return (
    <motion.div
      className="admin-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      {/* Sidebar */}
      <div className="sidebar">
        <h3><span className='text-danger'>Shield</span> Tech</h3>
        <div
          className={`sidebar-item ${activeSection === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveSection('dashboard')}
        >
          <FaHome /> Dashboard
        </div>
        <hr />
        <div
          className={`sidebar-item ${activeSection === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveSection('posts')}
        >
          <FaBlog /> Blog Yazıları
        </div>
        <div
          className={`sidebar-item ${activeSection === 'products' ? 'active' : ''}`}
          onClick={() => setActiveSection('products')}
        >
          <FaBox /> Ürünlerimiz
        </div>
        <div
          className={`sidebar-item ${activeSection === 'subscribers' ? 'active' : ''}`}
          onClick={() => setActiveSection('subscribers')}
        >
          <FaUsers /> Aboneler
        </div>
        <hr />
        <motion.div
          className="sidebar-item"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />} {theme === 'light' ? 'Gece Modu' : 'Gündüz Modu'}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header-row">
          <h1>{activeSection === 'dashboard' ? 'Dashboard' : activeSection === 'posts' ? 'Blog Yazıları' : activeSection === 'products' ? 'Ürünlerimiz' : 'Aboneler'}</h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt className="me-2" /> Çıkış Yap
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <hr />
            <div className="dashboard-cards">
              <div className="dashboard-card">
                <h4>Toplam Blog Yazısı</h4>
                <p>{posts.length}</p>
                <small>Geçen aya göre: +{Math.floor(Math.random() * 10)}%</small>
              </div>
              <div className="dashboard-card">
                <h4>Toplam Ürün</h4>
                <p>{products.length}</p>
                <small>Geçen aya göre: +{Math.floor(Math.random() * 10)}%</small>
              </div>
              <div className="dashboard-card">
                <h4>Toplam Abone</h4>
                <p>{subscribers.length}</p>
                <small>Geçen aya göre: +{Math.floor(Math.random() * 10)}%</small>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Yazıları Section */}
        {activeSection === 'posts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <hr />
            <div className="section-header">
              <h2>Blog Yazıları</h2>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="add-btn" onClick={() => setShowPostModal(true)}>
                  <FaPlus /> Yeni Yazı Ekle
                </Button>
              </motion.div>
            </div>

            {/* Filtreleme */}
            <div className="mb-3 d-flex flex-wrap gap-3">
              <Form.Group>
                <Form.Label>Durum</Form.Label>
                <Form.Select
                  value={postFilterStatus}
                  onChange={(e) => setPostFilterStatus(e.target.value)}
                >
                  <option value="all">Tümü</option>
                  <option value="draft">Taslak</option>
                  <option value="published">Yayında</option>
                  <option value="scheduled">Zamanlanmış</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Başlangıç Tarihi</Form.Label>
                <DatePicker
                  selected={postFilterDateStart}
                  onChange={(date: Date | null) => setPostFilterDateStart(date)}
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bitiş Tarihi</Form.Label>
                <DatePicker
                  selected={postFilterDateEnd}
                  onChange={(date: Date | null) => setPostFilterDateEnd(date)}
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                />
              </Form.Group>
            </div>

            {/* Yazı Ekle/Düzenle Modal */}
            <Modal show={showPostModal} onHide={handleClosePostModal} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>{editPost ? 'Yazıyı Düzenle' : 'Yeni Yazı Ekle'}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handlePostSubmit}>
                  <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Yazı Başlığı</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Yazı Başlığı"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="content">
                    <Form.Label>Yazı İçeriği</Form.Label>
                    <MenuBar editor={editor} />
                    <EditorContent editor={editor} style={{ border: '1px solid var(--border-color)', minHeight: '300px', padding: '10px' }} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                      <option value="">Kategori Seç</option>
                      <option value="teknoloji">Teknoloji</option>
                      <option value="guvenlik">Güvenlik</option>
                      <option value="inovasyon">İnovasyon</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="tags">
                    <Form.Label>Etiketler (virgülle ayır)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="örn: teknoloji, güvenlik"
                      value={tags.join(', ')}
                      onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag))}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="featuredImage">
                    <Form.Label>Öne Çıkan Görsel</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImageChange(e, 'post')}
                    />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Önizleme"
                        style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '10px' }}
                      />
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="metaTitle">
                    <Form.Label>Meta Başlık (SEO)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="60 karaktere kadar"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      maxLength={60}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="metaDescription">
                    <Form.Label>Meta Açıklama (SEO)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="160 karaktere kadar"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      maxLength={160}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="slug">
                    <Form.Label>URL Slug</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ornek-yazi-basligi"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="status">
                    <Form.Label>Yayın Durumu</Form.Label>
                    <Form.Select
                      value={publishStatus}
                      onChange={(e) => setPublishStatus(e.target.value as 'draft' | 'published' | 'scheduled')}
                    >
                      <option value="draft">Taslak</option>
                      <option value="published">Yayında</option>
                      <option value="scheduled">Zamanlanmış</option>
                    </Form.Select>
                  </Form.Group>

                  {publishStatus === 'scheduled' && (
                    <Form.Group className="mb-3" controlId="publishDate">
                      <Form.Label>Yayın Tarihi</Form.Label>
                      <DatePicker
                        selected={publishDate}
                        onChange={(date: Date | null) => setPublishDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        className="form-control"
                      />
                    </Form.Group>
                  )}

                  <div className="d-flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="submit-btn" type="submit">
                        {editPost ? 'Güncelle' : 'Ekle'}
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="secondary" onClick={() => setShowPreviewModal(true)}>
                        <FaEye /> Önizleme
                      </Button>
                    </motion.div>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>

            {/* Önizleme Modal */}
            <Modal show={showPreviewModal} onHide={() => setShowPreviewModal(false)} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Yazı Önizleme</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Öne Çıkan Görsel"
                    style={{ maxWidth: '100%', marginBottom: '1rem', borderRadius: '10px' }}
                  />
                )}
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <p><strong>Kategori:</strong> {category || 'Belirtilmemiş'}</p>
                <p><strong>Etiketler:</strong> {tags.join(', ') || 'Yok'}</p>
              </Modal.Body>
            </Modal>

            <div className="card-grid">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post._id}
                  className="card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.status === 'draft' ? 'Taslak' : post.status === 'published' ? 'Yayında' : `Zamanlanmış: ${new Date(post.publishDate).toLocaleDateString()}`}</p>
                    <p className="card-text"><strong>Kategori:</strong> {post.category || 'Belirtilmemiş'}</p>
                    <p className="card-text"><strong>Etiketler:</strong> {post.tags?.join(', ') || 'Yok'}</p>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: post.content.slice(0, 100) + '...' }} />
                    <div className="card-actions">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="edit-btn" onClick={() => handlePostEdit(post)}>
                          <FaEdit /> Düzenle
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="delete-btn" onClick={() => handlePostDelete(post._id)}>
                          <FaTrash /> Sil
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Ürünlerimiz Section */}
        {activeSection === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <hr />
            <div className="section-header">
              <h2>Ürünlerimiz</h2>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="add-btn" onClick={() => setShowProductModal(true)}>
                  <FaPlus /> Yeni Ürün Ekle
                </Button>
              </motion.div>
            </div>

            {/* Filtreleme */}
            <div className="mb-3">
              <Form.Group>
                <Form.Label>Stok Durumu</Form.Label>
                <Form.Select
                  value={productFilterStatus}
                  onChange={(e) => setProductFilterStatus(e.target.value)}
                >
                  <option value="all">Tümü</option>
                  <option value="inStock">Stokta</option>
                  <option value="outOfStock">Stokta Yok</option>
                </Form.Select>
              </Form.Group>
            </div>

            <Modal show={showProductModal} onHide={handleCloseProductModal}>
              <Modal.Header closeButton>
                <Modal.Title>{editProduct ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleProductSubmit}>
                  <Form.Group className="mb-3" controlId="productName">
                    <Form.Label>Ürün Adı</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ürün Adı"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productDescription">
                    <Form.Label>Ürün Açıklaması</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Ürün Açıklaması"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productPrice">
                    <Form.Label>Fiyat (TL)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Fiyat"
                      value={productPrice}
                      onChange={(e) => setProductPrice(Number(e.target.value))}
                      required
                      min="0"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productStock">
                    <Form.Label>Stok Adedi</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Stok Adedi"
                      value={productStock}
                      onChange={(e) => setProductStock(Number(e.target.value))}
                      required
                      min="0"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productImage">
                    <Form.Label>Ürün Görseli</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImageChange(e, 'product')}
                    />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Önizleme"
                        style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '10px' }}
                      />
                    )}
                  </Form.Group>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="submit-btn" type="submit">
                      {editProduct ? 'Güncelle' : 'Ekle'}
                    </Button>
                  </motion.div>
                </Form>
              </Modal.Body>
            </Modal>

            <div className="card-grid">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product._id}
                  className="card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <img src={product.imageUrl} alt={product.name} className="card-img" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description.slice(0, 100) + '...'}</p>
                    <p className="card-text">Fiyat: {product.price} TL</p>
                    <p className="card-text">Stok: {product.stock}</p>
                    <div className="card-actions">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="edit-btn" onClick={() => handleProductEdit(product)}>
                          <FaEdit /> Düzenle
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="delete-btn" onClick={() => handleProductDelete(product._id)}>
                          <FaTrash /> Sil
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Aboneler Section */}
        {activeSection === 'subscribers' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <hr />
            <div className="section-header">
              <h2>Aboneler</h2>
            </div>

            <div className="card-grid">
              {subscribers.map((subscriber) => (
                <motion.div
                  key={subscriber._id}
                  className="card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{subscriber.email}</h5>
                    <p className="card-text">
                      Abone Olma Tarihi: {new Date(subscriber.subscribedAt).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
