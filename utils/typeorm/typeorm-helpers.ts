import { toCamelCase } from 'utils/utils';
import { dataSource } from './typeorm-handler';

export const fetchQueryResults = async <T>(
  tableName: string,
  columns: string[],
  searchBy: string,
  searchByValue: string | number,
): Promise<any[]> => {
  const searchByKey = `${searchBy}`;
  let queryBuilder = dataSource
    .createQueryBuilder()
    .select(`${columns}`)
    .from(tableName, 'a');
  if (searchByKey)
    queryBuilder = queryBuilder.where(`${searchByKey} = :value`, {
      value: `${String(searchByValue)}`,
    });
  const infoRes = await queryBuilder.getRawMany();
  return !infoRes ? [] : infoRes.map((item) => toCamelCase(item));
};
