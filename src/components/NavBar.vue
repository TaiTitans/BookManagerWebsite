<template>
  <header class="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
    <div class="flex-1 flex justify-between items-center">
        <router-link to="/" class="text-2xl text-blue-500 font-mono font-bold">Books Manage</router-link>
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><router-link to="/muonsach" class="md:p-4 py-3 px-0 block hover:text-blue-500">Mượn Sách</router-link></li>
                <li><router-link to="/trasach" class="md:p-4 py-3 px-0 block hover:text-blue-500" href="#">Trả Sách</router-link></li>
                <li  class="md:p-4 py-3 px-0 block hover:text-blue-500">Đăng xuất</li>
            </ul>
        </nav>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style>

</style>