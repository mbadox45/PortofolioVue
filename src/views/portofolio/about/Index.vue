<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import AboutMe from './components/AboutMe.vue'
    import SkillMe from './components/SkillMe.vue'
    import ExperienceMe from './components/ExperienceMe.vue'
    
    const route = useRoute();

    const bagian = ref(0)

    onMounted(() => {

    })


</script>

<template>
    <div class="flex flex-col items-center w-full bg-transparent ">
        <!-- <div class="flex flex-col"> -->
            <!-- About -->
            <about-me/>
            <!-- Skills -->
            <skill-me/>
            <!-- Experience -->
            <experience-me/>
        <!-- </div> -->
        <!-- <div class="absolute w-full bottom-[4rem] py-4">
            <div class="flex px-[5rem] justify-end gap-3" v-if="bagian == 0">
                <button @click="bagian=2" class="p-4 border-2 border-[#1C325B] text-[#1C325B] rounded-full flex gap-2 items-center justify-center transition-all duration-300 hover:text-white hover:bg-[#1C325B] font-bold"><i class="pi pi-chevron-left"></i></button>
                <button @click="bagian=1" class="p-4 border-2 border-[#1C325B] text-[#1C325B] rounded-full flex gap-2 items-center justify-center transition-all duration-300 hover:text-white hover:bg-[#1C325B] font-bold"><i class="pi pi-chevron-right"></i></button>
            </div>
            <div class="flex px-[5rem] justify-end gap-3" v-else-if="bagian == 1">
                <button @click="bagian=0" class="p-4 border-2 border-[#1C325B] text-[#1C325B] rounded-full flex gap-2 items-center justify-center transition-all duration-300 hover:text-white hover:bg-[#1C325B] font-bold"><i class="pi pi-chevron-left"></i></button>
                <button @click="bagian=2" class="p-4 border-2 border-[#1C325B] text-[#1C325B] rounded-full flex gap-2 items-center justify-center transition-all duration-300 hover:text-white hover:bg-[#1C325B] font-bold"><i class="pi pi-chevron-right"></i></button>
            </div>
            <div class="flex px-[5rem] justify-end gap-3" v-else>
                <button @click="bagian=1" class="p-4 border-2 border-[#1C325B] text-[#1C325B] rounded-full flex gap-2 items-center justify-center transition-all duration-300 hover:text-white hover:bg-[#1C325B] font-bold"><i class="pi pi-chevron-left"></i></button>
                <button @click="bagian=0" class="p-4 border-2 border-[#1C325B] text-[#1C325B] rounded-full flex gap-2 items-center justify-center transition-all duration-300 hover:text-white hover:bg-[#1C325B] font-bold"><i class="pi pi-chevron-right"></i></button>
            </div>
        </div> -->
        <!-- <div class="absolute w-full py-[1.5rem] bottom-0 bg-black"></div> -->
    </div>
</template>