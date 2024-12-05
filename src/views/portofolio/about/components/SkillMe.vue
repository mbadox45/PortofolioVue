<script setup>
import { skills } from '@/api/DummyData';
import { skillElements } from '@/api/TransitionEffect';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const title2 = ref('Skills');
const skill = ref(skills);
const route = useRoute();
const frontend = ref();
const backend = ref();
const database = ref();

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);


onMounted(() => {
    // loadSkill();
    mainFunc();
    animates();
});

const animates = async () => {
    return await skillElements();
};

// const loadSkill = async () => {
//     frontend.value = skill.value.filter((item) => item.type == 'fe');
//     backend.value = skill.value.filter((item) => item.type == 'be');
//     database.value = skill.value.filter((item) => item.type == 'dll');
// };

const mainFunc = async () => {
    console.log(route.query.country);
    if (route.query.country == null) {
        title2.value = 'Skills';
    } else {
        title2.value = 'Skills';
    }
};

watch(
    () => route.query.country,
    mainFunc,
    { immediate: true } // This ensures `mainFunc` is run initially on mount
);

</script>

<template>
    <section id="skill" class="relative flex flex-col items-center justify-center w-full gap-[4rem]">
        <span class="w-full text-6xl font-black text-center text-black uppercase underline-offset-8 title-skill">{{ title2 }}</span>
        <div class="w-full p-5">
            <Carousel :value="skill" :numVisible="7" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" class="icon-section">
                <template #item="slotProps">
                    <div class="flex justify-center p-4 m-2 transition-all duration-300 bg-white rounded shadow cursor-pointer hover:shadow-xl">
                        <div class="flex flex-col gap-3">
                            <img :src="`/iconskill/${slotProps.data.img}.png`" :alt="slotProps.data.name" class="p-3 transition-all duration-300 bg-transparent rounded-3xl" width="100px" />
                            <span class="text-lg font-bold text-center">{{slotProps.data.name}}</span>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
        <!-- <div class="flex items-start justify-center w-full px-[5rem] gap-5">
            <div class="flex flex-col items-center w-full bg-white shadow-lg rounded-xl fe-skill-section">
                <span class="flex items-center justify-between w-full gap-2 px-[2rem] py-[2rem] text-green-300 bg-black rounded-t-xl"
                    ><span class="text-2xl font-bold text">Front End</span> <span class="px-4 py-2 font-medium text-black bg-green-300 rounded-full"> Technologies</span></span
                >
                <div class="grid items-center justify-center w-full grid-cols-3 gap-8 icon-skill-section py-[2rem]">
                    <div class="flex justify-center w-full" v-for="(item, index) in frontend" :key="index">
                        <img :src="`/iconskill/${item.img}.png`" :alt="item.name" class="p-3 transition-all duration-300 bg-transparent cursor-pointer rounded-3xl hover:bg-[#E5E3D4]" v-tooltip.top="item.name" width="80px" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center w-full bg-white shadow-lg rounded-xl be-skill-section">
                <span class="flex items-center justify-between w-full gap-2 px-[2rem] py-[2rem] text-green-300 bg-black rounded-t-xl"
                    ><span class="text-2xl font-bold text">Back End</span> <span class="px-4 py-2 font-medium text-black bg-green-300 rounded-full"> Technologies</span></span
                >
                <div class="grid items-center justify-center w-full grid-cols-3 gap-8 icon-skill-section py-[2rem]">
                    <div class="flex justify-center w-full" v-for="(item, index) in backend" :key="index">
                        <img :src="`/iconskill/${item.img}.png`" :alt="item.name" class="p-3 transition-all duration-300 bg-transparent cursor-pointer rounded-3xl hover:bg-[#E5E3D4]" v-tooltip.top="item.name" width="80px" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center w-full bg-white shadow-lg rounded-xl oth-skill-section">
                <span class="flex items-center justify-between w-full gap-2 px-[2rem] py-[2rem] text-green-300 bg-black rounded-t-xl"
                    ><span class="text-2xl font-bold text">Others</span> <span class="px-4 py-2 font-medium text-black bg-green-300 rounded-full"> Technologies</span></span
                >
                <div class="grid items-center justify-center w-full grid-cols-3 gap-8 icon-skill-section py-[2rem]">
                    <div class="flex justify-center w-full" v-for="(item, index) in database" :key="index">
                        <img :src="`/iconskill/${item.img}.png`" :alt="item.name" class="p-3 transition-all duration-300 bg-transparent cursor-pointer rounded-3xl hover:bg-[#E5E3D4]" v-tooltip.top="item.name" width="80px" />
                    </div>
                </div>
            </div>
        </div> -->
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
