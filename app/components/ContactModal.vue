<script setup lang="ts">
const { t } = useI18n()
const { isOpen } = useContactModal()
const toast = useToast()

const state = reactive({
  name: '',
  organization: '',
  email: '',
  message: ''
})

const submitting = ref(false)

function resetForm() {
  state.name = ''
  state.organization = ''
  state.email = ''
  state.message = ''
}

async function onSubmit() {
  submitting.value = true
  await new Promise(resolve => setTimeout(resolve, 400))
  submitting.value = false
  isOpen.value = false
  toast.add({
    title: t('contactModal.toastTitle'),
    description: t('contactModal.toastDescription'),
    color: 'success',
    icon: 'i-lucide-check'
  })
  resetForm()
}
</script>

<template>
  <UModal v-model:open="isOpen" :title="t('contactModal.title')" :description="t('contactModal.description')">
    <template #body>
      <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
        <UFormField :label="t('contactModal.nameLabel')" required>
          <UInput v-model="state.name" :placeholder="t('contactModal.namePlaceholder')" class="w-full" required />
        </UFormField>

        <UFormField :label="t('contactModal.organizationLabel')">
          <UInput v-model="state.organization" :placeholder="t('contactModal.organizationPlaceholder')" class="w-full" />
        </UFormField>

        <UFormField :label="t('contactModal.emailLabel')" required>
          <UInput v-model="state.email" type="email" :placeholder="t('contactModal.emailPlaceholder')" class="w-full" required />
        </UFormField>

        <UFormField :label="t('contactModal.messageLabel')">
          <UTextarea v-model="state.message" :placeholder="t('contactModal.messagePlaceholder')" class="w-full" :rows="3" />
        </UFormField>

        <UButton type="submit" block :loading="submitting" trailing-icon="i-lucide-arrow-right">
          {{ t('contactModal.submit') }}
        </UButton>
      </form>
    </template>
  </UModal>
</template>
