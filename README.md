# SFIT v2

Lưu ý: tất cả các ảnh đều dùng dạng \*.webp hãy dùng công cụ nào đấy để convert sang, chúc may mắn

## Hướng dẫn đóng góp dự án

1. **Clone repository**: Clone dự án từ repository bằng lệnh:

   ```bash
   git clone <repository-url>
   ```

2. **Tạo nhánh mới**: Tạo một nhánh mới để làm việc, **khi có bất kì tính năng nào mới thì tạo nhanh mới và nhớ pull lại code**:

   ```bash
   git checkout -b <branch-name>
   ```

3. **Thêm code**: Thực hiện các thay đổi cần thiết trong mã nguồn.

   Code vào cái phần đã comment trong code, ngoài ra đối với file css và js thì mỗi phần một file riêng và cách đặt tên classname, id thì đã phổ biến như hôm bữa, còn tên file thì chính là tên của phần mình làm.

4. **Chạy**: Test thử trên localhost xem chạy được ổn vấn đề gì không để fix

5. **Commit thay đổi**: Lưu các thay đổi vào Git:

   ```bash
   git add .
   git commit -m "Mô tả thay đổi"
   ```

6. **Push lên repository**: Đẩy nhánh mới lên repository:

   ```bash
   git push origin <branch-name>
   ```

7. **Tạo Pull Request**: Truy cập repository trên GitHub/GitLab và tạo một Pull Request để yêu cầu review code.
