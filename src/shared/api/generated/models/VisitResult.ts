/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from './Activity.ts';
import type { Company } from './Company.ts';
export type VisitResult = {
    /**
     * Информция о посещенном объекте
     */
    target: (Activity | Company);
    /**
     * Тип посещенного объекта
     */
    targetType: VisitResult.targetType;
};
export namespace VisitResult {
    /**
     * Тип посещенного объекта
     */
    export enum targetType {
        COMPANY = 'COMPANY',
        ACTIVITY = 'ACTIVITY',
    }
}

