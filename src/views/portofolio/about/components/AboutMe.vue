<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { descAbEng, descAbInd } from '@/api/DummyData';
    import { useRoute } from 'vue-router';
    import { resumeElements, resumeOutElements } from '@/api/TransitionEffect';


    const desc = ref(descAbEng)
    const title = ref('About Me');

    const route = useRoute();

    onMounted(() => {
        mainFunc()
        animates()
    })

    const mainFunc = () => {
        if (route.query.country == null) {
            title.value = "About Me"
            desc.value = descAbEng
        } else {
            title.value = "Tentang Saya"
            desc.value = descAbInd
        }
    }

    const animates = async () => {
        return await resumeElements();
    };

    watch(
        () => route.query.country, mainFunc, animates, { immediate: true } // This ensures `mainFunc` is run initially on mount
    );
</script>

<template>
    <section id="about" class="relative flex items-center justify-center w-full h-full gap-0 this-section">
        <div class="flex justify-center w-full photo-image">
            <div class="relative rounded-full">
                <img src="/gambar5.png" alt="Rio Teguh" class="rounded-xl" width="400px">
                <div class="absolute bottom-[0%] left-[15%] p-[10rem] z-[-2] rounded-3xl bg-black border-r-[0.6rem] border-green-300"></div>
                <!-- <div class="absolute bottom-[40%] left-[13%] p-[6rem] z-[-1] rounded-full bg-green-300"></div> -->
            </div>
        </div>
        <div class="flex flex-col w-full gap-[3rem] pr-[5rem] rounded-xl">
            <span class="text-6xl font-black text-center text-black uppercase underline-offset-8">{{title}}</span>
            <p class="text-xl text-justify text-gray-500 desc-section">" {{desc}} "</p>
            <div class="flex items-center">
                <div class="flex items-center gap-3 px-6 py-3 bg-black rounded-full name-section">
                    <div class="p-1 bg-green-300 rounded-full"></div>
                    <small class="font-bold text-green-300 ">Rio Teguh Ardiarta</small>
                </div>
            </div>
        </div>
        <!-- <div class="absolute bottom-[5rem] animate-bounce rounded-full cursor-pointer" @click="animatesOut">
            <i class="p-3 font-black text-green-300 bg-black rounded-full pi pi-angle-double-down" style="font-size:30px;"/>
        </div> -->
        <!-- <div class="absolute w-full py-[1.5rem] bottom-0 bg-black"></div> -->
    </section>
</template>