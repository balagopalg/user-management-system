import { Injectable } from '@nestjs/common';
import { initialiseDbConnections } from 'utils/typeorm/typeorm-handler';
import { fetchQueryResults } from 'utils/typeorm/typeorm-helpers';

@Injectable()
export class ProjectService {
  async create(createProjectInput: any) {
    await initialiseDbConnections();
    return 'This action adds a new project';
  }

  async projectDashboard(): Promise<IProjectDashboardResponse[]> {
    await initialiseDbConnections();
    const projects = await fetchQueryResults('projects', [], 'is_active', '1');
    return projects;
  }
}
