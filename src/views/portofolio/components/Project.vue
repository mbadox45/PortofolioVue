<script setup>
    import { onMounted, ref, watch } from 'vue';
</script>
<template>
    <div class="flex flex-col justify-center items-center w-full min-h-screen px-[3rem] gap-[5rem]">
        <span class="font-mono text-4xl font-light text-center text-white underline uppercase underline-offset-8">My Project</span>
        <div class="flex justify-center w-full gap-7">
            <div class="w-full bg-yellow-600 rounded-xl h-[30rem] flex flex-col">
                <div class="h-[2rem] bg-white rounded-t-xl ">

                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full gap-5">
                <span class="text-3xl font-bold text-yellow-600">APP Name</span>
                <div class="flex justify-center gap-5">
                    <Button label="Github" severity="secondary" icon="pi pi-github" raised iconPos="right"  />
                    <Button label="Live Demo" severity="success" icon="pi pi-window-maximize" raised iconPos="right"  />
                </div>
            </div>
        </div>
    </div>
</template>