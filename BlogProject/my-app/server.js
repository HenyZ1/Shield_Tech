const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const session = require('express-session');
const app = express();

// Ortam değişkenlerini yükle
dotenv.config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'gizli-anahtar', // Güvenli bir anahtar kullanın
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlandı'))
  .catch(err => console.log(err));

// Kullanıcı Şeması
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Blog Yazısı Şeması
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', postSchema);

// Passport Konfigürasyonu
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: 'Kullanıcı bulunamadı' });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: 'Parola yanlış' });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Middleware: Giriş kontrolü
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

// Yönlendirmeler
// Giriş Sayfası
app.get('/login', (req, res) => {
  res.render('login', { message: req.session.messages || '' });
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureMessage: true
}));

// Çıkış Yapma
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/login');
  });
});

// Yönetici Paneli
app.get('/dashboard', ensureAuthenticated, async (req, res) => {
  const posts = await Post.find();
  res.render('dashboard', { posts });
});

// Yeni Yazı Ekleme
app.post('/add-post', ensureAuthenticated, async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.redirect('/dashboard');
});

// Yazı Düzenleme (GET)
app.get('/edit-post/:id', ensureAuthenticated, async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit-post', { post });
});

// Yazı Güncelleme (POST)
app.post('/edit-post/:id', ensureAuthenticated, async (req, res) => {
  const { title, content } = req.body;
  await Post.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect('/dashboard');
});

// Yazı Silme
app.post('/delete-post/:id', ensureAuthenticated, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/dashboard');
});

// Blog Sayfası
app.get('/blog', async (req, res) => {
  const posts = await Post.find();
  res.render('blog', { posts });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});