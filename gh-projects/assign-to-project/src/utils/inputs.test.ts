import { getAssignProjectsInput } from './inputs';

describe('Inputs utils testing', () => {
  it('getAssignProjectsInput', async () => {
    const assignProjectInput = getAssignProjectsInput();

    expect(assignProjectInput).toEqual({
      appId: 'testAppId',
      privateKey: 'testPrivateKey',
      organization: 'testFooOrg',
      projectNumber: 'number123',
      objectId: 'objectId',
      fields: {
        Status: 'In Progress',
        'Number field': '1',
        'Text field': 'Test Text',
        'Date field': '2022-09-16T20:07:31.954Z',
      },
    });
  });
});
