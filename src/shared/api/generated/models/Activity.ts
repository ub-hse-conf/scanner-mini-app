/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Visitable } from './Visitable.ts';
export type Activity = (Visitable & {
    /**
     * ID активности
     */
    id?: number;
    /**
     * Название активности
     */
    name?: string;
    /**
     * Описание активности
     */
    description?: string;
    /**
     * Тип активности
     */
    activityType?: Activity.activityType;
    /**
     * Место проведения активности
     */
    location?: string;
    /**
     * Время начала
     */
    startTime?: string;
    /**
     * Время окончания
     */
    endTime?: string;
    /**
     * Баллы за выполнения ивента
     */
    points?: number;
} & {
    /**
     * ID активности
     */
    id: number;
    /**
     * Название активности
     */
    name: string;
    /**
     * Описание активности
     */
    description: string;
    /**
     * Тип активности
     */
    activityType: Activity.activityType;
    /**
     * Место проведения активности
     */
    location: string;
    /**
     * Время начала
     */
    startTime: string;
    /**
     * Время окончания
     */
    endTime: string;
    /**
     * Баллы за выполнения ивента
     */
    points: number;
});
export namespace Activity {
    /**
     * Тип активности
     */
    export enum activityType {
        LECTURE = 'LECTURE',
        CONTEST = 'CONTEST',
        WORKSHOP = 'WORKSHOP',
    }
}

