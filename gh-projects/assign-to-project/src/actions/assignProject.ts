import { assignProject, getProject, updateFields } from '~/services';
import { getAssignProjectsInput } from '~/utils';

export async function assignProjectAction() {
  const { projectNumber, organization, objectId, fields } = getAssignProjectsInput();

  console.log('Fetching project', projectNumber, 'from', organization);
  const project = await getProject(organization, projectNumber);

  console.log('Assign project', project.id, 'to object id', objectId);
  const itemId = await assignProject(project.id, objectId);

  console.log('Updating fields from item', itemId);
  if (!Object.keys(fields).length) {
    console.log('No fields to update!');
    return;
  } else {
    await updateFields(project, itemId, fields);
  }

  console.log('Done!');
}
