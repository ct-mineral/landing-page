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
  <main class="contact-page">
    <section class="contact-hero">
      <div class="page-container hero-grid">
        <div>
          <span class="eyebrow">
            <span class="status-dot" aria-hidden="true"></span>
            Fale com o CT Mineral
          </span>
          <h1>Conecte sua instituição ao nosso <em>ecossistema de inovação.</em></h1>
          <p>
            Entre em contato com nossa equipe ou solicite uma visita técnica para conhecer a
            infraestrutura, os laboratórios e os projetos do Polo de Inovação.
          </p>
        </div>

        <div class="contact-details">
          <a href="mailto:ctmineral@ifrn.edu.br">
            <small>E-mail</small>
            <strong>ctmineral@ifrn.edu.br</strong>
          </a>
          <a href="https://wa.me/558440054117" target="_blank" rel="noopener noreferrer">
            <small>Telefone / WhatsApp</small>
            <strong>+55 (84) 4005-4117</strong>
          </a>
          <div>
            <small>Localização</small>
            <strong>Currais Novos · Rio Grande do Norte</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="visit-section">
      <div class="page-container">
        <div class="section-heading">
          <span class="section-tag">Visita técnica</span>
          <h2>Solicite sua visita ao CT Mineral</h2>
          <p>
            Preencha o formulário com as informações necessárias para que nossa equipe possa
            planejar e avaliar a visita pretendida.
          </p>
        </div>

        <div class="visit-grid">
          <aside class="visit-guidelines">
            <span class="guidelines-tag">Antes de solicitar</span>
            <h3>Planeje sua visita com antecedência</h3>
            <p>
              Recebemos instituições de ensino, empresas e organizações interessadas em conhecer
              nossa estrutura e nossos projetos.
            </p>

            <div class="deadline">
              <strong>30 dias</strong>
              <span>de antecedência mínima</span>
            </div>

            <h4>Informações importantes</h4>
            <ul>
              <li>O agendamento depende da disponibilidade da equipe e dos laboratórios.</li>
              <li>Grupos numerosos poderão ser divididos em subgrupos.</li>
              <li>É obrigatório utilizar calças compridas e calçados fechados.</li>
              <li>Instituições de ensino devem informar a escolaridade dos participantes.</li>
              <li>Leve apenas pertences essenciais, pois não há guarda-volumes.</li>
            </ul>

            <p class="guidelines-footnote">
              Após o envio, nossa equipe entrará em contato para confirmar o agendamento ou fornecer
              orientações adicionais.
            </p>
          </aside>

          <div class="form-shell">
            <div class="form-heading">
              <span>Dados da solicitação</span>
              <h3>Conte-nos sobre a visita</h3>
              <p>Todos os campos obrigatórios devem ser preenchidos.</p>
            </div>

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
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  --green: #0e544a;
  --green-hover: #107465;
  --green-soft: #eaf4f2;
  --orange: #e65100;
  --orange-soft: #fff3eb;
  --ink: #1d2927;
  --muted: #5f6d6a;
  --line: #dce5e2;
  --surface: #f6f9f8;
  color: var(--ink);
  overflow: hidden;
}

.page-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.contact-hero {
  position: relative;
  padding: 88px 0 76px;
  background:
    radial-gradient(circle at 92% 5%, rgba(14, 84, 74, 0.12), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfa 100%);
}

