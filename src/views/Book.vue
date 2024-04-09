<template>
   <div class="bg-white rounded-lg shadow-lg p-8">
    <div class="relative overflow-hidden">
      <img
        class="object-cover w-full h-64 rounded-t-lg"
        :src="book.HinhAnh"
        :alt="book.TenSach"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
    </div>
    <h3 class="text-xl font-bold text-gray-900 mt-4">{{ book.TenSach }}</h3>
    <div class="flex">
      <p class="text-gray-500 text-sm mt-2">Mã Sách:</p>
      <p class="text-black text-sm mt-2 ml-2">{{ book.MaSach }}</p>
    </div>
    <div class="flex">
      <p class="text-gray-500 text-sm mt-1">Nhà xuất bản:</p>
      <p class="text-black text-sm mt-1 ml-2">{{ book.MaNXB }}</p>
    </div>
    <div class="flex">
      <p class="text-gray-500 text-sm mt-1">Số quyển:</p>
      <p class="text-black text-sm mt-1 ml-2">{{ book.SoQuyen }}</p>
    </div>
    <div class="flex">
      <p class="text-gray-500 text-sm mt-1">Tác giả:</p>
      <p class="text-black text-sm mt-1 ml-2">{{ book.TacGia }}</p>
    </div>
    <div class="flex items-center justify-between mt-4">
      <div>
        <span class="text-gray-900 font-bold text-lg">{{ formatPrice(book.DonGia) }}</span>
      </div>
      <button
        class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 mb-4"
        @click="borrowBook"
      >
        Mượn
      </button>
      <div v-if="errorMessage" class="text-red-600 font-semibold">
                {{ errorMessage }}
              </div>
              <div v-if="successMessage" class="text-green-600 font-semibold">
                {{ successMessage }}
              </div>
    </div>
  </div>
</template>

<script>
import api from '../Services/api.services'
export default {
  name: 'Book',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getMemberID() {
    return localStorage.getItem('MaDocGia');
  },
    formatPrice(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  },
  borrowBook() {
      const MaDocGia = this.getMemberID();
      const MaSach = this.book.MaSach;
       const _id = this.book._id
       
      api
        .post('/borrow/createBorrowBook', { MaDocGia, MaSach, _id })
        .then((response) => {
            console.log('Muon Thanh Cong');
            window.location.pathname = "/muonsach";
          // Xử lý khi mượn sách thành công
          this.successMessage = "Đăng nhập thành công !!";
        })
        .catch((error) => {
            console.log('Muon That Bai');
          // Xử lý khi mượn sách thất bại
          this.errorMessage = "Lỗi mượn sách !!";
        });
    },
  },
};
</script>

<style>

</style>