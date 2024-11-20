<script setup>
import { onMounted, ref, watch } from 'vue';
import { gsap } from 'gsap'; // Import GSAP
import { listIcon, listBottomEnglish, listBottomIndo, descEng, descIndo } from '@/api/DummyData';
import { homeElements } from '@/api/TransitionEffect';
import { useRoute } from 'vue-router';

const route = useRoute();

const listicon = ref(listIcon);
const title = ref("Hello I'm");
const desc = ref(descEng);
const listbottom = ref(listBottomEnglish);

onMounted(() => {
    mainFunc();
    animates();
});

// Function to handle dynamic content
const mainFunc = () => {
    console.log(route.query.country);
    if (route.query.country == null) {
        title.value = "Hello I'm";
        listbottom.value = listBottomEnglish;
        desc.value = descEng;
    } else {
        title.value = "Halo Saya";
        listbottom.value = listBottomIndo;
        desc.value = descIndo;
    }
};

// Watch the query parameter "country"
watch(
    () => route.query.country,
    mainFunc,
    { immediate: true }
);

// GSAP Animation Function
const animates = async () => {
    return await homeElements();
};
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full gap-5 sm:flex-row align-center px-[3rem]">
        <div class="flex flex-col w-full h-auto gap-5 p-8 text-white">
            <span class="text-2xl font-medium text-yellow-600 underline capitalize underline-offset-4">Software Engineer</span>
            <div class="flex flex-col gap-2 title-section">
                <span class="text-6xl font-medium font-semibold capitalize">{{ title }}</span>
                <span class="text-6xl font-medium font-semibold capitalize">Rio Teguh Ardiarta</span>
            </div>
            <p class="text-xl text-gray-400 desc-section">{{ desc }}</p>
            <div class="flex flex-row items-center justify-between w-full gap-10 text-white">
                <button class="flex flex-row items-center justify-center w-1/2 gap-3 p-3 font-bold transition-all duration-300 border-2 rounded hover:bg-yellow-700 hover:border-yellow-700">
                    Download CV <i class="font-bold pi pi-download"></i>
                </button>
                <div class="flex items-center justify-start w-full gap-10">
                    <div
                        class="flex items-center justify-center px-4 py-2 text-6xl cursor-pointer icon-section"
                        v-for="(item, index) in listicon"
                        :key="index"
                        v-tooltip.top="item.name"
                    >
                        <i :class="`pi ${item.icon} hover:text-yellow-600 transition-all duration-300`" style="font-size:20px;"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end w-full">
            <img src="/gambar.png" alt="Rio Teguh" class="bg-white border-yellow-600 rounded-full border-[20px] shadow-gray-600 shadow-inner icon-section" width="400px">
        </div>
        <div class="absolute w-full px-[6.5rem] bottom-8 center-0 bottom-section">
            <div class="flex items-center justify-between gap-8 text-white">
                <div class="flex items-center justify-center w-auto gap-3 p-2 border-b-2" v-for="(item, index) in listbottom" :key="index">
                    <span class="text-6xl font-black text-yellow-600">{{ item.name }}</span>
                    <Divider layout="vertical" />
                    <span class="text-2xl">{{ item.ket }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
