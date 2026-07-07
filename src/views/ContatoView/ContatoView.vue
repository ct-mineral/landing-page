<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

type ContactFormState = {
  responsibleName: string
  institution: string
  role: string
  desiredDate: string
  preferredShift: 'Manhã' | 'Tarde' | ''
  objective: string
  visitorsCount: string
  visitorEducation: string
  phone: string
  email: string
}

const WEB3FORMS_ACCESS_KEY = 'fd96d967-52d0-4a50-b3ea-71be0f3c6145'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

const formRef = ref<{
  validate: () => Promise<{ valid: boolean }>
  reset: () => void
} | null>(null)
const route = useRoute()
const isSubmitting = ref(false)
const shiftTouched = ref(false)
const submitMessage = ref('')
const submitError = ref('')

const form = reactive<ContactFormState>({
  responsibleName: '',
  institution: '',
  role: '',
  desiredDate: '',
  preferredShift: '',
  objective: '',
  visitorsCount: '',
  visitorEducation: '',
  phone: '',
  email: '',
})

const shiftOptions = ['Manhã', 'Tarde'] as const

const formattedSelectedShift = computed(() => form.preferredShift || 'Não informado')
const submissionSucceeded = computed(() => route.query.sent === '1')
const shiftHasError = computed(() => shiftTouched.value && !form.preferredShift)

function getSuccessRedirectUrl() {
  if (typeof window === 'undefined') {
    return '/contato?sent=1'
  }

  return `${window.location.origin}/contato?sent=1`
}

async function submitForm() {
  if (!formRef.value) {
    return
  }

  shiftTouched.value = true

  const { valid } = await formRef.value.validate()

  if (!valid) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''
  submitError.value = ''

  try {
    const tempForm = document.createElement('form')
    tempForm.method = 'POST'
    tempForm.action = WEB3FORMS_ENDPOINT
    tempForm.style.display = 'none'

    const fields: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Novo pedido de visita recebido pelo site',
      from_name: form.responsibleName,
      nome_responsavel: form.responsibleName,
      instituicao: form.institution,
      cargo: form.role,
      data_pretendida: form.desiredDate,
      turno_preferencia: form.preferredShift,
      objetivo_visita: form.objective,
      quantidade_visitantes: form.visitorsCount,
      escolaridade_visitantes: form.visitorEducation,
      telefone_contato: form.phone,
      email_contato: form.email,
      replyto: form.email,
      redirect: getSuccessRedirectUrl(),
    }

    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value
      tempForm.appendChild(input)
    }

    document.body.appendChild(tempForm)
    tempForm.submit()
  } catch (error) {
    submitError.value =
      error instanceof Error ? error.message : 'Erro inesperado ao enviar o formulário.'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (submissionSucceeded.value) {
    submitMessage.value = 'Solicitação enviada com sucesso. Entraremos em contato em breve.'
  }
})
</script>

