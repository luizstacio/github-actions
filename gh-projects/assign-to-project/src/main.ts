import * as core from '@actions/core';
import { assignProjectAction } from './actions/assignProject';

async function main(): Promise<void> {
  try {
    await assignProjectAction();
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

main();
