<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import AboutMe from './components/AboutMe.vue';
import ExperienceMe from './components/ExperienceMe.vue';
import SkillMe from './components/SkillMe.vue';

const route = useRoute();

const bagian = ref(0);

onMounted(() => {});
</script>

<template>
    <div class="flex flex-col items-center w-full bg-transparent">
        <!-- About -->
        <about-me />
        <!-- Skills -->
        <skill-me />
        <!-- Experience -->
        <experience-me />
    </div>
</template>
