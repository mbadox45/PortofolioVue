<script setup>
    import { onMounted, ref, watch } from 'vue';
</script>
<template>
    <div class="flex flex-col justify-center items-center w-full bg-gray-900 rounded-b-xl px-[3rem] gap-[5rem]">
        <span class="font-mono text-4xl font-light text-center text-white underline uppercase underline-offset-8">My Project</span>
        <div class="flex justify-center w-full gap-7">
            <div class="w-full bg-yellow-600 rounded-xl h-[30rem] flex flex-col">
                <div class="h-[2rem] bg-white rounded-t-xl ">

                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full gap-[5rem] py-[2rem] px-[5rem] h-full">
                <div class="flex flex-col items-center justify-center w-full h-full gap-5">
                    <span class="text-3xl font-bold text-yellow-600">APP Name</span>
                    <p class="font-mono text-justify text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum quaerat, molestias aliquid, soluta facilis minus accusantium eum perferendis quisquam unde? Sed, culpa ipsa hic necessitatibus et dicta eaque magni.</p>
                </div>
                <div class="flex flex-col items-center w-full h-full gap-3">
                    <span class="text-gray-400">Technology :</span>
                    <div class="flex justify-center gap-3">
                        <span class="p-3 transition-all bg-white rounded-full cursor-pointer hover:text-white hover:bg-yellow-600">Vue JS</span>
                        <span class="p-3 transition-all bg-white rounded-full cursor-pointer hover:text-white hover:bg-yellow-600">Laravel</span>
                        <span class="p-3 transition-all bg-white rounded-full cursor-pointer hover:text-white hover:bg-yellow-600">PostgreSQL</span>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-full gap-5">
                    <Button label="Github" severity="secondary" icon="pi pi-github" raised iconPos="right"  />
                    <Button label="Live Demo" severity="success" icon="pi pi-window-maximize" raised iconPos="right"  />
                </div>
            </div>
        </div>
    </div>
</template>