<script setup>
import MainNavigation from './MainNavigation.vue';
import Logo from './LogoLink.vue';
import TopNavigation from './TopNavigation.vue';
</script>

<template>
    <header class="nav-main" id="nav-main" aria-label="navigatie-header">
        <div class="nav-main__skip-links mb-3">
            <a
                href="#navigatie-overslaan"
                class="list__link link--no-underline"
            >
                Navigatie overslaan
            </a>
        </div>
        <div class="nav-main__grid container">
            <Logo />

            <TopNavigation />

            <MainNavigation />
        </div>
        <a
            id="navigatie-overslaan"
            name="navigatie-overslaan"
            tabindex="-1"
        ></a>
    </header>
</template>
