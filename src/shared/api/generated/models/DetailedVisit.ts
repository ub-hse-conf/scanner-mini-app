/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from './Activity.ts';
import type { Company } from './Company.ts';
export type DetailedVisit = {
    /**
     * Посещенный объект
     */
    target: (Activity | Company);
    /**
     * Тип посещенного объекта
     */
    type: DetailedVisit.type;
};
export namespace DetailedVisit {
    /**
     * Тип посещенного объекта
     */
    export enum type {
        COMPANY = 'COMPANY',
        ACTIVITY = 'ACTIVITY',
    }
}

