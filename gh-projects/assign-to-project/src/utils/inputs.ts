import * as core from '@actions/core';

export interface AssignProjectInput {
  appId: string;
  privateKey: string;
  organization: string;
  projectNumber: string;
  objectId: string;
  fields: {
    [key: string]: string;
  };
}

export function fromGHInput(
  keys: string,
  values: string
): {
  [key: string]: string;
} {
  const fields = keys.split(',');
  const fieldValues = values.split(',');

  return fields.reduce(
    (ret, field, index) => ({
      ...ret,
      [field.trim()]: fieldValues[index].trim(),
    }),
    {}
  );
}

export function getAssignProjectsInput(): AssignProjectInput {
  const appId = core.getInput('app_id');
  const privateKey = core.getInput('private_key');
  const organization = core.getInput('organization');
  const projectNumber = core.getInput('project_number');
  const objectId = core.getInput('object_id');
  const fieldsString = core.getInput('fields');
  const valuesString = core.getInput('values');
  const fields = fromGHInput(fieldsString, valuesString);

  return {
    appId,
    privateKey,
    organization,
    projectNumber,
    objectId,
    fields,
  };
}
