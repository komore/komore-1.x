import { feature, thrown } from '@komore/testing';

import { gitCliVersionLineToVersionName } from './git-cli-version-line-to-version-name';

feature('Git CLI version line to version name', {
  'returns a Git version ame, given a version line'() {
    given: 'a Git version line';
    const versionLine = 'git version 2.34.5.windows.6';

    when: 'getting the version name';
    const versionName = gitCliVersionLineToVersionName(versionLine);

    then: 'the version name is returned';
    versionName === '2.34.5.windows.6';
  },
  'throws an error if the version line is not recognized'() {
    given: 'an unrecognized Git version line';
    const versionLine = 'incorrect version line 2.34.5.windows.6';

    when: 'getting the version name';
    gitCliVersionLineToVersionName(versionLine);

    expect: 'an error to be thrown';
    const e = thrown(Error);
    e.message === 'unsupported Git CLI version line "2.34.5.windows.6"';
  },
});
