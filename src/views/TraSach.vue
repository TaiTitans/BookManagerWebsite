<template>
  <div class="h-screen">
    <h2 class="text-3xl font-bold text-black mb-8 mt-4 ml-4 font-mono">Danh sách sách đang mượn</h2>
    <div v-if="isLoading" class="text-center mt-8">Loading...</div>
    <div v-else>
      <div v-if="borrowedBooks.length === 0" class="text-center mt-8">Không có sách đang mượn.</div>
      <div v-else>
        <div v-for="book in borrowedBooks" :key="book._id" class="border border-gray-200 rounded-md p-4 mt-4 mb-4 ml-2 mr-2">
          <div class="flex justify-between items-center mb-2">
            <div class="font-semibold">{{ book.TenSach }}</div>
            <button @click="returnBook(book._id)" class="px-4 py-2 bg-red-500 text-white rounded-md mt-4">Trả sách</button>
          </div>
          <div class="text-gray-600">Ngày mượn: {{ formatDate(book.NgayMuon) }}</div>
          <div class="text-gray-600">Ngày trả: {{ formatDate(book.NgayTra) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../Services/api.services';

export default {
  data() {
    return {
      borrowedBooks: [],
      isLoading: false
    };
  },
  async mounted() {
    this.isLoading = true;
    const MaDocGia = localStorage.getItem('MaDocGia'); // Lấy MaDocGia từ localStorage
    try {
      const response = await api.get(`/borrow/getAllWithCustomer/${MaDocGia}`);
      this.borrowedBooks = response.data.data || [];
    } catch (error) {
      console.error('Error fetching borrowed books:', error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    async returnBook(_id) {
      try {
        const response = await api.delete(`/borrow/delete/${_id}`);
        const MaDocGia = localStorage.getItem('MaDocGia'); // Lấy MaDocGia từ localStorage
        const updatedResponse = await api.get(`/borrow/getAll/${MaDocGia}`);
        this.borrowedBooks = updatedResponse.data.data || [];

      } catch (error) {
        console.error('Error returning book:', error);
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    }
  }
};
</script>

<style>
/* Các phần CSS cần thiết */
</style>
