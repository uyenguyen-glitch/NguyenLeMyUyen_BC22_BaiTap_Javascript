/**
 * Bài tập 1: Tính tiền lương nhân viên
 ** Đầu vào: Nhập số ngày làm
 *
 ** Xử lí: lương cố định (100000) * số ngày làm
 *
 ** Đầu ra: Tiền lương của nhân viên
 */
const LUONG = 100000;
var soNgayLam = 30;
console.log("Tổng tiền lương của nhân viên là: " + LUONG * soNgayLam);

/**
 * Bài tập 2: Tính giá trị trung bình
 *
 ** Đầu vào: Nhập 5 số thực
 *
 ** Xử lí: (số thực thứ nhất + số thực thứ hai + số thực thứ ba + số thực thứ tư + số thực thứ năm)/5
 *
 ** Đầu ra: giá trị trung bình của 5 số thực được nhập vào
 */
var sttnh = 2.3;
var stth = 3.5;
var sttb = 4;
var sttt = 12.2;
var sttn = 1.9;

var gttb = (sttnh + stth + sttb + sttt + sttn) / 5;

console.log("Giá trị trung bình của năm số thực là: " + gttb);

/**
 * Bài tập 3: Quy đổi tiền tề
 *
 ** Đầu vào: Số tiền USD cần quy đổi
 *
 ** Xử lí: số tiền USD * mệnh giá (235000)
 *
 ** Đầu ra: Số tiền VND
 */

const giaUSD = 23500;
var soTienCanDoi = 100;
console.log("Số tiền được quy đổi là: " + giaUSD * soTienCanDoi + " VND");

/**
 * Bài tập 4: Tính chu vi, diện tích hình chữ nhật
 *
 ** Đầu vào: Nhập chiều dài, chiều rộng hình chữ nhật
 *
 ** Xử lí: - Tính chu vi: (chiều dài + chiều rộng) * 2
 *         - Tính diện tích: chiều dài * chiều rộng
 *
 ** Đầu ra: Diện tích và chu vi hình chữ nhật
 */
var cd = 2;
var cr = 3;

var cv = (cd + cr) * 2;
var dt = cd * cr;

console.log("Chu vi hình chữ nhật là: " + cv);
console.log("Diện tích hình chữ nhật là: " + dt);

/**
 * Bài tập 5: Tính tổng 2 kí số
 *
 ** Đầu ra: Nhập số có 2 chữ số
 *
 ** Xử lí: Tách số 2 chữ số:
 *               - Số hàng chục: số / 10
 *              - Số hàng đơn vị: số % 10
 *
 ** Đầu ra: Tổng 2 kí số
 */
var so = 99;

var soHangDV = parseInt(so % 10);
var soHangChuc = parseInt(so / 10);

var tong2KS = soHangChuc + soHangDV;

console.log("Tổng 2 kí số là: " + tong2KS);
