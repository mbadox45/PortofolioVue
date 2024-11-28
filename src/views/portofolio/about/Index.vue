<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { descAbEng, descAbInd, expEng, expInd, skills } from '@/api/DummyData';
    import { useRoute } from 'vue-router';
    import { resumeElements } from '@/api/TransitionEffect';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    
    const route = useRoute();

    const desc = ref(descAbEng)
    const title = ref('About Me');
    const title2 = ref('Skills');
    const title3 = ref('Work Experiences');

    const events = ref(expEng);

    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    const skill = ref(skills)

    onMounted(() => {
        mainFunc()
        animates()
        initScrollAnimations()
    })

    const mainFunc = () => {
        console.log(route.query.country);
        if (route.query.country == null) {
            title.value = "About Me"
            title2.value = "Skills"
            title3.value = "Work Experiences"
            desc.value = descAbEng
            events.value = expEng
        } else {
            title.value = "Tentang Saya"
            title2.value = "Keahlian"
            title3.value = "Pengalaman Bekerja"
            desc.value = descAbInd
            events.value = expInd
        }
    }

    // Watch the query parameter "country"
    watch(
        () => route.query.country, mainFunc, { immediate: true } // This ensures `mainFunc` is run initially on mount
    );

    const animates = async () => {
        return await resumeElements();
    };

    const initScrollAnimations = () => {
        // Animasi untuk setiap section
        const sections = document.querySelectorAll('section');

        sections.forEach((section) => {
            // gsap.from(section, {
            //     opacity: 0,
            //     y: 50,
            //     duration: 1,
            //     scrollTrigger: {
            //         trigger: section,
            //         start: 'top 80%', // Mulai animasi saat 80% dari viewport
            //         end: 'top 30%', // Selesai animasi saat 30% dari viewport
            //         toggleActions: 'play none none reverse', // Animasi akan terulang saat di-scroll kembali
            //     },
            // });
            gsap.from(section, {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%', // Mulai animasi saat 80% dari viewport
                    end: 'top 30%', // Selesai animasi saat 30% dari viewport
                    toggleActions: 'play none none reverse', // Animasi akan terulang saat di-scroll kembali
                },
            });
        });
    };

</script>

<template>
    <div class="flex items-center w-full bg-transparent rounded-b-xl">
        <div class="flex flex-col">
            <!-- About -->
            <section class="flex items-center justify-center w-full min-h-screen gap-0 border-b-2 border-yellow-600">
                <div class="flex justify-center w-full">
                    <img src="/gambar.png" alt="Rio Teguh" class="bg-white shadow-inner border-[20px] border-black rounded-full shadow-gray-600 photo-image" width="400px">
                </div>
                <div class="flex flex-col w-full gap-8 pr-[5rem] rounded-xl">
                    <span class="font-mono text-6xl font-light text-white underline uppercase underline-offset-8">{{title}}</span>
                    <p class="p-5 font-mono text-justify text-gray-600 bg-white desc-section">{{desc}}</p>
                    <small class="text-xl font-bold text-yellow-600 name-section">Rio Teguh Ardiarta</small>
                </div>
            </section>
            <!-- Skills -->
            <section class="flex flex-col min-h-screen items-center justify-center w-full gap-[6rem] px-[4rem] border-b-2 border-yellow-600">
                <span class="w-full font-mono text-6xl font-light text-center text-white underline uppercase underline-offset-8">{{title2}}</span>
                <div class="grid items-center justify-center w-full grid-cols-4">
                    <div class="p-3" v-for="(item, index) in skill" :key="index">
                        <div class="flex items-center w-full gap-5 p-3 text-white transition-all border-2 cursor-pointer rounded-xl hover:text-gray-900 hover:bg-white">
                            <img :src="`/iconskill/${item.img}.png`" :alt="item.name" class="p-1 bg-white border-2 border-gray-900 rounded-full" width="50px">
                            <div class="w-full font-mono text-lg font-bold">{{item.name}}</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Experience -->
            <section class="flex flex-col min-h-screen items-center justify-center w-full gap-[6rem] py-[5rem] px-[4rem] border-b-2 border-yellow-600">
                <span class="w-full font-mono text-6xl font-light text-center text-white underline uppercase underline-offset-8">{{title3}}</span>
                <Timeline :value="events" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="z-10 flex items-center justify-center w-8 h-8 text-white rounded-full shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card class="w-full mt-4">
                            <template #title>
                                <span class="font-mono font-bold uppercase">{{ slotProps.item.status }}</span>
                            </template>
                            <template #subtitle>
                                <i class="mr-2 text-yellow-600 pi pi-calendar"></i>
                                <span>{{ slotProps.item.date }}</span>    
                                <!-- <div class="">
                                </div> -->
                            </template>
                            <template #content>
                                <div class="flex flex-col w-full" v-if="slotProps.item.items.length > 0 ">
                                    <div class="flex flex-col items-center w-full" v-for="(item, index) in slotProps.item.items" :key="index" >
                                        <div class="flex">
                                            <span class="w-full font-mono text-sm">{{item.name}}</span>
                                        </div>
                                        <Divider/>
                                    </div>
                                </div>
                            </template>
                        </Card>
                    </template>
                </Timeline>
            </section>
        </div>
    </div>
</template>