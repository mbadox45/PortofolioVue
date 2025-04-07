<script setup>
import { ref } from 'vue';

const listMenu = ref([
    { name: 'Home', icon: 'pi pi-home', link: '' },
    { name: 'About', icon: 'pi pi-id-card', link: '' },
    { name: 'Project', icon: 'pi pi-th-large', link: '' },
    { name: 'Contact Person', icon: 'pi pi-phone', link: '' }
]);

const hoveredIndex = ref(null);
</script>

<template>
    <div class="flex rounded-3xl min-w-6 text-[#2C3930] flex-col justify-between gap-8 bg-[#DCD7C9] px-2 opacity-40 py-10">
        <!-- <div class="flex flex-col w-full items-center gap-12">
            <div v-for="(list, index) in listMenu" :key="index" class="relative flex items-center justify-center group" @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
                <i :class="`${list.icon} text-[#2C3930] hover:text-[#A27B5C] transition-all duration-200`" style="font-size: 1.5vw"></i>

                <div v-if="hoveredIndex === index" class="absolute left-full ml-3 px-2 py-1 bg-black text-[#2C3930] text-sm rounded-md shadow-lg z-10 whitespace-nowrap transition-all duration-300">
                    {{ list.name }}
                </div>
            </div>
        </div>
        <img src="/rtas.png" alt="Mbadox45" class="rounded-full" width="50px" /> -->
    </div>
</template>
