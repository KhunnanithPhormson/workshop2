<template>
  <div>
    <Card>
      <form
        action="#"
        class="grid grid-cols-1 gap-4"
        @submit.prevent="onSubmit"
      >
        <input id="email" type="email" name="email" />
        <input id="password" type="password" name="password" />
        <button>{{ $t('login') }}</button>
      </form>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});

useSEO({
  title: 'Login',
});

// const { signIn } = useSession();

const onSubmit = (e: { target: HTMLFormElement | undefined }) => {
  const data = new FormData(e.target);
  const email = data.get('email');
  const password = data.get('password');
};
</script>