<template>
  <v-container class="py-12 py-md-16">
    <v-row justify="center">
      <v-col cols="12" lg="10" xl="9">
        <div class="contact-shell pa-6 pa-md-10 rounded-lg">
          <div class="mb-6">
            <p class="text-overline text-teal-darken-2 font-weight-bold mb-2">Contato</p>
            <h1 class="text-h4 text-md-h3 font-weight-bold text-teal-darken-4 mb-4">
              Solicite sua visita ao CT Mineral
            </h1>
            <p class="text-body-1 text-grey-darken-2">
              Preencha o formulário abaixo com as informações da visita pretendida.
            </p>
          </div>

          <v-card flat class="mb-6 pa-6">
            <div class="d-flex flex-column ga-4">
              <div>
                <p class="text-body-1 text-grey-darken-3 mb-2">
                  O <strong>CT Mineral</strong> recebe instituições de ensino, empresas e demais
                  organizações interessadas em conhecer sua infraestrutura, laboratórios e projetos
                  desenvolvidos. Para solicitar uma visita técnica, o responsável deverá preencher o
                  formulário abaixo com as informações solicitadas.
                </p>
                <p class="text-body-1 text-teal-darken-2 font-weight-bold mb-0">
                  Para possibilitar o adequado planejamento da visita, as solicitações devem ser
                  realizadas com <strong>antecedência mínima de 30 dias</strong> em relação à data
                  pretendida.
                </p>
              </div>

              <div>
                <p class="text-subtitle-2 text-grey-darken-4 font-weight-bold mb-3">
                  Informações importantes:
                </p>
                <ul class="text-body-2 text-grey-darken-3 pl-4">
                  <li class="mb-2">
                    O agendamento da visita está sujeito à disponibilidade da equipe e dos
                    laboratórios na data solicitada.
                  </li>
                  <li class="mb-2">
                    Para garantir a segurança e a organização das atividades, grupos com grande
                    número de participantes poderão ser divididos em subgrupos durante a visita.
                  </li>
                  <li class="mb-2">
                    Todos os visitantes deverão utilizar
                    <strong>calças compridas e calçados fechados</strong>
                    para acesso aos laboratórios.
                  </li>
                  <li class="mb-2">
                    Caso a visita seja destinada a uma instituição de ensino, informe a escolaridade
                    dos participantes para que a programação possa ser adequada ao público.
                  </li>
                  <li>
                    Solicitamos que os visitantes levem apenas os pertences essenciais, uma vez que
                    o CT Mineral não dispõe de guarda-volumes.
                  </li>
                </ul>
              </div>

              <p class="text-body-2 text-grey-darken-3 mb-0">
                Após o envio do formulário, nossa equipe analisará a solicitação e entrará em
                contato pelos meios informados para confirmar o agendamento ou fornecer orientações
                adicionais.
              </p>
            </div>
          </v-card>

          <v-alert v-if="submitMessage" type="success" variant="tonal" class="mb-6">
            {{ submitMessage }}
          </v-alert>

          <v-alert v-if="submitError" type="error" variant="tonal" class="mb-6">
            {{ submitError }}
          </v-alert>

          <v-form ref="formRef" @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.responsibleName"
                  name="nome_responsavel"
                  label="Nome do responsável"
                  variant="outlined"
                  color="teal-darken-3"
                  :rules="[(value) => !!value || 'Informe o nome do responsável']"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.institution"
                  name="instituicao"
                  label="Instituição"
                  variant="outlined"
                  color="teal-darken-3"
                  :rules="[(value) => !!value || 'Informe a instituição']"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.role"
                  name="cargo"
                  label="Cargo"
                  variant="outlined"
                  color="teal-darken-3"
                  :rules="[(value) => !!value || 'Informe o cargo']"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.desiredDate"
                  name="data_pretendida"
                  label="Data pretendida"
                  type="date"
                  variant="outlined"
                  color="teal-darken-3"
                  :rules="[(value) => !!value || 'Informe a data pretendida']"
                  required
                />
              </v-col>

              <v-col cols="12">
                <v-card
                  variant="outlined"
                  class="pa-4 pa-md-5"
                  :class="{ 'shift-error-card': shiftHasError }"
                >
                  <div class="d-flex flex-column ga-3">
                    <span
                      class="text-body-1 font-weight-medium"
                      :class="shiftHasError ? 'text-error' : 'text-grey-darken-3'"
                    >
                      Turno de preferência
                    </span>
                    <v-radio-group
                      v-model="form.preferredShift"
                      name="turno_preferencia"
                      @update:modelValue="shiftTouched = true"
                      inline
                      color="teal-darken-3"
                      :error="shiftHasError"
                      :error-messages="shiftHasError ? ['Selecione um turno'] : []"
                      :rules="[(value) => !!value || 'Selecione um turno']"
                      required
                    >
                      <v-radio
                        v-for="shift in shiftOptions"
                        :key="shift"
                        :label="shift"
                        :value="shift"
                      />
                    </v-radio-group>
                  </div>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="form.objective"
                  name="objetivo_visita"
                  label="Objetivo da visita"
                  variant="outlined"
                  color="teal-darken-3"
                  rows="4"
                  auto-grow
                  counter
                  :rules="[(value) => !!value || 'Descreva o objetivo da visita']"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.visitorsCount"
                  name="quantidade_visitantes"
                  label="Quantidade de visitantes"
                  type="number"
                  min="1"
                  variant="outlined"
                  color="teal-darken-3"
                  :rules="[(value) => !!value || 'Informe a quantidade de visitantes']"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.visitorEducation"
                  name="escolaridade_visitantes"
                  label="Escolaridade dos visitantes"
                  hint="Se for uma instituição escolar"
                  persistent-hint
                  variant="outlined"
                  color="teal-darken-3"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.phone"
                  name="telefone_contato"
                  label="Telefone para contato"
                  variant="outlined"
                  color="teal-darken-3"
                  :rules="[(value) => !!value || 'Informe um telefone para contato']"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  name="email_contato"
                  label="E-mail para contato"
                  type="email"
                  variant="outlined"
                  color="teal-darken-3"
                  :rules="[
                    (value) => !!value || 'Informe um e-mail para contato',
                    (value) => /.+@.+\..+/.test(value) || 'Informe um e-mail válido',
                  ]"
                  required
                />
              </v-col>

              <v-col cols="12" class="d-flex flex-column flex-md-row align-md-center ga-4">
                <v-btn
                  type="submit"
                  size="large"
                  color="teal-darken-3"
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                  class="px-8"
                >
                  Enviar solicitação
                </v-btn>

                <div class="text-body-2 text-grey-darken-1">
                  Turno selecionado: <strong>{{ formattedSelectedShift }}</strong>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.contact-shell {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(244, 250, 248, 0.96) 100%),
    radial-gradient(circle at top left, rgba(16, 116, 101, 0.1), transparent 28%),
    radial-gradient(circle at bottom right, rgba(245, 124, 0, 0.09), transparent 25%);
  border: 1px solid rgba(16, 116, 101, 0.12);
  box-shadow: 0 24px 60px rgba(18, 40, 38, 0.08);
}

.shift-error-card {
  border-color: rgb(var(--v-theme-error)) !important;
}
</style>
