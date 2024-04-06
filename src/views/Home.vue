<template>
<div>
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="../assets/img/background.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Chào mừng đến với Books CTU</h1>
    <p class="text-lg text-gray-300 mb-8">Cung cấp quản lí sách dành cho sinh viên.</p>
    <a href="#1" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Bắt đầu</a>
  </div>
</div>

<div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Sinh Viên</h3>
            <p class="text-3xl">50,000</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-blue-400"><svg class="w-12 h-12 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
</svg>
</div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Sách</h3>
            <p class="text-3xl">1000+</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-indigo-400"><svg class="w-12 h-12 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M20 14h-2.722L11 20.278a5.511 5.511 0 0 1-.9.722H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.132 7.9 15.6 4.368a1 1 0 0 0-1.414 0L12 6.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
</svg>
</div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Thể Loại</h3>
            <p class="text-3xl">14+</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-red-400"><svg class="w-12 h-12 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
</svg>
</div>
        <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Miễn Phí</h3>
            <p class="text-3xl">100%</p>
        </div>
    </div>
</div>

<div class="flex flex-wrap mt-10">
    <div class="w-full sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center">
          <div class="text-4xl font-bold" id="1">
            CTU<span class="text-blue-700">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8">
          </div>
        </nav>
        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-4xl lg:text-6xl font-bold">Trung tâm học liệu <span class="text-blue-700">Đại học Cần Thơ</span> </h1>
            <div class="w-20 h-2 bg-green-700 my-4"></div>
            <p class="text-xl mb-10">Trung tâm Học liệu được Tổ chức từ thiện Atlantic Philanthropies (Mỹ) tài trợ xây dựng trong khuôn viên 7.560 m2. Tọa lạc tại Cổng A Khu II Trường Đại học Cần Thơ, tòa nhà Trung tâm Học liệu gồm 4 tầng với diện tích sử dụng là 7.200 m2.

Trung tâm Học liệu có sức chứa 1000 chỗ ngồi, 4 phòng thảo luận nhóm và 1 phòng nghiên cứu sau đại học với 12 phòng học cá nhân phục vụ nghiên cứu độc lập, được trang bị hệ thống điều hòa, mạng internet, wifi, 296 máy vi tính và trang thiết bị hiện đại đáp ứng nhu cầu nghiên cứu, giảng dạy, học tập tại Trường Đại học Cần Thơ.</p>
            <button class="bg-[#facc15] text-white text-2xl font-medium px-4 py-2 rounded shadow"><a href="https://lrc.ctu.edu.vn/">Đọc thêm</a></button>
          </div>
        </header>
      </div>
    </div>
    <img src="../assets/img/tthl.jpg" alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12">
  </div>

  <div class="lg:ml-6 lg:col-start-2 w-[700px] mt-4 mb-4">
    <p class="text-[20px] font-semibold leading-6 text-indigo-500 uppercase">
        Lộ trình phát triển
    </p>
    <h4 class="mt-2 text-3xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
       Website CTU Books
    </h4>

    <ul class="mt-8 space-y-3 font-medium">
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
               Phát triển các tính năng cơ bản 
            </p>
        </li>
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
               Bảo mật người dùng
            </p>
        </li>
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
               Tối ưu hệ thống
            </p>
        </li>
        <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
                Triển khai lên ứng dụng di động
            </p>
        </li>
    </ul>
</div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>