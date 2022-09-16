import * as core from '@actions/core';
import * as getProject from '~/services/getProject';

import getProjectJSON from './mocks/getProject.json';

beforeAll(() => {
  jest.spyOn(core, 'getInput').mockImplementation((name: string) => {
    switch (name) {
      case 'app_id':
        return 'testAppId';
      case 'private_key':
        return 'testPrivateKey';
      case 'organization':
        return 'testFooOrg';
      case 'project_number':
        return 'number123';
      case 'object_id':
        return 'objectId';
      case 'fields':
        return 'Status,Number field, Text field, Date field';
      case 'values':
        return 'In Progress, 1, Test Text, 2022-09-16T20:07:31.954Z';
      default:
        return '';
    }
  });
  jest.spyOn(getProject, 'getProject').mockImplementation(async () => getProjectJSON as any);
});
