<template>
  <div class="d-drawer h-full">
    <input id="main-drawer" type="checkbox" class="d-drawer-toggle" />
    <div class="d-drawer-content flex flex-col h-full">
      <header class="d-navbar bg-base-300 w-full">
        <div class="flex-none lg:hidden">
          <label
            for="main-drawer"
            aria-label="open sidebar"
            class="d-btn d-btn-square d-btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 px-2">Navbar Title</div>
        <div class="hidden flex-none lg:block">
          <ul class="d-menu d-menu-horizontal">
            <li><a>Navbar Item 1</a></li>
            <li><a>Navbar Item 2</a></li>
          </ul>
        </div>
      </header>

      <main class="flex flex-col flex-1 bg-base-200">
        <div class="d-hero">
          <div class="d-hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold">Hello there</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="d-btn d-btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>

      <footer
        class="d-footer sm:d-footer-horizontal bg-neutral text-neutral-content p-10"
      >
        <nav>
          <h6 class="d-footer-title">Services</h6>
          <a class="d-link d-link-hover">Branding</a>
          <a class="d-link d-link-hover">Design</a>
          <a class="d-link d-link-hover">Marketing</a>
          <a class="d-link d-link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 class="d-footer-title">Company</h6>
          <a class="d-link d-link-hover">About us</a>
          <a class="d-link d-link-hover">Contact</a>
          <a class="d-link d-link-hover">Jobs</a>
          <a class="d-link d-link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 class="d-footer-title">Legal</h6>
          <a class="d-link d-link-hover">Terms of use</a>
          <a class="d-link d-link-hover">Privacy policy</a>
          <a class="d-link d-link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>

    <div class="d-drawer-side">
      <label
        for="main-drawer"
        aria-label="close sidebar"
        class="d-drawer-overlay"
      ></label>
      <ul class="d-menu bg-base-200 min-h-full w-80 p-4">
        <li><a>Sidebar Item 1</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
