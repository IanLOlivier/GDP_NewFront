import { SkillOutputDTO } from './SkillOutputDTO';
import { EmployeeMatchDTO } from './EmployeeMatchDTO';
import { EmployeeWithSkillsDTO } from './EmployeeWithSkillsDTO';

export interface TeamResponseDTO {

  skillOutputDTO: Array<SkillOutputDTO>;
  employeeSkills: Array<EmployeeWithSkillsDTO>;

}
