import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { logger } from 'utils/winston';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projectDashboard' })
  async projectDashboard(): Promise<any> {
    try {
      const projects = await this.projectService.projectDashboard();
      return projects;
    } catch (err) {
      logger.error('Project Dashboard ***', err);
    }
  }
}
