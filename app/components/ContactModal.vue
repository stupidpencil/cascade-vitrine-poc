<script setup lang="ts">
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
    title: 'Merci !',
    description: 'Votre demande a bien été reçue, nous vous répondrons rapidement.',
    color: 'success',
    icon: 'i-lucide-check'
  })
  resetForm()
}
</script>

<template>
  <UModal v-model:open="isOpen" title="Demander une démo" description="Parlez-nous de votre lieu ou collectif, nous revenons vers vous rapidement.">
    <template #body>
      <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
        <UFormField label="Nom" required>
          <UInput v-model="state.name" placeholder="Votre nom" class="w-full" required />
        </UFormField>

        <UFormField label="Organisation">
          <UInput v-model="state.organization" placeholder="Lieu, collectif, coopérative…" class="w-full" />
        </UFormField>

        <UFormField label="Email" required>
          <UInput v-model="state.email" type="email" placeholder="vous@exemple.org" class="w-full" required />
        </UFormField>

        <UFormField label="Message">
          <UTextarea v-model="state.message" placeholder="Quelques mots sur votre besoin…" class="w-full" :rows="3" />
        </UFormField>

        <UButton type="submit" block :loading="submitting" trailing-icon="i-lucide-arrow-right">
          Envoyer la demande
        </UButton>
      </form>
    </template>
  </UModal>
</template>
