<template>
  <div class="task-card__container">
    <BackButton
      class="task-card__back-button"
      @click="redirecToHome"
    >
      Voltar
    </BackButton>
    <h2 class="task-card__title">Tarefas</h2>

    <h3
      v-if="!tasks?.length"
      class="task-card__alert"
    >
      Não há tarefas cadastradas!
    </h3>
    <ul
      v-else
      class="task-card__task-list"
    >
      <ModuleTask
        v-for="(task, index) in tasks"
        :key="`module-task-${index}`"
        :task-id="task.taskId"
        :task-name="task.taskName"
        :is-completed="task.isCompleted"
      />
    </ul>
    <!-- <AppButton is-full>Ver mais</AppButton> -->
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";

import type { TasksCardProps } from "@/@types/views/Tasks";

// import AppButton from "@/components/app-button/AppButton.vue";
import BackButton from "@/components/back-button/BackButton.vue";
import ModuleTask from "../task/ModuleTask.vue";

const { tasks } = defineProps<TasksCardProps>();

const redirecToHome = () => router.push({ name: "dashboard" });
</script>

<style lang="scss" scoped>
.task-card__container {
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ffe500;
  background: #212121;
  padding: 24px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  .task-card__back-button {
    width: fit-content;
  }

  .task-card__title {
    color: #ffe500;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin-top: 24px;
  }

  .task-card__alert {
    margin: 48px;
    text-align: center;
  }

  .task-card__task-list {
    display: grid;
    gap: 36px;
    grid-template-columns: 1fr;
    margin: 24px 0 36px;
  }
}
</style>