.contact-hero::before {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(14, 84, 74, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.28;
  content: '';
  pointer-events: none;
  mask-image: linear-gradient(to right, black, transparent 55%);
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(340px, 0.82fr);
  gap: 76px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  gap: 9px;
  align-items: center;
  margin-bottom: 24px;
  padding: 7px 12px;
  border: 1px solid rgba(14, 84, 74, 0.24);
  border-radius: 4px;
  background: var(--green-soft);
  color: var(--green);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.055em;
  text-transform: uppercase;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 4px rgba(14, 84, 74, 0.1);
}

.contact-hero h1 {
  max-width: 790px;
  margin: 0 0 24px;
  font-size: clamp(2.35rem, 4.3vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.06;
}

.contact-hero h1 em {
  display: block;
  color: var(--green);
  font-style: normal;
}

.contact-hero p {
  max-width: 700px;
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.contact-details {
  display: grid;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 20px 50px rgba(20, 58, 51, 0.1);
  backdrop-filter: blur(8px);
}

.contact-details > a,
.contact-details > div {
  min-height: 88px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--line);
  color: inherit;
  text-decoration: none;
}

.contact-details > div:last-child {
  border-bottom: 0;
}

.contact-details small,
.contact-details strong {
  display: block;
}

.contact-details small {
  margin-bottom: 5px;
  color: var(--orange);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.contact-details strong {
  font-size: 0.9rem;
  line-height: 1.45;
}

.contact-details a:hover strong {
  color: var(--green);
}

.visit-section {
  padding: 92px 0;
  background: var(--surface);
}

.section-heading {
  max-width: 720px;
  margin-bottom: 48px;
}

.section-tag {
  display: block;
  margin-bottom: 12px;
  color: var(--orange);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3.2vw, 2.65rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

.section-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.visit-grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr);
  gap: 28px;
  align-items: start;
}

.visit-guidelines {
  padding: 30px 28px;
  border: 1px solid var(--line);
  border-top: 4px solid var(--green);
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
}

.guidelines-tag {
  display: block;
  margin-bottom: 10px;
  color: var(--orange);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.visit-guidelines h3 {
  margin: 0 0 14px;
  font-size: 1.35rem;
  line-height: 1.3;
}

.visit-guidelines > p {
  margin: 0;
  color: var(--muted);
  font-size: 0.87rem;
  line-height: 1.7;
}

.deadline {
  margin: 25px 0;
  padding: 18px;
  border-radius: 5px;
  background: var(--orange-soft);
}

.deadline strong,
.deadline span {
  display: block;
}

.deadline strong {
  margin-bottom: 3px;
  color: var(--orange);
  font-size: 1.45rem;
}

.deadline span {
  color: #744526;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.visit-guidelines h4 {
  margin: 0 0 14px;
  font-size: 0.87rem;
}

.visit-guidelines ul {
  display: grid;
  gap: 11px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.visit-guidelines li {
  position: relative;
  padding-left: 18px;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.55;
}

.visit-guidelines li::before {
  position: absolute;
  top: 7px;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  content: '';
}

.visit-guidelines .guidelines-footnote {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  font-size: 0.74rem;
}

.form-shell {
  padding: 34px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 12px 35px rgba(25, 64, 57, 0.06);
}

.form-heading {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line);
}

.form-heading > span {
  display: block;
  margin-bottom: 7px;
  color: var(--orange);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.form-heading h3 {
  margin: 0 0 6px;
  font-size: 1.4rem;
}

.form-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.form-shell :deep(.v-field) {
  border-radius: 5px;
}

.form-shell :deep(.v-label) {
  color: var(--muted);
}

.form-shell :deep(.v-btn) {
  min-height: 48px;
  border-radius: 5px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: none;
}

.form-shell :deep(.v-card) {
  border-color: var(--line);
  border-radius: 5px;
  box-shadow: none;
}

.shift-error-card {
  border-color: rgb(var(--v-theme-error)) !important;
}

@media (max-width: 960px) {
  .hero-grid,
  .visit-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .contact-details {
    max-width: 560px;
  }
}

@media (max-width: 600px) {
  .page-container {
    width: min(100% - 32px, 1180px);
  }

  .contact-hero {
    padding: 52px 0;
  }

  .contact-hero::before {
    display: none;
  }

  .contact-hero h1 {
    font-size: 2.25rem;
  }

  .visit-section {
    padding: 68px 0;
  }

  .visit-guidelines,
  .form-shell {
    padding: 26px 22px;
  }
}
</style>
