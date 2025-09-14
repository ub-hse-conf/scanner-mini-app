/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserTask = {
    /**
     * ID задания
     */
    id: number;
    /**
     * Название задания
     */
    name: string;
    /**
     * Описание задания
     */
    description: string;
    /**
     * Задание еще можно выполнить
     */
    isAvailable: boolean;
    /**
     * Статус задания для пользователя
     */
    status: UserTask.status;
    /**
     * Тип задания
     */
    taskType: UserTask.taskType;
};
export namespace UserTask {
    /**
     * Статус задания для пользователя
     */
    export enum status {
        IN_PROGRESS = 'IN_PROGRESS',
        DONE = 'DONE',
    }
    /**
     * Тип задания
     */
    export enum taskType {
        BASIC_TASK = 'BASIC_TASK',
        BE_REAL = 'BE_REAL',
    }
}

