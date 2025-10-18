# Group · Portfolios

Một trang web tĩnh để hiển thị danh sách thành viên và liên kết tới portfolio của họ.

## Cách chạy

Vì là trang tĩnh, bạn có thể mở trực tiếp file `index.html` bằng trình duyệt:

- Windows: nhấp đôi `c:\\Users\\TP\\group\\index.html`

Nếu bạn dùng Live Server trong VS Code hoặc bất kỳ HTTP server nào, cũng chạy tốt.

## Thêm thành viên

Mở file `data/members.js` và thêm một object mới vào mảng `window.GROUP_MEMBERS`:

```
{
  name: "Họ Tên",
  role: "Vai trò",
  url: "https://link-portfolio",
  tags: ["tag1","tag2"],
  emoji: "🙂",        // tuỳ chọn - fallback khi không có ảnh
  image: "assets/img/ten-file.jpg" // tuỳ chọn - ảnh profile
}
```

Lưu file, tải lại trang là thấy thay đổi.

## Tìm kiếm và sắp xếp

- Ô tìm kiếm lọc theo tên, vai trò, hoặc tag.
- Tuỳ chọn sắp xếp theo tên (A→Z, Z→A) hoặc theo vai trò.

## Gợi ý publish

- GitHub Pages: chỉ cần push thư mục này lên repo và bật Pages (branch `main`, root).
- Netlify/Vercel: deploy như static site, không cần build.

### Gợi ý ảnh profile

- Đặt ảnh cục bộ vào thư mục `assets/img/` và tham chiếu bằng đường dẫn tương đối như `assets/img/hai.jpg`.
- Cũng có thể dùng ảnh từ xa (CDN/Google Drive link có thể không hotlink được; ưu tiên CDN/GitHub).
- Ảnh sẽ tự bo tròn, cắt vừa khung; nếu ảnh lỗi, trang sẽ hiển thị emoji/ký tự viết tắt thay thế.

## Góp ý

Cứ mở issue hoặc chỉnh sửa trực tiếp.
