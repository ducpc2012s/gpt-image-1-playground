# GPT Image 1 Playground

Một playground AI hình ảnh sử dụng Next.js, hỗ trợ generate, edit, render kiến trúc với giao diện hiện đại, hiệu ứng techy.

## Tính năng nổi bật
- **Tạo ảnh AI (Generate)**: Nhập prompt, chọn size, chất lượng, định dạng, nền, số lượng ảnh.
- **Chỉnh sửa ảnh (Edit)**: Upload ảnh, vẽ mask, chỉnh prompt, nhiều tuỳ chọn nâng cao.
- **Render kiến trúc tự động**: Chọn phong cách, upload ảnh lineart/raw, upload style reference, AI tự động render ảnh kiến trúc chân thực.
- **Lưu lịch sử sinh ảnh**: Xem lại, tải về, gửi ảnh sang form edit.
- **Giao diện hiện đại**: Màu gradient tech, hiệu ứng border động, responsive, UX tối ưu.
- **Test tự động**: Đã tích hợp Playwright cho smoke test UI.

## Hướng dẫn chạy bằng Docker
1. **Cài Docker Desktop** (nếu chưa có)
2. **Tạo file `.env`** (copy từ `.env.example` và điền OPENAI_API_KEY)
3. **Build và chạy app:**
   ```sh
   docker build -t nextjs-app .
   docker run -d -p 3000:3000 --env-file .env --name nextjs-app-container nextjs-app
   ```
4. Truy cập [http://localhost:3000](http://localhost:3000)

## Cấu hình môi trường (`.env`)
```
OPENAI_API_KEY=sk-xxx
```

## Đóng góp & phát triển
- Fork, clone repo về máy
- Cài Node.js >= 20 nếu muốn dev local
- Chạy `npm install` và `npm run dev` để phát triển
- Đóng góp qua pull request

## Tác giả
- Maintainer: ducnguyen (ducnt468@gmail.com)
