<template>
<div>
  <div class="flex flex-col w-full items-center pt-4 gap-4 bg-gradient-to-b from-blue-600 via-blue-300 to-blue-100">
    <p class="text-2xl md:text-2xl font-extrabold text-white">Tìm kiếm sách bạn muốn</p>
    <form action="" class="max-w-[480px] w-full px-4 pb-4">
        <div class="relative">
            <input type="text" name="q" class="w-full border h-12 shadow p-4 rounded-full" placeholder="search">
            <button type="submit">
                    <svg class="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                        xml:space="preserve">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
        </div>
    </form>
</div>

<div class="bg-white py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold font-mono text-black mb-8">Danh sách sách hiện có</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src="https://danguykhoicqvadn.yenbai.gov.vn/wp-content/uploads/2022/11/254983_311950185_668081345112755_1091947187145743617_n.jpg" alt="Product">
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Tôi học đại học</h3>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-2">Mã Sách: </p>
                  <p class="text-black text-sm mt-2 ml-2">ABC</p>
                </div>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-1">Nhà xuất bản: </p>
                  <p class="text-black text-sm mt-1 ml-2">Tuổi trẻ</p>
                </div>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-1">Số quyển: </p>
                  <p class="text-black text-sm mt-1 ml-2">2</p>
                </div>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-1">Tác giả: </p>
                  <p class="text-black text-sm mt-1 ml-2">Nguyễn Ngọc Ký</p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div>
                    <span class="text-gray-900 font-bold text-lg">78.000</span>
                    <span class="text-blue-600 font-bold text-lg ml-1">VNĐ</span>
                  </div>

                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Mượn</button>
                </div>
            </div>


            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src="https://danguykhoicqvadn.yenbai.gov.vn/wp-content/uploads/2022/11/254983_311950185_668081345112755_1091947187145743617_n.jpg" alt="Product">
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Tôi học đại học</h3>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-2">Mã Sách: </p>
                  <p class="text-black text-sm mt-2 ml-2">ABC</p>
                </div>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-1">Nhà xuất bản: </p>
                  <p class="text-black text-sm mt-1 ml-2">Tuổi trẻ</p>
                </div>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-1">Số quyển: </p>
                  <p class="text-black text-sm mt-1 ml-2">2</p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div>
                    <span class="text-gray-900 font-bold text-lg">78.000</span>
                    <span class="text-blue-600 font-bold text-lg ml-1">VNĐ</span>
                  </div>

                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Mượn</button>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src="https://danguykhoicqvadn.yenbai.gov.vn/wp-content/uploads/2022/11/254983_311950185_668081345112755_1091947187145743617_n.jpg" alt="Product">
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Tôi học đại học</h3>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-2">Mã Sách: </p>
                  <p class="text-black text-sm mt-2 ml-2">ABC</p>
                </div>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-1">Nhà xuất bản: </p>
                  <p class="text-black text-sm mt-1 ml-2">Tuổi trẻ</p>
                </div>
                <div class="flex">
                  <p class="text-gray-500 text-sm mt-1">Số quyển: </p>
                  <p class="text-black text-sm mt-1 ml-2">2</p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <div>
                    <span class="text-gray-900 font-bold text-lg">78.000</span>
                    <span class="text-blue-600 font-bold text-lg ml-1">VNĐ</span>
                  </div>

                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Mượn</button>
                </div>
            </div>
        </div>

    </div>
</div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>