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
const cv = ref('');
const experience = ref(0);

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
        cv.value = 'https://www.canva.com/design/DAGNkU8pfAo/7NDZbWlr_f8wCqPvsJUL7g/edit?utm_content=DAGNkU8pfAo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    } else {
        title.value = "Halo Saya";
        listbottom.value = listBottomIndo;
        desc.value = descIndo;
        cv.value = 'https://www.canva.com/design/DAGXHVjy8C4/vUj5OSPHNv_KW5JKsDQ5Lg/edit?utm_content=DAGXHVjy8C4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    }
};

// Watch the query parameter "country"
watch(
    () => route.query.country,
    mainFunc,
    { immediate: true }
);

const link = (item) => {
    window.open(item);
}

// GSAP Animation Function
const animates = async () => {
    return await homeElements();
};
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full gap-5 sm:flex-row align-center px-[3.5rem] bg-transparent rounded-b-xl ">
        <div class="flex flex-col w-full h-auto gap-5 p-8 text-black">
            <div class="flex items-center">
                <div class="flex items-center gap-3 px-6 py-3 bg-black rounded-full ">
                    <div class="p-2 bg-green-300 rounded-full"></div>
                    <span class="text-xl font-bold text-green-300 capitalize">Software Engineer</span>
                </div>
            </div>
            <div class="flex flex-col gap-2 title-section">
                <span class="text-6xl font-bold capitalize">{{ title }}</span>
                <span class="text-6xl font-bold capitalize">Rio Teguh Ardiarta</span>
            </div>
            <p class="text-xl text-black desc-section">{{ desc }}</p>
            <div class="flex flex-row items-center justify-between w-full gap-10 text-black">
                <button class="flex flex-row items-center justify-center w-1/2 gap-3 p-3 font-bold transition-all duration-300 border-2 border-black rounded hover:bg-green-800 hover:text-white hover:border-green-800" @click="link(cv)">
                    Download CV <i class="font-bold pi pi-download"></i>
                </button>
                <div class="flex items-center justify-start w-full gap-10">
                    <div
                        class="flex items-center justify-center px-4 py-2 text-6xl cursor-pointer icon-section"
                        v-for="(item, index) in listicon"
                        :key="index"
                        v-tooltip.top="item.name"
                        @click="link(item.routes)"
                    >
                        <i :class="`pi ${item.icon} hover:text-green-800 transition-all duration-300`" style="font-size:20px;"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end w-full p-8">
            <div class="rounded-full border-[4px] border-green-300 shadow-md shadow-green-300 icon-section">
                <img src="/gambar4.png" alt="Rio Teguh" class="bg-white border-black rounded-full border-[15px] shadow-white shadow-inner " width="380px">
            </div>
        </div>
        <div class="absolute w-full px-[6.5rem] bottom-0 center-0 bottom-section bg-black">
            <div class="flex items-center justify-between gap-8 text-white">
                <div class="flex items-center justify-center w-auto gap-3 py-[30px]" v-for="(item, index) in listbottom" :key="index">
                    <span class="text-6xl font-black text-green-300">{{ item.name }}</span>
                    <Divider layout="vertical" />
                    <span class="text-2xl">{{ item.ket }}</span>
                </div>
            </div>
        </div>
    </div>
</template>