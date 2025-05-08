
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import sanitizeHtml from 'sanitize-html';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

// Global handleTurnstileVerify fonksiyonu için TypeScript deklarasyonu
declare global {
  interface Window {
    handleTurnstileVerify?: (token: string) => void;
    turnstile?: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const router = useRouter();
  const widgetIdRef = useRef<string | null>(null);

  // Turnstile callback fonksiyonu
  const handleTurnstileVerify = useCallback((token: string) => {
    console.log('Turnstile token alındı:', token);
    setTurnstileToken(token);
    setError('');
  }, []);

  // CSRF token'ı almak
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const res = await fetch('/api/csrf-token', {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) {
          throw new Error(`CSRF token alınamadı, status: ${res.status}`);
        }
        const data = await res.json();
        if (!data.csrfToken) {
          throw new Error('CSRF token yanıtta eksik');
        }
        console.log('Alınan CSRF token:', data.csrfToken);
        setCsrfToken(data.csrfToken);
      } catch (error) {
        console.error('CSRF token alma hatası:', error);
        setError('Bağlantı hatası, lütfen sayfayı yenileyin');
      }
    };
    fetchCsrfToken();
  }, []);

  // Turnstile script'ini yükle ve manuel render
  useEffect(() => {
    console.log('Turnstile useEffect çalıştı');
    window.handleTurnstileVerify = handleTurnstileVerify;

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('Turnstile script yüklendi');
      setTurnstileLoaded(true);
      if (window.turnstile) {
        try {
          const widgetId = window.turnstile.render('.cf-turnstile', {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
            callback: handleTurnstileVerify,
            theme: 'dark',
            action: 'login',
            language: 'tr',
          });
          widgetIdRef.current = widgetId;
          console.log('Turnstile widget render edildi, widgetId:', widgetId);
        } catch (err) {
          console.error('Turnstile render hatası:', err);
          setError('Bot doğrulaması başlatılamadı, lütfen sayfayı yenileyin');
        }
      } else {
        console.error('Turnstile nesnesi bulunamadı');
        setError('Bot doğrulaması yüklenemedi');
      }
    };
    script.onerror = () => {
      console.error('Turnstile script yükleme hatası');
      setError('Bot doğrulaması yüklenemedi, lütfen internet bağlantınızı kontrol edin.');
    };
    document.body.appendChild(script);

    // Temizleme fonksiyonu
    return () => {
      console.log('Turnstile useEffect temizleme çalıştı');
      document.body.removeChild(script);
      delete window.handleTurnstileVerify;
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          console.log('Turnstile widget kaldırıldı, widgetId:', widgetIdRef.current);
        } catch (err) {
          console.error('Turnstile kaldırma hatası:', err);
        }
      }
      widgetIdRef.current = null;
    };
  }, [handleTurnstileVerify]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Input sanitization
    const cleanUsername = sanitizeHtml(username, { allowedTags: [], allowedAttributes: {} }).trim().toLowerCase();
    const cleanPassword = sanitizeHtml(password, { allowedTags: [], allowedAttributes: {} });

    if (!cleanUsername || !cleanPassword) {
      setError('Geçersiz giriş');
      setLoading(false);
      return;
    }

    if (!turnstileToken) {
      setError('Lütfen bot olmadığınızı doğrulayın');
      setLoading(false);
      return;
    }

    if (!csrfToken) {
      setError('CSRF token eksik, lütfen sayfayı yenileyin');
      setLoading(false);
      return;
    }

    try {
      console.log('Gönderilen CSRF token:', csrfToken);
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({
          username: cleanUsername,
          password: cleanPassword,
          turnstileToken,
        }),
        credentials: 'include',
      });

      const data = await res.json();
      if (res.ok) {
        router.push('/admin');
      } else {
        setError(data.message || 'Giriş başarısız');
      }
    } catch (error: any) {
      console.error('Giriş hatası:', error);
      setError(error.message || 'Sunucu hatası');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Giriş Yap</h1>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Alert variant="danger">{error}</Alert>
          </motion.div>
        )}
        <Form onSubmit={handleSubmit}>
          <input type="hidden" name="csrfToken" value={csrfToken} />
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Kullanıcı Adı</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
              autoComplete="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Parola</Form.Label>
            <Form.Control
              type="password"
              placeholder="Parola"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              autoComplete="new-password"
            />
          </Form.Group>

          <div className="cf-turnstile" />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="primary"
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Giriş Yapılıyor...
                </>
              ) : (
                'Giriş Yap'
              )}
            </Button>
          </motion.div>
        </Form>
      </motion.div>
    </div>
  );
}
