<template>
    <div>
    <div class="bg-gray-100 h-screen flex items-center justify-center">
    <!-- component -->
    <div class="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex justify-center items-center w-full">
        
        <form @submit.prevent="register">
            <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-lg">
                <div class="space-y-4">
                    <h1 class="text-center text-2xl font-semibold text-gray-600">Đăng ký</h1>
                    <div v-if="successMessage" class="text-green-600 font-semibold">{{ successMessage }}</div>
                    <div v-if="errorMessage" class="text-red-600 font-semibold">{{ errorMessage }}</div>
                    <hr>
                    <div>
                        <span class="mb-2 font-medium">Tên đăng nhập</span>
                    <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
    
                        <svg class="w-6 h-6 text-gray-400" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
                        <input class="pl-2 outline-none border-none w-full" type="name" name="name" v-model="MaDocGia" required/>
    
                    </div>

                    </div>
                    <div>
                        <span class="mb-2 font-medium">Họ Lót</span>
                    <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
    
                        <svg class="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

                        <input class="pl-2 outline-none border-none w-full" type="name" name="name" v-model="HoLot" required/>
    
                    </div>

                    </div>
                    <div>
                        <span class="mb-2 font-medium">Tên</span>
                    <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
    
                        <svg class="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

                        <input class="pl-2 outline-none border-none w-full" type="name" name="name" v-model="Ten" required/>
    
                    </div>

                    </div>

                    <div>
                        <span class="mb-2 font-medium">Mật khẩu</span>
                        <div class="flex items-center border-2 py-2 px-3 rounded-md">
                            <svg  class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            <input class="pl-2 outline-none border-none w-full" type="password" v-model="MatKhau"  required/>
                        </div>
                    </div>
                    <div class="flex-auto">
            <label for="icondisplay" class="font-medium block mb-2"> Ngày sinh </label>

            <div class="flex justify-between">

                <Calendar class="p-2 border-2 border-[#e5e7eb] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[190px]" v-model="NgaySinh" showIcon iconDisplay="input" inputId="icondisplay" :dateFormat="dateFormat" />

                <div class="card">
                    <SelectButton class="rounded-md border-2 border-[#e5e7eb]" v-model="GioiTinh" :options="options" aria-labelledby="buttondisplay" />
                </div>
            </div>
            </div>
            <div>
                        <span class="mb-2 font-medium">Số điện thoại</span>
                    <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
    
                        <svg class="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>


                        <input class="pl-2 outline-none border-none w-full" type="name" v-model="DienThoai" required/>
    
                    </div>

                    </div>
                    <div>
                        <span class="mb-2 font-medium">Địa chỉ</span>
                    <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                        <svg class="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
</svg>



                        <input class="pl-2 outline-none border-none w-full" type="name" v-model="DiaChi" required/>
    
                    </div>

                    </div>

                </div>

                <button value="login" id="login" class="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Đăng ký</button>
                <hr>

            </div>
        </form>
    </div>
</div>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';
import { ref } from "vue";

import SelectButton from 'primevue/selectbutton';
import api from '../Services/api.services'; 
import router from '../router/index';
export default {
    components:{
        Calendar,
        SelectButton
    },
    data(){
        return{
            MaDocGia: "",
            HoLot: "",
            Ten: "",
            MatKhau: "",
            NgaySinh: null,
            GioiTinh: null,
            DienThoai: "",
            DiaChi: "",
            options:['Nam', 'Nữ'],
            dateFormat:'yy/mm/dd',
            successMessage: null,
            errorMessage: null
        }
    },
    methods:{
    register() {
      console.log('Đã kích hoạt sự kiện dangky');
      const formData = {
        MaDocGia: this.MaDocGia,
        HoLot: this.HoLot,
        Ten: this.Ten,
        MatKhau: this.MatKhau,
        NgaySinh: this.NgaySinh,
        GioiTinh: this.GioiTinh,
        DienThoai: this.DienThoai,
        DiaChi: this.DiaChi
      };
         api.post('/customer/dangky', formData)
        .then(response=>{
            console.log(response.data)
            
            this.successMessage = "Đăng ký thành công !!";
            router.push({name: "Login"})
        })
        .catch(error=>{
            console.error(error);
            this.errorMessage = "Tài khoản đã tồn tại !"
        })
    }

    }
 
}
</script>

<style>

</style>