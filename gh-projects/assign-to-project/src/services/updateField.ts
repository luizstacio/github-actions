import { graphql } from '@octokit/graphql';
import { ProjectV2 } from '@octokit/graphql-schema';
import { transformQuery } from '~/utils/field';
import { headers } from '~/utils/headers';

export async function updateFields(project: ProjectV2, itemId: string, fields: any) {
  await graphql(
    `
    mutation (
      $projectId: ID!
      $itemId: ID!
    ) {
      ${Object.keys(fields).map(
        (key, index) => `
        arg_${index}: updateProjectV2ItemFieldValue(input: {
          projectId: $projectId
          itemId: $itemId
          ${transformQuery(project, key, fields[key])}
        }) {
          projectV2Item {
            id
          }
        }
      `
      )}
    }
  `,
    {
      projectId: project.id,
      itemId,
      headers: headers(),
    }
  );
}
