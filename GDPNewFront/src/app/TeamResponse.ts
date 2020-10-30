import { SkillOutput } from './SkillOutputDTO';
import { EmployeeMatchDTO } from './EmployeeMatchDTO';
import { EmployeeWithSkillsDTO } from './EmployeeWithSkillsDTO';

export interface TeamResponseDTO {

  skillOutput: Array<SkillOutput>;
  employeeSkills: Array<EmployeeWithSkillsDTO>;

}
