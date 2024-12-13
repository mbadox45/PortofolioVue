<script setup>
import { imgDescEng, imgDescInd } from '@/api/DummyData';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const skill = ref(imgDescEng);
const visible = ref(false);
const titles = ref('');
const pagename = ref('My Projects');
const datas = ref(null);

const route = useRoute();

onMounted(() => {
    mainFunc();
});

const mainFunc = () => {
    if (route.query.country == null) {
        skill.value = imgDescEng;
        pagename.value = 'My Projects';
    } else {
        skill.value = imgDescInd;
        pagename.value = 'Projek Saya';
    }
};

const showDetailProject = (item) => {
    visible.value = true;
    titles.value = item.title;
    datas.value = item;
};

watch(() => route.query.country, mainFunc, { immediate: true });
</script>

<template>
    <div class="relative flex flex-col items-center justify-center w-full min-h-screen px-[3rem] py-[8rem] bg-transparent gap-[4.5rem]">
        <span class="w-full text-6xl font-black text-center text-black uppercase">{{ pagename }}</span>
        <div class="grid w-full grid-cols-4 gap-10">
            <div class="flex items-center justify-center w-full" v-for="(item, index) in skill" :key="index">
                <div class="relative h-[10rem] w-full cursor-pointer border-8 shadow-xl shadow-gray-500 border-black rounded-3xl overflow-hidden bg-black flex justify-center items-center group" @click="showDetailProject(item)">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out bg-black group-hover:translate-x-full">
                        <div class="flex items-center justify-center w-full h-full text-3xl font-bold text-green-300">
                            <img src="/rta.png" alt="Mbadox45" class="p-2 bg-green-300 rounded-full" width="60px" />
                        </div>
                    </div>
                    <div class="absolute inset-0 transition-transform duration-500 ease-out translate-x-full bg-green-300 group-hover:translate-x-0">
                        <div class="flex items-center justify-center w-full h-full text-3xl font-bold text-black">
                            <span> {{ item.title }} </span>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog v-model:visible="visible" modal :header="titles" :style="{ width: '80rem' }">
                <div class="flex items-stretch gap-5">
                    <div class="flex flex-col w-full h-full gap-3">
                        <div class="w-full h-[20rem] rounded-xl bg-black"></div>
                    </div>
                    <div class="relative flex flex-col w-full gap-5 px-8">
                        <div class="flex flex-col gap-2">
                            <span class="text-2xl font-bold">Descriptions : </span>
                            <span class="font-medium text-justify">{{ datas.desc }}</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="font-bold">Technology : </span>
                            <div class="flex w-full gap-3">
                                <small class="px-3 py-2 font-mono font-bold text-green-300 bg-black rounded-full" v-for="(item, index) in datas.tech" :key="index">{{ item }}</small>
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 flex items-center justify-center w-full gap-3">
                            <button class="flex items-center gap-2 px-4 py-2 transition-all duration-300 bg-white border rounded-lg shadow hover:bg-gray-700 hover:text-white">Github <i class="pi pi-github"></i></button>
                            <button class="flex items-center gap-2 px-4 py-2 text-white bg-gray-700 border rounded-lg shadow hover:bg-gray-500">Live Demo <i class="pi pi-search"></i></button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
        <div class="absolute flex flex-col w-full py-[1.5rem] bottom-0 bg-black"></div>
    </div>
</template>
