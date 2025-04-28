import { ref } from 'vue';

const ATTRIBUTE = 'data-theme';
enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const isDarkTheme = ref(false);

const useTheme = () => {
  const isSetuped = document.documentElement.hasAttribute(ATTRIBUTE);

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;

    if (isDarkTheme.value) {
      document.documentElement.setAttribute(ATTRIBUTE, Theme.Dark);
      localStorage.setItem('theme', Theme.Dark);
    } else {
      document.documentElement.setAttribute(ATTRIBUTE, Theme.Light);
      localStorage.setItem('theme', Theme.Light);
    }
  };

  if (!isSetuped) {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === Theme.Dark || (!savedTheme && prefersDark)) {
      isDarkTheme.value = true;
      document.documentElement.setAttribute(ATTRIBUTE, Theme.Dark);
    } else {
      isDarkTheme.value = false;
      document.documentElement.setAttribute(ATTRIBUTE, Theme.Light);
    }
  }

  return {
    isDarkTheme,
    toggleTheme,
  };
};

export { useTheme };
