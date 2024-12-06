<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import AboutMe from './components/AboutMe.vue';
import ExperienceMe from './components/ExperienceMe.vue';
import SkillMe from './components/SkillMe.vue';
import { resumeOutElements, skillOutElements, experienceOutElements } from '@/api/TransitionEffect';

const route = useRoute();

const bagian = ref(0);

onMounted(() => {
});

const animatesOut = async (val) => {
    const nilai = bagian.value;
    if (val == 0) {
        if (nilai == 1) {
            await skillOutElements();
            setTimeout(function() {
                bagian.value = val;
            }, 1300);
        } else {
            await experienceOutElements()
            setTimeout(function() {
                bagian.value = val;
            }, 1500);
        }
    } else if (val == 1) {
        if (nilai == 0) {
            await resumeOutElements();
            setTimeout(function() {
                bagian.value = val;
            }, 2300)
        } else {
            await experienceOutElements()
            setTimeout(function() {
                bagian.value = val;
            }, 1300)
        }
    } else {
        if (nilai == 1) {
            await skillOutElements();
            setTimeout(function() {
                bagian.value = val;
            }, 1300)
        } else {
            await resumeOutElements();
            setTimeout(function() {
                bagian.value = val;
            }, 2000)
        }
    }
    
};
</script>

<template>
    <div class="relative flex flex-col items-center justify-center w-full min-h-screen bg-transparent">
        <!-- About -->
        <about-me v-if="bagian == 0" />
        <!-- Skills -->
        <skill-me v-else-if="bagian == 1" />
        <!-- Experience -->
        <experience-me v-else />
        <div class="absolute bottom-0 flex flex-col bg-red-100 z-5">
        </div>
        <div class="absolute flex flex-col w-full py-[0.5rem] bottom-0 bg-black">
            <span class="w-full text-center text-white">Select Page :</span>
            <div class="flex items-center justify-center gap-2 h-14">
                <span class="flex items-center justify-center w-12 h-4 text-xl font-black text-transparent transition-all duration-300 bg-green-300 rounded-full cursor-pointer hover:text-black hover:h-12" @click="animatesOut(0)">1</span>
                <span class="flex items-center justify-center w-12 h-4 text-xl font-black text-transparent transition-all duration-300 bg-green-300 rounded-full cursor-pointer hover:text-black hover:h-12" @click="animatesOut(1)">2</span>
                <span class="flex items-center justify-center w-12 h-4 text-xl font-black text-transparent transition-all duration-300 bg-green-300 rounded-full cursor-pointer hover:text-black hover:h-12" @click="animatesOut(2)">3</span>
            </div>
        </div>
    </div>
</template>
