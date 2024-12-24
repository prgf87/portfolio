import { projects } from './schemas/projects';
import { experience } from './schemas/experience';
import { pageInfo } from './schemas/pageInfo';
import { skill } from './schemas/skill';
import { social } from './schemas/social';

export const schema = {
  types: [pageInfo, skill, projects, experience, social],
};
