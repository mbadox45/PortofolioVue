<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { skills } from '@/api/DummyData';
    import { useRoute } from 'vue-router';
    import { skillElements } from '@/api/TransitionEffect';

    const title2 = ref('Skills');
    const skill = ref(skills)
    const route = useRoute();
    const frontend = ref();
    const backend = ref();
    const database = ref();

    onMounted(() => {
        loadSkill();
        mainFunc()
        animates();
    })

    const animates = async () => {
        return await skillElements();
    };

    const loadSkill = async() => {
        frontend.value = skill.value.filter(item => item.type == 'fe');
        backend.value = skill.value.filter(item => item.type == 'be');
        database.value = skill.value.filter(item => item.type == 'dll');
    }

    const mainFunc = async() => {
        console.log(route.query.country);
        if (route.query.country == null) {
            title2.value = "Skills"
        } else {
            title2.value = "Skills"
        }
    }

    watch(
        () => route.query.country, mainFunc, { immediate: true } // This ensures `mainFunc` is run initially on mount
    );

</script>

<template>
    <section class="relative flex flex-col items-center justify-center w-full gap-[3rem] min-h-screen">
        <span class="w-full text-6xl font-black text-center text-black uppercase underline-offset-8">{{title2}}</span>
        <div class="flex items-start justify-center w-full px-[5rem] gap-5">
            <div class="flex flex-col items-center w-full bg-white shadow-lg rounded-xl fe-skill-section">
                <span class="flex items-center justify-between w-full gap-2 px-[2rem] py-[2rem] text-green-300 bg-black rounded-t-xl"><span class="text-2xl font-bold text">Front End</span> <span class="px-4 py-2 font-medium text-black bg-green-300 rounded-full"> Technologies</span></span>
                <div class="grid items-center justify-center w-full grid-cols-3 gap-8 icon-skill-section py-[2rem]">
                    <div class="flex justify-center w-full" v-for="(item, index) in frontend" :key="index">
                        <img :src="`/iconskill/${item.img}.png`" :alt="item.name" class="p-3 transition-all duration-300 bg-transparent cursor-pointer rounded-3xl hover:bg-[#E5E3D4]" v-tooltip.top="item.name" width="80px">
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center w-full bg-white shadow-lg rounded-xl be-skill-section">
                <span class="flex items-center justify-between w-full gap-2 px-[2rem] py-[2rem] text-green-300 bg-black  rounded-t-xl"><span class="text-2xl font-bold text">Back End</span> <span class="px-4 py-2 font-medium text-black bg-green-300 rounded-full"> Technologies</span></span>
                <div class="grid items-center justify-center w-full grid-cols-3 gap-8 icon-skill-section py-[2rem]">
                    <div class="flex justify-center w-full" v-for="(item, index) in backend" :key="index">
                        <img :src="`/iconskill/${item.img}.png`" :alt="item.name" class="p-3 transition-all duration-300 bg-transparent cursor-pointer rounded-3xl hover:bg-[#E5E3D4]" v-tooltip.top="item.name" width="80px">
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center w-full bg-white shadow-lg rounded-xl oth-skill-section">
                <span class="flex items-center justify-between w-full gap-2 px-[2rem] py-[2rem] text-green-300 bg-black  rounded-t-xl"><span class="text-2xl font-bold text">Others</span> <span class="px-4 py-2 font-medium text-black bg-green-300 rounded-full"> Technologies</span></span>
                <div class="grid items-center justify-center w-full grid-cols-3 gap-8 icon-skill-section py-[2rem]">
                    <div class="flex justify-center w-full" v-for="(item, index) in database" :key="index">
                        <img :src="`/iconskill/${item.img}.png`" :alt="item.name" class="p-3 transition-all duration-300 bg-transparent cursor-pointer rounded-3xl hover:bg-[#E5E3D4]" v-tooltip.top="item.name" width="80px">
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute w-full py-[1.5rem] bottom-0 bg-black"></div>
    </section>
</template>