/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Task = {
    /**
     * ID задания
     */
    id: number;
    /**
     * Тип задания
     */
    type: Task.type;
    /**
     * Время длительности задания
     */
    duration?: string;
    /**
     * Название задания
     */
    name: string;
    /**
     * Состояние задания
     */
    status: Task.status;
    /**
     * Описание задания
     */
    description: string;
    /**
     * Баллы за выполнение
     */
    points: number;
};
export namespace Task {
    /**
     * Тип задания
     */
    export enum type {
        PERMANENT = 'PERMANENT',
        TEMP = 'TEMP',
    }
    /**
     * Состояние задания
     */
    export enum status {
        READY = 'READY',
        IN_PROCESS = 'IN_PROCESS',
        FINISHED = 'FINISHED',
    }
}

