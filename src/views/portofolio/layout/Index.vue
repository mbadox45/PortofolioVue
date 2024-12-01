<script setup>
import NavBar from './NavBar.vue'
</script>

<template>
    <div class="relative w-full min-h-screen bg-[#E5E3D4]">
        <nav-bar/>
        <div class="flex flex-col sm:flex-row w-full pb-[0.5rem] bg-transparent min-h-screen">
            <router-view />
        </div>
    </div>
</template>