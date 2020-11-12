import { EmployeeMatchDTO } from './EmployeeMatchDTO';

export class SkillOutputDTO {
    skill: string;
    employeeSkillList: Array<EmployeeMatchDTO> = Array<EmployeeMatchDTO>();
}
