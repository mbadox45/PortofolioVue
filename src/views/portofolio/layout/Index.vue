<script setup>
import NavBar from './NavBar.vue'
</script>

<template>
    <div class="relative w-full min-h-screen bg-[#ffde59]">
        <nav-bar/>
        <div class="flex flex-col sm:flex-row w-full px-[0.5rem] pb-[0.5rem] bg-[#a6a6a6] min-h-screen">
            <router-view />
        </div>
    </div>
</template>