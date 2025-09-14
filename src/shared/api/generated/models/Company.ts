/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { Visitable } from './Visitable.ts';
export type Company = (Visitable & {
    /**
     * ID компании
     */
    id?: number;
    /**
     * Название компании
     */
    name?: string;
    /**
     * Описание компании
     */
    description?: string;
    /**
     * Ссылка на вакансию
     */
    vacanciesLink?: string;
} & {
    /**
     * ID компании
     */
    id: number;
    /**
     * Название компании
     */
    name: string;
    /**
     * Описание компании
     */
    description: string;
    /**
     * Ссылка на вакансию
     */
    vacanciesLink: string;
});

