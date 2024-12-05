<script setup>
import { expEng, expInd } from '@/api/DummyData';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title3 = ref('Work Experiences');
const events = ref(expEng);

onMounted(() => {
    mainFunc();
});

const mainFunc = () => {
    console.log(route.query.country);
    if (route.query.country == null) {
        title3.value = 'Work Experiences';
        events.value = expEng;
    } else {
        title3.value = 'Pengalaman Bekerja';
        events.value = expInd;
    }
};

// Watch the query parameter "country"
watch(
    () => route.query.country,
    mainFunc,
    { immediate: true } // This ensures `mainFunc` is run initially on mount
);
</script>

<template>
    <section id="experience" class="flex flex-col items-center justify-center w-full gap-[4rem] pt-[10rem]">
        <span class="w-full text-6xl font-black text-center text-black uppercase">{{ title3 }}</span>
        <div class="flex flex-col w-full px-[4rem] pb-[5rem]">
            <div class="flex items-center w-full" v-for="(item, index) in events" :key="index" :class="index % 2 === 1 ? 'justify-end flex-row' : 'justify-start flex-row-reverse'">
                <!-- <div class="w-auto"></div> -->
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
        </div>
        <!-- <div class="absolute w-full py-[1.5rem] bottom-0 bg-black"></div> -->
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
