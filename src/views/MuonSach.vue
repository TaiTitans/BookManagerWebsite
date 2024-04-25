<template>
<div>
  <div class="bg-gray-100 py-16 mt-1">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold font-mono text-black mb-8">
        Danh sách sách hiện có
      </h2>
      <div class="flex justify-end mb-4">
        <div class="relative">
          <input
            type="text"
            v-model="searchQuery"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Tìm kiếm sách..."
          />
            <!-- Thông báo mượn sách thành công -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Book
          v-for="book in filteredBooks.slice(startIndex, endIndex)"
          :key="book.MaSach"
          :book="book"
          @borrow-book="borrowBook"
        />
      </div>
      <div class="flex justify-center mt-8">
        <nav>
          <ul class="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                @click.prevent="prevPage"
              >
                Trước
              </a>
            </li>
            <li v-for="page in totalPages" :key="page">
              <a
                href="#"
                :class="[
                  'px-3 py-2 leading-tight',
                  { 'text-blue-600 border-blue-300': page === currentPage, 'text-gray-500 bg-white border border-gray-300': page !== currentPage },
                ]"
                @click.prevent="goToPage(page)"
              >
                {{ page }}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                @click.prevent="nextPage"
              >
                Sau
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import api from '../Services/api.services'
import Book from './Book.vue';
export default {
  name: 'BookList',
  components: {
    Book,
  },
  data() {
    return {
      booksFindAll: [],
      searchQuery: '',
      currentPage: 1,
      booksPerPage: 6,
    };
  },
  computed: {
    filteredBooks() {
      if (Array.isArray(this.booksFindAll)) {
        return this.booksFindAll.filter((book) =>
          book.TenSach.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return [];
      }
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.booksPerPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.booksPerPage;
    },
    endIndex() {
      return this.startIndex + this.booksPerPage;
    },
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      api
        .get('/books/getAll')
        .then((response) => {
          this.booksFindAll = response.data.data;
        })
        .catch((error) => {
          console.error('Error fetching books:', error);
        });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style>

</style>