import { Column, Entity, Index } from 'typeorm';

/**
 * Created on: 26-01-2024.
 * Last Updated: 26-01-2024.
 * Description: Modules or departments
 */

@Entity('projects', { schema: 'user-management-system' })
export class Projects {
  @Column('int', { primary: true, name: 'id', generated: 'increment' })
  @Index('Project_IDX_1')
  id?: number;

  @Column('varchar', { name: 'name', nullable: false, length: 100 })
  name?: string;

  @Column('varchar', { name: 'description', nullable: true, length: 250 })
  description: number;

  @Column('varchar', { name: 'status', nullable: true, length: 20 })
  accountCategory?: string;

  @Column('tinyint', {
    name: 'is_active',
    nullable: false,
    width: 1,
    default: 0,
  })
  isActive: boolean;

  // Timestamp of record creation
  @Column('bigint', { name: 'created_on', nullable: true })
  timestamp?: number;

  @Column('bigint', { name: 'last_updated', nullable: true })
  lastUpdated?: number;

  @Column('int', { name: 'created_by', nullable: false })
  fundCode: number;
}
