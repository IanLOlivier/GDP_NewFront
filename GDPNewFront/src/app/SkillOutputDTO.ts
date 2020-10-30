import { EmployeeMatchDTO } from './EmployeeMatchDTO';

export class SkillOutput {
    skill_description: string;
    employee_skill_arr: Array<EmployeeMatchDTO> = Array<EmployeeMatchDTO>();
}
