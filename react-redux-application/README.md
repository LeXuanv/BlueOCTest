## Run project: "yarn start"

## Chức năng

- Lấy danh sách bài viết từ `https://jsonplaceholder.typicode.com/posts`.
- Hiển thị danh sách bài viết.
- Cho phép thêm bài viết mới.
- Cho phép xóa bài viết

## Công nghệ sử dụng

- React
- Redux
- Redux Thunk
- Axios

## Cách làm

1. Cài đặt và cấu trúc dự án
   Tôi bắt đầu bằng cách tạo một dự án React mới sử dụng create-react-app, sau đó cài đặt các thư viện cần thiết như Redux, Redux Thunk, Redux DevTools Extension và Axios. Tôi đã tổ chức mã nguồn thành các thư mục như components, redux, và redux/actions, giúp cho mã dễ bảo trì và mở rộng

2. Cấu hình Redux Store
   Tôi đã tạo một store Redux trong file store.js, sử dụng applyMiddleware để tích hợp middleware thunk, cho phép tôi xử lý các tác vụ bất đồng bộ. Ngoài ra, tôi cũng sử dụng composeWithDevTools để kết hợp với Redux DevTools, giúp theo dõi trạng thái ứng dụng dễ dàng hơn.

3. Tạo Reducer và Actions và Selectors
   Tôi đã tạo một reducer gốc để quản lý trạng thái của ứng dụng, bao gồm các hành động để tải bài viết từ API và thêm bài viết mới. Các action creators được định nghĩa trong file actions.js, nơi tôi sử dụng Axios để thực hiện các cuộc gọi API.Tôi còn sử dụng hook useSelector từ react-redux, để có thể kết nối component của mình với Redux store và lấy dữ liệu một cách hiệu quả

4. Tạo Component
   Tôi đã xây dựng hai component chính: listForm để hiển thị danh sách các bài viết và postForm để cho phép người dùng thêm bài viết mới. Trong listForm, tôi sử dụng useEffect để gọi action fetch bài viết khi component được mount và tôi đã lấy được id của phần tử khi click vào để xóa nó. Trong postForm, tôi xử lý sự kiện submit để dispatch action thêm bài viết mới

5. Kết nối Redux với ứng dụng
   Tôi đã kết nối Redux store với ứng dụng bằng cách sử dụng Provider trong file index.js, đảm bảo rằng tất cả các component có thể truy cập vào trạng thái và các action của Redux.
