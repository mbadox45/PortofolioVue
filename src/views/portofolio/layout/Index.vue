<script setup>
import NavBar from './NavBar.vue'
</script>

<template>
    <div class="relative w-full min-h-screen bg-[#E5E3D4]">
        <nav-bar/>
        <div class="flex flex-col w-full min-h-screen bg-transparent sm:flex-row">
            <router-view />
        </div>
    </div>
</template>