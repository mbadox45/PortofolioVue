<script setup>
import { expEng, expInd } from '@/api/DummyData';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { experienceElements, detailJobsElements, detailJobsOutElements } from '@/api/TransitionEffect';

const route = useRoute();

const title3 = ref('Work Experiences');
const events = ref(expEng);
const possition = ref([])
const title_job = ref('')
const show = ref(false)
const id = ref(null)
const cssOptions = ref('w-full py-5 pl-[3rem] pr-[3rem] hover:pr-[1.5rem] flex justify-between items-center cursor-pointer text-green-300 transition-all duration-300 hover:border-4 hover:border-black hover:bg-green-300 hover:text-black bg-black rounded-2xl')
const cssOptionsActive = ref('w-full py-5 pl-[3rem] pr-[1.5rem] flex justify-between items-center cursor-pointer border-4 border-black bg-green-300 text-black rounded-2xl')

onMounted(() => {
    mainFunc();
    animates()
});

const mainFunc = () => {
    if (route.query.country == null) {
        title3.value = 'Work Experiences';
        events.value = expEng;
    } else {
        title3.value = 'Pengalaman Bekerja';
        events.value = expInd;
    }
};

const animates = async () => {
    return await experienceElements();
};

// Watch the query parameter "country"
watch(
    () => route.query.country,
    mainFunc,
    { immediate: true } // This ensures `mainFunc` is run initially on mount
);

const loadData = async(item, indeks) => {
    if (title_job.value == item.status) {
        show.value = !show.value
    } else {
        show.value = true
    }
    if (show.value == true) {
        id.value = indeks
    } else {
        id.value = null
    }
    possition.value = item.possition
    title_job.value = item.status
    console.log(item, indeks)
}
</script>

<template>
    <section id="experience" class="flex flex-col items-center justify-center w-full gap-[3rem] px-[5rem]">
        <span class="w-full text-6xl font-black text-center text-black uppercase title-experience">{{ title3 }}</span>
        <div class="flex w-full gap-2">
            <div class="w-2/3">
                <ScrollPanel class="bg-transparent h-[30rem] w-full py-5 px-[1rem]">
                    <div class="flex flex-col justify-start w-full h-full gap-6 job-experience">
                        <div v-for="(item, index) in events" :key="index" @click="loadData(item, index)" :class="index == id ? cssOptionsActive : cssOptions">
                            <span class="text-xl font-black">{{item.status}}</span>
                            <i class="font-black pi pi-arrow-right" style="font-size:18px"></i>
                        </div>
                    </div>
                </ScrollPanel>
            </div>
            <div class="flex justify-center w-full h-full p-5">
                <div class="w-full detail-experience" v-if="show == true">
                    <div class="flex flex-col w-full gap-3 p-5 bg-black border-4 border-black shadow-lg shadow-green-300 rounded-2xl desc-experience">
                        <span class="w-full text-2xl font-bold text-white">{{title_job}}</span>
                        <div class="flex flex-col w-full gap-6">
                            <div v-for="(item, index) in possition" :key="index" class="flex flex-col w-full gap-2">
                                <span class="flex items-center justify-between w-full gap-2 font-black text-green-300"><span>{{item.icon}}</span><small>{{item.date}}</small></span>
                                <ul class="px-4 text-black list-disc border-t border-gray-500">
                                    <li v-for="(subItem, subIndex) in item.items" :key="subIndex" class="text-green-500">
                                        <span class="text-justify">{{ subItem.name }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="flex flex-col w-full px-[4rem] pb-[5rem]">
            <div class="flex items-center w-full" v-for="(item, index) in events" :key="index" :class="index % 2 === 1 ? 'justify-end flex-row' : 'justify-start flex-row-reverse'">
                <div class="w-full text-2xl font-black tracking-wide text-green-300" :class="index % 2 === 1 ? 'text-right' : ''">
                    <span class="py-3 font-mono text-black bg-green-300 px-7 border-y-4" :class="index % 2 === 1 ? 'rounded-l-full border-l-4 border-black' : 'rounded-r-full border-r-4 border-black'">{{ item.status }}</span>
                </div>
                <div class="w-full text-green-300 transition-all bg-black border-4 border-black rounded-2xl">
                    <div class="w-full border-2 border-green-300 rounded-xl">
                        <div class="flex flex-col justify-center w-full gap-3 p-[2rem]" v-for="(post, indexes) in item.possition" :key="indexes">
                            <div class="flex items-start justify-between w-full font-bold tracking-wide text-md">
                                <div class="flex flex-col gap-2">
                                    <span class="flex items-center w-auto gap-2 text-xl">
                                        <span class="p-1 bg-green-300"></span> <span>{{ post.icon }}</span></span
                                    >
                                    <div class="w-auto">
                                        <small class="px-3 py-1 text-black capitalize bg-green-300 rounded-full">{{ post.color }}</small>
                                    </div>
                                </div>
                                <small class="w-auto text-right">{{ post.date }}</small>
                            </div>
                            <ul class="px-4 pt-3 mt-3 text-white list-disc border-t border-gray-700">
                                <li v-for="(subItem, subIndex) in post.items" :key="subIndex">
                                    <span>{{ subItem.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </section>
</template>
<style scoped>
@keyframes slidedown-icon {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0);
    }
}

.slidedown-icon {
    animation: slidedown-icon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
</style>
